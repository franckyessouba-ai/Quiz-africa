import type { User } from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  writeBatch,
  type Timestamp,
} from 'firebase/firestore';
import type {
  AvatarId,
  DuelChatMessage,
  DuelRoomSnapshot,
  DuelStatus,
  PlayerProfile,
} from '../types/quiz';
import { auth, db, handleFirestoreError, OperationType } from './firebase';

export interface FirestoreDuelRoomDoc {
  roomCode: string;
  hostUid: string;
  hostName: string;
  hostCountryCode: string;
  hostAvatar: AvatarId;
  guestUid: string;
  guestName: string;
  guestCountryCode: string;
  guestAvatar: AvatarId;
  isPublic: boolean;
  status: DuelStatus;
  hostScore: number;
  guestScore: number;
  winnerUid: string;
  isDraw: boolean;
  serverProof: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

function sanitizeRoomCode(raw: string): string {
  return raw.trim().toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 12);
}

function sanitizeName(name: string, fallback = 'Champion'): string {
  return (name || fallback).trim().slice(0, 28) || fallback;
}

function sanitizeCountry(code: string): string {
  const c = (code || '').trim().toUpperCase();
  return /^[A-Z]{2}$/.test(c) ? c : 'GA';
}

function sanitizeAvatar(val: AvatarId): AvatarId {
  return val === 'lion' || val === 'eagle' || val === 'panther' || val === 'footballer'
    ? val
    : 'lion';
}

function createMessageId(uid: string): string {
  const rand =
    typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID().replace(/-/g, '').slice(0, 12)
      : Math.random().toString(36).slice(2, 12);
  const safeUid = uid.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 16) || 'u';
  return `m_${Date.now()}_${safeUid}_${rand}`;
}

export async function syncParticipantDuelRoom(
  snapshot: DuelRoomSnapshot,
  profile: PlayerProfile,
  user: User | null = auth.currentUser
): Promise<void> {
  if (!user) return;
  const roomCode = sanitizeRoomCode(snapshot.roomCode);
  if (roomCode.length < 4) return;

  const uid = user.uid;
  const roomRef = doc(db, 'duels', roomCode);
  const roomPath = `duels/${roomCode}`;

  let existingSnap;
  try {
    existingSnap = await getDoc(roomRef);
    const isHostInWs = snapshot.hostId === profile.id;
    if (!existingSnap.exists() && !isHostInWs) {
      for (let attempt = 0; attempt < 6; attempt++) {
        await new Promise((r) => setTimeout(r, 350));
        existingSnap = await getDoc(roomRef);
        if (existingSnap.exists()) break;
      }
    }
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    if (
      msg.includes('client is offline') ||
      msg.includes('unavailable') ||
      msg.includes('network') ||
      msg.includes('The operation could not be completed')
    ) {
      console.warn('Firestore offline while syncing duel room, skipping sync pass.');
      return;
    }
    handleFirestoreError(error, OperationType.GET, roomPath);
  }

  if (!existingSnap) return;

  const isHostInWs = snapshot.hostId === profile.id;
  const safeName = sanitizeName(profile.name, 'Champion');
  const safeCountry = sanitizeCountry(profile.countryCode);
  const safeAvatar = sanitizeAvatar(profile.avatar);

  // 1. Room does not exist in Firestore yet -> Host creates room + host participant atomically
  if (!existingSnap.exists()) {
    if (!isHostInWs) return;
    const batch = writeBatch(db);
    batch.set(roomRef, {
      roomCode,
      hostUid: uid,
      hostName: safeName,
      hostCountryCode: safeCountry,
      hostAvatar: safeAvatar,
      guestUid: '',
      guestName: '',
      guestCountryCode: '',
      guestAvatar: 'lion',
      isPublic: Boolean(snapshot.isPublic),
      status: 'waiting',
      hostScore: 0,
      guestScore: 0,
      winnerUid: '',
      isDraw: false,
      serverProof: '',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    batch.set(doc(db, 'duels', roomCode, 'participants', uid), {
      uid,
      role: 'host',
      name: safeName,
      countryCode: safeCountry,
      avatar: safeAvatar,
      joinedAt: serverTimestamp(),
    });

    try {
      await batch.commit();
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      if (msg.includes('client is offline') || msg.includes('unavailable') || msg.includes('network')) {
        console.warn('Firestore offline while creating room doc, will sync once online.');
        return;
      }
      handleFirestoreError(error, OperationType.CREATE, roomPath);
    }
    return;
  }

  const roomData = existingSnap.data() as FirestoreDuelRoomDoc;

  // 2. Guest joining an open waiting Firestore duel room atomically
  if (
    roomData.status === 'waiting' &&
    roomData.guestUid === '' &&
    roomData.hostUid !== uid
  ) {
    const batch = writeBatch(db);
    batch.update(roomRef, {
      guestUid: uid,
      guestName: safeName,
      guestCountryCode: safeCountry,
      guestAvatar: safeAvatar,
      updatedAt: serverTimestamp(),
    });
    batch.set(doc(db, 'duels', roomCode, 'participants', uid), {
      uid,
      role: 'guest',
      name: safeName,
      countryCode: safeCountry,
      avatar: safeAvatar,
      joinedAt: serverTimestamp(),
    });

    try {
      await batch.commit();
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      if (msg.includes('client is offline') || msg.includes('unavailable') || msg.includes('network')) {
        console.warn('Firestore offline while joining room doc, will sync once online.');
        return;
      }
      handleFirestoreError(error, OperationType.UPDATE, roomPath);
    }
    return;
  }

  // 3. Only participants may update room status or results
  const isParticipant = roomData.hostUid === uid || roomData.guestUid === uid;
  if (!isParticipant || roomData.status === 'finished') return;

  if (snapshot.status === 'finished' && snapshot.serverProof && snapshot.serverProof.length >= 16) {
    const hostWsPlayer = snapshot.players.find((p) => p.id === snapshot.hostId);
    const guestWsPlayer = snapshot.players.find((p) => p.id !== snapshot.hostId);
    const hostScore = Math.max(0, Math.min(50000, Math.round(hostWsPlayer?.score || 0)));
    const guestScore = Math.max(0, Math.min(50000, Math.round(guestWsPlayer?.score || 0)));
    let winnerUid = '';
    if (!snapshot.isDraw && snapshot.winnerId) {
      winnerUid =
        snapshot.winnerId === snapshot.hostId ? roomData.hostUid : roomData.guestUid || '';
    }

    try {
      await updateDoc(roomRef, {
        status: 'finished',
        hostScore,
        guestScore,
        winnerUid,
        isDraw: Boolean(snapshot.isDraw),
        serverProof: snapshot.serverProof.slice(0, 128),
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      if (msg.includes('client is offline') || msg.includes('unavailable') || msg.includes('network')) {
        console.warn('Firestore offline while saving finished duel doc.');
        return;
      }
      handleFirestoreError(error, OperationType.UPDATE, roomPath);
    }
  } else if (
    snapshot.status !== roomData.status &&
    (snapshot.status === 'waiting' ||
      snapshot.status === 'countdown' ||
      snapshot.status === 'question' ||
      snapshot.status === 'reveal')
  ) {
    try {
      await updateDoc(roomRef, {
        status: snapshot.status,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      if (msg.includes('client is offline') || msg.includes('unavailable') || msg.includes('network')) {
        console.warn('Firestore offline while updating duel status.');
        return;
      }
      handleFirestoreError(error, OperationType.UPDATE, roomPath);
    }
  }
}

export function subscribeToDuelRoomDoc(
  rawRoomCode: string,
  onRoom: (room: FirestoreDuelRoomDoc | null) => void,
  onPermissionError?: (err: unknown) => void
): () => void {
  const user = auth.currentUser;
  const roomCode = sanitizeRoomCode(rawRoomCode);
  if (!user || roomCode.length < 4) {
    return () => undefined;
  }

  const path = `duels/${roomCode}`;
  return onSnapshot(
    doc(db, 'duels', roomCode),
    (snap) => {
      onRoom(snap.exists() ? (snap.data() as FirestoreDuelRoomDoc) : null);
    },
    (error) => {
      if (onPermissionError) {
        onPermissionError(error);
      } else {
        handleFirestoreError(error, OperationType.GET, path);
      }
    }
  );
}

export function subscribeToDuelMessages(
  rawRoomCode: string,
  onMessages: (messages: DuelChatMessage[]) => void,
  onError?: (err: unknown) => void
): () => void {
  const user = auth.currentUser;
  const roomCode = sanitizeRoomCode(rawRoomCode);
  if (!user || roomCode.length < 4) {
    return () => undefined;
  }

  const path = `duels/${roomCode}/messages`;
  const q = query(
    collection(db, 'duels', roomCode, 'messages'),
    orderBy('createdAt', 'asc'),
    limit(150)
  );

  return onSnapshot(
    q,
    (snapshot) => {
      const items: DuelChatMessage[] = snapshot.docs.map((d) => {
        const data = d.data() as Record<string, unknown>;
        const ts = data.createdAt as Timestamp | undefined;
        return {
          id: d.id,
          roomCode,
          senderUid: String(data.senderUid || ''),
          senderName: String(data.senderName || 'Champion'),
          senderAvatar: sanitizeAvatar(data.senderAvatar as AvatarId),
          senderCountryCode: sanitizeCountry(String(data.senderCountryCode || 'GA')),
          kind: data.kind === 'reaction' ? 'reaction' : 'text',
          text: String(data.text || ''),
          createdAtMs: ts && typeof ts.toMillis === 'function' ? ts.toMillis() : Date.now(),
        };
      });
      onMessages(items);
    },
    (error) => {
      if (onError) {
        onError(error);
      } else {
        handleFirestoreError(error, OperationType.LIST, path);
      }
    }
  );
}

export async function sendDuelChatMessage(params: {
  roomCode: string;
  profile: PlayerProfile;
  text: string;
  kind: 'text' | 'reaction';
  user?: User | null;
}): Promise<void> {
  const user = params.user ?? auth.currentUser;
  if (!user) {
    throw new Error('Authentication required for duel chat');
  }
  const roomCode = sanitizeRoomCode(params.roomCode);
  const cleanText = params.text.trim().slice(0, 280);
  if (roomCode.length < 4 || !cleanTest(cleanText)) return;

  const msgId = createMessageId(user.uid);
  const path = `duels/${roomCode}/messages/${msgId}`;

  try {
    await setDoc(doc(db, 'duels', roomCode, 'messages', msgId), {
      roomCode,
      senderUid: user.uid,
      senderName: sanitizeName(params.profile.name, 'Champion'),
      senderAvatar: sanitizeAvatar(params.profile.avatar),
      senderCountryCode: sanitizeCountry(params.profile.countryCode),
      kind: params.kind,
      text: cleanText,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

function cleanTest(txt: string): boolean {
  return txt.length > 0;
}

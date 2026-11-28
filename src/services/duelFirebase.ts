import { signInAnonymously, type User } from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocFromServer,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  writeBatch,
  type Timestamp,
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { ALL_QUESTIONS, selectNormalGameQuestions } from '../data/questionBank';
import type {
  AvatarId,
  DuelChatMessage,
  DuelParticipant,
  DuelRoomSnapshot,
  DuelStatus,
  PlayerProfile,
  QuizQuestion,
} from '../types/quiz';
import { getBasePointsForDifficulty, getPlayerLevelInfo } from '../utils/levelSystem';
import { balanceQuestionSet } from '../utils/questionShuffle';
import { auth, db, ensureFirebaseUser, handleFirestoreError, OperationType } from './firebase';

export const DUEL_QUESTION_MS = 30000;
export const DUEL_REVEAL_MS = 2800;

const QUESTION_BY_ID = new Map<string, QuizQuestion>(ALL_QUESTIONS.map((q) => [q.id, q]));

export interface FirestoreDuelDiagnostic {
  status: 'checking' | 'connected' | 'error';
  databaseId: string;
  projectId: string;
  collectionName: 'duels';
  responseTimeMs?: number;
  errorMessage?: string;
  checkedAt: number;
}

export async function checkFirestoreDuelsConnection(
  timeoutMs = 5000
): Promise<FirestoreDuelDiagnostic> {
  const t0 = Date.now();
  const dbId = (firebaseConfig as { firestoreDatabaseId?: string }).firestoreDatabaseId || 'default';
  const projId = (firebaseConfig as { projectId?: string }).projectId || 'quiz-gabon-69577';

  let timerId: ReturnType<typeof setTimeout> | undefined;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timerId = setTimeout(() => {
      reject(
        new Error(
          `Timeout (${Math.round(timeoutMs / 1000)}s) : Cloud Firestore n'a pas répondu sur la collection 'duels' (base: ${dbId}).`
        )
      );
    }, timeoutMs);
  });

  try {
    await Promise.race([
      (async () => {
        if (!auth.currentUser) {
          await signInAnonymously(auth);
        }
        await getDocFromServer(doc(db, 'duels', 'DIAG01'));
      })(),
      timeoutPromise,
    ]);

    return {
      status: 'connected',
      databaseId: dbId,
      projectId: projId,
      collectionName: 'duels',
      responseTimeMs: Date.now() - t0,
      checkedAt: Date.now(),
    };
  } catch (err: unknown) {
    const code =
      err && typeof err === 'object' && 'code' in err ? String((err as { code: unknown }).code) : '';
    const rawMsg = err instanceof Error ? err.message : String(err);
    const formattedMsg = code && !rawMsg.includes(code) ? `[${code}] ${rawMsg}` : rawMsg;

    return {
      status: 'error',
      databaseId: dbId,
      projectId: projId,
      collectionName: 'duels',
      responseTimeMs: Date.now() - t0,
      errorMessage: formattedMsg,
      checkedAt: Date.now(),
    };
  } finally {
    if (timerId !== undefined) clearTimeout(timerId);
  }
}

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
  questionIds: string[];
  questionSeed: number;
  countdownSeconds: number;
  questionIndex: number;
  questionEndsAtMs: number;
  hostScore: number;
  guestScore: number;
  hostCorrectCount: number;
  guestCorrectCount: number;
  hostAnswered: boolean;
  guestAnswered: boolean;
  hostOptionIndex: number;
  guestOptionIndex: number;
  hostLastPoints: number;
  guestLastPoints: number;
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

function generateRoomCodeCandidate(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function createMessageId(uid: string): string {
  const rand =
    typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID().replace(/-/g, '').slice(0, 12)
      : Math.random().toString(36).slice(2, 12);
  const safeUid = uid.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 16) || 'u';
  return `m_${Date.now()}_${safeUid}_${rand}`;
}

function pickDuelQuestionSet(profile: PlayerProfile): {
  questionIds: string[];
  questionSeed: number;
} {
  const level = getPlayerLevelInfo(profile.totalScore, profile.language).level;
  const { questions } = selectNormalGameQuestions(
    { type: 'all' },
    'mixed',
    [],
    ALL_QUESTIONS,
    level
  );
  const picked = questions.slice(0, 10);
  while (picked.length < 10 && ALL_QUESTIONS.length > picked.length) {
    const candidate = ALL_QUESTIONS[picked.length];
    if (candidate && !picked.some((q) => q.id === candidate.id)) {
      picked.push(candidate);
    }
  }
  return {
    questionIds: picked.map((q) => q.id),
    questionSeed: Math.floor(Math.random() * 2000000000) + 1,
  };
}

export function getDuelQuestionsForRoom(roomDoc: FirestoreDuelRoomDoc): QuizQuestion[] {
  const ids = Array.isArray(roomDoc.questionIds) ? roomDoc.questionIds : [];
  const raw: QuizQuestion[] = [];
  for (let i = 0; i < 10; i++) {
    const id = ids[i];
    const found = (id ? QUESTION_BY_ID.get(id) : undefined) || ALL_QUESTIONS[i];
    if (found) raw.push(found);
  }
  return balanceQuestionSet(raw, roomDoc.questionSeed || 1);
}

export function mapFirestoreRoomToSnapshot(
  roomDoc: FirestoreDuelRoomDoc,
  myUid: string,
  localProfileId: string
): DuelRoomSnapshot {
  const qs = getDuelQuestionsForRoom(roomDoc);
  const idx = Math.max(0, Math.min(qs.length - 1, roomDoc.questionIndex || 0));
  const q = qs[idx] || null;
  const showQuestion = roomDoc.status === 'question' || roomDoc.status === 'reveal';
  const isRevealOrEnd = roomDoc.status === 'reveal' || roomDoc.status === 'finished';

  const hostIsMe = roomDoc.hostUid === myUid;
  const guestIsMe = Boolean(roomDoc.guestUid) && roomDoc.guestUid === myUid;

  const hostPlayerId = hostIsMe ? localProfileId : roomDoc.hostUid;
  const guestPlayerId = guestIsMe ? localProfileId : roomDoc.guestUid;

  const players: DuelParticipant[] = [
    {
      id: hostPlayerId,
      firebaseUid: roomDoc.hostUid,
      name: roomDoc.hostName,
      countryCode: roomDoc.hostCountryCode,
      avatar: sanitizeAvatar(roomDoc.hostAvatar),
      score: roomDoc.hostScore || 0,
      correctCount: roomDoc.hostCorrectCount || 0,
      connected: true,
      hasAnsweredCurrent: Boolean(roomDoc.hostAnswered),
      lastOptionIndex:
        isRevealOrEnd || hostIsMe
          ? roomDoc.hostOptionIndex >= 0
            ? roomDoc.hostOptionIndex
            : null
          : null,
      lastPointsEarned: isRevealOrEnd ? roomDoc.hostLastPoints || 0 : 0,
    },
  ];

  if (roomDoc.guestUid) {
    players.push({
      id: guestPlayerId,
      firebaseUid: roomDoc.guestUid,
      name: roomDoc.guestName || 'Champion',
      countryCode: sanitizeCountry(roomDoc.guestCountryCode),
      avatar: sanitizeAvatar(roomDoc.guestAvatar),
      score: roomDoc.guestScore || 0,
      correctCount: roomDoc.guestCorrectCount || 0,
      connected: true,
      hasAnsweredCurrent: Boolean(roomDoc.guestAnswered),
      lastOptionIndex:
        isRevealOrEnd || guestIsMe
          ? roomDoc.guestOptionIndex >= 0
            ? roomDoc.guestOptionIndex
            : null
          : null,
      lastPointsEarned: isRevealOrEnd ? roomDoc.guestLastPoints || 0 : 0,
    });
  }

  let winnerId: string | null = null;
  if (!roomDoc.isDraw && roomDoc.winnerUid) {
    winnerId =
      roomDoc.winnerUid === roomDoc.hostUid
        ? hostPlayerId
        : roomDoc.winnerUid === roomDoc.guestUid
          ? guestPlayerId
          : roomDoc.winnerUid;
  }

  return {
    roomCode: roomDoc.roomCode,
    hostId: hostPlayerId,
    hostFirebaseUid: roomDoc.hostUid,
    isPublic: Boolean(roomDoc.isPublic),
    playScope: { type: 'all' },
    category: 'mixed',
    status: roomDoc.status,
    countdownSeconds: roomDoc.countdownSeconds ?? 3,
    questionIndex: idx,
    totalQuestions: qs.length || 10,
    questionEndsAt: roomDoc.questionEndsAtMs || 0,
    currentQuestion:
      showQuestion && q
        ? {
            id: q.id,
            countryCode: q.countryCode,
            category: q.category,
            difficulty: q.difficulty,
            prompt: q.prompt,
            options: q.options,
            explanation: q.explanation,
          }
        : null,
    revealedCorrectIndex: roomDoc.status === 'reveal' && q ? q.correctIndex : null,
    revealedExplanation: isRevealOrEnd && q ? q.explanation : null,
    players,
    winnerId,
    winnerFirebaseUid: roomDoc.winnerUid || null,
    isDraw: Boolean(roomDoc.isDraw),
    serverProof: roomDoc.serverProof || null,
  };
}

export async function createFirestoreDuelRoom(
  profile: PlayerProfile,
  isPublic = false
): Promise<FirestoreDuelRoomDoc> {
  const user = await ensureFirebaseUser(5000);
  if (!user) {
    throw new Error("Impossible d'obtenir une session Firebase anonyme.");
  }

  const uid = user.uid;
  const safeName = sanitizeName(profile.name, 'Champion');
  const safeCountry = sanitizeCountry(profile.countryCode);
  const safeAvatar = sanitizeAvatar(profile.avatar);
  const { questionIds, questionSeed } = pickDuelQuestionSet(profile);

  let roomCode = generateRoomCodeCandidate();
  for (let attempt = 0; attempt < 6; attempt++) {
    const existing = await getDocFromServer(doc(db, 'duels', roomCode)).catch(() => null);
    if (!existing || !existing.exists()) break;
    roomCode = generateRoomCodeCandidate();
  }

  const roomRef = doc(db, 'duels', roomCode);
  const roomPath = `duels/${roomCode}`;

  const payload = {
    roomCode,
    hostUid: uid,
    hostName: safeName,
    hostCountryCode: safeCountry,
    hostAvatar: safeAvatar,
    guestUid: '',
    guestName: '',
    guestCountryCode: '',
    guestAvatar: 'lion' as AvatarId,
    isPublic: Boolean(isPublic),
    status: 'waiting' as DuelStatus,
    questionIds,
    questionSeed,
    countdownSeconds: 3,
    questionIndex: 0,
    questionEndsAtMs: 0,
    hostScore: 0,
    guestScore: 0,
    hostCorrectCount: 0,
    guestCorrectCount: 0,
    hostAnswered: false,
    guestAnswered: false,
    hostOptionIndex: -1,
    guestOptionIndex: -1,
    hostLastPoints: 0,
    guestLastPoints: 0,
    winnerUid: '',
    isDraw: false,
    serverProof: '',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  const batch = writeBatch(db);
  batch.set(roomRef, payload);
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
    handleFirestoreError(error, OperationType.CREATE, roomPath);
  }

  return payload as unknown as FirestoreDuelRoomDoc;
}

export async function joinFirestoreDuelRoom(
  rawRoomCode: string,
  profile: PlayerProfile
): Promise<FirestoreDuelRoomDoc> {
  const user = await ensureFirebaseUser(5000);
  if (!user) {
    throw new Error("Impossible d'obtenir une session Firebase anonyme.");
  }

  const roomCode = sanitizeRoomCode(rawRoomCode);
  if (roomCode.length < 4) {
    throw new Error('INVALID_CODE');
  }

  const uid = user.uid;
  const roomRef = doc(db, 'duels', roomCode);
  const roomPath = `duels/${roomCode}`;

  let snap;
  try {
    snap = await getDocFromServer(roomRef);
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    if (msg.includes('unavailable') || msg.includes('offline') || msg.includes('The operation could not be completed')) {
      try {
        snap = await getDoc(roomRef);
      } catch (fallbackErr) {
        handleFirestoreError(fallbackErr, OperationType.GET, roomPath);
      }
    } else {
      handleFirestoreError(error, OperationType.GET, roomPath);
    }
  }

  if (!snap.exists()) {
    throw new Error('ROOM_NOT_FOUND');
  }

  const data = snap.data() as FirestoreDuelRoomDoc;
  if (data.hostUid === uid || data.guestUid === uid) {
    return data;
  }

  if (data.status !== 'waiting' || data.guestUid !== '') {
    throw new Error('ROOM_FULL');
  }

  const safeName = sanitizeName(profile.name, 'Champion');
  const safeCountry = sanitizeCountry(profile.countryCode);
  const safeAvatar = sanitizeAvatar(profile.avatar);

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
    if (msg.includes('Missing or insufficient permissions')) {
      throw new Error('ROOM_FULL');
    }
    handleFirestoreError(error, OperationType.UPDATE, roomPath);
  }

  return {
    ...data,
    guestUid: uid,
    guestName: safeName,
    guestCountryCode: safeCountry,
    guestAvatar: safeAvatar,
  };
}

export async function findOrCreateQuickMatchFirestore(
  profile: PlayerProfile
): Promise<{ room: FirestoreDuelRoomDoc; role: 'host' | 'guest' }> {
  const user = await ensureFirebaseUser(5000);
  if (!user) {
    throw new Error("Impossible d'obtenir une session Firebase anonyme.");
  }

  const q = query(
    collection(db, 'duels'),
    where('isPublic', '==', true),
    where('status', '==', 'waiting'),
    where('guestUid', '==', ''),
    limit(10)
  );

  let docs: FirestoreDuelRoomDoc[] = [];
  try {
    const snap = await getDocs(q);
    docs = snap.docs.map((d) => d.data() as FirestoreDuelRoomDoc);
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, 'duels');
  }

  const nowMs = Date.now();
  for (const candidate of docs) {
    if (!candidate.roomCode || candidate.hostUid === user.uid) continue;
    const createdMs =
      candidate.createdAt && typeof candidate.createdAt.toMillis === 'function'
        ? candidate.createdAt.toMillis()
        : nowMs;
    // Ignore abandoned waiting rooms older than 10 minutes
    if (nowMs - createdMs > 10 * 60 * 1000) continue;

    try {
      const joined = await joinFirestoreDuelRoom(candidate.roomCode, profile);
      return { room: joined, role: 'guest' };
    } catch {
      // Room was just claimed or closed by another player; continue checking
    }
  }

  const created = await createFirestoreDuelRoom(profile, true);
  return { room: created, role: 'host' };
}

export async function startFirestoreDuelCountdown(rawRoomCode: string): Promise<void> {
  const roomCode = sanitizeRoomCode(rawRoomCode);
  if (roomCode.length < 4) return;
  try {
    await updateDoc(doc(db, 'duels', roomCode), {
      status: 'countdown',
      countdownSeconds: 3,
      questionIndex: 0,
      questionEndsAtMs: 0,
      hostAnswered: false,
      guestAnswered: false,
      hostOptionIndex: -1,
      guestOptionIndex: -1,
      hostLastPoints: 0,
      guestLastPoints: 0,
      updatedAt: serverTimestamp(),
    });
  } catch {
    // Ignore race conditions between host/guest
  }
}

export async function updateFirestoreDuelCountdown(
  rawRoomCode: string,
  countdownSeconds: number
): Promise<void> {
  const roomCode = sanitizeRoomCode(rawRoomCode);
  if (roomCode.length < 4) return;
  try {
    await updateDoc(doc(db, 'duels', roomCode), {
      status: 'countdown',
      countdownSeconds: Math.max(0, Math.min(5, Math.floor(countdownSeconds))),
      updatedAt: serverTimestamp(),
    });
  } catch {
    // Ignore transient countdown sync errors
  }
}

export async function startFirestoreDuelQuestion(
  rawRoomCode: string,
  questionIndex: number,
  questionEndsAtMs = Date.now() + DUEL_QUESTION_MS
): Promise<void> {
  const roomCode = sanitizeRoomCode(rawRoomCode);
  if (roomCode.length < 4) return;
  try {
    await updateDoc(doc(db, 'duels', roomCode), {
      status: 'question',
      questionIndex: Math.max(0, Math.min(9, Math.floor(questionIndex))),
      questionEndsAtMs,
      hostAnswered: false,
      guestAnswered: false,
      hostOptionIndex: -1,
      guestOptionIndex: -1,
      hostLastPoints: 0,
      guestLastPoints: 0,
      updatedAt: serverTimestamp(),
    });
  } catch {
    // Ignore transient race conditions
  }
}

export async function revealFirestoreDuelQuestion(rawRoomCode: string): Promise<void> {
  const roomCode = sanitizeRoomCode(rawRoomCode);
  if (roomCode.length < 4) return;
  try {
    await updateDoc(doc(db, 'duels', roomCode), {
      status: 'reveal',
      updatedAt: serverTimestamp(),
    });
  } catch {
    // Ignore transient race conditions
  }
}

export async function submitFirestoreDuelAnswer(
  roomDoc: FirestoreDuelRoomDoc,
  myUid: string,
  optionIndex: number,
  hintPenalty = 0
): Promise<void> {
  if (roomDoc.status !== 'question') return;
  if (optionIndex < 0 || optionIndex > 3) return;

  const qs = getDuelQuestionsForRoom(roomDoc);
  const q = qs[roomDoc.questionIndex];
  if (!q) return;

  const isCorrect = optionIndex === q.correctIndex;
  const remSec = Math.max(0, Math.ceil(((roomDoc.questionEndsAtMs || Date.now()) - Date.now()) / 1000));
  const basePts = getBasePointsForDifficulty(q.difficulty || 1);
  const safePenalty = Math.max(0, Math.round(hintPenalty));
  const earned = isCorrect
    ? Math.max(0, Math.min(5000, basePts + Math.round(remSec * 2) - safePenalty))
    : 0;

  const roomRef = doc(db, 'duels', roomDoc.roomCode);
  const roomPath = `duels/${roomDoc.roomCode}`;

  if (myUid === roomDoc.hostUid) {
    if (roomDoc.hostAnswered) return;
    try {
      await updateDoc(roomRef, {
        hostScore: Math.min(50000, (roomDoc.hostScore || 0) + earned),
        hostCorrectCount: Math.min(10, (roomDoc.hostCorrectCount || 0) + (isCorrect ? 1 : 0)),
        hostAnswered: true,
        hostOptionIndex: optionIndex,
        hostLastPoints: earned,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, roomPath);
    }
  } else if (roomDoc.guestUid === myUid) {
    if (roomDoc.guestAnswered) return;
    try {
      await updateDoc(roomRef, {
        guestScore: Math.min(50000, (roomDoc.guestScore || 0) + earned),
        guestCorrectCount: Math.min(10, (roomDoc.guestCorrectCount || 0) + (isCorrect ? 1 : 0)),
        guestAnswered: true,
        guestOptionIndex: optionIndex,
        guestLastPoints: earned,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, roomPath);
    }
  }
}

export async function finishFirestoreDuel(roomDoc: FirestoreDuelRoomDoc): Promise<void> {
  if (roomDoc.status === 'finished') return;
  const hostScore = Math.max(0, Math.min(50000, roomDoc.hostScore || 0));
  const guestScore = Math.max(0, Math.min(50000, roomDoc.guestScore || 0));
  const hostCorrect = Math.max(0, Math.min(10, roomDoc.hostCorrectCount || 0));
  const guestCorrect = Math.max(0, Math.min(10, roomDoc.guestCorrectCount || 0));

  let winnerUid = '';
  let isDraw = false;
  if (hostCorrect > guestCorrect) {
    winnerUid = roomDoc.hostUid;
  } else if (guestCorrect > hostCorrect) {
    winnerUid = roomDoc.guestUid;
  } else if (hostScore > guestScore) {
    winnerUid = roomDoc.hostUid;
  } else if (guestScore > hostScore) {
    winnerUid = roomDoc.guestUid;
  } else {
    isDraw = true;
  }

  const serverProof = `fs_duel_${roomDoc.roomCode}_${hostScore}_${guestScore}_${Date.now().toString(36)}`;

  try {
    await updateDoc(doc(db, 'duels', roomDoc.roomCode), {
      status: 'finished',
      hostScore,
      guestScore,
      hostCorrectCount: hostCorrect,
      guestCorrectCount: guestCorrect,
      winnerUid,
      isDraw,
      serverProof: serverProof.slice(0, 128),
      updatedAt: serverTimestamp(),
    });
  } catch {
    // Ignore if already finished by opponent
  }
}

export async function leaveFirestoreDuelRoom(
  roomDoc: FirestoreDuelRoomDoc,
  myUid: string
): Promise<void> {
  if (roomDoc.status === 'finished') return;
  if (roomDoc.hostUid !== myUid && roomDoc.guestUid !== myUid) return;

  const opponentUid =
    myUid === roomDoc.hostUid ? roomDoc.guestUid : roomDoc.hostUid;
  const isWaitingLeave = roomDoc.status === 'waiting' && !roomDoc.guestUid;

  const winnerUid = isWaitingLeave ? '' : opponentUid;
  const isDraw = isWaitingLeave;
  const serverProof = `fs_left_${roomDoc.roomCode}_${Date.now().toString(36)}`;

  try {
    await updateDoc(doc(db, 'duels', roomDoc.roomCode), {
      status: 'finished',
      hostScore: roomDoc.hostScore || 0,
      guestScore: roomDoc.guestScore || 0,
      hostCorrectCount: roomDoc.hostCorrectCount || 0,
      guestCorrectCount: roomDoc.guestCorrectCount || 0,
      winnerUid,
      isDraw,
      serverProof: serverProof.slice(0, 128),
      updatedAt: serverTimestamp(),
    });
  } catch {
    // Ignore cleanup failures
  }
}

export async function syncParticipantDuelRoom(
  snapshot: DuelRoomSnapshot,
  profile: PlayerProfile,
  user: User | null = auth.currentUser
): Promise<void> {
  // Handled directly by Firestore duel lifecycle when running in Firestore mode
  if (!user || !snapshot.roomCode || snapshot.roomCode.startsWith('LOCAL-')) return;
  const roomRef = doc(db, 'duels', sanitizeRoomCode(snapshot.roomCode));
  const existingSnap = await getDoc(roomRef).catch(() => null);
  if (!existingSnap || !existingSnap.exists()) return;
  const roomData = existingSnap.data() as FirestoreDuelRoomDoc;
  if (roomData.status === 'finished') return;
  if (
    snapshot.status === 'finished' &&
    snapshot.serverProof &&
    snapshot.serverProof.length >= 16 &&
    (roomData.hostUid === user.uid || roomData.guestUid === user.uid)
  ) {
    const hostWsPlayer = snapshot.players.find((p) => p.id === snapshot.hostId);
    const guestWsPlayer = snapshot.players.find((p) => p.id !== snapshot.hostId);
    let winnerUid = '';
    if (!snapshot.isDraw && snapshot.winnerId) {
      winnerUid =
        snapshot.winnerId === snapshot.hostId ? roomData.hostUid : roomData.guestUid || '';
    }
    await updateDoc(roomRef, {
      status: 'finished',
      hostScore: Math.max(0, Math.min(50000, Math.round(hostWsPlayer?.score || 0))),
      guestScore: Math.max(0, Math.min(50000, Math.round(guestWsPlayer?.score || 0))),
      hostCorrectCount: Math.max(0, Math.min(10, Math.round(hostWsPlayer?.correctCount || 0))),
      guestCorrectCount: Math.max(0, Math.min(10, Math.round(guestWsPlayer?.correctCount || 0))),
      winnerUid,
      isDraw: Boolean(snapshot.isDraw),
      serverProof: snapshot.serverProof.slice(0, 128),
      updatedAt: serverTimestamp(),
    }).catch(() => null);
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
  const user = params.user ?? auth.currentUser ?? (await ensureFirebaseUser(4000));
  if (!user) {
    throw new Error('Authentication required for duel chat');
  }
  const roomCode = sanitizeRoomCode(params.roomCode);
  const cleanText = params.text.trim().slice(0, 280);
  if (roomCode.length < 4 || cleanText.length === 0) return;

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

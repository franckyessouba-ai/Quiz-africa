import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocFromServer,
  getDocs,
  getFirestore,
  initializeFirestore,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
  type Timestamp,
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import type { AvatarId, Language, PlayerProfile } from '../types/quiz';

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

function createFirestoreDb() {
  try {
    return initializeFirestore(
      app,
      {
        experimentalForceLongPolling: true,
      },
      firebaseConfig.firestoreDatabaseId
    );
  } catch {
    return getFirestore(app, firebaseConfig.firestoreDatabaseId);
  }
}

export const db = createFirestoreDb();
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

async function testConnection(isRetry = false) {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return;
  }
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    if (msg.includes('the client is offline') || msg.includes('unavailable') || msg.includes('The operation could not be completed')) {
      if (!isRetry && typeof navigator !== 'undefined' && navigator.onLine) {
        setTimeout(() => {
          void testConnection(true);
        }, 3000);
        return;
      }
      // Graceful fallback for offline/unavailable environment without noisy console logs
    }
  }
}

if (typeof window !== 'undefined') {
  if (typeof navigator === 'undefined' || navigator.onLine) {
    void testConnection();
  } else {
    window.addEventListener('online', () => void testConnection(), { once: true });
  }
}

export function subscribeToAuth(callback: (user: User | null) => void): () => void {
  return onAuthStateChanged(auth, callback);
}

export async function signInWithGooglePopup(): Promise<User> {
  const cred = await signInWithPopup(auth, googleProvider);
  return cred.user;
}

export async function signOutFirebase(): Promise<void> {
  await signOut(auth);
}

export async function getFirebaseIdToken(forceRefresh = false): Promise<string | null> {
  const user = auth.currentUser;
  if (!user) return null;
  try {
    return await user.getIdToken(forceRefresh);
  } catch {
    return null;
  }
}

export function getCurrentIsoWeekKey(now = new Date()): string {
  const utc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const dayNum = utc.getUTCDay() || 7;
  utc.setUTCDate(utc.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(utc.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((utc.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${utc.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
}

export interface CloudPlayerDoc {
  uid: string;
  name: string;
  countryCode: string;
  avatar: AvatarId;
  language: Language;
  bestGameScore: number;
  totalScore: number;
  weeklyScore: number;
  weekKey: string;
  diasporaScore: number;
  bestDiasporaScore: number;
  streak: number;
  bestStreak: number;
  lastDailyDate: string;
  gamesPlayed: number;
  gamesWon: number;
  isPublic: boolean;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

function clampInt(val: unknown, maxVal: number): number {
  const n = Math.floor(Number(val) || 0);
  return Math.max(0, Math.min(maxVal, n));
}

function sanitizeAvatar(val: unknown): AvatarId {
  return val === 'lion' || val === 'eagle' || val === 'panther' || val === 'footballer'
    ? val
    : 'lion';
}

function sanitizeLang(val: unknown): Language {
  return val === 'fr' || val === 'en' || val === 'es' || val === 'pt' || val === 'ar'
    ? val
    : 'fr';
}

function sanitizeCountryCode(val: unknown): string {
  const str = typeof val === 'string' ? val.trim().toUpperCase() : '';
  return /^[A-Z]{2}$/.test(str) ? str : 'GA';
}

export async function loadCloudPlayerProfile(uid: string): Promise<CloudPlayerDoc | null> {
  if (!auth.currentUser || auth.currentUser.uid !== uid || !auth.currentUser.emailVerified) {
    return null;
  }
  const path = `players/${uid}`;
  try {
    const snap = await getDoc(doc(db, 'players', uid));
    if (!snap.exists()) return null;
    return snap.data() as CloudPlayerDoc;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}

export function mergeCloudWithLocalProfile(
  local: PlayerProfile,
  cloud: CloudPlayerDoc
): PlayerProfile {
  const currentWeek = getCurrentIsoWeekKey();
  const cloudWeekly = cloud.weekKey === currentWeek ? cloud.weeklyScore : 0;
  const mergedGamesPlayed = Math.max(local.gamesPlayed || 0, cloud.gamesPlayed || 0);
  const mergedGamesWon = Math.min(
    mergedGamesPlayed,
    Math.max(local.gamesWon || 0, cloud.gamesWon || 0)
  );
  const mergedLastDaily =
    local.lastDailyDate && cloud.lastDailyDate
      ? local.lastDailyDate >= cloud.lastDailyDate
        ? local.lastDailyDate
        : cloud.lastDailyDate
      : local.lastDailyDate || cloud.lastDailyDate || null;

  return {
    ...local,
    name: local.name || cloud.name,
    countryCode: local.countryCode || cloud.countryCode,
    avatar: local.avatar || cloud.avatar,
    language: local.language || cloud.language,
    bestGameScore: Math.max(local.bestGameScore || 0, cloud.bestGameScore || 0),
    totalScore: Math.max(local.totalScore || 0, cloud.totalScore || 0),
    weeklyScore: Math.max(local.weeklyScore || 0, cloudWeekly),
    diasporaScore: Math.max(local.diasporaScore || 0, cloud.diasporaScore || 0),
    bestDiasporaScore: Math.max(local.bestDiasporaScore || 0, cloud.bestDiasporaScore || 0),
    streak: Math.max(local.streak || 0, cloud.streak || 0),
    bestStreak: Math.max(local.bestStreak || 0, cloud.bestStreak || 0),
    lastDailyDate: mergedLastDaily,
    gamesPlayed: mergedGamesPlayed,
    gamesWon: mergedGamesWon,
  };
}

export async function syncPlayerProfileToFirestore(
  profile: PlayerProfile,
  user: User | null = auth.currentUser
): Promise<CloudPlayerDoc | null> {
  if (!user || !user.emailVerified) return null;
  const uid = user.uid;
  const path = `players/${uid}`;
  const docRef = doc(db, 'players', uid);

  let existing: CloudPlayerDoc | null = null;
  try {
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      existing = snap.data() as CloudPlayerDoc;
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }

  const weekKey = getCurrentIsoWeekKey();
  const safePlayed = clampInt(
    Math.max(profile.gamesPlayed || 0, existing?.gamesPlayed || 0),
    1000000
  );
  const safeWon = Math.min(
    safePlayed,
    clampInt(Math.max(profile.gamesWon || 0, existing?.gamesWon || 0), 1000000)
  );
  const existingWeekly = existing && existing.weekKey === weekKey ? existing.weeklyScore : 0;

  const basePayload = {
    name: (profile.name || user.displayName || 'Champion').trim().slice(0, 28) || 'Champion',
    countryCode: sanitizeCountryCode(profile.countryCode),
    avatar: sanitizeAvatar(profile.avatar),
    language: sanitizeLang(profile.language),
    bestGameScore: clampInt(
      Math.max(profile.bestGameScore || 0, existing?.bestGameScore || 0),
      50000
    ),
    totalScore: clampInt(
      Math.max(profile.totalScore || 0, existing?.totalScore || 0),
      5000000
    ),
    weeklyScore: clampInt(Math.max(profile.weeklyScore || 0, existingWeekly), 500000),
    weekKey,
    diasporaScore: clampInt(
      Math.max(profile.diasporaScore || 0, existing?.diasporaScore || 0),
      5000000
    ),
    bestDiasporaScore: clampInt(
      Math.max(profile.bestDiasporaScore || 0, existing?.bestDiasporaScore || 0),
      50000
    ),
    streak: clampInt(profile.streak || 0, 2000),
    bestStreak: clampInt(
      Math.max(profile.bestStreak || 0, existing?.bestStreak || 0),
      2000
    ),
    lastDailyDate: (profile.lastDailyDate || existing?.lastDailyDate || '').slice(0, 10),
    gamesPlayed: safePlayed,
    gamesWon: safeWon,
    isPublic: true,
    updatedAt: serverTimestamp(),
  };

  try {
    if (!existing) {
      await setDoc(docRef, {
        uid,
        ...basePayload,
        createdAt: serverTimestamp(),
      });
    } else {
      await setDoc(
        docRef,
        {
          uid: existing.uid,
          createdAt: existing.createdAt,
          ...basePayload,
        },
        { merge: false }
      );
    }
    return { uid, ...basePayload } as CloudPlayerDoc;
  } catch (error) {
    handleFirestoreError(error, existing ? OperationType.UPDATE : OperationType.CREATE, path);
  }
}

export async function fetchPublicPlayersFromFirestore(maxCount = 50): Promise<CloudPlayerDoc[]> {
  if (!auth.currentUser || !auth.currentUser.emailVerified) return [];
  const path = 'players';
  try {
    const q = query(
      collection(db, 'players'),
      where('isPublic', '==', true),
      orderBy('totalScore', 'desc'),
      limit(maxCount)
    );
    const snap = await getDocs(q);
    return snap.docs.map((d) => d.data() as CloudPlayerDoc);
  } catch (error) {
    // Do not crash leaderboard if index is still building or permissions deny; return empty gracefully after logging
    console.warn('Firestore leaderboard query fallback:', error);
    return [];
  }
}

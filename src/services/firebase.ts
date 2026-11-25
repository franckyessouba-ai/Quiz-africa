import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  type User,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocFromServer,
  getDocs,
  getFirestore,
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

export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

// Automatically sign in anonymously on boot if not already signed in
if (typeof window !== 'undefined') {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      signInAnonymously(auth).catch((err) => {
        console.warn('Anonymous auth sign-in warning:', err);
      });
    }
  });
}

export async function signInWithGooglePopup(): Promise<User> {
  const cred = await signInAnonymously(auth);
  return cred.user;
}

export async function signOutFirebase(): Promise<void> {
  // Anonymous session stays active; no-op
}

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
    isAnonymous?: boolean | null;
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
      isAnonymous: auth.currentUser?.isAnonymous,
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

export async function ensureFirebaseUser(timeoutMs = 5000): Promise<User | null> {
  if (auth.currentUser) {
    return auth.currentUser;
  }

  let timerId: ReturnType<typeof setTimeout> | undefined;
  const timeoutPromise = new Promise<null>((resolve) => {
    timerId = setTimeout(() => resolve(null), timeoutMs);
  });

  try {
    const user = await Promise.race([
      (async (): Promise<User | null> => {
        if (typeof (auth as unknown as { authStateReady?: () => Promise<void> }).authStateReady === 'function') {
          await auth.authStateReady();
        }
        if (auth.currentUser) return auth.currentUser;
        const cred = await signInAnonymously(auth);
        return cred.user;
      })(),
      timeoutPromise,
    ]);
    return user;
  } catch (err) {
    console.warn('ensureFirebaseUser warning:', err);
    return auth.currentUser;
  } finally {
    if (timerId !== undefined) clearTimeout(timerId);
  }
}

export async function getFirebaseIdToken(forceRefresh = false): Promise<string | null> {
  const user = auth.currentUser || (await ensureFirebaseUser(3000));
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

export function getCurrentWeekEndsAtMs(now = new Date()): number {
  const dayNum = now.getUTCDay() || 7; // 1=Mon .. 7=Sun
  const daysUntilNextMonday = 8 - dayNum;
  return Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate() + daysUntilNextMonday,
    0,
    0,
    0,
    0
  );
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
  if (!auth.currentUser || auth.currentUser.uid !== uid) {
    return null;
  }
  const path = `players/${uid}`;
  try {
    const snap = await getDoc(doc(db, 'players', uid));
    if (!snap.exists()) return null;
    return snap.data() as CloudPlayerDoc;
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    if (
      msg.includes('client is offline') ||
      msg.includes('unavailable') ||
      msg.includes('network') ||
      msg.includes('The operation could not be completed')
    ) {
      console.warn('Firestore offline, continuing with local profile.');
      return null;
    }
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
  const resolvedUser = user || (await ensureFirebaseUser(4000));
  if (!resolvedUser) return null;
  const uid = resolvedUser.uid;
  const path = `players/${uid}`;
  const docRef = doc(db, 'players', uid);

  let existing: CloudPlayerDoc | null = null;
  try {
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      existing = snap.data() as CloudPlayerDoc;
    }
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    if (
      msg.includes('client is offline') ||
      msg.includes('unavailable') ||
      msg.includes('network') ||
      msg.includes('The operation could not be completed')
    ) {
      console.warn('Firestore offline while checking existing profile, proceeding with local.');
    } else {
      handleFirestoreError(error, OperationType.GET, path);
    }
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
    uid,
    name: (profile.name || 'Champion').trim().slice(0, 28) || 'Champion',
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
        ...basePayload,
        createdAt: serverTimestamp(),
      });
    } else {
      await setDoc(
        docRef,
        {
          createdAt: existing.createdAt,
          ...basePayload,
        },
        { merge: false }
      );
    }
    return { ...basePayload } as CloudPlayerDoc;
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    if (
      msg.includes('client is offline') ||
      msg.includes('unavailable') ||
      msg.includes('network') ||
      msg.includes('The operation could not be completed')
    ) {
      console.warn('Firestore offline while saving profile, using local version.');
      return { ...basePayload } as CloudPlayerDoc;
    }
    handleFirestoreError(error, existing ? OperationType.UPDATE : OperationType.CREATE, path);
  }
}

export async function fetchPublicPlayersFromFirestore(maxCount = 200): Promise<CloudPlayerDoc[]> {
  const user = auth.currentUser || (await ensureFirebaseUser(4000));
  if (!user) return [];

  try {
    const q = query(
      collection(db, 'players'),
      where('isPublic', '==', true),
      orderBy('totalScore', 'desc'),
      limit(maxCount)
    );
    const snap = await getDocs(q);
    return snap.docs.map((d) => d.data() as CloudPlayerDoc);
  } catch (err) {
    // Fallback without orderBy in case composite index is unavailable
    try {
      const fallbackQ = query(
        collection(db, 'players'),
        where('isPublic', '==', true),
        limit(maxCount)
      );
      const snap = await getDocs(fallbackQ);
      return snap.docs.map((d) => d.data() as CloudPlayerDoc);
    } catch (fallbackErr) {
      console.warn('Firestore leaderboard query fallback failed:', err, fallbackErr);
      return [];
    }
  }
}

export async function buildLeaderboardFromFirestore(
  profile?: PlayerProfile | null,
  filterCountryCode?: string
): Promise<import('../types/quiz').LeaderboardResponse | null> {
  const user = auth.currentUser || (await ensureFirebaseUser(4000));
  if (!user) return null;

  const docs = await fetchPublicPlayersFromFirestore(200);
  if (docs.length === 0 && !profile) return null;

  const currentWeekKey = getCurrentIsoWeekKey();
  const weekEndsAt = getCurrentWeekEndsAtMs();
  const myUid = user.uid;

  const entriesMap = new Map<string, import('../types/quiz').LeaderboardEntry>();

  for (const d of docs) {
    const isMe = d.uid === myUid || (profile?.id ? d.uid === profile.id : false);
    const docWeekly = d.weekKey === currentWeekKey ? clampInt(d.weeklyScore, 500000) : 0;

    entriesMap.set(d.uid, {
      id: d.uid,
      name:
        isMe && profile?.name
          ? profile.name
          : sanitizeNameLocal(d.name),
      countryCode:
        isMe && profile?.countryCode
          ? sanitizeCountryCode(profile.countryCode)
          : sanitizeCountryCode(d.countryCode),
      avatar: isMe && profile?.avatar ? sanitizeAvatar(profile.avatar) : sanitizeAvatar(d.avatar),
      totalScore: isMe
        ? Math.max(clampInt(d.totalScore, 5000000), clampInt(profile?.totalScore, 5000000))
        : clampInt(d.totalScore, 5000000),
      bestGameScore: isMe
        ? Math.max(clampInt(d.bestGameScore, 50000), clampInt(profile?.bestGameScore, 50000))
        : clampInt(d.bestGameScore, 50000),
      weeklyScore: isMe
        ? Math.max(docWeekly, clampInt(profile?.weeklyScore, 500000))
        : docWeekly,
      streak: isMe
        ? Math.max(clampInt(d.streak, 2000), clampInt(profile?.streak, 2000))
        : clampInt(d.streak, 2000),
      diasporaScore: isMe
        ? Math.max(clampInt(d.diasporaScore, 5000000), clampInt(profile?.diasporaScore, 5000000))
        : clampInt(d.diasporaScore, 5000000),
      isCurrentPlayer: isMe,
    });
  }

  if (profile && !entriesMap.has(myUid)) {
    entriesMap.set(myUid, {
      id: myUid,
      name: sanitizeNameLocal(profile.name),
      countryCode: sanitizeCountryCode(profile.countryCode),
      avatar: sanitizeAvatar(profile.avatar),
      totalScore: clampInt(profile.totalScore, 5000000),
      bestGameScore: clampInt(profile.bestGameScore, 50000),
      weeklyScore: clampInt(profile.weeklyScore, 500000),
      streak: clampInt(profile.streak, 2000),
      diasporaScore: clampInt(profile.diasporaScore, 5000000),
      isCurrentPlayer: true,
    });
  }

  const allEntries = Array.from(entriesMap.values());
  if (allEntries.length === 0) return null;

  const worldSorted = [...allEntries].sort(
    (a, b) => b.totalScore - a.totalScore || b.bestGameScore - a.bestGameScore
  );

  const selectedCountry = sanitizeCountryCode(filterCountryCode || profile?.countryCode || 'GA');
  const ownCountry = sanitizeCountryCode(profile?.countryCode || selectedCountry);

  const countrySorted = worldSorted.filter((e) => e.countryCode === selectedCountry);
  const ownCountrySorted = worldSorted.filter((e) => e.countryCode === ownCountry);

  const weeklySorted = [...allEntries].sort(
    (a, b) => b.weeklyScore - a.weeklyScore || b.totalScore - a.totalScore
  );

  const diasporaSorted = [...allEntries]
    .filter((e) => (e.diasporaScore || 0) > 0)
    .sort(
      (a, b) =>
        (b.diasporaScore || 0) - (a.diasporaScore || 0) || b.totalScore - a.totalScore
    );

  const findRank = (list: import('../types/quiz').LeaderboardEntry[]) => {
    const idx = list.findIndex((e) => e.isCurrentPlayer || e.id === myUid);
    return idx >= 0 ? idx + 1 : Math.max(1, list.length);
  };

  return {
    weekKey: currentWeekKey,
    weekEndsAt,
    worldTop10: worldSorted.slice(0, 10),
    countryTop10: countrySorted.slice(0, 10),
    weeklyTop10: weeklySorted.slice(0, 10),
    diasporaTop10: diasporaSorted.slice(0, 10),
    diasporaChampion: diasporaSorted[0] || null,
    weeklyChampion: weeklySorted[0] && weeklySorted[0].weeklyScore > 0 ? weeklySorted[0] : null,
    playerRanks: {
      worldRank: findRank(worldSorted),
      worldTotal: worldSorted.length,
      countryRank: findRank(ownCountrySorted),
      countryTotal: ownCountrySorted.length,
      weeklyRank: findRank(weeklySorted),
      weeklyTotal: weeklySorted.length,
      diasporaRank: diasporaSorted.length > 0 ? findRank(diasporaSorted) : undefined,
    },
  };
}

function sanitizeNameLocal(val: unknown): string {
  const s = typeof val === 'string' ? val.trim().slice(0, 28) : '';
  return s || 'Champion';
}

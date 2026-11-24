import {
  AnswerLogItem,
  AvatarId,
  CategorySelection,
  LeaderboardResponse,
  PlayerProfile,
  QuizQuestion,
} from '../types/quiz';
import {
  getFirebaseIdToken,
  syncPlayerProfileToFirestore,
} from './firebase';

const PROFILE_STORAGE_KEY = 'quiz_africa_player_v1';
const SEEN_QUESTIONS_STORAGE_KEY = 'quiz_africa_seen_questions_v1';
const PENDING_SCORES_STORAGE_KEY = 'quiz_africa_pending_scores_v1';
const CACHED_LEADERBOARD_STORAGE_KEY = 'quiz_africa_cached_leaderboard_v1';
const OFFLINE_QUESTIONS_META_KEY = 'quiz_africa_offline_questions_meta_v1';
const OFFLINE_DB_NAME = 'quiz_africa_offline_db';
const OFFLINE_STORE_NAME = 'assets';
const OFFLINE_QUESTIONS_RECORD_KEY = 'all_questions_v4';
const DAILY_NEWS_RECORD_KEY = 'daily_news_archive_v1';

export interface PendingScoreSubmission {
  clientSubmissionId: string;
  id: string;
  name: string;
  countryCode: string;
  avatar: AvatarId;
  mode: 'normal' | 'daily';
  category?: CategorySelection;
  gameScore: number;
  bonus: number;
  streak: number;
  answerLog?: AnswerLogItem[];
  queuedAt: number;
}

export function loadStoredProfile(): PlayerProfile | null {
  try {
    const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PlayerProfile;
    if (!parsed || !parsed.id || !parsed.name) return null;
    return {
      ...parsed,
      dailyHistory: parsed.dailyHistory || {},
      bestGameScore: parsed.bestGameScore || 0,
      totalScore: parsed.totalScore || 0,
      weeklyScore: parsed.weeklyScore || 0,
      streak: parsed.streak || 0,
      bestStreak: parsed.bestStreak || 0,
      lastDailyDate: parsed.lastDailyDate || null,
      missedYesterdayNotice: Boolean(parsed.missedYesterdayNotice),
      gamesPlayed: parsed.gamesPlayed || 0,
      gamesWon: parsed.gamesWon || 0,
    };
  } catch {
    return null;
  }
}

export function saveStoredProfile(profile: PlayerProfile): void {
  try {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
  } catch {
    // Ignore storage quota errors
  }
}

export function loadSeenQuestionIds(): string[] {
  try {
    const raw = localStorage.getItem(SEEN_QUESTIONS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveSeenQuestionIds(ids: string[]): void {
  try {
    const unique = Array.from(new Set(ids));
    localStorage.setItem(SEEN_QUESTIONS_STORAGE_KEY, JSON.stringify(unique));
  } catch {
    // Ignore storage quota errors
  }
}

export function createPlayerId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `qa_${crypto.randomUUID()}`;
  }
  return `qa_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

function createSubmissionId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `sub_${crypto.randomUUID()}`;
  }
  return `sub_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

// Offline Question Bank persistence (IndexedDB + localStorage metadata marker)
function openOfflineDb(): Promise<IDBDatabase | null> {
  if (typeof indexedDB === 'undefined') return Promise.resolve(null);
  return new Promise((resolve) => {
    try {
      const req = indexedDB.open(OFFLINE_DB_NAME, 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(OFFLINE_STORE_NAME)) {
          db.createObjectStore(OFFLINE_STORE_NAME);
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

export async function persistQuestionsOffline(questions: QuizQuestion[]): Promise<void> {
  try {
    localStorage.setItem(
      OFFLINE_QUESTIONS_META_KEY,
      JSON.stringify({ count: questions.length, savedAt: Date.now() })
    );
  } catch {
    // Ignore quota errors
  }

  const db = await openOfflineDb();
  if (!db) return;

  await new Promise<void>((resolve) => {
    try {
      const tx = db.transaction(OFFLINE_STORE_NAME, 'readwrite');
      const store = tx.objectStore(OFFLINE_STORE_NAME);
      store.put(questions, OFFLINE_QUESTIONS_RECORD_KEY);
      tx.oncomplete = () => {
        db.close();
        resolve();
      };
      tx.onerror = () => {
        db.close();
        resolve();
      };
    } catch {
      db.close();
      resolve();
    }
  });
}

export async function loadOfflineQuestions(): Promise<QuizQuestion[] | null> {
  const db = await openOfflineDb();
  if (!db) return null;

  return new Promise((resolve) => {
    try {
      const tx = db.transaction(OFFLINE_STORE_NAME, 'readonly');
      const store = tx.objectStore(OFFLINE_STORE_NAME);
      const req = store.get(OFFLINE_QUESTIONS_RECORD_KEY);
      req.onsuccess = () => {
        db.close();
        const result = req.result;
        resolve(Array.isArray(result) && result.length > 0 ? result : null);
      };
      req.onerror = () => {
        db.close();
        resolve(null);
      };
    } catch {
      db.close();
      resolve(null);
    }
  });
}

export function hasOfflineQuestionsSaved(): boolean {
  try {
    return Boolean(localStorage.getItem(OFFLINE_QUESTIONS_META_KEY));
  } catch {
    return false;
  }
}

function getTodayDateString(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function subtractDaysFromDateKey(dateKey: string, days: number): string {
  const parts = dateKey.split('-').map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) {
    return getTodayDateString();
  }
  const dt = new Date(parts[0], parts[1] - 1, parts[2]);
  dt.setDate(dt.getDate() - days);
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, '0');
  const d = String(dt.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Keep History & Culture news questions forever on the phone,
 * while pruning other ephemeral news questions (football, geography/politics) after 30 days
 * to keep device storage lightweight.
 */
export function pruneNewsForPhoneRetention(
  questions: QuizQuestion[],
  todayDateKey = getTodayDateString()
): QuizQuestion[] {
  const cutoff30Days = subtractDaysFromDateKey(todayDateKey, 30);
  const byId = new Map<string, QuizQuestion>();

  for (const q of questions) {
    const keepForever = q.category === 'history' || q.category === 'culture' || !q.newsDate;
    if (keepForever || (q.newsDate && q.newsDate >= cutoff30Days)) {
      byId.set(q.id, { ...q, isNews: true });
    }
  }

  return Array.from(byId.values());
}

async function writePhoneNewsToDb(questions: QuizQuestion[]): Promise<void> {
  const db = await openOfflineDb();
  if (!db) return;

  await new Promise<void>((resolve) => {
    try {
      const tx = db.transaction(OFFLINE_STORE_NAME, 'readwrite');
      const store = tx.objectStore(OFFLINE_STORE_NAME);
      store.put(questions, DAILY_NEWS_RECORD_KEY);
      tx.oncomplete = () => {
        db.close();
        resolve();
      };
      tx.onerror = () => {
        db.close();
        resolve();
      };
    } catch {
      db.close();
      resolve();
    }
  });
}

export async function loadPhoneNewsQuestions(
  todayDateKey = getTodayDateString()
): Promise<QuizQuestion[]> {
  const db = await openOfflineDb();
  if (!db) return [];

  const raw = await new Promise<QuizQuestion[]>((resolve) => {
    try {
      const tx = db.transaction(OFFLINE_STORE_NAME, 'readonly');
      const store = tx.objectStore(OFFLINE_STORE_NAME);
      const req = store.get(DAILY_NEWS_RECORD_KEY);
      req.onsuccess = () => {
        db.close();
        const result = req.result;
        resolve(Array.isArray(result) ? result : []);
      };
      req.onerror = () => {
        db.close();
        resolve([]);
      };
    } catch {
      db.close();
      resolve([]);
    }
  });

  const pruned = pruneNewsForPhoneRetention(raw, todayDateKey);
  if (pruned.length !== raw.length) {
    await writePhoneNewsToDb(pruned);
  }
  return pruned;
}

export async function mergeAndPersistDailyNews(
  incomingQuestions: QuizQuestion[],
  todayDateKey = getTodayDateString()
): Promise<QuizQuestion[]> {
  const existing = await loadPhoneNewsQuestions(todayDateKey);
  const pruned = pruneNewsForPhoneRetention([...existing, ...incomingQuestions], todayDateKey);
  await writePhoneNewsToDb(pruned);
  return pruned;
}

export async function fetchDailyNewsPackage(todayDateKey = getTodayDateString()): Promise<{
  date: string;
  todayQuestions: QuizQuestion[];
  phoneNewsQuestions: QuizQuestion[];
}> {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    const phoneNewsQuestions = await loadPhoneNewsQuestions(todayDateKey);
    const todayQuestions = phoneNewsQuestions.filter((q) => q.newsDate === todayDateKey);
    return { date: todayDateKey, todayQuestions, phoneNewsQuestions };
  }

  try {
    const res = await fetch(`/api/daily-news?date=${encodeURIComponent(todayDateKey)}`);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const data = (await res.json()) as {
      date?: string;
      todayQuestions?: QuizQuestion[];
      archiveQuestions?: QuizQuestion[];
    };
    const todayQuestions = Array.isArray(data.todayQuestions) ? data.todayQuestions : [];
    const archiveQuestions = Array.isArray(data.archiveQuestions) ? data.archiveQuestions : [];
    const phoneNewsQuestions = await mergeAndPersistDailyNews(
      [...archiveQuestions, ...todayQuestions],
      todayDateKey
    );
    return {
      date: data.date || todayDateKey,
      todayQuestions,
      phoneNewsQuestions,
    };
  } catch {
    const phoneNewsQuestions = await loadPhoneNewsQuestions(todayDateKey);
    const todayQuestions = phoneNewsQuestions.filter((q) => q.newsDate === todayDateKey);
    return { date: todayDateKey, todayQuestions, phoneNewsQuestions };
  }
}

// Cached Leaderboard Snapshot
export function saveCachedLeaderboard(data: LeaderboardResponse): void {
  try {
    localStorage.setItem(CACHED_LEADERBOARD_STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Ignore quota errors
  }
}

export function loadCachedLeaderboard(): LeaderboardResponse | null {
  try {
    const raw = localStorage.getItem(CACHED_LEADERBOARD_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as LeaderboardResponse;
  } catch {
    return null;
  }
}

// Pending Offline Score Queue
export function loadPendingScores(): PendingScoreSubmission[] {
  try {
    const raw = localStorage.getItem(PENDING_SCORES_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function savePendingScores(items: PendingScoreSubmission[]): void {
  try {
    localStorage.setItem(PENDING_SCORES_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Ignore quota errors
  }
}

export function getPendingScoreCount(): number {
  return loadPendingScores().length;
}

function enqueuePendingScore(entry: PendingScoreSubmission): void {
  const existing = loadPendingScores();
  savePendingScores([...existing, entry]);
}

export async function syncPlayerWithServer(
  profile: PlayerProfile
): Promise<LeaderboardResponse | null> {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return loadCachedLeaderboard();
  }
  try {
    const token = await getFirebaseIdToken();
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
      syncPlayerProfileToFirestore(profile).catch(() => null);
    }

    const res = await fetch('/api/player/sync', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        id: profile.id,
        name: profile.name,
        countryCode: profile.countryCode,
        avatar: profile.avatar,
        bestGameScore: profile.bestGameScore,
        totalScore: profile.totalScore,
        weeklyScore: profile.weeklyScore,
        streak: profile.streak,
      }),
    });
    if (!res.ok) return loadCachedLeaderboard();
    const data = (await res.json()) as LeaderboardResponse;
    saveCachedLeaderboard(data);
    return data;
  } catch {
    return loadCachedLeaderboard();
  }
}

export async function fetchLeaderboard(
  playerId?: string,
  countryCode?: string
): Promise<LeaderboardResponse | null> {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return loadCachedLeaderboard();
  }
  try {
    const params = new URLSearchParams();
    if (playerId) params.set('playerId', playerId);
    if (countryCode) params.set('countryCode', countryCode);
    const token = await getFirebaseIdToken();
    const headers: Record<string, string> = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(`/api/leaderboard?${params.toString()}`, { headers });
    if (!res.ok) return loadCachedLeaderboard();
    const data = (await res.json()) as LeaderboardResponse;
    saveCachedLeaderboard(data);
    return data;
  } catch {
    return loadCachedLeaderboard();
  }
}

export async function submitScoreToServer(params: {
  profile: PlayerProfile;
  mode: 'normal' | 'daily';
  category?: CategorySelection;
  gameScore: number;
  bonus: number;
  streak: number;
  answerLog?: AnswerLogItem[];
}): Promise<{
  leaderboard: LeaderboardResponse | null;
  queuedOffline: boolean;
}> {
  const payload: PendingScoreSubmission = {
    clientSubmissionId: createSubmissionId(),
    id: params.profile.id,
    name: params.profile.name,
    countryCode: params.profile.countryCode,
    avatar: params.profile.avatar,
    mode: params.mode,
    category: params.category,
    gameScore: params.gameScore,
    bonus: params.bonus,
    streak: params.streak,
    answerLog: params.answerLog,
    queuedAt: Date.now(),
  };

  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    enqueuePendingScore(payload);
    return { leaderboard: loadCachedLeaderboard(), queuedOffline: true };
  }

  try {
    const token = await getFirebaseIdToken();
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
      syncPlayerProfileToFirestore(params.profile).catch(() => null);
    }

    const res = await fetch('/api/score/submit', {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      enqueuePendingScore(payload);
      return { leaderboard: loadCachedLeaderboard(), queuedOffline: true };
    }
    const data = await res.json();
    if (data.leaderboard) {
      saveCachedLeaderboard(data.leaderboard);
    }
    return {
      leaderboard: data.leaderboard || loadCachedLeaderboard(),
      queuedOffline: false,
    };
  } catch {
    enqueuePendingScore(payload);
    return { leaderboard: loadCachedLeaderboard(), queuedOffline: true };
  }
}

let isFlushingQueue = false;

export async function flushPendingScores(
  latestProfile?: PlayerProfile | null
): Promise<{ syncedCount: number; leaderboard: LeaderboardResponse | null }> {
  if (isFlushingQueue) {
    return { syncedCount: 0, leaderboard: null };
  }
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return { syncedCount: 0, leaderboard: null };
  }

  const queue = loadPendingScores();
  if (queue.length === 0) {
    return { syncedCount: 0, leaderboard: null };
  }

  isFlushingQueue = true;
  let syncedCount = 0;
  let latestLeaderboard: LeaderboardResponse | null = null;
  const remaining: PendingScoreSubmission[] = [];

  try {
    const token = await getFirebaseIdToken();
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
      if (latestProfile) {
        syncPlayerProfileToFirestore(latestProfile).catch(() => null);
      }
    }

    for (let i = 0; i < queue.length; i++) {
      const item = queue[i];
      const mergedItem = latestProfile
        ? {
            ...item,
            name: latestProfile.name,
            countryCode: latestProfile.countryCode,
            avatar: latestProfile.avatar,
          }
        : item;

      try {
        const res = await fetch('/api/score/submit', {
          method: 'POST',
          headers,
          body: JSON.stringify(mergedItem),
        });
        if (res.ok) {
          syncedCount += 1;
          const data = await res.json();
          if (data.leaderboard) {
            latestLeaderboard = data.leaderboard;
            saveCachedLeaderboard(data.leaderboard);
          }
        } else {
          remaining.push(...queue.slice(i));
          break;
        }
      } catch {
        remaining.push(...queue.slice(i));
        break;
      }
    }
    savePendingScores(remaining);
  } finally {
    isFlushingQueue = false;
  }

  return { syncedCount, leaderboard: latestLeaderboard };
}

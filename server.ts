import dotenv from 'dotenv';
import express from 'express';
import { getApp as getAdminApp, getApps as getAdminApps, initializeApp as initializeAdminApp } from 'firebase-admin/app';
import { getAuth as getAdminAuth } from 'firebase-admin/auth';
import fs from 'fs';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import firebaseConfig from './firebase-applet-config.json';
import { getOrCreateDailyNewsPackage, getServerNewsQuestionsForNormalPlay } from './server/dailyNewsService';
import { attachDuelWebSocketServer, getVerifiedDuelResult } from './server/duelServer';
import { ALL_QUESTIONS } from './src/data/questionBank';
import type { AnswerLogItem, AvatarId, LeaderboardEntry, LeaderboardResponse, QuizQuestion } from './src/types/quiz';
import { getBasePointsForDifficulty } from './src/utils/levelSystem';

dotenv.config();

const adminProjectId =
  firebaseConfig?.projectId && firebaseConfig.projectId !== 'remixed-project-id'
    ? firebaseConfig.projectId
    : undefined;

const adminApp =
  adminProjectId
    ? getAdminApps().length > 0
      ? getAdminApp()
      : initializeAdminApp({ projectId: adminProjectId })
    : null;

const QUESTION_LOOKUP = new Map<string, QuizQuestion>(
  ALL_QUESTIONS.map((q) => [q.id, q])
);

async function extractVerifiedFirebaseUid(req: express.Request): Promise<string | null> {
  if (!adminApp) return null;
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  const token = authHeader.slice(7).trim();
  if (!token) return null;
  try {
    const decoded = await getAdminAuth(adminApp).verifyIdToken(token);
    return decoded.uid || null;
  } catch {
    return null;
  }
}

function computeVerifiedScoreFromLog(answerLog: unknown): number | null {
  if (!Array.isArray(answerLog) || answerLog.length === 0 || answerLog.length > 20) {
    return null;
  }
  const newsPool = getServerNewsQuestionsForNormalPlay();
  const newsMap = new Map<string, QuizQuestion>(newsPool.map((q) => [q.id, q]));
  let total = 0;
  const seen = new Set<string>();

  for (const rawItem of answerLog) {
    if (!rawItem || typeof rawItem !== 'object') continue;
    const item = rawItem as Partial<AnswerLogItem>;
    const qId = typeof item.questionId === 'string' ? item.questionId.trim() : '';
    if (!qId || seen.has(qId)) continue;
    seen.add(qId);

    const q = QUESTION_LOOKUP.get(qId) || newsMap.get(qId);
    if (!q) continue;
    const optIdx = Number(item.optionIndex);
    if (!Number.isInteger(optIdx) || optIdx !== q.correctIndex) continue;

    const clampedTimeLeft = Math.max(0, Math.min(30, Math.round(Number(item.timeLeft) || 0)));
    const basePts = getBasePointsForDifficulty(q.difficulty || 1);
    total += basePts + clampedTimeLeft * 2;
  }

  return total;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.resolve(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'competition.json');

interface StoredPlayer {
  id: string;
  name: string;
  countryCode: string;
  avatar: AvatarId;
  totalScore: number;
  bestGameScore: number;
  weeklyScore: number;
  streak: number;
  diasporaScore?: number;
  bestDiasporaScore?: number;
  updatedAt: number;
}

interface CompetitionStore {
  weekKey: string;
  players: StoredPlayer[];
  processedSubmissionIds?: string[];
}

function getIsoWeekInfo(now = new Date()): { weekKey: string; weekEndsAt: number } {
  const utc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const dayNum = utc.getUTCDay() || 7; // 1 (Mon) .. 7 (Sun)
  utc.setUTCDate(utc.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(utc.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((utc.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  const weekKey = `${utc.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;

  const todayUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const currentDayNum = todayUtc.getUTCDay() || 7;
  const daysUntilNextMonday = 8 - currentDayNum;
  const nextMonday = new Date(todayUtc.getTime() + daysUntilNextMonday * 86400000);
  return { weekKey, weekEndsAt: nextMonday.getTime() };
}

function readStore(): CompetitionStore {
  const { weekKey } = getIsoWeekInfo();
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  let store: CompetitionStore;
  if (!fs.existsSync(DATA_FILE)) {
    store = { weekKey, players: [] };
    fs.writeFileSync(DATA_FILE, JSON.stringify(store, null, 2), 'utf-8');
    return store;
  }

  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    const parsed = JSON.parse(raw) as CompetitionStore;
    store = {
      weekKey: parsed.weekKey || weekKey,
      players: Array.isArray(parsed.players) ? parsed.players : [],
      processedSubmissionIds: Array.isArray(parsed.processedSubmissionIds)
        ? parsed.processedSubmissionIds
        : [],
    };
  } catch {
    store = { weekKey, players: [] };
  }

  if (store.weekKey !== weekKey) {
    store.weekKey = weekKey;
    store.players = store.players.map((p) => ({ ...p, weeklyScore: 0 }));
    writeStore(store);
  }
  return store;
}

function writeStore(store: CompetitionStore) {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(store, null, 2), 'utf-8');
}

function toEntry(p: StoredPlayer, currentPlayerId?: string): LeaderboardEntry {
  return {
    id: p.id,
    name: p.name,
    countryCode: p.countryCode,
    avatar: p.avatar,
    totalScore: p.totalScore,
    bestGameScore: p.bestGameScore,
    weeklyScore: p.weeklyScore,
    streak: p.streak,
    diasporaScore: p.diasporaScore || 0,
    isCurrentPlayer: Boolean(currentPlayerId && p.id === currentPlayerId),
  };
}

function buildLeaderboardResponse(
  store: CompetitionStore,
  playerId?: string,
  filterCountryCode?: string
): LeaderboardResponse {
  const { weekKey, weekEndsAt } = getIsoWeekInfo();
  const currentPlayer = playerId ? store.players.find((p) => p.id === playerId) : undefined;
  const targetCountry = (filterCountryCode || currentPlayer?.countryCode || 'CM').toUpperCase();

  const worldSorted = [...store.players].sort(
    (a, b) => b.totalScore - a.totalScore || b.bestGameScore - a.bestGameScore
  );
  const countrySorted = worldSorted.filter((p) => p.countryCode.toUpperCase() === targetCountry);
  const weeklySorted = [...store.players].sort(
    (a, b) => b.weeklyScore - a.weeklyScore || b.totalScore - a.totalScore
  );
  const diasporaSorted = [...store.players]
    .filter((p) => (p.diasporaScore || 0) > 0 || (p.bestDiasporaScore || 0) > 0)
    .sort(
      (a, b) => (b.diasporaScore || 0) - (a.diasporaScore || 0) || (b.bestDiasporaScore || 0) - (a.bestDiasporaScore || 0)
    );

  const diasporaAllSorted = [...store.players].sort(
    (a, b) => (b.diasporaScore || 0) - (a.diasporaScore || 0) || b.totalScore - a.totalScore
  );

  const worldRankIdx = currentPlayer ? worldSorted.findIndex((p) => p.id === currentPlayer.id) : -1;
  const countryRankIdx = currentPlayer
    ? countrySorted.findIndex((p) => p.id === currentPlayer.id)
    : -1;
  const weeklyRankIdx = currentPlayer ? weeklySorted.findIndex((p) => p.id === currentPlayer.id) : -1;
  const diasporaRankIdx = currentPlayer ? diasporaAllSorted.findIndex((p) => p.id === currentPlayer.id) : -1;

  return {
    weekKey,
    weekEndsAt,
    worldTop10: worldSorted.slice(0, 10).map((p) => toEntry(p, playerId)),
    countryTop10: countrySorted.slice(0, 10).map((p) => toEntry(p, playerId)),
    weeklyTop10: weeklySorted.slice(0, 10).map((p) => toEntry(p, playerId)),
    weeklyChampion: weeklySorted.length > 0 ? toEntry(weeklySorted[0], playerId) : null,
    diasporaTop10: diasporaSorted.slice(0, 10).map((p) => toEntry(p, playerId)),
    diasporaChampion: diasporaSorted.length > 0 ? toEntry(diasporaSorted[0], playerId) : null,
    currentPlayerEntry: currentPlayer ? toEntry(currentPlayer, playerId) : null,
    playerRanks: {
      worldRank: worldRankIdx >= 0 ? worldRankIdx + 1 : worldSorted.length + 1,
      worldTotal: worldSorted.length,
      countryRank: countryRankIdx >= 0 ? countryRankIdx + 1 : countrySorted.length + 1,
      countryTotal: Math.max(countrySorted.length, 1),
      weeklyRank: weeklyRankIdx >= 0 ? weeklyRankIdx + 1 : weeklySorted.length + 1,
      weeklyTotal: weeklySorted.length,
      diasporaRank: diasporaRankIdx >= 0 ? diasporaRankIdx + 1 : diasporaAllSorted.length + 1,
      diasporaTotal: diasporaAllSorted.length,
    },
  };
}

function sanitizeAvatar(val: unknown): AvatarId {
  if (val === 'lion' || val === 'eagle' || val === 'panther' || val === 'footballer') {
    return val;
  }
  return 'lion';
}

function sanitizeName(val: unknown): string {
  const str = typeof val === 'string' ? val.trim() : '';
  return str.slice(0, 28) || 'Champion';
}

function sanitizeCountryCode(val: unknown): string {
  const str = typeof val === 'string' ? val.trim().toUpperCase() : '';
  return /^[A-Z]{2}$/.test(str) ? str : 'CM';
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '256kb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true });
  });

  app.get('/api/daily-news', async (req, res) => {
    try {
      const dateParam = typeof req.query.date === 'string' ? req.query.date : undefined;
      const pkg = await getOrCreateDailyNewsPackage(dateParam);
      res.json(pkg);
    } catch (err) {
      console.error('Failed to serve daily news:', err);
      res.status(500).json({ error: 'Unable to load daily African news' });
    }
  });

  app.get('/api/duel/result/:roomCode', (req, res) => {
    const roomCode = String(req.params.roomCode || '').trim().toUpperCase();
    if (!/^[A-Z0-9]{4,12}$/.test(roomCode)) {
      res.status(400).json({ error: 'Invalid duel room code' });
      return;
    }
    const record = getVerifiedDuelResult(roomCode);
    if (!record) {
      res.status(404).json({ error: 'Verified duel result not found' });
      return;
    }
    res.json(record);
  });

  app.get('/api/leaderboard', async (req, res) => {
    const verifiedUid = await extractVerifiedFirebaseUid(req);
    const rawPlayerId = typeof req.query.playerId === 'string' ? req.query.playerId : undefined;
    const playerId = verifiedUid || rawPlayerId;
    const countryCode =
      typeof req.query.countryCode === 'string' ? req.query.countryCode : undefined;
    const store = readStore();
    res.json(buildLeaderboardResponse(store, playerId, countryCode));
  });

  app.post('/api/player/sync', async (req, res) => {
    const body = req.body || {};
    const verifiedUid = await extractVerifiedFirebaseUid(req);
    const rawId = typeof body.id === 'string' && body.id.trim() ? body.id.trim().slice(0, 64) : '';
    const id = verifiedUid || rawId;
    if (!id) {
      res.status(400).json({ error: 'Missing player id' });
      return;
    }

    const store = readStore();
    const existingIdx = store.players.findIndex((p) => p.id === id);
    const name = sanitizeName(body.name);
    const countryCode = sanitizeCountryCode(body.countryCode);
    const avatar = sanitizeAvatar(body.avatar);
    const clientBest = Math.max(0, Math.min(50000, Number(body.bestGameScore) || 0));
    const clientTotal = Math.max(0, Math.min(5000000, Number(body.totalScore) || 0));
    const clientWeekly = Math.max(0, Math.min(500000, Number(body.weeklyScore) || 0));
    const clientStreak = Math.max(0, Math.min(1000, Number(body.streak) || 0));

    if (existingIdx >= 0) {
      const existing = store.players[existingIdx];
      store.players[existingIdx] = {
        ...existing,
        name,
        countryCode,
        avatar,
        bestGameScore: Math.max(existing.bestGameScore, clientBest),
        totalScore: Math.max(existing.totalScore, clientTotal),
        weeklyScore: Math.max(existing.weeklyScore, clientWeekly),
        streak: Math.max(existing.streak, clientStreak),
        updatedAt: Date.now(),
      };
    } else {
      store.players.push({
        id,
        name,
        countryCode,
        avatar,
        bestGameScore: clientBest,
        totalScore: clientTotal,
        weeklyScore: clientWeekly,
        streak: clientStreak,
        updatedAt: Date.now(),
      });
    }

    writeStore(store);
    res.json(buildLeaderboardResponse(store, id, countryCode));
  });

  app.post('/api/score/submit', async (req, res) => {
    const body = req.body || {};
    const verifiedUid = await extractVerifiedFirebaseUid(req);
    const rawId = typeof body.id === 'string' && body.id.trim() ? body.id.trim().slice(0, 64) : '';
    const id = verifiedUid || rawId;
    if (!id) {
      res.status(400).json({ error: 'Missing player id' });
      return;
    }

    const store = readStore();
    const clientSubmissionId =
      typeof body.clientSubmissionId === 'string' && body.clientSubmissionId.trim()
        ? body.clientSubmissionId.trim().slice(0, 80)
        : '';
    const processed = store.processedSubmissionIds || [];
    const countryCode = sanitizeCountryCode(body.countryCode);

    if (clientSubmissionId && processed.includes(clientSubmissionId)) {
      const savedPlayer = store.players.find((p) => p.id === id) || null;
      const leaderboard = buildLeaderboardResponse(store, id, countryCode);
      res.json({ player: savedPlayer, leaderboard, deduplicated: true });
      return;
    }

    const existingIdx = store.players.findIndex((p) => p.id === id);
    const name = sanitizeName(body.name);
    const avatar = sanitizeAvatar(body.avatar);
    const verifiedAnswerScore = computeVerifiedScoreFromLog(body.answerLog);
    const rawGameScore = Math.max(0, Math.min(5000, Number(body.gameScore) || 0));
    const gameScore =
      verifiedAnswerScore !== null
        ? Math.min(rawGameScore, verifiedAnswerScore)
        : rawGameScore;
    const bonus = Math.max(0, Math.min(5000, Number(body.bonus) || 0));
    const streak = Math.max(0, Math.min(1000, Number(body.streak) || 0));
    const earned = gameScore + bonus;

    const isDiaspora = body.category === 'diaspora';

    if (existingIdx >= 0) {
      const existing = store.players[existingIdx];
      store.players[existingIdx] = {
        ...existing,
        name,
        countryCode,
        avatar,
        bestGameScore: Math.max(existing.bestGameScore, gameScore),
        totalScore: existing.totalScore + earned,
        weeklyScore: existing.weeklyScore + earned,
        streak: streak || existing.streak,
        diasporaScore: isDiaspora
          ? (existing.diasporaScore || 0) + earned
          : existing.diasporaScore || 0,
        bestDiasporaScore: isDiaspora
          ? Math.max(existing.bestDiasporaScore || 0, gameScore)
          : existing.bestDiasporaScore || 0,
        updatedAt: Date.now(),
      };
    } else {
      store.players.push({
        id,
        name,
        countryCode,
        avatar,
        bestGameScore: gameScore,
        totalScore: earned,
        weeklyScore: earned,
        streak,
        diasporaScore: isDiaspora ? earned : 0,
        bestDiasporaScore: isDiaspora ? gameScore : 0,
        updatedAt: Date.now(),
      });
    }

    if (clientSubmissionId) {
      store.processedSubmissionIds = [...processed, clientSubmissionId].slice(-500);
    }

    writeStore(store);
    const savedPlayer = store.players.find((p) => p.id === id)!;
    const leaderboard = buildLeaderboardResponse(store, id, countryCode);
    res.json({ player: savedPlayer, leaderboard });
  });

  const httpServer = http.createServer(app);

  if (process.env.NODE_ENV !== 'production') {
    const cleanupSwScript = `
self.addEventListener('install', () => { self.skipWaiting(); });
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    } catch {}
    try {
      await self.registration.unregister();
    } catch {}
  })());
});
`.trim();
    app.get(['/dev-sw.js', '/sw.js'], (_req, res) => {
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
      res.send(cleanupSwScript);
    });

    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        ws: { server: httpServer },
        allowedHosts: true,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  attachDuelWebSocketServer(httpServer, (room) => {
    const store = readStore();
    const processed = store.processedSubmissionIds || [];
    let changed = false;

    for (const p of room.players) {
      const playerKey = p.firebaseUid || p.id;
      const subId = `duel_${room.roomCode}_${playerKey}`;
      if (processed.includes(subId) || p.score <= 0) continue;

      const idx = store.players.findIndex((sp) => sp.id === playerKey);
      if (idx >= 0) {
        const existing = store.players[idx];
        store.players[idx] = {
          ...existing,
          name: sanitizeName(p.name),
          countryCode: sanitizeCountryCode(p.countryCode),
          avatar: sanitizeAvatar(p.avatar),
          bestGameScore: Math.max(existing.bestGameScore, p.score),
          totalScore: existing.totalScore + p.score,
          weeklyScore: existing.weeklyScore + p.score,
          updatedAt: Date.now(),
        };
      } else {
        store.players.push({
          id: playerKey,
          name: sanitizeName(p.name),
          countryCode: sanitizeCountryCode(p.countryCode),
          avatar: sanitizeAvatar(p.avatar),
          bestGameScore: p.score,
          totalScore: p.score,
          weeklyScore: p.score,
          streak: 0,
          updatedAt: Date.now(),
        });
      }
      processed.push(subId);
      changed = true;
    }

    if (changed) {
      store.processedSubmissionIds = processed.slice(-500);
      writeStore(store);
    }
  });

  const port = Number(process.env.PORT) || 3000;
  httpServer.listen(port, '0.0.0.0', () => {
    console.log(`QUIZ AFRICA server listening on http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

import crypto from 'crypto';
import type { Server as HttpServer } from 'http';
import { WebSocket, WebSocketServer } from 'ws';
import { ALL_QUESTIONS, selectNormalGameQuestions } from '../src/data/questionBank';
import { getServerNewsQuestionsForNormalPlay } from './dailyNewsService';
import type {
  AvatarId,
  CategorySelection,
  DuelParticipant,
  DuelRoomSnapshot,
  PlayScope,
  QuizQuestion,
} from '../src/types/quiz';
import { getBasePointsForDifficulty } from '../src/utils/levelSystem';

const QUESTION_MS = 30000;
const REVEAL_MS = 2800;
const COUNTDOWN_SEC = 3;
const DUEL_SIGNING_SECRET =
  process.env.DUEL_SIGNING_SECRET || crypto.randomBytes(32).toString('hex');

export interface VerifiedDuelResultRecord {
  roomCode: string;
  hostId: string;
  hostFirebaseUid: string | null;
  winnerId: string | null;
  winnerFirebaseUid: string | null;
  isDraw: boolean;
  finishedAt: number;
  serverProof: string;
  players: Array<{
    id: string;
    firebaseUid: string | null;
    name: string;
    countryCode: string;
    avatar: AvatarId;
    score: number;
    correctCount: number;
  }>;
}

const verifiedResultsStore = new Map<string, VerifiedDuelResultRecord>();

function computeDuelProof(payload: {
  roomCode: string;
  players: Array<{ id: string; score: number; correctCount: number }>;
  winnerId: string | null;
  isDraw: boolean;
  finishedAt: number;
}): string {
  const canonical = JSON.stringify({
    roomCode: payload.roomCode,
    players: payload.players.map((p) => ({
      id: p.id,
      score: p.score,
      correctCount: p.correctCount,
    })),
    winnerId: payload.winnerId,
    isDraw: payload.isDraw,
    finishedAt: payload.finishedAt,
  });
  return crypto.createHmac('sha256', DUEL_SIGNING_SECRET).update(canonical).digest('hex');
}

export function getVerifiedDuelResult(roomCode: string): VerifiedDuelResultRecord | null {
  return verifiedResultsStore.get(roomCode.trim().toUpperCase()) || null;
}

interface InternalDuelPlayer extends DuelParticipant {
  ws: WebSocket | null;
}

export interface ServerDuelRoom {
  roomCode: string;
  hostId: string;
  hostFirebaseUid: string | null;
  isPublic: boolean;
  playScope: PlayScope;
  category: CategorySelection;
  status: DuelRoomSnapshot['status'];
  countdownSeconds: number;
  questionIndex: number;
  questions: QuizQuestion[];
  questionEndsAt: number;
  players: InternalDuelPlayer[];
  winnerId: string | null;
  winnerFirebaseUid: string | null;
  isDraw: boolean;
  serverProof: string | null;
  createdAt: number;
  updatedAt: number;
  timer: ReturnType<typeof setTimeout> | null;
  countdownInterval: ReturnType<typeof setInterval> | null;
}

interface ClientPlayerPayload {
  id: string;
  firebaseUid: string | null;
  name: string;
  countryCode: string;
  avatar: AvatarId;
}

function generateRoomCode(existing: Map<string, ServerDuelRoom>): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  for (let attempt = 0; attempt < 20; attempt++) {
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    if (!existing.has(code)) return code;
  }
  return String(Date.now()).slice(-6);
}

function sanitizePlayer(raw: unknown): ClientPlayerPayload | null {
  if (!raw || typeof raw !== 'object') return null;
  const obj = raw as Record<string, unknown>;
  const id = typeof obj.id === 'string' ? obj.id.trim().slice(0, 64) : '';
  if (!id) return null;
  const firebaseUid =
    typeof obj.firebaseUid === 'string' && /^[a-zA-Z0-9_\-]{1,128}$/.test(obj.firebaseUid.trim())
      ? obj.firebaseUid.trim()
      : null;
  const name = (typeof obj.name === 'string' ? obj.name.trim() : '').slice(0, 28) || 'Champion';
  const countryCode =
    typeof obj.countryCode === 'string' && /^[A-Z]{2}$/i.test(obj.countryCode.trim())
      ? obj.countryCode.trim().toUpperCase()
      : 'GA';
  const avatar: AvatarId =
    obj.avatar === 'lion' ||
    obj.avatar === 'eagle' ||
    obj.avatar === 'panther' ||
    obj.avatar === 'footballer'
      ? obj.avatar
      : 'lion';
  return { id, firebaseUid, name, countryCode, avatar };
}



function toSnapshot(room: ServerDuelRoom): DuelRoomSnapshot {
  const q = room.questions[room.questionIndex] || null;
  const showQuestion = room.status === 'question' || room.status === 'reveal';
  const isRevealOrEnd = room.status === 'reveal' || room.status === 'finished';

  return {
    roomCode: room.roomCode,
    hostId: room.hostId,
    hostFirebaseUid: room.hostFirebaseUid,
    isPublic: room.isPublic,
    playScope: room.playScope,
    category: room.category,
    status: room.status,
    countdownSeconds: room.countdownSeconds,
    questionIndex: room.questionIndex,
    totalQuestions: room.questions.length || 10,
    questionEndsAt: room.questionEndsAt,
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
    revealedCorrectIndex: room.status === 'reveal' && q ? q.correctIndex : null,
    revealedExplanation: isRevealOrEnd && q ? q.explanation : null,
    players: room.players.map((p) => ({
      id: p.id,
      firebaseUid: p.firebaseUid || null,
      name: p.name,
      countryCode: p.countryCode,
      avatar: p.avatar,
      score: p.score,
      correctCount: p.correctCount,
      connected: p.connected,
      hasAnsweredCurrent: p.hasAnsweredCurrent,
      lastOptionIndex:
        room.status === 'reveal' || room.status === 'finished' ? p.lastOptionIndex : null,
      lastPointsEarned:
        room.status === 'reveal' || room.status === 'finished' ? p.lastPointsEarned : 0,
    })),
    winnerId: room.winnerId,
    winnerFirebaseUid: room.winnerFirebaseUid,
    isDraw: room.isDraw,
    serverProof: room.serverProof,
  };
}

export function attachDuelWebSocketServer(
  httpServer: HttpServer,
  onDuelFinished?: (room: ServerDuelRoom) => void
) {
  const wss = new WebSocketServer({ noServer: true });
  const rooms = new Map<string, ServerDuelRoom>();
  const socketMeta = new WeakMap<WebSocket, { roomCode?: string; playerId?: string; isAlive?: boolean }>();

  const sendToSocket = (ws: WebSocket | null, event: string, payload: unknown) => {
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    ws.send(JSON.stringify({ event, payload }));
  };

  const broadcastRoom = (room: ServerDuelRoom) => {
    room.updatedAt = Date.now();
    const snapshot = toSnapshot(room);
    for (const p of room.players) {
      sendToSocket(p.ws, 'duel:state', snapshot);
    }
  };

  const clearRoomTimers = (room: ServerDuelRoom) => {
    if (room.timer) {
      clearTimeout(room.timer);
      room.timer = null;
    }
    if (room.countdownInterval) {
      clearInterval(room.countdownInterval);
      room.countdownInterval = null;
    }
  };

  const finishMatch = (room: ServerDuelRoom) => {
    clearRoomTimers(room);
    room.status = 'finished';

    if (room.players.length >= 2) {
      const [p1, p2] = room.players;
      if (p1.correctCount > p2.correctCount) {
        room.winnerId = p1.id;
        room.winnerFirebaseUid = p1.firebaseUid || null;
        room.isDraw = false;
      } else if (p2.correctCount > p1.correctCount) {
        room.winnerId = p2.id;
        room.winnerFirebaseUid = p2.firebaseUid || null;
        room.isDraw = false;
      } else if (p1.score > p2.score) {
        room.winnerId = p1.id;
        room.winnerFirebaseUid = p1.firebaseUid || null;
        room.isDraw = false;
      } else if (p2.score > p1.score) {
        room.winnerId = p2.id;
        room.winnerFirebaseUid = p2.firebaseUid || null;
        room.isDraw = false;
      } else {
        room.winnerId = null;
        room.winnerFirebaseUid = null;
        room.isDraw = true;
      }
    }

    const finishedAt = Date.now();
    const serverProof = computeDuelProof({
      roomCode: room.roomCode,
      players: room.players,
      winnerId: room.winnerId,
      isDraw: room.isDraw,
      finishedAt,
    });
    room.serverProof = serverProof;

    verifiedResultsStore.set(room.roomCode, {
      roomCode: room.roomCode,
      hostId: room.hostId,
      hostFirebaseUid: room.hostFirebaseUid,
      winnerId: room.winnerId,
      winnerFirebaseUid: room.winnerFirebaseUid,
      isDraw: room.isDraw,
      finishedAt,
      serverProof,
      players: room.players.map((p) => ({
        id: p.id,
        firebaseUid: p.firebaseUid || null,
        name: p.name,
        countryCode: p.countryCode,
        avatar: p.avatar,
        score: p.score,
        correctCount: p.correctCount,
      })),
    });

    broadcastRoom(room);
    onDuelFinished?.(room);
  };

  const startQuestion = (room: ServerDuelRoom, idx: number) => {
    clearRoomTimers(room);
    if (idx >= room.questions.length) {
      finishMatch(room);
      return;
    }

    room.status = 'question';
    room.questionIndex = idx;
    room.questionEndsAt = Date.now() + QUESTION_MS;
    for (const p of room.players) {
      p.hasAnsweredCurrent = false;
      p.lastOptionIndex = null;
      p.lastPointsEarned = 0;
    }

    broadcastRoom(room);

    room.timer = setTimeout(() => {
      revealQuestion(room);
    }, QUESTION_MS);
  };

  const revealQuestion = (room: ServerDuelRoom) => {
    if (room.status !== 'question') return;
    clearRoomTimers(room);
    room.status = 'reveal';
    broadcastRoom(room);

    room.timer = setTimeout(() => {
      const nextIdx = room.questionIndex + 1;
      if (nextIdx >= room.questions.length) {
        finishMatch(room);
      } else {
        startQuestion(room, nextIdx);
      }
    }, REVEAL_MS);
  };

  const startCountdown = (room: ServerDuelRoom) => {
    if (room.status !== 'waiting' || room.players.length < 2) return;
    clearRoomTimers(room);

    const newsQuestions = getServerNewsQuestionsForNormalPlay();
    const combinedPool = [...ALL_QUESTIONS, ...newsQuestions];
    const { questions } = selectNormalGameQuestions(
      { type: 'all' },
      'mixed',
      [],
      combinedPool,
      3
    );
    room.questions = questions.slice(0, 10);
    room.questionIndex = 0;
    room.status = 'countdown';
    room.countdownSeconds = COUNTDOWN_SEC;
    broadcastRoom(room);

    room.countdownInterval = setInterval(() => {
      room.countdownSeconds -= 1;
      if (room.countdownSeconds <= 0) {
        if (room.countdownInterval) {
          clearInterval(room.countdownInterval);
          room.countdownInterval = null;
        }
        startQuestion(room, 0);
      } else {
        broadcastRoom(room);
      }
    }, 1000);
  };

  const createRoom = (
    ws: WebSocket,
    player: ClientPlayerPayload,
    isPublic: boolean,
    playScope: PlayScope,
    category: CategorySelection
  ): ServerDuelRoom => {
    const roomCode = generateRoomCode(rooms);
    const room: ServerDuelRoom = {
      roomCode,
      hostId: player.id,
      hostFirebaseUid: player.firebaseUid,
      isPublic,
      playScope,
      category,
      status: 'waiting',
      countdownSeconds: COUNTDOWN_SEC,
      questionIndex: 0,
      questions: [],
      questionEndsAt: 0,
      players: [
        {
          id: player.id,
          firebaseUid: player.firebaseUid,
          name: player.name,
          countryCode: player.countryCode,
          avatar: player.avatar,
          score: 0,
          correctCount: 0,
          connected: true,
          hasAnsweredCurrent: false,
          lastOptionIndex: null,
          lastPointsEarned: 0,
          ws,
        },
      ],
      winnerId: null,
      winnerFirebaseUid: null,
      isDraw: false,
      serverProof: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      timer: null,
      countdownInterval: null,
    };
    rooms.set(roomCode, room);
    socketMeta.set(ws, { roomCode, playerId: player.id, isAlive: true });
    return room;
  };

  const attachPlayerToRoom = (
    ws: WebSocket,
    room: ServerDuelRoom,
    player: ClientPlayerPayload
  ): boolean => {
    const existing = room.players.find((p) => p.id === player.id);
    if (existing) {
      existing.firebaseUid = player.firebaseUid || existing.firebaseUid || null;
      existing.name = player.name;
      existing.countryCode = player.countryCode;
      existing.avatar = player.avatar;
      existing.connected = true;
      existing.ws = ws;
      socketMeta.set(ws, { roomCode: room.roomCode, playerId: player.id, isAlive: true });
      return true;
    }

    if (room.players.length >= 2 || room.status !== 'waiting') {
      return false;
    }

    room.players.push({
      id: player.id,
      firebaseUid: player.firebaseUid,
      name: player.name,
      countryCode: player.countryCode,
      avatar: player.avatar,
      score: 0,
      correctCount: 0,
      connected: true,
      hasAnsweredCurrent: false,
      lastOptionIndex: null,
      lastPointsEarned: 0,
      ws,
    });
    socketMeta.set(ws, { roomCode: room.roomCode, playerId: player.id, isAlive: true });
    return true;
  };

  httpServer.on('upgrade', (request, socket, head) => {
    try {
      const host = request.headers.host || 'localhost';
      const url = new URL(request.url || '/', `http://${host}`);
      if (url.pathname !== '/ws/duel') {
        return;
      }
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
      });
    } catch {
      socket.destroy();
    }
  });

  wss.on('connection', (ws) => {
    socketMeta.set(ws, { isAlive: true });

    ws.on('pong', () => {
      const meta = socketMeta.get(ws) || {};
      socketMeta.set(ws, { ...meta, isAlive: true });
    });

    ws.on('message', (raw) => {
      let msg: { event?: string; payload?: Record<string, unknown> };
      try {
        msg = JSON.parse(raw.toString());
      } catch {
        return;
      }

      const event = msg.event;
      const payload = msg.payload || {};

      if (event === 'duel:create') {
        const player = sanitizePlayer(payload.player);
        if (!player) return;
        const isPublic = Boolean(payload.isPublic);
        const room = createRoom(ws, player, isPublic, { type: 'all' }, 'mixed');
        broadcastRoom(room);
        return;
      }

      if (event === 'duel:quick_match') {
        const player = sanitizePlayer(payload.player);
        if (!player) return;

        // Find open waiting public room with 1 connected player (different id)
        let targetRoom: ServerDuelRoom | undefined;
        for (const r of rooms.values()) {
          if (
            r.isPublic &&
            r.status === 'waiting' &&
            r.players.length === 1 &&
            r.players[0].id !== player.id &&
            r.players[0].connected
          ) {
            targetRoom = r;
            break;
          }
        }

        if (targetRoom) {
          attachPlayerToRoom(ws, targetRoom, player);
          broadcastRoom(targetRoom);
        } else {
          const room = createRoom(ws, player, true, { type: 'all' }, 'mixed');
          broadcastRoom(room);
        }
        return;
      }

      if (event === 'duel:join' || event === 'duel:rejoin') {
        const player = sanitizePlayer(payload.player);
        const code =
          typeof payload.roomCode === 'string'
            ? payload.roomCode.trim().toUpperCase()
            : '';
        if (!player || !code) {
          sendToSocket(ws, 'duel:error', { code: 'INVALID_CODE' });
          return;
        }
        const room = rooms.get(code);
        if (!room) {
          sendToSocket(ws, 'duel:error', { code: 'ROOM_NOT_FOUND' });
          return;
        }
        const ok = attachPlayerToRoom(ws, room, player);
        if (!ok) {
          sendToSocket(ws, 'duel:error', { code: 'ROOM_FULL' });
          return;
        }
        broadcastRoom(room);
        return;
      }

      if (event === 'duel:start') {
        const code =
          typeof payload.roomCode === 'string'
            ? payload.roomCode.trim().toUpperCase()
            : '';
        const playerId = typeof payload.playerId === 'string' ? payload.playerId : '';
        const room = rooms.get(code);
        if (!room) return;
        const inRoom = room.players.some((p) => p.id === playerId);
        if (!inRoom || room.players.length < 2 || room.status !== 'waiting') return;
        startCountdown(room);
        return;
      }

      if (event === 'duel:answer') {
        const code =
          typeof payload.roomCode === 'string'
            ? payload.roomCode.trim().toUpperCase()
            : '';
        const playerId = typeof payload.playerId === 'string' ? payload.playerId : '';
        const qIdx = Number(payload.questionIndex);
        const optIdx = Number(payload.optionIndex);

        const room = rooms.get(code);
        if (!room || room.status !== 'question' || qIdx !== room.questionIndex) return;
        if (!Number.isInteger(optIdx) || optIdx < 0 || optIdx > 3) return;

        const participant = room.players.find((p) => p.id === playerId);
        if (!participant || participant.hasAnsweredCurrent) return; // Idempotent guard

        const q = room.questions[room.questionIndex];
        if (!q) return;

        participant.hasAnsweredCurrent = true;
        participant.lastOptionIndex = optIdx;

        if (optIdx === q.correctIndex) {
          const remainingSec = Math.max(
            0,
            Math.ceil((room.questionEndsAt - Date.now()) / 1000)
          );
          const basePts = getBasePointsForDifficulty(q.difficulty || 1);
          const earned = basePts + Math.round(remainingSec * 2);
          participant.score += earned;
          participant.correctCount += 1;
          participant.lastPointsEarned = earned;
        } else {
          participant.lastPointsEarned = 0;
        }

        if (room.players.every((p) => p.hasAnsweredCurrent)) {
          revealQuestion(room);
        } else {
          broadcastRoom(room);
        }
        return;
      }

      if (event === 'duel:leave') {
        const meta = socketMeta.get(ws);
        const code =
          (typeof payload.roomCode === 'string' && payload.roomCode.trim().toUpperCase()) ||
          meta?.roomCode;
        const playerId =
          (typeof payload.playerId === 'string' && payload.playerId) || meta?.playerId;
        if (!code || !playerId) return;

        const room = rooms.get(code);
        if (!room) return;
        const p = room.players.find((item) => item.id === playerId);
        if (p) {
          p.connected = false;
          p.ws = null;
        }
        if (room.status === 'waiting') {
          room.players = room.players.filter((item) => item.id !== playerId);
          if (room.players.length === 0) {
            clearRoomTimers(room);
            rooms.delete(code);
            return;
          }
          room.hostId = room.players[0].id;
        }
        broadcastRoom(room);
      }
    });

    ws.on('close', () => {
      const meta = socketMeta.get(ws);
      if (!meta?.roomCode || !meta?.playerId) return;
      const room = rooms.get(meta.roomCode);
      if (!room) return;
      const p = room.players.find((item) => item.id === meta.playerId);
      if (p && p.ws === ws) {
        p.connected = false;
        p.ws = null;
        broadcastRoom(room);
      }
    });
  });

  // Heartbeat & stale room cleanup
  const cleanupTimer = setInterval(() => {
    const now = Date.now();
    for (const ws of wss.clients) {
      const meta = socketMeta.get(ws);
      if (meta && meta.isAlive === false) {
        ws.terminate();
        continue;
      }
      if (meta) {
        socketMeta.set(ws, { ...meta, isAlive: false });
      }
      ws.ping();
    }

    for (const [code, room] of rooms.entries()) {
      const age = now - room.updatedAt;
      if (age > 30 * 60 * 1000) {
        clearRoomTimers(room);
        rooms.delete(code);
      }
    }
  }, 25000);

  wss.on('close', () => {
    clearInterval(cleanupTimer);
  });
}

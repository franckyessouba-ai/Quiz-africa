import type { User } from 'firebase/auth';
import {
  AlertTriangle,
  ArrowLeft,
  Bot,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  Crown,
  Lightbulb,
  MessageCircle,
  Play,
  Plus,
  RefreshCw,
  RotateCcw,
  ShieldCheck,
  Swords,
  Users,
  WifiOff,
  XCircle,
  Zap,
} from 'lucide-react';
import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { getCountryByCode, getCountryName } from '../data/countries54';
import { selectNormalGameQuestions } from '../data/questionBank';
import { getUiText } from '../i18n/translations';
import {
  checkFirestoreDuelsConnection,
  createFirestoreDuelRoom,
  DUEL_QUESTION_MS,
  DUEL_REVEAL_MS,
  findOrCreateQuickMatchFirestore,
  finishFirestoreDuel,
  FirestoreDuelDiagnostic,
  FirestoreDuelRoomDoc,
  joinFirestoreDuelRoom,
  leaveFirestoreDuelRoom,
  mapFirestoreRoomToSnapshot,
  revealFirestoreDuelQuestion,
  sendDuelChatMessage,
  startFirestoreDuelCountdown,
  startFirestoreDuelQuestion,
  submitFirestoreDuelAnswer,
  subscribeToDuelMessages,
  subscribeToDuelRoomDoc,
  updateFirestoreDuelCountdown,
} from '../services/duelFirebase';
import { auth, ensureFirebaseUser } from '../services/firebase';
import {
  AvatarId,
  DuelChatMessage,
  DuelParticipant,
  DuelRoomSnapshot,
  PlayerProfile,
  QuizQuestion,
} from '../types/quiz';
import { getBasePointsForDifficulty, getPlayerLevelInfo } from '../utils/levelSystem';
import { soundEngine } from '../utils/sound';
import { AvatarBadge } from './AvatarBadge';
import { ConfettiOverlay } from './ConfettiOverlay';
import { DuelChatPanel } from './DuelChatPanel';

interface DuelScreenProps {
  player: PlayerProfile;
  firebaseUser: User | null;
  onSignInGoogle: () => Promise<void>;
  isOnline: boolean;
  initialRoomCode?: string | null;
  onClearInitialRoomCode?: () => void;
  onDuelFinished: (myScore: number) => void;
  onBack: () => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

const AFRICAN_RIVALS: Array<{ name: string; countryCode: string; avatar: AvatarId }> = [
  { name: 'Kofi Mensah', countryCode: 'GH', avatar: 'footballer' },
  { name: 'Fatou Diallo', countryCode: 'SN', avatar: 'eagle' },
  { name: 'Amara Koné', countryCode: 'CI', avatar: 'panther' },
  { name: 'Amina Al-Mansoor', countryCode: 'EG', avatar: 'lion' },
  { name: 'Tendai Moyo', countryCode: 'ZW', avatar: 'eagle' },
  { name: 'Ngozi Eze', countryCode: 'NG', avatar: 'footballer' },
  { name: 'Chinedu Okafor', countryCode: 'NG', avatar: 'lion' },
  { name: 'Youssef Benali', countryCode: 'MA', avatar: 'panther' },
  { name: 'Aicha Camara', countryCode: 'GN', avatar: 'eagle' },
  { name: 'Moussa Traoré', countryCode: 'ML', avatar: 'footballer' },
];

export function DuelScreen({
  player,
  firebaseUser,
  isOnline,
  initialRoomCode,
  onClearInitialRoomCode,
  onDuelFinished,
  onBack,
}: DuelScreenProps) {
  const [room, setRoom] = useState<DuelRoomSnapshot | null>(null);
  const [activeFsRoomCode, setActiveFsRoomCode] = useState<string | null>(null);
  const [fsRoomDoc, setFsRoomDoc] = useState<FirestoreDuelRoomDoc | null>(null);
  const [actionBusy, setActionBusy] = useState(false);

  const [joinCodeInput, setJoinCodeInput] = useState(initialRoomCode || '');
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [optimisticChoice, setOptimisticChoice] = useState<number | null>(null);

  const [diag, setDiag] = useState<FirestoreDuelDiagnostic | null>(null);
  const [diagLoading, setDiagLoading] = useState(true);
  const [connectionTimedOut, setConnectionTimedOut] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const [isLocalMatch, setIsLocalMatch] = useState(false);
  const localQuestionsRef = useRef<QuizQuestion[]>([]);
  const localTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const localBotTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const localIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const lastSoundKeyRef = useRef<string>('');
  const finishedHandledRef = useRef<string>('');
  const autoJoinedRef = useRef(false);

  const t = getUiText(player.language);
  const [messages, setMessages] = useState<DuelChatMessage[]>([]);

  const myUid = firebaseUser?.uid || auth.currentUser?.uid || '';
  const serverReady = diag?.status === 'connected';

  const clearLocalTimers = useCallback(() => {
    if (localTimeoutRef.current) {
      clearTimeout(localTimeoutRef.current);
      localTimeoutRef.current = null;
    }
    if (localBotTimeoutRef.current) {
      clearTimeout(localBotTimeoutRef.current);
      localBotTimeoutRef.current = null;
    }
    if (localIntervalRef.current) {
      clearInterval(localIntervalRef.current);
      localIntervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => clearLocalTimers();
  }, [clearLocalTimers]);

  // Run Firestore 'duels' connection diagnostic + 5-second timeout guard
  useEffect(() => {
    if (!isOnline || room || isLocalMatch) return;
    let active = true;
    setDiagLoading(true);
    setConnectionTimedOut(false);

    const timer = setTimeout(() => {
      if (!active) return;
      setConnectionTimedOut(true);
      setDiagLoading(false);
    }, 5000);

    checkFirestoreDuelsConnection(5000).then((res) => {
      if (!active) return;
      clearTimeout(timer);
      setDiag(res);
      setDiagLoading(false);
      if (res.status === 'error') {
        setConnectionTimedOut(true);
      } else {
        setConnectionTimedOut(false);
      }
    });

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [isOnline, room, isLocalMatch, retryCount]);

  // Auto-join from shared invite URL (?duel=XXXXXX) once Firestore is ready
  useEffect(() => {
    if (!serverReady || !initialRoomCode || autoJoinedRef.current || room || isLocalMatch) {
      return;
    }
    autoJoinedRef.current = true;
    const code = initialRoomCode.trim().toUpperCase();
    setActionBusy(true);
    joinFirestoreDuelRoom(code, player)
      .then((joinedDoc) => {
        const uid = auth.currentUser?.uid || myUid;
        setFsRoomDoc(joinedDoc);
        setActiveFsRoomCode(joinedDoc.roomCode);
        setRoom(mapFirestoreRoomToSnapshot(joinedDoc, uid, player.id));
        onClearInitialRoomCode?.();
      })
      .catch((err) => {
        const msg = err instanceof Error ? err.message : '';
        if (msg === 'ROOM_NOT_FOUND') setErrorMsg(t.duelErrNotFound);
        else if (msg === 'ROOM_FULL') setErrorMsg(t.duelErrFull);
        else setErrorMsg(t.duelErrInvalid);
        onClearInitialRoomCode?.();
      })
      .finally(() => setActionBusy(false));
  }, [
    serverReady,
    initialRoomCode,
    room,
    isLocalMatch,
    player,
    myUid,
    onClearInitialRoomCode,
    t.duelErrNotFound,
    t.duelErrFull,
    t.duelErrInvalid,
  ]);

  // Real-time Firestore listener on active duel room
  useEffect(() => {
    if (!activeFsRoomCode || isLocalMatch) return;
    const unsub = subscribeToDuelRoomDoc(
      activeFsRoomCode,
      (docData) => {
        if (!docData) return;
        const uid = auth.currentUser?.uid || myUid;
        setFsRoomDoc(docData);
        const mapped = mapFirestoreRoomToSnapshot(docData, uid, player.id);
        setRoom((prev) => {
          if (
            prev?.questionIndex !== mapped.questionIndex ||
            (mapped.status === 'question' && prev?.status !== 'question')
          ) {
            setOptimisticChoice(null);
          }
          return mapped;
        });
      },
      (err) => {
        const msg = err instanceof Error ? err.message : String(err);
        setErrorMsg(msg);
      }
    );
    return () => unsub();
  }, [activeFsRoomCode, isLocalMatch, myUid, player.id]);

  // Real-time Firestore Live Chat listener
  useEffect(() => {
    if (!room?.roomCode || isLocalMatch) return;
    const unsub = subscribeToDuelMessages(
      room.roomCode,
      (list) => setMessages(list),
      () => {}
    );
    return () => unsub();
  }, [room?.roomCode, isLocalMatch]);

  // Drive Firestore Duel match phases cleanly (Host primary driver, Guest resilience fallback)
  useEffect(() => {
    if (isLocalMatch || !fsRoomDoc) return;
    const uid = auth.currentUser?.uid || myUid;
    if (!uid) return;

    const isHost = fsRoomDoc.hostUid === uid;
    const isGuest = fsRoomDoc.guestUid === uid;
    if (!isHost && !isGuest) return;

    if (fsRoomDoc.status === 'countdown') {
      const delay = isHost ? 1000 : 3200;
      const timer = setTimeout(() => {
        if (fsRoomDoc.countdownSeconds > 1) {
          void updateFirestoreDuelCountdown(fsRoomDoc.roomCode, fsRoomDoc.countdownSeconds - 1);
        } else {
          void startFirestoreDuelQuestion(fsRoomDoc.roomCode, 0, Date.now() + DUEL_QUESTION_MS);
        }
      }, delay);
      return () => clearTimeout(timer);
    }

    if (fsRoomDoc.status === 'question') {
      if (isHost && fsRoomDoc.hostAnswered && fsRoomDoc.guestAnswered) {
        const quickTimer = setTimeout(() => {
          void revealFirestoreDuelQuestion(fsRoomDoc.roomCode);
        }, 350);
        return () => clearTimeout(quickTimer);
      }

      const remainingMs = Math.max(200, (fsRoomDoc.questionEndsAtMs || Date.now()) - Date.now());
      const timer = setTimeout(
        () => {
          void revealFirestoreDuelQuestion(fsRoomDoc.roomCode);
        },
        isHost ? remainingMs : remainingMs + 3500
      );
      return () => clearTimeout(timer);
    }

    if (fsRoomDoc.status === 'reveal') {
      const delay = isHost ? DUEL_REVEAL_MS : DUEL_REVEAL_MS + 3500;
      const timer = setTimeout(() => {
        const nextIdx = (fsRoomDoc.questionIndex || 0) + 1;
        const total = Array.isArray(fsRoomDoc.questionIds) ? fsRoomDoc.questionIds.length : 10;
        if (nextIdx >= total) {
          void finishFirestoreDuel(fsRoomDoc);
        } else {
          void startFirestoreDuelQuestion(
            fsRoomDoc.roomCode,
            nextIdx,
            Date.now() + DUEL_QUESTION_MS
          );
        }
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isLocalMatch, fsRoomDoc, myUid]);

  // Countdown visual timer during active question
  useEffect(() => {
    if (!room || room.status !== 'question') return;
    const update = () => {
      const rem = Math.max(0, Math.ceil((room.questionEndsAt - Date.now()) / 1000));
      setTimeLeft(rem);
    };
    update();
    const timer = setInterval(update, 250);
    return () => clearInterval(timer);
  }, [room?.status, room?.questionEndsAt, room?.questionIndex]);

  // Sound effects & finish score callback
  useEffect(() => {
    if (!room) return;
    const me = room.players.find((p) => p.id === player.id);

    if (room.status === 'countdown') {
      const key = `cd_${room.roomCode}_${room.countdownSeconds}`;
      if (lastSoundKeyRef.current !== key) {
        lastSoundKeyRef.current = key;
        soundEngine.playTick();
      }
    } else if (room.status === 'reveal') {
      const key = `rev_${room.roomCode}_${room.questionIndex}`;
      if (lastSoundKeyRef.current !== key) {
        lastSoundKeyRef.current = key;
        if (me && me.lastOptionIndex === room.revealedCorrectIndex) {
          soundEngine.playCorrect();
        } else {
          soundEngine.playWrong();
        }
      }
    } else if (room.status === 'finished') {
      const key = `fin_${room.roomCode}`;
      if (finishedHandledRef.current !== key) {
        finishedHandledRef.current = key;
        if (room.winnerId === player.id) {
          soundEngine.playVictoryFanfare();
        }
        if (me) {
          onDuelFinished(me.score);
        }
      }
    }
  }, [room, player.id, onDuelFinished]);

  const handleSendMessage = async (text: string, kind: 'text' | 'reaction') => {
    if (isLocalMatch || !room) return;
    try {
      await sendDuelChatMessage({
        roomCode: room.roomCode,
        profile: player,
        text,
        kind,
      });
    } catch {
      // ignore transient chat errors
    }
  };

  // Local Duel fallback helpers (when offline or user clicks "Jouer en local")
  const startLocalQuestion = useCallback((idx: number) => {
    const q = localQuestionsRef.current[idx];
    if (!q) return;
    const { correctIndex: _omit, ...publicQ } = q;
    setOptimisticChoice(null);
    setRoom((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        status: 'question',
        questionIndex: idx,
        questionEndsAt: Date.now() + 30000,
        currentQuestion: publicQ,
        revealedCorrectIndex: null,
        revealedExplanation: null,
        players: prev.players.map((p) => ({
          ...p,
          hasAnsweredCurrent: false,
          lastOptionIndex: null,
          lastPointsEarned: 0,
        })),
      };
    });
  }, []);

  const revealLocalQuestion = useCallback(() => {
    clearLocalTimers();
    setRoom((prev) => {
      if (!prev || prev.status !== 'question') return prev;
      const q = localQuestionsRef.current[prev.questionIndex];
      if (!q) return prev;
      return {
        ...prev,
        status: 'reveal',
        revealedCorrectIndex: q.correctIndex,
        revealedExplanation: q.explanation,
      };
    });
  }, [clearLocalTimers]);

  useEffect(() => {
    if (!isLocalMatch || !room) return;

    if (room.status === 'question') {
      const q = localQuestionsRef.current[room.questionIndex];
      if (!q) return;

      const meP = room.players.find((p) => p.id === player.id);
      const botP = room.players.find((p) => p.id !== player.id);

      if (meP?.hasAnsweredCurrent && botP?.hasAnsweredCurrent) {
        const quickReveal = setTimeout(() => {
          revealLocalQuestion();
        }, 350);
        return () => clearTimeout(quickReveal);
      }

      if (botP && !botP.hasAnsweredCurrent && !localBotTimeoutRef.current) {
        const delayMs = 2400 + Math.floor(Math.random() * 5200);
        localBotTimeoutRef.current = setTimeout(() => {
          localBotTimeoutRef.current = null;
          const willGetRight = Math.random() < 0.7;
          const wrongIndices = [0, 1, 2, 3].filter((i) => i !== q.correctIndex);
          const chosenIdx = willGetRight
            ? q.correctIndex
            : wrongIndices[Math.floor(Math.random() * wrongIndices.length)];

          setRoom((prev) => {
            if (!prev || prev.status !== 'question' || prev.questionIndex !== room.questionIndex) {
              return prev;
            }
            const remSec = Math.max(0, Math.ceil((prev.questionEndsAt - Date.now()) / 1000));
            const basePts = getBasePointsForDifficulty(q.difficulty || 1);
            const earned = chosenIdx === q.correctIndex ? basePts + Math.round(remSec * 2) : 0;

            return {
              ...prev,
              players: prev.players.map((p) =>
                p.id === player.id
                  ? p
                  : {
                      ...p,
                      hasAnsweredCurrent: true,
                      lastOptionIndex: chosenIdx,
                      score: p.score + earned,
                      correctCount: p.correctCount + (chosenIdx === q.correctIndex ? 1 : 0),
                      lastPointsEarned: earned,
                    }
              ),
            };
          });
        }, delayMs);
      }

      if (!localTimeoutRef.current) {
        const remainingMs = Math.max(200, room.questionEndsAt - Date.now());
        localTimeoutRef.current = setTimeout(() => {
          localTimeoutRef.current = null;
          revealLocalQuestion();
        }, remainingMs);
      }
    } else if (room.status === 'reveal') {
      const nextTimer = setTimeout(() => {
        const nextIdx = room.questionIndex + 1;
        if (nextIdx >= localQuestionsRef.current.length) {
          setRoom((prev) => {
            if (!prev) return null;
            const p0 = prev.players[0];
            const p1 = prev.players[1];
            const isDraw = p0.score === p1.score;
            const winnerId = isDraw ? null : p0.score > p1.score ? p0.id : p1.id;
            return {
              ...prev,
              status: 'finished',
              winnerId,
              isDraw,
              currentQuestion: null,
            };
          });
        } else {
          startLocalQuestion(nextIdx);
        }
      }, 2800);
      return () => clearTimeout(nextTimer);
    }
  }, [isLocalMatch, room, player.id, revealLocalQuestion, startLocalQuestion]);

  const handleStartLocalMatch = () => {
    soundEngine.playClick();
    clearLocalTimers();
    const { questions: qs } = selectNormalGameQuestions(
      { type: 'all' },
      'mixed',
      [],
      undefined,
      getPlayerLevelInfo(player.totalScore, player.language).level
    );
    localQuestionsRef.current = qs;

    const candidates = AFRICAN_RIVALS.filter((r) => r.countryCode !== player.countryCode);
    const rival =
      candidates[Math.floor(Math.random() * candidates.length)] || AFRICAN_RIVALS[0];

    const localCode = `LOCAL-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    setIsLocalMatch(true);
    setActiveFsRoomCode(null);
    setFsRoomDoc(null);
    setErrorMsg('');
    setOptimisticChoice(null);
    finishedHandledRef.current = '';

    setRoom({
      roomCode: localCode,
      hostId: player.id,
      isPublic: false,
      playScope: { type: 'all' },
      category: 'mixed',
      status: 'countdown',
      countdownSeconds: 3,
      questionIndex: 0,
      totalQuestions: qs.length,
      questionEndsAt: 0,
      currentQuestion: null,
      revealedCorrectIndex: null,
      revealedExplanation: null,
      players: [
        {
          id: player.id,
          name: player.name,
          countryCode: player.countryCode,
          avatar: player.avatar,
          score: 0,
          correctCount: 0,
          connected: true,
          hasAnsweredCurrent: false,
          lastOptionIndex: null,
          lastPointsEarned: 0,
        },
        {
          id: 'local_rival_ai',
          name: rival.name,
          countryCode: rival.countryCode,
          avatar: rival.avatar,
          score: 0,
          correctCount: 0,
          connected: true,
          hasAnsweredCurrent: false,
          lastOptionIndex: null,
          lastPointsEarned: 0,
        },
      ],
      winnerId: null,
      isDraw: false,
    });

    let count = 3;
    localIntervalRef.current = setInterval(() => {
      count -= 1;
      if (count > 0) {
        setRoom((prev) => (prev ? { ...prev, countdownSeconds: count } : null));
      } else {
        clearLocalTimers();
        startLocalQuestion(0);
      }
    }, 1000);
  };

  const handleRetryConnection = () => {
    soundEngine.playClick();
    setConnectionTimedOut(false);
    setDiagLoading(true);
    setErrorMsg('');
    setRetryCount((c) => c + 1);
  };

  const handleCreateDuel = async () => {
    if (actionBusy) return;
    soundEngine.playClick();
    setErrorMsg('');
    setActionBusy(true);
    try {
      const user = await ensureFirebaseUser(5000);
      if (!user) {
        throw new Error('Firebase Auth indisponible.');
      }
      const created = await createFirestoreDuelRoom(player, false);
      finishedHandledRef.current = '';
      setMessages([]);
      setIsLocalMatch(false);
      setFsRoomDoc(created);
      setActiveFsRoomCode(created.roomCode);
      setRoom(mapFirestoreRoomToSnapshot(created, user.uid, player.id));
    } catch (err) {
      soundEngine.playWrong();
      setErrorMsg(err instanceof Error ? err.message : t.duelErrInvalid);
    } finally {
      setActionBusy(false);
    }
  };

  const handleQuickMatch = async () => {
    if (actionBusy) return;
    soundEngine.playClick();
    setErrorMsg('');
    setActionBusy(true);
    try {
      const user = await ensureFirebaseUser(5000);
      if (!user) {
        throw new Error('Firebase Auth indisponible.');
      }
      const { room: matched } = await findOrCreateQuickMatchFirestore(player);
      finishedHandledRef.current = '';
      setMessages([]);
      setIsLocalMatch(false);
      setFsRoomDoc(matched);
      setActiveFsRoomCode(matched.roomCode);
      setRoom(mapFirestoreRoomToSnapshot(matched, user.uid, player.id));
    } catch (err) {
      soundEngine.playWrong();
      setErrorMsg(err instanceof Error ? err.message : t.duelErrInvalid);
    } finally {
      setActionBusy(false);
    }
  };

  const handleJoinDuel = async (e: FormEvent) => {
    e.preventDefault();
    if (actionBusy) return;
    const cleaned = joinCodeInput.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (cleaned.length < 4) {
      soundEngine.playWrong();
      setErrorMsg(t.duelErrInvalid);
      return;
    }
    soundEngine.playClick();
    setErrorMsg('');
    setActionBusy(true);
    try {
      const user = await ensureFirebaseUser(5000);
      if (!user) {
        throw new Error('Firebase Auth indisponible.');
      }
      const joined = await joinFirestoreDuelRoom(cleaned, player);
      finishedHandledRef.current = '';
      setMessages([]);
      setIsLocalMatch(false);
      setFsRoomDoc(joined);
      setActiveFsRoomCode(joined.roomCode);
      setRoom(mapFirestoreRoomToSnapshot(joined, user.uid, player.id));
    } catch (err) {
      soundEngine.playWrong();
      const msg = err instanceof Error ? err.message : '';
      if (msg === 'ROOM_NOT_FOUND') setErrorMsg(t.duelErrNotFound);
      else if (msg === 'ROOM_FULL') setErrorMsg(t.duelErrFull);
      else if (msg === 'INVALID_CODE') setErrorMsg(t.duelErrInvalid);
      else setErrorMsg(msg || t.duelErrInvalid);
    } finally {
      setActionBusy(false);
    }
  };

  const handleStartDuel = async () => {
    if (!room || isLocalMatch) return;
    soundEngine.playClick();
    await startFirestoreDuelCountdown(room.roomCode);
  };

  const handleLeaveRoom = async () => {
    soundEngine.playClick();
    clearLocalTimers();
    const uid = auth.currentUser?.uid || myUid;
    if (fsRoomDoc && !isLocalMatch && uid) {
      void leaveFirestoreDuelRoom(fsRoomDoc, uid);
    }
    setActiveFsRoomCode(null);
    setFsRoomDoc(null);
    setIsLocalMatch(false);
    setRoom(null);
    setMessages([]);
    setOptimisticChoice(null);
    setErrorMsg('');
  };

  const handleCopyInvite = async (code: string) => {
    soundEngine.playClick();
    const url = `${window.location.origin}/?duel=${code}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      // Clipboard unavailable
    }
  };

  const handleAnswer = (optionIndex: number) => {
    if (!room || room.status !== 'question') return;
    const me = room.players.find((p) => p.id === player.id);
    if (!me || me.hasAnsweredCurrent || optimisticChoice !== null) return;

    soundEngine.playClick();
    setOptimisticChoice(optionIndex);

    if (isLocalMatch) {
      const q = localQuestionsRef.current[room.questionIndex];
      if (!q) return;
      const remSec = Math.max(0, Math.ceil((room.questionEndsAt - Date.now()) / 1000));
      const basePts = getBasePointsForDifficulty(q.difficulty || 1);
      const earned = optionIndex === q.correctIndex ? basePts + Math.round(remSec * 2) : 0;

      setRoom((prev) => {
        if (!prev || prev.status !== 'question') return prev;
        return {
          ...prev,
          players: prev.players.map((p) =>
            p.id === player.id
              ? {
                  ...p,
                  hasAnsweredCurrent: true,
                  lastOptionIndex: optionIndex,
                  score: p.score + earned,
                  correctCount: p.correctCount + (optionIndex === q.correctIndex ? 1 : 0),
                  lastPointsEarned: earned,
                }
              : p
          ),
        };
      });
      return;
    }

    const uid = auth.currentUser?.uid || myUid;
    if (fsRoomDoc && uid) {
      void submitFirestoreDuelAnswer(fsRoomDoc, uid, optionIndex);
    }
  };

  // 1. Offline guard
  if (!isOnline && !room) {
    return (
      <main className="max-w-2xl mx-auto px-4 pt-6 pb-14 space-y-5">
        <button
          type="button"
          onClick={() => {
            soundEngine.playClick();
            onBack();
          }}
          className="min-h-[44px] px-4 rounded-xl bg-[var(--qa-card)] border border-[var(--qa-border)] text-sm font-bold text-[var(--qa-text)] inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.backHome}</span>
        </button>

        <section className="rounded-3xl bg-[var(--qa-card)] border border-[#F5B700]/45 p-6 sm:p-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-[#F5B700]/15 border border-[#F5B700]/45 flex items-center justify-center mx-auto">
            <WifiOff className="w-8 h-8 text-[var(--qa-gold-text)]" />
          </div>
          <h1 className="font-display font-extrabold text-2xl text-[var(--qa-text)]">{t.duelTitle}</h1>
          <p className="text-sm text-[var(--qa-text-soft)]">{t.duelRequiresOnline}</p>
          <div className="pt-2">
            <button
              type="button"
              onClick={handleStartLocalMatch}
              className="w-full sm:w-auto min-h-[52px] px-6 rounded-2xl bg-gradient-to-r from-[#009E49] to-[#00B253] hover:brightness-110 text-white font-display font-extrabold text-base inline-flex items-center justify-center gap-2.5 shadow-lg"
            >
              <Bot className="w-5 h-5 text-[#F5B700]" />
              <span>{t.duelPlayLocalBtn}</span>
            </button>
            <p className="text-xs text-[var(--qa-muted)] mt-2">{t.duelPlayLocalDesc}</p>
          </div>
        </section>
      </main>
    );
  }

  // 2. Duel Lobby
  if (!room) {
    return (
      <main className="max-w-3xl mx-auto px-4 pt-5 pb-14 space-y-5">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onBack();
            }}
            className="min-h-[44px] px-4 rounded-xl bg-[var(--qa-card)] border border-[var(--qa-border)] text-sm font-bold text-[var(--qa-text)] hover:border-[var(--qa-border-strong)] inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backHome}</span>
          </button>

          <h1 className="font-display font-extrabold text-lg sm:text-2xl text-[var(--qa-gold-text)] text-end">
            {t.duelTitle}
          </h1>
        </div>

        <section className="rounded-3xl bg-[var(--qa-card)] border border-[#0072CE]/50 p-5 sm:p-6 space-y-5 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0072CE]/15 border border-[#0072CE]/45 flex items-center justify-center shrink-0">
              <Swords className="w-6 h-6 text-[var(--qa-blue-text)]" />
            </div>
            <h2 className="font-display font-extrabold text-lg sm:text-xl text-[var(--qa-text)]">
              {t.btnDuel}
            </h2>
          </div>

          {!serverReady && !connectionTimedOut && diag?.status !== 'error' && (
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--qa-gold-text)]">
              <RefreshCw className="w-3.5 h-3.5 animate-spin shrink-0" />
              <span>{t.duelConnecting}</span>
            </div>
          )}

          {(connectionTimedOut || diag?.status === 'error') && !serverReady && (
            <div className="p-4 rounded-2xl bg-[#D92B2B]/10 border border-[#D92B2B]/45 space-y-3">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-5 h-5 text-[#F5B700] shrink-0 mt-0.5" />
                <div className="space-y-1 min-w-0 flex-1">
                  <h3 className="font-display font-extrabold text-sm text-[var(--qa-text)]">
                    {t.duelDiagTitle}
                  </h3>
                  <p className="text-xs text-[var(--qa-text-soft)]">{t.duelDiagTimeoutNotice}</p>
                </div>
              </div>

              <div className="rounded-xl bg-[var(--qa-inset)] border border-[var(--qa-border)] p-3 space-y-1.5 text-xs">
                {diagLoading && (
                  <p className="text-[var(--qa-gold-text)] font-mono">
                    Firestore (collection &apos;duels&apos;) : Vérification en cours...
                  </p>
                )}

                {!diagLoading && diag?.status === 'error' && (
                  <div className="space-y-1">
                    <p className="text-[#D92B2B] font-bold">{t.duelDiagCollectionErr}</p>
                    <p className="font-mono text-[11px] break-words bg-black/30 p-2 rounded-lg text-[#ff8a8a] border border-[#D92B2B]/30">
                      {diag.errorMessage}
                    </p>
                  </div>
                )}

                {!diagLoading && !diag && (
                  <p className="font-mono text-[11px] break-words bg-black/30 p-2 rounded-lg text-[#ff8a8a] border border-[#D92B2B]/30">
                    Timeout (5s) : Cloud Firestore n&apos;a pas répondu sur la collection &apos;duels&apos;.
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={handleRetryConnection}
                  className="min-h-[48px] px-4 rounded-xl bg-[var(--qa-inset)] border border-[#F5B700]/60 hover:border-[#F5B700] text-[var(--qa-text)] font-display font-bold text-sm flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4 text-[var(--qa-gold-text)]" />
                  <span>{t.duelRetryBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={handleStartLocalMatch}
                  className="min-h-[48px] px-4 rounded-xl bg-gradient-to-r from-[#009E49] to-[#00B253] hover:brightness-110 text-white font-display font-extrabold text-sm flex items-center justify-center gap-2 shadow-md"
                >
                  <Bot className="w-4 h-4 text-[#F5B700]" />
                  <span>{t.duelPlayLocalBtn}</span>
                </button>
              </div>
              <p className="text-[11px] text-[var(--qa-muted)] text-center">
                {t.duelPlayLocalDesc}
              </p>
            </div>
          )}

          {errorMsg && (
            <div className="p-3 rounded-2xl bg-[#D92B2B]/15 border border-[#D92B2B]/50 text-sm font-bold text-[#D92B2B]">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              disabled={!serverReady || actionBusy}
              onClick={handleQuickMatch}
              className="min-h-[60px] px-5 rounded-2xl bg-gradient-to-r from-[#009E49] to-[#00B253] hover:brightness-110 disabled:opacity-50 text-white font-display font-extrabold text-base flex items-center justify-center gap-2.5 shadow-lg"
            >
              <Zap className="w-5 h-5 text-[#F5B700]" />
              <span>{t.duelQuickMatchBtn}</span>
            </button>

            <button
              type="button"
              disabled={!serverReady || actionBusy}
              onClick={handleCreateDuel}
              className="min-h-[60px] px-5 rounded-2xl bg-[#0072CE] hover:brightness-110 disabled:opacity-50 text-white font-display font-extrabold text-base flex items-center justify-center gap-2.5 shadow-lg"
            >
              <Plus className="w-5 h-5 text-white" />
              <span>{t.duelCreateBtn}</span>
            </button>
          </div>

          <form onSubmit={handleJoinDuel} className="flex flex-col sm:flex-row gap-2.5 pt-1">
            <input
              type="text"
              maxLength={8}
              value={joinCodeInput}
              onChange={(e) => {
                setJoinCodeInput(e.target.value.toUpperCase());
                if (errorMsg) setErrorMsg('');
              }}
              placeholder={t.duelCodePlaceholder}
              className="flex-1 min-h-[52px] px-4 rounded-2xl bg-[var(--qa-inset)] border border-[var(--qa-border-strong)] text-[var(--qa-text)] font-display font-bold tracking-widest uppercase placeholder-[var(--qa-muted)] placeholder:tracking-normal focus:outline-none focus:border-[#F5B700]"
            />
            <button
              type="submit"
              disabled={!serverReady || actionBusy}
              className="min-h-[52px] px-5 rounded-2xl bg-[#F5B700] hover:brightness-105 disabled:opacity-50 text-[#0A100D] font-display font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shrink-0"
            >
              <Users className="w-4 h-4" />
              <span>{t.duelJoinBtn}</span>
            </button>
          </form>
        </section>
      </main>
    );
  }

  const me: DuelParticipant | undefined = room.players.find((p) => p.id === player.id);
  const opponent: DuelParticipant | undefined = room.players.find((p) => p.id !== player.id);

  // 3. Waiting Room or Countdown
  if (room.status === 'waiting' || room.status === 'countdown') {
    const inviteUrl =
      typeof window !== 'undefined' ? `${window.location.origin}/?duel=${room.roomCode}` : '';
    const whatsappInviteUrl = `https://wa.me/?text=${encodeURIComponent(
      t.duelInviteTemplate(player.name, room.roomCode, inviteUrl)
    )}`;

    return (
      <main className="max-w-2xl mx-auto px-4 pt-5 pb-14 space-y-5">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleLeaveRoom}
            className="min-h-[44px] px-4 rounded-xl bg-[var(--qa-card)] border border-[var(--qa-border)] text-sm font-bold text-[var(--qa-text)] inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.duelLeaveBtn}</span>
          </button>

          <span className="font-display font-bold text-sm text-[var(--qa-gold-text)]">
            {isLocalMatch ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#009E49]/20 border border-[#009E49]/45 text-[var(--qa-green-text)] text-xs font-extrabold">
                <Bot className="w-3.5 h-3.5" />
                {t.duelLocalTag}
              </span>
            ) : (
              <>
                {t.duelRoomCodeLabel} : <strong className="font-mono-num text-base">{room.roomCode}</strong>
              </>
            )}
          </span>
        </div>

        <section className="rounded-3xl bg-[var(--qa-card)] border border-[#F5B700]/45 p-5 sm:p-7 space-y-6 shadow-2xl text-center">
          {room.status === 'waiting' && !isLocalMatch && (
            <div className="space-y-3">
              <div className="inline-block px-6 py-3 rounded-2xl bg-[var(--qa-inset)] border-2 border-[#F5B700]/70">
                <span className="block text-[11px] uppercase tracking-wider text-[var(--qa-muted)]">
                  {t.duelRoomCodeLabel}
                </span>
                <span className="font-mono-num font-extrabold text-3xl sm:text-4xl tracking-[0.22em] text-[var(--qa-gold-text)]">
                  {room.roomCode}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <button
                  type="button"
                  onClick={() => handleCopyInvite(room.roomCode)}
                  className="min-h-[44px] px-4 rounded-xl bg-[var(--qa-inset)] border border-[var(--qa-border)] text-xs sm:text-sm font-bold text-[var(--qa-text)] inline-flex items-center gap-2"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4 text-[var(--qa-green-text)]" />
                      <span className="text-[var(--qa-green-text)]">{t.copiedToast}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[var(--qa-gold-text)]" />
                      <span>{t.duelCopyLinkBtn}</span>
                    </>
                  )}
                </button>

                <a
                  href={whatsappInviteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-4 rounded-xl bg-[#25D366] text-[#052310] text-xs sm:text-sm font-extrabold inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.duelShareInviteBtn}</span>
                </a>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[var(--qa-inset)] border border-[#009E49]/50 flex flex-col items-center gap-2">
              <AvatarBadge avatarId={me?.avatar || player.avatar} size="lg" />
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-[var(--qa-text)] truncate max-w-[140px]">
                  {me?.name || player.name}
                </span>
                <span>{getCountryByCode(me?.countryCode || player.countryCode).flag}</span>
              </div>
              <span className="text-xs text-[var(--qa-muted)]">
                {getCountryName(me?.countryCode || player.countryCode, player.language)}
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              {room.status === 'countdown' ? (
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-[var(--qa-gold-text)]">
                    {t.duelCountdownTitle}
                  </span>
                  <span className="font-display font-extrabold text-5xl text-[var(--qa-gold-text)] font-mono-num">
                    {room.countdownSeconds}
                  </span>
                </div>
              ) : (
                <div className="w-14 h-14 rounded-full bg-[#F5B700]/15 border border-[#F5B700]/55 flex items-center justify-center">
                  <Swords className="w-7 h-7 text-[var(--qa-gold-text)]" />
                </div>
              )}
            </div>

            {opponent ? (
              <div className="p-4 rounded-2xl bg-[var(--qa-inset)] border border-[#0072CE]/60 flex flex-col items-center gap-2">
                <AvatarBadge avatarId={opponent.avatar} size="lg" />
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-bold text-[var(--qa-text)] truncate max-w-[140px]">
                    {opponent.name}
                  </span>
                  <span>{getCountryByCode(opponent.countryCode).flag}</span>
                </div>
                <span className="text-xs text-[var(--qa-muted)]">
                  {getCountryName(opponent.countryCode, player.language)}
                </span>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-[var(--qa-inset)]/60 border border-dashed border-[var(--qa-border-strong)] flex flex-col items-center justify-center gap-2 min-h-[146px]">
                <Users className="w-8 h-8 text-[var(--qa-muted)]" />
                <span className="text-xs font-semibold text-[var(--qa-muted)]">
                  {t.duelWaitingOpponent}
                </span>
              </div>
            )}
          </div>

          {room.status === 'waiting' && opponent && (
            <div className="space-y-3 pt-2">
              <p className="text-sm font-bold text-[var(--qa-green-text)]">{t.duelOpponentJoined}</p>
              <button
                type="button"
                onClick={handleStartDuel}
                className="w-full min-h-[58px] px-6 rounded-2xl bg-gradient-to-r from-[#009E49] via-[#00B253] to-[#008C40] hover:brightness-110 text-white font-display font-extrabold text-lg flex items-center justify-center gap-2.5 shadow-lg"
              >
                <Play className="w-6 h-6 text-[#F5B700] fill-current" />
                <span>{t.duelStartNowBtn}</span>
              </button>
            </div>
          )}
        </section>

        {room && !isLocalMatch && (
          <DuelChatPanel
            roomCode={room.roomCode}
            profile={player}
            messages={messages}
            onSendMessage={handleSendMessage}
            defaultOpen={true}
          />
        )}
      </main>
    );
  }

  // 4. Finished Screen
  if (room.status === 'finished') {
    const didWin = !room.isDraw && room.winnerId === player.id;
    const outcomeTitle = room.isDraw
      ? t.duelDrawTitle
      : didWin
        ? t.duelVictoryTitle
        : t.duelDefeatTitle;

    return (
      <main className="max-w-2xl mx-auto px-4 pt-6 pb-14 space-y-5">
        <ConfettiOverlay active={didWin} />

        <section className="rounded-3xl bg-[var(--qa-card)] border border-[#F5B700]/45 p-5 sm:p-8 shadow-2xl text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F5B700]/15 border border-[#F5B700]/50">
            {didWin ? (
              <Crown className="w-9 h-9 text-[var(--qa-gold-text)]" />
            ) : (
              <Swords className="w-9 h-9 text-[var(--qa-blue-text)]" />
            )}
          </div>

          <h1
            className={`font-display font-extrabold text-2xl sm:text-4xl ${
              didWin
                ? 'text-[var(--qa-green-text)]'
                : room.isDraw
                  ? 'text-[var(--qa-gold-text)]'
                  : 'text-[#D92B2B]'
            }`}
          >
            {outcomeTitle}
          </h1>

          <div className="grid grid-cols-2 gap-3">
            {me && (
              <div
                className={`p-4 rounded-2xl border flex flex-col items-center gap-2 ${
                  didWin
                    ? 'bg-[#009E49]/15 border-[#009E49]'
                    : 'bg-[var(--qa-inset)] border-[var(--qa-border)]'
                }`}
              >
                <AvatarBadge avatarId={me.avatar} size="md" />
                <span className="font-display font-bold text-sm text-[var(--qa-text)] truncate max-w-full">
                  {me.name} {getCountryByCode(me.countryCode).flag}
                </span>
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-[var(--qa-gold-text)] font-mono-num">
                  {me.score}
                </span>
                <span className="text-xs text-[var(--qa-muted)] font-mono-num">
                  {me.correctCount}/{room.totalQuestions}
                </span>
              </div>
            )}

            {opponent && (
              <div
                className={`p-4 rounded-2xl border flex flex-col items-center gap-2 ${
                  !room.isDraw && room.winnerId === opponent.id
                    ? 'bg-[#0072CE]/15 border-[#0072CE]'
                    : 'bg-[var(--qa-inset)] border-[var(--qa-border)]'
                }`}
              >
                <AvatarBadge avatarId={opponent.avatar} size="md" />
                <span className="font-display font-bold text-sm text-[var(--qa-text)] truncate max-w-full">
                  {opponent.name} {getCountryByCode(opponent.countryCode).flag}
                </span>
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-[var(--qa-gold-text)] font-mono-num">
                  {opponent.score}
                </span>
                <span className="text-xs text-[var(--qa-muted)] font-mono-num">
                  {opponent.correctCount}/{room.totalQuestions}
                </span>
              </div>
            )}
          </div>

          {room.serverProof && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#009E49]/15 border border-[#009E49]/40 text-xs font-bold text-[var(--qa-green-text)]">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.chatVerifiedBadge}</span>
            </div>
          )}

          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                clearLocalTimers();
                setActiveFsRoomCode(null);
                setFsRoomDoc(null);
                setIsLocalMatch(false);
                setRoom(null);
                setMessages([]);
                setOptimisticChoice(null);
              }}
              className="w-full min-h-[56px] px-6 rounded-2xl bg-gradient-to-r from-[#009E49] to-[#00B253] text-white font-display font-extrabold text-lg flex items-center justify-center gap-2.5"
            >
              <RotateCcw className="w-5 h-5" />
              <span>{t.duelNewMatchBtn}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                clearLocalTimers();
                setActiveFsRoomCode(null);
                setFsRoomDoc(null);
                setIsLocalMatch(false);
                onBack();
              }}
              className="w-full min-h-[48px] px-5 rounded-2xl bg-[var(--qa-inset)] border border-[var(--qa-border)] text-[var(--qa-text-soft)] font-bold text-sm flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.backHome}</span>
            </button>
          </div>
        </section>

        {room && !isLocalMatch && (
          <DuelChatPanel
            roomCode={room.roomCode}
            profile={player}
            messages={messages}
            onSendMessage={handleSendMessage}
            defaultOpen={true}
          />
        )}
      </main>
    );
  }

  // 5. Active Duel Arena
  const q = room.currentQuestion;
  if (!q) return null;

  const isRevealed = room.status === 'reveal';
  const myChosenIndex = isRevealed
    ? me?.lastOptionIndex ?? optimisticChoice
    : optimisticChoice ?? (me?.hasAnsweredCurrent ? me.lastOptionIndex : null);
  const myAnswered = Boolean(me?.hasAnsweredCurrent || optimisticChoice !== null);
  const timerRatio = Math.max(0, Math.min(100, (timeLeft / 30) * 100));
  const timerColor =
    timeLeft > 15 ? 'bg-[#009E49]' : timeLeft > 7 ? 'bg-[#F5B700]' : 'bg-[#D92B2B]';

  const questionCountry =
    q.countryCode !== 'AFRICA' ? getCountryByCode(q.countryCode) : null;

  return (
    <main className="max-w-3xl mx-auto px-4 pt-4 pb-12 space-y-4">
      <section className="rounded-2xl bg-[var(--qa-card)] border border-[var(--qa-border)] p-3.5 space-y-3 shadow-md">
        <div className="grid grid-cols-3 items-center gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <AvatarBadge avatarId={me?.avatar || player.avatar} size="sm" />
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <span className="font-display font-bold text-xs sm:text-sm text-[var(--qa-text)] truncate">
                  {me?.name || player.name}
                </span>
                <span className="text-sm">{getCountryByCode(me?.countryCode || player.countryCode).flag}</span>
              </div>
              <div className="font-display font-extrabold text-base sm:text-lg text-[var(--qa-green-text)] font-mono-num leading-tight">
                {me?.score ?? 0}
              </div>
              <span className="text-[10px] font-semibold text-[var(--qa-muted)] block">
                {myAnswered ? t.duelAnsweredBadge : t.duelThinkingBadge}
              </span>
            </div>
          </div>

          <div className="text-center">
            <span className="block font-display font-bold text-xs sm:text-sm text-[var(--qa-gold-text)] font-mono-num">
              {t.questionProgress(room.questionIndex + 1, room.totalQuestions)}
            </span>
            <span className="inline-flex items-center gap-1 font-mono-num font-extrabold text-lg sm:text-xl text-[var(--qa-text)] mt-0.5">
              <Clock className="w-4 h-4 text-[var(--qa-gold-text)]" />
              {timeLeft}s
            </span>
          </div>

          {opponent && (
            <div className="flex items-center justify-end gap-2 min-w-0 text-end">
              <div className="min-w-0">
                <div className="flex items-center justify-end gap-1">
                  <span className="text-sm">{getCountryByCode(opponent.countryCode).flag}</span>
                  <span className="font-display font-bold text-xs sm:text-sm text-[var(--qa-text)] truncate">
                    {opponent.name}
                  </span>
                </div>
                <div className="font-display font-extrabold text-base sm:text-lg text-[var(--qa-blue-text)] font-mono-num leading-tight">
                  {opponent.score}
                </div>
                <span className="text-[10px] font-semibold text-[var(--qa-muted)] block">
                  {!opponent.connected
                    ? t.duelDisconnectedBadge
                    : opponent.hasAnsweredCurrent
                      ? t.duelAnsweredBadge
                      : t.duelThinkingBadge}
                </span>
              </div>
              <AvatarBadge avatarId={opponent.avatar} size="sm" />
            </div>
          )}
        </div>

        <div className="h-2 w-full rounded-full bg-[var(--qa-inset)] overflow-hidden border border-[var(--qa-border)]">
          <div
            className={`h-full transition-all duration-200 rounded-full ${timerColor}`}
            style={{ width: `${timerRatio}%` }}
          />
        </div>
      </section>

      <section className="rounded-3xl bg-[var(--qa-card)] border border-[var(--qa-border)] p-5 sm:p-7 shadow-xl space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-[var(--qa-muted)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="uppercase tracking-wider text-[var(--qa-green-text)]">
              {q.category === 'football'
                ? t.catFootball
                : q.category === 'culture'
                  ? t.catCulture
                  : q.category === 'history'
                    ? t.catHistory
                    : t.catGeography}
            </span>
            <span className="px-2 py-0.5 rounded-lg bg-[var(--qa-inset)] border border-[var(--qa-border)] text-[11px] font-bold text-[var(--qa-gold-text)]">
              {t.difficultyLabels[q.difficulty || 1]}
            </span>
          </div>
          <span>
            {questionCountry
              ? `${questionCountry.flag} ${getCountryName(questionCountry, player.language)}`
              : `🌍 ${t.optionAllAfrica}`}
          </span>
        </div>

        <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--qa-text)] leading-snug">
          {q.prompt[player.language]}
        </h2>

        <div className="grid grid-cols-1 gap-3">
          {q.options.map((opt, idx) => {
            const isCorrect = isRevealed && idx === room.revealedCorrectIndex;
            const isMyPick = myChosenIndex === idx;
            const isOppPick = isRevealed && opponent?.lastOptionIndex === idx;

            let btnStyle =
              'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text)] hover:border-[#F5B700]';
            let badgeStyle = 'bg-[var(--qa-card)] text-[var(--qa-text)] border border-[var(--qa-border)]';

            if (isRevealed) {
              if (isCorrect) {
                btnStyle = 'bg-[#009E49]/20 border-[#009E49] text-[var(--qa-text)]';
                badgeStyle = 'bg-[#009E49] text-white';
              } else if (isMyPick) {
                btnStyle = 'bg-[#D92B2B]/20 border-[#D92B2B] text-[var(--qa-text)]';
                badgeStyle = 'bg-[#D92B2B] text-white';
              } else {
                btnStyle = 'bg-[var(--qa-inset)]/60 border-[var(--qa-border)] text-[var(--qa-muted)] opacity-75';
                badgeStyle = 'bg-[var(--qa-card)] text-[var(--qa-muted)]';
              }
            } else if (isMyPick) {
              btnStyle = 'bg-[#0072CE]/20 border-[#0072CE] text-[var(--qa-text)]';
              badgeStyle = 'bg-[#0072CE] text-white';
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={myAnswered || isRevealed}
                onClick={() => handleAnswer(idx)}
                className={`min-h-[58px] px-4 py-3 rounded-2xl border text-start flex items-center justify-between gap-3 transition-all ${btnStyle}`}
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span
                    className={`w-8 h-8 rounded-xl font-display font-extrabold text-sm flex items-center justify-center shrink-0 ${badgeStyle}`}
                  >
                    {OPTION_LETTERS[idx]}
                  </span>
                  <span className="text-sm sm:text-base font-semibold leading-snug">
                    {opt[player.language]}
                  </span>
                </span>

                <span className="flex items-center gap-1.5 shrink-0">
                  {isRevealed && isMyPick && me && (
                    <AvatarBadge avatarId={me.avatar} size="xs" ringColor="#22C55E" />
                  )}
                  {isRevealed && isOppPick && opponent && (
                    <AvatarBadge avatarId={opponent.avatar} size="xs" ringColor="#0072CE" />
                  )}
                  {isRevealed && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-[#009E49]" />
                  )}
                  {isRevealed && isMyPick && !isCorrect && (
                    <XCircle className="w-5 h-5 text-[#D92B2B]" />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {isRevealed && room.revealedExplanation && (
          <div className="rounded-2xl p-4 bg-[var(--qa-inset)] border border-[#F5B700]/45 flex items-start gap-2.5 text-xs sm:text-sm text-[var(--qa-text-soft)]">
            <Lightbulb className="w-4 h-4 text-[var(--qa-gold-text)] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[var(--qa-gold-text)]">{t.funFactLabel} </span>
              <span>{room.revealedExplanation[player.language]}</span>
            </div>
          </div>
        )}
      </section>

      {room && !isLocalMatch && (
        <DuelChatPanel
          roomCode={room.roomCode}
          profile={player}
          messages={messages}
          onSendMessage={handleSendMessage}
          defaultOpen={false}
        />
      )}
    </main>
  );
}

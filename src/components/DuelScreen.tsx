import type { User } from 'firebase/auth';
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  Crown,
  Lightbulb,
  MessageCircle,
  Play,
  Plus,
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
import { getUiText } from '../i18n/translations';
import {
  sendDuelChatMessage,
  subscribeToDuelMessages,
  syncParticipantDuelRoom,
} from '../services/duelFirebase';
import {
  DuelChatMessage,
  DuelParticipant,
  DuelRoomSnapshot,
  PlayerProfile,
} from '../types/quiz';
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

export function DuelScreen({
  player,
  firebaseUser,
  onSignInGoogle,
  isOnline,
  initialRoomCode,
  onClearInitialRoomCode,
  onDuelFinished,
  onBack,
}: DuelScreenProps) {
  const [room, setRoom] = useState<DuelRoomSnapshot | null>(null);
  const [wsReady, setWsReady] = useState(false);
  const [joinCodeInput, setJoinCodeInput] = useState(initialRoomCode || '');
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [optimisticChoice, setOptimisticChoice] = useState<number | null>(null);

  const wsRef = useRef<WebSocket | null>(null);
  const roomRef = useRef<DuelRoomSnapshot | null>(null);
  const manualCloseRef = useRef(false);
  const reconnectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastSoundKeyRef = useRef<string>('');
  const finishedHandledRef = useRef<string>('');
  const autoJoinedRef = useRef(false);

  const t = getUiText(player.language);

  const [messages, setMessages] = useState<DuelChatMessage[]>([]);

  useEffect(() => {
    if (!room?.roomCode) return;
    const unsub = subscribeToDuelMessages(
      room.roomCode,
      (list) => setMessages(list),
      () => {}
    );
    return () => unsub();
  }, [room?.roomCode]);

  const handleSendMessage = async (text: string, kind: 'text' | 'reaction') => {
    try {
      await sendDuelChatMessage({
        roomCode: room!.roomCode,
        profile: player,
        text,
        kind,
      });
    } catch {
      // ignore
    }
  };

  const sendEvent = useCallback((event: string, payload: Record<string, unknown>) => {
    const ws = wsRef.current;
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ event, payload }));
      return true;
    }
    return false;
  }, []);

  const connectSocket = useCallback(() => {
    if (!isOnline || typeof window === 'undefined') return;
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) return;

    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/ws/duel`;
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      setWsReady(true);
      setErrorMsg('');

      if (roomRef.current?.roomCode) {
        ws.send(
          JSON.stringify({
            event: 'duel:rejoin',
            payload: {
              roomCode: roomRef.current.roomCode,
              player: {
                id: player.id,
                firebaseUid: firebaseUser?.uid || null,
                name: player.name,
                countryCode: player.countryCode,
                avatar: player.avatar,
              },
            },
          })
        );
      } else if (initialRoomCode && !autoJoinedRef.current) {
        autoJoinedRef.current = true;
        ws.send(
          JSON.stringify({
            event: 'duel:join',
            payload: {
              roomCode: initialRoomCode.trim().toUpperCase(),
              player: {
                id: player.id,
                firebaseUid: firebaseUser?.uid || null,
                name: player.name,
                countryCode: player.countryCode,
                avatar: player.avatar,
              },
            },
          })
        );
        onClearInitialRoomCode?.();
      }
    };

    ws.onmessage = (evt) => {
      try {
        const msg = JSON.parse(evt.data);
        if (msg.event === 'duel:state') {
          const nextRoom = msg.payload as DuelRoomSnapshot;
          setRoom((prev) => {
            if (
              prev?.questionIndex !== nextRoom.questionIndex ||
              (nextRoom.status === 'question' && prev?.status !== 'question')
            ) {
              setOptimisticChoice(null);
            }
            return nextRoom;
          });
          setErrorMsg('');
        } else if (msg.event === 'duel:error') {
          const code = msg.payload?.code;
          if (code === 'ROOM_NOT_FOUND') setErrorMsg(t.duelErrNotFound);
          else if (code === 'ROOM_FULL') setErrorMsg(t.duelErrFull);
          else setErrorMsg(t.duelErrInvalid);
          soundEngine.playWrong();
        }
      } catch {
        // Ignore malformed packets
      }
    };

    ws.onclose = () => {
      setWsReady(false);
      if (!manualCloseRef.current && isOnline) {
        reconnectTimerRef.current = setTimeout(() => {
          connectSocket();
        }, 1500);
      }
    };
  }, [
    isOnline,
    player.id,
    player.name,
    player.countryCode,
    player.avatar,
    firebaseUser?.uid,
    initialRoomCode,
    onClearInitialRoomCode,
    t.duelErrNotFound,
    t.duelErrFull,
    t.duelErrInvalid,
  ]);

  useEffect(() => {
    manualCloseRef.current = false;
    if (isOnline) {
      connectSocket();
    }
    return () => {
      manualCloseRef.current = true;
      if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
      if (wsRef.current) {
        if (roomRef.current?.roomCode && wsRef.current.readyState === WebSocket.OPEN) {
          wsRef.current.send(
            JSON.stringify({
              event: 'duel:leave',
              payload: { roomCode: roomRef.current.roomCode, playerId: player.id },
            })
          );
        }
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [isOnline, connectSocket, player.id]);

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

  // Sync duel room & participants to Firestore for secure live chat & verifiable results
  useEffect(() => {
    if (!room || !firebaseUser) return;
    syncParticipantDuelRoom(room, player, firebaseUser).catch(() => null);
  }, [
    room?.roomCode,
    room?.status,
    room?.players.length,
    room?.serverProof,
    firebaseUser,
    player,
    room,
  ]);

  const playerPayload = {
    id: player.id,
    firebaseUid: firebaseUser?.uid || null,
    name: player.name,
    countryCode: player.countryCode,
    avatar: player.avatar,
  };

  const handleCreateDuel = () => {
    soundEngine.playClick();
    setErrorMsg('');
    sendEvent('duel:create', {
      player: playerPayload,
      isPublic: false,
    });
  };

  const handleQuickMatch = () => {
    soundEngine.playClick();
    setErrorMsg('');
    sendEvent('duel:quick_match', {
      player: playerPayload,
    });
  };

  const handleJoinDuel = (e: FormEvent) => {
    e.preventDefault();
    const cleaned = joinCodeInput.trim().toUpperCase();
    if (cleaned.length < 4) {
      soundEngine.playWrong();
      setErrorMsg(t.duelErrInvalid);
      return;
    }
    soundEngine.playClick();
    setErrorMsg('');
    sendEvent('duel:join', {
      roomCode: cleaned,
      player: playerPayload,
    });
  };

  const handleStartDuel = () => {
    if (!room) return;
    soundEngine.playClick();
    sendEvent('duel:start', { roomCode: room.roomCode, playerId: player.id });
  };

  const handleLeaveRoom = () => {
    soundEngine.playClick();
    if (room) {
      sendEvent('duel:leave', { roomCode: room.roomCode, playerId: player.id });
    }
    setRoom(null);
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
    sendEvent('duel:answer', {
      roomCode: room.roomCode,
      playerId: player.id,
      questionIndex: room.questionIndex,
      optionIndex,
    });
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
        </section>
      </main>
    );
  }

  // 2. Duel Auth Gate or Duel Lobby (General Africa questions — no categories)
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

            {!wsReady && (
              <p className="text-xs font-semibold text-[var(--qa-gold-text)]">{t.duelConnecting}</p>
            )}

            {errorMsg && (
              <div className="p-3 rounded-2xl bg-[#D92B2B]/15 border border-[#D92B2B]/50 text-sm font-bold text-[#D92B2B]">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                disabled={!wsReady}
                onClick={handleQuickMatch}
                className="min-h-[60px] px-5 rounded-2xl bg-gradient-to-r from-[#009E49] to-[#00B253] hover:brightness-110 disabled:opacity-50 text-white font-display font-extrabold text-base flex items-center justify-center gap-2.5 shadow-lg"
              >
                <Zap className="w-5 h-5 text-[#F5B700]" />
                <span>{t.duelQuickMatchBtn}</span>
              </button>

              <button
                type="button"
                disabled={!wsReady}
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
                disabled={!wsReady}
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
            {t.duelRoomCodeLabel} : <strong className="font-mono-num text-base">{room.roomCode}</strong>
          </span>
        </div>

        <section className="rounded-3xl bg-[var(--qa-card)] border border-[#F5B700]/45 p-5 sm:p-7 space-y-6 shadow-2xl text-center">
          {room.status === 'waiting' && (
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

        {room && (
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
                setRoom(null);
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
                onBack();
              }}
              className="w-full min-h-[48px] px-5 rounded-2xl bg-[var(--qa-inset)] border border-[var(--qa-border)] text-[var(--qa-text-soft)] font-bold text-sm flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.backHome}</span>
            </button>
          </div>
        </section>

        {room && (
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

      {room && (
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

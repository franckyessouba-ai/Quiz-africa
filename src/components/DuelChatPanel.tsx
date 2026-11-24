import {
  ChevronDown,
  ChevronUp,
  Lock,
  MessageCircle,
  Send,
  Smile,
} from 'lucide-react';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { getCountryByCode } from '../data/countries54';
import { getUiText } from '../i18n/translations';
import {
  sendDuelChatMessage,
  subscribeToDuelMessages,
} from '../services/duelFirebase';
import { DuelChatMessage, PlayerProfile } from '../types/quiz';
import { soundEngine } from '../utils/sound';
import { AvatarBadge } from './AvatarBadge';

interface DuelChatPanelProps {
  roomCode: string;
  player: PlayerProfile;
  firebaseUid: string;
  defaultOpen?: boolean;
}

const QUICK_REACTIONS = ['👏', '🔥', '😂', '😮', '💪', '🏆'];
const EMOJI_PALETTE = [
  '👏',
  '🔥',
  '😂',
  '😮',
  '💪',
  '🏆',
  '👑',
  '🎉',
  '🤝',
  '⚽',
  '🌍',
  '🇬🇦',
  '🇨🇲',
  '🇸🇳',
  '🇨🇮',
  '😎',
];

function formatMsgTime(ms: number): string {
  const dt = new Date(ms);
  return `${String(dt.getHours()).padStart(2, '0')}:${String(dt.getMinutes()).padStart(2, '0')}`;
}

export function DuelChatPanel({
  roomCode,
  player,
  firebaseUid,
  defaultOpen = false,
}: DuelChatPanelProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [messages, setMessages] = useState<DuelChatMessage[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [inputText, setInputText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [sending, setSending] = useState(false);
  const [chatError, setChatError] = useState('');

  const listEndRef = useRef<HTMLDivElement | null>(null);
  const seenMsgIdsRef = useRef<Set<string>>(new Set());
  const isOpenRef = useRef(isOpen);

  const t = getUiText(player.language);

  useEffect(() => {
    isOpenRef.current = isOpen;
    if (isOpen) {
      setUnreadCount(0);
      setTimeout(() => {
        listEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    }
  }, [isOpen]);

  useEffect(() => {
    seenMsgIdsRef.current.clear();
    setMessages([]);
    setUnreadCount(0);
    setChatError('');

    const unsubscribe = subscribeToDuelMessages(
      roomCode,
      (nextMessages) => {
        let newIncoming = 0;
        for (const m of nextMessages) {
          if (!seenMsgIdsRef.current.has(m.id)) {
            seenMsgIdsRef.current.add(m.id);
            if (!isOpenRef.current && m.senderUid !== firebaseUid) {
              newIncoming += 1;
            }
          }
        }
        if (newIncoming > 0) {
          setUnreadCount((prev) => prev + newIncoming);
        }
        setMessages(nextMessages);
        setChatError('');
      },
      () => {
        setChatError(t.chatParticipantOnlyNote);
      }
    );

    return () => unsubscribe();
  }, [roomCode, firebaseUid, t.chatParticipantOnlyNote]);

  useEffect(() => {
    if (isOpen) {
      listEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages.length, isOpen]);

  const handleSendText = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = inputText.trim();
    if (!trimmed || sending) return;

    setSending(true);
    setChatError('');
    try {
      await sendDuelChatMessage({
        roomCode,
        profile: player,
        text: trimmed,
        kind: 'text',
      });
      soundEngine.playClick();
      setInputText('');
      setShowEmojiPicker(false);
    } catch {
      setChatError(t.chatParticipantOnlyNote);
    } finally {
      setSending(false);
    }
  };

  const handleQuickReaction = async (emoji: string) => {
    if (sending) return;
    setSending(true);
    setChatError('');
    try {
      await sendDuelChatMessage({
        roomCode,
        profile: player,
        text: emoji,
        kind: 'reaction',
      });
      soundEngine.playClick();
    } catch {
      setChatError(t.chatParticipantOnlyNote);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="rounded-2xl bg-[var(--qa-card)] border border-[var(--qa-border-strong)] shadow-lg overflow-hidden">
      {/* Collapsible Header Bar */}
      <div className="px-3.5 py-2.5 bg-[var(--qa-inset)] border-b border-[var(--qa-border)] flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-[#0072CE]/20 border border-[#0072CE]/45 flex items-center justify-center shrink-0">
            <MessageCircle className="w-4 h-4 text-[var(--qa-blue-text)]" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm text-[var(--qa-text)]">
                {t.chatTitle}
              </span>
              {unreadCount > 0 && !isOpen && (
                <span className="px-1.5 py-0.5 rounded-md bg-[#D92B2B] text-white text-[10px] font-extrabold font-mono-num">
                  +{unreadCount}
                </span>
              )}
            </div>
            <span className="text-[10px] text-[var(--qa-muted)] flex items-center gap-1 truncate">
              <Lock className="w-2.5 h-2.5 text-[var(--qa-green-text)] shrink-0" />
              <span className="truncate">{t.chatParticipantOnlyNote}</span>
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            soundEngine.playClick();
            setIsOpen((v) => !v);
          }}
          className="min-h-[38px] px-3 rounded-xl bg-[var(--qa-card)] border border-[var(--qa-border)] hover:border-[#F5B700]/60 text-xs font-bold text-[var(--qa-text)] inline-flex items-center gap-1.5 shrink-0"
        >
          <span>{isOpen ? t.chatHideBtn : t.chatShowBtn}</span>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Quick Reactions Strip (always accessible even when chat body is collapsed!) */}
      <div className="px-3 py-2 border-b border-[var(--qa-border)] bg-[var(--qa-card)] flex items-center gap-1.5 overflow-x-auto">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--qa-muted)] shrink-0 me-1">
          {t.chatQuickReactions}
        </span>
        {QUICK_REACTIONS.map((emoji) => (
          <button
            key={emoji}
            type="button"
            disabled={sending}
            onClick={() => handleQuickReaction(emoji)}
            className="min-h-[34px] min-w-[38px] px-2 rounded-xl bg-[var(--qa-inset)] hover:bg-[#F5B700]/20 border border-[var(--qa-border)] hover:border-[#F5B700]/60 text-base flex items-center justify-center transition-colors shrink-0"
            aria-label={`React ${emoji}`}
          >
            {emoji}
          </button>
        ))}
      </div>

      {/* Expandable Chat History & Input */}
      {isOpen && (
        <div className="p-3 space-y-2.5">
          {chatError && (
            <div className="px-3 py-2 rounded-xl bg-[#D92B2B]/15 border border-[#D92B2B]/40 text-xs font-semibold text-[#D92B2B]">
              {chatError}
            </div>
          )}

          {/* Message History */}
          <div className="max-h-[210px] sm:max-h-[250px] overflow-y-auto space-y-2 pe-1">
            {messages.length === 0 ? (
              <p className="text-xs text-[var(--qa-muted)] text-center py-6">
                {t.chatEmpty}
              </p>
            ) : (
              messages.map((msg) => {
                const isMine = msg.senderUid === firebaseUid;
                const flag = getCountryByCode(msg.senderCountryCode).flag;

                if (msg.kind === 'reaction') {
                  return (
                    <div
                      key={msg.id}
                      className={`flex items-center gap-2 ${isMine ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`px-3 py-1 rounded-2xl border inline-flex items-center gap-1.5 ${
                          isMine
                            ? 'bg-[#009E49]/15 border-[#009E49]/45'
                            : 'bg-[var(--qa-inset)] border-[var(--qa-border)]'
                        }`}
                      >
                        <span className="text-[11px] font-bold text-[var(--qa-muted)]">
                          {msg.senderName} {flag}
                        </span>
                        <span className="text-xl leading-none">{msg.text}</span>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={msg.id}
                    className={`flex items-end gap-2 ${isMine ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <AvatarBadge avatarId={msg.senderAvatar} size="xs" />
                    <div
                      className={`max-w-[78%] rounded-2xl px-3 py-2 border ${
                        isMine
                          ? 'bg-[#009E49]/20 border-[#009E49]/50 text-[var(--qa-text)]'
                          : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text)]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-0.5">
                        <span className="text-[11px] font-bold text-[var(--qa-gold-text)] truncate">
                          {msg.senderName} {flag}
                        </span>
                        <span className="text-[10px] text-[var(--qa-muted)] font-mono-num shrink-0">
                          {formatMsgTime(msg.createdAtMs)}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm leading-snug break-words">{msg.text}</p>
                    </div>
                  </div>
                );
              })
            )}
            <div ref={listEndRef} />
          </div>

          {/* Emoji Picker Strip */}
          {showEmojiPicker && (
            <div className="p-2 rounded-xl bg-[var(--qa-inset)] border border-[var(--qa-border)] flex flex-wrap gap-1.5">
              {EMOJI_PALETTE.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => {
                    setInputText((prev) => (prev + emoji).slice(0, 280));
                  }}
                  className="w-9 h-9 rounded-lg hover:bg-[var(--qa-card)] text-lg flex items-center justify-center"
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}

          {/* Message Form */}
          <form onSubmit={handleSendText} className="flex items-center gap-2 pt-0.5">
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setShowEmojiPicker((v) => !v);
              }}
              aria-label="Emojis"
              className={`min-h-[44px] min-w-[44px] rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                showEmojiPicker
                  ? 'bg-[#F5B700]/20 border-[#F5B700] text-[var(--qa-gold-text)]'
                  : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-muted)] hover:text-[var(--qa-text)]'
              }`}
            >
              <Smile className="w-5 h-5" />
            </button>

            <input
              type="text"
              maxLength={280}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t.chatPlaceholder}
              className="flex-1 min-w-0 min-h-[44px] px-3.5 rounded-xl bg-[var(--qa-inset)] border border-[var(--qa-border-strong)] text-sm text-[var(--qa-text)] placeholder-[var(--qa-muted)] focus:outline-none focus:border-[#F5B700]"
            />

            <button
              type="submit"
              disabled={!inputText.trim() || sending}
              aria-label={t.chatSendBtn}
              className="min-h-[44px] px-4 rounded-xl bg-[#009E49] hover:brightness-110 disabled:opacity-45 text-white font-display font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 shrink-0"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">{t.chatSendBtn}</span>
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

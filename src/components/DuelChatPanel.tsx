import { MessageCircle, Send, Smile, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { getCountryByCode } from '../data/countries54';
import { getUiText } from '../i18n/translations';
import { auth } from '../services/firebase';
import { DuelChatMessage, PlayerProfile } from '../types/quiz';
import { soundEngine } from '../utils/sound';
import { AvatarBadge } from './AvatarBadge';

interface DuelChatPanelProps {
  roomCode: string;
  profile: PlayerProfile;
  messages: DuelChatMessage[];
  onSendMessage: (text: string, kind: 'text' | 'reaction') => Promise<void>;
  defaultOpen?: boolean;
}

const QUICK_REACTIONS = ['🔥', '👏', '🎯', '💪', '👑', '😂'];
const EMOJI_PICKER_LIST = ['🔥', '👏', '🎯', '💪', '👑', '😂', '⭐', '🌍', '🇹🇩', '🇬🇦', '🇨🇲', '🇸🇳', '🇨🇮', '🏆', '💯', '🚀'];

export function DuelChatPanel({
  roomCode,
  profile,
  messages,
  onSendMessage,
  defaultOpen = false,
}: DuelChatPanelProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [inputText, setInputText] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const prevMsgCountRef = useRef(messages.length);

  const t = getUiText(profile.language);

  useEffect(() => {
    if (messages.length > prevMsgCountRef.current) {
      if (!isOpen) {
        setUnreadCount((c) => c + (messages.length - prevMsgCountRef.current));
      }
      soundEngine.playClick();
    }
    prevMsgCountRef.current = messages.length;
  }, [messages.length, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;
    const text = inputText.trim();
    setInputText('');
    setShowEmojis(false);
    await onSendMessage(text, 'text');
  };

  const handleReaction = async (emoji: string) => {
    soundEngine.playClick();
    await onSendMessage(emoji, 'reaction');
  };

  return (
    <div className="fixed bottom-4 end-4 z-50 flex flex-col items-end">
      {!isOpen && (
        <button
          type="button"
          onClick={() => {
            soundEngine.playClick();
            setIsOpen(true);
          }}
          className="relative min-h-[52px] min-w-[52px] px-4 rounded-2xl bg-gradient-to-r from-[#009E49] to-[#00B253] text-white font-display font-extrabold shadow-xl flex items-center gap-2.5 hover:brightness-110 transition-all border border-[#F5B700]/50"
          aria-label={t.chatTitle}
        >
          <MessageCircle className="w-6 h-6 shrink-0" />
          <span className="text-sm hidden sm:inline">{t.chatTitle}</span>
          {unreadCount > 0 && (
            <span className="absolute -top-2 -start-2 w-6 h-6 rounded-full bg-[#D92B2B] text-white text-xs font-black flex items-center justify-center shadow-md animate-bounce">
              {unreadCount}
            </span>
          )}
        </button>
      )}

      {isOpen && (
        <div className="w-[92vw] sm:w-[380px] h-[480px] max-h-[75vh] rounded-3xl bg-[var(--qa-card)] border-2 border-[#F5B700]/60 shadow-2xl flex flex-col overflow-hidden backdrop-blur-md">
          {/* Header */}
          <div className="px-4 py-3 bg-[var(--qa-inset)] border-b border-[var(--qa-border)] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#009E49] animate-pulse" />
              <span className="font-display font-black text-sm text-[var(--qa-text)] uppercase tracking-wide">
                {t.chatTitle} ({roomCode})
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setIsOpen(false);
              }}
              className="w-8 h-8 rounded-xl bg-[var(--qa-card)] border border-[var(--qa-border)] text-[var(--qa-text)] flex items-center justify-center hover:border-[#F5B700]"
              aria-label={t.closeBtn}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Reactions Bar */}
          <div className="px-3 py-2 bg-[var(--qa-inset)]/60 border-b border-[var(--qa-border)] flex items-center justify-around shrink-0">
            {QUICK_REACTIONS.map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => handleReaction(emoji)}
                className="w-9 h-9 rounded-xl bg-[var(--qa-card)] border border-[var(--qa-border)] flex items-center justify-center text-lg hover:scale-110 hover:border-[#F5B700] transition-transform shadow-sm"
              >
                {emoji}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-4 space-y-2 text-[var(--qa-muted)]">
                <MessageCircle className="w-10 h-10 stroke-1 opacity-50" />
                <p className="text-xs font-semibold">{t.chatEmpty}</p>
              </div>
            ) : (
              messages.map((msg) => {
                const isMe = msg.senderUid === profile.id || msg.senderUid === authUid();
                const country = getCountryByCode(msg.senderCountryCode);
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2 ${isMe ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <AvatarBadge avatarId={msg.senderAvatar} size="sm" />
                    <div
                      className={`max-w-[75%] rounded-2xl px-3.5 py-2 text-sm shadow-sm ${
                        isMe
                          ? 'bg-[#009E49] text-white rounded-tr-none'
                          : 'bg-[var(--qa-inset)] text-[var(--qa-text)] border border-[var(--qa-border)] rounded-tl-none'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-0.5 text-[11px] opacity-80">
                        <span className="font-bold">{msg.senderName}</span>
                        <span>{country.flag}</span>
                      </div>
                      {msg.kind === 'reaction' ? (
                        <span className="text-2xl block text-center py-0.5">{msg.text}</span>
                      ) : (
                        <p className="break-words font-medium leading-relaxed">{msg.text}</p>
                      )}
                    </div>
                  </div>
                );
              })
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Emoji Picker Popup */}
          {showEmojis && (
            <div className="p-2.5 bg-[var(--qa-inset)] border-t border-[var(--qa-border)] grid grid-cols-8 gap-1 shrink-0">
              {EMOJI_PICKER_LIST.map((emo) => (
                <button
                  key={emo}
                  type="button"
                  onClick={() => {
                    setInputText((prev) => prev + emo);
                    setShowEmojis(false);
                  }}
                  className="h-9 rounded-lg hover:bg-[var(--qa-card)] flex items-center justify-center text-lg transition-colors"
                >
                  {emo}
                </button>
              ))}
            </div>
          )}

          {/* Input Form */}
          <form
            onSubmit={handleSend}
            className="p-3 bg-[var(--qa-inset)] border-t border-[var(--qa-border)] flex items-center gap-2 shrink-0"
          >
            <button
              type="button"
              onClick={() => setShowEmojis((v) => !v)}
              className="w-10 h-10 rounded-xl bg-[var(--qa-card)] border border-[var(--qa-border)] text-[var(--qa-gold-text)] flex items-center justify-center hover:border-[#F5B700] transition-colors shrink-0"
            >
              <Smile className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t.chatPlaceholder}
              maxLength={280}
              className="flex-1 min-h-[42px] px-3.5 rounded-xl bg-[var(--qa-card)] border border-[var(--qa-border)] text-[var(--qa-text)] text-sm focus:outline-none focus:border-[#F5B700]"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="w-10 h-10 rounded-xl bg-[#009E49] disabled:opacity-40 text-white flex items-center justify-center hover:brightness-110 transition-all shrink-0 shadow"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

function authUid(): string {
  return auth.currentUser?.uid || '';
}

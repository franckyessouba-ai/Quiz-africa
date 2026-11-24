import { ArrowLeft, Clock, Crown, Medal, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { getCountryByCode, getCountryName } from '../data/countries54';
import { formatOrdinal, getUiText } from '../i18n/translations';
import { fetchLeaderboard } from '../services/api';
import { LeaderboardResponse, PlayerProfile } from '../types/quiz';
import { soundEngine } from '../utils/sound';
import { AvatarBadge } from './AvatarBadge';

interface WeeklyCompetitionScreenProps {
  player: PlayerProfile;
  initialData: LeaderboardResponse | null;
  onBack: () => void;
}

const WEEKLY_RANK_KEY = 'quiz_africa_last_weekly_rank_v1';

function formatWeekCountdown(weekEndsAt?: number): string {
  if (!weekEndsAt) return '--:--:--';
  const diff = Math.max(0, weekEndsAt - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  return `${days}d ${String(hours).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`;
}

export function WeeklyCompetitionScreen({
  player,
  initialData,
  onBack,
}: WeeklyCompetitionScreenProps) {
  const [data, setData] = useState<LeaderboardResponse | null>(initialData);
  const [countdown, setCountdown] = useState(() =>
    formatWeekCountdown(initialData?.weekEndsAt)
  );
  const [weeklyClimb, setWeeklyClimb] = useState(0);

  const t = getUiText(player.language);

  useEffect(() => {
    let active = true;
    fetchLeaderboard(player.id, player.countryCode).then((res) => {
      if (!active || !res) return;
      try {
        const prevRaw = localStorage.getItem(WEEKLY_RANK_KEY);
        const prevRank = prevRaw ? Number(prevRaw) : 0;
        if (prevRank > res.playerRanks.weeklyRank) {
          setWeeklyClimb(prevRank - res.playerRanks.weeklyRank);
        }
        localStorage.setItem(WEEKLY_RANK_KEY, String(res.playerRanks.weeklyRank));
      } catch {
        // Ignore storage errors
      }
      setData(res);
      setCountdown(formatWeekCountdown(res.weekEndsAt));
    });
    return () => {
      active = false;
    };
  }, [player.id, player.countryCode]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(formatWeekCountdown(data?.weekEndsAt));
    }, 1000);
    return () => clearInterval(timer);
  }, [data?.weekEndsAt]);

  const champion = data?.weeklyChampion;
  const championCountry = champion ? getCountryByCode(champion.countryCode) : null;

  return (
    <main className="max-w-3xl mx-auto px-4 pt-5 pb-14 space-y-5">
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => {
            soundEngine.playClick();
            onBack();
          }}
          className="min-h-[44px] px-4 rounded-xl bg-[var(--qa-card)] border border-[var(--qa-border)] text-sm font-bold text-[var(--qa-text)] hover:border-[var(--qa-border-strong)] inline-flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.backHome}</span>
        </button>

        <h1 className="font-display font-extrabold text-lg sm:text-2xl text-[var(--qa-gold-text)] text-end">
          {t.weeklyTitle}
        </h1>
      </div>

      {/* Countdown */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="rounded-3xl bg-[var(--qa-card)] border border-[#F5B700]/45 p-5 sm:p-6 space-y-4 shadow-xl"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[var(--qa-inset)] border border-[#F5B700]/40">
            <Clock className="w-4 h-4 text-[var(--qa-gold-text)]" />
            <span className="text-xs font-semibold text-[var(--qa-text-soft)]">
              {t.weeklyCountdownLabel}:
            </span>
            <span className="font-display font-extrabold text-sm sm:text-base text-[var(--qa-gold-text)] font-mono-num">
              {countdown}
            </span>
          </div>

          {data && (
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-[var(--qa-green-text)] font-mono-num">
                {formatOrdinal(data.playerRanks.weeklyRank, player.language)} ·{' '}
                {player.weeklyScore} pts
              </span>
              {weeklyClimb > 0 && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#009E49] text-white text-xs font-extrabold">
                  <TrendingUp className="w-3 h-3" />
                  {t.rankClimbed(weeklyClimb)}
                </span>
              )}
            </div>
          )}
        </div>
      </motion.section>

      {/* Current Champion of the Week */}
      {champion && championCountry && (
        <motion.section
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#F5B700]/20 via-[var(--qa-card)] to-[#009E49]/20 border-2 border-[#F5B700]/75 p-5 flex items-center justify-between gap-4 shadow-2xl"
        >
          <div
            className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#F5B700]/20 to-transparent qa-rank-shimmer"
            aria-hidden="true"
          />

          <div className="relative flex items-center gap-3.5 min-w-0">
            <div className="relative shrink-0">
              <AvatarBadge avatarId={champion.avatar} size="lg" ringColor="#F5B700" />
              <span className="absolute -top-2 -end-2 w-7 h-7 rounded-full bg-[#F5B700] text-[#0A100D] flex items-center justify-center shadow">
                <Crown className="w-4 h-4" />
              </span>
            </div>
            <div className="min-w-0">
              <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[var(--qa-gold-text)]">
                {t.weeklyChampionLabel}
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-display font-extrabold text-lg sm:text-xl text-[var(--qa-text)] truncate">
                  {champion.name}
                </span>
                <span className="text-xl leading-none">{championCountry.flag}</span>
              </div>
              <span className="text-xs text-[var(--qa-muted)]">
                {getCountryName(championCountry, player.language)}
              </span>
            </div>
          </div>

          <div className="relative text-end shrink-0">
            <span className="block text-[11px] text-[var(--qa-muted)]">{t.weeklyPointsLabel}</span>
            <span className="font-display font-extrabold text-2xl sm:text-3xl text-[var(--qa-gold-text)] font-mono-num">
              {champion.weeklyScore}
            </span>
          </div>
        </motion.section>
      )}

      {/* Weekly Top 10 */}
      <section className="rounded-3xl bg-[var(--qa-card)] border border-[var(--qa-border)] overflow-hidden shadow-xl">
        {!data ? (
          <div className="p-8 text-center text-sm text-[var(--qa-muted)]">{t.loading}</div>
        ) : (
          <div className="divide-y divide-[var(--qa-border)]">
            {data.weeklyTop10.map((entry, idx) => {
              const rank = idx + 1;
              const country = getCountryByCode(entry.countryCode);
              const isMe = Boolean(entry.isCurrentPlayer || entry.id === player.id);
              return (
                <motion.div
                  key={entry.id}
                  layout
                  initial={{ opacity: 0, x: -14 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: isMe ? [1, 1.015, 1] : 1,
                  }}
                  transition={{
                    duration: 0.32,
                    delay: idx * 0.045,
                    ease: 'easeOut',
                  }}
                  className={`relative overflow-hidden px-4 py-3.5 flex items-center justify-between gap-3 ${
                    isMe
                      ? 'bg-gradient-to-r from-[#009E49]/20 via-[#F5B700]/15 to-[#009E49]/15 ring-1 ring-inset ring-[#F5B700]/70'
                      : ''
                  }`}
                >
                  {isMe && (
                    <div
                      className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#F5B700]/25 to-transparent qa-rank-shimmer"
                      aria-hidden="true"
                    />
                  )}

                  <div className="relative flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-display font-extrabold text-sm font-mono-num shrink-0 ${
                        rank === 1
                          ? 'bg-[#F5B700] text-[#0A100D]'
                          : rank === 2
                            ? 'bg-[#CBD5E1] text-[#0A100D]'
                            : rank === 3
                              ? 'bg-[#D97706] text-white'
                              : 'bg-[var(--qa-inset)] text-[var(--qa-muted)] border border-[var(--qa-border)]'
                      }`}
                    >
                      {rank <= 3 ? <Medal className="w-4 h-4" /> : rank}
                    </div>

                    <AvatarBadge avatarId={entry.avatar} size="sm" />

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`font-display font-bold text-sm sm:text-base truncate ${
                            isMe ? 'text-[var(--qa-gold-text)]' : 'text-[var(--qa-text)]'
                          }`}
                        >
                          {entry.name}
                        </span>
                        <span className="text-base leading-none">{country.flag}</span>
                        {isMe && <Sparkles className="w-3.5 h-3.5 text-[#F5B700] shrink-0" />}
                      </div>
                      <span className="text-xs text-[var(--qa-muted)] block truncate">
                        {getCountryName(country, player.language)}
                      </span>
                    </div>
                  </div>

                  <div className="relative text-end shrink-0">
                    <span className="font-display font-extrabold text-base sm:text-lg text-[var(--qa-gold-text)] font-mono-num">
                      {entry.weeklyScore}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

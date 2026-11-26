import { ArrowLeft, Clock, Crown, Medal, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { HOME_BACKDROP_IMAGE } from '../data/avatars';
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
  const identityCountry = getCountryByCode(player.countryCode);
  const identityCountryName = getCountryName(identityCountry, player.language);

  const isPlayerInWeeklyTop10 = Boolean(
    data?.weeklyTop10.some((entry) => entry.isCurrentPlayer || entry.id === player.id)
  );
  const selfWeeklyEntry = data?.currentPlayerEntry || {
    id: player.id,
    name: player.name,
    countryCode: player.countryCode,
    avatar: player.avatar,
    totalScore: player.totalScore,
    bestGameScore: player.bestGameScore,
    weeklyScore: player.weeklyScore,
    streak: player.streak,
    diasporaScore: player.diasporaScore || 0,
    isCurrentPlayer: true,
  };

  return (
    <main className="relative isolate w-full flex-1 min-h-0 overflow-hidden">
      {/* Unified Atmospheric Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <img
          src={HOME_BACKDROP_IMAGE}
          alt=""
          className="w-full h-full object-cover object-center opacity-45 select-none"
        />
        <div className="absolute inset-0 bg-[#0A100D]/75" />
      </div>

      <div className="h-full max-w-3xl mx-auto px-3.5 sm:px-6 pt-2.5 sm:pt-4 pb-3.5 sm:pb-4 flex flex-col gap-2.5">
        {/* Top Row */}
        <div className="flex items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onBack();
            }}
            className="min-h-[42px] px-3.5 rounded-xl bg-[var(--qa-card)]/90 border border-[var(--qa-border)] text-sm font-bold text-[var(--qa-text)] hover:border-[var(--qa-border-strong)] inline-flex items-center gap-2 transition-colors backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backHome}</span>
          </button>

          <h1 className="font-display font-extrabold text-base sm:text-2xl text-[var(--qa-gold-text)] text-end truncate">
            {t.weeklyTitle}
          </h1>
        </div>

        {/* Countdown + Player Weekly Rank */}
        <section className="shrink-0 rounded-2xl bg-[var(--qa-card)]/92 border border-[#F5B700]/45 px-3.5 py-2.5 shadow-lg backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[var(--qa-inset)] border border-[#F5B700]/40">
              <Clock className="w-3.5 h-3.5 text-[var(--qa-gold-text)] shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold text-[var(--qa-text-soft)]">
                {t.weeklyCountdownLabel}:
              </span>
              <span className="font-display font-extrabold text-xs sm:text-sm text-[var(--qa-gold-text)] font-mono-num">
                {countdown}
              </span>
            </div>

            {data && (
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-[var(--qa-green-text)] font-mono-num">
                  {t.rankOfTotal(
                    formatOrdinal(data.playerRanks.weeklyRank, player.language),
                    data.playerRanks.weeklyTotal
                  )}{' '}
                  · {player.weeklyScore} pts
                </span>
                {weeklyClimb > 0 && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#009E49] text-white text-[11px] font-extrabold">
                    <TrendingUp className="w-3 h-3" />
                    {t.rankClimbed(weeklyClimb)}
                  </span>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Current Champion of the Week */}
        {champion && championCountry && (
          <motion.section
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#F5B700]/20 via-[var(--qa-card)]/95 to-[#009E49]/20 border border-[#F5B700]/75 px-3.5 py-2.5 sm:p-3.5 flex items-center justify-between gap-3 shadow-xl backdrop-blur-sm"
          >
            <div
              className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#F5B700]/20 to-transparent qa-rank-shimmer"
              aria-hidden="true"
            />

            <div className="relative flex items-center gap-3 min-w-0">
              <div className="relative shrink-0">
                <AvatarBadge avatarId={champion.avatar} size="md" ringColor="#F5B700" />
                <span className="absolute -top-1.5 -end-1.5 w-6 h-6 rounded-full bg-[#F5B700] text-[#0A100D] flex items-center justify-center shadow">
                  <Crown className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[var(--qa-gold-text)] truncate">
                  {t.weeklyChampionLabel}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-sm sm:text-lg text-[var(--qa-text)] truncate">
                    {champion.name}
                  </span>
                  <span className="text-base sm:text-lg leading-none">{championCountry.flag}</span>
                </div>
              </div>
            </div>

            <div className="relative text-end shrink-0">
              <span className="block text-[10px] text-[var(--qa-muted)]">{t.weeklyPointsLabel}</span>
              <span className="font-display font-extrabold text-lg sm:text-2xl text-[var(--qa-gold-text)] font-mono-num leading-none">
                {champion.weeklyScore}
              </span>
            </div>
          </motion.section>
        )}

        {/* Fixed Weekly Top 10 Card with Internal Scroll + Pinned Outside-Top-10 Row */}
        <section className="flex-1 min-h-0 rounded-2xl sm:rounded-3xl bg-[var(--qa-card)]/92 border border-[var(--qa-border)] overflow-hidden shadow-xl flex flex-col backdrop-blur-sm">
          {!data ? (
            <div className="flex-1 flex items-center justify-center p-6 text-sm text-[var(--qa-muted)]">
              {t.loading}
            </div>
          ) : (
            <>
              <div className="flex-1 min-h-0 overflow-y-auto divide-y divide-[var(--qa-border)]">
                {data.weeklyTop10.map((entry, idx) => {
                  const rank = idx + 1;
                  const country = getCountryByCode(entry.countryCode);
                  const isMe = Boolean(entry.isCurrentPlayer || entry.id === player.id);
                  return (
                    <div
                      key={entry.id}
                      className={`relative overflow-hidden px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-3 ${
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

                      <div className="relative flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center font-display font-extrabold text-xs sm:text-sm font-mono-num shrink-0 ${
                            rank === 1
                              ? 'bg-[#F5B700] text-[#0A100D]'
                              : rank === 2
                                ? 'bg-[#CBD5E1] text-[#0A100D]'
                                : rank === 3
                                  ? 'bg-[#D97706] text-white'
                                  : 'bg-[var(--qa-inset)] text-[var(--qa-muted)] border border-[var(--qa-border)]'
                          }`}
                        >
                          {rank <= 3 ? <Medal className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : rank}
                        </div>

                        <AvatarBadge avatarId={entry.avatar} size="sm" />

                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`font-display font-bold text-xs sm:text-sm truncate ${
                                isMe ? 'text-[var(--qa-gold-text)]' : 'text-[var(--qa-text)]'
                              }`}
                            >
                              {entry.name}
                            </span>
                            <span className="text-sm sm:text-base leading-none">{country.flag}</span>
                            {isMe && <Sparkles className="w-3.5 h-3.5 text-[#F5B700] shrink-0" />}
                          </div>
                          <span className="text-[11px] text-[var(--qa-muted)] block truncate">
                            {getCountryName(country, player.language)}
                          </span>
                        </div>
                      </div>

                      <div className="relative text-end shrink-0">
                        <span className="font-display font-extrabold text-sm sm:text-base text-[var(--qa-gold-text)] font-mono-num">
                          {entry.weeklyScore}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {!isPlayerInWeeklyTop10 && (
                <div className="shrink-0 border-t border-[#F5B700]/50">
                  <div className="px-3.5 sm:px-4 py-1 bg-[var(--qa-inset)] flex items-center justify-between gap-2 text-[10px] sm:text-[11px] font-bold text-[var(--qa-muted)]">
                    <span>··· {t.outsideTop10Label}</span>
                    <span className="font-mono-num text-[var(--qa-gold-text)]">
                      {t.rankOfTotal(
                        formatOrdinal(data.playerRanks.weeklyRank, player.language),
                        data.playerRanks.weeklyTotal
                      )}
                    </span>
                  </div>

                  <div className="relative overflow-hidden px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-3 bg-gradient-to-r from-[#009E49]/25 via-[#F5B700]/15 to-[#009E49]/20">
                    <div
                      className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#F5B700]/25 to-transparent qa-rank-shimmer"
                      aria-hidden="true"
                    />

                    <div className="relative flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <div className="min-w-[2.1rem] px-1.5 h-7 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center font-display font-extrabold text-xs font-mono-num shrink-0 bg-[#F5B700]/25 text-[var(--qa-gold-text)] border border-[#F5B700]/60">
                        #{data.playerRanks.weeklyRank}
                      </div>

                      <AvatarBadge avatarId={selfWeeklyEntry.avatar} size="sm" />

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-display font-bold text-xs sm:text-sm truncate text-[var(--qa-gold-text)]">
                            {selfWeeklyEntry.name}
                          </span>
                          <span className="text-sm sm:text-base leading-none">
                            {identityCountry.flag}
                          </span>
                          <Sparkles className="w-3.5 h-3.5 text-[#F5B700] shrink-0" />
                        </div>
                        <span className="text-[11px] text-[var(--qa-muted)] block truncate">
                          {identityCountryName} ·{' '}
                          {t.rankOfTotal(
                            formatOrdinal(data.playerRanks.weeklyRank, player.language),
                            data.playerRanks.weeklyTotal
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="relative text-end shrink-0">
                      <span className="font-display font-extrabold text-sm sm:text-base text-[var(--qa-gold-text)] font-mono-num">
                        {selfWeeklyEntry.weeklyScore}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </main>
  );
}

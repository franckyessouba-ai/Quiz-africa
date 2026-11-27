import { CalendarDays, Crown, Play, Swords, Trophy } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { HOME_BACKDROP_IMAGE, TROPHY_CREST_IMAGE } from '../data/avatars';
import { SELAH_BRAND } from '../data/brand';
import { getLocalDateKey } from '../data/questionBank';
import { formatOrdinal, getUiText } from '../i18n/translations';
import { Language, LeaderboardResponse, PlayerProfile } from '../types/quiz';
import { getPlayerLevelInfo } from '../utils/levelSystem';
import { soundEngine } from '../utils/sound';

interface HomeScreenProps {
  player: PlayerProfile;
  leaderboard: LeaderboardResponse | null;
  onPlayClick: () => void;
  onDailyClick: () => void;
  onDuelClick: () => void;
  onLeaderboardClick: () => void;
  onWeeklyClick: () => void;
  onChangeLanguage: (lang: Language) => void;
  onOpenAbout: () => void;
}

function getTimeUntilMidnight(): string {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
  const diff = Math.max(0, midnight.getTime() - now.getTime());
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function HomeScreen({
  player,
  leaderboard,
  onPlayClick,
  onDailyClick,
  onDuelClick,
  onLeaderboardClick,
  onWeeklyClick,
  onOpenAbout,
}: HomeScreenProps) {
  const [crestError, setCrestError] = useState(false);
  const [backdropError, setBackdropError] = useState(false);
  const [midnightCountdown, setMidnightCountdown] = useState(getTimeUntilMidnight);

  const t = getUiText(player.language);
  const todayKey = getLocalDateKey();
  const dailyPlayedToday = Boolean(player.dailyHistory[todayKey]);

  useEffect(() => {
    if (!dailyPlayedToday) return;
    const timer = setInterval(() => {
      setMidnightCountdown(getTimeUntilMidnight());
    }, 1000);
    return () => clearInterval(timer);
  }, [dailyPlayedToday]);

  const worldRank = leaderboard?.playerRanks.worldRank ?? null;
  const worldTotal = leaderboard?.playerRanks.worldTotal ?? null;
  const weeklyRank = leaderboard?.playerRanks.weeklyRank ?? null;
  const weeklyTotal = leaderboard?.playerRanks.weeklyTotal ?? null;
  const levelInfo = getPlayerLevelInfo(player.totalScore, player.language);

  return (
    <main className="relative isolate w-full flex-1 min-h-0 flex flex-col justify-between overflow-x-hidden overflow-y-auto px-3.5 sm:px-6 pt-2.5 sm:pt-4 pb-2.5 sm:pb-4">
      {/* Full-bleed Atmospheric Background Artwork */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {!backdropError && (
          <img
            src={HOME_BACKDROP_IMAGE}
            alt=""
            onError={() => setBackdropError(true)}
            className="w-full h-full object-cover object-center opacity-90 select-none"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A100D]/75 via-[#0A100D]/20 to-[#0A100D]/95" />
      </div>

      {/* Top Focal Brand Crest & Title (matching Checkmate hero layout) */}
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-center pt-1 sm:pt-2 space-y-1.5 shrink-0"
      >
        <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#F5B700]/90 bg-[#0A100D] shadow-[0_0_26px_rgba(245,183,0,0.28)]">
          {!crestError ? (
            <img
              src={TROPHY_CREST_IMAGE}
              alt={t.appTitle}
              referrerPolicy="no-referrer"
              onError={() => setCrestError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-3xl">🏆</div>
          )}
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl tracking-wider uppercase leading-none drop-shadow-[0_3px_14px_rgba(0,0,0,0.85)]">
          <span className="text-white">QUIZ </span>
          <span className="text-[#F5B700]">AFRICA</span>
        </h1>

        <p className="font-display font-semibold text-xs sm:text-sm text-[#D6E5DC] tracking-wide drop-shadow">
          {t.appSubtitle}
        </p>
      </motion.header>

      {/* Center Breathing Zone so background African continent graphic shines cleanly */}
      <div className="flex-1 min-h-[12px] sm:min-h-[32px]" aria-hidden="true" />

      {/* Bottom Action Dock */}
      <div className="w-full max-w-lg mx-auto space-y-2 sm:space-y-2.5 shrink-0">
        {/* Single-line Clean Stats Strip */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm px-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
          <span className="font-mono-num">
            <strong className="text-white font-extrabold">
              {player.totalScore.toLocaleString()}
            </strong>{' '}
            <span className="text-[#B8CCC0] font-medium">{t.ptsShort}</span>
          </span>

          {worldRank && worldTotal ? (
            <span className="font-mono-num">
              <strong className="text-[#F5B700] font-extrabold">
                #{worldRank}/{worldTotal}
              </strong>{' '}
              <span className="text-[#B8CCC0] font-medium">
                {t.profilesLabel(worldTotal)}
              </span>
            </span>
          ) : (
            <span className="font-mono-num">
              <strong className="text-[#22C55E] font-extrabold">
                {t.levelShort(levelInfo.level)}
              </strong>
            </span>
          )}

          <span className="font-mono-num">
            <strong className="text-[#F59E0B] font-extrabold">
              {player.streak}
              {t.daysUnit}
            </strong>{' '}
            <span className="text-[#B8CCC0] font-medium">{t.streakLabel}</span>
          </span>
        </div>

        {/* 5-Mode Action Grid (Exact Order: Mode Normal, Duel, Défi du jour, Classement, Compétition) */}
        <section className="grid grid-cols-2 gap-2 sm:gap-2.5">
          {/* 1. MODE NORMAL */}
          <motion.button
            whileHover={{ scale: 1.015, y: -1 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onPlayClick();
            }}
            className="group min-h-[64px] sm:min-h-[76px] px-3 py-2.5 rounded-2xl bg-gradient-to-br from-[#009E49] to-[#006B31] border border-[#22C55E]/55 text-start shadow-[0_10px_24px_rgba(0,158,73,0.3)] flex items-center gap-2.5 sm:gap-3 transition-all"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Play className="w-5 h-5 text-[#FFF3B0] fill-current" />
            </div>
            <div className="min-w-0">
              <span className="block font-display font-extrabold text-sm sm:text-base text-white leading-tight truncate">
                {t.modeNormalTitle}
              </span>
              <span className="block text-[11px] sm:text-xs text-white/85 font-medium truncate mt-0.5">
                {t.modeNormalSub}
              </span>
            </div>
          </motion.button>

          {/* 2. DUEL */}
          <motion.button
            whileHover={{ scale: 1.015, y: -1 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onDuelClick();
            }}
            className="group min-h-[64px] sm:min-h-[76px] px-3 py-2.5 rounded-2xl bg-gradient-to-br from-[#0F6CBD] to-[#00407A] border border-[#38BDF8]/50 text-start shadow-[0_10px_24px_rgba(0,114,206,0.28)] flex items-center gap-2.5 sm:gap-3 transition-all"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Swords className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <span className="block font-display font-extrabold text-sm sm:text-base text-white leading-tight truncate">
                {t.btnDuel}
              </span>
              <span className="block text-[11px] sm:text-xs text-white/85 font-medium truncate mt-0.5">
                1 vs 1 · 10 Q
              </span>
            </div>
          </motion.button>

          {/* 3. DÉFI DU JOUR */}
          <motion.button
            whileHover={{ scale: 1.015, y: -1 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onDailyClick();
            }}
            className="group min-h-[64px] sm:min-h-[76px] px-3 py-2.5 rounded-2xl bg-gradient-to-br from-[#D98200] to-[#964B00] border border-[#F5B700]/65 text-start shadow-[0_10px_24px_rgba(245,183,0,0.2)] flex items-center gap-2.5 sm:gap-3 transition-all"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <CalendarDays className="w-5 h-5 text-[#FFF8E1]" />
            </div>
            <div className="min-w-0">
              <span className="block font-display font-extrabold text-sm sm:text-base text-white leading-tight truncate">
                {t.btnDaily}
              </span>
              <span className="block text-[11px] sm:text-xs text-[#FFF3B0] font-semibold font-mono-num truncate mt-0.5">
                {dailyPlayedToday ? midnightCountdown : t.dailyHubSub}
              </span>
            </div>
          </motion.button>

          {/* 4. CLASSEMENT */}
          <motion.button
            whileHover={{ scale: 1.015, y: -1 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onLeaderboardClick();
            }}
            className="group min-h-[64px] sm:min-h-[76px] px-3 py-2.5 rounded-2xl bg-[#13221A]/95 border border-white/15 hover:border-[#009E49]/75 text-start shadow-xl flex items-center gap-2.5 sm:gap-3 transition-all backdrop-blur-sm"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#009E49]/20 border border-[#009E49]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Trophy className="w-5 h-5 text-[#22C55E]" />
            </div>
            <div className="min-w-0">
              <span className="block font-display font-extrabold text-sm sm:text-base text-white leading-tight truncate">
                {t.btnLeaderboard}
              </span>
              <span className="block text-[11px] sm:text-xs text-[#9EB5A7] font-semibold font-mono-num truncate mt-0.5">
                {worldRank && worldTotal
                  ? t.rankOfTotal(formatOrdinal(worldRank, player.language), worldTotal)
                  : 'Top 10'}
              </span>
            </div>
          </motion.button>

          {/* 5. COMPÉTITION DE LA SEMAINE (Full-width feature banner matching screenshot) */}
          <motion.button
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.985 }}
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onWeeklyClick();
            }}
            className="group col-span-2 min-h-[60px] sm:min-h-[70px] px-3.5 py-2 rounded-2xl bg-[#14231B]/95 border border-[#F5B700]/55 hover:border-[#F5B700] text-start shadow-xl flex items-center justify-between gap-3 transition-all backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F5B700]/15 border border-[#F5B700]/45 flex items-center justify-center shrink-0">
                <Crown className="w-5 h-5 text-[#F5B700]" />
              </div>
              <div className="min-w-0">
                <span className="block font-display font-extrabold text-sm sm:text-base text-[#F5B700] leading-tight truncate">
                  {t.btnWeekly}
                </span>
                <span className="block text-[11px] sm:text-xs text-[#C7D7CE] font-medium font-mono-num truncate mt-0.5">
                  {weeklyRank && weeklyTotal
                    ? `${player.weeklyScore} ${t.ptsShort} · ${t.rankOfTotal(
                        formatOrdinal(weeklyRank, player.language),
                        weeklyTotal
                      )}`
                    : t.btnWeeklyDesc}
                </span>
              </div>
            </div>

            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#F5B700]/75 bg-[#0A100D] shrink-0 group-hover:scale-105 transition-transform shadow">
              {!crestError ? (
                <img
                  src={TROPHY_CREST_IMAGE}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xl">👑</div>
              )}
            </div>
          </motion.button>
        </section>

        {/* Official SELAH Footer & À propos */}
        <footer className="pt-0.5 text-center">
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onOpenAbout();
            }}
            className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium text-[#B8CCC0] hover:text-white transition-colors"
          >
            <img
              src={SELAH_BRAND.symbolSrc}
              alt={SELAH_BRAND.name}
              className="w-4 h-4 object-contain mix-blend-screen shrink-0 select-none"
            />
            <span>{SELAH_BRAND.footerLine}</span>
            <span className="text-[#38BDF8] font-semibold">· À propos</span>
          </button>
        </footer>
      </div>
    </main>
  );
}

import {
  Award,
  CalendarDays,
  Crown,
  Flame,
  Play,
  Sparkles,
  Swords,
  Trophy,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { TROPHY_CREST_IMAGE } from '../data/avatars';
import { getCountryByCode, getCountryName } from '../data/countries54';
import { getLocalDateKey } from '../data/questionBank';
import { AFRICAN_NEWS_QUESTIONS } from '../data/africanNewsQuestions';
import { getUiText } from '../i18n/translations';
import { Language, LeaderboardResponse, PlayerProfile } from '../types/quiz';
import { getPlayerLevelInfo } from '../utils/levelSystem';
import { soundEngine } from '../utils/sound';
import { AvatarBadge } from './AvatarBadge';
import { PWAInstallButton } from './PWAInstallButton';

function getTodayNewsHeadline(dateStr: string, lang: Language): string {
  let h = 0;
  for (let i = 0; i < dateStr.length; i++) {
    h = (h * 31 + dateStr.charCodeAt(i)) >>> 0;
  }
  const item = AFRICAN_NEWS_QUESTIONS[h % AFRICAN_NEWS_QUESTIONS.length];
  return item
    ? item.explanation[lang]
    : lang === 'fr'
      ? "L'actualité africaine au cœur des 54 pays."
      : 'African current affairs across 54 nations.';
}

interface HomeScreenProps {
  player: PlayerProfile;
  leaderboard: LeaderboardResponse | null;
  onPlayClick: () => void;
  onDailyClick: () => void;
  onDuelClick: () => void;
  onLeaderboardClick: () => void;
  onWeeklyClick: () => void;
  onChangeLanguage: (lang: Language) => void;
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
  onChangeLanguage,
}: HomeScreenProps) {
  const [crestError, setCrestError] = useState(false);
  const [midnightCountdown, setMidnightCountdown] = useState(getTimeUntilMidnight);

  const t = getUiText(player.language);
  const todayKey = getLocalDateKey();
  const dailyPlayedToday = Boolean(player.dailyHistory[todayKey]);

  const identityCountry = getCountryByCode(player.countryCode);
  const identityCountryName = getCountryName(identityCountry, player.language);

  useEffect(() => {
    const timer = setInterval(() => {
      setMidnightCountdown(getTimeUntilMidnight());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const countryRank = leaderboard?.playerRanks.countryRank ?? 1;
  const worldRank = leaderboard?.playerRanks.worldRank ?? 1;
  const levelInfo = getPlayerLevelInfo(player.totalScore, player.language);
  const ptsRemaining = Math.max(0, levelInfo.nextLevelTarget - levelInfo.currentScore);

  return (
    <main className="max-w-4xl mx-auto px-4 pt-6 pb-14 space-y-6">
      {/* Dynamic Hero Banner with African Pan-African Tricolor Glow */}
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--qa-card)] via-[var(--qa-card)] to-[#009E49]/15 border-2 border-[#F5B700]/50 p-6 sm:p-8 shadow-2xl"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#F5B700]/10 to-transparent qa-rank-shimmer"
          aria-hidden="true"
        />

        <div className="relative flex flex-col md:flex-row items-center gap-6">
          <motion.div
            whileHover={{ scale: 1.04, rotate: 2 }}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-2 border-[#F5B700] bg-[var(--qa-inset)] shrink-0 shadow-xl relative group"
          >
            {!crestError ? (
              <img
                src={TROPHY_CREST_IMAGE}
                alt={t.appTitle}
                referrerPolicy="no-referrer"
                onError={() => setCrestError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl">🏆</div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
              <span className="text-[10px] font-extrabold text-white bg-black/60 px-2 py-0.5 rounded-md">
                {identityCountry.flag} {player.name}
              </span>
            </div>
          </motion.div>

          <div className="text-center md:text-start flex-1 min-w-0 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009E49]/20 border border-[#009E49]/50 text-[var(--qa-green-text)] text-xs font-extrabold">
              <Sparkles className="w-3.5 h-3.5 text-[#F5B700]" />
              <span>{levelInfo.title}</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-[var(--qa-text)]">
              <span className="text-[#009E49]">QUIZ</span>{' '}
              <span className="text-[var(--qa-gold-text)]">AFRICA</span>
            </h1>

            <p className="font-display font-bold text-base sm:text-xl text-[var(--qa-gold-text)]">
              {t.appSubtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[var(--qa-inset)] border border-[var(--qa-border)] text-xs font-bold text-[var(--qa-text)]">
                <span className="text-base leading-none">{identityCountry.flag}</span>
                <span>{identityCountryName}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[var(--qa-inset)] border border-[var(--qa-border)] text-xs font-bold font-mono-num text-[var(--qa-gold-text)]">
                <Trophy className="w-3.5 h-3.5" />
                <span>{t.totalScore}: {player.totalScore}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[var(--qa-inset)] border border-[var(--qa-border)] text-xs font-bold font-mono-num text-[#E8590C]">
                <Flame className="w-3.5 h-3.5 fill-current" />
                <span>{player.streak} {t.daysWord}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Progressive Level Bar */}
        <div className="mt-6 pt-4 border-t border-[var(--qa-border)] space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-lg bg-[#009E49] text-white font-display font-extrabold font-mono-num shadow">
                {t.levelShort(levelInfo.level)}
              </span>
              <span className="text-[var(--qa-text)]">{levelInfo.title}</span>
            </div>
            <span className="text-[var(--qa-muted)] font-mono-num">
              {t.levelNextHint(ptsRemaining)}
            </span>
          </div>
          <div className="h-3 w-full rounded-full bg-[var(--qa-inset)] overflow-hidden border border-[var(--qa-border)] shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${levelInfo.progressPercent}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-[#009E49] via-[#F5B700] to-[#0072CE]"
            />
          </div>
        </div>
      </motion.section>

      {/* Main Action Buttons - Vibrant 5-Card Dynamic Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 1. JOUER */}
        <motion.button
          whileHover={{ scale: 1.015, y: -2 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={() => {
            soundEngine.playClick();
            onPlayClick();
          }}
          className="group relative overflow-hidden min-h-[120px] p-6 rounded-3xl bg-gradient-to-br from-[#009E49] via-[#00B253] to-[#007436] border border-[#22C55E]/60 text-start shadow-[0_12px_32px_rgba(0,158,73,0.3)] flex items-center justify-between gap-4"
        >
          <div className="space-y-1.5 z-10">
            <span className="inline-block px-2.5 py-0.5 rounded-lg bg-black/25 text-[#E6FFFA] text-[11px] font-extrabold uppercase tracking-widest">
              Mode Normal
            </span>
            <span className="block font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              {t.btnPlay}
            </span>
            <span className="block text-xs sm:text-sm text-white/95 font-medium">
              54 pays · Défis infinis · Niveaux d'expert
            </span>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg">
            <Play className="w-8 h-8 text-[#F5B700] fill-current" />
          </div>
        </motion.button>

        {/* 2. DÉFI DU JOUR */}
        <motion.button
          whileHover={{ scale: 1.015, y: -2 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={() => {
            soundEngine.playClick();
            onDailyClick();
          }}
          className="group relative overflow-hidden min-h-[120px] p-6 rounded-3xl bg-gradient-to-br from-[#D98200] via-[#F5B700] to-[#9E3200] border border-[#FFF3B0]/60 text-start shadow-[0_12px_32px_rgba(245,183,0,0.25)] flex items-center justify-between gap-4"
        >
          <div className="space-y-1.5 z-10 min-w-0">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-lg bg-black/30 text-[#FFF3B0] text-[11px] font-extrabold uppercase tracking-widest">
                100% Actu Afrique
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-black/35 text-[#FFE082] text-xs font-bold font-mono-num shrink-0">
                <Flame className="w-3.5 h-3.5 fill-current" />
                {player.streak}
              </span>
            </div>
            <span className="block font-display font-black text-2xl sm:text-3xl text-[#0A100D] tracking-tight truncate">
              {t.btnDaily}
            </span>
            {dailyPlayedToday ? (
              <div className="text-xs sm:text-sm font-bold text-[#0A100D]/90">
                <span>{t.btnDailyComeBack} </span>
                <span className="font-mono-num">({midnightCountdown})</span>
              </div>
            ) : (
              <span className="block text-xs sm:text-sm font-extrabold text-[#0A100D]">
                {t.btnDailyReady}
              </span>
            )}
          </div>
          <div className="w-16 h-16 rounded-2xl bg-black/20 border border-black/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg">
            <CalendarDays className="w-8 h-8 text-[#FFF8E1]" />
          </div>
        </motion.button>

        {/* 3. CLASSEMENT */}
        <motion.button
          whileHover={{ scale: 1.015, y: -2 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={() => {
            soundEngine.playClick();
            onLeaderboardClick();
          }}
          className="group min-h-[104px] p-5 rounded-3xl bg-[var(--qa-card)] border border-[var(--qa-border)] hover:border-[#009E49] text-start active:scale-[0.98] transition-all flex items-center justify-between gap-4 shadow-xl"
        >
          <div className="space-y-1">
            <span className="block font-display font-black text-xl sm:text-2xl text-[var(--qa-text)]">
              {t.btnLeaderboard}
            </span>
            <span className="block text-xs sm:text-sm text-[var(--qa-muted)] font-medium">
              Top 10 Monde & Top 10 par Pays
            </span>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-[#009E49]/15 border border-[#009E49]/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow">
            <Trophy className="w-7 h-7 text-[var(--qa-green-text)]" />
          </div>
        </motion.button>

        {/* 4. COMPÉTITION DE LA SEMAINE */}
        <motion.button
          whileHover={{ scale: 1.015, y: -2 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={() => {
            soundEngine.playClick();
            onWeeklyClick();
          }}
          className="group min-h-[104px] p-5 rounded-3xl bg-[var(--qa-card)] border border-[#F5B700]/55 hover:border-[#F5B700] text-start active:scale-[0.98] transition-all flex items-center justify-between gap-4 shadow-xl"
        >
          <div className="space-y-1">
            <span className="block font-display font-black text-xl sm:text-2xl text-[var(--qa-gold-text)]">
              {t.btnWeekly}
            </span>
            <span className="block text-xs sm:text-sm text-[var(--qa-muted)] font-medium">
              Remporte la couronne hebdomadaire
            </span>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-[#F5B700]/15 border border-[#F5B700]/45 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow">
            <Crown className="w-7 h-7 text-[var(--qa-gold-text)]" />
          </div>
        </motion.button>

        {/* 5. DUEL EN DIRECT */}
        <motion.button
          whileHover={{ scale: 1.015, y: -2 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={() => {
            soundEngine.playClick();
            onDuelClick();
          }}
          className="group md:col-span-2 min-h-[100px] p-6 rounded-3xl bg-gradient-to-r from-[#005CA8] via-[#0072CE] to-[#00386B] border border-[#38BDF8]/60 hover:brightness-110 text-start active:scale-[0.99] transition-all flex items-center justify-between gap-4 shadow-[0_12px_32px_rgba(0,114,206,0.3)]"
        >
          <div className="space-y-1">
            <span className="inline-block px-2.5 py-0.5 rounded-lg bg-white/20 text-white text-[11px] font-extrabold uppercase tracking-widest">
              Temps réel simultané
            </span>
            <span className="block font-display font-black text-xl sm:text-2xl text-white">
              {t.btnDuel}
            </span>
            <span className="block text-xs sm:text-sm text-white/90 font-medium">
              Affronte un vrai joueur en direct sur les mêmes 10 questions
            </span>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg">
            <Swords className="w-8 h-8 text-white" />
          </div>
        </motion.button>
      </section>

      {/* Daily Africa News Flash Ticker */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="rounded-3xl bg-[var(--qa-card)] border border-[#009E49]/40 p-5 shadow-xl space-y-3 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 w-24 h-24 bg-[#009E49]/10 rounded-full blur-xl pointer-events-none" />
        
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009E49]/20 border border-[#009E49]/50 text-[var(--qa-green-text)] text-xs font-extrabold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#009E49] animate-pulse" />
            <span>Flash Actu Afrique du Jour</span>
          </div>
          <span className="text-xs font-bold text-[var(--qa-gold-text)] font-mono-num">
            {todayKey}
          </span>
        </div>

        <p className="font-display font-bold text-sm sm:text-base text-[var(--qa-text)] leading-snug">
          {getTodayNewsHeadline(todayKey, player.language)}
        </p>

        <div className="flex items-center justify-between pt-1">
          <span className="text-xs text-[var(--qa-muted)] font-medium">
            Actualité vérifiée · Change chaque jour
          </span>
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onDailyClick();
            }}
            className="text-xs font-extrabold text-[var(--qa-green-text)] hover:underline inline-flex items-center gap-1"
          >
            <span>Tester mes connaissances →</span>
          </button>
        </div>
      </motion.section>

      {/* Install Footer */}
      <div className="flex flex-wrap items-center justify-end gap-3 px-1">
        <PWAInstallButton language={player.language} />
      </div>
    </main>
  );
}

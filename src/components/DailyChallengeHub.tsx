import {
  AlertTriangle,
  ArrowLeft,
  Award,
  CalendarDays,
  Check,
  Clock,
  Crown,
  Flame,
  Play,
  Trophy,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { HOME_BACKDROP_IMAGE } from '../data/avatars';
import { getLocalDateKey } from '../data/questionBank';
import { getUiText } from '../i18n/translations';
import { PlayerProfile } from '../types/quiz';
import { soundEngine } from '../utils/sound';

interface DailyChallengeHubProps {
  player: PlayerProfile;
  onBack: () => void;
  onStartDaily: () => void;
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

export function DailyChallengeHub({
  player,
  onBack,
  onStartDaily,
}: DailyChallengeHubProps) {
  const [countdown, setCountdown] = useState(getTimeUntilMidnight);
  const t = getUiText(player.language);
  const todayKey = getLocalDateKey();
  const todayRecord = player.dailyHistory[todayKey];

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getTimeUntilMidnight());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const calendarDays = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
    const todayDateNum = now.getDate();

    const cells: Array<{
      dayNum: number | null;
      dateKey: string | null;
      status: 'empty' | 'played' | 'missed' | 'today_pending' | 'future';
    }> = [];

    for (let i = 0; i < firstWeekday; i++) {
      cells.push({ dayNum: null, dateKey: null, status: 'empty' });
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const isPlayed = Boolean(player.dailyHistory[dateKey]);

      let status: 'played' | 'missed' | 'today_pending' | 'future' = 'future';
      if (isPlayed) {
        status = 'played';
      } else if (d < todayDateNum) {
        status = 'missed';
      } else if (d === todayDateNum) {
        status = 'today_pending';
      }
      cells.push({ dayNum: d, dateKey, status });
    }
    return {
      monthLabel: now.toLocaleDateString(
        player.language === 'ar'
          ? 'ar'
          : player.language === 'es'
            ? 'es-ES'
            : player.language === 'pt'
              ? 'pt-PT'
              : player.language === 'en'
                ? 'en-US'
                : 'fr-FR',
        { month: 'long', year: 'numeric' }
      ),
      cells,
    };
  }, [player.dailyHistory, player.language]);

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

      <div className="h-full max-w-3xl mx-auto px-3.5 sm:px-6 pt-2.5 sm:pt-4 pb-3.5 sm:pb-5 flex flex-col justify-between gap-2.5 sm:gap-3">
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

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E8590C]/15 border border-[#E8590C]/45 text-[#E8590C] font-display font-extrabold text-xs sm:text-sm font-mono-num">
            <Flame className="w-4 h-4 fill-current shrink-0" />
            <span>
              {t.streakLabel}: {player.streak} {t.daysWord}
            </span>
          </div>
        </div>

        {/* Hero Daily Card */}
        <section className="shrink-0 rounded-2xl sm:rounded-3xl bg-[var(--qa-card)]/92 border border-[#F5B700]/45 p-3.5 sm:p-5 shadow-xl space-y-2.5 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h1 className="font-display font-extrabold text-xl sm:text-2xl text-[var(--qa-gold-text)] leading-tight truncate">
                {t.dailyHubTitle}
              </h1>
              <p className="text-xs sm:text-sm text-[var(--qa-text-soft)] truncate">
                {t.dailyHubSub}
              </p>
            </div>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#F5B700]/20 border border-[#F5B700]/45 flex items-center justify-center shrink-0">
              <CalendarDays className="w-5 h-5 text-[var(--qa-gold-text)]" />
            </div>
          </div>

          {player.missedYesterdayNotice && !todayRecord && (
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#D92B2B]/15 border border-[#D92B2B]/45 text-xs font-semibold text-[#FCA5A5]">
              <AlertTriangle className="w-4 h-4 shrink-0 text-[#D92B2B]" />
              <span className="line-clamp-2">{t.dailyMissedMsg(player.name)}</span>
            </div>
          )}

          {todayRecord ? (
            <div className="rounded-xl bg-[#009E49]/15 border border-[#009E49]/45 p-3 flex flex-wrap items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="font-display font-extrabold text-sm sm:text-base text-[var(--qa-green-text)]">
                  ✓ {t.btnDailyComeBack}
                </p>
                <p className="text-xs text-[var(--qa-text)] font-semibold">
                  {t.scoreLabel}:{' '}
                  <span className="font-mono-num text-[var(--qa-gold-text)]">
                    {todayRecord.score} + {todayRecord.bonus}
                  </span>{' '}
                  ({todayRecord.correctCount}/10)
                </p>
              </div>
              <p className="inline-flex items-center gap-1.5 text-xs text-[var(--qa-muted)] font-mono-num shrink-0">
                <Clock className="w-3.5 h-3.5 text-[var(--qa-gold-text)]" />
                <span>
                  {t.btnDailyNextIn} {countdown}
                </span>
              </p>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                onStartDaily();
              }}
              className="w-full min-h-[48px] sm:min-h-[54px] px-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#F5B700] via-[#FF9900] to-[#F5B700] hover:brightness-105 active:scale-[0.98] text-[#0A100D] font-display font-extrabold text-base sm:text-lg shadow-[0_8px_22px_rgba(245,183,0,0.28)] flex items-center justify-center gap-2 transition-all"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>{t.btnDailyReady}</span>
            </button>
          )}
        </section>

        {/* Monthly Calendar (grows cleanly inside available center space) */}
        <section className="flex-1 min-h-0 rounded-2xl sm:rounded-3xl bg-[var(--qa-card)]/92 border border-[var(--qa-border)] p-3 sm:p-4 flex flex-col justify-between shadow-sm backdrop-blur-sm overflow-hidden">
          <div className="flex items-center justify-between gap-2 shrink-0 mb-1.5">
            <h2 className="font-display font-bold text-sm sm:text-base text-[var(--qa-text)]">
              {t.dailyCalendarTitle}
            </h2>
            <span className="text-xs font-bold text-[var(--qa-gold-text)] capitalize">
              {calendarDays.monthLabel}
            </span>
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-7 gap-1 sm:gap-1.5 content-center">
            {calendarDays.cells.map((cell, idx) => {
              if (cell.status === 'empty') {
                return <div key={`e_${idx}`} className="h-7 sm:h-9" />;
              }

              const styleMap = {
                played: 'bg-[#009E49]/20 border-[#009E49] text-[var(--qa-green-text)]',
                missed: 'bg-[#D92B2B]/15 border-[#D92B2B]/45 text-[#D92B2B]',
                today_pending: 'bg-[#F5B700]/20 border-[#F5B700] text-[var(--qa-gold-text)]',
                future: 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-muted)]',
              };

              return (
                <div
                  key={cell.dateKey}
                  className={`h-7 sm:h-9 rounded-lg sm:rounded-xl border flex items-center justify-center gap-0.5 text-[11px] sm:text-xs font-bold font-mono-num ${
                    styleMap[cell.status]
                  }`}
                >
                  <span>{cell.dayNum}</span>
                  {cell.status === 'played' && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                  {cell.status === 'missed' && <X className="w-2.5 h-2.5 stroke-[2.5]" />}
                </div>
              );
            })}
          </div>
        </section>

        {/* Compact Streak Milestones */}
        <section className="shrink-0 rounded-2xl sm:rounded-3xl bg-[var(--qa-card)]/92 border border-[var(--qa-border)] p-3 sm:p-4 space-y-2 shadow-sm backdrop-blur-sm">
          <h2 className="font-display font-bold text-xs sm:text-sm text-[var(--qa-gold-text)]">
            {t.dailyMilestonesTitle}
          </h2>

          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
            <div
              className={`p-2 sm:p-2.5 rounded-xl border flex items-center gap-2 min-w-0 ${
                player.bestStreak >= 1
                  ? 'bg-[#009E49]/15 border-[#009E49]/50 text-[var(--qa-text)]'
                  : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text-soft)]'
              }`}
            >
              <Flame className="w-4 h-4 text-[#E8590C] shrink-0" />
              <span className="font-semibold truncate">{t.milestone1}</span>
            </div>

            <div
              className={`p-2 sm:p-2.5 rounded-xl border flex items-center gap-2 min-w-0 ${
                player.bestStreak >= 3
                  ? 'bg-[#009E49]/15 border-[#009E49]/50 text-[var(--qa-text)]'
                  : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text-soft)]'
              }`}
            >
              <Award className="w-4 h-4 text-[var(--qa-green-text)] shrink-0" />
              <span className="font-semibold truncate">{t.milestone3}</span>
            </div>

            <div
              className={`p-2 sm:p-2.5 rounded-xl border flex items-center gap-2 min-w-0 ${
                player.bestStreak >= 7
                  ? 'bg-[#F5B700]/15 border-[#F5B700]/55 text-[var(--qa-text)]'
                  : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text-soft)]'
              }`}
            >
              <Crown className="w-4 h-4 text-[var(--qa-gold-text)] shrink-0" />
              <span className="font-semibold truncate">{t.milestone7}</span>
            </div>

            <div
              className={`p-2 sm:p-2.5 rounded-xl border flex items-center gap-2 min-w-0 ${
                player.bestStreak >= 30
                  ? 'bg-[#F5B700]/25 border-[#F5B700] text-[var(--qa-text)]'
                  : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text-soft)]'
              }`}
            >
              <Trophy className="w-4 h-4 text-[var(--qa-gold-text)] shrink-0" />
              <span className="font-semibold truncate">{t.milestone30}</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

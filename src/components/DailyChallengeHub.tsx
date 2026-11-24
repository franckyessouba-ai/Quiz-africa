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

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#E8590C]/15 border border-[#E8590C]/45 text-[#E8590C] font-display font-extrabold text-sm font-mono-num">
          <Flame className="w-4 h-4 fill-current" />
          <span>
            {t.streakLabel}: {player.streak} {t.daysWord}
          </span>
        </div>
      </div>

      {/* Hero Daily Card */}
      <section className="rounded-3xl bg-[var(--qa-card)] border border-[#F5B700]/45 p-5 sm:p-7 shadow-xl space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[var(--qa-gold-text)]">
              {t.dailyHubTitle}
            </h1>
            <p className="text-xs sm:text-sm text-[var(--qa-text-soft)] mt-1">{t.dailyHubSub}</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#F5B700]/20 border border-[#F5B700]/45 flex items-center justify-center shrink-0">
            <CalendarDays className="w-6 h-6 text-[var(--qa-gold-text)]" />
          </div>
        </div>

        {player.missedYesterdayNotice && !todayRecord && (
          <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#D92B2B]/15 border border-[#D92B2B]/45 text-sm font-semibold text-[#D92B2B]">
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            <span>{t.dailyMissedMsg(player.name)}</span>
          </div>
        )}

        {todayRecord ? (
          <div className="rounded-2xl bg-[#009E49]/15 border border-[#009E49]/45 p-4 sm:p-5 space-y-2 text-center">
            <p className="font-display font-extrabold text-lg sm:text-xl text-[var(--qa-green-text)]">
              ✓ {t.btnDailyComeBack}
            </p>
            <p className="text-sm text-[var(--qa-text)] font-semibold">
              {t.scoreLabel}:{' '}
              <span className="font-mono-num text-[var(--qa-gold-text)]">
                {todayRecord.score} + {todayRecord.bonus}
              </span>{' '}
              ({todayRecord.correctCount}/10)
            </p>
            <p className="inline-flex items-center gap-1.5 text-xs text-[var(--qa-muted)] font-mono-num pt-1">
              <Clock className="w-4 h-4 text-[var(--qa-gold-text)]" />
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
            className="w-full min-h-[60px] px-6 rounded-2xl bg-gradient-to-r from-[#F5B700] via-[#FF9900] to-[#F5B700] hover:brightness-105 active:scale-[0.98] text-[#0A100D] font-display font-extrabold text-lg sm:text-xl shadow-[0_10px_26px_rgba(245,183,0,0.3)] flex items-center justify-center gap-2.5 transition-all"
          >
            <Play className="w-6 h-6 fill-current" />
            <span>{t.btnDailyReady}</span>
          </button>
        )}
      </section>

      {/* Monthly Calendar */}
      <section className="rounded-3xl bg-[var(--qa-card)] border border-[var(--qa-border)] p-5 sm:p-6 space-y-4 shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-display font-bold text-base sm:text-lg text-[var(--qa-text)]">
            {t.dailyCalendarTitle}
          </h2>
          <span className="text-xs sm:text-sm font-bold text-[var(--qa-gold-text)] capitalize">
            {calendarDays.monthLabel}
          </span>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {calendarDays.cells.map((cell, idx) => {
            if (cell.status === 'empty') {
              return <div key={`e_${idx}`} className="h-10 sm:h-11" />;
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
                className={`h-10 sm:h-11 rounded-xl border flex flex-col items-center justify-center text-xs font-bold font-mono-num ${
                  styleMap[cell.status]
                }`}
              >
                <span>{cell.dayNum}</span>
                {cell.status === 'played' && <Check className="w-3 h-3 stroke-[3]" />}
                {cell.status === 'missed' && <X className="w-3 h-3 stroke-[2.5]" />}
              </div>
            );
          })}
        </div>
      </section>

      {/* Streak Milestones */}
      <section className="rounded-3xl bg-[var(--qa-card)] border border-[var(--qa-border)] p-5 sm:p-6 space-y-3 shadow-sm">
        <h2 className="font-display font-bold text-base sm:text-lg text-[var(--qa-gold-text)]">
          {t.dailyMilestonesTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
          <div
            className={`p-3.5 rounded-2xl border flex items-center gap-3 ${
              player.bestStreak >= 1
                ? 'bg-[#009E49]/15 border-[#009E49]/50 text-[var(--qa-text)]'
                : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text-soft)]'
            }`}
          >
            <Flame className="w-5 h-5 text-[#E8590C] shrink-0" />
            <span className="font-semibold">{t.milestone1}</span>
          </div>

          <div
            className={`p-3.5 rounded-2xl border flex items-center gap-3 ${
              player.bestStreak >= 3
                ? 'bg-[#009E49]/15 border-[#009E49]/50 text-[var(--qa-text)]'
                : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text-soft)]'
            }`}
          >
            <Award className="w-5 h-5 text-[var(--qa-green-text)] shrink-0" />
            <span className="font-semibold">{t.milestone3}</span>
          </div>

          <div
            className={`p-3.5 rounded-2xl border flex items-center gap-3 ${
              player.bestStreak >= 7
                ? 'bg-[#F5B700]/15 border-[#F5B700]/55 text-[var(--qa-text)]'
                : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text-soft)]'
            }`}
          >
            <Crown className="w-5 h-5 text-[var(--qa-gold-text)] shrink-0" />
            <span className="font-semibold">{t.milestone7}</span>
          </div>

          <div
            className={`p-3.5 rounded-2xl border flex items-center gap-3 ${
              player.bestStreak >= 30
                ? 'bg-[#F5B700]/25 border-[#F5B700] text-[var(--qa-text)]'
                : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text-soft)]'
            }`}
          >
            <Trophy className="w-5 h-5 text-[var(--qa-gold-text)] shrink-0" />
            <span className="font-semibold">{t.milestone30}</span>
          </div>
        </div>
      </section>
    </main>
  );
}

import {
  ArrowLeft,
  Award,
  Check,
  Crown,
  Flame,
  Home,
  MessageCircle,
  RotateCcw,
  Share2,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { getCountryByCode, getCountryName } from '../data/countries54';
import { getUiText } from '../i18n/translations';
import { GameResultPayload, PlayerProfile } from '../types/quiz';
import { getPlayerLevelInfo } from '../utils/levelSystem';
import { soundEngine } from '../utils/sound';
import { AvatarBadge } from './AvatarBadge';
import { ConfettiOverlay } from './ConfettiOverlay';

interface ResultScreenProps {
  player: PlayerProfile;
  result: GameResultPayload;
  onReplayNormal: () => void;
  onGoHome: () => void;
}

export function ResultScreen({
  player,
  result,
  onReplayNormal,
  onGoHome,
}: ResultScreenProps) {
  const [copiedMsg, setCopiedMsg] = useState(false);
  const t = getUiText(player.language);

  const identityCountry = getCountryByCode(player.countryCode);
  const identityCountryName = getCountryName(identityCountry, player.language);

  const playCountryLabel =
    result.playScope.type === 'all'
      ? `🌍 ${t.optionAllAfrica}`
      : `${getCountryByCode(result.playScope.countryCode).flag} ${getCountryName(
          getCountryByCode(result.playScope.countryCode),
          player.language
        )}`;

  const playCountryPlain =
    result.playScope.type === 'all'
      ? t.optionAllAfrica
      : getCountryName(getCountryByCode(result.playScope.countryCode), player.language);

  const showConfetti = result.mode === 'daily' || result.won || result.isNewRecord;

  useEffect(() => {
    if (result.isNewRecord) {
      soundEngine.playNewRecord();
    } else if (result.mode === 'daily' || result.won) {
      soundEngine.playVictoryFanfare();
    } else {
      soundEngine.playWrong();
    }
  }, [result.isNewRecord, result.mode, result.won]);

  const titleLabel =
    result.score >= 800
      ? t.titleChampion
      : result.score >= 400
        ? t.titleConnoisseur
        : t.titleBeginner;

  const shareUrl = typeof window !== 'undefined' ? window.location.origin : '';

  const whatsappText =
    result.mode === 'daily'
      ? t.shareDailyTemplate(
          player.name,
          identityCountryName,
          result.score,
          result.bonus,
          result.newStreak ?? player.streak,
          shareUrl
        )
      : t.shareNormalTemplate(
          player.name,
          identityCountryName,
          playCountryPlain,
          result.score,
          shareUrl
        );

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`;

  const handleChallengeFriend = async () => {
    soundEngine.playClick();
    const challengeMsg = t.challengeTemplate(player.name, result.score + result.bonus, shareUrl);
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `${t.appTitle} - ${t.appSubtitle}`,
          text: challengeMsg,
        });
        return;
      } catch {
        // Fallback to clipboard copy
      }
    }
    try {
      await navigator.clipboard.writeText(challengeMsg);
      setCopiedMsg(true);
      setTimeout(() => setCopiedMsg(false), 3000);
    } catch {
      // Clipboard unavailable
    }
  };

  const streakCount = result.newStreak ?? player.streak;
  const levelInfo = getPlayerLevelInfo(player.totalScore, player.language);
  const leveledUp = Boolean(
    result.newLevel && result.previousLevel && result.newLevel > result.previousLevel
  );
  const ptsRemaining = Math.max(0, levelInfo.nextLevelTarget - levelInfo.currentScore);

  return (
    <main className="max-w-2xl mx-auto px-4 pt-6 pb-14 space-y-5">
      <ConfettiOverlay active={showConfetti} />

      <section className="rounded-3xl bg-[var(--qa-card)] border border-[#F5B700]/45 p-5 sm:p-8 shadow-2xl text-center space-y-5">
        {result.isNewRecord && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5B700] text-[#0A100D] font-display font-extrabold text-sm tracking-wide shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>{t.newRecordBanner}</span>
          </div>
        )}

        <div className="flex flex-col items-center gap-3">
          <AvatarBadge avatarId={player.avatar} size="xl" />

          {result.mode === 'normal' ? (
            <h1
              className={`font-display font-extrabold text-2xl sm:text-4xl tracking-tight ${
                result.won ? 'text-[var(--qa-green-text)]' : 'text-[#D92B2B]'
              }`}
            >
              {result.won ? t.wonTitle : t.lostTitle}
            </h1>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-2xl bg-[#F5B700]/15 border border-[#F5B700]/55 text-[var(--qa-gold-text)] font-display font-extrabold text-lg">
              <Flame className="w-5 h-5 fill-current text-[#E8590C]" />
              <span>
                {streakCount} {t.daysWord}
              </span>
            </div>
          )}
        </div>

        {result.mode === 'normal' ? (
          <p className="font-display font-bold text-lg sm:text-2xl text-[var(--qa-text)]">
            {result.won || result.score > 0
              ? t.bravoScore(player.name, result.score)
              : t.encourageScore(player.name, result.score)}
          </p>
        ) : (
          <p className="font-display font-bold text-base sm:text-xl text-[var(--qa-text)] leading-relaxed">
            {t.dailyDoneTitle(player.name, result.score, result.bonus, streakCount)}
          </p>
        )}

        {result.mode === 'normal' && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[var(--qa-inset)] border border-[var(--qa-border)] text-sm font-bold text-[var(--qa-text-soft)]">
            <span className="text-[var(--qa-muted)]">{t.playedOnLabel} :</span>
            <span className="text-[var(--qa-text)]">{playCountryLabel}</span>
          </div>
        )}

        <div className="grid grid-cols-3 gap-2.5 pt-2">
          <div className="rounded-2xl bg-[var(--qa-inset)] border border-[var(--qa-border)] p-3">
            <span className="block text-[11px] text-[var(--qa-muted)] font-semibold">
              {t.scoreLabel}
            </span>
            <span className="block font-display font-extrabold text-xl sm:text-2xl text-[var(--qa-gold-text)] font-mono-num mt-0.5">
              {result.score + result.bonus}
            </span>
          </div>

          <div className="rounded-2xl bg-[var(--qa-inset)] border border-[var(--qa-border)] p-3">
            <span className="block text-[11px] text-[var(--qa-muted)] font-semibold">
              {t.correctAnswersStat}
            </span>
            <span className="block font-display font-extrabold text-xl sm:text-2xl text-[var(--qa-green-text)] font-mono-num mt-0.5">
              {result.correctCount}/{result.totalQuestions}
            </span>
          </div>

          <div className="rounded-2xl bg-[var(--qa-inset)] border border-[var(--qa-border)] p-3">
            <span className="block text-[11px] text-[var(--qa-muted)] font-semibold">
              {t.bestScore}
            </span>
            <span className="block font-display font-extrabold text-xl sm:text-2xl text-[var(--qa-text)] font-mono-num mt-0.5">
              {player.bestGameScore}
            </span>
          </div>
        </div>

        {result.mode === 'normal' ? (
          <div className="rounded-2xl bg-gradient-to-r from-[#009E49]/15 via-[#F5B700]/15 to-[#0072CE]/15 border border-[#F5B700]/45 p-4 flex items-center justify-center gap-3">
            {result.score >= 800 ? (
              <Crown className="w-7 h-7 text-[var(--qa-gold-text)] shrink-0" />
            ) : (
              <Award className="w-7 h-7 text-[var(--qa-green-text)] shrink-0" />
            )}
            <span className="font-display font-extrabold text-lg sm:text-xl text-[var(--qa-gold-text)]">
              {titleLabel}
            </span>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-2">
            {streakCount >= 3 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#009E49]/20 border border-[#009E49]/55 text-xs font-bold text-[var(--qa-green-text)]">
                <Award className="w-4 h-4" />
                {t.badgeFidele}
              </span>
            )}
            {streakCount >= 7 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5B700]/20 border border-[#F5B700]/55 text-xs font-bold text-[var(--qa-gold-text)]">
                <Crown className="w-4 h-4" />
                {t.badgeWeekChamp}
              </span>
            )}
            {streakCount >= 30 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5B700] text-[#0A100D] text-xs font-extrabold">
                <Trophy className="w-4 h-4" />
                {t.badgeLegendMonth}
              </span>
            )}
          </div>
        )}

        {leveledUp && (
          <div className="rounded-2xl bg-gradient-to-r from-[#009E49]/25 via-[#F5B700]/25 to-[#0072CE]/25 border border-[#F5B700] px-4 py-3 flex items-center justify-center gap-2 text-sm sm:text-base font-display font-extrabold text-[var(--qa-gold-text)] shadow-md">
            <Sparkles className="w-5 h-5 shrink-0" />
            <span>{t.levelUpTitle(levelInfo.level, levelInfo.title)}</span>
          </div>
        )}

        <div className="rounded-2xl bg-[var(--qa-inset)] border border-[var(--qa-border)] p-3.5 text-start space-y-1.5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-[#009E49]/20 border border-[#009E49]/50 text-[var(--qa-green-text)] font-display font-extrabold font-mono-num">
                {t.levelShort(levelInfo.level)}
              </span>
              <span className="font-display font-bold text-[var(--qa-text)]">{levelInfo.title}</span>
            </div>
            <span className="text-[var(--qa-muted)] font-mono-num">
              {t.levelNextHint(ptsRemaining)}
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-[var(--qa-card)] overflow-hidden border border-[var(--qa-border)]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#009E49] via-[#F5B700] to-[#0072CE] transition-all duration-500"
              style={{ width: `${levelInfo.progressPercent}%` }}
            />
          </div>
        </div>

        <div className="space-y-3 pt-2">
          {result.mode === 'normal' && (
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                onReplayNormal();
              }}
              className="w-full min-h-[56px] px-6 rounded-2xl bg-gradient-to-r from-[#009E49] to-[#00B253] hover:brightness-110 active:scale-[0.98] text-white font-display font-extrabold text-lg flex items-center justify-center gap-2.5 shadow-lg transition-all"
            >
              <RotateCcw className="w-5 h-5" />
              <span>{t.replayBtn}</span>
            </button>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="min-h-[52px] px-4 rounded-2xl bg-[#25D366] hover:brightness-105 active:scale-[0.98] text-[#052310] font-display font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>
                {result.mode === 'daily' ? t.shareDailyWhatsAppBtn : t.shareWhatsAppBtn}
              </span>
            </a>

            <button
              type="button"
              onClick={handleChallengeFriend}
              className="min-h-[52px] px-4 rounded-2xl bg-[var(--qa-inset)] border border-[#F5B700]/55 hover:border-[#F5B700] active:scale-[0.98] text-[var(--qa-text)] font-display font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition-all"
            >
              {copiedMsg ? (
                <>
                  <Check className="w-5 h-5 text-[var(--qa-green-text)]" />
                  <span className="text-[var(--qa-green-text)]">{t.copiedToast}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-5 h-5 text-[var(--qa-gold-text)]" />
                  <span>{t.challengeFriendBtn}</span>
                </>
              )}
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onGoHome();
            }}
            className="w-full min-h-[48px] px-5 rounded-2xl bg-[var(--qa-inset)] border border-[var(--qa-border)] text-[var(--qa-text-soft)] hover:text-[var(--qa-text)] font-bold text-sm flex items-center justify-center gap-2 transition-colors"
          >
            {result.mode === 'normal' ? (
              <ArrowLeft className="w-4 h-4" />
            ) : (
              <Home className="w-4 h-4" />
            )}
            <span>{t.backHome}</span>
          </button>
        </div>
      </section>
    </main>
  );
}

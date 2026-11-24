import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Heart,
  Lightbulb,
  Lock,
  LogOut,
  XCircle,
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getCountryByCode, getCountryName } from '../data/countries54';
import { getUiText } from '../i18n/translations';
import {
  AnswerLogItem,
  CategorySelection,
  GameResultPayload,
  Language,
  PlayScope,
  QuizQuestion,
} from '../types/quiz';
import { getBasePointsForDifficulty } from '../utils/levelSystem';
import { soundEngine } from '../utils/sound';

interface QuizArenaProps {
  mode: 'normal' | 'daily';
  language: Language;
  playScope: PlayScope;
  category: CategorySelection;
  questions: QuizQuestion[];
  bestGameScore: number;
  onFinish: (result: GameResultPayload) => void;
  onQuit: () => void;
}

const QUESTION_DURATION = 30;
const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export function QuizArena({
  mode,
  language,
  playScope,
  category,
  questions,
  bestGameScore,
  onFinish,
  onQuit,
}: QuizArenaProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_DURATION);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [timedOut, setTimedOut] = useState(false);
  const [confirmQuit, setConfirmQuit] = useState(false);

  const answeredRef = useRef(false);
  const answerLogRef = useRef<AnswerLogItem[]>([]);
  const t = getUiText(language);
  const currentQuestion = questions[currentIndex];
  const isRevealed = selectedOption !== null || timedOut;

  const lockedLabel =
    playScope.type === 'all'
      ? `🌍 ${t.optionAllAfrica}`
      : `${getCountryByCode(playScope.countryCode).flag} ${getCountryName(
          getCountryByCode(playScope.countryCode),
          language
        )}`;

  const handleTimeout = useCallback(() => {
    if (answeredRef.current) return;
    answeredRef.current = true;
    setTimedOut(true);
    soundEngine.playWrong();
    if (mode === 'normal') {
      setLives((prev) => Math.max(0, prev - 1));
    }
  }, [mode]);

  useEffect(() => {
    answeredRef.current = false;
    setTimeLeft(QUESTION_DURATION);
    setSelectedOption(null);
    setTimedOut(false);
  }, [currentIndex]);

  useEffect(() => {
    if (isRevealed) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleTimeout();
          return 0;
        }
        if (prev <= 6) {
          soundEngine.playTick();
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRevealed, handleTimeout, currentIndex]);

  if (!currentQuestion) return null;

  const handleSelectOption = (optionIndex: number) => {
    if (answeredRef.current || isRevealed) return;
    answeredRef.current = true;
    setSelectedOption(optionIndex);
    answerLogRef.current.push({
      questionId: currentQuestion.id,
      optionIndex,
      timeLeft,
    });

    const isCorrect = optionIndex === currentQuestion.correctIndex;
    if (isCorrect) {
      soundEngine.playCorrect();
      const basePoints = getBasePointsForDifficulty(currentQuestion.difficulty || 1);
      const speedBonus = Math.max(0, Math.round(timeLeft * 2));
      setScore((prev) => prev + basePoints + speedBonus);
      setCorrectCount((prev) => prev + 1);
    } else {
      soundEngine.playWrong();
      if (mode === 'normal') {
        setLives((prev) => Math.max(0, prev - 1));
      }
    }
  };

  const outOfLives = mode === 'normal' && lives <= 0;
  const isLastQuestion = currentIndex + 1 >= questions.length || outOfLives;

  const handleNext = () => {
    soundEngine.playClick();
    if (isLastQuestion) {
      const won = mode === 'daily' ? true : lives > 0;
      const isNewRecord = mode === 'normal' && score > bestGameScore && score > 0;
      onFinish({
        mode,
        playScope,
        category,
        score,
        bonus: 0,
        correctCount,
        totalQuestions: questions.length,
        won,
        livesRemaining: lives,
        isNewRecord,
        answerLog: answerLogRef.current,
      });
      return;
    }
    setCurrentIndex((prev) => prev + 1);
  };

  const questionCountry =
    currentQuestion.countryCode !== 'AFRICA'
      ? getCountryByCode(currentQuestion.countryCode)
      : null;

  const timerRatio = Math.max(0, Math.min(100, (timeLeft / QUESTION_DURATION) * 100));
  const timerBarColor =
    timeLeft > 15
      ? 'bg-[#009E49]'
      : timeLeft > 7
        ? 'bg-[#F5B700]'
        : 'bg-[#D92B2B]';

  const isCorrectAnswer = selectedOption === currentQuestion.correctIndex;
  const qDiff = currentQuestion.difficulty || 1;
  const qBasePts = getBasePointsForDifficulty(qDiff);
  const diffStyle =
    qDiff === 4
      ? 'bg-[#D92B2B]/15 border-[#D92B2B]/45 text-[#F87171]'
      : qDiff === 3
        ? 'bg-[#E8590C]/15 border-[#E8590C]/45 text-[#FB923C]'
        : qDiff === 2
          ? 'bg-[#F5B700]/15 border-[#F5B700]/45 text-[var(--qa-gold-text)]'
          : 'bg-[#009E49]/15 border-[#009E49]/45 text-[var(--qa-green-text)]';

  return (
    <main className="max-w-3xl mx-auto px-4 pt-4 pb-12 space-y-4">
      {/* Locked Scope & Quit Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--qa-card)] border border-[#F5B700]/45 text-xs font-bold text-[var(--qa-text)]">
          <Lock className="w-3.5 h-3.5 text-[var(--qa-gold-text)] shrink-0" />
          <span>
            {t.lockedOn}: {lockedLabel}
          </span>
        </div>

        {!confirmQuit ? (
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              setConfirmQuit(true);
            }}
            className="min-h-[38px] px-3 rounded-xl bg-[var(--qa-card)] border border-[var(--qa-border)] text-xs font-semibold text-[var(--qa-muted)] hover:text-[var(--qa-text)] inline-flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{t.quitGameBtn}</span>
          </button>
        ) : (
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                onQuit();
              }}
              className="min-h-[38px] px-3 rounded-xl bg-[#D92B2B] text-white text-xs font-bold"
            >
              {t.quitGameBtn}
            </button>
            <button
              type="button"
              onClick={() => setConfirmQuit(false)}
              className="min-h-[38px] px-3 rounded-xl bg-[var(--qa-inset)] border border-[var(--qa-border)] text-[var(--qa-text)] text-xs font-semibold"
            >
              {t.cancel}
            </button>
          </div>
        )}
      </div>

      {/* Match HUD */}
      <section className="rounded-2xl bg-[var(--qa-card)] border border-[var(--qa-border)] p-3.5 sm:p-4 space-y-3 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div className="font-display font-bold text-sm sm:text-base text-[var(--qa-text)] font-mono-num">
            {t.questionProgress(currentIndex + 1, questions.length)}
          </div>

          {mode === 'normal' ? (
            <div className="flex items-center gap-1" aria-label={t.livesLabel}>
              {[0, 1, 2].map((idx) => {
                const active = idx < lives;
                return (
                  <Heart
                    key={idx}
                    className={`w-5 h-5 transition-all ${
                      active
                        ? 'text-[#D92B2B] fill-[#D92B2B] scale-100'
                        : 'text-[var(--qa-border-strong)] scale-90'
                    }`}
                  />
                );
              })}
            </div>
          ) : (
            <span className="text-xs font-bold text-[var(--qa-gold-text)]">{t.noLivesNotice}</span>
          )}

          <div className="text-end">
            <span className="text-[11px] uppercase tracking-wider text-[var(--qa-muted)] block">
              {t.scoreLabel}
            </span>
            <span className="font-display font-extrabold text-lg sm:text-xl text-[var(--qa-gold-text)] font-mono-num leading-none">
              {score}
            </span>
          </div>
        </div>

        {/* 30-second Timer Bar */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="inline-flex items-center gap-1.5 text-[var(--qa-text-soft)]">
              <Clock className="w-3.5 h-3.5 text-[var(--qa-gold-text)]" />
              <span className="font-mono-num">{timeLeft}s</span>
            </span>
            <span className="text-[var(--qa-muted)]">{t.speedBonusHint}</span>
          </div>
          <div className="h-2.5 w-full rounded-full bg-[var(--qa-inset)] overflow-hidden border border-[var(--qa-border)]">
            <div
              className={`h-full transition-all duration-700 ease-linear rounded-full ${timerBarColor}`}
              style={{ width: `${timerRatio}%` }}
            />
          </div>
        </div>
      </section>

      {/* Question Card */}
      <section className="rounded-3xl bg-[var(--qa-card)] border border-[var(--qa-border)] p-5 sm:p-7 shadow-xl space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-[var(--qa-muted)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="uppercase tracking-wider text-[var(--qa-green-text)]">
              {currentQuestion.category === 'football'
                ? t.catFootball
                : currentQuestion.category === 'culture'
                  ? t.catCulture
                  : currentQuestion.category === 'history'
                    ? t.catHistory
                    : currentQuestion.category === 'diaspora'
                      ? t.catDiaspora
                      : t.catGeography}
            </span>
            <span className={`px-2 py-0.5 rounded-lg border text-[11px] font-bold font-mono-num ${diffStyle}`}>
              {t.difficultyLabels[qDiff]} · +{qBasePts} {t.ptsShort}
            </span>
          </div>
          <span>
            {currentQuestion.category === 'diaspora'
              ? '✈️ 🌍 Diaspora'
              : questionCountry
                ? `${questionCountry.flag} ${getCountryName(questionCountry, language)}`
                : `🌍 ${t.optionAllAfrica}`}
          </span>
        </div>

        <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--qa-text)] leading-snug">
          {currentQuestion.prompt[language]}
        </h2>

        {/* 4 Choices */}
        <div className="grid grid-cols-1 gap-3">
          {currentQuestion.options.map((opt, idx) => {
            const isCorrectOpt = idx === currentQuestion.correctIndex;
            const isChosen = idx === selectedOption;

            let btnStyle =
              'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text)] hover:border-[#F5B700]';
            let badgeStyle = 'bg-[var(--qa-card)] text-[var(--qa-text)] border border-[var(--qa-border)]';

            if (isRevealed) {
              if (isCorrectOpt) {
                btnStyle =
                  'bg-[#009E49]/20 border-[#009E49] text-[var(--qa-text)] shadow-[0_0_0_1px_rgba(0,158,73,0.4)]';
                badgeStyle = 'bg-[#009E49] text-white';
              } else if (isChosen) {
                btnStyle =
                  'bg-[#D92B2B]/20 border-[#D92B2B] text-[var(--qa-text)] shadow-[0_0_0_1px_rgba(217,43,43,0.4)]';
                badgeStyle = 'bg-[#D92B2B] text-white';
              } else {
                btnStyle = 'bg-[var(--qa-inset)]/60 border-[var(--qa-border)] text-[var(--qa-muted)] opacity-75';
                badgeStyle = 'bg-[var(--qa-card)] text-[var(--qa-muted)]';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={isRevealed}
                onClick={() => handleSelectOption(idx)}
                className={`min-h-[58px] px-4 py-3 rounded-2xl border text-start flex items-center justify-between gap-3 transition-all active:scale-[0.99] ${btnStyle}`}
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span
                    className={`w-8 h-8 rounded-xl font-display font-extrabold text-sm flex items-center justify-center shrink-0 ${badgeStyle}`}
                  >
                    {OPTION_LETTERS[idx]}
                  </span>
                  <span className="text-sm sm:text-base font-semibold leading-snug">
                    {opt[language]}
                  </span>
                </span>

                {isRevealed && isCorrectOpt && (
                  <CheckCircle2 className="w-5 h-5 text-[#009E49] shrink-0" />
                )}
                {isRevealed && isChosen && !isCorrectOpt && (
                  <XCircle className="w-5 h-5 text-[#D92B2B] shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation + Next Button */}
        {isRevealed && (
          <div className="pt-2 space-y-4">
            <div
              className={`rounded-2xl p-4 border space-y-2 ${
                isCorrectAnswer
                  ? 'bg-[#009E49]/15 border-[#009E49]/45'
                  : 'bg-[#D92B2B]/15 border-[#D92B2B]/45'
              }`}
            >
              <div className="flex items-center gap-2 font-display font-extrabold text-sm sm:text-base">
                {isCorrectAnswer ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-[#009E49]" />
                    <span className="text-[var(--qa-green-text)]">{t.correctBadge}</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-[#D92B2B]" />
                    <span className="text-[#D92B2B]">
                      {timedOut ? t.timeUp : t.wrongBadge}
                    </span>
                  </>
                )}
              </div>

              <div className="flex items-start gap-2 text-xs sm:text-sm text-[var(--qa-text-soft)]">
                <Lightbulb className="w-4 h-4 text-[var(--qa-gold-text)] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[var(--qa-gold-text)]">{t.funFactLabel} </span>
                  <span>{currentQuestion.explanation[language]}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="w-full min-h-[56px] px-6 rounded-2xl bg-gradient-to-r from-[#F5B700] to-[#E09B00] hover:brightness-105 active:scale-[0.98] text-[#0A100D] font-display font-extrabold text-base sm:text-lg flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <span>{isLastQuestion ? t.seeResultsBtn : t.nextQuestionBtn}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

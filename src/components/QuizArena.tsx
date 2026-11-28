import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Heart,
  Layers,
  Lightbulb,
  Lock,
  LogOut,
  XCircle,
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { HOME_BACKDROP_IMAGE } from '../data/avatars';
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
import {
  generateAskFriendHint,
  generateAudiencePercentages,
  generateFiftyFiftyEliminated,
  generateFirstLetterInfo,
  HINT_COSTS,
  HintType,
  INITIAL_USED_JOKERS,
} from '../utils/hints';
import { getBasePointsForDifficulty } from '../utils/levelSystem';
import { soundEngine } from '../utils/sound';
import { HintsPanel } from './HintsPanel';

interface QuizArenaProps {
  mode: 'normal' | 'daily' | 'levels';
  language: Language;
  playScope: PlayScope;
  category: CategorySelection;
  questions: QuizQuestion[];
  bestGameScore: number;
  gameLevel?: number;
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
  gameLevel = 1,
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

  const [usedJokers, setUsedJokers] = useState<Record<HintType, boolean>>({
    ...INITIAL_USED_JOKERS,
  });
  const [eliminatedIndices, setEliminatedIndices] = useState<number[]>([]);
  const [firstLetterText, setFirstLetterText] = useState<string | null>(null);
  const [audiencePercentages, setAudiencePercentages] = useState<number[] | null>(null);
  const [fiftyFiftyActive, setFiftyFiftyActive] = useState(false);
  const [friendText, setFriendText] = useState<string | null>(null);
  const [lastCostFlash, setLastCostFlash] = useState<number | null>(null);

  const scoreRef = useRef(0);
  const pendingPenaltyRef = useRef(0);
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
    if (mode === 'normal' || mode === 'levels') {
      setLives((prev) => Math.max(0, prev - 1));
    }
  }, [mode]);

  useEffect(() => {
    answeredRef.current = false;
    pendingPenaltyRef.current = 0;
    setTimeLeft(QUESTION_DURATION);
    setSelectedOption(null);
    setTimedOut(false);
    setEliminatedIndices([]);
    setFirstLetterText(null);
    setAudiencePercentages(null);
    setFiftyFiftyActive(false);
    setFriendText(null);
    setLastCostFlash(null);
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

  const handleUseHint = (hintType: HintType) => {
    if (answeredRef.current || isRevealed || usedJokers[hintType]) return;

    soundEngine.playClick();
    setUsedJokers((prev) => ({ ...prev, [hintType]: true }));

    const cost = HINT_COSTS[hintType];
    const currentScore = scoreRef.current;
    const paidNow = Math.min(currentScore, cost);
    const deferred = cost - paidNow;
    if (paidNow > 0) {
      scoreRef.current = currentScore - paidNow;
      setScore(scoreRef.current);
    }
    if (deferred > 0) {
      pendingPenaltyRef.current += deferred;
    }
    setLastCostFlash(cost);

    if (hintType === 'firstLetter') {
      const { firstChar, length } = generateFirstLetterInfo(
        currentQuestion.options[currentQuestion.correctIndex]?.[language] || '',
        language
      );
      setFirstLetterText(t.hintFirstLetterMsg(firstChar, length));
    } else if (hintType === 'fiftyFifty') {
      const eliminated = generateFiftyFiftyEliminated(
        currentQuestion.correctIndex,
        currentQuestion.id
      );
      setEliminatedIndices(eliminated);
      setFiftyFiftyActive(true);
    } else if (hintType === 'audience') {
      const pcts = generateAudiencePercentages(
        currentQuestion.correctIndex,
        currentQuestion.difficulty || 1,
        eliminatedIndices,
        currentQuestion.id
      );
      setAudiencePercentages(pcts);
    } else if (hintType === 'askFriend') {
      const { friendName, letter, clue } = generateAskFriendHint(currentQuestion, language);
      setFriendText(t.hintAskFriendMsg(friendName, letter, clue));
    }
  };

  const handleSelectOption = (optionIndex: number) => {
    if (answeredRef.current || isRevealed || eliminatedIndices.includes(optionIndex)) return;
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
      const netEarned = Math.max(0, basePoints + speedBonus - pendingPenaltyRef.current);
      pendingPenaltyRef.current = 0;
      scoreRef.current = scoreRef.current + netEarned;
      setScore(scoreRef.current);
      setCorrectCount((prev) => prev + 1);
    } else {
      pendingPenaltyRef.current = 0;
      soundEngine.playWrong();
      if (mode === 'normal' || mode === 'levels') {
        setLives((prev) => Math.max(0, prev - 1));
      }
    }
  };

  const outOfLives = (mode === 'normal' || mode === 'levels') && lives <= 0;
  const isLastQuestion = currentIndex + 1 >= questions.length || outOfLives;

  const handleNext = () => {
    soundEngine.playClick();
    if (isLastQuestion) {
      const won = mode === 'daily' ? true : lives > 0;
      const isNewRecord =
        (mode === 'normal' || mode === 'levels') && score > bestGameScore && score > 0;
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
        playedGameLevel: mode === 'levels' ? gameLevel : undefined,
        nextGameLevel: mode === 'levels' ? (won ? gameLevel + 1 : gameLevel) : undefined,
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
    <main className="relative isolate w-full flex-1 min-h-0 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <img
          src={HOME_BACKDROP_IMAGE}
          alt=""
          className="w-full h-full object-cover object-center opacity-35 select-none"
        />
        <div className="absolute inset-0 bg-[#0A100D]/80" />
      </div>

      <div className="h-full max-w-3xl mx-auto px-3 sm:px-6 pt-2 sm:pt-3 pb-2.5 sm:pb-4 flex flex-col gap-2 sm:gap-2.5">
        {/* Locked Scope / Level Badge & Quit Bar */}
        <div className="flex items-center justify-between gap-2 shrink-0">
          {mode === 'levels' ? (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[var(--qa-card)]/95 border border-[#22C55E]/55 text-[11px] sm:text-xs font-extrabold text-[var(--qa-text)] min-w-0 truncate">
              <Layers className="w-3.5 h-3.5 text-[#F5B700] shrink-0" />
              <span className="truncate">{t.levelStageBadge(gameLevel)}</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[var(--qa-card)]/95 border border-[#F5B700]/45 text-[11px] sm:text-xs font-bold text-[var(--qa-text)] min-w-0 truncate">
              <Lock className="w-3.5 h-3.5 text-[var(--qa-gold-text)] shrink-0" />
              <span className="truncate">
                {t.lockedOn}: {lockedLabel}
              </span>
            </div>
          )}

          {!confirmQuit ? (
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setConfirmQuit(true);
              }}
              className="min-h-[34px] px-2.5 rounded-xl bg-[var(--qa-card)]/95 border border-[var(--qa-border)] text-xs font-semibold text-[var(--qa-muted)] hover:text-[var(--qa-text)] inline-flex items-center gap-1.5 shrink-0"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>{t.quitGameBtn}</span>
            </button>
          ) : (
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  onQuit();
                }}
                className="min-h-[34px] px-2.5 rounded-xl bg-[#D92B2B] text-white text-xs font-bold"
              >
                {t.quitGameBtn}
              </button>
              <button
                type="button"
                onClick={() => setConfirmQuit(false)}
                className="min-h-[34px] px-2.5 rounded-xl bg-[var(--qa-inset)] border border-[var(--qa-border)] text-[var(--qa-text)] text-xs font-semibold"
              >
                {t.cancel}
              </button>
            </div>
          )}
        </div>

        {/* Compact Match HUD */}
        <section className="rounded-2xl bg-[var(--qa-card)]/95 border border-[var(--qa-border)] px-3 py-2 sm:p-3 space-y-1.5 shadow-sm shrink-0 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-2">
            <div className="font-display font-bold text-xs sm:text-sm text-[var(--qa-text)] font-mono-num">
              {t.questionProgress(currentIndex + 1, questions.length)}
            </div>

            {mode === 'normal' || mode === 'levels' ? (
              <div className="flex items-center gap-1" aria-label={t.livesLabel}>
                {[0, 1, 2].map((idx) => {
                  const active = idx < lives;
                  return (
                    <Heart
                      key={idx}
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-all ${
                        active
                          ? 'text-[#D92B2B] fill-[#D92B2B] scale-100'
                          : 'text-[var(--qa-border-strong)] scale-90'
                      }`}
                    />
                  );
                })}
              </div>
            ) : (
              <span className="text-[11px] sm:text-xs font-bold text-[var(--qa-gold-text)] truncate">
                {t.noLivesNotice}
              </span>
            )}

            <div className="flex items-baseline gap-1.5 text-end">
              <span className="text-[10px] uppercase tracking-wider text-[var(--qa-muted)]">
                {t.scoreLabel}
              </span>
              <span className="font-display font-extrabold text-base sm:text-lg text-[var(--qa-gold-text)] font-mono-num leading-none">
                {score}
              </span>
            </div>
          </div>

          {/* 30-second Timer Bar */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[11px] font-bold">
              <span className="inline-flex items-center gap-1 text-[var(--qa-text-soft)]">
                <Clock className="w-3 h-3 text-[var(--qa-gold-text)]" />
                <span className="font-mono-num">{timeLeft}s</span>
              </span>
              <span className="text-[var(--qa-muted)] truncate">{t.speedBonusHint}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-[var(--qa-inset)] overflow-hidden border border-[var(--qa-border)]">
              <div
                className={`h-full transition-all duration-700 ease-linear rounded-full ${timerBarColor}`}
                style={{ width: `${timerRatio}%` }}
              />
            </div>
          </div>
        </section>

        {/* Fixed-Viewport Question Card */}
        <section className="flex-1 min-h-0 rounded-2xl sm:rounded-3xl bg-[var(--qa-card)]/95 border border-[var(--qa-border)] p-3.5 sm:p-5 shadow-xl flex flex-col justify-between gap-2.5 overflow-hidden backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-between gap-1.5 text-[11px] sm:text-xs font-bold text-[var(--qa-muted)] shrink-0">
            <div className="flex flex-wrap items-center gap-1.5">
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
              <span className={`px-2 py-0.5 rounded-lg border text-[10px] sm:text-[11px] font-bold font-mono-num ${diffStyle}`}>
                {t.difficultyLabels[qDiff]} · +{qBasePts} {t.ptsShort}
              </span>
            </div>
            <span className="truncate max-w-[160px] sm:max-w-none">
              {currentQuestion.category === 'diaspora'
                ? '✈️ 🌍 Diaspora'
                : questionCountry
                  ? `${questionCountry.flag} ${getCountryName(questionCountry, language)}`
                  : `🌍 ${t.optionAllAfrica}`}
            </span>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto pr-0.5 space-y-2.5 sm:space-y-3">
            <h2 className="font-display font-bold text-base sm:text-xl text-[var(--qa-text)] leading-snug">
              {currentQuestion.prompt[language]}
            </h2>

            {/* Millionaire-style Lifelines / Hints */}
            <HintsPanel
              language={language}
              usedJokers={usedJokers}
              disabled={isRevealed}
              firstLetterText={firstLetterText}
              audiencePercentages={audiencePercentages}
              fiftyFiftyActive={fiftyFiftyActive}
              friendText={friendText}
              lastCostFlash={lastCostFlash}
              onUseHint={handleUseHint}
            />

            {/* 4 Choices */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentQuestion.options.map((opt, idx) => {
                const isCorrectOpt = idx === currentQuestion.correctIndex;
                const isChosen = idx === selectedOption;
                const isEliminated = !isRevealed && eliminatedIndices.includes(idx);

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
                } else if (isEliminated) {
                  btnStyle =
                    'bg-[var(--qa-inset)]/35 border-[var(--qa-border)]/40 text-[var(--qa-muted)] opacity-30 line-through cursor-not-allowed';
                  badgeStyle = 'bg-[var(--qa-card)] text-[var(--qa-muted)] opacity-50';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isRevealed || isEliminated}
                    onClick={() => handleSelectOption(idx)}
                    data-option-idx={idx}
                    className={`min-h-[46px] sm:min-h-[54px] px-3 py-2 rounded-xl sm:rounded-2xl border text-start flex items-center justify-between gap-2 transition-all active:scale-[0.99] ${btnStyle}`}
                  >
                    <span className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`w-7 h-7 rounded-lg font-display font-extrabold text-xs flex items-center justify-center shrink-0 ${badgeStyle}`}
                      >
                        {OPTION_LETTERS[idx]}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold leading-snug">
                        {opt[language]}
                      </span>
                    </span>

                    {isRevealed && isCorrectOpt && (
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#009E49] shrink-0" />
                    )}
                    {isRevealed && isChosen && !isCorrectOpt && (
                      <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#D92B2B] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pinned Explanation + Next Button inside the fixed card */}
          {isRevealed && (
            <div className="shrink-0 pt-1.5 border-t border-[var(--qa-border)]/60 space-y-2">
              <div
                className={`rounded-xl px-3 py-2 border space-y-1 max-h-[84px] overflow-y-auto ${
                  isCorrectAnswer
                    ? 'bg-[#009E49]/15 border-[#009E49]/45'
                    : 'bg-[#D92B2B]/15 border-[#D92B2B]/45'
                }`}
              >
                <div className="flex items-center gap-1.5 font-display font-extrabold text-xs sm:text-sm">
                  {isCorrectAnswer ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-[#009E49] shrink-0" />
                      <span className="text-[var(--qa-green-text)]">{t.correctBadge}</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-[#D92B2B] shrink-0" />
                      <span className="text-[#D92B2B]">
                        {timedOut ? t.timeUp : t.wrongBadge}
                      </span>
                    </>
                  )}
                </div>

                <div className="flex items-start gap-1.5 text-[11px] sm:text-xs text-[var(--qa-text-soft)] leading-snug">
                  <Lightbulb className="w-3.5 h-3.5 text-[var(--qa-gold-text)] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[var(--qa-gold-text)]">{t.funFactLabel} </span>
                    <span>{currentQuestion.explanation[language]}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full min-h-[46px] sm:min-h-[52px] px-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#F5B700] to-[#E09B00] hover:brightness-105 active:scale-[0.98] text-[#0A100D] font-display font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <span>{isLastQuestion ? t.seeResultsBtn : t.nextQuestionBtn}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

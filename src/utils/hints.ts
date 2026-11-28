import { Language, QuestionDifficulty, QuizQuestion } from '../types/quiz';

export type HintType = 'firstLetter' | 'audience' | 'fiftyFifty' | 'askFriend';

/**
 * Progressive point cost: higher-precision lifelines deduct more points.
 * - firstLetter: lightest clue (-20 pts)
 * - audience: crowd poll (-35 pts)
 * - fiftyFifty: removes 2 wrong answers (-50 pts)
 * - askFriend: expert friend insight + answer clue (-70 pts)
 */
export const HINT_COSTS: Record<HintType, number> = {
  firstLetter: 20,
  audience: 35,
  fiftyFifty: 50,
  askFriend: 70,
};

export const HINT_ORDER: HintType[] = ['firstLetter', 'audience', 'fiftyFifty', 'askFriend'];

export const INITIAL_USED_JOKERS: Record<HintType, boolean> = {
  firstLetter: false,
  audience: false,
  fiftyFifty: false,
  askFriend: false,
};

export const HINT_OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const;

const FRIEND_NAMES = ['Aminata', 'Kwame', 'Fatou', 'Youssef', 'Ngozi', 'Moussa'];

function hashString(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededFraction(seedStr: string, salt: number): number {
  const h = hashString(`${seedStr}#${salt}`);
  return (h % 10000) / 10000;
}

export function generateFirstLetterInfo(
  correctOptionText: string,
  lang: Language
): { firstChar: string; length: number } {
  const trimmed = (correctOptionText || '').trim();
  const match = trimmed.match(/[\p{L}\p{N}]/u);
  const rawChar = match ? match[0] : trimmed.charAt(0) || '?';
  const firstChar = lang === 'ar' ? rawChar : rawChar.toUpperCase();
  return {
    firstChar,
    length: Array.from(trimmed).length,
  };
}

export function generateFiftyFiftyEliminated(
  correctIndex: number,
  questionId: string
): number[] {
  const wrongIndices = [0, 1, 2, 3].filter((i) => i !== correctIndex);
  if (wrongIndices.length <= 2) return wrongIndices;
  const keepWrongIdx = Math.floor(seededFraction(questionId, 5050) * wrongIndices.length);
  return wrongIndices.filter((_, idx) => idx !== keepWrongIdx);
}

export function generateAudiencePercentages(
  correctIndex: number,
  difficulty: QuestionDifficulty,
  eliminatedIndices: number[],
  questionId: string
): number[] {
  const activeWrong = [0, 1, 2, 3].filter(
    (i) => i !== correctIndex && !eliminatedIndices.includes(i)
  );

  // Base correct majority depends on question difficulty; higher if 50/50 narrowed options
  const baseMinByDiff: Record<QuestionDifficulty, number> = {
    1: 64,
    2: 56,
    3: 49,
    4: 44,
  };
  const baseMin = baseMinByDiff[difficulty] ?? 55;
  const fiftyBoost = eliminatedIndices.length >= 2 ? 14 : 0;
  const jitter = Math.floor(seededFraction(questionId, 11) * 11); // 0..10
  let correctPct = Math.min(86, baseMin + fiftyBoost + jitter);

  if (activeWrong.length === 0) {
    return [0, 1, 2, 3].map((i) => (i === correctIndex ? 100 : 0));
  }

  let remaining = 100 - correctPct;
  const result = [0, 0, 0, 0];
  result[correctIndex] = correctPct;

  const weights = activeWrong.map((idx) => 0.4 + seededFraction(questionId, 30 + idx));
  const weightSum = weights.reduce((acc, w) => acc + w, 0) || 1;

  let assigned = 0;
  activeWrong.forEach((optIdx, pos) => {
    if (pos === activeWrong.length - 1) {
      result[optIdx] = Math.max(0, remaining - assigned);
    } else {
      const share = Math.max(1, Math.floor((remaining * weights[pos]) / weightSum));
      const clamped = Math.min(remaining - assigned, share);
      result[optIdx] = clamped;
      assigned += clamped;
    }
  });

  // Safety guarantee: correct option strictly leads all active options
  const maxWrong = Math.max(...activeWrong.map((i) => result[i]), 0);
  if (result[correctIndex] <= maxWrong) {
    const diff = maxWrong - result[correctIndex] + 4;
    const donor = activeWrong.reduce((best, cur) => (result[cur] > result[best] ? cur : best), activeWrong[0]);
    const transfer = Math.min(diff, result[donor]);
    result[donor] -= transfer;
    result[correctIndex] += transfer;
  }

  return result;
}

export function generateAskFriendHint(
  question: QuizQuestion,
  lang: Language
): { friendName: string; letter: string; clue: string } {
  const friendIdx = Math.floor(seededFraction(question.id, 707) * FRIEND_NAMES.length);
  const friendName = FRIEND_NAMES[friendIdx] || 'Aminata';
  const letter = HINT_OPTION_LETTERS[question.correctIndex] || 'A';

  const rawExplanation = (question.explanation?.[lang] || '').trim();
  let clue = rawExplanation;
  if (clue.length > 115) {
    const firstSentenceEnd = clue.search(/[.!?؟]\s/);
    if (firstSentenceEnd > 18 && firstSentenceEnd <= 115) {
      clue = clue.slice(0, firstSentenceEnd + 1);
    } else {
      clue = clue.slice(0, 112).replace(/\s+\S*$/, '') + '…';
    }
  }

  return { friendName, letter, clue };
}

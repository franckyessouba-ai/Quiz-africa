import { LocalizedText, QuizQuestion } from '../types/quiz';

/**
 * Deterministic pseudo-random number generator (LCG)
 */
function createRng(seed = 1) {
  let s = seed >>> 0 || 1;
  return () => {
    s = (Math.imul(1664525, s) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function shuffleWithRng<T>(items: T[], rng: () => number): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Generates a randomized, evenly balanced sequence of length `count` where:
 * - Each letter (0=A, 1=B, 2=C, 3=D) appears ~25% of the time (every 4 questions covers A, B, C, D)
 * - No two consecutive questions ever have the same correct index: seq[i] !== seq[i-1]
 *   (which also guarantees there are never 3 consecutive identical letters).
 */
export function generateBalancedTargetSequence(count: number, seed = 1): (0 | 1 | 2 | 3)[] {
  const rng = createRng(seed || 1);
  const seq: (0 | 1 | 2 | 3)[] = [];
  const letters: (0 | 1 | 2 | 3)[] = [0, 1, 2, 3];

  while (seq.length < count) {
    const remaining = count - seq.length;
    const prev = seq.length > 0 ? seq[seq.length - 1] : null;
    let block = shuffleWithRng(letters, rng);

    if (prev !== null && block[0] === prev) {
      // Swap block[0] with another element in the block (e.g. index 1, 2, or 3)
      const swapIdx = 1 + Math.floor(rng() * 3);
      [block[0], block[swapIdx]] = [block[swapIdx], block[0]];
    }

    if (remaining < 4) {
      block = block.slice(0, remaining);
    }
    seq.push(...block);
  }

  return seq;
}

/**
 * Re-positions the correct answer of a QuizQuestion to `targetIndex` (0=A, 1=B, 2=C, 3=D)
 * and randomly shuffles the 3 distractors into the other 3 positions.
 */
export function reorderQuestionOptions<T extends QuizQuestion>(
  q: T,
  targetIndex: 0 | 1 | 2 | 3,
  shuffleSeed = 0
): T {
  const currentIdx =
    typeof q.correctIndex === 'number' && q.correctIndex >= 0 && q.correctIndex < 4
      ? q.correctIndex
      : 0;

  const correctOption = q.options[currentIdx];
  const distractors: LocalizedText[] = [];
  for (let i = 0; i < q.options.length; i++) {
    if (i !== currentIdx && distractors.length < 3) {
      distractors.push(q.options[i]);
    }
  }

  while (distractors.length < 3) {
    distractors.push(correctOption);
  }

  const rng = createRng((shuffleSeed + 1) * 2654435761);
  const shuffledDistractors = shuffleWithRng(distractors, rng);

  const remainingSlots: (0 | 1 | 2 | 3)[] = ([0, 1, 2, 3] as (0 | 1 | 2 | 3)[]).filter(
    (idx) => idx !== targetIndex
  );

  const newOptions: LocalizedText[] = new Array(4);
  newOptions[targetIndex] = correctOption;
  newOptions[remainingSlots[0]] = shuffledDistractors[0];
  newOptions[remainingSlots[1]] = shuffledDistractors[1];
  newOptions[remainingSlots[2]] = shuffledDistractors[2];

  return {
    ...q,
    options: newOptions as [LocalizedText, LocalizedText, LocalizedText, LocalizedText],
    correctIndex: targetIndex,
  };
}

/**
 * Rebalances any set of questions (e.g. 10 questions for a match or an entire question bank) so that:
 * 1. The correct answer positions are randomly and evenly balanced (~25% in A, B, C, D)
 * 2. No two consecutive questions have the same correct answer (if Q1 is B, Q2 is never B)
 * 3. Never 3 consecutive identical letters
 */
export function balanceQuestionSet(questions: QuizQuestion[], seed?: number): QuizQuestion[] {
  if (!questions || questions.length === 0) return [];

  const effectiveSeed =
    typeof seed === 'number' && seed > 0
      ? seed
      : Math.floor(Math.random() * 0x7fffffff) + 1;
  const targets = generateBalancedTargetSequence(questions.length, effectiveSeed);

  return questions.map((q, idx) => {
    return reorderQuestionOptions(q, targets[idx], effectiveSeed + idx * 13);
  });
}

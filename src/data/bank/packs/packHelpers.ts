import {
  LocalizedText,
  QuestionDifficulty,
  QuestionSubCategory,
  QuizCategory,
  QuizQuestion,
} from '../../../types/quiz';

export interface CuratedQuestionInput {
  id: string;
  countryCode: string;
  category: QuizCategory;
  subCategory: QuestionSubCategory;
  difficulty: QuestionDifficulty;
  topicKey: string;
  source: string;
  countryModeAllowed?: boolean;
  prompt: LocalizedText;
  countryModePrompt?: LocalizedText;
  correct: LocalizedText;
  distractors: [LocalizedText, LocalizedText, LocalizedText];
  explanation: LocalizedText;
}

function hashStr(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function deterministicShuffle<T>(arr: T[], seedStr: string): T[] {
  let s = hashStr(seedStr) || 1;
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    s = (Math.imul(1664525, s) + 1013904223) >>> 0;
    const j = Math.floor((s / 4294967296) * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function mkQ(input: CuratedQuestionInput): QuizQuestion {
  const tagged = [
    { text: input.correct, ok: true },
    { text: input.distractors[0], ok: false },
    { text: input.distractors[1], ok: false },
    { text: input.distractors[2], ok: false },
  ];
  const shuffled = deterministicShuffle(tagged, input.id);
  const correctIndex = shuffled.findIndex((x) => x.ok);

  return {
    id: input.id,
    countryCode: input.countryCode,
    category: input.category,
    subCategory: input.subCategory,
    difficulty: input.difficulty,
    topicKey: `${input.countryCode}_${input.topicKey}`,
    source: input.source,
    countryModeAllowed: input.countryModeAllowed ?? true,
    prompt: input.prompt,
    countryModePrompt: input.countryModePrompt,
    options: [shuffled[0].text, shuffled[1].text, shuffled[2].text, shuffled[3].text],
    correctIndex,
    explanation: input.explanation,
  };
}

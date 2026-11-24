import { QuizQuestion } from '../types/quiz';
import { balanceQuestionSet } from '../utils/questionShuffle';
import { DIASPORA_PART_1 } from './diasporaPart1';
import { DIASPORA_PART_2 } from './diasporaPart2';
import { DIASPORA_PART_3 } from './diasporaPart3';
import { DIASPORA_PART_4 } from './diasporaPart4';
import { DIASPORA_PART_5 } from './diasporaPart5';

// 505 unique, factual, simple and child-accessible diaspora questions across 5 languages
export const DIASPORA_QUESTIONS: QuizQuestion[] = balanceQuestionSet(
  [
    ...DIASPORA_PART_1,
    ...DIASPORA_PART_2,
    ...DIASPORA_PART_3,
    ...DIASPORA_PART_4,
    ...DIASPORA_PART_5,
  ],
  20261127
);

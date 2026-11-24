import { QuizQuestion } from '../types/quiz';
import { balanceQuestionSet } from '../utils/questionShuffle';
import { PAN_FOOTBALL_1 } from './panFootball1';
import { PAN_FOOTBALL_2 } from './panFootball2';
import { PAN_FOOTBALL_3 } from './panFootball3';
import { PAN_FOOTBALL_4 } from './panFootball4';
import { PAN_CULTURE_1 } from './panCulture1';
import { PAN_CULTURE_2 } from './panCulture2';
import { PAN_CULTURE_3 } from './panCulture3';
import { PAN_CULTURE_4 } from './panCulture4';
import { PAN_HISTORY_1 } from './panHistory1';
import { PAN_HISTORY_2 } from './panHistory2';
import { PAN_HISTORY_3 } from './panHistory3';
import { PAN_HISTORY_4 } from './panHistory4';
import { PAN_GEOGRAPHY_1 } from './panGeography1';
import { PAN_GEOGRAPHY_2 } from './panGeography2';
import { PAN_GEOGRAPHY_3 } from './panGeography3';
import { PAN_GEOGRAPHY_4 } from './panGeography4';

export const PAN_AFRICAN_QUESTIONS: QuizQuestion[] = balanceQuestionSet(
  [
    ...PAN_FOOTBALL_1,
    ...PAN_FOOTBALL_2,
    ...PAN_FOOTBALL_3,
    ...PAN_FOOTBALL_4,
    ...PAN_CULTURE_1,
    ...PAN_CULTURE_2,
    ...PAN_CULTURE_3,
    ...PAN_CULTURE_4,
    ...PAN_HISTORY_1,
    ...PAN_HISTORY_2,
    ...PAN_HISTORY_3,
    ...PAN_HISTORY_4,
    ...PAN_GEOGRAPHY_1,
    ...PAN_GEOGRAPHY_2,
    ...PAN_GEOGRAPHY_3,
    ...PAN_GEOGRAPHY_4,
  ],
  20261126
);

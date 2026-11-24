import { QuizQuestion } from '../../../types/quiz';
import { AFRICAN_SPORTS_DIRECT_PACK } from './africanSportsDirectPack';
import { BENIN_CURATED_PACK } from './beninPack';
import { BURKINA_CURATED_PACK } from './burkinaPack';
import { CAMEROON_CURATED_PACK } from './cameroonPack';
import { CHAD_CURATED_PACK } from './chadPack';
import { CONGO_CURATED_PACK } from './congoPack';
import { DRC_CURATED_PACK } from './drcPack';
import { GABON_CURATED_PACK } from './gabonPack';
import { GUINEA_CURATED_PACK } from './guineaPack';
import { IVORY_COAST_CURATED_PACK } from './ivoryCoastPack';
import { MALI_CURATED_PACK } from './maliPack';
import { NIGER_CURATED_PACK } from './nigerPack';
import { NORTH_MAJOR_CURATED_PACK } from './northMajorPack';
import { SENEGAL_CURATED_PACK } from './senegalPack';
import { SUB_SAHARAN_MAJOR_CURATED_PACK } from './subSaharanMajorPack';
import { TOGO_CURATED_PACK } from './togoPack';

export const CURATED_PACK_QUESTIONS: QuizQuestion[] = [
  ...GABON_CURATED_PACK,
  ...CAMEROON_CURATED_PACK,
  ...CONGO_CURATED_PACK,
  ...DRC_CURATED_PACK,
  ...CHAD_CURATED_PACK,
  ...SENEGAL_CURATED_PACK,
  ...IVORY_COAST_CURATED_PACK,
  ...GUINEA_CURATED_PACK,
  ...MALI_CURATED_PACK,
  ...BENIN_CURATED_PACK,
  ...TOGO_CURATED_PACK,
  ...BURKINA_CURATED_PACK,
  ...NIGER_CURATED_PACK,
  ...NORTH_MAJOR_CURATED_PACK,
  ...SUB_SAHARAN_MAJOR_CURATED_PACK,
  ...AFRICAN_SPORTS_DIRECT_PACK,
];

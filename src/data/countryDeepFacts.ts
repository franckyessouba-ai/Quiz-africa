import { CountryDeepFacts } from '../types/quiz';
import { COUNTRY_DEEP_PART_1 } from './countryDeepPart1';
import { COUNTRY_DEEP_PART_2 } from './countryDeepPart2';
import { COUNTRY_DEEP_PART_3 } from './countryDeepPart3';

export const COUNTRY_DEEP_MAP: Record<string, CountryDeepFacts> = {
  ...COUNTRY_DEEP_PART_1,
  ...COUNTRY_DEEP_PART_2,
  ...COUNTRY_DEEP_PART_3,
};

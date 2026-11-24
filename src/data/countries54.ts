import { CountryProfile, Language } from '../types/quiz';
import { COUNTRIES_PART_1 } from './countriesPart1';
import { COUNTRIES_PART_2A } from './countriesPart2a';
import { COUNTRIES_PART_2B } from './countriesPart2b';

export const AFRICAN_COUNTRIES: CountryProfile[] = [
  ...COUNTRIES_PART_1,
  ...COUNTRIES_PART_2A,
  ...COUNTRIES_PART_2B,
];

const COUNTRY_MAP = new Map<string, CountryProfile>(
  AFRICAN_COUNTRIES.map((c) => [c.code, c])
);

export function getCountryByCode(code: string): CountryProfile {
  return COUNTRY_MAP.get(code) || AFRICAN_COUNTRIES[0];
}

export function getCountryName(countryOrCode: CountryProfile | string, lang: Language): string {
  const c =
    typeof countryOrCode === 'string' ? COUNTRY_MAP.get(countryOrCode) : countryOrCode;
  return c ? c.name[lang] : String(countryOrCode);
}

export function getSortedCountries(lang: Language): CountryProfile[] {
  return [...AFRICAN_COUNTRIES].sort((a, b) =>
    a.name[lang].localeCompare(b.name[lang], lang)
  );
}

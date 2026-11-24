import {
  CategorySelection,
  PlayScope,
  QuestionDifficulty,
  QuizCategory,
  QuizQuestion,
} from '../types/quiz';
import { getTargetDifficultiesForLevel } from '../utils/levelSystem';
import { balanceQuestionSet } from '../utils/questionShuffle';
import { AFRICAN_NEWS_QUESTIONS } from './africanNewsQuestions';
import { buildCoreCountryQuestions } from './bank/coreCountryBuilder';
import { CURATED_PACK_QUESTIONS } from './bank/packs';
import { NORMALIZED_PAN_AFRICAN_QUESTIONS } from './bank/panAfricanNormalized';
import { AFRICAN_COUNTRIES, getCountryByCode } from './countries54';
import { DIASPORA_QUESTIONS } from './diasporaQuestions';

function hashString(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function createRng(seed: number) {
  let s = seed || 1;
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

function shuffleArray<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function normalizeText(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const CORE_COUNTRY_QUESTIONS: QuizQuestion[] = AFRICAN_COUNTRIES.flatMap(buildCoreCountryQuestions);

export const COUNTRY_QUESTIONS: QuizQuestion[] = balanceQuestionSet(
  [...CORE_COUNTRY_QUESTIONS, ...CURATED_PACK_QUESTIONS],
  20261124
);

export const ALL_QUESTIONS: QuizQuestion[] = balanceQuestionSet(
  [
    ...COUNTRY_QUESTIONS,
    ...NORMALIZED_PAN_AFRICAN_QUESTIONS,
    ...DIASPORA_QUESTIONS,
  ],
  20261125
);

export const TOTAL_QUESTION_COUNT = ALL_QUESTIONS.length;

export function mergeQuestionPools(
  ...pools: Array<QuizQuestion[] | undefined>
): QuizQuestion[] {
  const byId = new Map<string, QuizQuestion>();
  for (const pool of pools) {
    if (!pool) continue;
    for (const q of pool) {
      byId.set(q.id, q);
    }
  }
  return Array.from(byId.values());
}

const REVERSE_COUNTRY_REGEX =
  /\b(quel(le)?s?\s+(?:\d+\s+|deux\s+|trois\s+|quatre\s+|cinq\s+)?(pays|etat|etats|nation|nations|selection|selections|equipe\s+nationale|archipel|territoire)|dans\s+quel(le)?s?\s+(pays|etat|nation|archipel)|de\s+quel(le)?s?\s+(pays|nation|selection)|a\s+quel(le)?s?\s+(pays|nation|selection)|which\s+(?:\d+\s+)?(african\s+)?(countries|country|nation|nations|national\s+team|state|states)|in\s+which\s+(african\s+)?(country|nation)|from\s+which\s+(african\s+)?(country|nation))\b/i;

function isSafeForCountryMode(q: QuizQuestion, targetCountryCode: string): boolean {
  if (q.countryCode !== targetCountryCode) return false;
  if (q.category === 'diaspora') return false;
  if (q.countryModeAllowed === false) return false;

  const activePrompt = q.countryModePrompt ?? q.prompt;
  const promptFr = normalizeText(activePrompt.fr);
  const promptEn = normalizeText(activePrompt.en);

  if (REVERSE_COUNTRY_REGEX.test(promptFr) || REVERSE_COUNTRY_REGEX.test(promptEn)) {
    return false;
  }

  const targetCountry = getCountryByCode(targetCountryCode);
  if (targetCountry) {
    const ansFr = normalizeText(q.options[q.correctIndex]?.fr ?? '');
    const ansEn = normalizeText(q.options[q.correctIndex]?.en ?? '');
    const cFr = normalizeText(targetCountry.name.fr);
    const cEn = normalizeText(targetCountry.name.en);
    const isExactCountryName = (ans: string, cn: string) =>
      ans === cn ||
      ans === `le ${cn}` ||
      ans === `la ${cn}` ||
      ans === `l'${cn}` ||
      ans === `l’${cn}` ||
      ans.startsWith(`${cn} (`);
    if (isExactCountryName(ansFr, cFr) || isExactCountryName(ansEn, cEn)) {
      return false;
    }
  }

  return true;
}

function getTopicSignature(q: QuizQuestion): string {
  if (q.topicKey) return q.topicKey;
  return q.id;
}

function pickSmartQuestion(
  pool: QuizQuestion[],
  targetDiff: QuestionDifficulty,
  pickedIds: Set<string>,
  usedTopics: Set<string>,
  usedSubCategories: Set<string>,
  usedCountries: Set<string>,
  categoryCounts: Map<QuizCategory, number>,
  preferCountryDiversity: boolean,
  enforceCategorySpread: boolean,
  preferHigherOnTie: boolean
): QuizQuestion | undefined {
  const available = pool.filter((q) => !pickedIds.has(q.id));
  if (available.length === 0) return undefined;

  const diffs: QuestionDifficulty[] = [targetDiff];
  const otherDiffs: QuestionDifficulty[] = ([1, 2, 3, 4] as QuestionDifficulty[])
    .filter((d) => d !== targetDiff)
    .sort((a, b) => {
      const da = Math.abs(a - targetDiff);
      const db = Math.abs(b - targetDiff);
      if (da !== db) return da - db;
      return preferHigherOnTie ? b - a : a - b;
    });
  diffs.push(...otherDiffs);

  const matchTier = (
    d: QuestionDifficulty,
    requireFreshTopic: boolean,
    requireFreshSubCategory: boolean,
    requireFreshCountry: boolean,
    requireCategoryCap: boolean
  ): QuizQuestion | undefined => {
    return available.find((q) => {
      if (q.difficulty !== d) return false;
      if (requireFreshTopic && usedTopics.has(getTopicSignature(q))) return false;
      if (requireFreshSubCategory && q.subCategory && usedSubCategories.has(q.subCategory)) {
        return false;
      }
      if (
        requireFreshCountry &&
        q.countryCode !== 'AFRICA' &&
        usedCountries.has(q.countryCode)
      ) {
        return false;
      }
      if (requireCategoryCap && (categoryCounts.get(q.category) ?? 0) >= 3) {
        return false;
      }
      return true;
    });
  };

  // Pass 1: exact target difficulty with progressive relaxations
  const exactTiers: Array<[boolean, boolean, boolean, boolean]> = [
    [true, true, preferCountryDiversity, enforceCategorySpread],
    [true, true, preferCountryDiversity, false],
    [true, false, preferCountryDiversity, enforceCategorySpread],
    [true, false, preferCountryDiversity, false],
    [true, false, false, false],
  ];
  for (const [freshTopic, freshSub, freshCountry, catCap] of exactTiers) {
    const found = matchTier(targetDiff, freshTopic, freshSub, freshCountry, catCap);
    if (found) return found;
  }

  // Pass 2: nearest difficulty with progressive relaxations
  for (const d of otherDiffs) {
    for (const [freshTopic, freshSub, freshCountry, catCap] of exactTiers) {
      const found = matchTier(d, freshTopic, freshSub, freshCountry, catCap);
      if (found) return found;
    }
  }

  // Pass 3: last-resort fallback if topics exhausted inside a very small custom pool
  for (const d of diffs) {
    const found = matchTier(d, false, false, false, false);
    if (found) return found;
  }

  return available[0];
}

export function selectNormalGameQuestions(
  playScope: PlayScope,
  category: CategorySelection,
  seenQuestionIds: string[],
  customPool?: QuizQuestion[],
  playerLevel = 1
): { questions: QuizQuestion[]; newlyExhaustedPool: boolean } {
  const seenSet = new Set(seenQuestionIds);
  const sourceQuestions =
    customPool && customPool.length > 0 ? customPool : ALL_QUESTIONS;

  let candidatePool: QuizQuestion[];
  if (playScope.type === 'country') {
    const countryPool = sourceQuestions.filter((q) =>
      isSafeForCountryMode(q, playScope.countryCode)
    );
    if (category === 'mixed') {
      candidatePool = countryPool;
    } else {
      const catPool = countryPool.filter((q) => q.category === category);
      candidatePool = catPool.length >= 10 ? catPool : countryPool;
    }
  } else {
    candidatePool =
      category === 'mixed'
        ? sourceQuestions.filter((q) => q.category !== 'diaspora')
        : sourceQuestions.filter((q) => q.category === category);
  }

  const unseen = shuffleArray(candidatePool.filter((q) => !seenSet.has(q.id)));
  const seenFallback = shuffleArray(candidatePool.filter((q) => seenSet.has(q.id)));
  const newlyExhaustedPool = unseen.length < 10;

  const targetDifficulties = getTargetDifficultiesForLevel(playerLevel);
  const preferCountryDiversity = playScope.type === 'all';
  const enforceCategorySpread = category === 'mixed';
  const preferHigherOnTie = playerLevel >= 4;

  const selected: QuizQuestion[] = [];
  const pickedIds = new Set<string>();
  const usedTopics = new Set<string>();
  const usedSubCategories = new Set<string>();
  const usedCountries = new Set<string>();
  const categoryCounts = new Map<QuizCategory, number>();

  for (const targetDiff of targetDifficulties) {
    const chosen =
      pickSmartQuestion(
        unseen,
        targetDiff,
        pickedIds,
        usedTopics,
        usedSubCategories,
        usedCountries,
        categoryCounts,
        preferCountryDiversity,
        enforceCategorySpread,
        preferHigherOnTie
      ) ||
      pickSmartQuestion(
        seenFallback,
        targetDiff,
        pickedIds,
        usedTopics,
        usedSubCategories,
        usedCountries,
        categoryCounts,
        preferCountryDiversity,
        enforceCategorySpread,
        preferHigherOnTie
      );

    if (chosen) {
      const preparedQuestion: QuizQuestion =
        playScope.type === 'country' && chosen.countryModePrompt
          ? { ...chosen, prompt: chosen.countryModePrompt }
          : chosen;

      selected.push(preparedQuestion);
      pickedIds.add(chosen.id);
      usedTopics.add(getTopicSignature(chosen));
      if (chosen.subCategory) {
        usedSubCategories.add(chosen.subCategory);
      }
      if (chosen.countryCode !== 'AFRICA') {
        usedCountries.add(chosen.countryCode);
      }
      categoryCounts.set(chosen.category, (categoryCounts.get(chosen.category) ?? 0) + 1);
    }
  }

  return {
    questions: balanceQuestionSet(shuffleArray(selected).slice(0, 10)),
    newlyExhaustedPool,
  };
}

export function getLocalDateKey(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function getPreviousDateKey(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() - 1);
  return getLocalDateKey(dt);
}

export function selectDailyChallengeQuestions(
  dateStr = getLocalDateKey(),
  availableNewsPool?: QuizQuestion[]
): QuizQuestion[] {
  const combinedNews = mergeQuestionPools(AFRICAN_NEWS_QUESTIONS, availableNewsPool);

  const exactToday = combinedNews.filter((q) => q.newsDate === dateStr);
  if (exactToday.length >= 10) {
    return balanceQuestionSet(exactToday.slice(0, 10), hashString(`daily_bal_${dateStr}`));
  }

  const prevDateStr = getPreviousDateKey(dateStr);

  const pickForSeed = (seed: string, excludeIds: Set<string>): QuizQuestion[] => {
    const rng = createRng(hashString(`daily_africa_news_${seed}`));
    const eligible = combinedNews.filter((q) => !excludeIds.has(q.id));
    const source = eligible.length >= 10 ? eligible : combinedNews;
    const shuffled = shuffleWithRng(source, rng);
    const picked: QuizQuestion[] = [];
    const usedCountries = new Set<string>();
    const desiredCategories: QuizCategory[] = [
      'football',
      'culture',
      'geography',
      'history',
      'football',
      'culture',
      'geography',
      'history',
      'football',
      'culture',
    ];
    const desiredDifficulties: QuestionDifficulty[] = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4];

    for (let i = 0; i < desiredCategories.length; i++) {
      const cat = desiredCategories[i];
      const diff = desiredDifficulties[i];
      const candidate =
        shuffled.find(
          (q) =>
            q.category === cat &&
            q.difficulty === diff &&
            !picked.some((p) => p.id === q.id) &&
            (q.countryCode === 'AFRICA' || !usedCountries.has(q.countryCode))
        ) ||
        shuffled.find(
          (q) =>
            q.category === cat &&
            !picked.some((p) => p.id === q.id) &&
            (q.countryCode === 'AFRICA' || !usedCountries.has(q.countryCode))
        ) ||
        shuffled.find((q) => q.category === cat && !picked.some((p) => p.id === q.id));

      if (candidate) {
        picked.push(candidate);
        if (candidate.countryCode !== 'AFRICA') {
          usedCountries.add(candidate.countryCode);
        }
      }
    }

    while (picked.length < 10 && shuffled.length > picked.length) {
      const next = shuffled.find((q) => !picked.some((p) => p.id === q.id));
      if (!next) break;
      picked.push(next);
    }

    return picked.slice(0, 10);
  };

  const yesterdayQuestions = pickForSeed(prevDateStr, new Set());
  const excludeYesterday = new Set(yesterdayQuestions.map((q) => q.id));
  return balanceQuestionSet(
    pickForSeed(dateStr, excludeYesterday),
    hashString(`daily_bal_${dateStr}`)
  );
}

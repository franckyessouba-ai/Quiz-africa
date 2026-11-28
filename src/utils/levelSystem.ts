import { Language, QuestionDifficulty } from '../types/quiz';

export interface PlayerLevelInfo {
  level: number;
  currentScore: number;
  currentLevelFloor: number;
  nextLevelTarget: number;
  progressPercent: number;
  title: string;
}

const LEVEL_THRESHOLDS = [
  0,     // Level 1
  800,   // Level 2
  2000,  // Level 3
  3800,  // Level 4
  6200,  // Level 5
  9500,  // Level 6
  13800, // Level 7
  19200, // Level 8
  26000, // Level 9
  34500, // Level 10
];

const LEVEL_TITLES: Record<Language, string[]> = {
  fr: [
    'Novice',
    'Apprenti',
    'Explorateur',
    'Voyageur',
    'Connaisseur',
    'Érudit',
    'Stratège',
    'Maître',
    'Grand Maître',
    "Champion d'Afrique",
  ],
  en: [
    'Novice',
    'Apprentice',
    'Explorer',
    'Voyager',
    'Connoisseur',
    'Scholar',
    'Strategist',
    'Master',
    'Grand Master',
    'Champion of Africa',
  ],
  es: [
    'Novato',
    'Aprendiz',
    'Explorador',
    'Viajero',
    'Conocedor',
    'Erudito',
    'Estratega',
    'Maestro',
    'Gran Maestro',
    'Campeón de África',
  ],
  pt: [
    'Novato',
    'Aprendiz',
    'Explorador',
    'Viajante',
    'Conhecedor',
    'Erudito',
    'Estrategista',
    'Mestre',
    'Grão-Mestre',
    'Campeão da África',
  ],
  ar: [
    'مبتدئ',
    'متدرب',
    'مستكشف',
    'رحالة',
    'خبير',
    'عالم',
    'مخطط',
    'أستاذ',
    'أستاذ كبير',
    'بطل أفريقيا',
  ],
};

export function getPlayerLevelInfo(totalScore: number, language: Language = 'fr'): PlayerLevelInfo {
  const safeScore = Math.max(0, Math.floor(totalScore || 0));
  let level = 1;

  for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) {
    if (safeScore >= LEVEL_THRESHOLDS[i]) {
      level = i + 1;
    }
  }

  if (safeScore >= LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1]) {
    const extraLevels = Math.floor(
      (safeScore - LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1]) / 10000
    );
    level = LEVEL_THRESHOLDS.length + extraLevels;
  }

  const currentLevelFloor =
    level <= LEVEL_THRESHOLDS.length
      ? LEVEL_THRESHOLDS[level - 1]
      : LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1] +
        (level - LEVEL_THRESHOLDS.length) * 10000;

  const nextLevelTarget =
    level < LEVEL_THRESHOLDS.length
      ? LEVEL_THRESHOLDS[level]
      : currentLevelFloor + 10000;

  const span = Math.max(1, nextLevelTarget - currentLevelFloor);
  const progressPercent = Math.min(
    100,
    Math.max(0, Math.round(((safeScore - currentLevelFloor) / span) * 100))
  );

  const titles = LEVEL_TITLES[language] || LEVEL_TITLES.fr;
  const title = titles[Math.min(level - 1, titles.length - 1)];

  return {
    level,
    currentScore: safeScore,
    currentLevelFloor,
    nextLevelTarget,
    progressPercent,
    title,
  };
}

export function getBasePointsForDifficulty(difficulty: QuestionDifficulty): number {
  switch (difficulty) {
    case 1:
      return 100;
    case 2:
      return 130;
    case 3:
      return 165;
    case 4:
      return 210;
  }
}

export function getTargetDifficultiesForLevel(level: number): QuestionDifficulty[] {
  if (level <= 1) return [1, 1, 1, 2, 2, 2, 2, 3, 3, 3];
  if (level === 2) return [1, 1, 2, 2, 2, 3, 3, 3, 3, 4];
  if (level === 3) return [1, 2, 2, 2, 3, 3, 3, 3, 4, 4];
  if (level === 4) return [1, 2, 2, 3, 3, 3, 3, 4, 4, 4];
  if (level === 5) return [2, 2, 3, 3, 3, 3, 4, 4, 4, 4];
  if (level === 6) return [2, 3, 3, 3, 3, 4, 4, 4, 4, 4];
  if (level === 7) return [2, 3, 3, 4, 4, 4, 4, 4, 4, 4];
  return [3, 3, 4, 4, 4, 4, 4, 4, 4, 4];
}

export function getLevelModeTargetDifficulties(level: number): QuestionDifficulty[] {
  if (level <= 1) return [1, 1, 1, 1, 1, 1, 1, 2, 2, 2];
  if (level === 2) return [1, 1, 1, 1, 1, 2, 2, 2, 2, 3];
  if (level === 3) return [1, 1, 1, 2, 2, 2, 2, 3, 3, 3];
  if (level === 4) return [1, 1, 2, 2, 2, 3, 3, 3, 3, 4];
  if (level === 5) return [1, 2, 2, 2, 3, 3, 3, 4, 4, 4];
  if (level <= 7) return [2, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  if (level <= 9) return [2, 3, 3, 3, 4, 4, 4, 4, 4, 4];
  return [3, 3, 4, 4, 4, 4, 4, 4, 4, 4];
}

export type Language = 'fr' | 'en' | 'es' | 'pt' | 'ar';

export type AvatarId = 'lion' | 'eagle' | 'panther' | 'footballer';

export type QuizCategory = 'football' | 'culture' | 'history' | 'geography' | 'diaspora';
export type CategorySelection = QuizCategory | 'mixed';
export type QuestionDifficulty = 1 | 2 | 3 | 4;

export type PlayScope =
  | { type: 'all' }
  | { type: 'country'; countryCode: string };

export interface LocalizedText {
  fr: string;
  en: string;
  es: string;
  pt: string;
  ar: string;
}

export interface CountryProfile {
  code: string;
  flag: string;
  region: 'north' | 'west' | 'central' | 'east' | 'southern';
  name: LocalizedText;
  capital: LocalizedText;
  majorCity: LocalizedText;
  landmark: LocalizedText;
  riverOrPeak: LocalizedText;
  currency: LocalizedText;
  independenceYear: string;
  hero: LocalizedText;
  historicFact: LocalizedText;
  teamNickname: LocalizedText;
  footballLegend: LocalizedText;
  afconAchievement: LocalizedText;
  dish: LocalizedText;
  musicOrDance: LocalizedText;
  culturalFestival: LocalizedText;
  funNotes: {
    capital: LocalizedText;
    geography: LocalizedText;
    landmark: LocalizedText;
    history: LocalizedText;
    hero: LocalizedText;
    football: LocalizedText;
    legend: LocalizedText;
    afcon: LocalizedText;
    dish: LocalizedText;
    music: LocalizedText;
    culture: LocalizedText;
    currency: LocalizedText;
  };
}

export type CoastlineType =
  | 'atlantic'
  | 'indian'
  | 'mediterranean'
  | 'red_sea'
  | 'atlantic_indian'
  | 'med_red'
  | 'med_atlantic'
  | 'landlocked';

export interface CountryDeepFacts {
  neighbors: string[];
  coastline: CoastlineType;
  callingCode: string;
  tld: string;
  officialLanguages: LocalizedText;
  spokenLanguages: LocalizedText;
  highestPeak: LocalizedText;
  nationalPark: LocalizedText;
  strategicResourceOrPort: LocalizedText;
  formerNameOrColony: LocalizedText;
  firstLeader: LocalizedText;
  ancientKingdom: LocalizedText;
  unescoSite: LocalizedText;
  nationalDay: LocalizedText;
  nameEtymology: LocalizedText;
  stadium: LocalizedText;
  famousClub: LocalizedText;
  modernStar: LocalizedText;
  footballMilestone: LocalizedText;
  jerseyColors: LocalizedText;
  secondDish: LocalizedText;
  traditionalCraft: LocalizedText;
  culturalIcon: LocalizedText;
  instrument: LocalizedText;
  culturalValue: LocalizedText;
  flagDescription: LocalizedText;
}

export type QuestionSubCategory =
  | 'histoire_independance'
  | 'personnalites_heros'
  | 'geographie_environnement'
  | 'culture_traditions'
  | 'gastronomie'
  | 'musique_divertissement'
  | 'football_sports'
  | 'politique_institutions'
  | 'economie_developpement'
  | 'patrimoine_tourisme'
  | 'sciences_innovations'
  | 'anecdotes_insolites';

export interface QuizQuestion {
  id: string;
  countryCode: string; // ISO 2-letter code or 'AFRICA'
  category: QuizCategory;
  subCategory?: QuestionSubCategory;
  difficulty: QuestionDifficulty;
  prompt: LocalizedText;
  /** Natural phrasing without repeating the selected country's name (used in Country Mode) */
  countryModePrompt?: LocalizedText;
  /** False for reverse "Which country...?" questions that ask to identify the country */
  countryModeAllowed?: boolean;
  /** Deduplication key so two questions on the exact same fact never appear in one match */
  topicKey?: string;
  /** Verifiable reference / source label */
  source?: string;
  options: [LocalizedText, LocalizedText, LocalizedText, LocalizedText];
  correctIndex: number;
  explanation: LocalizedText;
  isNews?: boolean;
  newsDate?: string; // YYYY-MM-DD
}

export interface DailyDayRecord {
  score: number;
  bonus: number;
  correctCount: number;
}

export interface PlayerProfile {
  id: string;
  name: string;
  language: Language;
  countryCode: string;
  avatar: AvatarId;
  bestGameScore: number;
  totalScore: number;
  weeklyScore: number;
  streak: number;
  bestStreak: number;
  lastDailyDate: string | null; // YYYY-MM-DD
  missedYesterdayNotice: boolean;
  dailyHistory: Record<string, DailyDayRecord>;
  gamesPlayed: number;
  gamesWon: number;
  diasporaScore?: number;
  bestDiasporaScore?: number;
  levelModeLevel?: number;
  levelModeBestLevel?: number;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  countryCode: string;
  avatar: AvatarId;
  totalScore: number;
  bestGameScore: number;
  weeklyScore: number;
  streak: number;
  diasporaScore?: number;
  isCurrentPlayer?: boolean;
}

export interface LeaderboardResponse {
  weekKey: string;
  weekEndsAt: number;
  worldTop10: LeaderboardEntry[];
  countryTop10: LeaderboardEntry[];
  weeklyTop10: LeaderboardEntry[];
  diasporaTop10?: LeaderboardEntry[];
  diasporaChampion?: LeaderboardEntry | null;
  weeklyChampion: LeaderboardEntry | null;
  currentPlayerEntry?: LeaderboardEntry | null;
  playerRanks: {
    worldRank: number;
    worldTotal: number;
    countryRank: number;
    countryTotal: number;
    weeklyRank: number;
    weeklyTotal: number;
    diasporaRank?: number;
    diasporaTotal?: number;
  };
}

export interface GameResultPayload {
  mode: 'normal' | 'daily' | 'levels';
  playScope: PlayScope;
  category: CategorySelection;
  score: number;
  bonus: number;
  correctCount: number;
  totalQuestions: number;
  won: boolean;
  livesRemaining: number;
  isNewRecord: boolean;
  newStreak?: number;
  previousLevel?: number;
  newLevel?: number;
  playedGameLevel?: number;
  nextGameLevel?: number;
  answerLog?: AnswerLogItem[];
}

export type AppScreen =
  | 'onboarding'
  | 'editProfile'
  | 'home'
  | 'setupGame'
  | 'playingNormal'
  | 'playingLevels'
  | 'dailyHub'
  | 'playingDaily'
  | 'result'
  | 'leaderboard'
  | 'weekly'
  | 'duel';

export type DuelStatus = 'waiting' | 'countdown' | 'question' | 'reveal' | 'finished';

export interface DuelParticipant {
  id: string;
  firebaseUid?: string | null;
  name: string;
  countryCode: string;
  avatar: AvatarId;
  score: number;
  correctCount: number;
  connected: boolean;
  hasAnsweredCurrent: boolean;
  lastOptionIndex: number | null;
  lastPointsEarned: number;
}

export interface DuelRoomSnapshot {
  roomCode: string;
  hostId: string;
  hostFirebaseUid?: string | null;
  isPublic: boolean;
  playScope: PlayScope;
  category: CategorySelection;
  status: DuelStatus;
  countdownSeconds: number;
  questionIndex: number;
  totalQuestions: number;
  questionEndsAt: number;
  currentQuestion: Omit<QuizQuestion, 'correctIndex'> | null;
  revealedCorrectIndex: number | null;
  revealedExplanation: LocalizedText | null;
  players: DuelParticipant[];
  winnerId: string | null; // null if draw or unfinished
  winnerFirebaseUid?: string | null;
  isDraw: boolean;
  serverProof?: string | null;
}

export interface DuelChatMessage {
  id: string;
  roomCode: string;
  senderUid: string;
  senderName: string;
  senderAvatar: AvatarId;
  senderCountryCode: string;
  kind: 'text' | 'reaction';
  text: string;
  createdAtMs: number;
}

export interface AnswerLogItem {
  questionId: string;
  optionIndex: number;
  timeLeft: number;
}

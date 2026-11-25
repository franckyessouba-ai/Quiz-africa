import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { AFRICAN_NEWS_QUESTIONS } from '../src/data/africanNewsQuestions';
import { AFRICAN_COUNTRIES } from '../src/data/countries54';
import type {
  LocalizedText,
  QuestionDifficulty,
  QuizCategory,
  QuizQuestion,
} from '../src/types/quiz';
import { balanceQuestionSet } from '../src/utils/questionShuffle';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.resolve(__dirname, '..', 'data');
const ARCHIVE_FILE = path.join(DATA_DIR, 'dailyNewsArchive.json');

interface DailyNewsArchiveStore {
  byDate: Record<string, QuizQuestion[]>;
}

const VALID_COUNTRY_CODES = new Set<string>([
  'AFRICA',
  ...AFRICAN_COUNTRIES.map((c) => c.code.toUpperCase()),
]);

const VALID_CATEGORIES = new Set<QuizCategory>([
  'football',
  'culture',
  'history',
  'geography',
]);

const pendingByDate = new Map<string, Promise<QuizQuestion[]>>();

function readArchive(): DailyNewsArchiveStore {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(ARCHIVE_FILE)) {
      const initial: DailyNewsArchiveStore = { byDate: {} };
      fs.writeFileSync(ARCHIVE_FILE, JSON.stringify(initial, null, 2), 'utf-8');
      return initial;
    }
    const raw = fs.readFileSync(ARCHIVE_FILE, 'utf-8');
    const parsed = JSON.parse(raw) as DailyNewsArchiveStore;
    if (parsed && parsed.byDate && typeof parsed.byDate === 'object') {
      return parsed;
    }
  } catch {
    // Fallback to empty archive if file is corrupted
  }
  return { byDate: {} };
}

function writeArchive(store: DailyNewsArchiveStore): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(ARCHIVE_FILE, JSON.stringify(store, null, 2), 'utf-8');
}

function sanitizeDateKey(raw?: string): string {
  if (raw && /^\d{4}-\d{2}-\d{2}$/.test(raw.trim())) {
    return raw.trim();
  }
  const now = new Date();
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, '0');
  const d = String(now.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function isValidLocalizedText(val: unknown): val is LocalizedText {
  if (!val || typeof val !== 'object') return false;
  const obj = val as Record<string, unknown>;
  return (
    typeof obj.fr === 'string' &&
    obj.fr.trim().length > 0 &&
    typeof obj.en === 'string' &&
    obj.en.trim().length > 0 &&
    typeof obj.es === 'string' &&
    obj.es.trim().length > 0 &&
    typeof obj.pt === 'string' &&
    obj.pt.trim().length > 0 &&
    typeof obj.ar === 'string' &&
    obj.ar.trim().length > 0
  );
}

function normalizeLocalized(val: LocalizedText): LocalizedText {
  return {
    fr: val.fr.trim(),
    en: val.en.trim(),
    es: val.es.trim(),
    pt: val.pt.trim(),
    ar: val.ar.trim(),
  };
}

function containsNonAfricanFocus(text: string): boolean {
  const lower = text.toLowerCase();
  const forbidden = [
    'ligue des champions uefa',
    'premier league',
    'la liga',
    'bundesliga',
    'champions league',
    'copa america',
    'euro 202',
    'super bowl',
    'états-unis',
    'maison blanche',
    'parlement européen',
    'union européenne',
  ];
  return forbidden.some((kw) => lower.includes(kw));
}

function sanitizeGeneratedQuestion(
  raw: unknown,
  dateKey: string,
  index: number
): QuizQuestion | null {
  if (!raw || typeof raw !== 'object') return null;
  const obj = raw as Record<string, unknown>;

  const rawCountry =
    typeof obj.countryCode === 'string' ? obj.countryCode.trim().toUpperCase() : 'AFRICA';
  const countryCode = VALID_COUNTRY_CODES.has(rawCountry) ? rawCountry : 'AFRICA';

  const rawCat =
    typeof obj.category === 'string' ? (obj.category.trim().toLowerCase() as QuizCategory) : 'culture';
  const category: QuizCategory = VALID_CATEGORIES.has(rawCat) ? rawCat : 'culture';

  const rawDiff = Number(obj.difficulty);
  const difficulty: QuestionDifficulty =
    rawDiff === 1 || rawDiff === 2 || rawDiff === 3 || rawDiff === 4 ? rawDiff : 2;

  if (!isValidLocalizedText(obj.prompt) || !isValidLocalizedText(obj.explanation)) {
    return null;
  }

  if (!Array.isArray(obj.options) || obj.options.length !== 4) {
    return null;
  }
  const validatedOpts: LocalizedText[] = [];
  const seenFr = new Set<string>();
  for (const opt of obj.options) {
    if (!isValidLocalizedText(opt)) return null;
    const norm = normalizeLocalized(opt);
    const key = norm.fr.toLowerCase();
    if (seenFr.has(key)) return null;
    seenFr.add(key);
    validatedOpts.push(norm);
  }

  const correctIndex = Number(obj.correctIndex);
  if (!Number.isInteger(correctIndex) || correctIndex < 0 || correctIndex > 3) {
    return null;
  }

  const prompt = normalizeLocalized(obj.prompt);
  const explanation = normalizeLocalized(obj.explanation);

  if (containsNonAfricanFocus(prompt.fr) || containsNonAfricanFocus(prompt.en)) {
    return null;
  }

  return {
    id: `news_${dateKey}_${String(index + 1).padStart(2, '0')}`,
    countryCode,
    category,
    difficulty,
    prompt,
    options: [validatedOpts[0], validatedOpts[1], validatedOpts[2], validatedOpts[3]],
    correctIndex,
    explanation,
    isNews: true,
    newsDate: dateKey,
  };
}

function extractJsonArray(text: string): unknown[] {
  const cleaned = text
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();

  const firstBracket = cleaned.indexOf('[');
  const lastBracket = cleaned.lastIndexOf(']');
  if (firstBracket === -1 || lastBracket <= firstBracket) {
    return [];
  }

  const slice = cleaned.slice(firstBracket, lastBracket + 1);
  const parsed = JSON.parse(slice);
  return Array.isArray(parsed) ? parsed : [];
}

function pickCuratedFallbackQuestions(
  dateKey: string,
  archive: DailyNewsArchiveStore,
  countNeeded: number,
  alreadyPickedPrompts: Set<string>
): QuizQuestion[] {
  const usedIds = new Set<string>();
  const usedPrompts = new Set<string>(alreadyPickedPrompts);
  for (const list of Object.values(archive.byDate)) {
    for (const q of list) {
      usedIds.add(q.id);
      usedPrompts.add(q.prompt.fr.trim().toLowerCase());
    }
  }

  const freshPool = AFRICAN_NEWS_QUESTIONS.filter(
    (q) => !usedIds.has(q.id) && !usedPrompts.has(q.prompt.fr.trim().toLowerCase())
  );

  // Deterministic offset per date
  let seed = 0;
  for (let i = 0; i < dateKey.length; i++) {
    seed = (seed * 31 + dateKey.charCodeAt(i)) >>> 0;
  }

  const source = freshPool.length >= countNeeded ? freshPool : AFRICAN_NEWS_QUESTIONS;
  const rotated = source.map((_, idx) => source[(idx + seed) % source.length]);

  const result: QuizQuestion[] = [];
  for (const q of rotated) {
    if (result.length >= countNeeded) break;
    const promptKey = q.prompt.fr.trim().toLowerCase();
    if (alreadyPickedPrompts.has(promptKey)) continue;
    alreadyPickedPrompts.add(promptKey);
    result.push({
      ...q,
      id: usedIds.has(q.id) ? `${q.id}_${dateKey}` : q.id,
      isNews: true,
      newsDate: dateKey,
    });
  }

  return result;
}

let geminiCooldownUntil = 0;

function extractErrorStatus(err: unknown): { code?: number; status?: string; message: string } {
  const msg = err instanceof Error ? err.message : String(err);
  let code: number | undefined;
  let status: string | undefined;

  if (err && typeof err === 'object') {
    const obj = err as { status?: unknown; code?: unknown };
    if (typeof obj.status === 'number') code = obj.status;
    if (typeof obj.code === 'number') code = obj.code;
    if (typeof obj.status === 'string') status = obj.status;
  }

  if (code === undefined && msg.includes('429')) code = 429;
  if (!status && msg.includes('RESOURCE_EXHAUSTED')) status = 'RESOURCE_EXHAUSTED';

  return { code, status, message: msg };
}

async function generateAfricaNewsWithGemini(
  dateKey: string,
  existingPrompts: string[]
): Promise<QuizQuestion[]> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return [];
  }

  if (Date.now() < geminiCooldownUntil) {
    return [];
  }

  const ai = new GoogleGenAI({
    apiKey,
    httpOptions: { headers: { 'User-Agent': 'aistudio-build' } },
  });

  const avoidSample = existingPrompts.slice(-40).join(' | ');
  const prompt = [
    `Date: ${dateKey}.`,
    `Generate exactly 10 brand-new multiple-choice quiz questions 100% dedicated to AFRICAN CURRENT AFFAIRS (Actualité Afrique ONLY).`,
    `STRICT RULES:`,
    `1. Subjects MUST be 100% African: African football (CAF, AFCON/CAN, CAF Champions League, African national teams & African stars), African music (Afrobeats, Amapiano, Coupé-Décalé, Rumba, Rai, Mbalax, etc.), African politics & summits (AU, ECOWAS, SADC, African leaders/elections), African culture & cinema/festivals, African celebrities/people, and current events across the 54 African countries.`,
    `2. NEVER include questions focused on Europe, North America, South America, or Asia.`,
    `3. Use Google Search grounding for real, verifiable recent African news and facts.`,
    `4. Use valid ISO 2-letter African country codes (e.g. "SN", "CI", "MA", "NG", "GA", "CM", "CD", "ZA", "KE", "EG", etc.) or "AFRICA" for pan-African topics.`,
    `5. Allowed "category" values ONLY: "football" (African football), "culture" (African music, culture, arts, African people/celebrities), "history" (African political milestones/institutional history), "geography" (African current politics, African states, pan-African economy/events). Include balanced mix across African football, music, politics, culture, and people.`,
    `6. "difficulty" must vary progressively: 2 questions difficulty 1, 3 questions difficulty 2, 3 questions difficulty 3, 2 questions difficulty 4.`,
    `7. Every text field ("prompt", each of the 4 "options", and "explanation") MUST be translated accurately into ALL 5 languages: "fr", "en", "es", "pt", "ar".`,
    `8. All 4 options must be distinct and concise. "correctIndex" must be 0, 1, 2, or 3.`,
    avoidSample ? `9. Do NOT repeat any of these previous questions: ${avoidSample}` : '',
    `Return ONLY a valid JSON array of 10 objects with this exact structure (no markdown commentary):`,
    `[{"countryCode":"SN","category":"football","difficulty":2,"prompt":{"fr":"...","en":"...","es":"...","pt":"...","ar":"..."},"options":[{"fr":"...","en":"...","es":"...","pt":"...","ar":"..."},...],"correctIndex":0,"explanation":{"fr":"...","en":"...","es":"...","pt":"...","ar":"..."}}]`,
  ]
    .filter(Boolean)
    .join('\n');

  const maxAttempts = 2;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-4-hydrogen',
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      const rawText = response.text || '';
      const parsedItems = extractJsonArray(rawText);
      const validated: QuizQuestion[] = [];
      const seenPrompts = new Set(existingPrompts.map((p) => p.trim().toLowerCase()));

      for (let i = 0; i < parsedItems.length; i++) {
        const sanitized = sanitizeGeneratedQuestion(parsedItems[i], dateKey, i);
        if (!sanitized) continue;
        const pKey = sanitized.prompt.fr.trim().toLowerCase();
        if (seenPrompts.has(pKey)) continue;
        seenPrompts.add(pKey);
        validated.push(sanitized);
        if (validated.length === 10) break;
      }

      return validated;
    } catch (err) {
      const info = extractErrorStatus(err);
      const isQuotaExhausted = info.code === 429 || info.status === 'RESOURCE_EXHAUSTED';
      if (isQuotaExhausted) {
        // Pause further Gemini calls for 60 minutes and use curated African news bank
        geminiCooldownUntil = Date.now() + 60 * 60 * 1000;
        console.info(
          `[dailyNews] Gemini quota reached (${dateKey}); serving curated African news bank.`
        );
        return [];
      }

      const isTransient = info.code !== undefined && info.code >= 500;
      if (isTransient && attempt < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, 1200 * attempt));
        continue;
      }

      console.info(
        `[dailyNews] Using curated African news bank for ${dateKey} (Gemini unavailable).`
      );
      return [];
    }
  }

  return [];
}

export async function getOrCreateDailyNewsPackage(rawDateKey?: string): Promise<{
  date: string;
  todayQuestions: QuizQuestion[];
  archiveQuestions: QuizQuestion[];
}> {
  const dateKey = sanitizeDateKey(rawDateKey);
  const archive = readArchive();

  if (Array.isArray(archive.byDate[dateKey]) && archive.byDate[dateKey].length >= 10) {
    return {
      date: dateKey,
      todayQuestions: archive.byDate[dateKey].slice(0, 10),
      archiveQuestions: getServerNewsQuestionsForNormalPlay(),
    };
  }

  let task = pendingByDate.get(dateKey);
  if (!task) {
    task = (async () => {
      const currentArchive = readArchive();
      if (
        Array.isArray(currentArchive.byDate[dateKey]) &&
        currentArchive.byDate[dateKey].length >= 10
      ) {
        return currentArchive.byDate[dateKey].slice(0, 10);
      }

      const existingPrompts: string[] = [];
      for (const list of Object.values(currentArchive.byDate)) {
        for (const q of list) {
          existingPrompts.push(q.prompt.fr);
        }
      }

      const generated = await generateAfricaNewsWithGemini(dateKey, existingPrompts);
      const pickedPrompts = new Set<string>(generated.map((q) => q.prompt.fr.trim().toLowerCase()));

      let finalQuestions = [...generated];
      if (finalQuestions.length < 10) {
        const needed = 10 - finalQuestions.length;
        const fallback = pickCuratedFallbackQuestions(
          dateKey,
          currentArchive,
          needed,
          pickedPrompts
        );
        finalQuestions = [...finalQuestions, ...fallback];
      }

      // Permanently append today's 10 balanced questions to the server archive (never deleted)
      const refreshedArchive = readArchive();
      let seed = 1;
      for (let i = 0; i < dateKey.length; i++) {
        seed = (seed * 31 + dateKey.charCodeAt(i)) >>> 0;
      }
      refreshedArchive.byDate[dateKey] = balanceQuestionSet(finalQuestions.slice(0, 10), seed || 1);
      writeArchive(refreshedArchive);

      return refreshedArchive.byDate[dateKey];
    })();

    pendingByDate.set(dateKey, task);
    try {
      await task;
    } finally {
      pendingByDate.delete(dateKey);
    }
  } else {
    await task;
  }

  const updated = readArchive();
  return {
    date: dateKey,
    todayQuestions: (updated.byDate[dateKey] || []).slice(0, 10),
    archiveQuestions: getServerNewsQuestionsForNormalPlay(),
  };
}

export function getServerNewsQuestionsForNormalPlay(): QuizQuestion[] {
  const archive = readArchive();
  const byId = new Map<string, QuizQuestion>();

  for (const q of AFRICAN_NEWS_QUESTIONS) {
    byId.set(q.id, { ...q, isNews: true });
  }

  for (const [dateKey, list] of Object.entries(archive.byDate)) {
    if (!Array.isArray(list)) continue;
    for (const q of list) {
      byId.set(q.id, {
        ...q,
        isNews: true,
        newsDate: q.newsDate || dateKey,
      });
    }
  }

  return Array.from(byId.values());
}

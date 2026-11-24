import {
  CoastlineType,
  CountryDeepFacts,
  CountryProfile,
  LocalizedText,
  QuestionDifficulty,
  QuestionSubCategory,
  QuizCategory,
  QuizQuestion,
} from '../../types/quiz';
import { AFRICAN_COUNTRIES, getCountryByCode } from '../countries54';
import { L } from '../countriesPart1';
import { COUNTRY_DEEP_MAP } from '../countryDeepFacts';
import { CAF_ZONE_LABELS, CafZoneId, COUNTRY_META_54 } from './cafZones';

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

function normalizeVal(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, ' ');
}

function currencyFamilyKey(val: LocalizedText): string {
  const fr = val.fr.toLowerCase();
  if (fr.includes('cfa')) return 'family_cfa';
  if (fr.includes('dollar')) return 'family_dollar';
  if (fr.includes('dinar')) return 'family_dinar';
  if (fr.includes('livre') || val.en.toLowerCase().includes('pound')) return 'family_pound';
  if (fr.includes('shilling')) return 'family_shilling';
  if (fr.includes('roupie') || val.en.toLowerCase().includes('rupee')) return 'family_rupee';
  if (fr.includes('kwacha')) return 'family_kwacha';
  if (fr.includes('franc')) return 'family_franc';
  if (fr.includes('escudo')) return 'family_escudo';
  return `exact_${normalizeVal(fr)}`;
}

function jerseyColorFamilyKey(val: LocalizedText): string {
  const raw = val.fr
    .toLowerCase()
    .replace(/\(.*?\)/g, ' ')
    .replace(/avec touches/g, ' ')
    .replace(/et/g, ' ');
  const colors = ['blanc', 'vert', 'rouge', 'jaune', 'bleu', 'noir', 'orange', 'grenat', 'ciel', 'or'];
  const matched = colors.filter((col) => raw.includes(col)).sort();
  if (matched.length >= 2) {
    return matched.join('_');
  }
  return normalizeVal(val.fr);
}

function pickDistinctDistractors(
  source: CountryProfile,
  extractor: (c: CountryProfile, d: CountryDeepFacts) => LocalizedText,
  seedKey: string,
  options?: {
    filterFn?: (c: CountryProfile, d: CountryDeepFacts) => boolean;
    keyFn?: (val: LocalizedText, c: CountryProfile) => string;
  }
): LocalizedText[] {
  const sourceDeep = COUNTRY_DEEP_MAP[source.code];
  const correctVal = extractor(source, sourceDeep);
  const usedFr = new Set<string>([normalizeVal(correctVal.fr)]);
  const usedEn = new Set<string>([normalizeVal(correctVal.en)]);
  const usedEs = new Set<string>([normalizeVal(correctVal.es)]);
  const usedPt = new Set<string>([normalizeVal(correctVal.pt)]);
  const usedAr = new Set<string>([normalizeVal(correctVal.ar)]);
  const usedCustom = new Set<string>();
  if (options?.keyFn) {
    usedCustom.add(options.keyFn(correctVal, source));
  }

  const rng = createRng(hashString(seedKey));
  const candidates = shuffleWithRng(
    AFRICAN_COUNTRIES.filter((c) => {
      if (c.code === source.code) return false;
      if (options?.filterFn) {
        return options.filterFn(c, COUNTRY_DEEP_MAP[c.code]);
      }
      return true;
    }),
    rng
  );

  const picked: LocalizedText[] = [];
  for (const c of candidates) {
    const val = extractor(c, COUNTRY_DEEP_MAP[c.code]);
    const kFr = normalizeVal(val.fr);
    const kEn = normalizeVal(val.en);
    const kEs = normalizeVal(val.es);
    const kPt = normalizeVal(val.pt);
    const kAr = normalizeVal(val.ar);
    const kCustom = options?.keyFn ? options.keyFn(val, c) : null;

    if (
      !usedFr.has(kFr) &&
      !usedEn.has(kEn) &&
      !usedEs.has(kEs) &&
      !usedPt.has(kPt) &&
      !usedAr.has(kAr) &&
      (!kCustom || !usedCustom.has(kCustom))
    ) {
      usedFr.add(kFr);
      usedEn.add(kEn);
      usedEs.add(kEs);
      usedPt.add(kPt);
      usedAr.add(kAr);
      if (kCustom) usedCustom.add(kCustom);
      picked.push(val);
      if (picked.length === 3) break;
    }
  }

  if (picked.length < 3) {
    for (const c of candidates) {
      const val = extractor(c, COUNTRY_DEEP_MAP[c.code]);
      const kFr = normalizeVal(val.fr);
      const kEn = normalizeVal(val.en);
      if (!usedFr.has(kFr) && !usedEn.has(kEn)) {
        usedFr.add(kFr);
        usedEn.add(kEn);
        picked.push(val);
        if (picked.length === 3) break;
      }
    }
  }

  return picked;
}

function buildOptions(
  correct: LocalizedText,
  distractors: LocalizedText[],
  seedKey: string
): { options: [LocalizedText, LocalizedText, LocalizedText, LocalizedText]; correctIndex: number } {
  const rng = createRng(hashString(seedKey + '_opt'));
  const combined = [
    { text: correct, isCorrect: true },
    ...distractors.slice(0, 3).map((d) => ({ text: d, isCorrect: false })),
  ];
  const shuffled = shuffleWithRng(combined, rng);
  const correctIndex = shuffled.findIndex((item) => item.isCorrect);
  return {
    options: [shuffled[0].text, shuffled[1].text, shuffled[2].text, shuffled[3].text],
    correctIndex,
  };
}

const REGION_LABELS: Record<CountryProfile['region'], LocalizedText> = {
  north: L('Afrique du Nord', 'North Africa', 'África del Norte', 'Norte da África', 'شمال أفريقيا'),
  west: L('Afrique de l’Ouest', 'West Africa', 'África Occidental', 'África Ocidental', 'غرب أفريقيا'),
  central: L('Afrique centrale', 'Central Africa', 'África Central', 'África Central', 'وسط أفريقيا'),
  east: L('Afrique de l’Est', 'East Africa', 'África Oriental', 'África Oriental', 'شرق أفريقيا'),
  southern: L('Afrique australe', 'Southern Africa', 'África Austral', 'África Austral', 'أفريقيا الجنوبية'),
};

const COASTLINE_LABELS: Record<CoastlineType, LocalizedText> = {
  atlantic: L('Océan Atlantique', 'Atlantic Ocean', 'Océano Atlántico', 'Oceano Atlântico', 'المحيط الأطلسي'),
  indian: L('Océan Indien', 'Indian Ocean', 'Océano Índico', 'Oceano Índico', 'المحيط الهندي'),
  mediterranean: L('Mer Méditerranée', 'Mediterranean Sea', 'Mar Mediterráneo', 'Mar Mediterrâneo', 'البحر الأبيض المتوسط'),
  red_sea: L('Mer Rouge', 'Red Sea', 'Mar Rojo', 'Mar Vermelho', 'البحر الأحمر'),
  atlantic_indian: L(
    'Océan Atlantique et Océan Indien',
    'Atlantic Ocean & Indian Ocean',
    'Océano Atlántico y Océano Índico',
    'Oceano Atlântico e Oceano Índico',
    'المحيط الأطلسي والمحيط الهندي'
  ),
  med_red: L(
    'Mer Méditerranée et Mer Rouge',
    'Mediterranean Sea & Red Sea',
    'Mar Mediterráneo y Mar Rojo',
    'Mar Mediterrâneo e Mar Vermelho',
    'البحر المتوسط والبحر الأحمر'
  ),
  med_atlantic: L(
    'Mer Méditerranée et Océan Atlantique',
    'Mediterranean Sea & Atlantic Ocean',
    'Mar Mediterráneo y Océano Atlántico',
    'Mar Mediterrâneo e Oceano Atlântico',
    'البحر المتوسط والمحيط الأطلسي'
  ),
  landlocked: L(
    'Aucun (pays enclavé sans accès à la mer)',
    'None (landlocked country)',
    'Ninguno (país sin salida al mar)',
    'Nenhum (país sem litoral)',
    'لا يوجد (دولة حبيسة بلا ساحل بحري)'
  ),
};

const INCOMPATIBLE_COASTLINE_DISTRACTORS: Record<CoastlineType, CoastlineType[]> = {
  atlantic: ['indian', 'mediterranean', 'red_sea', 'landlocked', 'med_red'],
  indian: ['atlantic', 'mediterranean', 'red_sea', 'landlocked', 'med_atlantic'],
  mediterranean: ['atlantic', 'indian', 'red_sea', 'landlocked', 'atlantic_indian'],
  red_sea: ['atlantic', 'indian', 'mediterranean', 'landlocked', 'atlantic_indian'],
  atlantic_indian: ['mediterranean', 'red_sea', 'landlocked', 'med_red'],
  med_red: ['atlantic', 'indian', 'landlocked', 'atlantic_indian'],
  med_atlantic: ['indian', 'red_sea', 'landlocked', 'atlantic_indian'],
  landlocked: ['atlantic', 'indian', 'mediterranean', 'red_sea', 'atlantic_indian', 'med_atlantic'],
};

const INDEPENDENCE_YEARS = [
  '1922', '1951', '1956', '1957', '1958', '1960', '1961', '1962', '1963', '1964',
  '1965', '1966', '1968', '1973', '1975', '1976', '1977', '1980', '1990', '1993', '2011',
];

const ALL_UTC_OPTIONS: LocalizedText[] = [
  L('UTC−1', 'UTC−1', 'UTC−1', 'UTC−1', 'توقيت غرينتش −1'),
  L('UTC+0 (heure de Greenwich)', 'UTC+0 (GMT)', 'UTC+0 (GMT)', 'UTC+0 (GMT)', 'توقيت غرينتش (UTC+0)'),
  L('UTC+1', 'UTC+1', 'UTC+1', 'UTC+1', 'توقيت غرينتش +1'),
  L('UTC+2', 'UTC+2', 'UTC+2', 'UTC+2', 'توقيت غرينتش +2'),
  L('UTC+3', 'UTC+3', 'UTC+3', 'UTC+3', 'توقيت غرينتش +3'),
  L('UTC+4', 'UTC+4', 'UTC+4', 'UTC+4', 'توقيت غرينتش +4'),
];

const ALL_BLOC_OPTIONS: LocalizedText[] = [
  L('Union du Maghreb arabe (UMA)', 'Arab Maghreb Union (AMU)', 'Unión del Magreb Árabe (UMA)', 'União do Magrebe Árabe (UMA)', 'اتحاد المغرب العربي'),
  L('CEDEAO / ECOWAS', 'ECOWAS / CEDEAO', 'CEDEAO / ECOWAS', 'CEDEAO / ECOWAS', 'المجموعة الاقتصادية لدول غرب أفريقيا (إيكواس)'),
  L('CEMAC / CEEAC', 'CEMAC / ECCAS', 'CEMAC / CEEAC', 'CEMAC / CEEAC', 'المجموعة الاقتصادية والنقدية لوسط أفريقيا (سيماك)'),
  L('SADC (Communauté de développement d’Afrique australe)', 'SADC (Southern African Development Community)', 'SADC (África Austral)', 'SADC (África Austral)', 'مجموعة تنمية الجنوب الأفريقي (سادك)'),
  L('EAC (Communauté d’Afrique de l’Est)', 'EAC (East African Community)', 'EAC (Comunidad de África Oriental)', 'EAC (Comunidade da África Oriental)', 'مجموعة شرق أفريقيا (EAC)'),
  L('IGAD (Autorité intergouvernementale pour le développement)', 'IGAD (Horn & East Africa)', 'IGAD (Cuerno de África)', 'IGAD (Chifre da África)', 'الهيئة الحكومية للتنمية (إيغاد)'),
];

function localizedIndependenceYear(rawYear: string): LocalizedText {
  if (rawYear === 'Jamais colonisée (Adoua 1896)') {
    return L(
      rawYear,
      'Never colonized (Adwa 1896)',
      'Nunca colonizada (Adua 1896)',
      'Nunca colonizada (Adwa 1896)',
      'لم تُستعمر أبداً (عدوة 1896)'
    );
  }
  if (rawYear === '1994 (Démocratie)') {
    return L(rawYear, '1994 (Democracy)', '1994 (Democracia)', '1994 (Democracia)', '1994 (الديمقراطية)');
  }
  return L(rawYear, rawYear, rawYear, rawYear, rawYear);
}

interface PushParams {
  suffix: string;
  category: QuizCategory;
  subCategory: QuestionSubCategory;
  difficulty: QuestionDifficulty;
  topicKey: string;
  source: string;
  countryModeAllowed: boolean;
  prompt: LocalizedText;
  countryModePrompt?: LocalizedText;
  correct: LocalizedText;
  distractors: LocalizedText[];
  explanation: LocalizedText;
}

export function buildCoreCountryQuestions(c: CountryProfile): QuizQuestion[] {
  const d = COUNTRY_DEEP_MAP[c.code];
  const meta = COUNTRY_META_54[c.code];
  const n = c.name;
  const questions: QuizQuestion[] = [];

  const pushQ = (p: PushParams) => {
    const id = `c_${c.code}_${p.suffix}`;
    const { options, correctIndex } = buildOptions(p.correct, p.distractors, id);
    questions.push({
      id,
      countryCode: c.code,
      category: p.category,
      subCategory: p.subCategory,
      difficulty: p.difficulty,
      prompt: p.prompt,
      countryModePrompt: p.countryModePrompt,
      countryModeAllowed: p.countryModeAllowed,
      topicKey: `${c.code}_${p.topicKey}`,
      source: p.source,
      options,
      correctIndex,
      explanation: p.explanation,
    });
  };

  // ============================================================================
  // GEOGRAPHY — 14 DIRECT QUESTIONS + 1 REVERSE (All-Africa only)
  // ============================================================================

  pushQ({
    suffix: 'geo_cap',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 1,
    topicKey: 'capital',
    source: 'ONU / Atlas officiel des États africains',
    countryModeAllowed: true,
    prompt: L(
      `Quelle est la capitale officielle ${meta.frOf} ?`,
      `What is the official capital city of ${n.en}?`,
      `¿Cuál es la capital oficial de ${n.es}?`,
      `Qual é a capital oficial de ${n.pt}?`,
      `ما هي العاصمة الرسمية لدولة ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quelle est la capitale officielle du pays ?',
      'What is the official capital city of the country?',
      '¿Cuál es la capital oficial del país?',
      'Qual é a capital oficial do país?',
      'ما هي العاصمة الرسمية للبلاد؟'
    ),
    correct: c.capital,
    distractors: pickDistinctDistractors(c, (x) => x.capital, `c_${c.code}_geo_cap`),
    explanation: c.funNotes.capital,
  });

  pushQ({
    suffix: 'geo_land',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 1,
    topicKey: 'landmark',
    source: 'UNESCO & Répertoire du patrimoine africain',
    countryModeAllowed: true,
    prompt: L(
      `Lequel de ces sites célèbres ou merveilles naturelles se trouve ${meta.frIn} ?`,
      `Which famous landmark or natural wonder is located in ${n.en}?`,
      `¿Cuál de estos lugares emblemáticos o maravillas naturales se encuentra en ${n.es}?`,
      `Qual destes locais famosos ou maravilhas naturais fica em ${n.pt}?`,
      `أيٌّ من هذه المعالم الشهيرة أو العجائب الطبيعية يقع في ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Lequel de ces sites célèbres ou merveilles naturelles se trouve dans le pays ?',
      'Which of these famous landmarks or natural wonders is located in the country?',
      '¿Cuál de estos lugares emblemáticos o maravillas naturales se encuentra en el país?',
      'Qual destes locais famosos ou maravilhas naturais fica no país?',
      'أيٌّ من هذه المعالم الشهيرة أو العجائب الطبيعية يقع في البلاد؟'
    ),
    correct: c.landmark,
    distractors: pickDistinctDistractors(c, (x) => x.landmark, `c_${c.code}_geo_land`),
    explanation: c.funNotes.landmark,
  });

  {
    const id = `c_${c.code}_geo_reg`;
    const rng = createRng(hashString(id));
    const otherRegions = shuffleWithRng(
      (Object.keys(REGION_LABELS) as Array<CountryProfile['region']>).filter((r) => r !== c.region),
      rng
    ).slice(0, 3);
    pushQ({
      suffix: 'geo_reg',
      category: 'geography',
      subCategory: 'geographie_environnement',
      difficulty: 1,
      topicKey: 'region',
      source: 'Union Africaine — Régions géographiques',
      countryModeAllowed: true,
      prompt: L(
        `Dans quelle grande région d’Afrique se situe ${meta.frSubj} ?`,
        `In which major region of Africa is ${n.en} located?`,
        `¿En qué gran región de África se encuentra ${n.es}?`,
        `Em qual grande região da África fica ${n.pt}?`,
        `في أي إقليم أفريقي رئيسي تقع دولة ${n.ar}؟`
      ),
      countryModePrompt: L(
        'Dans quelle grande sous-région d’Afrique ce pays se situe-t-il ?',
        'In which major region of Africa is this country located?',
        '¿En qué gran región de África se sitúa el país?',
        'Em qual grande região da África o país se localiza?',
        'في أي إقليم أفريقي رئيسي تقع البلاد؟'
      ),
      correct: REGION_LABELS[c.region],
      distractors: otherRegions.map((r) => REGION_LABELS[r]),
      explanation: c.funNotes.geography,
    });
  }

  pushQ({
    suffix: 'geo_city',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'major_city',
    source: 'Atlas urbain d’Afrique',
    countryModeAllowed: true,
    prompt: L(
      `Parmi ces grandes villes africaines, laquelle est un pôle urbain majeur ${meta.frOf} ?`,
      `Which of these cities is a major urban center in ${n.en}?`,
      `¿Cuál de estas ciudades es un importante polo urbano de ${n.es}?`,
      `Qual destas cidades é um importante polo urbano de ${n.pt}?`,
      `أيٌّ من هذه المدن تُعد مدينة رئيسية في ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Parmi ces villes africaines, laquelle est une métropole ou ville importante du pays ?',
      'Which of these African cities is a major city of the country?',
      '¿Cuál de estas ciudades africanas es una urbe importante del país?',
      'Qual destas cidades africanas é uma cidade importante do país?',
      'أيٌّ من هذه المدن الأفريقية تُعد مدينة رئيسية في البلاد؟'
    ),
    correct: c.majorCity,
    distractors: pickDistinctDistractors(c, (x) => x.majorCity, `c_${c.code}_geo_city`),
    explanation: c.funNotes.geography,
  });

  pushQ({
    suffix: 'geo_river',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'river_relief',
    source: 'Atlas hydrographique africain',
    countryModeAllowed: true,
    prompt: L(
      `Quel grand fleuve, lac ou relief emblématique marque la géographie ${meta.frOf} ?`,
      `Which major river, lake, or relief feature defines ${n.en}’s geography?`,
      `¿Qué gran río, lago o relieve define la geografía de ${n.es}?`,
      `Qual grande rio, lago ou relevo marca a geografia de ${n.pt}?`,
      `أي نهر أو بحيرة أو مَعلَم طبيعي يميّز جغرافية ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quel fleuve, lac ou relief emblématique marque la géographie du pays ?',
      'Which iconic river, lake, or relief feature marks the country’s geography?',
      '¿Qué río, lago o relieve emblemático marca la geografía del país?',
      'Qual rio, lago ou relevo emblemático marca a geografia do país?',
      'أي نهر أو بحيرة أو مَعلَم طبيعي يميّز جغرافية البلاد؟'
    ),
    correct: c.riverOrPeak,
    distractors: pickDistinctDistractors(c, (x) => x.riverOrPeak, `c_${c.code}_geo_river`),
    explanation: c.funNotes.geography,
  });

  {
    const id = `c_${c.code}_geo_coast`;
    const rng = createRng(hashString(id));
    const distractorKeys = shuffleWithRng(INCOMPATIBLE_COASTLINE_DISTRACTORS[d.coastline], rng).slice(0, 3);
    pushQ({
      suffix: 'geo_coast',
      category: 'geography',
      subCategory: 'geographie_environnement',
      difficulty: 2,
      topicKey: 'coastline',
      source: 'Hydrographie & Frontières maritimes',
      countryModeAllowed: true,
      prompt: L(
        `Sur quelle façade maritime s’ouvre le territoire ${meta.frOf} ?`,
        `Which coastline or maritime status characterizes ${n.en}?`,
        `¿Qué fachada marítima o situación costera corresponde a ${n.es}?`,
        `Qual faixa costeira ou situação marítima caracteriza ${n.pt}?`,
        `ما الواجهة البحرية أو الوضع البحري لدولة ${n.ar}؟`
      ),
      countryModePrompt: L(
        'Sur quelle mer ou quel océan le pays possède-t-il un débouché maritime ?',
        'Which sea or ocean borders this country (or is it landlocked)?',
        '¿Hacia qué mar u océano se abre el territorio del país?',
        'Para qual mar ou oceano o país possui acesso marítimo?',
        'على أي بحر أو محيط تطل الواجهة البحرية للبلاد؟'
      ),
      correct: COASTLINE_LABELS[d.coastline],
      distractors: distractorKeys.map((k) => COASTLINE_LABELS[k]),
      explanation: c.funNotes.geography,
    });
  }

  pushQ({
    suffix: 'geo_peak',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'highest_peak',
    source: 'Données topographiques nationales',
    countryModeAllowed: true,
    prompt: L(
      `Quel sommet constitue le point culminant ${meta.frOf} ?`,
      `Which peak is the highest elevation in ${n.en}?`,
      `¿Qué cumbre es el punto más alto de ${n.es}?`,
      `Qual pico é o ponto mais alto de ${n.pt}?`,
      `ما هي أعلى قمة جبلية في ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quel sommet est le point culminant du pays ?',
      'Which peak is the highest point in the country?',
      '¿Qué cumbre es el punto culminante del país?',
      'Qual pico é o ponto mais alto do país?',
      'ما هي أعلى قمة جبلية في البلاد؟'
    ),
    correct: d.highestPeak,
    distractors: pickDistinctDistractors(c, (_x, df) => df.highestPeak, `c_${c.code}_geo_peak`),
    explanation: c.funNotes.geography,
  });

  pushQ({
    suffix: 'geo_park',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'national_park',
    source: 'UICN & Aires protégées d’Afrique',
    countryModeAllowed: true,
    prompt: L(
      `Lequel de ces parcs nationaux ou réserves naturelles se trouve ${meta.frIn} ?`,
      `Which of these national parks or reserves is located in ${n.en}?`,
      `¿Cuál de estos parques nacionales o reservas está en ${n.es}?`,
      `Qual destes parques nacionais ou reservas fica em ${n.pt}?`,
      `أيٌّ من هذه المتنزهات الوطنية أو المحميات الطبيعية يقع في ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Lequel de ces parcs nationaux ou réserves naturelles protège la biodiversité du pays ?',
      'Which of these national parks or nature reserves protects the country’s wildlife?',
      '¿Cuál de estos parques nacionales o reservas protege la fauna del país?',
      'Qual destes parques nacionais ou reservas protege a fauna do país?',
      'أيٌّ من هذه المتنزهات الوطنية أو المحميات الطبيعية يقع في البلاد؟'
    ),
    correct: d.nationalPark,
    distractors: pickDistinctDistractors(c, (_x, df) => df.nationalPark, `c_${c.code}_geo_park`),
    explanation: c.funNotes.landmark,
  });

  if (d.neighbors.length > 0) {
    const id = `c_${c.code}_geo_neigh`;
    const rng = createRng(hashString(id));
    const chosenNeighborCode = d.neighbors[Math.floor(rng() * d.neighbors.length)];
    const neighborCountry = getCountryByCode(chosenNeighborCode);
    const neighborSet = new Set([c.code, ...d.neighbors]);
    const nonNeighbors = shuffleWithRng(
      AFRICAN_COUNTRIES.filter((x) => !neighborSet.has(x.code)),
      rng
    ).slice(0, 3);

    pushQ({
      suffix: 'geo_neigh',
      category: 'geography',
      subCategory: 'geographie_environnement',
      difficulty: 3,
      topicKey: 'border_neighbor',
      source: 'Union Africaine — Géographie frontalière',
      countryModeAllowed: true,
      prompt: L(
        `Lequel de ces États partage directement une frontière terrestre avec ${meta.frSubj} ?`,
        `Which of these countries shares a direct land border with ${n.en}?`,
        `¿Cuál de estos países comparte frontera terrestre directa con ${n.es}?`,
        `Qual destes países faz fronteira terrestre direta com ${n.pt}?`,
        `أيٌّ من هذه الدول تشترك في حدود برية مباشرة مع ${n.ar}؟`
      ),
      countryModePrompt: L(
        'Lequel de ces pays africains partage directement une frontière terrestre avec le pays ?',
        'Which of these African countries shares a direct land border with this nation?',
        '¿Cuál de estos países africanos comparte frontera terrestre directa con el país?',
        'Qual destes países africanos faz fronteira terrestre direta com o país?',
        'أيٌّ من هذه الدول الأفريقية تشترك في حدود برية مباشرة مع البلاد؟'
      ),
      correct: neighborCountry.name,
      distractors: nonNeighbors.map((x) => x.name),
      explanation: c.funNotes.geography,
    });
  } else {
    const islandCorrect = L(
      '0 (État entièrement insulaire)',
      '0 (entirely island nation)',
      '0 (Estado totalmente insular)',
      '0 (Estado totalmente insular)',
      '0 (دولة جزرية بالكامل)'
    );
    const islandDistractors: LocalizedText[] = [
      L('2 frontières terrestres', '2 land borders', '2 fronteras terrestres', '2 fronteiras terrestres', 'حدودان بريتان'),
      L('4 frontières terrestres', '4 land borders', '4 fronteras terrestres', '4 fronteiras terrestres', '4 حدود برية'),
      L('7 frontières terrestres', '7 land borders', '7 fronteras terrestres', '7 fronteiras terrestres', '7 حدود برية'),
    ];
    pushQ({
      suffix: 'geo_neigh',
      category: 'geography',
      subCategory: 'geographie_environnement',
      difficulty: 3,
      topicKey: 'border_neighbor',
      source: 'Union Africaine — Géographie insulaire',
      countryModeAllowed: true,
      prompt: L(
        `Combien de frontières terrestres directes possède ${meta.frSubj} ?`,
        `How many direct land borders does ${n.en} have?`,
        `¿Cuántas fronteras terrestres directas tiene ${n.es}?`,
        `Quantas fronteiras terrestres diretas possui ${n.pt}?`,
        `كم عدد الحدود البرية المباشرة لدولة ${n.ar}؟`
      ),
      countryModePrompt: L(
        'Combien de frontières terrestres directes avec d’autres États le pays possède-t-il ?',
        'How many direct land borders with other nations does this country have?',
        '¿Cuántas fronteras terrestres directas con otros Estados posee el país?',
        'Quantas fronteiras terrestres diretas com outros países o território possui?',
        'كم عدد الحدود البرية المباشرة للبلاد مع دول أخرى؟'
      ),
      correct: islandCorrect,
      distractors: islandDistractors,
      explanation: c.funNotes.geography,
    });
  }

  pushQ({
    suffix: 'geo_port',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 4,
    topicKey: 'economic_corridor',
    source: 'Banque africaine de développement & Infrastructures',
    countryModeAllowed: true,
    prompt: L(
      `Quel pôle économique, port stratégique ou ressource majeure est associé ${meta.frIn === 'au Gabon' ? 'au Gabon' : meta.frOf.replace(/^de l’|^du |^de la |^des |^de /, 'à ')} ?`,
      `Which strategic port, economic corridor, or key resource belongs to ${n.en}?`,
      `¿Qué puerto estratégico o recurso clave está ligado a ${n.es}?`,
      `Qual porto estratégico ou recurso chave está ligado a ${n.pt}?`,
      `أي ميناء استراتيجي أو مورد اقتصادي رئيسي يرتبط بدولة ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quel port stratégique, corridor économique ou gisement majeur soutient l’économie du pays ?',
      'Which strategic port, economic corridor, or key resource drives the country’s economy?',
      '¿Qué puerto estratégico, corredor económico o recurso clave impulsa la economía del país?',
      'Qual porto estratégico, corredor econômico ou recurso impulsiona a economia do país?',
      'أي ميناء استراتيجي أو مورد اقتصادي رئيسي يدعم اقتصاد البلاد؟'
    ),
    correct: d.strategicResourceOrPort,
    distractors: pickDistinctDistractors(c, (_x, df) => df.strategicResourceOrPort, `c_${c.code}_geo_port`),
    explanation: c.funNotes.geography,
  });

  {
    const id = `c_${c.code}_geo_tz`;
    const rng = createRng(hashString(id));
    const distractorTzs = shuffleWithRng(
      ALL_UTC_OPTIONS.filter((x) => normalizeVal(x.fr) !== normalizeVal(meta.utcOffset.fr)),
      rng
    ).slice(0, 3);
    pushQ({
      suffix: 'geo_tz',
      category: 'geography',
      subCategory: 'sciences_innovations',
      difficulty: 3,
      topicKey: 'timezone',
      source: 'IANA Time Zone Database',
      countryModeAllowed: true,
      prompt: L(
        `Quel est le fuseau horaire standard ${meta.frOf} ?`,
        `What is the standard time zone of ${n.en}?`,
        `¿Cuál es el huso horario estándar de ${n.es}?`,
        `Qual é o fuso horário padrão de ${n.pt}?`,
        `ما هو التوقيت الزمني الرسمي لدولة ${n.ar}؟`
      ),
      countryModePrompt: L(
        'Dans quel fuseau horaire officiel se trouve le pays ?',
        'Which official time zone does the country observe?',
        '¿En qué huso horario oficial se encuentra el país?',
        'Em qual fuso horário oficial o país se encontra?',
        'في أي نطاق زمني رسمي تقع البلاد؟'
      ),
      correct: meta.utcOffset,
      distractors: distractorTzs,
      explanation: L(
        `Ce territoire applique l’heure légale ${meta.utcOffset.fr}.`,
        `This country observes ${meta.utcOffset.en}.`,
        `Este país utiliza la hora oficial ${meta.utcOffset.es}.`,
        `Este país adota o horário oficial ${meta.utcOffset.pt}.`,
        `تعتمد البلاد التوقيت الرسمي ${meta.utcOffset.ar}.`
      ),
    });
  }

  {
    const id = `c_${c.code}_geo_bloc`;
    const rng = createRng(hashString(id));
    const distractorBlocs = shuffleWithRng(
      ALL_BLOC_OPTIONS.filter((x) => !normalizeVal(meta.regionalBloc.fr).includes(normalizeVal(x.fr.split(' ')[0]))),
      rng
    ).slice(0, 3);
    pushQ({
      suffix: 'geo_bloc',
      category: 'geography',
      subCategory: 'politique_institutions',
      difficulty: 3,
      topicKey: 'regional_bloc',
      source: 'Union Africaine — Communautés économiques régionales (CER)',
      countryModeAllowed: true,
      prompt: L(
        `De quelle grande communauté régionale africaine ${meta.frSubj} est-il membre ?`,
        `Which major African regional economic community does ${n.en} belong to?`,
        `¿A qué gran comunidad económica regional africana pertenece ${n.es}?`,
        `A qual grande comunidade econômica regional africana pertence ${n.pt}?`,
        `إلى أي تجمع اقتصادي إقليمي أفريقي رئيسي تنتمي دولة ${n.ar}؟`
      ),
      countryModePrompt: L(
        'À quelle grande organisation régionale d’intégration africaine le pays appartient-il ?',
        'Which major African regional integration community does the country belong to?',
        '¿A qué gran organización regional de integración africana pertenece el país?',
        'A qual grande organização regional de integração africana o país pertence?',
        'إلى أي منظمة إقليمية أفريقية رئيسية تنتمي البلاد؟'
      ),
      correct: meta.regionalBloc,
      distractors: distractorBlocs,
      explanation: L(
        `Cette appartenance régionale coordonne la libre circulation, le commerce et la coopération avec les États voisins (${meta.regionalBloc.fr}).`,
        `Membership in ${meta.regionalBloc.en} coordinates trade, mobility, and regional cooperation.`,
        `La pertenencia a ${meta.regionalBloc.es} coordina el comercio y la integración regional.`,
        `A participação em ${meta.regionalBloc.pt} coordena o comércio e a cooperação regional.`,
        `تعزز العضوية في ${meta.regionalBloc.ar} التكامل التجاري والإقليمي.`
      ),
    });
  }

  pushQ({
    suffix: 'geo_tel',
    category: 'geography',
    subCategory: 'sciences_innovations',
    difficulty: 4,
    topicKey: 'calling_code',
    source: 'Union internationale des télécommunications (UIT)',
    countryModeAllowed: true,
    prompt: L(
      `Quel est l’indicatif téléphonique international officiel ${meta.frOf} ?`,
      `What is the official international dialing code for ${n.en}?`,
      `¿Cuál es el prefijo telefónico internacional de ${n.es}?`,
      `Qual é o código telefônico internacional (DDI) de ${n.pt}?`,
      `ما هو رمز الاتصال الدولي الرسمي لدولة ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quel est l’indicatif téléphonique international officiel du pays ?',
      'What is the country’s official international dialing code?',
      '¿Cuál es el prefijo telefónico internacional oficial del país?',
      'Qual é o código telefônico internacional oficial do país?',
      'ما هو رمز الاتصال الدولي الرسمي للبلاد؟'
    ),
    correct: L(d.callingCode, d.callingCode, d.callingCode, d.callingCode, d.callingCode),
    distractors: pickDistinctDistractors(
      c,
      (_x, df) => L(df.callingCode, df.callingCode, df.callingCode, df.callingCode, df.callingCode),
      `c_${c.code}_geo_tel`
    ),
    explanation: c.funNotes.capital,
  });

  pushQ({
    suffix: 'geo_tld',
    category: 'geography',
    subCategory: 'sciences_innovations',
    difficulty: 4,
    topicKey: 'cctld',
    source: 'IANA — Root Zone Database',
    countryModeAllowed: true,
    prompt: L(
      `Quelle est l’extension Internet nationale officielle (ccTLD) ${meta.frOf} ?`,
      `What is the official country-code Internet domain (ccTLD) of ${n.en}?`,
      `¿Cuál es el dominio de Internet nacional oficial (ccTLD) de ${n.es}?`,
      `Qual é o domínio de Internet oficial (ccTLD) de ${n.pt}?`,
      `ما هو نطاق الإنترنت الرسمي (ccTLD) لدولة ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quelle est l’extension Internet officielle (nom de domaine national) attribuée au pays ?',
      'What is the official country-code Internet domain (ccTLD) assigned to the country?',
      '¿Cuál es la extensión oficial de Internet (ccTLD) asignada al país?',
      'Qual é a extensão oficial de Internet (ccTLD) atribuída ao país?',
      'ما هو نطاق الإنترنت الوطني الرسمي للبلاد؟'
    ),
    correct: L(d.tld, d.tld, d.tld, d.tld, d.tld),
    distractors: pickDistinctDistractors(
      c,
      (_x, df) => L(df.tld, df.tld, df.tld, df.tld, df.tld),
      `c_${c.code}_geo_tld`
    ),
    explanation: c.funNotes.capital,
  });

  // REVERSE GEO (All-Africa Mode ONLY)
  pushQ({
    suffix: 'geo_rev_cap',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'capital',
    source: 'ONU / Atlas officiel des États africains',
    countryModeAllowed: false,
    prompt: L(
      `Quel pays africain a pour capitale « ${c.capital.fr} » et abrite « ${c.landmark.fr} » ?`,
      `Which African country has "${c.capital.en}" as its capital and is home to "${c.landmark.en}"?`,
      `¿Qué país africano tiene como capital "${c.capital.es}" y alberga "${c.landmark.es}"?`,
      `Qual país africano tem como capital "${c.capital.pt}" e abriga "${c.landmark.pt}"?`,
      `أي دولة أفريقية عاصمتها «${c.capital.ar}» وتحتضن «${c.landmark.ar}»؟`
    ),
    correct: c.name,
    distractors: pickDistinctDistractors(c, (x) => x.name, `c_${c.code}_geo_rev_cap`),
    explanation: c.funNotes.capital,
  });

  // ============================================================================
  // HISTORY — 11 DIRECT QUESTIONS + 3 REVERSE (All-Africa only)
  // ============================================================================

  {
    const id = `c_${c.code}_hist_ind`;
    const rng = createRng(hashString(id));
    const yearPool = shuffleWithRng(
      INDEPENDENCE_YEARS.filter((y) => !c.independenceYear.includes(y)),
      rng
    );
    pushQ({
      suffix: 'hist_ind',
      category: 'history',
      subCategory: 'histoire_independance',
      difficulty: 1,
      topicKey: 'independence_year',
      source: 'Archives constitutionnelles nationales',
      countryModeAllowed: true,
      prompt: L(
        `Quelle année marque l’indépendance ou un tournant souverain majeur ${meta.frOf} ?`,
        `Which year marks the independence or major sovereign milestone of ${n.en}?`,
        `¿Qué fecha marca la independencia o gran hito soberano de ${n.es}?`,
        `Qual data marca a independência ou grande marco soberano de ${n.pt}?`,
        `أي تاريخ يمثل الاستقلال أو المحطة السيادية الكبرى لدولة ${n.ar}؟`
      ),
      countryModePrompt: L(
        'Quelle année marque l’indépendance ou le tournant souverain fondateur du pays ?',
        'Which year marks the country’s independence or major sovereign milestone?',
        '¿Qué año marca la independencia o hito soberano del país?',
        'Qual ano marca a independência ou marco soberano do país?',
        'في أي عام نالت البلاد استقلالها أو محطتها السيادية الكبرى؟'
      ),
      correct: localizedIndependenceYear(c.independenceYear),
      distractors: yearPool.slice(0, 3).map((y) => L(y, y, y, y, y)),
      explanation: c.funNotes.history,
    });
  }

  pushQ({
    suffix: 'hist_hero',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 1,
    topicKey: 'national_hero',
    source: 'Histoire générale de l’Afrique (UNESCO)',
    countryModeAllowed: true,
    prompt: L(
      `Quelle grande figure historique ou héros national a marqué l’histoire ${meta.frOf} ?`,
      `Which historic figure or national hero shaped the history of ${n.en}?`,
      `¿Qué figura histórica o héroe nacional marcó la historia de ${n.es}?`,
      `Qual figura histórica ou herói nacional marcou a história de ${n.pt}?`,
      `أي شخصية تاريخية أو بطل وطني يرتبط بتاريخ ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quelle figure historique ou quel héros national a marqué l’histoire du pays ?',
      'Which historic figure or national hero left a lasting mark on the country?',
      '¿Qué figura histórica o héroe nacional marcó la historia del país?',
      'Qual figura histórica ou herói nacional marcou a história do país?',
      'أي شخصية تاريخية أو بطل وطني ترك بصمة خالدة في تاريخ البلاد؟'
    ),
    correct: c.hero,
    distractors: pickDistinctDistractors(c, (x) => x.hero, `c_${c.code}_hist_hero`),
    explanation: c.funNotes.hero,
  });

  // DIRECT FLAG DESCRIPTION QUESTION (Country Mode friendly: asks how the national flag looks)
  pushQ({
    suffix: 'hist_flag_desc',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 1,
    topicKey: 'flag_symbol',
    source: 'Constitution nationale — Symboles de l’État',
    countryModeAllowed: true,
    prompt: L(
      `À quoi ressemble le drapeau national officiel ${meta.frOf} ?`,
      `How is the official national flag of ${n.en} designed?`,
      `¿Cómo es la bandera nacional oficial de ${n.es}?`,
      `Como é a bandeira nacional oficial de ${n.pt}?`,
      `كيف يُوصف العلم الوطني الرسمي لدولة ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quelles couleurs et figures composent le drapeau national du pays ?',
      'Which colors and symbols make up the country’s national flag?',
      '¿Qué colores y símbolos componen la bandera nacional del país?',
      'Quais cores e símbolos compõem a bandeira nacional do país?',
      'ما الألوان والرموز التي يتكون منها العلم الوطني للبلاد؟'
    ),
    correct: d.flagDescription,
    distractors: pickDistinctDistractors(c, (_x, df) => df.flagDescription, `c_${c.code}_hist_flag_desc`, {
      filterFn: (_x, df) => normalizeVal(df.flagDescription.fr) !== normalizeVal(d.flagDescription.fr),
    }),
    explanation: c.funNotes.history,
  });

  pushQ({
    suffix: 'hist_fact',
    category: 'history',
    subCategory: 'anecdotes_insolites',
    difficulty: 2,
    topicKey: 'historic_fact',
    source: 'Patrimoine & Faits marquants d’Afrique',
    countryModeAllowed: true,
    prompt: L(
      `Quel trait historique ou fait marquant distingue tout particulièrement ${meta.frSubj} ?`,
      `Which historic hallmark or distinction is associated with ${n.en}?`,
      `¿Qué rasgo histórico o hecho destacado caracteriza a ${n.es}?`,
      `Qual marco histórico ou característica define especialmente ${n.pt}?`,
      `ما السمة التاريخية أو الحقيقة البارزة المرتبطة بدولة ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quel fait marquant ou trait emblématique distingue particulièrement l’histoire du pays ?',
      'Which remarkable fact or distinction stands out in the country’s history?',
      '¿Qué hecho destacado o rasgo emblemático distingue la historia del país?',
      'Qual marco histórico ou característica notável distingue o país?',
      'ما السمة أو الحقيقة البارزة التي تميّز تاريخ البلاد؟'
    ),
    correct: c.historicFact,
    distractors: pickDistinctDistractors(c, (x) => x.historicFact, `c_${c.code}_hist_fact`),
    explanation: c.funNotes.history,
  });

  pushQ({
    suffix: 'hist_curr',
    category: 'history',
    subCategory: 'economie_developpement',
    difficulty: 2,
    topicKey: 'currency',
    source: 'Banques centrales africaines',
    countryModeAllowed: true,
    prompt: L(
      `Quelle est la monnaie officielle en circulation ${meta.frIn} ?`,
      `What is the official currency used in ${n.en}?`,
      `¿Cuál es la moneda oficial en circulación en ${n.es}?`,
      `Qual é a moeda oficial em circulação em ${n.pt}?`,
      `ما هي العملة الرسمية المتداولة في ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quelle est la monnaie officielle ayant cours légal dans le pays ?',
      'What is the official legal-tender currency used in the country?',
      '¿Cuál es la moneda oficial de curso legal en el país?',
      'Qual é a moeda oficial em circulação no país?',
      'ما هي العملة الرسمية المتداولة في البلاد؟'
    ),
    correct: c.currency,
    distractors: pickDistinctDistractors(c, (x) => x.currency, `c_${c.code}_hist_curr`, {
      keyFn: (val) => currencyFamilyKey(val),
    }),
    explanation: c.funNotes.currency,
  });

  pushQ({
    suffix: 'hist_lead',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'first_leader',
    source: 'Archives présidentielles & Histoire politique',
    countryModeAllowed: true,
    prompt: L(
      `Qui a été le premier chef d’État ou dirigeant fondateur de l’ère moderne ${meta.frIn} ?`,
      `Who was the first modern head of state or founding leader of ${n.en}?`,
      `¿Quién fue el primer líder o jefe de Estado fundador de la era moderna en ${n.es}?`,
      `Quem foi o primeiro chefe de Estado ou líder fundador da era moderna em ${n.pt}?`,
      `من كان أول رئيس أو قائد مؤسس في العصر الحديث لدولة ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Qui fut le premier président ou dirigeant fondateur du pays à l’époque contemporaine ?',
      'Who served as the country’s first modern head of state or founding leader?',
      '¿Quién fue el primer presidente o líder fundador del país en la era moderna?',
      'Quem foi o primeiro presidente ou líder fundador do país na era moderna?',
      'من كان أول رئيس أو قائد مؤسس للبلاد في العصر الحديث؟'
    ),
    correct: d.firstLeader,
    distractors: pickDistinctDistractors(c, (_x, df) => df.firstLeader, `c_${c.code}_hist_lead`),
    explanation: c.funNotes.hero,
  });

  pushQ({
    suffix: 'hist_unesco',
    category: 'history',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'unesco_site',
    source: 'UNESCO — Liste du patrimoine mondial',
    countryModeAllowed: true,
    prompt: L(
      `Quel site patrimonial célèbre (inscrit ou reconnu par l’UNESCO) appartient à ${meta.frSubj} ?`,
      `Which famed heritage or UNESCO site is located in ${n.en}?`,
      `¿Qué sitio patrimonial famoso o de la UNESCO se encuentra en ${n.es}?`,
      `Qual famoso patrimônio histórico ou da UNESCO fica em ${n.pt}?`,
      `أي موقع تراثي أو أثري شهير يقع في ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quel joyau patrimonial célèbre (classé ou reconnu par l’UNESCO) se trouve dans le pays ?',
      'Which famed UNESCO-recognized heritage site is located in the country?',
      '¿Qué joya patrimonial famosa (reconocida por la UNESCO) se halla en el país?',
      'Qual joia patrimonial famosa (reconhecida pela UNESCO) fica no país?',
      'أي معلم تراثي بارز معترف به من اليونسكو يقع في البلاد؟'
    ),
    correct: d.unescoSite,
    distractors: pickDistinctDistractors(c, (_x, df) => df.unescoSite, `c_${c.code}_hist_unesco`),
    explanation: c.funNotes.landmark,
  });

  pushQ({
    suffix: 'hist_former',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 3,
    topicKey: 'former_name',
    source: 'Histoire coloniale & Archives territoriales',
    countryModeAllowed: true,
    prompt: L(
      `Sous quel ancien nom ou statut historique le territoire ${meta.frOf} était-il connu avant l’indépendance ?`,
      `Under what former name or historic territory was ${n.en} previously known?`,
      `¿Con qué antiguo nombre o territorio histórico se conocía anteriormente a ${n.es}?`,
      `Com que antigo nome ou território histórico era conhecido ${n.pt}?`,
      `ما الاسم القديم أو التسمية التاريخية السابقة لدولة ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Sous quelle ancienne dénomination ou statut administratif le territoire était-il connu avant l’ère actuelle ?',
      'Under what former name or administrative status was this territory previously known?',
      '¿Con qué antiguo nombre o estatus administrativo se conocía este territorio anteriormente?',
      'Sob qual antigo nome ou estatuto administrativo o território era conhecido antes da era atual?',
      'ما الاسم القديم أو الوضع التاريخي السابق لهذا الإقليم؟'
    ),
    correct: d.formerNameOrColony,
    distractors: pickDistinctDistractors(c, (_x, df) => df.formerNameOrColony, `c_${c.code}_hist_former`),
    explanation: c.funNotes.history,
  });

  pushQ({
    suffix: 'hist_day',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 3,
    topicKey: 'national_day',
    source: 'Calendrier officiel des États',
    countryModeAllowed: true,
    prompt: L(
      `À quelle date est célébrée la fête nationale officielle ${meta.frOf} ?`,
      `When is the official National Day celebrated in ${n.en}?`,
      `¿En qué fecha se celebra el Día Nacional oficial de ${n.es}?`,
      `Em que data se celebra o Dia Nacional oficial de ${n.pt}?`,
      `في أي تاريخ يُحتفل باليوم الوطني الرسمي لدولة ${n.ar}؟`
    ),
    countryModePrompt: L(
      'À quelle date officielle célèbre-t-on la fête nationale du pays ?',
      'On what official date does the country celebrate its National Day?',
      '¿En qué fecha oficial se celebra el Día Nacional del país?',
      'Em que data oficial o país celebra o seu Dia Nacional?',
      'في أي تاريخ رسمي يُحتفل باليوم الوطني للبلاد؟'
    ),
    correct: d.nationalDay,
    distractors: pickDistinctDistractors(c, (_x, df) => df.nationalDay, `c_${c.code}_hist_day`),
    explanation: c.funNotes.history,
  });

  pushQ({
    suffix: 'hist_king',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 3,
    topicKey: 'ancient_kingdom',
    source: 'Histoire générale de l’Afrique (UNESCO)',
    countryModeAllowed: true,
    prompt: L(
      `Quel royaume ancien, empire ou civilisation historique s’est illustré sur les terres ${meta.frOf} ?`,
      `Which ancient kingdom, empire, or historic civilization flourished in the lands of ${n.en}?`,
      `¿Qué antiguo reino, imperio o civilización histórica brilló en las tierras de ${n.es}?`,
      `Qual antigo reino, império ou civilização histórica floresceu nas terras de ${n.pt}?`,
      `أي مملكة قديمة أو إمبراطورية أو حضارة تاريخية ازدهرت في أراضي ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quel royaume ancien, empire ou civilisation historique s’est épanoui sur ce territoire ?',
      'Which ancient kingdom, empire, or historic civilization flourished in these lands?',
      '¿Qué antiguo reino, imperio o civilización histórica floreció en estas tierras?',
      'Qual antigo reino, império ou civilização histórica floresceu nestas terras?',
      'أي مملكة قديمة أو إمبراطورية أو حضارة تاريخية ازدهرت على هذه الأرض؟'
    ),
    correct: d.ancientKingdom,
    distractors: pickDistinctDistractors(c, (_x, df) => df.ancientKingdom, `c_${c.code}_hist_king`),
    explanation: c.funNotes.history,
  });

  pushQ({
    suffix: 'hist_etym',
    category: 'history',
    subCategory: 'anecdotes_insolites',
    difficulty: 4,
    topicKey: 'name_etymology',
    source: 'Étymologie & Toponymie africaine',
    countryModeAllowed: true,
    prompt: L(
      `Quelle est l’origine historique ou la signification du nom « ${n.fr} » ?`,
      `What is the historical origin or meaning behind the name "${n.en}"?`,
      `¿Cuál es el origen histórico o significado del nombre "${n.es}"?`,
      `Qual é a origem histórica ou significado do nome "${n.pt}"?`,
      `ما الأصل التاريخي أو معنى اسم «${n.ar}»؟`
    ),
    countryModePrompt: L(
      'Quelle est l’origine historique ou la signification du nom du pays ?',
      'What is the historical origin or meaning of the country’s name?',
      '¿Cuál es el origen histórico o significado del nombre del país?',
      'Qual é a origem histórica ou significado do nome do país?',
      'ما الأصل التاريخي أو معنى اسم البلاد؟'
    ),
    correct: d.nameEtymology,
    distractors: pickDistinctDistractors(c, (_x, df) => df.nameEtymology, `c_${c.code}_hist_etym`),
    explanation: c.funNotes.history,
  });

  // REVERSE HISTORY (All-Africa Mode ONLY)
  pushQ({
    suffix: 'hist_flag',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 1,
    topicKey: 'flag_symbol',
    source: 'Constitution nationale — Symboles de l’État',
    countryModeAllowed: false,
    prompt: L(
      `Quel pays africain possède ce drapeau : « ${d.flagDescription.fr} » ?`,
      `Which African country has this national flag: "${d.flagDescription.en}"?`,
      `¿Qué país africano tiene esta bandera nacional: "${d.flagDescription.es}"?`,
      `Qual país africano tem esta bandeira nacional: "${d.flagDescription.pt}"?`,
      `أي دولة أفريقية يصفها هذا العلم: «${d.flagDescription.ar}»؟`
    ),
    correct: c.name,
    distractors: pickDistinctDistractors(c, (x) => x.name, `c_${c.code}_hist_flag`, {
      filterFn: (_x, df) => normalizeVal(df.flagDescription.fr) !== normalizeVal(d.flagDescription.fr),
    }),
    explanation: c.funNotes.history,
  });

  pushQ({
    suffix: 'hist_rev_hero',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 4,
    topicKey: 'national_hero',
    source: 'Histoire générale de l’Afrique (UNESCO)',
    countryModeAllowed: false,
    prompt: L(
      `À quel pays d’Afrique associe-t-on à la fois « ${c.hero.fr} » et l’héritage « ${d.ancientKingdom.fr} » ?`,
      `Which African nation is associated with both "${c.hero.en}" and "${d.ancientKingdom.en}"?`,
      `¿Con qué país africano se asocian tanto "${c.hero.es}" como "${d.ancientKingdom.es}"?`,
      `A qual país africano se associam "${c.hero.pt}" e "${d.ancientKingdom.pt}"?`,
      `بأي دولة أفريقية يرتبط كل من «${c.hero.ar}» وإرث «${d.ancientKingdom.ar}»؟`
    ),
    correct: c.name,
    distractors: pickDistinctDistractors(c, (x) => x.name, `c_${c.code}_hist_rev_hero`),
    explanation: c.funNotes.hero,
  });

  pushQ({
    suffix: 'hist_rev_lead',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 4,
    topicKey: 'first_leader',
    source: 'Archives présidentielles & Histoire politique',
    countryModeAllowed: false,
    prompt: L(
      `Quel pays africain a eu pour premier dirigeant « ${d.firstLeader.fr} » et abrite « ${d.unescoSite.fr} » ?`,
      `Which African country had "${d.firstLeader.en}" as its first leader and is home to "${d.unescoSite.en}"?`,
      `¿Qué país africano tuvo como primer líder a "${d.firstLeader.es}" y alberga "${d.unescoSite.es}"?`,
      `Qual país africano teve "${d.firstLeader.pt}" como primeiro líder e abriga "${d.unescoSite.pt}"?`,
      `أي دولة أفريقية كان أول قائد لها «${d.firstLeader.ar}» وتحتضن «${d.unescoSite.ar}»؟`
    ),
    correct: c.name,
    distractors: pickDistinctDistractors(c, (x) => x.name, `c_${c.code}_hist_rev_lead`),
    explanation: c.funNotes.hero,
  });

  // ============================================================================
  // FOOTBALL & SPORTS — 9 DIRECT QUESTIONS + 5 REVERSE (All-Africa only)
  // ============================================================================

  pushQ({
    suffix: 'fb_nick',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 1,
    topicKey: 'fb_nickname',
    source: 'CAF — Fédérations membres',
    countryModeAllowed: true,
    prompt: L(
      `Quel est le surnom officiel de l’équipe nationale de football ${meta.frOf} ?`,
      `What is the official nickname of ${n.en}’s national football team?`,
      `¿Cuál es el apodo oficial de la selección nacional de fútbol de ${n.es}?`,
      `Qual é o apelido oficial da seleção nacional de futebol de ${n.pt}?`,
      `ما هو اللقب الرسمي للمنتخب الوطني لكرة القدم في ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quel est le surnom officiel de l’équipe nationale de football du pays ?',
      'What is the official nickname of the country’s national football team?',
      '¿Cuál es el apodo oficial de la selección nacional de fútbol del país?',
      'Qual é o apelido oficial da seleção nacional de futebol do país?',
      'ما هو اللقب الرسمي للمنتخب الوطني لكرة القدم؟'
    ),
    correct: c.teamNickname,
    distractors: pickDistinctDistractors(c, (x) => x.teamNickname, `c_${c.code}_fb_nick`),
    explanation: c.funNotes.football,
  });

  pushQ({
    suffix: 'fb_leg',
    category: 'football',
    subCategory: 'personnalites_heros',
    difficulty: 1,
    topicKey: 'fb_legend',
    source: 'CAF / FIFA — Icônes du football',
    countryModeAllowed: true,
    prompt: L(
      `Quelle légende sportive ou star historique a fait briller ${meta.frSubj} ?`,
      `Which football star or sporting legend is an icon of ${n.en}?`,
      `¿Qué estrella o leyenda deportiva representa a ${n.es}?`,
      `Qual craque ou lenda esportiva é um ícone de ${n.pt}?`,
      `أي نجم أو أسطورة رياضية يُعد رمزاً لدولة ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quelle légende sportive ou icône du football a marqué l’histoire du pays ?',
      'Which football legend or sporting icon left a lasting legacy in the country?',
      '¿Qué leyenda del fútbol o ícono deportivo marcó la historia del país?',
      'Qual lenda do futebol ou ícone esportivo marcou a história do país?',
      'أي أسطورة كروية أو نجم رياضي خلّد اسمه في تاريخ البلاد؟'
    ),
    correct: c.footballLegend,
    distractors: pickDistinctDistractors(c, (x) => x.footballLegend, `c_${c.code}_fb_leg`),
    explanation: c.funNotes.legend,
  });

  pushQ({
    suffix: 'fb_afcon',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'fb_afcon',
    source: 'CAF — Archives CAN',
    countryModeAllowed: true,
    prompt: L(
      `Quel exploit sportif ou palmarès continental correspond à ${meta.frSubj} ?`,
      `Which continental football or sports milestone belongs to ${n.en}?`,
      `¿Qué logro deportivo o palmarés continental corresponde a ${n.es}?`,
      `Qual conquista esportiva ou marco continental pertence a ${n.pt}?`,
      `أي إنجاز رياضي أو قاري يخص منتخب ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quel exploit ou palmarès continental caractérise la sélection nationale du pays ?',
      'Which continental football achievement belongs to the national team?',
      '¿Qué logro continental o palmarés caracteriza a la selección nacional?',
      'Qual conquista continental ou marco caracteriza a seleção nacional?',
      'أي إنجاز قاري أو سجل بطولات يخص المنتخب الوطني؟'
    ),
    correct: c.afconAchievement,
    distractors: pickDistinctDistractors(c, (x) => x.afconAchievement, `c_${c.code}_fb_afcon`),
    explanation: c.funNotes.afcon,
  });

  pushQ({
    suffix: 'fb_stad',
    category: 'football',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'fb_stadium',
    source: 'CAF / Stades homologués',
    countryModeAllowed: true,
    prompt: L(
      `Quel grand stade accueille traditionnellement les matchs à domicile ${meta.frOf} ?`,
      `Which major stadium traditionally hosts home matches for ${n.en}’s national team?`,
      `¿Qué gran estadio alberga habitualmente los partidos de la selección de ${n.es}?`,
      `Qual grande estádio costuma receber os jogos da seleção de ${n.pt}?`,
      `أي ملعب رئيسي يستضيف عادةً مباريات منتخب ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quel grand stade accueille traditionnellement les matchs internationaux de l’équipe nationale ?',
      'Which major stadium traditionally hosts the national team’s home internationals?',
      '¿Qué gran estadio alberga habitualmente los partidos internacionales de la selección?',
      'Qual grande estádio recebe tradicionalmente os jogos da seleção nacional?',
      'أي ملعب رئيسي يستضيف عادةً مباريات المنتخب الوطني؟'
    ),
    correct: d.stadium,
    distractors: pickDistinctDistractors(c, (_x, df) => df.stadium, `c_${c.code}_fb_stad`),
    explanation: c.funNotes.football,
  });

  pushQ({
    suffix: 'fb_star',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'fb_modern_star',
    source: 'FIFA / CAF — Sélections contemporaines',
    countryModeAllowed: true,
    prompt: L(
      `Quel joueur ou figure contemporaine brille avec la sélection ${meta.frOf} ?`,
      `Which modern football player or standout represents ${n.en}?`,
      `¿Qué futbolista contemporáneo o figura destacada representa a ${n.es}?`,
      `Qual jogador contemporâneo ou destaque representa o futebol de ${n.pt}?`,
      `أي لاعب كرة قدم معاصر يمثل نجم منتخب ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quel joueur contemporain ou fer de lance actuel représente la sélection nationale ?',
      'Which modern football star represents the national team?',
      '¿Qué futbolista contemporáneo representa actualmente a la selección nacional?',
      'Qual jogador contemporâneo representa atualmente a seleção nacional?',
      'أي نجم كرة قدم معاصر يمثل المنتخب الوطني؟'
    ),
    correct: d.modernStar,
    distractors: pickDistinctDistractors(c, (_x, df) => df.modernStar, `c_${c.code}_fb_star`),
    explanation: c.funNotes.legend,
  });

  pushQ({
    suffix: 'fb_jers',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'fb_jersey',
    source: 'Équipements officiels CAF / FIFA',
    countryModeAllowed: true,
    prompt: L(
      `Quelles sont les couleurs principales du maillot domicile ${meta.frOf} ?`,
      `What are the main home jersey colors of ${n.en}’s national team?`,
      `¿Cuáles son los colores principales de la camiseta local de ${n.es}?`,
      `Quais são as cores principais da camisa titular da seleção de ${n.pt}?`,
      `ما هي الألوان الرئيسية للقميص الأساسي لمنتخب ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quelles sont les couleurs principales du maillot domicile de la sélection nationale ?',
      'What are the main home jersey colors of the national football team?',
      '¿Cuáles son los colores principales de la camiseta titular de la selección?',
      'Quais são as cores principais da camisa titular da seleção nacional?',
      'ما هي الألوان الرئيسية للقميص الأساسي للمنتخب الوطني؟'
    ),
    correct: d.jerseyColors,
    distractors: pickDistinctDistractors(c, (_x, df) => df.jerseyColors, `c_${c.code}_fb_jers`, {
      keyFn: (val) => jerseyColorFamilyKey(val),
    }),
    explanation: c.funNotes.football,
  });

  pushQ({
    suffix: 'fb_club',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'fb_clubs',
    source: 'CAF Interclubs — Ligue des Champions & Coupe de la Confédération',
    countryModeAllowed: true,
    prompt: L(
      `Quels grands clubs locaux animent le championnat national ${meta.frOf} ?`,
      `Which famous domestic football clubs play in ${n.en}’s national league?`,
      `¿Qué clubes locales históricos compiten en la liga nacional de ${n.es}?`,
      `Quais clubes locais famosos disputam o campeonato nacional de ${n.pt}?`,
      `أي أندية محلية شهيرة تتنافس في الدوري الوطني في ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quels grands clubs historiques animent le championnat national du pays ?',
      'Which famous historic clubs compete in the country’s domestic league?',
      '¿Qué clubes históricos compiten en la liga nacional del país?',
      'Quais grandes clubes históricos disputam o campeonato nacional do país?',
      'أي أندية محلية عريقة تتنافس في الدوري الوطني للبلاد؟'
    ),
    correct: d.famousClub,
    distractors: pickDistinctDistractors(c, (_x, df) => df.famousClub, `c_${c.code}_fb_club`),
    explanation: c.funNotes.football,
  });

  {
    const id = `c_${c.code}_fb_zone`;
    const rng = createRng(hashString(id));
    const otherZones = shuffleWithRng(
      (Object.keys(CAF_ZONE_LABELS) as CafZoneId[]).filter((z) => z !== meta.cafZone),
      rng
    ).slice(0, 3);
    pushQ({
      suffix: 'fb_zone',
      category: 'football',
      subCategory: 'politique_institutions',
      difficulty: 3,
      topicKey: 'fb_caf_zone',
      source: 'CAF — Unions zonales officielles',
      countryModeAllowed: true,
      prompt: L(
        `À quelle union zonale de la CAF est rattachée la fédération de football ${meta.frOf} ?`,
        `To which official CAF zonal union does ${n.en}’s football federation belong?`,
        `¿A qué unión zonal oficial de la CAF pertenece la federación de fútbol de ${n.es}?`,
        `A qual união zonal oficial da CAF pertence a federação de futebol de ${n.pt}?`,
        `إلى أي اتحاد إقليمي تابع للكاف ينتمي اتحاد كرة القدم في ${n.ar}؟`
      ),
      countryModePrompt: L(
        'À quelle union zonale de la Confédération Africaine de Football (CAF) la fédération du pays est-elle rattachée ?',
        'Which CAF regional football union does the country’s federation belong to?',
        '¿A qué unión zonal de la CAF pertenece la federación de fútbol del país?',
        'A qual união zonal da CAF pertence a federação de futebol do país?',
        'إلى أي اتحاد إقليمي في الكاف ينتمي اتحاد كرة القدم بالبلاد؟'
      ),
      correct: CAF_ZONE_LABELS[meta.cafZone],
      distractors: otherZones.map((z) => CAF_ZONE_LABELS[z]),
      explanation: L(
        `La CAF divise le continent en 6 unions zonales ; cette fédération évolue au sein de l’union ${CAF_ZONE_LABELS[meta.cafZone].fr}.`,
        `CAF organizes Africa into 6 regional zones; this association competes in ${CAF_ZONE_LABELS[meta.cafZone].en}.`,
        `La CAF divide África en 6 zonas regionales y esta federación integra ${CAF_ZONE_LABELS[meta.cafZone].es}.`,
        `A CAF divide o continente em 6 uniões zonais, e esta federação integra ${CAF_ZONE_LABELS[meta.cafZone].pt}.`,
        `ينضوي اتحاد الكرة في البلاد ضمن ${CAF_ZONE_LABELS[meta.cafZone].ar}.`
      ),
    });
  }

  pushQ({
    suffix: 'fb_mile',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 4,
    topicKey: 'fb_milestone',
    source: 'Archives FIFA & CAF',
    countryModeAllowed: true,
    prompt: L(
      `Quel fait marquant de l’histoire du football s’applique précisément à ${meta.frSubj} ?`,
      `Which specific football milestone applies to ${n.en}?`,
      `¿Qué hito específico de la historia del fútbol pertenece a ${n.es}?`,
      `Qual marco específico da história do futebol pertence a ${n.pt}?`,
      `أي محطة كروية تاريخية دقيقة تخص منتخب ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quel exploit ou jalon historique du football africain concerne précisément la sélection du pays ?',
      'Which specific football milestone belongs to this country’s national team?',
      '¿Qué hito histórico del fútbol africano corresponde exactamente a la selección del país?',
      'Qual marco histórico do futebol pertence precisamente à seleção do país?',
      'أي إنجاز كروي تاريخي دقيق يخص منتخب البلاد؟'
    ),
    correct: d.footballMilestone,
    distractors: pickDistinctDistractors(c, (_x, df) => df.footballMilestone, `c_${c.code}_fb_mile`),
    explanation: c.funNotes.afcon,
  });

  // REVERSE FOOTBALL (All-Africa Mode ONLY)
  pushQ({
    suffix: 'fb_rev_nick',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 1,
    topicKey: 'fb_nickname',
    source: 'CAF — Fédérations membres',
    countryModeAllowed: false,
    prompt: L(
      `De quel pays africain l’équipe nationale est-elle surnommée « ${c.teamNickname.fr} » ?`,
      `Which African nation’s national football team is nicknamed "${c.teamNickname.en}"?`,
      `¿De qué país africano es conocida la selección como "${c.teamNickname.es}"?`,
      `De qual país africano a seleção é apelidada de "${c.teamNickname.pt}"?`,
      `منتخب أي دولة أفريقية يُلقب بـ«${c.teamNickname.ar}»؟`
    ),
    correct: c.name,
    distractors: pickDistinctDistractors(c, (x) => x.name, `c_${c.code}_fb_rev_nick`),
    explanation: c.funNotes.football,
  });

  pushQ({
    suffix: 'fb_rev_club',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'fb_clubs',
    source: 'CAF Interclubs',
    countryModeAllowed: false,
    prompt: L(
      `Dans quel pays africain évoluent les clubs « ${d.famousClub.fr} » ?`,
      `In which African country do the clubs "${d.famousClub.en}" compete?`,
      `¿En qué país africano compiten los clubes "${d.famousClub.es}"?`,
      `Em qual país africano atuam os clubes "${d.famousClub.pt}"?`,
      `في أي دولة أفريقية يلعب فريقا «${d.famousClub.ar}»؟`
    ),
    correct: c.name,
    distractors: pickDistinctDistractors(c, (x) => x.name, `c_${c.code}_fb_rev_club`),
    explanation: c.funNotes.football,
  });

  pushQ({
    suffix: 'fb_rev_stars',
    category: 'football',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'fb_modern_star',
    source: 'FIFA / CAF',
    countryModeAllowed: false,
    prompt: L(
      `Quel pays a compté dans ses rangs la légende « ${c.footballLegend.fr} » et la star « ${d.modernStar.fr} » ?`,
      `Which country produced both legend "${c.footballLegend.en}" and modern star "${d.modernStar.en}"?`,
      `¿Qué país vio brillar a la leyenda "${c.footballLegend.es}" y a la estrella "${d.modernStar.es}"?`,
      `Qual país revelou a lenda "${c.footballLegend.pt}" e o astro "${d.modernStar.pt}"?`,
      `أي بلد قدّم الأسطورة «${c.footballLegend.ar}» والنجم المعاصر «${d.modernStar.ar}»؟`
    ),
    correct: c.name,
    distractors: pickDistinctDistractors(c, (x) => x.name, `c_${c.code}_fb_rev_stars`),
    explanation: c.funNotes.legend,
  });

  pushQ({
    suffix: 'fb_rev_stad',
    category: 'football',
    subCategory: 'patrimoine_tourisme',
    difficulty: 4,
    topicKey: 'fb_stadium',
    source: 'CAF / Stades homologués',
    countryModeAllowed: false,
    prompt: L(
      `Dans quel pays africain se dresse l’enceinte sportive « ${d.stadium.fr} » ?`,
      `In which African country is "${d.stadium.en}" located?`,
      `¿En qué país africano se encuentra el estadio "${d.stadium.es}"?`,
      `Em qual país africano fica o estádio "${d.stadium.pt}"?`,
      `في أي دولة أفريقية يقع ملعب «${d.stadium.ar}»؟`
    ),
    correct: c.name,
    distractors: pickDistinctDistractors(c, (x) => x.name, `c_${c.code}_fb_rev_stad`),
    explanation: c.funNotes.football,
  });

  pushQ({
    suffix: 'fb_rev_mile',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 4,
    topicKey: 'fb_milestone',
    source: 'Archives FIFA & CAF',
    countryModeAllowed: false,
    prompt: L(
      `Quelle sélection africaine s’est illustrée par cet exploit : « ${d.footballMilestone.fr} » ?`,
      `Which African national team achieved this milestone: "${d.footballMilestone.en}"?`,
      `¿Qué selección africana protagonizó este hito: "${d.footballMilestone.es}"?`,
      `Qual seleção africana alcançou este feito: "${d.footballMilestone.pt}"?`,
      `أي منتخب أفريقي حقق هذا الإنجاز الكروي: «${d.footballMilestone.ar}»؟`
    ),
    correct: c.name,
    distractors: pickDistinctDistractors(c, (x) => x.name, `c_${c.code}_fb_rev_mile`),
    explanation: c.funNotes.afcon,
  });

  // ============================================================================
  // CULTURE — 10 DIRECT QUESTIONS + 3 REVERSE (All-Africa only)
  // ============================================================================

  pushQ({
    suffix: 'cul_dish',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 1,
    topicKey: 'dish_primary',
    source: 'Patrimoine culinaire africain',
    countryModeAllowed: true,
    prompt: L(
      `Quel plat traditionnel est un grand emblème culinaire ${meta.frOf} ?`,
      `Which traditional dish is a culinary emblem of ${n.en}?`,
      `¿Qué plato tradicional es un emblema culinario de ${n.es}?`,
      `Qual prato tradicional é um emblema culinário de ${n.pt}?`,
      `أي طبق تقليدي شهي يُعد رمزاً لمطبخ ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quel plat traditionnel emblématique régale les tables du pays ?',
      'Which iconic traditional dish is a culinary emblem of the country?',
      '¿Qué plato tradicional emblemático destaca en la gastronomía del país?',
      'Qual prato tradicional emblemático é símbolo da culinária do país?',
      'أي طبق تقليدي شهير يُعد رمزاً لمطبخ البلاد؟'
    ),
    correct: c.dish,
    distractors: pickDistinctDistractors(c, (x) => x.dish, `c_${c.code}_cul_dish`),
    explanation: c.funNotes.dish,
  });

  pushQ({
    suffix: 'cul_music',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 1,
    topicKey: 'music_style',
    source: 'Patrimoine musical d’Afrique',
    countryModeAllowed: true,
    prompt: L(
      `Quel style musical, danse ou rythme traditionnel symbolise ${meta.frSubj} ?`,
      `Which music genre, dance, or traditional rhythm is emblematic of ${n.en}?`,
      `¿Qué estilo musical o danza tradicional simboliza a ${n.es}?`,
      `Qual estilo musical ou dança tradicional simboliza ${n.pt}?`,
      `أي فن موسيقي أو رقصة تقليدية ترمز إلى ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quel genre musical, danse ou rythme traditionnel fait vibrer la scène culturelle du pays ?',
      'Which music genre, dance, or traditional rhythm is emblematic of the country?',
      '¿Qué género musical, danza o ritmo tradicional simboliza al país?',
      'Qual gênero musical, dança ou ritmo tradicional simboliza o país?',
      'أي لون موسيقي أو رقصة تقليدية ترمز إلى الثقافة الوطنية؟'
    ),
    correct: c.musicOrDance,
    distractors: pickDistinctDistractors(c, (x) => x.musicOrDance, `c_${c.code}_cul_music`),
    explanation: c.funNotes.music,
  });

  pushQ({
    suffix: 'cul_fest',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'festival',
    source: 'UNESCO & Calendrier culturel africain',
    countryModeAllowed: true,
    prompt: L(
      `Quelle grande fête traditionnelle ou événement culturel célèbre-t-on ${meta.frIn} ?`,
      `Which famous festival or cultural tradition is celebrated in ${n.en}?`,
      `¿Qué gran fiesta tradicional o evento cultural se celebra en ${n.es}?`,
      `Qual grande festa tradicional ou evento cultural é celebrado em ${n.pt}?`,
      `ما هو المهرجان التقليدي أو الثقافي الشهير الذي يُحتفل به في ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quel grand festival culturel ou fête traditionnelle rythme la vie du pays ?',
      'Which famous festival or cultural celebration takes place in the country?',
      '¿Qué gran festival cultural o fiesta tradicional se celebra en el país?',
      'Qual grande festival cultural ou festa tradicional acontece no país?',
      'ما هو المهرجان الثقافي أو الاحتفال التقليدي الشهير في البلاد؟'
    ),
    correct: c.culturalFestival,
    distractors: pickDistinctDistractors(c, (x) => x.culturalFestival, `c_${c.code}_cul_fest`),
    explanation: c.funNotes.culture,
  });

  pushQ({
    suffix: 'cul_lang_off',
    category: 'culture',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'official_lang',
    source: 'Constitution nationale — Langues officielles',
    countryModeAllowed: true,
    prompt: L(
      `Quelle(s) langue(s) officielle(s) reconnaît la constitution ${meta.frOf} ?`,
      `What are the official language(s) of ${n.en}?`,
      `¿Cuál o cuáles son los idiomas oficiales de ${n.es}?`,
      `Qual ou quais são os idiomas oficiais de ${n.pt}?`,
      `ما هي اللغة أو اللغات الرسمية في ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quelle(s) langue(s) officielle(s) la Constitution du pays reconnaît-elle ?',
      'What official language(s) does the country’s Constitution recognize?',
      '¿Qué idioma o idiomas oficiales reconoce la Constitución del país?',
      'Qual ou quais são os idiomas oficiais reconhecidos pela Constituição?',
      'ما اللغة أو اللغات الرسمية المعتمدة في البلاد؟'
    ),
    correct: d.officialLanguages,
    distractors: pickDistinctDistractors(c, (_x, df) => df.officialLanguages, `c_${c.code}_cul_lang_off`),
    explanation: c.funNotes.culture,
  });

  pushQ({
    suffix: 'cul_icon',
    category: 'culture',
    subCategory: 'personnalites_heros',
    difficulty: 2,
    topicKey: 'cultural_icon',
    source: 'Arts, Lettres & Cinéma d’Afrique',
    countryModeAllowed: true,
    prompt: L(
      `Quelles grandes figures artistiques ou littéraires représentent la culture ${meta.frOf} ?`,
      `Which celebrated artists, musicians, or writers represent the culture of ${n.en}?`,
      `¿Qué grandes artistas, músicos o escritores representan la cultura de ${n.es}?`,
      `Quais grandes artistas, músicos ou escritores representam a cultura de ${n.pt}?`,
      `أي شخصيات فنية أو أدبية بارزة تمثل ثقافة ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quelles grandes figures artistiques, musicales ou littéraires rayonnent depuis le pays ?',
      'Which celebrated artists, musicians, or writers represent the country’s culture?',
      '¿Qué grandes figuras artísticas, musicales o literarias representan la cultura del país?',
      'Quais grandes figuras artísticas, musicais ou literárias representam a cultura do país?',
      'أي شخصيات فنية أو موسيقية أو أدبية بارزة تمثل ثقافة البلاد؟'
    ),
    correct: d.culturalIcon,
    distractors: pickDistinctDistractors(c, (_x, df) => df.culturalIcon, `c_${c.code}_cul_icon`),
    explanation: c.funNotes.music,
  });

  pushQ({
    suffix: 'cul_lang_spk',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 3,
    topicKey: 'spoken_lang',
    source: 'Atlas sociolinguistique africain',
    countryModeAllowed: true,
    prompt: L(
      `Quelles grandes langues nationales ou populaires sont parlées au quotidien ${meta.frIn} ?`,
      `Which widely spoken national languages are heard daily in ${n.en}?`,
      `¿Qué grandes lenguas nacionales o populares se hablan a diario en ${n.es}?`,
      `Quais grandes línguas nacionais ou populares são faladas no dia a dia em ${n.pt}?`,
      `ما أبرز اللغات الوطنية والشعبية المحكية يومياً في ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quelles grandes langues nationales ou populaires sont parlées au quotidien dans le pays ?',
      'Which widely spoken national languages are heard daily in the country?',
      '¿Qué grandes lenguas nacionales o populares se hablan a diario en el país?',
      'Quais grandes línguas nacionais ou populares são faladas diariamente no país?',
      'ما أبرز اللغات الوطنية والشعبية المتداولة يومياً في البلاد؟'
    ),
    correct: d.spokenLanguages,
    distractors: pickDistinctDistractors(c, (_x, df) => df.spokenLanguages, `c_${c.code}_cul_lang_spk`),
    explanation: c.funNotes.culture,
  });

  pushQ({
    suffix: 'cul_dish2',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 3,
    topicKey: 'dish_secondary',
    source: 'Patrimoine culinaire africain',
    countryModeAllowed: true,
    prompt: L(
      `En plus de « ${c.dish.fr} », quelle autre spécialité culinaire fait la fierté ${meta.frOf} ?`,
      `Besides "${c.dish.en}", which other local specialty is beloved in ${n.en}?`,
      `Además de "${c.dish.es}", ¿qué otra especialidad culinaria es orgullo de ${n.es}?`,
      `Além de "${c.dish.pt}", qual outra especialidade culinária é orgulho de ${n.pt}?`,
      `إلى جانب «${c.dish.ar}»، أي تخصص مطبخي آخر تشتهر به دولة ${n.ar}؟`
    ),
    countryModePrompt: L(
      `En plus de « ${c.dish.fr} », quelle autre spécialité locale savoure-t-on dans le pays ?`,
      `Besides "${c.dish.en}", which other local specialty is beloved in the country?`,
      `Además de "${c.dish.es}", ¿qué otra especialidad culinaria local se disfruta en el país?`,
      `Além de "${c.dish.pt}", qual outra especialidade culinária local é muito apreciada no país?`,
      `إلى جانب «${c.dish.ar}»، ما التخصص المطبخي الآخر المفضل في البلاد؟`
    ),
    correct: d.secondDish,
    distractors: pickDistinctDistractors(c, (_x, df) => df.secondDish, `c_${c.code}_cul_dish2`),
    explanation: c.funNotes.dish,
  });

  pushQ({
    suffix: 'cul_craft',
    category: 'culture',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'traditional_craft',
    source: 'Artisanat & Patrimoine vivant d’Afrique',
    countryModeAllowed: true,
    prompt: L(
      `Quel savoir-faire artisanal ou vêtement traditionnel est typique ${meta.frOf} ?`,
      `Which traditional craft, textile, or attire is characteristic of ${n.en}?`,
      `¿Qué artesanía o vestimenta tradicional es típica de ${n.es}?`,
      `Qual artesanato ou vestimenta tradicional é típica de ${n.pt}?`,
      `أي حرفة تقليدية أو زيّ تراثي يميز دولة ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quel savoir-faire artisanal, textile ou vêtement traditionnel caractérise le patrimoine du pays ?',
      'Which traditional craft, textile, or attire characterizes the country’s heritage?',
      '¿Qué artesanía, tejido o vestimenta tradicional caracteriza el patrimonio del país?',
      'Qual artesanato, tecido ou traje tradicional caracteriza o patrimônio do país?',
      'أي حرفة تقليدية أو نسيج تراثي يميز هوية البلاد؟'
    ),
    correct: d.traditionalCraft,
    distractors: pickDistinctDistractors(c, (_x, df) => df.traditionalCraft, `c_${c.code}_cul_craft`),
    explanation: c.funNotes.culture,
  });

  pushQ({
    suffix: 'cul_inst',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 4,
    topicKey: 'instrument',
    source: 'Organologie & Musiques traditionnelles',
    countryModeAllowed: true,
    prompt: L(
      `Quel instrument de musique traditionnel occupe une place centrale dans le patrimoine ${meta.frOf} ?`,
      `Which traditional musical instrument holds a central place in ${n.en}’s heritage?`,
      `¿Qué instrumento musical tradicional ocupa un lugar central en ${n.es}?`,
      `Qual instrumento musical tradicional ocupa lugar central no patrimônio de ${n.pt}?`,
      `أي آلة موسيقية تقليدية تحتل مكانة مركزية في تراث ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quel instrument de musique traditionnel occupe une place majeure dans le patrimoine du pays ?',
      'Which traditional musical instrument holds a central place in the country’s musical heritage?',
      '¿Qué instrumento musical tradicional ocupa un lugar central en el patrimonio musical del país?',
      'Qual instrumento musical tradicional ocupa um lugar central no patrimônio do país?',
      'أي آلة موسيقية تقليدية تحتل مكانة محورية في التراث الموسيقي للبلاد؟'
    ),
    correct: d.instrument,
    distractors: pickDistinctDistractors(c, (_x, df) => df.instrument, `c_${c.code}_cul_inst`),
    explanation: c.funNotes.music,
  });

  pushQ({
    suffix: 'cul_val',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 4,
    topicKey: 'cultural_value',
    source: 'UNESCO — Patrimoine culturel immatériel',
    countryModeAllowed: true,
    prompt: L(
      `Quelle valeur culturelle ou pratique vivante caractérise l’esprit communautaire ${meta.frOf} ?`,
      `Which cultural value or living communal practice characterizes ${n.en}?`,
      `¿Qué valor cultural o práctica viva caracteriza el espíritu comunitario de ${n.es}?`,
      `Qual valor cultural ou prática comunitária caracteriza o espírito de ${n.pt}?`,
      `أي قيمة ثقافية أو تقليد اجتماعي حيّ يعكس روح المجتمع في ${n.ar}؟`
    ),
    countryModePrompt: L(
      'Quelle valeur sociale ou tradition communautaire vivante caractérise l’âme du pays ?',
      'Which living cultural value or communal tradition characterizes the spirit of the country?',
      '¿Qué valor cultural o tradición comunitaria viva caracteriza el espíritu del país?',
      'Qual valor cultural ou tradição comunitária viva caracteriza o espírito do país?',
      'أي قيمة ثقافية أو تقليد اجتماعي حيّ يعبر عن روح المجتمع في البلاد؟'
    ),
    correct: d.culturalValue,
    distractors: pickDistinctDistractors(c, (_x, df) => df.culturalValue, `c_${c.code}_cul_val`),
    explanation: c.funNotes.culture,
  });

  // REVERSE CULTURE (All-Africa Mode ONLY)
  pushQ({
    suffix: 'cul_rev_dish',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 1,
    topicKey: 'dish_primary',
    source: 'Patrimoine culinaire africain',
    countryModeAllowed: false,
    prompt: L(
      `Dans la cuisine de quel pays déguste-t-on « ${c.dish.fr} » et « ${d.secondDish.fr} » ?`,
      `Which country’s cuisine features both "${c.dish.en}" and "${d.secondDish.en}"?`,
      `¿En la gastronomía de qué país destacan "${c.dish.es}" y "${d.secondDish.es}"?`,
      `Na culinária de qual país saboreia-se "${c.dish.pt}" e "${d.secondDish.pt}"?`,
      `في مطبخ أي دولة أفريقية نجد طبقَي «${c.dish.ar}» و«${d.secondDish.ar}»؟`
    ),
    correct: c.name,
    distractors: pickDistinctDistractors(c, (x) => x.name, `c_${c.code}_cul_rev_dish`),
    explanation: c.funNotes.dish,
  });

  pushQ({
    suffix: 'cul_rev_mus',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'music_style',
    source: 'Patrimoine musical d’Afrique',
    countryModeAllowed: false,
    prompt: L(
      `Quel pays associe le style « ${c.musicOrDance.fr} » à l’instrument « ${d.instrument.fr} » ?`,
      `Which country blends the style "${c.musicOrDance.en}" with the instrument "${d.instrument.en}"?`,
      `¿Qué país une el estilo "${c.musicOrDance.es}" con el instrumento "${d.instrument.es}"?`,
      `Qual país combina o estilo "${c.musicOrDance.pt}" com o instrumento "${d.instrument.pt}"?`,
      `أي دولة تجمع بين فن «${c.musicOrDance.ar}» وآلة «${d.instrument.ar}»؟`
    ),
    correct: c.name,
    distractors: pickDistinctDistractors(c, (x) => x.name, `c_${c.code}_cul_rev_mus`),
    explanation: c.funNotes.music,
  });

  pushQ({
    suffix: 'cul_rev_icon',
    category: 'culture',
    subCategory: 'personnalites_heros',
    difficulty: 4,
    topicKey: 'cultural_icon',
    source: 'Arts, Lettres & Cinéma d’Afrique',
    countryModeAllowed: false,
    prompt: L(
      `À quel pays appartiennent à la fois les figures « ${d.culturalIcon.fr} » et la tradition « ${c.culturalFestival.fr} » ?`,
      `Which country is home to both "${d.culturalIcon.en}" and "${c.culturalFestival.en}"?`,
      `¿A qué país pertenecen tanto "${d.culturalIcon.es}" como la tradición "${c.culturalFestival.es}"?`,
      `A qual país pertencem "${d.culturalIcon.pt}" e a tradição "${c.culturalFestival.pt}"?`,
      `لأي دولة أفريقية ينتمي كل من «${d.culturalIcon.ar}» وتقليد «${c.culturalFestival.ar}»؟`
    ),
    correct: c.name,
    distractors: pickDistinctDistractors(c, (x) => x.name, `c_${c.code}_cul_rev_icon`),
    explanation: c.funNotes.culture,
  });

  return questions;
}

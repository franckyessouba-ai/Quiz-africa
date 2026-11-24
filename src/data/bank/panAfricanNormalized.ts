import { LocalizedText, QuestionSubCategory, QuizQuestion } from '../../types/quiz';
import { AFRICAN_COUNTRIES, getCountryByCode } from '../countries54';
import { PAN_AFRICAN_QUESTIONS } from '../panAfricanQuestions';
import { COUNTRY_META_54 } from './cafZones';

function norm(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const ALL_COUNTRY_NAMES_NORM = new Set<string>();
for (const c of AFRICAN_COUNTRIES) {
  ALL_COUNTRY_NAMES_NORM.add(norm(c.name.fr));
  ALL_COUNTRY_NAMES_NORM.add(norm(c.name.en));
}

const REVERSE_PROMPT_PATTERNS = [
  /\bquel(le)?s?\s+(?:\d+\s+|deux\s+|trois\s+|quatre\s+|cinq\s+)?(pays|etat|etats|nation|nations|selection|selections|equipe\s+nationale|archipel|territoire)\b/i,
  /\bdans\s+quel(le)?s?\s+(pays|etat|nation|archipel)\b/i,
  /\bde\s+quel(le)?s?\s+(pays|nation|selection)\b/i,
  /\ba\s+quel(le)?s?\s+(pays|nation|selection)\b/i,
  /\bpar\s+quel(le)?s?\s+(pays|nation|selection)\b/i,
  /\bentre\s+quels?\s+(?:deux\s+)?(pays|etats|nations)\b/i,
  /\bou\s+se\s+situe\b/i,
  /\bwhich\s+(?:\d+\s+)?(african\s+)?(countries|country|nation|nations|national\s+team|state|states|island\s+nation)\b/i,
  /\bin\s+which\s+(african\s+)?(country|nation)\b/i,
  /\bfrom\s+which\s+(african\s+)?(country|nation)\b/i,
  /\bbetween\s+which\s+(?:two\s+)?(countries|nations)\b/i,
  /\bwhere\s+is\b/i,
];

function isOptionCountryName(optionFr: string, optionEn: string): boolean {
  const nFr = norm(optionFr);
  const nEn = norm(optionEn);
  if (ALL_COUNTRY_NAMES_NORM.has(nFr) || ALL_COUNTRY_NAMES_NORM.has(nEn)) {
    return true;
  }
  for (const c of AFRICAN_COUNTRIES) {
    const cnFr = norm(c.name.fr);
    const cnEn = norm(c.name.en);
    if (
      nFr.startsWith(`${cnFr} (`) ||
      nEn.startsWith(`${cnEn} (`) ||
      nFr === `le ${cnFr}` ||
      nFr === `la ${cnFr}` ||
      nFr === `l'${cnFr}` ||
      nFr === `l’${cnFr}`
    ) {
      return true;
    }
  }
  return false;
}

function hasParentheticalCountryTag(text: string): boolean {
  const matches = text.match(/\(([^)]+)\)/g);
  if (!matches) return false;
  for (const m of matches) {
    const inner = norm(m.slice(1, -1));
    if (ALL_COUNTRY_NAMES_NORM.has(inner)) return true;
  }
  return false;
}

function answerContainsTargetCountry(q: QuizQuestion): boolean {
  if (q.countryCode === 'AFRICA') return true;
  const c = getCountryByCode(q.countryCode);
  if (!c) return false;
  const ansFr = norm(q.options[q.correctIndex]?.fr || '');
  const ansEn = norm(q.options[q.correctIndex]?.en || '');
  const cnFr = norm(c.name.fr);
  const cnEn = norm(c.name.en);

  // Word-boundary check so "Niger" matches "Niger" and "Nigeria" separately if needed
  const rxFr = new RegExp(`\\b${cnFr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
  const rxEn = new RegExp(`\\b${cnEn.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');

  if (rxFr.test(ansFr) || rxEn.test(ansEn)) {
    return true;
  }

  // Also check if correct answer includes obvious demonym while distractors don't
  // (e.g., "La Lutte sénégalaise" in Senegal mode)
  const demonymRoots: Record<string, RegExp> = {
    SN: /\bsenegalais(e)?\b/i,
    CM: /\bcamerounais(e)?\b/i,
    CI: /\bivoirien(ne)?\b/i,
    GA: /\bgabonais(e)?\b/i,
    CG: /\bcongolais(e)?\b/i,
    CD: /\bcongolais(e)?\b/i,
    GN: /\bguineen(ne)?\b/i,
    ML: /\bmalien(ne)?\b/i,
    BJ: /\bbeninois(e)?\b/i,
    TG: /\btogolais(e)?\b/i,
    BF: /\bburkinabe\b/i,
    NE: /\bnigerien(ne)?\b/i,
    TD: /\btchadien(ne)?\b/i,
    MA: /\bmarocain(e)?\b/i,
    DZ: /\balgerien(ne)?\b/i,
    TN: /\btunisien(ne)?\b/i,
    EG: /\begyptien(ne)?\b/i,
    ET: /\bethiopien(ne)?\b/i,
    KE: /\bkenyan(e)?\b/i,
    NG: /\bnigerian(e)?\b/i,
    GH: /\bghaneen(ne)?\b/i,
    ZA: /\bsud-africain(e)?\b/i,
  };
  const dRx = demonymRoots[q.countryCode];
  if (dRx && dRx.test(ansFr)) {
    return true;
  }

  return false;
}

function inferSubCategory(q: QuizQuestion): QuestionSubCategory {
  if (q.subCategory) return q.subCategory;
  const text = norm(`${q.prompt.fr} ${q.options.map((o) => o.fr).join(' ')} ${q.explanation.fr}`);

  if (/cuisine|plat|boisson|cafe|the |cacao|sauce|riz|thieb|attieke|couscous|tajine|injera|nyembwe|bazeen|poulet|poisson|pain|epice|vanille|banane/.test(text)) {
    return 'gastronomie';
  }
  if (/musique|chanson|chanteur|chanteuse|danse|cinema|film|fespaco|kora|balafon|afrobeat|coupe-decale|makossa|rumba|bikutsi|mbira|griot|festival|theatre|litterature|roman|ecrivain|poete|prix nobel de litterature/.test(text)) {
    return 'musique_divertissement';
  }
  if (q.category === 'football' || /football|can |coupe d'afrique|mondial|stade|ballon d'or|club|olymp|marathon|athlet|rugby|basket|boxe|lutte|caf |fifa|buteur|gardien/.test(text)) {
    return 'football_sports';
  }
  if (/science|medecine|vaccin|satellite|spatial|universite|energie|solaire|barrage|ingenieur|invention|technologie|mobile|internet|fossile|paleontol|toumai|lucy|astronome|mathematique/.test(text)) {
    return 'sciences_innovations';
  }
  if (/economie|monnaie|franc|banque|port |petrole|diamant|cuivre|cobalt|coton|bourse|commerce|marche|mine |industrie|chemin de fer|train|tgv|aeroport/.test(text)) {
    return 'economie_developpement';
  }
  if (/president|premiere femme|constitution|union africaine|cedeao|cemac|sadc|parlement|capitale|drapeau|devise|hymne|prix nobel de la paix|independance|souverain/.test(text)) {
    return q.category === 'history' ? 'histoire_independance' : 'politique_institutions';
  }
  if (/unesco|parc |reserve|monument|mosquee|eglise|palais|pyramide|cascade|chutes|ruines|musee|tourisme|gorille|safari|cathedrale/.test(text)) {
    return 'patrimoine_tourisme';
  }
  if (/empire|royaume|colonie|traite|bataille|adoua|dynastie|pharaon|carthage|siecle|fondation|sankara|lumumba|mandela|nkrumah|senghor|houphouet|behanzin|samory|ranavalona|yennenga/.test(text)) {
    return q.category === 'history' ? 'histoire_independance' : 'personnalites_heros';
  }
  if (/langue|alphabet|masque|textile|tissu|kente|bogolan|pagne|tradition|coutume|proverbe|rite|ubuntu|ecriture|tifinagh|geez/.test(text)) {
    return 'culture_traditions';
  }
  if (q.category === 'geography') return 'geographie_environnement';
  if (q.category === 'history') return 'histoire_independance';
  if (q.category === 'culture') return 'culture_traditions';
  return 'anecdotes_insolites';
}

function inferSource(q: QuizQuestion): string {
  if (q.source) return q.source;
  switch (q.category) {
    case 'football':
      return 'CAF / FIFA — Archives du football africain';
    case 'history':
      return 'UNESCO — Histoire générale de l’Afrique & Archives nationales';
    case 'geography':
      return 'Atlas géographique africain & UICN';
    case 'culture':
      return 'UNESCO — Patrimoine culturel & Arts d’Afrique';
    default:
      return 'Répertoire encyclopédique africain';
  }
}

const PROTECTED_GEO_TERMS_FR = [
  'Lac Tchad',
  'Lac Malawi',
  'Mont Cameroun',
  'Mont Kenya',
  'Fleuve Sénégal',
  'Fleuve Congo',
  'Fleuve Niger',
  'Bassin du Congo',
  'Empire du Mali',
  'Golfe de Guinée',
  'Corne de l’Afrique',
  'Corne de l\'Afrique',
  'Rivière Gambie',
  'Parc national de la Gambie',
];

const PROTECTED_GEO_TERMS_EN = [
  'Lake Chad',
  'Lake Malawi',
  'Mount Cameroon',
  'Mount Kenya',
  'Senegal River',
  'Congo River',
  'Niger River',
  'Congo Basin',
  'Mali Empire',
  'Gulf of Guinea',
  'Horn of Africa',
  'Gambia River',
];

const PROTECTED_GEO_TERMS_ES = [
  'Lago Chad',
  'Lago Malaui',
  'Monte Camerún',
  'Monte Kenia',
  'Río Senegal',
  'Río Congo',
  'Río Níger',
  'Cuenca del Congo',
  'Imperio de Malí',
  'Golfo de Guinea',
  'Cuerno de África',
  'Río Gambia',
];

const PROTECTED_GEO_TERMS_PT = [
  'Lago Chade',
  'Lago Niassa',
  'Lago Malawi',
  'Monte Camarões',
  'Monte Quênia',
  'Rio Senegal',
  'Rio Congo',
  'Rio Níger',
  'Bacia do Congo',
  'Império do Mali',
  'Golfo da Guiné',
  'Chifre da África',
  'Rio Gâmbia',
];

function shieldTerms(text: string, terms: string[], esc: (s: string) => string): { masked: string; saved: Array<[string, string]> } {
  let masked = text;
  const saved: Array<[string, string]> = [];
  terms.forEach((term, idx) => {
    const token = `__GEO_${idx}__`;
    const rx = new RegExp(esc(term), 'gi');
    if (rx.test(masked)) {
      masked = masked.replace(rx, token);
      saved.push([token, term]);
    }
  });
  return { masked, saved };
}

function unshieldTerms(text: string, saved: Array<[string, string]>): string {
  let out = text;
  for (const [token, term] of saved) {
    out = out.replace(new RegExp(token, 'g'), term);
  }
  return out;
}

function buildCountryModePrompt(q: QuizQuestion): LocalizedText | undefined {
  if (q.countryCode === 'AFRICA') return undefined;
  const c = getCountryByCode(q.countryCode);
  const meta = COUNTRY_META_54[q.countryCode];
  if (!c || !meta) return undefined;

  const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // --- French ---
  const shieldedFr = shieldTerms(q.prompt.fr, PROTECTED_GEO_TERMS_FR, esc);
  let fr = shieldedFr.masked;
  const cEscFr = esc(c.name.fr);
  const frReplacements: Array<[RegExp, string]> = [
    [new RegExp(`donné son nom ${esc(meta.frIn)}\\s+actuel`, 'gi'), 'donné son nom au pays actuel'],
    [new RegExp(`\\b${esc(meta.frIn)}\\b`, 'gi'), 'dans le pays'],
    [new RegExp(`\\b${esc(meta.frOf)}\\b`, 'gi'), 'du pays'],
    [new RegExp(`\\b${esc(meta.frSubj)}\\b`, 'gi'), 'le pays'],
    [new RegExp(`(?:en|au|aux|à)\\s+(?:l[’']|la\\s+|le\\s+)?${cEscFr}\\b`, 'gi'), 'dans le pays'],
    [new RegExp(`(?:de\\s+la|de\\s+l[’']|du|des|de)\\s+${cEscFr}\\b`, 'gi'), 'du pays'],
    [new RegExp(`d[’']${cEscFr}\\b`, 'gi'), 'du pays'],
    [new RegExp(`\\(${cEscFr}\\)`, 'gi'), '(le pays)'],
    [new RegExp(`\\b${cEscFr}\\b`, 'gi'), 'le pays'],
  ];
  for (const [rx, rep] of frReplacements) {
    fr = fr.replace(rx, rep);
  }
  fr = unshieldTerms(fr, shieldedFr.saved);
  fr = fr
    .replace(/\bvers\s+l[’']actuelle\s+le\s+pays\b/gi, 'vers le pays actuel')
    .replace(/\bde\s+l[’']actuelle\s+le\s+pays\b/gi, 'du pays actuel')
    .replace(/\bdans\s+l[’']actuelle\s+le\s+pays\b/gi, 'dans le pays actuel')
    .replace(/\bl[’']actuelle\s+le\s+pays\b/gi, 'le pays actuel')
    .replace(/\bactuel(?:le)?\s+le\s+pays\b/gi, 'le pays actuel')
    .replace(/\bdu\s+du\s+pays\b/gi, 'du pays')
    .replace(/\bd[’']\s*(le|du|ce)\s+pays\b/gi, 'du pays')
    .replace(/\bà\s+l[’']?\s*le\s+pays\b/gi, 'dans le pays')
    .replace(/\bà\s+le\s+pays\b/gi, 'dans le pays')
    .replace(/\bde\s+le\s+pays\b/gi, 'du pays')
    .replace(/\bdonné son nom dans le pays actuel\b/gi, 'donné son nom au pays actuel')
    .replace(/\s{2,}/g, ' ')
    .trim();
  fr = fr.charAt(0).toUpperCase() + fr.slice(1);

  // --- English ---
  const shieldedEn = shieldTerms(q.prompt.en, PROTECTED_GEO_TERMS_EN, esc);
  let en = shieldedEn.masked;
  const cEscEn = esc(c.name.en);
  en = en
    .replace(new RegExp(`country name\\s+["“]${cEscEn}["”]`, 'gi'), 'the country’s name')
    .replace(new RegExp(`\\bin\\s+(?:modern|present-day)\\s+(?:the\\s+)?${cEscEn}\\b`, 'gi'), 'in the modern country')
    .replace(new RegExp(`\\binto\\s+(?:modern|present-day)\\s+(?:the\\s+)?${cEscEn}\\b`, 'gi'), 'into the modern country')
    .replace(new RegExp(`\\bto\\s+(?:modern|present-day)\\s+(?:the\\s+)?${cEscEn}\\b`, 'gi'), 'to the modern country')
    .replace(new RegExp(`\\b(?:modern|present-day)\\s+(?:the\\s+)?${cEscEn}\\b`, 'gi'), 'the modern country')
    .replace(new RegExp(`\\bin\\s+the\\s+${cEscEn}\\b`, 'gi'), 'in the country')
    .replace(new RegExp(`\\bof\\s+the\\s+${cEscEn}\\b`, 'gi'), 'of the country')
    .replace(new RegExp(`\\boff\\s+the\\s+${cEscEn}\\b`, 'gi'), 'off the country')
    .replace(new RegExp(`\\bin\\s+${cEscEn}\\b`, 'gi'), 'in the country')
    .replace(new RegExp(`\\bof\\s+${cEscEn}\\b`, 'gi'), 'of the country')
    .replace(new RegExp(`\\bthe\\s+${cEscEn}[’']s\\b`, 'gi'), 'the country’s')
    .replace(new RegExp(`\\b${cEscEn}[’']s\\b`, 'gi'), 'the country’s')
    .replace(new RegExp(`\\bthe\\s+${cEscEn}\\b`, 'gi'), 'the country')
    .replace(new RegExp(`\\b${cEscEn}\\b`, 'gi'), 'the country');
  en = unshieldTerms(en, shieldedEn.saved);
  en = en
    .replace(/\bin\s+(arid\s+)?(northern|southern|eastern|western|central|northeastern|northwestern|southeastern|southwestern)\s+the\s+country\b/gi, 'in the $1$2 region of the country')
    .replace(/\b(northern|southern|eastern|western|central|northeastern|northwestern|southeastern|southwestern)\s+the\s+country\b/gi, 'the $1 region of the country')
    .replace(/\bthe\s+the\s+country\b/gi, 'the country')
    .replace(/\s{2,}/g, ' ')
    .trim();
  en = en.charAt(0).toUpperCase() + en.slice(1);

  // --- Spanish ---
  const shieldedEs = shieldTerms(q.prompt.es, PROTECTED_GEO_TERMS_ES, esc);
  let es = shieldedEs.masked;
  const cEscEs = esc(c.name.es);
  es = es
    .replace(new RegExp(`\\ben\\s+(?:la\\s+|el\\s+)?actual\\s+${cEscEs}\\b`, 'gi'), 'en el país actual')
    .replace(new RegExp(`\\bal\\s+actual\\s+${cEscEs}\\b`, 'gi'), 'al país actual')
    .replace(new RegExp(`\\b(?:la\\s+|el\\s+)?actual\\s+${cEscEs}\\b`, 'gi'), 'el país actual')
    .replace(new RegExp(`\\ben\\s+(?:la\\s+|las\\s+|el\\s+|los\\s+)?${cEscEs}\\b`, 'gi'), 'en el país')
    .replace(new RegExp(`\\bde\\s+(?:la\\s+|las\\s+|los\\s+)${cEscEs}\\b`, 'gi'), 'del país')
    .replace(new RegExp(`\\bdel\\s+${cEscEs}\\b`, 'gi'), 'del país')
    .replace(new RegExp(`\\bde\\s+${cEscEs}\\b`, 'gi'), 'del país')
    .replace(new RegExp(`\\b(?:la\\s+|las\\s+|el\\s+|los\\s+)${cEscEs}\\b`, 'gi'), 'el país')
    .replace(new RegExp(`\\b${cEscEs}\\b`, 'gi'), 'el país');
  es = unshieldTerms(es, shieldedEs.saved);
  es = es
    .replace(/\b(la|las|el|los)\s+el\s+país\b/gi, 'el país')
    .replace(/\bactual\s+el\s+país\b/gi, 'el país actual')
    .replace(/\s{2,}/g, ' ')
    .trim();
  es = es.charAt(0).toUpperCase() + es.slice(1);

  // --- Portuguese ---
  const shieldedPt = shieldTerms(q.prompt.pt, PROTECTED_GEO_TERMS_PT, esc);
  let pt = shieldedPt.masked;
  const cEscPt = esc(c.name.pt);
  pt = pt
    .replace(new RegExp(`\\b(?:na|no|em)\\s+(?:a\\s+|o\\s+)?atual\\s+${cEscPt}\\b`, 'gi'), 'no país atual')
    .replace(new RegExp(`\\b(?:ao|à|a)\\s+atual\\s+${cEscPt}\\b`, 'gi'), 'ao país atual')
    .replace(new RegExp(`\\b(?:a\\s+|o\\s+)?atual\\s+${cEscPt}\\b`, 'gi'), 'o país atual')
    .replace(new RegExp(`\\b(?:ao|aos|à|às)\\s+${cEscPt}\\b`, 'gi'), 'ao país')
    .replace(new RegExp(`\\b(?:em|no|na|nos|nas)\\s+${cEscPt}\\b`, 'gi'), 'no país')
    .replace(new RegExp(`\\b(?:de|do|da|dos|das)\\s+${cEscPt}\\b`, 'gi'), 'do país')
    .replace(new RegExp(`\\b(?:o|a|os|as)\\s+${cEscPt}\\b`, 'gi'), 'o país')
    .replace(new RegExp(`\\b${cEscPt}\\b`, 'gi'), 'o país');
  pt = unshieldTerms(pt, shieldedPt.saved);
  pt = pt
    .replace(/\b(o|a|os|as)\s+o\s+país\b/gi, 'o país')
    .replace(/\bao\s+o\s+país\b/gi, 'ao país')
    .replace(/\batual\s+o\s+país\b/gi, 'o país atual')
    .replace(/\s{2,}/g, ' ')
    .trim();
  pt = pt.charAt(0).toUpperCase() + pt.slice(1);

  let ar = q.prompt.ar.replace(new RegExp(esc(c.name.ar), 'g'), 'البلاد');

  if (fr === q.prompt.fr && en === q.prompt.en) {
    return undefined;
  }

  return { fr, en, es, pt, ar };
}

function shouldAllowInCountryMode(q: QuizQuestion): boolean {
  if (q.countryCode === 'AFRICA') return false;

  const promptNormFr = norm(q.prompt.fr);
  const promptNormEn = norm(q.prompt.en);

  for (const rx of REVERSE_PROMPT_PATTERNS) {
    if (rx.test(promptNormFr) || rx.test(promptNormEn)) {
      return false;
    }
  }

  const correctOpt = q.options[q.correctIndex];
  if (correctOpt && isOptionCountryName(correctOpt.fr, correctOpt.en)) {
    return false;
  }

  if (answerContainsTargetCountry(q)) {
    return false;
  }

  const taggedOptions = q.options.filter((opt) => hasParentheticalCountryTag(opt.fr));
  if (taggedOptions.length >= 2) {
    return false;
  }

  const countryOptionsCount = q.options.filter((opt) => isOptionCountryName(opt.fr, opt.en)).length;
  if (countryOptionsCount >= 3) {
    return false;
  }

  return true;
}

export const NORMALIZED_PAN_AFRICAN_QUESTIONS: QuizQuestion[] = PAN_AFRICAN_QUESTIONS.map((q) => {
  const allowed = shouldAllowInCountryMode(q);
  const cmPrompt = allowed ? buildCountryModePrompt(q) : undefined;
  return {
    ...q,
    subCategory: inferSubCategory(q),
    source: inferSource(q),
    countryModeAllowed: allowed,
    countryModePrompt: cmPrompt,
    topicKey: q.topicKey ?? q.id,
  };
});

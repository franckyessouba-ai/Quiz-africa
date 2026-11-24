import { LocalizedText } from '../../types/quiz';
import { L } from '../countriesPart1';

export type CafZoneId = 'UNAF' | 'WAFU_A' | 'WAFU_B' | 'UNIFFAC' | 'CECAFA' | 'COSAFA';

export interface CountryBankMeta {
  /** Natural French phrase with article for "de..." e.g. "du Gabon", "de l'Algérie", "des Comores", "de Madagascar" */
  frOf: string;
  /** Natural French phrase with article for "en/au/aux..." e.g. "au Gabon", "en Algérie", "aux Comores", "à Madagascar" */
  frIn: string;
  /** Natural French subject e.g. "le Gabon", "l'Algérie", "la Côte d'Ivoire" */
  frSubj: string;
  cafZone: CafZoneId;
  /** Standard UTC offset string e.g. "UTC+1" */
  utcOffset: LocalizedText;
  /** Main regional integration / economic community */
  regionalBloc: LocalizedText;
}

export const CAF_ZONE_LABELS: Record<CafZoneId, LocalizedText> = {
  UNAF: L(
    'UNAF (Union Nord-Africaine de Football)',
    'UNAF (North African Football Union)',
    'UNAF (Unión Norteafricana de Fútbol)',
    'UNAF (União Norte-Africana de Futebol)',
    'اتحاد شمال أفريقيا لكرة القدم (UNAF)'
  ),
  WAFU_A: L(
    'UFOA Zone A (Afrique de l’Ouest — Ouest)',
    'WAFU Zone A (West Africa Zone A)',
    'UFOA Zona A (África Occidental A)',
    'UFOA Zona A (África Ocidental A)',
    'اتحاد غرب أفريقيا المنطقة أ (WAFU-A)'
  ),
  WAFU_B: L(
    'UFOA Zone B (Afrique de l’Ouest — Est)',
    'WAFU Zone B (West Africa Zone B)',
    'UFOA Zona B (África Occidental B)',
    'UFOA Zona B (África Ocidental B)',
    'اتحاد غرب أفريقيا المنطقة ب (WAFU-B)'
  ),
  UNIFFAC: L(
    'UNIFFAC (Afrique centrale)',
    'UNIFFAC (Central African Football Federations)',
    'UNIFFAC (África Central)',
    'UNIFFAC (África Central)',
    'اتحاد وسط أفريقيا لكرة القدم (UNIFFAC)'
  ),
  CECAFA: L(
    'CECAFA (Afrique de l’Est et Centrale)',
    'CECAFA (East & Central Africa)',
    'CECAFA (África Oriental y Central)',
    'CECAFA (África Oriental e Central)',
    'اتحاد سيكافا لشرق ووسط أفريقيا (CECAFA)'
  ),
  COSAFA: L(
    'COSAFA (Afrique australe & îles de l’océan Indien)',
    'COSAFA (Southern Africa)',
    'COSAFA (África Austral)',
    'COSAFA (África Austral)',
    'اتحاد كوسافا لجنوب أفريقيا (COSAFA)'
  ),
};

const BLOC_UMA = L('Union du Maghreb arabe (UMA)', 'Arab Maghreb Union (AMU)', 'Unión del Magreb Árabe (UMA)', 'União do Magrebe Árabe (UMA)', 'اتحاد المغرب العربي');
const BLOC_CEDEAO = L('CEDEAO / ECOWAS', 'ECOWAS / CEDEAO', 'CEDEAO / ECOWAS', 'CEDEAO / ECOWAS', 'المجموعة الاقتصادية لدول غرب أفريقيا (إيكواس)');
const BLOC_CEMAC = L('CEMAC / CEEAC', 'CEMAC / ECCAS', 'CEMAC / CEEAC', 'CEMAC / CEEAC', 'المجموعة الاقتصادية والنقدية لوسط أفريقيا (سيماك)');
const BLOC_CEEAC = L('CEEAC (Communauté économique des États de l’Afrique centrale)', 'ECCAS (Economic Community of Central African States)', 'CEEAC (África Central)', 'CEEAC (África Central)', 'المجموعة الاقتصادية لدول وسط أفريقيا');
const BLOC_SADC = L('SADC (Communauté de développement d’Afrique australe)', 'SADC (Southern African Development Community)', 'SADC (África Austral)', 'SADC (África Austral)', 'مجموعة تنمية الجنوب الأفريقي (سادك)');
const BLOC_EAC = L('EAC (Communauté d’Afrique de l’Est)', 'EAC (East African Community)', 'EAC (Comunidad de África Oriental)', 'EAC (Comunidade da África Oriental)', 'مجموعة شرق أفريقيا (EAC)');
const BLOC_IGAD = L('IGAD (Autorité intergouvernementale pour le développement)', 'IGAD (Horn & East Africa)', 'IGAD (Cuerno de África)', 'IGAD (Chifre da África)', 'الهيئة الحكومية للتنمية (إيغاد)');
const BLOC_COI = L('COI (Commission de l’océan Indien) & SADC', 'IOC (Indian Ocean Commission) & SADC', 'COI (Océano Índico) y SADC', 'COI (Oceano Índico) e SADC', 'لجنة المحيط الهندي وسادك');

const UTC_M1 = L('UTC−1', 'UTC−1', 'UTC−1', 'UTC−1', 'توقيت غرينتش −1');
const UTC_0 = L('UTC+0 (heure de Greenwich)', 'UTC+0 (GMT)', 'UTC+0 (GMT)', 'UTC+0 (GMT)', 'توقيت غرينتش (UTC+0)');
const UTC_1 = L('UTC+1', 'UTC+1', 'UTC+1', 'UTC+1', 'توقيت غرينتش +1');
const UTC_2 = L('UTC+2', 'UTC+2', 'UTC+2', 'UTC+2', 'توقيت غرينتش +2');
const UTC_3 = L('UTC+3', 'UTC+3', 'UTC+3', 'UTC+3', 'توقيت غرينتش +3');
const UTC_4 = L('UTC+4', 'UTC+4', 'UTC+4', 'UTC+4', 'توقيت غرينتش +4');

export const COUNTRY_META_54: Record<string, CountryBankMeta> = {
  DZ: { frOf: 'de l’Algérie', frIn: 'en Algérie', frSubj: 'l’Algérie', cafZone: 'UNAF', utcOffset: UTC_1, regionalBloc: BLOC_UMA },
  AO: { frOf: 'de l’Angola', frIn: 'en Angola', frSubj: 'l’Angola', cafZone: 'COSAFA', utcOffset: UTC_1, regionalBloc: BLOC_SADC },
  BJ: { frOf: 'du Bénin', frIn: 'au Bénin', frSubj: 'le Bénin', cafZone: 'WAFU_B', utcOffset: UTC_1, regionalBloc: BLOC_CEDEAO },
  BW: { frOf: 'du Botswana', frIn: 'au Botswana', frSubj: 'le Botswana', cafZone: 'COSAFA', utcOffset: UTC_2, regionalBloc: BLOC_SADC },
  BF: { frOf: 'du Burkina Faso', frIn: 'au Burkina Faso', frSubj: 'le Burkina Faso', cafZone: 'WAFU_B', utcOffset: UTC_0, regionalBloc: BLOC_CEDEAO },
  BI: { frOf: 'du Burundi', frIn: 'au Burundi', frSubj: 'le Burundi', cafZone: 'CECAFA', utcOffset: UTC_2, regionalBloc: BLOC_EAC },
  CM: { frOf: 'du Cameroun', frIn: 'au Cameroun', frSubj: 'le Cameroun', cafZone: 'UNIFFAC', utcOffset: UTC_1, regionalBloc: BLOC_CEMAC },
  CV: { frOf: 'du Cap-Vert', frIn: 'au Cap-Vert', frSubj: 'le Cap-Vert', cafZone: 'WAFU_A', utcOffset: UTC_M1, regionalBloc: BLOC_CEDEAO },
  CF: { frOf: 'de la République centrafricaine', frIn: 'en République centrafricaine', frSubj: 'la République centrafricaine', cafZone: 'UNIFFAC', utcOffset: UTC_1, regionalBloc: BLOC_CEMAC },
  KM: { frOf: 'des Comores', frIn: 'aux Comores', frSubj: 'les Comores', cafZone: 'COSAFA', utcOffset: UTC_3, regionalBloc: BLOC_COI },
  CG: { frOf: 'du Congo', frIn: 'au Congo', frSubj: 'le Congo', cafZone: 'UNIFFAC', utcOffset: UTC_1, regionalBloc: BLOC_CEMAC },
  CD: { frOf: 'de la RD Congo', frIn: 'en RD Congo', frSubj: 'la RD Congo', cafZone: 'UNIFFAC', utcOffset: L('UTC+1 (Ouest) & UTC+2 (Est)', 'UTC+1 (West) & UTC+2 (East)', 'UTC+1 y UTC+2', 'UTC+1 e UTC+2', 'توقيت +1 غرباً و+2 شرقاً'), regionalBloc: BLOC_CEEAC },
  CI: { frOf: 'de la Côte d’Ivoire', frIn: 'en Côte d’Ivoire', frSubj: 'la Côte d’Ivoire', cafZone: 'WAFU_B', utcOffset: UTC_0, regionalBloc: BLOC_CEDEAO },
  DJ: { frOf: 'de Djibouti', frIn: 'à Djibouti', frSubj: 'Djibouti', cafZone: 'CECAFA', utcOffset: UTC_3, regionalBloc: BLOC_IGAD },
  EG: { frOf: 'de l’Égypte', frIn: 'en Égypte', frSubj: 'l’Égypte', cafZone: 'UNAF', utcOffset: UTC_2, regionalBloc: L('COMESA & Ligue arabe', 'COMESA & Arab League', 'COMESA y Liga Árabe', 'COMESA e Liga Árabe', 'الكوميسا وجامعة الدول العربية') },
  GQ: { frOf: 'de la Guinée équatoriale', frIn: 'en Guinée équatoriale', frSubj: 'la Guinée équatoriale', cafZone: 'UNIFFAC', utcOffset: UTC_1, regionalBloc: BLOC_CEMAC },
  ER: { frOf: 'de l’Érythrée', frIn: 'en Érythrée', frSubj: 'l’Érythrée', cafZone: 'CECAFA', utcOffset: UTC_3, regionalBloc: BLOC_IGAD },
  SZ: { frOf: 'de l’Eswatini', frIn: 'en Eswatini', frSubj: 'l’Eswatini', cafZone: 'COSAFA', utcOffset: UTC_2, regionalBloc: BLOC_SADC },
  ET: { frOf: 'de l’Éthiopie', frIn: 'en Éthiopie', frSubj: 'l’Éthiopie', cafZone: 'CECAFA', utcOffset: UTC_3, regionalBloc: BLOC_IGAD },
  GA: { frOf: 'du Gabon', frIn: 'au Gabon', frSubj: 'le Gabon', cafZone: 'UNIFFAC', utcOffset: UTC_1, regionalBloc: BLOC_CEMAC },
  GM: { frOf: 'de la Gambie', frIn: 'en Gambie', frSubj: 'la Gambie', cafZone: 'WAFU_A', utcOffset: UTC_0, regionalBloc: BLOC_CEDEAO },
  GH: { frOf: 'du Ghana', frIn: 'au Ghana', frSubj: 'le Ghana', cafZone: 'WAFU_B', utcOffset: UTC_0, regionalBloc: BLOC_CEDEAO },
  GN: { frOf: 'de la Guinée', frIn: 'en Guinée', frSubj: 'la Guinée', cafZone: 'WAFU_A', utcOffset: UTC_0, regionalBloc: BLOC_CEDEAO },
  GW: { frOf: 'de la Guinée-Bissau', frIn: 'en Guinée-Bissau', frSubj: 'la Guinée-Bissau', cafZone: 'WAFU_A', utcOffset: UTC_0, regionalBloc: BLOC_CEDEAO },
  KE: { frOf: 'du Kenya', frIn: 'au Kenya', frSubj: 'le Kenya', cafZone: 'CECAFA', utcOffset: UTC_3, regionalBloc: BLOC_EAC },
  LS: { frOf: 'du Lesotho', frIn: 'au Lesotho', frSubj: 'le Lesotho', cafZone: 'COSAFA', utcOffset: UTC_2, regionalBloc: BLOC_SADC },
  LR: { frOf: 'du Liberia', frIn: 'au Liberia', frSubj: 'le Liberia', cafZone: 'WAFU_A', utcOffset: UTC_0, regionalBloc: BLOC_CEDEAO },
  LY: { frOf: 'de la Libye', frIn: 'en Libye', frSubj: 'la Libye', cafZone: 'UNAF', utcOffset: UTC_2, regionalBloc: BLOC_UMA },
  MG: { frOf: 'de Madagascar', frIn: 'à Madagascar', frSubj: 'Madagascar', cafZone: 'COSAFA', utcOffset: UTC_3, regionalBloc: BLOC_COI },
  MW: { frOf: 'du Malawi', frIn: 'au Malawi', frSubj: 'le Malawi', cafZone: 'COSAFA', utcOffset: UTC_2, regionalBloc: BLOC_SADC },
  ML: { frOf: 'du Mali', frIn: 'au Mali', frSubj: 'le Mali', cafZone: 'WAFU_A', utcOffset: UTC_0, regionalBloc: BLOC_CEDEAO },
  MA: { frOf: 'du Maroc', frIn: 'au Maroc', frSubj: 'le Maroc', cafZone: 'UNAF', utcOffset: UTC_1, regionalBloc: BLOC_UMA },
  MU: { frOf: 'de l’Île Maurice', frIn: 'à l’Île Maurice', frSubj: 'l’Île Maurice', cafZone: 'COSAFA', utcOffset: UTC_4, regionalBloc: BLOC_COI },
  MR: { frOf: 'de la Mauritanie', frIn: 'en Mauritanie', frSubj: 'la Mauritanie', cafZone: 'WAFU_A', utcOffset: UTC_0, regionalBloc: BLOC_UMA },
  MZ: { frOf: 'du Mozambique', frIn: 'au Mozambique', frSubj: 'le Mozambique', cafZone: 'COSAFA', utcOffset: UTC_2, regionalBloc: BLOC_SADC },
  NA: { frOf: 'de la Namibie', frIn: 'en Namibie', frSubj: 'la Namibie', cafZone: 'COSAFA', utcOffset: UTC_2, regionalBloc: BLOC_SADC },
  NE: { frOf: 'du Niger', frIn: 'au Niger', frSubj: 'le Niger', cafZone: 'WAFU_B', utcOffset: UTC_1, regionalBloc: BLOC_CEDEAO },
  NG: { frOf: 'du Nigeria', frIn: 'au Nigeria', frSubj: 'le Nigeria', cafZone: 'WAFU_B', utcOffset: UTC_1, regionalBloc: BLOC_CEDEAO },
  UG: { frOf: 'de l’Ouganda', frIn: 'en Ouganda', frSubj: 'l’Ouganda', cafZone: 'CECAFA', utcOffset: UTC_3, regionalBloc: BLOC_EAC },
  RW: { frOf: 'du Rwanda', frIn: 'au Rwanda', frSubj: 'le Rwanda', cafZone: 'CECAFA', utcOffset: UTC_2, regionalBloc: BLOC_EAC },
  ST: { frOf: 'de Sao Tomé-et-Principe', frIn: 'à Sao Tomé-et-Principe', frSubj: 'Sao Tomé-et-Principe', cafZone: 'UNIFFAC', utcOffset: UTC_0, regionalBloc: BLOC_CEEAC },
  SN: { frOf: 'du Sénégal', frIn: 'au Sénégal', frSubj: 'le Sénégal', cafZone: 'WAFU_A', utcOffset: UTC_0, regionalBloc: BLOC_CEDEAO },
  SC: { frOf: 'des Seychelles', frIn: 'aux Seychelles', frSubj: 'les Seychelles', cafZone: 'COSAFA', utcOffset: UTC_4, regionalBloc: BLOC_COI },
  SL: { frOf: 'de la Sierra Leone', frIn: 'en Sierra Leone', frSubj: 'la Sierra Leone', cafZone: 'WAFU_A', utcOffset: UTC_0, regionalBloc: BLOC_CEDEAO },
  SO: { frOf: 'de la Somalie', frIn: 'en Somalie', frSubj: 'la Somalie', cafZone: 'CECAFA', utcOffset: UTC_3, regionalBloc: BLOC_IGAD },
  ZA: { frOf: 'de l’Afrique du Sud', frIn: 'en Afrique du Sud', frSubj: 'l’Afrique du Sud', cafZone: 'COSAFA', utcOffset: UTC_2, regionalBloc: BLOC_SADC },
  SS: { frOf: 'du Soudan du Sud', frIn: 'au Soudan du Sud', frSubj: 'le Soudan du Sud', cafZone: 'CECAFA', utcOffset: UTC_2, regionalBloc: BLOC_EAC },
  SD: { frOf: 'du Soudan', frIn: 'au Soudan', frSubj: 'le Soudan', cafZone: 'CECAFA', utcOffset: UTC_2, regionalBloc: BLOC_IGAD },
  TZ: { frOf: 'de la Tanzanie', frIn: 'en Tanzanie', frSubj: 'la Tanzanie', cafZone: 'CECAFA', utcOffset: UTC_3, regionalBloc: BLOC_EAC },
  TD: { frOf: 'du Tchad', frIn: 'au Tchad', frSubj: 'le Tchad', cafZone: 'UNIFFAC', utcOffset: UTC_1, regionalBloc: BLOC_CEMAC },
  TG: { frOf: 'du Togo', frIn: 'au Togo', frSubj: 'le Togo', cafZone: 'WAFU_B', utcOffset: UTC_0, regionalBloc: BLOC_CEDEAO },
  TN: { frOf: 'de la Tunisie', frIn: 'en Tunisie', frSubj: 'la Tunisie', cafZone: 'UNAF', utcOffset: UTC_1, regionalBloc: BLOC_UMA },
  ZM: { frOf: 'de la Zambie', frIn: 'en Zambie', frSubj: 'la Zambie', cafZone: 'COSAFA', utcOffset: UTC_2, regionalBloc: BLOC_SADC },
  ZW: { frOf: 'du Zimbabwe', frIn: 'au Zimbabwe', frSubj: 'le Zimbabwe', cafZone: 'COSAFA', utcOffset: UTC_2, regionalBloc: BLOC_SADC },
};

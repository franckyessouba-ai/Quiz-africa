import { AvatarId, LocalizedText } from '../types/quiz';

export interface AvatarOption {
  id: AvatarId;
  image: string;
  emojiFallback: string;
  accentColor: string;
  label: LocalizedText;
}

export const TROPHY_CREST_IMAGE = '/src/assets/images/africa_trophy_crest_1795473637711.jpg';
export const HOME_BACKDROP_IMAGE = '/src/assets/images/africa_quiz_backdrop_1795728946559.jpg';

export const AVATAR_OPTIONS: AvatarOption[] = [
  {
    id: 'lion',
    image: '/src/assets/images/avatar_lion_1795473636785.jpg',
    emojiFallback: '🦁',
    accentColor: '#F5B700',
    label: {
      fr: 'Lion',
      en: 'Lion',
      es: 'León',
      pt: 'Leão',
      ar: 'الأسد',
    },
  },
  {
    id: 'eagle',
    image: '/src/assets/images/avatar_eagle_1795473636977.jpg',
    emojiFallback: '🦅',
    accentColor: '#009E49',
    label: {
      fr: 'Aigle',
      en: 'Eagle',
      es: 'Águila',
      pt: 'Águia',
      ar: 'النسر',
    },
  },
  {
    id: 'panther',
    image: '/src/assets/images/avatar_panther_1795473637385.jpg',
    emojiFallback: '🐆',
    accentColor: '#D92B2B',
    label: {
      fr: 'Panthère',
      en: 'Panther',
      es: 'Pantera',
      pt: 'Pantera',
      ar: 'الفهد',
    },
  },
  {
    id: 'footballer',
    image: '/src/assets/images/avatar_footballer_1795473638096.jpg',
    emojiFallback: '⚽',
    accentColor: '#10B981',
    label: {
      fr: 'Footballeur',
      en: 'Footballer',
      es: 'Futbolista',
      pt: 'Futebolista',
      ar: 'لاعب كرة القدم',
    },
  },
];

export function getAvatarOption(id: AvatarId): AvatarOption {
  return AVATAR_OPTIONS.find((a) => a.id === id) || AVATAR_OPTIONS[0];
}

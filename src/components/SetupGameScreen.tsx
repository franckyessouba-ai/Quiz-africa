import {
  ArrowLeft,
  Compass,
  Globe2,
  Landmark,
  Palette,
  Play,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { useState } from 'react';
import { getCountryByCode, getCountryName } from '../data/countries54';
import { getUiText } from '../i18n/translations';
import { CategorySelection, Language, PlayScope } from '../types/quiz';
import { soundEngine } from '../utils/sound';
import { CountrySelector } from './CountrySelector';

interface SetupGameScreenProps {
  language: Language;
  initialScope: PlayScope;
  initialCategory: CategorySelection;
  onBack: () => void;
  onStartGame: (playScope: PlayScope, category: CategorySelection) => void;
}

export function SetupGameScreen({
  language,
  initialScope,
  initialCategory,
  onBack,
  onStartGame,
}: SetupGameScreenProps) {
  const [scopeType, setScopeType] = useState<'all' | 'country'>(initialScope.type);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>(
    initialScope.type === 'country' ? initialScope.countryCode : 'MA'
  );
  const [category, setCategory] = useState<CategorySelection>(initialCategory);

  const t = getUiText(language);
  const chosenCountry = getCountryByCode(selectedCountryCode);
  const chosenCountryName = getCountryName(chosenCountry, language);

  const categories: Array<{
    id: CategorySelection;
    title: string;
    icon: typeof Trophy;
    accent: string;
  }> = [
    {
      id: 'football',
      title: t.catFootball,
      icon: Trophy,
      accent: 'text-[var(--qa-green-text)] bg-[#009E49]/15 border-[#009E49]/40',
    },
    {
      id: 'culture',
      title: t.catCulture,
      icon: Palette,
      accent: 'text-[var(--qa-gold-text)] bg-[#F5B700]/15 border-[#F5B700]/45',
    },
    {
      id: 'history',
      title: t.catHistory,
      icon: Landmark,
      accent: 'text-[#E8590C] bg-[#D92B2B]/15 border-[#D92B2B]/40',
    },
    {
      id: 'geography',
      title: t.catGeography,
      icon: Compass,
      accent: 'text-[var(--qa-blue-text)] bg-[#0072CE]/15 border-[#0072CE]/40',
    },
    {
      id: 'diaspora',
      title: t.catDiaspora,
      icon: Globe2,
      accent: 'text-[var(--qa-gold-text)] bg-[#9E3200]/15 border-[#F5B700]/40',
    },
    {
      id: 'mixed',
      title: t.catMixed,
      icon: Sparkles,
      accent: 'text-[var(--qa-gold-text)] bg-gradient-to-br from-[#009E49]/20 to-[#0072CE]/20 border-[#F5B700]/50',
    },
  ];

  const handleLaunch = () => {
    soundEngine.playClick();
    const playScope: PlayScope =
      scopeType === 'all'
        ? { type: 'all' }
        : { type: 'country', countryCode: selectedCountryCode };
    onStartGame(playScope, category);
  };

  return (
    <main className="max-w-3xl mx-auto px-4 pt-5 pb-14 space-y-6">
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => {
            soundEngine.playClick();
            onBack();
          }}
          className="min-h-[44px] px-4 rounded-xl bg-[var(--qa-card)] border border-[var(--qa-border)] text-sm font-bold text-[var(--qa-text)] hover:border-[var(--qa-border-strong)] inline-flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.backHome}</span>
        </button>
        <h1 className="font-display font-extrabold text-xl sm:text-2xl text-[var(--qa-text)] text-end">
          {t.setupTitle}
        </h1>
      </div>

      {/* Step 1: Choose Play Country */}
      <section className="rounded-3xl bg-[var(--qa-card)] border border-[var(--qa-border)] p-4 sm:p-6 space-y-4 shadow-xl">
        <h2 className="font-display font-bold text-base sm:text-lg text-[var(--qa-gold-text)]">
          {t.setupStep1}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Option A: ALL OF AFRICA */}
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              setScopeType('all');
            }}
            className={`min-h-[76px] p-4 rounded-2xl border text-start flex items-center gap-3.5 transition-all active:scale-[0.98] ${
              scopeType === 'all'
                ? 'bg-[#009E49] border-[#F5B700] text-white shadow-md'
                : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text)] hover:border-[var(--qa-border-strong)]'
            }`}
          >
            <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center shrink-0">
              <Globe2
                className={`w-6 h-6 ${scopeType === 'all' ? 'text-white' : 'text-[var(--qa-green-text)]'}`}
              />
            </div>
            <span className="font-display font-extrabold text-base sm:text-lg">
              🌍 {t.optionAllAfrica}
            </span>
          </button>

          {/* Option B: CHOOSE ONE COUNTRY TO PLAY */}
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              setScopeType('country');
            }}
            className={`min-h-[76px] p-4 rounded-2xl border text-start flex items-center gap-3.5 transition-all active:scale-[0.98] ${
              scopeType === 'country'
                ? 'bg-[#009E49] border-[#F5B700] text-white shadow-md'
                : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text)] hover:border-[var(--qa-border-strong)]'
            }`}
          >
            <div className="w-11 h-11 rounded-xl bg-[#F5B700]/20 border border-[#F5B700]/50 flex items-center justify-center shrink-0 text-2xl">
              {chosenCountry.flag}
            </div>
            <div className="min-w-0">
              <span className="block font-display font-extrabold text-base sm:text-lg">
                {t.optionOneCountry}
              </span>
              {scopeType === 'country' && (
                <span className="inline-block mt-0.5 text-xs font-bold text-[#FFE082]">
                  {chosenCountry.flag} {chosenCountryName}
                </span>
              )}
            </div>
          </button>
        </div>

        {scopeType === 'country' && (
          <div className="pt-2">
            <CountrySelector
              language={language}
              selectedCode={selectedCountryCode}
              onSelect={setSelectedCountryCode}
              maxHeightClass="max-h-60"
            />
          </div>
        )}
      </section>

      {/* Step 2: Category Picker */}
      <section className="rounded-3xl bg-[var(--qa-card)] border border-[var(--qa-border)] p-4 sm:p-6 space-y-4 shadow-xl">
        <h2 className="font-display font-bold text-base sm:text-lg text-[var(--qa-gold-text)]">
          {t.setupStep2}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const active = category === cat.id;
            const isMixed = cat.id === 'mixed';
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  setCategory(cat.id);
                }}
                className={`min-h-[76px] p-3.5 rounded-2xl border text-start flex items-center gap-3.5 transition-all active:scale-[0.98] ${
                  isMixed ? 'sm:col-span-2' : ''
                } ${
                  active
                    ? 'bg-[#009E49] border-[#F5B700] text-white shadow-md'
                    : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text)] hover:border-[var(--qa-border-strong)]'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${
                    active ? 'bg-white/15 border-white/30 text-white' : cat.accent
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-display font-bold text-sm sm:text-base flex items-center gap-2">
                  <span>{cat.title}</span>
                  {cat.id === 'diaspora' && (
                    <span className="px-2 py-0.5 rounded-md bg-[#F5B700]/25 text-[#FFE082] text-xs font-black">
                      ✈️ 🌍
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Launch Match CTA */}
      <button
        type="button"
        onClick={handleLaunch}
        className="w-full min-h-[60px] px-6 rounded-2xl bg-gradient-to-r from-[#009E49] via-[#00B253] to-[#008C40] hover:brightness-110 active:scale-[0.98] text-white font-display font-extrabold text-lg sm:text-xl tracking-wide shadow-[0_10px_28px_rgba(0,158,73,0.35)] border border-[#F5B700]/60 flex items-center justify-center gap-3 transition-all"
      >
        <Play className="w-6 h-6 text-[#F5B700] fill-current" />
        <span>{t.launchQuizBtn}</span>
        {scopeType === 'country' && (
          <span className="text-lg">{chosenCountry.flag}</span>
        )}
      </button>
    </main>
  );
}

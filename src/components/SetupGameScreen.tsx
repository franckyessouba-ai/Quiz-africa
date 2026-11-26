import {
  ArrowLeft,
  Compass,
  Globe2,
  Landmark,
  Palette,
  Play,
  Sparkles,
  Trophy,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { HOME_BACKDROP_IMAGE } from '../data/avatars';
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
  const [countryModalOpen, setCountryModalOpen] = useState(false);

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
      accent:
        'text-[var(--qa-gold-text)] bg-gradient-to-br from-[#009E49]/20 to-[#0072CE]/20 border-[#F5B700]/50',
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
    <main className="relative isolate w-full flex-1 min-h-0 overflow-hidden">
      {/* Unified Atmospheric Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <img
          src={HOME_BACKDROP_IMAGE}
          alt=""
          className="w-full h-full object-cover object-center opacity-45 select-none"
        />
        <div className="absolute inset-0 bg-[#0A100D]/75" />
      </div>

      <div className="h-full max-w-3xl mx-auto px-3.5 sm:px-6 pt-2.5 sm:pt-4 pb-3.5 sm:pb-5 flex flex-col justify-between gap-2.5 sm:gap-3.5">
        {/* Top Row */}
        <div className="flex items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onBack();
            }}
            className="min-h-[42px] px-3.5 rounded-xl bg-[var(--qa-card)]/90 border border-[var(--qa-border)] text-sm font-bold text-[var(--qa-text)] hover:border-[var(--qa-border-strong)] inline-flex items-center gap-2 transition-colors backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backHome}</span>
          </button>
          <h1 className="font-display font-extrabold text-lg sm:text-2xl text-[var(--qa-text)] text-end truncate">
            {t.setupTitle}
          </h1>
        </div>

        {/* Center Configuration Cards */}
        <div className="flex-1 min-h-0 flex flex-col justify-center gap-2.5 sm:gap-4">
          {/* Step 1: Choose Play Country */}
          <section className="rounded-2xl sm:rounded-3xl bg-[var(--qa-card)]/92 border border-[var(--qa-border)] p-3.5 sm:p-5 space-y-2.5 sm:space-y-3 shadow-xl backdrop-blur-sm">
            <h2 className="font-display font-bold text-sm sm:text-base text-[var(--qa-gold-text)]">
              {t.setupStep1}
            </h2>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {/* Option A: ALL OF AFRICA */}
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  setScopeType('all');
                }}
                className={`min-h-[62px] sm:min-h-[72px] p-3 sm:p-3.5 rounded-2xl border text-start flex items-center gap-2.5 sm:gap-3 transition-all active:scale-[0.98] ${
                  scopeType === 'all'
                    ? 'bg-[#009E49] border-[#F5B700] text-white shadow-md'
                    : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text)] hover:border-[var(--qa-border-strong)]'
                }`}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center shrink-0">
                  <Globe2
                    className={`w-5 h-5 ${scopeType === 'all' ? 'text-white' : 'text-[var(--qa-green-text)]'}`}
                  />
                </div>
                <span className="font-display font-extrabold text-xs sm:text-base leading-tight">
                  🌍 {t.optionAllAfrica}
                </span>
              </button>

              {/* Option B: CHOOSE ONE COUNTRY TO PLAY */}
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  setScopeType('country');
                  setCountryModalOpen(true);
                }}
                className={`min-h-[62px] sm:min-h-[72px] p-3 sm:p-3.5 rounded-2xl border text-start flex items-center gap-2.5 sm:gap-3 transition-all active:scale-[0.98] ${
                  scopeType === 'country'
                    ? 'bg-[#009E49] border-[#F5B700] text-white shadow-md'
                    : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text)] hover:border-[var(--qa-border-strong)]'
                }`}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F5B700]/20 border border-[#F5B700]/50 flex items-center justify-center shrink-0 text-xl sm:text-2xl">
                  {chosenCountry.flag}
                </div>
                <div className="min-w-0">
                  <span className="block font-display font-extrabold text-xs sm:text-base leading-tight truncate">
                    {t.optionOneCountry}
                  </span>
                  <span className="block mt-0.5 text-[11px] sm:text-xs font-bold text-[#FFE082] truncate">
                    {scopeType === 'country'
                      ? `${chosenCountry.flag} ${chosenCountryName}`
                      : '54 pays'}
                  </span>
                </div>
              </button>
            </div>
          </section>

          {/* Step 2: Category Picker */}
          <section className="rounded-2xl sm:rounded-3xl bg-[var(--qa-card)]/92 border border-[var(--qa-border)] p-3.5 sm:p-5 space-y-2.5 sm:space-y-3 shadow-xl backdrop-blur-sm">
            <h2 className="font-display font-bold text-sm sm:text-base text-[var(--qa-gold-text)]">
              {t.setupStep2}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const active = category === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      setCategory(cat.id);
                    }}
                    className={`min-h-[54px] sm:min-h-[68px] p-2.5 sm:p-3 rounded-2xl border text-start flex items-center gap-2.5 transition-all active:scale-[0.98] ${
                      active
                        ? 'bg-[#009E49] border-[#F5B700] text-white shadow-md'
                        : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text)] hover:border-[var(--qa-border-strong)]'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl border flex items-center justify-center shrink-0 ${
                        active ? 'bg-white/15 border-white/30 text-white' : cat.accent
                      }`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="font-display font-bold text-xs sm:text-sm leading-tight line-clamp-2">
                      {cat.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        {/* Fixed Bottom Launch Match CTA */}
        <button
          type="button"
          onClick={handleLaunch}
          className="shrink-0 w-full min-h-[52px] sm:min-h-[58px] px-6 rounded-2xl bg-gradient-to-r from-[#009E49] via-[#00B253] to-[#008C40] hover:brightness-110 active:scale-[0.98] text-white font-display font-extrabold text-base sm:text-xl tracking-wide shadow-[0_10px_28px_rgba(0,158,73,0.35)] border border-[#F5B700]/60 flex items-center justify-center gap-3 transition-all"
        >
          <Play className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5B700] fill-current" />
          <span>{t.launchQuizBtn}</span>
          {scopeType === 'country' && <span className="text-lg">{chosenCountry.flag}</span>}
        </button>
      </div>

      {/* Country Picker Overlay Modal (keeps main Setup screen completely fixed with zero scroll) */}
      {countryModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setCountryModalOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-3xl bg-[var(--qa-card)] border border-[#F5B700]/50 p-4 sm:p-5 shadow-2xl space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-display font-extrabold text-base sm:text-lg text-[var(--qa-gold-text)]">
                {t.optionOneCountry}
              </h3>
              <button
                type="button"
                onClick={() => setCountryModalOpen(false)}
                aria-label={t.closeBtn}
                className="min-h-[38px] min-w-[38px] rounded-xl bg-[var(--qa-inset)] border border-[var(--qa-border)] flex items-center justify-center text-[var(--qa-muted)] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <CountrySelector
              language={language}
              selectedCode={selectedCountryCode}
              onSelect={(code) => {
                setSelectedCountryCode(code);
                setScopeType('country');
                setCountryModalOpen(false);
              }}
              maxHeightClass="max-h-[55dvh]"
            />
          </div>
        </div>
      )}
    </main>
  );
}

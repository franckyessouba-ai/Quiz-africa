import { ArrowRight, Check, ShieldCheck, WifiOff } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { AVATAR_OPTIONS, TROPHY_CREST_IMAGE } from '../data/avatars';
import { SELAH_BRAND } from '../data/brand';
import { getCountryByCode, getCountryName } from '../data/countries54';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { getUiText, LANGUAGE_OPTIONS } from '../i18n/translations';
import { AvatarId, Language } from '../types/quiz';
import { soundEngine } from '../utils/sound';
import { AvatarBadge } from './AvatarBadge';
import { CountrySelector } from './CountrySelector';

interface OnboardingScreenProps {
  mode: 'create' | 'edit';
  initialName?: string;
  initialLanguage: Language;
  initialCountryCode?: string;
  initialAvatar?: AvatarId;
  onLanguagePreview: (lang: Language) => void;
  onSubmit: (data: {
    name: string;
    language: Language;
    countryCode: string;
    avatar: AvatarId;
  }) => void;
  onCancel?: () => void;
  onOpenAbout?: () => void;
}

export function OnboardingScreen({
  mode,
  initialName = '',
  initialLanguage,
  initialCountryCode = 'CM',
  initialAvatar = 'lion',
  onLanguagePreview,
  onSubmit,
  onCancel,
  onOpenAbout,
}: OnboardingScreenProps) {
  const [name, setName] = useState(initialName);
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [countryCode, setCountryCode] = useState(initialCountryCode);
  const [avatar, setAvatar] = useState<AvatarId>(initialAvatar);
  const [error, setError] = useState('');
  const [crestError, setCrestError] = useState(false);
  const isOnline = useOnlineStatus();

  const t = getUiText(language);
  const selectedCountry = getCountryByCode(countryCode);
  const selectedCountryName = getCountryName(selectedCountry, language);

  const handleLanguageSelect = (lang: Language) => {
    soundEngine.playClick();
    setLanguage(lang);
    onLanguagePreview(lang);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      soundEngine.playWrong();
      setError(t.nameRequired);
      return;
    }
    soundEngine.playClick();
    onSubmit({
      name: trimmed,
      language,
      countryCode,
      avatar,
    });
  };

  return (
    <div className="min-h-screen africa-arena-bg text-[var(--qa-text)] pb-12">
      <div className="h-[4px] w-full panafrica-stripe" />
      {!isOnline && (
        <div className="bg-[#F5B700] text-[#0A100D] px-3 py-1.5 text-center">
          <div className="max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs font-extrabold">
            <WifiOff className="w-3.5 h-3.5 shrink-0" />
            <span>{t.offlineModeBanner}</span>
          </div>
        </div>
      )}



      <div className="max-w-2xl mx-auto px-4 pt-3 sm:pt-5">
        {/* Hero Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl overflow-hidden border border-[#F5B700]/60 bg-[var(--qa-card)] shadow-lg mb-3">
            {!crestError ? (
              <img
                src={TROPHY_CREST_IMAGE}
                alt={t.appTitle}
                referrerPolicy="no-referrer"
                onError={() => setCrestError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-4xl">🏆</span>
            )}
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-[var(--qa-text)]">
            {mode === 'create' ? t.welcomeTitle : t.editProfileTitle}
          </h1>
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="bg-[var(--qa-card)] border border-[var(--qa-border)] rounded-3xl p-4 sm:p-6 shadow-2xl space-y-6"
        >
          {/* 1. Language Picker */}
          <section className="space-y-2.5">
            <label className="block font-display font-bold text-sm sm:text-base text-[var(--qa-gold-text)]">
              {t.languageLabel}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {LANGUAGE_OPTIONS.map((opt) => {
                const active = language === opt.code;
                return (
                  <button
                    key={opt.code}
                    type="button"
                    onClick={() => handleLanguageSelect(opt.code)}
                    className={`min-h-[52px] px-3 py-2.5 rounded-2xl border flex items-center justify-center gap-2 font-semibold text-sm transition-all active:scale-[0.97] ${
                      active
                        ? 'bg-[#009E49] border-[#F5B700] text-white shadow-md'
                        : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text)] hover:border-[var(--qa-border-strong)]'
                    }`}
                  >
                    <span className="text-xl leading-none">{opt.flag}</span>
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* 2. Mandatory Name Input */}
          <section className="space-y-2">
            <label
              htmlFor="player-name-input"
              className="block font-display font-bold text-sm sm:text-base text-[var(--qa-gold-text)]"
            >
              {t.nameLabel}
            </label>
            <input
              id="player-name-input"
              type="text"
              maxLength={28}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError('');
              }}
              placeholder={t.namePlaceholder}
              className="w-full min-h-[54px] px-4 py-3 rounded-2xl bg-[var(--qa-inset)] border border-[var(--qa-border-strong)] text-[var(--qa-text)] text-base sm:text-lg font-semibold placeholder-[var(--qa-muted)] focus:outline-none focus:border-[#F5B700] transition-colors"
            />
            {error && (
              <p className="text-sm font-semibold text-[#D92B2B]">{error}</p>
            )}
          </section>

          {/* 3. Avatar Choice */}
          <section className="space-y-2.5">
            <label className="block font-display font-bold text-sm sm:text-base text-[var(--qa-gold-text)]">
              {t.avatarLabel}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {AVATAR_OPTIONS.map((opt) => {
                const active = avatar === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      setAvatar(opt.id);
                    }}
                    className={`relative p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all active:scale-[0.97] ${
                      active
                        ? 'bg-[#009E49]/20 border-[#F5B700] text-[var(--qa-text)] shadow-[0_0_0_1px_rgba(245,183,0,0.5)]'
                        : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text-soft)] hover:border-[var(--qa-border-strong)]'
                    }`}
                  >
                    {active && (
                      <span className="absolute top-2 end-2 w-5 h-5 rounded-full bg-[#F5B700] text-[#0A100D] flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    )}
                    <AvatarBadge avatarId={opt.id} size="lg" />
                    <span className="text-xs sm:text-sm font-bold">{opt.label[language]}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* 4. Identity Country (54 African nations) */}
          <section className="space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <label className="font-display font-bold text-sm sm:text-base text-[var(--qa-gold-text)]">
                {t.identityCountryLabel}
              </label>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[var(--qa-inset)] border border-[#F5B700]/50 text-xs font-bold text-[var(--qa-text)]">
                <span className="text-base leading-none">{selectedCountry.flag}</span>
                <span>{selectedCountryName}</span>
              </span>
            </div>

            <CountrySelector
              language={language}
              selectedCode={countryCode}
              onSelect={setCountryCode}
              maxHeightClass="max-h-56"
            />
          </section>

          {/* Submit Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            {mode === 'edit' && onCancel && (
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  onCancel();
                }}
                className="sm:w-1/3 min-h-[56px] px-5 rounded-2xl bg-[var(--qa-inset)] border border-[var(--qa-border)] text-[var(--qa-text)] font-display font-bold text-base hover:border-[var(--qa-border-strong)] transition-colors"
              >
                {t.cancel}
              </button>
            )}
            <button
              type="submit"
              className="flex-1 min-h-[58px] px-6 rounded-2xl bg-gradient-to-r from-[#009E49] via-[#00B253] to-[#008C40] hover:brightness-110 active:scale-[0.98] text-white font-display font-extrabold text-lg tracking-wide shadow-[0_8px_24px_rgba(0,158,73,0.35)] border border-[#F5B700]/50 flex items-center justify-center gap-2.5 transition-all"
            >
              <ShieldCheck className="w-5 h-5 text-[#F5B700]" />
              <span>{mode === 'create' ? t.startPlayingCta : t.saveProfileCta}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>

        <footer className="mt-6 text-center">
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onOpenAbout?.();
            }}
            className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium text-[var(--qa-muted)] hover:text-[var(--qa-text)] transition-colors"
          >
            <img
              src={SELAH_BRAND.symbolSrc}
              alt={SELAH_BRAND.name}
              className="w-4 h-4 object-contain mix-blend-screen shrink-0 select-none"
            />
            <span>{SELAH_BRAND.footerLine}</span>
            <span className="text-[#38BDF8] font-semibold">· À propos</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

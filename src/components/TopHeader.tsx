import type { User } from 'firebase/auth';
import {
  CheckCircle2,
  Flame,
  Globe,
  Trophy,
  UserCog,
  Volume2,
  VolumeX,
  WifiOff,
} from 'lucide-react';
import { useState } from 'react';
import { getCountryByCode, getCountryName } from '../data/countries54';
import { getUiText, LANGUAGE_OPTIONS } from '../i18n/translations';
import { Language, PlayerProfile } from '../types/quiz';
import { getPlayerLevelInfo } from '../utils/levelSystem';
import { soundEngine } from '../utils/sound';
import { AvatarBadge } from './AvatarBadge';
import { PWAInstallButton } from './PWAInstallButton';

interface TopHeaderProps {
  player: PlayerProfile;
  firebaseUser: User | null;
  isOnline: boolean;
  pendingSyncCount: number;
  justSyncedNotice: boolean;
  onEditProfile: () => void;
  onChangeLanguage: (lang: Language) => void;
  onSignInGoogle: () => Promise<void>;
  onSignOutGoogle: () => Promise<void>;
  onGoHome?: () => void;
}

export function TopHeader({
  player,
  firebaseUser,
  isOnline,
  pendingSyncCount,
  justSyncedNotice,
  onEditProfile,
  onChangeLanguage,
  onSignInGoogle,
  onSignOutGoogle,
  onGoHome,
}: TopHeaderProps) {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [muted, setMuted] = useState(() => soundEngine.isMuted());

  const t = getUiText(player.language);
  const identityCountry = getCountryByCode(player.countryCode);
  const identityCountryName = getCountryName(identityCountry, player.language);
  const currentLangOption =
    LANGUAGE_OPTIONS.find((l) => l.code === player.language) || LANGUAGE_OPTIONS[0];
  const levelInfo = getPlayerLevelInfo(player.totalScore, player.language);

  const handleToggleMute = () => {
    const next = soundEngine.toggleMute();
    setMuted(next);
    if (!next) soundEngine.playClick();
  };

  return (
    <header
      className="sticky top-0 z-30 backdrop-blur-md border-b border-[var(--qa-border)] transition-colors"
      style={{ backgroundColor: 'var(--qa-header-bg)' }}
    >
      <div className="h-[4px] w-full panafrica-stripe" />

      {/* Offline Mode Top Banner */}
      {!isOnline && (
        <div className="bg-[#F5B700] text-[#0A100D] px-3 py-1.5 text-center">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 text-xs font-extrabold tracking-wide">
            <span className="inline-flex items-center gap-1.5">
              <WifiOff className="w-3.5 h-3.5 shrink-0" />
              <span>{t.offlineModeBanner}</span>
            </span>
            <span className="font-semibold text-[11px] opacity-90">
              {t.offlineModeDesc}
            </span>
            {pendingSyncCount > 0 && (
              <span className="px-2 py-0.5 rounded bg-[#0A100D]/15 font-mono-num text-[11px]">
                {t.pendingSyncBadge(pendingSyncCount)}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Back Online Synced Banner */}
      {isOnline && justSyncedNotice && (
        <div className="bg-[#009E49] text-white px-3 py-1.5 text-center">
          <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-xs font-bold">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{t.scoresSyncedNotice}</span>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-3 sm:px-5 py-1.5 sm:py-2 flex items-center justify-between gap-2">
        {/* Player identity cluster */}
        <button
          type="button"
          onClick={() => {
            soundEngine.playClick();
            onGoHome?.();
          }}
          className="flex items-center gap-2.5 min-w-0 text-start group"
        >
          <AvatarBadge avatarId={player.avatar} size="sm" />
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-sm sm:text-base text-[var(--qa-text)] truncate max-w-[105px] sm:max-w-[190px]">
                {player.name}
              </span>
              <span className="text-base leading-none shrink-0" title={identityCountryName}>
                {identityCountry.flag}
              </span>
              <span className="px-1.5 py-0.5 rounded bg-[#009E49]/20 border border-[#009E49]/45 text-[var(--qa-green-text)] text-[10px] font-extrabold font-mono-num shrink-0">
                {t.levelShort(levelInfo.level)}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[var(--qa-muted)] truncate">
              <span className="truncate max-w-[75px] sm:max-w-[130px]">{identityCountryName}</span>
              <span className="inline-flex items-center gap-1 text-[var(--qa-gold-text)] font-semibold font-mono-num shrink-0">
                <Trophy className="w-3 h-3" />
                {player.bestGameScore}
              </span>
              <span className="inline-flex items-center gap-0.5 text-[#E8590C] font-semibold font-mono-num shrink-0">
                <Flame className="w-3 h-3 fill-current" />
                {player.streak}
                {t.daysUnit}
              </span>
            </div>
          </div>
        </button>

        {/* Action controls (Top-Right) */}
        <div className="flex items-center gap-1.5 shrink-0 relative">
          <PWAInstallButton language={player.language} compact />

          <button
            type="button"
            onClick={handleToggleMute}
            aria-label={muted ? 'Unmute sound' : 'Mute sound'}
            className="min-h-[40px] min-w-[40px] px-2.5 rounded-xl bg-[var(--qa-inset)] border border-[var(--qa-border)] text-[var(--qa-text)] hover:border-[var(--qa-border-strong)] flex items-center justify-center transition-colors"
          >
            {muted ? (
              <VolumeX className="w-4 h-4 text-[var(--qa-muted)]" />
            ) : (
              <Volume2 className="w-4 h-4 text-[var(--qa-green-text)]" />
            )}
          </button>



          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onEditProfile();
            }}
            className="min-h-[40px] px-2.5 sm:px-3 rounded-xl bg-[var(--qa-inset)] border border-[var(--qa-border)] text-xs font-semibold text-[var(--qa-text)] hover:border-[#F5B700]/70 flex items-center gap-1.5 whitespace-nowrap transition-colors"
            title={t.editProfileBtn}
          >
            <UserCog className="w-4 h-4 text-[var(--qa-gold-text)]" />
            <span className="hidden lg:inline">{t.editProfileBtn}</span>
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setLangMenuOpen((v) => !v);
              }}
              className="min-h-[40px] px-2.5 sm:px-3 rounded-xl bg-[var(--qa-inset)] border border-[var(--qa-border)] text-xs font-semibold text-[var(--qa-text)] hover:border-[#009E49]/70 flex items-center gap-1.5 whitespace-nowrap transition-colors"
              title={t.changeLanguageBtn}
            >
              <span className="text-base leading-none">{currentLangOption.flag}</span>
              <Globe className="w-3.5 h-3.5 text-[var(--qa-muted)] sm:hidden" />
              <span className="hidden lg:inline">{t.changeLanguageBtn}</span>
            </button>

            {langMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangMenuOpen(false)}
                />
                <div className="absolute end-0 mt-2 w-48 rounded-2xl bg-[var(--qa-card)] border border-[var(--qa-border-strong)] shadow-2xl p-1.5 z-50">
                  {LANGUAGE_OPTIONS.map((opt) => {
                    const active = opt.code === player.language;
                    return (
                      <button
                        key={opt.code}
                        type="button"
                        onClick={() => {
                          soundEngine.playClick();
                          onChangeLanguage(opt.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full min-h-[42px] px-3 py-2 rounded-xl text-sm font-medium flex items-center justify-between gap-2 transition-colors ${
                          active
                            ? 'bg-[#009E49] text-white'
                            : 'text-[var(--qa-text)] hover:bg-[var(--qa-inset)]'
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-lg leading-none">{opt.flag}</span>
                          <span>{opt.label}</span>
                        </span>
                        {active && <span className="text-xs font-bold">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

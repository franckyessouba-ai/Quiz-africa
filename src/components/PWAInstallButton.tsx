import { Download, Smartphone, X } from 'lucide-react';
import { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { getUiText } from '../i18n/translations';
import { Language } from '../types/quiz';
import { soundEngine } from '../utils/sound';

interface PWAInstallButtonProps {
  language: Language;
  compact?: boolean;
}

export function PWAInstallButton({ language, compact = false }: PWAInstallButtonProps) {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const t = getUiText(language);

  if (isInstalled) {
    return null;
  }

  if (isInstallable) {
    return (
      <button
        type="button"
        onClick={() => {
          soundEngine.playClick();
          install();
        }}
        className={`min-h-[40px] rounded-xl bg-[#0072CE] hover:brightness-110 active:scale-[0.98] text-white font-display font-bold flex items-center gap-1.5 whitespace-nowrap transition-all shadow-sm ${
          compact ? 'px-2.5 text-xs' : 'px-4 py-2 text-sm'
        }`}
        title={t.installAppBtn}
      >
        <Download className="w-4 h-4 shrink-0" />
        <span className={compact ? 'hidden md:inline' : ''}>{t.installAppBtn}</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          type="button"
          onClick={() => {
            soundEngine.playClick();
            setShowIOSGuide(true);
          }}
          className={`min-h-[40px] rounded-xl bg-[var(--qa-inset)] border border-[#0072CE]/60 hover:border-[#0072CE] text-[var(--qa-text)] font-display font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
            compact ? 'px-2.5 text-xs' : 'px-4 py-2 text-sm'
          }`}
        >
          <Smartphone className="w-4 h-4 text-[var(--qa-blue-text)] shrink-0" />
          <span className={compact ? 'hidden md:inline' : ''}>{t.installIosBtn}</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="w-full max-w-sm rounded-3xl bg-[var(--qa-card)] border border-[var(--qa-border-strong)] p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display font-extrabold text-lg text-[var(--qa-gold-text)]">
                  {t.installIosTitle}
                </h3>
                <button
                  type="button"
                  onClick={() => setShowIOSGuide(false)}
                  aria-label={t.closeBtn}
                  className="p-1.5 rounded-lg text-[var(--qa-muted)] hover:text-[var(--qa-text)]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ol className="space-y-2 text-sm text-[var(--qa-text-soft)] list-decimal list-inside">
                <li>{t.installIosStep1}</li>
                <li>{t.installIosStep2}</li>
              </ol>
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="w-full min-h-[46px] rounded-xl bg-[#009E49] text-white font-display font-bold text-sm"
              >
                {t.closeBtn}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
}

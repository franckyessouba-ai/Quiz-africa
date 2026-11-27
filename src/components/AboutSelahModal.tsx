import { ChevronDown, ChevronUp, Globe2, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { TROPHY_CREST_IMAGE } from '../data/avatars';
import { SELAH_BRAND } from '../data/brand';
import { getUiText } from '../i18n/translations';
import { Language } from '../types/quiz';
import { soundEngine } from '../utils/sound';

interface AboutSelahModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}

export function AboutSelahModal({ isOpen, language, onClose }: AboutSelahModalProps) {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (!isOpen) setShowMore(false);
  }, [isOpen]);

  if (!isOpen) return null;

  const t = getUiText(language);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`À propos de ${SELAH_BRAND.name}`}
    >
      <div
        className="w-full max-w-md rounded-3xl bg-[#0D1611] border border-[#F5B700]/40 p-5 sm:p-6 shadow-2xl space-y-4 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-2">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-[#9EB5A7]">
            À propos
          </span>
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            aria-label={t.closeBtn}
            className="min-h-[40px] min-w-[40px] rounded-xl bg-[#16231B] border border-white/15 flex items-center justify-center text-[#9EB5A7] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Application Credit (Top) */}
        <div className="rounded-2xl bg-[#14221A] border border-white/10 p-3.5 flex items-center gap-3 text-start">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-[#F5B700]/75 bg-[#0A100D] shrink-0">
            <img
              src={TROPHY_CREST_IMAGE}
              alt={t.appTitle}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-display font-extrabold text-sm text-white truncate">
              {t.appTitle}
            </p>
            <p className="text-xs text-[#F5B700] font-semibold truncate">
              {t.appSubtitle}
            </p>
            <p className="text-[11px] text-[#9EB5A7] mt-0.5 inline-flex items-center gap-1">
              <Globe2 className="w-3 h-3 text-[#22C55E] shrink-0" />
              <span>54 pays · 5 langues</span>
            </p>
          </div>
        </div>

        {/* Official SELAH Brand Showcase (Bottom, seamless background — no black box) */}
        <div className="pt-2 border-t border-white/10 space-y-2">
          <img
            src={SELAH_BRAND.logoSrc}
            alt={SELAH_BRAND.name}
            className="mx-auto h-14 sm:h-16 w-auto object-contain mix-blend-screen select-none"
          />
          <div className="space-y-0.5">
            <h2 className="font-display font-extrabold text-base text-white tracking-wider">
              {SELAH_BRAND.name}
            </h2>
            <p className="font-display font-semibold text-xs sm:text-sm text-[#38BDF8]">
              {SELAH_BRAND.signature}
            </p>
          </div>
          <p className="text-[11px] text-[#9EB5A7] leading-relaxed">
            {SELAH_BRAND.domainDescription}
          </p>
          <p className="text-[11px] font-medium text-[#B8CCC0] flex items-center justify-center gap-1.5 pt-0.5">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
            <span>{SELAH_BRAND.footerLine}</span>
          </p>

          {/* Compact 'En savoir plus' toggle at the bottom */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setShowMore((v) => !v);
              }}
              aria-expanded={showMore}
              className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-[#9EB5A7] hover:text-white bg-[#14221A]/75 border border-white/10 transition-colors"
            >
              <span>En savoir plus</span>
              {showMore ? (
                <ChevronUp className="w-3.5 h-3.5 text-[#38BDF8]" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-[#38BDF8]" />
              )}
            </button>

            {showMore && (
              <p className="mt-2.5 rounded-xl bg-[#14221A]/75 border border-white/10 px-3.5 py-2.5 text-xs text-[#D6E5DC] leading-relaxed">
                {SELAH_BRAND.founderNote}
              </p>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            soundEngine.playClick();
            onClose();
          }}
          className="w-full min-h-[46px] rounded-xl bg-[#009E49] hover:brightness-110 text-white font-display font-bold text-sm transition-all"
        >
          {t.closeBtn}
        </button>
      </div>
    </div>
  );
}

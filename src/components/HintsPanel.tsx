import { PhoneCall, Scissors, Type, Users } from 'lucide-react';
import { getUiText } from '../i18n/translations';
import { Language } from '../types/quiz';
import { HINT_COSTS, HINT_OPTION_LETTERS, HintType } from '../utils/hints';

interface HintsPanelProps {
  language: Language;
  usedJokers: Record<HintType, boolean>;
  disabled: boolean;
  firstLetterText: string | null;
  audiencePercentages: number[] | null;
  fiftyFiftyActive: boolean;
  friendText: string | null;
  lastCostFlash: number | null;
  onUseHint: (type: HintType) => void;
}

export function HintsPanel({
  language,
  usedJokers,
  disabled,
  firstLetterText,
  audiencePercentages,
  fiftyFiftyActive,
  friendText,
  lastCostFlash,
  onUseHint,
}: HintsPanelProps) {
  const t = getUiText(language);

  const items: Array<{
    type: HintType;
    label: string;
    cost: number;
    Icon: typeof Type;
    accentClass: string;
  }> = [
    {
      type: 'firstLetter',
      label: t.hintFirstLetterLabel,
      cost: HINT_COSTS.firstLetter,
      Icon: Type,
      accentClass: 'text-[#38BDF8]',
    },
    {
      type: 'audience',
      label: t.hintAudienceLabel,
      cost: HINT_COSTS.audience,
      Icon: Users,
      accentClass: 'text-[#22C55E]',
    },
    {
      type: 'fiftyFifty',
      label: t.hintFiftyFiftyLabel,
      cost: HINT_COSTS.fiftyFifty,
      Icon: Scissors,
      accentClass: 'text-[#F5B700]',
    },
    {
      type: 'askFriend',
      label: t.hintAskFriendLabel,
      cost: HINT_COSTS.askFriend,
      Icon: PhoneCall,
      accentClass: 'text-[#FB923C]',
    },
  ];

  const hasAnyActiveHint = Boolean(
    firstLetterText || audiencePercentages || fiftyFiftyActive || friendText
  );

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-2 text-[10px] sm:text-[11px] font-bold text-[var(--qa-muted)]">
        <span className="uppercase tracking-wider">{t.hintsBarLabel}</span>
        {lastCostFlash !== null && lastCostFlash > 0 && (
          <span className="font-mono-num font-extrabold text-[#FB923C]">
            -{lastCostFlash} {t.ptsShort}
          </span>
        )}
      </div>

      <div className="grid grid-cols-4 gap-1.5">
        {items.map(({ type, label, cost, Icon, accentClass }) => {
          const isUsed = usedJokers[type];
          const isDisabled = disabled || isUsed;

          return (
            <button
              key={type}
              type="button"
              disabled={isDisabled}
              onClick={() => onUseHint(type)}
              data-hint-btn={type}
              className={`min-h-[42px] px-1.5 py-1.5 rounded-xl border flex flex-col items-center justify-center gap-0.5 text-center transition-all ${
                isUsed
                  ? 'bg-[var(--qa-inset)]/40 border-[var(--qa-border)]/60 opacity-45 cursor-not-allowed'
                  : disabled
                    ? 'bg-[var(--qa-inset)]/60 border-[var(--qa-border)] opacity-60 cursor-not-allowed'
                    : 'bg-[var(--qa-inset)] border-[#F5B700]/40 hover:border-[#F5B700] active:scale-[0.97]'
              }`}
            >
              <div className="flex items-center gap-1 max-w-full">
                <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${isUsed ? 'text-[var(--qa-muted)]' : accentClass}`} />
                <span className="text-[10px] sm:text-[11px] font-bold text-[var(--qa-text)] truncate">
                  {label}
                </span>
              </div>
              <span
                className={`text-[9px] sm:text-[10px] font-mono-num font-extrabold leading-none ${
                  isUsed ? 'text-[var(--qa-muted)]' : 'text-[var(--qa-gold-text)]'
                }`}
              >
                {isUsed ? t.hintUsedTag : `-${cost} ${t.ptsShort}`}
              </span>
            </button>
          );
        })}
      </div>

      {hasAnyActiveHint && (
        <div
          data-hint-feedback="true"
          className="rounded-xl bg-[#F5B700]/10 border border-[#F5B700]/45 px-2.5 py-2 space-y-1.5 text-[11px] sm:text-xs text-[var(--qa-text)]"
        >
          {firstLetterText && (
            <div className="flex items-start gap-1.5">
              <Type className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
              <span className="font-semibold leading-snug">{firstLetterText}</span>
            </div>
          )}

          {fiftyFiftyActive && (
            <div className="flex items-start gap-1.5">
              <Scissors className="w-3.5 h-3.5 text-[#F5B700] shrink-0 mt-0.5" />
              <span className="font-semibold leading-snug">{t.hintFiftyFiftyMsg}</span>
            </div>
          )}

          {audiencePercentages && (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 font-semibold">
                <Users className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                <span>{t.hintAudienceMsg}</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 pt-0.5">
                {audiencePercentages.map((pct, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg bg-[var(--qa-card)]/90 border border-[var(--qa-border)] px-1.5 py-1 flex flex-col items-center gap-0.5"
                  >
                    <div className="w-full h-1.5 rounded-full bg-[var(--qa-inset)] overflow-hidden">
                      <div
                        className="h-full bg-[#22C55E] rounded-full transition-all duration-300"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="font-mono-num text-[10px] font-extrabold text-[var(--qa-text)]">
                      {HINT_OPTION_LETTERS[idx]} {pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {friendText && (
            <div className="flex items-start gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-[#FB923C] shrink-0 mt-0.5" />
              <span className="font-semibold leading-snug">{friendText}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

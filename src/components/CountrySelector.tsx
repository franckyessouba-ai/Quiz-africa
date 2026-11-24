import { Check, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { getCountryName, getSortedCountries } from '../data/countries54';
import { getUiText } from '../i18n/translations';
import { Language } from '../types/quiz';
import { soundEngine } from '../utils/sound';

interface CountrySelectorProps {
  language: Language;
  selectedCode: string;
  onSelect: (code: string) => void;
  maxHeightClass?: string;
}

export function CountrySelector({
  language,
  selectedCode,
  onSelect,
  maxHeightClass = 'max-h-64',
}: CountrySelectorProps) {
  const [query, setQuery] = useState('');
  const t = getUiText(language);

  const sortedCountries = useMemo(() => getSortedCountries(language), [language]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sortedCountries;
    return sortedCountries.filter((c) => {
      const localName = getCountryName(c, language).toLowerCase();
      return (
        localName.includes(q) ||
        c.name.fr.toLowerCase().includes(q) ||
        c.name.en.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q)
      );
    });
  }, [sortedCountries, query, language]);

  return (
    <div className="space-y-2.5">
      <div className="relative">
        <Search className="w-4 h-4 text-[var(--qa-muted)] absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.searchCountryPlaceholder}
          className="w-full min-h-[46px] ps-10 pe-10 py-2.5 rounded-xl bg-[var(--qa-inset)] border border-[var(--qa-border-strong)] text-[var(--qa-text)] placeholder-[var(--qa-muted)] text-sm focus:outline-none focus:border-[#F5B700] transition-colors"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="absolute end-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-[var(--qa-muted)] hover:text-[var(--qa-text)]"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-2 overflow-y-auto pe-1 ${maxHeightClass}`}
      >
        {filtered.length === 0 ? (
          <div className="col-span-full py-6 text-center text-sm text-[var(--qa-muted)]">
            {t.noCountryFound}
          </div>
        ) : (
          filtered.map((country) => {
            const isSelected = country.code === selectedCode;
            const displayName = getCountryName(country, language);
            return (
              <button
                key={country.code}
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  onSelect(country.code);
                }}
                className={`min-h-[46px] px-3 py-2 rounded-xl border text-start flex items-center justify-between gap-2 transition-all active:scale-[0.98] ${
                  isSelected
                    ? 'bg-[#009E49] border-[#F5B700] text-white shadow-sm'
                    : 'bg-[var(--qa-inset)] border-[var(--qa-border)] text-[var(--qa-text)] hover:border-[var(--qa-border-strong)]'
                }`}
              >
                <span className="flex items-center gap-2.5 min-w-0">
                  <span className="text-xl shrink-0 leading-none">{country.flag}</span>
                  <span className="text-sm font-medium truncate">{displayName}</span>
                </span>
                {isSelected && <Check className="w-4 h-4 text-[#F5B700] shrink-0" />}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}

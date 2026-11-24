import { ArrowLeft, Globe2, Medal, Plane, Sparkles, TrendingUp, Trophy } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { getCountryByCode, getCountryName, getSortedCountries } from '../data/countries54';
import { formatOrdinal, getUiText } from '../i18n/translations';
import { fetchLeaderboard } from '../services/api';
import { LeaderboardEntry, LeaderboardResponse, PlayerProfile } from '../types/quiz';
import { soundEngine } from '../utils/sound';
import { AvatarBadge } from './AvatarBadge';

interface LeaderboardScreenProps {
  player: PlayerProfile;
  initialData: LeaderboardResponse | null;
  onBack: () => void;
}

const RANK_HISTORY_KEY = 'quiz_africa_last_ranks_v1';

function readStoredRanks(): { worldRank?: number; countryRank?: number } {
  try {
    const raw = localStorage.getItem(RANK_HISTORY_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveStoredRanks(worldRank: number, countryRank: number) {
  try {
    const prev = readStoredRanks();
    localStorage.setItem(
      RANK_HISTORY_KEY,
      JSON.stringify({ ...prev, worldRank, countryRank })
    );
  } catch {
    // Ignore storage errors
  }
}

export function LeaderboardScreen({
  player,
  initialData,
  onBack,
}: LeaderboardScreenProps) {
  const [tab, setTab] = useState<'world' | 'country' | 'diaspora'>('world');
  const [filterCountry, setFilterCountry] = useState(player.countryCode);
  const [data, setData] = useState<LeaderboardResponse | null>(initialData);
  const [loading, setLoading] = useState(!initialData);
  const [rankDelta, setRankDelta] = useState<{ world: number; country: number }>({
    world: 0,
    country: 0,
  });

  const t = getUiText(player.language);
  const sortedCountries = getSortedCountries(player.language);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchLeaderboard(player.id, filterCountry).then((res) => {
      if (!active) return;
      if (res) {
        const prev = readStoredRanks();
        const worldDiff =
          prev.worldRank && prev.worldRank > res.playerRanks.worldRank
            ? prev.worldRank - res.playerRanks.worldRank
            : 0;
        const countryDiff =
          prev.countryRank && prev.countryRank > res.playerRanks.countryRank
            ? prev.countryRank - res.playerRanks.countryRank
            : 0;
        if (worldDiff > 0 || countryDiff > 0) {
          setRankDelta({ world: worldDiff, country: countryDiff });
        }
        saveStoredRanks(res.playerRanks.worldRank, res.playerRanks.countryRank);
        setData(res);
      }
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [player.id, filterCountry]);

  const rows: LeaderboardEntry[] =
    tab === 'world'
      ? data?.worldTop10 || []
      : tab === 'country'
        ? data?.countryTop10 || []
        : data?.diasporaTop10 || [];

  const identityCountry = getCountryByCode(player.countryCode);
  const identityCountryName = getCountryName(identityCountry, player.language);
  const activeDelta = tab === 'world' ? rankDelta.world : rankDelta.country;

  return (
    <main className="max-w-3xl mx-auto px-4 pt-5 pb-14 space-y-5">
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

        <h1 className="font-display font-extrabold text-lg sm:text-2xl text-[var(--qa-gold-text)] text-end">
          {t.leaderboardTitle}
        </h1>
      </div>

      {/* Animated Player Rank Highlight Banner */}
      {data && (
        <motion.section
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#009E49]/15 via-[var(--qa-card)] to-[#F5B700]/20 border-2 border-[#F5B700]/60 p-4 shadow-lg"
        >
          <div
            className="pointer-events-none absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#F5B700]/20 to-transparent qa-rank-shimmer"
            aria-hidden="true"
          />

          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-2xl leading-none">{identityCountry.flag}</span>
              <span className="font-display font-bold text-sm sm:text-base text-[var(--qa-text)]">
                {t.youAreHere(
                  formatOrdinal(data.playerRanks.countryRank, player.language),
                  identityCountryName
                )}
              </span>
              {activeDelta > 0 && (
                <motion.span
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: [1, 1.08, 1], opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-[#009E49] text-white text-xs font-extrabold shadow"
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{t.rankClimbed(activeDelta)}</span>
                </motion.span>
              )}
            </div>
            <span className="text-xs sm:text-sm font-extrabold text-[var(--qa-gold-text)] font-mono-num">
              {t.youAreWorldRank(formatOrdinal(data.playerRanks.worldRank, player.language))}
            </span>
          </div>
        </motion.section>
      )}

      {/* Best Diaspora Player Card */}
      {data?.diasporaChampion && (
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-gradient-to-r from-[#9E3200]/20 via-[var(--qa-card)] to-[#F5B700]/20 border-2 border-[#F5B700]/70 p-4 shadow-lg flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-xl bg-[#F5B700]/20 border border-[#F5B700]/50 flex items-center justify-center shrink-0 text-2xl">
              ✈️
            </div>
            <div className="min-w-0">
              <span className="block text-xs font-black text-[#F5B700] uppercase tracking-wider">
                {t.diasporaChampionTitle}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-base text-[var(--qa-text)] truncate">
                  {data.diasporaChampion.name}
                </span>
                <span className="text-base leading-none">
                  {getCountryByCode(data.diasporaChampion.countryCode).flag}
                </span>
              </div>
            </div>
          </div>
          <div className="text-end shrink-0">
            <span className="font-display font-black text-lg text-[var(--qa-gold-text)] font-mono-num block">
              {data.diasporaChampion.diasporaScore || data.diasporaChampion.totalScore}
            </span>
            <span className="text-[11px] text-[var(--qa-muted)]">
              {t.diasporaPoints}
            </span>
          </div>
        </motion.section>
      )}

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-2">
        <button
          type="button"
          onClick={() => {
            soundEngine.playClick();
            setTab('world');
          }}
          className={`min-h-[48px] px-2 sm:px-4 rounded-2xl border font-display font-bold text-xs sm:text-base flex items-center justify-center gap-1.5 sm:gap-2 transition-all ${
            tab === 'world'
              ? 'bg-[#009E49] border-[#F5B700] text-white shadow-md'
              : 'bg-[var(--qa-card)] border-[var(--qa-border)] text-[var(--qa-text-soft)] hover:border-[var(--qa-border-strong)]'
          }`}
        >
          <Globe2 className="w-4 h-4 shrink-0" />
          <span className="truncate">{t.tabWorldTop10}</span>
        </button>

        <button
          type="button"
          onClick={() => {
            soundEngine.playClick();
            setTab('country');
          }}
          className={`min-h-[48px] px-2 sm:px-4 rounded-2xl border font-display font-bold text-xs sm:text-base flex items-center justify-center gap-1.5 sm:gap-2 transition-all ${
            tab === 'country'
              ? 'bg-[#009E49] border-[#F5B700] text-white shadow-md'
              : 'bg-[var(--qa-card)] border-[var(--qa-border)] text-[var(--qa-text-soft)] hover:border-[var(--qa-border-strong)]'
          }`}
        >
          <Trophy className="w-4 h-4 shrink-0" />
          <span className="truncate">{t.tabCountryTop10}</span>
        </button>

        <button
          type="button"
          onClick={() => {
            soundEngine.playClick();
            setTab('diaspora');
          }}
          className={`min-h-[48px] px-2 sm:px-4 rounded-2xl border font-display font-bold text-xs sm:text-base flex items-center justify-center gap-1.5 sm:gap-2 transition-all ${
            tab === 'diaspora'
              ? 'bg-[#009E49] border-[#F5B700] text-white shadow-md'
              : 'bg-[var(--qa-card)] border-[var(--qa-border)] text-[var(--qa-text-soft)] hover:border-[var(--qa-border-strong)]'
          }`}
        >
          <Plane className="w-4 h-4 shrink-0" />
          <span className="truncate">{t.tabDiasporaTop10}</span>
        </button>
      </div>

      {/* Country Filter Dropdown when in Country tab */}
      {tab === 'country' && (
        <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}>
          <select
            value={filterCountry}
            onChange={(e) => {
              soundEngine.playClick();
              setFilterCountry(e.target.value);
            }}
            className="w-full min-h-[48px] px-4 py-2.5 rounded-2xl bg-[var(--qa-card)] border border-[var(--qa-border-strong)] text-[var(--qa-text)] font-semibold text-sm focus:outline-none focus:border-[#F5B700]"
          >
            {sortedCountries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {getCountryName(c, player.language)}
              </option>
            ))}
          </select>
        </motion.div>
      )}

      {/* Ranked Table */}
      <section className="rounded-3xl bg-[var(--qa-card)] border border-[var(--qa-border)] overflow-hidden shadow-xl">
        {loading && !data ? (
          <div className="p-8 text-center text-sm text-[var(--qa-muted)]">{t.loading}</div>
        ) : rows.length === 0 ? (
          <div className="p-10 text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-[#F5B700]/15 border border-[#F5B700]/45 flex items-center justify-center mx-auto text-2xl">
              🏆
            </div>
            <p className="font-display font-bold text-base text-[var(--qa-text)]">
              {t.noPlayersLeaderboard}
            </p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${tab}_${filterCountry}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="divide-y divide-[var(--qa-border)]"
            >
              {rows.map((entry, idx) => {
                const rank = idx + 1;
                const country = getCountryByCode(entry.countryCode);
                const isMe = Boolean(entry.isCurrentPlayer || entry.id === player.id);
                return (
                  <motion.div
                    key={entry.id}
                    layout
                    initial={{ opacity: 0, x: -14 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: isMe ? [1, 1.015, 1] : 1,
                    }}
                    transition={{
                      duration: 0.32,
                      delay: idx * 0.045,
                      ease: 'easeOut',
                    }}
                    className={`relative overflow-hidden px-4 py-3.5 flex items-center justify-between gap-3 ${
                      isMe
                        ? 'bg-gradient-to-r from-[#009E49]/20 via-[#F5B700]/15 to-[#009E49]/15 ring-1 ring-inset ring-[#F5B700]/70'
                        : ''
                    }`}
                  >
                    {isMe && (
                      <div
                        className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#F5B700]/25 to-transparent qa-rank-shimmer"
                        aria-hidden="true"
                      />
                    )}

                    <div className="relative flex items-center gap-3 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center font-display font-extrabold text-sm font-mono-num shrink-0 ${
                          rank === 1
                            ? 'bg-[#F5B700] text-[#0A100D]'
                            : rank === 2
                              ? 'bg-[#CBD5E1] text-[#0A100D]'
                              : rank === 3
                                ? 'bg-[#D97706] text-white'
                                : 'bg-[var(--qa-inset)] text-[var(--qa-muted)] border border-[var(--qa-border)]'
                        }`}
                      >
                        {rank <= 3 ? <Medal className="w-4 h-4" /> : rank}
                      </div>

                      <AvatarBadge avatarId={entry.avatar} size="sm" />

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`font-display font-bold text-sm sm:text-base truncate ${
                              isMe ? 'text-[var(--qa-gold-text)]' : 'text-[var(--qa-text)]'
                            }`}
                          >
                            {entry.name}
                          </span>
                          <span className="text-base leading-none shrink-0">
                            {country.flag}
                          </span>
                          {isMe && (
                            <Sparkles className="w-3.5 h-3.5 text-[#F5B700] shrink-0" />
                          )}
                        </div>
                        <span className="text-xs text-[var(--qa-muted)] block truncate">
                          {getCountryName(country, player.language)}
                          {isMe ? ` · ${t.rankHighlightNote}` : ''}
                        </span>
                      </div>
                    </div>

                    <div className="relative text-end shrink-0">
                      <span className="font-display font-extrabold text-base sm:text-lg text-[var(--qa-gold-text)] font-mono-num block leading-none">
                        {tab === 'diaspora' ? (entry.diasporaScore || entry.totalScore) : entry.totalScore}
                      </span>
                      <span className="text-[11px] text-[var(--qa-muted)] font-mono-num">
                        {tab === 'diaspora' ? t.diasporaPoints : `${t.bestScore}: ${entry.bestGameScore}`}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        )}
      </section>
    </main>
  );
}

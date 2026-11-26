import { ArrowLeft, Globe2, Medal, Plane, Sparkles, TrendingUp, Trophy } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { HOME_BACKDROP_IMAGE } from '../data/avatars';
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

  const isPlayerInTopRows = rows.some(
    (entry) => entry.isCurrentPlayer || entry.id === player.id
  );
  const showOutsideRow =
    Boolean(data) &&
    !isPlayerInTopRows &&
    (tab === 'world' ||
      tab === 'diaspora' ||
      (tab === 'country' && filterCountry === player.countryCode));

  const outsideRank = data
    ? tab === 'world'
      ? data.playerRanks.worldRank
      : tab === 'country'
        ? data.playerRanks.countryRank
        : data.playerRanks.diasporaRank || data.playerRanks.worldRank
    : 1;

  const outsideTotal = data
    ? tab === 'world'
      ? data.playerRanks.worldTotal
      : tab === 'country'
        ? data.playerRanks.countryTotal
        : data.playerRanks.diasporaTotal || data.playerRanks.worldTotal
    : 1;

  const fallbackSelfEntry: LeaderboardEntry = data?.currentPlayerEntry || {
    id: player.id,
    name: player.name,
    countryCode: player.countryCode,
    avatar: player.avatar,
    totalScore: player.totalScore,
    bestGameScore: player.bestGameScore,
    weeklyScore: player.weeklyScore,
    streak: player.streak,
    diasporaScore: player.diasporaScore || 0,
    isCurrentPlayer: true,
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

      <div className="h-full max-w-3xl mx-auto px-3.5 sm:px-6 pt-2.5 sm:pt-4 pb-3.5 sm:pb-4 flex flex-col gap-2.5">
        {/* Top Header */}
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

          <h1 className="font-display font-extrabold text-base sm:text-2xl text-[var(--qa-gold-text)] text-end truncate">
            {t.leaderboardTitle}
          </h1>
        </div>

        {/* Compact Player Rank Highlight Banner */}
        {data && (
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#009E49]/15 via-[var(--qa-card)]/95 to-[#F5B700]/20 border border-[#F5B700]/60 px-3.5 py-2.5 shadow-lg backdrop-blur-sm"
          >
            <div
              className="pointer-events-none absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#F5B700]/20 to-transparent qa-rank-shimmer"
              aria-hidden="true"
            />

            <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div className="flex items-center gap-2 flex-wrap min-w-0">
                <span className="text-lg leading-none shrink-0">{identityCountry.flag}</span>
                <span className="font-display font-bold text-xs sm:text-sm text-[var(--qa-text)] truncate">
                  {t.youAreHere(
                    t.rankOfTotal(
                      formatOrdinal(data.playerRanks.countryRank, player.language),
                      data.playerRanks.countryTotal
                    ),
                    identityCountryName
                  )}
                </span>
                {activeDelta > 0 && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#009E49] text-white text-[11px] font-extrabold">
                    <TrendingUp className="w-3 h-3" />
                    <span>{t.rankClimbed(activeDelta)}</span>
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-extrabold text-[var(--qa-gold-text)] font-mono-num">
                  {t.youAreWorldRank(
                    `${formatOrdinal(data.playerRanks.worldRank, player.language)} / ${t.profilesLabel(data.playerRanks.worldTotal)}`
                  )}
                </span>
                {tab === 'diaspora' && data.playerRanks.diasporaRank && (
                  <span className="text-[11px] font-bold text-[var(--qa-green-text)] font-mono-num">
                    ·{' '}
                    {t.youAreDiasporaRank(
                      formatOrdinal(data.playerRanks.diasporaRank, player.language),
                      data.playerRanks.diasporaTotal || data.playerRanks.worldTotal
                    )}
                  </span>
                )}
              </div>
            </div>
          </motion.section>
        )}

        {/* Tabs */}
        <div className="grid grid-cols-3 gap-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              setTab('world');
            }}
            className={`min-h-[42px] px-2 sm:px-3 rounded-xl border font-display font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all ${
              tab === 'world'
                ? 'bg-[#009E49] border-[#F5B700] text-white shadow-md'
                : 'bg-[var(--qa-card)]/90 border-[var(--qa-border)] text-[var(--qa-text-soft)] hover:border-[var(--qa-border-strong)]'
            }`}
          >
            <Globe2 className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{t.tabWorldTop10}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              setTab('country');
            }}
            className={`min-h-[42px] px-2 sm:px-3 rounded-xl border font-display font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all ${
              tab === 'country'
                ? 'bg-[#009E49] border-[#F5B700] text-white shadow-md'
                : 'bg-[var(--qa-card)]/90 border-[var(--qa-border)] text-[var(--qa-text-soft)] hover:border-[var(--qa-border-strong)]'
            }`}
          >
            <Trophy className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{t.tabCountryTop10}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              setTab('diaspora');
            }}
            className={`min-h-[42px] px-2 sm:px-3 rounded-xl border font-display font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all ${
              tab === 'diaspora'
                ? 'bg-[#009E49] border-[#F5B700] text-white shadow-md'
                : 'bg-[var(--qa-card)]/90 border-[var(--qa-border)] text-[var(--qa-text-soft)] hover:border-[var(--qa-border-strong)]'
            }`}
          >
            <Plane className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{t.tabDiasporaTop10}</span>
          </button>
        </div>

        {/* Country Filter Dropdown when in Country tab */}
        {tab === 'country' && (
          <div className="shrink-0">
            <select
              value={filterCountry}
              onChange={(e) => {
                soundEngine.playClick();
                setFilterCountry(e.target.value);
              }}
              className="w-full min-h-[42px] px-3.5 py-2 rounded-xl bg-[var(--qa-card)]/95 border border-[var(--qa-border-strong)] text-[var(--qa-text)] font-semibold text-xs sm:text-sm focus:outline-none focus:border-[#F5B700]"
            >
              {sortedCountries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {getCountryName(c, player.language)}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Best Diaspora Player Strip when in Diaspora tab */}
        {tab === 'diaspora' && data?.diasporaChampion && (
          <div className="shrink-0 rounded-xl bg-gradient-to-r from-[#9E3200]/25 via-[var(--qa-card)]/95 to-[#F5B700]/20 border border-[#F5B700]/65 px-3.5 py-2 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="text-lg shrink-0">✈️</span>
              <div className="min-w-0">
                <span className="block text-[10px] font-black text-[#F5B700] uppercase tracking-wider truncate">
                  {t.diasporaChampionTitle}
                </span>
                <span className="font-display font-bold text-xs sm:text-sm text-[var(--qa-text)] truncate block">
                  {data.diasporaChampion.name}{' '}
                  {getCountryByCode(data.diasporaChampion.countryCode).flag}
                </span>
              </div>
            </div>
            <span className="font-display font-black text-sm sm:text-base text-[var(--qa-gold-text)] font-mono-num shrink-0">
              {data.diasporaChampion.diasporaScore || data.diasporaChampion.totalScore} {t.ptsShort}
            </span>
          </div>
        )}

        {/* Fixed Ranked Table Card with Internal Scroll + Pinned Outside-Top-10 Player Row */}
        <section className="flex-1 min-h-0 rounded-2xl sm:rounded-3xl bg-[var(--qa-card)]/92 border border-[var(--qa-border)] overflow-hidden shadow-xl flex flex-col backdrop-blur-sm">
          {loading && !data ? (
            <div className="flex-1 flex items-center justify-center p-6 text-sm text-[var(--qa-muted)]">
              {t.loading}
            </div>
          ) : rows.length === 0 && !showOutsideRow ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F5B700]/15 border border-[#F5B700]/45 flex items-center justify-center text-2xl">
                🏆
              </div>
              <p className="font-display font-bold text-sm sm:text-base text-[var(--qa-text)]">
                {t.noPlayersLeaderboard}
              </p>
            </div>
          ) : (
            <>
              <div className="flex-1 min-h-0 overflow-y-auto divide-y divide-[var(--qa-border)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${tab}_${filterCountry}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="divide-y divide-[var(--qa-border)]"
                  >
                    {rows.length === 0 && (
                      <div className="p-6 text-center text-sm text-[var(--qa-muted)]">
                        {t.noPlayersLeaderboard}
                      </div>
                    )}

                    {rows.map((entry, idx) => {
                      const rank = idx + 1;
                      const country = getCountryByCode(entry.countryCode);
                      const isMe = Boolean(entry.isCurrentPlayer || entry.id === player.id);
                      return (
                        <div
                          key={entry.id}
                          className={`relative overflow-hidden px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-3 ${
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

                          <div className="relative flex items-center gap-2.5 sm:gap-3 min-w-0">
                            <div
                              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center font-display font-extrabold text-xs sm:text-sm font-mono-num shrink-0 ${
                                rank === 1
                                  ? 'bg-[#F5B700] text-[#0A100D]'
                                  : rank === 2
                                    ? 'bg-[#CBD5E1] text-[#0A100D]'
                                    : rank === 3
                                      ? 'bg-[#D97706] text-white'
                                      : 'bg-[var(--qa-inset)] text-[var(--qa-muted)] border border-[var(--qa-border)]'
                              }`}
                            >
                              {rank <= 3 ? <Medal className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : rank}
                            </div>

                            <AvatarBadge avatarId={entry.avatar} size="sm" />

                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span
                                  className={`font-display font-bold text-xs sm:text-sm truncate ${
                                    isMe ? 'text-[var(--qa-gold-text)]' : 'text-[var(--qa-text)]'
                                  }`}
                                >
                                  {entry.name}
                                </span>
                                <span className="text-sm sm:text-base leading-none shrink-0">
                                  {country.flag}
                                </span>
                                {isMe && (
                                  <Sparkles className="w-3.5 h-3.5 text-[#F5B700] shrink-0" />
                                )}
                              </div>
                              <span className="text-[11px] text-[var(--qa-muted)] block truncate">
                                {getCountryName(country, player.language)}
                                {isMe ? ` · ${t.rankHighlightNote}` : ''}
                              </span>
                            </div>
                          </div>

                          <div className="relative text-end shrink-0">
                            <span className="font-display font-extrabold text-sm sm:text-base text-[var(--qa-gold-text)] font-mono-num block leading-none">
                              {tab === 'diaspora'
                                ? entry.diasporaScore || entry.totalScore
                                : entry.totalScore}
                            </span>
                            <span className="text-[10px] sm:text-[11px] text-[var(--qa-muted)] font-mono-num">
                              {tab === 'diaspora'
                                ? t.diasporaPoints
                                : `${t.bestScore}: ${entry.bestGameScore}`}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pinned Outside Top 10 Player Row (Always Visible at Bottom of Fixed Frame) */}
              {showOutsideRow && (
                <div className="shrink-0 border-t border-[#F5B700]/50">
                  <div className="px-3.5 sm:px-4 py-1 bg-[var(--qa-inset)] flex items-center justify-between gap-2 text-[10px] sm:text-[11px] font-bold text-[var(--qa-muted)]">
                    <span>··· {t.outsideTop10Label}</span>
                    <span className="font-mono-num text-[var(--qa-gold-text)]">
                      {t.rankOfTotal(
                        formatOrdinal(outsideRank, player.language),
                        outsideTotal
                      )}
                    </span>
                  </div>

                  <div className="relative overflow-hidden px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-3 bg-gradient-to-r from-[#009E49]/25 via-[#F5B700]/15 to-[#009E49]/20">
                    <div
                      className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#F5B700]/25 to-transparent qa-rank-shimmer"
                      aria-hidden="true"
                    />

                    <div className="relative flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <div className="min-w-[2.1rem] px-1.5 h-7 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center font-display font-extrabold text-xs font-mono-num shrink-0 bg-[#F5B700]/25 text-[var(--qa-gold-text)] border border-[#F5B700]/60">
                        #{outsideRank}
                      </div>

                      <AvatarBadge avatarId={fallbackSelfEntry.avatar} size="sm" />

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-display font-bold text-xs sm:text-sm truncate text-[var(--qa-gold-text)]">
                            {fallbackSelfEntry.name}
                          </span>
                          <span className="text-sm sm:text-base leading-none shrink-0">
                            {identityCountry.flag}
                          </span>
                          <Sparkles className="w-3.5 h-3.5 text-[#F5B700] shrink-0" />
                        </div>
                        <span className="text-[11px] text-[var(--qa-muted)] block truncate">
                          {identityCountryName} ·{' '}
                          {t.rankOfTotal(
                            formatOrdinal(outsideRank, player.language),
                            outsideTotal
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="relative text-end shrink-0">
                      <span className="font-display font-extrabold text-sm sm:text-base text-[var(--qa-gold-text)] font-mono-num block leading-none">
                        {tab === 'diaspora'
                          ? fallbackSelfEntry.diasporaScore || 0
                          : fallbackSelfEntry.totalScore}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-[var(--qa-muted)] font-mono-num">
                        {tab === 'diaspora'
                          ? t.diasporaPoints
                          : `${t.bestScore}: ${fallbackSelfEntry.bestGameScore}`}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </main>
  );
}

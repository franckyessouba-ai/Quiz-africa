import type { User } from 'firebase/auth';
import { useCallback, useEffect, useState } from 'react';
import { DailyChallengeHub } from './components/DailyChallengeHub';
import { DuelScreen } from './components/DuelScreen';
import { HomeScreen } from './components/HomeScreen';
import { LeaderboardScreen } from './components/LeaderboardScreen';
import { OnboardingScreen } from './components/OnboardingScreen';
import { QuizArena } from './components/QuizArena';
import { ResultScreen } from './components/ResultScreen';
import { SetupGameScreen } from './components/SetupGameScreen';
import { TopHeader } from './components/TopHeader';
import { WeeklyCompetitionScreen } from './components/WeeklyCompetitionScreen';
import { AFRICAN_NEWS_QUESTIONS } from './data/africanNewsQuestions';
import {
  ALL_QUESTIONS,
  getLocalDateKey,
  getPreviousDateKey,
  mergeQuestionPools,
  selectDailyChallengeQuestions,
  selectNormalGameQuestions,
} from './data/questionBank';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import {
  createPlayerId,
  fetchDailyNewsPackage,
  flushPendingScores,
  getPendingScoreCount,
  loadCachedLeaderboard,
  loadOfflineQuestions,
  loadPhoneNewsQuestions,
  loadSeenQuestionIds,
  loadStoredProfile,
  persistQuestionsOffline,
  saveSeenQuestionIds,
  saveStoredProfile,
  submitScoreToServer,
  syncPlayerWithServer,
} from './services/api';
import {
  loadCloudPlayerProfile,
  mergeCloudWithLocalProfile,
  signInWithGooglePopup,
  signOutFirebase,
  subscribeToAuth,
  syncPlayerProfileToFirestore,
} from './services/firebase';
import {
  AppScreen,
  AvatarId,
  CategorySelection,
  GameResultPayload,
  Language,
  LeaderboardResponse,
  PlayerProfile,
  PlayScope,
  QuizQuestion,
} from './types/quiz';
import { getPlayerLevelInfo } from './utils/levelSystem';
import { balanceQuestionSet } from './utils/questionShuffle';

function evaluateDailyStreakFreshness(profile: PlayerProfile): PlayerProfile {
  if (!profile.lastDailyDate) return profile;
  const todayKey = getLocalDateKey();
  const yesterdayKey = getPreviousDateKey(todayKey);

  if (profile.lastDailyDate === todayKey || profile.lastDailyDate === yesterdayKey) {
    return profile;
  }

  if (profile.streak > 0 || !profile.missedYesterdayNotice) {
    return {
      ...profile,
      streak: 0,
      missedYesterdayNotice: true,
    };
  }
  return profile;
}

function computeDailyBonus(newStreak: number): number {
  if (newStreak >= 30) return 5000;
  if (newStreak >= 7) return 1000;
  if (newStreak >= 3) return 300;
  return 100;
}

export default function App() {
  const isOnline = useOnlineStatus();

  const [initialState] = useState(() => {
    const loaded = loadStoredProfile();
    const urlDuelCode =
      typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search).get('duel')?.trim().toUpperCase() || null
        : null;

    if (!loaded) {
      return {
        player: null as PlayerProfile | null,
        screen: 'onboarding' as AppScreen,
        previewLang: 'fr' as Language,
        urlDuelCode,
      };
    }
    const evaluated = evaluateDailyStreakFreshness(loaded);
    if (evaluated !== loaded) {
      saveStoredProfile(evaluated);
    }
    return {
      player: evaluated,
      screen: (urlDuelCode ? 'duel' : 'home') as AppScreen,
      previewLang: evaluated.language,
      urlDuelCode,
    };
  });

  const [player, setPlayer] = useState<PlayerProfile | null>(initialState.player);
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [screen, setScreen] = useState<AppScreen>(initialState.screen);
  const [pendingDuelCode, setPendingDuelCode] = useState<string | null>(
    initialState.urlDuelCode
  );
  const [previewLang, setPreviewLang] = useState<Language>(initialState.previewLang);
  const [leaderboard, setLeaderboard] = useState<LeaderboardResponse | null>(() =>
    loadCachedLeaderboard()
  );
  const [seenIds, setSeenIds] = useState<string[]>(() => loadSeenQuestionIds());
  const [pendingSyncCount, setPendingSyncCount] = useState<number>(() =>
    getPendingScoreCount()
  );
  const [justSyncedNotice, setJustSyncedNotice] = useState(false);

  // Remember last setup preferences for convenience, while keeping each match strictly locked once started
  const [lastPlayScope, setLastPlayScope] = useState<PlayScope>({ type: 'all' });
  const [lastCategory, setLastCategory] = useState<CategorySelection>('mixed');

  // Active match state
  const [activePlayScope, setActivePlayScope] = useState<PlayScope>({ type: 'all' });
  const [activeCategory, setActiveCategory] = useState<CategorySelection>('mixed');
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [lastResult, setLastResult] = useState<GameResultPayload | null>(null);
  const [todayNewsQuestions, setTodayNewsQuestions] = useState<QuizQuestion[]>([]);
  const [phoneNewsQuestions, setPhoneNewsQuestions] = useState<QuizQuestion[]>([]);

  const activeLanguage: Language = player ? player.language : previewLang;


  // Sync HTML dir & lang attributes (RTL for Arabic)
  useEffect(() => {
    const dir = activeLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = activeLanguage;
  }, [activeLanguage]);

  // Persist static questions + sync daily African current-affairs questions into phone IndexedDB
  useEffect(() => {
    const todayKey = getLocalDateKey();
    let active = true;

    if (isOnline) {
      persistQuestionsOffline(ALL_QUESTIONS);
      fetchDailyNewsPackage(todayKey)
        .then((pkg) => {
          if (!active) return;
          setTodayNewsQuestions(pkg.todayQuestions);
          setPhoneNewsQuestions(pkg.phoneNewsQuestions);
        })
        .catch(() => null);
    } else {
      loadOfflineQuestions().catch(() => null);
      loadPhoneNewsQuestions(todayKey)
        .then((saved) => {
          if (!active) return;
          setPhoneNewsQuestions(saved);
          setTodayNewsQuestions(saved.filter((q) => q.newsDate === todayKey));
        })
        .catch(() => null);
    }

    return () => {
      active = false;
    };
  }, [isOnline]);

  // Sync player & flush offline queued scores automatically whenever online
  const refreshLeaderboard = useCallback(async (profile: PlayerProfile) => {
    const res = await syncPlayerWithServer(profile);
    if (res) {
      setLeaderboard(res);
    }
  }, []);

  // Listen to Firebase Auth state & progressively merge LocalStorage <-> Firestore
  useEffect(() => {
    const unsub = subscribeToAuth(async (user) => {
      setFirebaseUser(user);
      if (!user || !user.emailVerified) return;

      const currentLocal = loadStoredProfile();
      if (!currentLocal) return;

      try {
        const cloudDoc = await loadCloudPlayerProfile(user.uid);
        const merged = cloudDoc
          ? mergeCloudWithLocalProfile(currentLocal, cloudDoc)
          : currentLocal;
        saveStoredProfile(merged);
        setPlayer(merged);
        await syncPlayerProfileToFirestore(merged, user);
        refreshLeaderboard(merged);
      } catch {
        // Keep local profile functioning cleanly even if cloud sync hits a transient failure
      }
    });
    return () => unsub();
  }, [refreshLeaderboard]);

  const handleSignInGoogle = useCallback(async () => {
    await signInWithGooglePopup();
  }, []);

  const handleSignOutGoogle = useCallback(async () => {
    await signOutFirebase();
  }, []);

  useEffect(() => {
    if (!isOnline || !player) return;
    let active = true;

    (async () => {
      const { syncedCount, leaderboard: syncedBoard } = await flushPendingScores(player);
      if (!active) return;

      setPendingSyncCount(getPendingScoreCount());
      if (syncedCount > 0) {
        setJustSyncedNotice(true);
        setTimeout(() => setJustSyncedNotice(false), 5000);
      }

      if (syncedBoard) {
        setLeaderboard(syncedBoard);
      } else {
        refreshLeaderboard(player);
      }
    })();

    return () => {
      active = false;
    };
  }, [isOnline, player?.id, firebaseUser?.uid, refreshLeaderboard]);

  const handleCreateProfile = async (data: {
    name: string;
    language: Language;
    countryCode: string;
    avatar: AvatarId;
  }) => {
    const newProfile: PlayerProfile = {
      id: createPlayerId(),
      name: data.name,
      language: data.language,
      countryCode: data.countryCode,
      avatar: data.avatar,
      bestGameScore: 0,
      totalScore: 0,
      weeklyScore: 0,
      streak: 0,
      bestStreak: 0,
      lastDailyDate: null,
      missedYesterdayNotice: false,
      dailyHistory: {},
      gamesPlayed: 0,
      gamesWon: 0,
    };
    saveStoredProfile(newProfile);
    setPlayer(newProfile);
    setPreviewLang(newProfile.language);
    setScreen(pendingDuelCode ? 'duel' : 'home');
    refreshLeaderboard(newProfile);
  };

  const handleUpdateProfile = async (data: {
    name: string;
    language: Language;
    countryCode: string;
    avatar: AvatarId;
  }) => {
    if (!player) return;
    const updated: PlayerProfile = {
      ...player,
      name: data.name,
      language: data.language,
      countryCode: data.countryCode,
      avatar: data.avatar,
    };
    saveStoredProfile(updated);
    setPlayer(updated);
    setPreviewLang(updated.language);
    setScreen('home');
    refreshLeaderboard(updated);
  };

  const handleChangeLanguage = (lang: Language) => {
    setPreviewLang(lang);
    if (!player) return;
    const updated: PlayerProfile = { ...player, language: lang };
    saveStoredProfile(updated);
    setPlayer(updated);
  };

  const handleStartNormalGame = async (
    playScope: PlayScope,
    category: CategorySelection
  ) => {
    setLastPlayScope(playScope);
    setLastCategory(category);

    const todayKey = getLocalDateKey();
    // Load device-saved questions + African news archive so the stock grows continuously
    let basePool: QuizQuestion[] = ALL_QUESTIONS;
    if (!isOnline) {
      basePool = (await loadOfflineQuestions().catch(() => null)) || ALL_QUESTIONS;
    }

    const savedNews =
      phoneNewsQuestions.length > 0
        ? phoneNewsQuestions
        : await loadPhoneNewsQuestions(todayKey).catch(() => []);
    const expandedPool = mergeQuestionPools(basePool, AFRICAN_NEWS_QUESTIONS, savedNews);

    const playerLevel = player
      ? getPlayerLevelInfo(player.totalScore, player.language).level
      : 1;

    // Lock playScope and category for all 10 questions of this match
    const { questions, newlyExhaustedPool } = selectNormalGameQuestions(
      playScope,
      category,
      seenIds,
      expandedPool,
      playerLevel
    );
    const nextSeen = newlyExhaustedPool
      ? questions.map((q) => q.id)
      : Array.from(new Set([...seenIds, ...questions.map((q) => q.id)]));
    setSeenIds(nextSeen);
    saveSeenQuestionIds(nextSeen);

    setActivePlayScope(playScope);
    setActiveCategory(category);
    setActiveQuestions(questions);
    setScreen('playingNormal');
  };

  const handleStartDailyChallenge = async () => {
    if (!player) return;
    const todayKey = getLocalDateKey();
    if (player.dailyHistory[todayKey]) return;

    let newsPool = phoneNewsQuestions;
    let exactToday = todayNewsQuestions;

    if (isOnline && exactToday.length < 10) {
      const pkg = await fetchDailyNewsPackage(todayKey).catch(() => null);
      if (pkg) {
        exactToday = pkg.todayQuestions;
        newsPool = pkg.phoneNewsQuestions;
        setTodayNewsQuestions(pkg.todayQuestions);
        setPhoneNewsQuestions(pkg.phoneNewsQuestions);
      }
    } else if (!isOnline && newsPool.length === 0) {
      newsPool = await loadPhoneNewsQuestions(todayKey).catch(() => []);
      setPhoneNewsQuestions(newsPool);
    }

    const dailyQuestions =
      exactToday.length >= 10
        ? balanceQuestionSet(exactToday.slice(0, 10))
        : selectDailyChallengeQuestions(todayKey, newsPool);

    setActivePlayScope({ type: 'all' });
    setActiveCategory('mixed');
    setActiveQuestions(dailyQuestions);
    setScreen('playingDaily');
  };

  const handleMatchFinished = async (result: GameResultPayload) => {
    if (!player) return;

    const previousLevel = getPlayerLevelInfo(player.totalScore, player.language).level;

    if (result.mode === 'normal') {
      const isDiaspora = result.category === 'diaspora';
      const updatedProfile: PlayerProfile = {
        ...player,
        bestGameScore: Math.max(player.bestGameScore, result.score),
        totalScore: player.totalScore + result.score,
        weeklyScore: player.weeklyScore + result.score,
        diasporaScore: isDiaspora
          ? (player.diasporaScore || 0) + result.score
          : player.diasporaScore || 0,
        bestDiasporaScore: isDiaspora
          ? Math.max(player.bestDiasporaScore || 0, result.score)
          : player.bestDiasporaScore || 0,
        gamesPlayed: player.gamesPlayed + 1,
        gamesWon: player.gamesWon + (result.won ? 1 : 0),
      };
      const newLevel = getPlayerLevelInfo(updatedProfile.totalScore, updatedProfile.language).level;
      saveStoredProfile(updatedProfile);
      setPlayer(updatedProfile);
      setLastResult({
        ...result,
        previousLevel,
        newLevel,
      });
      setScreen('result');

      const serverRes = await submitScoreToServer({
        profile: updatedProfile,
        mode: 'normal',
        category: result.category,
        gameScore: result.score,
        bonus: 0,
        streak: updatedProfile.streak,
        answerLog: result.answerLog,
      });
      setPendingSyncCount(getPendingScoreCount());
      if (serverRes.leaderboard) {
        setLeaderboard(serverRes.leaderboard);
      }
      return;
    }

    // Daily Challenge completion
    const todayKey = getLocalDateKey();
    const yesterdayKey = getPreviousDateKey(todayKey);
    const freshPlayer = evaluateDailyStreakFreshness(player);
    const newStreak =
      freshPlayer.lastDailyDate === yesterdayKey ? freshPlayer.streak + 1 : 1;
    const bonus = computeDailyBonus(newStreak);
    const earnedTotal = result.score + bonus;

    const updatedProfile: PlayerProfile = {
      ...freshPlayer,
      streak: newStreak,
      bestStreak: Math.max(freshPlayer.bestStreak, newStreak),
      lastDailyDate: todayKey,
      missedYesterdayNotice: false,
      totalScore: freshPlayer.totalScore + earnedTotal,
      weeklyScore: freshPlayer.weeklyScore + earnedTotal,
      bestGameScore: Math.max(freshPlayer.bestGameScore, result.score),
      dailyHistory: {
        ...freshPlayer.dailyHistory,
        [todayKey]: {
          score: result.score,
          bonus,
          correctCount: result.correctCount,
        },
      },
    };
    const newLevel = getPlayerLevelInfo(updatedProfile.totalScore, updatedProfile.language).level;
    saveStoredProfile(updatedProfile);
    setPlayer(updatedProfile);
    setLastResult({
      ...result,
      bonus,
      newStreak,
      previousLevel,
      newLevel,
    });
    setScreen('result');

    const serverRes = await submitScoreToServer({
      profile: updatedProfile,
      mode: 'daily',
      gameScore: result.score,
      bonus,
      streak: newStreak,
      answerLog: result.answerLog,
    });
    setPendingSyncCount(getPendingScoreCount());
    if (serverRes.leaderboard) {
      setLeaderboard(serverRes.leaderboard);
    }
  };

  if (!player || screen === 'onboarding') {
    return (
      <OnboardingScreen
        mode="create"
        initialLanguage={previewLang}
        onLanguagePreview={(lang) => setPreviewLang(lang)}
        onSubmit={handleCreateProfile}
      />
    );
  }

  if (screen === 'editProfile') {
    return (
      <OnboardingScreen
        mode="edit"
        initialName={player.name}
        initialLanguage={player.language}
        initialCountryCode={player.countryCode}
        initialAvatar={player.avatar}
        onLanguagePreview={handleChangeLanguage}
        onSubmit={handleUpdateProfile}
        onCancel={() => setScreen('home')}
      />
    );
  }

  const isPlaying = screen === 'playingNormal' || screen === 'playingDaily';

  return (
    <div className="min-h-screen africa-arena-bg text-[var(--qa-text)]">
      <TopHeader
        player={player}
        firebaseUser={firebaseUser}
        isOnline={isOnline}
        pendingSyncCount={pendingSyncCount}
        justSyncedNotice={justSyncedNotice}
        onEditProfile={() => {
          if (!isPlaying) setScreen('editProfile');
        }}
        onChangeLanguage={handleChangeLanguage}
        onSignInGoogle={handleSignInGoogle}
        onSignOutGoogle={handleSignOutGoogle}
        onGoHome={() => {
          if (!isPlaying) setScreen('home');
        }}
      />

      {screen === 'home' && (
        <HomeScreen
          player={player}
          leaderboard={leaderboard}
          onPlayClick={() => setScreen('setupGame')}
          onDailyClick={() => {
            const evaluated = evaluateDailyStreakFreshness(player);
            if (evaluated !== player) {
              saveStoredProfile(evaluated);
              setPlayer(evaluated);
            }
            setScreen('dailyHub');
          }}
          onLeaderboardClick={() => setScreen('leaderboard')}
          onWeeklyClick={() => setScreen('weekly')}
          onDuelClick={() => setScreen('duel')}
          onChangeLanguage={handleChangeLanguage}
        />
      )}

      {screen === 'setupGame' && (
        <SetupGameScreen
          language={player.language}
          initialScope={lastPlayScope}
          initialCategory={lastCategory}
          onBack={() => setScreen('home')}
          onStartGame={handleStartNormalGame}
        />
      )}

      {screen === 'playingNormal' && (
        <QuizArena
          mode="normal"
          language={player.language}
          playScope={activePlayScope}
          category={activeCategory}
          questions={activeQuestions}
          bestGameScore={player.bestGameScore}
          onFinish={handleMatchFinished}
          onQuit={() => setScreen('home')}
        />
      )}

      {screen === 'dailyHub' && (
        <DailyChallengeHub
          player={player}
          onBack={() => setScreen('home')}
          onStartDaily={handleStartDailyChallenge}
        />
      )}

      {screen === 'playingDaily' && (
        <QuizArena
          mode="daily"
          language={player.language}
          playScope={{ type: 'all' }}
          category="mixed"
          questions={activeQuestions}
          bestGameScore={player.bestGameScore}
          onFinish={handleMatchFinished}
          onQuit={() => setScreen('dailyHub')}
        />
      )}

      {screen === 'result' && lastResult && (
        <ResultScreen
          player={player}
          result={lastResult}
          onReplayNormal={() => setScreen('setupGame')}
          onGoHome={() => setScreen('home')}
        />
      )}

      {screen === 'leaderboard' && (
        <LeaderboardScreen
          player={player}
          initialData={leaderboard}
          onBack={() => setScreen('home')}
        />
      )}

      {screen === 'weekly' && (
        <WeeklyCompetitionScreen
          player={player}
          initialData={leaderboard}
          onBack={() => setScreen('home')}
        />
      )}

      {screen === 'duel' && (
        <DuelScreen
          player={player}
          firebaseUser={firebaseUser}
          onSignInGoogle={handleSignInGoogle}
          isOnline={isOnline}
          initialRoomCode={pendingDuelCode}
          onClearInitialRoomCode={() => {
            setPendingDuelCode(null);
            if (typeof window !== 'undefined' && window.location.search.includes('duel=')) {
              const url = new URL(window.location.href);
              url.searchParams.delete('duel');
              window.history.replaceState({}, '', url.toString());
            }
          }}
          onDuelFinished={(myScore) => {
            if (myScore > 0) {
              const updated: PlayerProfile = {
                ...player,
                bestGameScore: Math.max(player.bestGameScore, myScore),
                totalScore: player.totalScore + myScore,
                weeklyScore: player.weeklyScore + myScore,
                gamesPlayed: player.gamesPlayed + 1,
              };
              saveStoredProfile(updated);
              setPlayer(updated);
              refreshLeaderboard(updated);
            }
          }}
          onBack={() => setScreen('home')}
        />
      )}
    </div>
  );
}

import { L } from '../../countriesPart1';
import { mkQ } from './packHelpers';

export const BURKINA_CURATED_PACK = [
  mkQ({
    id: 'cur_BF_01',
    countryCode: 'BF',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'pitroipa_can_2013_mvp',
    source: 'CAF — Palmarès CAN 2013',
    prompt: L(
      'Quel ailier rapide des Étalons du Burkina Faso a été élu meilleur joueur de la CAN 2013 en Afrique du Sud après avoir mené son équipe jusqu’en finale ?',
      'Which pacy Burkina Faso winger was named Player of the Tournament at the 2013 Africa Cup of Nations after inspiring their run to the final?',
      '¿Qué extremo de los Sementales de Burkina Faso fue elegido mejor jugador de la Copa Africana 2013?',
      'Qual ponta dos Garanhões de Burkina Faso foi eleito melhor jogador da CAN 2013?',
      'أي جناح سريع لمنتخب خيول بوركينا فاسو تُوّج بجائزة أفضل لاعب في كأس أمم إفريقيا 2013؟'
    ),
    countryModePrompt: L(
      'Quel ailier des Étalons a été élu meilleur joueur de la CAN 2013 après avoir porté l’équipe jusqu’à sa première finale continentale ?',
      'Which Étalons winger won Player of the Tournament at the 2013 Africa Cup of Nations after leading the team to its maiden final?',
      '¿Qué extremo de los Sementales fue elegido mejor jugador de la CAN 2013 tras alcanzar la primera final?',
      'Qual ponta dos Garanhões foi eleito melhor jogador da CAN 2013 após levar a seleção à sua primeira final?',
      'أي جناح في منتخب الخيول فاز بجائزة أفضل لاعب في أمم إفريقيا 2013 بعد بلوغ النهائي لأول مرة؟'
    ),
    correct: L('Jonathan Pitroipa', 'Jonathan Pitroipa', 'Jonathan Pitroipa', 'Jonathan Pitroipa', 'جوناثان بيترويبا'),
    distractors: [
      L('Moumouni Dagano', 'Moumouni Dagano', 'Moumouni Dagano', 'Moumouni Dagano', 'موموني داغانو'),
      L('Wilfried Sanou', 'Wilfried Sanou', 'Wilfried Sanou', 'Wilfried Sanou', 'ويلفريد سانو'),
      L('Bakary Koné', 'Bakary Koné', 'Bakary Koné', 'Bakary Koné', 'باكاري كوني'),
    ],
    explanation: L(
      'Auteur d’un tournoi éblouissant en 2013, Jonathan Pitroipa termina meilleur joueur de la compétition tandis que les Étalons s’inclinaient 1-0 en finale face au Nigeria.',
      'Jonathan Pitroipa starred throughout the 2013 AFCON as Burkina Faso reached their first final, narrowly losing 1-0 to Nigeria.',
      'Jonathan Pitroipa brilló en la CAN 2013 y llevó a los Sementales a su primera final continental.',
      'Jonathan Pitroipa brilhou na CAN 2013, levando a seleção à sua primeira final continental.',
      'تألق جوناثان بيترويبا في نسخة 2013 ونال جائزة أفضل لاعب في البطولة بعد وصول المنتخب إلى أول نهائي قاري.'
    ),
  }),
  mkQ({
    id: 'cur_BF_02',
    countryCode: 'BF',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'aristide_bance_can_2013_2017',
    source: 'CAF — Archives CAN 2013 & 2017',
    prompt: L(
      'Quel avant-centre burkinabè à la crête teinte en blond est devenu célèbre pour ses buts décisifs en demi-finale de la CAN 2013 contre le Ghana et en quart de la CAN 2017 contre la Tunisie ?',
      'Which tall striker with a signature blonde mohawk scored decisive AFCON knockout goals against Ghana in 2013 and Tunisia in 2017 for Burkina Faso?',
      '¿Qué delantero centro de Burkina Faso destacó con goles decisivos en las Copas Africanas de 2013 y 2017?',
      'Qual centroavante de Burkina Faso marcou gols decisivos nas CANs de 2013 e 2017?',
      'أي مهاجم فارع الطول لمع بأهدافه الحاسمة في ربع ونصف نهائي أمم إفريقيا 2013 و2017 مع الخيول؟'
    ),
    countryModePrompt: L(
      'Quel attaquant longiligne des Étalons, reconnaissable à sa crête blonde, a marqué l’égalisation décisive face au Ghana en demi-finale de la CAN 2013 ?',
      'Which tall Étalons striker with a blonde mohawk scored the vital equalizer against Ghana in the 2013 AFCON semifinal?',
      '¿Qué delantero de los Sementales anotó el gol del empate ante Ghana en la semifinal de la CAN 2013?',
      'Qual atacante dos Garanhões marcou o gol de empate contra Gana na semifinal da CAN 2013?',
      'أي مهاجم للمنتخب اشتهر بتسديدة التعادل الحاسمة ضد غانا في نصف نهائي أمم إفريقيا 2013؟'
    ),
    correct: L('Aristide Bancé', 'Aristide Bancé', 'Aristide Bancé', 'Aristide Bancé', 'أريستيد بانسي'),
    distractors: [
      L('Prejuce Nakoulma', 'Prejuce Nakoulma', 'Prejuce Nakoulma', 'Prejuce Nakoulma', 'بريجوس ناكولما'),
      L('Alain Traoré', 'Alain Traoré', 'Alain Traoré', 'Alain Traoré', 'آلان تراوري'),
      L('Issouf Ouattara', 'Issouf Ouattara', 'Issouf Ouattara', 'Issouf Ouattara', 'إيسوف واتارا'),
    ],
    explanation: L(
      'Aristide Bancé s’est imposé comme un héros national des Étalons par son engagement physique, sa frappe lourde et ses buts clés en phases finales de CAN.',
      'Aristide Bancé became an iconic AFCON forward through his aerial power, fierce strikes, and knockout goals in 2013 and 2017.',
      'Aristide Bancé se convirtió en icono de la selección por sus potentes remates y goles en fases eliminatorias.',
      'Aristide Bancé tornou-se ídolo nacional pelos gols decisivos em fases eliminatórias da CAN.',
      'أصبح أريستيد بانسي أحد رموز المنتخب بفضل أهدافه القاتلة في الأدوار الإقصائية لكأس أمم إفريقيا.'
    ),
  }),
  mkQ({
    id: 'cur_BF_03',
    countryCode: 'BF',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'edmond_tapsoba_leverkusen',
    source: 'Bundesliga & CAF — Saison 2023-2024',
    prompt: L(
      'Quel défenseur central originaire de Ouagadougou a remporté la Bundesliga sans aucune défaite en 2023-2024 avec le Bayer Leverkusen ?',
      'Which Ouagadougou-born centre-back helped Bayer Leverkusen win an unbeaten Bundesliga title in 2023–24?',
      '¿Qué defensa central nacido en Uagadugú ganó la Bundesliga invicto en 2023-2024 con el Bayer Leverkusen?',
      'Qual zagueiro nascido em Uagadugu venceu a Bundesliga invicto em 2023-24 pelo Bayer Leverkusen?',
      'أي مدافع ولد في واغادوغو وتُوج بالدوري الألماني دون هزيمة موسم 2023-2024 مع باير ليفركوزن؟'
    ),
    countryModePrompt: L(
      'Quel défenseur central formé au pays a décroché en 2023-2024 un titre historique de champion d’Allemagne invaincu sous le maillot du Bayer Leverkusen ?',
      'Which centre-back won a historic unbeaten 2023–24 German Bundesliga championship with Bayer Leverkusen?',
      '¿Qué defensa central conquistó invicto la Bundesliga 2023-2024 con el Bayer Leverkusen?',
      'Qual zagueiro conquistou de forma invicta a Bundesliga 2023-24 com o Bayer Leverkusen?',
      'أي مدافع حقق لقب الدوري الألماني دون أي خسارة موسم 2023-2024 مع باير ليفركوزن؟'
    ),
    correct: L('Edmond Tapsoba', 'Edmond Tapsoba', 'Edmond Tapsoba', 'Edmond Tapsoba', 'إدموند تابسوبا'),
    distractors: [
      L('Issoufou Dayo', 'Issoufou Dayo', 'Issoufou Dayo', 'Issoufou Dayo', 'إيسوفو دايو'),
      L('Steeve Yago', 'Steeve Yago', 'Steeve Yago', 'Steeve Yago', 'ستيف ياغو'),
      L('Nasser Djiga', 'Nasser Djiga', 'Nasser Djiga', 'Nasser Djiga', 'ناصر دجيغا'),
    ],
    explanation: L(
      'Passé par Salitas FC puis Vitória Guimarães, Edmond Tapsoba est devenu un pilier défensif du Bayer Leverkusen lors du doublé historique 2023-2024.',
      'Rising from Salitas FC to Europe, Edmond Tapsoba anchored Bayer Leverkusen’s defence during their historic unbeaten Bundesliga and Cup double.',
      'Formado en Salitas FC, Edmond Tapsoba fue pieza clave en la zaga campeona del Bayer Leverkusen.',
      'Revelado pelo Salitas FC, Edmond Tapsoba foi pilar defensivo no título invicto do Bayer Leverkusen.',
      'تألق إدموند تابسوبا في خط دفاع باير ليفركوزن خلال موسم الثنائية التاريخية دون هزيمة في الدوري الألماني.'
    ),
  }),
  mkQ({
    id: 'cur_BF_04',
    countryCode: 'BF',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'bertrand_traore_lyon_aston_villa',
    source: 'UEFA & CAF — Profils Étalons',
    prompt: L(
      'Quel gaucher créatif originaire de Bobo-Dioulasso, frère cadet d’Alain Traoré, a porté les couleurs de Chelsea, de l’Ajax, de l’Olympique Lyonnais et d’Aston Villa ?',
      'Which creative left-footed forward from Bobo-Dioulasso, younger brother of Alain Traoré, played for Chelsea, Ajax, Lyon, and Aston Villa?',
      '¿Qué zurdo nacido en Bobo-Dioulasso y hermano de Alain Traoré jugó en Ajax, Lyon y Aston Villa?',
      'Qual atacante canhoto nascido em Bobo-Dioulasso, irmão de Alain Traoré, atuou por Ajax, Lyon e Aston Villa?',
      'أي مهاجم أعسر من بوبو ديولاسو وشقيق آلان تراوري لعب لأندية تشيلسي وأياكس وليون وأستون فيلا؟'
    ),
    countryModePrompt: L(
      'Quel attaquant gaucher né à Bobo-Dioulasso, capitaine des Étalons, a évolué notamment à l’Ajax Amsterdam, à Lyon et à Aston Villa ?',
      'Which left-footed forward from Bobo-Dioulasso and Étalons captain starred for Ajax, Lyon, and Aston Villa?',
      '¿Qué delantero zurdo nacido en Bobo-Dioulasso y capitán de los Sementales jugó en Ajax, Lyon y Aston Villa?',
      'Qual atacante canhoto nascido em Bobo-Dioulasso jogou por Ajax, Lyon e Aston Villa?',
      'أي مهاجم أعسر من مواليد بوبو ديولاسو وقائد للمنتخب لعب لأياكس وليون وأستون فيلا؟'
    ),
    correct: L('Bertrand Traoré', 'Bertrand Traoré', 'Bertrand Traoré', 'Bertrand Traoré', 'بيرتراند تراوري'),
    distractors: [
      L('Dango Ouattara', 'Dango Ouattara', 'Dango Ouattara', 'Dango Ouattara', 'دانغو واتارا'),
      L('Hassane Bandé', 'Hassane Bandé', 'Hassane Bandé', 'Hassane Bandé', 'حسان باندي'),
      L('Cyrille Bayala', 'Cyrille Bayala', 'Cyrille Bayala', 'Cyrille Bayala', 'سيريل بايالا'),
    ],
    explanation: L(
      'Révélé très jeune à la CAN 2012 à 16 ans, Bertrand Traoré a atteint la finale de la Ligue Europa avec l’Ajax puis les demi-finales de la Ligue des champions avec Lyon.',
      'Debuting at AFCON aged 16 in 2012, Bertrand Traoré reached the Europa League final with Ajax and the Champions League semifinals with Lyon.',
      'Debutante en la CAN con 16 años, Bertrand Traoré brilló en Europa con Ajax, Lyon y Aston Villa.',
      'Estreando na CAN aos 16 anos, Bertrand Traoré destacou-se por Ajax, Lyon e Aston Villa.',
      'بدأ بيرتراند تراوري مسيرته الدولية مبكراً في 2012 وتألق أوروبياً مع أياكس وأولمبيك ليون وأستون فيلا.'
    ),
  }),
  mkQ({
    id: 'cur_BF_05',
    countryCode: 'BF',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'hugues_fabrice_zango_triple_saut',
    source: 'CIO & World Athletics — Tokyo 2020 / Budapest 2023',
    prompt: L(
      'Quel athlète né à Ouagadougou a offert au Burkina Faso la toute première médaille olympique de son histoire à Tokyo en 2021 avant d’être sacré champion du monde du triple saut en 2023 ?',
      'Which Ouagadougou-born athlete won Burkina Faso’s first-ever Olympic medal in Tokyo 2021 and became 2023 triple jump World Champion?',
      '¿Qué atleta dio a Burkina Faso su primera medalla olímpica en Tokio 2021 y ganó el oro mundial de triple salto en 2023?',
      'Qual atleta conquistou a primeira medalha olímpica de Burkina Faso em Tóquio 2021 e foi campeão mundial em 2023?',
      'أي رياضي من واغادوغو منح بلاده أول ميدالية أولمبية في تاريخها بطوكيو ثم تُوّج بطلاً للعالم في الوثب الثلاثي 2023؟'
    ),
    countryModePrompt: L(
      'Quel spécialiste du triple saut a remporté la première médaille olympique de l’histoire du pays à Tokyo avant de décrocher l’or mondial à Budapest en 2023 ?',
      'Which triple jumper captured the nation’s historic first Olympic medal in Tokyo and went on to win 2023 World Championship gold in Budapest?',
      '¿Qué saltador ganó la primera medalla olímpica del país en Tokio y el oro mundial en Budapest 2023?',
      'Qual saltador conquistou a primeira medalha olímpica do país em Tóquio e o ouro mundial em Budapeste 2023?',
      'أي بطل في الوثب الثلاثي أحرز أول ميدالية أولمبية للبلاد في طوكيو ثم ذهبية بطولة العالم 2023؟'
    ),
    correct: L('Hugues Fabrice Zango', 'Hugues Fabrice Zango', 'Hugues Fabrice Zango', 'Hugues Fabrice Zango', 'هوغ فابريس زانغو'),
    distractors: [
      L('Franck Zio', 'Franck Zio', 'Franck Zio', 'Franck Zio', 'فرانك زيو'),
      L('Bienvenu Sawadogo', 'Bienvenu Sawadogo', 'Bienvenu Sawadogo', 'Bienvenu Sawadogo', 'بيانفونو ساوادوغو'),
      L('Marthe Koala', 'Marthe Koala', 'Marthe Koala', 'Marthe Koala', 'مارت كوالا'),
    ],
    explanation: L(
      'Également docteur en génie électrique, Hugues Fabrice Zango a sauté 17,47 m à Tokyo pour le bronze puis remporté le titre mondial en 2023 avec 17,64 m.',
      'Also holding a PhD in electrical engineering, Hugues Fabrice Zango won Olympic bronze in Tokyo and World Championships gold in Budapest in 2023.',
      'Además de doctor en ingeniería eléctrica, Hugues Fabrice Zango conquistó el bronce olímpico y el oro mundial.',
      'Doutor em engenharia elétrica, Hugues Fabrice Zango conquistou bronze olímpico e ouro mundial no salto triplo.',
      'جمع هوغ فابريس زانغو بين الدكتوراه في الهندسة الكهربائية وإحراز البرونزية الأولمبية وذهبية العالم في الوثب الثلاثي.'
    ),
  }),
  mkQ({
    id: 'cur_BF_06',
    countryCode: 'BF',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'iron_biby_cheick_sanou_log_lift',
    source: 'Guinness World Records & Giants Live',
    prompt: L(
      'Sous quel surnom Cheick Ahmed Al-Hassan Sanou, natif de Bobo-Dioulasso, est-il connu mondialement pour ses records absolus du monde en Log Lift ?',
      'Under what famous nickname is Bobo-Dioulasso strongman Cheick Ahmed Al-Hassan Sanou known worldwide for breaking Log Lift world records?',
      '¿Con qué apodo es conocido mundialmente el forzudo Cheick Ahmed Al-Hassan Sanou por sus récords mundiales de Log Lift?',
      'Por qual apelido o atleta de força Cheick Ahmed Al-Hassan Sanou é conhecido mundialmente no Log Lift?',
      'بأي لقب يُعرف البطل العالمي شيخ أحمد الحسن سانو من بوبو ديولاسو صاحب الأرقام القياسية في رفع الجذع؟'
    ),
    countryModePrompt: L(
      'Sous quel surnom le colosse natif de Bobo-Dioulasso Cheick Ahmed Al-Hassan Sanou détient-il plusieurs records du monde de Log Lift ?',
      'By what famous nickname is Bobo-Dioulasso’s multiple Log Lift world record holder Cheick Ahmed Al-Hassan Sanou known?',
      '¿Con qué apodo es conocido el campeón mundial de Log Lift Cheick Ahmed Al-Hassan Sanou?',
      'Por qual apelido é conhecido o recordista mundial de Log Lift Cheick Ahmed Al-Hassan Sanou?',
      'بأي لقب اشتهر البطل العالمي في رفع الأثقال الحديدية شيخ أحمد الحسن سانو من بوبو ديولاسو؟'
    ),
    correct: L('Iron Biby', 'Iron Biby', 'Iron Biby', 'Iron Biby', 'أيرون بيبي'),
    distractors: [
      L('Mighty Zango', 'Mighty Zango', 'Mighty Zango', 'Mighty Zango', 'مايتي زانغو'),
      L('Bobo Titan', 'Bobo Titan', 'Bobo Titan', 'Bobo Titan', 'بوبو تايتان'),
      L('Lion du Mouhoun', 'Lion du Mouhoun', 'León del Mouhoun', 'Leão do Mouhoun', 'أسد موهون'),
    ],
    explanation: L(
      'Iron Biby a élevé le record du monde officiel de Log Lift au-dessus de 230 kg devant des milliers de fans conquis par sa force et sa bienveillance.',
      'Known worldwide as Iron Biby, Cheick Sanou pushed the world Log Lift record past 230 kg and became an international strongman icon.',
      'Conocido como Iron Biby, Cheick Sanou superó los 230 kg en el récord mundial de Log Lift.',
      'Conhecido como Iron Biby, Cheick Sanou levou o recorde mundial de Log Lift acima dos 230 kg.',
      'حطم شيخ سانو الملقب بأيرون بيبي الرقم القياسي العالمي في رفع الجذع فوق 230 كيلوغراماً.'
    ),
  }),
  mkQ({
    id: 'cur_BF_07',
    countryCode: 'BF',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 1,
    topicKey: 'independance_5_aout_1960',
    source: 'Archives nationales — Proclamation de l’indépendance',
    prompt: L(
      'À quelle date précise la République de Haute-Volta, future Burkina Faso, a-t-elle proclamé son indépendance vis-à-vis de la France ?',
      'On what exact date did the Republic of Upper Volta (modern-day Burkina Faso) proclaim its independence from France?',
      '¿En qué fecha exacta proclamó su independencia la República del Alto Volta, actual Burkina Faso?',
      'Em que data exata a República do Alto Volta, atual Burkina Faso, proclamou sua independência da França?',
      'في أي تاريخ أُعلن استقلال جمهورية فولتا العليا (بوركينا فاسو حالياً) عن فرنسا؟'
    ),
    countryModePrompt: L(
      'À quelle date exacte de l’année 1960 la République de Haute-Volta a-t-elle proclamé son indépendance ?',
      'On what exact date in 1960 did Upper Volta proclaim its independence?',
      '¿En qué fecha exacta de 1960 proclamó su independencia el Alto Volta?',
      'Em que data exata de 1960 o Alto Volta proclamou sua independência?',
      'في أي يوم وشهر من عام 1960 أُعلن استقلال فولتا العليا؟'
    ),
    correct: L('Le 5 août 1960', 'August 5, 1960', '5 de agosto de 1960', '5 de agosto de 1960', '5 أغسطس 1960'),
    distractors: [
      L('Le 1er août 1960', 'August 1, 1960', '1 de agosto de 1960', '1 de agosto de 1960', '1 أغسطس 1960'),
      L('Le 7 août 1960', 'August 7, 1960', '7 de agosto de 1960', '7 de agosto de 1960', '7 أغسطس 1960'),
      L('Le 11 décembre 1958', 'December 11, 1958', '11 de diciembre de 1958', '11 de dezembro de 1958', '11 ديسمبر 1958'),
    ],
    explanation: L(
      'Après la proclamation de la République le 11 décembre 1958, la Haute-Volta accéda à la pleine souveraineté le 5 août 1960 avec Maurice Yaméogo à sa tête.',
      'Following its proclamation as a republic in December 1958, Upper Volta became fully independent on August 5, 1960.',
      'Tras proclamarse república en 1958, el Alto Volta alcanzó la independencia plena el 5 de agosto de 1960.',
      'Após tornar-se república em 1958, o Alto Volta conquistou independência plena em 5 de agosto de 1960.',
      'نالت فولتا العليا استقلالها الكامل في الخامس من أغسطس 1960 بعد إعلان الجمهورية عام 1958.'
    ),
  }),
  mkQ({
    id: 'cur_BF_08',
    countryCode: 'BF',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'maurice_yameogo_premier_president',
    source: 'Présidence — Histoire politique (1960)',
    prompt: L(
      'Qui fut le premier président de la République de Haute-Volta lors de son accession à l’indépendance en août 1960 ?',
      'Who served as the first President of independent Upper Volta in August 1960?',
      '¿Quién fue el primer presidente del Alto Volta independiente en agosto de 1960?',
      'Quem foi o primeiro presidente do Alto Volta independente em agosto de 1960?',
      'من كان أول رئيس لجمهورية فولتا العليا عند استقلالها في أغسطس 1960؟'
    ),
    countryModePrompt: L(
      'Quel dirigeant né à Koudougou devint le tout premier président de la République à l’indépendance en août 1960 ?',
      'Which Koudougou-born leader became the nation’s very first president at independence in August 1960?',
      '¿Qué líder nacido en Koudougou fue el primer presidente de la República en agosto de 1960?',
      'Qual líder nascido em Koudougou tornou-se o primeiro presidente da República em agosto de 1960?',
      'من الزعيم المولود في كودوغو الذي تولى رئاسة الجمهورية الأولى عند الاستقلال عام 1960؟'
    ),
    correct: L('Maurice Yaméogo', 'Maurice Yaméogo', 'Maurice Yaméogo', 'Maurice Yaméogo', 'موريس ياميوغو'),
    distractors: [
      L('Sangoulé Lamizana', 'Sangoulé Lamizana', 'Sangoulé Lamizana', 'Sangoulé Lamizana', 'سانغولي لاميزانا'),
      L('Gérard Kango Ouédraogo', 'Gérard Kango Ouédraogo', 'Gérard Kango Ouédraogo', 'Gérard Kango Ouédraogo', 'جيرار كانغو ويدراوغو'),
      L('Saye Zerbo', 'Saye Zerbo', 'Saye Zerbo', 'Saye Zerbo', 'ساي زيربو'),
    ],
    explanation: L(
      'Originaire de Koudougou, Maurice Yaméogo présida la République dès l’indépendance en 1960 avant d’être renversé par un soulèvement populaire en janvier 1966.',
      'Born in Koudougou, Maurice Yaméogo led the country at independence in 1960 until a popular uprising in January 1966.',
      'Nacido en Koudougou, Maurice Yaméogo dirigió el país desde 1960 hasta el levantamiento de enero de 1966.',
      'Nascido em Koudougou, Maurice Yaméogo presidiu o país desde 1960 até o levante popular de 1966.',
      'تولى موريس ياميوغو أول رئاسة للبلاد عام 1960 حتى انتفاضة يناير 1966 الشعبية.'
    ),
  }),
  mkQ({
    id: 'cur_BF_09',
    countryCode: 'BF',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'daniel_ouezzin_coulibaly_rda',
    source: 'Encyclopédie d’histoire politique ouest-africaine',
    prompt: L(
      'Quel grand tribun du Rassemblement Démocratique Africain (RDA), vice-président du Conseil de gouvernement de Haute-Volta en 1957, a donné son nom à un grand stade de Bobo-Dioulasso et à un pont ?',
      'Which influential African Democratic Rally (RDA) leader who chaired Upper Volta’s 1957 governing council is commemorated across Bobo-Dioulasso?',
      '¿Qué destacado dirigente del RDA presidió el Consejo de Gobierno del Alto Volta en 1957?',
      'Qual importante líder do RDA presidiu o Conselho de Governo do Alto Volta em 1957?',
      'أي قيادي بارز في التجمع الديمقراطي الإفريقي ترأس مجلس حكومة فولتا العليا عام 1957؟'
    ),
    countryModePrompt: L(
      'Quel compagnon de Félix Houphouët-Boigny au RDA et figure majeure de la marche vers l’autonomie de 1957 porte son nom sur un boulevard majeur de Ouagadougou ?',
      'Which key 1957 autonomy leader and close ally of Félix Houphouët-Boigny gave his name to major boulevards and schools?',
      '¿Qué dirigente clave de la autonomía de 1957 da nombre a importantes avenidas de Uagadugú?',
      'Qual líder fundamental da autonomia de 1957 dá nome a grandes avenidas do país?',
      'أي زعيم وطني بارز من رواد الحكم الذاتي عام 1957 سُميت باسمه شوارع ومنشآت كبرى؟'
    ),
    correct: L('Daniel Ouezzin Coulibaly', 'Daniel Ouezzin Coulibaly', 'Daniel Ouezzin Coulibaly', 'Daniel Ouezzin Coulibaly', 'دانييل ويزان كوليبالي'),
    distractors: [
      L('Nazi Boni', 'Nazi Boni', 'Nazi Boni', 'Nazi Boni', 'نازي بوني'),
      L('Joseph Conombo', 'Joseph Conombo', 'Joseph Conombo', 'Joseph Conombo', 'جوزيف كونومبو'),
      L('Bougouraoua Ouédraogo', 'Bougouraoua Ouédraogo', 'Bougouraoua Ouédraogo', 'Bougouraoua Ouédraogo', 'بوغوراوا ويدراوغو'),
    ],
    explanation: L(
      'Respecté dans toute l’Afrique occidentale française, Daniel Ouezzin Coulibaly mena la Haute-Volta vers l’autonomie interne avant son décès prématuré en septembre 1958.',
      'Revered across West Africa, Daniel Ouezzin Coulibaly steered Upper Volta to internal self-government before passing away in September 1958.',
      'Muy respetado en África Occidental, Daniel Ouezzin Coulibaly condujo el territorio hacia la autonomía interna en 1957.',
      'Respeitado em toda a África Ocidental, Daniel Ouezzin Coulibaly conduziu o país rumo à autonomia interna.',
      'قاد دانييل ويزان كوليبالي مرحلة الحكم الذاتي في أواخر الخمسينيات قبل وفاته عام 1958.'
    ),
  }),
  mkQ({
    id: 'cur_BF_10',
    countryCode: 'BF',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 2,
    topicKey: 'joseph_ki_zerbo_historien',
    source: 'UNESCO — Histoire générale de l’Afrique',
    prompt: L(
      'Quel célèbre historien et intellectuel né à Toma a dirigé le premier volume de l’Histoire générale de l’Afrique pour l’UNESCO et écrit « Histoire de l’Afrique noire » ?',
      'Which renowned Toma-born historian edited UNESCO’s General History of Africa Volume I and authored "Histoire de l’Afrique noire"?',
      '¿Qué célebre historiador nacido en Toma dirigió el primer volumen de la Historia General de África de la UNESCO?',
      'Qual célebre historiador nascido em Toma coordenou o primeiro volume da História Geral da África da UNESCO?',
      'أي مؤرخ ومفكر بارز ولد في توما أشرف على المجلد الأول من تاريخ إفريقيا العام لليونسكو؟'
    ),
    countryModePrompt: L(
      'Quel éminent historien né à Toma en 1922 est mondialement reconnu pour son œuvre fondatrice « Histoire de l’Afrique noire » et la collection UNESCO ?',
      'Which eminent Toma-born historian (1922–2006) wrote the landmark "Histoire de l’Afrique noire" and led UNESCO’s African history project?',
      '¿Qué eminente historiador nacido en Toma escribió "Histoire de l’Afrique noire"?',
      'Qual eminente historiador nascido em Toma escreveu "Histoire de l’Afrique noire"?',
      'أي مؤرخ بارز ولد في توما عام 1922 واشتهر بموسوعة تاريخ إفريقيا العام؟'
    ),
    correct: L('Joseph Ki-Zerbo', 'Joseph Ki-Zerbo', 'Joseph Ki-Zerbo', 'Joseph Ki-Zerbo', 'جوزيف كي زيربو'),
    distractors: [
      L('Cheikh Anta Diop', 'Cheikh Anta Diop', 'Cheikh Anta Diop', 'Cheikh Anta Diop', 'شيخ أنتا ديوب'),
      L('Théophile Obenga', 'Théophile Obenga', 'Théophile Obenga', 'Théophile Obenga', 'تيوفيل أوبينغا'),
      L('Boubou Hama', 'Boubou Hama', 'Boubou Hama', 'Boubou Hama', 'بوبو هاما'),
    ],
    explanation: L(
      'Premier agrégé d’histoire d’Afrique noire francophone, Joseph Ki-Zerbo a consacré sa vie à réhabiliter l’histoire du continent écrite par des Africains.',
      'As Francophone West Africa’s first agrégé historian, Joseph Ki-Zerbo transformed African historiography from an African perspective.',
      'Primer catedrático africano de historia en lengua francesa, Joseph Ki-Zerbo renovó la historiografía del continente.',
      'Primeiro professor catedrático africano de história em língua francesa, Joseph Ki-Zerbo transformou os estudos históricos.',
      'يُعد جوزيف كي زيربو من أعظم مؤرخي القارة وأسهم في كتابة التاريخ الإفريقي برؤية إفريقية أصيلة.'
    ),
  }),
  mkQ({
    id: 'cur_BF_11',
    countryCode: 'BF',
    category: 'history',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'ruines_loropeni_unesco',
    source: 'UNESCO — Liste du patrimoine mondial (2009)',
    prompt: L(
      'Quel ensemble de hautes murailles de pierre latéritique datant du XIe siècle, lié au commerce transsaharien de l’or dans le sud-ouest du Burkina Faso, fut le premier site du pays classé à l’UNESCO ?',
      'Which 11th-century stone enclosure linked to the trans-Saharan gold trade in southwestern Burkina Faso became the country’s first UNESCO World Heritage site?',
      '¿Qué recinto amurallado del siglo XI ligado al comercio de oro fue el primer sitio UNESCO de Burkina Faso?',
      'Qual conjunto murado do século XI ligado ao comércio de ouro foi o primeiro sítio UNESCO de Burkina Faso?',
      'أي أسوار حجرية أثرية تعود للقرن الحادي عشر ارتبطت بتجارة الذهب وكانت أول موقع ليونسكو في البلاد؟'
    ),
    countryModePrompt: L(
      'Quel site archéologique fortifié en pierres sèches du Poni, témoin du commerce ancien de l’or dès le XIe siècle, fut le premier bien classé à l’UNESCO en 2009 ?',
      'Which dry-stone fortress ruins in the Poni region, tied to medieval gold trade, became the country’s first UNESCO World Heritage site in 2009?',
      '¿Qué ruinas fortificadas del siglo XI vinculadas al oro fueron el primer sitio UNESCO del país en 2009?',
      'Quais ruínas fortificadas do século XI ligadas ao ouro foram o primeiro sítio UNESCO do país em 2009?',
      'أي أطلال حجرية محصنة تعود للقرن الحادي عشر وتُعد أول موقع تراثي عالمي في البلاد عام 2009؟'
    ),
    correct: L('Les ruines de Loropéni', 'Ruins of Loropéni', 'Ruinas de Loropéni', 'Ruínas de Loropéni', 'أطلال لوروبيني'),
    distractors: [
      L('Les greniers de Koutammakou', 'Koutammakou granaries', 'Graneros de Koutammakou', 'Celeiros de Koutammakou', 'مخازن كوتاماكو'),
      L('La citadelle de Kong', 'Citadel of Kong', 'Ciudadela de Kong', 'Cidadela de Kong', 'قلعة كونغ'),
      L('Les tertres de Bura', 'Bura mounds', 'Túmulos de Bura', 'Túmulos de Bura', 'تلال بورا'),
    ],
    explanation: L(
      'Entourées de murs pouvant atteindre 6 mètres de haut, les ruines de Loropéni témoignent d’un riche comptoir aurifère entre la forêt et le Sahel.',
      'Surrounded by six-metre-high stone walls, the Loropéni settlement thrived as a fortress guarding the West African gold trade.',
      'Rodeadas por muros de hasta 6 metros, las ruinas de Loropéni protegían las rutas del oro hacia el Sahel.',
      'Cercadas por muros de até 6 metros, as ruínas de Loropéni guardavam as antigas rotas do ouro.',
      'تبرز أطلال لوروبيني بأسوارها الحجرية العالية كشاهد على ازدهار تجارة الذهب عبر الصحراء في العصور الوسطى.'
    ),
  }),
  mkQ({
    id: 'cur_BF_12',
    countryCode: 'BF',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'insurrection_octobre_2014',
    source: 'Archives contemporaines — Octobre 2014',
    prompt: L(
      'Quel événement majeur d’octobre 2014 à Ouagadougou a contraint Blaise Compaoré à la démission après 27 ans au pouvoir ?',
      'What landmark event in October 2014 in Ouagadougou forced Blaise Compaoré to resign after 27 years in power?',
      '¿Qué acontecimiento de octubre de 2014 en Uagadugú forzó la dimisión de Blaise Compaoré tras 27 años en el poder?',
      'Qual acontecimento de outubro de 2014 em Uagadugu forçou a renúncia de Blaise Compaoré após 27 anos no poder?',
      'أي حدث مفصلي في أكتوبر 2014 بواغادوغو أنهى حكم بليز كومباوري بعد 27 عاماً؟'
    ),
    countryModePrompt: L(
      'Qu’est-ce qui a provoqué le départ du pouvoir de Blaise Compaoré fin octobre 2014 après la tentative de modification de l’article 37 de la Constitution ?',
      'What ended Blaise Compaoré’s 27-year rule in late October 2014 after an attempt to amend constitutional term limits?',
      '¿Qué provocó la salida de Blaise Compaoré en octubre de 2014 al intentar reformar la Constitución?',
      'O que levou à saída de Blaise Compaoré em outubro de 2014 após tentar alterar os limites constitucionais?',
      'ما الذي أدى إلى تنحي بليز كومباوري أواخر أكتوبر 2014 عقب محاولة تعديل المادة 37 من الدستور؟'
    ),
    correct: L('Une insurrection populaire citoyenne', 'A popular citizen uprising', 'Una insurrección popular ciudadana', 'Uma insurreição popular cidadã', 'انتفاضة شعبية مدنية'),
    distractors: [
      L('Un référendum organisé par l’ONU', 'A UN-organized referendum', 'Un referéndum de la ONU', 'Um referendo da ONU', 'استفتاء نظمته الأمم المتحدة'),
      L('La fin naturelle de son deuxième mandat', 'The end of his second term', 'El fin de su segundo mandato', 'O fim do seu segundo mandato', 'انتهاء ولايته الثانية طبيعياً'),
      L('Une décision de la Cour de La Haye', 'A Hague Court ruling', 'Un fallo de La Haya', 'Uma decisão de Haia', 'قرار من محكمة لاهاي'),
    ],
    explanation: L(
      'Des centaines de milliers de citoyens descendus dans la rue les 30 et 31 octobre 2014 ont bloqué la révision constitutionnelle et ouvert une transition politique.',
      'Mass demonstrations on October 30–31, 2014 halted the proposed constitutional amendment and led to a civilian-led transition.',
      'Las movilizaciones masivas del 30 y 31 de octubre de 2014 frenaron la reforma y abrieron una transición.',
      'Manifestações em massa em 30 e 31 de outubro de 2014 barraram a emenda e abriram a transição.',
      'خرج مئات الآلاف في 30 و31 أكتوبر 2014 احتجاجاً على تعديل الدستور، ما أدى إلى استقالة الرئيس وبدء مرحلة انتقالية.'
    ),
  }),
  mkQ({
    id: 'cur_BF_13',
    countryCode: 'BF',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'norbert_zongo_journaliste',
    source: 'RSF & Prix Norbert Zongo du journalisme',
    prompt: L(
      'Quel célèbre journaliste d’investigation et fondateur de l’hebdomadaire « L’Indépendant », assassiné en décembre 1998 à Sapouy, reste un symbole de la liberté de la presse en Afrique de l’Ouest ?',
      'Which investigative journalist and founder of "L’Indépendant", killed at Sapouy in 1998, remains a West African press-freedom symbol?',
      '¿Qué periodista de investigación y fundador de "L’Indépendant", asesinado en 1998 en Sapouy, es símbolo de la libertad de prensa?',
      'Qual jornalista investigativo fundador de "L’Indépendant", morto em 1998, tornou-se símbolo da liberdade de imprensa?',
      'أي صحفي استقصائي مؤسس لصحيفة المستقل اغتيل عام 1998 وأصبح رمزاً لحرية الصحافة؟'
    ),
    countryModePrompt: L(
      'Quel directeur de publication du journal « L’Indépendant », assassiné en décembre 1998 à Sapouy, donne aujourd’hui son nom à un grand prix africain de journalisme ?',
      'Which editor of "L’Indépendant", assassinated at Sapouy in December 1998, inspired a major African investigative journalism award?',
      '¿Qué director del semanario "L’Indépendant", asesinado en Sapouy en 1998, da nombre a un gran premio periodístico?',
      'Qual diretor do jornal "L’Indépendant", assassinado em Sapouy em 1998, dá nome a um grande prêmio jornalístico?',
      'أي رئيس تحرير لصحيفة المستقل اغتيل في سابوي عام 1998 وسُميت باسمه جائزة إفريقية للصحافة الاستقصائية؟'
    ),
    correct: L('Norbert Zongo', 'Norbert Zongo', 'Norbert Zongo', 'Norbert Zongo', 'نوربير زونغو'),
    distractors: [
      L('Sébastien Ouédraogo', 'Sébastien Ouédraogo', 'Sébastien Ouédraogo', 'Sébastien Ouédraogo', 'سيباستيان ويدراوغو'),
      L('Guillaume Soro', 'Guillaume Soro', 'Guillaume Soro', 'Guillaume Soro', 'غيوم سورو'),
      L('Abdoulaye Sangaré', 'Abdoulaye Sangaré', 'Abdoulaye Sangaré', 'Abdoulaye Sangaré', 'عبدولاي سانغاري'),
    ],
    explanation: L(
      'Son assassinat en 1998 alors qu’il enquêtait sur une affaire d’État déclencha une vaste mobilisation civique ; son nom demeure indissociable du courage journalistique.',
      'Murdered in 1998 while investigating a high-profile case, Norbert Zongo’s legacy is honoured through the Norbert Zongo Investigative Journalism Prize.',
      'Asesinado en 1998 mientras investigaba un caso de Estado, su legado vive en el Premio Norbert Zongo.',
      'Morto em 1998 durante uma apuração investigativa, seu legado permanece no Prêmio Norbert Zongo.',
      'أثار اغتيال نوربير زونغو عام 1998 تعبئة مدنية واسعة وأُطلق اسمه على جائزة قارية مرموقة للصحافة الاستقصائية.'
    ),
  }),
  mkQ({
    id: 'cur_BF_14',
    countryCode: 'BF',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 3,
    topicKey: 'sangoule_lamizana_1966',
    source: 'Archives gouvernementales — 1966-1980',
    prompt: L(
      'Quel général prit la tête de la Haute-Volta en janvier 1966 après la grève générale contre Maurice Yaméogo et dirigea le pays jusqu’en 1980 ?',
      'Which general became head of state of Upper Volta in January 1966 after a general strike and led the country until 1980?',
      '¿Qué general asumió la jefatura del Alto Volta en enero de 1966 y gobernó hasta 1980?',
      'Qual general assumiu o comando do Alto Volta em janeiro de 1966 e governou até 1980?',
      'أي جنرال تولى حكم فولتا العليا في يناير 1966 بعد الإضراب العام وبقي في السلطة حتى 1980؟'
    ),
    countryModePrompt: L(
      'Quel général originaire de Dianra prit la tête du pays à la suite du soulèvement syndical de janvier 1966 et resta président jusqu’en 1980 ?',
      'Which Dianra-born general assumed power following the January 1966 union uprising and remained president until 1980?',
      '¿Qué general nacido en Dianra asumió el poder tras la huelga de enero de 1966 hasta 1980?',
      'Qual general nascido em Dianra assumiu o poder após a greve de janeiro de 1966 até 1980?',
      'أي جنرال تولى رئاسة البلاد إثر الإضراب النقابي في يناير 1966 وحتى عام 1980؟'
    ),
    correct: L('Sangoulé Lamizana', 'Sangoulé Lamizana', 'Sangoulé Lamizana', 'Sangoulé Lamizana', 'سانغولي لاميزانا'),
    distractors: [
      L('Jean-Baptiste Ouédraogo', 'Jean-Baptiste Ouédraogo', 'Jean-Baptiste Ouédraogo', 'Jean-Baptiste Ouédraogo', 'جان باتيست ويدراوغو'),
      L('Tiémoko Marc Garango', 'Tiémoko Marc Garango', 'Tiémoko Marc Garango', 'Tiémoko Marc Garango', 'تييموكو مارك غارانغو'),
      L('Benoît Ouédraogo', 'Benoît Ouédraogo', 'Benoît Ouédraogo', 'Benoît Ouédraogo', 'بينوا ويدراوغو'),
    ],
    explanation: L(
      'Doyen respecté des forces armées en 1966, Sangoulé Lamizana dirigea la Deuxième puis la Troisième République voltaïque jusqu’en novembre 1980.',
      'Called in during the January 1966 crisis, General Sangoulé Lamizana led the country through military and constitutional phases until 1980.',
      'General veterano, Sangoulé Lamizana gobernó el país durante las décadas de 1960 y 1970 hasta 1980.',
      'General respeitado, Sangoulé Lamizana governou o país em diferentes fases constitucionais até 1980.',
      'قاد الجنرال سانغولي لاميزانا البلاد من يناير 1966 حتى انقلاب نوفمبر 1980.'
    ),
  }),
  mkQ({
    id: 'cur_BF_15',
    countryCode: 'BF',
    category: 'history',
    subCategory: 'culture_traditions',
    difficulty: 3,
    topicKey: 'mogho_naaba_ceremonie_vendredi',
    source: 'Palais du Mogho Naaba — Tradition royale mossi',
    prompt: L(
      'Quel souverain traditionnel des Mossi préside chaque vendredi matin à Ouagadougou la célèbre cérémonie du « faux départ », où il fait mine de partir en guerre avant d’accepter la paix ?',
      'Which traditional Mossi monarch presides every Friday morning in Ouagadougou over the ceremonial "false departure" recalling a historic pledge for peace?',
      '¿Qué soberano tradicional mossi preside cada viernes en Uagadugú la ceremonia de la "falsa partida"?',
      'Qual soberano tradicional mossi preside às sextas-feiras em Uagadugu a cerimônia da "falsa partida"?',
      'أي سلطان تقليدي لشعب الموسي يترأس كل جمعة في واغادوغو طقس الرحيل الرمزي طلباً للسلام؟'
    ),
    countryModePrompt: L(
      'Quel titre porte le roi traditionnel du royaume mossi de Ouagadougou qui célèbre chaque vendredi la cérémonie historique du « faux départ » ?',
      'What title is held by the traditional Mossi monarch in Ouagadougou who performs the weekly Friday "false departure" ceremony?',
      '¿Qué título ostenta el rey tradicional mossi de Uagadugú que celebra cada viernes la "falsa partida"?',
      'Qual título tem o rei tradicional mossi de Uagadugu que realiza às sextas-feiras a cerimônia da "falsa partida"?',
      'ما اللقب الذي يحمله الملك التقليدي للموسي في واغادوغو والذي يؤدي كل جمعة طقس الرحيل الرمزي؟'
    ),
    correct: L('Le Mogho Naaba', 'The Mogho Naaba', 'El Mogho Naaba', 'O Mogho Naaba', 'الموغو نابا'),
    distractors: [
      L('Le Damel du Cayor', 'The Damel of Cayor', 'El Damel de Cayor', 'O Damel de Cayor', 'داميل كايور'),
      L('L’Alafin d’Oyo', 'The Alaafin of Oyo', 'El Alaafin de Oyo', 'O Alaafin de Oyo', 'ألافين أويو'),
      L('Le Mansa du Mandé', 'The Mansa of Mande', 'El Mansa de Mandé', 'O Mansa de Mandé', 'مانسا الماندي'),
    ],
    explanation: L(
      'Le rituel hebdomadaire du Mogho Naaba rappelle l’époque où le roi voulut mener une expédition militaire mais fut retenu par ses ministres pour préserver l’unité.',
      'The Mogho Naaba’s Friday ceremony reenacts an ancestral moment when royal counsellors persuaded the king to choose peace over war.',
      'El ritual del Mogho Naaba conmemora la decisión histórica de priorizar la paz sobre una guerra.',
      'O ritual do Mogho Naaba relembra o episódio histórico em que conselheiros persuadiram o rei a escolher a paz.',
      'يستحضر طقس الجمعة في قصر الموغو نابا ذكرى تاريخية آثر فيها الملك السلم ووحدة المملكة على الحرب.'
    ),
  }),
  mkQ({
    id: 'cur_BF_16',
    countryCode: 'BF',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'cascades_karfiguela_banfora',
    source: 'Office National du Tourisme — Cascades',
    prompt: L(
      'Comment s’appellent les célèbres chutes d’eau nichées au milieu des champs de canne à sucre et des manguiers près de Banfora, dans le sud-ouest du Burkina Faso ?',
      'What is the name of the famous stepped waterfalls nestled among sugarcane fields and mango groves near Banfora?',
      '¿Cómo se llaman las famosas cascadas situadas junto a Banfora, en el suroeste de Burkina Faso?',
      'Como se chamam as famosas cachoeiras perto de Banfora, no sudoeste de Burkina Faso?',
      'ما اسم الشلالات الشهيرة الواقعة وسط حقول قصب السكر قرب مدينة بانفورا؟'
    ),
    countryModePrompt: L(
      'Comment s’appellent les célèbres chutes d’eau en terrasses situées à quelques kilomètres de Banfora, très prisées pour leurs bassins naturels ?',
      'What is the name of the famous terraced waterfalls located a few kilometres from Banfora?',
      '¿Cómo se llaman las famosas cascadas escalonadas situadas cerca de Banfora?',
      'Como se chamam as famosas cachoeiras em degraus situadas perto de Banfora?',
      'ما اسم الشلالات المتدرجة الشهيرة الواقعة على بُعد كيلومترات قليلة من بانفورا؟'
    ),
    correct: L('Les cascades de Karfiguéla', 'Karfiguéla Waterfalls', 'Cascadas de Karfiguéla', 'Cachoeiras de Karfiguéla', 'شلالات كارفيغيلا'),
    distractors: [
      L('Les chutes de Kongou', 'Kongou Falls', 'Cataratas de Kongou', 'Cataratas de Kongou', 'شلالات كونغو'),
      L('Les cascades de Tagbaladougou', 'Tagbaladougou Falls', 'Cascadas de Tagbaladougou', 'Cachoeiras de Tagbaladougou', 'شلالات تاغبالادوغو'),
      L('Les chutes de Boali', 'Boali Falls', 'Cataratas de Boali', 'Cataratas de Boali', 'شلالات بوالي'),
    ],
    explanation: L(
      'Alimentées par le fleuve Comoé, les cascades de Karfiguéla offrent une fraîcheur verdoyante toute l’année dans la région des Cascades.',
      'Fed by the Comoé River, Karfiguéla Waterfalls form a lush oasis surrounded by sugarcane plantations and towering trees.',
      'Alimentadas por el río Comoé, las cascadas de Karfiguéla son uno de los paisajes más emblemáticos de Banfora.',
      'Alimentadas pelo rio Comoé, as cachoeiras de Karfiguéla formam um oásis verdejante perto de Banfora.',
      'تُعد شلالات كارفيغيلا على نهر كوموي من أجمل الوجهات الطبيعية في منطقة الشلالات قرب بانفورا.'
    ),
  }),
  mkQ({
    id: 'cur_BF_17',
    countryCode: 'BF',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'fleuve_mouhoun_volta_noire',
    source: 'Hydrologie du bassin de la Volta',
    prompt: L(
      'Sous quel nom burkinabè connaît-on depuis 1986 le principal fleuve permanent du pays, autrefois appelé la Volta Noire ?',
      'By what local name has the country’s main permanent river, formerly called the Black Volta, been officially known since 1986?',
      '¿Con qué nombre nacional se conoce desde 1986 al río antes llamado Volta Negro?',
      'Por qual nome local é conhecido desde 1986 o rio anteriormente chamado Volta Negro?',
      'بأي اسم وطني يُعرف منذ عام 1986 النهر الدائم الرئيسي الذي كان يُسمى سابقاً فولتا الأسود؟'
    ),
    countryModePrompt: L(
      'Quel nom actuel désigne l’ancien fleuve « Volta Noire », seul cours d’eau permanent traversant la moitié ouest et sud du pays ?',
      'What modern name was given to the former Black Volta, the country’s major year-round river?',
      '¿Qué nombre actual recibió el antiguo río Volta Negro, principal curso fluvial permanente?',
      'Qual nome atual recebeu o antigo rio Volta Negro, principal rio perene do país?',
      'ما الاسم الحالي لنهر فولتا الأسود سابقاً، وهو المجرى المائي الدائم الرئيسي في البلاد؟'
    ),
    correct: L('Le Mouhoun', 'The Mouhoun', 'El Mouhoun', 'O Mouhoun', 'نهر موهون'),
    distractors: [
      L('Le Nakambé', 'The Nakambé', 'El Nakambé', 'O Nakambé', 'نهر ناكامبي'),
      L('Le Nazinon', 'The Nazinon', 'El Nazinon', 'O Nazinon', 'نهر نازينون'),
      L('Le Sirba', 'The Sirba', 'El Sirba', 'O Sirba', 'نهر سيربا'),
    ],
    explanation: L(
      'En 1986, les trois branches de la Volta furent rebaptisées : la Volta Noire devint le Mouhoun, la Volta Blanche le Nakambé et la Volta Rouge le Nazinon.',
      'In 1986 the Black, White, and Red Voltas were renamed the Mouhoun, Nakambé, and Nazinon rivers respectively.',
      'En 1986 los ríos Volta Negro, Blanco y Rojo pasaron a llamarse Mouhoun, Nakambé y Nazinon.',
      'Em 1986 os rios Volta Negro, Branco e Vermelho foram rebatizados Mouhoun, Nakambé e Nazinon.',
      'أُعيدت تسمية روافد فولتا عام 1986، فأصبح فولتا الأسود هو موهون والأبيض ناكامبي والأحمر نازينون.'
    ),
  }),
  mkQ({
    id: 'cur_BF_18',
    countryCode: 'BF',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'cour_royale_tiebele_kassena_unesco',
    source: 'UNESCO — Liste du patrimoine mondial (2024)',
    prompt: L(
      'Quel village du sud du Burkina Faso, inscrit au patrimoine mondial de l’UNESCO en 2024, est célèbre pour les peintures géométriques réalisées par les femmes kassena sur les murs de sa cour royale ?',
      'Which southern village, inscribed by UNESCO in 2024, is famous for the geometric murals painted by Kassena women on its royal court walls?',
      '¿Qué aldea del sur de Burkina Faso, Patrimonio de la UNESCO en 2024, destaca por los murales geométricos de las mujeres kassena?',
      'Qual vila do sul de Burkina Faso, inscrita na UNESCO em 2024, é célebre pelos murais das mulheres kassena?',
      'أي قرية جنوب البلاد أُدرجت في اليونسكو عام 2024 وتشتهر بزخارف نساء كاسينا الهندسية على جدران قصرها الملكي؟'
    ),
    countryModePrompt: L(
      'Dans quelle localité du Nahouri se trouve la Cour royale kassena ornée de fresques murales rouges, blanches et noires classée à l’UNESCO en 2024 ?',
      'In which Nahouri town does the UNESCO-listed Kassena Royal Court feature iconic red, white, and black geometric adobe murals?',
      '¿En qué localidad de Nahouri se halla la Corte Real kassena inscrita en la UNESCO en 2024?',
      'Em qual localidade de Nahouri fica a Corte Real kassena inscrita na UNESCO em 2024?',
      'في أي بلدة تقع الساحة الملكية لقوم كاسينا المزخرفة بجداريات هندسية والمدرجة في اليونسكو عام 2024؟'
    ),
    correct: L('Tiébélé', 'Tiébélé', 'Tiébélé', 'Tiébélé', 'تيبيلي'),
    distractors: [
      L('Pô', 'Pô', 'Pô', 'Pô', 'بو'),
      L('Gaoua', 'Gaoua', 'Gaoua', 'Gaoua', 'غاوا'),
      L('Kaya', 'Kaya', 'Kaya', 'Kaya', 'كايا'),
    ],
    explanation: L(
      'À Tiébélé, les femmes kassena enduisent et décorent les habitations en terre avec des pigments naturels — argile blanche, latérite rouge et basalte noir — chargés de symboles.',
      'In Tiébélé, Kassena women decorate earthen homes using natural white clay, red laterite, and black basalt pigments rich in symbolism.',
      'En Tiébélé, las mujeres kassena pintan las casas de adobe con pigmentos naturales llenos de simbolismo.',
      'Em Tiébélé, as mulheres kassena decoram as casas de barro com pigmentos naturais de grande valor simbólico.',
      'تبدع نساء كاسينا في قرية تيبيلي زخارف هندسية تقليدية من الطين والأصباغ الطبيعية في عمارة أُدرجت بالتراث العالمي.'
    ),
  }),
  mkQ({
    id: 'cur_BF_19',
    countryCode: 'BF',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'crocodiles_sacres_bazoule',
    source: 'Patrimoine culturel & naturel du Kadiogo',
    prompt: L(
      'À une trentaine de kilomètres de Ouagadougou, dans quelle localité les habitants vivent-ils depuis des siècles en paix avec plus d’une centaine de crocodiles sacrés dans une mare ?',
      'Roughly 30 km from Ouagadougou, in which town do villagers peacefully coexist with over a hundred sacred pond crocodiles?',
      'A unos 30 km de Uagadugú, ¿en qué localidad conviven pacíficamente los habitantes con más de cien cocodrilos sagrados?',
      'A cerca de 30 km de Uagadugu, em qual localidade os moradores convivem pacificamente com crocodilos sagrados?',
      'في أي بلدة قرب واغادوغو يعيش السكان منذ قرون في سلام مع أكثر من مئة تمساح مقدس في البحيرة؟'
    ),
    countryModePrompt: L(
      'Dans quel village proche de Ouagadougou une mare abrite-t-elle des crocodiles sacrés que l’on approche sans crainte lors des cérémonies locales ?',
      'In which village near Ouagadougou does a pond shelter sacred crocodiles revered and peacefully approached by locals?',
      '¿Qué aldea cercana a Uagadugú alberga un estanque famoso por sus cocodrilos sagrados?',
      'Qual aldeia perto de Uagadugu abriga uma lagoa famosa por seus crocodilos sagrados?',
      'أي قرية قريبة من واغادوغو تضم بحيرة التماسيح المقدسة التي يحترمها السكان ويعيشون معها بأمان؟'
    ),
    correct: L('Bazoulé', 'Bazoulé', 'Bazoulé', 'Bazoulé', 'بازولي'),
    distractors: [
      L('Ziniaré', 'Ziniaré', 'Ziniaré', 'Ziniaré', 'زينياري'),
      L('Kombissiri', 'Kombissiri', 'Kombissiri', 'Kombissiri', 'كومبيسيري'),
      L('Boussé', 'Boussé', 'Boussé', 'Boussé', 'بوسي'),
    ],
    explanation: L(
      'Selon la tradition de Bazoulé, les crocodiles guidèrent jadis les ancêtres assoiffés vers cette source ; depuis, la mare est protégée et célébrée par le Koom Lakré.',
      'Bazoulé tradition holds that crocodiles led ancestors to water during a drought; their protection is celebrated during the Koom Lakré festival.',
      'La tradición de Bazoulé relata que los cocodrilos guiaron a los ancestros hacia el agua en tiempos de sequía.',
      'A tradição de Bazoulé conta que os crocodilos guiaram os ancestrais até a água durante uma seca.',
      'تروي تقاليد بازولي أن التماسيح أرشدت الأجداد إلى الماء قديماً، فصار لها قدسية وحماية خاصة لدى السكان.'
    ),
  }),
  mkQ({
    id: 'cur_BF_20',
    countryCode: 'BF',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'lac_tengrela_hippopotames',
    source: 'Site naturel de Banfora — Comoé',
    prompt: L(
      'Quel lac paisible bordé de nénuphars près de Banfora est renommé pour l’observation en pirogue de ses hippopotames sacrés ?',
      'Which tranquil water-lily lake near Banfora is famous for dugout canoe tours to spot sacred hippopotamuses?',
      '¿Qué lago cubierto de nenúfares cerca de Banfora es famoso por observar hipopótamos en piragua?',
      'Qual lago coberto de nenúfares perto de Banfora é famoso pelos passeios de piroga para ver hipopótamos?',
      'أي بحيرة هادئة قرب بانفورا تشتهر بمشاهدة أفراس النهر المقدسة من على متن القوارب التقليدية؟'
    ),
    countryModePrompt: L(
      'Quel lac proche des cascades de Banfora attire les visiteurs en pirogue traditionnelle pour observer des hippopotames au lever du soleil ?',
      'Which lake near Banfora attracts visitors on wooden pirogues to observe resident hippopotamuses at dawn?',
      '¿Qué lago cercano a Banfora permite observar hipopótamos al amanecer desde piraguas?',
      'Qual lago próximo a Banfora permite observar hipopótamos ao amanhecer em pirogas?',
      'أي بحيرة قرب بانفورا يقصدها الزوار في القوارب الخشبية لمراقبة أفراس النهر؟'
    ),
    correct: L('Le lac Tengrela', 'Lake Tengrela', 'Lago Tengrela', 'Lago Tengrela', 'بحيرة تنغريلا'),
    distractors: [
      L('La mare d’Oursi', 'Lake Oursi', 'Laguna de Oursi', 'Lagoa de Oursi', 'بحيرة أورسي'),
      L('Le lac Bam', 'Lake Bam', 'Lago Bam', 'Lago Bam', 'بحيرة بام'),
      L('Le barrage de Bagré', 'Bagré Reservoir', 'Embalse de Bagré', 'Barragem de Bagré', 'سد باغري'),
    ],
    explanation: L(
      'Le lac Tengrela héberge une colonie d’hippopotames considérés comme protecteurs par les villageois riverains, au cœur d’une végétation riche en nénuphars.',
      'Lake Tengrela is home to a respected hippopotamus group living peacefully near fishermen and reed-filled banks.',
      'El lago Tengrela alberga hipopótamos protegidos por las comunidades locales entre amplios campos de nenúfares.',
      'O lago Tengrela abriga hipopótamos respeitados pelos moradores locais em meio a extensos nenúfares.',
      'تأوي بحيرة تنغريلا مجموعة من أفراس النهر تحظى بحماية السكان وتُعد محمية طبيعية خلابة.'
    ),
  }),
  mkQ({
    id: 'cur_BF_21',
    countryCode: 'BF',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'sculptures_granit_laongo',
    source: 'Symposium international de sculpture de Laongo',
    prompt: L(
      'À une trentaine de kilomètres à l’est de Ouagadougou, quel site en plein air réunit depuis 1989 des centaines d’œuvres taillées à même d’immenses rochers de granit par des artistes du monde entier ?',
      'About 35 km east of Ouagadougou, which open-air site has gathered monumental carvings carved directly into natural granite boulders since 1989?',
      'A unos 35 km al este de Uagadugú, ¿qué parque al aire libre reúne desde 1989 cientos de obras esculpidas sobre rocas de granito?',
      'A cerca de 35 km a leste de Uagadugu, qual parque ao ar livre reúne desde 1989 esculturas talhadas em rochas de granito?',
      'أي موقع فني في الهواء الطلق شرق واغادوغو يضم منذ 1989 مئات المنحوتات المحفورة مباشرة في صخور الغرانيت؟'
    ),
    countryModePrompt: L(
      'Quel musée à ciel ouvert inauguré en 1989 sur le plateau central rassemble des sculptures monumentales taillées directement dans le granit brut ?',
      'Which open-air museum inaugurated in 1989 showcases monumental sculptures carved straight into natural granite outcrops?',
      '¿Qué museo al aire libre creado en 1989 reúne esculturas talladas directamente en afloramientos de granito?',
      'Qual museu ao ar livre inaugurado em 1989 exibe esculturas talhadas diretamente no granito?',
      'أي متحف في الهواء الطلق تأسس عام 1989 ويضم منحوتات ضخمة محفورة في كتل الغرانيت الطبيعية؟'
    ),
    correct: L('Les sculptures sur granit de Laongo', 'Granite Sculptures of Laongo', 'Esculturas de granito de Laongo', 'Esculturas em granito de Laongo', 'منحوتات غرانيت لاونغو'),
    distractors: [
      L('Les falaises de Bandiagara', 'Bandiagara Cliffs', 'Acantilados de Bandiagara', 'Falésias de Bandiagara', 'منحدرات باندياغارا'),
      L('Le parc de Pô', 'Pô National Park', 'Parque Nacional de Pô', 'Parque Nacional de Pô', 'منتزه بو الوطني'),
      L('Les grottes de Douna', 'Douna Caves', 'Cuevas de Douna', 'Grutas de Douna', 'كهوف دونا'),
    ],
    explanation: L(
      'Initié par le sculpteur Ky Siriki, le symposium de Laongo invite régulièrement des artistes africains et internationaux à sculpter les dalles granitiques de la savane.',
      'Founded by sculptor Ky Siriki, Laongo hosts international symposia where artists carve towering granite blocks across the savanna.',
      'Iniciado por el escultor Ky Siriki, el simposio de Laongo reúne a artistas de todo el mundo sobre bloques de granito.',
      'Idealizado pelo escultor Ky Siriki, o simpósio de Laongo convida artistas do mundo inteiro para esculpir granitos na savana.',
      'أطلق النحات كي سيريكي سيمبوزيوم لاونغو عام 1989 ليحول صخور السافانا الغرانيتية إلى معرض نحتي عالمي.'
    ),
  }),
  mkQ({
    id: 'cur_BF_22',
    countryCode: 'BF',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'grande_mosquee_bobo_dioulasso',
    source: 'Architecture soudano-sahélienne — Dioulassoba',
    prompt: L(
      'Quel monument emblématique du quartier historique de Dioulassoba à Bobo-Dioulasso, bâti vers 1880 en banco et poutres de bois saillantes, illustre l’architecture soudano-sahélienne ?',
      'Which iconic landmark in Bobo-Dioulasso’s historic Dioulassoba quarter, built around 1880 of mud brick and protruding timber beams, showcases Sudano-Sahelian architecture?',
      '¿Qué monumento emblemático del barrio de Dioulassoba en Bobo-Dioulasso, construido hacia 1880 en adobe, ilustra la arquitectura sudano-saheliana?',
      'Qual monumento emblemático de Dioulassoba em Bobo-Dioulasso, erguido por volta de 1880 em adobe, ilustra a arquitetura sudano-saheliana?',
      'أي معلم معماري شهير في حي ديولاسوبا بمدينة بوبو ديولاسو بُني قرابة عام 1880 بالطين والخشب البارز؟'
    ),
    countryModePrompt: L(
      'Quel édifice historique construit vers 1880 en terre crue dans le quartier de Dioulassoba est le symbole architectural de Bobo-Dioulasso ?',
      'Which historic mud-brick landmark built around 1880 in the Dioulassoba quarter stands as the architectural emblem of Bobo-Dioulasso?',
      '¿Qué edificio histórico de adobe construido hacia 1880 en Dioulassoba simboliza a Bobo-Dioulasso?',
      'Qual edifício histórico de adobe construído por volta de 1880 em Dioulassoba simboliza Bobo-Dioulasso?',
      'أي مبنى طيني تاريخي يعود لعام 1880 في حي ديولاسوبا يُعد الرمز المعماري لمدينة بوبو ديولاسو؟'
    ),
    correct: L('La Grande Mosquée de Bobo-Dioulasso', 'Grand Mosque of Bobo-Dioulasso', 'Gran Mezquita de Bobo-Dioulasso', 'Grande Mesquita de Bobo-Dioulasso', 'المسجد الكبير في بوبو ديولاسو'),
    distractors: [
      L('La cathédrale de Koumi', 'Cathedral of Koumi', 'Catedral de Koumi', 'Catedral de Koumi', 'كاتدرائية كومي'),
      L('La maison du peuple de Ouaga', 'Maison du Peuple of Ouaga', 'Casa del Pueblo de Uaga', 'Casa do Povo de Uaga', 'دار الشعب في واغا'),
      L('Le palais de Dori', 'Palace of Dori', 'Palacio de Dori', 'Palácio de Dori', 'قصر دوري'),
    ],
    explanation: L(
      'Érigée à la fin du XIXe siècle avec la participation de toute la communauté, la Grande Mosquée de Dioulassoba est périodiquement recrépie de banco lors de travaux collectifs.',
      'Built in the late 19th century through communal effort, the Dioulassoba Grand Mosque is periodically replastered in clay by local residents.',
      'Erigida a fines del siglo XIX, la Gran Mezquita de Dioulassoba es enlucida periódicamente de forma comunitaria.',
      'Erguida no fim do século XIX, a Grande Mesquita de Dioulassoba recebe mutirões comunitários de reboco de barro.',
      'يُعد المسجد الكبير بديولاسوبا تحفة طينية سودانية ساحلية يجدد أهالي الحي طلاءه الطيني بروح جماعية.'
    ),
  }),
  mkQ({
    id: 'cur_BF_23',
    countryCode: 'BF',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'domes_de_fabedougou',
    source: 'Géomorphologie du Sud-Ouest',
    prompt: L(
      'À proximité de Banfora, quelles formations géologiques de grès empilées en coupoles érodées âgées de plus d’un milliard d’années ressemblent à d’immenses ruches ou champignons ?',
      'Near Banfora, which ancient sandstone formations stacked like eroded domes and beehives date back over a billion years?',
      'Cerca de Banfora, ¿qué formaciones milenarias de arenisca erosionada parecen inmensas cúpulas o colmenas?',
      'Perto de Banfora, quais formações milenares de arenito erodido lembram cúpulas ou colmeias gigantes?',
      'قرب بانفورا، ما التكوينات الصخرية الرملية العتيقة المتراكمة كقباب عملاقة طبيعية؟'
    ),
    countryModePrompt: L(
      'Quel site spectaculaire près de Banfora dévoile d’immenses coupoles de grès empilées ressemblant à des tourelles naturelles sculptées par l’érosion ?',
      'Which dramatic site near Banfora features giant stacked sandstone domes resembling natural turrets carved by erosion?',
      '¿Qué sitio cercano a Banfora presenta enormes cúpulas de arenisca apiladas por la erosión?',
      'Qual sítio perto de Banfora apresenta gigantescas cúpulas de arenito esculpidas pela erosão?',
      'أي موقع طبيعي قرب بانفورا يتميز بقباب من الحجر الرملي المتدرج نحتتها عوامل التعرية؟'
    ),
    correct: L('Les dômes de Fabédougou', 'Domes of Fabédougou', 'Domos de Fabédougou', 'Domos de Fabédougou', 'قباب فابيدوغو'),
    distractors: [
      L('Les aiguilles de Guéda', 'Guéda Spires', 'Agujas de Guéda', 'Agulhas de Guéda', 'إبر غيدا'),
      L('Les orgues du Yatenga', 'Yatenga Basalt Organs', 'Órganos de Yatenga', 'Órgãos de Yatenga', 'أعمدة ياتينغا'),
      L('Le cirque de Sindou Nord', 'North Sindou Cirque', 'Circo de Sindou Norte', 'Circo de Sindou Norte', 'حلبة سيندو الشمالية'),
    ],
    explanation: L(
      'Situés à une quinzaine de kilomètres de Banfora, les dômes de Fabédougou offrent depuis leurs sommets un panorama spectaculaire sur les champs de canne à sucre.',
      'Located about 15 km from Banfora, the Domes of Fabédougou offer sweeping viewpoints over green sugarcane valleys below.',
      'Situados a unos 15 km de Banfora, los domos de Fabédougou ofrecen vistas panorámicas sobre los valles de caña.',
      'Situados a cerca de 15 km de Banfora, os domos de Fabédougou oferecem vista panorâmica para os canaviais.',
      'تتيح قباب فابيدوغو قرب بانفورا إطلالة بانورامية فريدة على مزارع قصب السكر وسهول الجنوب الغربي.'
    ),
  }),
  mkQ({
    id: 'cur_BF_24',
    countryCode: 'BF',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'complexe_w_arly_pendjari_unesco',
    source: 'UNESCO — Complexe WAP',
    prompt: L(
      'Quel vaste parc national de l’est du Burkina Faso appartient au complexe transfrontalier W-Arly-Pendjari, dernier grand refuge des éléphants et lions d’Afrique de l’Ouest ?',
      'Which major eastern Burkina Faso national park forms part of the transboundary W-Arly-Pendjari UNESCO wildlife complex?',
      '¿Qué gran parque nacional del este de Burkina Faso integra el complejo transfronterizo W-Arly-Pendjari?',
      'Qual grande parque nacional do leste de Burkina Faso integra o complexo transfronteiriço W-Arly-Pendjari?',
      'أي منتزه وطني كبير شرق بوركينا فاسو ينتمي إلى مجمع المحميات العابر للحدود (W-أرلي-بندجاري)؟'
    ),
    countryModePrompt: L(
      'Quel parc national de l’Est forme avec le parc du W et la Pendjari l’un des derniers grands sanctuaires de faune sauvage d’Afrique de l’Ouest ?',
      'Which eastern national park joins W and Pendjari as one of West Africa’s largest intact savanna wildlife sanctuaries?',
      '¿Qué parque nacional del este forma junto con W y Pendjari uno de los últimos santuarios de fauna oesteafricana?',
      'Qual parque nacional do leste integra com W e Pendjari um dos últimos grandes santuários de fauna da África Ocidental?',
      'أي منتزه وطني شرق البلاد يشكل مع محميتي W وبندجاري أحد أكبر ملاجئ الحياة البرية في غرب إفريقيا؟'
    ),
    correct: L('Le parc national d’Arly', 'Arly National Park', 'Parque Nacional de Arly', 'Parque Nacional de Arly', 'منتزه أرلي الوطني'),
    distractors: [
      L('Le parc de Niokolo-Koba', 'Niokolo-Koba Park', 'Parque Niokolo-Koba', 'Parque Niokolo-Koba', 'منتزه نيوكولو كوبا'),
      L('Le parc de la Comoé', 'Comoé National Park', 'Parque de Comoé', 'Parque de Comoé', 'منتزه كوموي'),
      L('Le parc de Zakouma', 'Zakouma National Park', 'Parque de Zakouma', 'Parque de Zakouma', 'منتزه زاكوما'),
    ],
    explanation: L(
      'Classé à l’UNESCO dans le complexe W-Arly-Pendjari (WAP), le parc d’Arly protège savanes, forêts galeries, buffles, antilopes, éléphants et lions.',
      'Part of the UNESCO-listed WAP transboundary ecosystem, Arly National Park shelters savanna elephants, lions, hippos, and antelope.',
      'Integrado en el complejo WAP de la UNESCO, Arly protege elefantes, leones y bosques de galería.',
      'Parte do complexo WAP da UNESCO, Arly protege elefantes, leões e matas de galeria.',
      'ينتمي منتزه أرلي إلى مجمع WAP المصنف لدى اليونسكو لحماية الفيلة والأسود وتنوع السافانا.'
    ),
  }),
  mkQ({
    id: 'cur_BF_25',
    countryCode: 'BF',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'idrissa_ouedraogo_tilai_cannes',
    source: 'Festival de Cannes 1990 & FESPACO',
    prompt: L(
      'Quel réalisateur burkinabè a remporté le Grand Prix du Festival de Cannes en 1990 avec son chef-d’œuvre « Tilaï » après avoir marqué le cinéma mondial avec « Yaaba » ?',
      'Which Burkinabè filmmaker won the Grand Prix at the 1990 Cannes Film Festival for "Tilaï" after directing "Yaaba"?',
      '¿Qué cineasta de Burkina Faso ganó el Gran Premio de Cannes en 1990 con "Tilaï"?',
      'Qual cineasta de Burkina Faso venceu o Grande Prêmio de Cannes em 1990 com "Tilaï"?',
      'أي مخرج سينمائي فاز بالجائزة الكبرى في مهرجان كان 1990 بفيلم "تيلاي" بعد فيلمه الشهير "يابا"؟'
    ),
    countryModePrompt: L(
      'Quel célèbre cinéaste né à Banfora a décroché le Grand Prix du Festival de Cannes en 1990 pour le film « Tilaï » et l’Étalon de Yennenga en 1991 ?',
      'Which acclaimed Banfora-born film director won the 1990 Cannes Grand Prix and the 1991 Étalon de Yennenga for "Tilaï"?',
      '¿Qué cineasta nacido en Banfora ganó el Gran Premio de Cannes en 1990 por "Tilaï"?',
      'Qual cineasta nascido em Banfora conquistou o Grande Prêmio de Cannes em 1990 por "Tilaï"?',
      'أي مخرج شهير من بانفورا نال الجائزة الكبرى في مهرجان كان 1990 وجائزة فيسباكو بفيلم "تيلاي"؟'
    ),
    correct: L('Idrissa Ouédraogo', 'Idrissa Ouédraogo', 'Idrissa Ouédraogo', 'Idrissa Ouédraogo', 'إدريسا ويدراوغو'),
    distractors: [
      L('Ousmane Sembène', 'Ousmane Sembène', 'Ousmane Sembène', 'Ousmane Sembène', 'عثمان سمبين'),
      L('Souleymane Cissé', 'Souleymane Cissé', 'Souleymane Cissé', 'Souleymane Cissé', 'سليمان سيسي'),
      L('Djibril Diop Mambéty', 'Djibril Diop Mambéty', 'Djibril Diop Mambéty', 'Djibril Diop Mambéty', 'جبريل ديوب مامبيتي'),
    ],
    explanation: L(
      'Pilier du cinéma africain, Idrissa Ouédraogo a porté la sobriété et la puissance du récit rural devant le jury de Cannes puis au FESPACO.',
      'A towering figure of African cinema, Idrissa Ouédraogo won the 1990 Cannes Grand Prix and the top FESPACO prize for "Tilaï".',
      'Figura clave del cine africano, Idrissa Ouédraogo ganó en Cannes y en el FESPACO con "Tilaï".',
      'Nome maior do cinema africano, Idrissa Ouédraogo venceu em Cannes e no FESPACO com "Tilaï".',
      'أحرز المخرج إدريسا ويدراوغو الجائزة الكبرى في كان وجائزة يينينغا الذهبية بفيلم تيلاي.'
    ),
  }),
  mkQ({
    id: 'cur_BF_26',
    countryCode: 'BF',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'gaston_kabore_wend_kuuni',
    source: 'FESPACO — Archives cinéma',
    prompt: L(
      'Quel pionnier du cinéma burkinabè, réalisateur de « Wend Kuuni » (Le Don de Dieu) et lauréat de l’Étalon de Yennenga en 1997 avec « Buud Yam », dirige l’institut Imagine à Ouagadougou ?',
      'Which pioneering director of "Wend Kuuni" and 1997 FESPACO winner "Buud Yam" founded the Imagine cinema training institute in Ouagadougou?',
      '¿Qué pionero del cine, director de "Wend Kuuni" y ganador del FESPACO con "Buud Yam", dirige el instituto Imagine?',
      'Qual pioneiro do cinema, diretor de "Wend Kuuni" e vencedor do FESPACO com "Buud Yam", dirige o instituto Imagine?',
      'أي رائد سينمائي أخرج فيلمي "ويند كوني" و"بود يام" الفائز بفيسباكو وأسس معهد إيماجين بواغادوغو؟'
    ),
    countryModePrompt: L(
      'Quel réalisateur de « Wend Kuuni » (1982) et « Buud Yam » (1997) a fondé l’école de cinéma Imagine pour former de jeunes cinéastes à Ouagadougou ?',
      'Which director of "Wend Kuuni" (1982) and "Buud Yam" (1997) founded the Imagine film training centre in Ouagadougou?',
      '¿Qué director de "Wend Kuuni" y "Buud Yam" fundó el centro de formación cinematográfica Imagine?',
      'Qual diretor de "Wend Kuuni" e "Buud Yam" fundou a escola de cinema Imagine em Uagadugu?',
      'أي مخرج لفيلمي "ويند كوني" و"بود يام" أسس معهد إيماجين لتكوين السينمائيين في واغادوغو؟'
    ),
    correct: L('Gaston Kaboré', 'Gaston Kaboré', 'Gaston Kaboré', 'Gaston Kaboré', 'غاستون كابوري'),
    distractors: [
      L('Dani Kouyaté', 'Dani Kouyaté', 'Dani Kouyaté', 'Dani Kouyaté', 'داني كوياتي'),
      L('Pierre Yaméogo', 'Pierre Yaméogo', 'Pierre Yaméogo', 'Pierre Yaméogo', 'بيير ياميوغو'),
      L('Sékou Traoré', 'Sékou Traoré', 'Sékou Traoré', 'Sékou Traoré', 'سيكو تراوري'),
    ],
    explanation: L(
      'Césarisé et célébré dans le monde entier pour « Wend Kuuni », Gaston Kaboré transmet son savoir aux jeunes générations via l’institut Imagine à Ouagadougou.',
      'César-winning director Gaston Kaboré established Imagine in Ouagadougou to train new generations of African filmmakers and technicians.',
      'Premiado internacionalmente por "Wend Kuuni", Gaston Kaboré impulsa nuevos talentos desde el instituto Imagine.',
      'Premiado mundialmente por "Wend Kuuni", Gaston Kaboré forma novas gerações no instituto Imagine.',
      'أسس المخرج غاستون كابوري معهد إيماجين في واغادوغو لتكوين الأجيال الجديدة في صناعة السينما.'
    ),
  }),
  mkQ({
    id: 'cur_BF_27',
    countryCode: 'BF',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 1,
    topicKey: 'le_to_plat_national_quotidien',
    source: 'Gastronomie populaire sahélienne',
    prompt: L(
      'Quel plat quotidien de base au Burkina Faso se présente comme une pâte chaude de farine de mil, de sorgho ou de maïs servie avec une sauce gombo, oseille ou feuilles de baobab ?',
      'Which staple daily dish is a smooth cooked paste of millet, sorghum, or maize flour served with okra, sorrel, or baobab-leaf sauce?',
      '¿Qué plato cotidiano básico consiste en una pasta caliente de mijo, sorgo o maíz servida con salsa de quimbombó u hojas de baobab?',
      'Qual prato diário básico é uma massa quente de milheto, sorgo ou milho servida com molho de quiabo ou folhas de baobá?',
      'أي طبق يومي أساسي يُحضر من عصيدة الدخن أو الذرة ويُقدم مع صلصة البامية أو أوراق الباوباب؟'
    ),
    countryModePrompt: L(
      'Comment appelle-t-on la pâte traditionnelle de mil, sorgho ou maïs accompagnée de sauce gombo ou feuilles de baobab qui constitue le repas le plus répandu du pays ?',
      'What is the traditional millet, sorghum, or maize paste served with okra or baobab-leaf sauce that forms the country’s daily staple?',
      '¿Cómo se llama la pasta tradicional de mijo, sorgo o maíz con salsa que es la base de la alimentación diaria?',
      'Como se chama a massa tradicional de milheto, sorgo ou milho servida com molho no dia a dia?',
      'ما اسم العصيدة التقليدية من الدخن أو الذرة التي تُقدم مع الصلصة وتُعد الغذاء اليومي الأكثر انتشاراً؟'
    ),
    correct: L('Le tô', 'Tô', 'El tô', 'O tô', 'التو'),
    distractors: [
      L('Le garba', 'Garba', 'Garba', 'Garba', 'غاربا'),
      L('Le thieboudienne', 'Thieboudienne', 'Thieboudienne', 'Thieboudienne', 'تييبوديين'),
      L('Le ndolé', 'Ndolé', 'Ndolé', 'Ndolé', 'ندولي'),
    ],
    explanation: L(
      'Véritable pilier alimentaire des foyers ruraux et urbains, le tô tire sa force nutritive de la céréale et de la richesse en vitamines des sauces de feuilles locales.',
      'A cornerstone of everyday meals, tô pairs hearty grain paste with vitamin-rich leaf sauces like baobab, sorrel, or okra.',
      'Pilar de la dieta diaria, el tô combina cereales locales con salsas nutritivas de hojas y quimbombó.',
      'Base da alimentação cotidiana, o tô une cereais locais a molhos nutritivos de folhas e quiabo.',
      'يشكل طبق التو عماد المائدة اليومية مقترناً بصلصات الأوراق الغنية والبامية.'
    ),
  }),
  mkQ({
    id: 'cur_BF_28',
    countryCode: 'BF',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'le_babenda_specialite_mossi',
    source: 'Patrimoine culinaire du plateau central',
    prompt: L(
      'Quelle spécialité culinaire traditionnelle de la région de Ouagadougou marie brisures de riz, feuilles d’épinards ou d’oseille, poudre d’arachide et soumbala ?',
      'Which traditional culinary specialty from the Ouagadougou region blends broken rice or maize, leafy greens, peanut powder, and soumbala?',
      '¿Qué especialidad culinaria tradicional combina arroz partido o maíz, hojas verdes, cacahuete molido y soumbala?',
      'Qual especialidade culinária tradicional combina arroz quebrado ou milho, folhas verdes, amendoim moído e soumbala?',
      'أي طبق تقليدي في منطقة واغادوغو يمزج الأرز المكسر أو الذرة مع السبانخ والفول السوداني والسمبالا؟'
    ),
    countryModePrompt: L(
      'Quel plat traditionnel à base d’épinards ou feuilles locales, d’arachide pilée, de soumbala et de riz ou maïs est très apprécié sur le plateau central ?',
      'Which beloved traditional dish combines leafy greens, crushed peanuts, fermented soumbala, and broken rice or maize?',
      '¿Qué plato tradicional de hojas verdes, cacahuete machacado, soumbala y arroz es muy popular?',
      'Qual prato tradicional de folhas verdes, amendoim pilado, soumbala e arroz é muito apreciado?',
      'أي طبق شعبي يجمع بين الأوراق الخضراء والفول السوداني والسمبالا والأرز على الهضبة الوسطى؟'
    ),
    correct: L('Le babenda', 'Babenda', 'El babenda', 'O babenda', 'بابيندا'),
    distractors: [
      L('Le mafé', 'Mafé', 'Mafé', 'Mafé', 'مافي'),
      L('L’amiwo', 'Amiwo', 'Amiwo', 'Amiwo', 'أميوو'),
      L('Le foufou banane', 'Plantain fufu', 'Fufú de plátano', 'Fufu de banana', 'فوفو الموز'),
    ],
    explanation: L(
      'À l’origine plat de soudure en saison sèche, le babenda est devenu un mets festif et convivial emblématique grâce au parfum unique du soumbala de néré.',
      'Once a seasonal staple, babenda became a celebrated dish prized for the nutty aroma of peanuts and fermented locust bean soumbala.',
      'Antiguo plato de temporada seca, el babenda es hoy una receta muy apreciada por su sabor a cacahuete y soumbala.',
      'Antigo prato de estiagem, o babenda hoje é receita festiva graças ao sabor do amendoim e do soumbala.',
      'يشتهر طبق بابيندا بنكهته الغنية الناتجة عن مزيج الفول السوداني المطحون وتوابل السمبالا المخمرة.'
    ),
  }),
  mkQ({
    id: 'cur_BF_29',
    countryCode: 'BF',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'le_dolo_biere_sorgho',
    source: 'Savoir-faire brassicole artisanal',
    prompt: L(
      'Comment appelle-t-on la bière traditionnelle de sorgho rouge brassée dans de grands canaris en terre cuite par les femmes appelées « dolotières » ?',
      'What is the traditional red sorghum beer brewed in large earthenware pots by skilled women brewers called?',
      '¿Cómo se llama la cerveza tradicional de sorgo rojo elaborada en grandes tinajas de barro por las "dolotières"?',
      'Como se chama a cerveja tradicional de sorgo vermelho preparada em grandes potes de barro pelas "dolotières"?',
      'ما اسم الجعة التقليدية المصنوعة من الذرة الرفيعة الحمراء في أوانٍ فخارية كبيرة؟'
    ),
    countryModePrompt: L(
      'Quelle boisson artisanale issue de la fermentation du sorgho rouge est brassée dans des canaris par les « dolotières » et servie en calebasse ?',
      'Which traditional fermented red-sorghum beverage is brewed in clay pots and traditionally served in calabash gourds?',
      '¿Qué bebida artesanal de sorgo rojo fermentado es elaborada en vasijas de barro y servida en calabaza?',
      'Qual bebida artesanal de sorgo vermelho fermentado é servida tradicionalmente em cabaças?',
      'ما المشروب التقليدي المخمر من الذرة الرفيعة الحمراء الذي يُعد في جرار الفخار ويُقدم في القرع المجفف؟'
    ),
    correct: L('Le dolo', 'Dolo', 'El dolo', 'O dolo', 'الدولو'),
    distractors: [
      L('Le bissap', 'Bissap', 'Bissap', 'Bissap', 'الكركديه'),
      L('Le sodabi', 'Sodabi', 'Sodabi', 'Sodabi', 'السودابي'),
      L('Le bandji', 'Bandji', 'Bandji', 'Bandji', 'الباندجي'),
    ],
    explanation: L(
      'Lieu de sociabilité villageoise et urbaine, le « cabaret à dolo » réunit voisins et visiteurs autour d’une calebasse fraîche de sorgho fermenté.',
      'Shared in lively local courtyards called cabarets, freshly brewed dolo is poured into calabashes as a hallmark of community hospitality.',
      'Servido fresco en calabazas, el dolo es un símbolo de convivencia en los patios populares.',
      'Servido em cabaças nos tradicionais pátios comunitários, o dolo simboliza hospitalidade e convívio.',
      'يمثل مشروب الدولو المقدم في أقداح القرع تقليداً اجتماعياً ومورداً اقتصادياً مهماً لصانعاته.'
    ),
  }),
  mkQ({
    id: 'cur_BF_30',
    countryCode: 'BF',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 1,
    topicKey: 'poulet_bicyclette_grillade',
    source: 'Cuisine populaire ouest-africaine',
    prompt: L(
      'Sous quel nom humoristique et très populaire désigne-t-on à Ouagadougou le poulet fermier grillé au feu de bois servi avec des oignons et du piment ?',
      'Under what humorous popular name is charcoal-grilled free-range local chicken served with onions and spice known in Ouagadougou?',
      '¿Con qué nombre popular y humorístico se conoce en Uagadugú al pollo campero asado a la brasa con cebolla y picante?',
      'Por qual nome popular bem-humorado é conhecido em Uagadugu o frango caipira assado na brasa com cebola e pimenta?',
      'بأي اسم شعبي طريف يُعرف الدجاج البلدي المشوي على الفحم مع البصل والفلفل في شوارع واغادوغو؟'
    ),
    countryModePrompt: L(
      'Quel surnom savoureux porte le poulet fermier maigre et musclé grillé sur la braise dans les maquis de Ouagadougou et Bobo-Dioulasso ?',
      'What playful nickname is given to lean, free-range charcoal-grilled chicken served across maquis in Ouagadougou and Bobo-Dioulasso?',
      '¿Qué apodo recibe el pollo campero magro asado a la brasa en los maquis de Uagadugú y Bobo-Dioulasso?',
      'Qual apelido recebe o frango caipira assado na brasa nos maquis de Uagadugu e Bobo-Dioulasso?',
      'ما اللقب الطريف الذي يُطلق على الدجاج البلدي المشوي على الفحم في مطاعم واغادوغو وبوبو ديولاسو؟'
    ),
    correct: L('Le poulet bicyclette', 'Bicycle chicken', 'Pollo bicicleta', 'Frango bicicleta', 'دجاج الدراجة'),
    distractors: [
      L('Le poulet métro', 'Metro chicken', 'Pollo metro', 'Frango metrô', 'دجاج المترو'),
      L('Le poulet pirogue', 'Pirogue chicken', 'Pollo piragua', 'Frango piroga', 'دجاج القارب'),
      L('Le poulet téléphone', 'Phone chicken', 'Pollo teléfono', 'Frango telefone', 'دجاج الهاتف'),
    ],
    explanation: L(
      'Ce nom viendrait soit de sa chair ferme à force de courir librement, soit de son transport jadis à vélo depuis les villages jusqu’aux marchés urbains.',
      'The humorous nickname refers either to the bird’s athletic free-range muscle or its traditional transport to city markets on bicycles.',
      'El apodo alude tanto a lo mucho que corre este pollo campero como a su antiguo transporte en bicicleta hacia la ciudad.',
      'O apelido remete tanto às aves soltas quanto ao antigo transporte em bicicletas dos vilarejos até os mercados.',
      'جاءت التسمية الطريفة إما لحركته الحرة الدائمة أو لنقله تقليدياً من القرى على الدراجات الهوائية.'
    ),
  }),
  mkQ({
    id: 'cur_BF_31',
    countryCode: 'BF',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'festima_dedougou_masques',
    source: 'FESTIMA — Dédougou (Boucle du Mouhoun)',
    prompt: L(
      'Quel grand festival biennal organisé à Dédougou célèbre la préservation des masques traditionnels de feuilles, de fibres et de bois venus d’Afrique de l’Ouest ?',
      'Which major biennial festival held in Dédougou celebrates the preservation of traditional leaf, fibre, and wooden masks from West Africa?',
      '¿Qué gran festival bienal celebrado en Dédougou preserva las máscaras tradicionales de hojas, fibras y madera?',
      'Qual grande festival bienal realizado em Dédougou preserva as máscaras tradicionais de folhas, fibras e madeira?',
      'أي مهرجان ثقافي كل عامين في ديدوغو يُعنى بصون الأقنعة التقليدية المصنوعة من الألياف والأوراق والخشب؟'
    ),
    countryModePrompt: L(
      'Quel sigle désigne le Festival International des Masques et des Arts organisé tous les deux ans dans la ville de Dédougou ?',
      'What acronym names the International Festival of Masks and the Arts held every two years in Dédougou?',
      '¿Qué sigla identifica al Festival Internacional de Máscaras y Artes que se celebra cada dos años en Dédougou?',
      'Qual sigla identifica o Festival Internacional de Máscaras e Artes realizado a cada dois anos em Dédougou?',
      'ما الاختصار الذي يُطلق على المهرجان الدولي للأقنعة والفنون المنعقد كل سنتين في ديدوغو؟'
    ),
    correct: L('Le FESTIMA', 'FESTIMA', 'FESTIMA', 'FESTIMA', 'فيستيما (FESTIMA)'),
    distractors: [
      L('Le MASA', 'MASA', 'MASA', 'MASA', 'ماسا (MASA)'),
      L('Le Ségou’Art', 'Ségou’Art', 'Ségou’Art', 'Ségou’Art', 'سيغو آرت'),
      L('Le FIMU', 'FIMU', 'FIMU', 'FIMU', 'فيمو'),
    ],
    explanation: L(
      'Créé en 1996 à Dédougou par l’association ASAMA, le FESTIMA sauvegarde les traditions sacrées des masques Bwa, Marka, Nuna et de pays voisins.',
      'Founded in 1996 in Dédougou, FESTIMA showcases living mask traditions of Bwa, Marka, and Nuna communities alongside regional guests.',
      'Creado en 1996 en Dédougou, el FESTIMA salvaguarda las tradiciones vivas de las máscaras tradicionales.',
      'Criado em 1996 em Dédougou, o FESTIMA salvaguarda as tradições vivas das máscaras tradicionais.',
      'تأسس مهرجان فيستيما عام 1996 في ديدوغو لحفظ التراث الحي للأقنعة التقليدية في غرب إفريقيا.'
    ),
  }),
  mkQ({
    id: 'cur_BF_32',
    countryCode: 'BF',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 3,
    topicKey: 'semaine_nationale_culture_bobo',
    source: 'Ministère de la Culture — Bobo-Dioulasso',
    prompt: L(
      'Quelle grande biennale culturelle et artistique, créée en 1983, se tient traditionnellement à Bobo-Dioulasso sous l’acronyme SNC ?',
      'Which major biennial cultural festival founded in 1983 takes place in Bobo-Dioulasso under the acronym SNC?',
      '¿Qué gran bienal cultural creada en 1983 se celebra en Bobo-Dioulasso bajo la sigla SNC?',
      'Qual grande bienal cultural criada em 1983 ocorre em Bobo-Dioulasso sob a sigla SNC?',
      'ما التظاهرة الثقافية الوطنية الكبرى التي تأسست عام 1983 وتُقام كل عامين في بوبو ديولاسو تحت اختصار SNC؟'
    ),
    countryModePrompt: L(
      'Que signifie l’acronyme SNC, grand rendez-vous biennal de danses, arts culinaires, lutte et littérature organisé à Bobo-Dioulasso ?',
      'What does the acronym SNC stand for, naming the major biennial festival of dance, cuisine, and arts in Bobo-Dioulasso?',
      '¿Qué significa la sigla SNC del gran certamen bienal de danza, cocina y artes en Bobo-Dioulasso?',
      'O que significa a sigla SNC do grande evento bienal de dança, culinária e artes em Bobo-Dioulasso?',
      'ماذا يعني اختصار SNC للملتقى الثقافي والفني الكبير المنعقد في بوبو ديولاسو؟'
    ),
    correct: L('La Semaine Nationale de la Culture', 'National Week of Culture', 'Semana Nacional de la Cultura', 'Semana Nacional da Cultura', 'الأسبوع الوطني للثقافة'),
    distractors: [
      L('Le Salon du Nord et du Centre', 'North & Central Fair', 'Salón del Norte y Centro', 'Salão Norte e Centro', 'معرض الشمال والوسط'),
      L('Le Sommet de la Négritude Contemporaine', 'Contemporary Negritude Summit', 'Cumbre de Negritud', 'Cúpula da Negritude', 'قمة الزنوجة المعاصرة'),
      L('La Scène Numérique Citadine', 'Urban Digital Stage', 'Escena Digital Urbana', 'Cena Digital Urbana', 'المسرح الرقمي الحضري'),
    ],
    explanation: L(
      'Réunissant toutes les provinces du pays ainsi que la diaspora, la SNC anime Bobo-Dioulasso autour de compétitions de musiques, contes, danses et tir à l’arc.',
      'Bringing together performers from every region, the Semaine Nationale de la Culture showcases music, storytelling, dance, and traditional sports in Bobo-Dioulasso.',
      'Reuniendo a artistas de todo el país, la Semana Nacional de la Cultura llena Bobo-Dioulasso de música, danza y tradición.',
      'Reunindo artistas de todas as regiões, a Semana Nacional da Cultura celebra música, dança e esportes tradicionais.',
      'يجمع الأسبوع الوطني للثقافة في بوبو ديولاسو مختلف أقاليم البلاد في مسابقات الموسيقى والرقص والحكي والتراث.'
    ),
  }),
  mkQ({
    id: 'cur_BF_33',
    countryCode: 'BF',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'fonderie_cire_perdue_bronze',
    source: 'SIAO & Artisanat d’art de Ouagadougou',
    prompt: L(
      'Quelle technique métallurgique ancestrale, particulièrement réputée chez les bronziers de Ouagadougou et mise à l’honneur au SIAO, consiste à couler le métal dans un moule en argile dont la cire a été évacuée ?',
      'Which ancient metalworking craft celebrated at Ouagadougou’s SIAO fair pours molten bronze into a clay mould after melting out a wax model?',
      '¿Qué técnica ancestral destacada en la feria SIAO de Uagadugú vierte bronce fundido en un molde de arcilla tras derretir la cera?',
      'Qual técnica ancestral destacada na feira SIAO de Uagadugu despeja bronze derretido em molde de argila após derreter a cera?',
      'أي تقنية تقليدية بارزة لدى صانعي البرونز في واغادوغو ومعرض SIAO تعتمد على صب المعدن في قالب طيني بعد إذابة الشمع؟'
    ),
    countryModePrompt: L(
      'Comment s’appelle la technique traditionnelle des bronziers locaux consistant à sculpter une figurine en cire d’abeille avant de la remplacer par du bronze en fusion ?',
      'What is the traditional bronze-casting method where artisans sculpt a beeswax model inside clay before pouring molten metal?',
      '¿Cómo se llama la técnica tradicional de escultura en cera de abejas reemplazada luego por bronce fundido?',
      'Como se chama a técnica tradicional dos fundidores que substitui uma figura em cera de abelha por bronze líquido?',
      'ما اسم طريقة الصب التقليدية التي تُشكل فيها المنحوتة من شمع النحل قبل استبدالها بالبرونز المصهور؟'
    ),
    correct: L('La fonte à la cire perdue', 'Lost-wax casting', 'Fundición a la cera perdida', 'Fundição por cera perdida', 'الصب بالشمع المفقود'),
    distractors: [
      L('Le verre soufflé au sable', 'Sand-blown glass', 'Vidrio soplado en arena', 'Vidro soprado na areia', 'الزجاج المنفوخ بالرمل'),
      L('La marqueterie sur os', 'Bone marquetry', 'Marquetería en hueso', 'Marchetaria em osso', 'التطعيم بالعظم'),
      L('Le martelage à froid en filigrane', 'Cold filigree hammering', 'Martillado en filigrana', 'Martelamento em filigrana', 'الطرق البارد الدقيق'),
    ],
    explanation: L(
      'Chaque pièce fondue à la cire perdue brise son moule d’argile au démoulage, rendant chaque statuette en bronze rigoureusement unique.',
      'Because each clay mould must be broken to extract the cooled bronze, every lost-wax sculpture created by Ouagadougou artisans is one of a kind.',
      'Como el molde de arcilla se rompe tras la fundición, cada escultura creada con cera perdida es una pieza única.',
      'Como o molde de argila é quebrado após a fundição, cada escultura feita por cera perdida torna-se peça única.',
      'تضمن تقنية الصب بالشمع المفقود تفرد كل تمثال برونزي لأن قالب الطين يُكسر لإخراج التحفة النهائية.'
    ),
  }),
  mkQ({
    id: 'cur_BF_34',
    countryCode: 'BF',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'smarty_rfi_decouvertes_2013',
    source: 'RFI — Prix Découvertes (2013)',
    prompt: L(
      'Quel rappeur burkinabè, ancien membre du duo Yeleen et interprète du titre « Le chapeau du chef », a remporté le Prix Découvertes RFI en 2013 ?',
      'Which Burkinabè rapper, former member of duo Yeleen and performer of "Le chapeau du chef", won the 2013 Prix Découvertes RFI?',
      '¿Qué rapero de Burkina Faso, exintegrante del dúo Yeleen y autor de "Le chapeau du chef", ganó el Prix Découvertes RFI 2013?',
      'Qual rapper de Burkina Faso, ex-integrante da dupla Yeleen e autor de "Le chapeau du chef", venceu o Prêmio RFI Descobertas 2013?',
      'أي مغني راب عضو سابق في ثنائي ييلين وصاحب أغنية "قبعة الزعيم" فاز بجائزة اكتشافات RFI عام 2013؟'
    ),
    countryModePrompt: L(
      'Quel artiste hip-hop issu du groupe Yeleen a décroché le Prix Découvertes RFI 2013 et mêle rap conscient et instruments traditionnels comme le balafon ?',
      'Which hip-hop artist from the duo Yeleen won the 2013 Prix Découvertes RFI while blending socially conscious rap with balafon melodies?',
      '¿Qué rapero surgido del dúo Yeleen ganó el Prix Découvertes RFI 2013 fusionando rap y balafón?',
      'Qual artista de hip-hop oriundo da dupla Yeleen venceu o Prêmio RFI Descobertas 2013 mesclando rap e balafon?',
      'أي فنان راب انبثق عن ثنائي ييلين وفاز بجائزة RFI للاكتشافات عام 2013 بمزج الراب مع آلة البالافون؟'
    ),
    correct: L('Smarty', 'Smarty', 'Smarty', 'Smarty', 'سمارتي'),
    distractors: [
      L('Amzy', 'Amzy', 'Amzy', 'Amzy', 'أمزي'),
      L('Art Melody', 'Art Melody', 'Art Melody', 'Art Melody', 'آرت ميلودي'),
      L('Joey Le Soldat', 'Joey Le Soldat', 'Joey Le Soldat', 'Joey Le Soldat', 'جوي لو سولدا'),
    ],
    explanation: L(
      'Salifou Louis Kiekiéta, alias Smarty, a porté la scène rap de Ouagadougou sur les scènes internationales tout en défendant les sonorités acoustiques locales.',
      'Salifou Louis Kiekiéta, known as Smarty, rose from pioneering duo Yeleen to win the 2013 Prix Découvertes RFI.',
      'Conocido como Smarty, Salifou Louis Kiekiéta proyectó el rap del país al panorama internacional tras su etapa en Yeleen.',
      'Salifou Louis Kiekiéta, o Smarty, projetou o rap nacional no cenário internacional após marcar época com o duo Yeleen.',
      'ارتقى الفنان سمارتي بموسيقى الراب المحلية إلى العالمية ونال جائزة إذاعة فرنسا الدولية للاكتشافات عام 2013.'
    ),
  }),
  mkQ({
    id: 'cur_BF_35',
    countryCode: 'BF',
    category: 'culture',
    subCategory: 'personnalites_heros',
    difficulty: 4,
    topicKey: 'nazi_boni_crepuscule_temps_anciens',
    source: 'Littérature africaine — Présence Africaine (1962)',
    prompt: L(
      'Quel roman fondateur publié en 1962 par Nazi Boni retrace la vie et les coutumes du peuple bwamu face à l’arrivée de la colonisation en Afrique de l’Ouest ?',
      'Which landmark 1962 novel by Nazi Boni chronicles Bwamu society and traditions before and during the arrival of colonial rule?',
      '¿Qué novela fundacional publicada en 1962 por Nazi Boni retrata las costumbres del pueblo bwamu ante la colonización?',
      'Qual romance fundador publicado em 1962 por Nazi Boni retrata a sociedade bwamu diante da colonização?',
      'أي رواية تأسيسية نشرها نازي بوني عام 1962 وتوثق حياة وتقاليد شعب البوامو مع قدوم الاستعمار؟'
    ),
    countryModePrompt: L(
      'Quel premier grand roman de la littérature nationale, signé Nazi Boni en 1962, évoque la résistance culturelle du Bwamu ?',
      'Which pioneering 1962 novel by Nazi Boni is hailed as the founding masterpiece of national literature through Bwamu oral epics?',
      '¿Qué novela pionera de 1962 escrita por Nazi Boni inaugura la literatura moderna nacional?',
      'Qual romance pioneiro de 1962 escrito por Nazi Boni inaugura a literatura moderna do país?',
      'ما عنوان الرواية الرائدة التي كتبها نازي بوني عام 1962 وتُعد العمل التأسيسي للأدب الوطني الحديث؟'
    ),
    correct: L('Crépuscule des temps anciens', 'Crépuscule des temps anciens', 'Crépuscule des temps anciens', 'Crépuscule des temps anciens', 'غسق الأزمنة القديمة'),
    distractors: [
      L('Les Bouts de bois de Dieu', 'God’s Bits of Wood', 'Los trozos de madera de Dios', 'Os pedaços de madeira de Deus', 'أخشاب الله'),
      L('L’Aventure ambiguë', 'Ambiguous Adventure', 'La aventura ambigua', 'A aventura ambígua', 'المغامرة الغامضة'),
      L('Le Soleil des indépendances', 'The Suns of Independence', 'Los soles de las independencias', 'Os sóis das independências', 'شموس الاستقلال'),
    ],
    explanation: L(
      'Écrit par l’homme politique et écrivain Nazi Boni, « Crépuscule des temps anciens » constitue le texte fondateur du roman burkinabè moderne.',
      'Written by writer and statesman Nazi Boni, "Crépuscule des temps anciens" (1962) stands as the cornerstone of Burkinabè literature.',
      'Escrita por el escritor y político Nazi Boni, "Crépuscule des temps anciens" es la obra fundacional de la novela nacional.',
      'Escrita por Nazi Boni em 1962, "Crépuscule des temps anciens" marca o nascimento do romance nacional moderno.',
      'تُعد رواية غسق الأزمنة القديمة لنازي بوني عام 1962 الحجر الأساس في الأدب الروائي الحديث للبلاد.'
    ),
  }),
  mkQ({
    id: 'cur_BF_36',
    countryCode: 'BF',
    category: 'culture',
    subCategory: 'economie_developpement',
    difficulty: 2,
    topicKey: 'beurre_karite_or_des_femmes',
    source: 'Filières agricoles d’Afrique de l’Ouest',
    prompt: L(
      'Quel produit naturel extrait des noix d’un arbre sauvage de la savane, surnommé « l’or des femmes » au Burkina Faso, fait vivre des centaines de milliers de transformatrices rurales ?',
      'Which natural product extracted from wild savanna tree nuts, nicknamed "women’s gold", sustains hundreds of thousands of rural women processors?',
      '¿Qué producto natural extraído de nueces silvestres, apodado "el oro de las mujeres", sustenta a miles de trabajadoras rurales?',
      'Qual produto natural extraído de castanhas da savana, apelidado de "ouro das mulheres", sustenta centenas de milhares de produtoras?',
      'أي منتج طبيعي يُستخلص من ثمار شجرة السافانا ويُلقب بـ"ذهب النساء" ويُعيل مئات الآلاف في الأرياف؟'
    ),
    countryModePrompt: L(
      'Quelle richesse agricole et cosmétique issue d’un arbre sacré de la savane est traditionnellement récoltée et transformée sous le surnom d’« or des femmes » ?',
      'Which agricultural and cosmetic treasure harvested from sacred savanna trees is traditionally processed under the nickname "women’s gold"?',
      '¿Qué producto agrícola y cosmético de la sabana es cosechado y transformado bajo el apodo de "oro de las mujeres"?',
      'Qual riqueza agrícola e cosmética da savana é colhida e beneficiada sob o apelido de "ouro das mulheres"?',
      'أي ثروة زراعية وتجميلية تُجمع من أشجار السافانا وتُعالج تقليدياً تحت لقب "ذهب النساء"؟'
    ),
    correct: L('Le beurre de karité', 'Shea butter', 'Manteca de karité', 'Manteiga de karité', 'زبدة الشيا'),
    distractors: [
      L('L’huile d’argan', 'Argan oil', 'Aceite de argán', 'Óleo de argan', 'زيت الأركان'),
      L('La gomme arabique', 'Gum arabic', 'Goma arábiga', 'Goma arábica', 'الصمغ العربي'),
      L('La cire de baobab', 'Baobab wax', 'Cera de baobab', 'Cera de baobá', 'شمع الباوباب'),
    ],
    explanation: L(
      'Le pays compte parmi les tout premiers producteurs mondiaux d’amandes et de beurre de karité, moteur d’émancipation économique pour les groupements féminins.',
      'Ranked among the world’s top shea producers, rural women cooperatives turn Vitellaria paradoxa nuts into pure shea butter for food and global cosmetics.',
      'El país figura entre los mayores productores mundiales de karité, motor económico esencial para las cooperativas de mujeres.',
      'Um dos maiores produtores globais de karité, o país apoia inúmeras cooperativas femininas na produção de manteiga pura.',
      'تحتل البلاد مكانة عالمية متقدمة في إنتاج زبدة الشيا التي تشكل ركيزة أساسية لتمكين التعاونيات النسائية الريفية.'
    ),
  }),
  mkQ({
    id: 'cur_BF_37',
    countryCode: 'BF',
    category: 'culture',
    subCategory: 'economie_developpement',
    difficulty: 2,
    topicKey: 'coton_or_blanc_agriculture',
    source: 'Economie agricole — Bassin cotonnier de l’Ouest',
    prompt: L(
      'Dans l’ouest autour de Bobo-Dioulasso et Dédougou, quelle culture de rente longtemps surnommée « l’or blanc » occupe une place centrale aux côtés des mines d’or ?',
      'Around Bobo-Dioulasso and Dédougou in the west, which cash crop long nicknamed "white gold" plays a central economic role alongside gold mining?',
      'En el oeste, en torno a Bobo-Dioulasso y Dédougou, ¿qué cultivo comercial apodado "el oro blanco" es clave junto a la minería?',
      'No oeste, em torno de Bobo-Dioulasso e Dédougou, qual cultura agrícola apelidada de "ouro branco" é central na economia?',
      'أي محصول زراعي في الغرب حول بوبو ديولاسو وديدوغو يُلقب بـ"الذهب الأبيض"؟'
    ),
    countryModePrompt: L(
      'Quelle fibre agricole produite dans l’ouest du pays et transformée en fils pour le Faso Dan Fani porte le surnom économique d’« or blanc » ?',
      'Which agricultural fibre grown across the western plains and spun into Faso Dan Fani cloth is nicknamed "white gold"?',
      '¿Qué fibra agrícola cultivada en el oeste e hilada para el Faso Dan Fani recibe el apodo de "oro blanco"?',
      'Qual fibra agrícola cultivada no oeste e fiada para o Faso Dan Fani tem o apelido de "ouro branco"?',
      'أي محصول زراعي يُزرع في الغرب ويُغزل منه قماش فاسو دان فاني ويُعرف اقتصادياً بالذهب الأبيض؟'
    ),
    correct: L('Le coton', 'Cotton', 'Algodón', 'Algodão', 'القطن'),
    distractors: [
      L('Le sisal', 'Sisal', 'Sisal', 'Sisal', 'السيزال'),
      L('Le lin', 'Flax', 'Lino', 'Linho', 'الكتان'),
      L('La laine de mérinos', 'Merino wool', 'Lana merina', 'Lã merino', 'صوف المارينو'),
    ],
    explanation: L(
      'Cultivé par des centaines de milliers d’exploitations familiales, le coton fournit la matière première du tissage national et l’une des grandes exportations agricoles.',
      'Grown by hundreds of thousands of smallholders, cotton feeds domestic textile weaving as well as major regional exports.',
      'Cultivado por miles de familias agricultoras, el algodón abastece al tejido artesanal y las exportaciones.',
      'Cultivado por milhares de famílias rurais, o algodão abastece a tecelagem tradicional e as exportações.',
      'يمثل القطن محصولاً زراعياً رئيسياً يوفر المادة الخام لصناعة المنسوجات المحلية والصادرات.'
    ),
  }),
  mkQ({
    id: 'cur_BF_38',
    countryCode: 'BF',
    category: 'culture',
    subCategory: 'anecdotes_insolites',
    difficulty: 3,
    topicKey: 'victor_deme_guitare_bobo',
    source: 'Musiques acoustiques ouest-africaines',
    prompt: L(
      'Quel guitariste et chanteur de Bobo-Dioulasso, ancien tailleur devenu star internationale à près de 45 ans avec « Djon Maya », est une légende de la musique mandingue acoustique ?',
      'Which Bobo-Dioulasso guitarist and former tailor rose to international acclaim in his forties with the song "Djon Maya"?',
      '¿Qué guitarrista y excosturero de Bobo-Dioulasso alcanzó fama internacional con la canción "Djon Maya"?',
      'Qual violonista e ex-alfaiate de Bobo-Dioulasso ganhou fama internacional com a canção "Djon Maya"?',
      'أي عازف غيتار ومغنٍ من بوبو ديولاسو اشتهر عالمياً بأغنية "دجون مايا"؟'
    ),
    countryModePrompt: L(
      'Quel chanteur-guitariste révélé tardivement dans les maquis de Bobo-Dioulasso a ému le monde entier avec sa chanson « Djon Maya » ?',
      'Which late-blooming guitarist from Bobo-Dioulasso’s live music clubs touched global audiences with his acoustic classic "Djon Maya"?',
      '¿Qué cantautor y guitarrista surgido de los maquis de Bobo-Dioulasso emocionó al mundo con "Djon Maya"?',
      'Qual cantor e violonista revelado nos maquis de Bobo-Dioulasso encantou o mundo com "Djon Maya"?',
      'أي مطرب وعازف غيتار خرج من أحياء بوبو ديولاسو وأبهر العالم بأغنية "دجون مايا"؟'
    ),
    correct: L('Victor Démé', 'Victor Démé', 'Victor Démé', 'Victor Démé', 'فيكتور ديمي'),
    distractors: [
      L('Ali Farka Touré', 'Ali Farka Touré', 'Ali Farka Touré', 'Ali Farka Touré', 'علي فاركا توري'),
      L('Boubacar Traoré', 'Boubacar Traoré', 'Boubacar Traoré', 'Boubacar Traoré', 'بوبكر تراوري'),
      L('Habib Koité', 'Habib Koité', 'Habib Koité', 'Habib Koité', 'حبيب كويتي'),
    ],
    explanation: L(
      'Longtemps tailleur le jour et musicien dans les maquis la nuit, Victor Démé publia son premier album en 2008 et fit rayonner la musique de Bobo-Dioulasso dans le monde.',
      'Working as a tailor by day and playing courtyard clubs by night, Victor Démé released his acclaimed debut album at age 45.',
      'Sastre de día y músico de noche, Victor Démé lanzó su primer disco a los 45 años y conquistó escenarios internacionales.',
      'Alfaiate de dia e músico à noite, Victor Démé estreou em disco aos 45 anos conquistando o público mundial.',
      'جمع فيكتور ديمي بين الخياطة نهاراً والغناء في أمسيات بوبو ديولاسو حتى أصدر ألبومه الأول وحقق نجاحاً عالمياً.'
    ),
  }),
];

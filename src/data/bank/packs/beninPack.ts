import { L } from '../../countriesPart1';
import { mkQ } from './packHelpers';

export const BENIN_CURATED_PACK = [
  mkQ({
    id: 'cur_BJ_01',
    countryCode: 'BJ',
    category: 'geography',
    subCategory: 'politique_institutions',
    difficulty: 1,
    topicKey: 'porto_novo_vs_cotonou',
    source: 'Constitution de la République du Bénin',
    prompt: L(
      'Quelle distinction originale existe entre Porto-Novo et Cotonou dans l’organisation du Bénin ?',
      'What unique role distinction exists between Porto-Novo and Cotonou in Benin’s national organization?',
      '¿Qué distinción existe entre Porto Novo y Cotonú en la organización de Benín?',
      'Qual distinção existe entre Porto-Novo e Cotonou na organização do Benim?',
      'ما التمييز المميز بين بورتو نوفو وكوتونو في تنظيم جمهورية بنين؟'
    ),
    countryModePrompt: L(
      'Quelle est la particularité administrative entre les deux grandes villes du sud, Porto-Novo et Cotonou ?',
      'What administrative distinction separates the two major southern cities of Porto-Novo and Cotonou?',
      '¿Qué distinción administrativa separa a las dos grandes ciudades del sur, Porto Novo y Cotonú?',
      'Qual distinção administrativa separa as duas grandes cidades do sul, Porto-Novo e Cotonou?',
      'ما الفرق الإداري بين المدينتين الكبيرتين في الجنوب: بورتو نوفو وكوتونو؟'
    ),
    correct: L('Porto-Novo est la capitale officielle et Cotonou la capitale économique (siège du gouvernement)', 'Porto-Novo is the official capital, while Cotonou is the economic capital and seat of government', 'Porto Novo es la capital oficial y Cotonú la capital económica y sede del gobierno', 'Porto-Novo é a capital oficial e Cotonou a capital econômica e sede do governo', 'بورتو نوفو هي العاصمة الرسمية وكوتونو هي العاصمة الاقتصادية ومقر الحكومة'),
    distractors: [
      L('Porto-Novo se trouve au Sahara et Cotonou en haute montagne', 'Porto-Novo is in the Sahara and Cotonou in high mountains', 'Porto Novo está en el Sáhara y Cotonú en alta montaña', 'Porto-Novo fica no Saara e Cotonou em alta montanha', 'بورتو نوفو في الصحراء وكوتونو في الجبال'),
      L('Les deux villes sont situées sur deux continents différents', 'Both cities sit on separate continents', 'Ambas están en continentes distintos', 'Ambas ficam em continentes diferentes', 'المدينتان في قارتين مختلفتين'),
      L('Aucune des deux n’a accès à la lagune ou à la mer', 'Neither has access to coastal lagoons or ocean', 'Ninguna tiene acceso a laguna ni mar', 'Nenhuma tem acesso a laguna ou mar', 'لا تطل أي منهما على بحيرة أو بحر'),
    ],
    explanation: L(
      'Porto-Novo abrite l’Assemblée nationale et le Musée Honmè, tandis que Cotonou concentre la Présidence, les ministères et le grand port autonome.',
      'Porto-Novo houses Parliament and royal museums, whereas Cotonou hosts the Presidency, ministries, and the main Atlantic seaport.',
      'Porto Novo alberga el Parlamento, mientras Cotonú concentra la Presidencia y el gran puerto atlántico.',
      'Porto-Novo abriga o Parlamento, enquanto Cotonou concentra a Presidência e o grande porto atlântico.',
      'تضم بورتو نوفو مقر البرلمان بينما تحتضن كوتونو القصر الرئاسي والميناء البحري الرئيسي.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_02',
    countryCode: 'BJ',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'pendjari_national_park_atacora',
    source: 'UNESCO — Complexe W-Arly-Pendjari (Atacora)',
    prompt: L(
      'Dans le nord-ouest du Bénin (massif de l’Atacora), quel célèbre parc national classé à l’UNESCO protège lions d’Afrique de l’Ouest, guépards, éléphants et hippopotames ?',
      'In northwestern Benin (Atakora), which famed UNESCO-listed national park shelters West African lions, cheetahs, elephants, and hippos?',
      'En el noroeste de Benín (Atacora), ¿qué famoso parque nacional Patrimonio de la UNESCO protege leones, guepardos y elefantes?',
      'No noroeste do Benim (Atakora), qual famoso parque nacional Patrimônio da UNESCO protege leões, guepardos e elefantes?',
      'في شمال غرب بنين (أتاكورا)، ما المتنزه الوطني الشهير المدرج لدى اليونسكو الذي يحمي الأسود والفهود والفيلة؟'
    ),
    countryModePrompt: L(
      'Quel grand parc national de la chaîne de l’Atacora, appartenant au complexe trinational WAP classé à l’UNESCO, est le joyau du tourisme de safari dans le nord-ouest ?',
      'Which major national park in the northwestern Atakora range, part of the UNESCO WAP complex, is the country’s premier wildlife sanctuary?',
      '¿Qué gran parque nacional del noroeste en la cordillera de Atacora forma parte del complejo UNESCO WAP?',
      'Qual grande parque nacional do noroeste na serra de Atakora integra o complexo UNESCO WAP?',
      'أي متنزه وطني كبير في سلسلة جبال أتاكورا بالشمال الغربي يمثل درة محميات اليونسكو؟'
    ),
    correct: L('Le Parc national de la Pendjari', 'Pendjari National Park', 'Parque Nacional de Pendjari', 'Parque Nacional do Pendjari', 'متنزه بندجاري الوطني'),
    distractors: [
      L('Le Parc du Serengeti', 'Serengeti Park', 'Parque Serengeti', 'Parque Serengeti', 'متنزه سيرينغيتي'),
      L('Le Parc Kruger', 'Kruger Park', 'Parque Kruger', 'Parque Kruger', 'متنزه كروغر'),
      L('Le Parc de Tsavo', 'Tsavo Park', 'Parque Tsavo', 'Parque Tsavo', 'متنزه تسافو'),
    ],
    explanation: L(
      'Situé près de Tanguiéta et bordé par les méandres de la rivière Pendjari, il forme avec le Parc W l’un des derniers grands refuges de savane d’Afrique de l’Ouest.',
      'Near Tanguiéta along the winding Pendjari River, it protects one of the very last healthy West African lion populations.',
      'Cerca de Tanguiéta, protege una de las últimas grandes poblaciones de leones de África Occidental.',
      'Perto de Tanguiéta, protege uma das últimas grandes populações de leões da África Ocidental.',
      'يُعد متنزه بندجاري قرب تانغويتا من آخر الملاذات الكبرى لأسود غرب أفريقيا.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_03',
    countryCode: 'BJ',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'tata_somba_boukoumbe_atacora',
    source: 'Architecture Betammaribé — Atacora (Boukoumbé)',
    prompt: L(
      'Dans l’Atacora autour de Boukoumbé et Natitingou, comment appelle-t-on les célèbres maisons fortifiées en terre à tourelles et greniers coniques construites par les Betammaribé ?',
      'Around Boukoumbé and Natitingou in the Atakora hills, what are the famous two-story earthen castle-like homes built by the Betammaribé people called?',
      'Alrededor de Boukoumbé y Natitingou en Atacora, ¿cómo se llaman las célebres casas fortificadas de adobe de dos plantas con torretas?',
      'Em torno de Boukoumbé e Natitingou no Atakora, como se chamam as célebres casas fortificadas de barro com torres dos Betammaribé?',
      'حول بوكمبي وناتيتينغو في جبال أتاكورا، ما اسم المنازل الطينية المحصنة الشهيرة ذات الأبراج الصغرى؟'
    ),
    correct: L('Les Tata Somba (Takienta)', 'Tata Somba (Takienta)', 'Los Tata Somba (Takienta)', 'Os Tata Somba (Takienta)', 'منازل تاتا سومبا (تاكينتا)'),
    distractors: [
      L('Les yourtes mongoles', 'Mongolian yurts', 'Yurtas mongolas', 'Iurtas mongóis', 'الخيام المنغولية'),
      L('Les igloos de glace', 'Ice igloos', 'Iglús de hielo', 'Iglus de gelo', 'الأكواخ الجليدية'),
      L('Les chalets tyroliens', 'Tyrolean chalets', 'Chalets tiroleses', 'Chalés tiroleses', 'الشاليهات الألبية'),
    ],
    explanation: L(
      'Chef-d’œuvre de génie climatique et défensif, le Tata Somba abrite le bétail au rez-de-chaussée, les chambres sur la terrasse supérieure et des greniers coiffés de paille.',
      'An architectural marvel, the Tata Somba houses livestock below, cool living quarters above, and conical granary turrets.',
      'Obra maestra arquitectónica, el Tata Somba protege ganado abajo, viviendas arriba y graneros cónicos.',
      'Maravilha arquitetônica, o Tata Somba abriga animais embaixo, moradia em cima e celeiros cônicos.',
      'تحفة معمارية تضم حظيرة الماشية في الطابق الأرضي وغرف السكن وصوامع الحبوب المخروطية في الأعلى.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_04',
    countryCode: 'BJ',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'ouidah_porte_non_retour_pythons',
    source: 'Patrimoine mémoriel & culturel — Ouidah',
    prompt: L(
      'Quelle ville côtière historique est mondialement connue pour sa « Route des Esclaves », la « Porte du Non-Retour » sur la plage et le célèbre Temple des Pythons ?',
      'Which historic coastal town is world-renowned for its Slave Route leading to the Gate of No Return monument and the sacred Temple of Pythons?',
      '¿Qué ciudad costera histórica es famosa mundialmente por su Ruta de los Esclavos, la Puerta del No Retorno y el Templo de las Pitones?',
      'Qual cidade costeira histórica é mundialmente famosa pela Rota dos Escravos, pela Porta do Não Retorno e pelo Templo das Pítons?',
      'ما المدينة الساحلية التاريخية الشهيرة عالمياً بـ«طريق العبيد» وبوابة اللاعودة ومعبد الثعابين المقدس؟'
    ),
    correct: L('Ouidah', 'Ouidah', 'Ouidah', 'Ouidah', 'ويدا'),
    distractors: [
      L('Kandi', 'Kandi', 'Kandi', 'Kandi', 'كاندي'),
      L('Malanville', 'Malanville', 'Malanville', 'Malanville', 'مالانفيل'),
      L('Nikki', 'Nikki', 'Nikki', 'Nikki', 'نيكي'),
    ],
    explanation: L(
      'Haut lieu de mémoire inscrit sur la liste indicative de l’UNESCO, Ouidah abrite aussi la forêt sacrée de Kpassè et accueille les grandes célébrations des Vodun Days.',
      'A deeply moving site of memory, Ouidah also safeguards the sacred Kpassè forest and hosts the annual Vodun Days celebrations.',
      'Lugar esencial de memoria, Ouidah resguarda también el bosque sagrado de Kpassè y celebra los Vodun Days.',
      'Local essencial de memória, Ouidah guarda também a floresta sagrada de Kpassè e os festejos de Vodun Days.',
      'تُعد ويدا موقعاً تاريخياً عميق الأثر وتحتضن غابة كباسي المقدسة واحتفالات الفودون السنوية.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_05',
    countryCode: 'BJ',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'oueme_river_nokoue_sokbaro',
    source: 'Hydrographie — Bassin de l’Ouémé',
    prompt: L(
      'Quel est le plus long fleuve prenant sa source dans le massif de l’Atacora et traversant tout le pays du nord au sud avant de se jeter dans le lac Nokoué ?',
      'Which is the longest river wholly crossing the country from north to south—rising in the Atakora hills and emptying into Lake Nokoué?',
      '¿Cuál es el río más largo que cruza el país de norte a sur desde Atacora hasta desembocar en el lago Nokoué?',
      'Qual é o rio mais longo que atravessa o país de norte a sul desde o Atakora até desaguar no lago Nokoué?',
      'ما أطول نهر يجري داخل البلاد من الشمال إلى الجنوب انطلاقاً من أتاكورا ليصب في بحيرة نوكوي؟'
    ),
    correct: L('Le Fleuve Ouémé', 'The Ouémé River', 'El Río Ouémé', 'O Rio Ouémé', 'نهر ويمي'),
    distractors: [
      L('Le Fleuve Limpopo', 'Limpopo River', 'Río Limpopo', 'Rio Limpopo', 'نهر ليمبوبو'),
      L('Le Fleuve Zambèze', 'Zambezi River', 'Río Zambeze', 'Rio Zambeze', 'نهر زامبيزي'),
      L('Le Fleuve Gambie', 'Gambia River', 'Río Gambia', 'Rio Gâmbia', 'نهر غامبيا'),
    ],
    explanation: L(
      'Long d’environ 510 km, le fleuve Ouémé reçoit l’Okpara et le Zou avant de nourrir la fertile vallée de l’Ouémé et le lac Nokoué (où se dresse Ganvié).',
      'Stretching ~510 km, the Ouémé nourishes fertile floodplains and feeds Lake Nokoué, home to the stilt village of Ganvié.',
      'Con unos 510 km, el Ouémé fertiliza su valle y alimenta el lago Nokoué.',
      'Com cerca de 510 km, o Ouémé fertiliza um vale fértil e alimenta o lago Nokoué.',
      'يمتد نهر ويمي لنحو 510 كم ويغذي واديه الخصب وبحيرة نوكوي.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_06',
    countryCode: 'BJ',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'dassa_zoume_kota_tanougou',
    source: 'Patrimoine naturel — Collines & Atacora',
    prompt: L(
      'Dans le département des Collines, quelle ville surnommée la cité des « 41 collines » est réputée pour ses dômes granitiques spectaculaires et son grand pèlerinage marial annuel ?',
      'In the Collines Department, which city nicknamed the town of "41 hills" is famed for its granite domes and major annual Marian pilgrimage?',
      'En el departamento de Collines, ¿qué ciudad apodada la de las «41 colinas» destaca por sus domos graníticos y peregrinación?',
      'No departamento de Collines, qual cidade apelidada das "41 colinas" destaca-se pelos domos graníticos e peregrinação?',
      'في إقليم كولين، ما المدينة الملقبة بمدينة «41 تلاً» والشهيرة بقبابها الجرانيتية؟'
    ),
    correct: L('Dassa-Zoumè', 'Dassa-Zoumè', 'Dassa-Zoumè', 'Dassa-Zoumè', 'داسا زوميه'),
    distractors: [
      L('Malanville', 'Malanville', 'Malanville', 'Malanville', 'مالانفيل'),
      L('Sèmè-Podji', 'Sèmè-Podji', 'Sèmè-Podji', 'Sèmè-Podji', 'سيمي بوجي'),
      L('Pobè', 'Pobè', 'Pobè', 'Pobè', 'بوبي'),
    ],
    explanation: L(
      'Ancien royaume Idaasha, Dassa-Zoumè s’étend au pied d’un impressionnant cirque de collines granitiques au centre du pays.',
      'Historic seat of the Idaasha kingdom, Dassa-Zoumè rises amid striking rounded granite inselbergs in central Benin.',
      'Antigua sede del reino Idaasha, Dassa-Zoumè se alza entre espectaculares colinas de granito.',
      'Antiga sede do reino Idaasha, Dassa-Zoumè ergue-se entre impressionantes morros graníticos.',
      'تقع داسا زوميه وسط تلال جرانيتية مهيبة وكانت حاضرة مملكة إيداشا التاريخية.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_07',
    countryCode: 'BJ',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 2,
    topicKey: 'cotonou_port_parakou_cotton_pineapple',
    source: 'Géographie économique — Atacora à l’Atlantique',
    prompt: L(
      'Quelle variété d’ananas allongée, très sucrée et parfumée, cultivée sur le plateau d’Allada au sud du pays, bénéficie d’une Indication Géographique Protégée ?',
      'Which sweet, elongated variety of pineapple grown on the Allada plateau in southern Benin holds Protected Geographical Indication (PGI) status?',
      '¿Qué dulce y aromática variedad de piña alargada cultivada en la meseta de Allada cuenta con Indicación Geográfica Protegida?',
      'Qual doce e aromática variedade de abacaxi alongado cultivada no planalto de Allada possui Indicação Geográfica Protegida?',
      'ما الصنف الحلو المستطيل من الأناناس المزروع في هضبة ألادا والحاصل على شهادة المنشأ الجغرافي المحمي؟'
    ),
    correct: L('L’ananas « Pain de sucre »', 'Sugarloaf pineapple ("Pain de sucre")', 'Piña «Pain de sucre»', 'Abacaxi "Pão de açúcar"', 'أناناس «رغيف السكر» (Pain de sucre)'),
    distractors: [
      L('La pomme Reinette de Normandie', 'Normandy Reinette apple', 'Manzana Reineta', 'Maçã Reineta', 'تفاح رينيت'),
      L('La cerise griotte du nord', 'Northern sour cherry', 'Guinda nórdica', 'Cereja ácida', 'الكرز الحامض'),
      L('La poire Williams alpine', 'Alpine Williams pear', 'Pera Williams', 'Pera Williams', 'كمثرى ويليامز'),
    ],
    explanation: L(
      'Juteux et peu acide même avec sa peau verte à maturité, le « Pain de sucre » du plateau d’Allada complète les exportations de coton et d’anacarde.',
      'Low-acid and richly honeyed even when green-skinned at ripeness, Sugarloaf pineapple complements major cotton and cashew exports.',
      'Poco ácido y muy dulce incluso con piel verde, completa las exportaciones agrícolas junto al algodón y el anacardo.',
      'Pouco ácido e muito doce mesmo com casca verde, complementa as exportações de algodão e caju.',
      'يتميز أناناس رغيف السكر بحلاوته الفائقة وقلة حموضته، ويُصدّر إلى جانب القطن والكاجو.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_08',
    countryCode: 'BJ',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'parakou_kandi_bouche_du_roy',
    source: 'Géographie régionale — Borgou & Mono',
    prompt: L(
      'Quelle grande ville universitaire et ferroviaire du département du Borgou constitue le principal carrefour économique du centre-nord ?',
      'Which major university and rail-head city in Borgou serves as the primary economic hub of north-central Benin?',
      '¿Qué gran ciudad universitaria y nudo comercial del departamento de Borgou es el principal polo económico del centro-norte?',
      'Qual grande cidade universitária e polo comercial de Borgou é o principal eixo econômico do centro-norte?',
      'ما المدينة الجامعية والتجارية الكبرى في إقليم بورغو التي تُعد المركز الاقتصادي الأبرز في الوسط الشمالي؟'
    ),
    correct: L('Parakou', 'Parakou', 'Parakou', 'Parakou', 'باراكو'),
    distractors: [
      L('Grand-Popo', 'Grand-Popo', 'Grand-Popo', 'Grand-Popo', 'غران بوبو'),
      L('Abomey-Calavi', 'Abomey-Calavi', 'Abomey-Calavi', 'Abomey-Calavi', 'أبومي كالافي'),
      L('Kétou', 'Kétou', 'Kétou', 'Kétou', 'كيتو'),
    ],
    explanation: L(
      'Terminus historique du chemin de fer venu de Cotonou, Parakou relie le sud portuaire aux routes vers le Niger et le Burkina Faso.',
      'Long the northern terminus of the railway from Cotonou, Parakou links coastal trade to the Sahelian corridor.',
      'Histórica terminal ferroviaria desde Cotonú, Parakou conecta la costa con los corredores hacia el Sahel.',
      'Histórico terminal ferroviário vindo de Cotonou, Parakou liga a costa aos corredores do Sahel.',
      'تربط باراكو الميناء الجنوبي في كوتونو بالطرق التجارية المؤدية إلى النيجر وبوركينا فاسو.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_09',
    countryCode: 'BJ',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 1,
    topicKey: 'independence_aug1_1960_maga',
    source: 'Archives nationales — 1er août 1960',
    prompt: L(
      'À quelle date précise le pays (alors appelé République du Dahomey) a-t-il accédé à l’indépendance avec Hubert Maga comme premier président ?',
      'On what exact date did the country (then known as the Republic of Dahomey) achieve independence with Hubert Maga as its first president?',
      '¿En qué fecha exacta alcanzó la independencia el país (entonces República de Dahomey) con Hubert Maga como primer presidente?',
      'Em que data exata o país (então República do Daomé) alcançou a independência com Hubert Maga como primeiro presidente?',
      'في أي تاريخ بالضبط نالت البلاد (تحت اسم جمهورية داهومي آنذاك) استقلالها مع أول رئيس هوبرت ماغا؟'
    ),
    correct: L('Le 1er août 1960', 'August 1, 1960', '1 de agosto de 1960', '1 de agosto de 1960', '1 أغسطس 1960'),
    distractors: [
      L('Le 27 avril 1960', 'April 27, 1960', '27 de abril de 1960', '27 de abril de 1960', '27 أبريل 1960'),
      L('Le 5 août 1960', 'August 5, 1960', '5 de agosto de 1960', '5 de agosto de 1960', '5 أغسطس 1960'),
      L('Le 3 août 1960', 'August 3, 1960', '3 de agosto de 1960', '3 de agosto de 1960', '3 أغسطس 1960'),
    ],
    explanation: L(
      'Premier État du « mois d’août africain » en 1960, le pays proclama sa souveraineté le 1er août, avant de prendre le nom de Bénin le 30 novembre 1975.',
      'Proclaimed on August 1, 1960 under Hubert Maga, the nation later adopted the name Benin in November 1975.',
      'Proclamada el 1 de agosto de 1960 bajo Hubert Maga, la nación adoptó en 1975 el nombre de Benín.',
      'Proclamada em 1º de agosto de 1960 sob Hubert Maga, a nação adotou em 1975 o nome de Benim.',
      'أُعلن الاستقلال في 1 أغسطس 1960 ثم اعتمدت البلاد اسم «بنين» عام 1975.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_10',
    countryCode: 'BJ',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 2,
    topicKey: 'agojie_amazons_dahomey',
    source: 'Archives du Royaume du Dahomey — Abomey',
    prompt: L(
      'Comment appelait-on en langue fon le célèbre corps militaire exclusivement féminin d’élite du Royaume du Dahomey (immortalisé au cinéma par « The Woman King ») ?',
      'In the Fon language, what was the famed all-female elite military regiment of the Kingdom of Dahomey called?',
      'En lengua fon, ¿cómo se llamaba el célebre cuerpo militar femenino de élite del Reino de Dahomey?',
      'Na língua fon, como se chamava o célebre regimento militar feminino de elite do Reino do Daomé?',
      'بلغة الفون، ما الاسم الذي أُطلق على الفرقة العسكرية النسائية النخبوية الشهيرة في مملكة داهومي؟'
    ),
    correct: L('Les Mino (« Nos Mères ») ou Agojie', 'The Mino ("Our Mothers") or Agojie', 'Las Mino («Nuestras Madres») o Agojie', 'As Mino ("Nossas Mães") ou Agojie', 'مينو («أمهاتنا») أو أغوجي'),
    distractors: [
      L('Les Valkyries nordiques', 'Nordic Valkyries', 'Valquirias', 'Valquírias', 'الفالكيري'),
      L('Les Mousquetaires du Roi', 'King’s Musketeers', 'Mosqueteros', 'Mosqueteiros', 'الفرسان الثلاثة'),
      L('Les Légionnaires romaines', 'Roman Legionaries', 'Legionarias', 'Legionárias', 'الفيلق الروماني'),
    ],
    explanation: L(
      'Instituées sous le règne de Tassi Hangbé puis structurées sous Agadja et Guézo, les Agojie (souvent appelées « Amazones ») combattaient en première ligne pour protéger le trône d’Abomey.',
      'Tracing roots to ruler Tassi Hangbé and expanded under King Ghezo, the Agojie served as elite royal guards of Abomey.',
      'Con raíces en Tassi Hangbé y reforzadas por el rey Guezo, las Agojie fueron la guardia real de élite de Abomey.',
      'Com raízes em Tassi Hangbé e fortalecidas pelo rei Guézo, as Agojie formavam a guarda de elite de Abomey.',
      'تشكلت هذه الفرقة النخبوية في أبومي ودافعت ببسالة في الصفوف الأمامية عن المملكة.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_11',
    countryCode: 'BJ',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 2,
    topicKey: 'behanzin_shark_resistance_1894',
    source: 'Histoire d’Abomey (1889–1894)',
    prompt: L(
      'Quel grand roi d’Abomey — dont le symbole royal était le requin (« le requin qui trouble la barre ») — dirigea la résistance farouche face à l’expédition française de 1890–1894 ?',
      'Which great King of Abomey—whose royal emblem was the shark—led fierce resistance against colonial conquest between 1890 and 1894?',
      '¿Qué gran rey de Abomey —cuyo emblema real era el tiburón— lideró la feroz resistencia entre 1890 y 1894?',
      'Qual grande rei de Abomey —cujo emblema real era o tubarão— liderou a feroz resistência entre 1890 e 1894?',
      'من هو ملك أبومي الشهير الذي كان رمزه القرش وقاد المقاومة الباسلة بين عامي 1890 و1894؟'
    ),
    correct: L('Le Roi Béhanzin (Gbêhanzin)', 'King Béhanzin (Gbêhanzin)', 'El Rey Béhanzin', 'O Rei Béhanzin', 'الملك بيهينزين'),
    distractors: [
      L('Le Roi Toffa Ier', 'King Toffa I', 'El Rey Toffa I', 'O Rei Toffa I', 'الملك توفا الأول'),
      L('Le Roi Chaka', 'King Shaka', 'El Rey Shaka', 'O Rei Shaka', 'الملك شاكا'),
      L('Le Négus Théodoros II', 'Emperor Tewodros II', 'Tewodros II', 'Tewodros II', 'الإمبراطور تيودروس الثاني'),
    ],
    explanation: L(
      'Exilé en Martinique puis à Blida (Algérie) où il mourut en 1906, Béhanzin fut rapatrié à Djimè (Abomey) en 1928 et demeure un héros national majeur.',
      'Exiled to Martinique and Algeria, King Béhanzin’s remains returned home to Abomey in 1928; his statues remain national emblems.',
      'Exiliado a Martinica y Argelia, sus restos regresaron a Abomey en 1928 y sigue siendo un símbolo de dignidad.',
      'Exilado na Martinica e Argélia, seus restos voltaram a Abomey em 1928 como símbolo máximo de dignidade.',
      'نُفي الملك بيهينزين إلى المارتينيك ثم الجزائر قبل إعادة رفاته إلى أبومي عام 1928 بطلاً وطنياً.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_12',
    countryCode: 'BJ',
    category: 'history',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'royal_palaces_abomey_26_treasures',
    source: 'UNESCO & Restitution historique de 2021',
    prompt: L(
      'En novembre 2021, qu’est-il revenu solennellement à Cotonou après plus d’un siècle en France, suscitant une immense émotion nationale et une exposition record au Palais de la Marina ?',
      'In November 2021, what solemnly returned to Cotonou after more than a century abroad, drawing historic crowds to the Marina Palace exhibition?',
      'En noviembre de 2021, ¿qué regresó solemnemente a Cotonú tras más de un siglo en el extranjero para una exposición histórica?',
      'Em novembro de 2021, o que retornou solenemente a Cotonou após mais de um século no exterior para uma exposição histórica?',
      'في نوفمبر 2021، ما الذي عاد باحتفالية مهيبة إلى كوتونو بعد أكثر من قرن في الخارج؟'
    ),
    correct: L('Les 26 trésors royaux d’Abomey (dont les statues de Glèlè, Béhanzin et Guézo)', 'The 26 Royal Treasures of Abomey (including statues of Kings Ghezo, Glele, and Béhanzin)', 'Los 26 tesoros reales de Abomey', 'Os 26 tesouros reais de Abomey', 'الكنوز الملكية الـ26 لمملكة أبومي'),
    distractors: [
      L('Les joyaux de la Couronne britannique', 'British Crown Jewels', 'Joyas de la Corona británica', 'Joias da Coroa britânica', 'جواهر التاج البريطاني'),
      L('La Pierre de Rosette d’Égypte', 'The Rosetta Stone', 'La Piedra de Rosetta', 'A Pedra de Roseta', 'حجر رشيد'),
      L('L’Armée de terre cuite de Xi’an', 'Terracotta Army', 'Guerreros de Terracota', 'Exército de Terracota', 'جيش التيراكوتا'),
    ],
    explanation: L(
      'Saisis au palais d’Abomey en 1892, ces 26 chefs-d’œuvre (trônes, récades et statues royales mi-homme mi-animal) ont marqué un tournant mondial pour la restitution du patrimoine africain.',
      'Taken from Abomey in 1892, these 26 royal statues, thrones, and scepters marked a landmark milestone in African cultural restitution.',
      'Estos 26 cetros, tronos y estatuas reales marcaron un hito mundial en la restitución del patrimonio africano.',
      'Esses 26 cetros, tronos e estátuas reais marcaram um divisor de águas mundial na restituição cultural africana.',
      'شكّلت عودة هذه القطع الملكية الـ26 علامة فارقة عالمياً في استرداد التراث الأفريقي.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_13',
    countryCode: 'BJ',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 3,
    topicKey: 'conference_nationale_1990_souza',
    source: 'Histoire politique contemporaine (février 1990)',
    prompt: L(
      'En février 1990, quel événement politique pacifique inédit en Afrique francophone (présidé par Mgr Isidore de Souza) ouvrit la voie au multipartisme et fit du pays un pionnier démocratique ?',
      'In February 1990, which pioneering peaceful civic event—chaired by Archbishop Isidore de Souza—ushered in multiparty democracy for the first time in Francophone Africa?',
      'En febrero de 1990, ¿qué proceso pacífico inédito —presidido por Isidore de Souza— inauguró el multipartidismo en el África francófona?',
      'Em fevereiro de 1990, qual evento pacífico inédito —presidido por Isidore de Souza— inaugurou o multipartidarismo na África francófona?',
      'في فبراير 1990، ما الحدث السياسي السلمي الرائد بقيادة المطران إيزيدور دي سوزا الذي دشّن التعددية الحزبية في أفريقيا الفرانكوفونية؟'
    ),
    correct: L('La Conférence nationale des forces vives de la Nation', 'The Sovereign National Conference', 'La Conferencia Nacional de Fuerzas Vivas', 'A Conferência Nacional Soberana', 'المؤتمر الوطني للقوى الحية للأمة'),
    distractors: [
      L('Les Accords de Breda', 'Treaty of Breda', 'Tratado de Breda', 'Tratado de Breda', 'معاهدة بريدا'),
      L('Le Congrès de Vienne', 'Congress of Vienna', 'Congreso de Viena', 'Congresso de Viena', 'مؤتمر فيينا'),
      L('La Paix d’Augsbourg', 'Peace of Augsburg', 'Paz de Augsburgo', 'Paz de Augsburgo', 'صلح أوغسبورغ'),
    ],
    explanation: L(
      'Saluée comme un « miracle » sur tout le continent, la Conférence de février 1990 inspira plusieurs pays voisins à organiser des transitions pacifiques.',
      'Widely hailed across Africa, the February 1990 National Conference led peacefully to the 1991 democratic election won by Nicéphore Soglo.',
      'Aclamada en todo el continente, la Conferencia de 1990 inspiró transiciones similares en países vecinos.',
      'Aclamada por todo o continente, a Conferência de 1990 inspirou transições pacíficas em vários países vizinhos.',
      'أصبح المؤتمر الوطني لعام 1990 نموذجاً سلمياً ألهم عدة دول مجاورة في أفريقيا.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_14',
    countryCode: 'BJ',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 4,
    topicKey: 'roi_kaba_atacora_resistance',
    source: 'Histoire du Nord-Bénin — Natitingou (1916–1917)',
    prompt: L(
      'Quel grand héros de la résistance du nord (Atacora), originaire de Kouaba près de Natitingou, mena pendant plusieurs mois la révolte des peuples otammari contre le recrutement forcé et les impôts en 1916–1917 ?',
      'Which revered northern resistance hero near Natitingou led Atakora’s fierce 1916–1917 uprising against forced labor and colonial conscription?',
      '¿Qué héroe de la resistencia del norte (Atacora) cerca de Natitingou lideró el levantamiento de 1916-1917 contra los abusos coloniales?',
      'Qual herói da resistência do norte (Atakora) perto de Natitingou liderou o levante de 1916-1917 contra o alistamento forçado?',
      'من هو بطل المقاومة في الشمال (أتاكورا) قرب ناتيتينغو الذي قاد انتفاضة 1916-1917 ضد التجنيد والضرائب الاستعمارية؟'
    ),
    correct: L('Kaba (le héros de l’Atacora)', 'Kaba (Hero of Atakora)', 'Kaba (el héroe de Atacora)', 'Kaba (herói do Atakora)', 'كابا (بطل أتاكورا)'),
    distractors: [
      L('Général Dodds', 'General Dodds', 'General Dodds', 'General Dodds', 'الجنرال دودز'),
      L('Cecil Rhodes', 'Cecil Rhodes', 'Cecil Rhodes', 'Cecil Rhodes', 'سيسيل رودس'),
      L('Henry Morton Stanley', 'Henry Morton Stanley', 'Henry Morton Stanley', 'Henry Morton Stanley', 'هنري مورتون ستانلي'),
    ],
    explanation: L(
      'Stratège des grottes montagneuses de Dataori, Kaba reste vénéré dans tout l’Atacora où la principale place et un monument de Natitingou portent son nom.',
      'Using natural mountain caves around Dataori, Kaba led brave resistance and is honored with a grand monument in Natitingou.',
      'Desde las cuevas montañosas de Dataori, Kaba lideró una valiente defensa recordada hoy con un gran monumento.',
      'Das cavernas montanhosas de Dataori, Kaba liderou uma resistência brava homenageada em Natitingou.',
      'قاد كابا مقاومة باسلة من مغارات جبال أتاكورا ويُخلَّد اسمه بنصب كبير في ناتيتينغو.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_15',
    countryCode: 'BJ',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 3,
    topicKey: 'nikki_wasangari_gaani_bariba',
    source: 'Histoire des royaumes du Borgou — Nikki & Parakou',
    prompt: L(
      'Quelle ancienne cité royale du Borgou (nord-est), berceau du royaume bariba des Wasangari, accueille chaque année la spectaculaire fête équestre de la « Gaani » ?',
      'Which historic royal town in Borgou—cradle of the Bariba Wasangari kingdom—hosts the spectacular annual equestrian festival of "Gaani"?',
      '¿Qué antigua ciudad real de Borgou —cuna del reino bariba— celebra cada año el gran festival ecuestre de la «Gaani»?',
      'Qual antiga cidade real de Borgou —berço do reino bariba— celebra todo ano o festival equestre da "Gaani"?',
      'ما المدينة الملكية العريقة في إقليم بورغو، مهد مملكة باريبا، التي تحتضن سنوياً مهرجان الفروسية الشهير «غاني»؟'
    ),
    correct: L('Nikki', 'Nikki', 'Nikki', 'Nikki', 'نيكي'),
    distractors: [
      L('Abomey', 'Abomey', 'Abomey', 'Abomey', 'أبومي'),
      L('Ouidah', 'Ouidah', 'Ouidah', 'Ouidah', 'ويدا'),
      L('Savalou', 'Savalou', 'Savalou', 'Savalou', 'سافالو'),
    ],
    explanation: L(
      'Chez l’empereur Sina Boko à Nikki, les cavaliers bariba (Baatombu) font danser leurs chevaux richement caparaçonnés au son des trompettes kakaki lors de la Gaani.',
      'Before the ruler of Nikki, Baatombu horsemen parade lavishly adorned steeds to royal drums and trumpets during Gaani.',
      'En Nikki, jinetes baatombu hacen desfilar sus caballos engalanados al ritmo de tambores reales durante la Gaani.',
      'Em Nikki, cavaleiros baatombu desfilam seus cavalos ornamentados ao som de tambores reais na Gaani.',
      'تُعد نيكي مركز إمبراطورية باريبا حيث يقدم الفرسان استعراضات مهيبة في مهرجان غاني السنوي.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_16',
    countryCode: 'BJ',
    category: 'culture',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'gelede_unesco_heritage_masks',
    source: 'UNESCO — Patrimoine oral et immatériel (2001/2008)',
    prompt: L(
      'Inscrit dès 2001 au patrimoine culturel immatériel de l’UNESCO (partagé avec le Nigeria et le Togo), quel célèbre festival masqué yoruba-nago (Kétou, Pobè, Savè) rend hommage aux mères et aux femmes ?',
      'Proclaimed by UNESCO in 2001, which vibrant Yoruba-Nago masked performance tradition (practiced in Kétou, Pobè, and Savè) pays tribute to mothers and female spiritual power?',
      'Proclamado por la UNESCO en 2001, ¿qué vibrante festival de máscaras yoruba-nago (Kétou, Pobè, Savè) rinde homenaje a las madres?',
      'Proclamado pela UNESCO em 2001, qual vibrante festival de máscaras iorubá-nagô (Kétou, Pobè, Savè) homenageia as mães?',
      'ما المهرجان التنكري اليوروبا-ناغو المدرج لدى اليونسكو منذ 2001 (في كيتو وبوبي وسافيه) تكريماً للأمهات ومكانة المرأة؟'
    ),
    correct: L('Le Gèlèdè (Guèlèdè)', 'Gelede (Gèlèdè)', 'El Gelede', 'O Gelede', 'احتفالات غيليدي (Gelede)'),
    distractors: [
      L('Le Carnaval de Rio', 'Rio Carnival', 'Carnaval de Río', 'Carnaval do Rio', 'كرنفال ريو'),
      L('La Commedia dell’arte', 'Commedia dell’arte', 'Comedia del arte', 'Commedia dell’arte', 'كوميديا الفن'),
      L('Le Théâtre Nô', 'Noh Theater', 'Teatro Noh', 'Teatro Nô', 'مسرح نو'),
    ],
    explanation: L(
      'Ornés de coiffes sculptées colorées pleines d’humour et de sagesse sociale, les danseurs du Gèlèdè unissent musique, satire et respect profond envers les « Iya Nla » (ancêtres féminines).',
      'Wearing intricately carved wooden headdresses blending satire and wisdom, Gelede performers celebrate maternal life-giving strength.',
      'Con elaborados tocados de madera tallada, el Gelede une música, sátira y respeto hacia la fuerza creadora materna.',
      'Com elaborados cocares de madeira esculpida, o Gelede une música, sátira e respeito à força materna.',
      'يجمع تقليد غيليدي الأقنعة الخشبية المنحوتة والرقص والأغاني لتكريم الأمهات والحكمة الاجتماعية.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_17',
    countryCode: 'BJ',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'zangbeto_night_guardians',
    source: 'Traditions culturelles du Sud-Bénin (Porto-Novo, Ouidah)',
    prompt: L(
      'Comment appelle-t-on ces impressionnantes meules coniques de paille de raphia teinte qui tournoient seules comme des toupies pour veiller sur la paix nocturne des villages ?',
      'What are the striking colorful conical raffia-straw figures that spin autonomously like giant tops to guard community peace at night called?',
      '¿Cómo se llaman las llamativas figuras cónicas de rafia tejida que giran como peonzas para velar por la paz nocturna?',
      'Como se chamam as impressionantes figuras cônicas de ráfia colorida que giram como piões para guardar a paz noturna?',
      'ما الاسم الذي يُطلق على المجسمات المخروطية الملونة من ألياف الرافيا التي تدور بسرعة مذهلة لحفظ الأمن ليلاً؟'
    ),
    correct: L('Les Zangbeto (« Gardiens de la nuit »)', 'Zangbeto ("Keepers of the Night")', 'Los Zangbeto («Guardianes de la noche»)', 'Os Zangbeto ("Guardiões da noite")', 'زانغبيتو («حراس الليل»)'),
    distractors: [
      L('Les Samouraïs de Kyoto', 'Kyoto Samurai', 'Samuráis', 'Samurais', 'الساموراي'),
      L('Les Troubadours occitans', 'Troubadours', 'Trovadores', 'Trovadores', 'التروبادور'),
      L('Les Golems d’argile', 'Clay Golems', 'Golems', 'Golens', 'الغولم'),
    ],
    explanation: L(
      'Créés historiquement à Porto-Novo (Hogbonou) pour protéger la cité des intrus, les Zangbeto demeurent une institution respectée de cohésion sociale et de spectacle fascinant.',
      'Originally organized as Porto-Novo’s traditional nocturnal police, Zangbeto masquerades symbolize community vigilance and heritage.',
      'Creados originalmente en Porto Novo como vigías nocturnos, los Zangbeto simbolizan cohesión comunitaria.',
      'Criados originalmente em Porto-Novo como vigias noturnos, os Zangbeto simbolizam coesão comunitária.',
      'نشأت فرقة زانغبيتو قديماً في بورتو نوفو لحماية المدينة ليلاً وتظل رمزاً ثقافياً وتضامنياً بارزاً.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_18',
    countryCode: 'BJ',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'vodun_days_january_10',
    source: 'Calendrier officiel national — 10 janvier',
    prompt: L(
      'Quel grand festival international annuel (anciennement Fête des religions endogènes, célébrée chaque 10 janvier depuis 1996) attire des milliers de visiteurs à Ouidah ?',
      'Which major annual festival—rooted in the January 10 national holiday established in 1996—draws thousands of visitors to Ouidah?',
      '¿Qué gran festival internacional anual (celebrado cada 10 de enero desde 1996) atrae a miles de visitantes a Ouidah?',
      'Qual grande festival internacional anual (celebrado todo 10 de janeiro desde 1996) atrai milhares de visitantes a Ouidah?',
      'ما المهرجان الثقافي السنوي الكبير الذي يُقام في 10 يناير من كل عام منذ 1996 ويجذب الآلاف إلى مدينة ويدا؟'
    ),
    correct: L('Les Vodun Days (Fête du Vodoun)', 'Vodun Days (Vodun Festival)', 'Los Vodun Days (Fiesta del Vudú)', 'Os Vodun Days (Festa do Vodun)', 'أيام الفودون (مهرجان الفودون)'),
    distractors: [
      L('Le Festival de Bayreuth', 'Bayreuth Festival', 'Festival de Bayreuth', 'Festival de Bayreuth', 'مهرجان بايرويت'),
      L('Le Tournoi des Six Nations', 'Six Nations Championship', 'Seis Naciones', 'Seis Nações', 'بطولة الأمم الست'),
      L('La Biennale de Venise maritime', 'Venice Boat Show', 'Salón de Venecia', 'Salão de Veneza', 'معرض البندقية'),
    ],
    explanation: L(
      'Célébré le 10 janvier entre Ouidah, Porto-Novo et Grand-Popo, cet événement met à l’honneur musique, arts, masques (Egungun, Zangbeto) et dialogue avec la diaspora.',
      'Every January 10 in Ouidah, music, traditional masquerades, and cultural exchanges celebrate ancestral heritage and links with the diaspora in Brazil and Haiti.',
      'Cada 10 de enero en Ouidah, música, danzas y encuentros culturales celebran el patrimonio y los lazos con la diáspora.',
      'Todo 10 de janeiro em Ouidah, música, máscaras e intercâmbios culturais celebram o patrimônio e os laços com a diáspora.',
      'تُبرز احتفالات 10 يناير في ويدا الفنون والموسيقى والتراث والروابط التاريخية مع الشتات.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_19',
    countryCode: 'BJ',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'amiwo_wagashi_atassi_igname',
    source: 'Gastronomie béninoise — Nord & Sud',
    prompt: L(
      'Dans le nord et le centre du pays (notamment chez les Peuls de Parakou et Dassa), quel célèbre fromage frais artisanal à pâte molle, souvent frit et coloré en rouge au sorgho ou rocou, déguste-t-on partout ?',
      'Across northern and central Benin, what is the famous artisanal cow’s-milk cheese—traditionally dyed red with sorghum leaves and fried into golden cubes—called?',
      'En el norte y centro del país, ¿cómo se llama el célebre queso artesanal fresco —teñido de rojo con hojas de sorgo y frito—?',
      'No norte e centro do país, como se chama o célebre queijo artesanal fresco —tingido de vermelho com folhas de sorgo e frito—?',
      'في شمال ووسط البلاد، ما اسم الجبن البلدي الطازج المصنوع من حليب الأبقار والمصبوغ طبيعياً بالأحمر والمقلي في الأطباق الشعبية؟'
    ),
    countryModePrompt: L(
      'Quel célèbre fromage artisanal peul à la croûte rouge (colorée naturellement aux tiges de sorgho) accompagne aussi bien le riz « Atassi » que les sauces pimentées ?',
      'Which famous artisanal cheese with a natural sorghum-red rind accompanies Atassi rice-and-beans and spicy sauces nationwide?',
      '¿Qué famoso queso artesanal de corteza roja acompaña tanto el arroz «Atassi» como salsas picantes?',
      'Qual famoso queijo artesanal de casca vermelha acompanha tanto o arroz "Atassi" quanto molhos apimentados?',
      'ما الجبن البلدي ذو القشرة الحمراء الطبيعية الذي يُقدم مقلياً مع الأرز (أتاسي) والصلصات الحارة؟'
    ),
    correct: L('Le Wagashi (fromage peul)', 'Wagashi cheese', 'Queso Wagashi', 'Queijo Wagashi', 'جبن واغاشي'),
    distractors: [
      L('Le Roquefort de l’Aveyron', 'Roquefort blue cheese', 'Queso Roquefort', 'Queijo Roquefort', 'جبن روكفور'),
      L('La Mozzarella di Bufala', 'Buffalo Mozzarella', 'Mozzarella', 'Muçarela de búfala', 'جبن الموزاريلا'),
      L('Le Gouda hollandais', 'Dutch Gouda', 'Gouda', 'Gouda', 'جبن غودا'),
    ],
    explanation: L(
      'Coagulé naturellement à l’aide de la sève du pommier de Sodome (Calotropis procera), le wagashi frit est un délice protéiné adoré de Malanville à Cotonou.',
      'Coagulated naturally with Calotropis leaf extract, savory fried wagashi is beloved from Malanville to Cotonou.',
      'Cuajado naturalmente con savia vegetal, el wagashi frito es un manjar adorado de norte a sur.',
      'Coagulado naturalmente com seiva vegetal, o wagashi frito é uma iguaria adorada de norte a sul.',
      'يُعد جبن واغاشي المقلي وجبة مغذية شهيرة تُباع وتُؤكل في كل أنحاء البلاد.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_20',
    countryCode: 'BJ',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'amiwo_pate_rouge_igname_pilee',
    source: 'Gastronomie traditionnelle du Sud-Bénin',
    prompt: L(
      'Comment s’appelle la célèbre « pâte rouge » de farine de maïs cuite dans un bouillon parfumé à la tomate, à l’oignon et à l’huile de palme, servie avec du poulet ou de la pintade rôtie ?',
      'What is the famous spiced red cornmeal dish cooked in tomato-and-palm-oil broth and served with roasted chicken or guinea fowl called?',
      '¿Cómo se llama la célebre pasta roja de maíz cocida en caldo de tomate y aceite de palma servida con pollo o pintada?',
      'Como se chama a célebre pasta vermelha de milho cozida em caldo de tomate e dendê servida com frango ou galinha-d’angola?',
      'ما اسم طبق عصيدة الذرة الحمراء المتبلة بمرق الطماطم وزيت النخيل التي تُقدم مع الدجاج أو دجاج غينيا؟'
    ),
    correct: L('L’Amiwo', 'Amiwo', 'El Amiwo', 'O Amiwo', 'الأميوو (Amiwo)'),
    distractors: [
      L('La Paella mixta', 'Paella mixta', 'Paella mixta', 'Paella', 'الباييا'),
      L('Le Tartare de saumon', 'Salmon tartare', 'Tartar de salmón', 'Tartar de salmão', 'تارتار السلمون'),
      L('Les Crêpes Suzette', 'Crêpes Suzette', 'Crepes Suzette', 'Crepes Suzette', 'كريب سوزيت'),
    ],
    explanation: L(
      'Plat roi des grandes réceptions dans le sud du pays, l’Amiwo partage les honneurs de la table avec l’igname pilée (« Agoun ») de Savalou et le Telibô (pâte noire de cossettes d’igname).',
      'Centerpiece of festive southern tables, Amiwo shares honors with Savalou’s pounded yam ("Agoun") and dark yam-flour Telibô.',
      'Rey de las fiestas en el sur, comparte protagonismo con el ñame machacado («Agoun») de Savalou y el Telibô.',
      'Rei das festas no sul, divide a mesa com o inhame socado ("Agoun") de Savalou e o Telibô.',
      'يتصدر الأميوو ولائم الأفراح إلى جانب اليام المهروس (أغون) وطبق التيليبو.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_21',
    countryCode: 'BJ',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'orchestre_poly_rythmo_cotonou',
    source: 'Patrimoine musical — Cotonou (fondé en 1968)',
    prompt: L(
      'Quel orchestre mythique fondé à Cotonou en 1968 par Mélomé Clément a révolutionné la musique ouest-africaine en mêlant rythmes vodoun, afrobeat, funk et soukous ?',
      'Which legendary Cotonou band founded in 1968 by Mélomé Clément revolutionized West African music by fusing Vodun rhythms, afrobeat, funk, and soukous?',
      '¿Qué mítica banda fundada en Cotonú en 1968 por Mélomé Clément revolucionó la música fusionando ritmos vudú, afrobeat y funk?',
      'Qual mítica banda fundada em Cotonou em 1968 por Mélomé Clément revolucionou a música fundindo ritmos vodun, afrobeat e funk?',
      'ما الفرقة الموسيقية الأسطورية التي تأسست في كوتونو عام 1968 وجمعت بين الإيقاعات التقليدية والأفروبيت والفانك؟'
    ),
    correct: L('Le Tout Puissant Orchestre Poly-Rythmo de Cotonou', 'Orchestre Poly-Rythmo de Cotonou', 'Orchestre Poly-Rythmo de Cotonou', 'Orchestre Poly-Rythmo de Cotonou', 'أوركسترا بولي ريتمو كوتونو'),
    distractors: [
      L('Les Beatles de Liverpool', 'The Beatles', 'The Beatles', 'The Beatles', 'البيتلز'),
      L('Buena Vista Social Club', 'Buena Vista Social Club', 'Buena Vista Social Club', 'Buena Vista Social Club', 'بوينا فيستا'),
      L('Os Mutantes', 'Os Mutantes', 'Os Mutantes', 'Os Mutantes', 'أوس موتانتيس'),
    ],
    explanation: L(
      'Auteur de centaines de disques cultes redécouverts sur toutes les scènes mondiales, le Poly-Rythmo a posé les bases du groove moderne aux côtés de G.G. Vikey et Sagbohan Danialou.',
      'Releasing hundreds of vinyl classics later acclaimed worldwide, Poly-Rythmo inspired generations alongside G.G. Vikey and Sagbohan Danialou.',
      'Autor de cientos de discos de culto, Poly-Rythmo inspiró a generaciones junto a G.G. Vikey y Sagbohan Danialou.',
      'Autor de centenas de clássicos cultuados mundialmente, o Poly-Rythmo marcou gerações ao lado de Sagbohan Danialou.',
      'أصدرت أوركسترا بولي ريتمو مئات الأعمال الخالدة التي تُحتفى بها اليوم على المسارح العالمية.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_22',
    countryCode: 'BJ',
    category: 'culture',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'romuald_hazoume_contemporary_art',
    source: 'Art contemporain africain — Porto-Novo (Lion d’or / Documenta)',
    prompt: L(
      'Quel célèbre artiste plasticien contemporain de Porto-Novo est mondialement exposé pour ses « masques » sculptés avec humour et critique écologique à partir de bidons d’essence en plastique recyclés ?',
      'Which world-renowned Porto-Novo visual artist is celebrated for creating witty, politically sharp masks out of discarded plastic jerrycans?',
      '¿Qué célebre artista plástico contemporáneo de Porto Novo es famoso en todo el mundo por sus máscaras esculpidas con bidones reciclados?',
      'Qual célebre artista plástico contemporâneo de Porto-Novo é famoso mundialmente por suas máscaras feitas com galões reciclados?',
      'من هو الفنان التشكيلي المعاصر الشهير من بورتو نوفو المعروف بأقنعته الفنية المبتكرة من عبوات البلاستيك المعاد تدويرها؟'
    ),
    correct: L('Romuald Hazoumè', 'Romuald Hazoumè', 'Romuald Hazoumè', 'Romuald Hazoumè', 'روموالد هازومي'),
    distractors: [
      L('Jean-Michel Basquiat', 'Jean-Michel Basquiat', 'Jean-Michel Basquiat', 'Jean-Michel Basquiat', 'جان ميشيل باسكيات'),
      L('Banksy', 'Banksy', 'Banksy', 'Banksy', 'بانكسي'),
      L('Frida Kahlo', 'Frida Kahlo', 'Frida Kahlo', 'Frida Kahlo', 'فريدا كاهلو'),
    ],
    explanation: L(
      'Lauréat du prestigieux prix Arnold-Bode à la Documenta 12 de Cassel et exposé au British Museum comme au Centre Pompidou, Romuald Hazoumè transforme le déchet urbain en art majeur.',
      'Winner at Documenta 12 and exhibited at the British Museum and Centre Pompidou, Hazoumè turns discarded plastic cans into poignant masks.',
      'Premiado en Documenta 12 y expuesto en el British Museum, transforma bidones usados en arte crítico contemporáneo.',
      'Premiado na Documenta 12 e exposto no Museu Britânico, transforma galões descartados em arte contemporânea.',
      'عُرضت أعمال روموالد هازومي في كبرى متاحف العالم وحوّل فيها النفايات البلاستيكية إلى فن معبر.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_23',
    countryCode: 'BJ',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'tchinkoume_stan_tohon_calabash',
    source: 'Patrimoine musical mahi — Savalou',
    prompt: L(
      'Quel rythme traditionnel de la région de Savalou, joué avec des calebasses retournées flottant sur de grandes bassines d’eau, a été modernisé dans les années 1980 par Stan Tohon sous le nom de « Tchink System » ?',
      'Which traditional rhythm from Savalou—played on overturned gourds floating in water basins—was modernized in the 1980s by Stan Tohon as "Tchink System"?',
      '¿Qué ritmo tradicional de Savalou —tocado sobre calabazas flotando en recipientes de agua— modernizó Stan Tohon como «Tchink System»?',
      'Qual ritmo tradicional de Savalou —tocado em cabaças flutuando na água— foi modernizado por Stan Tohon como "Tchink System"?',
      'ما الإيقاع التقليدي في منطقة سافالو الذي يُعزف على قرع يطفو فوق الماء وطوّره ستان توهون باسم «تشينك سيستم»؟'
    ),
    correct: L('Le Tchinkoumè', 'Tchinkoumè', 'El Tchinkoumè', 'O Tchinkoumè', 'إيقاع تشينكومي'),
    distractors: [
      L('La Mazurka polonaise', 'Polish Mazurka', 'Mazurca polaca', 'Mazurca polonesa', 'المازوركا'),
      L('Le Menuet baroque', 'Baroque Minuet', 'Minueto', 'Minueto', 'المينويت'),
      L('La Tarentelle napolitaine', 'Neapolitan Tarantella', 'Tarantela', 'Tarantela', 'الطارانتيلا'),
    ],
    explanation: L(
      'Issu d’un instrument hydraulique ingénieux appelé « tchink » en pays mahi, le Tchinkoumè produit des basses profondes en frappant la calebasse avec des baguettes.',
      'Using floating gourd water drums of Savalou’s Mahi heritage, Stan Tohon turned Tchinkoumè into an electrifying pop groove.',
      'A partir de tambores de agua con calabazas de la tradición mahi, Stan Tohon creó un ritmo moderno inolvidable.',
      'A partir dos tambores d’água da tradição mahi, Stan Tohon transformou o Tchinkoumè num ritmo eletrizante.',
      'استلهم ستان توهون من طبول القرع المائية في سافالو إيقاعاً عصرياً محبوباً.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_24',
    countryCode: 'BJ',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'jean_pliya_olympe_bhely_quenum',
    source: 'Littérature francophone africaine',
    prompt: L(
      'Auteur du classique « L’Arbre fétiche » (1971) et de la célèbre comédie satirique « La Secrétaire particulière », quel écrivain originaire de Djougou est une figure majeure des lettres béninoises ?',
      'Author of the classic "L’Arbre fétiche" (1971) and the satirical play "La Secrétaire particulière," which Djougou-born writer is a pillar of national literature?',
      'Autor del clásico «L’Arbre fétiche» (1971) y «La Secrétaire particulière», ¿qué escritor nacido en Djougou es un pilar literario nacional?',
      'Autor do clássico "L’Arbre fétiche" (1971) e "La Secrétaire particulière", qual escritor nascido em Djougou é um pilar literário nacional?',
      'من هو الأديب المولود في جوغو ومؤلف العملين الشهيرين «الشجرة المقدسة» و«السكرتيرة الخاصة»؟'
    ),
    correct: L('Jean Pliya', 'Jean Pliya', 'Jean Pliya', 'Jean Pliya', 'جان بليا'),
    distractors: [
      L('Ahmadou Kourouma', 'Ahmadou Kourouma', 'Ahmadou Kourouma', 'Ahmadou Kourouma', 'أحمدو كوروما'),
      L('Ferdinand Oyono', 'Ferdinand Oyono', 'Ferdinand Oyono', 'Ferdinand Oyono', 'فرديناند أويونو'),
      L('Henri Lopes', 'Henri Lopes', 'Henri Lopes', 'Henri Lopes', 'هنري لوبيز'),
    ],
    explanation: L(
      'Aux côtés d’Olympe Bhêly-Quénum (« Un piège sans fin ») et Paul Hazoumé (« Doguicimi », premier roman historique majeur dès 1938), Jean Pliya est étudié dans tous les lycées d’Afrique francophone.',
      'Alongside Paul Hazoumé ("Doguicimi," 1938) and Olympe Bhêly-Quénum ("Snares Without End"), Jean Pliya’s works are studied across Africa.',
      'Junto a Paul Hazoumé y Olympe Bhêly-Quénum, Jean Pliya forma parte del canon literario escolar africano.',
      'Ao lado de Paul Hazoumé e Olympe Bhêly-Quénum, Jean Pliya integra o cânone literário escolar africano.',
      'تُدرَّس مؤلفات جان بليا إلى جانب بول هازومي وأوليمب بهيلي كينوم في المدارس الأفريقية.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_25',
    countryCode: 'BJ',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 1,
    topicKey: 'guepards_cheetahs_nickname_2022',
    source: 'FBF — Surnom officiel adopté en 2022',
    prompt: L(
      'Depuis 2022, quel nouveau surnom remplace celui des « Écureuils » pour désigner les équipes nationales de football du Bénin ?',
      'Since 2022, which new animal nickname replaced "Les Écureuils" (The Squirrels) for Benin’s national football teams?',
      'Desde 2022, ¿qué nuevo apodo sustituyó a «Las Ardillas» para designar a las selecciones nacionales de fútbol de Benín?',
      'Desde 2022, qual novo apelido substituiu "Os Esquilos" para designar as seleções nacionais de futebol do Benim?',
      'منذ عام 2022، ما اللقب الجديد الذي حلّ محل «السناجب» لتسمية منتخبات بنين لكرة القدم؟'
    ),
    countryModePrompt: L(
      'Par quel nouveau surnom animal plus offensif la Fédération a-t-elle officiellement remplacé « les Écureuils » en août 2022 ?',
      'With which sleek new animal nickname did the national football federation officially replace "The Squirrels" in August 2022?',
      '¿Por qué nuevo apodo animal reemplazó oficialmente la Federación en agosto de 2022 a «Las Ardillas»?',
      'Por qual novo apelido animal a Federação substituiu oficialmente "Os Esquilos" em agosto de 2022?',
      'بأي لقب جديد استبدل الاتحاد الكروي لقب «السناجب» رسمياً في أغسطس 2022؟'
    ),
    correct: L('Les Guépards', 'The Cheetahs (Les Guépards)', 'Los Guepardos', 'Os Guepardos', 'الفهود (Les Guépards)'),
    distractors: [
      L('Les Pingouins royaux', 'King Penguins', 'Los Pingüinos', 'Os Pinguins', 'البطاريق'),
      L('Les Paons bleus', 'Blue Peacocks', 'Los Pavos reales', 'Os Pavões', 'الطواويس'),
      L('Les Lamas blancs', 'White Llamas', 'Las Llamas', 'As Lhamas', 'اللاما'),
    ],
    explanation: L(
      'Adopté en août 2022 en écho notamment aux guépards protégés du parc de la Pendjari, le surnom « Les Guépards » symbolise vitesse et ambition.',
      'Adopted in August 2022 in tribute to the cheetahs of Pendjari National Park, the name evokes speed and tenacity.',
      'Adoptado en agosto de 2022 en alusión a los guepardos del parque Pendjari, simboliza velocidad y ambición.',
      'Adotado em agosto de 2022 em homenagem aos guepardos do Pendjari, simboliza velocidade e ambição.',
      'اعتمد الاتحاد لقب الفهود عام 2022 تيمناً بالفهود البرية في متنزه بندجاري.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_26',
    countryCode: 'BJ',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'stephane_sessegnon_captain_psg',
    source: 'FBF — Recordman des sélections et buts en sélection',
    prompt: L(
      'Quel meneur de jeu technique passé par Le Mans, le Paris Saint-Germain et Sunderland a longtemps été le capitaine emblématique et meilleur buteur de l’histoire de la sélection ?',
      'Which silky playmaker of Le Mans, Paris Saint-Germain, and Sunderland fame long served as the national team’s iconic captain and all-time top scorer?',
      '¿Qué técnico mediapunta ex del PSG y Sunderland fue capitán emblemático y máximo goleador histórico de la selección?',
      'Qual habilidoso meia-atacante ex-PSG e Sunderland foi capitão emblemático e maior artilheiro histórico da seleção?',
      'من هو صانع الألعاب الماهر نجم باريس سان جيرمان وسندرلاند السابق وقائد المنتخب وهدافه التاريخي؟'
    ),
    correct: L('Stéphane Sessègnon', 'Stéphane Sessègnon', 'Stéphane Sessègnon', 'Stéphane Sessègnon', 'ستيفان سيسينيون'),
    distractors: [
      L('Emmanuel Adebayor', 'Emmanuel Adebayor', 'Emmanuel Adebayor', 'Emmanuel Adebayor', 'إيمانويل أديبايور'),
      L('Moussa Dembélé', 'Moussa Dembélé', 'Moussa Dembélé', 'Moussa Dembélé', 'موسى ديمبيلي'),
      L('Bakari Koné', 'Bakari Koné', 'Bakari Koné', 'Bakari Koné', 'باكاري كوني'),
    ],
    explanation: L(
      'Formé aux Requins de l’Atlantique à Cotonou et vainqueur de la Coupe de France 2010 avec le PSG, Stéphane Sessègnon a guidé la génération historique de 2019.',
      'Starting at Requins de l’Atlantique before shining at PSG and in the Premier League, Sessègnon helped guide the historic 2019 AFCON run.',
      'Iniciado en Requins de l’Atlantique y campeón de Copa en Francia con el PSG, lideró la gesta de la CAN 2019.',
      'Revelado no Requins de l’Atlantique e campeão pelo PSG, liderou a campanha histórica da CAN 2019.',
      'بدأ في كوتونو وتألق في باريس والدوري الإنجليزي وقاد الجيل الذهبي في أمم أفريقيا 2019.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_27',
    countryCode: 'BJ',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'afcon_2019_quarterfinal_morocco',
    source: 'CAF — CAN 2019 en Égypte',
    prompt: L(
      'Lors de la CAN 2019 en Égypte, quel exploit historique la sélection réalisa-t-elle en huitièmes de finale en éliminant le Maroc aux tirs au but ?',
      'At the 2019 AFCON in Egypt, what historic milestone did the national team achieve by knocking out Morocco on penalties in the Round of 16?',
      'En la CAN 2019 en Egipto, ¿qué hito histórico logró la selección al eliminar a Marruecos en octavos por penaltis?',
      'Na CAN 2019 no Egito, qual marco histórico a seleção alcançou ao eliminar o Marrocos nos pênaltis nas oitavas?',
      'في كأس أمم أفريقيا 2019 بمصر، ما الإنجاز التاريخي الذي حققه المنتخب بإقصائه المغرب بركلات الترجيح في ثمن النهائي؟'
    ),
    correct: L('Atteindre pour la première fois de son histoire les quarts de finale de la CAN', 'Reaching the AFCON quarter-finals for the very first time in history', 'Alcanzar por primera vez en su historia los cuartos de final de la CAN', 'Chegar pela primeira vez na história às quartas de final da CAN', 'بلوغ ربع نهائي كأس أمم أفريقيا للمرة الأولى في تاريخه'),
    distractors: [
      L('Gagner trois finales consécutives', 'Winning three straight finals', 'Ganar tres finales seguidas', 'Vencer três finais seguidas', 'الفوز بثلاثة نهائيات متتالية'),
      L('Être reléguée en Coupe du Pacifique', 'Relegation to Pacific Cup', 'Descenso a la Copa del Pacífico', 'Rebaixamento à Copa do Pacífico', 'الهبوط لبطولة المحيط الهادئ'),
      L('Se retirer avant le coup d’envoi', 'Withdrawing before kickoff', 'Retirarse antes del debut', 'Desistir antes da estreia', 'الانسحاب قبل الانطلاق'),
    ],
    explanation: L(
      'Après quatre nuls héroïques contre le Ghana, la Guinée-Bissau, le Cameroun et le Maroc (1-1 puis tirs au but), les coéquipiers de Steve Mounié et Saturnin Allagbé ont atteint un quart de finale inédit !',
      'Holding Ghana, Cameroon, and Morocco (winning on penalties), Steve Mounié, Mickaël Poté, and Saturnin Allagbé earned a historic quarter-final berth.',
      'Tras empatar ante Ghana, Camerún y Marruecos, lograron un histórico pase a cuartos de final.',
      'Após segurar Gana, Camarões e eliminar o Marrocos, conquistaram uma vaga inédita nas quartas de final.',
      'بعد التعادل البطولي أمام غانا والكاميرون وإقصاء المغرب، بلغ المنتخب ربع النهائي لأول مرة.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_28',
    countryCode: 'BJ',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'noelle_yarigo_world_indoor_2024',
    source: 'World Athletics — Glasgow 2024 (800 m)',
    prompt: L(
      'Native de Natitingou, quelle coureuse de 800 m surnommée « la Guéparde de la Pendjari » a décroché le bronze aux Championnats du monde en salle 2024 (première médaille mondiale de l’histoire nationale en athlétisme) ?',
      'Born in Natitingou, which 800m runner nicknamed "the Cheetah of Pendjari" won bronze at the 2024 World Indoor Championships—earning the country’s first-ever World Athletics medal?',
      'Nacida en Natitingou, ¿qué corredora de 800 m ganó el bronce en el Mundial en pista cubierta de 2024 (primera medalla mundial del país)?',
      'Nascida em Natitingou, qual corredora dos 800 m conquistou o bronze no Mundial Indoor de 2024 (primeira medalha mundial do país)?',
      'من هي عداءة الـ800 متر المولودة في ناتيتينغو التي أحرزت برونزية بطولة العالم داخل الصالات 2024 كأول ميدالية عالمية في ألعاب القوى لبلادها؟'
    ),
    correct: L('Noëlle Yarigo', 'Noëlle Yarigo', 'Noëlle Yarigo', 'Noëlle Yarigo', 'نويل ياريغو'),
    distractors: [
      L('Hassiba Boulmerka', 'Hassiba Boulmerka', 'Hassiba Boulmerka', 'Hassiba Boulmerka', 'حسيبة بولمرقة'),
      L('Maria Mutola', 'Maria Mutola', 'Maria Mutola', 'Maria Mutola', 'ماريا موتولا'),
      L('Athing Mu', 'Athing Mu', 'Athing Mu', 'Athing Mu', 'أثينغ مو'),
    ],
    explanation: L(
      'À 38 ans à Glasgow en mars 2024, Noëlle Yarigo a couronné une carrière exemplaire (demi-finaliste olympique à Tokyo) par une médaille historique mondiale sur 800 m.',
      'At age 38 in Glasgow in March 2024, Noëlle Yarigo crowned her inspiring career with an unforgettable World Indoor bronze medal.',
      'En marzo de 2024 en Glasgow, Noëlle Yarigo coronó su carrera con un bronce histórico en 800 m.',
      'Em março de 2024 em Glasgow, Noëlle Yarigo coroou sua carreira com um bronze histórico nos 800 m.',
      'تُوّجت نويل ياريغو مسيرتها الحافلة ببرونزية تاريخية في غلاسكو 2024.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_29',
    countryCode: 'BJ',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'dragons_oueme_requins_buffles_clubs',
    source: 'FBF — Championnat national & Pétanque mondiale',
    prompt: L(
      'Avec les Buffles du Borgou (Parakou) et Coton FC (Ouidah), quels deux clubs historiques — l’un basé à Porto-Novo et l’autre à Cotonou — ont remporté le plus de titres du championnat national ?',
      'Alongside Buffles du Borgou and Coton FC, which two historic clubs—one in Porto-Novo and one in Cotonou—are among the country’s most decorated domestic teams?',
      'Junto a Buffles du Borgou y Coton FC, ¿qué dos clubes históricos —uno en Porto Novo y otro en Cotonú— suman más ligas nacionales?',
      'Ao lado de Buffles du Borgou e Coton FC, quais dois clubes históricos —um de Porto-Novo e outro de Cotonou— somam mais títulos nacionais?',
      'إلى جانب بوفل دو بورغو وكوتون إف سي، ما الناديان العريقان من بورتو نوفو وكوتونو الأكثر تتويجاً في الدوري المحلي؟'
    ),
    correct: L('Les Dragons de l’Ouémé et les Requins de l’Atlantique', 'Dragons de l’Ouémé and Requins de l’Atlantique', 'Dragons de l’Ouémé y Requins de l’Atlantique', 'Dragons de l’Ouémé e Requins de l’Atlantique', 'نادي دراغونز دي لويمي وريكانز دو لاتلانتيك'),
    distractors: [
      L('Le Raja et le Wydad', 'Raja & Wydad', 'Raja y Wydad', 'Raja e Wydad', 'الرجاء والوداد'),
      L('Hearts of Oak et Asante Kotoko', 'Hearts of Oak & Asante Kotoko', 'Hearts of Oak y Kotoko', 'Hearts of Oak e Kotoko', 'هارتس أوف أوك'),
      L('L’Espérance et l’Étoile du Sahel', 'Espérance & Étoile du Sahel', 'Espérance y Étoile', 'Espérance e Étoile', 'الترجي والنجم الساحلي'),
    ],
    explanation: L(
      'Demi-finalistes africains en 1987, les Dragons de l’Ouémé ont révélé de nombreux internationaux, rivalisant dans les grands classiques avec les Requins de Cotonou.',
      '1987 African Cup Winners’ Cup semi-finalists, Dragons de l’Ouémé share a fierce historic rivalry with Cotonou’s Requins.',
      'Semifinalistas africanos en 1987, los Dragons de l’Ouémé mantienen un gran clásico frente a los Requins de Cotonú.',
      'Semifinalistas africanos em 1987, os Dragons de l’Ouémé mantêm uma rivalidade clássica com os Requins de Cotonou.',
      'يُعد دراغونز دي لويمي وريكانز دو لاتلانتيك قطبي الكلاسيكو التاريخي في كرة القدم الوطنية.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_30',
    countryCode: 'BJ',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'petanque_world_champions_cotonou_2023',
    source: 'FIPJP — Championnats du monde de pétanque 2023 à Cotonou',
    prompt: L(
      'Dans quel sport de précision le pays est-il une superpuissance mondiale, ayant accueilli les Championnats du monde 2023 sur l’esplanade de l’Amazone à Cotonou et remporté des titres mondiaux ?',
      'In which precision sport is the country a world powerhouse—hosting the 2023 World Championships beside Cotonou’s Amazon Monument and winning world gold?',
      '¿En qué deporte de precisión es potencia mundial el país, habiendo acogido el Mundial de 2023 en Cotonú y logrado oro mundial?',
      'Em qual esporte de precisão o país é potência mundial, tendo sediado o Mundial de 2023 em Cotonou e conquistado ouro mundial?',
      'في أي رياضة دقة تُعد البلاد قوة عالمية، وقد استضافت بطولة العالم 2023 في كوتونو وتوجت بذهبيات عالمية؟'
    ),
    correct: L('La pétanque', 'Pétanque (Boules)', 'La petanca', 'A petanca', 'رياضة الكرات الحديدية (البيتانك)'),
    distractors: [
      L('Le curling sur glace', 'Ice curling', 'Curling sobre hielo', 'Curling no gelo', 'الكيرلنغ الجليدي'),
      L('Le golf sur neige', 'Snow golf', 'Golf sobre nieve', 'Golfe na neve', 'الغولف على الجليد'),
      L('Le ski de fond', 'Cross-country skiing', 'Esquí de fondo', 'Esqui cross-country', 'التزلج الريفي'),
    ],
    explanation: L(
      'Sur la place de l’Amazone à Cotonou en septembre 2023, Marcel Gbetable a conquis l’or mondial en tête-à-tête et en doublette mixte avec Laïma Sambo !',
      'At Cotonou’s Amazon Esplanade in 2023, Marcel Gbetable and Laïma Sambo struck world gold, cementing Benin’s elite global status in pétanque.',
      'En 2023 en Cotonú, Marcel Gbetable y Laïma Sambo conquistaron el oro mundial ante un público entusiasta.',
      'Em 2023 em Cotonou, Marcel Gbetable e Laïma Sambo conquistaram o ouro mundial diante de uma multidão vibrante.',
      'تألق أبطال البيتانك مثل مارسيل غبيتابل ولايما سامبو بإحراز الذهب العالمي في كوتونو 2023.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_31',
    countryCode: 'BJ',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'bouche_du_roy_grand_popo',
    source: 'UNESCO — Réserve de biosphère transfrontalière du Mono',
    prompt: L(
      'Près de Grand-Popo dans le sud-ouest, comment s’appelle la célèbre embouchure où le fleuve Mono rejoint l’océan Atlantique au cœur d’une réserve de biosphère de mangroves et tortues marines ?',
      'Near Grand-Popo in the southwest, what is the famous estuary where the Mono River meets the Atlantic Ocean inside a biosphere reserve of mangroves and sea turtles?',
      'Cerca de Grand-Popo en el suroeste, ¿cómo se llama la desembocadura donde el río Mono se une al Atlántico en una reserva de manglares?',
      'Perto de Grand-Popo no sudoeste, como se chama a foz onde o rio Mono encontra o Atlântico em uma reserva de manguezais?',
      'قرب غران بوبو جنوب غرب البلاد، ما اسم المصب الشهير الذي يلتقي فيه نهر مونو بالمحيط الأطلسي وسط أشجار المانغروف؟'
    ),
    correct: L('La Bouche du Roy', 'La Bouche du Roy', 'La Bouche du Roy', 'La Bouche du Roy', 'مصب بوش دو روا'),
    distractors: [
      L('Le Détroit de Béring', 'Bering Strait', 'Estrecho de Bering', 'Estreito de Bering', 'مضيق بيرنغ'),
      L('Le Cap Horn', 'Cape Horn', 'Cabo de Hornos', 'Cabo Horn', 'كيب هورن'),
      L('La Baie d’Hudson', 'Hudson Bay', 'Bahía de Hudson', 'Baía de Hudson', 'خليج هدسون'),
    ],
    explanation: L(
      'Son nom vient d’une déformation de l’expression portugaise « Boca do Rio » ; l’écosystème protège lamantins, oiseaux marins et mangroves communautaires.',
      'Derived from Portuguese "Boca do Rio," the estuary shelters manatees, nesting sea turtles, and vibrant mangrove islands.',
      'Derivado del portugués «Boca do Rio», el estuario protege manatíes, tortugas marinas y manglares.',
      'Derivado do português "Boca do Rio", o estuário protege peixes-bois, tartarugas marinhas e manguezais.',
      'يُشتق الاسم من البرتغالية «فم النهر» ويحمي السلاحف البحرية والمانغروف في محمية طبيعية.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_32',
    countryCode: 'BJ',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 3,
    topicKey: 'gdiz_glo_djigbe_coton_cashew',
    source: 'Industrie & Commerce — Glo-Djigbé / Cotonou',
    prompt: L(
      'Quelle grande zone industrielle moderne aménagée près d’Abomey-Calavi transforme désormais localement le coton béninois en fils/vêtements et la noix de cajou en amandes prêtes à l’exportation ?',
      'Which major new industrial zone near Abomey-Calavi now locally processes national cotton into textiles and raw cashews into export-ready kernels?',
      '¿Qué gran zona industrial moderna cerca de Abomey-Calavi transforma localmente el algodón en textiles y el anacardo para exportación?',
      'Qual grande zona industrial moderna perto de Abomey-Calavi processa localmente o algodão em têxteis e o caju para exportação?',
      'ما المنطقة الصناعية الحديثة الكبرى قرب أبومي كالافي التي تحوّل القطن والكاجو محلياً إلى منتجات جاهزة للتصدير؟'
    ),
    correct: L('La Zone industrielle de Glo-Djigbé (GDIZ)', 'Glo-Djigbé Industrial Zone (GDIZ)', 'Zona Industrial de Glo-Djigbé (GDIZ)', 'Zona Industrial de Glo-Djigbé (GDIZ)', 'المنطقة الصناعية غلو دجيغبي (GDIZ)'),
    distractors: [
      L('La Silicon Valley californienne', 'Silicon Valley', 'Silicon Valley', 'Vale do Silício', 'وادي السيليكون'),
      L('La Ruhr allemande', 'Ruhr Valley', 'Cuenca del Ruhr', 'Vale do Ruhr', 'حوض الرور'),
      L('Le Port de Rotterdam', 'Port of Rotterdam', 'Puerto de Róterdam', 'Porto de Roterdã', 'ميناء روتردام'),
    ],
    explanation: L(
      'Première plateforme de transformation textile « Made in Africa » à grande échelle dans la région, la GDIZ génère des milliers d’emplois industriels qualifiés.',
      'Rapidly expanding local value-addition, GDIZ turns raw national cotton into "Made in Africa" garments for global brands.',
      'Impulsando la transformación local, la GDIZ convierte el algodón en prendas textiles de exportación.',
      'Impulsionando a industrialização local, a GDIZ transforma o algodão bruto em roupas para exportação.',
      'تساهم منطقة غلو دجيغبي في تصنيع القطن والكاجو محلياً وتوفير آلاف فرص العمل.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_33',
    countryCode: 'BJ',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 3,
    topicKey: 'tassi_hangbe_dahomey_founder_women',
    source: 'Histoire orale et royale d’Abomey (XVIIIe siècle)',
    prompt: L(
      'Sœur jumelle du roi Akaba ayant gouverné le Royaume du Dahomey au début du XVIIIe siècle, quelle souveraine est souvent créditée de la fondation du corps des guerrières Agojie ?',
      'Twin sister of King Akaba who ruled the Kingdom of Dahomey in the early 1700s, which queen is widely credited with founding the Agojie women warriors?',
      'Hermana gemela del rey Akaba que gobernó el Reino de Dahomey a principios del siglo XVIII, ¿a qué reina se atribuye la creación de las guerreras Agojie?',
      'Irmã gêmea do rei Akaba que governou o Reino do Daomé no início do século XVIII, qual rainha é creditada pela criação das guerreiras Agojie?',
      'شقيقة الملك أكابا التوأم التي حكمت مملكة داهومي مطلع القرن الثامن عشر، من هي الملكة التي يُنسب إليها تأسيس فرقة المحاربات أغوجي؟'
    ),
    correct: L('La Reine Tassi Hangbé', 'Queen Tassi Hangbé', 'La Reina Tassi Hangbé', 'A Rainha Tassi Hangbé', 'الملكة تاسي هانغبي'),
    distractors: [
      L('Cléopâtre VII', 'Cleopatra VII', 'Cleopatra VII', 'Cleópatra VII', 'كليوباترا السابعة'),
      L('Néfertiti', 'Nefertiti', 'Nefertiti', 'Nefertiti', 'نفرتيتي'),
      L('La Reine Victoria', 'Queen Victoria', 'Reina Victoria', 'Rainha Vitória', 'الملكة فيكتوريا'),
    ],
    explanation: L(
      'Honorée aujourd’hui encore par la lignée royale Hangbé à Abomey, Tassi Hangbé encouragea aussi les femmes à pratiquer des métiers traditionnellement réservés aux hommes.',
      'Honored today by the Hangbé royal lineage in Abomey, Queen Tassi Hangbé championed women’s military and artisan roles.',
      'Recordada hoy por su linaje en Abomey, impulsó el protagonismo femenino en el ejército y la artesanía.',
      'Homenageada até hoje em Abomey, a rainha impulsionou o protagonismo feminino no exército e nos ofícios.',
      'تُكرم أسرة هانغبي الملكية في أبومي ذكرى الملكة التي شجعت أدوار النساء القيادية.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_34',
    countryCode: 'BJ',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'flag_colors_pan_african_1959',
    source: 'Constitution — Drapeau et hymne « L’Aube Nouvelle »',
    prompt: L(
      'Adopté en 1959 et restauré en 1990 avec l’hymne « L’Aube Nouvelle », que représentent le vert, le jaune et le rouge du drapeau national ?',
      'Adopted in 1959 and restored in 1990 alongside the anthem "The Dawn of a New Day," what do green, yellow, and red symbolize on the national flag?',
      'Adoptada en 1959 y restaurada en 1990 con el himno «El alba nueva», ¿qué simbolizan el verde, el amarillo y el rojo de la bandera?',
      'Adotada em 1959 e restaurada em 1990 com o hino "A Alvorada Nova", o que simbolizam verde, amarelo e vermelho na bandeira?',
      'في العلم الوطني المعتمد عام 1959 والمستعاد عام 1990، إلامَ ترمز ألوانه الأخضر والأصفر والأحمر؟'
    ),
    correct: L('L’espérance/agriculture (vert), les richesses/savanes (jaune) et le courage des ancêtres (rouge)', 'Hope & renewal (green), rich savanna treasures (yellow), and ancestral courage (red)', 'Esperanza (verde), riquezas (amarillo) y valentía ancestral (rojo)', 'Esperança (verde), riquezas (amarelo) e coragem ancestral (vermelho)', 'الأمل والخصوبة (الأخضر) والثروات (الأصفر) وشجاعة الأجداد (الأحمر)'),
    distractors: [
      L('Uniquement les feux de circulation routière', 'Traffic light signals only', 'Semáforos viales', 'Semáforos de trânsito', 'إشارات المرور فقط'),
      L('Les océans gelés et la banquise', 'Frozen oceans and pack ice', 'Océanos helados', 'Oceanos congelados', 'المحيطات المتجمدة'),
      L('Une croix royale nordique', 'A Nordic royal cross', 'Cruz nórdica', 'Cruz nórdica', 'صليب ملكي إسكندنافي'),
    ],
    explanation: L(
      'Composé par l’abbé Gilbert Dagnon, l’hymne national « L’Aube Nouvelle » accompagne le drapeau panafricain vert-jaune-rouge depuis l’indépendance.',
      'Paired with Gilbert Dagnon’s stirring anthem "L’Aube Nouvelle," the Pan-African tricolor embodies hope, prosperity, and courage.',
      'Acompañada del himno «L’Aube Nouvelle» de Gilbert Dagnon, la bandera encarna esperanza, riqueza y valor.',
      'Acompanhada do hino "L’Aube Nouvelle" de Gilbert Dagnon, a bandeira simboliza esperança, riqueza e bravura.',
      'ترافق ألوان العلم النشيد الوطني «الفجر الجديد» وتجسد الأمل والازدهار والشجاعة.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_35',
    countryCode: 'BJ',
    category: 'history',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'porto_novo_afro_brazilian_aguda',
    source: 'Architecture afro-brésilienne — Porto-Novo & Ouidah',
    prompt: L(
      'Quel nom donne-t-on aux anciens Afro-Brésiliens revenus de Bahia au XIXe siècle, dont le style architectural coloré se reflète dans la Grande Mosquée et les demeures historiques de Porto-Novo et Ouidah ?',
      'What name refers to Afro-Brazilian returnees from Bahia in the 19th century, whose vibrant architectural style shaped Porto-Novo’s Great Mosque and historic townhouses?',
      '¿Qué nombre reciben los afrobrasileños retornados de Bahía en el siglo XIX cuya arquitectura adorna Porto Novo y Ouidah?',
      'Que nome recebem os afro-brasileiros retornados da Bahia no século XIX cuja arquitetura colore Porto-Novo e Ouidah?',
      'ما الاسم الذي يُطلق على العائدين من أصل برازيلي أفريقي في القرن التاسع عشر الذين طبعوا عمارة بورتو نوفو وويدا بطابعهم الملون؟'
    ),
    correct: L('Les Agoudas (Agudás)', 'The Agudas (Agoudas)', 'Los Agudas (Agoudas)', 'Os Agudás (Agoudas)', 'الأغوداس (Agoudas)'),
    distractors: [
      L('Les Vikings', 'Vikings', 'Vikingos', 'Vikings', 'الفايكنغ'),
      L('Les Conquistadors espagnols', 'Spanish Conquistadors', 'Conquistadores españoles', 'Conquistadores espanhóis', 'الفاتحون الإسبان'),
      L('Les Cosaques du Don', 'Don Cossacks', 'Cosacos', 'Cossacos', 'القوزاق'),
    ],
    explanation: L(
      'Les familles Agoudas ont enrichi la culture côtière d’un pont vivant avec le Brésil (architecture baroque colorée, carnaval Bouriyan, cuisine Feijoada/Cozido).',
      'Aguda families forged an enduring cultural bridge with Bahia in Brazil through colorful baroque facades, Bouriyan carnival, and shared cuisine.',
      'Las familias agudas tendieron un puente vivo con Bahía en la arquitectura, el carnaval Bouriyan y la gastronomía.',
      'As famílias agudás ergueram uma ponte cultural viva com a Bahia na arquitetura, no carnaval Bouriyan e na cozinha.',
      'أقام مجتمع الأغوداس جسراً ثقافياً ومعمارياً حياً بين غرب أفريقيا والبرازيل.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_36',
    countryCode: 'BJ',
    category: 'culture',
    subCategory: 'sciences_innovations',
    difficulty: 4,
    topicKey: 'paul_hounkpe_paulin_hountondji_philosophy',
    source: 'Philosophie africaine contemporaine',
    prompt: L(
      'Quel célèbre philosophe béninois, ancien ministre de l’Éducation nationale et auteur de « Sur la “philosophie africaine” » (1976), a profondément marqué la pensée critique en Afrique ?',
      'Which renowned Beninese philosopher—former Minister of Education and author of the landmark 1976 critique "African Philosophy: Myth and Reality"—shaped modern African thought?',
      '¿Qué célebre filósofo beninés, autor de la influyente obra «Sobre la “filosofía africana”» (1976), marcó el pensamiento crítico en África?',
      'Qual célebre filósofo beninense, autor da influente obra "Sobre a ‘filosofia africana’" (1976), marcou o pensamento crítico na África?',
      'من هو الفيلسوف البنيني الشهير ومؤلف الكتاب المرجعي «عن الفلسفة الأفريقية» (1976) الذي ترك بصمة عميقة في الفكر الأفريقي؟'
    ),
    correct: L('Paulin Hountondji', 'Paulin J. Hountondji', 'Paulin Hountondji', 'Paulin Hountondji', 'بولان هونتوندجي'),
    distractors: [
      L('Jean-Paul Sartre', 'Jean-Paul Sartre', 'Jean-Paul Sartre', 'Jean-Paul Sartre', 'جان بول سارتر'),
      L('Emmanuel Kant', 'Immanuel Kant', 'Immanuel Kant', 'Immanuel Kant', 'إيمانويل كانط'),
      L('Socrate d’Athènes', 'Socrates', 'Sócrates', 'Sócrates', 'سقراط'),
    ],
    explanation: L(
      'Disparu en 2024 et disciple d’Althusser/Derrida, Paulin Hountondji a défendu une philosophie africaine rigoureuse, plurielle, scientifique et ouverte sur le monde.',
      'Passing in 2024, Paulin Hountondji championed rigorous, plural, and globally engaged critical philosophy across African universities.',
      'Fallecido en 2024, defendió una filosofía africana rigurosa, plural y universalmente dialogante.',
      'Falecido em 2024, defendeu uma filosofia africana rigorosa, plural e universalmente aberta.',
      'دافع بولان هونتوندجي عن فلسفة أفريقية نقدية منفتحة ومرتبطة بالعلم والجامعات الأفريقية.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_37',
    countryCode: 'BJ',
    category: 'culture',
    subCategory: 'anecdotes_insolites',
    difficulty: 3,
    topicKey: 'abomey_appliqued_cloths_hangings',
    source: 'Artisanat royal d’Abomey — Tentures appliquées',
    prompt: L(
      'Quel artisanat textile célèbre d’Abomey consiste à coudre des motifs colorés découpés (lions, poissons, calebasses, récades) sur une grande toile pour raconter les prouesses des rois ?',
      'Which famous textile craft from Abomey stitches colorful cut-out motifs (lions, fish, scepters) onto large cloths to chronicle royal deeds?',
      '¿Qué célebre artesanía textil de Abomey cose figuras recortadas de colores (leones, peces, cetros) sobre tela para narrar gestas reales?',
      'Qual célebre artesanato têxtil de Abomey costura figuras recortadas coloridas (leões, peixes, cetros) em tecido para narrar feitos reais?',
      'ما الحرفة النسيجية الشهيرة في أبومي التي تُخاط فيها رسوم رمزية ملونة (أسود وأسماك وصولجانات) لتوثيق مآثر الملوك؟'
    ),
    correct: L('Les tentures à motifs appliqués d’Abomey', 'Abomey appliquéd tapestries', 'Tapices aplicados de Abomey', 'Tapeçarias aplicadas de Abomey', 'منسوجات أبومي المطرزة التطبيقية'),
    distractors: [
      L('Les tapis persans noués en soie', 'Silk Persian carpets', 'Alfombras persas de seda', 'Tapetes persas de seda', 'السجاد الفارسي الحريري'),
      L('Les kimonos brodés d’or', 'Gold-embroidered kimonos', 'Kimonos dorados', 'Quimonos dourados', 'الكيمونو الياباني'),
      L('Les couvertures patchwork américaines', 'American quilt blankets', 'Colchas patchwork', 'Colchas patchwork', 'ألحفة الباتشوورك'),
    ],
    explanation: L(
      'Véritables bandes dessinées historiques sur tissu créées par la guilde familiale Yémadjè, chaque tenture d’Abomey représente les maximes visuelles des souverains du Dahomey.',
      'Crafted for generations by the Yémadjè family guild, Abomey appliquéd cloths served as visual chronicles of royal proverbs.',
      'Creados por la familia Yémadjè, estos tapices sirven como crónicas visuales de los proverbios reales.',
      'Produzidas pela guilda Yémadjè, essas tapeçarias servem como crônicas visuais dos provérbios reais.',
      'تُعد منسوجات أبومي سجلاً بصرياً تاريخياً لأمثال الملوك ومآثرهم.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_38',
    countryCode: 'BJ',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 4,
    topicKey: 'mont_sokbaro_atacora_highest_point',
    source: 'Atlas géographique — Donga & Atacora',
    prompt: L(
      'Comment s’appelle le point culminant du pays (658 mètres d’altitude), situé dans le nord-ouest à la frontière togolaise près d’Alédjo-Koura ?',
      'What is the highest natural point in Benin (658 meters), situated in the northwest along the Togo border near Alédjo-Koura?',
      '¿Cómo se llama el punto más alto del país (658 metros), en el noroeste junto a la frontera con Togo?',
      'Como se chama o ponto mais alto do país (658 metros), no noroeste junto à fronteira com o Togo?',
      'ما اسم أعلى نقطة جبلية في بنين (بارتفاع 658 متراً) والواقعة شمال غرب البلاد على حدود توغو؟'
    ),
    countryModePrompt: L(
      'Culminant à 658 mètres dans le prolongement de l’Atacora près d’Alédjo-Koura (département de la Donga), quel est le sommet le plus élevé du pays ?',
      'Reaching 658 meters near Alédjo-Koura in Donga Department, what is the country’s highest natural peak?',
      'Con 658 metros cerca de Alédjo-Koura en el departamento de Donga, ¿cuál es la cumbre más alta del país?',
      'Com 658 metros perto de Alédjo-Koura no departamento de Donga, qual é o pico mais alto do país?',
      'على ارتفاع 658 متراً قرب أليدجو كورا في إقليم دونغا، ما أعلى قمة في البلاد؟'
    ),
    correct: L('Le Mont Sokbaro', 'Mount Sokbaro', 'Monte Sokbaro', 'Monte Sokbaro', 'جبل سوكبارو'),
    distractors: [
      L('Le Mont Kilimandjaro', 'Mount Kilimanjaro', 'Monte Kilimanjaro', 'Monte Kilimanjaro', 'جبل كليمنجارو'),
      L('Le Mont Cameroun', 'Mount Cameroon', 'Monte Camerún', 'Monte Camarões', 'جبل الكاميرون'),
      L('Le Mont Kenya', 'Mount Kenya', 'Monte Kenia', 'Monte Quênia', 'جبل كينيا'),
    ],
    explanation: L(
      'Formant un relief boisé traversé par la faille spectaculaire d’Alédjo dans la chaîne de l’Atacora, le Mont Sokbaro domine de vastes plaines verdoyantes.',
      'Set along the scenic Atakora ridge near the Alédjo rocky cleft, Mount Sokbaro overlooks rolling savannas.',
      'Situado junto al desfiladero de Alédjo en Atacora, el monte Sokbaro domina extensas sabanas verdes.',
      'Situado junto ao desfiladeiro de Alédjo no Atakora, o monte Sokbaro domina extensas savanas verdes.',
      'يطل جبل سوكبارو قرب صدع أليدجو الصخري على سهول خضراء واسعة في سلسلة أتاكورا.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_39',
    countryCode: 'BJ',
    category: 'culture',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'amazone_monument_cotonou_biodune',
    source: 'Patrimoine contemporain de Cotonou (2022)',
    prompt: L(
      'Inaugurée en juillet 2022 sur une grande esplanade face à l’océan à Cotonou, quelle imposante statue de bronze haute de 30 mètres rend hommage aux guerrières historiques du Dahomey ?',
      'Unveiled in July 2022 on a grand seaside esplanade in Cotonou, which towering 30-meter bronze statue honors the historic female warriors of Dahomey?',
      'Inaugurada en julio de 2022 frente al océano en Cotonú, ¿qué imponente estatua de bronce de 30 metros honra a las históricas guerreras de Dahomey?',
      'Inaugurada em julho de 2022 diante do oceano em Cotonou, qual imponente estátua de bronze de 30 metros homenageia as guerreiras do Daomé?',
      'في يوليو 2022 أمام المحيط في كوتونو، ما التمثال البرونزي الشامخ بارتفاع 30 متراً الذي يكرم المحاربات التاريخيات لمملكة داهومي؟'
    ),
    correct: L('La Statue de l’Amazone (Monument des Agojie)', 'The Amazon Statue (Monument to the Agojie)', 'Estatua de la Amazona', 'Estátua da Amazona', 'تمثال الأمازون (نصب الأغوجي)'),
    distractors: [
      L('La Petite Sirène de Copenhague', 'Little Mermaid of Copenhagen', 'Sirenita de Copenhague', 'Pequena Sereia', 'حورية البحر'),
      L('La Statue de la Liberté', 'Statue of Liberty', 'Estatua de la Libertad', 'Estátua da Liberdade', 'تمثال الحرية'),
      L('Le Colosse de Rhodes', 'Colossus of Rhodes', 'Coloso de Rodas', 'Colosso de Rodas', 'تمثال رودس'),
    ],
    explanation: L(
      'Devenue le symbole visuel incontournable de Cotonou moderne (aux côtés du Monument Bio Guéra près de l’aéroport), l’Amazone domine l’océan Atlantique de toute sa stature.',
      'Paired with the Bio Guéra monument near Cotonou Airport, the towering 30-meter Amazon statue has become an instant coastal icon.',
      'Junto al monumento a Bio Guéra, la gran estatua de la Amazona se ha convertido en el nuevo icono de Cotonú.',
      'Ao lado do monumento a Bio Guéra, a estátua da Amazona tornou-se o grande cartão-postal de Cotonou.',
      'أصبح تمثال الأمازون الشامخ أبرز معلم رمزي لمدينة كوتونو الحديثة إلى جانب نصب بيو غيرا.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_40',
    countryCode: 'BJ',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 4,
    topicKey: 'bio_guera_bariba_resistance_1916',
    source: 'Histoire du Borgou — Baoura / Bembèrèkè (1916)',
    prompt: L(
      'Prince wasangari né près de Nikki et célébré par une grande statue équestre devant l’aéroport de Cotonou, quel héros mena la grande résistance bariba de 1915–1916 à Bembèrèkè ?',
      'A Wasangari prince celebrated with a striking equestrian statue outside Cotonou Airport, which hero led the major Bariba resistance of 1915–1916 around Bembèrèkè?',
      'Príncipe wasangari honrado con una estatua ecuestre frente al aeropuerto de Cotonú, ¿qué héroe lideró la resistencia bariba de 1915-1916?',
      'Príncipe wasangari homenageado com estátua equestre diante do aeroporto de Cotonou, qual herói liderou a resistência bariba de 1915-1916?',
      'أمير من سلالة واسانغاري يُكرم بتمثال فروسية أمام مطار كوتونو، من البطل الذي قاد مقاومة باريبا عامي 1915-1916؟'
    ),
    correct: L('Bio Guéra', 'Bio Guéra', 'Bio Guéra', 'Bio Guéra', 'بيو غيرا'),
    distractors: [
      L('Toussaint Louverture', 'Toussaint Louverture', 'Toussaint Louverture', 'Toussaint Louverture', 'توسان لوفرتور'),
      L('Patrice Lumumba', 'Patrice Lumumba', 'Patrice Lumumba', 'Patrice Lumumba', 'باتريس لومومبا'),
      L('Samory Touré', 'Samori Touré', 'Samori Touré', 'Samori Touré', 'ساموري توري'),
    ],
    explanation: L(
      'Tombé au combat à Baoura en décembre 1916 après des mois d’embuscades courageuses, Bio Guéra incarne l’esprit indomptable du nord comme Béhanzin au sud.',
      'Falling in battle at Baoura in December 1916, Bio Guéra stands alongside Béhanzin and Kaba in the pantheon of national heroes.',
      'Caído en combate en Baoura en 1916, Bio Guéra comparte el panteón de héroes nacionales con Béhanzin y Kaba.',
      'Tombado em combate em Baoura em 1916, Bio Guéra divide o panteão de heróis nacionais com Béhanzin e Kaba.',
      'استشهد بيو غيرا في معركة باورا عام 1916 ليخلد في مصاف الأبطال الوطنيين إلى جانب بيهينزين وكابا.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_41',
    countryCode: 'BJ',
    category: 'culture',
    subCategory: 'economie_developpement',
    difficulty: 3,
    topicKey: 'savalou_yam_festival_august_15',
    source: 'Traditions agraires des Collines — Savalou',
    prompt: L(
      'Chaque 15 août à Savalou, quelle grande fête traditionnelle des prémices célèbre la récolte d’un tubercule roi préparé en pâte pilée (« Agoun ») ?',
      'Every August 15 in Savalou, which joyful traditional harvest festival celebrates the first crop of a prized staple pounded into "Agoun"?',
      'Cada 15 de agosto en Savalou, ¿qué gran fiesta tradicional celebra la primera cosecha de un preciado tubérculo?',
      'Todo 15 de agosto em Savalou, qual grande festa tradicional celebra a primeira colheita de um precioso tubérculo?',
      'في 15 أغسطس من كل عام في سافالو، ما المهرجان الزراعي الكبير الذي يحتفي بأول حصاد لدرنة اليام؟'
    ),
    correct: L('La Fête de l’Igname (Fête du 15 août à Savalou)', 'The Yam Festival (Savalou August 15 celebration)', 'Fiesta del Ñame de Savalou', 'Festa do Inhame de Savalou', 'مهرجان اليام في سافالو'),
    distractors: [
      L('La Fête de la Citrouille d’Halloween', 'Halloween Pumpkin Festival', 'Calabaza de Halloween', 'Abóbora de Halloween', 'مهرجان اليقطين'),
      L('Les Vendanges de Bourgogne', 'Burgundy Wine Harvest', 'Vendimia de Borgoña', 'Vindima da Borgonha', 'موسم قطف العنب'),
      L('La Fête du Riz basmati indien', 'Indian Basmati Festival', 'Festival del Basmati', 'Festival do Basmati', 'مهرجان الأرز البسمتي'),
    ],
    explanation: L(
      'Avant de déguster la nouvelle igname pilée avec la sauce gombo ou arachide, les familles et le roi de Savalou rendent hommage aux ancêtres pour l’abondance des récoltes.',
      'Before tasting the season’s fresh pounded yam ("Agoun"), families and traditional chiefs gather in Savalou to give thanks for abundant harvests.',
      'Antes de probar el nuevo ñame machacado, las familias y autoridades tradicionales celebran la abundancia agrícola.',
      'Antes de provar o novo inhame socado, famílias e chefes tradicionais celebram em Savalou a fartura da colheita.',
      'تُقام في سافالو احتفالات الشكر والبهجة قبل تذوق محصول اليام الجديد مع العائلات.'
    ),
  }),
  mkQ({
    id: 'cur_BJ_42',
    countryCode: 'BJ',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'steve_mounie_mickael_pote_goals',
    source: 'FBF — Buteurs modernes des Guépards',
    prompt: L(
      'Originaire de Parakou et formé à Montpellier, quel avant-centre puissant (capitaine des Guépards après Sessègnon, passé par Huddersfield, Brest et Augsbourg) brille par son jeu de tête aérien ?',
      'Born in Parakou and developed at Montpellier, which towering center-forward and Guépards captain—famed for his aerial strength at Huddersfield, Brest, and Augsburg—leads the attack?',
      'Nacido en Parakou, ¿qué poderoso delantero centro y capitán de los Guepardos (ex del Brest y Huddersfield) destaca por su juego aéreo?',
      'Nascido em Parakou, qual centroavante e capitão dos Guepardos (ex-Brest e Huddersfield) destaca-se pelo jogo aéreo?',
      'من هو قلب الهجوم القوي المولود في باراكو وقائد منتخب الفهود الشهير بضربات الرأس والذي لعب لبريست وأوغسبورغ؟'
    ),
    correct: L('Steve Mounié', 'Steve Mounié', 'Steve Mounié', 'Steve Mounié', 'ستيف مونييه'),
    distractors: [
      L('Gervinho', 'Gervinho', 'Gervinho', 'Gervinho', 'جيرفينيو'),
      L('Vincent Aboubakar', 'Vincent Aboubakar', 'Vincent Aboubakar', 'Vincent Aboubakar', 'فينسنت أبو بكر'),
      L('Youssef En-Nesyri', 'Youssef En-Nesyri', 'Youssef En-Nesyri', 'Youssef En-Nesyri', 'يوسف النصيري'),
    ],
    explanation: L(
      'Héros de la qualification historique en quarts de finale de la CAN 2019 avec Mickaël Poté et Olivier Verdon, Steve Mounié porte régulièrement le brassard des Guépards.',
      'A star of the 2019 AFCON quarter-final campaign alongside Mickaël Poté, Steve Mounié captains the Cheetahs with pride.',
      'Figura de los históricos cuartos de la CAN 2019 junto a Mickaël Poté, capitanea con orgullo a los Guepardos.',
      'Estrela das históricas quartas de final da CAN 2019 ao lado de Mickaël Poté, capitaneia os Guepardos.',
      'تألق ستيف مونييه في ملحمة أمم أفريقيا 2019 ويحمل شارة قيادة الفهود.'
    ),
  }),
];

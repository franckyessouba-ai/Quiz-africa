import { L } from '../../countriesPart1';
import { mkQ } from './packHelpers';

export const MALI_CURATED_PACK = [
  mkQ({
    id: 'cur_ML_01',
    countryCode: 'ML',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'mopti_venise_malienne_bani',
    source: 'Géographie urbaine — Delta intérieur du Niger',
    prompt: L(
      'Quelle grande ville portuaire construite sur des îlots au confluent du fleuve Niger et de la rivière Bani est surnommée « la Venise malienne » ?',
      'Which bustling river port built across islets at the confluence of the Niger and Bani rivers is nicknamed "the Venice of Mali"?',
      '¿Qué gran ciudad portuaria construida sobre islotes en la confluencia de los ríos Níger y Bani es apodada «la Venecia malí»?',
      'Qual grande cidade portuária construída em ilhotas na confluência dos rios Níger e Bani é apelidada de "Veneza do Mali"?',
      'ما المدينة النهرية الكبرى المبنية على جزر عند التقاء نهري النيجر وباني والملقبة بـ«بندقية مالي»؟'
    ),
    countryModePrompt: L(
      'Quelle métropole fluviale bâtie sur trois îlots à la confluence du Niger et du Bani est célèbre pour son grand port de pinasses et sa mosquée de Komoguel ?',
      'Which river city built across three islets where the Niger meets the Bani is famed for its busy wooden-boat port and Komoguel Mosque?',
      '¿Qué ciudad fluvial construida sobre islotes en la confluencia del Níger y el Bani destaca por su puerto de piraguas?',
      'Qual cidade fluvial erguida sobre ilhotas na confluência do Níger e do Bani destaca-se por seu porto de pirogas?',
      'ما المدينة النهرية المقامة على جزر عند التقاء نهري النيجر وباني والشهيرة بمينائها ومسجد كوموغيل؟'
    ),
    correct: L('Mopti', 'Mopti', 'Mopti', 'Mopti', 'موبتي'),
    distractors: [
      L('Kayes', 'Kayes', 'Kayes', 'Kayes', 'كايس'),
      L('Kidal', 'Kidal', 'Kidal', 'Kidal', 'كيدال'),
      L('Bougouni', 'Bougouni', 'Bougouni', 'Bougouni', 'بوغوني'),
    ],
    explanation: L(
      'Au cœur du delta intérieur du Niger, Mopti rassemble pêcheurs bozos, commerçants de poisson fumé, potiers et barres de sel gemme arrivant de Taoudenni.',
      'In the heart of the Inner Niger Delta, Mopti bustles with Bozo boatmen, dried-fish traders, and Saharan rock-salt slabs from Taoudenni.',
      'En el corazón del delta interior del Níger, Mopti reúne a pescadores bozo y comerciantes de sal sahariana.',
      'No coração do delta interior do Níger, Mopti reúne pescadores bozo e comerciantes de sal do Saara.',
      'تُعد موبتي في قلب دلتا النيجر الداخلية ملتقى الصيادين وتجار الأسماك والملح الصحراوي.'
    ),
  }),
  mkQ({
    id: 'cur_ML_02',
    countryCode: 'ML',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'tombeau_des_askia_gao_unesco',
    source: 'UNESCO — Tombeau des Askia à Gao (2004)',
    prompt: L(
      'Quelle pyramide à degrés en terre crue haute de 17 mètres, édifiée en 1495 à Gao par l’empereur songhaï Askia Mohammed, est classée au patrimoine mondial de l’UNESCO ?',
      'Which 17-meter earthen stepped pyramid built in 1495 in Gao by Songhai emperor Askia Muhammad is a UNESCO World Heritage site?',
      '¿Qué pirámide escalonada de adobe de 17 metros erigida en 1495 en Gao por Askia Mohammed es Patrimonio de la UNESCO?',
      'Qual pirâmide escalonada de terra batida de 17 metros erguida em 1495 em Gao por Askia Muhammad é Patrimônio da UNESCO?',
      'ما الهرم الطيني المدرج بارتفاع 17 متراً الذي شيده الإمبراطور أسكيا محمد في غاو عام 1495 وأدرجته اليونسكو؟'
    ),
    correct: L('Le Tombeau des Askia', 'Tomb of Askia', 'Tumba de los Askia', 'Túmulo dos Askia', 'ضريح أسكيا'),
    distractors: [
      L('La Pyramide de Khéphren', 'Pyramid of Khafre', 'Pirámide de Kefrén', 'Pirâmide de Quéfren', 'هرم خفرع'),
      L('La Citadelle d’Alep', 'Citadel of Aleppo', 'Ciudadela de Alepo', 'Cidadela de Alepo', 'قلعة حلب'),
      L('Le Fort Saint-Jean', 'Fort Saint-Jean', 'Fuerte Saint-Jean', 'Forte Saint-Jean', 'قلعة سانت جان'),
    ],
    explanation: L(
      'Construit en banco hérissé de perches en bois de rônier (« toron »), le Tombeau des Askia témoigne de la puissance architecturale de l’Empire songhaï à Gao.',
      'Built of mud brick bristling with wooden toron scaffolding beams, the Tomb of Askia stands as Gao’s crowning Songhai monument.',
      'Construido en adobe con vigas de madera salientes («toron»), simboliza el esplendor del Imperio songhai en Gao.',
      'Construído em adobe com vigas de madeira salientes ("toron"), simboliza o apogeu do Império Songhai em Gao.',
      'بُني ضريح أسكيا من الطين المدعّم بأخشاب النخيل ويُجسد عظمة إمبراطورية سنغاي في غاو.'
    ),
  }),
  mkQ({
    id: 'cur_ML_03',
    countryCode: 'ML',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'hombori_tondo_main_de_fatima',
    source: 'Géographie — Monts de Hombori',
    prompt: L(
      'Comment s’appelle le point culminant naturel du pays (1 155 m d’altitude), spectaculaire mesa tabulaire entourée des aiguilles rocheuses de la « Main de Fatima » ?',
      'What is the highest natural summit in the country (1,155 m), a dramatic flat-topped sandstone mesa beside the "Hand of Fatima" rock spires?',
      '¿Cómo se llama el punto más alto del país (1155 m), una espectacular meseta junto a las agujas de la «Mano de Fátima»?',
      'Como se chama o ponto mais alto do país (1.155 m), um platô monumental ao lado das agulhas da "Mão de Fátima"?',
      'ما اسم أعلى قمة جبلية في البلاد (1155 متراً) وهي هضبة صخرية شامخة بجوار تكوينات «يد فاطمة»؟'
    ),
    correct: L('Le Mont Hombori (Hombori Tondo)', 'Mount Hombori (Hombori Tondo)', 'Monte Hombori (Hombori Tondo)', 'Monte Hombori (Hombori Tondo)', 'جبل هومبوري (هومبوري توندو)'),
    distractors: [
      L('Le Mont Kenya', 'Mount Kenya', 'Monte Kenia', 'Monte Quênia', 'جبل كينيا'),
      L('Le Djebel Toubkal', 'Jebel Toubkal', 'Jebel Toubkal', 'Jebel Toubkal', 'جبل توبقال'),
      L('Le Mont Cameroun', 'Mount Cameroon', 'Monte Camerún', 'Monte Camarões', 'جبل الكاميرون'),
    ],
    explanation: L(
      'Près de Douentza et Tombouctou, les falaises de grès rouge du Hombori Tondo et de la Main de Fatima attirent des grimpeurs venus du monde entier.',
      'Near Douentza along the road to Gao, Hombori Tondo and the dramatic spires of the Hand of Fatima rank among Africa’s premier climbing cliffs.',
      'Cerca de Douentza, sus acantilados de arenisca roja atraen a escaladores de todo el planeta.',
      'Perto de Douentza, seus paredões de arenito vermelho atraem escaladores do mundo inteiro.',
      'تجذب منحدرات هومبوري توندو وتكوينات يد فاطمة متسلقي الجبال من شتى أنحاء العالم.'
    ),
  }),
  mkQ({
    id: 'cur_ML_04',
    countryCode: 'ML',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 2,
    topicKey: 'segou_koutiala_gold_cotton',
    source: 'Géographie économique — Ségou & Sikasso',
    prompt: L(
      'Quelle grande cité agricole de la région de Sikasso est surnommée « la capitale de l’or blanc » en raison de son rôle majeur dans la production cotonnière nationale ?',
      'Which major agricultural city in the Sikasso region is nicknamed the "capital of white gold" for driving national cotton production?',
      '¿Qué gran ciudad agrícola de la región de Sikasso es apodada «la capital del oro blanco» por su producción de algodón?',
      'Qual grande cidade agrícola da região de Sikasso é apelidada de "capital do ouro branco" pela produção de algodão?',
      'ما المدينة الزراعية الكبرى في إقليم سيكاسو الملقبة بـ«عاصمة الذهب الأبيض» بفضل إنتاجها الوفير للقطن؟'
    ),
    correct: L('Koutiala', 'Koutiala', 'Koutiala', 'Koutiala', 'كوتيالا'),
    distractors: [
      L('Taoudenni', 'Taoudenni', 'Taoudenni', 'Taoudenni', 'تاودني'),
      L('Tessalit', 'Tessalit', 'Tessalit', 'Tessalit', 'تيساليت'),
      L('Nioro du Sahel', 'Nioro du Sahel', 'Nioro du Sahel', 'Nioro du Sahel', 'نيورو الساحل'),
    ],
    explanation: L(
      'Surnommée le grenier du sud avec Sikasso et Bougouni, Koutiala place régulièrement le pays parmi les tout premiers producteurs de coton (avec l’or comme 1re richesse minière).',
      'Anchored in fertile southern Minyanka country, Koutiala helps keep the nation among Africa’s leading cotton producers alongside rich gold mines.',
      'En el fértil sur del país, Koutiala mantiene al país entre los primeros productores africanos de algodón.',
      'No fértil sul do país, Koutiala mantém a nação entre os maiores produtores africanos de algodão.',
      'تُعد كوتيالا قلب زراعة القطن في الجنوب الخصب إلى جانب ثروة الذهب المعدنية الكبرى.'
    ),
  }),
  mkQ({
    id: 'cur_ML_05',
    countryCode: 'ML',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'lac_debo_gouina_falls_kayes',
    source: 'Hydrographie — Kayes & Delta intérieur',
    prompt: L(
      'Dans la région de Kayes, quelles spectaculaires chutes larges de près de 500 mètres sur le fleuve Sénégal sont souvent appelées « le Niagara de l’Afrique de l’Ouest » ?',
      'In the Kayes region, which sweeping 500-meter-wide waterfalls on the Senegal River are affectionately dubbed "the Niagara of West Africa"?',
      'En la región de Kayes, ¿qué espectaculares cataratas de casi 500 m de ancho sobre el río Senegal son llamadas «el Niágara de África Occidental»?',
      'Na região de Kayes, quais espetaculares quedas d’água com quase 500 m de largura no rio Senegal são chamadas de "Niágara da África Ocidental"?',
      'في إقليم كايس، ما الشلالات العريضة الممتدة نحو 500 متر على نهر السنغال والملقبة بـ«نياغارا غرب أفريقيا»؟'
    ),
    correct: L('Les Chutes de Gouina', 'Gouina Falls', 'Cataratas de Gouina', 'Cachoeiras de Gouina', 'شلالات غوينا'),
    distractors: [
      L('Les Chutes de Victoria', 'Victoria Falls', 'Cataratas Victoria', 'Cachoeiras Vitória', 'شلالات فيكتوريا'),
      L('Les Chutes de Murchison', 'Murchison Falls', 'Cataratas Murchison', 'Cachoeiras Murchison', 'شلالات مورتشيسون'),
      L('Les Chutes d’Augrabies', 'Augrabies Falls', 'Cataratas de Augrabies', 'Cachoeiras de Augrabies', 'شلالات أوغرابيس'),
    ],
    explanation: L(
      'Situées en amont des chutes du Félou sur le fleuve Sénégal entre Bafoulabé et Kayes, les chutes de Gouina alimentent aussi une grande centrale hydroélectrique régionale.',
      'Upstream of Félou Falls between Bafoulabé and Kayes, Gouina Falls showcase awesome seasonal waters and regional hydropower.',
      'Entre Bafoulabé y Kayes, las cataratas de Gouina ofrecen un caudal imponente y energía hidroeléctrica regional.',
      'Entre Bafoulabé e Kayes, as quedas de Gouina oferecem vazão imponente e energia regional.',
      'تقع شلالات غوينا بين بافولابي وكايس وتشتهر بتدفقها المهيب وإسهامها في الطاقة الكهرومائية.'
    ),
  }),
  mkQ({
    id: 'cur_ML_06',
    countryCode: 'ML',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 1,
    topicKey: 'september_22_1960_modibo_keita',
    source: 'Archives nationales — 22 septembre 1960',
    prompt: L(
      'À quelle date précise de 1960 la République du Mali fut-elle proclamée souveraine sous l’impulsion de son premier président, Modibo Keïta ?',
      'On what exact date in 1960 was the Republic of Mali proclaimed an independent republic under its first president, Modibo Keïta?',
      '¿En qué fecha exacta de 1960 se proclamó la independencia de la República de Malí bajo su primer presidente, Modibo Keïta?',
      'Em que data exata de 1960 foi proclamada a República do Mali independente sob seu primeiro presidente, Modibo Keïta?',
      'في أي تاريخ بالضبط من عام 1960 أُعلن قيام جمهورية مالي المستقلة بقيادة أول رئيس لها موديبو كيتا؟'
    ),
    countryModePrompt: L(
      'Quel jour précis de septembre 1960 marque la proclamation de la République souveraine par Modibo Keïta et la Fête nationale de l’Indépendance ?',
      'Which exact day in September 1960 marks Modibo Keïta’s proclamation of the sovereign Republic and National Independence Day?',
      '¿Qué día exacto de septiembre de 1960 marca la proclamación de la República por Modibo Keïta y el Día de la Independencia?',
      'Que dia exato de setembro de 1960 marca a proclamação da República por Modibo Keïta e o Dia da Independência?',
      'أي يوم محدد في سبتمبر 1960 يوافق إعلان الجمهورية المستقلة على يد موديبو كيتا وعيد الاستقلال الوطني؟'
    ),
    correct: L('Le 22 septembre 1960', 'September 22, 1960', '22 de septiembre de 1960', '22 de setembro de 1960', '22 سبتمبر 1960'),
    distractors: [
      L('Le 4 avril 1960', 'April 4, 1960', '4 de abril de 1960', '4 de abril de 1960', '4 أبريل 1960'),
      L('Le 1er août 1960', 'August 1, 1960', '1 de agosto de 1960', '1 de agosto de 1960', '1 أغسطس 1960'),
      L('Le 2 octobre 1958', 'October 2, 1958', '2 de octubre de 1958', '2 de outubro de 1958', '2 أكتوبر 1958'),
    ],
    explanation: L(
      'Après la dissolution de la brève Fédération du Mali avec le Sénégal en août, l’ex-Soudan français adopta le nom historique de Mali le 22 septembre 1960.',
      'Following the breakup of the short-lived Mali Federation in August, the former French Sudan adopted the historic name Republic of Mali on September 22, 1960.',
      'Tras disolverse la Federación con Senegal en agosto, el país adoptó el nombre histórico de Malí el 22 de septiembre de 1960.',
      'Após a dissolução da Federação com o Senegal em agosto, adotou o nome histórico de Mali em 22 de setembro de 1960.',
      'بعد حل الاتحاد مع السنغال في أغسطس، اتخذت البلاد الاسم التاريخي مالي في 22 سبتمبر 1960.'
    ),
  }),
  mkQ({
    id: 'cur_ML_07',
    countryCode: 'ML',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 2,
    topicKey: 'battle_of_kirina_1235',
    source: 'Tradition orale mandingue — Épopée de Soundiata',
    prompt: L(
      'Quelle bataille décisive remportée vers 1235 par Soundiata Keïta sur le roi forgeron Soumaoro Kanté (du Sosso) donna naissance à l’Empire du Manden ?',
      'Which decisive battle around 1235 saw Sundiata Keita defeat Sosso blacksmith-king Soumaoro Kanté to found the Mali Empire?',
      '¿Qué batalla decisiva hacia 1235 ganó Sundiata Keita frente al rey herrero Soumaoro Kanté para fundar el Imperio de Malí?',
      'Qual batalha decisiva por volta de 1235 levou Sundiata Keita a vencer Soumaoro Kanté e fundar o Império do Mali?',
      'ما المعركة الفاصلة نحو عام 1235 التي انتصر فيها سوندياتا كيتا على سوماورو كانتي مؤسساً إمبراطورية مالي؟'
    ),
    correct: L('La Bataille de Kirina (Krina)', 'Battle of Kirina', 'Batalla de Kirina', 'Batalha de Kirina', 'معركة كيرينا'),
    distractors: [
      L('La Bataille de Tondibi', 'Battle of Tondibi', 'Batalla de Tondibi', 'Batalha de Tondibi', 'معركة توندبي'),
      L('La Bataille de Waterloo', 'Battle of Waterloo', 'Batalla de Waterloo', 'Batalha de Waterloo', 'معركة واترلو'),
      L('La Bataille de Lépante', 'Battle of Lepanto', 'Batalla de Lepanto', 'Batalha de Lepanto', 'معركة ليبانتو'),
    ],
    explanation: L(
      'Menée avec l’aide de sa sœur Nana Triban et du griot Balla Fasséké, la victoire de Kirina unifia les douze royaumes du Mandé à Kouroukan Fouga.',
      'Remembered across griot epics, victory at Kirina unified the Manden confederation and ushered in the Kouroukan Fouga assembly.',
      'Celebrada por los griots, la victoria de Kirina unió a los reinos del Mandén y dio paso a Kouroukan Fouga.',
      'Celebrada pelos griôs, a vitória de Kirina uniu o Manden e levou à assembleia de Kouroukan Fouga.',
      'تُخلّد ملاحم الغريو معركة كيرينا التي وحدت ممالك ماندين ومهدت لميثاق كوروكان فوغا.'
    ),
  }),
  mkQ({
    id: 'cur_ML_08',
    countryCode: 'ML',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'aoua_keita_femme_dafrique',
    source: 'Archives de l’indépendance & Littérature (1975)',
    prompt: L(
      'Sage-femme, syndicaliste et première femme élue députée au Parlement du Mali indépendant en 1960, quelle héroïne reçut le Grand Prix littéraire d’Afrique noire pour « Femme d’Afrique » ?',
      'A midwife, union organizer, and the first woman elected to Parliament in 1960, which heroine won the Grand Prix littéraire d’Afrique noire for "Femme d’Afrique"?',
      'Matrona, sindicalista y primera mujer diputada elegida en 1960, ¿qué heroína ganó el Gran Premio Literario de África Negra por «Femme d’Afrique»?',
      'Parteira, sindicalista e primeira mulher eleita deputada em 1960, qual heroína venceu o Grande Prêmio Literário da África Negra por "Femme d’Afrique"?',
      'من هي القابلة والنقابية وأول امرأة منتخبة في برلمان 1960 التي فازت بالجائزة الأدبية الكبرى لأفريقيا السوداء عن كتاب «امرأة من أفريقيا»؟'
    ),
    countryModePrompt: L(
      'Quelle sage-femme militante, première femme élue députée en 1960 et décorée de l’Ordre national, publia ses mémoires célèbres intitulés « Femme d’Afrique » ?',
      'Which pioneering midwife—first woman elected MP in 1960—authored the celebrated memoir "Femme d’Afrique"?',
      '¿Qué pionera matrona —primera mujer diputada en 1960— publicó las célebres memorias «Femme d’Afrique»?',
      'Qual pioneira parteira —primeira mulher deputada em 1960— publicou as célebres memórias "Femme d’Afrique"?',
      'من هي أول امرأة منتخبة نائبة في برلمان 1960 ومؤلفة المذكرات الشهيرة «امرأة من أفريقيا»؟'
    ),
    correct: L('Aoua Keïta', 'Aoua Keïta', 'Aoua Keïta', 'Aoua Keïta', 'آوا كيتا'),
    distractors: [
      L('Mariama Bâ', 'Mariama Bâ', 'Mariama Bâ', 'Mariama Bâ', 'مريم با'),
      L('Aminata Traoré', 'Aminata Traoré', 'Aminata Traoré', 'Aminata Traoré', 'أميناتا تراوري'),
      L('Calixthe Beyala', 'Calixthe Beyala', 'Calixthe Beyala', 'Calixthe Beyala', 'كاليكست بيالا'),
    ],
    explanation: L(
      'Née à Bamako en 1912, Aoua Keïta combattit pour les droits des travailleuses, l’instruction des filles et l’indépendance nationale.',
      'Born in Bamako in 1912, Aoua Keïta championed women’s rights, labor justice, and girls’ education across West Africa.',
      'Nacida en Bamako en 1912, Aoua Keïta luchó por los derechos laborales, la educación femenina y la independencia.',
      'Nascida em Bamako em 1912, Aoua Keïta lutou pelos direitos trabalhistas, educação feminina e independência.',
      'ناضلت آوا كيتا المولودة في باماكو 1912 من أجل حقوق المرأة العاملة وتعليم الفتيات والاستقلال.'
    ),
  }),
  mkQ({
    id: 'cur_ML_09',
    countryCode: 'ML',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 3,
    topicKey: 'tata_sikasso_tieba_babemba',
    source: 'Histoire du Royaume du Kénédougou — Sikasso (1898)',
    prompt: L(
      'Quelle imposante muraille fortifiée en terre de 9 km de long fut bâtie à Sikasso par le roi Tiéba Traoré et héroïquement défendue jusqu’à la mort en 1898 par son frère Babemba Traoré ?',
      'Which massive 9-km earthen fortress wall in Sikasso was built by King Tiéba Traoré and heroically defended to the last in 1898 by his brother Babemba Traoré?',
      '¿Qué imponente muralla de adobe de 9 km en Sikasso fue construida por el rey Tiéba Traoré y defendida hasta el final por Babemba Traoré en 1898?',
      'Qual imponente muralha de terra de 9 km em Sikasso foi erguida pelo rei Tiéba Traoré e defendida até o fim por Babemba Traoré em 1898?',
      'ما السور الترابي الحصين الممتد 9 كيلومترات في سيكاسو الذي بناه الملك تيبا تراوري ودافع عنه أخوه بابيمبا حتى استشهاده عام 1898؟'
    ),
    correct: L('Le Tata de Sikasso', 'The Tata of Sikasso', 'El Tata de Sikasso', 'O Tata de Sikasso', 'سور تاتا سيكاسو'),
    distractors: [
      L('La Ligne Maginot', 'Maginot Line', 'Línea Maginot', 'Linha Maginot', 'خط ماجينو'),
      L('Le Mur d’Hadrien', 'Hadrian’s Wall', 'Muro de Adriano', 'Muralha de Adriano', 'سور هادريان'),
      L('Les Remparts d’Avignon', 'Walls of Avignon', 'Murallas de Aviñón', 'Muralhas de Avignon', 'أسوار أفينيون'),
    ],
    explanation: L(
      'Jamais prise par Samory Touré malgré 15 mois de siège, la cité fortifiée du Kénédougou ne tomba qu’en mai 1898 face à l’artillerie coloniale, Babemba préférant la mort à la reddition.',
      'Having withstood a 15-month siege, Kénédougou’s fortress fell only to artillery in 1898, with Babemba declaring "No invader will ever take me alive."',
      'Tras resistir un asedio de 15 meses, Sikasso cayó ante la artillería en 1898 cuando Babemba prefirió morir antes que rendirse.',
      'Após resistir a 15 meses de cerco, o Tata de Sikasso caiu em 1898 quando Babemba preferiu a morte à rendição.',
      'صمدت سيكاسو طويلاً أمام الحصار وفضّل الملك بابيمبا تراوري الشهادة على الاستسلام عام 1898.'
    ),
  }),
  mkQ({
    id: 'cur_ML_10',
    countryCode: 'ML',
    category: 'history',
    subCategory: 'sciences_innovations',
    difficulty: 2,
    topicKey: 'manuscripts_timbuktu_ahmed_baba',
    source: 'UNESCO — Manuscrits anciens de Tombouctou',
    prompt: L(
      'Quel grand savant de Tombouctou au XVIe siècle (auteur de plus de 40 traités de droit, d’astronomie et de logique) a donné son nom au célèbre Institut des manuscrits anciens de la ville ?',
      'Which renowned 16th-century Timbuktu scholar—author of over 40 treatises on law, astronomy, and logic—gives his name to the city’s famed Manuscripts Institute?',
      '¿Qué gran sabio de Tombuctú del siglo XVI —autor de más de 40 tratados de derecho y astronomía— da nombre al célebre Instituto de Manuscritos?',
      'Qual grande sábio de Tombuctu do século XVI —autor de mais de 40 tratados de direito e astronomia— dá nome ao famoso Instituto de Manuscritos?',
      'من هو العالم التمبكتي الشهير في القرن السادس عشر مؤلف أكثر من 40 كتاباً والذي يحمل اسمه معهد المخطوطات الشهير؟'
    ),
    correct: L('Ahmed Baba (al-Massufi al-Tinbukti)', 'Ahmed Baba', 'Ahmed Baba', 'Ahmed Baba', 'أحمد بابا التمبكتي'),
    distractors: [
      L('Averroès (Ibn Rochd)', 'Averroes (Ibn Rushd)', 'Averroes', 'Averróis', 'ابن رشد'),
      L('Avicenne (Ibn Sina)', 'Avicenna (Ibn Sina)', 'Avicena', 'Avicena', 'ابن سينا'),
      L('Al-Khwarizmi', 'Al-Khwarizmi', 'Al-Juarismi', 'Al-Khwarizmi', 'الخوارزمي'),
    ],
    explanation: L(
      'Exilé un temps à Marrakech après 1591 avant de revenir enseigner à Tombouctou, Ahmed Baba écrivait notamment pour réfuter l’esclavage fondé sur l’origine ethnique et préserva des milliers de manuscrits.',
      'Saved bravely by local librarians and families like Abdel Kader Haidara in 2012–2013, hundreds of thousands of Timbuktu manuscripts preserve African science and poetry.',
      'Salvados por familias locales, cientos de miles de manuscritos de Tombuctú preservan astronomía, derecho y poesía africana.',
      'Salvos por famílias locais, centenas de milhares de manuscritos de Tombuctu preservam ciência, direito e poesia.',
      'خلّد معهد أحمد بابا إرث مئات الآلاف من المخطوطات العلمية والأدبية التي حُفظت بشجاعة عبر القرون.'
    ),
  }),
  mkQ({
    id: 'cur_ML_11',
    countryCode: 'ML',
    category: 'history',
    subCategory: 'sciences_innovations',
    difficulty: 3,
    topicKey: 'cheick_modibo_diarra_nasa',
    source: 'NASA Jet Propulsion Laboratory — Missions interplanétaires',
    prompt: L(
      'Quel célèbre astrophysicien et navigateur spatial né à Nioro du Sahel travailla au JPL de la NASA comme architecte de trajectoires pour les sondes Magellan, Galileo et Mars Pathfinder ?',
      'Which renowned astrophysicist born in Nioro du Sahel served at NASA’s Jet Propulsion Laboratory designing trajectories for Magellan, Galileo, and Mars Pathfinder?',
      '¿Qué célebre astrofísico nacido en Nioro du Sahel trabajó en la NASA diseñando trayectorias para las sondas Magellan, Galileo y Mars Pathfinder?',
      'Qual célebre astrofísico nascido em Nioro du Sahel atuou no JPL da NASA projetando trajetórias das sondas Magellan, Galileo e Mars Pathfinder?',
      'من هو عالم الفيزياء الفلكية المولود في نيورو الساحل الذي عمل في ناسا على مسارات مركبات ماجلان وغاليليو ومارس باثفايندر؟'
    ),
    correct: L('Cheick Modibo Diarra', 'Cheick Modibo Diarra', 'Cheick Modibo Diarra', 'Cheick Modibo Diarra', 'الشيخ موديبو ديارا'),
    distractors: [
      L('Neil deGrasse Tyson', 'Neil deGrasse Tyson', 'Neil deGrasse Tyson', 'Neil deGrasse Tyson', 'نيل ديغراس تايسون'),
      L('Thomas Pesquet', 'Thomas Pesquet', 'Thomas Pesquet', 'Thomas Pesquet', 'توماس بيسكيه'),
      L('Carl Sagan', 'Carl Sagan', 'Carl Sagan', 'Carl Sagan', 'كارل ساغان'),
    ],
    explanation: L(
      'Également ancien président de Microsoft Afrique et Premier ministre par intérim en 2012, Cheick Modibo Diarra encourage la jeunesse africaine vers l’ingénierie et les sciences.',
      'Later chairman of Microsoft Africa and acting Prime Minister in 2012, Diarra inspires students across Africa toward space engineering.',
      'También presidente de Microsoft África, Cheick Modibo Diarra impulsa la educación científica en todo el continente.',
      'Também ex-presidente da Microsoft África, Cheick Modibo Diarra incentiva jovens africanos na ciência e engenharia.',
      'شغل أيضاً رئاسة مايكروسوفت أفريقيا ويُلهم الشباب الأفريقي لدراسة الفضاء والهندسة.'
    ),
  }),
  mkQ({
    id: 'cur_ML_12',
    countryCode: 'ML',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 3,
    topicKey: 'segou_bambara_biton_coulibaly',
    source: 'Histoire du Royaume Bambara de Ségou (XVIIIe siècle)',
    prompt: L(
      'Fondé au début du XVIIIe siècle par Biton Mamari Coulibaly autour des « tondjon » et de la ville aux balanzans, quel puissant royaume rayonna le long du fleuve Niger ?',
      'Founded in the early 1700s by Biton Mamari Coulibaly around the Niger bend and the "city of balanzan trees," which powerful state rose to prominence?',
      'Fundado a principios del siglo XVIII por Biton Mamari Coulibaly, ¿qué poderoso reino floreció en torno a la ciudad de los balanzanes?',
      'Fundado no início do século XVIII por Biton Mamari Coulibaly, qual poderoso reino floresceu na cidade dos balanzans?',
      'ما المملكة القوية التي أسسها بيتون ماماري كوليبالي مطلع القرن الثامن عشر حول مدينة أشجار البالانزان على نهر النيجر؟'
    ),
    correct: L('Le Royaume Bambara de Ségou', 'Bambara Kingdom of Ségou', 'Reino Bambara de Ségú', 'Reino Bambara de Ségou', 'مملكة بامبارا في سيغو'),
    distractors: [
      L('Le Royaume Zoulou du Natal', 'Zulu Kingdom of Natal', 'Reino Zulú', 'Reino Zulu', 'مملكة الزولو'),
      L('L’Empire de Monomotapa', 'Mutapa Empire', 'Imperio Mutapa', 'Império Monomotapa', 'مملكة مونوموتابا'),
      L('Le Royaume de Carthage', 'Carthage', 'Cartago', 'Cartago', 'قرطاج'),
    ],
    explanation: L(
      'Riche d’épopées chantées par les griots et célèbre aujourd’hui pour son Festival sur le Niger et ses balanzans centenaires, Ségou marqua tout le XVIIIe siècle.',
      'Celebrated in griot epics and today’s annual Festival sur le Niger, Ségou stood as a powerhouse along the Middle Niger.',
      'Inmortalizada por los griots y sede del Festival sur le Niger, Ségú fue un centro político mayor del siglo XVIII.',
      'Imortalizada pelos griôs e palco do Festival sur le Niger, Ségou foi um grande polo político do século XVIII.',
      'تُعد سيغو حاضرة تاريخية عريقة تحتضن اليوم مهرجان النيجر الثقافي الشهير.'
    ),
  }),
  mkQ({
    id: 'cur_ML_13',
    countryCode: 'ML',
    category: 'culture',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'bogolan_mud_cloth_craft',
    source: 'Patrimoine textile traditionnel — Bògòlanfini',
    prompt: L(
      'Comment s’appelle le célèbre tissu de coton tissé à la main, teint avec des décoctions de feuilles et peint avec de la boue fermentée du fleuve aux motifs géométriques noirs et ocres ?',
      'What is the famous hand-woven cotton textile dyed with tree leaves and painted with fermented river mud in bold geometric patterns called?',
      '¿Cómo se llama el célebre tejido artesanal de algodón pintado con barro fermentado de río en motivos geométricos?',
      'Como se chama o célebre tecido artesanal de algodão pintado com lama fermentada de rio em padrões geométricos?',
      'ما اسم القماش القطني اليدوي الشهير المصبوغ بأوراق الأشجار والطين النهري المخمّر بزخارف هندسية؟'
    ),
    correct: L('Le Bogolan (Bògòlanfini)', 'Bogolan (Bògòlanfini mud cloth)', 'El Bogolán', 'O Bogolan', 'قماش البوغولان'),
    distractors: [
      L('Le Tweed de Harris', 'Harris Tweed', 'Harris Tweed', 'Harris Tweed', 'تweed هاريس'),
      L('Le Satin de Lyon', 'Lyon Silk Satin', 'Satén de Lyon', 'Cetim de Lyon', 'حرير ليون'),
      L('Le Cachemire du Cachemire', 'Kashmir Pashmina', 'Pashmina de Cachemira', 'Caxemira', 'باشمينا كشمير'),
    ],
    explanation: L(
      'Issu des mots bambara « bogo » (terre/boue) et « lanfini » (tissu), le bogolan raconte des proverbes secrets et inspire aujourd’hui la haute couture mondiale (Chris Seydou).',
      'From Bambara "bogo" (earth/mud), Bogolan patterns encode traditional proverbs and inspired fashion pioneer Chris Seydou.',
      'Del bambara «bogo» (tierra), el bogolán narra proverbios ancestrales e inspiró al gran diseñador Chris Seydou.',
      'Do bambara "bogo" (terra), o bogolan codifica provérbios e inspirou o estilista pioneiro Chris Seydou.',
      'تُشتق كلمة بوغولان من «الطين» بلغة البامبارا وتحمل نقوشه أمثالاً شعبية ألهمت المصممين العالميين.'
    ),
  }),
  mkQ({
    id: 'cur_ML_14',
    countryCode: 'ML',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'oumou_sangare_tinariwen_amadou_mariam',
    source: 'Grammy Awards & Musique du Wassoulou',
    prompt: L(
      'Surnommée « le Rossignol du Wassoulou », quelle grande chanteuse et entrepreneuse engagée pour les droits des femmes a remporté un Grammy Award et brillé avec des titres comme « Moussolou » ?',
      'Nicknamed "the Songbird of Wassoulou," which celebrated singer and women’s rights advocate won a Grammy Award and became famous with "Moussolou"?',
      'Apodada «el Ruiseñor de Wassoulou», ¿qué gran cantante y defensora de las mujeres ganó un premio Grammy y triunfó con «Moussolou»?',
      'Apelidada de "Rouxinol de Wassoulou", qual grande cantora e defensora das mulheres venceu um Grammy e brilhou com "Moussolou"?',
      'من هي المغنية الشهيرة الملقبة بـ«عندليب واسولو» الفائزة بجائزة غرامي والمدافعة عن حقوق المرأة؟'
    ),
    correct: L('Oumou Sangaré', 'Oumou Sangaré', 'Oumou Sangaré', 'Oumou Sangaré', 'أومو سانغاري'),
    distractors: [
      L('Cesária Évora', 'Cesária Évora', 'Cesária Évora', 'Cesária Évora', 'سيزاريا إيفورا'),
      L('Brenda Fassie', 'Brenda Fassie', 'Brenda Fassie', 'Brenda Fassie', 'بريندا فاسي'),
      L('Yemi Alade', 'Yemi Alade', 'Yemi Alade', 'Yemi Alade', 'يمي ألايد'),
    ],
    explanation: L(
      'Aux côtés du groupe touareg Tinariwen (Grammy Award 2012), de Toumani Diabaté et du duo Amadou & Mariam, Oumou Sangaré fait du pays un géant musical mondial.',
      'Alongside Grammy winners Tinariwen, kora master Toumani Diabaté, and Amadou & Mariam, Oumou Sangaré embodies an extraordinary musical legacy.',
      'Junto a Tinariwen, Toumani Diabaté y Amadou & Mariam, Oumou Sangaré consolida un legado musical único.',
      'Ao lado de Tinariwen, Toumani Diabaté e Amadou & Mariam, Oumou Sangaré consagra um legado musical singular.',
      'تقف أومو سانغاري مع فرقة تيناريوين وتوماني دياباتي وأمادو ومريم في طليعة الموسيقى العالمية.'
    ),
  }),
  mkQ({
    id: 'cur_ML_15',
    countryCode: 'ML',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'souleymane_cisse_yeelen_cannes_1987',
    source: 'Festival de Cannes — Prix du Jury 1987',
    prompt: L(
      'Quel grand maître du cinéma africain a remporté l’historique Prix du Jury à Cannes en 1987 avec son chef-d’œuvre « Yeelen » (« La Lumière ») ?',
      'Which master of African cinema won the historic 1987 Cannes Jury Prize with his landmark masterpiece "Yeelen" ("Brightness")?',
      '¿Qué gran maestro del cine africano ganó en 1987 el histórico Premio del Jurado en Cannes con «Yeelen» («La luz»)?',
      'Qual grande mestre do cinema africano conquistou o histórico Prêmio do Júri em Cannes em 1987 com "Yeelen" ("A Luz")?',
      'من هو المخرج السينمائي الكبير الذي فاز بجائزة لجنة التحكيم في كان عام 1987 برائعته «ييلين» (النور)؟'
    ),
    correct: L('Souleymane Cissé', 'Souleymane Cissé', 'Souleymane Cissé', 'Souleymane Cissé', 'سليمان سيسيه'),
    distractors: [
      L('Ousmane Sembène', 'Ousmane Sembène', 'Ousmane Sembène', 'Ousmane Sembène', 'عثمان سمبين'),
      L('Haile Gerima', 'Haile Gerima', 'Haile Gerima', 'Haile Gerima', 'هايلي جيريما'),
      L('Nouri Bouzid', 'Nouri Bouzid', 'Nouri Bouzid', 'Nouri Bouzid', 'نوري بوزيد'),
    ],
    explanation: L(
      'Doublement récompensé à l’Étalon de Yennenga du FESPACO (« Baara », « Finyè »), Souleymane Cissé a hissé le cinéma d’Afrique de l’Ouest au panthéon mondial avec « Yeelen ».',
      'Also two-time FESPACO Étalon d’or winner ("Baara," "Finyè"), Souleymane Cissé achieved a landmark Cannes triumph with "Yeelen."',
      'Ganador también de dos Etalons en el FESPACO, Souleymane Cissé marcó un hito inolvidable en Cannes con «Yeelen».',
      'Vencedor também de dois prêmios máximos do FESPACO, Souleymane Cissé fez história em Cannes com "Yeelen".',
      'حصد سليمان سيسيه جوائز فيسباكو الكبرى وحقق إنجازاً تاريخياً في مهرجان كان بفيلم «ييلين».'
    ),
  }),
  mkQ({
    id: 'cur_ML_16',
    countryCode: 'ML',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'tiguadeguena_fakoye_attaya_cuisine',
    source: 'Gastronomie traditionnelle — Bamako, Ségou & Gao',
    prompt: L(
      'Quel plat emblématique du nord (Gao et Tombouctou), préparé à partir de feuilles de corète potagère (mloukhiya) séchées et pilées longuement mijotées avec de la viande, possède une saveur boisée unique ?',
      'Which iconic northern dish from Gao and Timbuktu simmers dried, finely crushed jute-mallow leaves (mloukhiya) slowly with tender meat for a deep earthy flavor?',
      '¿Qué plato emblemático del norte (Gao y Tombuctú) cuece lentamente hojas secas molidas de yute (mloukhiya) con carne?',
      'Qual prato emblemático do norte (Gao e Tombuctu) cozinha lentamente folhas secas moídas de juta (mloukhiya) com carne?',
      'ما الطبق التقليدي الشهير في الشمال (غاو وتمبكتو) الذي يُطهى ببطء من أوراق الملوخية المجففة والمطحونة مع اللحم؟'
    ),
    correct: L('Le Fakoye', 'Fakoye', 'El Fakoye', 'O Fakoye', 'طبق الفاكوي'),
    distractors: [
      L('La Bouillabaisse provençale', 'Provençal Bouillabaisse', 'Bullabesa', 'Bouillabaisse', 'بويابيس'),
      L('Le Kimchi coréen', 'Korean Kimchi', 'Kimchi coreano', 'Kimchi coreano', 'الكيمتشي الكوري'),
      L('La Raclette suisse', 'Swiss Raclette', 'Raclette suiza', 'Raclete suíça', 'راكليت'),
    ],
    explanation: L(
      'Originaire de la culture songhaï, le Fakoye parfumé aux épices partage la table nationale avec le « Tiguadèguèna » (sauce arachide), le Tô de mil et les trois thés de l’Attaya.',
      'A Songhai culinary treasure from Gao and Timbuktu, Fakoye shines alongside Tiguadèguèna peanut stew and the three-round Attaya tea ritual.',
      'Tesoro culinario songhai, el Fakoye brilla junto al Tiguadèguèna de cacahuete y el ritual del té Attaya.',
      'Tesouro culinário songhai, o Fakoye brilha ao lado do ensopado Tiguadèguèna e do ritual do chá Attaya.',
      'يُعد الفاكوي جوهرة المطبخ السنغاي إلى جانب تيغاديغينا وطقوس الشاي الثلاثي «أتايا».'
    ),
  }),
  mkQ({
    id: 'cur_ML_17',
    countryCode: 'ML',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 3,
    topicKey: 'sinankuya_cousinage_plaisanterie',
    source: 'Patrimoine social et paix communautaire',
    prompt: L(
      'Comment s’appelle la célèbre institution sociale traditionnelle (pacte de paix entre patronymes comme Traoré/Diarra ou ethnies comme Peuls/Forgerons) qui permet de régler les conflits par l’humour et l’entraide ?',
      'What is the celebrated traditional social pact—linking family surnames like Traoré/Diarra or communities—that diffuses conflict through playful teasing and mutual aid?',
      '¿Cómo se llama la célebre institución social tradicional (pacto entre apellidos o etnias) que resuelve conflictos mediante bromas y ayuda mutua?',
      'Como se chama a célebre instituição social tradicional (pacto entre sobrenomes ou etnias) que resolve conflitos com humor e apoio mútuo?',
      'ما اسم الميثاق الاجتماعي التراثي الذي يربط عائلات أو قبائل معينة ويحل الخلافات عبر المزاح المتبادل والتضامن؟'
    ),
    correct: L('La Sinankuya (cousinage à plaisanterie)', 'Sinankuya (joking kinship)', 'La Sinankuya (parentesco jocoso)', 'A Sinankuya (parentesco jocoso)', 'السينانكويا (قرابة المزاح)'),
    distractors: [
      L('La Vendetta insulaire', 'Blood vendetta', 'Vendetta', 'Vendetta', 'الثأر'),
      L('L’Omertà mafieuse', 'Omertà', 'Omertà', 'Omertà', 'أوميرتا'),
      L('L’Ostracisme athénien', 'Athenian ostracism', 'Ostracismo', 'Ostracismo', 'النفي الأثيني'),
    ],
    explanation: L(
      'Pacte ancestral remontant souvent à l’époque de Soundiata Keïta et de la Charte du Manden, la Sinankuya transforme instantanément des inconnus en « cousins » solidaires.',
      'Rooted in alliances from the era of Sundiata Keita, Sinankuya obliges "joking cousins" to protect, feed, and never harm one another.',
      'Arraigada desde la época de Sundiata Keita, la Sinankuya transforma en segundos a dos desconocidos en primos solidarios.',
      'Enraizada desde a era de Sundiata Keita, a Sinankuya transforma desconhecidos em primos solidários num instante.',
      'يمتد تقليد السينانكويا إلى عهد سوندياتا كيتا ويُلزم المتصاهرين بالمودة والصلح ومنع الأذى.'
    ),
  }),
  mkQ({
    id: 'cur_ML_18',
    countryCode: 'ML',
    category: 'culture',
    subCategory: 'patrimoine_tourisme',
    difficulty: 4,
    topicKey: 'kangaba_kamablon_septennial_roof',
    source: 'UNESCO — Patrimoine culturel immatériel (2009)',
    prompt: L(
      'Tous les sept ans à Kangaba (près de la frontière guinéenne), quelle cérémonie millénaire inscrite à l’UNESCO réunit griots Keïta et Diabaté pendant cinq jours ?',
      'Every seven years in Kangaba, which centuries-old ceremony inscribed by UNESCO brings griots and elders together for five days of oral history?',
      'Cada siete años en Kangaba, ¿qué ceremonia milenaria inscrita en la UNESCO reúne a griots durante cinco días?',
      'A cada sete anos em Kangaba, qual cerimônia milenar inscrita na UNESCO reúne griôs durante cinco dias?',
      'كل سبع سنوات في كانغابا، ما الاحتفال التراثي العريق المدرج لدى اليونسكو الذي يجمع الغريو والشيوخ لخمسة أيام؟'
    ),
    correct: L('La réfection septennale du toit du Kamablon (case sacrée)', 'The Septennial Re-roofing of the Kamablon', 'La renovación septenal del techo del Kamablon', 'A renovação septenal do teto do Kamablon', 'إعادة تسقيف الكوخ المقدس (كامابلون) كل سبع سنوات'),
    distractors: [
      L('Le lâcher de taureaux de Pampelune', 'Running of the Bulls', 'Sanfermines', 'Corrida de touros', 'سباق الثيران'),
      L('La parade de Thanksgiving à New York', 'Thanksgiving Day Parade', 'Desfile de Acción de Gracias', 'Desfile de Ação de Graças', 'موكب عيد الشكر'),
      L('La cérémonie du thé matcha de Kyoto', 'Kyoto Tea Ceremony', 'Ceremonia del té', 'Cerimônia do chá', 'طقوس الشاي الياباني'),
    ],
    explanation: L(
      'Lieu de transmission de l’histoire officielle du Mandé depuis plus de quatre siècles, le Kamablon voit sa toiture de paille renouvelée dans une ferveur communautaire unique.',
      'Serving as a living archive of Manden oral history, the sacred Kamablon sanctuary’s thatch roof is rebuilt once every seven years.',
      'Archivo vivo de la historia oral del Mandén, el santuario Kamablon renueva su techo de paja cada siete años.',
      'Arquivo vivo da história oral do Manden, o santuário Kamablon renova seu teto de palha a cada sete anos.',
      'يُعد معبد كامابلون مستودعاً حياً لتاريخ الماندينغ وتُجدد قشّيته كل سبع سنوات.'
    ),
  }),
  mkQ({
    id: 'cur_ML_19',
    countryCode: 'ML',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'yambo_ouologuem_renaudot_1968',
    source: 'Littérature africaine — Prix Renaudot 1968',
    prompt: L(
      'Originaire du Pays dogon (Bandiagara), quel écrivain devint en 1968 le tout premier auteur africain à remporter le prestigieux Prix Renaudot pour son roman « Le Devoir de violence » ?',
      'Born in Dogon Country (Bandiagara), which novelist became in 1968 the very first African author to win France’s Prix Renaudot with "Bound to Violence"?',
      'Nacido en el País Dogón (Bandiagara), ¿qué escritor fue en 1968 el primer autor africano en ganar el Premio Renaudot?',
      'Nascido no País Dogon (Bandiagara), qual escritor tornou-se em 1968 o primeiro autor africano a vencer o Prêmio Renaudot?',
      'من هو الأديب المنحدر من بلاد الدوغون الذي أصبح عام 1968 أول كاتب أفريقي يفوز بجائزة رينودو الفرنسية؟'
    ),
    correct: L('Yambo Ouologuem', 'Yambo Ouologuem', 'Yambo Ouologuem', 'Yambo Ouologuem', 'يامبو وولوغيم'),
    distractors: [
      L('Tahar Ben Jelloun', 'Tahar Ben Jelloun', 'Tahar Ben Jelloun', 'Tahar Ben Jelloun', 'الطاهر بن جلون'),
      L('Wole Soyinka', 'Wole Soyinka', 'Wole Soyinka', 'Wole Soyinka', 'وولي سوينكا'),
      L('Mongo Beti', 'Mongo Beti', 'Mongo Beti', 'Mongo Beti', 'مونغو بيتي'),
    ],
    explanation: L(
      'Célébré et redécouvert aujourd’hui — au point d’inspirer le Prix Goncourt 2021 de Mohamed Mbougar Sarr —, Yambo Ouologuem marqua à jamais les lettres africaines.',
      'Rediscovered by a new generation of readers—and inspiring Mohamed Mbougar Sarr’s 2021 Goncourt novel—Yambo Ouologuem made literary history in 1968.',
      'Revalorizado hoy e inspirador del Premio Goncourt 2021, Yambo Ouologuem marcó un antes y un después en 1968.',
      'Redescoberto pelas novas gerações, Yambo Ouologuem abriu caminhos históricos na literatura em 1968.',
      'أحدث يامبو وولوغيم علامة فارقة في الأدب الأفريقي بفوزه التاريخي عام 1968.'
    ),
  }),
  mkQ({
    id: 'cur_ML_20',
    countryCode: 'ML',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'mahamadou_diarra_real_madrid',
    source: 'FEMAFOOT & Real Madrid — Légendes des Aigles',
    prompt: L(
      'Quel milieu récupérateur emblématique et capitaine des Aigles, quadruple champion de France avec l’Olympique Lyonnais, a ensuite remporté deux Ligas avec le Real Madrid ?',
      'Which commanding holding midfielder and Eagles captain won four straight Ligue 1 titles with Lyon before lifting two La Liga trophies with Real Madrid?',
      '¿Qué emblemático mediocentro y capitán de las Águilas ganó cuatro ligas francesas con el Lyon y dos Ligas con el Real Madrid?',
      'Qual emblemático volante e capitão das Águias venceu quatro títulos franceses pelo Lyon antes de conquistar duas Ligas pelo Real Madrid?',
      'من هو لاعب الارتكاز وقائد «النسور» الذي توج بـ4 ألقاب فرنسية مع ليون ثم لقبين في الليغا مع ريال مدريد؟'
    ),
    correct: L('Mahamadou Diarra (« Djila »)', 'Mahamadou Diarra', 'Mahamadou Diarra', 'Mahamadou Diarra', 'محمدو ديارا'),
    distractors: [
      L('Seydou Keita', 'Seydou Keita', 'Seydou Keita', 'Seydou Keita', 'سيدو كيتا'),
      L('Momo Sissoko', 'Momo Sissoko', 'Momo Sissoko', 'Momo Sissoko', 'محمد سيسوكو'),
      L('Lassana Diarra', 'Lassana Diarra', 'Lassana Diarra', 'Lassana Diarra', 'لاسانا ديارا'),
    ],
    explanation: L(
      'Formé au CSK Bamako, Mahamadou Diarra a inscrit en 2007 un but de la tête décisif qui offrit le titre de champion d’Espagne au Real Madrid lors de l’ultime journée !',
      'Rising from CSK Bamako, Mahamadou Diarra headed in the title-clinching goal for Real Madrid on the dramatic final day of the 2006–07 La Liga season!',
      'Formado en Bamako, Mahamadou Diarra marcó de cabeza el gol decisivo que dio la Liga al Real Madrid en 2007.',
      'Formado em Bamako, Mahamadou Diarra marcou de cabeça o gol decisivo do título espanhol do Real Madrid em 2007.',
      'سجل محمدو ديارا هدف التتويج الحاسم برأسه لريال مدريد في الجولة الأخيرة من دوري 2007.'
    ),
  }),
  mkQ({
    id: 'cur_ML_21',
    countryCode: 'ML',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'daba_modibo_keita_world_taekwondo',
    source: 'World Taekwondo — Championnats du monde 2007 & 2009',
    prompt: L(
      'Quel champion de taekwondo poids lourds né à Bamako est devenu en 2007 puis en 2009 le tout premier champion du monde malien de l’histoire dans un sport olympique ?',
      'Which Bamako-born heavyweight taekwondo star became in 2007 and 2009 the country’s first-ever World Champion in an Olympic sport?',
      '¿Qué campeón de taekwondo nacido en Bamako se convirtió en 2007 y 2009 en el primer campeón mundial del país en un deporte olímpico?',
      'Qual campeão de taekwondo nascido em Bamako tornou-se em 2007 e 2009 o primeiro campeão mundial do país em um esporte olímpico?',
      'من هو بطل التايكوندو المولود في باماكو الذي أصبح عامي 2007 و2009 أول بطل عالم في تاريخ البلاد برياضة أولمبية؟'
    ),
    correct: L('Daba Modibo Keïta', 'Daba Modibo Keïta', 'Daba Modibo Keïta', 'Daba Modibo Keïta', 'دابا موديبو كيتا'),
    distractors: [
      L('Cheick Sallah Cissé', 'Cheick Sallah Cissé', 'Cheick Sallah Cissé', 'Cheick Sallah Cissé', 'شيخ صلاح سيسيه'),
      L('Hicham El Guerrouj', 'Hicham El Guerrouj', 'Hicham El Guerrouj', 'Hicham El Guerrouj', 'هشام الكروج'),
      L('Teddy Riner', 'Teddy Riner', 'Teddy Riner', 'Teddy Riner', 'تيدي رينر'),
    ],
    explanation: L(
      'Sacré champion du monde à Pékin (2007) puis à Copenhague (2009) chez les +84/+87 kg, Daba Modibo Keïta a inspiré des milliers de jeunes athlètes à Bamako.',
      'Winning world gold in Beijing (2007) and Copenhagen (2009), Daba Modibo Keïta elevated combat sports nationwide.',
      'Campeón mundial en Pekín 2007 y Copenhague 2009, Daba Modibo Keïta inspiró a miles de jóvenes atletas.',
      'Campeão mundial em Pequim 2007 e Copenhague 2009, Daba Modibo Keïta inspirou milhares de jovens atletas.',
      'تُوج دابا موديبو كيتا بذهبية العالم في بكين 2007 وكوبنهاغن 2009 وألهم جيلاً كاملاً.'
    ),
  }),
  mkQ({
    id: 'cur_ML_22',
    countryCode: 'ML',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'djoliba_as_real_bamako_clubs',
    source: 'FEMAFOOT & CAF — Clubs historiques de Bamako',
    prompt: L(
      'Avec le Stade Malien, quels deux autres grands clubs historiques de Bamako (dont l’un, surnommé les « Scorpions », révéla Salif Keïta et atteignit la finale continentale en 1966) dominent le palmarès national ?',
      'Alongside Stade Malien, which two other historic Bamako clubs—including the "Scorpions" where Salif Keïta starred in the 1966 African Champions final—lead domestic football?',
      'Junto al Stade Malien, ¿qué otros dos clubes históricos de Bamako dominan el palmarés nacional (uno finalista continental en 1966)?',
      'Ao lado do Stade Malien, quais outros dois clubes históricos de Bamako lideram o futebol nacional?',
      'إلى جانب ستاد مالي، ما الناديان العريقان في باماكو اللذان يتصدران البطولات المحلية وبلغ أحدهما نهائي أفريقيا 1966؟'
    ),
    correct: L('Le Djoliba AC et l’AS Real Bamako', 'Djoliba AC and AS Real Bamako', 'Djoliba AC y AS Real Bamako', 'Djoliba AC e AS Real Bamako', 'نادي دجوليبا وريال باماكو'),
    distractors: [
      L('L’Aduana Stars et Berekum Chelsea', 'Aduana Stars & Berekum Chelsea', 'Aduana Stars y Berekum', 'Aduana Stars e Berekum', 'أدوانا ستارز'),
      L('Le FC Platinum et Dynamos', 'FC Platinum & Dynamos', 'FC Platinum y Dynamos', 'FC Platinum e Dynamos', 'ديناموز'),
      L('Le Orlando Pirates et SuperSport', 'Orlando Pirates & SuperSport', 'Orlando Pirates y SuperSport', 'Orlando Pirates e SuperSport', 'أورلاندو بايرتس'),
    ],
    explanation: L(
      'Surnommé les « Rouges de Bamako », le Djoliba AC détient plus de 20 championnats nationaux tandis que l’AS Real Bamako fut le premier club du pays finaliste de la Coupe des champions en 1966.',
      'Djoliba AC ("The Reds") holds over 20 league titles, while AS Real Bamako ("The Scorpions") reached the 1966 African Champions final with Salif Keïta.',
      'El Djoliba AC suma más de 20 ligas y el Real Bamako alcanzó la final continental en 1966.',
      'O Djoliba AC acumula mais de 20 títulos nacionais e o Real Bamako foi finalista africano em 1966.',
      'حصد دجوليبا أكثر من 20 لقباً للدوري بينما بلغ ريال باماكو نهائي أبطال أفريقيا 1966.'
    ),
  }),
  mkQ({
    id: 'cur_ML_23',
    countryCode: 'ML',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'hamchetou_maiga_afrobasket_2007',
    source: 'FIBA Africa — AfroBasket féminin 2007 à Dakar',
    prompt: L(
      'En 2007 à Dakar, emmenée par l’ailière vedette Hamchétou Maïga-Ba (MVP du tournoi et ancienne joueuse WNBA), dans quel sport l’équipe nationale féminine a-t-elle remporté son premier titre de championne d’Afrique ?',
      'In Dakar in 2007, led by WNBA star and tournament MVP Hamchétou Maïga-Ba, in which sport did the women’s national team capture its maiden African championship?',
      'En Dakar 2007, lideradas por la estrella WNBA Hamchétou Maïga-Ba, ¿en qué deporte conquistaron las mujeres su primer título continental?',
      'Em Dacar 2007, lideradas pela estrela da WNBA Hamchétou Maïga-Ba, em qual esporte a seleção feminina conquistou seu primeiro título africano?',
      'في داكار 2007 بقيادة النجمة حامشيتو مايغا با، في أي رياضة توج منتخب السيدات بأول لقب أفريقي له؟'
    ),
    correct: L('Le basketball féminin (AfroBasket 2007)', 'Women’s basketball (2007 AfroBasket)', 'Baloncesto femenino (AfroBasket 2007)', 'Basquete feminino (AfroBasket 2007)', 'كرة السلة للسيدات (أفروباسكت 2007)'),
    distractors: [
      L('Le cricket sur gazon', 'Grass cricket', 'Críquet', 'Críquete', 'الكريكيت'),
      L('Le volley-ball sur neige', 'Snow volleyball', 'Vóley sobre nieve', 'Vôlei na neve', 'كرة الطائرة على الجليد'),
      L('Le badminton en double', 'Doubles badminton', 'Bádminton', 'Badminton', 'الريشة الطائرة'),
    ],
    explanation: L(
      'En battant le Sénégal chez lui (63-56) en finale de l’AfroBasket 2007, les Aigles Dames ont ouvert une grande tradition qui brille encore aujourd’hui chez les seniors et en U19 mondiales.',
      'Defeating hosts Senegal 63–56 in the 2007 final sparked a lasting golden tradition in both senior AfroBasket and youth FIBA World Cups.',
      'Tras vencer a Senegal en la final de 2007 (63-56), el baloncesto femenino inició una época brillante.',
      'Ao vencer o Senegal na final de 2007 por 63 a 56, o basquete feminino inaugurou uma era de ouro.',
      'أشعل التتويج على حساب السنغال عام 2007 نهضة مستمرة لكرة السلة النسائية في البلاد.'
    ),
  }),
  mkQ({
    id: 'cur_ML_24',
    countryCode: 'ML',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'afcon_1972_final_fantamady_keita',
    source: 'CAF — Finale de la CAN 1972 à Yaoundé',
    prompt: L(
      'Pour sa toute première participation à la Coupe d’Afrique des nations en 1972 à Yaoundé, quel stade de la compétition les Aigles atteignirent-ils en s’inclinant d’un souffle 3-2 face au Congo ?',
      'In their very first AFCON appearance in Yaoundé in 1972, how far did Les Aigles go before narrowly falling 3–2 to Congo?',
      'En su debut absoluto en la CAN de 1972 en Yaundé, ¿hasta dónde llegaron las Águilas antes de caer 3-2 ante el Congo?',
      'Em sua estreia absoluta na CAN em 1972 em Yaoundé, até onde chegaram as Águias antes da derrota por 3 a 2 para o Congo?',
      'في أول مشاركة على الإطلاق في كأس أمم أفريقيا عام 1972 بياوندي، أي دور بلغه منتخب النسور قبل الخسارة 3-2 أمام الكونغو؟'
    ),
    correct: L('La finale (vice-champion d’Afrique 1972)', 'The Final (1972 AFCON runners-up)', 'La final (subcampeón en 1972)', 'A final (vice-campeão em 1972)', 'المباراة النهائية (الوصيف عام 1972)'),
    distractors: [
      L('Ils furent éliminés dès le premier tour préliminaire', 'Eliminated in qualifying rounds', 'Eliminados en fase previa', 'Eliminados na fase prévia', 'خرج من التصفيات'),
      L('Le match pour la 7e place', '7th-place playoff', 'Partido por el 7.º puesto', 'Disputa do 7º lugar', 'مباراة المركز السابع'),
      L('Les huitièmes de finale uniquement', 'Round of 16 only', 'Octavos de final', 'Oitavas de final', 'ثمن النهائي فقط'),
    ],
    explanation: L(
      'Emmenés par Salif Keïta et Fantamady Keïta (auteur de 4 buts dans le tournoi), les Aigles réalisèrent un exploit mémorable dès leurs débuts en phase finale.',
      'Powered by Salif Keïta and 4-goal hero Fantamady Keïta, Les Aigles reached the championship match on their tournament debut.',
      'Liderados por Salif y Fantamady Keïta, alcanzaron la final en su mismísimo debut continental.',
      'Com Salif e Fantamady Keïta, chegaram à final logo em sua estreia continental.',
      'بلغت النسور النهائي في مشاركتها الأولى بفضل تألق ساليف وفانتامادي كيتا.'
    ),
  }),
  mkQ({
    id: 'cur_ML_25',
    countryCode: 'ML',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'taoudenni_azalai_salt_caravans',
    source: 'Patrimoine saharien — Azalaï de Tombouctou',
    prompt: L(
      'De quelle mine isolée en plein désert du Sahara (extrême nord du pays) partent depuis des siècles les célèbres caravanes de dromadaires (« Azalaï ») chargées de grandes plaques de sel gemme vers Tombouctou ?',
      'From which remote deep-Sahara desert salt mine do historic camel caravans ("Azalaï") carry giant slabs of rock salt south toward Timbuktu?',
      '¿De qué remota mina del Sáhara parten desde hace siglos las caravanas («Azalaï») cargadas de grandes placas de sal hacia Tombuctú?',
      'De qual remota mina no coração do Saara partem há séculos as caravanas ("Azalaï") carregadas de placas de sal rumo a Tombuctu?',
      'من أي منجم صحراوي ناءٍ في أقصى الشمال تنطلق منذ قرون قوافل الإبل («أزالاي») محملة بألواح الملح نحو تمبكتو؟'
    ),
    correct: L('Taoudenni', 'Taoudenni', 'Taoudenni', 'Taoudenni', 'تاودني'),
    distractors: [
      L('Zouérat', 'Zouérat', 'Zouérat', 'Zouérat', 'الزويرات'),
      L('Tamanrasset', 'Tamanrasset', 'Tamanrasset', 'Tamanrasset', 'تمنراست'),
      L('Ghadamès', 'Ghadames', 'Ghadames', 'Ghadames', 'غدامس'),
    ],
    explanation: L(
      'Située à près de 750 km au nord de Tombouctou dans le lit d’un ancien lac salé, Taoudenni perpétue le commerce saharien hérité de l’âge d’or médiéval (jadis via Teghaza).',
      'Some 750 km north of Timbuktu, Taoudenni’s salt beds sustain an ancient trans-Saharan caravan trade once worth its weight in gold.',
      'A 750 km al norte de Tombuctú, las salinas de Taoudenni perpetúan un comercio transahariano milenario.',
      'A 750 km ao norte de Tombuctu, as salinas de Taoudenni preservam um comércio transaariano milenar.',
      'تقع تاودني على بُعد 750 كم شمال تمبكتو وتحافظ على تجارة القوافل الصحراوية التاريخية.'
    ),
  }),
  mkQ({
    id: 'cur_ML_26',
    countryCode: 'ML',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'flag_colors_motto_mali',
    source: 'Constitution nationale — Un Peuple – Un But – Une Foi',
    prompt: L(
      'Quelle célèbre devise nationale est inscrite dans la Constitution de la République et accompagne le drapeau tricolore vert, or et rouge ?',
      'Which famous national motto is enshrined in the Republic’s constitution alongside the green, gold, and red tricolor flag?',
      '¿Qué célebre lema nacional acompaña constitucionalmente a la bandera tricolor verde, oro y roja?',
      'Qual célebre lema nacional acompanha constitucionalmente a bandeira tricolor verde, ouro e vermelha?',
      'ما الشعار الوطني الشهير المنصوص عليه في الدستور مع العلم ثلاثي الألوان الأخضر والذهبي والأحمر؟'
    ),
    correct: L('« Un Peuple – Un But – Une Foi »', '"One People – One Goal – One Faith"', '«Un Pueblo – Un Objetivo – Una Fe»', '"Um Povo – Um Objetivo – Uma Fé"', '«شعب واحد – هدف واحد – إيمان واحد»'),
    distractors: [
      L('« Liberté – Égalité – Fraternité »', '"Liberty – Equality – Fraternity"', '«Libertad – Igualdad – Fraternidad»', '"Liberdade – Igualdade – Fraternidade"', '«حرية – مساواة – إخاء»'),
      L('« Paix – Travail – Patrie »', '"Peace – Work – Fatherland"', '«Paz – Trabajo – Patria»', '"Paz – Trabalho – Pátria"', '«سلام – عمل – وطن»'),
      L('« Ordre et Progrès »', '"Order and Progress"', '«Orden y Progreso»', '"Ordem e Progresso»', '«النظام والتقدم»'),
    ],
    explanation: L(
      'Adopté en mars 1961 (en remplaçant l’ancienne silhouette humaine du « kanaga » de la Fédération de 1959), le drapeau vert-or-rouge incarne nature, pureté/ressources et courage.',
      'Adopted in March 1961 alongside the green-gold-red tricolor, the motto expresses unity across every region from Kayes to Gao.',
      'Adoptado en marzo de 1961 junto a la bandera tricolor, el lema simboliza unidad nacional de Kayes a Gao.',
      'Adotado em março de 1961 com a bandeira tricolor, o lema expressa união de Kayes a Gao.',
      'يجسد الشعار الوطني وحدة الشعب وتلاحمه عبر جميع الأقاليم من كايس إلى غاو.'
    ),
  }),
];

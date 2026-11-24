import { L } from '../../countriesPart1';
import { mkQ } from './packHelpers';

export const TOGO_CURATED_PACK = [
  mkQ({
    id: 'cur_TG_01',
    countryCode: 'TG',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'koutammakou_batammariba_unesco',
    source: 'UNESCO — Paysage de Koutammakou (2004)',
    prompt: L(
      'Inscrit au patrimoine mondial de l’UNESCO depuis 2004 dans la région de la Kara, quel site culturel célèbre rassemble les maisons-tours en terre (« Takienta ») du peuple Batammariba ?',
      'Inscribed by UNESCO in 2004 in the Kara region, which living cultural landscape showcases the earthen tower-houses ("Takienta") of the Batammariba people?',
      'Inscrito en la UNESCO en 2004 en la región de Kara, ¿qué paisaje cultural reúne las casas-torre de barro («Takienta») del pueblo batammariba?',
      'Inscrito na UNESCO em 2004 na região de Kara, qual paisagem cultural reúne as casas-torre de barro ("Takienta") do povo batammariba?',
      'ما المشهد الثقافي المدرج لدى اليونسكو منذ 2004 في إقليم كارا والذي يضم منازل «تاكينتا» الطينية البرجية لشعب باتاماريبا؟'
    ),
    correct: L('Koutammakou', 'Koutammakou', 'Koutammakou', 'Koutammakou', 'كوتاماكو'),
    distractors: [
      L('Kilwa Kisiwani', 'Kilwa Kisiwani', 'Kilwa Kisiwani', 'Kilwa Kisiwani', 'كيلوا كيسيواني'),
      L('Lalibela', 'Lalibela', 'Lalibela', 'Lalibela', 'لاليبيلا'),
      L('Tassili n’Ajjer', 'Tassili n’Ajjer', 'Tassili n’Ajjer', 'Tassili n’Ajjer', 'طاسيلي ناجر'),
    ],
    explanation: L(
      'Symbole national majeur près de Kanté, Koutammakou incarne une harmonie millénaire entre architecture défensive en banco, greniers coniques et nature.',
      'Near Kanté in northern Togo, Koutammakou stands as a living symbol of earthen architecture harmoniously integrated with fields and sacred groves.',
      'Cerca de Kanté, Koutammakou simboliza la armonía entre arquitectura en tierra, naturaleza y tradiciones vivas.',
      'Perto de Kanté, Koutammakou simboliza a harmonia entre arquitetura de terra, natureza e tradições.',
      'تجسد كوتاماكو قرب كانتي انسجاماً فريداً بين العمارة الطينية الدفاعية والطبيعة.'
    ),
  }),
  mkQ({
    id: 'cur_TG_02',
    countryCode: 'TG',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'lome_border_deepwater_port',
    source: 'Géographie urbaine & Port autonome de Lomé',
    prompt: L(
      'Quelle particularité géographique très rare caractérise la capitale Lomé sur la côte du golfe de Guinée ?',
      'What rare geographic feature characterizes the capital city of Lomé along the Gulf of Guinea?',
      '¿Qué particularidad geográfica muy poco común caracteriza a la capital Lomé en la costa del golfo de Guinea?',
      'Qual particularidade geográfica rara caracteriza a capital Lomé na costa do golfo da Guiné?',
      'ما الميزة الجغرافية النادرة التي تتسم بها العاصمة لومي على ساحل خليج غينيا؟'
    ),
    correct: L('Elle touche directement une frontière internationale (avec le Ghana) tout en abritant un port naturel en eau profonde', 'It sits directly on an international border (with Ghana) while hosting a major deep-water Atlantic port', 'Limita directamente con una frontera internacional (Ghana) y posee un puerto natural de aguas profundas', 'Fica colada a uma fronteira internacional (Gana) e possui um porto natural de águas profundas', 'تقع مباشرة على الحدود الدولية (مع غانا) وتحتضن ميناءً طبيعياً عميق المياه'),
    distractors: [
      L('Elle se trouve à plus de 4 000 m d’altitude dans les glaces', 'It sits above 4,000 m in glacial peaks', 'Está a más de 4000 m de altitud', 'Fica acima de 4.000 m de altitude', 'تقع على ارتفاع 4000 متر وسط الجليد'),
      L('Elle est entièrement souterraine dans un désert salé', 'It is completely underground in a salt desert', 'Es totalmente subterránea', 'É totalmente subterrânea', 'تقع بالكامل تحت الأرض'),
      L('Elle est entourée uniquement d’eau douce sans océan', 'It is surrounded only by freshwater with no ocean access', 'No tiene acceso al océano', 'Não tem saída para o oceano', 'لا تطل على المحيط'),
    ],
    explanation: L(
      'À l’extrême sud-ouest du pays, Lomé jouxte la frontière d’Aflao et dispose du seul port naturel en eau profonde de toute la côte ouest-africaine environnante.',
      'Positioned right along the Aflao border, Lomé operates one of West Africa’s busiest deep-water container transshipment ports.',
      'Junto al paso fronterizo de Aflao, Lomé opera uno de los puertos de aguas profundas más activos de África Occidental.',
      'Junto à fronteira de Aflao, Lomé opera um dos portos de águas profundas mais movimentados da África Ocidental.',
      'تتمتع لومي بميناء طبيعي عميق يُعد من أنشط مراكز الشحن البحري في غرب أفريقيا.'
    ),
  }),
  mkQ({
    id: 'cur_TG_03',
    countryCode: 'TG',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'mont_agou_kpalime_986m',
    source: 'Atlas géographique — Région des Plateaux',
    prompt: L(
      'Culminant à 986 mètres près de la ville verte de Kpalimé, comment s’appelle le point culminant naturel du pays ?',
      'Rising to 986 meters near the lush town of Kpalimé, what is the highest natural peak in the country?',
      'Con 986 metros cerca de Kpalimé, ¿cómo se llama la cumbre más alta del país?',
      'Com 986 metros perto de Kpalimé, como se chama o pico mais alto do país?',
      'بارتفاع 986 متراً قرب مدينة كباليمي الخضراء، ما اسم أعلى قمة جبلية في البلاد؟'
    ),
    correct: L('Le Mont Agou (Pic Baumann)', 'Mount Agou', 'Monte Agou', 'Monte Agou', 'جبل أغو'),
    distractors: [
      L('Le Mont Karisimbi', 'Mount Karisimbi', 'Monte Karisimbi', 'Monte Karisimbi', 'جبل كاريسيمبي'),
      L('Le Mont Toubkal', 'Mount Toubkal', 'Monte Toubkal', 'Monte Toubkal', 'جبل توبقال'),
      L('Le Mont Mérapi', 'Mount Merapi', 'Monte Merapi', 'Monte Merapi', 'جبل ميرابي'),
    ],
    explanation: L(
      'Surplombant les plantations de café et de cacao du plateau de Kloto et des cascades de Womé/Kpimé, le Mont Agou marque le point le plus élevé des Monts du Togo.',
      'Overlooking coffee and cocoa groves around Kpalimé and scenic waterfalls like Womé and Kpimé, Mount Agou crowns the Togo Mountains.',
      'Dominando cafetales, cacaotales y cascadas cerca de Kpalimé, el monte Agou corona los montes del país.',
      'Dominando cafezais, cacauais e cachoeiras perto de Kpalimé, o monte Agou coroa os montes do país.',
      'يطل جبل أغو على مزارع البن والكاكاو والشلالات الخلابة في هضبة كباليمي.'
    ),
  }),
  mkQ({
    id: 'cur_TG_04',
    countryCode: 'TG',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'faille_aledjo_fazao_malfakassa',
    source: 'Géographie routière et parcs nationaux',
    prompt: L(
      'Le long de la Route Nationale 1 vers le nord entre Sokodé et Kara, quel spectaculaire passage naturel creusé dans une falaise rocheuse forme une porte étroite de montagne ?',
      'Along National Highway 1 between Sokodé and Kara, what dramatic rock cleft carved through a steep cliff forms a famous mountain gateway?',
      'En la carretera nacional hacia el norte entre Sokodé y Kara, ¿qué espectacular paso rocoso entre acantilados forma una puerta natural?',
      'Na rodovia nacional para o norte entre Sokodé e Kara, qual passagem rochosa espetacular entre paredões forma um portal natural?',
      'على الطريق الوطني بين سوكوديه وكارا، ما الممر الصخري المهيب المحفور وسط جرف جبلي شديد الانحدار؟'
    ),
    correct: L('La Faille d’Alédjo', 'The Alédjo Fault (Faille d’Alédjo)', 'La Falla de Alédjo', 'A Falha de Alédjo', 'صدع أليدجو الصخري'),
    distractors: [
      L('Le Canal de Panama', 'Panama Canal', 'Canal de Panamá', 'Canal do Panamá', 'قناة بنما'),
      L('Le Tunnel du Mont-Blanc', 'Mont Blanc Tunnel', 'Túnel del Mont Blanc', 'Túnel do Mont Blanc', 'نفق مون بلان'),
      L('Le Détroit de Malacca', 'Strait of Malacca', 'Estrecho de Malaca', 'Estreito de Malaca', 'مضيق ملقا'),
    ],
    explanation: L(
      'Élargie pour laisser passer la route reliant Lomé au nord du pays et au Sahel, la Faille d’Alédjo marque symboliquement la porte d’entrée du grand Nord.',
      'Cut cleanly through towering rock ridges, the Alédjo cleft forms an unforgettable natural gateway linking central and northern regions.',
      'Abierta entre imponentes muros de piedra, la Falla de Alédjo marca el paso emblemático hacia el norte.',
      'Aberta entre paredões de rocha, a Falha de Alédjo marca o portal emblemático rumo ao norte.',
      'يمثل صدع أليدجو البوابة الجبلية الشهيرة التي تربط وسط البلاد بشمالها.'
    ),
  }),
  mkQ({
    id: 'cur_TG_05',
    countryCode: 'TG',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'lac_togo_togoville_aneho',
    source: 'Géographie littorale — Région Maritime',
    prompt: L(
      'Quelle grande lagune d’eau saumâtre de la côte sud, bordée par Agbodrafo et la cité historique de Togoville, a donné son nom à la République ?',
      'Which scenic coastal lagoon in the Maritime region—bordered by Agbodrafo and historic Togoville—gave the country its name?',
      '¿Qué gran laguna costera del sur —bordeada por Agbodrafo y la histórica Togoville— dio su nombre al país?',
      'Qual grande laguna costeira do sul —banhando Agbodrafo e a histórica Togoville— deu nome ao país?',
      'ما البحيرة الساحلية الشهيرة في الجنوب المحاطة بأغبودرافو ومدينة توغوفيل التاريخية والتي استمدت البلاد اسمها منها؟'
    ),
    correct: L('Le Lac Togo', 'Lake Togo', 'Lago Togo', 'Lago Togo', 'بحيرة توغو'),
    distractors: [
      L('Le Lac Balaton', 'Lake Balaton', 'Lago Balatón', 'Lago Balaton', 'بحيرة بالاتون'),
      L('Le Lac Baïkal', 'Lake Baikal', 'Lago Baikal', 'Lago Baikal', 'بحيرة بايكال'),
      L('Le Lac Michigan', 'Lake Michigan', 'Lago Míchigan', 'Lago Michigan', 'بحيرة ميشيغان'),
    ],
    explanation: L(
      'En langue éwé, « To-go » signifie « derrière l’eau / de l’autre côté de la lagune » : le nom du village de Togoville (anciennement Togo) fut ensuite étendu à tout le territoire.',
      'In Éwé, "To-go" means "behind the water" (across the lagoon)—the name of Togoville later became the name of the entire nation.',
      'En lengua ewé, «To-go» significa «al otro lado del agua», origen del nombre de Togoville y de todo el país.',
      'Em língua ewé, "To-go" significa "do outro lado da água", origem do nome de Togoville e da nação.',
      'تعني كلمة «توغو» بلغة الإيوي «خلف الماء»، ومن قرية توغوفيل استمدت الدولة اسمها.'
    ),
  }),
  mkQ({
    id: 'cur_TG_06',
    countryCode: 'TG',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'fazao_malfakassa_oti_keran',
    source: 'Aires protégées — Région Centrale & Savanes',
    prompt: L(
      'Situé entre Sokodé et Bassar sur près de 1 920 km² de collines boisées et de cascades, quel est le plus vaste parc national du Togo ?',
      'Covering roughly 1,920 sq km of forested hills and waterfalls between Sokodé and Bassar, what is Togo’s largest national park?',
      'Con casi 1920 km² entre Sokodé y Bassar, ¿cuál es el parque nacional más extenso de Togo?',
      'Com cerca de 1.920 km² entre Sokodé e Bassar, qual é o maior parque nacional do Togo?',
      'على مساحة تقارب 1920 كم² بين سوكوديه وباسار، ما أكبر متنزه وطني في توغو؟'
    ),
    countryModePrompt: L(
      'Entre Sokodé et Bassar dans les monts Malfakassa, quel parc national de près de 1 920 km² constitue la plus grande aire protégée forestière et montagneuse du pays ?',
      'Between Sokodé and Bassar, which 1,920-sq-km wildlife reserve ranks as the country’s largest national park?',
      'Entre Sokodé y Bassar, ¿qué reserva de 1920 km² es el mayor parque nacional del país?',
      'Entre Sokodé e Bassar, qual reserva de 1.920 km² é o maior parque nacional do país?',
      'بين سوكوديه وباسار، ما المحمية التي تمتد على 1920 كم² وتُعد أكبر متنزه وطني في البلاد؟'
    ),
    correct: L('Le Parc national de Fazao-Malfakassa', 'Fazao-Malfakassa National Park', 'Parque Nacional Fazao-Malfakassa', 'Parque Nacional Fazao-Malfakassa', 'متنزه فازاو مالفاكاسا الوطني'),
    distractors: [
      L('Le Parc de Yellowstone', 'Yellowstone Park', 'Yellowstone', 'Yellowstone', 'متنزه يلوستون'),
      L('Le Parc de Banff', 'Banff National Park', 'Parque Banff', 'Parque Banff', 'متنزه بانف'),
      L('Le Parc d’Etosha', 'Etosha National Park', 'Parque Etosha', 'Parque Etosha', 'متنزه إيتوشا'),
    ],
    explanation: L(
      'Créé en 1975 en réunissant deux réserves historiques, Fazao-Malfakassa abrite éléphants de forêt/savane, buffles, antilopes et plus de 250 espèces d’oiseaux.',
      'Formed in 1975, Fazao-Malfakassa shelters elephants, antelopes, monkeys, and hundreds of bird species across scenic semi-mountainous valleys.',
      'Creado en 1975, protege elefantes, antílopes y cientos de aves entre valles semimontañosos.',
      'Criado em 1975, protege elefantes, antílopes e centenas de espécies de aves em vales verdes.',
      'أُنشئ عام 1975 ويحمي الفيلة والظباء ومئات أنواع الطيور في الوديان الجبلية.'
    ),
  }),
  mkQ({
    id: 'cur_TG_07',
    countryCode: 'TG',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 3,
    topicKey: 'lome_ecobank_boad_phosphate',
    source: 'Économie & Institutions — Lomé (BOAD / Ecobank / Phosphates)',
    prompt: L(
      'En plus de son grand port maritime et de ses exportations de phosphate (Hahotoé/Kpogamé), de quelle grande banque panafricaine (présente dans plus de 30 pays) et institution régionale de développement Lomé abrite-t-elle le siège mondial ?',
      'Besides its deep-water port and phosphate mines, Lomé hosts the global headquarters of which major Pan-African banking group (operating in 30+ countries) alongside the BOAD?',
      'Además de su gran puerto y el fosfato, ¿de qué gran grupo bancario panafricano (presente en más de 30 países) alberga Lomé la sede mundial junto al BOAD?',
      'Além de seu grande porto e do fosfato, de qual grande grupo bancário pan-africano Lomé abriga a sede mundial ao lado do BOAD?',
      'إلى جانب الميناء الكبير والفوسفات، ما المجموعة المصرفية الأفريقية الكبرى (المنتشرة في أكثر من 30 دولة) التي تتخذ من لومي مقراً عالمياً لها مع بنك BOAD؟'
    ),
    correct: L('Ecobank (ETI)', 'Ecobank (ETI)', 'Ecobank (ETI)', 'Ecobank (ETI)', 'مجموعة إيكوبنك (Ecobank)'),
    distractors: [
      L('La Banque centrale du Japon', 'Bank of Japan', 'Banco de Japón', 'Banco do Japão', 'بنك اليابان'),
      L('La Réserve fédérale américaine', 'US Federal Reserve', 'Reserva Federal', 'Federal Reserve', 'الاحتياطي الفيدرالي'),
      L('La Banque d’Angleterre', 'Bank of England', 'Banco de Inglaterra', 'Banco da Inglaterra', 'بنك إنجلترا'),
    ],
    explanation: L(
      'Fondée en 1985 à l’initiative de chambres de commerce ouest-africaines, Ecobank a établi son siège international à Lomé, faisant de la ville un pôle financier régional majeur avec la BOAD.',
      'Founded in 1985 and headquartered in Lomé alongside the West African Development Bank (BOAD), Ecobank operates across more than 30 African nations.',
      'Fundado en 1985 con sede en Lomé junto al BOAD, Ecobank conecta financieramente a más de 30 países africanos.',
      'Fundado em 1985 e sediado em Lomé ao lado do BOAD, o Ecobank opera em mais de 30 países africanos.',
      'تأسس إيكوبنك عام 1985 ويتخذ من لومي مقراً رئيسياً إلى جانب بنك التنمية لغرب أفريقيا.'
    ),
  }),
  mkQ({
    id: 'cur_TG_08',
    countryCode: 'TG',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'five_regions_kara_sokode_dapaong',
    source: 'Géographie administrative — Cinq régions',
    prompt: L(
      'Quelles sont les cinq régions administratives qui découpent le pays du sud (océan) vers le nord (frontière burkinabè) — représentées par les 5 bandes du drapeau ?',
      'Which five administrative regions divide the country from the southern Atlantic coast to the northern Sahel border—mirrored in the 5 stripes of the flag?',
      '¿Qué cinco regiones dividen el país de sur a norte —reflejadas en las 5 franjas de la bandera—?',
      'Quais cinco regiões dividem o país de sul a norte —refletidas nas 5 faixas da bandeira—?',
      'ما الأقاليم الإدارية الخمسة التي تنقسم إليها البلاد من الساحل الجنوبي حتى الحدود الشمالية وتُمثَّل بأشرطة العلم الخمسة؟'
    ),
    correct: L('Maritime, Plateaux, Centrale, Kara et Savanes', 'Maritime, Plateaux, Centrale, Kara, and Savanes', 'Marítima, Plateaux, Central, Kara y Sabanas', 'Marítima, Plateaux, Central, Kara e Savanas', 'الأقاليم البحري والهضاب والوسط وكارا والسافانا'),
    distractors: [
      L('Sahara, Rif, Souss, Atlas et Draâ', 'Sahara, Rif, Souss, Atlas, and Draa', 'Sáhara, Rif y Atlas', 'Saara, Rife e Atlas', 'الصحراء والريف والأطلس'),
      L('Flandre, Wallonie, Bruxelles, Brabant et Hainaut', 'Flanders, Wallonia, Brussels, Brabant, Hainaut', 'Flandes y Valonia', 'Flandres e Valônia', 'فلاندرز ووالونيا'),
      L('Kanto, Kansai, Kyushu, Tohoku et Hokkaido', 'Kanto, Kansai, Kyushu, Tohoku, Hokkaido', 'Kanto y Kansai', 'Kanto e Kansai', 'كانتو وكانساي'),
    ],
    explanation: L(
      'De Lomé (Maritime) à Kpalimé/Atakpamé (Plateaux), Sokodé (Centrale), Kara (Kara) et Dapaong (Savanes), ces 5 régions structurent toute la géographie nationale.',
      'From Lomé (Maritime) through Kpalimé/Atakpamé (Plateaux), Sokodé (Centrale), Kara, and Dapaong (Savanes), the five stripes unite the entire country.',
      'De Lomé a Kpalimé, Sokodé, Kara y Dapaong, las cinco regiones estructuran el país entero.',
      'De Lomé a Kpalimé, Sokodé, Kara e Dapaong, as cinco regiões estruturam o país inteiro.',
      'من لومي جنوباً مروراً بكباليمي وسوكوديه وكارا إلى داباونغ شمالاً، توحّد الأقاليم الخمسة البلاد.'
    ),
  }),
  mkQ({
    id: 'cur_TG_09',
    countryCode: 'TG',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 1,
    topicKey: 'april_27_1960_ablode_olympio',
    source: 'Archives nationales — 27 avril 1960',
    prompt: L(
      'À quelle date précise le Togo a-t-il proclamé son indépendance en 1960 au cri de ralliement « Ablodé » (« Liberté » en éwé), avec Sylvanus Olympio comme premier président ?',
      'On what exact date in 1960 did Togo proclaim its independence to the rallying cry of "Ablodé" ("Freedom"), with Sylvanus Olympio as its first president?',
      '¿En qué fecha exacta de 1960 proclamó Togo su independencia al grito de «Ablodé» con Sylvanus Olympio como primer presidente?',
      'Em que data exata de 1960 o Togo proclamou sua independência ao grito de "Ablodé" com Sylvanus Olympio como primeiro presidente?',
      'في أي تاريخ بالضبط من عام 1960 أعلنت توغو استقلالها تحت شعار «أبلوديه» (الحرية) بقيادة سيلفانوس أوليمبيو؟'
    ),
    countryModePrompt: L(
      'Quelle date d’avril 1960 marque la proclamation de l’indépendance par Sylvanus Olympio, célébrée chaque année au son du mot « Ablodé » ?',
      'Which exact date in April 1960 marks Sylvanus Olympio’s independence proclamation and annual National Day?',
      '¿Qué día exacto de abril de 1960 marca la proclamación de la independencia por Sylvanus Olympio?',
      'Que dia exato de abril de 1960 marca a proclamação da independência por Sylvanus Olympio?',
      'أي يوم محدد في أبريل 1960 يوافق إعلان الاستقلال بقيادة سيلفانوس أوليمبيو؟'
    ),
    correct: L('Le 27 avril 1960', 'April 27, 1960', '27 de abril de 1960', '27 de abril de 1960', '27 أبريل 1960'),
    distractors: [
      L('Le 1er août 1960', 'August 1, 1960', '1 de agosto de 1960', '1 de agosto de 1960', '1 أغسطس 1960'),
      L('Le 4 avril 1960', 'April 4, 1960', '4 de abril de 1960', '4 de abril de 1960', '4 أبريل 1960'),
      L('Le 15 août 1960', 'August 15, 1960', '15 de agosto de 1960', '15 de agosto de 1960', '15 أغسطس 1960'),
    ],
    explanation: L(
      'Ancien territoire sous tutelle des Nations unies, le pays devint souverain le 27 avril 1960 ; la flamme du Monument de l’Indépendance à Lomé commémore ce jour.',
      'Formerly a UN Trust Territory, the nation proclaimed sovereignty on April 27, 1960, commemorated by Lomé’s Independence Monument.',
      'Tras ser territorio bajo tutela de la ONU, proclamó su soberanía el 27 de abril de 1960.',
      'Após ser território sob tutela da ONU, proclamou sua soberania em 27 de abril de 1960.',
      'نالت البلاد استقلالها في 27 أبريل 1960 ويُخلَّد ذلك بنصب الاستقلال في قلب لومي.'
    ),
  }),
  mkQ({
    id: 'cur_TG_10',
    countryCode: 'TG',
    category: 'history',
    subCategory: 'economie_developpement',
    difficulty: 2,
    topicKey: 'nana_benz_lome_textile_queens',
    source: 'Histoire économique et sociale — Grand Marché de Lomé',
    prompt: L(
      'Quel célèbre surnom donnait-on dès les années 1960 aux puissantes commerçantes de tissus pagnes wax du Grand Marché de Lomé (Assigamé), devenues des magnats de l’économie ouest-africaine ?',
      'What famous nickname was given from the 1960s onward to the powerful women Wax-print textile merchants of Lomé’s Grand Marché (Assigamé)?',
      '¿Qué célebre apodo recibieron desde los años 60 las poderosas comerciantes de telas wax del Gran Mercado de Lomé?',
      'Qual célebre apelido receberam a partir dos anos 1960 as poderosas comerciantes de tecidos wax do Grande Mercado de Lomé?',
      'ما اللقب الشهير الذي أُطلق منذ الستينيات على تاجرات أقمشة الواكس القويات في السوق الكبير بلومي؟'
    ),
    correct: L('Les « Nana Benz »', 'The "Nana Benz"', 'Las «Nana Benz»', 'As "Nana Benz"', 'سيدات «نانا بنز»'),
    distractors: [
      L('Les Suffragettes de Londres', 'London Suffragettes', 'Sufragistas de Londres', 'Sufragistas de Londres', 'السفراجيت'),
      L('Les Dames de Fer de Sheffield', 'Sheffield Iron Ladies', 'Damas de Hierro', 'Damas de Ferro', 'سيدات الحديد'),
      L('Les Cantinières impériales', 'Imperial Cantinières', 'Cantineras imperiales', 'Cantinières imperiais', 'المقاصف الإمبراطورية'),
    ],
    explanation: L(
      'Leur nom associait « Nana » (mère/dame respectée) à « Mercedes-Benz », les berlines de luxe que ces entrepreneuses achetaient grâce au négoce florissant du pagne.',
      'Blending "Nana" (respected woman/mother) with the luxury Mercedes-Benz sedans they famously drove, these trailblazers dominated West African textile trade.',
      'Uniendo «Nana» (señora respetada) con los sedanes Mercedes-Benz que conducían, lideraron el comercio textil regional.',
      'Unindo "Nana" (senhora respeitada) aos sedãs Mercedes-Benz que dirigiam, lideraram o comércio têxtil regional.',
      'جمع اللقب بين لقب الاحترام «نانا» وسيارات مرسيدس بنز الفاخرة التي امتلكنها بفضل نجاحهن التجاري.'
    ),
  }),
  mkQ({
    id: 'cur_TG_11',
    countryCode: 'TG',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 3,
    topicKey: 'aneho_first_capital_togoville_1884',
    source: 'Histoire coloniale & urbaine — Aného / Lomé (1897)',
    prompt: L(
      'Avant que Lomé ne devienne officiellement la capitale en 1897, quelle ville côtière historique située à l’est près du lac Togo fut le premier siège de l’administration coloniale ?',
      'Before Lomé officially became the capital in 1897, which historic eastern coastal town beside Lake Togo served as the first colonial administrative seat?',
      'Antes de que Lomé pasara a ser la capital en 1897, ¿qué ciudad costera histórica al este fue la primera sede administrativa?',
      'Antes de Lomé tornar-se a capital em 1897, qual cidade costeira histórica a leste foi a primeira sede administrativa?',
      'قبل أن تصبح لومي العاصمة الرسمية عام 1897، ما المدينة الساحلية التاريخية في الشرق التي كانت المقر الإداري الأول؟'
    ),
    correct: L('Aného (alors appelée Petit-Popo / Zébé)', 'Aného (then Little Popo / Zébé)', 'Aného (entonces Pequeño Popo / Zébé)', 'Aného (então Pequeno Popo / Zébé)', 'أنيهو (زيبي)'),
    distractors: [
      L('Dapaong', 'Dapaong', 'Dapaong', 'Dapaong', 'داباونغ'),
      L('Mango', 'Mango', 'Mango', 'Mango', 'مانغو'),
      L('Niamtougou', 'Niamtougou', 'Niamtougou', 'Niamtougou', 'نيامتوغو'),
    ],
    explanation: L(
      'Riche d’églises historiques, de maisons afro-brésiliennes et centre du peuple Guin-Mina (fête d’Épé-Ékpé), Aného précéda Lomé après le traité signé en 1884 à Baguida/Togoville.',
      'Rich in 19th-century churches, Afro-Brazilian heritage, and the Épé-Ékpé New Year festival, Aného preceded Lomé as capital until 1897.',
      'Rica en patrimonio afrobrasileño y sede del año nuevo guin-mina (Épé-Ékpé), Aného precedió a Lomé hasta 1897.',
      'Rica em herança afro-brasileira e sede do ano-novo Épé-Ékpé, Aného precedeu Lomé até 1897.',
      'سبقت أنيهو مدينة لومي كعاصمة حتى عام 1897 وتحتفظ بتراث معماري وتاريخي غني.'
    ),
  }),
  mkQ({
    id: 'cur_TG_12',
    countryCode: 'TG',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 3,
    topicKey: 'lome_conventions_acp_ee_edem_kodjo',
    source: 'Relations internationales & OUA — Lomé (1975–1990)',
    prompt: L(
      'Quel homme d’État togolais, ancien Premier ministre et ministre des Affaires étrangères, a également occupé le poste prestigieux de Secrétaire général de l’Organisation de l’Unité Africaine (OUA) de 1978 à 1983 ?',
      'Which Togolese statesman—former Prime Minister and Foreign Minister—also served as Secretary-General of the Organization of African Unity (OAU) from 1978 to 1983?',
      '¿Qué estadista togolés, ex primer ministro y canciller, ocupó el cargo de secretario general de la OUA entre 1978 y 1983?',
      'Qual estadista togolês, ex-primeiro-ministro e chanceler, foi Secretário-Geral da Organização da Unidade Africana (OUA) de 1978 a 1983?',
      'من هو رجل الدولة التوغولي ورئيس الوزراء السابق الذي تولى منصب الأمين العام لمنظمة الوحدة الأفريقية بين 1978 و1983؟'
    ),
    correct: L('Edem Kodjo', 'Edem Kodjo', 'Edem Kodjo', 'Edem Kodjo', 'إيديم كودجو'),
    distractors: [
      L('Kofi Annan', 'Kofi Annan', 'Kofi Annan', 'Kofi Annan', 'كوفي عنان'),
      L('Salim Ahmed Salim', 'Salim Ahmed Salim', 'Salim Ahmed Salim', 'Salim Ahmed Salim', 'سالم أحمد سالم'),
      L('Diallo Telli', 'Diallo Telli', 'Diallo Telli', 'Diallo Telli', 'ديالو تيلي'),
    ],
    explanation: L(
      'Diplomate érudit et auteur de « Et demain l’Afrique », Edem Kodjo œuvra notamment pour le Plan d’action de Lagos et les Conventions de Lomé ACP–CEE.',
      'Author of "Et demain l’Afrique," Edem Kodjo played a key diplomatic role behind the Lagos Plan of Action and Lomé trade accords.',
      'Autor de «Et demain l’Afrique», Edem Kodjo desempeñó un papel diplomático clave en la OUA y los acuerdos de Lomé.',
      'Autor de "Et demain l’Afrique", Edem Kodjo teve papel diplomático central na OUA e nos acordos de Lomé.',
      'أسهم إيديم كودجو بدور دبلوماسي بارز في خطة عمل لاغوس واتفاقيات لومي الاقتصادية.'
    ),
  }),
  mkQ({
    id: 'cur_TG_13',
    countryCode: 'TG',
    category: 'history',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'palais_de_lome_notse_agokoli',
    source: 'Patrimoine historique — Lomé & Notsé',
    prompt: L(
      'Construit au bord de l’océan entre 1898 et 1905 et rouvert en 2019 en tant que centre d’art contemporain et jardin botanique, quel édifice emblématique fut longtemps la résidence des gouverneurs puis des chefs d’État ?',
      'Built beside the Atlantic between 1898 and 1905 and reopened in 2019 as a lush art center and botanical park, which landmark long served as the governors’ and presidential palace?',
      'Construido junto al mar entre 1898 y 1905 y reabierto en 2019 como centro de arte y parque botánico, ¿qué edificio histórico fue sede de gobernadores?',
      'Erguido à beira-mar entre 1898 e 1905 e reaberto em 2019 como centro de arte e parque botânico, qual marco histórico abrigou governadores?',
      'شُيّد على شاطئ المحيط بين 1898 و1905 وأُعيد افتتاحه عام 2019 مركزاً للفن المعاصر وحديقة نباتية، ما هذا القصر التاريخي؟'
    ),
    correct: L('Le Palais de Lomé', 'The Palais de Lomé', 'El Palacio de Lomé', 'O Palácio de Lomé', 'قصر لومي'),
    distractors: [
      L('Le Palais de Versailles', 'Palace of Versailles', 'Palacio de Versalles', 'Palácio de Versalhes', 'قصر فرساي'),
      L('L’Alhambra de Grenade', 'The Alhambra', 'La Alhambra', 'A Alhambra', 'قصر الحمراء'),
      L('Le Château de Chambord', 'Château de Chambord', 'Castillo de Chambord', 'Castelo de Chambord', 'قصر شامبور'),
    ],
    explanation: L(
      'Magnifiquement restauré avec des artisans togolais, le Palais de Lomé accueille aujourd’hui expositions d’art africain, concerts et plantes médicinales côtières.',
      'Restored with local artisans in 2019, the Palais de Lomé celebrates contemporary African visual arts, architecture, and coastal biodiversity.',
      'Restaurado con artesanos locales en 2019, el Palacio de Lomé celebra hoy el arte contemporáneo y la botánica africana.',
      'Restaurado com artesãos locais em 2019, o Palácio de Lomé celebra a arte contemporânea e a flora africana.',
      'يُعد قصر لومي المرمم اليوم وجهة ثقافية كبرى للفنون المعاصرة والطبيعة الساحلية.'
    ),
  }),
  mkQ({
    id: 'cur_TG_14',
    countryCode: 'TG',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 3,
    topicKey: 'agbogbozan_notse_ewe_exodus',
    source: 'Histoire orale — Cité fortifiée de Notsé (Agbogbo)',
    prompt: L(
      'Autour de Notsé dans la région des Plateaux, quelle grande fête annuelle des peuples Éwé commémore la sortie historique hors de la muraille (« Agbogbo ») du roi Agokoli ?',
      'Around Notsé in the Plateaux region, which major annual Éwé festival commemorates the historic exodus through the earthen walls ("Agbogbo") of King Agokoli?',
      'En Notsé, ¿qué gran fiesta anual del pueblo ewé conmemora la histórica salida de la muralla («Agbogbo») del rey Agokoli?',
      'Em Notsé, qual grande festa anual do povo ewé comemora a histórica saída da muralha ("Agbogbo") do rei Agokoli?',
      'في مدينة نوتسي بإقليم الهضاب، ما المهرجان السنوي الكبير لشعب الإيوي الذي يخلد ذكرى الخروج التاريخي من سور «أغبوغبو»؟'
    ),
    correct: L('Agbogbozan', 'Agbogbozan', 'Agbogbozan', 'Agbogbozan', 'مهرجان أغبوغبوزان'),
    distractors: [
      L('La Hanami des cerisiers', 'Cherry Blossom Hanami', 'Hanami', 'Hanami', 'موسم الهانامي'),
      L('Le Songkran thaïlandais', 'Thai Songkran', 'Songkran', 'Songkran', 'مهرجان سونغكران'),
      L('Le Hogmanay écossais', 'Scottish Hogmanay', 'Hogmanay', 'Hogmanay', 'هوغماناي'),
    ],
    explanation: L(
      'Célébrée chaque mois de septembre à Notsé, la fête d’Agbogbozan rassemble toutes les communautés éwé du Togo, du Ghana et du Bénin autour du souvenir de leur unité originelle.',
      'Celebrated every September in Notsé, Agbogbozan gathers Éwé communities from across Togo, Ghana, and Benin in joyous remembrance.',
      'Celebrada cada septiembre en Notsé, reúne a comunidades ewé de Togo, Ghana y Benín.',
      'Celebrada todo setembro em Notsé, reúne comunidades ewé de Togo, Gana e Benim.',
      'يجمع مهرجان أغبوغبوزان كل سبتمبر أبناء شعب الإيوي من توغو وغانا وبنين احتفاءً بتاريخهم المشترك.'
    ),
  }),
  mkQ({
    id: 'cur_TG_15',
    countryCode: 'TG',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'evala_kara_kabye_wrestling',
    source: 'Patrimoine culturel — Région de la Kara (juillet)',
    prompt: L(
      'Chaque mois de juillet dans la région de la Kara chez le peuple Kabyè, quel célèbre festival de lutte traditionnelle marque le passage initiatique des jeunes hommes à l’âge adulte ?',
      'Every July in the Kara region among the Kabye people, which celebrated traditional wrestling festival marks young men’s initiation into adulthood?',
      'Cada julio en la región de Kara entre los kabye, ¿qué célebre festival de lucha tradicional marca el paso a la edad adulta?',
      'Todo julho na região de Kara entre os kabye, qual célebre festival de luta tradicional marca a passagem para a vida adulta?',
      'كل شهر يوليو في إقليم كارا لدى شعب الكابييه، ما المهرجان الشهير للمصارعة التقليدية الذي يرمز لدخول الشباب مرحلة الرشد؟'
    ),
    correct: L('Les luttes traditionnelles Evala', 'Evala traditional wrestling', 'Lucha tradicional Evala', 'Luta tradicional Evala', 'مصارعة إيفالا التقليدية'),
    distractors: [
      L('Le Sumo impérial de Tokyo', 'Tokyo Sumo', 'Sumo de Tokio', 'Sumô de Tóquio', 'السومو الياباني'),
      L('L’Escrime médiévale', 'Medieval fencing', 'Esgrima medieval', 'Esgrima medieval', 'المبارزة الكلاسيكية'),
      L('Le Polo sur gazon', 'Grass polo', 'Polo sobre hierba', 'Polo na grama', 'لعبة البولو'),
    ],
    explanation: L(
      'Précédée d’épreuves d’endurance et accompagnée de chants, flûtes et castagnettes métalliques dans les arènes de Pya, Yadè et Kozah, Evala attire tout le pays.',
      'Accompanied by flutes, chants, and cheering crowds across Kabye hills, Evala celebrates courage, respect, and community cohesion.',
      'Acompañada de flautas y cánticos en las arenas de Kara, Evala exalta el valor, el respeto y la cohesión.',
      'Acompanhada por flautas e cânticos nas arenas de Kara, Evala celebra coragem, respeito e coesão.',
      'تُقام نزالات إيفالا وسط الأهازيج والمزامير وتجسد قيم الشجاعة والاحترام والتلاحم.'
    ),
  }),
  mkQ({
    id: 'cur_TG_16',
    countryCode: 'TG',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 3,
    topicKey: 'epe_ekpe_glidji_sacred_stone',
    source: 'Patrimoine Guin-Mina — Glidji / Aného',
    prompt: L(
      'Lors de la grande fête du Nouvel An guin-mina (« Épé-Ékpé ») à Glidji près d’Aného, quel objet sacré extrait de terre par les prêtres annonce la couleur de l’année à venir (blanc = paix et prospérité) ?',
      'During the Guin-Mina New Year festival ("Épé-Ékpé") in Glidji near Aného, which sacred object unearthed by priests foretells the year’s fortune by its color?',
      'Durante el Año Nuevo guin-mina («Épé-Ékpé») en Glidji cerca de Aného, ¿qué objeto sagrado desenterrado anuncia el augurio del año?',
      'Durante o Ano-Novo guin-mina ("Épé-Ékpé") em Glidji perto de Aného, qual objeto sagrado desenterrado anuncia o augúrio do ano?',
      'خلال عيد رأس السنة التقليدي «إيبيه إيكبيه» في غليدجي قرب أنيهو، ما الشيء المقدس الذي يُستخرج ليُبشّر لونه بملامح العام الجديد؟'
    ),
    correct: L('La Pierre Sacrée (Kpéssosso)', 'The Sacred Stone (Kpéssosso)', 'La Piedra Sagrada (Kpéssosso)', 'A Pedra Sagrada (Kpéssosso)', 'الحجر المقدس (كبيسوسو)'),
    distractors: [
      L('Une couronne de diamants bleus', 'A blue diamond crown', 'Corona de diamantes', 'Coroa de diamantes', 'تاج الماس'),
      L('Un sablier d’argent vénitien', 'Venetian silver hourglass', 'Reloj de arena', 'Ampulheta de prata', 'ساعة رملية'),
      L('Une cloche en cristal de Bohême', 'Bohemian crystal bell', 'Campana de cristal', 'Sino de cristal', 'جرس بلوري'),
    ],
    explanation: L(
      'Moment culminant célébré en août/septembre à Gbatsomé (Glidji), la prise de la pierre sacrée rassemble des dizaines de milliers de personnes vêtues de blanc au bord du lac.',
      'In August or September at Glidji, tens of thousands gather joyfully to witness the unearthing of the Sacred Stone before sharing red corn cakes.',
      'Entre agosto y septiembre, decenas de miles de personas vestidas de blanco celebran la ceremonia en Glidji.',
      'Entre agosto e setembro, dezenas de milhares de pessoas vestidas de branco celebram a cerimônia em Glidji.',
      'يجتمع عشرات الآلاف بالملابس البيضاء في غليدجي لمتابعة هذه المراسم التراثية الفريدة.'
    ),
  }),
  mkQ({
    id: 'cur_TG_17',
    countryCode: 'TG',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'ayimolou_akoume_ademe_djenkoume',
    source: 'Gastronomie populaire togolaise',
    prompt: L(
      'Dans les rues de Lomé à Dapaong, quel plat du matin ultra-populaire mêle riz et haricots rouges ou cornilles cuits ensemble avec du piment noir, du poisson frit et des spaghettis ou œufs ?',
      'From Lomé to Dapaong, what is the hugely beloved everyday dish combining rice cooked with red/black-eyed beans, dark chili sauce, and fried fish or eggs called?',
      'De Lomé a Dapaong, ¿cómo se llama el popularísimo plato que combina arroz cocido con frijoles, salsa picante y pescado o huevo?',
      'De Lomé a Dapaong, como se chama o popularíssimo prato que combina arroz cozido com feijão, molho picante e peixe ou ovo?',
      'من لومي إلى داباونغ، ما الاسم الشعبي للوجبة المحبوبة التي تمزج الأرز والفاصوليا مع الصلصة الحارة والسمك المقلي أو البيض؟'
    ),
    correct: L('L’Ayimolou', 'Ayimolou', 'El Ayimolou', 'O Ayimolou', 'الأيمولو (Ayimolou)'),
    distractors: [
      L('Le Cassoulet toulousain', 'Toulouse Cassoulet', 'Cassoulet', 'Cassoulet', 'كاسوليه'),
      L('La Soupe à l’oignon gratinée', 'French onion soup', 'Sopa de cebolla', 'Sopa de cebola', 'حساء البصل'),
      L('Le Fish and Chips londonien', 'Fish and Chips', 'Fish and Chips', 'Fish and Chips', 'فيش أند شيبس'),
    ],
    explanation: L(
      'Roi du petit-déjeuner et du déjeuner économique, l’Ayimolou rivalise en popularité avec le « Djenkoumé » (gâteau de maïs rouge épicé) et l’« Akoumé » sauce Adémè.',
      'An everyday favorite across schools, markets, and offices, Ayimolou sits atop national comfort food beside Djenkoumé and Akoumé with Adémè leaf sauce.',
      'Favorito diario de escuelas y mercados, comparte popularidad con el Djenkoumé y el Akoumé con salsa Adémè.',
      'Queridinho diário de mercados e famílias, brilha ao lado do Djenkoumé e do Akoumé com molho Adémè.',
      'يتصدر الأيمولو المائدة الشعبية اليومية إلى جانب الدجينكومي والأكومي بصلصة الأديمي.'
    ),
  }),
  mkQ({
    id: 'cur_TG_18',
    countryCode: 'TG',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'fufu_akoume_ademe_tchouk',
    source: 'Gastronomie nationale — Sud & Nord',
    prompt: L(
      'Avec quel accompagnement emblématique sert-on traditionnellement l’« Akoumé » (pâte de maïs ou mil) dans la région Maritime : une sauce verte gluante et parfumée aux feuilles de corète potagère ?',
      'With which iconic green leafy sauce—made from jute-mallow leaves (corète) with smoked fish or crab—is "Akoumé" corn porridge traditionally served in the south?',
      '¿Con qué salsa verde tradicional hecha de hojas de yute (corète) y pescado ahumado se sirve habitualmente el «Akoumé»?',
      'Com qual molho verde tradicional feito de folhas de juta e peixe defumado o "Akoumé" costuma ser servido?',
      'مع أي صلصة خضراء تقليدية محضّرة من أوراق الملوخية والسمك المدخن يُقدَّم طبق «الأكومي»؟'
    ),
    correct: L('La sauce Adémè', 'Adémè sauce', 'Salsa Adémè', 'Molho Adémè', 'صلصة أديمي (Adémè)'),
    distractors: [
      L('La sauce Béarnaise à l’estragon', 'Béarnaise sauce', 'Salsa bearnesa', 'Molho béarnaise', 'صلصة البيرنيز'),
      L('Le guacamole mexicain', 'Mexican guacamole', 'Guacamole', 'Guacamole', 'غواكامولي'),
      L('La sauce tartare aux câpres', 'Tartar sauce', 'Salsa tártara', 'Molho tártaro', 'صلصة التارتار'),
    ],
    explanation: L(
      'Préparée avec du poisson fumé, du crabe ou de l’ail local, la sauce Adémè accompagne l’Akoumé, tout comme la sauce arachide ou graine accompagne le Fufu d’igname pilée.',
      'Simmered with smoked fish, crab, or garlic, velvety green Adémè sauce pairs seamlessly with Akoumé cornmeal, just as pounded yam Fufu shines with palm-nut soup.',
      'Cocinada con pescado ahumado y cangrejo, la salsa Adémè es la compañera clásica del Akoumé.',
      'Cozida com peixe defumado e caranguejo, a salsa Adémè é a parceira clássica do Akoumé.',
      'تُعد صلصة أديمي بالسمك المدخن والسلطعون المرافق الكلاسيكي لطبق الأكومي.'
    ),
  }),
  mkQ({
    id: 'cur_TG_19',
    countryCode: 'TG',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'bella_bellow_golden_voice',
    source: 'Patrimoine musical — « La Voix d’or » (1945–1973)',
    prompt: L(
      'Surnommée « la Voix d’or » (1945–1973), quelle chanteuse légendaire née à Tsévié enthousiasma le Festival des arts nègres de Dakar 1966 et l’Olympia de Paris avant sa disparition tragique à 27 ans ?',
      'Nicknamed "the Golden Voice" (1945–1973), which legendary Tsévié-born singer captivated the 1966 Dakar World Festival of Negro Arts and the Paris Olympia?',
      'Apodada «la Voz de Oro» (1945-1973), ¿qué legendaria cantante nacida en Tsévié deslumbró en Dakar 1966 y el Olympia de París?',
      'Apelidada de "Voz de Ouro" (1945-1973), qual lendária cantora nascida em Tsévié brilhou em Dacar 1966 e no Olympia de Paris?',
      'من هي المغنية الأسطورية المولودة في تسيفيي والملقبة بـ«الصوت الذهبي» التي تألقت في مهرجان داكار 1966 ومسرح الأولمبيا بباريس؟'
    ),
    correct: L('Bella Bellow (Georgette Nafiatou Adjoavi)', 'Bella Bellow', 'Bella Bellow', 'Bella Bellow', 'بيلا بيلو'),
    distractors: [
      L('Édith Piaf', 'Édith Piaf', 'Édith Piaf', 'Édith Piaf', 'إيديث بياف'),
      L('Aretha Franklin', 'Aretha Franklin', 'Aretha Franklin', 'Aretha Franklin', 'أريثا فرانكلين'),
      L('Dalida', 'Dalida', 'Dalida', 'Dalida', 'داليدا'),
    ],
    explanation: L(
      'Révélée avec « Rockia » et « O Senye », Bella Bellow influença profondément Angélique Kidjo et Afia Mala ; un monument et un timbre lui rendent hommage.',
      'Remembered for classics like "Rockia," Bella Bellow inspired generations including Angélique Kidjo and remains deeply revered.',
      'Autora de clásicos como «Rockia», Bella Bellow inspiró a artistas como Angélique Kidjo.',
      'Intérprete de clássicos como "Rockia", Bella Bellow inspirou artistas como Angélique Kidjo.',
      'تركت بيلا بيلو أرثاً غنائياً خالداً بأغانٍ مثل «روكيا» وألهمت أجيالاً من الفنانات الأفريقيات.'
    ),
  }),
  mkQ({
    id: 'cur_TG_20',
    countryCode: 'TG',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'king_mensah_toofan_cool_catche',
    source: 'Musique togolaise contemporaine',
    prompt: L(
      'Quel célèbre duo urbain togolais formé par Barabas et Master Just a fait danser toute l’Afrique avec les rythmes « Cool Catché » et « Gweta » ?',
      'Which celebrated pop duo formed by Barabas and Master Just got the entire continent dancing with the "Cool Catché" and "Gweta" viral hits?',
      '¿Qué célebre dúo urbano formado por Barabas y Master Just hizo bailar a África con «Cool Catché» y «Gweta»?',
      'Qual célebre dupla urbana formada por Barabas e Master Just colocou a África para dançar com "Cool Catché" e "Gweta"?',
      'ما الثنائي الموسيقي الشهير المكوّن من باراباس وماستر جاست الذي أمتع أفريقيا بأغنيتي «كول كاتشيه» و«غويتا»؟'
    ),
    correct: L('Toofan', 'Toofan', 'Toofan', 'Toofan', 'ثنائي توفان (Toofan)'),
    distractors: [
      L('P-Square', 'P-Square', 'P-Square', 'P-Square', 'بي سكوير'),
      L('Daft Punk', 'Daft Punk', 'Daft Punk', 'Daft Punk', 'دافت بانك'),
      L('MHD', 'MHD', 'MHD', 'MHD', 'إم إتش دي'),
    ],
    explanation: L(
      'Au côté de la star afro-traditionnelle King Mensah (« Le Roi »), Toofan a décroché plusieurs Kora Awards, MTV Africa Music Awards et l’hymne officiel de la CAN.',
      'Alongside Afropop icon King Mensah, Toofan won MTV Africa and Kora Awards and helped lift urban West African pop worldwide.',
      'Junto a King Mensah, Toofan cosechó premios MTV Africa y Kora proyectando el pop togolés al mundo.',
      'Ao lado do ícone King Mensah, o Toofan conquistou prêmios MTV Africa e Kora levando seu som ao mundo.',
      'حصد ثنائي توفان جوائز إم تي في أفريقيا وكورا وأسهم مع كينغ منساه في نشر الموسيقى الحديثة.'
    ),
  }),
  mkQ({
    id: 'cur_TG_21',
    countryCode: 'TG',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'felix_couchoro_lesclave_1929_sami_tchak',
    source: 'Littérature africaine — 1929 à nos jours',
    prompt: L(
      'Publié dès 1929 sous le titre « L’Esclave » (l’un des tout premiers romans africains d’expression française de l’histoire), à quel écrivain pionnier né à Ouidah et installé au Togo dès 1939 doit-on ce jalon littéraire ?',
      'Published in 1929 as "L’Esclave" (one of the very first French-language African novels in history), which pioneer settled in Togo in 1939 wrote this milestone work?',
      'Publicado en 1929 bajo el título «L’Esclave» (una de las primeras novelas africanas en francés), ¿qué pionero radicado en Togo escribió este hito?',
      'Publicado em 1929 com o título "L’Esclave" (um dos primeiros romances africanos em francês), qual pioneiro radicado no Togo escreveu esse marco?',
      'نُشرت عام 1929 بعنوان «العبد» كواحدة من أوائل الروايات الأفريقية بالفرنسية، من هو الكاتب الرائد الذي استقر في توغو وألف هذا العمل التاريخي؟'
    ),
    correct: L('Félix Couchoro', 'Félix Couchoro', 'Félix Couchoro', 'Félix Couchoro', 'فيليكس كوشورو'),
    distractors: [
      L('Léopold Sédar Senghor', 'Léopold Sédar Senghor', 'Léopold Sédar Senghor', 'Léopold Sédar Senghor', 'ليوبولد سيدار سنغور'),
      L('Wole Soyinka', 'Wole Soyinka', 'Wole Soyinka', 'Wole Soyinka', 'وولي سوينكا'),
      L('Chinua Achebe', 'Chinua Achebe', 'Chinua Achebe', 'Chinua Achebe', 'تشينوا أتشيبي'),
    ],
    explanation: L(
      'Précurseur du roman-feuilleton dans « Togo-Presse » à Aného et Lomé, Félix Couchoro ouvrit une lignée brillante poursuivie par Kossi Efoui, Sami Tchak et Kangni Alem.',
      'Pioneer of newspaper serial novels in Lomé and Aného, Félix Couchoro paved the way for Grand Prix winners Sami Tchak, Kossi Efoui, and Kangni Alem.',
      'Precursor de la novela por entregas en Lomé y Aného, abrió camino a autores premiados como Sami Tchak y Kossi Efoui.',
      'Pioneiro do folhetim em Lomé e Aného, abriu caminho para autores premiados como Sami Tchak, Kossi Efoui e Kangni Alem.',
      'مهد فيليكس كوشورو الطريق لجيل مرموق من الأدباء مثل سامي تشاك وكوسي إيفوي وكانغني أليم.'
    ),
  }),
  mkQ({
    id: 'cur_TG_22',
    countryCode: 'TG',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 3,
    topicKey: 'gadao_adossa_sokode_tem',
    source: 'Patrimoine culturel Tem — Sokodé (Région Centrale)',
    prompt: L(
      'À Sokodé (Région Centrale), quelle spectaculaire fête traditionnelle du peuple Tem (Kotokoli) marie célébration des récoltes, cavalcades royales et la fameuse « danse des couteaux » ?',
      'In Sokodé (Centrale Region), which dramatic annual Tem (Kotokoli) festival unites harvest thanksgiving, royal horsemanship, and the famed "Knife Dance"?',
      'En Sokodé (Región Central), ¿qué espectacular fiesta tradicional tem (kotokoli) combina cosecha, cabalgatas y la célebre «danza de los cuchillos»?',
      'Em Sokodé (Região Central), qual espetacular festa tradicional tem (kotokoli) une colheita, cavalgadas e a famosa "dança das facas"?',
      'في سوكوديه بالمنطقة الوسطى، ما المهرجان التراثي المثير لشعب تيم (كوتوكولي) الذي يجمع حصاد المحاصيل و«رقصة السكاكين» الشهيرة؟'
    ),
    correct: L('Gadao-Adossa', 'Gadao–Adossa', 'Gadao-Adossa', 'Gadao-Adossa', 'مهرجان غاداو – أدوسا'),
    distractors: [
      L('La Corrida de Séville', 'Seville Bullfight', 'Corrida de Sevilla', 'Tourada de Sevilha', 'مصارعة الثيران'),
      L('Le Bal des Débutantes', 'Debutante Ball', 'Baile de Debutantes', 'Baile de Debutantes', 'حفلة الراقصات'),
      L('La Fête de la Bière de Munich', 'Munich Oktoberfest', 'Oktoberfest', 'Oktoberfest', 'أكتوبرفست'),
    ],
    explanation: L(
      'Pendant Adossa, les danseurs exécutent des chorégraphies acrobatiques avec des lames sans se blesser, témoignant de la maîtrise spirituelle et culturelle des Kotokoli.',
      'During Adossa in Sokodé, dancers perform astounding blade choreography to traditional drums, symbolizing spiritual protection and community pride.',
      'Durante Adossa en Sokodé, los bailarines ejecutan coreografías espectaculares simbolizando coraje y unidad.',
      'Durante Adossa em Sokodé, dançarinos executam coreografias impressionantes simbolizando coragem e união.',
      'يجسد مهرجان غاداو أدوسا في سوكوديه براعة استعراضية مبهرة واعتزازاً بالتراث.'
    ),
  }),
  mkQ({
    id: 'cur_TG_23',
    countryCode: 'TG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 1,
    topicKey: 'eperviers_world_cup_2006_debut',
    source: 'FIFA World Cup 2006 & FTF',
    prompt: L(
      'Quel est le surnom officiel des joueurs de l’équipe nationale de football du Togo, qualifiés historiquement pour la Coupe du monde FIFA 2006 en Allemagne ?',
      'What is the official nickname of Togo’s national football team, who famously qualified for the 2006 FIFA World Cup in Germany?',
      '¿Cuál es el apodo oficial de la selección de fútbol de Togo, clasificada históricamente para el Mundial de Alemania 2006?',
      'Qual é o apelido oficial da seleção de futebol do Togo, classificada historicamente para a Copa do Mundo de 2006?',
      'ما اللقب الرسمي لمنتخب توغو لكرة القدم الذي تأهل تاريخياً إلى كأس العالم 2006 في ألمانيا؟'
    ),
    countryModePrompt: L(
      'Sous quel célèbre surnom d’oiseau rapace évolue l’équipe nationale de football qui a participé à la Coupe du monde 2006 en Allemagne ?',
      'Under which famous bird-of-prey nickname does the national football team that competed at the 2006 FIFA World Cup play?',
      '¿Con qué apodo de ave rapaz compite la selección nacional de fútbol que jugó el Mundial de Alemania 2006?',
      'Com qual apelido de ave de rapina joga a seleção nacional que disputou a Copa do Mundo de 2006?',
      'بأي لقب لطائر جارح يلعب المنتخب الوطني الذي شارك في كأس العالم 2006 بألمانيا؟'
    ),
    correct: L('Les Éperviers', 'The Sparrowhawks (Les Éperviers)', 'Los Gavilanes', 'Os Gaviões (Éperviers)', 'الصقور (Les Éperviers)'),
    distractors: [
      L('Les Colibris dorés', 'Golden Hummingbirds', 'Los Colibríes', 'Os Beija-flores', 'طيور الطنان'),
      L('Les Flamants bleus', 'Blue Flamingos', 'Los Flamencos', 'Os Flamingos', 'طيور الفلامنغو'),
      L('Les Manchots royaux', 'King Penguins', 'Los Pingüinos', 'Os Pinguins', 'البطاريق'),
    ],
    explanation: L(
      'Dirigés alors par le regretté Stephen Keshi (avec Emmanuel Adebayor et Kossi Agassa), les Éperviers ont réalisé en 2005–2006 l’une des plus belles surprises des éliminatoires africains.',
      'Guided by coach Stephen Keshi and stars like Emmanuel Adebayor and Kossi Agassa, Les Éperviers topped Senegal in qualifying for Germany 2006.',
      'Dirigidos por Stephen Keshi con Emmanuel Adebayor y Kossi Agassa, superaron a Senegal camino al Mundial 2006.',
      'Comandados por Stephen Keshi, com Adebayor e Kossi Agassa, superaram o Senegal rumo à Copa de 2006.',
      'بقيادة المدرب ستيفن كيشي وإيمانويل أديبايور، حقق الصقور مفاجأة كبرى بتأهلهم لمونديال 2006.'
    ),
  }),
  mkQ({
    id: 'cur_TG_24',
    countryCode: 'TG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'mohamed_kader_first_world_cup_goal_2006',
    source: 'FIFA World Cup Germany 2006 — Francfort (13 juin 2006)',
    prompt: L(
      'Quel attaquant des Éperviers a inscrit à Francfort contre la Corée du Sud (13 juin 2006) le tout premier but de l’histoire du pays en Coupe du monde FIFA ?',
      'Which Sparrowhawks forward scored in Frankfurt against South Korea (June 13, 2006) to record the nation’s very first FIFA World Cup goal in history?',
      '¿Qué delantero de los Gavilanes marcó en Fráncfort ante Corea del Sur el primer gol en la historia del país en un Mundial FIFA?',
      'Qual atacante dos Gaviões marcou em Frankfurt contra a Coreia do Sul o primeiro gol da história do país em uma Copa do Mundo?',
      'من هو مهاجم منتخب الصقور الذي سجل في فرانكفورت أمام كوريا الجنوبية (13 يونيو 2006) أول هدف في تاريخ البلاد بكأس العالم؟'
    ),
    correct: L('Mohamed Kader Coubadja', 'Mohamed Kader', 'Mohamed Kader', 'Mohamed Kader', 'محمد قادر كوبادجا'),
    distractors: [
      L('Kossi Agassa', 'Kossi Agassa', 'Kossi Agassa', 'Kossi Agassa', 'كوسي أغاسا'),
      L('Jean-Paul Abalo', 'Jean-Paul Abalo', 'Jean-Paul Abalo', 'Jean-Paul Abalo', 'جان بول أبالو'),
      L('Alaixys Romao', 'Alaixys Romao', 'Alaixys Romao', 'Alaixys Romao', 'أليكسيس روماو'),
    ],
    explanation: L(
      'À la 31e minute face à la Corée du Sud, Mohamed Kader déclencha une frappe croisée imparable en lucarne, gravant son nom dans l’histoire sportive nationale.',
      'In the 31st minute against South Korea, Mohamed Kader fired an unforgettable strike into the net to open the nation’s World Cup scoring account.',
      'En el minuto 31 ante Corea del Sur, Mohamed Kader anotó un gol inolvidable que abrió la historia mundialista.',
      'Aos 31 minutos contra a Coreia do Sul, Mohamed Kader acertou um chute histórico na Copa de 2006.',
      'سجل محمد قادر هدفاً لا يُنسى في الدقيقة 31 ليُدخل اسمه سجلات المونديال.'
    ),
  }),
  mkQ({
    id: 'cur_TG_25',
    countryCode: 'TG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'benjamin_boukpeti_olympic_bronze_2008',
    source: 'CIO — Jeux Olympiques de Pékin 2008 (Canoë-kayak slalom)',
    prompt: L(
      'Aux Jeux olympiques de Pékin en 2008, quel kayakiste a offert au Togo (en kayak slalom K1) la toute première médaille olympique de son histoire ?',
      'At the 2008 Beijing Olympic Games, which slalom kayaker won Togo’s very first Olympic medal in history?',
      'En los Juegos Olímpicos de Pekín 2008, ¿qué piragüista logró en eslalon K1 la primera medalla olímpica en la historia de Togo?',
      'Nos Jogos Olímpicos de Pequim 2008, qual canoísta conquistou no slalom K1 a primeira medalha olímpica da história do Togo?',
      'في أولمبياد بكين 2008، من هو بطل التجديف المتعرج الذي أحرز أول ميدالية أولمبية في تاريخ توغو؟'
    ),
    countryModePrompt: L(
      'En août 2008 aux Jeux olympiques de Pékin, quel sportif en canoë-kayak slalom (K1) décrocha le bronze, offrant au pays sa première médaille olympique historique ?',
      'In August 2008 at the Beijing Olympics, which K1 slalom paddler won bronze for the nation’s first-ever Olympic medal?',
      'En agosto de 2008 en Pekín, ¿qué piragüista de eslalon K1 ganó el bronce logrando la primera medalla olímpica nacional?',
      'Em agosto de 2008 em Pequim, qual canoísta de slalom K1 ganhou o bronze pela primeira medalha olímpica do país?',
      'في أغسطس 2008 بأولمبياد بكين، من الرياضي الذي نال البرونزية في التجديف مانحاً البلاد أول ميدالية أولمبية؟'
    ),
    correct: L('Benjamin Boukpeti', 'Benjamin Boukpeti', 'Benjamin Boukpeti', 'Benjamin Boukpeti', 'بنجامين بوكبيتي'),
    distractors: [
      L('Usain Bolt', 'Usain Bolt', 'Usain Bolt', 'Usain Bolt', 'يوسين بولت'),
      L('Tony Estanguet', 'Tony Estanguet', 'Tony Estanguet', 'Tony Estanguet', 'توني إستانغيه'),
      L('Mo Farah', 'Mo Farah', 'Mo Farah', 'Mo Farah', 'مو فرح'),
    ],
    explanation: L(
      'En décrochant le bronze en kayak monoplace (K1) sur le bassin olympique de Shunyi le 12 août 2008, Benjamin Boukpeti a provoqué une immense liesse populaire.',
      'Claiming bronze in men’s K1 slalom on August 12, 2008, Benjamin Boukpeti sparked unforgettable celebrations nationwide.',
      'Su bronce el 12 de agosto de 2008 en Pekín desató una alegría histórica en todo el país.',
      'Seu bronze em 12 de agosto de 2008 em Pequim provocou festa histórica por todo o país.',
      'أحرز بنجامين بوكبيتي برونزية التجديف في 12 أغسطس 2008 وسط فرحة عارمة في البلاد.'
    ),
  }),
  mkQ({
    id: 'cur_TG_26',
    countryCode: 'TG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'askokara_etoile_filante_semassi_clubs',
    source: 'FTF & CAF — Clubs historiques du championnat togolais',
    prompt: L(
      'Quel célèbre club de Lomé (finaliste de la Coupe d’Afrique des clubs champions dès 1968 face au TP Englebert) forme avec ASKO de Kara, Semassi de Sokodé et Dyto l’élite historique du football national ?',
      'Which famous Lomé club—runner-up in the 1968 African Cup of Champions Clubs—forms the traditional elite alongside ASKO de Kara, Semassi Sokodé, and Dyto?',
      '¿Qué célebre club de Lomé —subcampeón continental ya en 1968— integra la élite histórica junto a ASKO de Kara y Semassi?',
      'Qual célebre clube de Lomé —finalista continental já em 1968— compõe a elite histórica ao lado de ASKO de Kara e Semassi?',
      'أي نادٍ عريق في لومي (بلغ نهائي أبطال أفريقيا 1968) يشكل مع أسكو كارا وسيماسي سوكوديه قطب الكرة المحلية؟'
    ),
    correct: L('L’Étoile Filante de Lomé', 'Étoile Filante de Lomé', 'Étoile Filante de Lomé', 'Étoile Filante de Lomé', 'نادي إيتوال فيلانت لومي'),
    distractors: [
      L('Le Hearts of Oak d’Accra', 'Hearts of Oak', 'Hearts of Oak', 'Hearts of Oak', 'هارتس أوف أوك'),
      L('L’AS Vita Club de Kinshasa', 'AS Vita Club', 'AS Vita Club', 'AS Vita Club', 'فيتا كلوب'),
      L('L’Al Ahly du Caire', 'Al Ahly SC', 'Al Ahly', 'Al Ahly', 'الأهلي المصري'),
    ],
    explanation: L(
      'Portée par le légendaire attaquant Kaolo (« Docteur Kaolo »), l’Étoile Filante de Lomé marqua dès 1968 l’histoire du football ouest-africain ; aujourd’hui ASKO de Kara règne sur les titres récents.',
      'Powered by legendary striker Kaolo in 1968, Étoile Filante inspired domestic clubs like Semassi de Sokodé and multi-champion ASKO de Kara.',
      'Con la leyenda «Doctor Kaolo» en 1968, Étoile Filante inspiró a clubes como Semassi y el dominador ASKO de Kara.',
      'Liderado por "Doutor Kaolo" em 1968, inspirou potências locais como o Semassi e o multicampeão ASKO de Kara.',
      'تألق إيتوال فيلانت بقيادة النجم الأسطوري كاولو عام 1968 فيما يهيمن أسكو كارا على الألقاب الحديثة.'
    ),
  }),
  mkQ({
    id: 'cur_TG_27',
    countryCode: 'TG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'afcon_2013_quarterfinal_kossi_agassa',
    source: 'CAF — CAN 2013 en Afrique du Sud',
    prompt: L(
      'Emmenés par Emmanuel Adebayor, Kossi Agassa et Alaixys Romao en 2013 en Afrique du Sud, quel stade historique de la CAN les Éperviers atteignirent-ils pour la première fois ?',
      'Led by Emmanuel Adebayor, Kossi Agassa, and Alaixys Romao at AFCON 2013 in South Africa, what historic round did the Sparrowhawks reach for the very first time?',
      'Liderados por Adebayor, Kossi Agassa y Alaixys Romao en la CAN 2013, ¿qué ronda histórica alcanzaron por primera vez?',
      'Liderados por Adebayor, Kossi Agassa e Alaixys Romao na CAN 2013, qual fase histórica alcançaram pela primeira vez?',
      'في أمم أفريقيا 2013 بجنوب أفريقيا بقيادة أديبايور وكوسي أغاسا وروماو، أي دور تاريخي بلغه الصقور لأول مرة؟'
    ),
    correct: L('Les quarts de finale de la CAN 2013', 'The 2013 AFCON quarter-finals', 'Los cuartos de final de la CAN 2013', 'As quartas de final da CAN 2013', 'ربع نهائي كأس أمم أفريقيا 2013'),
    distractors: [
      L('La finale olympique de hockey', 'Olympic hockey final', 'Final olímpica de hockey', 'Final olímpica de hóquei', 'نهائي الهوكي الأولمبي'),
      L('La Coupe d’Europe des Nations', 'UEFA European Championship', 'Eurocopa', 'Eurocopa', 'بطولة أمم أوروبا'),
      L('La Copa América', 'Copa América', 'Copa América', 'Copa América', 'كوبا أمريكا'),
    ],
    explanation: L(
      'Après une victoire éclatante 2-0 sur l’Algérie et un nul décisif 1-1 face à la Tunisie (but de Serge Gakpé), les Éperviers disputèrent leur premier quart de finale continental.',
      'Beating Algeria 2–0 and drawing Tunisia 1–1 in Nelspruit earned the squad a memorable maiden AFCON quarter-final appearance.',
      'Tras vencer 2-0 a Argelia y empatar con Túnez, disputaron sus primeros cuartos de final continentales.',
      'Após vencer a Argélia por 2 a 0 e empatar com a Tunísia, disputaram suas primeiras quartas de final na CAN.',
      'بعد الفوز على الجزائر 2-0 والتعادل مع تونس تأهل الصقور إلى ربع النهائي القاري لأول مرة.'
    ),
  }),
  mkQ({
    id: 'cur_TG_28',
    countryCode: 'TG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'kodjo_fodoh_laba_djene_dakonam',
    source: 'AFC Champions League 2024 & La Liga',
    prompt: L(
      'Formé à l’Anges de Notsé puis passé par la RS Berkane (Maroc), quel redoutable attaquant des Éperviers a remporté la Ligue des champions asiatique 2024 avec Al Ain FC après avoir été plusieurs fois meilleur buteur du championnat émirati ?',
      'Developed at Anges de Notsé and RS Berkane, which prolific Sparrowhawks striker won the 2024 AFC Champions League with Al Ain FC after repeated UAE Pro League Golden Boots?',
      'Formado en Anges de Notsé y RS Berkane, ¿qué goleador ganó la Champions asiática 2024 con Al Ain tras brillar como pichichi en Emiratos?',
      'Formado no Anges de Notsé e RS Berkane, qual artilheiro venceu a Liga dos Campeões da Ásia de 2024 pelo Al Ain após ser goleador nos Emirados?',
      'ما المهاجم الهداف المتوج بدوري أبطال آسيا 2024 مع نادي العين الإماراتي بعد تألقه هدافاً للدوري الإماراتي؟'
    ),
    correct: L('Kodjo Fo-Doh Laba', 'Kodjo Fo-Doh Laba', 'Kodjo Fo-Doh Laba', 'Kodjo Fo-Doh Laba', 'كودجو فودوه لابا'),
    distractors: [
      L('Karim Benzema', 'Karim Benzema', 'Karim Benzema', 'Karim Benzema', 'كريم بنزيمة'),
      L('Bafétimbi Gomis', 'Bafétimbi Gomis', 'Bafétimbi Gomis', 'Bafétimbi Gomis', 'بافيتيمبي غوميس'),
      L('Odion Ighalo', 'Odion Ighalo', 'Odion Ighalo', 'Odion Ighalo', 'أوديون إيغالو'),
    ],
    explanation: L(
      'Avec le capitaine et défenseur de Getafe Djéné Dakonam, Kodjo Fo-Doh Laba compte parmi les fers de lance contemporains du football togolais.',
      'Alongside longtime Getafe captain Djéné Dakonam, Kodjo Fo-Doh Laba carries the banner of modern national football.',
      'Junto al capitán del Getafe Djéné Dakonam, encabeza la generación contemporánea del fútbol nacional.',
      'Ao lado do capitão do Getafe Djéné Dakonam, lidera a geração atual do futebol nacional.',
      'يشكل لابا مع قائد خيتافي دجيني داكونام أبرز نجوم الجيل الحالي.'
    ),
  }),
  mkQ({
    id: 'cur_TG_29',
    countryCode: 'TG',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'kpalime_wome_kpime_chateau_vial',
    source: 'Tourisme & Environnement — Plateaux (Kloto)',
    prompt: L(
      'Quelle ville verte nichée au pied des montagnes du Kloto (à 120 km au nord-ouest de Lomé) est la capitale nationale de l’artisanat (batik, sculpture sur bois), du café-cacao et des cascades de Womé et Kpimé ?',
      'Which lush green town nestled in the Kloto mountains 120 km northwest of Lomé is famous for batik crafts, coffee/cocoa hills, and the Womé and Kpimé waterfalls?',
      '¿Qué ciudad verde al pie de las montañas de Kloto es famosa por su artesanía batik, su café-cacao y las cascadas de Womé y Kpimé?',
      'Qual cidade verde ao pé das montanhas de Kloto é famosa pelo artesanato batik, café-cacau e pelas cachoeiras de Womé e Kpimé?',
      'ما المدينة الخضراء عند سفوح جبال كلوتو الشهيرة بحرف الباتيك والبن والكاكاو وشلالات وومي وكبيمي؟'
    ),
    correct: L('Kpalimé', 'Kpalimé', 'Kpalimé', 'Kpalimé', 'كباليمي'),
    distractors: [
      L('Dapaong', 'Dapaong', 'Dapaong', 'Dapaong', 'داباونغ'),
      L('Tsévié', 'Tsévié', 'Tsévié', 'Tsévié', 'تسيفيي'),
      L('Mango', 'Mango', 'Mango', 'Mango', 'مانغو'),
    ],
    explanation: L(
      'Entourée de papillons tropicaux colorés (près de Kouma-Konda) et dominée par le Mont Agou et le Château Vial, Kpalimé offre un climat frais toute l’année.',
      'Surrounded by rainforests teeming with rare butterflies around Kouma-Konda, Kpalimé is the scenic heart of the Plateaux region.',
      'Rodeada de bosques ricos en mariposas cerca de Kouma-Konda, es el corazón turístico de la región de Plateaux.',
      'Cercada por florestas ricas em borboletas raras em Kouma-Konda, é o coração turístico de Plateaux.',
      'تحيط بكباليمي غابات غنية بالفراشات النادرة وتتمتع بمناخ معتدل منعش.'
    ),
  }),
  mkQ({
    id: 'cur_TG_30',
    countryCode: 'TG',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'oti_river_dapaong_kara_cities',
    source: 'Hydrographie du Nord — Savanes & Kara',
    prompt: L(
      'Quel grand affluent de la Volta traverse les plaines des Savanes à l’extrême nord (près de Sansanné-Mango et du parc d’Oti-Kéran) avant de rejoindre le Ghana ?',
      'Which major tributary of the Volta flows across the northern Savanes plains past Sansanné-Mango before crossing into Ghana?',
      '¿Qué gran afluente del Volta atraviesa las llanuras de Sabanas por Sansanné-Mango antes de entrar en Ghana?',
      'Qual grande afluente do Volta atravessa as planícies de Savanas por Sansanné-Mango antes de entrar em Gana?',
      'ما الرافد الكبير لنهر فولتا الذي يعبر سهول السافانا في أقصى الشمال مروراً بسانساني مانغو قبل دخوله غانا؟'
    ),
    correct: L('La Rivière Oti (Pendjari en amont)', 'The Oti River (Pendjari)', 'El Río Oti (Pendjari)', 'O Rio Oti (Pendjari)', 'نهر أوتي (بندجاري)'),
    distractors: [
      L('Le Fleuve Congo', 'Congo River', 'Río Congo', 'Rio Congo', 'نهر الكونغو'),
      L('Le Fleuve Zambèze', 'Zambezi River', 'Río Zambeze', 'Rio Zambeze', 'نهر زامبيزي'),
      L('Le Fleuve Niger', 'Niger River', 'Río Níger', 'Rio Níger', 'نهر النيجر'),
    ],
    explanation: L(
      'Prenant sa source dans l’Atacora sous le nom de Pendjari, l’Oti traverse le nord du Togo sur environ 250 km en irriguant la plaine des Savanes.',
      'Rising as the Pendjari in the Atakora range, the Oti meanders through the northern Savanes region around Sansanné-Mango.',
      'Nacido como Pendjari en el Atacora, el Oti serpentea por la llanura septentrional junto a Sansanné-Mango.',
      'Nascido como Pendjari no Atakora, o Oti serpenteia pela planície setentrional junto a Sansanné-Mango.',
      'ينبع باسم بندجاري في سلسلة أتاكورا ويروي سهول إقليم السافانا في أقصى الشمال.'
    ),
  }),
  mkQ({
    id: 'cur_TG_31',
    countryCode: 'TG',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'flag_five_stripes_paul_ahy_design',
    source: 'Archives nationales — Paul Ahyi (1960)',
    prompt: L(
      'Quel célèbre sculpteur, peintre et professeur togolais a dessiné en 1960 le drapeau national aux 5 bandes vert-jaune et à l’étoile blanche dans un carré rouge ?',
      'Which renowned Togolese sculptor, painter, and UNESCO Artist for Peace designed the national flag in 1960?',
      '¿Qué célebre escultor, pintor y profesor togolés diseñó en 1960 la bandera nacional de 5 franjas y estrella blanca?',
      'Qual célebre escultor, pintor e professor togolês desenhou em 1960 a bandeira nacional de 5 faixas e estrela branca?',
      'من هو النحات والرسام التوغولي الشهير (فنان اليونسكو للسلام) الذي صمم العلم الوطني عام 1960؟'
    ),
    countryModePrompt: L(
      'Quel illustre artiste plasticien et sculpteur (également créateur du Monument de l’Indépendance et nommé « Artiste de l’UNESCO pour la paix ») a dessiné le drapeau national en 1960 ?',
      'Which celebrated visual artist and sculptor—UNESCO Artist for Peace—designed the national flag in 1960?',
      '¿Qué ilustre artista plástico y escultor —Artista de la UNESCO por la Paz— diseñó la bandera nacional en 1960?',
      'Qual ilustre artista plástico e escultor —Artista da UNESCO pela Paz— desenhou a bandeira nacional em 1960?',
      'من هو الفنان التشكيلي والنحات الشهير الحائز لقب فنان اليونسكو للسلام الذي صمم العلم الوطني عام 1960؟'
    ),
    correct: L('Paul Ahyi', 'Paul Ahyi', 'Paul Ahyi', 'Paul Ahyi', 'بول آهي'),
    distractors: [
      L('Pablo Picasso', 'Pablo Picasso', 'Pablo Picasso', 'Pablo Picasso', 'بابلو بيكاسو'),
      L('Ousmane Sow', 'Ousmane Sow', 'Ousmane Sow', 'Ousmane Sow', 'عثمان سو'),
      L('El Anatsui', 'El Anatsui', 'El Anatsui', 'El Anatsui', 'إل أناتسوي'),
    ],
    explanation: L(
      'Né à Abomey et figure tutélaire des beaux-arts à Lomé, Paul Ahyi a utilisé le nombre d’or pour équilibrer les cinq bandes symbolisant les cinq régions.',
      'A towering figure of modern West African fine arts, Paul Ahyi used golden-ratio proportions for the 5-region tricolor and white star of hope.',
      'Gran maestro de las artes plásticas, Paul Ahyi aplicó proporciones áureas para equilibrar las cinco franjas regionales.',
      'Grande mestre das artes plásticas, Paul Ahyi aplicou proporções áureas às cinco faixas regionais.',
      'استخدم بول آهي النسبة الذهبية في تصميم العلم الذي ترمز أشرطته الخمسة إلى الأقاليم الخمسة.'
    ),
  }),
  mkQ({
    id: 'cur_TG_32',
    countryCode: 'TG',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 3,
    topicKey: 'tchoukoutou_sodabi_drinks',
    source: 'Savoir-faire brassicole traditionnel — Nord & Sud',
    prompt: L(
      'Dans les régions de la Kara et des Savanes, comment appelle-t-on la boisson traditionnelle légèrement effervescente préparée à base de sorgho rouge germé et fermenté dans de grandes jarres en argile ?',
      'Across the Kara and Savanes regions, what is the traditional mildly fermented beverage brewed from malted red sorghum in clay jars called?',
      'En las regiones de Kara y Sabanas, ¿cómo se llama la bebida tradicional fermentada a base de sorgo rojo germinado?',
      'Nas regiões de Kara e Savanas, como se chama a bebida tradicional fermentada à base de sorgo vermelho germinado?',
      'في إقليمي كارا والسافانا، ما اسم المشروب التقليدي المخمر المصنوع من الذرة الرفيعة الحمراء في جرار فخارية؟'
    ),
    correct: L('Le Tchoukoutou (« Tchouk »)', 'Tchoukoutou ("Tchouk")', 'El Tchoukoutou («Tchouk»)', 'O Tchoukoutou ("Tchouk")', 'مشروب تشوكوتو'),
    distractors: [
      L('Le Champagne de Reims', 'Champagne', 'Champán', 'Champanhe', 'الشمبانيا'),
      L('La Tequila d’agave', 'Tequila', 'Tequila', 'Tequila', 'التيكيلا'),
      L('Le Saké de riz japonais', 'Japanese Sake', 'Sake japonés', 'Saquê japonês', 'الساكي الياباني'),
    ],
    explanation: L(
      'Brassé avec patience par les femmes dans le nord et servi dans des calebasses pendant les fêtes comme Evala, le tchoukoutou incarne convivialité et hospitalité.',
      'Brewed patiently by women artisans in the north and shared from calabashes during Evala and harvest gatherings, tchouk symbolizes hospitality.',
      'Elaborado artesanalmente por mujeres en el norte y servido en calabazas durante fiestas como Evala.',
      'Produzido artesanalmente por mulheres no norte e servido em cabaças nas festas como Evala.',
      'تُعده النساء في الشمال ويُقدَّم في أواني القرع خلال الاحتفالات والمناسبات الاجتماعية.'
    ),
  }),
  mkQ({
    id: 'cur_TG_33',
    countryCode: 'TG',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'national_languages_ewe_kabye',
    source: 'Constitution nationale — Langues nationales',
    prompt: L(
      'Aux côtés du français (langue officielle), quelles sont les deux grandes langues nationales véhiculaires reconnues officiellement à l’échelle du pays (l’une dominante au sud, l’autre au nord) ?',
      'Alongside French (official), which two major national languages hold official national-language status—one dominant in the south, the other in the north?',
      'Junto al francés (oficial), ¿cuáles son las dos principales lenguas nacionales reconocidas (una en el sur y otra en el norte)?',
      'Ao lado do francês (oficial), quais são as duas principais línguas nacionais reconhecidas (uma no sul e outra no norte)?',
      'إلى جانب الفرنسية، ما اللغتان الوطنيتان الرئيسيتان المعترف بهما رسمياً (واحدة في الجنوب والأخرى في الشمال)؟'
    ),
    correct: L('L’éwé et le kabyè', 'Éwé and Kabiyè (Kabye)', 'El ewé y el kabiyé', 'O ewé e o kabiyé', 'لغة الإيوي ولغة الكابييه'),
    distractors: [
      L('Le zoulou et le xhosa', 'Zulu and Xhosa', 'Zulú y xhosa', 'Zulu e xhosa', 'الزولو والكوسا'),
      L('Le berbère et l’arabe hassaniya', 'Berber and Hassaniya', 'Bereber y hasanía', 'Berbere e hassania', 'الأمازيغية والحسانية'),
      L('Le shona et le ndébélé', 'Shona and Ndebele', 'Shona y ndebele', 'Shona e ndebele', 'الشونا والندبيلي'),
    ],
    explanation: L(
      'Déclarées langues nationales dès 1975, l’éwé (et le mina proche) au sud et le kabyè au nord accompagnent plus de quarante autres langues comme le tem (kotokoli) et le moba.',
      'Designated national languages in 1975, Éwé (south) and Kabye (north) coexist alongside Tem, Moba, and dozens of vibrant local tongues.',
      'Declaradas lenguas nacionales en 1975, el ewé y el kabiyé conviven con decenas de idiomas locales como el tem y el moba.',
      'Declaradas línguas nacionais em 1975, o ewé e o kabiyé convivem com dezenas de línguas locais.',
      'تُعد الإيوي في الجنوب والكابييه في الشمال اللغتين الوطنيتين الرئيسيتين منذ عام 1975.'
    ),
  }),
  mkQ({
    id: 'cur_TG_34',
    countryCode: 'TG',
    category: 'culture',
    subCategory: 'sciences_innovations',
    difficulty: 3,
    topicKey: 'woe_lab_ewaste_3d_printer_afate',
    source: 'Innovation technologique — WoeLab Lomé (2013)',
    prompt: L(
      'Comment s’appelle le célèbre FabLab citoyen de Lomé qui a surpris le monde technologique dès 2013 en fabriquant la toute première imprimante 3D (« W.Afate ») entièrement assemblée à partir de déchets électroniques recyclés ?',
      'What is the name of the famed Lomé community FabLab that drew global tech praise in 2013 for building the world’s first 3D printer ("W.Afate") from recycled e-waste?',
      '¿Cómo se llama el célebre FabLab ciudadano de Lomé que sorprendió al mundo en 2013 al construir la impresora 3D «W.Afate» con chatarra electrónica?',
      'Como se chama o célebre FabLab cidadão de Lomé que surpreendeu o mundo em 2013 ao criar a impressora 3D "W.Afate" com lixo eletrônico?',
      'ما اسم مختبر الابتكار المجتمعي في لومي الذي أبهر العالم عام 2013 بصناعة أول طابعة ثلاثية الأبعاد (W.Afate) من المخلفات الإلكترونية؟'
    ),
    correct: L('WoeLab', 'WoeLab', 'WoeLab', 'WoeLab', 'مختبر وولاب (WoeLab)'),
    distractors: [
      L('CERN de Genève', 'CERN Geneva', 'CERN', 'CERN', 'سيرن جنيف'),
      L('Fermilab de Chicago', 'Fermilab', 'Fermilab', 'Fermilab', 'فيرميلاب'),
      L('MIT Media Lab', 'MIT Media Lab', 'MIT Media Lab', 'MIT Media Lab', 'مختبر إم آي تي'),
    ],
    explanation: L(
      'Fondé par l’architecte Sénamé Koffi Agbodjinou avec l’inventeur Kodjo Afate Gnikou, WoeLab a remporté un grand prix au Salon Maker Faire / NASA et fait rayonner l’innovation africaine frugale.',
      'Founded by Sénamé Koffi Agbodjinou where Afate Gnikou built W.Afate from old PC scanners and motors, WoeLab earned international awards.',
      'Fundado por Sénamé Koffi Agbodjinou, donde Afate Gnikou creó W.Afate con viejos escáneres, ganó premios internacionales.',
      'Fundado por Sénamé Koffi Agbodjinou, onde Afate Gnikou criou a W.Afate com peças recicladas, venceu prêmios globais.',
      'حصد مختبر وولاب جوائز عالمية بعد ابتكار كودجو أفاتي غنيكو طابعة ثلاثية الأبعاد من قطع حواسيب معاد تدويرها.'
    ),
  }),
  mkQ({
    id: 'cur_TG_35',
    countryCode: 'TG',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 3,
    topicKey: 'djenkoume_gboma_dessi_dishes',
    source: 'Gastronomie rituelle & populaire — Sud-Togo',
    prompt: L(
      'Quel délicieux mets festif du sud, proche de l’Amiwo, est préparé avec de la farine de maïs cuite dans une sauce tomate assaisonnée au gingembre et souvent servi lors des cérémonies ou avec du poulet grillé ?',
      'Which beloved festive southern cornmeal dish cooked in seasoned tomato-and-ginger sauce is traditionally served during ceremonies and alongside grilled chicken?',
      '¿Qué delicioso plato festivo del sur se prepara con harina de maíz cocida en salsa de tomate y jengibre con pollo asado?',
      'Qual delicioso prato festivo do sul é preparado com farinha de milho cozida em molho de tomate e gengibre com frango grelhado?',
      'ما الطبق الاحتفالي الشهي في الجنوب المحضّر من دقيق الذرة المطهو مع صلصة الطماطم والزنجبيل والدجاج المشوي؟'
    ),
    correct: L('Le Djenkoumé', 'Djenkoumé', 'El Djenkoumé', 'O Djenkoumé', 'طبق دجينكومي'),
    distractors: [
      L('Le Risotto milanais', 'Risotto alla Milanese', 'Risotto milanés', 'Risoto à milanesa', 'الريزوتو'),
      L('Le Couscous aux sept légumes', 'Seven-vegetable couscous', 'Cuscús de siete verduras', 'Cuscuz de legumes', 'الكسكس'),
      L('La Polenta aux cèpes', 'Mushroom polenta', 'Polenta con setas', 'Polenta com cogumelos', 'البولينتا'),
    ],
    explanation: L(
      'Sa couleur rouge-orangée vibrante et son goût relevé font du Djenkoumé (souvent accompagné d’épinards Gboma dessi ou de viande braisée) un fleuron culinaire.',
      'Recognizable by its rich red-orange hue and warm ginger spice, Djenkoumé pairs wonderfully with braised chicken or Gboma dessi spinach.',
      'Inconfundible por su tono rojizo y toque de jengibre, el Djenkoumé acompaña carnes a la brasa y Gboma dessi.',
      'Reconhecível pela cor alaranjada e toque de gengibre, o Djenkoumé brilha com frango grelhado ou espinafre Gboma.',
      'يتميز الدجينكومي بلونه الأحمر المائل للبرتقالي ونكهته الغنية بالزنجبيل والتوابل.'
    ),
  }),
  mkQ({
    id: 'cur_TG_36',
    countryCode: 'TG',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'fosse_aux_lions_dapaong_nanergou',
    source: 'Patrimoine rupestre & réserves — Savanes (Dapaong)',
    prompt: L(
      'Dans la région des Savanes près de Dapaong, quelles anciennes grottes naturelles perchées dans les falaises de grès (Mamproug / Nano) servaient autrefois de refuges inexpugnables et abritent des greniers et peintures rupestres ?',
      'Near Dapaong in the Savanes region, which dramatic cliff-face sandstone caves (Mamproug and Nano) once served as secure refuges and hold ancient granaries and rock art?',
      'Cerca de Dapaong en Sabanas, ¿qué cuevas en acantilados de arenisca (Mamproug y Nano) sirvieron de refugio y conservan antiguos graneros?',
      'Perto de Dapaong em Savanas, quais cavernas em paredões de arenito (Mamproug e Nano) serviram de refúgio e guardam antigos celeiros?',
      'قرب داباونغ في إقليم السافانا، ما المغارات الجبلية الصخرية (مامبروغ ونانو) التي استخدمت ملاذاً آمناً وتحتضن رسوماً صخرية وصوامع قديمة؟'
    ),
    correct: L('Les Grottes de Nok et Mamproug', 'The Caves of Nok and Mamproug', 'Las Cuevas de Nok y Mamproug', 'As Cavernas de Nok e Mamproug', 'مغارات نوك ومامبروغ'),
    distractors: [
      L('Les Grottes de Lascaux', 'Lascaux Caves', 'Cuevas de Lascaux', 'Cavernas de Lascaux', 'كهوف لاسكو'),
      L('Les Catacombes de Rome', 'Catacombs of Rome', 'Catacumbas de Roma', 'Catacumbas de Roma', 'سراديب روما'),
      L('Les Grottes d’Altamira', 'Altamira Cave', 'Cueva de Altamira', 'Caverna de Altamira', 'كهف ألتاميرا'),
    ],
    explanation: L(
      'Accessibles par d’étroites corniches rocheuses au-dessus de la plaine des Savanes, les grottes de Nok et Mamproug conservent encore de vieux greniers en terre suspendus sous la voûte.',
      'Perched high along sheer sandstone cliffs overlooking the Savanes plain, the Nok and Mamproug caves preserve centuries-old clay granaries.',
      'Suspendidas sobre la llanura de Sabanas, las cuevas de Nok y Mamproug conservan antiguos graneros de adobe.',
      'Suspensas sobre a planície de Savanas, as cavernas de Nok e Mamproug preservam antigos celeiros de barro.',
      'تحتفظ مغارات نوك ومامبروغ المعلقة في الجرف الصخري بصوامع حبوب طينية تعود لقرون.'
    ),
  }),
  mkQ({
    id: 'cur_TG_37',
    countryCode: 'TG',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 4,
    topicKey: 'tafi_kpessi_mlapa_togoville_1884',
    source: 'Archives historiques — Traité de Togoville (1884)',
    prompt: L(
      'Quel souverain de Togoville signa le 5 juillet 1884 un traité de protectorat avec l’explorateur allemand Gustav Nachtigal à Baguida, donnant naissance au Togoland ?',
      'Which ruler of Togoville signed a protectorate treaty on July 5, 1884 with German envoy Gustav Nachtigal, giving rise to Togoland?',
      '¿Qué soberano de Togoville firmó el 5 de julio de 1884 un tratado con el enviado alemán Gustav Nachtigal, origen del Togoland?',
      'Qual soberano de Togoville assinou em 5 de julho de 1884 um tratado com o enviado alemão Gustav Nachtigal, originando a Togolândia?',
      'من هو حاكم توغوفيل الذي وقع في 5 يوليو 1884 معاهدة مع المبعوث الألماني غوستاف ناشتيغال؟'
    ),
    correct: L('Le Roi Mlapa III', 'King Mlapa III', 'El Rey Mlapa III', 'O Rei Mlapa III', 'الملك ملابا الثالث'),
    distractors: [
      L('Le Roi Lobengula', 'King Lobengula', 'El Rey Lobengula', 'O Rei Lobengula', 'الملك لوبينغولا'),
      L('Le Roi Moshoeshoe Ier', 'King Moshoeshoe I', 'El Rey Moshoeshoe I', 'O Rei Moshoeshoe I', 'الملك موشويشوي الأول'),
      L('Le Roi Mwanga II', 'Kabaka Mwanga II', 'Kabaka Mwanga II', 'Kabaka Mwanga II', 'الملك موانغا الثاني'),
    ],
    explanation: L(
      'Conservé dans l’histoire diplomatique de Togoville au bord du lac Togo, le nom de la lignée Mlapa demeure honoré aujourd’hui encore dans la cité royale.',
      'Recorded in the diplomatic history of Togoville beside Lake Togo, the royal Mlapa lineage remains honored in the historic town today.',
      'Recordado en la historia de Togoville junto al lago Togo, el linaje real Mlapa sigue siendo honrado hoy.',
      'Registrado na história de Togoville junto ao lago Togo, o clã real Mlapa continua reverenciado até hoje.',
      'تظل سلالة الملك ملابا مكرمة في مدينة توغوفيل التاريخية المطلة على البحيرة.'
    ),
  }),
  mkQ({
    id: 'cur_TG_38',
    countryCode: 'TG',
    category: 'culture',
    subCategory: 'anecdotes_insolites',
    difficulty: 3,
    topicKey: 'zemidjan_motorcycle_taxis_lome',
    source: 'Vie urbaine et sociologie — Lomé & Villes côtières',
    prompt: L(
      'Comment appelle-t-on affectueusement les célèbres motos-taxis jaunes qui sillonnent les rues (mot issu du fon/mina signifiant « emmène-moi vite ! ») ?',
      'What affectionate name—derived from local languages meaning "take me quickly!"—is used for the iconic motorcycle taxis weaving through city streets?',
      '¿Qué apodo cariñoso —que significa «¡llévame rápido!»— reciben las populares mototaxis urbanas?',
      'Qual apelido carinhoso —que significa "me leve rápido!"— recebem os populares mototáxis urbanos?',
      'ما اللقب الشعبي الظريف (الذي يعني «خذني بسرعة!») الذي يُطلق على سيارات الأجرة النارية في المدن؟'
    ),
    correct: L('Les Zémidjans (« Zém »)', 'Zémidjans ("Zém")', 'Los Zémidjans («Zém»)', 'Os Zémidjans ("Zém")', 'زيميدجان («زيم»)'),
    distractors: [
      L('Les Gondoles vénitiennes', 'Venetian Gondolas', 'Góndolas', 'Gôndolas', 'الجندول'),
      L('Les Cable Cars de San Francisco', 'Cable Cars', 'Tranvías de cable', 'Bondinhos', 'التلفريك'),
      L('Les Pousse-pousse de Kyoto', 'Kyoto Rickshaws', 'Rickshaws', 'Riquixás', 'عربات الريكشو'),
    ],
    explanation: L(
      'Partagé avec le Bénin voisin et appelé « Oléyia » dans certaines zones ou « Zém » à Lomé et Cotonou, ce transport rapide et malin symbolise l’ingéniosité urbaine.',
      'Shared culturally with neighboring Benin ("Zém" or "Oléyia"), motorcycle taxis embody fast, resourceful everyday urban mobility.',
      'Compartidas culturalmente con el vecino Benín, simbolizan el ingenio y dinamismo de la movilidad urbana.',
      'Partilhados culturalmente com o vizinho Benim, simbolizam a agilidade e engenhosidade urbana.',
      'تجسد دراجات زيميدجان النشاط والمرونة اليومية في التنقل الحضري المشترك مع بنين.'
    ),
  }),
  mkQ({
    id: 'cur_TG_39',
    countryCode: 'TG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'bachirou_salou_jean_paul_abalo_bundesliga',
    source: 'FTF — Pionniers européens des Éperviers',
    prompt: L(
      'Dans les années 1990, quel attaquant rapide né à Lomé fit les beaux jours de la Bundesliga allemande (Mönchengladbach, Duisbourg, Dortmund, Eintracht Francfort) et du club d’Agaza Lomé ?',
      'In the 1990s, which speedy Lomé-born striker starred in the German Bundesliga for Mönchengladbach, Duisburg, Dortmund, and Eintracht Frankfurt?',
      'En los años 90, ¿qué veloz delantero nacido en Lomé brilló en la Bundesliga alemana con Mönchengladbach, Duisburgo y Dortmund?',
      'Nos anos 1990, qual veloz atacante nascido em Lomé brilhou na Bundesliga alemã por Mönchengladbach, Duisburg e Dortmund?',
      'في التسعينيات، من هو المهاجم السريع المولود في لومي الذي تألق في الدوري الألماني مع مونشنغلادباخ ودورتموند وفرانكفورت؟'
    ),
    correct: L('Bachirou Salou', 'Bachirou Salou', 'Bachirou Salou', 'Bachirou Salou', 'باشيرو سالو'),
    distractors: [
      L('Tony Yeboah', 'Tony Yeboah', 'Tony Yeboah', 'Tony Yeboah', 'توني ييبواه'),
      L('Jonathan Akpoborie', 'Jonathan Akpoborie', 'Jonathan Akpoborie', 'Jonathan Akpoborie', 'جوناثان أكبوبوري'),
      L('Souleymane Sané', 'Souleymane Sané', 'Souleymane Sané', 'Souleymane Sané', 'سليمان ساني'),
    ],
    explanation: L(
      'Révélé à l’Agaza Lomé et frère du regretté attaquant Tadjou Salou, Bachirou Salou inscrivit plus de 50 buts en Bundesliga et ouvrit la voie aux internationaux en Allemagne.',
      'Starting at Agaza Lomé alongside his late brother Tadjou Salou, Bachirou Salou netted over 50 Bundesliga goals and pioneered German club paths.',
      'Formado en el Agaza Lomé junto a su hermano Tadjou Salou, superó los 50 goles en la Bundesliga.',
      'Revelado no Agaza Lomé com seu irmão Tadjou Salou, marcou mais de 50 gols na Bundesliga.',
      'تألق باشيرو سالو بأكثر من 50 هدفاً في الدوري الألماني وفتح الطريق أمام المحترفين.'
    ),
  }),
  mkQ({
    id: 'cur_TG_40',
    countryCode: 'TG',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 3,
    topicKey: 'fosse_phosphate_hahotoe_kpalime',
    source: 'Industrie minière — Région Maritime (Hahotoé)',
    prompt: L(
      'Quel minerai précieux utilisé dans la fabrication des engrais agricoles est extrait depuis 1961 dans les grands gisements côtiers de Hahotoé et Kpogamé et acheminé au wharf de Kpémé ?',
      'Which vital mineral used to manufacture agricultural fertilizers has been mined since 1961 at Hahotoé and Kpogamé and exported via Kpémé?',
      '¿Qué valioso mineral empleado para fertilizantes agrícolas se extrae desde 1961 en Hahotoé y Kpogamé hacia Kpémé?',
      'Qual valioso minério usado em fertilizantes agrícolas é extraído desde 1961 em Hahotoé e Kpogamé até Kpémé?',
      'ما المعدن الحيوي لصناعة الأسمدة الزراعية الذي يُستخرج منذ 1961 من مناجم هاهوتوي وكبوغامي ويُصدّر عبر كبيمي؟'
    ),
    correct: L('Le phosphate naturel', 'Natural rock phosphate', 'Fosfato natural', 'Fosfato natural', 'الفوسفات الطبيعي'),
    distractors: [
      L('L’amiante bleue', 'Blue asbestos', 'Amianto azul', 'Amianto azul', 'الأسبستوس'),
      L('Le charbon anthracite', 'Anthracite coal', 'Carbón antracita', 'Carvão antracito', 'الفحم الحجري'),
      L('L’opale noire marine', 'Black marine opal', 'Ópalo negro', 'Opala negra', 'الأوبال الأسود'),
    ],
    explanation: L(
      'Surnommé « l’or gris » de la Région Maritime, le phosphate de Hahotoé et Kpogamé figure depuis plus de soixante ans parmi les principaux piliers d’exportation minière du pays.',
      'Long nicknamed "gray gold" in the Maritime Region, rock phosphate from Hahotoé and Kpémé has anchored mineral exports for over six decades.',
      'Apodado «oro gris», el fosfato de Hahotoé y Kpémé sostiene las exportaciones mineras desde hace más de seis décadas.',
      'Apelidado de "ouro cinza", o fosfato de Hahotoé e Kpémé sustenta as exportações minerais há mais de seis décadas.',
      'يُلقب الفوسفات بـ«الذهب الرمادي» ويمثل منذ أكثر من ستين عاماً إحدى ركائز الصادرات التعدينية.'
    ),
  }),
  mkQ({
    id: 'cur_TG_41',
    countryCode: 'TG',
    category: 'culture',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'fete_tissu_pagne_kloto_batik',
    source: 'Patrimoine artistique — Kloto & Lomé',
    prompt: L(
      'Quel célèbre art pictural à la cire chaude et aux teintures végétales vives sur toile de coton constitue la grande spécialité des artisans du Centre artisanal de Kloto (Kpalimé) ?',
      'Which vibrant hot-wax resist dyeing art on cotton cloth is a flagship specialty of the renowned artisans’ center in Kloto (Kpalimé)?',
      '¿Qué arte pictórico con cera caliente y tintes vivos sobre algodón es la especialidad del centro artesanal de Kloto (Kpalimé)?',
      'Qual arte têxtil com cera quente e corantes vivos em algodão é a marca registrada do centro artesanal de Kloto (Kpalimé)?',
      'ما الفن النسيجي الشهير باستخدام الشمع الساخن والأصباغ الزاهية على القطن في مركز الحرف بكلوتو (كباليمي)؟'
    ),
    correct: L('Le Batik d’art', 'Artistic Batik', 'Batik artístico', 'Batik artístico', 'فن الباتيك اليدوي'),
    distractors: [
      L('Le Vitrail gothique au plomb', 'Gothic leaded stained glass', 'Vitral gótico', 'Vitral gótico', 'الزجاج المعشق'),
      L('La Laque chinoise gravée', 'Carved Chinese lacquer', 'Laca china', 'Laca chinesa', 'الورنيش الصيني'),
      L('La Mosaïque byzantine en or', 'Byzantine gold mosaic', 'Mosaico bizantino', 'Mosaico bizantino', 'الفسيفساء البيزنطية'),
    ],
    explanation: L(
      'À Kpalimé, les maîtres batikeurs superposent jusqu’à cinq bains de couleur sur des scènes de marché, musiciens et paysages tropicaux protégés par la cire fondue.',
      'In Kpalimé, master artists layer multiple wax-resist dye baths to craft luminous portraits of daily markets, wildlife, and music.',
      'En Kpalimé, los maestros aplican varios baños sucesivos sobre cera para crear escenas coloridas de gran belleza.',
      'Em Kpalimé, mestres aplicam sucessivos banhos de cor com cera para criar quadros vibrantes da vida local.',
      'يبدع حرفيو كباليمي لوحات باتيك زاهية باستخدام طبقات متعاقبة من الشمع والأصباغ.'
    ),
  }),
  mkQ({
    id: 'cur_TG_42',
    countryCode: 'TG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'stade_de_kegue_maracana_togo',
    source: 'FTF — Enceinte nationale de Lomé',
    prompt: L(
      'Comment s’appelle le grand stade national de 25 000 à 30 000 places situé dans un quartier nord de Lomé, théâtre des grands matchs des Éperviers depuis 2000 ?',
      'What is the name of the major 25,000–30,000-seat national stadium in northern Lomé that has hosted the Sparrowhawks’ home fixtures since 2000?',
      '¿Cómo se llama el gran estadio nacional de Lomé que alberga los grandes partidos de la selección desde el año 2000?',
      'Como se chama o grande estádio nacional de Lomé que recebe os jogos dos Gaviões desde o ano 2000?',
      'ما اسم الملعب الوطني الكبير في شمال لومي الذي يستضيف مباريات منتخب الصقور منذ عام 2000؟'
    ),
    correct: L('Le Stade de Kégué', 'Stade de Kégué', 'Estadio de Kégué', 'Estádio de Kégué', 'ملعب كيغي (Stade de Kégué)'),
    distractors: [
      L('Le Stade du 4-Août', 'Stade du 4-Août', 'Estadio 4 de Agosto', 'Estádio 4 de Agosto', 'ملعب 4 أغسطس'),
      L('Le Stade de l’Amitié de Kouhounou', 'Stade de l’Amitié', 'Estadio de la Amistad', 'Estádio da Amizade', 'ملعب الصداقة'),
      L('Le Stade Baba Yara', 'Baba Yara Stadium', 'Estadio Baba Yara', 'Estádio Baba Yara', 'ملعب بابا يارا'),
    ],
    explanation: L(
      'C’est notamment sur la pelouse de Kégué (inauguré en 2000) que les Éperviers ont construit leur qualification mémorable au Mondial 2006.',
      'Opened in 2000, Stade de Kégué witnessed the unforgettable home victories that propelled the Sparrowhawks to the 2006 World Cup.',
      'Inaugurado en 2000, el estadio de Kégué fue el fortín de la inolvidable clasificación para el Mundial 2006.',
      'Inaugurado em 2000, o estádio de Kégué foi o palco das vitórias que levaram o país à Copa de 2006.',
      'شهد ملعب كيغي منذ افتتاحه عام 2000 الانتصارات التاريخية التي قادت المنتخب إلى مونديال 2006.'
    ),
  }),
];

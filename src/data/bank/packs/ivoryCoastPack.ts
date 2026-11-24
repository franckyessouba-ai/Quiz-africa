import { L } from '../../countriesPart1';
import { mkQ } from './packHelpers';

export const IVORY_COAST_CURATED_PACK = [
  mkQ({
    id: 'cur_CI_01',
    countryCode: 'CI',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 1,
    topicKey: 'basilique_yamoussoukro',
    source: 'Patrimoine architectural — Yamoussoukro (1990)',
    prompt: L(
      'Quel monumental édifice religieux consacré en 1990 à Yamoussoukro est reconnu comme le plus grand édifice chrétien du monde par sa superficie ?',
      'Which monumental religious edifice consecrated in 1990 in Yamoussoukro ranks as the largest Christian church building in the world?',
      '¿Qué monumental edificio religioso consagrado en 1990 en Yamusukro es el templo cristiano más grande del mundo?',
      'Qual monumental edifício religioso consagrado em 1990 em Yamoussoukro é a maior igreja cristã do mundo?',
      'ما الصرح الديني الضخم المكرّس عام 1990 في ياموسوكرو ويُعد أكبر كنيسة مسيحية في العالم؟'
    ),
    correct: L('La Basilique Notre-Dame-de-la-Paix', 'Basilica of Our Lady of Peace', 'Basílica de Nuestra Señora de la Paz', 'Basílica de Nossa Senhora da Paz', 'كنيسة سيدة السلام'),
    distractors: [
      L('La Sagrada Família', 'Sagrada Família', 'Sagrada Familia', 'Sagrada Família', 'ساغرادا فاميليا'),
      L('La Cathédrale de Reims', 'Reims Cathedral', 'Catedral de Reims', 'Catedral de Reims', 'كاتدرائية ريمس'),
      L('Le Duomo de Milan', 'Milan Cathedral', 'Duomo de Milán', 'Duomo de Milão', 'كاتدرائية ميلانو'),
    ],
    explanation: L(
      'Inspirée par Saint-Pierre de Rome et surmontée d’une croix culminant à 158 mètres, la basilique s’étend sur 30 000 m² de marbre et de vitraux.',
      'Inspired by St. Peter’s in Rome, its dome and cross soar 158 meters above Yamoussoukro.',
      'Inspirada en San Pedro de Roma, su cúpula alcanza 158 metros de altura en Yamusukro.',
      'Inspirada em São Pedro de Roma, sua cúpula atinge 158 metros de altura em Yamoussoukro.',
      'مستوحاة من كاتدرائية القديس بطرس بروما وتعلو قبتها إلى 158 متراً.'
    ),
  }),
  mkQ({
    id: 'cur_CI_02',
    countryCode: 'CI',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'abidjan_perle_des_lagunes',
    source: 'Géographie urbaine — District autonome d’Abidjan',
    prompt: L(
      'Autour de quelle vaste lagune s’étend Abidjan, surnommée « la Perle des lagunes », avec son quartier d’affaires du Plateau relié par cinq ponts ?',
      'Along which vast coastal lagoon does Abidjan—nicknamed "Pearl of the Lagoons"—stretch with its Plateau financial district?',
      '¿En torno a qué gran laguna costera se extiende Abiyán, apodada «la Perla de las lagunas»?',
      'Em torno de qual vasta laguna costeira estende-se Abidjan, apelidada de "Pérola das lagunas"?',
      'حول أي بحيرة ساحلية واسعة تمتد مدينة أبيدجان الملقبة بـ«لؤلؤة البحيرات»؟'
    ),
    correct: L('La Lagune Ébrié', 'Ébrié Lagoon', 'Laguna Ébrié', 'Lagoa Ébrié', 'بحيرة إيبرييه'),
    distractors: [
      L('Le Lac Tanganyika', 'Lake Tanganyika', 'Lago Tanganica', 'Lago Tanganica', 'بحيرة تنجانيقا'),
      L('Le Lac Victoria', 'Lake Victoria', 'Lago Victoria', 'Lago Vitória', 'بحيرة فيكتوريا'),
      L('La Lagune de Venise', 'Venetian Lagoon', 'Laguna de Venecia', 'Lagoa de Veneza', 'بحيرة البندقية'),
    ],
    explanation: L(
      'Bordée par les communes de Cocody, Plateau, Treichville, Marcory et Yopougon, la lagune Ébrié structure la vie économique et maritime d’Abidjan.',
      'Connecting Cocody, Plateau, Treichville, and Marcory, Ébrié Lagoon shapes Abidjan’s skyline and major Atlantic port.',
      'Rodeada por Plateau, Cocody y Treichville, la laguna Ébrié vertebra la vida y el gran puerto de Abiyán.',
      'Cercada por Plateau, Cocody e Treichville, a lagoa Ébrié estrutura a metrópole e o porto de Abidjan.',
      'تحيط ببحيرة إيبرييه أحياء أبيدجان الكبرى وتشكل قلب نشاطها الاقتصادي والمينائي.'
    ),
  }),
  mkQ({
    id: 'cur_CI_03',
    countryCode: 'CI',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'parc_tai_chimpanzees_unesco',
    source: 'UNESCO — Parc national de Taï',
    prompt: L(
      'Quel vaste parc national de l’ouest du pays (classé à l’UNESCO) préserve la plus grande forêt tropicale primaire d’Afrique de l’Ouest et abrite l’hippopotame pygmée ?',
      'Which UNESCO-listed national park in the west preserves West Africa’s largest primary rainforest and shelters the rare pygmy hippopotamus?',
      '¿Qué parque nacional del oeste (Patrimonio de la UNESCO) protege el mayor bosque primario de África Occidental y al hipopótamo pigmeo?',
      'Qual parque nacional do oeste (Patrimônio da UNESCO) protege a maior floresta primária da África Ocidental e o hipopótamo-pigmeu?',
      'ما المتنزه الوطني في غرب البلاد المدرج لدى اليونسكو الذي يحمي أكبر غابة استوائية بكر في غرب أفريقيا وفرس النهر القزم؟'
    ),
    correct: L('Le Parc national de Taï', 'Taï National Park', 'Parque Nacional de Taï', 'Parque Nacional de Taï', 'متنزه تاي الوطني'),
    distractors: [
      L('Le Parc du Serengeti', 'Serengeti Park', 'Parque Serengeti', 'Parque Serengeti', 'متنزه سيرينغيتي'),
      L('Le Parc d’Etosha', 'Etosha Park', 'Parque Etosha', 'Parque Etosha', 'متنزه إيتوشا'),
      L('Le Parc du Banc d’Arguin', 'Banc d’Arguin Park', 'Parque Banc d’Arguin', 'Parque Banc d’Arguin', 'بانك دارغين'),
    ],
    explanation: L(
      'Les chimpanzés du parc de Taï sont célèbres chez les scientifiques pour casser des noix de panda à l’aide de pierres transmises comme outils.',
      'Taï’s wild chimpanzees are world-famous among researchers for teaching young how to crack hard nuts with stone hammers.',
      'Los chimpancés de Taï son célebres por usar piedras como herramientas para partir nueces duras.',
      'Os chimpanzés de Taï são célebres por usar pedras como ferramentas para quebrar nozes.',
      'تشتهر قرود الشمبانزي في متنزه تاي باستخدام الأحجار أدواتٍ لكسر الثمار الصلبة.'
    ),
  }),
  mkQ({
    id: 'cur_CI_04',
    countryCode: 'CI',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'man_cascades_pont_lianes',
    source: 'Géographie du Tonkpi — Ouest montagneux',
    prompt: L(
      'Quelle grande ville de l’ouest montagneux (région du Tonkpi), surnommée la « ville aux 18 montagnes », est célèbre pour ses cascades et ses ponts traditionnels en lianes ?',
      'Which major city in the mountainous west (Tonkpi region), nicknamed the "city of 18 mountains," is famous for waterfalls and traditional liana vine bridges?',
      '¿Qué ciudad del oeste montañoso (Tonkpi), apodada «la ciudad de las 18 montañas», es célebre por sus cascadas y puentes de lianas?',
      'Qual cidade do oeste montanhoso (Tonkpi), apelidada de "cidade das 18 montanhas", é famosa por suas cachoeiras e pontes de cipós?',
      'ما المدينة الكبرى في الغرب الجبلي الملقبة بـ«مدينة الجبال الثمانية عشر» والشهيرة بشلالاتها وجسورها المعلقة؟'
    ),
    correct: L('Man', 'Man', 'Man', 'Man', 'مان'),
    distractors: [
      L('Korhogo', 'Korhogo', 'Korhogo', 'Korhogo', 'كورهوغو'),
      L('Bouaké', 'Bouaké', 'Bouaké', 'Bouaké', 'بواكي'),
      L('Daloa', 'Daloa', 'Daloa', 'Daloa', 'دالوا'),
    ],
    explanation: L(
      'Dominée par la Dent de Man (881 m) près des monts Nimba, la région offre les cascades naturelles et les célèbres ponts de lianes de Lieupleu.',
      'Overlooked by the Dent de Man peak, the region is renowned for its lush waterfalls and sacred hand-woven vine bridges like Lieupleu.',
      'Dominada por el pico Dent de Man, la región destaca por sus cascadas y los puentes de lianas de Lieupleu.',
      'Dominada pelo pico Dent de Man, a região destaca-se pelas cachoeiras e pontes de cipós de Lieupleu.',
      'تطل عليها قمة «دانت دي مان» وتشتهر بشلالاتها وجسورها المنسوجة تقليدياً من النباتات المتسلقة.'
    ),
  }),
  mkQ({
    id: 'cur_CI_05',
    countryCode: 'CI',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'grand_bassam_unesco_capital',
    source: 'UNESCO — Ville historique de Grand-Bassam (2012)',
    prompt: L(
      'Quelle ville côtière située à l’est d’Abidjan, inscrite à l’UNESCO depuis 2012, fut la toute première capitale coloniale (1893–1900) avant Bingerville ?',
      'Which coastal town east of Abidjan, inscribed by UNESCO in 2012, served as the very first colonial capital (1893–1900) before Bingerville?',
      '¿Qué ciudad costera al este de Abiyán, Patrimonio de la UNESCO desde 2012, fue la primera capital colonial (1893-1900)?',
      'Qual cidade costeira a leste de Abidjan, Patrimônio da UNESCO desde 2012, foi a primeira capital colonial (1893-1900)?',
      'ما المدينة الساحلية شرق أبيدجان المدرجة لدى اليونسكو منذ 2012 والتي كانت أول عاصمة استعمارية (1893-1900)؟'
    ),
    correct: L('Grand-Bassam', 'Grand-Bassam', 'Grand-Bassam', 'Grand-Bassam', 'غران بسام'),
    distractors: [
      L('Odienné', 'Odienné', 'Odienné', 'Odienné', 'أوديني'),
      L('Gagnoa', 'Gagnoa', 'Gagnoa', 'Gagnoa', 'غاغنوا'),
      L('Boundiali', 'Boundiali', 'Boundiali', 'Boundiali', 'بونديالي'),
    ],
    explanation: L(
      'Grand-Bassam abrite le Musée national du Costume, des bâtisses historiques du quartier France et accueille chaque automne la fête n’zima de l’Abissa.',
      'Home to the National Museum of Costume, Grand-Bassam preserves historic 19th-century architecture and hosts the annual Abissa festival.',
      'Sede del Museo Nacional del Traje, Grand-Bassam acoge además cada otoño el festival tradicional Abissa.',
      'Sede do Museu Nacional do Traje, Grand-Bassam recebe também todo outono o festival tradicional Abissa.',
      'تحتضن غران بسام متحف الأزياء الوطني ومعالم تاريخية ومهرجان أبيسا السنوي.'
    ),
  }),
  mkQ({
    id: 'cur_CI_06',
    countryCode: 'CI',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 1,
    topicKey: 'world_cocoa_cashew_leader',
    source: 'ICCO & FAO — Économie agricole ivoirienne',
    prompt: L(
      'De quelle précieuse fève la Côte d’Ivoire est-elle de loin le premier pays producteur mondial (environ 40 % de la récolte de la planète), exportée notamment par Abidjan et San-Pédro ?',
      'Of which valuable tropical crop is Côte d’Ivoire by far the world’s top producer (roughly 40% of global output), shipped mainly via Abidjan and San-Pédro?',
      '¿De qué valioso cultivo es Costa de Marfil con diferencia el primer productor mundial (alrededor del 40 % global)?',
      'De qual valiosa cultura a Costa do Marfim é de longe o maior produtor mundial (cerca de 40% do total global)?',
      'ما المحصول الثمين الذي تتصدر ساحل العاج إنتاجه عالمياً بفارق كبير (نحو 40% من الإنتاج العالمي)؟'
    ),
    countryModePrompt: L(
      'De quel « or brun » agricole, cultivé de Daloa à Soubré et expédié par les ports d’Abidjan et San-Pédro, le pays assure-t-il près de 40 % de la production mondiale ?',
      'Of which "brown gold" cash crop shipped through Abidjan and San-Pédro does the country supply roughly 40% of world production?',
      '¿De qué «oro marrón» agrícola exportado por Abiyán y San-Pédro aporta el país cerca del 40 % mundial?',
      'De qual "ouro marrom" agrícola exportado por Abidjan e San-Pédro o país fornece cerca de 40% do total mundial?',
      'ما المحصول الزراعي الملقب بـ«الذهب البني» الذي توفر منه البلاد نحو 40% من الإنتاج العالمي؟'
    ),
    correct: L('Le cacao', 'Cocoa beans', 'El cacao', 'O cacau', 'الكاكاو'),
    distractors: [
      L('Le houblon', 'Hops', 'Lúpulo', 'Lúpulo', 'الجنجل'),
      L('Le seigle boréal', 'Rye grain', 'Centeno', 'Centeio', 'الجاودار'),
      L('La betterave à sucre', 'Sugar beet', 'Remolacha azucarera', 'Beterraba', 'بنجر السكر'),
    ],
    explanation: L(
      'Premier producteur mondial de cacao et également premier exportateur de noix de cajou brutes (anacarde), l’agriculture reste un moteur clé de l’économie.',
      'Along with ranking #1 worldwide in cocoa, the nation also leads global raw cashew nut production.',
      'Además de liderar el cacao mundial, el país encabeza la producción global de anacardo crudo.',
      'Além de liderar o cacau mundial, o país também é o maior produtor global de castanha de caju bruta.',
      'إلى جانب صدارة الكاكاو عالمياً، تتصدر البلاد أيضاً إنتاج الكاجو الخام.'
    ),
  }),
  mkQ({
    id: 'cur_CI_07',
    countryCode: 'CI',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'parc_comoe_nord_est',
    source: 'UNESCO — Parc national de la Comoé',
    prompt: L(
      'Quel immense parc de savane et forêt du nord-est du pays (11 500 km², le plus grand parc protégé d’Afrique de l’Ouest) porte le nom d’un fleuve majeur de 1 160 km ?',
      'Which vast northeastern savanna-and-forest park (11,500 sq km—West Africa’s largest protected park) shares its name with a 1,160-km river?',
      '¿Qué inmenso parque del noreste (11 500 km², el mayor de África Occidental) comparte nombre con un gran río?',
      'Qual imenso parque do nordeste (11.500 km², o maior da África Ocidental) leva o nome de um grande rio?',
      'ما المتنزه الشاسع شمال شرق البلاد (أكبر محمية في غرب أفريقيا) الذي يحمل اسم نهر كبير؟'
    ),
    correct: L('Le Parc national de la Comoé', 'Comoé National Park', 'Parque Nacional de Comoé', 'Parque Nacional do Comoé', 'متنزه كوموي الوطني'),
    distractors: [
      L('Le Parc de Tsavo', 'Tsavo Park', 'Parque Tsavo', 'Parque Tsavo', 'متنزه تسافو'),
      L('Le Parc d’Odzala', 'Odzala Park', 'Parque Odzala', 'Parque Odzala', 'متنزه أودزالا'),
      L('Le Parc du Waza', 'Waza Park', 'Parque Waza', 'Parque Waza', 'متنزه وازا'),
    ],
    explanation: L(
      'Classé à l’UNESCO, le parc de la Comoé abrite une diversité exceptionnelle d’antilopes, de lions, d’éléphants et d’oiseaux tropicaux.',
      'A UNESCO World Heritage reserve, Comoé protects savanna wildlife, hippos, and gallery forests along the Comoé River.',
      'Patrimonio de la UNESCO, Comoé alberga una extraordinaria diversidad de antílopes, hipopótamos y aves.',
      'Patrimônio da UNESCO, o Comoé protege uma diversidade extraordinária de antílopes, hipopótamos e aves.',
      'يُعد متنزه كوموي موقعاً عالمياً لليونسكو يحمي تنوعاً هائلاً من الحيوانات في شمال شرق البلاد.'
    ),
  }),
  mkQ({
    id: 'cur_CI_08',
    countryCode: 'CI',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'lac_kossou_sassandra_rivers',
    source: 'Hydrographie — Barrage et lac de Kossou',
    prompt: L(
      'Comment s’appelle le plus grand lac artificiel du pays, formé sur le Bandama Blanc par le barrage hydroélectrique inauguré au centre en 1972 ?',
      'What is the largest man-made lake in the country, created on the White Bandama by a major hydroelectric dam completed in 1972?',
      '¿Cómo se llama el mayor lago artificial del país, formado sobre el río Bandama Blanco por una gran presa de 1972?',
      'Como se chama o maior lago artificial do país, formado no rio Bandama Branco por uma barragem de 1972?',
      'ما اسم أكبر بحيرة اصطناعية في البلاد نشأت على نهر بانداما الأبيض بسدّ كهرومائي عام 1972؟'
    ),
    correct: L('Le Lac de Kossou', 'Lake Kossou', 'Lago de Kossou', 'Lago de Kossou', 'بحيرة كوسو'),
    distractors: [
      L('Le Lac Kariba', 'Lake Kariba', 'Lago Kariba', 'Lago Kariba', 'بحيرة كاريبا'),
      L('Le Lac Nasser', 'Lake Nasser', 'Lago Nasser', 'Lago Nasser', 'بحيرة ناصر'),
      L('Le Lac Volta', 'Lake Volta', 'Lago Volta', 'Lago Volta', 'بحيرة فولتا'),
    ],
    explanation: L(
      'Long d’environ 150 km près de Yamoussoukro et Bouaflé, le lac de Kossou fournit une part importante de l’hydroélectricité et de la pêche en eau douce.',
      'Stretching ~150 km near Yamoussoukro, Lake Kossou supports hydroelectric power generation and inland fisheries.',
      'Con unos 150 km de largo cerca de Yamusukro, el lago de Kossou genera energía hidroeléctrica y pesca.',
      'Com cerca de 150 km perto de Yamoussoukro, o lago de Kossou gera hidreletricidade e pesca.',
      'تمتد بحيرة كوسو لنحو 150 كم قرب ياموسوكرو وتُسهم في توليد الكهرباء وصيد الأسماك.'
    ),
  }),
  mkQ({
    id: 'cur_CI_09',
    countryCode: 'CI',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 1,
    topicKey: 'independence_aug7_1960',
    source: 'Archives nationales — 7 août 1960',
    prompt: L(
      'À quelle date précise la Côte d’Ivoire a-t-elle proclamé son indépendance en 1960 ?',
      'On what exact date in 1960 did Côte d’Ivoire proclaim its independence?',
      '¿En qué fecha exacta de 1960 proclamó Costa de Marfil su independencia?',
      'Em que data exata de 1960 a Costa do Marfim proclamou sua independência?',
      'في أي تاريخ بالضبط من عام 1960 أعلنت ساحل العاج استقلالها؟'
    ),
    countryModePrompt: L(
      'Quelle date exacte d’août 1960 marque la proclamation de l’indépendance et la Fête nationale ?',
      'Which exact day in August 1960 marks Independence Day and the national holiday?',
      '¿Qué día exacto de agosto de 1960 marca la proclamación de la independencia?',
      'Que dia exato de agosto de 1960 marca a proclamação da independência?',
      'أي يوم محدد في أغسطس 1960 يوافق إعلان الاستقلال والعيد الوطني؟'
    ),
    correct: L('Le 7 août 1960', 'August 7, 1960', '7 de agosto de 1960', '7 de agosto de 1960', '7 أغسطس 1960'),
    distractors: [
      L('Le 4 avril 1960', 'April 4, 1960', '4 de abril de 1960', '4 de abril de 1960', '4 أبريل 1960'),
      L('Le 30 juin 1960', 'June 30, 1960', '30 de junio de 1960', '30 de junho de 1960', '30 يونيو 1960'),
      L('Le 1er janvier 1960', 'January 1, 1960', '1 de enero de 1960', '1 de janeiro de 1960', '1 يناير 1960'),
    ],
    explanation: L(
      'Proclamée le 7 août 1960 par Félix Houphouët-Boigny, l’indépendance est célébrée chaque année sous les couleurs orange, blanc et vert.',
      'Proclaimed on August 7, 1960 by Félix Houphouët-Boigny, Independence Day is celebrated across all districts.',
      'Proclamada el 7 de agosto de 1960, la independencia se celebra cada año en todo el país.',
      'Proclamada em 7 de agosto de 1960, a independência é celebrada todo ano em todo o país.',
      'أُعلن الاستقلال في 7 أغسطس 1960 بقيادة الرئيس المؤسس فيليكس هوفويت بواني.'
    ),
  }),
  mkQ({
    id: 'cur_CI_10',
    countryCode: 'CI',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 3,
    topicKey: 'women_march_grand_bassam_1949',
    source: 'Histoire contemporaine — Décembre 1949',
    prompt: L(
      'Quel événement héroïque d’émancipation réunit entre 2 000 et 4 000 femmes marchant sur la prison de Grand-Bassam en décembre 1949 pour exiger la libération de dirigeants politiques ?',
      'Which landmark 1949 protest saw 2,000 to 4,000 women march to the prison of Grand-Bassam to demand the release of jailed anti-colonial leaders?',
      '¿Qué histórica protesta de diciembre de 1949 reunió a miles de mujeres marchando hacia la prisión de Grand-Bassam?',
      'Qual histórico protesto de dezembro de 1949 reuniu milhares de mulheres marchando até a prisão de Grand-Bassam?',
      'ما المسيرة التاريخية في ديسمبر 1949 التي قادت فيها آلاف النساء احتجاجاً أمام سجن غران بسام للمطالبة بالإفراج عن المعتقلين؟'
    ),
    correct: L('La Marche des femmes sur Grand-Bassam (1949)', 'The Women’s March on Grand-Bassam (1949)', 'La Marcha de las Mujeres sobre Grand-Bassam (1949)', 'A Marcha das Mulheres sobre Grand-Bassam (1949)', 'مسيرة النساء نحو غران بسام (1949)'),
    distractors: [
      L('Les Accords d’Évian', 'Évian Accords', 'Acuerdos de Évian', 'Acordos de Évian', 'اتفاقيات إيفيان'),
      L('La Conférence de Berlin', 'Berlin Conference', 'Conferencia de Berlín', 'Conferência de Berlim', 'مؤتمر برلين'),
      L('La Bataille d’Adoua', 'Battle of Adwa', 'Batalla de Adua', 'Batalha de Adwa', 'معركة عدوة'),
    ],
    explanation: L(
      'Menée notamment par Marie Koré, Anne-Marie Raggi et Odette Yacé, la marche de 1949 reste l’un des plus beaux chapitres de la lutte civique africaine.',
      'Led by figures like Marie Koré and Anne-Marie Raggi, the December 1949 march proved decisive in West Africa’s anti-colonial mobilization.',
      'Encabezada por Marie Koré y Anne-Marie Raggi, la marcha de 1949 fue decisiva en la lucha cívica anticolonial.',
      'Liderada por Marie Koré e Anne-Marie Raggi, a marcha de 1949 foi decisiva na mobilização cívica.',
      'قاد هذه المسيرة نساء رائدات مثل ماري كوري وآن ماري راجي للمطالبة بالحرية والعدالة.'
    ),
  }),
  mkQ({
    id: 'cur_CI_11',
    countryCode: 'CI',
    category: 'history',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'sudanese_mosques_kong_unesco',
    source: 'UNESCO — Mosquées de style soudanais du nord (2021)',
    prompt: L(
      'Inscrites au patrimoine mondial de l’UNESCO en 2021, quelles célèbres constructions en terre crue à contreforts et poutres saillantes se dressent à Kong, Tengrela, Kouto et Samatiguila ?',
      'Added to the UNESCO World Heritage List in 2021, which famed earthen monuments with wooden buttresses stand in Kong, Tengrela, Kouto, and Samatiguila?',
      'Inscritas en la UNESCO en 2021, ¿qué célebres edificios de barro con vigas salientes se alzan en Kong, Tengrela y Kouto?',
      'Inscritas na UNESCO em 2021, quais célebres construções de terra batida com vigas salientes erguem-se em Kong e Tengrela?',
      'ما المعالم الترابية التاريخية المدرجة لدى اليونسكو عام 2021 في كونغ وتنغريلا وكوتو؟'
    ),
    correct: L('Les mosquées de style soudanais du nord', 'Sudanese-style mosques of the north', 'Las mezquitas de estilo sudanés del norte', 'As mesquitas de estilo sudanês do norte', 'المساجد ذات الطراز السوداني في الشمال'),
    distractors: [
      L('Les pyramides à degrés en granit', 'Granite step pyramids', 'Pirámides escalonadas de granito', 'Pirâmides de granito', 'أهرامات الجرانيت'),
      L('Les phares maritimes du XVIIIe siècle', '18th-century sea lighthouses', 'Faros marítimos', 'Faróis marítimos', 'المنارات البحرية'),
      L('Les châteaux forts médiévaux européens', 'Medieval stone castles', 'Castillos medievales', 'Castelos medievais', 'القلاع الأوروبية'),
    ],
    explanation: L(
      'Huit mosquées historiques bâties entre le XVIIe et le XIXe siècle le long des anciennes routes caravanières transsahariennes témoignent du rayonnement intellectuel de Kong.',
      'Eight centuries-old earthen mosques along old caravan corridors showcase an iconic West African architectural tradition.',
      'Ocho mezquitas centenarias de adobe reflejan una arquitectura transahariana única.',
      'Oito mesquitas seculares em adobe preservam uma tradição arquitetônica transaariana única.',
      'تُجسد هذه المساجد الثمانية التراث المعماري الإسلامي الصحراوي العريق في شمال البلاد.'
    ),
  }),
  mkQ({
    id: 'cur_CI_12',
    countryCode: 'CI',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'flag_colors_orange_white_green',
    source: 'Constitution nationale — Symboles de l’État',
    prompt: L(
      'Dans le drapeau tricolore orange, blanc et vert adopté en décembre 1959, que représentent respectivement les bandes orange et verte ?',
      'On the orange, white, and green tricolor flag adopted in December 1959, what do the orange and green stripes represent?',
      'En la bandera naranja, blanca y verde adoptada en 1959, ¿qué representan las franjas naranja y verde?',
      'Na bandeira laranja, branca e verde adotada em 1959, o que representam as faixas laranja e verde?',
      'في العلم ثلاثي الألوان (البرتقالي والأبيض والأخضر) المعتمد عام 1959، إلامَ يرمز اللونان البرتقالي والأخضر؟'
    ),
    correct: L('La savane fertile du nord (orange) et la forêt d’espérance du sud (vert)', 'Northern savanna & rich soil (orange) and southern forest & hope (green)', 'La sabana del norte (naranja) y el bosque del sur (verde)', 'A savana do norte (laranja) e a floresta do sul (verde)', 'سافانا الشمال الخصبة (البرتقالي) وغابات الجنوب والأمل (الأخضر)'),
    distractors: [
      L('Les volcans neigeux et la mer Rouge', 'Snowy volcanoes and the Red Sea', 'Volcanes nevados y mar Rojo', 'Vulcões nevados e mar Vermelho', 'البراكين الثلجية والبحر الأحمر'),
      L('L’industrie nucléaire et la banquise', 'Nuclear industry and polar ice', 'Industria nuclear y banquisa', 'Indústria nuclear e gelo polar', 'الجليد القطبي والطاقة النووية'),
      L('Les cinq continents olympiques', 'Five Olympic continents', 'Cinco continentes olímpicos', 'Cinco continentes olímpicos', 'القارات الأولمبية الخمس'),
    ],
    explanation: L(
      'Le blanc central symbolise la paix et l’union pure entre les régions du nord (orange) et celles du sud forestier (vert), avec la devise « Union – Discipline – Travail ».',
      'The central white stripe symbolizes peace uniting the northern savanna (orange) and southern rainforests (green), alongside the motto "Union, Discipline, Work."',
      'La franja blanca central simboliza la paz que une el norte de sabana (naranja) y el sur boscoso (verde).',
      'A faixa branca central simboliza a paz que une a savana do norte (laranja) e a floresta do sul (verde).',
      'يرمز الأبيض في الوسط إلى السلام والوحدة بين شمال البلاد (البرتقالي) وجنوبها الغابي (الأخضر).'
    ),
  }),
  mkQ({
    id: 'cur_CI_13',
    countryCode: 'CI',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'bernard_dadie_climbie',
    source: 'Littérature africaine — « Climbié » (1956)',
    prompt: L(
      'Quel pionnier majeur de la littérature et du théâtre ivoiriens, emprisonné en 1949 puis ministre de la Culture, écrivit le classique « Climbié » (1956) et « Le Pagne noir » ?',
      'Which pioneering writer and dramatist—jailed during the 1949 protests and later Minister of Culture—wrote the classic "Climbié" (1956) and "The Black Cloth"?',
      '¿Qué pionero de la literatura nacional, autor de «Climbié» (1956) y «Le Pagne noir», fue ministro de Cultura?',
      'Qual pioneiro da literatura nacional, autor de "Climbié" (1956) e "Le Pagne noir", foi ministro da Cultura?',
      'من هو رائد الأدب والمسرح صاحب الرواية الكلاسيكية «كليمبيه» (1956) و«الرداء الأسود»؟'
    ),
    correct: L('Bernard Binlin Dadié', 'Bernard Binlin Dadié', 'Bernard Binlin Dadié', 'Bernard Binlin Dadié', 'برنار بينلين داديه'),
    distractors: [
      L('Mongo Beti', 'Mongo Beti', 'Mongo Beti', 'Mongo Beti', 'مونغو بيتي'),
      L('Birago Diop', 'Birago Diop', 'Birago Diop', 'Birago Diop', 'بيراغو ديوب'),
      L('Ngũgĩ wa Thiong’o', 'Ngũgĩ wa Thiong’o', 'Ngũgĩ wa Thiong’o', 'Ngũgĩ wa Thiong’o', 'نغوغي وا ثيونغو'),
    ],
    explanation: L(
      'Disparu en 2019 à plus de cent ans, Bernard Dadié a posé les fondations du roman, de la poésie et du théâtre modernes dans le pays.',
      'Living past age 100, Bernard Dadié laid the foundations of modern Ivorian fiction, poetry, and theater.',
      'Con más de un siglo de vida, Bernard Dadié sentó las bases de la literatura moderna del país.',
      'Vivendo além dos 100 anos, Bernard Dadié lançou as bases da literatura moderna nacional.',
      'عاش برنار داديه أكثر من مئة عام وأرسى دعائم الرواية والشعر والمسرح الحديث.'
    ),
  }),
  mkQ({
    id: 'cur_CI_14',
    countryCode: 'CI',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 3,
    topicKey: 'sanwi_krinjabo_bingerville',
    source: 'Histoire des royaumes et capitales (XVIIIe–XXe)',
    prompt: L(
      'Quelle ville au bord de la lagune Ébrié près d’Abidjan fut la deuxième capitale coloniale de 1900 à 1934 (entre Grand-Bassam et Abidjan), célèbre pour son jardin botanique ?',
      'Which town beside Ébrié Lagoon near Abidjan served as the second colonial capital from 1900 to 1934, renowned today for its botanical garden?',
      '¿Qué ciudad junto a la laguna Ébrié fue la segunda capital colonial de 1900 a 1934 antes de Abiyán?',
      'Qual cidade junto à lagoa Ébrié foi a segunda capital colonial de 1900 a 1934 antes de Abidjan?',
      'ما المدينة المطلة على بحيرة إيبرييه التي كانت ثاني عاصمة استعمارية بين 1900 و1934 قبل أبيدجان؟'
    ),
    correct: L('Bingerville', 'Bingerville', 'Bingerville', 'Bingerville', 'بينجرفيل'),
    distractors: [
      L('Séguéla', 'Séguéla', 'Séguéla', 'Séguéla', 'سيغيلا'),
      L('Ferkessédougou', 'Ferkessédougou', 'Ferkessédougou', 'Ferkessédougou', 'فيركيسيدوغو'),
      L('Aboisso', 'Aboisso', 'Aboisso', 'Aboisso', 'أبواسو'),
    ],
    explanation: L(
      'Avant que le siège administratif ne soit transféré à Abidjan en 1934, Bingerville accueillit l’administration et une célèbre école formant des élites ouest-africaines.',
      'Before Abidjan became the administrative capital in 1934, Bingerville hosted the governor’s palace and prominent schools.',
      'Antes del traslado a Abiyán en 1934, Bingerville albergó la sede administrativa y grandes escuelas.',
      'Antes da transferência para Abidjan em 1934, Bingerville abrigou a sede administrativa e escolas históricas.',
      'احتضنت بينجرفيل مقر الإدارة حتى انتقالها إلى أبيدجان عام 1934 وتشتهر بحديقتها النباتية.'
    ),
  }),
  mkQ({
    id: 'cur_CI_15',
    countryCode: 'CI',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 1,
    topicKey: 'alloco_garba_kedjenou_cuisine',
    source: 'Gastronomie populaire ivoirienne',
    prompt: L(
      'Comment appelle-t-on le très populaire plat de bananes plantains mûres coupées en dés, frites dans l’huile dorée et servies avec du piment, des oignons et souvent du poisson grillé ?',
      'What is the hugely popular dish of ripe plantain cubes fried golden and served with spicy pepper, onions, and grilled fish?',
      '¿Cómo se llama el popularísimo plato de plátano macho maduro frito servido con salsa picante y pescado asado?',
      'Como se chama o popularíssimo prato de banana-da-terra madura frita servida com molho apimentado e peixe grelhado?',
      'ما الاسم الشعبي لطبق الموز الجنة الناضج المقلي الذهبي الذي يُقدم مع البصل والفلفل والسمك المشوي؟'
    ),
    correct: L('L’Alloco', 'Alloco', 'El Alloco', 'O Alloco', 'الألوكو'),
    distractors: [
      L('La Choucroute garnie', 'Sauerkraut platter', 'Chucrut', 'Chucrute', 'الملفوف المخلل'),
      L('Les Gnocchis au pesto', 'Pesto gnocchi', 'Ñoquis al pesto', 'Nhoque ao pesto', 'النيوكي'),
      L('La Tartiflette savoyarde', 'Tartiflette', 'Tartiflette', 'Tartiflette', 'تارتيفليت'),
    ],
    explanation: L(
      'Vendu dans tous les maquis et rues d’Abidjan à Bouaké, l’Alloco partage la vedette avec le « Garba » (attiéké + thon frit) et le poulet Kedjenou.',
      'Sold in every bustling maquis across the country, Alloco is a national treasure alongside Garba (attiéké with fried tuna) and Kedjenou stew.',
      'Vendido en todos los maquis del país, el Alloco brilla junto al Garba y al pollo Kedjenou.',
      'Servido em todos os maquis do país, o Alloco brilha ao lado do Garba e do frango Kedjenou.',
      'يُعد الألوكو من أشهر الأكلات الشعبية في كل المطاعم والشوارع إلى جانب الغاربا والكدجينو.'
    ),
  }),
  mkQ({
    id: 'cur_CI_16',
    countryCode: 'CI',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'kedjenou_poulet_canari',
    source: 'Patrimoine culinaire baoulé et national',
    prompt: L(
      'Quelle est la particularité de cuisson du célèbre « Poulet Kedjenou » préparé traditionnellement dans un canari en terre cuite fermé avec une feuille de bananier ?',
      'What is the traditional cooking secret behind iconic "Poulet Kedjenou," slow-cooked in a sealed terracotta pot (canari)?',
      '¿Cuál es el secreto tradicional de cocción del célebre «Pollo Kedjenou» preparado en una olla de barro sellada?',
      'Qual é o segredo tradicional de cozimento do célebre "Frango Kedjenou" preparado em panela de barro selada?',
      'ما السر التقليدي لطهي «دجاج كيدجينو» الشهير في قدر فخاري محكم الإغلاق؟'
    ),
    correct: L('Il mijote lentement à l’étouffée dans son propre jus, sans aucune goutte d’eau ajoutée', 'It slow-steams sealed in its own natural juices with zero added water', 'Se cocina a fuego lento en su propio jugo sin añadir agua', 'Cozinha lentamente no próprio caldo sem adicionar água', 'يُطهى ببطء على البخار في عصارته الطبيعية دون إضافة ماء'),
    distractors: [
      L('Il est plongé dans de la glace pilée pendant 24 heures', 'It is frozen in crushed ice for 24 hours', 'Se congela en hielo picado 24 horas', 'É congelado em gelo por 24 horas', 'يُجمد في الثلج لمدة 24 ساعة'),
      L('Il est servi cru comme un tartare japonais', 'It is served completely raw', 'Se sirve totalmente crudo', 'É servido totalmente cru', 'يُقدم نيئاً تماماً'),
      L('Il est cuit uniquement au beurre de brebis salé', 'It is boiled only in salted sheep butter', 'Se hierve solo en mantequilla salada', 'É cozido apenas em manteiga salgada', 'يُغلى في الزبدة المملحة فقط'),
    ],
    explanation: L(
      'En langue baoulé, « kedjenou » évoque le geste de secouer doucement la marmite fermée : les légumes (aubergines, tomates, gombo, gingembre) rendent tout le bouillon.',
      'From the Baoulé phrase meaning "shake inside," the sealed clay pot lets tomatoes, eggplants, and spices create an aromatic broth.',
      'En lengua baoulé significa «agitar dentro»; los vegetales y especias sueltan un caldo aromático natural.',
      'Em língua baoulé significa "agitar dentro"; os vegetais liberam um caldo aromático natural.',
      'تعني الكلمة بلغة الباولي التحريك داخل القدر المغلق حيث تطلق الخضراوات والتوابل مرقاً غنياً.'
    ),
  }),
  mkQ({
    id: 'cur_CI_17',
    countryCode: 'CI',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'ernesto_djedje_meiway_magic_system',
    source: 'Histoire musicale — Ziglibithy, Zoblazo & Zouglou',
    prompt: L(
      'Quel célèbre groupe né sur le campus universitaire de Yopougon/Abidjan a conquis le monde francophone dès 2000 avec l’hymne zouglou « 1er Gaou » ?',
      'Which celebrated band born on Abidjan’s university campus conquered the world from 2000 onward with the zouglou anthem "1er Gaou"?',
      '¿Qué célebre grupo nacido en la escena universitaria de Abiyán conquistó el mundo desde 2000 con el himno zouglou «1er Gaou»?',
      'Qual célebre grupo nascido no meio universitário de Abidjan conquistou o mundo a partir de 2000 com o hino zouglou "1er Gaou"?',
      'ما الفرقة الغنائية الشهيرة التي انطلقت من أبيدجان وحققت شهرة عالمية عام 2000 بأغنية «1er Gaou»؟'
    ),
    correct: L('Magic System', 'Magic System', 'Magic System', 'Magic System', 'ماجيك سيستم'),
    distractors: [
      L('Kassav’', 'Kassav’', 'Kassav’', 'Kassav’', 'كاساف'),
      L('Sauti Sol', 'Sauti Sol', 'Sauti Sol', 'Sauti Sol', 'ساوتي سول'),
      L('Ladysmith Black Mambazo', 'Ladysmith Black Mambazo', 'Ladysmith Black Mambazo', 'Ladysmith Black Mambazo', 'لاديسميث بلاك مامبازو'),
    ],
    explanation: L(
      'Porté par A’Salfo, Magic System a fait rayonner le zouglou (né des résidences étudiantes de Yopougon en 1990) sur les scènes internationales et crée le festival FEMUA.',
      'Fronted by A’Salfo, Magic System carried urban campus zouglou worldwide and founded Abidjan’s annual FEMUA music festival.',
      'Liderados por A’Salfo, llevaron el zouglou por todo el mundo y crearon el festival FEMUA.',
      'Liderados por A’Salfo, levaram o zouglou ao mundo e criaram o festival FEMUA em Abidjan.',
      'نشرت فرقة ماجيك سيستم موسيقى الزوغلو عالمياً وأسست مهرجان فيموا الثقافي الكبير في أبيدجان.'
    ),
  }),
  mkQ({
    id: 'cur_CI_18',
    countryCode: 'CI',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 3,
    topicKey: 'fete_abissa_grand_bassam',
    source: 'Patrimoine culturel n’zima — Grand-Bassam',
    prompt: L(
      'Quelle grande fête annuelle du peuple N’zima à Grand-Bassam associe danses de cour, tambours « edoh » et liberté de parole critique envers les dirigeants pendant une semaine ?',
      'Which vibrant annual festival of the N’zima people in Grand-Bassam features royal dances, "edoh" drums, and a week of candid public social critique?',
      '¿Qué gran fiesta anual del pueblo n’zima en Grand-Bassam combina danzas reales, tambores y libertad de crítica social?',
      'Qual grande festa anual do povo n’zima em Grand-Bassam combina danças reais, tambores e livre crítica social?',
      'ما المهرجان السنوي الكبير لشعب نزيمة في غران بسام الذي يجمع الرقصات الملكية وحرية النقد الاجتماعي؟'
    ),
    correct: L('La Fête de l’Abissa', 'The Abissa Festival', 'El Festival de Abissa', 'A Festa da Abissa', 'مهرجان أبيسا'),
    distractors: [
      L('L’Oktoberfest', 'Oktoberfest', 'Oktoberfest', 'Oktoberfest', 'أكتوبرفست'),
      L('La Tomatina', 'La Tomatina', 'La Tomatina', 'La Tomatina', 'لا توماتينا'),
      L('Le Carnaval de Nice', 'Nice Carnival', 'Carnaval de Niza', 'Carnaval de Nice', 'كرنفال نيس'),
    ],
    explanation: L(
      'Véritable temps de renouveau communautaire entre fin octobre et début novembre, l’Abissa permet de dénoncer les abus en chansons et de se pardonner avant la nouvelle année.',
      'Held each autumn, Abissa grants citizens a sacred right to voice satirical critiques through song before reconciling for the new year.',
      'Celebrada cada otoño, la Abissa permite expresar críticas en canciones para renovar la armonía comunitaria.',
      'Celebrada todo outono, a Abissa permite expressar críticas em canções antes da reconciliação anual.',
      'يُتيح مهرجان أبيسا للناس التعبير عن انتقاداتهم عبر الأغاني قبل المصالحة واستقبال العام الجديد.'
    ),
  }),
  mkQ({
    id: 'cur_CI_19',
    countryCode: 'CI',
    category: 'culture',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'toiles_korhogo_pagne_kita',
    source: 'Artisanat du Nord et du Centre — Korhogo & Bonoua',
    prompt: L(
      'Dans le nord du pays (chez les Sénoufo), quel artisanat célèbre consiste à peindre des symboles animaux et géométriques à la boue fermentée et extraits végétaux sur du coton filé à la main ?',
      'In northern Sénoufo country, which famed craft paints animals and sacred motifs using fermented river mud and plant dyes on hand-spun cotton?',
      'En el norte senufo, ¿qué famosa artesanía pinta motivos sagrados con barro fermentado y tintes vegetales sobre algodón hilado a mano?',
      'No norte senufo, qual famoso artesanato pinta animais e símbolos sagrados com lama fermentada e corantes vegetais em algodão?',
      'في الشمال لدى شعب السينوفو، ما الحرفة الشهيرة التي تُرسم فيها رموز تقليدية بالطين المخمّر والأصباغ النباتية على القطن؟'
    ),
    correct: L('Les toiles peintes de Korhogo', 'Korhogo painted cloths', 'Las telas pintadas de Korhogo', 'Os tecidos pintados de Korhogo', 'أقمشة كورهوغو المرسومة'),
    distractors: [
      L('La porcelaine bleue de Delft', 'Delft blue porcelain', 'Porcelana de Delft', 'Porcelana de Delft', 'خزف دلفت'),
      L('Le cristal de Bohême', 'Bohemian crystal', 'Cristal de Bohemia', 'Cristal da Boêmia', 'كريستال بوهيميا'),
      L('Les tapisseries des Gobelins', 'Gobelins tapestry', 'Tapices de Gobelinos', 'Tapeçaria dos Gobelins', 'سجاد غوبلان'),
    ],
    explanation: L(
      'Dans le village de Fakaha près de Korhogo, les artisans dessinent pintades, caïmans, caméléons et chasseurs avec une argile ferrugineuse noire indélébile.',
      'Centered in Fakaha near Korhogo, artisans paint stylized birds, crocodiles, and chameleons with iron-rich black mud dye.',
      'En Fakaha cerca de Korhogo, los artesanos trazan motivos simbólicos con pigmento natural negro indeleble.',
      'Em Fakaha perto de Korhogo, artesãos desenham animais simbólicos com pigmento mineral preto duradouro.',
      'يرسم الحرفيون في قرية فاكاها قرب كورهوغو رموزاً تراثية دقيقة بأصباغ طينية ونباتية ثابتة.'
    ),
  }),
  mkQ({
    id: 'cur_CI_20',
    countryCode: 'CI',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'nouchi_abidjan_slang',
    source: 'Sociolinguistique urbaine — Abidjan',
    prompt: L(
      'Comment s’appelle le célèbre parler urbain et créatif né dans les rues d’Abidjan, qui fusionne français, dioula, baoulé, bété et anglais (donnant « zouglou », « gaou », « gbonhi »...) ?',
      'What is the vibrant urban street language born in Abidjan that blends French with Dioula, Baoulé, Bété, and English ("gaou," "zouglou," "gbonhi")?',
      '¿Cómo se llama el célebre habla urbana nacida en las calles de Abiyán que mezcla francés, dioula, baoulé, bété e inglés?',
      'Como se chama a célebre gíria urbana nascida nas ruas de Abidjan misturando francês, dioula, baoulé, bété e inglês?',
      'ما اسم اللهجة الحضرية الحيوية التي نشأت في شوارع أبيدجان وتمزج الفرنسية بالديولا والباولي والبيتي والإنجليزية؟'
    ),
    correct: L('Le Nouchi', 'Nouchi', 'El Nouchi', 'O Nouchi', 'لغة النوشي'),
    distractors: [
      L('Le Cockney londonien', 'London Cockney', 'Cockney', 'Cockney', 'لهجة كوكني'),
      L('Le Lunfardo de Buenos Aires', 'Buenos Aires Lunfardo', 'Lunfardo', 'Lunfardo', 'لونفاردو'),
      L('Le Joual québécois', 'Quebec Joual', 'Joual', 'Joual', 'لهجة جوال'),
    ],
    explanation: L(
      'Devenu un marqueur culturel fort dans la musique (coupé-décalé, rap, zouglou) et la littérature contemporaine (Gauz), le nouchi est parlé par toute la jeunesse.',
      'Driving pop music, humor, and modern novels, Nouchi is a creative symbol of urban youth across the entire country.',
      'Presente en la música, el humor y la literatura moderna, el nouchi une a la juventud de todo el país.',
      'Presente na música, no humor e na literatura contemporânea, o nouchi simboliza a juventude urbana.',
      'أصبحت النوشي لغة الإبداع الشبابي والموسيقى والأدب المعاصر في البلاد.'
    ),
  }),
  mkQ({
    id: 'cur_CI_21',
    countryCode: 'CI',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'aya_yopougon_abouet_gauz',
    source: 'Bande dessinée & Littérature contemporaine (2005–2015)',
    prompt: L(
      'Quelle autrice née à Abidjan a connu un triomphe mondial (Fauve d’Angoulême) avec sa célèbre série de bande dessinée « Aya de Yopougon », décrivant la vie joyeuse des jeunes années 1970 ?',
      'Which Abidjan-born writer achieved global acclaim (Angoulême award) for the beloved graphic novel series "Aya of Yop City"?',
      '¿Qué autora nacida en Abiyán triunfó en el mundo con su célebre serie de cómic «Aya de Yopougon»?',
      'Qual autora nascida em Abidjan fez sucesso mundial com a célebre série em quadrinhos "Aya de Yopougon"?',
      'من هي الكاتبة المولودة في أبيدجان صاحبة سلسلة القصص المصورة الشهيرة عالمياً «آيا من يوبوغون»؟'
    ),
    correct: L('Marguerite Abouet', 'Marguerite Abouet', 'Marguerite Abouet', 'Marguerite Abouet', 'مارغريت أبوويه'),
    distractors: [
      L('Marjane Satrapi', 'Marjane Satrapi', 'Marjane Satrapi', 'Marjane Satrapi', 'مرجان ساترابي'),
      L('Chimamanda Ngozi Adichie', 'Chimamanda Ngozi Adichie', 'Chimamanda Ngozi Adichie', 'Chimamanda Ngozi Adichie', 'تشيماماندا نغوزي أديشي'),
      L('Tsitsi Dangarembga', 'Tsitsi Dangarembga', 'Tsitsi Dangarembga', 'Tsitsi Dangarembga', 'تسيتسي دانغاريمبغا'),
    ],
    explanation: L(
      'Illustrée par Clément Oubrerie et adaptée en film d’animation, « Aya de Yopougon » a fait découvrir le quotidien lumineux d’Abidjan dans plus de 15 langues.',
      'Drawn by Clément Oubrerie and adapted into an animated feature, "Aya of Yop City" brought Yopougon’s humor and warmth to readers in 15+ languages.',
      'Adaptada incluso al cine de animación, «Aya de Yopougon» acercó la vida cotidiana de Abiyán a más de 15 idiomas.',
      'Adaptada até para animação no cinema, "Aya de Yopougon" apresentou Abidjan em mais de 15 idiomas.',
      'تُرجمت قصص «آيا من يوبوغون» إلى أكثر من 15 لغة وأُنتج عنها فيلم رسوم متحركة شهير.'
    ),
  }),
  mkQ({
    id: 'cur_CI_22',
    countryCode: 'CI',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'meiway_zoblazo_djedje_ziglibithy',
    source: 'Patrimoine musical — Bassam & Gagnoa',
    prompt: L(
      'Originaire de Grand-Bassam, quel chanteur surnommé « le Professeur Awolowô » a créé le rythme endiablé du « Zoblazo » et marqué l’histoire avec les tubes « Appolo 95 » et « Miss Lolo » ?',
      'Born in Grand-Bassam, which singer nicknamed "Professeur Awolowô" created the infectious "Zoblazo" rhythm and classic hits like "Appolo 95"?',
      'Nacido en Grand-Bassam, ¿qué cantante apodado «Professeur Awolowô» creó el ritmo «Zoblazo» y éxitos como «Appolo 95»?',
      'Nascido em Grand-Bassam, qual cantor apelidado de "Professeur Awolowô" criou o ritmo "Zoblazo" e sucessos como "Appolo 95"?',
      'من هو المغني المولود في غران بسام مبتكر إيقاع «زوبلازو» الشهير وأغنية «أبولو 95»؟'
    ),
    correct: L('Meiway (Frédéric Désiré Ehui)', 'Meiway (Frédéric Ehui)', 'Meiway', 'Meiway', 'ميواي'),
    distractors: [
      L('Koffi Olomidé', 'Koffi Olomidé', 'Koffi Olomidé', 'Koffi Olomidé', 'كوفي أولوميدي'),
      L('Salif Keïta', 'Salif Keïta', 'Salif Keïta', 'Salif Keïta', 'ساليف كيتا'),
      L('Manu Dibango', 'Manu Dibango', 'Manu Dibango', 'Manu Dibango', 'مانو ديبانغو'),
    ],
    explanation: L(
      'Au même titre qu’Ernesto Djédjé avec le Ziglibithy, Meiway a modernisé les rythmes des tambours du sud-est avec un style unique reconnu dans toute l’Afrique.',
      'Like Ernesto Djédjé with Ziglibithy, Meiway blended coastal N’zima-Abouré percussion with slick modern arrangements.',
      'Al igual que Ernesto Djédjé con el Ziglibithy, Meiway modernizó las percusiones tradicionales con enorme éxito.',
      'Assim como Ernesto Djédjé com o Ziglibithy, Meiway modernizou os tambores tradicionais com enorme êxito.',
      'مزج ميواي الإيقاعات الساحلية التقليدية بتوزيع موسيقي عصري جعله من أعمدة الموسيقى الأفريقية.'
    ),
  }),
  mkQ({
    id: 'cur_CI_23',
    countryCode: 'CI',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 1,
    topicKey: 'sebastien_haller_afcon_2023',
    source: 'CAF — Finale de la CAN 2023 (11 février 2024)',
    prompt: L(
      'De retour après un cancer vaincu en 2022–2023, quel avant-centre a inscrit le but victorieux de la finale de la CAN 2023 contre le Nigeria (2-1) le 11 février 2024 à Ébimpé ?',
      'Having overcome cancer in 2022–2023, which striker scored the winning goal in the 2023 AFCON final against Nigeria (2-1) on February 11, 2024?',
      'Tras superar un cáncer en 2022-2023, ¿qué delantero marcó el gol de la victoria en la final de la CAN 2023 ante Nigeria (2-1)?',
      'Após vencer um câncer em 2022-2023, qual atacante marcou o gol do título na final da CAN 2023 contra a Nigéria (2-1)?',
      'بعد تغلبه على مرض السرطان، من المهاجم الذي سجل هدف الفوز باللقب في نهائي أمم أفريقيا 2023 أمام نيجيريا (2-1)؟'
    ),
    correct: L('Sébastien Haller', 'Sébastien Haller', 'Sébastien Haller', 'Sébastien Haller', 'سيباستيان هالير'),
    distractors: [
      L('Nicolas Pépé', 'Nicolas Pépé', 'Nicolas Pépé', 'Nicolas Pépé', 'نيكولاس بيبي'),
      L('Wilfried Zaha', 'Wilfried Zaha', 'Wilfried Zaha', 'Wilfried Zaha', 'ويلفريد زاها'),
      L('Max-Alain Gradel', 'Max-Alain Gradel', 'Max-Alain Gradel', 'Max-Alain Gradel', 'ماكس ألان غراديل'),
    ],
    explanation: L(
      'Déjà auteur du but décisif en demi-finale contre la RD Congo (1-0), Sébastien Haller a conclu une remontée historique et offert une 3e étoile aux Éléphants.',
      'Also the match-winner in the semi-final vs DR Congo, Sébastien Haller capped a fairytale comeback to seal a 3rd AFCON crown.',
      'También goleador en semifinales, Sébastien Haller culminó una remontada épica para lograr la tercera estrella.',
      'Autor também do gol da semifinal, Sébastien Haller coroou uma virada histórica para conquistar a terceira estrela.',
      'سجل هالير أيضاً هدف نصف النهائي وقاد الأفيال إلى نجمتهم القارية الثالثة في ليلة تاريخية.'
    ),
  }),
  mkQ({
    id: 'cur_CI_24',
    countryCode: 'CI',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'alain_gouamene_afcon_1992',
    source: 'CAF — CAN 1992 (0 but encaissé en 5 matchs)',
    prompt: L(
      'Quel gardien de but légendaire réussit l’exploit rarissime de n’encaisser AUCUN but en 5 matchs et d’arrêter les tirs décisifs en finale de la CAN 1992 face au Ghana ?',
      'Which legendary goalkeeper achieved the rare feat of conceding ZERO goals in five matches and saving decisive penalties in the 1992 AFCON final against Ghana?',
      '¿Qué legendario portero logró la hazaña de no encajar NI UN gol en cinco partidos y brillar en la tanda de la CAN 1992?',
      'Qual lendário goleiro conseguiu o feito raro de não sofrer NENHUM gol em cinco jogos e brilhar nos pênaltis da CAN 1992?',
      'من هو الحارس الأسطوري الذي حافظ على شباكه نظيفة طوال 5 مباريات وحسم ركلات الترجيح في نهائي 1992؟'
    ),
    correct: L('Alain Gouaméné', 'Alain Gouaméné', 'Alain Gouaméné', 'Alain Gouaméné', 'ألان غوامينيه'),
    distractors: [
      L('Boubacar Barry Copa', 'Boubacar Barry Copa', 'Boubacar Barry Copa', 'Boubacar Barry Copa', 'بوبكر باري كوبا'),
      L('Badou Zaki', 'Badou Zaki', 'Badou Zaki', 'Badou Zaki', 'بادو الزاكي'),
      L('Thomas N’Kono', 'Thomas N’Kono', 'Thomas N’Kono', 'Thomas N’Kono', 'توماس نكونو'),
    ],
    explanation: L(
      'Resté imbattable durant les 510 minutes du tournoi de 1992, Alain Gouaméné repoussa deux tentatives ghanéennes lors de la séance mythique de 11-10 aux tirs au but !',
      'Unbeaten through all 510 minutes of play at AFCON 1992, Alain Gouaméné sealed the famous 11–10 shootout triumph.',
      'Invicto durante 510 minutos en la CAN 1992, selló la histórica tanda de penaltis (11-10).',
      'Invicto por 510 minutos na CAN 1992, selou a épica disputa de pênaltis por 11 a 10.',
      'صمد غوامينيه 510 دقائق دون استقبال أي هدف قبل حسم ركلات الترجيح الشهيرة 11-10.'
    ),
  }),
  mkQ({
    id: 'cur_CI_25',
    countryCode: 'CI',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'cheick_cisse_olympic_gold_2016',
    source: 'CIO — Jeux Olympiques de Rio 2016 (Taekwondo)',
    prompt: L(
      'Quel champion de taekwondo a remporté à Rio en 2016 (à la dernière seconde de la finale !) la toute première médaille d’OR olympique de l’histoire du pays ?',
      'Which taekwondo champion won the country’s very first Olympic GOLD medal in history at Rio 2016 with a dramatic final-second kick?',
      '¿Qué campeón de taekwondo ganó en Río 2016 (¡en el último segundo!) el primer ORO olímpico en la historia del país?',
      'Qual campeão de taekwondo conquistou no Rio 2016 (no último segundo!) o primeiro OURO olímpico da história do país?',
      'من هو بطل التايكوندو الذي أحرز في ريو 2016 (في الثانية الأخيرة!) أول ميدالية ذهبية أولمبية في تاريخ البلاد؟'
    ),
    correct: L('Cheick Sallah Cissé', 'Cheick Sallah Cissé', 'Cheick Sallah Cissé', 'Cheick Sallah Cissé', 'شيخ صلاح سيسيه'),
    distractors: [
      L('Gabriel Tiacoh', 'Gabriel Tiacoh', 'Gabriel Tiacoh', 'Gabriel Tiacoh', 'غابرييل تياكو'),
      L('Souleymane Cissokho', 'Souleymane Cissokho', 'Souleymane Cissokho', 'Souleymane Cissokho', 'سليمان سيسوخو'),
      L('Taoufik Makhloufi', 'Taoufik Makhloufi', 'Taoufik Makhloufi', 'Taoufik Makhloufi', 'توفيق مخلوفي'),
    ],
    explanation: L(
      'Sur un coup de pied retourné à la tête à la toute dernière seconde face à Lutalo Muhammad, Cheick Sallah Cissé décrocha l’or olympique (et devint champion du monde en 2023).',
      'Landing a spinning head kick at the buzzer, Cheick Sallah Cissé secured historic Olympic gold alongside Ruth Gbagbi’s bronze in 2016.',
      'Con una patada giratoria en el último segundo, Cheick Sallah Cissé conquistó el oro olímpico histórico.',
      'Com um chute giratório no último segundo, Cheick Sallah Cissé conquistou o ouro olímpico histórico.',
      'بضربة دائرية حاسمة في الثانية الأخيرة حقق شيخ صلاح سيسيه أول ذهبية أولمبية وتوّج أيضاً بطلاً للعالم 2023.'
    ),
  }),
  mkQ({
    id: 'cur_CI_26',
    countryCode: 'CI',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'africa_sports_felicia_derby',
    source: 'FIF — Ligue 1 ivoirienne & Coupes CAF',
    prompt: L(
      'Quel grand club vert et rouge d’Abidjan, grand rival historique de l’ASEC Mimosas, a remporté deux Coupes d’Afrique des vainqueurs de coupe (1992 et 1999) ?',
      'Which historic green-and-red Abidjan club—arch-rival of ASEC Mimosas—won two African Cup Winners’ Cups (1992 and 1999)?',
      '¿Qué gran club verdiblanco y rojo de Abiyán, eterno rival del ASEC Mimosas, ganó dos Recopas Africanas (1992 y 1999)?',
      'Qual grande clube alvirrubro-verde de Abidjan, arquirrival do ASEC Mimosas, venceu duas Recopas Africanas (1992 e 1999)?',
      'أي نادٍ عريق في أبيدجان والغريم التقليدي لأسيك ميموزا فاز بكأس أفريقيا للأندية أبطال الكؤوس مرتين (1992 و1999)؟'
    ),
    correct: L('L’Africa Sports d’Abidjan', 'Africa Sports d’Abidjan', 'Africa Sports d’Abidjan', 'Africa Sports d’Abidjan', 'أفريكا سبورتس أبيدجان'),
    distractors: [
      L('Le Stade d’Abidjan (jamais double vainqueur de la C2)', 'Horoya AC', 'Horoya AC', 'Horoya AC', 'هورويا كوناكري'),
      L('Le Coton Sport de Garoua', 'Coton Sport Garoua', 'Coton Sport', 'Coton Sport', 'كوتون سبورت'),
      L('Le Raja de Casablanca', 'Raja Casablanca', 'Raja Casablanca', 'Raja Casablanca', 'الرجاء البيضاوي'),
    ],
    explanation: L(
      'Surnommés « les Aiglons », les joueurs de l’Africa Sports forment avec l’ASEC Mimosas le plus grand derby du pays au Stade Félix-Houphouët-Boigny (« Le Félicia »).',
      'Nicknamed "Les Aiglons," Africa Sports contests the nation’s fiercest derby against ASEC Mimosas at "Le Félicia" stadium.',
      'Apodados «Les Aiglons», protagonizan junto al ASEC Mimosas el gran clásico en el estadio «Le Félicia».',
      'Apelidados de "Les Aiglons", protagonizam com o ASEC Mimosas o maior clássico nacional no estádio "Le Félicia".',
      'يشكل أفريكا سبورتس مع أسيك ميموزا الديربي الأشهر في البلاد على ملعب فيليكس هوفويت بواني.'
    ),
  }),
  mkQ({
    id: 'cur_CI_27',
    countryCode: 'CI',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'marie_josee_ta_lou_sprints',
    source: 'World Athletics — Sprint féminin africain',
    prompt: L(
      'Quelle sprinteuse triple médaillée aux Championnats du monde d’athlétisme et multiple championne d’Afrique détient le record d’Afrique du 100 m féminin en 10 s 72 ?',
      'Which triple World Athletics Championships medalist and multiple African champion holds the African women’s 100m record at 10.72 seconds?',
      '¿Qué velocista triple medallista mundial y múltiple campeona africana posee el récord africano femenino de 100 m (10,72 s)?',
      'Qual velocista três vezes medalhista mundial e campeã africana detém o recorde africano feminino dos 100 m (10s72)?',
      'من هي العداءة المتوجة بثلاث ميداليات عالمية وصاحبة الرقم القياسي الأفريقي لسباق 100 متر للسيدات (10.72 ثانية)؟'
    ),
    correct: L('Marie-Josée Ta Lou-Smith', 'Marie-Josée Ta Lou-Smith', 'Marie-Josée Ta Lou-Smith', 'Marie-Josée Ta Lou-Smith', 'ماري جوزيه تا لو'),
    distractors: [
      L('Blessing Okagbare', 'Blessing Okagbare', 'Blessing Okagbare', 'Blessing Okagbare', 'بليسينغ أوكاغباري'),
      L('Beatrice Chebet', 'Beatrice Chebet', 'Beatrice Chebet', 'Beatrice Chebet', 'بياتريس تشيبيت'),
      L('Faith Kipyegon', 'Faith Kipyegon', 'Faith Kipyegon', 'Faith Kipyegon', 'فيث كيبييغون'),
    ],
    explanation: L(
      'Avec Murielle Ahouré (championne du monde en salle du 60 m en 2018), Marie-Josée Ta Lou a hissé le sprint ivoirien parmi l’élite planétaire.',
      'Alongside 2018 World Indoor 60m champion Murielle Ahouré, Marie-Josée Ta Lou elevated Ivorian sprinting into global finals.',
      'Junto a Murielle Ahouré, Marie-Josée Ta Lou situó la velocidad nacional entre la élite mundial.',
      'Ao lado de Murielle Ahouré, Marie-Josée Ta Lou levou o atletismo nacional às finais olímpicas e mundiais.',
      'إلى جانب مورييل أهوري، قادت ماري جوزيه تا لو سباقات السرعة نحو العالمية.'
    ),
  }),
  mkQ({
    id: 'cur_CI_28',
    countryCode: 'CI',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'boubacar_copa_barry_2015',
    source: 'CAF — Finale CAN 2015 (Guinée équatoriale)',
    prompt: L(
      'Lors de la finale haletante de la CAN 2015 remportée 9-8 aux tirs au but contre le Ghana, quel gardien de but a arrêté deux tirs ghanéens AVANT de marquer lui-même le dernier penalty victorieux ?',
      'During the dramatic 2015 AFCON final won 9–8 on penalties against Ghana, which goalkeeper saved two shots AND scored the winning spot-kick himself?',
      'En la dramática final de la CAN 2015 ganada 9-8 por penaltis ante Ghana, ¿qué portero detuvo lanzamientos y marcó el penalti decisivo?',
      'Na dramática final da CAN 2015 vencida por 9 a 8 nos pênaltis contra Gana, qual goleiro defendeu cobranças e ainda marcou o pênalti do título?',
      'في نهائي أمم أفريقيا الدرامي 2015 أمام غانا (9-8 بركلات الترجيح)، من الحارس الذي تصدى لركلات وسجل بنفسه ركلة الفوز؟'
    ),
    correct: L('Boubacar Barry « Copa »', 'Boubacar "Copa" Barry', 'Boubacar Barry «Copa»', 'Boubacar Barry "Copa"', 'بوبكر باري «كوبا»'),
    distractors: [
      L('Yahia Fofana', 'Yahia Fofana', 'Yahia Fofana', 'Yahia Fofana', 'يحيى فوفانا'),
      L('Vincent Enyeama', 'Vincent Enyeama', 'Vincent Enyeama', 'Vincent Enyeama', 'فينسنت إنياما'),
      L('Kameni Idriss', 'Idriss Carlos Kameni', 'Carlos Kameni', 'Carlos Kameni', 'كارلوس كاميني'),
    ],
    explanation: L(
      'Malgré des crampes terribles en fin de séance, Copa Barry stoppa le tir de Brimah Razak puis frappa le sien au fond des filets pour offrir la 2e étoile.',
      'Battling severe cramps, Copa Barry denied Brimah Razak and buried the decisive penalty to capture a second continental crown.',
      'Superando calambres en el instante final, Copa Barry detuvo el disparo rival y anotó el gol de la segunda estrella.',
      'Superando câimbras no instante decisivo, Copa Barry defendeu e marcou o pênalti do bicampeonato.',
      'رغم الإرهاق والتشنج العضلي، تصدى كوبا باري ثم سدد ركلة الحسم مانحاً الأفيال اللقب الثاني.'
    ),
  }),
  mkQ({
    id: 'cur_CI_29',
    countryCode: 'CI',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'assinie_mafia_grand_bereby_beaches',
    source: 'Tourisme littoral — Sud-Est & Sud-Ouest',
    prompt: L(
      'Quelle presqu’île balnéaire réputée à l’est d’Abidjan (dans le département d’Adiaké), nichée entre l’océan Atlantique et la lagune Aby, est un haut lieu du tourisme et de l’histoire du pays ?',
      'Which famed coastal peninsula east of Abidjan nestled between the Atlantic Ocean and Aby Lagoon is a premier seaside resort?',
      '¿Qué famosa península turística al este de Abiyán se sitúa entre el océano Atlántico y la laguna Aby?',
      'Qual famosa península turística a leste de Abidjan situa-se entre o oceano Atlântico e a lagoa Aby?',
      'ما شبه الجزيرة الساحلية الشهيرة شرق أبيدجان الواقعة بين المحيط الأطلسي وبحيرة أبي؟'
    ),
    correct: L('Assinie (Assinie-Mafia)', 'Assinie (Assinie-Mafia)', 'Assinie (Assinie-Mafia)', 'Assinie (Assinie-Mafia)', 'أسيني (أسيني مافيا)'),
    distractors: [
      L('Saly Portudal', 'Saly Portudal', 'Saly Portudal', 'Saly Portudal', 'سالي'),
      L('Dakhla', 'Dakhla', 'Dajla', 'Dakhla', 'الداخلة'),
      L('Watamu', 'Watamu', 'Watamu', 'Watamu', 'واتامو'),
    ],
    explanation: L(
      'Cité historique du royaume d’Issiny dès le XVIIe siècle et réputée pour le parc national des îles Ehotilé voisin, Assinie est aujourd’hui la station balnéaire phare.',
      'Historic port of the 17th-century Issiny kingdom near the Ehotilé Islands park, Assinie is now the premier coastal getaway.',
      'Puerto histórico del siglo XVII junto al parque de las islas Ehotilé, Assinie es hoy un destino costero emblemático.',
      'Porto histórico do século XVII perto das ilhas Ehotilé, Assinie é o principal destino litorâneo.',
      'تقع أسيني التاريخية قرب جزر إيهوتيلي وتُعد الوجهة السياحية الشاطئية الأبرز في البلاد.'
    ),
  }),
  mkQ({
    id: 'cur_CI_30',
    countryCode: 'CI',
    category: 'culture',
    subCategory: 'sciences_innovations',
    difficulty: 3,
    topicKey: 'kente_pagne_kita_bonoua_weaver',
    source: 'Patrimoine textile — Bonoua & Pays Baoulé',
    prompt: L(
      'Comment appelle-t-on le prestigieux pagne royal tissé à la main en bandes étroites géométriques multicolores chez les Akan, les Agni et les Baoulé ?',
      'What is the prestigious hand-woven royal strip cloth with rich multicolored geometric patterns crafted by Akan, Agni, and Baoulé weavers called?',
      '¿Cómo se llama la prestigiosa tela real tejida a mano en tiras multicolores geométricas entre los pueblos akan, agni y baoulé?',
      'Como se chama o prestigioso tecido real feito à mão em tiras geométricas multicoloridas entre os povos akan, agni e baoulé?',
      'ما اسم القماش الملكي المنسوج يدوياً بأشرطة هندسية زاهية الألوان لدى شعوب الأكان والباولي؟'
    ),
    correct: L('Le Pagne Kita', 'Kita Cloth (Pagne Kita)', 'Tela Kita (Pagne Kita)', 'Pano Kita', 'قماش كيتا (باغني كيتا)'),
    distractors: [
      L('Le Tartan des Highlands', 'Highland Tartan', 'Tartán escocés', 'Tartan escocês', 'الترتان الأسكتلندي'),
      L('Le Tweed irlandais', 'Irish Tweed', 'Tweed irlandés', 'Tweed irlandês', 'التويد الإيرلندي'),
      L('La Toile de Jouy', 'Toile de Jouy', 'Toile de Jouy', 'Toile de Jouy', 'قماش توال دو جوي'),
    ],
    explanation: L(
      'Chaque motif et couleur du pagne Kita (cousin du Kente ghanéen, tissé notamment à Bomizambo, Tiébissou et Bonoua) porte un proverbe et un message symbolique.',
      'Woven in centers like Bomizambo and Bonoua, every Kita color combination encodes traditional proverbs and royal prestige.',
      'Tejido en centros como Bomizambo y Bonoua, cada combinación del Kita transmite proverbios y prestigio.',
      'Tecido em centros como Bomizambo e Bonoua, cada padrão do Kita carrega provérbios e prestígio.',
      'تحمل كل زخرفة ولون في قماش كيتا أمثالاً وحكماً تقليدية وتُرتدى في المناسبات الكبرى.'
    ),
  }),
];

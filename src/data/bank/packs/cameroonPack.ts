import { QuizQuestion } from '../../../types/quiz';
import { L } from '../../countriesPart1';
import { mkQ } from './packHelpers';

export const CAMEROON_CURATED_PACK: QuizQuestion[] = [
  mkQ({
    id: 'cur_CM_01',
    countryCode: 'CM',
    category: 'history',
    subCategory: 'anecdotes_insolites',
    difficulty: 2,
    topicKey: 'rio_dos_camaroes',
    source: 'Archives maritimes portugaises (XVe siècle)',
    prompt: L(
      'Quel animal marin aperçu en abondance dans l’estuaire du Wouri en 1472 a donné son nom au Cameroun (« Rio dos Camarões ») ?',
      'Which marine creature spotted abundantly in the Wouri estuary in 1472 gave Cameroon its name ("Rio dos Camarões")?',
      '¿Qué animal marino visto en abundancia en el estuario del Wouri en 1472 dio nombre a Camerún ("Rio dos Camarões")?',
      'Que animal marinho avistado em abundância no estuário do Wouri em 1472 deu nome aos Camarões ("Rio dos Camarões")?',
      'ما الكائن البحري الذي رُصد بكثرة في مصب نهر ووري عام 1472 ومنح الكاميرون اسمها؟'
    ),
    countryModePrompt: L(
      'Quelle espèce de crustacé observée en masse dans l’estuaire du Wouri en 1472 est à l’origine du nom du pays ?',
      'Which crustacean seen in vast swarms in the Wouri estuary in 1472 inspired the country’s name?',
      '¿Qué crustáceo observado en abundancia en el estuario del Wouri en 1472 dio origen al nombre del país?',
      'Qual crustáceo observado em abundância no estuário do Wouri em 1472 originou o nome do país?',
      'ما القشريات التي رُصدت بكثرة في مصب ووري عام 1472 واستُمد منها اسم البلاد؟'
    ),
    correct: L('Les crevettes', 'Shrimp / Prawns', 'Los camarones', 'Os camarões', 'الروبيان (الجمبري)'),
    distractors: [
      L('Les dauphins roses', 'Pink dolphins', 'Delfines rosados', 'Golfinhos-cor-de-rosa', 'الدلافين الوردية'),
      L('Les baleines bleues', 'Blue whales', 'Ballenas azules', 'Baleias-azuis', 'الحيتان الزرقاء'),
      L('Les espadons', 'Swordfish', 'Peces espada', 'Peixes-espada', 'سمك أبو سيف'),
    ],
    explanation: L(
      'En remontant le fleuve Wouri, les navigateurs portugais de Fernão do Pó le baptisèrent « Rio dos Camarões » (« rivière des crevettes »).',
      'Portuguese explorers under Fernão do Pó called the Wouri estuary "Rio dos Camarões" ("River of Prawns").',
      'Los navegantes portugueses llamaron al estuario del Wouri «Rio dos Camarões» ("río de los camarones").',
      'Navegadores portugueses batizaram o estuário do Wouri de «Rio dos Camarões» devido à abundância do crustáceo.',
      'أطلق البحارة البرتغاليون اسم «نهر الروبيان» على مصب نهر ووري لوفرتها فيه.'
    ),
  }),
  mkQ({
    id: 'cur_CM_02',
    countryCode: 'CM',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'sanaga_river',
    source: 'Atlas hydrographique du Cameroun',
    prompt: L(
      'Quel fleuve long de plus de 900 kilomètres est le plus long cours d’eau coulant entièrement au Cameroun ?',
      'Which river over 900 km long is the longest river flowing entirely within Cameroon?',
      '¿Qué río de más de 900 km es el curso fluvial más largo que discurre íntegramente por Camerún?',
      'Qual rio com mais de 900 km é o mais longo a correr inteiramente nos Camarões?',
      'ما أطول نهر يجري بالكامل داخل أراضي الكاميرون بطول يتجاوز 900 كيلومتر؟'
    ),
    countryModePrompt: L(
      'Quel fleuve long de plus de 900 km, qui alimente les barrages d’Édéa et de Nachtigal, est le plus long du pays ?',
      'Which river over 900 km long, powering the Édéa and Nachtigal dams, is the country’s longest river?',
      '¿Qué río de más de 900 km, que alimenta las presas de Édéa y Nachtigal, es el más largo del país?',
      'Qual rio de mais de 900 km, que abastece as barragens de Édéa e Nachtigal, é o maior do país?',
      'ما أطول نهر في البلاد بطول يزيد عن 900 كم ويغذي سدود إيديا ونختيغال؟'
    ),
    correct: L('La Sanaga', 'The Sanaga River', 'El río Sanaga', 'O rio Sanaga', 'نهر ساناغا'),
    distractors: [
      L('Le Nil Bleu', 'The Blue Nile', 'El Nilo Azul', 'O Nilo Azul', 'النيل الأزرق'),
      L('Le fleuve Sénégal', 'The Senegal River', 'El río Senegal', 'O rio Senegal', 'نهر السنغال'),
      L('Le fleuve Orange', 'The Orange River', 'El río Orange', 'O rio Orange', 'نهر أورانج'),
    ],
    explanation: L(
      'Né sur le plateau de l’Adamaoua, le fleuve Sanaga traverse le centre du territoire avant de se jeter dans le golfe de Guinée au sud de Douala.',
      'Rising on the Adamawa Plateau, the Sanaga River flows across central regions into the Gulf of Guinea south of Douala.',
      'Nacido en la meseta de Adamawa, el río Sanaga desemboca en el golfo de Guinea al sur de Duala.',
      'Nascido no planalto de Adamawa, o rio Sanaga deságua no golfo da Guiné ao sul de Duala.',
      'ينبع نهر ساناغا من هضبة أداماوا ويصب في خليج غينيا جنوب دوالا.'
    ),
  }),
  mkQ({
    id: 'cur_CM_03',
    countryCode: 'CM',
    category: 'geography',
    subCategory: 'anecdotes_insolites',
    difficulty: 4,
    topicKey: 'debundscha_rainfall',
    source: 'Organisation météorologique mondiale (OMM)',
    prompt: L(
      'Quel village côtier au pied du mont Cameroun figure parmi les endroits les plus pluvieux de toute la planète (plus de 10 000 mm de pluie par an) ?',
      'Which coastal village at the foot of Mount Cameroon ranks among the wettest places on Earth (over 10,000 mm of rain per year)?',
      '¿Qué localidad costera al pie del monte Camerún figura entre los lugares más lluviosos de la Tierra?',
      'Que localidade costeira ao pé do Monte Camarões figura entre os lugares mais chuvosos da Terra?',
      'ما القرية الساحلية الواقعة عند سفح جبل الكاميرون والتي تُعد من أكثر بقاع الأرض مطراً؟'
    ),
    countryModePrompt: L(
      'Quelle localité côtière située au pied du mont Fako détient le record continental de précipitations (plus de 10 mètres d’eau par an) ?',
      'Which coastal town at the foot of Mount Fako holds Africa’s rainfall record (over 10 meters per year)?',
      '¿Qué localidad costera al pie del monte Fako ostenta el récord continental de lluvias?',
      'Qual localidade costeira ao pé do monte Fako detém o recorde continental de chuvas?',
      'ما البلدة الساحلية عند سفح جبل فاكو التي تسجل أعلى معدل أمطار في القارة؟'
    ),
    correct: L('Debundscha', 'Debundscha', 'Debundscha', 'Debundscha', 'ديبوندشا'),
    distractors: [
      L('Maroua', 'Maroua', 'Maroua', 'Maroua', 'ماروا'),
      L('Kousséri', 'Kousséri', 'Kousséri', 'Kousséri', 'كوسيري'),
      L('Garoua', 'Garoua', 'Garoua', 'Garoua', 'غاروا'),
    ],
    explanation: L(
      'Adossé au relief volcanique du mont Cameroun face aux vents humides de l’Atlantique, Debundscha reçoit des pluies records chaque année.',
      'Facing humid Atlantic winds right beneath Mount Cameroon, Debundscha receives extraordinary orographic rainfall.',
      'Frente a los vientos húmedos del Atlántico y junto al volcán, Debundscha recibe lluvias récord.',
      'Exposta aos ventos úmidos do Atlântico junto ao vulcão, Debundscha registra chuvas recordes.',
      'تقع ديبوندشا في مواجهة الرياح المحيطية الرطبة عند سفح الجبل مما يسبب أمطاراً قياسية.'
    ),
  }),
  mkQ({
    id: 'cur_CM_04',
    countryCode: 'CM',
    category: 'geography',
    subCategory: 'sciences_innovations',
    difficulty: 3,
    topicKey: 'lake_nyos_1986',
    source: 'UNESCO & Volcanologie — Lac Nyos (1986)',
    prompt: L(
      'Quel lac volcanique du Nord-Ouest du Cameroun a connu en 1986 une rare éruption limnique de dioxyde de carbone ?',
      'Which volcanic crater lake in northwest Cameroon experienced a rare limnic carbon-dioxide eruption in 1986?',
      '¿Qué lago volcánico del noroeste de Camerún sufrió en 1986 una rara erupción límnica de dióxido de carbono?',
      'Que lago vulcânico do noroeste dos Camarões sofreu em 1986 uma rara erupção límnica de dióxido de carbono?',
      'ما البحيرة البركانية في شمال غرب الكاميرون التي شهدت عام 1986 ثوراناً نادراً لثاني أكسيد الكربون؟'
    ),
    countryModePrompt: L(
      'Quel lac de cratère du Nord-Ouest, aujourd’hui sécurisé par des colonnes de dégazage solaire, a libéré un nuage de CO2 en 1986 ?',
      'Which northwest crater lake—now safeguarded by degassing pipes—released a natural CO2 cloud in 1986?',
      '¿Qué lago de cráter del noroeste liberó una nube natural de CO2 en 1986?',
      'Que lago de cratera no noroeste liberou uma nuvem natural de CO2 em 1986?',
      'ما البحيرة البركانية في الشمال الغربي التي أطلقت سحابة ثاني أكسيد الكربون عام 1986؟'
    ),
    correct: L('Le lac Nyos', 'Lake Nyos', 'El lago Nyos', 'O lago Nyos', 'بحيرة نيوس'),
    distractors: [
      L('Le lac Rose', 'Lake Retba', 'El lago Rosa', 'O lago Rosa', 'البحيرة الوردية'),
      L('Le lac Nakuru', 'Lake Nakuru', 'El lago Nakuru', 'O lago Nakuru', 'بحيرة ناكورو'),
      L('Le lac Assal', 'Lake Assal', 'El lago Assal', 'O lago Assal', 'بحيرة عسل'),
    ],
    explanation: L(
      'Suite à la tragédie de 1986, des ingénieurs internationaux ont installé au lac Nyos des conduites permettant un dégazage continu et sûr.',
      'Following the 1986 tragedy, engineers installed permanent degassing pipes in Lake Nyos to safely vent deep gases.',
      'Tras 1986, se instalaron tubos de desgasificación controlada en el lago Nyos para evitar acumulaciones de gas.',
      'Após 1986, engenheiros instalaram tubos de desgaseificação segura no lago Nyos.',
      'عقب حادثة 1986 نُصبت أنابيب هندسية لتفريغ الغازات بأمان من أعماق بحيرة نيوس.'
    ),
  }),
  mkQ({
    id: 'cur_CM_05',
    countryCode: 'CM',
    category: 'geography',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'beac_hq_yaounde',
    source: 'BEAC & CEMAC',
    prompt: L(
      'Quelle institution financière commune à six États d’Afrique centrale a son siège principal à Yaoundé ?',
      'Which central financial institution serving six Central African states has its headquarters in Yaoundé?',
      '¿Qué institución financiera común a seis países de África Central tiene su sede en Yaundé?',
      'Qual instituição financeira comum a seis países da África Central tem sede em Yaoundé?',
      'ما المؤسسة المالية المشتركة لست دول في وسط أفريقيا التي يقع مقرها الرئيسي في ياوندي؟'
    ),
    countryModePrompt: L(
      'Quelle grande banque centrale sous-régionale émettant le franc CFA (XAF) a son siège à Yaoundé ?',
      'Which regional central bank issuing the Central African CFA franc (XAF) has its headquarters in Yaoundé?',
      '¿Qué gran banco central subregional emisor del franco CFA tiene su sede en Yaundé?',
      'Qual banco central sub-regional emissor do franco CFA tem sede em Yaoundé?',
      'ما البنك المركزي الإقليمي المُصدر للفرنك الأفريقي الذي يتخذ من ياوندي مقراً له؟'
    ),
    correct: L('La BEAC (Banque des États de l’Afrique centrale)', 'BEAC (Bank of Central African States)', 'El BEAC (Banco de los Estados de África Central)', 'O BEAC (Banco dos Estados da África Central)', 'بنك دول وسط أفريقيا (BEAC)'),
    distractors: [
      L('La BCEAO (Afrique de l’Ouest)', 'BCEAO (West Africa)', 'El BCEAO (África Occidental)', 'O BCEAO (África Ocidental)', 'البنك المركزي لغرب أفريقيا'),
      L('La Banque mondiale', 'The World Bank', 'El Banco Mundial', 'O Banco Mundial', 'البنك الدولي'),
      L('La Banque du Maghreb', 'Maghreb Central Bank', 'Banco del Magreb', 'Banco do Magrebe', 'بنك المغرب'),
    ],
    explanation: L(
      'La BEAC gère la monnaie commune (franc CFA XAF) pour le Cameroun, le Gabon, le Congo, la RCA, la Guinée équatoriale et le Tchad.',
      'BEAC manages the shared CFA franc (XAF) for six CEMAC nations from its iconic Yaoundé tower.',
      'El BEAC administra el franco CFA común para los seis países de la CEMAC desde Yaundé.',
      'O BEAC administra o franco CFA comum para os seis países da CEMAC a partir de Yaoundé.',
      'يدير بنك دول وسط أفريقيا العملة الموحدة لست دول من مقره في ياوندي.'
    ),
  }),
  mkQ({
    id: 'cur_CM_06',
    countryCode: 'CM',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'dja_reserve_unesco',
    source: 'UNESCO — Réserve de faune du Dja (1987)',
    prompt: L(
      'Quelle vaste réserve de faune du Cameroun, presque entièrement encerclée par une boucle de rivière, est classée au patrimoine mondial de l’UNESCO depuis 1987 ?',
      'Which vast wildlife reserve in Cameroon, almost completely encircled by a river bend, has been a UNESCO World Heritage Site since 1987?',
      '¿Qué extensa reserva de fauna de Camerún, rodeada casi por completo por un río, es Patrimonio de la UNESCO desde 1987?',
      'Que vasta reserva de fauna dos Camarões, quase cercada por um rio, é Patrimônio da UNESCO desde 1987?',
      'ما المحمية الطبيعية الشاسعة في الكاميرون المدرجة في اليونسكو منذ عام 1987 والتي يطوقها نهر من معظم الجهات؟'
    ),
    countryModePrompt: L(
      'Quelle grande réserve forestière protégée, presque entourée par la rivière du même nom, est inscrite à l’UNESCO depuis 1987 ?',
      'Which large rainforest wildlife reserve, nearly encircled by its namesake river, has been UNESCO-listed since 1987?',
      '¿Qué gran reserva forestal, casi rodeada por el río homónimo, está inscrita en la UNESCO desde 1987?',
      'Qual grande reserva florestal, quase cercada pelo rio homônimo, é inscrita na UNESCO desde 1987?',
      'ما المحمية الحرجية الكبرى المدرجة لدى اليونسكو منذ عام 1987 والمطوّقة بنهر يحمل اسمها؟'
    ),
    correct: L('La réserve de faune du Dja', 'The Dja Faunal Reserve', 'La Reserva de Fauna del Dja', 'A Reserva de Fauna do Dja', 'محمية دجا للحياة البرية'),
    distractors: [
      L('Le parc de Yellowstone', 'Yellowstone Park', 'Yellowstone', 'Yellowstone', 'يلوستون'),
      L('La réserve de Masai Mara', 'Maasai Mara', 'Masai Mara', 'Masai Mara', 'ماساي مارا'),
      L('Le parc de Banc d’Arguin', 'Banc d’Arguin', 'Banc d’Arguin', 'Banc d’Arguin', 'بانك دارغان'),
    ],
    explanation: L(
      'La boucle de la rivière Dja protège naturellement une forêt primaire exceptionnelle abritant gorilles, chimpanzés et éléphants de forêt.',
      'Almost surrounded by the Dja River, this primary rainforest protects gorillas, chimpanzees, and forest elephants.',
      'El meandro del río Dja protege naturalmente una selva primaria hogar de gorilas y chimpancés.',
      'A curva do rio Dja protege naturalmente uma floresta primária rica em gorilas e chimpanzés.',
      'يحمي التفاف نهر دجا غابة مطيرة بكر تأوي الغوريلا والشمبانزي وأفيال الغابات.'
    ),
  }),
  mkQ({
    id: 'cur_CM_07',
    countryCode: 'CM',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'waza_park',
    source: 'Parcs nationaux d’Afrique centrale',
    prompt: L(
      'Quel célèbre parc national de savane situé dans l’Extrême-Nord du Cameroun est réputé pour ses lions, girafes et éléphants ?',
      'Which famous savanna national park in Cameroon’s Far North is renowned for lions, giraffes, and elephants?',
      '¿Qué célebre parque nacional de sabana del Extremo Norte es famoso por sus leones, jirafas y elefantes?',
      'Que famoso parque nacional de savana do Extremo Norte é conhecido por leões, girafas e elefantes?',
      'ما المنتزه الوطني الشهير في أقصى شمال الكاميرون المعروف بالأسود والزرافات والفيلة؟'
    ),
    countryModePrompt: L(
      'Quel grand parc de savane de l’Extrême-Nord accueille lions, girafes et oiseaux sahéliens ?',
      'Which major Far North savanna park shelters lions, giraffes, and Sahelian birds?',
      '¿Qué gran parque de sabana del Extremo Norte alberga leones, jirafas y aves sahelianas?',
      'Qual grande parque de savana do Extremo Norte abriga leões, girafas e aves sahelianas?',
      'ما المنتزه السافاني الكبير في أقصى الشمال الذي يضم الأسود والزرافات وطيور الساحل؟'
    ),
    correct: L('Le parc national de Waza', 'Waza National Park', 'El Parque Nacional de Waza', 'O Parque Nacional de Waza', 'منتزه وازا الوطني'),
    distractors: [
      L('Le parc national de Kruger', 'Kruger National Park', 'Parque Kruger', 'Parque Kruger', 'منتزه كروغر'),
      L('Le parc d’Amboseli', 'Amboseli National Park', 'Parque de Amboseli', 'Parque de Amboseli', 'منتزه أمبوسيلي'),
      L('Le parc de Zakouma', 'Zakouma National Park', 'Parque de Zakouma', 'Parque de Zakouma', 'منتزه زاكوما'),
    ],
    explanation: L(
      'Créé en 1934 comme réserve de chasse puis classé parc national en 1968, Waza est le joyau touristique du Grand Nord.',
      'Established in 1934 and declared a national park in 1968, Waza is the wildlife jewel of the Far North.',
      'Establecido en 1934 y parque nacional desde 1968, Waza es la joya natural del Extremo Norte.',
      'Criado em 1934, o Parque Nacional de Waza é a joia da vida selvagem no Extremo Norte.',
      'أُنشئ عام 1934 ويُعد جوهرة السياحة البيئية في أقصى الشمال.'
    ),
  }),
  mkQ({
    id: 'cur_CM_08',
    countryCode: 'CM',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'douala_former_capital',
    source: 'Histoire administrative du Cameroun',
    prompt: L(
      'Avant Yaoundé, quelle grande ville côtière fut la toute première capitale du territoire sous administration allemande puis française jusqu’en 1921 ?',
      'Before Yaoundé, which major coastal city served as the capital until 1921?',
      'Antes de Yaundé, ¿qué gran ciudad costera fue la capital hasta 1921?',
      'Antes de Yaoundé, qual grande cidade costeira foi a capital até 1921?',
      'قبل ياوندي، أي مدينة ساحلية كبرى كانت العاصمة حتى عام 1921؟'
    ),
    countryModePrompt: L(
      'Quelle métropole portuaire aujourd’hui poumon économique du pays fut sa capitale administrative jusqu’en 1921 ?',
      'Which major port metropolis, now the economic hub, served as the administrative capital until 1921?',
      '¿Qué metrópoli portuaria, hoy motor económico del país, fue capital administrativa hasta 1921?',
      'Qual metrópole portuária, hoje polo econômico, foi a capital administrativa até 1921?',
      'أي مدينة ساحلية تُعد اليوم العاصمة الاقتصادية وكانت العاصمة الإدارية حتى عام 1921؟'
    ),
    correct: L('Douala', 'Douala', 'Duala', 'Duala', 'دوالا'),
    distractors: [
      L('Bafoussam', 'Bafoussam', 'Bafoussam', 'Bafoussam', 'بافوسام'),
      L('Ngaoundéré', 'Ngaoundéré', 'Ngaoundéré', 'Ngaoundéré', 'نغاوندييري'),
      L('Bertoua', 'Bertoua', 'Bertoua', 'Bertoua', 'بيرتوا'),
    ],
    explanation: L(
      'Située à l’intérieur des terres avec un climat plus tempéré, Yaoundé a définitivement remplacé Douala (et brièvement Buéa) comme capitale politique.',
      'Set inland in cooler hills, Yaoundé succeeded coastal Douala (and briefly Buea) as the seat of government.',
      'Situada en colinas más templadas, Yaundé reemplazó a Duala como capital política.',
      'Situada em colinas de clima ameno, Yaoundé substituiu Duala como capital política.',
      'حلت ياوندي الداخلية ذات المناخ المعتدل محل دوالا الساحلية كعاصمة سياسية.'
    ),
  }),
  mkQ({
    id: 'cur_CM_09',
    countryCode: 'CM',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'may20_unitary_state',
    source: 'Constitution du 2 juin 1972 / Référendum du 20 mai',
    prompt: L(
      'Que commémore la fête nationale du 20 mai célébrée chaque année au Cameroun ?',
      'What historic event does Cameroon’s annual May 20 National Day commemorate?',
      '¿Qué conmemora la fiesta nacional del 20 de mayo en Camerún?',
      'O que comemora o Dia Nacional de 20 de maio celebrado anualmente nos Camarões?',
      'ما الحدث الذي يحييه العيد الوطني في 20 مايو من كل عام في الكاميرون؟'
    ),
    countryModePrompt: L(
      'Quel grand référendum de 1972 commémore la fête nationale du 20 mai ?',
      'Which pivotal 1972 referendum is commemorated on May 20 National Day?',
      '¿Qué histórico referéndum de 1972 conmemora el Día Nacional del 20 de mayo?',
      'Qual referendo histórico de 1972 é comemorado no Dia Nacional de 20 de maio?',
      'ما الاستفتاء التاريخي عام 1972 الذي يُحتفل بذكراه في 20 مايو؟'
    ),
    correct: L(
      'Le référendum de 1972 instituant l’État unitaire',
      'The 1972 referendum establishing the unitary republic',
      'El referéndum de 1972 que instauró el Estado unitario',
      'O referendo de 1972 que instituiu o Estado unitário',
      'استفتاء عام 1972 الذي أنشأ الدولة الموحدة'
    ),
    distractors: [
      L('La victoire à la première CAN en 1984', 'The first AFCON title in 1984', 'El primer título de CAN en 1984', 'O primeiro título da CAN em 1984', 'التتويج الأول بأمم أفريقيا 1984'),
      L('L’ouverture du port de Kribi', 'The opening of Kribi port', 'La apertura del puerto de Kribi', 'A abertura do porto de Kribi', 'افتتاح ميناء كريبي'),
      L('La fondation de Douala en 1900', 'The founding of Douala in 1900', 'La fundación de Duala en 1900', 'A fundação de Duala em 1900', 'تأسيس دوالا عام 1900'),
    ],
    explanation: L(
      'Bien que l’indépendance ait eu lieu le 1er janvier 1960, la Fête nationale célèbre l’unification en République unie décidée par référendum le 20 mai 1972.',
      'While independence arrived on January 1, 1960, National Day celebrates the May 20, 1972 unification referendum.',
      'Aunque la independencia fue el 1 de enero de 1960, el Día Nacional celebra el referéndum unitario del 20 de mayo de 1972.',
      'Embora a independência tenha sido em 1960, o Dia Nacional celebra o referendo unitário de 20 de maio de 1972.',
      'يُحتفل بالعيد الوطني في 20 مايو تخليداً لاستفتاء الوحدة عام 1972.'
    ),
  }),
  mkQ({
    id: 'cur_CM_10',
    countryCode: 'CM',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'first_pres_ahidjo',
    source: 'Archives nationales de la République du Cameroun',
    prompt: L(
      'Qui fut le tout premier Président de la République du Cameroun indépendant (1960–1982) ?',
      'Who served as the first President of independent Cameroon (1960–1982)?',
      '¿Quién fue el primer presidente de Camerún independiente (1960-1982)?',
      'Quem foi o primeiro presidente dos Camarões independentes (1960–1982)?',
      'من كان أول رئيس لجمهورية الكاميرون المستقلة (1960–1982)؟'
    ),
    countryModePrompt: L(
      'Quel homme d’État originaire de Garoua fut le tout premier président du pays de 1960 à 1982 ?',
      'Which statesman from Garoua served as the country’s first President from 1960 to 1982?',
      '¿Qué estadista originario de Garoua fue el primer presidente del país entre 1960 y 1982?',
      'Que estadista natural de Garoua foi o primeiro presidente do país de 1960 a 1982?',
      'من هو رجل الدولة المنحدر من غاروا الذي تولى رئاسة البلاد من 1960 إلى 1982؟'
    ),
    correct: L('Ahmadou Ahidjo', 'Ahmadou Ahidjo', 'Ahmadou Ahidjo', 'Ahmadou Ahidjo', 'أحمدو أهيدجو'),
    distractors: [
      L('Léon Mba', 'Léon Mba', 'Léon Mba', 'Léon Mba', 'ليون مبا'),
      L('Fulbert Youlou', 'Fulbert Youlou', 'Fulbert Youlou', 'Fulbert Youlou', 'فولبير يولو'),
      L('Barthélemy Boganda', 'Barthélemy Boganda', 'Barthélemy Boganda', 'Barthélemy Boganda', 'بارتيليمي بوغاندا'),
    ],
    explanation: L(
      'Ahmadou Ahidjo dirigea l’État dès l’indépendance en 1960 jusqu’à sa démission en novembre 1982, lorsqu’il transmit le pouvoir à Paul Biya.',
      'Ahmadou Ahidjo led the nation from independence in 1960 until stepping down in 1982 in favor of Paul Biya.',
      'Ahmadou Ahidjo gobernó desde 1960 hasta su dimisión en 1982.',
      'Ahmadou Ahidjo governou desde 1960 até renunciar em 1982.',
      'قاد أحمدو أهيدجو البلاد منذ الاستقلال عام 1960 حتى استقالته عام 1982.'
    ),
  }),
  mkQ({
    id: 'cur_CM_11',
    countryCode: 'CM',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 3,
    topicKey: 'foumban_conference_1961',
    source: 'Histoire constitutionnelle du Cameroun (juillet 1961)',
    prompt: L(
      'Dans quelle ville royale de l’Ouest se tint la conférence constitutionnelle de juillet 1961 qui posa les bases de la réunification ?',
      'In which historic royal city in the West did the July 1961 constitutional conference lay the groundwork for reunification?',
      '¿En qué ciudad real del Oeste se celebró en julio de 1961 la conferencia constitucional para la reunificación?',
      'Em que cidade real do Oeste aconteceu em julho de 1961 a conferência constitucional para a reunificação?',
      'في أي مدينة ملكية بالغرب عُقد مؤتمر يوليو 1961 الدستوري لإقرار الوحدة؟'
    ),
    countryModePrompt: L(
      'Quelle cité royale du pays Bamoun accueillit en juillet 1961 la conférence préparant la fédération entre parties francophone et anglophone ?',
      'Which royal Bamoun city hosted the July 1961 conference shaping the federation of Francophone and Anglophone territories?',
      '¿Qué ciudad real bamún acogió en julio de 1961 la conferencia que preparó la federación?',
      'Que cidade real bamum sediou em julho de 1961 a conferência que preparou a federação?',
      'أي مدينة ملكية استضافت في يوليو 1961 مؤتمر توحيد الشطرين الناطقين بالفرنسية والإنجليزية؟'
    ),
    correct: L('Foumban', 'Foumban', 'Foumban', 'Foumban', 'فومبان'),
    distractors: [
      L('Bertoua', 'Bertoua', 'Bertoua', 'Bertoua', 'بيرتوا'),
      L('Ebolowa', 'Ebolowa', 'Ebolowa', 'Ebolowa', 'إيبولوا'),
      L('Banyo', 'Banyo', 'Banyo', 'Banyo', 'بانيو'),
    ],
    explanation: L(
      'Réunis à Foumban en juillet 1961, les représentants des deux entités définirent l’architecture de la République fédérale effective le 1er octobre 1961.',
      'At Foumban in July 1961, leaders of both sides drafted the framework for the Federal Republic proclaimed on October 1, 1961.',
      'En Foumban en julio de 1961 se sentaron las bases de la República Federal proclamada el 1 de octubre.',
      'Em Foumban em julho de 1961 definiram-se as bases da República Federal proclamada em 1º de outubro.',
      'في فومبان عام 1961 وضع القادة أسس الجمهورية الاتحادية.'
    ),
  }),
  mkQ({
    id: 'cur_CM_12',
    countryCode: 'CM',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'rudolf_douala_manga_bell',
    source: 'Mémoire anticoloniale du Cameroun (1914)',
    prompt: L(
      'Quel roi des Douala exécuté en août 1914 s’opposa pacifiquement mais fermement aux expropriations coloniales allemandes ?',
      'Which Duala king, executed in August 1914, courageously opposed German colonial land seizures?',
      '¿Qué rey duala ejecutado en agosto de 1914 se opuso con firmeza a las expropiaciones coloniales alemanas?',
      'Que rei duala executado em agosto de 1914 opôs-se com firmeza às expropriações coloniais alemãs?',
      'من هو الملك الدوالا الذي أُعدم في أغسطس 1914 بسبب مقاومته لمصادرة الأراضي الاستعمارية الألمانية؟'
    ),
    countryModePrompt: L(
      'Quel souverain et résistant douala de premier plan fut exécuté le 8 août 1914 pour avoir défendu les droits fonciers de son peuple ?',
      'Which prominent Duala king and resistance leader was executed on August 8, 1914 for defending his people’s land rights?',
      '¿Qué soberano y líder duala fue ejecutado el 8 de agosto de 1914 por defender las tierras de su pueblo?',
      'Que soberano duala foi executado em 8 de agosto de 1914 por defender as terras do seu povo?',
      'من هو الزعيم الملكي الذي أُعدم في 8 أغسطس 1914 دفاعاً عن حقوق شعبه في أراضيه؟'
    ),
    correct: L('Rudolf Douala Manga Bell', 'Rudolf Douala Manga Bell', 'Rudolf Douala Manga Bell', 'Rudolf Douala Manga Bell', 'رودولف دوالا مانغا بيل'),
    distractors: [
      L('Le roi Béhanzin', 'King Behanzin', 'El rey Behanzin', 'O rei Behanzin', 'الملك بيهانزين'),
      L('Le roi Toffa', 'King Toffa', 'El rey Toffa', 'O rei Toffa', 'الملك توفا'),
      L('Almamy Samory Touré', 'Samory Touré', 'Samory Touré', 'Samory Touré', 'ساموري توري'),
    ],
    explanation: L(
      'Formé en droit en Allemagne, Rudolf Douala Manga Bell utilisa les voies légales et diplomatiques pour défendre Douala avant d’être pendu avec Ngosso Din en 1914.',
      'Educated in Germany, King Rudolf Douala Manga Bell led legal resistance to urban expulsions before his execution in 1914.',
      'Educado en Alemania, Rudolf Douala Manga Bell lideró la defensa jurídica de Duala antes de ser ejecutado en 1914.',
      'Educado na Alemanha, Rudolf Douala Manga Bell liderou a defesa jurídica de Duala antes de ser executado em 1914.',
      'قاد الملك رودولف دوالا مانغا بيل مقاومة قانونية شجاعة ضد التهجير الاستعماري قبل إعدامه عام 1914.'
    ),
  }),
  mkQ({
    id: 'cur_CM_13',
    countryCode: 'CM',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'mbongo_tchobi',
    source: 'Cuisine traditionnelle Bassa & Littorale',
    prompt: L(
      'Comment s’appelle la célèbre sauce noire épicée à base de maniguette et d’épices grillées (hiomi, mbongo), spécialité du peuple Bassa ?',
      'What is the famous jet-black spiced fish or meat stew flavored with toasted mbongo spice among the Bassa people?',
      '¿Cómo se llama la famosa salsa negra especiada típica del pueblo bassa?',
      'Como se chama o famoso ensopado escuro e especiado típico do povo bassa?',
      'ما اسم الصلصة السوداء الشهيرة بالتوابل المحمصة لدى شعب باسا؟'
    ),
    countryModePrompt: L(
      'Quel plat traditionnel emblématique doit sa couleur noire intense à une épice torréfiée et pilée appelée « mbongo » ?',
      'Which traditional dish gets its striking jet-black color from a toasted and ground aromatic spice called "mbongo"?',
      '¿Qué plato tradicional debe su intenso color negro a una especia tostada llamada "mbongo"?',
      'Qual prato tradicional deve sua cor preta intensa a uma especiaria torrada chamada "mbongo"?',
      'ما الطبق التقليدي الذي يكتسب لونه الأسود المميز من بهارات «مبونغو» المحمصة؟'
    ),
    correct: L('Le Mbongo Tchobi', 'Mbongo Tchobi', 'El Mbongo Tchobi', 'O Mbongo Tchobi', 'مبونغو تشوبي'),
    distractors: [
      L('Le Thieboudienne', 'Thieboudienne', 'Thieboudienne', 'Thieboudienne', 'ثيبودين'),
      L('Le Tagine aux pruneaux', 'Prune tagine', 'Tayín de ciruelas', 'Tajine de ameixas', 'طاجين البرقوق'),
      L('L’Injera dorowot', 'Injera doro wat', 'Injera doro wat', 'Injera doro wat', 'إنجيرا'),
    ],
    explanation: L(
      'Originaire des peuples Bassa et Bakoko, le Mbongo Tchobi est généralement préparé avec du poisson frais et accompagné de plantain mûr ou de macabo.',
      'Originating among the Bassa people, Mbongo Tchobi pairs rich roasted spices with fresh fish and plantains or cocoyam.',
      'Originario del pueblo bassa, el Mbongo Tchobi combina especias tostadas con pescado fresco y plátano macho.',
      'Originário do povo bassa, o Mbongo Tchobi combina especiarias torradas com peixe fresco e banana-da-terra.',
      'يُعد مبونغو تشوبي طبقاً عريقاً يجمع التوابل المحمصة مع السمك الطازج والموز الأخضر.'
    ),
  }),
  mkQ({
    id: 'cur_CM_14',
    countryCode: 'CM',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'eru_waterfufu',
    source: 'Patrimoine culinaire du Sud-Ouest et Nord-Ouest',
    prompt: L(
      'Quel plat vert généreux à base de feuilles sauvages finement coupées (Gnetum africanum) et de feuilles d’épinard d’eau accompagne traditionnellement le « water fufu » ?',
      'Which hearty green stew made of finely shredded wild okok/Gnetum leaves and waterleaf traditionally accompanies "water fufu"?',
      '¿Qué guiso verde de hojas silvestres cortadas acompaña tradicionalmente al "water fufu"?',
      'Que ensopado verde de folhas silvestres fatiadas acompanha tradicionalmente o "water fufu"?',
      'ما الطبق الأخضر الغني بأوراق الغنيتوم البرية المقطعة الذي يُقدم تقليدياً مع «ووتر فوفو»؟'
    ),
    countryModePrompt: L(
      'Comment s’appelle le célèbre plat des régions anglophones cuisiné avec des feuilles de Gnetum, du poisson fumé, des écrevisses et de l’huile de palme rouge ?',
      'What is the beloved stew made with shredded Gnetum leaves, smoked fish, crayfish, and red palm oil served with water fufu?',
      '¿Cómo se llama el célebre plato preparado con hojas de Gnetum, pescado ahumado y aceite de palma roja?',
      'Como se chama o célebre prato feito com folhas de Gnetum, peixe defumado e azeite de dendê servido com water fufu?',
      'ما الطبق الشهير المحضّر من أوراق الغنيتوم والسمك المدخن وزيت النخيل الأحمر؟'
    ),
    correct: L('L’Eru (avec water fufu)', 'Eru (with water fufu)', 'El Eru (con water fufu)', 'O Eru (com water fufu)', 'الإيرو (مع فوفو الماء)'),
    distractors: [
      L('La Harira', 'Harira', 'Harira', 'Harira', 'الحريرة'),
      L('Le Koshari', 'Koshari', 'Koshari', 'Koshari', 'الكشري'),
      L('La Molokhia', 'Molokhia', 'Molokhia', 'Molokhia', 'الملوخية'),
    ],
    explanation: L(
      'Emblème culinaire des régions du Sud-Ouest et du Nord-Ouest, l’Eru partage la même feuille sauvage que l’Okok du Centre et du Sud.',
      'A culinary staple of the Southwest and Northwest, Eru uses the same wild forest leaf known as Okok further south.',
      'Emblema del Suroeste y Noroeste, el Eru utiliza la misma hoja silvestre llamada Okok en el centro y sur.',
      'Símbolo culinário do Sudoeste e Noroeste, o Eru usa a mesma folha silvestre conhecida como Okok.',
      'يمثل طبق الإيرو أحد أشهر أطباق المطبخ المحلي، ويُحضّر من نفس الورقة المسماة أوكوك.'
    ),
  }),
  mkQ({
    id: 'cur_CM_15',
    countryCode: 'CM',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'bikutsi_music',
    source: 'Ethnomusicologie d’Afrique centrale',
    prompt: L(
      'Quel rythme musical rapide en 6/8 originaire du peuple Béti (Centre) a été popularisé par Anne-Marie Nzié et les Têtes Brûlées ?',
      'Which fast 6/8 musical rhythm rooted among the Beti people was popularized by Anne-Marie Nzié and Les Têtes Brûlées?',
      '¿Qué ritmo musical rápido en 6/8 del pueblo beti fue popularizado por Anne-Marie Nzié y Les Têtes Brûlées?',
      'Que ritmo musical acelerado em 6/8 do povo beti foi popularizado por Anne-Marie Nzié e Les Têtes Brûlées?',
      'ما الإيقاع الموسيقي السريع لدى شعب بيتي الذي نشرته آن ماري نزي وفرقة لي تيت برولي؟'
    ),
    countryModePrompt: L(
      'Quel style musical énergique né autour des balafons du peuple Béti est l’un des deux grands rythmes nationaux avec le Makossa ?',
      'Which energetic dance genre born from Beti balafon rhythms stands alongside Makossa as a national musical pillar?',
      '¿Qué género musical enérgico nacido del balafón beti comparte protagonismo nacional con el Makossa?',
      'Qual gênero musical energético nascido do balafon beti divide o protagonismo nacional com o Makossa?',
      'ما الأسلوب الموسيقي الحماسي المنبثق من إيقاعات البالافون لدى شعب بيتي إلى جانب الماكوسا؟'
    ),
    correct: L('Le Bikutsi', 'Bikutsi', 'El Bikutsi', 'O Bikutsi', 'البيكوتسي'),
    distractors: [
      L('Le Mbalax', 'Mbalax', 'Mbalax', 'Mbalax', 'المبالاكس'),
      L('La Kizomba', 'Kizomba', 'Kizomba', 'Kizomba', 'الكيزومبا'),
      L('Le Marrabenta', 'Marrabenta', 'Marrabenta', 'Marrabenta', 'المارابينتا'),
    ],
    explanation: L(
      'Signifiant littéralement « battons le sol » en ewondo, le Bikutsi tire son énergie du battement des pieds et du balafon.',
      'Literally meaning "beat the earth" in Ewondo, Bikutsi pulses with rapid balafon riffs and electric guitars.',
      'Que significa literalmente "golpear la tierra" en ewondo, el Bikutsi vibra al ritmo del balafón.',
      'Significando literalmente "bater a terra" em ewondo, o Bikutsi vibra com balafons e guitarras.',
      'يعني البيكوتسي حرفياً «اضرب الأرض» بلغة الإيوندو ويتميز بإيقاعه السريع الحيوي.'
    ),
  }),
  mkQ({
    id: 'cur_CM_16',
    countryCode: 'CM',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'ngondo_festival',
    source: 'UNESCO — Patrimoine culturel immatériel (2024)',
    prompt: L(
      'Comment s’appelle la grande fête annuelle culturelle et spirituelle des peuples côtiers Sawa célébrée sur les rives du Wouri à Douala ?',
      'What is the name of the major annual Sawa cultural and spiritual festival held along the Wouri River in Douala?',
      '¿Cómo se llama la gran fiesta anual cultural y espiritual de los pueblos sawa a orillas del Wouri en Duala?',
      'Como se chama a grande festa anual cultural e espiritual dos povos sawa às margens do Wouri em Duala?',
      'ما اسم المهرجان الثقافي والروحي السنوي الكبير لشعوب الساوا على ضفاف نهر ووري في دوالا؟'
    ),
    countryModePrompt: L(
      'Quel grand rassemblement culturel et nautique des peuples Sawa sur le fleuve Wouri inclut le célèbre rite du « vase sacré » ?',
      'Which grand Sawa water and cultural gathering on the Wouri River features the famous "sacred water pot" rite?',
      '¿Qué gran encuentro cultural sawa en el río Wouri incluye el rito del jarrón sagrado?',
      'Qual grande encontro cultural sawa no rio Wouri inclui o rito do vaso sagrado?',
      'ما الاحتفال الثقافي البحري الكبير لشعوب الساوا على نهر ووري؟'
    ),
    correct: L('Le Ngondo', 'Ngondo', 'El Ngondo', 'O Ngondo', 'نغوندو'),
    distractors: [
      L('Le Popo Carnaval', 'Popo Carnival', 'Carnaval Popo', 'Carnaval Popo', 'كرنفال بوبو'),
      L('La Fête du Vodoun', 'Vodoun Festival', 'Fiesta del Vudú', 'Festa do Vodu', 'مهرجان الفودو'),
      L('Le Géréwol', 'Gerewol', 'Gerewol', 'Gerewol', 'غيريوول'),
    ],
    explanation: L(
      'Classé au patrimoine culturel immatériel de l’UNESCO en 2024, le Ngondo célèbre depuis le XIXe siècle l’unité des peuples Sawa.',
      'Inscribed on UNESCO’s Intangible Cultural Heritage list in 2024, Ngondo unites Sawa communities with canoe races and water rites.',
      'Inscrito en la UNESCO en 2024, el Ngondo celebra con regatas y ritos ancestrales la unidad del pueblo sawa.',
      'Inscrito na UNESCO em 2024, o Ngondo celebra a unidade dos povos sawa com regatas e ritos aquáticos.',
      'أُدرج مهرجان نغوندو في قائمة اليونسكو للتراث غير المادي عام 2024 ويحتفي بسباقات القوارب والتقاليد البحرية.'
    ),
  }),
  mkQ({
    id: 'cur_CM_17',
    countryCode: 'CM',
    category: 'culture',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'ferdinand_oyono',
    source: 'Littérature africaine francophone (1956)',
    prompt: L(
      'Quel écrivain et diplomate camerounais est l’auteur du célèbre roman satirique « Une vie de boy » (1956) ?',
      'Which Cameroonian writer and diplomat wrote the famous satirical novel "Houseboy" ("Une vie de boy", 1956)?',
      '¿Qué escritor y diplomático camerunés escribió la célebre novela satírica "Una vida de boy" (1956)?',
      'Que escritor e diplomata camaronês escreveu o célebre romance satírico "Uma vida de boy" (1956)?',
      'من هو الأديب والدبلوماسي الكاميروني مؤلف الرواية الساخرة الشهيرة «حياة خادم» (1956)؟'
    ),
    countryModePrompt: L(
      'Quel célèbre romancier originaire d’Ebolowa écrivit « Une vie de boy » et « Le Vieux Nègre et la Médaille » en 1956 ?',
      'Which celebrated novelist from Ebolowa wrote "Houseboy" ("Une vie de boy") and "The Old Man and the Medal" in 1956?',
      '¿Qué célebre novelista de Ebolowa escribió "Una vida de boy" y "El viejo negro y la medalla" en 1956?',
      'Que célebre romancista de Ebolowa escreveu "Uma vida de boy" e "O Velho Negro e a Medalha" em 1956?',
      'من هو الروائي المنحدر من إيبولوا الذي ألف «حياة خادم» و«العجوز والوسام» عام 1956؟'
    ),
    correct: L('Ferdinand Oyono', 'Ferdinand Oyono', 'Ferdinand Oyono', 'Ferdinand Oyono', 'فرديناند أويونو'),
    distractors: [
      L('Aimé Césaire', 'Aimé Césaire', 'Aimé Césaire', 'Aimé Césaire', 'إيمي سيزير'),
      L('Chinua Achebe', 'Chinua Achebe', 'Chinua Achebe', 'Chinua Achebe', 'تشينوا أتشيبي'),
      L('Sembène Ousmane', 'Ousmane Sembène', 'Ousmane Sembène', 'Ousmane Sembène', 'عثمان سمبين'),
    ],
    explanation: L(
      'Publiés la même année (1956), « Une vie de boy » et « Le Vieux Nègre et la Médaille » de Ferdinand Oyono sont des monuments de la littérature africaine.',
      'Published in 1956, Ferdinand Oyono’s sharp critiques of colonialism became timeless classics across the continent.',
      'Publicadas en 1956, las novelas de Ferdinand Oyono son clásicos esenciales de la literatura africana.',
      'Publicados em 1956, os romances de Ferdinand Oyono tornaram-se clássicos da literatura africana.',
      'تُعد روايتا فرديناند أويونو الصادرتان عام 1956 من أعمدة الأدب الأفريقي المعاصر.'
    ),
  }),
  mkQ({
    id: 'cur_CM_18',
    countryCode: 'CM',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'camfranglais_slang',
    source: 'Linguistique urbaine — Yaoundé & Douala',
    prompt: L(
      'Comment s’appelle le parler urbain créatif né dans les rues de Douala et Yaoundé qui mélange français, anglais, pidgin et langues locales ?',
      'What is the creative urban slang born in Douala and Yaoundé that blends French, English, Pidgin, and local languages?',
      '¿Cómo se llama el habla urbana creativa de Duala y Yaundé que mezcla francés, inglés, pidgin y lenguas locales?',
      'Como se chama a fala urbana criativa de Duala e Yaoundé que mistura francês, inglês, pidgin e línguas locais?',
      'ما اسم اللهجة الحضرية الإبداعية في دوالا وياوندي التي تمزج الفرنسية والإنجليزية والبدجن واللغات المحلية؟'
    ),
    countryModePrompt: L(
      'Quel parler populaire très expressif (« mbeng », « do », « wanda »…) fusionne au quotidien français, anglais et langues nationales ?',
      'Which expressive urban street slang ("mbeng", "do", "wanda"...) fuses French, English, Pidgin, and national languages?',
      '¿Qué jerga urbana muy expresiva mezcla a diario francés, inglés, pidgin y lenguas nacionales?',
      'Que gíria urbana muito expressiva mistura diariamente francês, inglês, pidgin e línguas nacionais?',
      'ما اللهجة الشبابية المعبّرة التي تمزج يومياً بين الفرنسية والإنجليزية واللغات الوطنية؟'
    ),
    correct: L('Le Camfranglais', 'Camfranglais', 'El camfranglais', 'O camfranglais', 'الكامفرانغليه'),
    distractors: [
      L('Le Sheng', 'Sheng', 'El sheng', 'O sheng', 'الشنغ'),
      L('Le Nouchi', 'Nouchi', 'El nouchi', 'O nouchi', 'النوشي'),
      L('Le Tsotsitaal', 'Tsotsitaal', 'El tsotsitaal', 'O tsotsitaal', 'التسوتسيتال'),
    ],
    explanation: L(
      'Né dans les lycées et marchés populaires des années 1970–1980, le Camfranglais reflète le bilinguisme unique et la créativité de la jeunesse.',
      'Born among students and markets in the 1970s–80s, Camfranglais showcases the nation’s unique bilingual street creativity.',
      'Nacido en los años 70-80, el camfranglais refleja el bilingüismo único y la creatividad juvenil.',
      'Surgido nos anos 70-80, o camfranglais reflete o bilinguismo único e a criatividade jovem.',
      'نشأت هذه اللهجة في السبعينيات والثمانينيات لتعكس التعدد اللغوي وإبداع الشباب.'
    ),
  }),
  mkQ({
    id: 'cur_CM_19',
    countryCode: 'CM',
    category: 'culture',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'bandjoun_chefferie',
    source: 'Patrimoine architectural Grassfields (Ouest)',
    prompt: L(
      'Dans l’Ouest du Cameroun (Grassfields), par quel élément architectural monumental reconnaît-on une grande chefferie royale bamiléké comme Bandjoun ?',
      'In Cameroon’s Western Grassfields, what monumental architectural feature distinguishes great Bamileke royal chiefdoms like Bandjoun?',
      'En los Grassfields del Oeste, ¿qué rasgo arquitectónico monumental distingue a las grandes jefaturas bamileké como Bandjoun?',
      'Nos Grassfields do Oeste, que traço arquitetônico monumental distingue os grandes chefados bamileké como Bandjoun?',
      'في مرتفعات الغرب الكاميروني، ما السمة المعمارية الضخمة التي تميز قصور الزعامات الملكية مثل باندجون؟'
    ),
    countryModePrompt: L(
      'Quelle architecture spectaculaire caractérise les grandes cases patrimoniales « Nemo » des chefferies bamiléké comme Bandjoun ou Bafut ?',
      'Which spectacular architecture characterizes the ceremonial "Nemo" halls of royal chiefdoms like Bandjoun and Bafut?',
      '¿Qué arquitectura espectacular caracteriza las grandes casas ceremoniales de jefaturas como Bandjoun o Bafut?',
      'Qual arquitetura espetacular caracteriza as grandes casas cerimoniais de chefados como Bandjoun ou Bafut?',
      'ما الطراز المعماري المبهر الذي يميز القاعات الملكية التراثية في باندجون وبافوت؟'
    ),
    correct: L(
      'Un immense toit conique de chaume soutenu par des piliers sculptés de personnages et d’animaux',
      'A towering conical thatched roof supported by richly carved wooden pillars',
      'Un inmenso techo cónico de paja sostenido por pilares de madera tallados',
      'Um imenso telhado cônico de palha sustentado por pilares de madeira esculpidos',
      'سقف مخروطي شاهق من القش تحمله أعمدة خشبية منحوتة بدقة'
    ),
    distractors: [
      L('Des coupoles de marbre blanc inspirées d’Athènes', 'White marble Greek domes', 'Cúpulas de mármol blanco', 'Cúpulas de mármore branco', 'قباب رخامية بيضاء'),
      L('Des gratte-ciel en verre et acier', 'Glass and steel skyscrapers', 'Rascacielos de cristal', 'Arranha-céus de vidro', 'ناطحات سحاب زجاجية'),
      L('Des igloos en pierre polie', 'Polished stone igloos', 'Iglús de piedra', 'Iglus de pedra', 'بيوت ثلجية حجرية'),
    ],
    explanation: L(
      'Chef-d’œuvre de charpente sans clous métalliques, la grande case Nemo de Bandjoun symbolise le prestige, la cosmogonie et la continuité des ancêtres.',
      'Built without metal nails, Bandjoun’s monumental Nemo hall blends carved symbolism with masterful timber engineering.',
      'Construida sin clavos metálicos, la gran casa de Bandjoun une ingeniería tradicional en madera y simbolismo real.',
      'Construída sem pregos metálicos, a grande casa de Bandjoun combina engenharia em madeira e simbolismo real.',
      'شُيدت هذه القاعات الملكية بخشب منحوت دون مسامير معدنية لتجسيد التراث والمهارة المعمارية.'
    ),
  }),
  mkQ({
    id: 'cur_CM_20',
    countryCode: 'CM',
    category: 'culture',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'calixthe_beyala_mongo_beti',
    source: 'Académie française (1996)',
    prompt: L(
      'Quelle romancière franco-camerounaise a reçu en 1996 le Grand Prix du roman de l’Académie française pour « Les Honneurs perdus » ?',
      'Which Cameroonian-born novelist won the 1996 Grand Prix du roman de l’Académie française for "Les Honneurs perdus"?',
      '¿Qué novelista de origen camerunés recibió en 1996 el Gran Premio de Novela de la Academia Francesa?',
      'Qual romancista de origem camaronesa recebeu em 1996 o Grande Prêmio do Romance da Academia Francesa?',
      'من هي الروائية الكاميرونية الأصل التي فازت عام 1996 بالجائزة الكبرى للرواية من الأكاديمية الفرنسية؟'
    ),
    countryModePrompt: L(
      'Quelle écrivaine née à Douala a décroché le Grand Prix du roman de l’Académie française en 1996 avec « Les Honneurs perdus » ?',
      'Which writer born in Douala won the 1996 Grand Prix du roman de l’Académie française for "Les Honneurs perdus"?',
      '¿Qué escritora nacida en Duala ganó el Gran Premio de la Academia Francesa en 1996?',
      'Qual escritora nascida em Duala venceu o Grande Prêmio da Academia Francesa em 1996?',
      'من هي الأديبة المولودة في دوالا الفائزة بالجائزة الكبرى للرواية من الأكاديمية الفرنسية عام 1996؟'
    ),
    correct: L('Calixthe Beyala', 'Calixthe Beyala', 'Calixthe Beyala', 'Calixthe Beyala', 'كاليكست بيالا'),
    distractors: [
      L('Werewere Liking', 'Werewere Liking', 'Werewere Liking', 'Werewere Liking', 'ويري وير ليكينغ'),
      L('Ken Bugul', 'Ken Bugul', 'Ken Bugul', 'Ken Bugul', 'كين بوغول'),
      L('Scholastique Mukasonga', 'Scholastique Mukasonga', 'Scholastique Mukasonga', 'Scholastique Mukasonga', 'سكولاستيك موكاسونغا'),
    ],
    explanation: L(
      'Avec plus de vingt romans traduits dans le monde, Calixthe Beyala est devenue en 1996 la première femme africaine lauréate de ce grand prix littéraire.',
      'Author of over twenty acclaimed novels, Calixthe Beyala became the first African woman to win the Académie française Grand Prix in 1996.',
      'Calixthe Beyala se convirtió en 1996 en la primera mujer africana en ganar el Gran Premio de Novela de la Academia Francesa.',
      'Calixthe Beyala tornou-se em 1996 a primeira mulher africana a conquistar o Grande Prêmio da Academia Francesa.',
      'أصبحت كاليكست بيالا عام 1996 أول امرأة أفريقية تفوز بهذه الجائزة الأدبية المرموقة.'
    ),
  }),
  mkQ({
    id: 'cur_CM_21',
    countryCode: 'CM',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'mbango_triple_jump_gold',
    source: 'Comité International Olympique (Athènes 2004 & Pékin 2008)',
    prompt: L(
      'Quelle athlète camerounaise a remporté deux médailles d’or olympiques consécutives au triple saut en 2004 et 2008 ?',
      'Which Cameroonian track-and-field star won back-to-back Olympic gold medals in the triple jump in 2004 and 2008?',
      '¿Qué atleta camerunesa ganó dos medallas de oro olímpicas consecutivas en triple salto en 2004 y 2008?',
      'Qual atleta camaronesa conquistou duas medalhas de ouro olímpicas consecutivas no salto triplo em 2004 e 2008?',
      'من هي بطلة ألعاب القوى الكاميرونية التي أحرزت ذهبيتين أولمبيتين متتاليتين في الوثب الثلاثي عامي 2004 و2008؟'
    ),
    countryModePrompt: L(
      'Quelle championne olympique de triple saut a offert au pays ses deux sacres olympiques individuels à Athènes (2004) et Pékin (2008) ?',
      'Which triple-jump legend captured back-to-back individual Olympic gold medals in Athens (2004) and Beijing (2008)?',
      '¿Qué campeona de triple salto dio al país sus dos oros olímpicos individuales en 2004 y 2008?',
      'Qual campeã de salto triplo conquistou dois ouros olímpicos individuais seguidos em 2004 e 2008?',
      'من هي بطلة الوثب الثلاثي التي أهدت البلاد ذهبيتين أولمبيتين متتاليتين في أثينا 2004 وبكين 2008؟'
    ),
    correct: L('Françoise Mbango Etone', 'Françoise Mbango Etone', 'Françoise Mbango Etone', 'Françoise Mbango Etone', 'فرانسواز مبانغو إيتوني'),
    distractors: [
      L('Derartu Tulu', 'Derartu Tulu', 'Derartu Tulu', 'Derartu Tulu', 'ديرارتو تولو'),
      L('Tirunesh Dibaba', 'Tirunesh Dibaba', 'Tirunesh Dibaba', 'Tirunesh Dibaba', 'تيرونيش ديبابا'),
      L('Hassiba Boulmerka', 'Hassiba Boulmerka', 'Hassiba Boulmerka', 'Hassiba Boulmerka', 'حسيبة بولمرقة'),
    ],
    explanation: L(
      'Avec un bond de 15,39 m à Pékin en 2008 (record olympique de l’époque), Françoise Mbango Etone reste une légende absolue de l’athlétisme africain.',
      'Leaping 15.39m in Beijing 2008, Françoise Mbango Etone remains an all-time icon of African athletics.',
      'Con un salto de 15,39 m en Pekín 2008, Françoise Mbango Etone es leyenda del atletismo africano.',
      'Com um salto de 15,39 m em Pequim 2008, Françoise Mbango Etone é uma lenda do atletismo africano.',
      'حققت قفزة تاريخية بلغت 15.39 متراً في بكين 2008 لتدخل تاريخ الأولمبياد.'
    ),
  }),
  mkQ({
    id: 'cur_CM_22',
    countryCode: 'CM',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'oryx_douala_1965',
    source: 'CAF — Première Coupe des Clubs Champions (1964–1965)',
    prompt: L(
      'Quel club de Douala a marqué l’histoire en remportant en 1965 la toute première édition de la Coupe d’Afrique des clubs champions ?',
      'Which Douala club made history in 1965 by winning the very first edition of the African Cup of Champions Clubs?',
      '¿Qué club de Duala hizo historia en 1965 al ganar la primera Copa Africana de Clubes Campeones?',
      'Qual clube de Duala fez história em 1965 ao vencer a primeira edição da Copa dos Campeões da África?',
      'أي نادٍ من دوالا صنع التاريخ عام 1965 بفوزه بالنسخة الأولى من بطولة أفريقيا للأندية الأبطال؟'
    ),
    countryModePrompt: L(
      'Quel club historique de Douala devint en février 1965 le tout premier champion d’Afrique des clubs de l’histoire ?',
      'Which historic Douala club became Africa’s very first continental club champion in February 1965?',
      '¿Qué club histórico de Duala se convirtió en febrero de 1965 en el primer campeón africano de clubes?',
      'Qual clube histórico de Duala tornou-se em fevereiro de 1965 o primeiro campeão africano de clubes?',
      'أي نادٍ عريق في دوالا أصبح في فبراير 1965 أول بطل أفريقي للأندية في التاريخ؟'
    ),
    correct: L('L’Oryx Douala', 'Oryx Douala', 'Oryx Duala', 'Oryx Duala', 'أوريكس دوالا'),
    distractors: [
      L('L’Union Douala', 'Union Douala', 'Union Duala', 'Union Duala', 'يونيون دوالا'),
      L('Le Tonnerre Yaoundé', 'Tonnerre Yaoundé', 'Tonnerre Yaundé', 'Tonnerre Yaoundé', 'تونير ياوندي'),
      L('Le Coton Sport de Garoua', 'Coton Sport', 'Coton Sport', 'Coton Sport', 'كوتون سبور'),
    ],
    explanation: L(
      'Porté par Samuel Mbappé Léppé, l’Oryx Douala battit le Stade Malien (2-1) à Accra le 7 février 1965 pour inaugurer le palmarès continental.',
      'Captained by Samuel Mbappé Léppé, Oryx Douala beat Stade Malien 2-1 in Accra on February 7, 1965 to lift the inaugural trophy.',
      'Liderado por Samuel Mbappé Léppé, el Oryx Duala derrotó al Stade Malien 2-1 en Accra en 1965.',
      'Capitaneado por Samuel Mbappé Léppé, o Oryx Duala venceu o Stade Malien por 2 a 1 em 1965.',
      'بقيادة صامويل مبابي ليبي توج أوريكس دوالا بأول نسخة للبطولة الأفريقية للأندية عام 1965.'
    ),
  }),
  mkQ({
    id: 'cur_CM_23',
    countryCode: 'CM',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'mboma_2000_poty',
    source: 'CAF Awards & JO Sydney 2000',
    prompt: L(
      'Quel puissant attaquant gaucher des Lions Indomptables, médaillé d’or à Sydney 2000, a été sacré Joueur Africain de l’Année 2000 ?',
      'Which powerful left-footed Indomitable Lions striker, Sydney 2000 gold medalist, won the 2000 African Footballer of the Year award?',
      '¿Qué potente delantero zurdo de los Leones Indomables, oro en Sídney 2000, ganó el premio al Mejor Jugador Africano en 2000?',
      'Que poderoso atacante canhoto dos Leões Indomáveis, ouro em Sydney 2000, foi eleito o Melhor Jogador Africano de 2000?',
      'من هو المهاجم الأعسر القوي لمنتخب الأسود غير المروضة والفائز بذهبية سيدني 2000 وأفضل لاعب أفريقي لعام 2000؟'
    ),
    countryModePrompt: L(
      'Quel buteur surnommé « Magic » ou connu pour ses retournés acrobatiques remporta à la fois l’or olympique, la CAN et le Ballon d’Or africain en 2000 ?',
      'Which prolific left-footed striker won AFCON, Olympic Gold, and CAF African Player of the Year all in 2000?',
      '¿Qué goleador zurdo ganó la CAN, el oro olímpico y el Balón de Oro africano en el año 2000?',
      'Qual artilheiro canhoto venceu a CAN, o ouro olímpico e a Bola de Ouro africana em 2000?',
      'من هو المهاجم الأعسر الذي توج بأمم أفريقيا وذهبية الأولمبياد وأفضل لاعب أفريقي في عام 2000؟'
    ),
    correct: L('Patrick Mboma', 'Patrick Mboma', 'Patrick Mboma', 'Patrick Mboma', 'باتريك مبوما'),
    distractors: [
      L('El-Hadji Diouf', 'El Hadji Diouf', 'El-Hadji Diouf', 'El Hadji Diouf', 'الحاج ضيوف'),
      L('Nwankwo Kanu', 'Nwankwo Kanu', 'Nwankwo Kanu', 'Nwankwo Kanu', 'نوانكو كانو'),
      L('Hossam Hassan', 'Hossam Hassan', 'Hossam Hassan', 'Hossam Hassan', 'حسام حسن'),
    ],
    explanation: L(
      'Auteur d’un retourné légendaire au Parc des Princes et co-meilleur buteur de la CAN 2002, Patrick Mboma a régné sur l’année 2000.',
      'Famous for his thunderous left-foot strikes and Olympic heroics, Patrick Mboma dominated African football in 2000.',
      'Famoso por sus potentes remates y su año dorado, Patrick Mboma dominó el fútbol africano en 2000.',
      'Famoso pelos chutes potentes de esquerda, Patrick Mboma dominou o futebol africano em 2000.',
      'سجل باتريك مبوما عاماً استثنائياً عام 2000 بجمعه بين اللقب القاري والذهبية الأولمبية وجائزة الأفضل.'
    ),
  }),
  mkQ({
    id: 'cur_CM_24',
    countryCode: 'CM',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'embiid_siakam_nba',
    source: 'NBA — Distinctions individuelles (2019–2023)',
    prompt: L(
      'Quels deux basketteurs nés au Cameroun ont marqué l’histoire de la NBA en remportant le titre de MVP (2023) pour l’un et le titre NBA avec Toronto (2019) pour l’autre ?',
      'Which two Cameroon-born NBA stars won League MVP (2023) and the NBA Championship with Toronto (2019) respectively?',
      '¿Qué dos estrellas de la NBA nacidas en Camerún ganaron respectivamente el MVP de 2023 y el anillo de 2019 con Toronto?',
      'Quais dois astros da NBA nascidos nos Camarões venceram o MVP de 2023 e o título de 2019 com Toronto respectivamente?',
      'من هما نجما كرة السلة الكاميرونيان المولد اللذان فاز أحدهما بجائزة أفضل لاعب في NBA (2023) والآخر ببطولة 2019 مع تورونتو؟'
    ),
    countryModePrompt: L(
      'Quels deux géants de la NBA formés dans les camps locaux sont devenus respectivement MVP 2023 (Philadelphie) et champion NBA 2019 (Toronto) ?',
      'Which two NBA stars born in the country won 2023 League MVP (Philadelphia) and the 2019 NBA Championship (Toronto)?',
      '¿Qué dos gigantes de la NBA nacidos en el país fueron MVP en 2023 y campeón NBA en 2019?',
      'Quais dois gigantes da NBA nascidos no país foram MVP em 2023 e campeão da NBA em 2019?',
      'من هما نجما دوري NBA المولودان في البلاد اللذان حقق أحدهما جائزة MVP 2023 والآخر لقب 2019؟'
    ),
    correct: L('Joel Embiid et Pascal Siakam', 'Joel Embiid and Pascal Siakam', 'Joel Embiid y Pascal Siakam', 'Joel Embiid e Pascal Siakam', 'جويل إمبيد وباسكال سياكام'),
    distractors: [
      L('Manute Bol et Luol Deng', 'Manute Bol and Luol Deng', 'Manute Bol y Luol Deng', 'Manute Bol e Luol Deng', 'مانوت بول ولوول دينغ'),
      L('Hakeem Olajuwon et Giannis Antetokounmpo', 'Hakeem Olajuwon and Giannis Antetokounmpo', 'Hakeem Olajuwon y Giannis Antetokounmpo', 'Hakeem Olajuwon e Giannis Antetokounmpo', 'حكيم أولاجوان ويانيس أنتيتوكونمبو'),
      L('Bismack Biyombo et Dikembe Mutombo', 'Bismack Biyombo and Dikembe Mutombo', 'Bismack Biyombo y Dikembe Mutombo', 'Bismack Biyombo e Dikembe Mutombo', 'بيزماك بيومبو وديكيمبي موتومبو'),
    ],
    explanation: L(
      'Découverts tous deux grâce au camp Basketball Without Borders de Luc Mbah a Moute, Joel Embiid (Yaoundé) et Pascal Siakam (Douala) brillent au sommet de la NBA.',
      'Both discovered through Luc Mbah a Moute’s camps, Joel Embiid and Pascal Siakam became elite NBA superstars.',
      'Descubiertos gracias a los campus de Luc Mbah a Moute, Embiid y Siakam brillan en la élite de la NBA.',
      'Descobertos nos projetos de Luc Mbah a Moute, Joel Embiid e Pascal Siakam tornaram-se astros da NBA.',
      'برز جويل إمبيد وباسكال سياكام من معسكرات لوك مباه أ موتي ليصبحا من أبرز نجوم الـ NBA.'
    ),
  }),
  mkQ({
    id: 'cur_CM_25',
    countryCode: 'CM',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'canon_yaounde_treble',
    source: 'CAF Interclubs — Canon Sportif de Yaoundé',
    prompt: L(
      'Combien de fois le célèbre club « Canon Sportif de Yaoundé » a-t-il remporté la Coupe d’Afrique des clubs champions (Ligue des Champions) ?',
      'How many times has the famous club Canon Yaoundé won the African Cup of Champions Clubs (CAF Champions League)?',
      '¿Cuántas veces ha ganado el Canon de Yaundé la Copa Africana de Clubes Campeones?',
      'Quantas vezes o famoso Canon Yaoundé venceu a Copa dos Campeões da África?',
      'كم مرة توج نادي كانون ياوندي العريق ببطولة أفريقيا للأندية الأبطال؟'
    ),
    countryModePrompt: L(
      'Combien de Ligues des Champions africaines (Coupes des clubs champions) le prestigieux Canon Sportif de Yaoundé a-t-il remportées ?',
      'How many African Cup of Champions Clubs titles has Canon Yaoundé won?',
      '¿Cuántos títulos de campeón africano de clubes ha conquistado el Canon de Yaundé?',
      'Quantos títulos africanos de clubes campeões o Canon Yaoundé conquistou?',
      'كم لقباً في دوري أبطال أفريقيا أحرزه نادي كانون ياوندي؟'
    ),
    correct: L('3 fois (1971, 1978, 1980)', '3 times (1971, 1978, 1980)', '3 veces (1971, 1978, 1980)', '3 vezes (1971, 1978, 1980)', '3 مرات (1971 و1978 و1980)'),
    distractors: [
      L('0 fois', '0 times', '0 veces', '0 vezes', 'صفر'),
      L('1 fois (2015)', '1 time (2015)', '1 vez (2015)', '1 vez (2015)', 'مرة واحدة (2015)'),
      L('12 fois', '12 times', '12 veces', '12 vezes', '12 مرة'),
    ],
    explanation: L(
      'Surnommé « Kpa Kum », le Canon de Yaoundé avec Théophile Abega et Thomas Nkono domina l’Afrique dans les années 1970 (3 C1 et 1 C2 en 1979).',
      'Nicknamed "Kpa Kum," Canon Yaoundé won 3 Champions Cups (1971, 1978, 1980) plus the 1979 Cup Winners’ Cup.',
      'Apodado "Kpa Kum", el Canon Yaundé reinó en África en los años 70 con tres Copas de Campeones.',
      'Apelidado de "Kpa Kum", o Canon Yaoundé dominou os anos 70 com três Copas dos Campeões.',
      'حقق كانون ياوندي اللقب القاري ثلاث مرات في الأعوام 1971 و1978 و1980.'
    ),
  }),
  mkQ({
    id: 'cur_CM_26',
    countryCode: 'CM',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'abega_afcon_1984',
    source: 'CAF — CAN 1984 (Abidjan)',
    prompt: L(
      'Qui était le capitaine et stratège milieu de terrain surnommé « le Docteur » qui souleva la première CAN du Cameroun en 1984 ?',
      'Who was the midfield captain nicknamed "The Doctor" who lifted Cameroon’s first-ever AFCON trophy in 1984?',
      '¿Quién fue el capitán y cerebro apodado "el Doctor" que levantó la primera CAN de Camerún en 1984?',
      'Quem foi o capitão e maestro apelidado de "o Doutor" que ergueu a primeira CAN dos Camarões em 1984?',
      'من هو القائد وصانع الألعاب الملقب بـ«الدكتور» الذي رفع أول كأس أمم أفريقيا للكاميرون عام 1984؟'
    ),
    countryModePrompt: L(
      'Quel milieu de terrain surnommé « le Docteur », Ballon d’Or africain 1984, mena les Lions à leur tout premier sacre continental à Abidjan ?',
      'Which midfielder nicknamed "The Doctor," 1984 African Player of the Year, captained the Lions to their first AFCON title?',
      '¿Qué centrocampista apodado "el Doctor", Balón de Oro africano 1984, capitaneó el primer título continental?',
      'Qual meio-campista apelidado de "o Doutor", Bola de Ouro africano de 1984, capitaneou o primeiro título da CAN?',
      'من هو لاعب الوسط الملقب بـ«الدكتور» وأفضل لاعب أفريقي 1984 الذي قاد المنتخب لأول لقب قاري؟'
    ),
    correct: L('Théophile Abega', 'Théophile Abega', 'Théophile Abega', 'Théophile Abega', 'تيوفيل أبيغا'),
    distractors: [
      L('Marc-Vivien Foé', 'Marc-Vivien Foé', 'Marc-Vivien Foé', 'Marc-Vivien Foé', 'مارك فيفيان فوي'),
      L('Geremi Njitap', 'Geremi Njitap', 'Geremi Njitap', 'Geremi Njitap', 'جيريمي نجيتاب'),
      L('Alexandre Song', 'Alex Song', 'Alex Song', 'Alex Song', 'ألكسندر سونغ'),
    ],
    explanation: L(
      'Auteur d’un but splendide en finale contre le Nigeria (3-1) à Abidjan, Théophile Abega reçut le Ballon d’Or africain en 1984.',
      'Scoring a superb goal in the 3-1 final against Nigeria in Abidjan, Théophile Abega was crowned 1984 African Footballer of the Year.',
      'Con un golazo en la final 3-1 ante Nigeria en Abiyán, Théophile Abega ganó el Balón de Oro africano 1984.',
      'Com um belo gol na final por 3 a 1 sobre a Nigéria em Abidjan, Théophile Abega venceu a Bola de Ouro africana de 1984.',
      'سجل تيوفيل أبيغا هدفاً رائعاً في نهائي 1984 ضد نيجيريا وحصد جائزة أفضل لاعب أفريقي للعام نفسه.'
    ),
  }),
  mkQ({
    id: 'cur_CM_27',
    countryCode: 'CM',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'foe_number17_legacy',
    source: 'FIFA — Coupe des Confédérations 2003',
    prompt: L(
      'Quel milieu de terrain camerounais très apprécié, mort tragiquement sur le terrain lors de la Coupe des Confédérations 2003 à Lyon, continue d’inspirer un hommage éternel avec le numéro 17 ?',
      'Which beloved Cameroonian midfielder passed away tragically on the pitch during the 2003 Confederations Cup in Lyon, immortalizing his number 17 shirt?',
      '¿Qué querido centrocampista camerunés falleció trágicamente en el campo durante la Copa Confederaciones 2003 en Lyon?',
      'Que querido meio-campista camaronês faleceu tragicamente em campo na Copa das Confederações de 2003 em Lyon?',
      'من هو لاعب الوسط الكاميروني المحبوب الذي توفي بشكل مأساوي على أرض الملعب في كأس القارات 2003 بليون؟'
    ),
    countryModePrompt: L(
      'Quel milieu de terrain international disparu en plein match en juin 2003 à Lyon reste honoré par le retrait du maillot numéro 17 dans ses anciens clubs ?',
      'Which international midfielder who tragically collapsed during a match in June 2003 in Lyon is eternally honored through the number 17?',
      '¿Qué centrocampista internacional fallecido en pleno partido en 2003 en Lyon sigue siendo honrado con el dorsal 17?',
      'Que meio-campista internacional falecido em campo em 2003 em Lyon segue eternamente homenageado pela camisa 17?',
      'من هو لاعب الوسط الدولي الذي توفي خلال مباراة عام 2003 بليون وبقي القميص رقم 17 خالداً لذكراه؟'
    ),
    correct: L('Marc-Vivien Foé', 'Marc-Vivien Foé', 'Marc-Vivien Foé', 'Marc-Vivien Foé', 'مارك فيفيان فوي'),
    distractors: [
      L('Laurent Etame Mayer', 'Lauren Etame Mayer', 'Lauren Etame Mayer', 'Lauren Etame Mayer', 'لوران إيتامي'),
      L('Salomon Olembé', 'Salomon Olembé', 'Salomon Olembé', 'Salomon Olembé', 'سالومون أوليمبي'),
      L('Pierre Womé', 'Pierre Womé', 'Pierre Womé', 'Pierre Womé', 'بيير وومي'),
    ],
    explanation: L(
      'Pilier des sacres CAN 2000 et 2002, Marc-Vivien Foé a inspiré la création d’un trophée prestigieux de Ligue 1 portant son nom.',
      'Champion at AFCON 2000 and 2002, Marc-Vivien Foé is honored annually through France’s Prix Marc-Vivien Foé for top African players.',
      'Campeón en las CAN 2000 y 2002, Marc-Vivien Foé da nombre al prestigioso premio anual al mejor jugador africano de la Ligue 1.',
      'Campeão da CAN em 2000 e 2002, Marc-Vivien Foé dá nome ao prêmio anual do melhor africano da Ligue 1.',
      'سُمي باسم البطل مارك فيفيان فوي جائزة سنوية مرموقة لأفضل لاعب أفريقي في الدوري الفرنسي.'
    ),
  }),
  mkQ({
    id: 'cur_CM_28',
    countryCode: 'CM',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 3,
    topicKey: 'kribi_deepwater_port',
    source: 'Infrastructures portuaires du Cameroun',
    prompt: L(
      'Quel grand port en eau profonde inauguré en 2018 dans le Sud du Cameroun complète le port fluvial engorgé de Douala ?',
      'Which major deepwater port opened in 2018 in southern Cameroon to complement Douala’s river port?',
      '¿Qué gran puerto de aguas profundas inaugurado en 2018 en el sur complementa al puerto fluvial de Duala?',
      'Qual grande porto de águas profundas inaugurado em 2018 no sul complementa o porto fluvial de Duala?',
      'ما الميناء البحري العميق الذي افتُتح عام 2018 جنوب الكاميرون لتخفيف الضغط عن ميناء دوالا النهري؟'
    ),
    countryModePrompt: L(
      'Quel port maritime en eau profonde du Sud complète depuis 2018 les capacités logistiques du port de Douala ?',
      'Which southern deepwater ocean port has complemented Douala’s logistics capacity since 2018?',
      '¿Qué puerto marítimo de aguas profundas del sur complementa desde 2018 al puerto de Duala?',
      'Qual porto marítimo de águas profundas do sul complementa desde 2018 o porto de Duala?',
      'ما الميناء العميق في الجنوب الذي يكمل منذ 2018 القدرات اللوجستية لميناء دوالا؟'
    ),
    correct: L('Le port autonome de Kribi', 'The Deepwater Port of Kribi', 'El puerto de Kribi', 'O porto de Kribi', 'ميناء كريبي العميق'),
    distractors: [
      L('Le port de Garoua', 'Port of Garoua', 'Puerto de Garoua', 'Porto de Garoua', 'ميناء غاروا'),
      L('Le port de Maroua', 'Port of Maroua', 'Puerto de Maroua', 'Porto de Maroua', 'ميناء ماروا'),
      L('Le port de Bafoussam', 'Port of Bafoussam', 'Puerto de Bafoussam', 'Porto de Bafoussam', 'ميناء بافوسام'),
    ],
    explanation: L(
      'Grâce à un tirant d’eau naturel supérieur à 15 mètres, le port de Kribi accueille les grands navires porte-conteneurs de l’Atlantique.',
      'With a natural draft over 15 meters, Kribi accommodates large ocean-going container vessels.',
      'Con más de 15 metros de calado natural, el puerto de Kribi recibe grandes buques oceánicos.',
      'Com mais de 15 metros de calado natural, o porto de Kribi recebe grandes navios porta-contêineres.',
      'يستقبل ميناء كريبي سفن الشحن العملاقة بفضل عمقه الطبيعي الذي يتجاوز 15 متراً.'
    ),
  }),
  mkQ({
    id: 'cur_CM_29',
    countryCode: 'CM',
    category: 'history',
    subCategory: 'sciences_innovations',
    difficulty: 4,
    topicKey: 'bamoun_njoya_museum',
    source: 'UNESCO & Palais royal des Rois Bamoun',
    prompt: L(
      'Dans quelle ville se dresse le célèbre Palais-Musée en forme de serpent bicéphale et d’araignée mygale des rois Bamoun ?',
      'In which city stands the famous Palace-Museum of the Bamoun kings shaped like a two-headed serpent and spider?',
      '¿En qué ciudad se levanta el famoso Palacio-Museo de los reyes bamún con forma de serpiente bicéfala y araña?',
      'Em que cidade ergue-se o famoso Palácio-Museu dos reis bamum em forma de serpente bicéfala e aranha?',
      'في أي مدينة يقع قصر ومتحف ملوك البامون المصمم على هيئة أفعى برأسين وعنكبوت؟'
    ),
    countryModePrompt: L(
      'Quelle cité abrite le spectaculaire Musée des Rois Bamoun, bâti sous les symboles royaux du serpent à deux têtes et de l’araignée ?',
      'Which historic town houses the spectacular Museum of the Bamoun Kings, built in the shape of the two-headed serpent and spider?',
      '¿Qué ciudad alberga el espectacular Museo de los Reyes Bamún?',
      'Qual cidade abriga o espetacular Museu dos Reis Bamum?',
      'أي مدينة تحتضن متحف ملوك البامون المميز برموز الأفعى ذات الرأسين والعنكبوت؟'
    ),
    correct: L('Foumban', 'Foumban', 'Foumban', 'Foumban', 'فومبان'),
    distractors: [
      L('Kumba', 'Kumba', 'Kumba', 'Kumba', 'كومبا'),
      L('Nkongsamba', 'Nkongsamba', 'Nkongsamba', 'Nkongsamba', 'نكونغسامبا'),
      L('Mbalmayo', 'Mbalmayo', 'Mbalmayo', 'Mbalmayo', 'مبالمايو'),
    ],
    explanation: L(
      'Inauguré dans son nouveau bâtiment architectural en 2024, le Musée des Rois Bamoun à Foumban conserve des siècles d’archives royales et de manuscrits Shu-Mom.',
      'Unveiled in its striking new architectural form in 2024, Foumban’s Royal Museum safeguards centuries of Bamoun heritage and Shu-Mom manuscripts.',
      'El Museo de los Reyes Bamún en Foumban conserva siglos de arte real y manuscritos Shu-Mom.',
      'O Museu dos Reis Bamum em Foumban preserva séculos de arte real e manuscritos Shu-Mom.',
      'يحفظ متحف ملوك البامون في فومبان قروناً من التراث الملكي ومخطوطات كتابة شو-موم.'
    ),
  }),
  mkQ({
    id: 'cur_CM_30',
    countryCode: 'CM',
    category: 'culture',
    subCategory: 'economie_developpement',
    difficulty: 2,
    topicKey: 'penja_white_pepper',
    source: 'OAPI — Première Indication Géographique Protégée d’Afrique subsaharienne',
    prompt: L(
      'Quelle épice célèbre cultivée sur les terres volcaniques du Moungo au Cameroun a obtenu la toute première Indication Géographique Protégée (IGP) d’Afrique subsaharienne ?',
      'Which prized spice grown on the volcanic soils of Moungo in Cameroon earned Sub-Saharan Africa’s very first Protected Geographical Indication (PGI)?',
      '¿Qué célebre especia cultivada en tierras volcánicas del Moungo en Camerún obtuvo la primera Indicación Geográfica Protegida del África subsahariana?',
      'Qual famosa especiaria cultivada em solos vulcânicos de Moungo nos Camarões obteve a primeira Indicação Geográfica Protegida da África Subsaariana?',
      'ما التابل الشهير المزروع في تربة مونغو البركانية بالكاميرون الذي نال أول علامة مؤشر جغرافي محمي في أفريقيا جنوب الصحراء؟'
    ),
    countryModePrompt: L(
      'Quel célèbre poivre cultivé dans les sols volcaniques du Moungo fut le tout premier produit d’Afrique subsaharienne labellisé IGP ?',
      'Which renowned pepper grown in volcanic Moungo soils became Sub-Saharan Africa’s first PGI-certified product?',
      '¿Qué famosa pimienta cultivada en suelos volcánicos del Moungo obtuvo la primera IGP del África subsahariana?',
      'Qual famosa pimenta cultivada em solos vulcânicos de Moungo recebeu a primeira IGP da África Subsaariana?',
      'ما الفلفل الشهير المزروع في تربة مونغو البركانية الذي نال أول شهادة مؤشر جغرافي محمي؟'
    ),
    correct: L('Le poivre blanc de Penja', 'Penja white pepper', 'La pimienta blanca de Penja', 'A pimenta-branca de Penja', 'فلفل بينجا الأبيض'),
    distractors: [
      L('Le safran de Taliouine', 'Taliouine saffron', 'Azafrán de Taliouine', 'Açafrão de Taliouine', 'زعفران تالوين'),
      L('Le clou de girofle de Pemba', 'Pemba cloves', 'Clavo de Pemba', 'Cravo de Pemba', 'قرنفل بيمبا'),
      L('La vanille de Sava', 'Sava vanilla', 'Vainilla de Sava', 'Baunilha de Sava', 'فانيليا سافا'),
    ],
    explanation: L(
      'Apprécié des plus grands chefs cuisiniers du monde, le poivre de Penja est reconnu officiellement depuis 2013 pour son terroir volcanique unique.',
      'Prized by top chefs worldwide, Penja pepper received official PGI protection in 2013 for its volcanic terroir.',
      'Apreciada por chefs de todo el mundo, la pimienta de Penja obtuvo en 2013 su reconocimiento geográfico.',
      'Apreciada por chefs no mundo todo, a pimenta de Penja recebeu proteção geográfica oficial em 2013.',
      'يحظى فلفل بينجا الأبيض بتقدير كبار الطهاة العالميين بفضل تربته البركانية الفريدة.'
    ),
  }),
];

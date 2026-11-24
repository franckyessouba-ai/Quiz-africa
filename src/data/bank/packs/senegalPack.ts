import { L } from '../../countriesPart1';
import { mkQ } from './packHelpers';

export const SENEGAL_CURATED_PACK = [
  mkQ({
    id: 'cur_SN_01',
    countryCode: 'SN',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 1,
    topicKey: 'saint_louis_ndar_pont_faidherbe',
    source: 'UNESCO — Île de Saint-Louis',
    prompt: L(
      'Quelle ancienne capitale du Sénégal jusqu’en 1957, bâtie sur une île à l’embouchure du fleuve Sénégal et reliée par le pont Faidherbe, est classée à l’UNESCO ?',
      'Which former capital of Senegal until 1957, built on an island and linked by the iconic Faidherbe Bridge, is a UNESCO site?',
      '¿Qué antigua capital de Senegal hasta 1957, situada en una isla y unida por el puente Faidherbe, es Patrimonio de la UNESCO?',
      'Qual antiga capital do Senegal até 1957, situada numa ilha e ligada pela ponte Faidherbe, é Patrimônio da UNESCO?',
      'ما العاصمة السابقة للسنغال حتى 1957 المبنية على جزيرة والمتصلة بجسر فايديرب والمسجلة لدى اليونسكو؟'
    ),
    countryModePrompt: L(
      'Quelle île historique surnommée « Ndar », ancienne capitale jusqu’en 1957 et célèbre pour son pont métallique Faidherbe et son festival de jazz, est classée à l’UNESCO ?',
      'Which historic island nicknamed "Ndar"—former capital until 1957 and famous for the Faidherbe Bridge and Jazz Festival—is a UNESCO site?',
      '¿Qué isla histórica llamada «Ndar», antigua capital hasta 1957 y famosa por su festival de jazz, figura en la UNESCO?',
      'Qual ilha histórica chamada "Ndar", antiga capital até 1957 e famosa por seu festival de jazz, integra a UNESCO?',
      'ما الجزيرة التاريخية المعروفة بـ«ندار» والعاصمة السابقة حتى 1957 الشهيرة بجسر فايديرب ومهرجان الجاز؟'
    ),
    correct: L('Saint-Louis (Ndar)', 'Saint-Louis (Ndar)', 'Saint-Louis (Ndar)', 'Saint-Louis (Ndar)', 'سانت لويس (ندار)'),
    distractors: [
      L('Kaolack', 'Kaolack', 'Kaolack', 'Kaolack', 'كاولاك'),
      L('Louga', 'Louga', 'Louga', 'Louga', 'لوغا'),
      L('Matam', 'Matam', 'Matam', 'Matam', 'ماتام'),
    ],
    explanation: L(
      'Fondée en 1659, Saint-Louis abrite le pont Faidherbe long de 507 mètres et accueille chaque année le prestigieux Festival international de Jazz.',
      'Founded in 1659, Saint-Louis is linked by the 507-meter Faidherbe Bridge and hosts Africa’s premier jazz festival.',
      'Fundada en 1659, Saint-Louis destaca por el puente Faidherbe y su célebre festival de jazz.',
      'Fundada em 1659, Saint-Louis destaca-se pela ponte Faidherbe e por seu célebre festival de jazz.',
      'تأسست سانت لويس عام 1659 وتشتهر بجسر فايديرب ومهرجانها الدولي للجاز.'
    ),
  }),
  mkQ({
    id: 'cur_SN_02',
    countryCode: 'SN',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'djoudj_bird_sanctuary',
    source: 'UNESCO — Parc national des oiseaux du Djoudj',
    prompt: L(
      'Quel célèbre parc national du nord du Sénégal, classé à l’UNESCO, forme l’un des plus grands sanctuaires ornithologiques du monde avec plus de 3 millions d’oiseaux migrateurs ?',
      'Which UNESCO-listed national park in northern Senegal is one of the world’s premier bird sanctuaries, sheltering over 3 million migratory birds?',
      '¿Qué parque nacional del norte de Senegal, Patrimonio de la UNESCO, es uno de los mayores santuarios de aves migratorias del mundo?',
      'Qual parque nacional do norte do Senegal, Patrimônio da UNESCO, é um dos maiores santuários de aves migratórias do mundo?',
      'ما المتنزه الوطني في شمال السنغال المدرج لدى اليونسكو وأحد أكبر محميات الطيور المهاجرة في العالم؟'
    ),
    countryModePrompt: L(
      'Quel parc ornithologique classé à l’UNESCO dans le delta nord accueille chaque hiver des centaines de milliers de pélicans blancs et de flamants roses ?',
      'Which UNESCO bird sanctuary in the northern river delta welcomes huge flocks of white pelicans and flamingos every winter?',
      '¿Qué santuario ornitológico de la UNESCO en el delta norte acoge cada invierno miles de pelícanos y flamencos?',
      'Qual santuário ornitológico da UNESCO no delta norte acolhe todo inverno milhares de pelicanos e flamingos?',
      'أي محمية طيور مدرجة لدى اليونسكو في الدلتا الشمالية تستقبل ملايين البجع والطيور المهاجرة شتاءً؟'
    ),
    correct: L('Le Parc national des oiseaux du Djoudj', 'Djoudj National Bird Sanctuary', 'Parque Nacional de las Aves del Djoudj', 'Parque Nacional das Aves do Djoudj', 'متنزه جودج الوطني للطيور'),
    distractors: [
      L('Le Parc du Serengeti', 'Serengeti National Park', 'Parque del Serengeti', 'Parque do Serengeti', 'متنزه سيرينغيتي'),
      L('Le Parc Kruger', 'Kruger National Park', 'Parque Kruger', 'Parque Kruger', 'متنزه كروغر'),
      L('Le Parc des Virunga', 'Virunga National Park', 'Parque Virunga', 'Parque Virunga', 'متنزه فيرونغا'),
    ],
    explanation: L(
      'Troisième parc ornithologique au monde, le Djoudj constitue la première zone d’eau douce traversée par les oiseaux européens après le Sahara.',
      'As the first major freshwater wetland south of the Sahara, Djoudj is a critical stopover along the Palearctic–African flyway.',
      'Primera gran zona húmeda tras cruzar el Sáhara, el Djoudj es vital para millones de aves migratorias.',
      'Primeira grande área úmida após o Saara, o Djoudj é vital para milhões de aves migratórias.',
      'يُعد متنزه جودج أول محطة مياه عذبة جنوب الصحراء لملايين الطيور المهاجرة.'
    ),
  }),
  mkQ({
    id: 'cur_SN_03',
    countryCode: 'SN',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'fadiouth_seashell_island',
    source: 'Patrimoine de Petite-Côte (Joal-Fadiouth)',
    prompt: L(
      'Quelle île pittoresque du Sénégal située en face de Joal est presque entièrement construite sur une accumulation millénaire de coquillages blancs ?',
      'Which picturesque Senegalese island opposite Joal is built almost entirely atop centuries-old white seashells?',
      '¿Qué pintoresca isla senegalesa frente a Joal está construida casi por completo sobre conchas marinas blancas?',
      'Qual pitoresca ilha senegalesa diante de Joal é construída quase inteiramente sobre conchas marinhas brancas?',
      'ما الجزيرة الخلابة المقابلة لمدينة جوال والمبنية بالكامل تقريباً فوق تراكم أصداف بحرية بيضاء؟'
    ),
    countryModePrompt: L(
      'Quelle célèbre « île aux coquillages » reliée au continent par un pont de bois abrite aussi un cimetière mixte symbole de tolérance entre chrétiens et musulmans ?',
      'Which famed "Shell Island" linked by a wooden footbridge is also known for its shared Christian-Muslim cemetery symbolizing harmony?',
      '¿Qué célebre «isla de las conchas» unida por un puente de madera alberga un cementerio compartido entre cristianos y musulmanes?',
      'Qual célebre "ilha das conchas" ligada por uma ponte de madeira abriga um cemitério compartilhado entre cristãos e muçulmanos?',
      'ما «جزيرة الأصداف» الشهيرة التي تضم مقبرة مشتركة للمسيحيين والمسلمين رمزاً للتآخي؟'
    ),
    correct: L('L’Île de Fadiouth', 'Fadiouth Island', 'Isla de Fadiouth', 'Ilha de Fadiouth', 'جزيرة فاديوت'),
    distractors: [
      L('L’Île de Djerba', 'Djerba Island', 'Isla de Yerba', 'Ilha de Djerba', 'جزيرة جربة'),
      L('L’Île de Zanzibar', 'Zanzibar', 'Zanzíbar', 'Zanzibar', 'جزيرة زنجبار'),
      L('L’Île de Lamu', 'Lamu Island', 'Isla de Lamu', 'Ilha de Lamu', 'جزيرة لامو'),
    ],
    explanation: L(
      'Les rues, les murs et les tombes du cimetière mixte de Fadiouth sont recouverts de coques de palourdes blanches récoltées depuis des siècles.',
      'Walkways, walls, and the famed mixed Christian-Muslim cemetery of Fadiouth shimmer with white cockle shells gathered over generations.',
      'Las calles y el cementerio mixto de Fadiouth están cubiertos de conchas blancas acumuladas durante siglos.',
      'As ruas e o cemitério misto de Fadiouth são cobertos por conchas brancas acumuladas há séculos.',
      'تتغطى طرقات جزيرة فاديوت ومقبرتها المشتركة بطبقة بيضاء ناصعة من الأصداف.'
    ),
  }),
  mkQ({
    id: 'cur_SN_04',
    countryCode: 'SN',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'niokolo_koba_unesco',
    source: 'UNESCO — Parc national du Niokolo-Koba',
    prompt: L(
      'Quel vaste parc national du sud-est du Sénégal (9 130 km²), traversé par le fleuve Gambie et classé à l’UNESCO, protège élans de Derby, lions et chimpanzés ?',
      'Which vast 9,130-sq-km UNESCO national park in southeastern Senegal along the Gambia River protects Derby elands, lions, and chimpanzees?',
      '¿Qué vasto parque nacional del sureste de Senegal (9130 km²), Patrimonio de la UNESCO, protege elands de Derby, leones y chimpancés?',
      'Qual vasto parque nacional do sudeste do Senegal (9.130 km²), Patrimônio da UNESCO, protege elandes-de-derby, leões e chimpanzés?',
      'ما المتنزه الوطني الشاسع جنوب شرق السنغال المدرج لدى اليونسكو على نهر غامبيا ويحمي الأسود والشمبانزي؟'
    ),
    correct: L('Le Parc national du Niokolo-Koba', 'Niokolo-Koba National Park', 'Parque Nacional de Niokolo-Koba', 'Parque Nacional de Niokolo-Koba', 'متنزه نيوكولو كوبا الوطني'),
    distractors: [
      L('Le Parc du Serengeti', 'Serengeti Park', 'Parque Serengeti', 'Parque Serengeti', 'متنزه سيرينغيتي'),
      L('Le Parc d’Amboseli', 'Amboseli Park', 'Parque Amboseli', 'Parque Amboseli', 'متنزه أمبوسيلي'),
      L('Le Parc de Mana Pools', 'Mana Pools Park', 'Parque Mana Pools', 'Parque Mana Pools', 'متنزه مانا بولز'),
    ],
    explanation: L(
      'Situé entre Tambacounda et Kédougou, Niokolo-Koba abrite une mosaïque exceptionnelle de savanes boisées et de forêts-galeries.',
      'Spanning savanna and gallery forests near Kédougou and Tambacounda, Niokolo-Koba is one of West Africa’s richest wildlife reserves.',
      'Entre Tambacounda y Kédougou, Niokolo-Koba protege la fauna más diversa de la región.',
      'Entre Tambacounda e Kédougou, Niokolo-Koba abriga uma das mais ricas faunas da África Ocidental.',
      'يمتد متنزه نيوكولو كوبا في الجنوب الشرقي ويضم تنوعاً بيولوجياً نادراً في غرب أفريقيا.'
    ),
  }),
  mkQ({
    id: 'cur_SN_05',
    countryCode: 'SN',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'renaissance_monument_mamelles',
    source: 'Architecture monumentale de Dakar (2010)',
    prompt: L(
      'Quelle colossale statue de bronze de 49 mètres, érigée sur l’une des collines des Mamelles en 2010, domine la presqu’île du Cap-Vert ?',
      'Which colossal 49-meter bronze statue standing atop one of Les Mamelles volcanic hills since 2010 overlooks the Atlantic?',
      '¿Qué colosal estatua de bronce de 49 metros inaugurada en 2010 en las colinas de Les Mamelles domina la capital?',
      'Qual colossal estátua de bronze de 49 metros inaugurada em 2010 nas colinas de Les Mamelles domina a capital?',
      'ما التمثال البرونزي الضخم البالغ ارتفاعه 49 متراً والمُشيّد عام 2010 فوق تلال الماميل؟'
    ),
    correct: L('Le Monument de la Renaissance africaine', 'African Renaissance Monument', 'Monumento del Renacimiento Africano', 'Monumento da Renascença Africana', 'نصب النهضة الأفريقية'),
    distractors: [
      L('Le Sphinx de Gizeh', 'Great Sphinx of Giza', 'Gran Esfinge de Guiza', 'Grande Esfinge de Gizé', 'أبو الهول'),
      L('La Porte du Non-Retour', 'Door of No Return', 'Puerta del No Retorno', 'Porta do Não Retorno', 'بوابة اللاعودة'),
      L('L’Obélisque d’Axoum', 'Obelisk of Axum', 'Obelisco de Aksum', 'Obelisco de Axum', 'مسلة أكسوم'),
    ],
    explanation: L(
      'Plus haute statue d’Afrique, elle représente un couple et un enfant tournés vers l’horizon atlantique.',
      'Africa’s tallest statue depicts an African family emerging toward the Atlantic horizon.',
      'Es la estatua más alta de África, representando a una familia mirando hacia el Atlántico.',
      'É a estátua mais alta da África, retratando uma família voltada ao horizonte atlântico.',
      'يُعد أطول تمثال في أفريقيا ويمثل عائلة أفريقية تتطلع نحو الأفق.'
    ),
  }),
  mkQ({
    id: 'cur_SN_06',
    countryCode: 'SN',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 2,
    topicKey: 'lat_dior_ngone_cayor',
    source: 'Histoire de la résistance — Cayor (1886)',
    prompt: L(
      'Quel célèbre « Damel » (roi) du Cayor résista héroïquement à la colonisation avant de tomber les armes à la main à Dekhelé en 1886 ?',
      'Which famed "Damel" (king) of Cayor heroically resisted colonial rule before falling in battle at Dekhelé in 1886?',
      '¿Qué célebre «Damel» (rey) del Cayor resistió heroicamente la colonización antes de caer en Dekhelé en 1886?',
      'Qual célebre "Damel" (rei) do Cayor resistiu heroicamente à colonização antes de tombar em Dekhelé em 1886?',
      'من هو ملك الكايور «داميل» الذي قاوم الاستعمار بشجاعة حتى استشهد في معركة دخلي عام 1886؟'
    ),
    correct: L('Lat Dior Ngoné Latyr Diop', 'Lat Dior Ngoné Latyr Diop', 'Lat Dior Diop', 'Lat Dior Diop', 'لات ديور ديوب'),
    distractors: [
      L('Soundiata Keïta', 'Sundiata Keita', 'Sundiata Keita', 'Sundiata Keita', 'سوندياتا كيتا'),
      L('Béhanzin', 'Behanzin', 'Behanzin', 'Behanzin', 'بيهينزين'),
      L('Chaka Zoulou', 'Shaka Zulu', 'Shaka Zulu', 'Shaka Zulu', 'شاكا زولو'),
    ],
    explanation: L(
      'Héros national majeur, Lat Dior s’opposa farouchement au chemin de fer traversant le Cayor jusqu’à son sacrifice à Dekhelé.',
      'A towering national hero, Lat Dior led legendary cavalry resistance in Cayor until his final battle at Dekhelé in 1886.',
      'Héroe nacional de primer orden, Lat Dior protagonizó una épica resistencia hasta 1886.',
      'Herói nacional maior, Lat Dior liderou uma resistência épica até 1886.',
      'يُعد لات ديور ديوب بطلاً وطنياً خالداً لقوة مقاومته العسكرية في مملكة كايور.'
    ),
  }),
  mkQ({
    id: 'cur_SN_07',
    countryCode: 'SN',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 2,
    topicKey: 'cheikh_ahmadou_bamba_touba',
    source: 'Patrimoine spirituel — Grande Mosquée de Touba',
    prompt: L(
      'Quel guide spirituel, poète pacifiste et fondateur de la confrérie mouride créa la ville sainte de Touba et inspire le pèlerinage du Grand Magal ?',
      'Which spiritual leader, pacifist poet, and founder of the Mouride brotherhood established the holy city of Touba, site of the Grand Magal pilgrimage?',
      '¿Qué guía espiritual y poeta pacifista fundó la hermandad muridi y la ciudad santa de Touba, sede del Gran Magal?',
      'Qual líder espiritual e poeta pacifista fundou a irmandade muride e a cidade santa de Touba, sede do Grande Magal?',
      'من هو العالم الروحي والشاعر السلمي مؤسس الطريقة المريدية ومدينة طوبى وموسم الماغال؟'
    ),
    correct: L('Cheikh Ahmadou Bamba Mbacké', 'Cheikh Ahmadou Bamba Mbacké', 'Cheikh Ahmadou Bamba', 'Cheikh Ahmadou Bamba', 'الشيخ أحمدو بمبا'),
    distractors: [
      L('Simon Kimbangu', 'Simon Kimbangu', 'Simon Kimbangu', 'Simon Kimbangu', 'سيمون كيمبانغو'),
      L('Usman dan Fodio', 'Usman dan Fodio', 'Usman dan Fodio', 'Usman dan Fodio', 'عثمان دان فوديو'),
      L('L’Émir Abdelkader', 'Emir Abdelkader', 'Emir Abdelkader', 'Emir Abdelkader', 'الأمير عبد القادر'),
    ],
    explanation: L(
      'Exilé sept ans au Gabon puis en Mauritanie, Cheikh Ahmadou Bamba (« Khadimou Rassoul ») prôna la paix, le savoir et la dignité par le travail.',
      'Exiled for years to Gabon and Mauritania, Cheikh Ahmadou Bamba preached non-violence, scholarship, and devotion through work.',
      'Exiliado a Gabón y Mauritania, Cheikh Ahmadou Bamba predicó la paz, el estudio y el trabajo.',
      'Exilado no Gabão e Mauritânia, Cheikh Ahmadou Bamba pregou a não violência, o estudo e o trabalho.',
      'دعا الشيخ أحمدو بمبا رغم نفيه إلى السلم والعلم والعمل الشريف.'
    ),
  }),
  mkQ({
    id: 'cur_SN_08',
    countryCode: 'SN',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 2,
    topicKey: 'senegal_independence_april4',
    source: 'Archives nationales — 4 avril 1960',
    prompt: L(
      'À quelle date le Sénégal célèbre-t-il chaque année sa fête nationale d’indépendance (commémorant les accords du 4 avril 1960) ?',
      'On what annual date does Senegal celebrate its Independence Day, marking the April 4, 1960 accords?',
      '¿En qué fecha celebra Senegal cada año su Día de la Independencia tras los acuerdos del 4 de abril de 1960?',
      'Em que data o Senegal celebra anualmente seu Dia da Independência após os acordos de 4 de abril de 1960?',
      'في أي تاريخ تحتفل السنغال سنوياً بعيد استقلالها الموافق لاتفاق 4 أبريل 1960؟'
    ),
    countryModePrompt: L(
      'Quelle date commémore chaque année la signature des accords d’indépendance du 4 avril 1960 et donne lieu au grand défilé national ?',
      'Which annual date commemorates the April 4, 1960 independence accords with the grand national parade?',
      '¿Qué fecha conmemora cada año la firma de los acuerdos de independencia del 4 de abril de 1960?',
      'Qual data comemora anualmente a assinatura dos acordos de independência de 4 de abril de 1960?',
      'أي تاريخ يُحيي سنوياً ذكرى توقيع اتفاقية الاستقلال في 4 أبريل 1960؟'
    ),
    correct: L('Le 4 avril', 'April 4', '4 de abril', '4 de abril', '4 أبريل'),
    distractors: [
      L('Le 22 septembre', 'September 22', '22 de septiembre', '22 de setembro', '22 سبتمبر'),
      L('Le 7 août', 'August 7', '7 de agosto', '7 de agosto', '7 أغسطس'),
      L('Le 6 mars', 'March 6', '6 de marzo', '6 de março', '6 مارس'),
    ],
    explanation: L(
      'Bien que la République soit devenue souveraine séparément le 20 août 1960 après la Fédération du Mali, le 4 avril reste la Fête nationale.',
      'While Senegal left the Mali Federation on August 20, 1960, April 4 remains Independence Day.',
      'Aunque se separó de la Federación de Malí el 20 de agosto, el 4 de abril es el Día Nacional.',
      'Embora tenha deixado a Federação do Mali em 20 de agosto, 4 de abril permanece como Dia Nacional.',
      'يُحتفل بيوم 4 أبريل عيداً وطنياً تخليداً لاتفاقيات السيادة عام 1960.'
    ),
  }),
  mkQ({
    id: 'cur_SN_09',
    countryCode: 'SN',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 3,
    topicKey: 'blaise_diagne_1914_deputy',
    source: 'Histoire parlementaire — Quatre Communes (1914)',
    prompt: L(
      'Originaire de Gorée, quel homme politique devint en 1914 le tout premier député noir d’Afrique élu à l’Assemblée nationale française ?',
      'Born on Gorée Island, which politician made history in 1914 as the first Black African ever elected to the French National Assembly?',
      'Nacido en Gorea, ¿qué político hizo historia en 1914 al ser el primer diputado negro africano elegido en la Asamblea Nacional francesa?',
      'Nascido em Gorée, qual político entrou para a história em 1914 como o primeiro deputado negro africano na Assembleia Nacional francesa?',
      'من هو السياسي المولود في غوريه الذي أصبح عام 1914 أول نائب أفريقي أسود في البرلمان الفرنسي؟'
    ),
    correct: L('Blaise Diagne', 'Blaise Diagne', 'Blaise Diagne', 'Blaise Diagne', 'بليز دياني'),
    distractors: [
      L('Félix Houphouët-Boigny', 'Félix Houphouët-Boigny', 'Félix Houphouët-Boigny', 'Félix Houphouët-Boigny', 'فيليكس هوفويت بواني'),
      L('Modibo Keïta', 'Modibo Keïta', 'Modibo Keïta', 'Modibo Keïta', 'موديبو كيتا'),
      L('Barthélemy Boganda', 'Barthélemy Boganda', 'Barthélemy Boganda', 'Barthélemy Boganda', 'بارتيليمي بوغاندا'),
    ],
    explanation: L(
      'Élu représentant des Quatre Communes (Dakar, Gorée, Rufisque, Saint-Louis), Blaise Diagne obtint la loi de 1916 confirmant la citoyenneté de leurs habitants.',
      'Representing the Four Communes, Blaise Diagne secured the landmark 1916 law confirming citizenship rights for residents.',
      'Representante de las Cuatro Comunas, Blaise Diagne impulsó la ley de 1916 de reconocimiento ciudadano.',
      'Representante das Quatro Comunas, Blaise Diagne garantiu a lei de cidadania de 1916.',
      'حقق بليز دياني ممثلاً للبلديات الأربع إنجازاً سياسياً تاريخياً بانتخابه عام 1914.'
    ),
  }),
  mkQ({
    id: 'cur_SN_10',
    countryCode: 'SN',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'alboury_ndiaye_djolof',
    source: 'Histoire du Djolof (XIXe siècle)',
    prompt: L(
      'Quel dernier grand Bourba (roi) du Djolof s’allia à Ahmadou Tall et combattit courageusement l’avancée coloniale à la fin du XIXe siècle ?',
      'Which last great "Bourba" (king) of Jolof allied with Ahmadu Tall and fiercely resisted colonial expansion in the late 19th century?',
      '¿Qué último gran «Bourba» (rey) del Jolof se alió con Ahmadou Tall y resistió la expansión colonial a fines del siglo XIX?',
      'Qual último grande "Bourba" (rei) do Jolof aliou-se a Ahmadou Tall e resistiu à expansão colonial no fim do século XIX?',
      'من هو آخر ملوك جولوف الكبار (بوربا) الذي قاوم التوسع الاستعماري بشجاعة أواخر القرن التاسع عشر؟'
    ),
    correct: L('Alboury Ndiaye', 'Alboury Ndiaye', 'Alboury Ndiaye', 'Alboury Ndiaye', 'ألبوري نداي'),
    distractors: [
      L('Sékou Touré', 'Sékou Touré', 'Sékou Touré', 'Sékou Touré', 'سيكو توري'),
      L('Mamadou Dia', 'Mamadou Dia', 'Mamadou Dia', 'Mamadou Dia', 'مامادو ديا'),
      L('Lamine Guèye', 'Lamine Guèye', 'Lamine Guèye', 'Lamine Guèye', 'لامين غيي'),
    ],
    explanation: L(
      'Stratège de Yang-Yang, Alboury Ndiaye préféra l’exil et la lutte armée plutôt que la capitulation de son royaume.',
      'King of Jolof from Yang-Yang, Alboury Ndiaye refused surrender and continued armed resistance eastward.',
      'Rey del Jolof desde Yang-Yang, Alboury Ndiaye eligió continuar la resistencia antes que capitular.',
      'Rei do Jolof em Yang-Yang, Alboury Ndiaye preferiu continuar a resistência a se render.',
      'فضّل الملك ألبوري نداي المنفى ومواصلة القتال على الاستسلام للاحتلال.'
    ),
  }),
  mkQ({
    id: 'cur_SN_11',
    countryCode: 'SN',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'mbougar_sarr_goncourt_2021',
    source: 'Académie Goncourt — Prix Goncourt 2021',
    prompt: L(
      'Quel romancier sénégalais né en 1990 est entré dans l’histoire en remportant le Prix Goncourt en 2021 avec « La Plus Secrète Mémoire des hommes » ?',
      'Which Senegalese novelist born in 1990 made literary history by winning the 2021 Prix Goncourt for "The Most Secret Memory of Men"?',
      '¿Qué novelista senegalés nacido en 1990 ganó el Premio Goncourt en 2021 con «La más recóndita memoria de los hombres»?',
      'Qual romancista senegalês nascido em 1990 venceu o Prêmio Goncourt em 2021 com "A Mais Secreta Memória dos Homens"?',
      'من هو الروائي السنغالي المولود عام 1990 الفائز بجائزة غونكور الأدبية عام 2021؟'
    ),
    countryModePrompt: L(
      'Quel jeune romancier originaire de Diourbel a reçu le prestigieux Prix Goncourt en 2021 à 31 ans ?',
      'Which novelist raised in Diourbel won the prestigious 2021 Prix Goncourt at age 31?',
      '¿Qué novelista criado en Diourbel ganó el Premio Goncourt en 2021 a los 31 años?',
      'Qual romancista criado em Diourbel conquistou o Prêmio Goncourt em 2021 aos 31 anos?',
      'من هو الروائي الذي نشأ في ديوربيل وفاز بجائزة غونكور المرموقة عام 2021 في الحادية والثلاثين؟'
    ),
    correct: L('Mohamed Mbougar Sarr', 'Mohamed Mbougar Sarr', 'Mohamed Mbougar Sarr', 'Mohamed Mbougar Sarr', 'محمد مبوغار سار'),
    distractors: [
      L('Léopold Sédar Senghor', 'Léopold Sédar Senghor', 'Léopold Sédar Senghor', 'Léopold Sédar Senghor', 'ليوبولد سيدار سنغور'),
      L('Boubacar Boris Diop', 'Boubacar Boris Diop', 'Boubacar Boris Diop', 'Boubacar Boris Diop', 'بوبكر بوريس ديوب'),
      L('David Diop', 'David Diop', 'David Diop', 'David Diop', 'ديفيد ديوب'),
    ],
    explanation: L(
      'Premier auteur d’Afrique subsaharienne couronné par le Prix Goncourt, Mohamed Mbougar Sarr rend hommage aux écrivains africains du XXe siècle.',
      'The first sub-Saharan African author to win France’s top literary prize, Sarr crafted a luminous tribute to African writers.',
      'Primer autor del África subsahariana en ganar el Premio Goncourt, rinde homenaje a las letras africanas.',
      'Primeiro autor da África Subsaariana a vencer o Prêmio Goncourt, presta homenagem às letras africanas.',
      'أول كاتب من أفريقيا جنوب الصحراء يفوز بجائزة غونكور الفرنسية العريقة.'
    ),
  }),
  mkQ({
    id: 'cur_SN_12',
    countryCode: 'SN',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'yassa_poulet_casamance',
    source: 'Gastronomie de Casamance',
    prompt: L(
      'Originaire de Casamance, quel plat savoureux marie poulet ou poisson mariné au citron vert, moutarde et montagne d’oignons caramélisés ?',
      'Originating in Casamance, which dish pairs chicken or fish marinated in lime, mustard, and caramelized onions?',
      'Originario de Casamance, ¿qué plato combina pollo o pescado marinado con lima, mostaza y cebollas caramelizadas?',
      'Originário de Casamansa, qual prato combina frango ou peixe marinado com limão, mostarda e cebolas caramelizadas?',
      'ما الطبق الشهير القادم من كازامانس الذي يجمع الدجاج أو السمك بالليمون والخردل والبصل المكرمل؟'
    ),
    correct: L('Le Yassa (Poulet ou Poisson Yassa)', 'Chicken or Fish Yassa', 'Pollo o Pescado Yassa', 'Frango ou Peixe Yassa', 'طبق الياسا'),
    distractors: [
      L('Le Boeuf Bourguignon', 'Beef Bourguignon', 'Ternera a la borgoñona', 'Boeuf Bourguignon', 'لحم البورغينيون'),
      L('Les Raviolis à la ricotta', 'Ricotta Ravioli', 'Raviolis de ricotta', 'Ravioli de ricota', 'رافيولي الريكوتا'),
      L('Le Pad Thaï aux crevettes', 'Shrimp Pad Thai', 'Pad Thai de gambas', 'Pad Thai de camarão', 'باد تاي'),
    ],
    explanation: L(
      'Né en pays diola en Casamance et servi sur du riz blanc, le Yassa est un grand classique familial.',
      'Born in Diola cuisine in southern Casamance, tangy citrus-and-onion Yassa is an undisputed West African classic.',
      'Nacido en la cocina diola de Casamance, el Yassa es un clásico ineludible.',
      'Nascido na culinária diola de Casamansa, o Yassa é um clássico incontornável.',
      'نشأ طبق الياسا في إقليم كازامانس وأصبح من أشهر الأطباق في غرب أفريقيا.'
    ),
  }),
  mkQ({
    id: 'cur_SN_13',
    countryCode: 'SN',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 3,
    topicKey: 'cafe_touba_selim_spice',
    source: 'Culture populaire et boissons du Sénégal',
    prompt: L(
      'Avec quelle épice aromatique appelée « djar » (poivre de Guinée) torréfie-t-on les grains pour préparer le célèbre « Café Touba » ?',
      'With which aromatic spice known locally as "djar" (Grains of Selim) are coffee beans roasted to brew Café Touba?',
      '¿Con qué especia aromática llamada «djar» (pimienta de Guinea) se tuesta el café para preparar el «Café Touba»?',
      'Com qual especiaria aromática chamada "djar" (pimenta-da-guiné) o café é torrado para preparar o "Café Touba"?',
      'مع أي توابل عطرية تُعرف بـ«جار» (فلفل غينيا) يُحمَّص البن لتحضير قهوة طوبى؟'
    ),
    correct: L('Le poivre de Guinée (djar) et du clou de girofle', 'Grains of Selim (djar) and cloves', 'Pimienta de Guinea (djar) y clavo', 'Pimenta-da-guiné (djar) e cravo', 'فلفل غينيا (جار) والقرنفل'),
    distractors: [
      L('Du sirop de menthe glaciale', 'Peppermint syrup', 'Jarabe de menta', 'Xarope de hortelã', 'شراب النعناع'),
      L('De la sauce soja salée', 'Soy sauce', 'Salsa de soja', 'Molho de soja', 'صلصة الصويا'),
      L('De l’huile de truffe blanche', 'White truffle oil', 'Aceite de trufa blanca', 'Azeite de trufa branca', 'زيت الكمأة'),
    ],
    explanation: L(
      'Popularisé par Cheikh Ahmadou Bamba, le Café Touba est vendu fumant et parfumé à tous les coins de rue.',
      'Introduced by Cheikh Ahmadou Bamba, spicy aromatic Café Touba is an iconic daily ritual.',
      'Popularizado en Touba, este café especiado se sirve humeante en cada esquina.',
      'Popularizado em Touba, esse café especiado é servido em cada esquina.',
      'تُعد قهوة طوبى المتبلة بفلفل غينيا طقساً يومياً محبوباً في الشوارع والبيوت.'
    ),
  }),
  mkQ({
    id: 'cur_SN_14',
    countryCode: 'SN',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'teranga_hospitality_ethos',
    source: 'Culture wolof et valeurs nationales',
    prompt: L(
      'Quel mot wolof célèbre incarne l’art de l’hospitalité chaleureuse et du partage, tout en donnant leur surnom aux équipes nationales ?',
      'Which famous Wolof word embodies warm hospitality and generosity—and gives Senegal’s national teams their nickname?',
      '¿Qué célebre palabra wólof encarna la hospitalidad y da apodo a las selecciones deportivas nacionales?',
      'Qual célebre palavra uólofe simboliza a hospitalidade e dá apelido às seleções esportivas nacionais?',
      'ما الكلمة الولوفية الشهيرة التي تجسد كرم الضيافة وتُلقب بها المنتخبات الرياضية الوطنية؟'
    ),
    correct: L('La Teranga', 'Teranga', 'La Teranga', 'A Teranga', 'التيرانغا'),
    distractors: [
      L('Le Bushido', 'Bushido', 'Bushido', 'Bushido', 'البوشيدو'),
      L('Le Hygge', 'Hygge', 'Hygge', 'Hygge', 'الهيوغي'),
      L('La Dolce Vita', 'Dolce Vita', 'Dolce Vita', 'Dolce Vita', 'الحياة الحلوة'),
    ],
    explanation: L(
      'Bien plus qu’un accueil, la Teranga signifie offrir le meilleur de sa table à chaque hôte.',
      'Far beyond simple politeness, Teranga means generously sharing one’s home, meal, and warmth with any visitor.',
      'La Teranga significa compartir generosamente lo mejor del hogar con todo visitante.',
      'A Teranga significa partilhar generosamente o melhor da casa com o visitante.',
      'تعني التيرانغا إكرام الضيف ومشاركته أفضل ما في البيت والمحبة.'
    ),
  }),
  mkQ({
    id: 'cur_SN_15',
    countryCode: 'SN',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'mbalax_sabar_doudou_ndiaye',
    source: 'Patrimoine musical — Dakar',
    prompt: L(
      'Quel rythme musical entraînant né dans les années 1970 mêle les tambours « sabar » et « tama » aux guitares électriques et cuivres ?',
      'Which infectious 1970s musical style fuses traditional "sabar" and "tama" talking drums with electric guitars and horns?',
      '¿Qué ritmo musical bailable de los años 70 fusiona percusiones «sabar» y «tama» con guitarras eléctricas?',
      'Qual ritmo musical dançante dos anos 1970 funde percussões "sabar" e "tama" com guitarras elétricas?',
      'ما النمط الموسيقي الراقص من السبعينيات الذي يمزج طبول السابار والتاما مع الغيتار الكهربائي؟'
    ),
    correct: L('Le Mbalax', 'Mbalax', 'El Mbalax', 'O Mbalax', 'إيقاع المبالاكس'),
    distractors: [
      L('La Bossa-nova', 'Bossa nova', 'Bossa nova', 'Bossa nova', 'البوسا نوفا'),
      L('Le Flamenco andalou', 'Andalusian Flamenco', 'Flamenco andaluz', 'Flamenco andaluz', 'الفلامنكو'),
      L('La Polka tchèque', 'Czech Polka', 'Polca checa', 'Polca tcheca', 'البولكا'),
    ],
    explanation: L(
      'Propulsé par Star Band, Orchestra Baobab, Youssou N’Dour et le maître tambour Doudou Ndiaye Rose, le mbalax fait danser tout le pays.',
      'Pioneered by Star Band, Youssou N’Dour, and master drummer Doudou Ndiaye Rose, mbalax defines modern Senegalese groove.',
      'Impulsado por Youssou N’Dour y Doudou Ndiaye Rose, el mbalax define la escena musical.',
      'Impulsionado por Youssou N’Dour e Doudou Ndiaye Rose, o mbalax domina a cena musical.',
      'أبدع يوسو ندور وعازف الإيقاع دودو نداي روز في نشر المبالاكس عالمياً.'
    ),
  }),
  mkQ({
    id: 'cur_SN_16',
    countryCode: 'SN',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'mati_diop_atlantique_dahomey',
    source: 'Cannes 2019 & Berlinale 2024',
    prompt: L(
      'Quelle réalisatrice, nièce de Djibril Diop Mambéty, a remporté le Grand Prix à Cannes en 2019 (« Atlantique ») puis l’Ours d’or à Berlin en 2024 (« Dahomey ») ?',
      'Which filmmaker—niece of Djibril Diop Mambéty—won the 2019 Cannes Grand Prix ("Atlantics") and the 2024 Berlinale Golden Bear ("Dahomey")?',
      '¿Qué directora ganó el Gran Premio de Cannes 2019 («Atlantique») y el Oso de Oro de Berlín 2024 («Dahomey»)?',
      'Qual cineasta venceu o Grande Prêmio de Cannes 2019 ("Atlantique") e o Urso de Ouro em Berlim 2024 ("Dahomey")?',
      'من هي المخرجة الفائزة بالجائزة الكبرى في كان 2019 («أتلانتيك») والدب الذهبي في برلين 2024 («داهومي»)؟'
    ),
    correct: L('Mati Diop', 'Mati Diop', 'Mati Diop', 'Mati Diop', 'ماتي ديوب'),
    distractors: [
      L('Claire Denis', 'Claire Denis', 'Claire Denis', 'Claire Denis', 'كلير دوني'),
      L('Agnès Varda', 'Agnès Varda', 'Agnès Varda', 'Agnès Varda', 'أنييس فاردا'),
      L('Sofia Coppola', 'Sofia Coppola', 'Sofia Coppola', 'Sofia Coppola', 'صوفيا كوبولا'),
    ],
    explanation: L(
      'Avec « Atlantique » tourné à Dakar puis le documentaire « Dahomey », Mati Diop s’est imposée au sommet du cinéma mondial.',
      'With "Atlantics" shot in Dakar and "Dahomey," Mati Diop stands among contemporary cinema’s boldest voices.',
      'Con «Atlantique» rodada en Dakar y «Dahomey», Mati Diop destaca en el cine mundial.',
      'Com "Atlantique" filmado em Dacar e "Dahomey", Mati Diop brilha no cinema mundial.',
      'واصلت ماتي ديوب إرث عمها جبريل ديوب مامبيتي متوجةً في كان وبرلين.'
    ),
  }),
  mkQ({
    id: 'cur_SN_17',
    countryCode: 'SN',
    category: 'culture',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'cases_impluvium_casamance',
    source: 'Architecture diola — Enampor',
    prompt: L(
      'En Basse-Casamance, quelle particularité ingénieuse distingue les célèbres « cases à impluvium » traditionnelles du peuple Diola (comme à Enampor) ?',
      'In Lower Casamance, what ingenious feature distinguishes the traditional Diola clay "impluvium houses" found in villages like Enampor?',
      'En Baja Casamance, ¿qué ingenioso elemento distingue a las «casas con impluvium» del pueblo diola?',
      'Na Baixa Casamansa, que recurso engenhoso distingue as "casas com impluvium" do povo diola?',
      'في كازامانس السفلى، ما الميزة الهندسية الذكية في منازل «الإمبلوفيوم» الطينية لدى شعب الديولا؟'
    ),
    correct: L('Un toit ouvert au centre captant l’eau de pluie dans un bassin intérieur', 'A central open funnel roof collecting rainwater in an indoor basin', 'Un techo abierto en el centro para recoger el agua de lluvia', 'Um telhado aberto ao centro para captar água da chuva', 'سقف مفتوح من الوسط لجمع مياه الأمطار في حوض داخلي'),
    distractors: [
      L('Des murs en glace polaire sculptée', 'Walls of polar ice', 'Muros de hielo polar', 'Paredes de gelo polar', 'جدران من الجليد'),
      L('Des ascenseurs hydrauliques en acier', 'Steel hydraulic elevators', 'Ascensores hidráulicos', 'Elevadores hidráulicos', 'مصاعد فولاذية'),
      L('Des toitures en verre trempé', 'Tempered glass roofs', 'Techos de vidrio templado', 'Telhados de vidro temperado', 'أسقف زجاجية'),
    ],
    explanation: L(
      'Chef-d’œuvre écologique en terre crue, la case à impluvium rafraîchit les pièces et stocke l’eau douce des pluies.',
      'An ecological masterpiece of earthen architecture, the impluvium harvests rainwater while cooling the interior.',
      'Obra maestra ecológica en barro, recoge el agua de lluvia y mantiene una frescura natural.',
      'Obra-prima ecológica em terra, capta água da chuva e mantém frescor natural.',
      'تحفة معمارية بيئية تجمع مياه الأمطار وتوفر برودة طبيعية مريحة.'
    ),
  }),
  mkQ({
    id: 'cur_SN_18',
    countryCode: 'SN',
    category: 'culture',
    subCategory: 'economie_developpement',
    difficulty: 3,
    topicKey: 'ter_dakar_diamniadio',
    source: 'Infrastructures — Dakar / Diamniadio',
    prompt: L(
      'Quel train régional rapide inauguré fin 2021 relie le centre historique de Dakar à la nouvelle ville de Diamniadio ?',
      'Which rapid commuter rail line inaugurated in late 2021 connects central Dakar to the new city of Diamniadio?',
      '¿Qué tren regional rápido inaugurado a fines de 2021 conecta el centro de Dakar con Diamniadio?',
      'Qual trem regional rápido inaugurado no fim de 2021 liga o centro de Dacar a Diamniadio?',
      'ما القطار الإقليمي السريع الذي دُشن أواخر عام 2021 ويربط وسط داكار بمدينة ديامنياديو؟'
    ),
    countryModePrompt: L(
      'Quel réseau ferroviaire moderne (TER) reliant le Plateau à Diamniadio et vers l’aéroport AIBD a révolutionné les transports depuis fin 2021 ?',
      'Which modern regional express rail system (TER) linking downtown to Diamniadio and the airport opened in late 2021?',
      '¿Qué moderno tren expreso regional (TER) conecta el centro de la capital con Diamniadio desde 2021?',
      'Qual moderno trem expresso regional (TER) liga o centro da capital a Diamniadio desde 2021?',
      'ما مشروع القطار السريع (TER) الذي يربط وسط العاصمة بديامنياديو والمطار منذ أواخر 2021؟'
    ),
    correct: L('Le Train Express Régional (TER)', 'The Regional Express Train (TER)', 'El Tren Expreso Regional (TER)', 'O Trem Expresso Regional (TER)', 'القطار الإقليمي السريع (TER)'),
    distractors: [
      L('Le Shinkansen de Tokyo', 'Tokyo Shinkansen', 'Shinkansen de Tokio', 'Shinkansen de Tóquio', 'شينكانسن'),
      L('L’Eurostar sous la Manche', 'Eurostar', 'Eurostar', 'Eurostar', 'يوروستار'),
      L('Le Transsibérien', 'Trans-Siberian', 'Transiberiano', 'Transiberiana', 'عابر سيبيريا'),
    ],
    explanation: L(
      'Le TER relie chaque jour la gare historique de Dakar au pôle urbain de Diamniadio et à la plateforme aéroportuaire.',
      'The TER links downtown Dakar station to Diamniadio and the airport corridor for tens of thousands daily.',
      'El TER conecta la renovada estación central con el polo de Diamniadio.',
      'O TER conecta o centro ao polo urbano de Diamniadio.',
      'ينقل القطار السريع عشرات الآلاف من الركاب يومياً بين وسط داكار وديامنياديو.'
    ),
  }),
  mkQ({
    id: 'cur_SN_19',
    countryCode: 'SN',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 1,
    topicKey: 'sadio_mane_bambali',
    source: 'CAF & FSF — Ballon d’Or Africain (2019, 2022)',
    prompt: L(
      'Originaire de Bambali, quel double Ballon d’Or africain (2019, 2022) a marqué le tir au but décisif offrant la première CAN au Sénégal en 2022 ?',
      'Born in Bambali, which two-time African Footballer of the Year (2019, 2022) netted the winning penalty for Senegal’s first AFCON title?',
      'Nacido en Bambali, ¿qué doble Balón de Oro africano (2019 y 2022) anotó el penalti decisivo de la primera CAN del país?',
      'Nascido em Bambali, qual duas vezes Bola de Ouro africano (2019 e 2022) marcou o pênalti do primeiro título da CAN?',
      'من هو النجم المولود في بامبالي والفائز بالكرة الذهبية الأفريقية مرتين وصاحب ركلة الحسم في أمم أفريقيا 2022؟'
    ),
    countryModePrompt: L(
      'Quel enfant de Bambali et meilleur buteur de l’histoire des Lions transforma le tir au but victorieux de la finale de la CAN 2021 ?',
      'Which son of Bambali—all-time top scorer for the national team—scored the title-winning penalty in the 2021 AFCON final?',
      '¿Qué ídolo nacido en Bambali y máximo goleador histórico transformó el penalti definitivo de la CAN 2021?',
      'Qual ídolo nascido em Bambali e maior artilheiro histórico converteu o pênalti do título na CAN 2021?',
      'من هو ابن بامبالي والهداف التاريخي للمنتخب الذي سجل ركلة الحسم لنيل أول لقب أفريقي؟'
    ),
    correct: L('Sadio Mané', 'Sadio Mané', 'Sadio Mané', 'Sadio Mané', 'ساديو ماني'),
    distractors: [
      L('Mohamed Salah', 'Mohamed Salah', 'Mohamed Salah', 'Mohamed Salah', 'محمد صلاح'),
      L('Riyad Mahrez', 'Riyad Mahrez', 'Riyad Mahrez', 'Riyad Mahrez', 'رياض محرز'),
      L('Victor Osimhen', 'Victor Osimhen', 'Victor Osimhen', 'Victor Osimhen', 'فيكتور أوسيمين'),
    ],
    explanation: L(
      'Élu meilleur joueur de la CAN 2021 et 2e du Ballon d’Or 2022, Sadio Mané finance aussi écoles et hôpital dans son village natal.',
      'Named 2021 AFCON Player of the Tournament, Sadio Mané also funded a school and hospital in Bambali.',
      'Elegido mejor jugador de la CAN 2021, Sadio Mané impulsa proyectos sociales en Bambali.',
      'Eleito melhor jogador da CAN 2021, Sadio Mané financia projetos sociais em Bambali.',
      'توج ساديو ماني أفضل لاعب في بطولة 2021 وأسهم في بناء مدارس ومستشفى بقريته.'
    ),
  }),
  mkQ({
    id: 'cur_SN_20',
    countryCode: 'SN',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'lionnes_afrobasket_record',
    source: 'FIBA Africa — AfroBasket féminin',
    prompt: L(
      'Dans quel sport collectif les « Lionnes » détiennent-elles le record absolu du continent africain avec 11 titres de championnes d’Afrique (AfroBasket) ?',
      'In which team sport do the "Lionesses" hold the all-time African continental record with 11 Women’s AfroBasket championships?',
      '¿En qué deporte colectivo ostentan las «Leonas» el récord africano con 11 títulos continentales (AfroBasket)?',
      'Em qual esporte coletivo as "Leoas" detêm o recorde africano com 11 títulos continentais (AfroBasket)?',
      'في أي رياضة جماعية تحمل «اللبؤات» الرقم القياسي القاري برصيد 11 لقباً أفريقياً؟'
    ),
    correct: L('Le basketball féminin', 'Women’s basketball', 'Baloncesto femenino', 'Basquete feminino', 'كرة السلة للسيدات'),
    distractors: [
      L('Le hockey sur gazon', 'Field hockey', 'Hockey sobre hierba', 'Hóquei na grama', 'الهوكي'),
      L('Le water-polo', 'Water polo', 'Waterpolo', 'Polo aquático', 'كرة الماء'),
      L('Le rugby à XV', 'Rugby union', 'Rugby', 'Rugby', 'الرجبي'),
    ],
    explanation: L(
      'Des pionnières de 1974 aux stars comme Astou Traoré, l’équipe féminine de basket règne sur le palmarès africain.',
      'Since 1974, the Lionesses have set the continental standard with 11 Women’s AfroBasket trophies.',
      'Desde 1974, las Leonas lideran el palmarés continental con 11 coronas.',
      'Desde 1974, as Leoas lideram a história do AfroBasket feminino com 11 títulos.',
      'تتربع سيدات كرة السلة على عرش البطولة الأفريقية برصيد قياسي يبلغ 11 لقباً.'
    ),
  }),
  mkQ({
    id: 'cur_SN_21',
    countryCode: 'SN',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'jules_bocande_metz_1986',
    source: 'FSF / FC Metz — Légendes',
    prompt: L(
      'Quel buteur charismatique né à Ziguinchor fut meilleur buteur du championnat de France 1986 avec le FC Metz (23 buts) avant de devenir sélectionneur en 1994 ?',
      'Which charismatic Ziguinchor-born striker was 1985–86 French Ligue 1 top scorer with FC Metz (23 goals) before later coaching the Lions?',
      '¿Qué carismático delantero nacido en Ziguinchor fue máximo goleador de Francia en 1986 con el Metz (23 goles)?',
      'Qual carismático atacante nascido em Ziguinchor foi artilheiro da França em 1986 pelo Metz (23 gols)?',
      'من هو الهداف المولود في زيغينشور والمتوج بلقب هداف الدوري الفرنسي عام 1986 مع ميتز؟'
    ),
    correct: L('Jules François Bocandé', 'Jules Bocandé', 'Jules Bocandé', 'Jules Bocandé', 'جول بوكاندي'),
    distractors: [
      L('Roger Milla', 'Roger Milla', 'Roger Milla', 'Roger Milla', 'روجيه ميلا'),
      L('George Weah', 'George Weah', 'George Weah', 'George Weah', 'جورج ويا'),
      L('Rashidi Yekini', 'Rashidi Yekini', 'Rashidi Yekini', 'Rashidi Yekini', 'رشيدي يكيني'),
    ],
    explanation: L(
      'Capitaine emblématique lors du retour à la CAN 1986, Jules Bocandé a inspiré toute une génération du Casa Sports aux Lions.',
      'Leading the Lions back to AFCON in 1986, Jules Bocandé remains deeply beloved from Ziguinchor to Dakar.',
      'Capitán en el regreso a la CAN de 1986, Jules Bocandé inspiró a toda una generación.',
      'Capitão no retorno à CAN de 1986, Jules Bocandé inspirou toda uma geração.',
      'قاد جول بوكاندي المنتخب للعودة إلى كأس أفريقيا 1986 ويُعد رمزاً كروياً خالداً.'
    ),
  }),
  mkQ({
    id: 'cur_SN_22',
    countryCode: 'SN',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'edouard_mendy_fifa_best_2021',
    source: 'FIFA The Best 2021 & CAN 2021',
    prompt: L(
      'Quel gardien de but a remporté en 2021 la Ligue des champions avec Chelsea et le trophée FIFA The Best de Meilleur gardien du monde (une première pour un Africain) ?',
      'Which goalkeeper won the 2021 UEFA Champions League with Chelsea and became the first African named The Best FIFA Men’s Goalkeeper?',
      '¿Qué portero ganó la Champions League 2021 con el Chelsea y el premio FIFA The Best al Mejor Portero del mundo?',
      'Qual goleiro venceu a Liga dos Campeões de 2021 pelo Chelsea e o prêmio FIFA The Best de Melhor Goleiro do mundo?',
      'من هو حارس المرمى الفائز بدوري أبطال أوروبا 2021 وجائزة فيفا لأفضل حارس في العالم لأول مرة أفريقياً؟'
    ),
    correct: L('Édouard Mendy', 'Édouard Mendy', 'Édouard Mendy', 'Édouard Mendy', 'إدوارد ميندي'),
    distractors: [
      L('André Onana', 'André Onana', 'André Onana', 'André Onana', 'أندريه أونانا'),
      L('Yassine Bounou', 'Yassine Bounou', 'Yassine Bounou', 'Yassine Bounou', 'ياسين بونو'),
      L('Tony Sylva', 'Tony Sylva', 'Tony Sylva', 'Tony Sylva', 'توني سيلفا'),
    ],
    explanation: L(
      'Élu meilleur gardien de la CAN 2021 après un arrêt décisif en séance de tirs au but en finale, Édouard Mendy a marqué l’histoire.',
      'Named Best Goalkeeper at the 2021 AFCON after a crucial shootout save in the final, Édouard Mendy made history.',
      'Elegido mejor portero de la CAN 2021 tras detener un penalti clave en la final, hizo historia.',
      'Eleito melhor goleiro da CAN 2021 após defesa decisiva na final, fez história.',
      'حصل إدوارد ميندي أيضاً على جائزة أفضل حارس في أمم أفريقيا 2021 بعد تصديه الحاسم في النهائي.'
    ),
  }),
  mkQ({
    id: 'cur_SN_23',
    countryCode: 'SN',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'generation_foot_academy',
    source: 'FSF — Académies de football',
    prompt: L(
      'Quelle célèbre académie de Déni Biram Ndao (qui a formé Sadio Mané, Ismaïla Sarr, Pape Matar Sarr et Lamine Camara) est une référence du football africain ?',
      'Which famed academy in Déni Biram Ndao—which developed Sadio Mané, Ismaïla Sarr, Pape Matar Sarr, and Lamine Camara—leads African youth development?',
      '¿Qué célebre academia en Déni Biram Ndao formó a Sadio Mané, Ismaïla Sarr, Pape Matar Sarr y Lamine Camara?',
      'Qual célebre academia em Déni Biram Ndao revelou Sadio Mané, Ismaïla Sarr, Pape Matar Sarr e Lamine Camara?',
      'ما الأكاديمية الكروية الشهيرة التي خرّجت ساديو ماني وإسماعيلا سار وبابي ماتار سار ولامين كامارا؟'
    ),
    correct: L('Génération Foot', 'Génération Foot', 'Génération Foot', 'Génération Foot', 'أكاديمية جينيراسيون فوت'),
    distractors: [
      L('La Masia de Barcelone', 'FC Barcelona La Masia', 'La Masia', 'La Masia', 'لا ماسيا'),
      L('L’Ajax de Cape Town', 'Ajax Cape Town', 'Ajax Cape Town', 'Ajax Cape Town', 'أياكس كيب تاون'),
      L('L’Académie Mohammed VI', 'Mohammed VI Academy', 'Academia Mohammed VI', 'Academia Mohammed VI', 'أكاديمية محمد السادس'),
    ],
    explanation: L(
      'Fondée en 2000 par Mady Touré, Génération Foot rivalise avec Diambars et le Jaraaf pour former l’élite des Lions.',
      'Founded by Mady Touré in 2000, Génération Foot powers national talent alongside Diambars and ASC Jaraaf.',
      'Fundada en 2000 por Mady Touré, Génération Foot impulsa junto a Diambars la élite nacional.',
      'Fundada em 2000 por Mady Touré, a Génération Foot forma ao lado de Diambars a base dos Leões.',
      'تُعد جينيراسيون فوت إلى جانب معهد ديامبارس ونادي جاراف أبرز مصانع النجوم في البلاد.'
    ),
  }),
  mkQ({
    id: 'cur_SN_24',
    countryCode: 'SN',
    category: 'culture',
    subCategory: 'patrimoine_tourisme',
    difficulty: 4,
    topicKey: 'kankourang_manding_unesco',
    source: 'UNESCO — Patrimoine immatériel (2008)',
    prompt: L(
      'Inscrit à l’UNESCO, quel rite initiatique et masque rouge d’écorce des communautés mandingues de Casamance et Tambacounda défile pour protéger les jeunes initiés ?',
      'Inscribed by UNESCO, which Mandinka initiation figure draped in red bark fibers parades in Casamance and Tambacounda to protect initiates?',
      'Inscrito en la UNESCO, ¿qué rito iniciático mandinga con máscara de corteza roja desfila en Casamance y Tambacounda?',
      'Inscrito na UNESCO, qual rito iniciático mandinga com máscara de casca vermelha desfila em Casamansa e Tambacounda?',
      'ما الطقس التراثي الماندينغي المسجل لدى اليونسكو في كازامانس وتامباكوندا الذي يرتدي فيه الشخص قناعاً من لحاء الشجر الأحمر؟'
    ),
    correct: L('Le Kankourang', 'The Kankourang', 'El Kankourang', 'O Kankourang', 'طقس الكانكورانغ'),
    distractors: [
      L('Le Carnaval de Venise', 'Venice Carnival', 'Carnaval de Venecia', 'Carnaval de Veneza', 'كرنفال البندقية'),
      L('Le Kabuki japonais', 'Japanese Kabuki', 'Kabuki japonés', 'Kabuki japonês', 'مسرح الكابوكي'),
      L('Le Tango argentin', 'Argentine Tango', 'Tango argentino', 'Tango argentino', 'التانغو'),
    ],
    explanation: L(
      'Apparu notamment à Mbour, Ziguinchor et Tambacounda, le Kankourang porte une parure d’écorces rouges au son des tambours.',
      'Seen in Mbour, Ziguinchor, and Tambacounda, the Kankourang wears red bark fibers and upholds community values.',
      'Presente en Mbour, Ziguinchor y Tambacounda, el Kankourang transmite valores entre generaciones.',
      'Presente em Mbour, Ziguinchor e Tambacounda, o Kankourang simboliza a transmissão de valores.',
      'يجسد الكانكورانغ في مبور وتامباكوندا وزيجينشور حفظ القيم والتضامن الاجتماعي.'
    ),
  }),
];

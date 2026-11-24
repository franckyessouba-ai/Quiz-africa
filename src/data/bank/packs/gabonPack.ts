import { QuizQuestion } from '../../../types/quiz';
import { L } from '../../countriesPart1';
import { mkQ } from './packHelpers';

export const GABON_CURATED_PACK: QuizQuestion[] = [
  mkQ({
    id: 'cur_GA_01',
    countryCode: 'GA',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 1,
    topicKey: 'libreville_origin',
    source: 'Archives historiques de Libreville (1849)',
    prompt: L(
      'Pourquoi la capitale du Gabon a-t-elle été baptisée « Libreville » en 1849 ?',
      'Why was Gabon’s capital named "Libreville" (Free Town) in 1849?',
      '¿Por qué la capital de Gabón recibió el nombre de "Libreville" en 1849?',
      'Por que a capital do Gabão recebeu o nome de "Libreville" em 1849?',
      'لماذا سُميت عاصمة الغابون «ليبروفيل» (المدينة الحرة) عام 1849؟'
    ),
    countryModePrompt: L(
      'Pourquoi la capitale du pays a-t-elle été baptisée « Libreville » en 1849 ?',
      'Why was the country’s capital named "Libreville" (Free Town) in 1849?',
      '¿Por qué la capital del país recibió el nombre de "Libreville" en 1849?',
      'Por que a capital do país recebeu o nome de "Libreville" em 1849?',
      'لماذا سُميت عاصمة البلاد «ليبروفيل» عام 1849؟'
    ),
    correct: L(
      'En hommage à des captifs libérés du navire négrier L’Elizia qui y furent installés',
      'In honor of freed captives from the slave ship L’Elizia resettled there',
      'En honor a cautivos liberados del barco esclavista L’Elizia instalados allí',
      'Em homenagem a cativos libertos do navio negreiro L’Elizia lá assentados',
      'تكريماً لمحررين من سفينة الرقيق «إليزيا» استقروا فيها'
    ),
    distractors: [
      L('En référence à un traité commercial signé avec le Portugal', 'After a trade treaty signed with Portugal', 'Por un tratado comercial firmado con Portugal', 'Por um tratado comercial assinado com Portugal', 'نسبةً إلى معاهدة تجارية مع البرتغال'),
      L('En hommage au fleuve Ogooué jugé « libre d’accès »', 'In tribute to the "free-flowing" Ogooué River', 'En homenaje al río Ogooué', 'Em homenagem ao rio Ogooué', 'تكريماً لنهر أوغوي'),
      L('Parce qu’aucun droit de douane n’y existait au XIXe siècle', 'Because no customs duties existed there in the 19th century', 'Porque no había aduanas en el siglo XIX', 'Porque não havia taxas alfandegárias no século XIX', 'لأنها كانت خالية من الجمارك في القرن التاسع عشر'),
    ],
    explanation: L(
      'En 1849, les rescapés du navire L’Elizia libérés par la marine française fondèrent ce village baptisé Libreville (« ville libre »).',
      'In 1849, captives freed from the slave ship L’Elizia established the settlement named Libreville ("Free Town").',
      'En 1849, los supervivientes liberados del barco L’Elizia fundaron el asentamiento llamado Libreville.',
      'Em 1849, os cativos libertos do navio L’Elizia fundaram a povoação batizada de Libreville.',
      'عام 1849 استقر محررو سفينة إليزيا في هذه المنطقة وأطلقوا عليها اسم ليبروفيل أي المدينة الحرة.'
    ),
  }),
  mkQ({
    id: 'cur_GA_02',
    countryCode: 'GA',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 1,
    topicKey: 'national_motto',
    source: 'Constitution de la République gabonaise',
    prompt: L(
      'Quelle est la devise officielle du Gabon inscrite sur ses armoiries ?',
      'What is the official national motto of Gabon?',
      '¿Cuál es el lema nacional oficial de Gabón?',
      'Qual é o lema nacional oficial do Gabão?',
      'ما هو الشعار الوطني الرسمي للغابون؟'
    ),
    countryModePrompt: L(
      'Quelle est la devise officielle inscrite sur les armoiries du pays ?',
      'What is the official motto inscribed on the country’s coat of arms?',
      '¿Cuál es el lema oficial inscrito en el escudo nacional del país?',
      'Qual é o lema oficial inscrito no brasão do país?',
      'ما هو الشعار الوطني الرسمي المنقوش على شعار البلاد؟'
    ),
    correct: L('Union – Travail – Justice', 'Union – Work – Justice', 'Unión – Trabajo – Justicia', 'União – Trabalho – Justiça', 'الاتحاد – العمل – العدالة'),
    distractors: [
      L('Unité – Progrès – Justice', 'Unity – Progress – Justice', 'Unidad – Progreso – Justicia', 'Unidade – Progresso – Justiça', 'الوحدة – التقدم – العدالة'),
      L('Paix – Travail – Patrie', 'Peace – Work – Fatherland', 'Paz – Trabajo – Patria', 'Paz – Trabalho – Pátria', 'السلام – العمل – الوطن'),
      L('Liberté – Égalité – Fraternité', 'Liberty – Equality – Fraternity', 'Libertad – Igualdad – Fraternidad', 'Liberdade – Igualdade – Fraternidade', 'الحرية – المساواة – الإخاء'),
    ],
    explanation: L(
      'Adoptée à l’indépendance, la devise « Union – Travail – Justice » accompagne le drapeau tricolore vert, jaune et bleu.',
      'Adopted at independence, "Union – Work – Justice" accompanies the green, yellow, and blue flag.',
      'Adoptado tras la independencia, el lema «Unión – Trabajo – Justicia» acompaña a la bandera nacional.',
      'Adotado na independência, o lema «União – Trabalho – Justiça» acompanha a bandeira nacional.',
      'يُعد «الاتحاد – العمل – العدالة» الشعار الدستوري الرسمي للبلاد منذ الاستقلال.'
    ),
  }),
  mkQ({
    id: 'cur_GA_03',
    countryCode: 'GA',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'national_anthem',
    source: 'Archives nationales — Hymne « La Concorde » (1960)',
    prompt: L(
      'Comment s’intitule l’hymne national du Gabon composé par Georges Aleka Damas en 1960 ?',
      'What is the title of Gabon’s national anthem composed by Georges Aleka Damas in 1960?',
      '¿Cómo se titula el himno nacional de Gabón compuesto por Georges Aleka Damas en 1960?',
      'Qual é o título do hino nacional do Gabão composto por Georges Aleka Damas em 1960?',
      'ما اسم النشيد الوطني للغابون الذي ألفه جورج أليكا داماس عام 1960؟'
    ),
    countryModePrompt: L(
      'Comment s’intitule l’hymne national composé par Georges Aleka Damas en 1960 ?',
      'What is the title of the national anthem composed by Georges Aleka Damas in 1960?',
      '¿Cómo se titula el himno nacional compuesto por Georges Aleka Damas en 1960?',
      'Qual é o título do hino nacional composto por Georges Aleka Damas em 1960?',
      'ما عنوان النشيد الوطني الذي ألفه جورج أليكا داماس عام 1960؟'
    ),
    correct: L('La Concorde', 'La Concorde', 'La Concorde', 'La Concorde', 'الوئام (لا كونكورد)'),
    distractors: [
      L('L’Abidjanaise', 'L’Abidjanaise', 'L’Abidjanaise', 'L’Abidjanaise', 'الأبيدجانية'),
      L('La Congolaise', 'La Congolaise', 'La Congolaise', 'La Congolaise', 'الكونغولية'),
      L('La Renaissance', 'La Renaissance', 'La Renaissance', 'La Renaissance', 'النهضة'),
    ],
    explanation: L(
      'Écrit et mis en musique par Georges Aleka Damas, « La Concorde » est devenu l’hymne national lors de l’indépendance en août 1960.',
      'Written and composed by Georges Aleka Damas, "La Concorde" became the national anthem at independence in August 1960.',
      'Escrito y compuesto por Georges Aleka Damas, «La Concorde» se convirtió en el himno nacional en agosto de 1960.',
      'Escrito por Georges Aleka Damas, «La Concorde» tornou-se o hino nacional na independência em agosto de 1960.',
      'ألف جورج أليكا داماس نشيد «لا كونكورد» ليصبح النشيد الرسمي عند الاستقلال في أغسطس 1960.'
    ),
  }),
  mkQ({
    id: 'cur_GA_04',
    countryCode: 'GA',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 2,
    topicKey: 'schweitzer_lambarene',
    source: 'Fondation Prix Nobel (1952)',
    prompt: L(
      'Dans quelle ville du Gabon le docteur Albert Schweitzer fonda-t-il en 1913 l’hôpital qui lui valut le prix Nobel de la paix ?',
      'In which Gabonese town did Dr. Albert Schweitzer found the 1913 hospital that earned him the Nobel Peace Prize?',
      '¿En qué ciudad de Gabón fundó Albert Schweitzer en 1913 el hospital que le valió el Premio Nobel de la Paz?',
      'Em que cidade do Gabão Albert Schweitzer fundou em 1913 o hospital que lhe rendeu o Prêmio Nobel da Paz?',
      'في أي مدينة غابونية أسس الطبيب ألبرت شفايتزر مستشفاه الشهير عام 1913؟'
    ),
    countryModePrompt: L(
      'Dans quelle ville au bord de l’Ogooué le docteur Albert Schweitzer fonda-t-il son célèbre hôpital en 1913 ?',
      'In which town along the Ogooué River did Dr. Albert Schweitzer found his famous hospital in 1913?',
      '¿En qué ciudad junto al río Ogooué fundó el doctor Albert Schweitzer su célebre hospital en 1913?',
      'Em que cidade às margens do rio Ogooué o médico Albert Schweitzer fundou seu célebre hospital em 1913?',
      'في أي مدينة على ضفاف نهر أوغوي أسس الطبيب ألبرت شفايتزر مستشفاه الشهير عام 1913؟'
    ),
    correct: L('Lambaréné', 'Lambaréné', 'Lambaréné', 'Lambaréné', 'لامباريني'),
    distractors: [
      L('Oyem', 'Oyem', 'Oyem', 'Oyem', 'أويم'),
      L('Mouila', 'Mouila', 'Mouila', 'Mouila', 'مويلا'),
      L('Tchibanga', 'Tchibanga', 'Tchibanga', 'Tchibanga', 'تشيبانغا'),
    ],
    explanation: L(
      'Situé sur une île du fleuve Ogooué, l’hôpital Albert-Schweitzer de Lambaréné reste un centre médical et scientifique reconnu, notamment contre le paludisme.',
      'Set on the Ogooué River, the Albert Schweitzer Hospital in Lambaréné remains a renowned medical and malaria-research center.',
      'Situado junto al río Ogooué, el hospital Albert Schweitzer de Lambaréné sigue siendo un centro médico reconocido.',
      'Localizado no rio Ogooué, o hospital Albert Schweitzer em Lambaréné segue sendo um centro médico renomado.',
      'يقع مستشفى ألبرت شفايتزر في مدينة لامباريني على نهر أوغوي ولا يزال مركزاً طبياً مرموقاً.'
    ),
  }),
  mkQ({
    id: 'cur_GA_05',
    countryCode: 'GA',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 3,
    topicKey: 'rogombe_first_woman',
    source: 'Cour constitutionnelle & Archives de la République',
    prompt: L(
      'Qui est devenue en juin 2009 la première femme à exercer la fonction de chef d’État au Gabon ?',
      'Who became the first woman to serve as Head of State of Gabon in June 2009?',
      '¿Quién se convirtió en junio de 2009 en la primera mujer en ejercer la jefatura de Estado de Gabón?',
      'Quem se tornou em junho de 2009 a primeira mulher a exercer a chefia de Estado do Gabão?',
      'من أصبحت في يونيو 2009 أول امرأة تتولى منصب رئيس الدولة في الغابون؟'
    ),
    countryModePrompt: L(
      'Quelle juriste et présidente du Sénat est devenue en juin 2009 la première femme chef d’État du pays ?',
      'Which jurist and Senate President became the country’s first female Head of State in June 2009?',
      '¿Qué jurista y presidenta del Senado se convirtió en junio de 2009 en la primera mujer jefa de Estado del país?',
      'Qual jurista e presidente do Senado tornou-se em junho de 2009 a primeira mulher chefe de Estado do país?',
      'من هي القاضية ورئيسة مجلس الشيوخ التي أصبحت في يونيو 2009 أول امرأة تتولى رئاسة البلاد؟'
    ),
    correct: L('Rose Francine Rogombé', 'Rose Francine Rogombé', 'Rose Francine Rogombé', 'Rose Francine Rogombé', 'روز فرانسين روغومبي'),
    distractors: [
      L('Pascaline Bongo', 'Pascaline Bongo', 'Pascaline Bongo', 'Pascaline Bongo', 'باسكالين بونغو'),
      L('Rose Christiane Ossouka Raponda', 'Rose Christiane Ossouka Raponda', 'Rose Christiane Ossouka Raponda', 'Rose Christiane Ossouka Raponda', 'روز كريستيان أوسوكا رابوندا'),
      L('Honorine Dossou Naki', 'Honorine Dossou Naki', 'Honorine Dossou Naki', 'Honorine Dossou Naki', 'أونورين دوسو ناكي'),
    ],
    explanation: L(
      'Présidente du Sénat en 2009, Rose Francine Rogombé a assuré la présidence intérimaire de la République conformément à la Constitution.',
      'As Senate President in 2009, Rose Francine Rogombé served as acting Head of State under the Constitution.',
      'Como presidenta del Senado en 2009, Rose Francine Rogombé ejerció la presidencia interina constitucional.',
      'Presidente do Senado em 2009, Rose Francine Rogombé exerceu a presidência interina da República.',
      'بصفتها رئيسة مجلس الشيوخ عام 2009، تولت روز فرانسين روغومبي رئاسة الدولة بالإنابة وفقاً للدستور.'
    ),
  }),
  mkQ({
    id: 'cur_GA_06',
    countryCode: 'GA',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 3,
    topicKey: 'raponda_first_pm',
    source: 'Primature de la République gabonaise (2020)',
    prompt: L(
      'Qui fut nommée première femme Première ministre de l’histoire du Gabon en juillet 2020 ?',
      'Who was appointed Gabon’s first female Prime Minister in July 2020?',
      '¿Quién fue nombrada primera mujer Primera Ministra de Gabón en julio de 2020?',
      'Quem foi nomeada a primeira mulher Primeira-Ministra do Gabão em julho de 2020?',
      'من عُينت في يوليو 2020 أول امرأة تتولى منصب رئيس الوزراء في الغابون؟'
    ),
    countryModePrompt: L(
      'Qui fut nommée en juillet 2020 la toute première femme Première ministre du pays ?',
      'Who was appointed the country’s first-ever female Prime Minister in July 2020?',
      '¿Quién fue nombrada en julio de 2020 la primera mujer Primera Ministra del país?',
      'Quem foi nomeada em julho de 2020 a primeira mulher Primeira-Ministra do país?',
      'من هي أول امرأة عُينت رئيسةً للوزراء في البلاد في يوليو 2020؟'
    ),
    correct: L('Rose Christiane Ossouka Raponda', 'Rose Christiane Ossouka Raponda', 'Rose Christiane Ossouka Raponda', 'Rose Christiane Ossouka Raponda', 'روز كريستيان أوسوكا رابوندا'),
    distractors: [
      L('Rose Francine Rogombé', 'Rose Francine Rogombé', 'Rose Francine Rogombé', 'Rose Francine Rogombé', 'روز فرانسين روغومبي'),
      L('Paulette Missambo', 'Paulette Missambo', 'Paulette Missambo', 'Paulette Missambo', 'بوليت ميسامبو'),
      L('Chantal Myboto', 'Chantal Myboto', 'Chantal Myboto', 'Chantal Myboto', 'شانتال ميبوتو'),
    ],
    explanation: L(
      'Ancienne maire de Libreville et ministre de la Défense, Rose Christiane Ossouka Raponda est devenue la première femme cheffe du gouvernement en 2020.',
      'Former Mayor of Libreville and Defense Minister, Rose Christiane Ossouka Raponda became the first female Prime Minister in 2020.',
      'Exalcaldesa de Libreville, Rose Christiane Ossouka Raponda se convirtió en la primera jefa de Gobierno en 2020.',
      'Ex-prefeita de Libreville, Rose Christiane Ossouka Raponda tornou-se a primeira Primeira-Ministra em 2020.',
      'شغلت روز كريستيان أوسوكا رابوندا منصب عمدة ليبروفيل قبل تعيينها أول رئيسة وزراء في تاريخ البلاد عام 2020.'
    ),
  }),
  mkQ({
    id: 'cur_GA_07',
    countryCode: 'GA',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 1,
    topicKey: 'forest_cover',
    source: 'FAO & Agence nationale des parcs nationaux (ANPN)',
    prompt: L(
      'Quelle proportion impressionnante du territoire du Gabon est recouverte par la forêt équatoriale ?',
      'Roughly what share of Gabon’s land area is covered by tropical rainforest?',
      '¿Qué proporción aproximada del territorio de Gabón está cubierta por selva ecuatorial?',
      'Qual proporção aproximada do território do Gabão é coberta por floresta equatorial?',
      'ما النسبة التقريبية التي تغطيها الغابات الاستوائية من مساحة الغابون؟'
    ),
    countryModePrompt: L(
      'Quelle proportion exceptionnelle du territoire national est couverte par la forêt tropicale ?',
      'Roughly what extraordinary share of the national territory is covered by tropical forest?',
      '¿Qué proporción excepcional del territorio nacional está cubierta por selva tropical?',
      'Qual proporção excepcional do território nacional é coberta por floresta tropical?',
      'ما النسبة الاستثنائية التي تغطيها الغابات الاستوائية من مساحة البلاد؟'
    ),
    correct: L('Environ 88 %', 'Around 88%', 'Alrededor del 88 %', 'Cerca de 88%', 'نحو 88%'),
    distractors: [
      L('Environ 25 %', 'Around 25%', 'Alrededor del 25 %', 'Cerca de 25%', 'نحو 25%'),
      L('Environ 45 %', 'Around 45%', 'Alrededor del 45 %', 'Cerca de 45%', 'نحو 45%'),
      L('Environ 10 %', 'Around 10%', 'Alrededor del 10 %', 'Cerca de 10%', 'نحو 10%'),
    ],
    explanation: L(
      'Avec environ 88 % de couverture forestière, ce pays est l’un des plus boisés de la planète et un puits de carbone majeur du Bassin du Congo.',
      'With roughly 88% forest cover, the country ranks among the most forested nations on Earth and acts as a major carbon sink.',
      'Con cerca del 88 % de cobertura forestal, es uno de los países más boscosos del planeta.',
      'Com cerca de 88% de cobertura florestal, é um dos países mais arborizados do planeta.',
      'تغطي الغابات نحو 88% من مساحة البلاد، مما يجعلها من أكثر دول العالم تشجيراً.'
    ),
  }),
  mkQ({
    id: 'cur_GA_08',
    countryCode: 'GA',
    category: 'geography',
    subCategory: 'sciences_innovations',
    difficulty: 4,
    topicKey: 'oklo_reactors',
    source: 'CEA / Nature — Réacteurs naturels d’Oklo (1972)',
    prompt: L(
      'Quel phénomène géologique unique au monde fut découvert en 1972 dans le gisement d’uranium d’Oklo, au Gabon ?',
      'What unique geological phenomenon was discovered in 1972 at the Oklo uranium site in Gabon?',
      '¿Qué fenómeno geológico único en el mundo se descubrió en 1972 en el yacimiento de Oklo, en Gabón?',
      'Que fenômeno geológico único no mundo foi descoberto em 1972 na jazida de Oklo, no Gabão?',
      'ما الظاهرة الجيولوجية الفريدة عالمياً التي اكتُشفت عام 1972 في منجم أوكلو بالغابون؟'
    ),
    countryModePrompt: L(
      'Quel phénomène scientifique unique sur Terre fut découvert en 1972 dans la mine d’uranium d’Oklo ?',
      'What unique scientific phenomenon on Earth was discovered in 1972 at the Oklo uranium mine?',
      '¿Qué fenómeno científico único en la Tierra se descubrió en 1972 en la mina de Oklo?',
      'Que fenômeno científico único na Terra foi descoberto em 1972 na mina de Oklo?',
      'ما الظاهرة العلمية الفريدة على وجه الأرض التي اكتُشفت عام 1972 في منجم أوكلو؟'
    ),
    correct: L(
      'Les seuls réacteurs nucléaires naturels connus ayant fonctionné il y a 2 milliards d’années',
      'The only known natural nuclear fission reactors, active ~2 billion years ago',
      'Los únicos reactores nucleares naturales conocidos, activos hace 2.000 millones de años',
      'Os únicos reatores nucleares naturais conhecidos, ativos há 2 bilhões de anos',
      'المفاعلات النووية الطبيعية الوحيدة المعروفة التي نشطت قبل نحو ملياري عام'
    ),
    distractors: [
      L('La plus grande réserve mondiale de diamants bleus', 'The world’s largest reserve of blue diamonds', 'La mayor reserva mundial de diamantes azules', 'A maior reserva mundial de diamantes azuis', 'أكبر احتياطي عالمي للألماس الأزرق'),
      L('Un glacier souterrain datant du Jurassique', 'A subterranean Jurassic glacier', 'Un glaciar subterráneo del Jurásico', 'Uma geleira subterrânea do Jurássico', 'نهر جليدي جوفي من العصر الجوراسي'),
      L('Le plus grand cratère météoritique de la planète', 'The largest meteorite impact crater on Earth', 'El mayor cráter meteorítico del planeta', 'A maior cratera de meteorito do planeta', 'أكبر فوهة نيزكية على الأرض'),
    ],
    explanation: L(
      'À Oklo (Haut-Ogooué), l’eau souterraine et la forte concentration d’uranium-235 ont déclenché des réactions nucléaires naturelles durables il y a près de 2 milliards d’années !',
      'At Oklo, groundwater moderated natural uranium-235 into self-sustaining nuclear fission nearly 2 billion years ago—a unique marvel on Earth.',
      'En Oklo, aguas subterráneas y uranio-235 provocaron reacciones nucleares naturales hace casi 2.000 millones de años.',
      'Em Oklo, águas subterrâneas moderaram urânio-235 gerando fissão nuclear natural há cerca de 2 bilhões de anos.',
      'في أوكلو تفاعلت المياه الجوفية مع اليورانيوم الطبيعي لتكوّن مفاعلات انشطار نووي طبيعية قبل نحو ملياري سنة.'
    ),
  }),
  mkQ({
    id: 'cur_GA_09',
    countryCode: 'GA',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'loango_hippos',
    source: 'ANPN — Parc national de Loango',
    prompt: L(
      'Quelle scène animalière spectaculaire a rendu célèbre le parc national de Loango au Gabon ?',
      'Which extraordinary wildlife scene made Gabon’s Loango National Park famous worldwide?',
      '¿Qué escena salvaje extraordinaria hizo famoso al Parque Nacional de Loango en Gabón?',
      'Que cena extraordinária da vida selvagem tornou famoso o Parque Nacional de Loango no Gabão?',
      'ما المشهد البري المذهل الذي اشتهر به منتزه لوانغو الوطني في الغابون؟'
    ),
    countryModePrompt: L(
      'Quelle scène animalière spectaculaire a rendu célèbre le parc national côtier de Loango ?',
      'Which extraordinary wildlife scene made coastal Loango National Park world-famous?',
      '¿Qué escena salvaje extraordinaria hizo famoso al parque costero de Loango?',
      'Que cena extraordinária da fauna tornou famoso o parque costeiro de Loango?',
      'ما المشهد البري النادر الذي اشتهر به منتزه لوانغو الساحلي؟'
    ),
    correct: L(
      'Des hippopotames et des éléphants de forêt évoluant jusque sur les plages de l’Atlantique',
      'Hippos and forest elephants walking and swimming right along Atlantic beaches',
      'Hipopótamos y elefantes de bosque recorriendo las playas del Atlántico',
      'Hipopótamos e elefantes-da-floresta caminhando nas praias do Atlântico',
      'أفراس النهر وفيلة الغابات تتجول وتسبح مباشرة على شواطئ المحيط الأطلسي'
    ),
    distractors: [
      L('Des manchots empereurs nichant sur des falaises volcaniques', 'Emperor penguins nesting on volcanic cliffs', 'Pingüinos emperador anidando en acantilados', 'Pinguins-imperadores nidificando em falésias', 'بطاريق الإمبراطور تعشش على المنحدرات'),
      L('Des tigres du Bengale chassant dans les mangroves', 'Bengal tigers hunting in mangroves', 'Tigres de Bengala cazando en manglares', 'Tigres-de-bengala caçando nos manguezais', 'نمور البنغال تصطاد في أشجار المنغروف'),
      L('Des ours polaires traversant la lagune', 'Polar bears swimming across the lagoon', 'Osos polares cruzando la laguna', 'Ursos polares atravessando a lagoa', 'دببة قطبية تعبر البحيرة'),
    ],
    explanation: L(
      'Photographiés par Michael « Nick » Nichols pour National Geographic, les « hippopotames surfeurs » et éléphants de Loango incarnent la richesse de la côte.',
      'Made famous by National Geographic photographs of "surfing hippos," Loango showcases rainforest wildlife meeting untouched ocean beaches.',
      'Famoso por las fotos de hipopótamos en las olas del Atlántico, Loango une selva y océano.',
      'Famoso pelas imagens dos hipopótamos nas ondas atlânticas, Loango une floresta e oceano.',
      'يُعد منتزه لوانغو من أندر الأماكن التي تجتمع فيها الحياة البرية الاستوائية مع شواطئ المحيط الأطلسي.'
    ),
  }),
  mkQ({
    id: 'cur_GA_10',
    countryCode: 'GA',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'ivindo_kongou',
    source: 'UNESCO — Parc national d’Ivindo (2021)',
    prompt: L(
      'Quelles majestueuses chutes d’eau larges de près de 3 kilomètres se trouvent dans le parc national d’Ivindo ?',
      'Which majestic waterfalls nearly 3 km wide thunder inside Ivindo National Park?',
      '¿Qué majestuosas cataratas de casi 3 km de ancho se encuentran en el Parque Nacional de Ivindo?',
      'Que majestosas cachoeiras de quase 3 km de largura ficam no Parque Nacional de Ivindo?',
      'ما هي الشلالات المهيبة التي يبلغ عرضها نحو 3 كيلومترات داخل منتزه إيفيندو الوطني؟'
    ),
    countryModePrompt: L(
      'Quelles spectaculaires chutes d’eau larges de près de 3 km coulent au cœur du parc national d’Ivindo ?',
      'Which spectacular waterfalls nearly 3 km wide flow through the heart of Ivindo National Park?',
      '¿Qué espectaculares cataratas de casi 3 km de ancho fluyen en el Parque Nacional de Ivindo?',
      'Que espetaculares cachoeiras de quase 3 km de largura correm no Parque Nacional de Ivindo?',
      'ما الشلالات الخلابة بعرض يقارب 3 كم داخل منتزه إيفيندو الوطني؟'
    ),
    correct: L('Les chutes de Kongou', 'Kongou Falls', 'Las cataratas de Kongou', 'As quedas de Kongou', 'شلالات كونغو'),
    distractors: [
      L('Les chutes de Boali', 'Boali Falls', 'Cataratas de Boali', 'Quedas de Boali', 'شلالات بوالي'),
      L('Les chutes d’Inga', 'Inga Falls', 'Cataratas de Inga', 'Quedas de Inga', 'شلالات إنغا'),
      L('Les chutes de Tinkisso', 'Tinkisso Falls', 'Cataratas de Tinkisso', 'Quedas de Tinkisso', 'شلالات تينكيسو'),
    ],
    explanation: L(
      'Classé au patrimoine mondial de l’UNESCO en 2021, le parc d’Ivindo abrite les célèbres chutes de Kongou et Mingouli au milieu des forêts vierges.',
      'Inscribed by UNESCO in 2021, Ivindo National Park preserves the roaring Kongou and Mingouli waterfalls.',
      'Inscrito en la UNESCO en 2021, el parque de Ivindo protege las imponentes cataratas de Kongou.',
      'Inscrito na UNESCO em 2021, o parque de Ivindo preserva as imponentes quedas de Kongou.',
      'أُدرج منتزه إيفيندو في اليونسكو عام 2021 ويضم شلالات كونغو المهيبة.'
    ),
  }),
  mkQ({
    id: 'cur_GA_11',
    countryCode: 'GA',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 2,
    topicKey: 'transgabonais_railway',
    source: 'SETRAG — Chemin de fer Transgabonais',
    prompt: L(
      'Quelles deux villes relie principalement la ligne ferroviaire du Transgabonais (669 km) ?',
      'Which two cities are primarily connected by the 669-km Trans-Gabon Railway?',
      '¿Qué dos ciudades conecta principalmente la línea ferroviaria del Transgabonés (669 km)?',
      'Quais duas cidades são ligadas principalmente pela ferrovia Transgabonesa (669 km)?',
      'ما المدينتان اللتان يربط بينهما خط السكة الحديدية العابر للغابون (669 كم)؟'
    ),
    countryModePrompt: L(
      'Quelles deux villes majeures relie d’ouest en est la ligne ferroviaire du Transgabonais ?',
      'Which two major cities are linked from west to east by the Transgabonais railway?',
      '¿Qué dos ciudades importantes conecta de oeste a este la línea del Transgabonés?',
      'Quais duas grandes cidades são ligadas de oeste a leste pela ferrovia nacional?',
      'ما المدينتان الرئيسيتان اللتان يربطهما خط السكة الحديدية من الغرب إلى الشرق؟'
    ),
    correct: L('Owendo (Libreville) et Franceville', 'Owendo (Libreville) and Franceville', 'Owendo (Libreville) y Franceville', 'Owendo (Libreville) e Franceville', 'أويندو (ليبروفيل) وفرانسفيل'),
    distractors: [
      L('Port-Gentil et Oyem', 'Port-Gentil and Oyem', 'Port-Gentil y Oyem', 'Port-Gentil e Oyem', 'بورت جنتيل وأويم'),
      L('Tchibanga et Bitam', 'Tchibanga and Bitam', 'Tchibanga y Bitam', 'Tchibanga e Bitam', 'تشيبانغا وبيتام'),
      L('Mayumba et Makokou', 'Mayumba and Makokou', 'Mayumba y Makokou', 'Mayumba e Makokou', 'مايومبا وماكوكو'),
    ],
    explanation: L(
      'Inauguré en entier en 1986, ce chemin de fer vital transporte à la fois les voyageurs, le bois et le manganèse de Moanda jusqu’au port d’Owendo.',
      'Completed in 1986, the railway carries passengers, timber, and Moanda manganese to Owendo port.',
      'Completado en 1986, este ferrocarril transporta pasajeros, madera y manganeso hacia el puerto de Owendo.',
      'Concluída em 1986, a ferrovia transporta passageiros, madeira e manganês até o porto de Owendo.',
      'يمتد هذا الخط الاستراتيجي من ميناء أويندو على المحيط إلى فرانسفيل لنقل المسافرين والمنغنيز والأخشاب.'
    ),
  }),
  mkQ({
    id: 'cur_GA_12',
    countryCode: 'GA',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 3,
    topicKey: 'moanda_manganese',
    source: 'Ministère des Mines & USGS',
    prompt: L(
      'Quel minerai stratégique exploité à Moanda place le Gabon parmi les premiers producteurs mondiaux ?',
      'Which strategic mineral mined at Moanda places Gabon among the world’s top producers?',
      '¿Qué mineral estratégico extraído en Moanda sitúa a Gabón entre los mayores productores mundiales?',
      'Que minério estratégico extraído em Moanda coloca o Gabão entre os maiores produtores mundiais?',
      'ما المعدن الاستراتيجي المستخرج في مواندا الذي يضع الغابون بين أكبر المنتجين العالميين؟'
    ),
    countryModePrompt: L(
      'Quel minerai industriel majeur exploité à Moanda place le pays parmi les géants mondiaux ?',
      'Which major industrial mineral mined at Moanda ranks the country among world leaders?',
      '¿Qué mineral industrial clave extraído en Moanda sitúa al país entre los líderes mundiales?',
      'Qual minério industrial extraído em Moanda coloca o país entre os líderes mundiais?',
      'ما المعدن الصناعي الاستراتيجي المستخرج في مواندا؟'
    ),
    correct: L('Le manganèse', 'Manganese', 'Manganeso', 'Manganês', 'المنغنيز'),
    distractors: [
      L('Le lithium', 'Lithium', 'Litio', 'Lítio', 'الليثيوم'),
      L('La bauxite', 'Bauxite', 'Bauxita', 'Bauxita', 'البوكسيت'),
      L('Le mercure', 'Mercury', 'Mercurio', 'Mercúrio', 'الزئبق'),
    ],
    explanation: L(
      'Le gisement de Moanda (Haut-Ogooué), exploité par la Comilog, produit un manganèse de haute teneur indispensable à la fabrication de l’acier.',
      'Moanda’s high-grade manganese deposit is vital to global steelmaking.',
      'El yacimiento de Moanda produce manganeso de alta ley esencial para la siderurgia mundial.',
      'A jazida de Moanda produz manganês de alto teor essencial para a indústria do aço.',
      'يُعد منجم مواندا من أغنى مناجم المنغنيز في العالم المستخدم في صناعة الصلب.'
    ),
  }),
  mkQ({
    id: 'cur_GA_13',
    countryCode: 'GA',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 1,
    topicKey: 'equator_line',
    source: 'Institut géographique national',
    prompt: L(
      'Quel grand cercle imaginaire terrestre traverse le Gabon d’ouest en est près de Lambaréné et Makokou ?',
      'Which major imaginary Earth circle crosses Gabon from west to east near Lambaréné and Makokou?',
      '¿Qué gran círculo imaginario terrestre atraviesa Gabón de oeste a este cerca de Lambaréné y Makokou?',
      'Qual grande círculo imaginário terrestre atravessa o Gabão perto de Lambaréné e Makokou?',
      'ما الخط الجغرافي الرئيسي الذي يعبر الغابون من الغرب إلى الشرق قرب لامباريني؟'
    ),
    countryModePrompt: L(
      'Quel grand parallèle géographique traverse le pays d’ouest en est près de Lambaréné et Makokou ?',
      'Which famous geographical line crosses the country from west to east near Lambaréné and Makokou?',
      '¿Qué famoso paralelo geográfico atraviesa el país de oeste a este cerca de Lambaréné y Makokou?',
      'Qual famoso paralelo geográfico atravessa o país perto de Lambaréné e Makokou?',
      'ما دائرة العرض الشهيرة التي تعبر البلاد قرب لامباريني وماكوكو؟'
    ),
    correct: L('L’Équateur', 'The Equator', 'El Ecuador', 'A Linha do Equador', 'خط الاستواء'),
    distractors: [
      L('Le Tropique du Cancer', 'The Tropic of Cancer', 'El Trópico de Cáncer', 'O Trópico de Câncer', 'مدار السرطان'),
      L('Le Tropique du Capricorne', 'The Tropic of Capricorn', 'El Trópico de Capricornio', 'O Trópico de Capricórnio', 'مدار الجدي'),
      L('Le Cercle polaire', 'The Arctic Circle', 'El Círculo Polar', 'O Círculo Polar', 'الدائرة القطبية'),
    ],
    explanation: L(
      'L’Équateur (latitude 0°) passe près de Libreville au sud, vers Bifoun et Makokou, expliquant la bande jaune du drapeau national.',
      'The Equator (0° latitude) crosses right through the country, symbolized by the yellow stripe on the flag.',
      'El Ecuador (0° de latitud) cruza el país, simbolizado por la franja amarilla de la bandera.',
      'A Linha do Equador (0° de latitude) corta o país, simbolizada pela faixa amarela da bandeira.',
      'يمر خط الاستواء (درجة عرض 0) عبر وسط البلاد، ويمثله الشريط الأصفر في العلم.'
    ),
  }),
  mkQ({
    id: 'cur_GA_14',
    countryCode: 'GA',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'pongara_turtles',
    source: 'ANPN — Parc national de Pongara',
    prompt: L(
      'Quel animal marin géant vient pondre par milliers chaque saison sur les plages du parc national de Pongara et de Mayumba ?',
      'Which giant marine animal comes ashore by the thousands to nest on the beaches of Pongara and Mayumba?',
      '¿Qué animal marino gigante desova por miles en las playas de Pongara y Mayumba?',
      'Que animal marinho gigante desova aos milhares nas praias de Pongara e Mayumba?',
      'ما الحيوان البحري العملاق الذي يضع بيضه بالآلاف على شواطئ بونغارا ومايومبا؟'
    ),
    countryModePrompt: L(
      'Quelle espèce marine géante menacée vient pondre en masse sur les plages de Pongara et Mayumba ?',
      'Which giant endangered marine species nests in huge numbers on the beaches of Pongara and Mayumba?',
      '¿Qué especie marina gigante acude a desovar masivamente a las playas de Pongara y Mayumba?',
      'Qual espécie marinha gigante desova em massa nas praias de Pongara e Mayumba?',
      'ما الكائن البحري العملاق الذي يتكاثر على شواطئ بونغارا ومايومبا؟'
    ),
    correct: L('La tortue luth', 'The leatherback sea turtle', 'La tortuga laúd', 'A tartaruga-de-couro', 'سلحفاة البحر جلدية الظهر'),
    distractors: [
      L('Le morse du Nord', 'The walrus', 'La morsa', 'A morsa', 'حيوان الفظ'),
      L('Le narval', 'The narwhal', 'El narval', 'O narval', 'حوت النروال'),
      L('L’éléphant de mer austral', 'The southern elephant seal', 'El elefante marino', 'O elefante-marinho', 'فيل البحر الجنوبي'),
    ],
    explanation: L(
      'Les côtes sablonneuses abritent l’un des plus grands sites mondiaux de ponte de la tortue luth, la plus grande tortue marine vivante.',
      'The country’s sandy coast hosts one of the world’s largest nesting grounds for the leatherback sea turtle.',
      'Las costas arenosas albergan uno de los mayores santuarios mundiales de la tortuga laúd.',
      'O litoral arenoso abriga um dos maiores berçários mundiais da tartaruga-de-couro.',
      'تُعد الشواطئ الرملية للبلاد من أهم مواقع تعشيش السلحفاة جلدية الظهر في العالم.'
    ),
  }),
  mkQ({
    id: 'cur_GA_15',
    countryCode: 'GA',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'okoume_tree',
    source: 'Herbier national & Botanique du Bassin du Congo',
    prompt: L(
      'Quel arbre emblématique au bois léger et rosé est historiquement surnommé « l’or vert » du Gabon ?',
      'Which iconic tree with light, pinkish timber is historically nicknamed Gabon’s "green gold"?',
      '¿Qué árbol emblemático de madera rosada es conocido históricamente como el "oro verde" de Gabón?',
      'Que árvore emblemática de madeira rosada é historicamente chamada de "ouro verde" do Gabão?',
      'ما الشجرة الشهيرة ذات الخشب الوردي الخفيف التي لُقبت بـ«الذهب الأخضر» للغابون؟'
    ),
    countryModePrompt: L(
      'Quel grand arbre forestier emblématique (Aucoumea klaineana) est surnommé « l’or vert » du pays ?',
      'Which iconic forest tree (Aucoumea klaineana) is historically nicknamed the country’s "green gold"?',
      '¿Qué gran árbol forestal (Aucoumea klaineana) es apodado el "oro verde" del país?',
      'Qual grande árvore florestal (Aucoumea klaineana) é chamada de "ouro verde" do país?',
      'ما الشجرة الحرجية الشهيرة الملقبة بـ«الذهب الأخضر» في البلاد؟'
    ),
    correct: L('L’okoumé', 'Okoume (Aucoumea klaineana)', 'El okumé', 'O okoumé', 'شجرة الأوكومي'),
    distractors: [
      L('Le séquoia géant', 'Giant sequoia', 'La secuoya gigante', 'A sequoia-gigante', 'السيكويا العملاقة'),
      L('Le cèdre du Liban', 'Lebanon cedar', 'El cedro del Líbano', 'O cedro-do-líbano', 'أرز لبنان'),
      L('Le bouleau arctique', 'Arctic birch', 'El abedul ártico', 'A bétula-ártica', 'البتولا القطبية'),
    ],
    explanation: L(
      'Recherché dans le monde entier pour la fabrication de contreplaqué haut de gamme, l’okoumé pousse naturellement surtout dans ce pays.',
      'Prized worldwide for fine veneer and plywood, the okoume tree grows mainly in this part of Central Africa.',
      'Apreciado mundialmente para chapa y contrachapado, el okumé es emblemático del bosque ecuatorial local.',
      'Valorizada no mundo todo pela madeira nobre, a árvore okoumé é símbolo das florestas locais.',
      'تنمو شجرة الأوكومي بشكل رئيسي في غابات هذه المنطقة وتشتهر بخشبها عالي الجودة.'
    ),
  }),
  mkQ({
    id: 'cur_GA_16',
    countryCode: 'GA',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 2,
    topicKey: 'port_gentil_mandji',
    source: 'Géographie économique du Gabon',
    prompt: L(
      'Sur quelle île (ou presqu’île deltaïque de l’Ogooué) est bâtie Port-Gentil, capitale économique et pétrolière du Gabon ?',
      'On which Ogooué delta island is Port-Gentil, Gabon’s economic and oil capital, built?',
      '¿En qué isla del delta del Ogooué se levanta Port-Gentil, capital económica y petrolera de Gabón?',
      'Em que ilha do delta do Ogooué ergue-se Port-Gentil, capital econômica do Gabão?',
      'على أي جزيرة في دلتا نهر أوغوي تقع مدينة بورت جنتيل العاصمة الاقتصادية للغابون؟'
    ),
    countryModePrompt: L(
      'Comment s’appelle l’île du delta de l’Ogooué sur laquelle est bâtie Port-Gentil, poumon pétrolier du pays ?',
      'What is the name of the Ogooué delta island where the economic hub of Port-Gentil stands?',
      '¿Cómo se llama la isla del delta del Ogooué donde se asienta Port-Gentil?',
      'Como se chama a ilha do delta do Ogooué onde fica Port-Gentil?',
      'ما اسم الجزيرة في دلتا أوغوي التي أُقيمت عليها مدينة بورت جنتيل؟'
    ),
    correct: L('L’île Mandji', 'Mandji Island', 'La isla Mandji', 'A ilha Mandji', 'جزيرة ماندجي'),
    distractors: [
      L('L’île de Gorée', 'Gorée Island', 'La isla de Gorea', 'A ilha de Gorée', 'جزيرة غوري'),
      L('L’île de Bioko', 'Bioko Island', 'La isla de Bioko', 'A ilha de Bioko', 'جزيرة بيوكو'),
      L('L’île de Zanzibar', 'Zanzibar Island', 'La isla de Zanzíbar', 'A ilha de Zanzibar', 'جزيرة زنجبار'),
    ],
    explanation: L(
      'Port-Gentil se trouve sur l’île Mandji, non reliée à la capitale par la route jusqu’à récemment, d’où son surnom local de « POG ».',
      'Port-Gentil occupies Mandji Island at the mouth of the Ogooué River and is fondly nicknamed "POG."',
      'Port-Gentil ocupa la isla Mandji en la desembocadura del río Ogooué.',
      'Port-Gentil ocupa a ilha Mandji na foz do rio Ogooué.',
      'تقع بورت جنتيل على جزيرة ماندجي عند مصب نهر أوغوي.'
    ),
  }),
  mkQ({
    id: 'cur_GA_17',
    countryCode: 'GA',
    category: 'geography',
    subCategory: 'politique_institutions',
    difficulty: 3,
    topicKey: 'ceeac_hq_libreville',
    source: 'Communauté économique des États de l’Afrique centrale (CEEAC)',
    prompt: L(
      'Quelle importante organisation régionale africaine a son siège officiel à Libreville ?',
      'Which major African regional organization has its official headquarters in Libreville?',
      '¿Qué importante organización regional africana tiene su sede oficial en Libreville?',
      'Qual importante organização regional africana tem sede oficial em Libreville?',
      'ما المنظمة الإقليمية الأفريقية الكبرى التي تتخذ من ليبروفيل مقراً رسمياً لها؟'
    ),
    countryModePrompt: L(
      'Quelle importante communauté régionale africaine a établi son siège officiel dans la capitale Libreville ?',
      'Which major African regional community established its official headquarters in Libreville?',
      '¿Qué importante comunidad regional africana tiene su sede oficial en Libreville?',
      'Qual importante comunidade regional africana estabeleceu sede em Libreville?',
      'ما التجمع الإقليمي الأفريقي الكبير الذي يقع مقره الرسمي في ليبروفيل؟'
    ),
    correct: L(
      'La CEEAC (Communauté économique des États de l’Afrique centrale)',
      'ECCAS (Economic Community of Central African States)',
      'La CEEAC (Comunidad Económica de los Estados de África Central)',
      'A CEEAC (Comunidade Econômica dos Estados da África Central)',
      'المجموعة الاقتصادية لدول وسط أفريقيا (CEEAC)'
    ),
    distractors: [
      L('La CEDEAO (Afrique de l’Ouest)', 'ECOWAS (West Africa)', 'La CEDEAO (África Occidental)', 'A CEDEAO (África Ocidental)', 'إيكواس (غرب أفريقيا)'),
      L('La SADC (Afrique australe)', 'SADC (Southern Africa)', 'La SADC (África Austral)', 'A SADC (África Austral)', 'سادك (جنوب أفريقيا)'),
      L('L’UMA (Maghreb arabe)', 'AMU (Arab Maghreb Union)', 'La UMA (Magreb Árabe)', 'A UMA (Magrebe Árabe)', 'اتحاد المغرب العربي'),
    ],
    explanation: L(
      'Libreville abrite depuis 1983 le siège de la CEEAC (11 États membres d’Afrique centrale).',
      'Libreville has hosted the headquarters of ECCAS (11 Central African member states) since 1983.',
      'Libreville alberga la sede de la CEEAC desde 1983.',
      'Libreville abriga a sede da CEEAC desde 1983.',
      'تستضيف ليبروفيل مقر المجموعة الاقتصادية لدول وسط أفريقيا منذ عام 1983.'
    ),
  }),
  mkQ({
    id: 'cur_GA_18',
    countryCode: 'GA',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'provinces_count',
    source: 'Administration territoriale du Gabon',
    prompt: L(
      'En combien de provinces administratives le Gabon est-il divisé ?',
      'Into how many administrative provinces is Gabon divided?',
      '¿En cuántas provincias administrativas se divide Gabón?',
      'Em quantas províncias administrativas o Gabão está dividido?',
      'إلى كم مقاطعة إدارية تنقسم الغابون؟'
    ),
    countryModePrompt: L(
      'En combien de grandes provinces administratives le territoire du pays est-il divisé ?',
      'Into how many administrative provinces is the country divided?',
      '¿En cuántas provincias administrativas se divide el territorio del país?',
      'Em quantas províncias administrativas o país está dividido?',
      'إلى كم مقاطعة إدارية تنقسم أراضي البلاد؟'
    ),
    correct: L('9 provinces', '9 provinces', '9 provincias', '9 províncias', '9 مقاطعات'),
    distractors: [
      L('4 provinces', '4 provinces', '4 provincias', '4 províncias', '4 مقاطعات'),
      L('18 provinces', '18 provinces', '18 provincias', '18 províncias', '18 مقاطعة'),
      L('26 provinces', '26 provinces', '26 provincias', '26 províncias', '26 مقاطعة'),
    ],
    explanation: L(
      'Les 9 provinces sont : Estuaire, Haut-Ogooué, Moyen-Ogooué, Ngounié, Nyanga, Ogooué-Ivindo, Ogooué-Lolo, Ogooué-Maritime et Woleu-Ntem.',
      'The 9 provinces are Estuaire, Haut-Ogooué, Moyen-Ogooué, Ngounié, Nyanga, Ogooué-Ivindo, Ogooué-Lolo, Ogooué-Maritime, and Woleu-Ntem.',
      'Las 9 provincias incluyen Estuaire, Haut-Ogooué, Woleu-Ntem y Ogooué-Maritime, entre otras.',
      'As 9 províncias incluem Estuaire, Haut-Ogooué, Woleu-Ntem e Ogooué-Maritime, entre outras.',
      'ينقسم البلد إدارياً إلى 9 مقاطعات رئيسية.'
    ),
  }),
  mkQ({
    id: 'cur_GA_19',
    countryCode: 'GA',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'odika_chocolate',
    source: 'Botanique & Gastronomie gabonaise',
    prompt: L(
      'Comment appelle-t-on au Gabon la pâte sombre et parfumée (aussi appelée « chocolat indigène ») obtenue à partir des amandes de mangue sauvage ?',
      'What is the dark, aromatic paste—also called "indigenous chocolate"—made from wild mango kernels in Gabon?',
      '¿Cómo se llama en Gabón la pasta aromática conocida como "chocolate indígena" elaborada con mango silvestre?',
      'Como se chama no Gabão a pasta aromática conhecida como "chocolate indígena" feita de manga selvagem?',
      'ما اسم المعجون العطري الداكن المعروف بـ«الشوكولاتة المحلية» والمصنوع من بذور المانجو البري في الغابون؟'
    ),
    countryModePrompt: L(
      'Comment appelle-t-on le fameux « chocolat indigène » préparé à partir d’amandes de mangue sauvage pour lier les sauces ?',
      'What is the famed "indigenous chocolate" made from toasted wild mango kernels to thicken local stews?',
      '¿Cómo se llama el famoso "chocolate indígena" preparado con almendras de mango silvestre?',
      'Como se chama o famoso "chocolate indígena" preparado com sementes de manga selvagem?',
      'ما اسم «الشوكولاتة المحلية» المحضّرة من بذور المانجو البري لتكثيف الصلصات؟'
    ),
    correct: L('L’odika', 'Odika', 'El odika', 'A odika', 'الأوديكا'),
    distractors: [
      L('La harissa', 'Harissa', 'La harissa', 'A harissa', 'الهريسة'),
      L('Le tahini', 'Tahini', 'El tahini', 'O tahine', 'الطحينة'),
      L('Le wasabi', 'Wasabi', 'El wasabi', 'O wasabi', 'الوسابي'),
    ],
    explanation: L(
      'L’odika (issu de l’arbre Irvingia gabonensis) est torréfié, pilé et moulé en pain noir pour parfumer viandes fumées et poissons.',
      'Odika (from Irvingia gabonensis kernels) is roasted, pounded, and shaped into dark blocks that enrich smoked meats and fish.',
      'El odika (Irvingia gabonensis) se tuesta y prensa para aromatizar carnes y pescados ahumados.',
      'A odika (Irvingia gabonensis) é torrada e moldada para aromatizar carnes e peixes defumados.',
      'يُحضّر معجون الأوديكا من بذور المانجو البري المحمصة لإضفاء نكهة غنية على اللحوم والأسماك المدخنة.'
    ),
  }),
  mkQ({
    id: 'cur_GA_20',
    countryCode: 'GA',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'atanga_safou',
    source: 'Gastronomie d’Afrique centrale',
    prompt: L(
      'Quel fruit violet à la chair crémeuse et acidulée — appelé « safou » ailleurs en Afrique centrale — est surnommé « atanga » au Gabon ?',
      'Which purple fruit with creamy, tangy flesh—called "safou" elsewhere—is known as "atanga" in Gabon?',
      '¿Qué fruta morada de pulpa cremosa —llamada "safou" en otros países— se conoce como "atanga" en Gabón?',
      'Que fruta roxa de polpa cremosa —chamada "safou" em outros países— é conhecida como "atanga" no Gabão?',
      'ما الثمرة البنفسجية ذات اللب الكريمي الحامض المعروفة باسم «أتانغا» في الغابون؟'
    ),
    countryModePrompt: L(
      'Quel fruit violet à chair fondante (cousin du safou) déguste-t-on bouilli ou grillé sous le nom d’« atanga » ?',
      'Which creamy purple fruit (african pear / safou) is enjoyed boiled or roasted locally under the name "atanga"?',
      '¿Qué fruta morada de pulpa suave (safou) se disfruta hervida o asada con el nombre de "atanga"?',
      'Que fruta roxa cremosa (safou) é saboreada cozida ou assada com o nome de "atanga"?',
      'ما الثمرة البنفسجية الكريمية التي تُؤكل مسلوقة أو مشوية تحت اسم «أتانغا»؟'
    ),
    correct: L(
      'La prune africaine (Dacryodes edulis)',
      'African pear / bush butter fruit (Dacryodes edulis)',
      'La ciruela africana (Dacryodes edulis)',
      'A pera-africana / safou (Dacryodes edulis)',
      'الكمثرى الأفريقية (البرقوق الأفريقي)'
    ),
    distractors: [
      L('La figue de Barbarie', 'Prickly pear', 'El higo chumbo', 'O figo-da-índia', 'التين الشوكي'),
      L('La datte Deglet Nour', 'Deglet Noor date', 'El dátil Deglet Nour', 'A tâmara Deglet Noor', 'تمر دقلة نور'),
      L('La grenade du Atlas', 'Atlas pomegranate', 'La granada', 'A romã', 'الرمان'),
    ],
    explanation: L(
      'Riche en bons acides gras, l’atanga se sert souvent chaud et légèrement salé avec du manioc ou du poisson braisé.',
      'Rich in healthy oils, atanga is typically served warm and salted alongside cassava or grilled fish.',
      'Rica en aceites saludables, la atanga suele servirse tibia y con sal junto a yuca o pescado.',
      'Rica em óleos saudáveis, a atanga é servida morna com mandioca ou peixe grelhado.',
      'تُقدم ثمرة الأتانغا دافئة ومملحة مع الكسافا أو السمك المشوي.'
    ),
  }),
  mkQ({
    id: 'cur_GA_21',
    countryCode: 'GA',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'bwiti_iboga',
    source: 'Patrimoine ethnologique — Cultures du Gabon',
    prompt: L(
      'Quelle tradition spirituelle et musicale d’Afrique centrale née au Gabon utilise la harpe sacrée Ngombi et l’écorce d’iboga ?',
      'Which Central African spiritual and musical tradition rooted in Gabon uses the sacred Ngombi harp and iboga bark?',
      '¿Qué tradición espiritual y musical nacida en Gabón utiliza el arpa sagrada Ngombi y la corteza de iboga?',
      'Que tradição espiritual e musical nascida no Gabão utiliza a harpa sagrada Ngombi e a casca de iboga?',
      'ما التقليد الروحي والموسيقي النشئ في الغابون الذي يستخدم قيثارة نغومبي المقدسة ولحاء الإيبوغا؟'
    ),
    countryModePrompt: L(
      'Quelle tradition spirituelle et musicale ancestrale utilise la harpe sacrée à huit cordes Ngombi et l’iboga ?',
      'Which ancestral spiritual and musical tradition uses the eight-string Ngombi harp and iboga?',
      '¿Qué tradición espiritual y musical ancestral utiliza el arpa sagrada Ngombi y la iboga?',
      'Que tradição espiritual e musical ancestral usa a harpa sagrada Ngombi e a iboga?',
      'ما التقليد الروحي والموسيقي العريق الذي يستخدم قيثارة نغومبي ونبات الإيبوغا؟'
    ),
    correct: L('Le Bwiti', 'Bwiti', 'El Bwiti', 'O Bwiti', 'البويتي'),
    distractors: [
      L('Le Soufisme mouride', 'Mouride Sufism', 'El sufismo muridi', 'O sufismo muride', 'الصوفية المريدية'),
      L('Le Candomblé bahianais', 'Bahian Candomblé', 'El candomblé bahiano', 'O candomblé baiano', 'الكاندومبلي البرازيلي'),
      L('Le Rastafarisme', 'Rastafarianism', 'El rastafarismo', 'O rastafarianismo', 'الراستافارية'),
    ],
    explanation: L(
      'Originaire des peuples Mitsogo et Apindji puis adopté par les Fang, le Bwiti transmet récits, chants polyphoniques et solidarité communautaire.',
      'Originated among the Mitsogo and Apindji peoples, Bwiti blends sacred harp music, polyphonic song, and community rites.',
      'Originario de los pueblos mitsogo y apindji, el Bwiti combina música de arpa sagrada, cantos y ritos comunitarios.',
      'Originário dos povos mitsogo e apindji, o Bwiti combina música de harpa sagrada e ritos comunitários.',
      'نشأ تقليد البويتي بين شعوب ميتسوغو وأبيندجي ويجمع بين الموسيقى المقدسة والتضامن المجتمعي.'
    ),
  }),
  mkQ({
    id: 'cur_GA_22',
    countryCode: 'GA',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'mvett_epic',
    source: 'UNESCO & Traditions orales Ekang/Fang',
    prompt: L(
      'Comment s’appelle le célèbre genre d’épopée orale et l’instrument à cordes pincées des conteurs Fang (Ekang) ?',
      'What is the name of the famed oral epic genre and stringed instrument played by Fang (Ekang) bards?',
      '¿Cómo se llama el célebre género épico oral y el instrumento de cuerda de los bardos fang (ekang)?',
      'Como se chama o célebre gênero épico oral e instrumento de cordas dos contadores fang (ekang)?',
      'ما اسم الملحمة الشفهية والآلة الوترية الشهيرة لدى رواة شعب الفانغ؟'
    ),
    countryModePrompt: L(
      'Quel art épique oral, accompagné d’une harpe-cithare sur bâton de raphia, anime les veillées traditionnelles Fang ?',
      'Which oral epic art, accompanied by a raffia-stick zither, brings traditional Fang evening gatherings to life?',
      '¿Qué arte épico oral, acompañado de una cítara de rafia, anima las veladas tradicionales fang?',
      'Que arte épica oral, acompanhada por uma cítara de ráfia, anima as noites tradicionais fang?',
      'ما الفن الملحمي الشفهي المصحوب بآلة وترية من الرافيا لدى شعب الفانغ؟'
    ),
    correct: L('Le Mvett', 'The Mvett', 'El Mvett', 'O Mvett', 'المفيت'),
    distractors: [
      L('Le Taarab', 'Taarab', 'El taarab', 'O taarab', 'الطرب السواحيلي'),
      L('Le Raï', 'Raï', 'El raï', 'O raï', 'الراي'),
      L('Le Maloya', 'Maloya', 'El maloya', 'O maloya', 'المالويا'),
    ],
    explanation: L(
      'Le joueur de Mvett (mbômô mvett) narre durant toute une nuit les exploits des immortels d’Engong face aux mortels d’Oku.',
      'A master Mvett bard chants overnight tales of the immortals of Engong, blending music, theatre, and philosophy.',
      'El maestro del Mvett narra toda la noche gestas míticas combinando música, teatro y poesía.',
      'O mestre do Mvett narra pela noite adentro epopeias míticas com música, teatro e filosofia.',
      'يروي فنان المفيت طوال الليل ملاحم أسطورية تجمع بين الموسيقى والمسرح والشعر.'
    ),
  }),
  mkQ({
    id: 'cur_GA_23',
    countryCode: 'GA',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'akendengue_music',
    source: 'Patrimoine musical africain (RFI / SACEM)',
    prompt: L(
      'Quel célèbre auteur-compositeur et poète gabonais né sur l’île d’Awuta a chanté « Nandipo » et remporté le Prix Découvertes RFI ?',
      'Which renowned Gabonese singer-songwriter and poet born on Awuta Island sang "Nandipo" and won the RFI Découvertes Prize?',
      '¿Qué célebre cantautor y poeta gabonés nacido en la isla de Awuta cantó "Nandipo"?',
      'Que célebre cantor e poeta gabonês nascido na ilha de Awuta cantou "Nandipo"?',
      'من هو المغني والشاعر الغابوني الشهير المولود في جزيرة أووتا وصاحب أغنية «نانديبو»؟'
    ),
    countryModePrompt: L(
      'Quel grand poète et musicien né sur l’île d’Awuta (lagune de Fernan Vaz) a marqué la chanson engagée avec « Nandipo » ?',
      'Which great poet and musician born on Awuta Island (Fernan Vaz lagoon) wrote the classic song "Nandipo"?',
      '¿Qué gran poeta y músico nacido en la isla de Awuta creó el clásico "Nandipo"?',
      'Que grande poeta e músico nascido na ilha de Awuta criou o clássico "Nandipo"?',
      'من هو الشاعر والموسيقار الكبير المولود في جزيرة أووتا وصاحب أغنية «نانديبو»؟'
    ),
    correct: L('Pierre Akendengué', 'Pierre Akendengué', 'Pierre Akendengué', 'Pierre Akendengué', 'بيير أكيندينغي'),
    distractors: [
      L('Papa Wemba', 'Papa Wemba', 'Papa Wemba', 'Papa Wemba', 'بابا ويمبا'),
      L('Salif Keïta', 'Salif Keïta', 'Salif Keïta', 'Salif Keïta', 'ساليف كيتا'),
      L('Fela Kuti', 'Fela Kuti', 'Fela Kuti', 'Fela Kuti', 'فيلا كوتي'),
    ],
    explanation: L(
      'Docteur en psychologie et musicien visionnaire, Pierre Akendengué a mêlé chants myéné, guitares acoustiques et poésie africaine dès 1974.',
      'Holding a doctorate in psychology, Pierre Akendengué fused Myéné chants, acoustic guitar, and African poetry starting in 1974.',
      'Pierre Akendengué fusionó cantos myéné, guitarra acústica y poesía africana desde su álbum Nandipo (1974).',
      'Pierre Akendengué fundiu cantos myéné, violão acústico e poesia africana desde o álbum Nandipo (1974).',
      'مزج بيير أكيندينغي بين الألحان التقليدية والغيتار والشعر الأفريقي منذ ألبومه الشهير عام 1974.'
    ),
  }),
  mkQ({
    id: 'cur_GA_24',
    countryCode: 'GA',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'oliver_ngoma',
    source: 'Archives musicales d’Afrique centrale',
    prompt: L(
      'Quel chanteur gabonais surnommé « Noli » est devenu une icône mondiale de l’afro-zouk grâce au tube « Bane » (1989) ?',
      'Which Gabonese singer nicknamed "Noli" became an Afro-zouk icon with the 1989 hit "Bane"?',
      '¿Qué cantante gabonés apodado "Noli" se convirtió en icono del afro-zouk con el éxito "Bane" (1989)?',
      'Que cantor gabonês apelidado de "Noli" tornou-se ícone do afro-zouk com o sucesso "Bane" (1989)?',
      'من هو المغني الغابوني الملقب بـ«نولي» الذي اشتهر عالمياً بأغنية «باني» عام 1989؟'
    ),
    countryModePrompt: L(
      'Quel chanteur originaire de Mayumba, surnommé « Noli », a enflammé tout le continent avec le tube « Bane » en 1989 ?',
      'Which singer from Mayumba, nicknamed "Noli," swept across the continent with the 1989 hit "Bane"?',
      '¿Qué cantante originario de Mayumba, apodado "Noli", conquistó el continente con "Bane" en 1989?',
      'Que cantor natural de Mayumba, apelidado de "Noli", conquistou o continente com "Bane" em 1989?',
      'من هو المغني المنحدر من مايومبا والملقب بـ«نولي» صاحب الأغنية الشهيرة «باني»؟'
    ),
    correct: L('Oliver N’Goma', 'Oliver N’Goma', 'Oliver N’Goma', 'Oliver N’Goma', 'أوليفر نغوما'),
    distractors: [
      L('Koffi Olomidé', 'Koffi Olomidé', 'Koffi Olomidé', 'Koffi Olomidé', 'كوفي أولوميدي'),
      L('Sam Fan Thomas', 'Sam Fan Thomas', 'Sam Fan Thomas', 'Sam Fan Thomas', 'سام فان توماس'),
      L('Meiway', 'Meiway', 'Meiway', 'Meiway', 'ميواي'),
    ],
    explanation: L(
      'Avec « Bane » puis « Icole », Oliver N’Goma a signé certains des plus grands classiques romantiques de la musique d’Afrique centrale.',
      'With "Bane" and "Icole," Oliver N’Goma recorded timeless Afro-zouk classics loved across Central and West Africa.',
      'Con "Bane" e "Icole", Oliver N’Goma grabó algunos de los mayores clásicos de África Central.',
      'Com "Bane" e "Icole", Oliver N’Goma gravou clássicos eternos da música da África Central.',
      'قدم أوليفر نغوما روائع خالدة مثل «باني» و«إيكولي» في موسيقى أفريقيا الوسطى.'
    ),
  }),
  mkQ({
    id: 'cur_GA_25',
    countryCode: 'GA',
    category: 'culture',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'punu_masks',
    source: 'Musée national des Arts et Traditions du Gabon',
    prompt: L(
      'Comment s’appellent les célèbres masques blancs féminins au visage sculpté en kaolin du peuple Punu ?',
      'What are the famous kaolin-whitened Punu ancestral masks traditionally called?',
      '¿Cómo se llaman las famosas máscaras blancas pintadas con caolín del pueblo punu?',
      'Como se chamam as famosas máscaras brancas pintadas com caulim do povo punu?',
      'ما اسم الأقنعة البيضاء الشهيرة المطلية بالكاولين لدى شعب بونو؟'
    ),
    countryModePrompt: L(
      'Comment appelle-t-on les célèbres masques blancs en kaolin portés lors des danses sur échasses chez les Punu ?',
      'What are the iconic white kaolin masks worn by stilt dancers among the Punu people called?',
      '¿Cómo se llaman las icónicas máscaras blancas de caolín usadas en danzas sobre zancos punu?',
      'Como se chamam as icônicas máscaras brancas de caulim usadas nas danças sobre pernas de pau punu?',
      'ما اسم الأقنعة البيضاء الشهيرة التي تُرتدى في رقصات شعب بونو؟'
    ),
    correct: L('Les masques Okuyi (Mukudj)', 'Okuyi (Mukudj) masks', 'Las máscaras Okuyi (Mukudj)', 'As máscaras Okuyi (Mukudj)', 'أقنعة أوكويي (موكودج)'),
    distractors: [
      L('Les masques Dogon Kanaga', 'Dogon Kanaga masks', 'Las máscaras dogón Kanaga', 'As máscaras dogon Kanaga', 'أقنعة دوغون كاناغا'),
      L('Les masques Gélédé', 'Gelede masks', 'Las máscaras geledé', 'As máscaras gueledé', 'أقنعة غيليدي'),
      L('Les masques Zaouli', 'Zaouli masks', 'Las máscaras zaouli', 'As máscaras zaouli', 'أقنعة زاولي'),
    ],
    explanation: L(
      'Enduits de kaolin blanc (symbole de paix et du monde des ancêtres), les masques Punu figurent parmi les chefs-d’œuvre les plus admirés de l’art africain.',
      'Coated in white kaolin symbolizing peace and ancestral spirits, Punu masks are celebrated masterpieces of African sculpture.',
      'Cubiertas de caolín blanco, las máscaras punu son obras maestras admiradas en museos de todo el mundo.',
      'Cobertas de caulim branco, as máscaras punu são obras-primas da escultura africana.',
      'تُطلى أقنعة أوكويي بالطين الأبيض رمزاً للسلام وعالم الأجداد، وتُعد من أروع تحف الفن الأفريقي.'
    ),
  }),
  mkQ({
    id: 'cur_GA_26',
    countryCode: 'GA',
    category: 'culture',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'angele_rawiri',
    source: 'Histoire littéraire d’Afrique centrale',
    prompt: L(
      'Quelle romancière gabonaise, auteure d’« Elonga » (1980), est considérée comme la pionnière du roman féminin au Gabon ?',
      'Which Gabonese novelist, author of "Elonga" (1980), is celebrated as a pioneer of Gabonese literature?',
      '¿Qué novelista gabonesa, autora de "Elonga" (1980), es considerada pionera de la novela en Gabón?',
      'Que romancista gabonesa, autora de "Elonga" (1980), é considerada pioneira da literatura no Gabão?',
      'من هي الروائية الغابونية مؤلفة رواية «إيلونغا» (1980) ورائدة الأدب النسائي في الغابون؟'
    ),
    countryModePrompt: L(
      'Quelle grande écrivaine, auteure des romans « Elonga » et « Fureurs et cris de femmes », fut la première romancière du pays ?',
      'Which acclaimed writer, author of "Elonga" and "Fureurs et cris de femmes," became the country’s first published female novelist?',
      '¿Qué destacada escritora, autora de "Elonga", fue la primera mujer novelista del país?',
      'Qual escritora, autora de "Elonga", foi a primeira mulher romancista do país?',
      'من هي الكاتبة الشهيرة مؤلفة رواية «إيلونغا» وأول روائية في البلاد؟'
    ),
    correct: L('Angèle Ntyugwetondo Rawiri', 'Angèle Ntyugwetondo Rawiri', 'Angèle Ntyugwetondo Rawiri', 'Angèle Ntyugwetondo Rawiri', 'أنجيل راويري'),
    distractors: [
      L('Mariama Bâ', 'Mariama Bâ', 'Mariama Bâ', 'Mariama Bâ', 'مريم با'),
      L('Calixthe Beyala', 'Calixthe Beyala', 'Calixthe Beyala', 'Calixthe Beyala', 'كاليكست بيالا'),
      L('Aminata Sow Fall', 'Aminata Sow Fall', 'Aminata Sow Fall', 'Aminata Sow Fall', 'أميناتا سو فال'),
    ],
    explanation: L(
      'Fille du poète Georges Rawiri, Angèle Rawiri a ouvert la voie aux écrivaines d’Afrique centrale dès 1980 avec Elonga et Fureurs et cris de femmes.',
      'Angèle Rawiri broke barriers in Central African literature with Elonga (1980) and Fureurs et cris de femmes (1989).',
      'Angèle Rawiri abrió camino a las escritoras de África Central con Elonga (1980).',
      'Angèle Rawiri abriu caminho para as escritoras da África Central com Elonga (1980).',
      'فتحت أنجيل راويري الطريق أمام الأديبات في وسط أفريقيا منذ روايتها إيلونغا عام 1980.'
    ),
  }),
  mkQ({
    id: 'cur_GA_27',
    countryCode: 'GA',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 1,
    topicKey: 'aubameyang_african_poty',
    source: 'CAF Awards (2015)',
    prompt: L(
      'En quelle année l’attaquant Pierre-Emerick Aubameyang a-t-il été sacré Joueur Africain de l’Année (Ballon d’Or africain) ?',
      'In which year did striker Pierre-Emerick Aubameyang win the CAF African Footballer of the Year award?',
      '¿En qué año ganó Pierre-Emerick Aubameyang el premio al Futbolista Africano del Año?',
      'Em que ano Pierre-Emerick Aubameyang venceu o prêmio de Jogador Africano do Ano da CAF?',
      'في أي عام فاز المهاجم بيير إيميريك أوباميانغ بجائزة أفضل لاعب أفريقي؟'
    ),
    countryModePrompt: L(
      'En quelle année Pierre-Emerick Aubameyang a-t-il remporté le trophée CAF de Joueur Africain de l’Année ?',
      'In which year did Pierre-Emerick Aubameyang win the CAF African Footballer of the Year trophy?',
      '¿En qué año ganó Pierre-Emerick Aubameyang el trofeo al Jugador Africano del Año?',
      'Em que ano Pierre-Emerick Aubameyang conquistou o troféu de Jogador Africano do Ano?',
      'في أي عام توج بيير إيميريك أوباميانغ بجائزة أفضل لاعب أفريقي في الكاف؟'
    ),
    correct: L('2015', '2015', '2015', '2015', '2015'),
    distractors: [
      L('2008', '2008', '2008', '2008', '2008'),
      L('2010', '2010', '2010', '2010', '2010'),
      L('2021', '2021', '2021', '2021', '2021'),
    ],
    explanation: L(
      'Alors joueur du Borussia Dortmund, Aubameyang devança Yaya Touré et André Ayew en janvier 2016 pour remporter le trophée 2015.',
      'Then starring at Borussia Dortmund, Aubameyang edged Yaya Touré and André Ayew to win the 2015 CAF award.',
      'Entonces en el Borussia Dortmund, Aubameyang superó a Yaya Touré para ganar el premio de 2015.',
      'Então no Borussia Dortmund, Aubameyang superou Yaya Touré para vencer o prêmio de 2015.',
      'توج أوباميانغ نجم بوروسيا دورتموند آنذاك بجائزة أفضل لاعب في أفريقيا لعام 2015.'
    ),
  }),
  mkQ({
    id: 'cur_GA_28',
    countryCode: 'GA',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'can_2012_2017_hosts',
    source: 'CAF — Archives Coupe d’Afrique des Nations',
    prompt: L(
      'Quelles deux éditions de la Coupe d’Afrique des Nations (CAN) se sont déroulées sur le sol du Gabon au XXIe siècle ?',
      'Which two editions of the Africa Cup of Nations (AFCON) were hosted on Gabonese soil in the 21st century?',
      '¿Qué dos ediciones de la Copa Africana de Naciones (CAN) se celebraron en Gabón en el siglo XXI?',
      'Quais duas edições da Copa Africana de Nações (CAN) foram realizadas no Gabão no século XXI?',
      'ما نسختا كأس أمم أفريقيا اللتان استضافتهما الغابون في القرن الحادي والعشرين؟'
    ),
    countryModePrompt: L(
      'Quelles deux éditions de la Coupe d’Afrique des Nations (CAN) le pays a-t-il accueillies en 2012 et plus tard seul ?',
      'Which two editions of the Africa Cup of Nations (AFCON) did the country co-host or host alone?',
      '¿Qué dos ediciones de la CAN acogió el país en el siglo XXI?',
      'Quais duas edições da CAN o país recebeu no século XXI?',
      'ما نسختا كأس أمم أفريقيا اللتان استضافتهما البلاد في القرن الحادي والعشرين؟'
    ),
    correct: L('CAN 2012 et CAN 2017', 'AFCON 2012 and AFCON 2017', 'CAN 2012 y CAN 2017', 'CAN 2012 e CAN 2017', 'أمم أفريقيا 2012 و2017'),
    distractors: [
      L('CAN 2004 et CAN 2010', 'AFCON 2004 and AFCON 2010', 'CAN 2004 y CAN 2010', 'CAN 2004 e CAN 2010', '2004 و2010'),
      L('CAN 2006 et CAN 2015', 'AFCON 2006 and AFCON 2015', 'CAN 2006 y CAN 2015', 'CAN 2006 e CAN 2015', '2006 و2015'),
      L('CAN 2019 et CAN 2023', 'AFCON 2019 and AFCON 2023', 'CAN 2019 y CAN 2023', 'CAN 2019 e CAN 2023', '2019 و2023'),
    ],
    explanation: L(
      'Co-organisateur avec la Guinée équatoriale en 2012 (quarts de finale), le pays a ensuite accueilli seul la CAN 2017 dans quatre villes.',
      'Co-host with Equatorial Guinea in 2012, the nation later hosted AFCON 2017 solo across Libreville, Franceville, Oyem, and Port-Gentil.',
      'Coorganizador en 2012 y anfitrión en solitario en 2017, acogió dos grandes fiestas del fútbol africano.',
      'Co-anfitrião em 2012 e sede única em 2017, recebeu duas grandes edições da CAN.',
      'شاركت في استضافة نسخة 2012 ثم استضافت وحدها نسخة 2017 عبر أربع مدن.'
    ),
  }),
  mkQ({
    id: 'cur_GA_29',
    countryCode: 'GA',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'obame_london_2012',
    source: 'Comité International Olympique (CIO) — Londres 2012',
    prompt: L(
      'Dans quelle discipline Anthony Obame a-t-il offert au Gabon la toute première médaille olympique de son histoire aux JO de Londres 2012 ?',
      'In which sport did Anthony Obame win Gabon’s first-ever Olympic medal at London 2012?',
      '¿En qué deporte logró Anthony Obame la primera medalla olímpica de la historia de Gabón en Londres 2012?',
      'Em que modalidade Anthony Obame conquistou a primeira medalha olímpica do Gabão em Londres 2012?',
      'في أي رياضة أحرز أنتوني أوبامي أول ميدالية أولمبية في تاريخ الغابون بأولمبياد لندن 2012؟'
    ),
    countryModePrompt: L(
      'Dans quel art martial Anthony Obame a-t-il décroché en 2012 la toute première médaille olympique de l’histoire du pays ?',
      'In which martial art did Anthony Obame win the country’s first-ever Olympic medal at London 2012?',
      '¿En qué arte marcial ganó Anthony Obame la primera medalla olímpica del país en 2012?',
      'Em que arte marcial Anthony Obame conquistou a primeira medalha olímpica do país em 2012?',
      'في أي فن قتالي حقق أنتوني أوبام أول ميدالية أولمبية في تاريخ البلاد عام 2012؟'
    ),
    correct: L('Le taekwondo (médaille d’argent +80 kg)', 'Taekwondo (silver medal +80 kg)', 'Taekwondo (medalla de plata +80 kg)', 'Taekwondo (medalha de prata +80 kg)', 'التايكواندو (فضية وزن فوق 80 كغ)'),
    distractors: [
      L('La boxe poids lourd', 'Heavyweight boxing', 'Boxeo peso pesado', 'Boxe peso-pesado', 'الملاكمة للوزن الثقيل'),
      L('Le saut en longueur', 'Long jump', 'Salto de longitud', 'Salto em distância', 'الوثب الطويل'),
      L('L’escrime', 'Fencing', 'Esgrima', 'Esgrima', 'المبارزة'),
    ],
    explanation: L(
      'Vice-champion olympique en 2012 puis champion du monde en 2013, Anthony Obame est une figure historique du sport national.',
      'Olympic silver medalist in 2012 and World Champion in 2013, Anthony Obame entered national sporting history.',
      'Subcampeón olímpico en 2012 y campeón mundial en 2013, Anthony Obame es un héroe deportivo nacional.',
      'Prata olímpica em 2012 e campeão mundial em 2013, Anthony Obame entrou para a história.',
      'توج أنتوني أوبام بفضية أولمبياد لندن 2012 ثم ببطولة العالم 2013 في التايكواندو.'
    ),
  }),
  mkQ({
    id: 'cur_GA_30',
    countryCode: 'GA',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'can_1996_quarterfinal',
    source: 'CAF — Archives CAN 1996',
    prompt: L(
      'En quelle année les Panthères (alors surnommées « Azingo National ») ont-elles atteint pour la première fois les quarts de finale de la CAN ?',
      'In which year did the Panthers (then nicknamed "Azingo National") first reach the AFCON quarter-finals?',
      '¿En qué año alcanzó la selección (entonces "Azingo National") por primera vez los cuartos de final de la CAN?',
      'Em que ano a seleção (então "Azingo National") alcançou pela primeira vez as quartas de final da CAN?',
      'في أي عام بلغ المنتخب الوطني (الذي كان يُلقب آنذاك بأزينغو) ربع نهائي كأس أمم أفريقيا لأول مرة؟'
    ),
    countryModePrompt: L(
      'En quelle année l’équipe nationale, portée par Guy-Roger Nzamba et Brice Mackaya, a-t-elle atteint son tout premier quart de finale de CAN ?',
      'In which year did the national team reach its very first AFCON quarter-final?',
      '¿En qué año alcanzó la selección nacional su primer cuarto de final en la CAN?',
      'Em que ano a seleção nacional chegou pela primeira vez às quartas de final da CAN?',
      'في أي عام بلغ المنتخب الوطني ربع نهائي أمم أفريقيا للمرة الأولى في تاريخه؟'
    ),
    correct: L('1996 (en Afrique du Sud)', '1996 (in South Africa)', '1996 (en Sudáfrica)', '1996 (na África do Sul)', '1996 (في جنوب أفريقيا)'),
    distractors: [
      L('1976 (en Éthiopie)', '1976 (in Ethiopia)', '1976 (en Etiopía)', '1976 (na Etiópia)', '1976'),
      L('1984 (en Côte d’Ivoire)', '1984 (in Ivory Coast)', '1984 (en Costa de Marfil)', '1984 (na Costa do Marfim)', '1984'),
      L('2004 (en Tunisie)', '2004 (in Tunisia)', '2004 (en Túnez)', '2004 (na Tunísia)', '2004'),
    ],
    explanation: L(
      'Battant notamment le Zaïre 2-0 en poules, la génération de 1996 ne s’est inclinée qu’aux tirs au but face à la Tunisie en quarts de finale.',
      'After defeating Zaire 2-0 in the group stage, the 1996 squad fell only on penalties to Tunisia in the quarter-finals.',
      'Tras vencer a Zaire 2-0, la selección de 1996 cayó por penales ante Túnez en cuartos.',
      'Após vencer o Zaire por 2 a 0, a seleção de 1996 caiu nos pênaltis diante da Tunísia nas quartas.',
      'تغلبت على زائير 2-0 في دور المجموعات قبل أن تخرج بركلات الترجيح أمام تونس في ربع نهائي 1996.'
    ),
  }),
  mkQ({
    id: 'cur_GA_31',
    countryCode: 'GA',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'ecuele_manga_caps',
    source: 'Fédération Gabonaise de Football (FEGAFOOT)',
    prompt: L(
      'Quel défenseur central emblématique, ancien capitaine de Cardiff City et de Dijon, détient le record de sélections avec les Panthères du Gabon ?',
      'Which central defender, former captain of Cardiff City and Dijon, holds the all-time appearances record for Gabon?',
      '¿Qué defensa central emblemático ostenta el récord de partidos internacionales con las Panteras de Gabón?',
      'Que zagueiro emblemático detém o recorde de partidas pela seleção do Gabão?',
      'من هو قلب الدفاع المخضرم الذي يحمل الرقم القياسي لعدد المباريات الدولية مع منتخب الغابون؟'
    ),
    countryModePrompt: L(
      'Quel défenseur central fidèle à l’équipe nationale depuis 2006 dépasse les 100 sélections sous le maillot des Panthères ?',
      'Which central defender, capped since 2006, has surpassed 100 international appearances for the Panthers?',
      '¿Qué defensa central, internacional desde 2006, superó los 100 partidos con las Panteras?',
      'Que zagueiro, na seleção desde 2006, ultrapassou 100 jogos com a camisa dos Panteras?',
      'من هو قلب الدفاع الذي تجاوز حاجز 100 مباراة دولية بقميص الفهود منذ عام 2006؟'
    ),
    correct: L('Bruno Ecuele Manga', 'Bruno Ecuele Manga', 'Bruno Ecuele Manga', 'Bruno Ecuele Manga', 'برونو إيكويلي مانغا'),
    distractors: [
      L('Rigobert Song', 'Rigobert Song', 'Rigobert Song', 'Rigobert Song', 'ريغوبرت سونغ'),
      L('Kolo Touré', 'Kolo Touré', 'Kolo Touré', 'Kolo Touré', 'كولو توريه'),
      L('Kalidou Koulibaly', 'Kalidou Koulibaly', 'Kalidou Koulibaly', 'Kalidou Koulibaly', 'خاليدو كوليبالي'),
    ],
    explanation: L(
      'Pilier de la défense pendant près de deux décennies et disputant de nombreuses CAN, Bruno Ecuele Manga est le recordman absolu des sélections.',
      'A defensive cornerstone across multiple AFCON campaigns, Bruno Ecuele Manga is the national team’s most-capped player.',
      'Pilar defensivo durante casi dos décadas, Bruno Ecuele Manga lidera el historial de partidos internacionales.',
      'Pilar defensivo por quase duas décadas, Bruno Ecuele Manga é o recordista de jogos pela seleção.',
      'يُعد برونو إيكويلي مانغا ركيزة الدفاع وأكثر اللاعبين مشاركة في تاريخ المنتخب.'
    ),
  }),
  mkQ({
    id: 'cur_GA_32',
    countryCode: 'GA',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'zang_milama_sprint',
    source: 'Confédération africaine d’athlétisme (CAA)',
    prompt: L(
      'Quelle sprinteuse gabonaise a été championne d’Afrique du 100 mètres en 2012 à Porto-Novo ?',
      'Which Gabonese sprinter won the 2012 African 100m title in Porto-Novo?',
      '¿Qué velocista gabonesa se proclamó campeona de África de 100 metros en 2012 en Porto-Novo?',
      'Qual velocista gabonesa foi campeã africana dos 100 metros em 2012 em Porto-Novo?',
      'من هي العداءة الغابونية التي توجت ببطولة أفريقيا لسباق 100 متر عام 2012 في بورتو نوفو؟'
    ),
    countryModePrompt: L(
      'Quelle sprinteuse porte-drapeau du pays a remporté le titre de championne d’Afrique du 100 mètres en 2012 ?',
      'Which Olympic flag-bearer sprinter won the 2012 African Women’s 100m Championship?',
      '¿Qué velocista abanderada del país ganó el campeonato africano de 100 metros en 2012?',
      'Qual velocista porta-bandeira do país venceu o campeonato africano dos 100m em 2012?',
      'من هي العداءة التي أحرزت ذهبية سباق 100 متر في بطولة أفريقيا لألعاب القوى عام 2012؟'
    ),
    correct: L('Ruddy Zang Milama', 'Ruddy Zang Milama', 'Ruddy Zang Milama', 'Ruddy Zang Milama', 'رودي زانغ ميلاما'),
    distractors: [
      L('Murielle Ahouré', 'Murielle Ahouré', 'Murielle Ahouré', 'Murielle Ahouré', 'مورييل أهوري'),
      L('Blessing Okagbare', 'Blessing Okagbare', 'Blessing Okagbare', 'Blessing Okagbare', 'بليسينغ أوكاغباري'),
      L('Marie-Josée Ta Lou', 'Marie-Josée Ta Lou', 'Marie-Josée Ta Lou', 'Marie-Josée Ta Lou', 'ماري جوزيه تا لو'),
    ],
    explanation: L(
      'Médaillée de bronze mondiale en salle sur 60 m en 2010 et championne d’Afrique sur 100 m en 2012, Ruddy Zang Milama a porté très haut l’athlétisme national.',
      'World Indoor 60m bronze medalist (2010) and African 100m champion (2012), Ruddy Zang Milama pioneered national sprint excellence.',
      'Bronce mundial en 60 m en 2010 y campeona africana de 100 m en 2012, Ruddy Zang Milama hizo historia.',
      'Bronze mundial nos 60m em 2010 e campeã africana dos 100m em 2012, Ruddy Zang Milama fez história.',
      'حققت رودي زانغ ميلاما برونزية العالم 2010 وذهبية أفريقيا 2012 في سباقات السرعة.'
    ),
  }),
  mkQ({
    id: 'cur_GA_33',
    countryCode: 'GA',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 4,
    topicKey: 'london_2012_u23_team',
    source: 'FIFA — Tournoi olympique 2012 & CAF U23',
    prompt: L(
      'Quel trophée continental la sélection des moins de 23 ans du Gabon a-t-elle remporté en décembre 2011 au Maroc avant les JO de Londres ?',
      'Which continental title did Gabon’s U-23 national team win in Morocco in December 2011 before the London Olympics?',
      '¿Qué título continental ganó la selección sub-23 de Gabón en diciembre de 2011 antes de Londres 2012?',
      'Que título continental a seleção sub-23 do Gabão conquistou em dezembro de 2011 antes das Olimpíadas de Londres?',
      'ما البطولة القارية التي توج بها منتخب الغابون تحت 23 عاماً في المغرب في ديسمبر 2011؟'
    ),
    countryModePrompt: L(
      'Quel tout premier trophée CAF l’équipe nationale espoirs (U23) a-t-elle remporté en 2011 au Maroc ?',
      'Which historic first CAF trophy did the national U-23 team lift in Morocco in 2011?',
      '¿Qué histórico primer trofeo CAF ganó la selección sub-23 en Marruecos en 2011?',
      'Qual histórico primeiro troféu CAF a seleção sub-23 venceu no Marrocos em 2011?',
      'ما أول لقب قاري في تاريخ الكاف أحرزه المنتخب الأولمبي تحت 23 عاماً في المغرب عام 2011؟'
    ),
    correct: L(
      'La première édition de la CAN des moins de 23 ans',
      'The inaugural U-23 Africa Cup of Nations',
      'La primera edición de la Copa Africana Sub-23',
      'A primeira edição da CAN Sub-23',
      'النسخة الأولى من كأس أمم أفريقيا تحت 23 عاماً'
    ),
    distractors: [
      L('La Ligue des Champions de la CAF', 'The CAF Champions League', 'La Liga de Campeones de la CAF', 'A Liga dos Campeões da CAF', 'دوري أبطال أفريقيا'),
      L('La Coupe COSAFA', 'The COSAFA Cup', 'La Copa COSAFA', 'A Copa COSAFA', 'كأس كوسافا'),
      L('Le CHAN 2014', 'CHAN 2014', 'El CHAN 2014', 'O CHAN 2014', 'بطولة الشان 2014'),
    ],
    explanation: L(
      'Dirigés par Claude Mbourounot, les jeunes Panthères battirent le Maroc 2-1 à Marrakech en finale pour remporter le tout premier titre U23 de la CAF !',
      'Led by coach Claude Mbourounot, the U-23 squad stunned hosts Morocco 2-1 in Marrakech to win the inaugural CAF U-23 Championship.',
      'Dirigidos por Claude Mbourounot, los jóvenes vencieron 2-1 a Marruecos en Marrakech para alzar la primera CAN Sub-23.',
      'Comandados por Claude Mbourounot, os jovens venceram o Marrocos por 2 a 1 na final da CAN Sub-23 em Marrakech.',
      'تغلب المنتخب الأولمبي على المغرب 2-1 في مراكش ليتوج بأول نسخة من بطولة أفريقيا تحت 23 عاماً.'
    ),
  }),
  mkQ({
    id: 'cur_GA_34',
    countryCode: 'GA',
    category: 'history',
    subCategory: 'anecdotes_insolites',
    difficulty: 3,
    topicKey: 'gabon_etymology_cloak',
    source: 'Archives maritimes portugaises (XVe siècle)',
    prompt: L(
      'Que désignait en portugais le mot « Gabão », à l’origine du nom du Gabon donné par les navigateurs au XVe siècle ?',
      'What did the Portuguese word "Gabão"—the origin of Gabon’s name given by 15th-century sailors—mean?',
      '¿Qué significaba en portugués la palabra "Gabão", origen del nombre de Gabón en el siglo XV?',
      'O que significava em português a palavra "Gabão", origem do nome do país dado por navegadores no século XV?',
      'ماذا كانت تعني الكلمة البرتغالية «غاباو» التي اشتُق منها اسم الغابون في القرن الخامس عشر؟'
    ),
    countryModePrompt: L(
      'Que signifiait en portugais le mot « Gabão », inspiré par la forme de l’estuaire du Komo ?',
      'What did the Portuguese word "Gabão" mean, inspired by the shape of the Komo River estuary?',
      '¿Qué significaba la palabra portuguesa "Gabão", inspirada en la forma del estuario del Komo?',
      'O que significava a palavra portuguesa "Gabão", inspirada no formato do estuário do Komo?',
      'ماذا كانت تعني كلمة «غاباو» البرتغالية التي استُمدت من شكل مصب نهر كومو؟'
    ),
    correct: L(
      'Un manteau marin à capuchon (caban), rappelant la forme de l’estuaire du Komo',
      'A hooded mariner’s cloak, resembling the shape of the Komo estuary',
      'Un abrigo marino con capucha, por la forma del estuario del Komo',
      'Um casaco marinheiro com capuz, lembrando a forma do estuário do Komo',
      'معطف بحار بقلنسوة يشبه شكل مصب نهر كومو'
    ),
    distractors: [
      L('Une montagne enneigée', 'A snow-capped mountain', 'Una montaña nevada', 'Uma montanha nevada', 'جبل مغطى بالثلوج'),
      L('Une perle rare de rivière', 'A rare river pearl', 'Una perla de río', 'Uma pérola de rio', 'لؤلؤة نهرية نادرة'),
      L('Un tambour de guerre royal', 'A royal war drum', 'Un tambor real', 'Um tambor real', 'طبل حرب ملكي'),
    ],
    explanation: L(
      'En 1472, les navigateurs portugais comparèrent le contour de l’estuaire du Komo à un « gabão », manteau de marin à manches et capuche.',
      'In 1472, Portuguese sailors compared the silhouette of the Komo estuary to a "gabão," a hooded seafarer’s coat.',
      'En 1472, los navegantes portugueses compararon el estuario del Komo con un abrigo llamado «gabão».',
      'Em 1472, navegadores portugueses compararam o estuário do Komo a um «gabão», casaco com capuz.',
      'في عام 1472 شبّه البحارة البرتغاليون شكل مصب نهر كومو بمعطف بحري بقلنسوة يُسمى غاباو.'
    ),
  }),
  mkQ({
    id: 'cur_GA_35',
    countryCode: 'GA',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'commonwealth_2022',
    source: 'Secrétariat du Commonwealth (CHOGM 2022)',
    prompt: L(
      'En juin 2022, avec le Togo, quelle grande organisation internationale le Gabon a-t-il officiellement rejointe ?',
      'In June 2022, alongside Togo, which major international organization did Gabon officially join?',
      '¿A qué gran organización internacional se unió oficialmente Gabón en junio de 2022 junto con Togo?',
      'A que grande organização internacional o Gabão aderiu oficialmente em junho de 2022 junto com o Togo?',
      'ما المنظمة الدولية الكبرى التي انضمت إليها الغابون رسمياً في يونيو 2022 إلى جانب توغو؟'
    ),
    countryModePrompt: L(
      'Quelle grande famille internationale de 56 États le pays a-t-il officiellement rejointe en juin 2022 aux côtés du Togo ?',
      'Which 56-nation international association did the country officially join in June 2022 alongside Togo?',
      '¿A qué gran asociación internacional de 56 Estados se unió el país en junio de 2022 junto a Togo?',
      'A qual grande organização internacional de 56 países a nação aderiu em junho de 2022 junto ao Togo?',
      'ما المنظمة الدولية المكونة من 56 دولة التي انضمت إليها البلاد في يونيو 2022؟'
    ),
    correct: L('Le Commonwealth des Nations', 'The Commonwealth of Nations', 'La Mancomunidad de Naciones (Commonwealth)', 'A Commonwealth das Nações', 'رابطة الكومنولث'),
    distractors: [
      L('L’Union européenne', 'The European Union', 'La Unión Europea', 'A União Europeia', 'الاتحاد الأوروبي'),
      L('L’ASEAN', 'ASEAN', 'La ASEAN', 'A ASEAN', 'رابطة آسيان'),
      L('Le Mercosur', 'Mercosur', 'El Mercosur', 'O Mercosul', 'تكتل ميركوسور'),
    ],
    explanation: L(
      'Lors du sommet de Kigali en 2022, le pays et le Togo sont devenus les 55e et 56e membres du Commonwealth, sans passé colonial britannique.',
      'At the 2022 Kigali Summit, the country and Togo became the 55th and 56th Commonwealth members despite no British colonial history.',
      'En la cumbre de Kigali 2022, se unió junto a Togo como miembro número 55 de la Commonwealth.',
      'Na cúpula de Kigali em 2022, aderiu junto com o Togo como novos membros da Commonwealth.',
      'انضمت البلاد وتوغو إلى الكومنولث في قمة كيغالي عام 2022 كأعضاء رقم 55 و56.'
    ),
  }),
  mkQ({
    id: 'cur_GA_36',
    countryCode: 'GA',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'akanda_mangroves',
    source: 'ANPN — Parc national d’Akanda',
    prompt: L(
      'Quel parc national situé tout près de Libreville protège d’immenses mangroves et accueille des milliers d’oiseaux migrateurs ?',
      'Which national park right near Libreville protects vast mangroves and thousands of migratory birds?',
      '¿Qué parque nacional muy cercano a Libreville protege vastos manglares y miles de aves migratorias?',
      'Que parque nacional bem perto de Libreville protege vastos manguezais e milhares de aves migratórias?',
      'ما المنتزه الوطني القريب جداً من ليبروفيل الذي يحمي غابات المنغروف وآلاف الطيور المهاجرة؟'
    ),
    countryModePrompt: L(
      'Quel parc national aux portes de Libreville forme l’une des plus riches zones de mangroves et d’oiseaux migrateurs de la côte ?',
      'Which national park on the outskirts of Libreville protects rich mangroves and migratory bird habitats?',
      '¿Qué parque nacional a las puertas de Libreville protege extensos manglares y aves migratorias?',
      'Que parque nacional às portas de Libreville protege ricos manguezais e aves migratórias?',
      'ما المنتزه الوطني على أطراف ليبروفيل الذي يحمي غابات المنغروف والطيور المهاجرة؟'
    ),
    correct: L('Le parc national d’Akanda', 'Akanda National Park', 'Parque Nacional de Akanda', 'Parque Nacional de Akanda', 'منتزه أكاندا الوطني'),
    distractors: [
      L('Le parc du Niokolo-Koba', 'Niokolo-Koba Park', 'Parque de Niokolo-Koba', 'Parque Niokolo-Koba', 'منتزه نيوكولو كوبا'),
      L('Le parc du Serengeti', 'Serengeti National Park', 'Parque del Serengeti', 'Parque do Serengeti', 'منتزه سيرينغيتي'),
      L('Le parc du Tassili n’Ajjer', 'Tassili n’Ajjer Park', 'Parque del Tassili n’Ajjer', 'Parque Tassili n’Ajjer', 'منتزه طاسيلي ناجر'),
    ],
    explanation: L(
      'Créé en 2002 au nord de Libreville, le parc national d’Akanda protège baies de la Mondah et Corisco contre l’érosion côtière.',
      'Created in 2002 north of Libreville, Akanda National Park shelters coastal mangroves and migratory shorebirds.',
      'Creado en 2002 al norte de Libreville, el parque de Akanda protege manglares vitales.',
      'Criado em 2002 ao norte de Libreville, o Parque de Akanda protege manguezais vitais.',
      'تأسس منتزه أكاندا عام 2002 شمال ليبروفيل لحماية غابات المنغروف والطيور المهاجرة.'
    ),
  }),
  mkQ({
    id: 'cur_GA_37',
    countryCode: 'GA',
    category: 'geography',
    subCategory: 'sciences_innovations',
    difficulty: 4,
    topicKey: 'franceville_paleontology',
    source: 'CNRS / Université de Poitiers & CENAREST (Nature 2010)',
    prompt: L(
      'Quelle découverte paléontologique majeure faite près de Franceville (bassin de l’Ogooué) remonte à 2,1 milliards d’années ?',
      'What major paleontological discovery near Franceville dates back 2.1 billion years?',
      '¿Qué gran descubrimiento paleontológico hallado cerca de Franceville se remonta a 2.100 millones de años?',
      'Que grande descoberta paleontológica feita perto de Franceville data de 2,1 bilhões de anos?',
      'ما الاكتشاف الأحفوري التاريخي قرب فرانسفيل الذي يعود عمره إلى 2.1 مليار سنة؟'
    ),
    countryModePrompt: L(
      'Quels vestiges fossiles vieux de 2,1 milliards d’années — parmi les plus anciens organismes multicellulaires complexes — ont été trouvés près de Franceville ?',
      'Which 2.1-billion-year-old fossils—among the earliest complex multicellular organisms—were unearthed near Franceville?',
      '¿Qué fósiles de hace 2.100 millones de años —entre los primeros organismos multicelulares— se hallaron cerca de Franceville?',
      'Que fósseis de 2,1 bilhões de anos —entre os primeiros organismos multicelulares— foram achados perto de Franceville?',
      'ما الحفريات التي يبلغ عمرها 2.1 مليار عام واكتُشفت قرب فرانسفيل؟'
    ),
    correct: L(
      'Des fossiles d’organismes multicellulaires complexes (le biote de Franceville)',
      'Fossils of the earliest complex multicellular organisms (Francevillian biota)',
      'Fósiles de los primeros organismos multicelulares complejos (biota de Franceville)',
      'Fósseis de organismos multicelulares complexos muito antigos (biota de Franceville)',
      'أحافير أقدم الكائنات الحية متعددة الخلايا المعقدة'
    ),
    distractors: [
      L('Des squelettes complets de Tyrannosaurus rex', 'Complete Tyrannosaurus rex skeletons', 'Esqueletos completos de Tyrannosaurus rex', 'Esqueletos de Tyrannosaurus rex', 'هياكل ديناصور تي ريكس'),
      L('Des outils en bronze de l’Antiquité romaine', 'Roman-era bronze tools', 'Herramientas romanas de bronce', 'Ferramentas romanas de bronze', 'أدوات برونزية رومانية'),
      L('Des manuscrits sur papyrus de l’Empire du Mali', 'Mali Empire papyrus scrolls', 'Papiros del Imperio de Malí', 'Papiros do Império do Mali', 'برديات إمبراطورية مالي'),
    ],
    explanation: L(
      'Publiés dans Nature en 2010, ces fossiles découverts dans le Francevillien prouvent l’existence d’une vie multicellulaire organisée il y a 2,1 milliards d’années !',
      'Published in Nature in 2010, these fossils revealed macroscopic multicellular life thriving 2.1 billion years ago.',
      'Publicados en Nature en 2010, estos fósiles revelaron vida multicelular organizada hace 2.100 millones de años.',
      'Publicados na Nature em 2010, esses fósseis revelaram vida multicelular complexa há 2,1 bilhões de anos.',
      'نُشر هذا الاكتشاف في مجلة نيتشر عام 2010 وأثبت وجود حياة متعددة الخلايا قبل 2.1 مليار عام.'
    ),
  }),
  mkQ({
    id: 'cur_GA_38',
    countryCode: 'GA',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'ntchorere_hero',
    source: 'Histoire militaire — Seconde Guerre mondiale (1940)',
    prompt: L(
      'Quel officier gabonais né à Libreville, capitaine dans l’armée française, est mort en héros à Airaines en juin 1940 ?',
      'Which Gabonese-born officer, a captain in the French Army, died heroically at Airaines in June 1940?',
      '¿Qué oficial nacido en Libreville murió heroicamente en Airaines en junio de 1940?',
      'Que oficial nascido em Libreville morreu heroicamente em Airaines em junho de 1940?',
      'من هو الضابط الغابوني المولود في ليبروفيل الذي استُشهد ببطولة في يونيو 1940؟'
    ),
    countryModePrompt: L(
      'Quel capitaine né à Libreville en 1896 donna son nom au célèbre Prytanée militaire après son sacrifice héroïque en juin 1940 ?',
      'Which captain born in Libreville in 1896 gave his name to the national military academy after his 1940 sacrifice?',
      '¿Qué capitán nacido en Libreville en 1896 dio nombre al instituto militar nacional tras 1940?',
      'Que capitão nascido em Libreville em 1896 deu nome ao colégio militar nacional após 1940?',
      'من هو النقيب المولود في ليبروفيل عام 1896 والذي سُميت المدرسة العسكرية باسمه؟'
    ),
    correct: L('Le capitaine Charles N’Tchoréré', 'Captain Charles N’Tchoréré', 'El capitán Charles N’Tchoréré', 'O capitão Charles N’Tchoréré', 'النقيب شارل نتشوريري'),
    distractors: [
      L('Le général Thomas Sankara', 'Thomas Sankara', 'Thomas Sankara', 'Thomas Sankara', 'توماس سانكارا'),
      L('Le maréchal Samory Touré', 'Samory Touré', 'Samory Touré', 'Samory Touré', 'ساموري توري'),
      L('Amílcar Cabral', 'Amílcar Cabral', 'Amílcar Cabral', 'Amílcar Cabral', 'أميلكار كابرال'),
    ],
    explanation: L(
      'Le capitaine Charles N’Tchoréré résista jusqu’au bout sur la Somme avec sa compagnie ; le Prytanée militaire de Libreville porte son nom.',
      'Captain Charles N’Tchoréré refused to surrender in 1940; Libreville’s prestigious military school bears his name.',
      'El capitán Charles N’Tchoréré luchó heroicamente en 1940 y da nombre al Prytanée militar de Libreville.',
      'O capitão Charles N’Tchoréré resistiu heroicamente em 1940 e dá nome ao colégio militar de Libreville.',
      'قاتل النقيب شارل نتشوريري ببسالة عام 1940 وأُطلق اسمه على الكلية العسكرية في ليبروفيل.'
    ),
  }),
  mkQ({
    id: 'cur_GA_39',
    countryCode: 'GA',
    category: 'culture',
    subCategory: 'anecdotes_insolites',
    difficulty: 2,
    topicKey: 'flag_colors_meaning',
    source: 'Symboles officiels de l’État (1960)',
    prompt: L(
      'Que représentent respectivement les trois bandes horizontales verte, jaune et bleue du drapeau gabonais ?',
      'What do the three horizontal green, yellow, and blue stripes of Gabon’s flag symbolize respectively?',
      '¿Qué simbolizan respectivamente las franjas verde, amarilla y azul de la bandera de Gabón?',
      'O que simbolizam respectivamente as faixas verde, amarela e azul da bandeira do Gabão?',
      'إلى ماذا ترمز الألوان الأخضر والأصفر والأزرق في علم الغابون على التوالي؟'
    ),
    countryModePrompt: L(
      'Que symbolisent respectivement les bandes verte, jaune et bleue du drapeau national ?',
      'What do the green, yellow, and blue stripes of the national flag represent respectively?',
      '¿Qué simbolizan respectivamente las franjas verde, amarilla y azul de la bandera nacional?',
      'O que simbolizam respectivamente as faixas verde, amarela e azul da bandeira nacional?',
      'ماذا يمثل كل من اللون الأخضر والأصفر والأزرق في العلم الوطني؟'
    ),
    correct: L(
      'La forêt équatoriale, le soleil / l’Équateur, et l’océan Atlantique',
      'Equatorial forests, the sun/Equator, and the Atlantic Ocean',
      'La selva ecuatorial, el sol/Ecuador y el océano Atlántico',
      'A floresta equatorial, o sol/Equador e o oceano Atlântico',
      'الغابة الاستوائية والشمس/خط الاستواء والمحيط الأطلسي'
    ),
    distractors: [
      L('Les montagnes neigeuses, le blé et la Méditerranée', 'Snowy peaks, wheat, and the Mediterranean', 'Montañas nevadas, trigo y el Mediterráneo', 'Montanhas nevadas, trigo e o Mediterrâneo', 'القمم الثلجية والقمح والبحر المتوسط'),
      L('Le désert du Sahara, le Nil et la mer Rouge', 'Sahara sands, the Nile, and the Red Sea', 'El Sahara, el Nilo y el Mar Rojo', 'O Saara, o Nilo e o Mar Vermelho', 'الصحراء الكبرى والنيل والبحر الأحمر'),
      L('Les trois provinces historiques du nord', 'Three northern provinces', 'Tres provincias del norte', 'Três províncias do norte', 'ثلاث مقاطعات شمالية'),
    ],
    explanation: L(
      'Vert pour l’immense forêt, jaune pour l’Équateur et la lumière du soleil, bleu pour l’Atlantique et les nombreux cours d’eau.',
      'Green honors the vast rainforest, yellow stands for the Equator and sunshine, and blue represents the ocean and rivers.',
      'Verde por la selva, amarillo por el sol y el Ecuador, y azul por el Atlántico y los ríos.',
      'Verde pela floresta, amarelo pelo sol e Equador, e azul pelo Atlântico e os rios.',
      'الأخضر للغابات والأصفر لخط الاستواء والشمس والأزرق للمحيط الأطلسي والأنهار.'
    ),
  }),
  mkQ({
    id: 'cur_GA_40',
    countryCode: 'GA',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'daniel_cousin_2010',
    source: 'CAF — Archives CAN 2010 (Lubango)',
    prompt: L(
      'Quel ancien capitaine et buteur de Hull City a inscrit le but victorieux historique du Gabon contre le Cameroun (1-0) à la CAN 2010 ?',
      'Which former captain and Hull City striker scored Gabon’s famous 1-0 winning goal against Cameroon at AFCON 2010?',
      '¿Qué excapitán y delantero anotó el histórico gol de la victoria por 1-0 ante Camerún en la CAN 2010?',
      'Que ex-capitão e atacante marcou o histórico gol da vitória por 1 a 0 sobre Camarões na CAN 2010?',
      'من هو القائد والمهاجم السابق الذي سجل هدف الفوز التاريخي على الكاميرون (1-0) في أمم أفريقيا 2010؟'
    ),
    countryModePrompt: L(
      'Quel capitaine emblématique a marqué le but vainqueur contre le Cameroun (1-0) dès le premier match de la CAN 2010 ?',
      'Which iconic national captain scored the 1-0 winner against Cameroon in the opening match of AFCON 2010?',
      '¿Qué emblemático capitán marcó el gol del triunfo 1-0 ante Camerún en el debut de la CAN 2010?',
      'Que capitão emblemático marcou o gol da vitória por 1 a 0 sobre Camarões na estreia da CAN 2010?',
      'من هو القائد التاريخي الذي سجل هدف الفوز على الكاميرون (1-0) في افتتاح مشوار أمم أفريقيا 2010؟'
    ),
    correct: L('Daniel Cousin', 'Daniel Cousin', 'Daniel Cousin', 'Daniel Cousin', 'دانييل كوزين'),
    distractors: [
      L('Samuel Eto’o', 'Samuel Eto’o', 'Samuel Eto’o', 'Samuel Eto’o', 'صامويل إيتو'),
      L('Emmanuel Adebayor', 'Emmanuel Adebayor', 'Emmanuel Adebayor', 'Emmanuel Adebayor', 'إيمانويل أديبايور'),
      L('Shabani Nonda', 'Shabani Nonda', 'Shabani Nonda', 'Shabani Nonda', 'شعباني نوندا'),
    ],
    explanation: L(
      'Le 13 janvier 2010 à Lubango (Angola), le but de Daniel Cousin à la 17e minute offrit une victoire retentissante contre les Lions Indomptables.',
      'On January 13, 2010 in Lubango, Daniel Cousin’s 17th-minute strike sealed a famous 1-0 upset over Cameroon.',
      'El 13 de enero de 2010 en Lubango, Daniel Cousin firmó un triunfo histórico ante Camerún.',
      'Em 13 de janeiro de 2010 em Lubango, Daniel Cousin garantiu uma vitória histórica sobre Camarões.',
      'في 13 يناير 2010 سجل دانييل كوزين هدفاً تاريخياً منح الفوز على الكاميرون في أنغولا.'
    ),
  }),
];

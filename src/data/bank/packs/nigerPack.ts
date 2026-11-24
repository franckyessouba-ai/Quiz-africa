import { L } from '../../countriesPart1';
import { mkQ } from './packHelpers';

export const NIGER_CURATED_PACK = [
  mkQ({
    id: 'cur_NE_01',
    countryCode: 'NE',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'abdoul_razak_issoufou_taekwondo_rio',
    source: 'CIO & World Taekwondo — Rio 2016 / Muju 2017',
    prompt: L(
      'Quel champion nigérien de taekwondo a remporté une médaille d’argent historique aux Jeux olympiques de Rio 2016 avant d’être sacré champion du monde en 2017 ?',
      'Which Nigerien taekwondo star won a historic Olympic silver medal at Rio 2016 before becoming World Champion in 2017?',
      '¿Qué campeón de taekwondo de Níger ganó una histórica plata olímpica en Río 2016 y el título mundial en 2017?',
      'Qual campeão de taekwondo do Níger conquistou prata olímpica no Rio 2016 e o ouro mundial em 2017?',
      'أي بطل تايكواندو نيجري أحرز فضية تاريخية في أولمبياد ريو 2016 ثم تُوّج بطلاً للعالم عام 2017؟'
    ),
    countryModePrompt: L(
      'Quel taekwondoïste de la catégorie des poids lourds a offert au pays sa deuxième médaille olympique de l’histoire en décrochant l’argent à Rio 2016, puis l’or mondial en 2017 ?',
      'Which heavyweight taekwondo athlete captured the nation’s second-ever Olympic medal with silver at Rio 2016 and World Championship gold in 2017?',
      '¿Qué atleta de taekwondo ganó la plata olímpica en Río 2016 y el oro mundial en 2017?',
      'Qual atleta de taekwondo conquistou a prata olímpica no Rio 2016 e o ouro mundial em 2017?',
      'أي بطل تايكواندو في الوزن الثقيل حصد الفضية الأولمبية في ريو 2016 وذهبية العالم 2017؟'
    ),
    correct: L('Abdoul Razak Issoufou Alfaga', 'Abdoul Razak Issoufou Alfaga', 'Abdoul Razak Issoufou Alfaga', 'Abdoul Razak Issoufou Alfaga', 'عبد الرزاق إيسوفو ألفاغا'),
    distractors: [
      L('Issaka Daborg', 'Issaka Daborg', 'Issaka Daborg', 'Issaka Daborg', 'إيساكا دابورغ'),
      L('Moussa Maâzou', 'Moussa Maâzou', 'Moussa Maâzou', 'Moussa Maâzou', 'موسى مازو'),
      L('Hamidou Djibo', 'Hamidou Djibo', 'Hamidou Djibo', 'Hamidou Djibo', 'حميدو دجيبو'),
    ],
    explanation: L(
      'Porte-drapeau à Rio, Abdoul Razak Issoufou Alfaga a hissé le taekwondo national au sommet mondial en 2017 chez les plus de 87 kg.',
      'Flag-bearer in Rio, Abdoul Razak Issoufou Alfaga won +87 kg World Championship gold in 2017, becoming a national sporting hero.',
      'Abanderado en Río, Abdoul Razak Issoufou Alfaga conquistó luego el oro mundial en 2017.',
      'Porta-bandeira no Rio, Abdoul Razak Issoufou Alfaga conquistou o ouro mundial em 2017.',
      'حمل عبد الرزاق إيسوفو ألفاغا علم بلاده في ريو وتألق بعدها بالتتويج بذهبية بطولة العالم 2017.'
    ),
  }),
  mkQ({
    id: 'cur_NE_02',
    countryCode: 'NE',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'moussa_maazou_monaco_cska',
    source: 'CAF & UEFA — Parcours des internationaux du Mena',
    prompt: L(
      'Quel puissant avant-centre international du Mena du Niger a porté les couleurs du CSKA Moscou, de l’AS Monaco et des Girondins de Bordeaux ?',
      'Which powerful Niger Mena striker played for European clubs including CSKA Moscow, AS Monaco, and Bordeaux?',
      '¿Qué delantero de la selección de Níger jugó en clubes europeos como el CSKA Moscú, AS Mónaco y Girondins de Burdeos?',
      'Qual centroavante da seleção do Níger defendeu clubes europeus como CSKA Moscou, AS Monaco e Bordeaux?',
      'أي مهاجم قوي لمنتخب مينا النيجر لعب لأندية سسكا موسكو وموناكو وبوردو في أوروبا؟'
    ),
    countryModePrompt: L(
      'Quel avant-centre emblématique du Mena a brillé dans les championnats européens sous les maillots du CSKA Moscou, de l’AS Monaco et de Bordeaux ?',
      'Which iconic Mena striker played in top European leagues for CSKA Moscow, AS Monaco, and Bordeaux?',
      '¿Qué delantero emblemático del Mena brilló en Europa con el CSKA Moscú, Mónaco y Burdeos?',
      'Qual centroavante emblemático do Mena jogou na Europa por CSKA Moscou, Monaco e Bordeaux?',
      'أي مهاجم بارز لمنتخب مينا تألق في الدوريات الأوروبية بألوان سسكا موسكو وموناكو وبوردو؟'
    ),
    correct: L('Moussa Maâzou', 'Moussa Maâzou', 'Moussa Maâzou', 'Moussa Maâzou', 'موسى مازو'),
    distractors: [
      L('Kamilou Daouda', 'Kamilou Daouda', 'Kamilou Daouda', 'Kamilou Daouda', 'كاميلو داودا'),
      L('Modibo Sidibé', 'Modibo Sidibé', 'Modibo Sidibé', 'Modibo Sidibé', 'موديبو سيديبي'),
      L('Boubacar Talatou', 'Boubacar Talatou', 'Boubacar Talatou', 'Boubacar Talatou', 'بوبكر تالاتو'),
    ],
    explanation: L(
      'Révélé à l’ASFAN puis à Lokeren, Moussa Maâzou a disputé deux CAN avec le Mena (2012 et 2013) et marqué des buts mémorables en Ligue 1 et en Russie.',
      'Starting at ASFAN, Moussa Maâzou starred for Niger at the 2012 and 2013 AFCON tournaments while playing top-flight football in Russia and France.',
      'Surgido del ASFAN, Moussa Maâzou disputó las Copas Africanas de 2012 y 2013 tras brillar en Rusia y Francia.',
      'Revelado pelo ASFAN, Moussa Maâzou disputou as CANs de 2012 e 2013 após atuar na Rússia e na França.',
      'برز موسى مازو مع منتخب مينا في نسختي أمم إفريقيا 2012 و2013 بعد مسيرة احترافية في روسيا وفرنسا.'
    ),
  }),
  mkQ({
    id: 'cur_NE_03',
    countryCode: 'NE',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'victorien_adebayor_mena_attaquant',
    source: 'CAF & CHAN — Statistiques du Mena',
    prompt: L(
      'Quel milieu offensif et buteur prolifique du Mena du Niger, formé à l’AS GNN puis passé par la Norvège et l’Afrique du Nord, détient plusieurs records de buts récents en sélection ?',
      'Which prolific Nigerien attacking midfielder and Mena goalscorer developed at AS GNN before playing in Norway and North Africa?',
      '¿Qué centrocampista ofensivo y goleador del Mena de Níger se formó en el AS GNN antes de jugar en Noruega?',
      'Qual meio-atacante e artilheiro do Mena do Níger formou-se no AS GNN antes de atuar na Noruega?',
      'أي صانع ألعاب وهداف بارز في منتخب مينا تكوّن في جمعية الحرس الوطني قبل الاحتراف في النرويج وشمال إفريقيا؟'
    ),
    countryModePrompt: L(
      'Quel joueur créatif du Mena, meilleur buteur du CHAN 2022 avec le maillot national et passé par la Norvège et le Maroc, porte souvent le brassard offensif de l’équipe ?',
      'Which creative Mena attacker, formed at AS GNN and active in Norway and North Africa, is one of the squad’s all-time leading scorers?',
      '¿Qué atacante creativo del Mena, formado en AS GNN, figura entre los máximos goleadores recientes de la selección?',
      'Qual atacante criativo do Mena, revelado no AS GNN, figura entre os maiores artilheiros recentes da seleção?',
      'أي لاعب هجومي مبدع في منتخب مينا تكوّن في نادي AS GNN ويُعد من أبرز هدافي المنتخب في العقد الأخير؟'
    ),
    correct: L('Victorien Adebayor', 'Victorien Adebayor', 'Victorien Adebayor', 'Victorien Adebayor', 'فيكتورين أديبايور'),
    distractors: [
      L('Amadou Moutari', 'Amadou Moutari', 'Amadou Moutari', 'Amadou Moutari', 'أمادو موتاري'),
      L('Youssouf Oumarou', 'Youssouf Oumarou', 'Youssouf Oumarou', 'Youssouf Oumarou', 'يوسف عمر'),
      L('Daniel Sosah', 'Daniel Sosah', 'Daniel Sosah', 'Daniel Sosah', 'دانييل سوساه'),
    ],
    explanation: L(
      'Adroit des deux pieds et redoutable sur coup de pied arrêté, Victorien Adebayor s’est imposé comme le moteur offensif du Mena dès la fin des années 2010.',
      'A gifted set-piece specialist and finisher, Victorien Adebayor emerged as one of the Mena’s most prolific modern goalscorers.',
      'Habilidoso a balón parado, Victorien Adebayor se consolidó como referente ofensivo del Mena.',
      'Especialista em bolas paradas, Victorien Adebayor tornou-se uma das referências ofensivas do Mena.',
      'برز فيكتورين أديبايور بمهارته في الكرات الثابتة وأصبح من أهم ركائز الهجوم في منتخب مينا.'
    ),
  }),
  mkQ({
    id: 'cur_NE_04',
    countryCode: 'NE',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'mena_premiere_can_2012',
    source: 'CAF — Archives CAN 2012',
    prompt: L(
      'En quelle année le Mena du Niger a-t-il participé pour la toute première fois de son histoire à une phase finale de Coupe d’Afrique des Nations ?',
      'In what year did the Niger Mena qualify for and play in the Africa Cup of Nations finals for the very first time?',
      '¿En qué año participó por primera vez la selección de Níger en la fase final de la Copa Africana de Naciones?',
      'Em que ano a seleção do Níger disputou pela primeira vez a fase final da Copa Africana de Nações?',
      'في أي عام شارك منتخب مينا النيجر لأول مرة في تاريخه في نهائيات كأس أمم إفريقيا؟'
    ),
    countryModePrompt: L(
      'En quelle année le Mena a-t-il disputé la toute première Coupe d’Afrique des Nations de son histoire, coorganisée par le Gabon et la Guinée équatoriale ?',
      'In what year did the Mena make their historic first-ever appearance at the Africa Cup of Nations finals?',
      '¿En qué año disputó el Mena su primera fase final de la Copa Africana de Naciones?',
      'Em que ano o Mena disputou a primeira fase final da Copa Africana de Nações de sua história?',
      'في أي عام خاض منتخب مينا أول مشاركة له في نهائيات كأس أمم إفريقيا؟'
    ),
    correct: L('2012', '2012', '2012', '2012', '2012'),
    distractors: [
      L('2006', '2006', '2006', '2006', '2006'),
      L('2008', '2008', '2008', '2008', '2008'),
      L('2017', '2017', '2017', '2017', '2017'),
    ],
    explanation: L(
      'Dirigé par Harouna Doulla Gabde, le Mena a devancé l’Égypte et l’Afrique du Sud en qualifications pour disputer la CAN 2012 à Libreville, puis a réédité l’exploit en 2013.',
      'Coached by Harouna Doulla Gabde, the Mena topped a qualifying group featuring Egypt and South Africa to reach the 2012 AFCON.',
      'Dirigido por Harouna Doulla Gabde, el Mena superó a Egipto y Sudáfrica en la clasificación rumbo a la CAN 2012.',
      'Comandado por Harouna Doulla Gabde, o Mena superou Egito e África do Sul nas eliminatórias da CAN 2012.',
      'تحت قيادة المدرب هارونا دولا غابدي، تصدر منتخب مينا مجموعته أمام مصر وجنوب إفريقيا ليبلغ أمم إفريقيا 2012.'
    ),
  }),
  mkQ({
    id: 'cur_NE_05',
    countryCode: 'NE',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'stade_general_seyni_kountche_niamey',
    source: 'FENIFOOT — Infrastructures de Niamey',
    prompt: L(
      'Comment s’appelle le grand stade national de 35 000 places situé à Niamey qui accueille les matchs à domicile du Mena ?',
      'What is the name of Niamey’s 35,000-seat national stadium that hosts the Mena’s home international matches?',
      '¿Cómo se llama el estadio nacional de Niamey con capacidad para 35.000 espectadores donde juega el Mena?',
      'Como se chama o estádio nacional de Niamey com 35 mil lugares onde joga a seleção do Mena?',
      'ما اسم الملعب الوطني الكبير في نيامي الذي يستضيف مباريات منتخب مينا الرسمية؟'
    ),
    countryModePrompt: L(
      'Quel grand stade de Niamey, inauguré en 1989 et nommé en hommage à un ancien chef d’État, accueille les rencontres internationales du Mena ?',
      'Which major stadium in Niamey, opened in 1989 and named after a former head of state, hosts the Mena’s home matches?',
      '¿Qué gran estadio de Niamey inaugurado en 1989 acoge los partidos internacionales del Mena?',
      'Qual grande estádio de Niamey inaugurado em 1989 recebe as partidas internacionais do Mena?',
      'ما اسم الملعب الرئيسي في نيامي الذي افتُتح عام 1989 ويستضيف مباريات منتخب مينا الدولية؟'
    ),
    correct: L('Le Stade Général-Seyni-Kountché', 'Stade Général-Seyni-Kountché', 'Estadio General Seyni Kountché', 'Estádio General Seyni Kountché', 'ملعب الجنرال سيني كونتشي'),
    distractors: [
      L('Le Stade Hamani-Diori', 'Stade Hamani-Diori', 'Estadio Hamani Diori', 'Estádio Hamani Diori', 'ملعب حماني ديوري'),
      L('Le Stade de l’Aïr', 'Stade de l’Aïr', 'Estadio del Aïr', 'Estádio de Aïr', 'ملعب آير'),
      L('Le Stade Boubou-Hama', 'Stade Boubou-Hama', 'Estadio Boubou Hama', 'Estádio Boubou Hama', 'ملعب بوبو هاما'),
    ],
    explanation: L(
      'Inauguré en 1989, le Stade Général-Seyni-Kountché accueille aussi bien le football que les grands rendez-vous de lutte traditionnelle et d’athlétisme.',
      'Opened in 1989, Stade Général-Seyni-Kountché serves as the main hub in Niamey for international football and major sporting events.',
      'Inaugurado en 1989, el Estadio General Seyni Kountché es el gran escenario deportivo de Niamey.',
      'Inaugurado em 1989, o Estádio General Seyni Kountché é o principal palco esportivo de Niamey.',
      'يستقبل ملعب الجنرال سيني كونتشي منذ افتتاحه عام 1989 أهم المباريات الدولية والبطولات الرياضية في نيامي.'
    ),
  }),
  mkQ({
    id: 'cur_NE_06',
    countryCode: 'NE',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'lutte_traditionnelle_sabre_national',
    source: 'Fédération nigérienne de lutte traditionnelle',
    prompt: L(
      'Quel trophée prestigieux récompense chaque année le vainqueur du championnat national de lutte traditionnelle nigérienne (« kokowa ») ?',
      'What prestigious trophy is awarded each year to the champion of the national traditional wrestling tournament ("kokowa")?',
      '¿Qué prestigioso trofeo premia cada año al campeón nacional de lucha tradicional ("kokowa")?',
      'Qual prestigioso troféu premia anualmente o campeão nacional de luta tradicional ("kokowa")?',
      'ما اسم الجائزة المرموقة التي يُتوج بها سنوياً بطل المصارعة التقليدية (كوكووا)؟'
    ),
    countryModePrompt: L(
      'Quel nom porte le trophée annuel le plus convoité de la lutte traditionnelle (« kokowa »), sport roi suivi avec passion dans toutes les régions ?',
      'What is the coveted annual trophy of traditional wrestling ("kokowa"), the country’s most passionately followed traditional sport?',
      '¿Cómo se llama el trofeo más codiciado de la lucha tradicional ("kokowa")?',
      'Como se chama o troféu mais cobiçado da luta tradicional ("kokowa") no país?',
      'ما اسم الكأس السنوية الأشهر التي يتنافس عليها أبطال المصارعة التقليدية (كوكووا) في مختلف الأقاليم؟'
    ),
    correct: L('Le Sabre national', 'The National Sabre', 'El Sable Nacional', 'O Sabre Nacional', 'السيف الوطني'),
    distractors: [
      L('La Lance d’Agadez', 'The Agadez Spear', 'La Lanza de Agadez', 'A Lança de Agadez', 'رمح أغاديز'),
      L('Le Bouclier du Ténéré', 'The Ténéré Shield', 'El Escudo del Teneré', 'O Escudo do Ténéré', 'درع تينيري'),
      L('La Couronne du Fleuve', 'The River Crown', 'La Corona del Río', 'A Coroa do Rio', 'تاج النهر'),
    ],
    explanation: L(
      'Créé en 1975, le tournoi du Sabre national rassemble les meilleurs lutteurs de chaque région dans une ferveur comparable à celle du football.',
      'Instituted in 1975, the Sabre National tournament brings together top wrestlers from every region in an atmosphere rivalling major football finals.',
      'Creado en 1975, el torneo del Sable Nacional reúne a los mejores luchadores de cada región del país.',
      'Criado em 1975, o torneio do Sabre Nacional reúne os melhores lutadores de cada região do país.',
      'انطلقت بطولة السيف الوطني عام 1975 لتجمع أقوى المصارعين من جميع الأقاليم في احتفالية رياضية وشعبية كبرى.'
    ),
  }),
  mkQ({
    id: 'cur_NE_07',
    countryCode: 'NE',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 1,
    topicKey: 'independance_3_aout_1960',
    source: 'Archives nationales du Niger — Fête de l’Indépendance',
    prompt: L(
      'À quelle date exacte le Niger a-t-il proclamé son indépendance vis-à-vis de la France en 1960 ?',
      'On what exact date in 1960 did Niger proclaim its independence from France?',
      '¿En qué fecha exacta de 1960 proclamó Níger su independencia de Francia?',
      'Em que data exata de 1960 o Níger proclamou sua independência da França?',
      'في أي تاريخ من عام 1960 أُعلن استقلال النيجر عن فرنسا؟'
    ),
    countryModePrompt: L(
      'À quelle date précise de l’année 1960 la République a-t-elle proclamé son indépendance, également célébrée aujourd’hui comme journée nationale de l’arbre ?',
      'On what exact date in 1960 did the Republic proclaim its independence, also celebrated today as National Tree Day?',
      '¿En qué fecha exacta de 1960 se proclamó la independencia, celebrada también como Día del Árbol?',
      'Em que data exata de 1960 foi proclamada a independência, celebrada também como Dia da Árvore?',
      'في أي تاريخ من عام 1960 أُعلن الاستقلال الوطني الذي يوافق أيضاً يوم الشجرة الوطني؟'
    ),
    correct: L('Le 3 août 1960', 'August 3, 1960', '3 de agosto de 1960', '3 de agosto de 1960', '3 أغسطس 1960'),
    distractors: [
      L('Le 1er août 1960', 'August 1, 1960', '1 de agosto de 1960', '1 de agosto de 1960', '1 أغسطس 1960'),
      L('Le 5 août 1960', 'August 5, 1960', '5 de agosto de 1960', '5 de agosto de 1960', '5 أغسطس 1960'),
      L('Le 18 décembre 1958', 'December 18, 1958', '18 de diciembre de 1958', '18 de dezembro de 1958', '18 ديسمبر 1958'),
    ],
    explanation: L(
      'Proclamée le 3 août 1960 par Hamani Diori, l’indépendance est commémorée chaque année par de vastes campagnes nationales de plantation d’arbres contre la désertification.',
      'Proclaimed on August 3, 1960, Independence Day is marked annually by nationwide tree-planting drives to combat desertification.',
      'Proclamada el 3 de agosto de 1960, la fecha se celebra también con campañas nacionales de reforestación.',
      'Proclamada em 3 de agosto de 1960, a data é celebrada anualmente com mutirões nacionais de plantio de árvores.',
      'أُعلن الاستقلال في 3 أغسطس 1960، ويُحتفل بهذه الذكرى سنوياً بحملات تشجير واسعة لمكافحة التصحر.'
    ),
  }),
  mkQ({
    id: 'cur_NE_08',
    countryCode: 'NE',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'hamani_diori_premier_president',
    source: 'Présidence de la République — 1960',
    prompt: L(
      'Qui devint le tout premier président de la République du Niger indépendant en 1960 ?',
      'Who became the very first President of independent Niger in 1960?',
      '¿Quién fue el primer presidente del Níger independiente en 1960?',
      'Quem foi o primeiro presidente do Níger independente em 1960?',
      'من كان أول رئيس لجمهورية النيجر المستقلة عام 1960؟'
    ),
    countryModePrompt: L(
      'Quel ancien instituteur et dirigeant du Parti progressiste (PPN-RDA) fut élu premier président de la République en 1960 ?',
      'Which former schoolteacher and leader of the Progressive Party (PPN-RDA) became the first president of the Republic in 1960?',
      '¿Qué antiguo maestro y líder del partido PPN-RDA se convirtió en el primer presidente de la República en 1960?',
      'Qual ex-professor e líder do partido PPN-RDA tornou-se o primeiro presidente da República em 1960?',
      'أي معلم سابق وزعيم للحزب التقدمي تولى منصب أول رئيس للجمهورية عند الاستقلال عام 1960؟'
    ),
    correct: L('Hamani Diori', 'Hamani Diori', 'Hamani Diori', 'Hamani Diori', 'حماني ديوري'),
    distractors: [
      L('Seyni Kountché', 'Seyni Kountché', 'Seyni Kountché', 'Seyni Kountché', 'سيني كونتشي'),
      L('Ali Saïbou', 'Ali Saïbou', 'Ali Saïbou', 'Ali Saïbou', 'علي سايبو'),
      L('Mahamane Ousmane', 'Mahamane Ousmane', 'Mahamane Ousmane', 'Mahamane Ousmane', 'ماهامان عثمان'),
    ],
    explanation: L(
      'Né à Soudouré près de Niamey, Hamani Diori dirigea le pays de 1960 à 1974 et contribua activement à la naissance de la Francophonie en 1970.',
      'Born near Niamey, Hamani Diori served as president from 1960 to 1974 and played a key role in founding the Francophonie movement in Niamey in 1970.',
      'Nacido cerca de Niamey, Hamani Diori gobernó entre 1960 y 1974 e impulsó la creación de la Francofonía.',
      'Nascido perto de Niamey, Hamani Diori presidiu o país de 1960 a 1974 e ajudou a fundar a Francofonia.',
      'قاد حماني ديوري البلاد من 1960 إلى 1974 وأسهم في تأسيس منظمة الفرنكوفونية في نيامي عام 1970.'
    ),
  }),
  mkQ({
    id: 'cur_NE_09',
    countryCode: 'NE',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'djibo_bakary_sawaba',
    source: 'Histoire politique — Mouvement Sawaba (1958)',
    prompt: L(
      'Quel leader syndicaliste et fondateur du mouvement Sawaba mena la campagne pour le « Non » au référendum de 1958 afin d’exiger l’indépendance immédiate du Niger ?',
      'Which union leader and founder of the Sawaba movement campaigned for a "No" vote in the 1958 referendum to demand immediate independence?',
      '¿Qué líder sindical y fundador del movimiento Sawaba hizo campaña por el "No" en el referéndum de 1958 para exigir la independencia inmediata?',
      'Qual líder sindical e fundador do movimento Sawaba liderou a campanha pelo "Não" em 1958 pela independência imediata?',
      'أي زعيم نقابي ومؤسس لحركة ساوابا قاد حملة التصويت بـ"لا" في استفتاء 1958 للمطالبة بالاستقلال الفوري؟'
    ),
    countryModePrompt: L(
      'Quel dirigeant du mouvement Sawaba et maire de Niamey milita pour le « Non » dès 1958 en réclamant l’indépendance immédiate ?',
      'Which Sawaba movement leader and mayor of Niamey campaigned for immediate independence with a "No" vote in 1958?',
      '¿Qué líder del movimiento Sawaba y alcalde de Niamey defendió el "No" en 1958 exigiendo independencia inmediata?',
      'Qual líder do movimento Sawaba e prefeito de Niamey defendeu o "Não" em 1958 pela independência imediata?',
      'أي زعيم لحركة ساوابا وعمدة لنيامي طالب بالاستقلال الفوري عبر التصويت بـ"لا" عام 1958؟'
    ),
    correct: L('Djibo Bakary', 'Djibo Bakary', 'Djibo Bakary', 'Djibo Bakary', 'جيبو باكاري'),
    distractors: [
      L('Boubou Hama', 'Boubou Hama', 'Boubou Hama', 'Boubou Hama', 'بوبو هاما'),
      L('Ibrahim Baré Maïnassara', 'Ibrahim Baré Maïnassara', 'Ibrahim Baré Maïnassara', 'Ibrahim Baré Maïnassara', 'إبراهيم باري مايناسارا'),
      L('Moumouni Adamou Djermakoye', 'Moumouni Adamou Djermakoye', 'Moumouni Adamou Djermakoye', 'Moumouni Adamou Djermakoye', 'موموني أدامو جيرماكوي'),
    ],
    explanation: L(
      'Aux côtés de Sékou Touré en Guinée, Djibo Bakary fut l’une des grandes figures ouest-africaines du courant indépendantiste radical avant de rentrer d’exil en 1974.',
      'Alongside Guinea’s Sékou Touré, Djibo Bakary became a major voice for immediate decolonization in West Africa through the Sawaba party.',
      'Junto a Sékou Touré en Guinea, Djibo Bakary encabezó la corriente por la independencia inmediata en 1958.',
      'Ao lado de Sékou Touré, Djibo Bakary foi uma das grandes vozes pela independência imediata na África Ocidental.',
      'مثل جيبو باكاري وحركة ساوابا تيار الاستقلال الفوري في غرب إفريقيا خلال استفتاء عام 1958.'
    ),
  }),
  mkQ({
    id: 'cur_NE_10',
    countryCode: 'NE',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'boubou_hama_ecrivain_historien',
    source: 'Académie & Littérature — Grand Prix littéraire d’Afrique noire',
    prompt: L(
      'Quel érudit, historien et premier président de l’Assemblée nationale du Niger a remporté le Grand Prix littéraire d’Afrique noire en 1970 pour « Kotia-Nima » ?',
      'Which scholar, historian, and first President of Niger’s National Assembly won the 1970 Grand Prix littéraire d’Afrique noire for "Kotia-Nima"?',
      '¿Qué erudito, historiador y primer presidente de la Asamblea Nacional ganó en 1970 el Gran Premio Literario de África Negra por "Kotia-Nima"?',
      'Qual erudito, historiador e primeiro presidente da Assembleia Nacional venceu em 1970 o Grande Prêmio Literário da África Negra por "Kotia-Nima"?',
      'أي مؤرخ ومفكر وأول رئيس للجمعية الوطنية فاز بالجائزة الأدبية الكبرى لإفريقيا السوداء عام 1970 عن كتاب "كوتيا نيما"؟'
    ),
    countryModePrompt: L(
      'Quel penseur et ancien président de l’Assemblée nationale lauréat du Grand Prix littéraire d’Afrique noire pour « Kotia-Nima » a laissé son nom au musée national de Niamey ?',
      'Which scholar, author of "Kotia-Nima", and former National Assembly speaker gave his name to the National Museum in Niamey?',
      '¿Qué escritor de "Kotia-Nima" y expresidente de la Asamblea Nacional da nombre al Museo Nacional de Niamey?',
      'Qual escritor de "Kotia-Nima" e ex-presidente da Assembleia Nacional dá nome ao Museu Nacional de Niamey?',
      'أي مفكر ومؤلف لكتاب "كوتيا نيما" يحمل المتحف الوطني في نيامي اسمه؟'
    ),
    correct: L('Boubou Hama', 'Boubou Hama', 'Boubou Hama', 'Boubou Hama', 'بوبو هاما'),
    distractors: [
      L('Abdoulaye Mamani', 'Abdoulaye Mamani', 'Abdoulaye Mamani', 'Abdoulaye Mamani', 'عبد الله ماماني'),
      L('Idé Oumarou', 'Idé Oumarou', 'Idé Oumarou', 'Idé Oumarou', 'إيدي عمر'),
      L('André Salifou', 'André Salifou', 'André Salifou', 'André Salifou', 'أندريه ساليفو'),
    ],
    explanation: L(
      'Auteur de plus de quarante ouvrages sur l’oralité songhaï-zarma et la philosophie africaine, Boubou Hama a donné son nom au Musée national de Niamey.',
      'Author of dozens of works on Songhai-Zarma history and oral heritage, Boubou Hama is honoured by Niamey’s National Museum bearing his name.',
      'Autor de decenas de obras sobre historia y tradición oral, Boubou Hama da nombre al Museo Nacional de Niamey.',
      'Autor de dezenas de obras sobre história e oralidade, Boubou Hama dá nome ao Museu Nacional de Niamey.',
      'ألف بوبو هاما عشرات الكتب في التاريخ والفكر الإفريقي وسُمي باسمه المتحف الوطني في نيامي.'
    ),
  }),
  mkQ({
    id: 'cur_NE_11',
    countryCode: 'NE',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'seyni_kountche_1974_1987',
    source: 'Archives contemporaines — 1974-1987',
    prompt: L(
      'Quel officier dirigea le Conseil militaire suprême au Niger de 1974 jusqu’à sa mort en 1987 après la grande sécheresse du Sahel ?',
      'Which military leader headed Niger’s Supreme Military Council from 1974 until his death in 1987 following the severe Sahel drought?',
      '¿Qué oficial dirigió el Consejo Militar Supremo de Níger desde 1974 hasta su fallecimiento en 1987?',
      'Qual oficial presidiu o Conselho Militar Supremo do Níger de 1974 até seu falecimento em 1987?',
      'أي ضابط قاد المجلس العسكري الأعلى في النيجر من عام 1974 حتى وفاته عام 1987؟'
    ),
    countryModePrompt: L(
      'Quel chef d’État dirigea le pays de 1974 à 1987 en mettant l’accent sur l’autosuffisance alimentaire, la discipline administrative et la lutte contre la famine ?',
      'Which head of state governed from 1974 to 1987 with a strong focus on food self-sufficiency and drought relief?',
      '¿Qué jefe de Estado gobernó de 1974 a 1987 priorizando la autosuficiencia alimentaria y el alivio de la sequía?',
      'Qual chefe de Estado governou de 1974 a 1987 priorizando a autossuficiência alimentar e o combate à fome?',
      'أي رئيس حكم البلاد بين 1974 و1987 مركزاً على الاكتفاء الذاتي الغذائي ومواجهة الجفاف؟'
    ),
    correct: L('Seyni Kountché', 'Seyni Kountché', 'Seyni Kountché', 'Seyni Kountché', 'سيني كونتشي'),
    distractors: [
      L('Ali Saïbou', 'Ali Saïbou', 'Ali Saïbou', 'Ali Saïbou', 'علي سايبو'),
      L('Tandja Mamadou', 'Tandja Mamadou', 'Tandja Mamadou', 'Tandja Mamadou', 'تاندجا مامادو'),
      L('Salou Djibo', 'Salou Djibo', 'Salou Djibo', 'Salou Djibo', 'سالو جيبو'),
    ],
    explanation: L(
      'Arrivé au pouvoir lors de la sécheresse de 1974, Seyni Kountché réorganisa les réserves céréalières nationales et les routes, avant que son nom ne soit donné au grand stade de Niamey.',
      'Taking office during the 1974 drought, Seyni Kountché expanded grain reserves and rural infrastructure before his death in 1987.',
      'Llegado al poder durante la sequía de 1974, Seyni Kountché impulsó las reservas nacionales de grano.',
      'Assumindo durante a seca de 1974, Seyni Kountché fortaleceu estoques de grãos e obras de infraestrutura.',
      'سعى سيني كونتشي منذ 1974 إلى تأمين مخزون الحبوب ومواجهة آثار الجفاف حتى وفاته عام 1987.'
    ),
  }),
  mkQ({
    id: 'cur_NE_12',
    countryCode: 'NE',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 3,
    topicKey: 'conference_nationale_1991_andre_salifou',
    source: 'Histoire constitutionnelle — 1991',
    prompt: L(
      'Quel historien et homme politique a présidé la Conférence nationale souveraine du Niger en 1991, ouvrant la voie au multipartisme ?',
      'Which historian and statesman chaired Niger’s 1991 Sovereign National Conference that ushered in multiparty democracy?',
      '¿Qué historiador y político presidió en 1991 la Conferencia Nacional Soberana de Níger que abrió paso al multipartidismo?',
      'Qual historiador e político presidiu em 1991 a Conferência Nacional Soberana do Níger rumo ao multipartidarismo?',
      'أي مؤرخ وسياسي ترأس المؤتمر الوطني السيادي للنيجر عام 1991 ممهداً للتعددية الحزبية؟'
    ),
    countryModePrompt: L(
      'Quel historien et écrivain zinderois a présidé les travaux de la Conférence nationale souveraine de 1991 qui instaura le multipartisme ?',
      'Which Zinder-born historian and writer presided over the landmark 1991 Sovereign National Conference?',
      '¿Qué historiador nacido en Zinder presidió en 1991 la histórica Conferencia Nacional Soberana?',
      'Qual historiador nascido em Zinder presidiu em 1991 a histórica Conferência Nacional Soberana?',
      'أي مؤرخ من مواليد زيندر ترأس أعمال المؤتمر الوطني السيادي التاريخي عام 1991؟'
    ),
    correct: L('André Salifou', 'André Salifou', 'André Salifou', 'André Salifou', 'أندريه ساليفو'),
    distractors: [
      L('Amadou Cheiffou', 'Amadou Cheiffou', 'Amadou Cheiffou', 'Amadou Cheiffou', 'أمادو شيفو'),
      L('Hama Amadou', 'Hama Amadou', 'Hama Amadou', 'Hama Amadou', 'حما أمادو'),
      L('Adamou Moumouni', 'Adamou Moumouni', 'Adamou Moumouni', 'Adamou Moumouni', 'أدامو موموني'),
    ],
    explanation: L(
      'Originaire de Zinder et spécialiste du sultanat du Damagaram, André Salifou a conduit avec autorité les débats de 1991 qui aboutirent à la Constitution de la IIIe République.',
      'A scholar of the Damagaram Sultanate, André Salifou steered the 1991 Sovereign National Conference that paved the way for 1993 elections.',
      'Especialista en el sultanato de Damagaram, André Salifou dirigió en 1991 los debates hacia la nueva Constitución.',
      'Estudioso do sultanato de Damagaram, André Salifou conduziu os debates da Conferência Nacional de 1991.',
      'أدار المؤرخ أندريه ساليفو جلسات المؤتمر الوطني السيادي عام 1991 الذي أرسى أسس التعددية السياسية.'
    ),
  }),
  mkQ({
    id: 'cur_NE_13',
    countryCode: 'NE',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 3,
    topicKey: 'sultanat_damagaram_zinder',
    source: 'Histoire précoloniale du Sahel central',
    prompt: L(
      'Quelle grande cité historique du sud-est du Niger, ancienne capitale du puissant sultanat du Damagaram et première capitale coloniale jusqu’en 1926, reste célèbre pour son quartier du Birni ?',
      'Which historic southeastern city, seat of the Damagaram Sultanate and Niger’s colonial capital until 1926, is famed for its old Birni quarter?',
      '¿Qué ciudad histórica del sureste de Níger, sede del sultanato de Damagaram y capital colonial hasta 1926, es célebre por su barrio de Birni?',
      'Qual cidade histórica do sudeste do Níger, sede do sultanato de Damagaram e capital colonial até 1926, é famosa pelo bairro de Birni?',
      'أي مدينة تاريخية في جنوب شرق النيجر كانت عاصمة سلطنة دامغارام وأول عاصمة للبلاد حتى عام 1926؟'
    ),
    countryModePrompt: L(
      'Quelle ville historique abritant le palais du sultan du Damagaram fut la première capitale administrative jusqu’au transfert à Niamey en 1926 ?',
      'Which historic city housing the Sultan of Damagaram’s palace served as the administrative capital until Niamey replaced it in 1926?',
      '¿Qué ciudad histórica que alberga el palacio del sultán de Damagaram fue capital hasta 1926?',
      'Qual cidade histórica que abriga o palácio do sultão de Damagaram foi a capital até 1926?',
      'أي مدينة تاريخية تحتضن قصر سلطان دامغارام وكانت العاصمة الإدارية قبل انتقالها إلى نيامي عام 1926؟'
    ),
    correct: L('Zinder', 'Zinder', 'Zinder', 'Zinder', 'زيندر'),
    distractors: [
      L('Maradi', 'Maradi', 'Maradi', 'Maradi', 'مارادي'),
      L('Tahoua', 'Tahoua', 'Tahoua', 'Tahoua', 'تاهوا'),
      L('Dosso', 'Dosso', 'Dosso', 'Dosso', 'دوسو'),
    ],
    explanation: L(
      'Fortifiée au XIXe siècle sous le sultan Tanimoune dan Suleyman, Zinder rayonna comme carrefour caravanier du Sahel avant que Niamey ne devienne capitale en 1926.',
      'Fortified in the 19th century by Sultan Tanimoun, Zinder flourished as a major Saharan crossroads before Niamey became capital in 1926.',
      'Fortificada en el siglo XIX por el sultán Tanimoun, Zinder fue un próspero enclave comercial hasta que Niamey asumió la capitalidad.',
      'Fortificada no século XIX pelo sultão Tanimoun, Zinder prosperou como encruzilhada comercial antes de Niamey.',
      'ازدهرت زيندر في القرن التاسع عشر عاصمةً لسلطنة دامغارام وظلت العاصمة الإدارية حتى نقلها إلى نيامي عام 1926.'
    ),
  }),
  mkQ({
    id: 'cur_NE_14',
    countryCode: 'NE',
    category: 'history',
    subCategory: 'patrimoine_tourisme',
    difficulty: 4,
    topicKey: 'civilisation_bura_terres_cuites',
    source: 'Archéologie du fleuve Niger — Vallée de Bura-Asinda',
    prompt: L(
      'Quel site archéologique du sud-ouest du Niger, daté entre le IIIe et le XIIIe siècle, a livré d’extraordinaires statuettes funéraires en terre cuite représentant des cavaliers ?',
      'Which southwestern Niger archaeological site dated from the 3rd to 13th centuries yielded remarkable terracotta figurines of mounted horsemen?',
      '¿Qué yacimiento arqueológico del suroeste de Níger, datado entre los siglos III y XIII, reveló singulares figurillas funerarias de jinetes en terracota?',
      'Qual sítio arqueológico do sudoeste do Níger, datado entre os séculos III e XIII, revelou notáveis estatuetas de cavaleiros em terracota?',
      'أي موقع أثري جنوب غرب النيجر يعود ما بين القرنين الثالث والثالث عشر واشتهر بتماثيل الفرسان الفخارية؟'
    ),
    countryModePrompt: L(
      'Quelle civilisation archéologique de la région de Téra (IIIe–XIIIe siècle) est célèbre pour ses urnes funéraires surmontées de cavaliers en terre cuite ?',
      'Which archaeological culture near Téra (3rd–13th century) is renowned for its terracotta funerary urns topped with equestrian statues?',
      '¿Qué cultura arqueológica de la región de Téra destaca por sus urnas funerarias coronadas por jinetes de terracota?',
      'Qual cultura arqueológica da região de Téra destaca-se por suas urnas funerárias com cavaleiros em terracota?',
      'أي حضارة أثرية في منطقة تيرا اشتهرت بجرارها الجنائزية المزينة بتماثيل الفرسان الفخارية؟'
    ),
    correct: L('La civilisation de Bura', 'The Bura culture', 'La cultura de Bura', 'A cultura de Bura', 'حضارة بورا'),
    distractors: [
      L('La civilisation de Sao', 'The Sao culture', 'La cultura Sao', 'A cultura Sao', 'حضارة الساو'),
      L('La civilisation de Nok', 'The Nok culture', 'La cultura Nok', 'A cultura Nok', 'حضارة نوك'),
      L('La civilisation de Kerma', 'The Kerma culture', 'La cultura de Kerma', 'A cultura de Kerma', 'حضارة كرمة'),
    ],
    explanation: L(
      'Découverts en 1975 dans la vallée de Bura-Asinda-Sikka, les cavaliers en terre cuite de Bura attestent d’une brillante maîtrise artistique et métallurgique du haut Moyen Âge ouest-africain.',
      'Unearthed from 1975 onward in the Bura valley, these terracotta horsemen reveal sophisticated medieval West African iron-age artistry.',
      'Descubiertas en 1975 en el valle de Bura, estas esculturas de terracota revelan un refinado arte funerario medieval.',
      'Descobertas em 1975 no vale de Bura, essas peças de terracota revelam uma notável arte medieval na região.',
      'تُبرز تماثيل بورا الفخارية المكتشفة منذ عام 1975 رقي الفنون الجنائزية في غرب إفريقيا خلال العصور الوسطى.'
    ),
  }),
  mkQ({
    id: 'cur_NE_15',
    countryCode: 'NE',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'mano_dayak_tenere_touareg',
    source: 'Mémoire saharienne — Agadez',
    prompt: L(
      'Quel célèbre écrivain, guide du Ténéré et chef touareg né dans l’Aïr a écrit « Touareg, la tragédie » avant de disparaître tragiquement en 1995 ?',
      'Which renowned Aïr-born Tuareg writer, Ténéré guide, and leader authored "Touareg, la tragédie" before dying in 1995?',
      '¿Qué célebre escritor y guía del Teneré nacido en Aïr escribió "Touareg, la tragédie"?',
      'Qual célebre escritor e guia do Ténéré nascido em Aïr escreveu "Touareg, la tragédie"?',
      'أي كاتب ودليل صحراوي وزعيم طارقي من جبال آير ألف كتاب "الطوارق، المأساة" قبل وفاته عام 1995؟'
    ),
    countryModePrompt: L(
      'Quel guide saharien natif de la vallée de Tiden et auteur de « Touareg, la tragédie » a donné son nom à l’aéroport international d’Agadez ?',
      'Which Tiden Valley-born desert guide and author of "Touareg, la tragédie" gave his name to Agadez International Airport?',
      '¿Qué guía sahariano y autor de "Touareg, la tragédie" da nombre al aeropuerto internacional de Agadez?',
      'Qual guia saariano e autor de "Touareg, la tragédie" dá nome ao aeroporto internacional de Agadez?',
      'أي دليل صحراوي ومؤلف لكتاب "الطوارق، المأساة" يحمل مطار أغاديز الدولي اسمه؟'
    ),
    correct: L('Mano Dayak', 'Mano Dayak', 'Mano Dayak', 'Mano Dayak', 'مانو داياك'),
    distractors: [
      L('Rhissa Ag Boula', 'Rhissa Ag Boula', 'Rhissa Ag Boula', 'Rhissa Ag Boula', 'ريسا أغ بولا'),
      L('Hawad', 'Hawad', 'Hawad', 'Hawad', 'هواد'),
      L('Mahmoudan Hawad', 'Mahmoudan Hawad', 'Mahmoudan Hawad', 'Mahmoudan Hawad', 'محمودان هواد'),
    ],
    explanation: L(
      'Figure charismatique de l’Aïr et médiateur des accords de paix de 1995, Mano Dayak a fait connaître la beauté du Ténéré et de son peuple à travers ses récits.',
      'A respected voice of the Aïr mountains and 1995 peace negotiations, Mano Dayak is commemorated by Agadez’s Mano Dayak International Airport.',
      'Figura emblemática de las montañas de Aïr, Mano Dayak da nombre al aeropuerto internacional de Agadez.',
      'Figura emblemática das montanhas de Aïr, Mano Dayak dá nome ao aeroporto internacional de Agadez.',
      'خلّد مطار أغاديز الدولي اسم الكاتب والدليل الصحراوي البارز مانو داياك تكريماً لإرثه الثقافي والسلمي.'
    ),
  }),
  mkQ({
    id: 'cur_NE_16',
    countryCode: 'NE',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'ide_oumarou_diplomate_oua_ecrivain',
    source: 'OUA & Littérature francophone',
    prompt: L(
      'Quel diplomate et romancier nigérien, auteur de « Gros Plan », a été élu Secrétaire général de l’Organisation de l’unité africaine (OUA) de 1985 à 1989 ?',
      'Which Nigerien diplomat and novelist, author of "Gros Plan", served as Secretary-General of the Organization of African Unity (OAU) from 1985 to 1989?',
      '¿Qué diplomático y novelista de Níger, autor de "Gros Plan", fue secretario general de la OUA entre 1985 y 1989?',
      'Qual diplomata e romancista do Níger, autor de "Gros Plan", foi secretário-geral da OUA entre 1985 e 1989?',
      'أي دبلوماسي وروائي نيجري، مؤلف رواية "لقطة مقربة"، شغل منصب الأمين العام لمنظمة الوحدة الإفريقية بين 1985 و1989؟'
    ),
    countryModePrompt: L(
      'Quel ancien ministre des Affaires étrangères et auteur du roman « Gros Plan » a dirigé le secrétariat général de l’OUA entre 1985 et 1989 ?',
      'Which former foreign minister and author of the novel "Gros Plan" served as OAU Secretary-General from 1985 to 1989?',
      '¿Qué exministro de Exteriores y autor de "Gros Plan" dirigió la secretaría general de la OUA de 1985 a 1989?',
      'Qual ex-chanceler e autor do romance "Gros Plan" chefiou a secretaria-geral da OUA de 1985 a 1989?',
      'أي وزير خارجية سابق وروائي ألف كتاب "لقطة مقربة" وتولى الأمانة العامة لمنظمة الوحدة الإفريقية من 1985 إلى 1989؟'
    ),
    correct: L('Idé Oumarou', 'Idé Oumarou', 'Idé Oumarou', 'Idé Oumarou', 'إيدي عمر'),
    distractors: [
      L('Edem Kodjo', 'Edem Kodjo', 'Edem Kodjo', 'Edem Kodjo', 'إيديم كودجو'),
      L('Diallo Telli', 'Diallo Telli', 'Diallo Telli', 'Diallo Telli', 'ديالو تيلي'),
      L('Salim Ahmed Salim', 'Salim Ahmed Salim', 'Salim Ahmed Salim', 'Salim Ahmed Salim', 'سليم أحمد سليم'),
    ],
    explanation: L(
      'Premier lauréat nigérien du Grand Prix littéraire d’Afrique noire pour « Gros Plan » en 1978, Idé Oumarou a ensuite porté la voix de l’Afrique à la tête de l’OUA.',
      'Awarded the Grand Prix littéraire d’Afrique noire for "Gros Plan", Idé Oumarou later led the OAU Secretariat in Addis Ababa.',
      'Premiado por su novela "Gros Plan", Idé Oumarou encabezó posteriormente la Secretaría General de la OUA.',
      'Premiado pelo romance "Gros Plan", Idé Oumarou liderou posteriormente a Secretaria-Geral da OUA.',
      'جمع إيدي عمر بين التألق الأدبي بنيل جائزة إفريقيا السوداء والدبلوماسية القارية على رأس منظمة الوحدة الإفريقية.'
    ),
  }),
  mkQ({
    id: 'cur_NE_17',
    countryCode: 'NE',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 3,
    topicKey: 'fete_republique_18_decembre_1958',
    source: 'Archives constitutionnelles — République du Niger',
    prompt: L(
      'Que commémore-t-on chaque année au Niger lors de la grande fête officielle du 18 décembre ?',
      'What historic milestone does Niger commemorate every year on December 18?',
      '¿Qué acontecimiento histórico conmemora Níger cada 18 de diciembre?',
      'Qual marco histórico o Níger comemora anualmente em 18 de dezembro?',
      'ماذا يُحيي النيجر سنوياً في الثامن عشر من ديسمبر؟'
    ),
    countryModePrompt: L(
      'Quel événement fondateur survenu en 1958 célèbre-t-on chaque année lors de la fête du 18 décembre, accueillie à tour de rôle par chaque région ?',
      'Which foundational 1958 milestone is celebrated annually on December 18 through rotating regional festivities?',
      '¿Qué hito fundador de 1958 se celebra cada 18 de diciembre de forma rotatoria en las regiones del país?',
      'Qual marco fundador de 1958 é celebrado todo dia 18 de dezembro em rodízio pelas regiões do país?',
      'أي حدث تأسيسي من عام 1958 يُحتفى به سنوياً في 18 ديسمبر بالتناوب بين أقاليم البلاد؟'
    ),
    correct: L('La proclamation de la République en 1958', 'The proclamation of the Republic in 1958', 'La proclamación de la República en 1958', 'A proclamação da República em 1958', 'إعلان الجمهورية عام 1958'),
    distractors: [
      L('La signature de la paix de Zinder', 'The Peace of Zinder', 'La paz de Zinder', 'A paz de Zinder', 'صلح زيندر'),
      L('L’ouverture du premier pont sur le fleuve', 'Opening of the first river bridge', 'Apertura del primer puente fluvial', 'Abertura da primeira ponte fluvial', 'افتتاح أول جسر على النهر'),
      L('La découverte de l’uranium à Arlit', 'Discovery of uranium at Arlit', 'Descubrimiento de uranio en Arlit', 'Descoberta de urânio em Arlit', 'اكتشاف اليورانيوم في أرليت'),
    ],
    explanation: L(
      'Le 18 décembre 1958 marque la proclamation de la République autonome ; depuis les années 2000, cette fête stimule de grands aménagements dans la ville hôte (« 18 décembre tournant »).',
      'December 18 marks the 1958 proclamation of the Republic and rotates across regional capitals each year to spur local infrastructure.',
      'El 18 de diciembre conmemora la proclamación de la República en 1958 y rota cada año por las capitales regionales.',
      'O 18 de dezembro celebra a proclamação da República em 1958 e promove obras nas capitais regionais anfitriãs.',
      'يخلد يوم 18 ديسمبر ذكرى إعلان الجمهورية عام 1958 وتستضيفه عاصمة إقليمية مختلفة كل عام.'
    ),
  }),
  mkQ({
    id: 'cur_NE_18',
    countryCode: 'NE',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'abdoulaye_mamani_sarraounia_roman',
    source: 'Littérature africaine — L’Harmattan (1980)',
    prompt: L(
      'Quel poète, journaliste et syndicaliste natif de Goudoumaria a immortalisé la résistance de la reine des Azna dans son roman historique « Sarraounia » (1980) ?',
      'Which poet and journalist from Goudoumaria immortalized the Azna queen’s resistance in his 1980 historical novel "Sarraounia"?',
      '¿Qué poeta y periodista nacido en Goudoumaria inmortalizó la resistencia de la reina azna en la novela "Sarraounia" (1980)?',
      'Qual poeta e jornalista nascido em Goudoumaria imortalizou a resistência da rainha azna no romance "Sarraounia" (1980)?',
      'أي شاعر وصحفي من غودوماريا خلد مقاومة الملكة ساراونيا في روايته التاريخية عام 1980؟'
    ),
    countryModePrompt: L(
      'Quel écrivain originaire de Goudoumaria publia en 1980 le célèbre roman historique « Sarraounia », porté à l’écran par Med Hondo ?',
      'Which Goudoumaria-born author published the celebrated 1980 historical novel "Sarraounia", later adapted into an award-winning film?',
      '¿Qué escritor oriundo de Goudoumaria publicó en 1980 la novela histórica "Sarraounia"?',
      'Qual escritor natural de Goudoumaria publicou em 1980 o célebre romance histórico "Sarraounia"?',
      'أي أديب من مواليد غودوماريا أصدر عام 1980 الرواية التاريخية الشهيرة "ساراونيا"؟'
    ),
    correct: L('Abdoulaye Mamani', 'Abdoulaye Mamani', 'Abdoulaye Mamani', 'Abdoulaye Mamani', 'عبد الله ماماني'),
    distractors: [
      L('Mahamadou Halilou Sabbo', 'Mahamadou Halilou Sabbo', 'Mahamadou Halilou Sabbo', 'Mahamadou Halilou Sabbo', 'محمدو هاليلو سابو'),
      L('Adamou Idé', 'Adamou Idé', 'Adamou Idé', 'Adamou Idé', 'أدامو إيدي'),
      L('Hawad', 'Hawad', 'Hawad', 'Hawad', 'هواد'),
    ],
    explanation: L(
      'Engagé dans les luttes d’indépendance dès les années 1950, Abdoulaye Mamani fit revivre le combat de 1899 contre la colonne Voulet-Chanoine dans une œuvre devenue classique.',
      'A veteran activist and poet, Abdoulaye Mamani brought the 1899 resistance of Queen Sarraounia to worldwide readers in 1980.',
      'Activista y poeta, Abdoulaye Mamani dio proyección mundial a la gesta de 1899 en su novela "Sarraounia".',
      'Ativista e poeta, Abdoulaye Mamani levou ao mundo a epopeia de 1899 em seu romance "Sarraounia".',
      'أحيا الشاعر والروائي عبد الله ماماني ملحمة مقاومة 1899 في روايته الخالدة "ساراونيا".'
    ),
  }),
  mkQ({
    id: 'cur_NE_19',
    countryCode: 'NE',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'centre_historique_agadez_unesco',
    source: 'UNESCO — Liste du patrimoine mondial (2013)',
    prompt: L(
      'Quelle cité caravanière du Niger, porte du désert célèbre pour sa Grande Mosquée au minaret pyramidal en banco de 27 mètres, est inscrite au patrimoine mondial de l’UNESCO depuis 2013 ?',
      'Which caravan crossroads city in Niger, famed for its 27-metre pyramidal mud-brick Great Mosque minaret, was listed by UNESCO in 2013?',
      '¿Qué ciudad caravanera de Níger, célebre por el minarete piramidal de adobe de 27 metros de su Gran Mezquita, es Patrimonio de la UNESCO desde 2013?',
      'Qual cidade caravaneira do Níger, célebre pelo minarete piramidal de barro de 27 metros de sua Grande Mesquita, é Patrimônio da UNESCO desde 2013?',
      'أي مدينة قوافل صحراوية في النيجر تشتهر بمئذنة مسجدها الكبير الطينية الهرمية (27 متراً) والمصنفة لدى اليونسكو منذ 2013؟'
    ),
    countryModePrompt: L(
      'Quel centre historique saharien, dominé par le minaret pyramidal en terre crue de sa Grande Mosquée haute de 27 mètres, figure à l’UNESCO depuis 2013 ?',
      'Which historic desert crossroads, dominated by a 27-metre pyramidal mud-brick Great Mosque minaret, earned UNESCO World Heritage status in 2013?',
      '¿Qué centro histórico del desierto dominado por un minarete piramidal de adobe de 27 metros ingresó en la UNESCO en 2013?',
      'Qual centro histórico desértico dominado por um minarete piramidal de adobe de 27 metros entrou na UNESCO em 2013?',
      'أي مدينة تاريخية تهيمن عليها مئذنة طينية هرمية بارتفاع 27 متراً وأُدرجت في اليونسكو عام 2013؟'
    ),
    correct: L('Agadez', 'Agadez', 'Agadez', 'Agadez', 'أغاديز'),
    distractors: [
      L('Bilma', 'Bilma', 'Bilma', 'Bilma', 'بيلما'),
      L('Arlit', 'Arlit', 'Arlit', 'Arlit', 'أرليت'),
      L('Diffa', 'Diffa', 'Diffa', 'Diffa', 'ديفا'),
    ],
    explanation: L(
      'Bâtie en pisé hérissé de perches de bois (toron) permettant l’entretien annuel, la Grande Mosquée d’Agadez est l’une des plus hautes structures en terre crue d’Afrique.',
      'Built of banco mud brick studded with timber scaffolding poles, Agadez’s Great Mosque rises 27 metres as a masterpiece of Saharan architecture.',
      'Construida en adobe con vigas sobresalientes para su mantenimiento, la Gran Mezquita de Agadez es joya de la arquitectura sahariana.',
      'Construída em barro com vigas salientes, a Grande Mesquita de Agadez é obra-prima da arquitetura saariana.',
      'تُعد مئذنة الجامع الكبير في أغاديز البالغ ارتفاعها 27 متراً من أروع روائع العمارة الطينية في الصحراء الكبرى.'
    ),
  }),
  mkQ({
    id: 'cur_NE_20',
    countryCode: 'NE',
    category: 'geography',
    subCategory: 'anecdotes_insolites',
    difficulty: 2,
    topicKey: 'arbre_du_tenere_legende',
    source: 'Musée national Boubou-Hama — Niamey',
    prompt: L(
      'Quel acacia mythique, longtemps considéré comme « l’arbre le plus isolé de la Terre » au milieu des dunes du Niger à plus de 400 km de tout autre arbre, est conservé dans un mausolée à Niamey depuis 1973 ?',
      'Which legendary acacia in Niger, once called "the most isolated tree on Earth" more than 400 km from any other tree, has been preserved in Niamey since 1973?',
      '¿Qué mítica acacia de Níger, considerada "el árbol más aislado de la Tierra", se conserva en Niamey desde 1973?',
      'Qual acácia lendária do Níger, chamada de "a árvore mais isolada da Terra", é preservada em Niamey desde 1973?',
      'أي شجرة سنط أسطورية كانت تُعرف بـ"أكثر شجرة معزولة على وجه الأرض" في الصحراء ويُحفظ جذعها في نيامي منذ 1973؟'
    ),
    countryModePrompt: L(
      'Comment appelait-on le célèbre acacia solitaire qui servait de repère millénaire aux caravanes en plein désert avant d’être percuté en 1973 et remplacé par une sculpture métallique ?',
      'What was the name of the famous lone desert acacia that guided caravans for centuries before being struck in 1973 and preserved in Niamey?',
      '¿Cómo se llamaba la célebre acacia solitaria que guiaba a las caravanas en pleno desierto hasta 1973?',
      'Como se chamava a célebre acácia solitária que guiava caravanas no deserto até 1973?',
      'ما اسم شجرة السنط الوحيدة الشهيرة التي كانت دليلاً للقوافل في قلب الصحراء قبل حفظها في متحف نيامي عام 1973؟'
    ),
    correct: L('L’Arbre du Ténéré', 'Tree of Ténéré', 'El Árbol del Teneré', 'A Árvore do Ténéré', 'شجرة تينيري'),
    distractors: [
      L('Le Baobab de Dosso', 'Baobab of Dosso', 'Baobab de Dosso', 'Baobá de Dosso', 'باوباب دوسو'),
      L('Le Palmier d’Ingall', 'Palm of Ingall', 'Palmera de Ingall', 'Palmeira de Ingall', 'نخلة إنغال'),
      L('Le Dattier de Bilma', 'Date Palm of Bilma', 'Datilera de Bilma', 'Tamareira de Bilma', 'نخلة بيلما'),
    ],
    explanation: L(
      'Ses racines puisaient l’eau à plus de 30 mètres sous le sable ; aujourd’hui une sculpture en métal marque son emplacement tandis que le tronc original repose au Musée national de Niamey.',
      'Its roots reached over 30 metres down to groundwater; today a metal monument marks the desert spot while the original trunk stands in Niamey’s National Museum.',
      'Sus raíces descendían más de 30 metros bajo la arena; hoy una escultura metálica señala su antiguo emplazamiento.',
      'Suas raízes desciendem a mais de 30 metros sob a areia; hoje seu tronco original repousa no Museu Nacional de Niamey.',
      'امتدت جذور شجرة تينيري لأكثر من ثلاثين متراً بحثاً عن الماء، واليوم يقف نصب معدني في موقعها بينما يُعرض جذعها بالمتحف الوطني.'
    ),
  }),
  mkQ({
    id: 'cur_NE_21',
    countryCode: 'NE',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'mont_idoukal_n_taghes_bagzane',
    source: 'Géographie physique — Massif de l’Aïr',
    prompt: L(
      'Quel sommet du massif de l’Aïr, dans les monts Bagzane, constitue avec ses 2 022 mètres le point culminant du Niger ?',
      'Which peak in the Bagzane range of the Aïr Mountains stands at 2,022 metres as Niger’s highest point?',
      '¿Qué cima de los montes Bagzane en el macizo de Aïr, con 2.022 metros, es el punto más alto de Níger?',
      'Qual pico dos montes Bagzane no maciço de Aïr, com 2.022 metros, é o ponto mais alto do Níger?',
      'أي قمة في جبال باغزان بكتلة آير يبلغ ارتفاعها 2022 متراً وتُعد أعلى نقطة في النيجر؟'
    ),
    countryModePrompt: L(
      'Quel sommet culminant à 2 022 mètres dans les monts Bagzane, au cœur du massif de l’Aïr, est le point le plus élevé du territoire ?',
      'Which peak rising to 2,022 metres in the Bagzane plateau of the Aïr Massif is the nation’s highest summit?',
      '¿Qué cumbre de 2.022 metros en la meseta de Bagzane constituye la mayor altitud del país?',
      'Qual cume de 2.022 metros no planalto de Bagzane é a maior altitude do território?',
      'ما اسم القمة الجبلية التي يصل ارتفاعها إلى 2022 متراً في هضبة باغزان وتُعد الأعلى في البلاد؟'
    ),
    correct: L('Le mont Idoukal-n-Taghès', 'Mont Idoukal-n-Taghès', 'Monte Idoukal-n-Taghès', 'Monte Idoukal-n-Taghès', 'جبل إيدوكال ن تاغيس'),
    distractors: [
      L('Le mont Tamgak', 'Mont Tamgak', 'Monte Tamgak', 'Monte Tamgak', 'جبل تامغاك'),
      L('Le plateau du Djado', 'Djado Plateau', 'Meseta de Djado', 'Planalto de Djado', 'هضبة جادو'),
      L('Le pic Greboun', 'Mont Greboun', 'Pico Greboun', 'Pico Greboun', 'قمة غريبون'),
    ],
    explanation: L(
      'Situé dans les hauteurs fertiles des monts Bagzane à l’est d’Agadez, l’Idoukal-n-Taghès (2 022 m) bénéficie d’un microclimat frais qui permet même de cultiver des agrumes en plein Sahara.',
      'Rising to 2,022 m in the Bagzane massif, Idoukal-n-Taghès supports cool oasis valleys where citrus and gardens flourish in the Sahara.',
      'Con 2.022 metros, el monte Idoukal-n-Taghès alberga valles oasis con cultivos de altura en pleno Sáhara.',
      'Com 2.022 m nos montes Bagzane, o Idoukal-n-Taghès sustenta vales oásis frescos em pleno Saara.',
      'يصل ارتفاع جبل إيدوكال ن تاغيس إلى 2022 متراً، وتتميز وديانه بمناخ معتدل يتيح زراعة الحمضيات وسط الصحراء.'
    ),
  }),
  mkQ({
    id: 'cur_NE_22',
    countryCode: 'NE',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'girafes_de_koure_afrique_ouest',
    source: 'UICN & Réserve de Kouré — Dosso',
    prompt: L(
      'À une soixantaine de kilomètres au sud-est de Niamey, quelle localité est mondialement connue pour abriter les dernières girafes peralta vivant en liberté en Afrique de l’Ouest ?',
      'About 60 km southeast of Niamey, which area is famous worldwide as home to West Africa’s last free-roaming peralta giraffes?',
      'A unos 60 km al sureste de Niamey, ¿qué localidad alberga las últimas jirafas peralta en libertad de África Occidental?',
      'A cerca de 60 km a sudeste de Niamey, qual localidade abriga as últimas girafas peralta em liberdade da África Ocidental?',
      'على بُعد نحو 60 كيلومتراً جنوب شرق نيامي، أي منطقة تشتهر باحتضان آخر زرافات غرب إفريقيا الطليقة؟'
    ),
    countryModePrompt: L(
      'Dans quelle zone de brousse proche de Niamey peut-on observer le dernier troupeau sauvage de girafes blanches (« Giraffa camelopardalis peralta ») d’Afrique de l’Ouest ?',
      'In which bushland zone southeast of Niamey does West Africa’s last wild herd of West African giraffes roam freely alongside villagers?',
      '¿En qué zona cercana a Niamey vive en libertad la última manada silvestre de jirafas de África Occidental?',
      'Em qual região próxima a Niamey vive livre o último rebanho selvagem de girafas da África Ocidental?',
      'في أي منطقة قريبة من نيامي يعيش آخر قطيع بري لزرافات غرب إفريقيا في انسجام مع السكان؟'
    ),
    correct: L('Kouré', 'Kouré', 'Kouré', 'Kouré', 'كوري'),
    distractors: [
      L('Tillabéri', 'Tillabéri', 'Tillabéri', 'Tillabéri', 'تيلابيري'),
      L('Dogondoutchi', 'Dogondoutchi', 'Dogondoutchi', 'Dogondoutchi', 'دوغوندوتشي'),
      L('Gaya', 'Gaya', 'Gaya', 'Gaya', 'غايا'),
    ],
    explanation: L(
      'Tombée à moins de 50 individus en 1996, la population des girafes de Kouré a dépassé les 600 têtes grâce à une cohabitation exemplaire et pacifique avec les communautés locales.',
      'Rebounding from under 50 giraffes in 1996 to more than 600 today, Kouré stands as a celebrated model of community-led wildlife conservation.',
      'Tras bajar a menos de 50 ejemplares en 1996, la población de jirafas de Kouré supera hoy los 600 individuos gracias a la protección comunitaria.',
      'Após cair para menos de 50 animais em 1996, as girafas de Kouré ultrapassaram 600 exemplares graças à conservação comunitária.',
      'ارتفع عدد زرافات كوري من أقل من 50 إلى أكثر من 600 زرافة بفضل حماية المجتمعات المحلية وتعايشها السلمي معها.'
    ),
  }),
  mkQ({
    id: 'cur_NE_23',
    countryCode: 'NE',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'parc_national_du_w_coude_fleuve',
    source: 'UNESCO — Parc national du W du Niger',
    prompt: L(
      'D’où le célèbre « Parc national du W », classé à l’UNESCO au sud-ouest de Niamey, tire-t-il sa curieuse appellation ?',
      'Where does the UNESCO-listed "W National Park" southwest of Niamey get its unusual single-letter name?',
      '¿De dónde proviene el curioso nombre del "Parque Nacional W", declarado Patrimonio de la UNESCO al suroeste de Niamey?',
      'De onde vem o curioso nome do "Parque Nacional W", Patrimônio da UNESCO a sudoeste de Niamey?',
      'من أين استمد منتزه "W" الوطني المدرج لدى اليونسكو جنوب غرب نيامي اسمه الغريب؟'
    ),
    countryModePrompt: L(
      'Pourquoi la plus ancienne réserve naturelle transfrontalière au sud du pays porte-t-elle simplement le nom de « Parc national du W » ?',
      'Why is the iconic transboundary national park south of Niamey simply called "W National Park"?',
      '¿Por qué el parque nacional transfronterizo al sur de Niamey lleva por nombre "Parque Nacional W"?',
      'Por que o parque nacional transfronteiriço ao sul de Niamey se chama simplesmente "Parque Nacional W"?',
      'لماذا سُمي المنتزه الوطني الكبير جنوب نيامي بهذا الاسم البسيط "منتزه W"؟'
    ),
    correct: L('De la forme en « W » des méandres du fleuve Niger', 'From the W-shaped bends of the Niger River', 'Por la forma de "W" de los meandros del río Níger', 'Pela forma de "W" das curvas do rio Níger', 'من التواءات نهر النيجر التي تشكل حرف W'),
    distractors: [
      L('Des initiales de l’explorateur qui l’a cartographié', 'From the initials of its explorer', 'Por las iniciales de un explorador', 'Pelas iniciais de um explorador', 'من الحرف الأول لاسم مكتشفه'),
      L('D’un mot haoussa signifiant « guépard »', 'From a Hausa word meaning cheetah', 'De una palabra hausa que significa guepardo', 'De uma palavra hausa para guepardo', 'من كلمة هوسا تعني الفهد'),
      L('De la disposition de ses trois lacs salés', 'From three salt lakes', 'Por la disposición de tres lagos salados', 'Pela posição de três lagos salgados', 'من توزيع ثلاث بحيرات مالحة داخله'),
    ],
    explanation: L(
      'À cet endroit précis, le grand fleuve décrit un double méandre spectaculaire dessinant nettement la lettre W entre le Niger, le Bénin et le Burkina Faso.',
      'In this stretch, the river twists into a striking double bend clearly shaped like the letter W across Niger, Benin, and Burkina Faso.',
      'En este tramo el río dibuja un doble meandro perfecto con forma de W entre tres países.',
      'Nesse trecho, o rio forma uma dupla curva que desenha exatamente a letra W na paisagem.',
      'يرسم النهر في هذه المنطقة منعطفين متتاليين يشكلان بوضوح حرف W باللاتينية.'
    ),
  }),
  mkQ({
    id: 'cur_NE_24',
    countryCode: 'NE',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 2,
    topicKey: 'arlit_uranium_air',
    source: 'Ressources minières — Région d’Agadez',
    prompt: L(
      'Quelle ville minière fondée en 1969 dans les confins désertiques du nord du Niger est célèbre pour l’exploitation de grands gisements d’uranium ?',
      'Which desert mining town founded in 1969 in northern Niger is famous for its major uranium deposits?',
      '¿Qué ciudad minera fundada en 1969 en el norte desértico de Níger es célebre por sus yacimientos de uranio?',
      'Qual cidade mineradora fundada em 1969 no norte desértico do Níger é famosa por suas reservas de urânio?',
      'أي مدينة تعدينية تأسست عام 1969 في شمال النيجر وتشتهر بمناجم اليورانيوم الكبرى؟'
    ),
    countryModePrompt: L(
      'Quelle cité minière du Nord, née à la fin des années 1960 à l’ouest du massif de l’Aïr, est historique pour l’extraction de l’uranium ?',
      'Which northern mining town west of the Aïr Mountains grew up in the late 1960s around uranium extraction?',
      '¿Qué ciudad minera surgida a fines de los años 60 al oeste del macizo de Aïr es célebre por el uranio?',
      'Qual cidade mineradora fundada no fim dos anos 1960 a oeste do maciço de Aïr destaca-se pelo urânio?',
      'أي مدينة تعدينية شمال غرب كتلة آير نشأت أواخر الستينيات حول استخراج اليورانيوم؟'
    ),
    correct: L('Arlit', 'Arlit', 'Arlit', 'Arlit', 'أرليت'),
    distractors: [
      L('N’Guigmi', 'N’Guigmi', 'N’Guigmi', 'N’Guigmi', 'نغويغمي'),
      L('Magaria', 'Magaria', 'Magaria', 'Magaria', 'ماغاريا'),
      L('Birni N’Konni', 'Birni N’Konni', 'Birni N’Konni', 'Birni N’Konni', 'بيرني نكوني'),
    ],
    explanation: L(
      'Construite en plein désert près des gisements de la Somaïr et de la Cominak, Arlit fait du Niger l’un des principaux producteurs mondiaux d’uranium.',
      'Built in the desert to develop the Somaïr and Cominak mines, Arlit placed Niger among the world’s top uranium producers.',
      'Construida en pleno desierto, Arlit situó al país entre los principales productores mundiales de uranio.',
      'Construída no deserto junto às minas de urânio, Arlit colocou o país entre os maiores produtores mundiais.',
      'جعلت مناجم أرليت الصحراوية النيجر من كبار منتجي اليورانيوم في العالم.'
    ),
  }),
  mkQ({
    id: 'cur_NE_25',
    countryCode: 'NE',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'bilma_caravanes_sel_azalai',
    source: 'Patrimoine saharien — Kawar',
    prompt: L(
      'Quelle oasis isolée du Kawar, au cœur du Sahara oriental nigérien, est renommée pour ses salines millénaires où s’approvisionnent les caravanes de dromadaires (« azalaï ») ?',
      'Which remote oasis in Niger’s eastern Kawar region is renowned for ancient salt pans supplying camel caravans ("azalaï")?',
      '¿Qué oasis aislado del Kawar, en el este de Níger, es célebre por sus salinas milenarias que abastecen a las caravanas ("azalaï")?',
      'Qual oásis isolado do Kawar, no leste do Níger, é célebre pelas salinas milenares que abastecem as caravanas ("azalaï")?',
      'أي واحة نائية في منطقة كوار شرق النيجر تشتهر بملاحاتها العريقة التي تتزود منها قوافل الإبل (أزالاي)؟'
    ),
    countryModePrompt: L(
      'Quelle oasis du Kawar produit des cônes et pains de sel gemme transportés à dos de dromadaire à travers le Ténéré jusqu’à Agadez et Zinder ?',
      'Which Kawar oasis produces salt cones carried across the Ténéré by camel caravans toward Agadez and Zinder?',
      '¿Qué oasis del Kawar produce panes de sal transportados en dromedario a través del Teneré hacia Agadez y Zinder?',
      'Qual oásis do Kawar produz pães de sal transportados em dromedários pelo Ténéré até Agadez e Zinder?',
      'أي واحة في إقليم كوار تنتج قوالب الملح التي تنقلها قوافل الجمال عبر صحراء تينيري إلى أغاديز وزيندر؟'
    ),
    correct: L('Bilma', 'Bilma', 'Bilma', 'Bilma', 'بيلما'),
    distractors: [
      L('Tessaoua', 'Tessaoua', 'Tessaoua', 'Tessaoua', 'تساوا'),
      L('Madaoua', 'Madaoua', 'Madaoua', 'Madaoua', 'ماداوا'),
      L('Filingué', 'Filingué', 'Filingué', 'Filingué', 'فيلينغي'),
    ],
    explanation: L(
      'Au pied des falaises du Kawar, les salines de Bilma produisent depuis des siècles un sel prisé pour les troupeaux et les cuisines du Sahel.',
      'Beneath the Kawar escarpment, Bilma’s natural salt pans have supplied vital mineral salt to Sahelian herders and markets for centuries.',
      'Bajo los acantilados del Kawar, las salinas de Bilma abastecen de sal al Sahel desde hace siglos.',
      'Aos pés das falésias de Kawar, as salinas de Bilma abastecem de sal o Sahel há séculos.',
      'تمد ملاحات واحة بيلما منطقة الساحل بالملح الطبيعي منذ قرون عبر قوافل الصحراء.'
    ),
  }),
  mkQ({
    id: 'cur_NE_26',
    countryCode: 'NE',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 4,
    topicKey: 'ksour_plateau_djado',
    source: 'Archéologie saharienne — Extrême Nord-Est',
    prompt: L(
      'Dans l’extrême nord-est désertique du Niger, quel plateau spectaculaire abrite d’anciennes citadelles fortifiées abandonnées (« ksour ») bâties en banco et pierre salée sur des pitons rocheux ?',
      'In Niger’s far northeastern Sahara, which dramatic plateau preserves abandoned fortified clay-and-salt citadels ("ksour") perched on rocky outcrops?',
      'En el extremo noreste sahariano de Níger, ¿qué meseta alberga antiguas ciudadelas fortificadas abandonadas sobre espolones rocosos?',
      'No extremo nordeste saariano do Níger, qual planalto abriga antigas cidadelas fortificadas abandonadas sobre esporões rochosos?',
      'في أقصى الشمال الشرقي الصحراوي للنيجر، أي هضبة تحتضن قلاعاً طينية محصنة مهجورة فوق القمم الصخرية؟'
    ),
    countryModePrompt: L(
      'Quel plateau saharien du nord-est abrite la célèbre cité fortifiée abandonnée de terre salée perchée sur un piton et inscrite sur la liste indicative de l’UNESCO ?',
      'Which northeastern Saharan plateau holds the haunting abandoned mud-brick fortress perched atop a rocky spur on UNESCO’s Tentative List?',
      '¿Qué meseta sahariana del noreste alberga las ruinas de una antigua ciudadela fortificada de adobe?',
      'Qual planalto saariano do nordeste abriga as ruínas de uma antiga cidadela fortificada em barro?',
      'أي هضبة صحراوية في الشمال الشرقي تضم أطلال قلعة طينية مهجورة مبنية فوق نتوء صخري؟'
    ),
    correct: L('Le plateau du Djado', 'Djado Plateau', 'Meseta de Djado', 'Planalto de Djado', 'هضبة جادو'),
    distractors: [
      L('Le massif du Termit', 'Termit Massif', 'Macizo de Termit', 'Maciço de Termit', 'كتلة تيرميت'),
      L('La falaise de Tiguidit', 'Tiguidit Escarpment', 'Acantilado de Tiguidit', 'Escarpa de Tiguidit', 'جرف تيغيديت'),
      L('La vallée de l’Azaouak', 'Azaouak Valley', 'Valle del Azaouak', 'Vale do Azaouak', 'وادي أزاواك'),
    ],
    explanation: L(
      'Autrefois étape du commerce transsaharien entre le Kanem-Bornou et le Fezzan, les ksour du Djado offrent aujourd’hui l’un des paysages de ruines les plus saisissants du Sahara.',
      'Once a medieval caravan hub linking Kanem-Bornu to Fezzan, Djado’s ruined ksour remain among the Sahara’s most atmospheric heritage sites.',
      'Antigua etapa caravanera entre Kanem-Bornu y Fezán, las ruinas de Djado figuran entre los paisajes más impactantes del Sáhara.',
      'Antiga escala de caravanas entre Kanem-Bornu e Fezã, as ruínas de Djado estão entre as mais impressionantes do Saara.',
      'كانت قصور جادو محطة تاريخية على طرق القوافل بين كانم برنو وفزان ولا تزال أطلالها من أروع مشاهد الصحراء.'
    ),
  }),
  mkQ({
    id: 'cur_NE_27',
    countryCode: 'NE',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'reserve_termit_tin_toumma_addax',
    source: 'UICN & Réserve naturelle nationale de Termit et Tin-Toumma',
    prompt: L(
      'Quelle immense réserve naturelle de l’est du Niger, plus grande aire protégée du pays, constitue l’ultime sanctuaire mondial à l’état sauvage de l’antilope addax ?',
      'Which vast eastern Niger reserve, the country’s largest protected area, serves as the last wild stronghold on Earth for the critically endangered addax antelope?',
      '¿Qué inmensa reserva natural del este de Níger es el último santuario silvestre mundial del antílope addax?',
      'Qual imensa reserva natural do leste do Níger é o último santuário selvagem mundial do antílope addax?',
      'أي محمية طبيعية شاسعة شرق النيجر تُعد أكبر منطقة محمية في البلاد وآخر ملاذ بري عالمي لظبي المها ذي القرون اللولبية (الأداكس)؟'
    ),
    countryModePrompt: L(
      'Quelle réserve naturelle géante du centre-est abrite les derniers troupeaux sauvages d’addax et de guépards sahariens ?',
      'Which vast east-central nature reserve shelters the world’s last wild herds of addax antelope and Saharan cheetahs?',
      '¿Qué gran reserva natural del centro-este protege a los últimos rebaños silvestres de addax y guepardos saharianos?',
      'Qual vasta reserva natural do centro-leste protege os últimos rebanhos selvagens de addax e guepardos saarianos?',
      'أي محمية طبيعية كبرى في الوسط الشرقي تأوي آخر القطعان البرية من ظباء الأداكس والفهود الصحراوية؟'
    ),
    correct: L('La réserve de Termit et Tin-Toumma', 'Termit and Tin-Toumma Reserve', 'Reserva de Termit y Tin-Toumma', 'Reserva de Termit e Tin-Toumma', 'محمية تيرميت وتين توما'),
    distractors: [
      L('La réserve de Tamou', 'Tamou Reserve', 'Reserva de Tamou', 'Reserva de Tamou', 'محمية تامو'),
      L('La réserve de Gadabédji', 'Gadabédji Reserve', 'Reserva de Gadabédji', 'Reserva de Gadabédji', 'محمية غادابيدجي'),
      L('La forêt de Baban Rafi', 'Baban Rafi Forest', 'Bosque de Baban Rafi', 'Floresta de Baban Rafi', 'غابة بابان رافي'),
    ],
    explanation: L(
      'S’étendant sur près de 97 000 km² entre Zinder, Diffa et Agadez, Termit et Tin-Toumma protège une faune désertique rarissime : addax, gazelles dama et mouflons à manchettes.',
      'Covering roughly 97,000 sq km, Termit and Tin-Toumma shelters extraordinarily rare desert wildlife including the addax, dama gazelle, and Saharan cheetah.',
      'Con casi 97.000 km², Termit y Tin-Toumma protege especies únicas como el addax, la gacela dama y el guepardo sahariano.',
      'Com cerca de 97 mil km², Termit e Tin-Toumma protege espécies raras como o addax e a gazela-dama.',
      'تمتد محمية تيرميت وتين توما على مساحة تقارب 97 ألف كم² وتصون أندر كائنات الصحراء كالأداكس وغزال الداما.'
    ),
  }),
  mkQ({
    id: 'cur_NE_28',
    countryCode: 'NE',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'fleuve_niger_pont_kennedy_niamey',
    source: 'Géographie urbaine — Capitale Niamey',
    prompt: L(
      'Comment s’appelle le premier grand pont construit sur le fleuve Niger en 1970 à Niamey pour relier la rive gauche à la rive droite ?',
      'What is the name of the first major bridge built across the Niger River in Niamey in 1970 linking the left and right banks?',
      '¿Cómo se llama el primer gran puente construido sobre el río Níger en Niamey en 1970?',
      'Como se chama a primeira grande ponte construída sobre o rio Níger em Niamey em 1970?',
      'ما اسم أول جسر رئيسي شُيد فوق نهر النيجر في نيامي عام 1970 للربط بين الضفتين؟'
    ),
    countryModePrompt: L(
      'Quel pont emblématique inauguré en 1970 a permis pour la première fois aux véhicules de traverser directement le fleuve à Niamey ?',
      'Which landmark bridge opened in 1970 first linked the two banks of the river in Niamey by road?',
      '¿Qué emblemático puente inaugurado en 1970 unió por primera vez ambas orillas del río en Niamey?',
      'Qual ponte emblemática inaugurada em 1970 ligou pela primeira vez as duas margens do rio em Niamey?',
      'أي جسر شهير افتُتح عام 1970 ليصل للمرة الأولى بين ضفتي النهر في نيامي؟'
    ),
    correct: L('Le pont Kennedy', 'Kennedy Bridge', 'Puente Kennedy', 'Ponte Kennedy', 'جسر كينيدي'),
    distractors: [
      L('Le pont Lamido', 'Lamido Bridge', 'Puente Lamido', 'Ponte Lamido', 'جسر لاميدو'),
      L('Le pont du Ténéré', 'Ténéré Bridge', 'Puente del Teneré', 'Ponte do Ténéré', 'جسر تينيري'),
      L('Le pont de Dosso', 'Dosso Bridge', 'Puente de Dosso', 'Ponte de Dosso', 'جسر دوسو'),
    ],
    explanation: L(
      'Avant l’ouverture du pont John-F.-Kennedy en 1970, la traversée du fleuve à Niamey s’effectuait par bac ou par pirogue.',
      'Before Kennedy Bridge opened in 1970, commuters crossed the river at Niamey exclusively by ferry or wooden pirogue.',
      'Antes de inaugurarse el Puente Kennedy en 1970, el cruce del río en Niamey dependía de transbordadores y piraguas.',
      'Antes da inauguração da Ponte Kennedy em 1970, a travessia do rio em Niamey dependia de balsas e pirogas.',
      'قبل تدشين جسر كينيدي عام 1970 كان عبور النهر في نيامي يتم بالعبارات والقوارب التقليدية.'
    ),
  }),
  mkQ({
    id: 'cur_NE_29',
    countryCode: 'NE',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'cure_salee_ingall_gerewol',
    source: 'Patrimoine nomade — Ingall',
    prompt: L(
      'Quel grand rassemblement annuel de pasteurs peuls Wodaabe et touaregs à Ingall au Niger célèbre la fin des pluies, les courses de chameaux et les danses du Gerewol ?',
      'Which major annual gathering of Wodaabe Fulani and Tuareg herders at Ingall celebrates the end of the rains with camel races and Gerewol dances?',
      '¿Qué gran encuentro anual de pastores wodaabe y tuaregs en Ingall celebra el fin de las lluvias con carreras de camellos y danzas Gerewol?',
      'Qual grande encontro anual de pastores wodaabe e tuaregues em Ingall celebra o fim das chuvas com corridas de camelos e danças Gerewol?',
      'أي تجمع سنوي كبير للرعاة من الفولاني الودابي والطوارق في إنغال يحتفي بنهاية موسم الأمطار ورقصات غيريول؟'
    ),
    countryModePrompt: L(
      'Comment appelle-t-on le célèbre rassemblement annuel des nomades à Ingall autour des terres salées, des courses de dromadaires et du concours de beauté masculin Gerewol ?',
      'What is the name of the famous annual nomadic gathering at Ingall featuring salt-lick grazing, camel races, and the Wodaabe Gerewol festival?',
      '¿Cómo se llama el célebre encuentro anual nómada de Ingall con carreras de dromedarios y el festival Gerewol?',
      'Como se chama o célebre encontro anual nômade de Ingall com corridas de dromedários e o festival Gerewol?',
      'ما اسم الملتقى السنوي الشهير للبدو في إنغال الذي يشمل سباقات الهجن ورقصات غيريول؟'
    ),
    correct: L('La Cure salée', 'The Cure Salée', 'La Cure Salée', 'A Cure Salée', 'مهرجان الكور ساليه (العلاج بالملح)'),
    distractors: [
      L('La Fête du Mil', 'Millet Festival', 'Fiesta del Mijo', 'Festa do Milheto', 'عيد الدخن'),
      L('Le Saut du Fleuve', 'River Crossing Festival', 'Salto del Río', 'Salto do Rio', 'مهرجان عبور النهر'),
      L('La Marche de Bilma', 'Bilma March', 'Marcha de Bilma', 'Marcha de Bilma', 'مسيرة بيلما'),
    ],
    explanation: L(
      'À la fin de l’hivernage, les troupeaux convergent vers les pâturages salés d’Ingall tandis que les jeunes hommes Wodaabe parent leurs visages pour la danse du Gerewol.',
      'At the end of the rainy season, herds gather for mineral-rich grazing around Ingall as Wodaabe men perform ornate Gerewol courtship dances.',
      'Al término de las lluvias, los rebaños acuden a los pastos salinos de Ingall mientras los jóvenes wodaabe celebran el Gerewol.',
      'Ao fim das chuvas, os rebanhos seguem para as pastagens salinas de Ingall enquanto os jovens wodaabe dançam o Gerewol.',
      'يجتمع الرعاة في إنغال نهاية موسم الأمطار لتزويد القطعان بالمعادن وإقامة الاحتفالات والرقصات التراثية.'
    ),
  }),
  mkQ({
    id: 'cur_NE_30',
    countryCode: 'NE',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'croix_d_agadez_bijou_argent',
    source: 'Artisanat touareg — Bijouterie de l’Aïr',
    prompt: L(
      'Quel célèbre bijou traditionnel en argent ciselé par les forgerons touaregs du nord du Niger, existant en 21 modèles de formes régionales, symbolise les quatre points cardinaux ?',
      'Which famous handcrafted silver pendant forged by Tuareg artisans in northern Niger comes in 21 regional designs symbolizing the four cardinal directions?',
      '¿Qué famosa joya tradicional de plata cincelada por artesanos tuaregs en el norte de Níger existe en 21 modelos y simboliza los cuatro puntos cardinales?',
      'Qual famosa joia tradicional de prata cinzelada por artesãos tuaregues no norte do Níger possui 21 modelos e simboliza os quatro pontos cardeais?',
      'أي حلي فضي تقليدي شهير يصوغه الحرفيون الطوارق في شمال النيجر وله 21 تصميماً يرمز للجهات الأربع؟'
    ),
    countryModePrompt: L(
      'Quel emblématique pendentif en argent massif, dont l’un des modèles historiques s’appelle « tanaghilt », se transmet traditionnellement de père en fils chez les Touaregs ?',
      'Which iconic sterling silver Tuareg pendant, traditionally passed from father to son and known locally as "tanaghilt", is the jewel emblem of northern craft?',
      '¿Qué emblemático colgante de plata maciza, conocido localmente como "tanaghilt", se transmite de padres a hijos entre los tuaregs?',
      'Qual emblemático pingente de prata maciça, chamado "tanaghilt", é passado tradicionalmente de pai para filho entre os tuaregues?',
      'ما اسم القلادة الفضية الشهيرة المعروفة محلياً باسم "تاناغيلت" والتي يتوارثها الطوارق رمزاً للثقافة الشمالية؟'
    ),
    correct: L('La croix d’Agadez', 'Agadez Cross', 'Cruz de Agadez', 'Cruz de Agadez', 'صليب أغاديز'),
    distractors: [
      L('La fibule du Hoggar', 'Hoggar Fibula', 'Fíbula del Hoggar', 'Fíbula do Hoggar', 'مشبك الهقار'),
      L('L’anneau de Zinder', 'Zinder Ring', 'Anillo de Zinder', 'Anel de Zinder', 'خاتم زيندر'),
      L('Le médaillon du Kawar', 'Kawar Medallion', 'Medallón de Kawar', 'Medalhão de Kawar', 'قلادة كوار'),
    ],
    explanation: L(
      'Souvent associée aux quatre directions du désert pour ne jamais perdre son chemin, la croix d’Agadez (dont il existe 21 déclinaisons d’oasis) est un chef-d’œuvre d’orfèvrerie.',
      'Said to symbolize a compass across the four cardinal directions of the Sahara, the silver Agadez Cross encompasses 21 distinct regional designs.',
      'Asociada con los cuatro puntos cardinales del desierto, la cruz de Agadez abarca 21 variantes regionales.',
      'Associada aos quatro pontos cardeais do deserto, a cruz de Agadez possui 21 modelos tradicionais distintos.',
      'يرمز صليب أغاديز الفضي إلى البوصلة والجهات الأربع في الصحراء ويضم 21 تصميماً تقليدياً مميزاً.'
    ),
  }),
  mkQ({
    id: 'cur_NE_31',
    countryCode: 'NE',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'bombino_omara_moctar_nomad',
    source: 'World Music & Grammy Awards',
    prompt: L(
      'Quel virtuose touareg de la guitare blues originaire d’Agadez, nommé aux Grammy Awards pour son album « Deran », se produit mondialement sous le nom de scène de Bombino ?',
      'Which Grammy-nominated Tuareg desert-blues guitar virtuoso from Agadez performs worldwide under the stage name Bombino?',
      '¿Qué virtuoso tuareg de la guitarra originario de Agadez, nominado al Grammy por "Deran", actúa mundialmente como Bombino?',
      'Qual virtuoso tuaregue da guitarra nascido em Agadez, indicado ao Grammy por "Deran", se apresenta como Bombino?',
      'أي عازف غيتار طارقي من أغاديز رُشح لجائزة غرامي عن ألبومه "ديران" ويُعرف عالمياً باسم بومبينو؟'
    ),
    countryModePrompt: L(
      'Comment s’appelle à l’état civil le guitariste touareg originaire d’Agadez connu mondialement sous le pseudonyme de « Bombino » et nommé aux Grammy Awards en 2019 ?',
      'What is the real name of the Grammy-nominated Tuareg desert-blues guitarist from Agadez known worldwide as Bombino?',
      '¿Cuál es el nombre real del guitarrista tuareg de Agadez conocido mundialmente como Bombino?',
      'Qual é o nome verdadeiro do guitarrista tuaregue de Agadez conhecido mundialmente como Bombino?',
      'ما الاسم الحقيقي لعازف الغيتار الطارقي الشهير من أغاديز المعروف عالمياً باسم "بومبينو"؟'
    ),
    correct: L('Omara Moctar', 'Omara Moctar', 'Omara Moctar', 'Omara Moctar', 'عمر المختار (أومارا مختار)'),
    distractors: [
      L('Mdou Moctar', 'Mdou Moctar', 'Mdou Moctar', 'Mdou Moctar', 'مدو مختار'),
      L('Ibrahim Ag Alhabib', 'Ibrahim Ag Alhabib', 'Ibrahim Ag Alhabib', 'Ibrahim Ag Alhabib', 'إبراهيم أغ الحبيب'),
      L('Ali Farka Touré', 'Ali Farka Touré', 'Ali Farka Touré', 'Ali Farka Touré', 'علي فاركا توري'),
    ],
    explanation: L(
      'Omara Moctar, surnommé « Bombino », a hissé le rock touareg (« ishumar ») des faubourgs d’Agadez jusqu’aux scènes du monde entier et aux Grammy Awards.',
      'Born near Agadez, Omara Moctar ("Bombino") became the first artist from the country nominated for a Grammy Award in World Music.',
      'Nacido cerca de Agadez, Omara Moctar ("Bombino") fue el primer artista del país nominado a un Premio Grammy.',
      'Nascido perto de Agadez, Omara Moctar ("Bombino") tornou-se o primeiro artista do país indicado ao Grammy.',
      'أصبح عمر مختار المعروف ببومبينو أول فنان من بلاده يترشح لجوائز الغرامي العالمية بموسيقى البلوز الصحراوي.'
    ),
  }),
  mkQ({
    id: 'cur_NE_32',
    countryCode: 'NE',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'mdou_moctar_desert_rock_agadez',
    source: 'Musiques actuelles — Abalak / Agadez',
    prompt: L(
      'Quel guitariste gaucher de desert-rock originaire d’Abalak a tourné le remake touareg de « Purple Rain » intitulé « Akounak Tedalat Taha Tazoughai » ?',
      'Which left-handed Tuareg desert-rock guitarist from Abalak starred in the Tuareg-language film "Akounak Tedalat Taha Tazoughai" (inspired by "Purple Rain")?',
      '¿Qué guitarrista zurdo de rock del desierto oriundo de Abalak protagonizó "Akounak Tedalat Taha Tazoughai"?',
      'Qual guitarrista canhoto de desert rock nascido em Abalak estrelou o filme "Akounak Tedalat Taha Tazoughai"?',
      'أي عازف غيتار أعسر من أبالاك قدم موسيقى الروك الصحراوي وشارك في فيلم باللغة الطارقية مستوحى من "برينس"؟'
    ),
    countryModePrompt: L(
      'Quel guitariste autodidacte né à Abalak, passé maître du rock électrique touareg avec ses albums « Ilana » et « Afrique Victime », conquiert les festivals rock internationaux ?',
      'Which self-taught left-handed guitarist from Abalak gained global rock acclaim with albums like "Ilana" and "Afrique Victime"?',
      '¿Qué guitarrista autodidacta nacido en Abalak alcanzó fama internacional del rock con "Ilana" y "Afrique Victime"?',
      'Qual guitarrista autodidata nascido em Abalak ganhou aclamação mundial no rock com "Ilana" e "Afrique Victime"?',
      'أي عازف غيتار عصامي من أبالاك حقق شهرة عالمية في موسيقى الروك بألبومي "إيلانا" و"إفريقيا الضحية"؟'
    ),
    correct: L('Mdou Moctar', 'Mdou Moctar', 'Mdou Moctar', 'Mdou Moctar', 'مدو مختار'),
    distractors: [
      L('Kader Tarhanine', 'Kader Tarhanine', 'Kader Tarhanine', 'Kader Tarhanine', 'قادر ترهانين'),
      L('Alhousseini Anivolla', 'Alhousseini Anivolla', 'Alhousseini Anivolla', 'Alhousseini Anivolla', 'الحسيني أنيفولا'),
      L('Sidi Touré', 'Sidi Touré', 'Sidi Touré', 'Sidi Touré', 'سيدي توري'),
    ],
    explanation: L(
      'Commençant sur une guitare fabriquée à partir de planches et de câbles de frein de vélo, Mdou Moctar électrise aujourd’hui les plus grandes scènes rock mondiales.',
      'Starting out on a homemade guitar strung with bicycle brake cables, Mahamadou Souleymane ("Mdou Moctar") became a global desert-rock sensation.',
      'Tras fabricarse su primera guitarra con cables de freno de bicicleta, Mdou Moctar conquistó los grandes festivales de rock.',
      'Depois de montar seu primeiro violão com cabos de freio de bicicleta, Mdou Moctar conquistou grandes palcos de rock.',
      'بدأ مدو مختار بعزف غيتار صنعه يدوياً بأسلاك الدراجات قبل أن يتألق في كبرى مهرجانات الروك العالمية.'
    ),
  }),
  mkQ({
    id: 'cur_NE_33',
    countryCode: 'NE',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'moustapha_alassane_animation_africaine',
    source: 'Cinémathèque Afrique & FESPACO',
    prompt: L(
      'Quel pionnier nigérien du cinéma africain, réalisateur de « Bon Voyage, Sim » (1966) et « FVVA : Femme, Villa, Voiture, Argent », est reconnu comme l’un des pères de l’animation en Afrique ?',
      'Which pioneering Nigerien filmmaker who directed "Bon Voyage, Sim" (1966) and "FVVA" is celebrated as a father of African animation cinema?',
      '¿Qué pionero del cine de Níger, director de "Bon Voyage, Sim" (1966) y "FVVA", es considerado padre de la animación africana?',
      'Qual pioneiro do cinema do Níger, diretor de "Bon Voyage, Sim" (1966) e "FVVA", é celebrado como pai da animação africana?',
      'أي مخرج رائد من النيجر أخرج فيلم "رحلة سعيدة سيم" عام 1966 ويُعد من آباء سينما الرسوم المتحركة في إفريقيا؟'
    ),
    countryModePrompt: L(
      'Quel cinéaste autodidacte né à Ndougou a réalisé dès 1966 « Bon Voyage, Sim », l’un des tout premiers films d’animation d’Afrique noire, ainsi que le satirique « FVVA » ?',
      'Which self-taught filmmaker directed the 1966 stop-motion landmark "Bon Voyage, Sim" and the satire "FVVA: Femme, Villa, Voiture, Argent"?',
      '¿Qué cineasta autodidacta dirigió en 1966 la pionera animación "Bon Voyage, Sim" y la sátira "FVVA"?',
      'Qual cineasta autodidata dirigiu em 1966 a animação pioneira "Bon Voyage, Sim" e a sátira "FVVA"?',
      'أي مخرج عصامي أخرج عام 1966 أحد أوائل أفلام الرسوم المتحركة الإفريقية "رحلة سعيدة سيم" والفيلم الساخر "FVVA"؟'
    ),
    correct: L('Moustapha Alassane', 'Moustapha Alassane', 'Moustapha Alassane', 'Moustapha Alassane', 'مصطفى الحسن'),
    distractors: [
      L('Oumarou Ganda', 'Oumarou Ganda', 'Oumarou Ganda', 'Oumarou Ganda', 'عمر غاندا'),
      L('Inoussa Ousseïni', 'Inoussa Ousseïni', 'Inoussa Ousseïni', 'Inoussa Ousseïni', 'إينوسا أوسيني'),
      L('Mahamane Bakabé', 'Mahamane Bakabé', 'Mahamane Bakabé', 'Mahamane Bakabé', 'ماهامان باكابي'),
    ],
    explanation: L(
      'Mécanicien de formation passionné de marionnettes et de pellicule, Moustapha Alassane créa des films d’animation inventifs en bois, pâte à modeler et métal dès les années 1960.',
      'Originally trained as a mechanic, Moustapha Alassane pioneered African stop-motion animation in the 1960s alongside biting social satires.',
      'Mecánico de formación, Moustapha Alassane fue pionero del cine de animación artesanal y la sátira social en los años 60.',
      'Mecânico de formação, Moustapha Alassane foi pioneiro da animação artesanal africana na década de 1960.',
      'جمع المخرج مصطفى الحسن بين حس السخرية الاجتماعية والريادة في أفلام التحريك منذ ستينيات القرن الماضي.'
    ),
  }),
  mkQ({
    id: 'cur_NE_34',
    countryCode: 'NE',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'oumarou_ganda_cabascabo_fespaco',
    source: 'FESPACO 1972 — Premier Étalon de Yennenga du pays',
    prompt: L(
      'Quel acteur principal de « Moi, un Noir » puis réalisateur de « Cabascabo » et « Le Wazzou polygame » remporta pour le Niger le tout premier Étalon de Yennenga au FESPACO en 1972 ?',
      'Which lead actor of "Moi, un Noir" and director of "Cabascabo" and "Le Wazzou polygame" won the top FESPACO prize in 1972?',
      '¿Qué actor de "Moi, un Noir" y director de "Cabascabo" ganó en 1972 el gran premio Étalon de Yennenga en el FESPACO?',
      'Qual ator de "Moi, un Noir" e diretor de "Cabascabo" venceu em 1972 o grande prêmio Étalon de Yennenga no FESPACO?',
      'أي ممثل ومخرج أخرج فيلمي "كاباسكابو" و"تعدد الزوجات" وفاز عام 1972 بأول جائزة كبرى في مهرجان فيسباكو؟'
    ),
    countryModePrompt: L(
      'Quel pionnier du cinéma national, réalisateur de « Cabascabo » et « Le Wazzou polygame », décrocha dès 1972 le premier Étalon de Yennenga du FESPACO ?',
      'Which pioneering director of "Cabascabo" and "Le Wazzou polygame" won the very first FESPACO Étalon de Yennenga awarded to the country in 1972?',
      '¿Qué pionero del cine, director de "Cabascabo" y "Le Wazzou polygame", ganó en 1972 el primer Étalon de Yennenga del FESPACO?',
      'Qual pioneiro do cinema, diretor de "Cabascabo" e "Le Wazzou polygame", conquistou em 1972 o primeiro Étalon de Yennenga do país?',
      'أي رائد سينمائي أخرج فيلمي "كاباسكابو" و"الوازو" ونال أول جائزة يينينغا الذهبية للبلاد عام 1972؟'
    ),
    correct: L('Oumarou Ganda', 'Oumarou Ganda', 'Oumarou Ganda', 'Oumarou Ganda', 'عمر غاندا'),
    distractors: [
      L('Djingarey Maïga', 'Djingarey Maïga', 'Djingarey Maïga', 'Djingarey Maïga', 'جينغاري مايغا'),
      L('Rahmatou Keïta', 'Rahmatou Keïta', 'Rahmatou Keïta', 'Rahmatou Keïta', 'رحماتو كيتا'),
      L('Sani Magori', 'Sani Magori', 'Sani Magori', 'Sani Magori', 'ساني ماغوري'),
    ],
    explanation: L(
      'Révélé devant la caméra de Jean Rouch avant de passer brillamment derrière l’objectif, Oumarou Ganda a donné au cinéma africain l’une de ses premières œuvres primées au FESPACO.',
      'First starring for Jean Rouch before directing classics himself, Oumarou Ganda won the inaugural competitive Étalon de Yennenga in 1972.',
      'Tras actuar para Jean Rouch, Oumarou Ganda dirigió "Le Wazzou polygame" y ganó el Étalon de Yennenga en 1972.',
      'Após atuar com Jean Rouch, Oumarou Ganda dirigiu clássicos e conquistou o Étalon de Yennenga em 1972.',
      'بعد تألقه ممثلاً، أخرج عمر غاندا روائع سينمائية وتُوّج بجائزة فيسباكو الكبرى عام 1972.'
    ),
  }),
  mkQ({
    id: 'cur_NE_35',
    countryCode: 'NE',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 1,
    topicKey: 'le_dambou_moringa_couscous',
    source: 'Gastronomie populaire nigérienne',
    prompt: L(
      'Quel plat traditionnel très apprécié au Niger associe semoule de riz, de maïs ou de mil cuite à la vapeur avec de généreuses feuilles de moringa (« kopto ») et de l’arachide pilée ?',
      'Which beloved traditional dish combines steamed rice, millet, or maize couscous with nutritious moringa leaves and crushed peanuts?',
      '¿Qué plato tradicional muy popular combina cuscús de arroz, maíz o mijo al vapor con hojas de moringa y cacahuete molido?',
      'Qual prato tradicional muito apreciado combina cuscuz de arroz, milho ou milheto no vapor com folhas de moringa e amendoim pilado?',
      'أي طبق شعبي شهير يمزج كسكس الأرز أو الذرة المطهو على البخار مع أوراق المورينغا والفول السوداني؟'
    ),
    countryModePrompt: L(
      'Comment s’appelle ce mets traditionnel préparé à la vapeur avec des brisures de céréales, des feuilles vertes de moringa et de la pâte ou poudre d’arachide ?',
      'What is the name of this steamed traditional dish combining grain couscous, fresh moringa leaves, and crushed peanut garnish?',
      '¿Cómo se llama este plato tradicional preparado al vapor con sémola de cereales, hojas de moringa y cacahuete?',
      'Como se chama este prato tradicional preparado no vapor com cereais, folhas de moringa e amendoim?',
      'ما اسم الطبق التقليدي المطهو على البخار من حبوب الذرة أو الأرز مع أوراق المورينغا والفول السوداني؟'
    ),
    correct: L('Le dambou', 'Dambou', 'El dambou', 'O dambou', 'الدامبو'),
    distractors: [
      L('L’attiéké', 'Attiéké', 'Attiéké', 'Attiéké', 'الأتيكي'),
      L('Le garba', 'Garba', 'Garba', 'Garba', 'الغاربا'),
      L('Le kédjénou', 'Kedjenou', 'Kedjenou', 'Kedjenou', 'الكيدجينو'),
    ],
    explanation: L(
      'Servant aussi bien les repas familiaux que les grandes réceptions, le dambou tire son goût frais des feuilles de moringa riches en vitamines et de l’huile d’arachide épicée au yaji.',
      'Enjoyed at family meals and celebrations alike, dambou pairs fluffy steamed grains with vitamin-rich moringa leaves and spiced peanut garnish.',
      'Presente en comidas familiares y fiestas, el dambou une cereales al vapor con hojas de moringa y especias.',
      'Presente em almoços familiares e festas, o dambou une grãos no vapor, folhas de moringa e amendoim temperado.',
      'يجمع طبق الدامبو بين القيمة الغذائية العالية لأوراق المورينغا ومذاق الكسكس المطهو بالبخار والفول السوداني.'
    ),
  }),
  mkQ({
    id: 'cur_NE_36',
    countryCode: 'NE',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'le_kilichi_viande_sechee_epicee',
    source: 'Savoir-faire culinaire haoussa & sahélien',
    prompt: L(
      'Comment appelle-t-on les fines lamelles de bœuf séchées au soleil, enduites de pâte d’arachide et d’épices pimentées puis légèrement grillées, très appréciées comme spécialité du Sahel ?',
      'What are the sun-dried beef strips coated in spiced peanut paste and lightly grilled over embers called?',
      '¿Cómo se llaman las finas láminas de ternera secadas al sol, untadas con pasta de cacahuete y especias y ligeramente asadas?',
      'Como se chamam as finas fatias de carne bovina secas ao sol, cobertas com pasta de amendoim temperada e levemente grelhadas?',
      'ما اسم شرائح اللحم المجففة تحت الشمس والمتبلة بمعجون الفول السوداني والتوابل والمشوية على الجمر؟'
    ),
    countryModePrompt: L(
      'Quelle spécialité de viande de bœuf tranchée très finement, séchée au soleil puis enrobée de pâte d’arachide et de piment, constitue un cadeau gourmand très recherché ?',
      'Which delicacy of paper-thin beef strips sun-dried and coated with spiced peanut paste is a prized culinary specialty?',
      '¿Qué especialidad de láminas finas de carne secas al sol y recubiertas de pasta de cacahuete picante es un manjar muy apreciado?',
      'Qual especialidade de fatias finas de carne secas ao sol e cobertas com pasta de amendoim apimentada é muito apreciada?',
      'أي تخصص غذائي شهير من شرائح اللحم المجفف والمغطى بمعجون الفول السوداني الحار يُعد هدية محبوبة في الأسفار؟'
    ),
    correct: L('Le kilichi', 'Kilichi', 'El kilichi', 'O kilichi', 'الكيليشي'),
    distractors: [
      L('Le dibiterie', 'Dibiterie', 'Dibiterie', 'Dibiterie', 'ديبيتيري'),
      L('Le méchoui', 'Méchoui', 'Méchoui', 'Méchoui', 'المشوي'),
      L('Le biltong', 'Biltong', 'Biltong', 'Biltong', 'البيلتونغ'),
    ],
    explanation: L(
      'Grâce à son séchage minutieux et à sa croûte d’arachide et d’épices (labou), le kilichi se conserve longtemps sans réfrigération et régale voyageurs et cérémonies.',
      'Sun-dried and spiced with ginger, cloves, chilli, and peanut paste, kilichi keeps well without refrigeration and makes a prized travel snack.',
      'Secado al sol y cubierto de especias y cacahuete, el kilichi se conserva sin frío y es ideal para viajar.',
      'Seco ao sol e temperado com amendoim e especiarias, o kilichi conserva-se bem sem refrigeração.',
      'يتميز الكيليشي بسهولة حفظه دون تبريد بفضل تجفيفه الدقيق وتغطيته بالفول السوداني والبهارات.'
    ),
  }),
  mkQ({
    id: 'cur_NE_37',
    countryCode: 'NE',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 3,
    topicKey: 'le_tchoukou_fromage_sec_sahel',
    source: 'Traditions pastorales — Tahoua & Agadez',
    prompt: L(
      'Quel fromage traditionnel très sec et finement feuilleté, façonné sur des nattes de paille par les femmes pastorales touarègues et peules, se conserve plusieurs mois sous le climat sahélien ?',
      'Which dry, flaky traditional cheese pressed onto woven straw mats by Tuareg and Fulani pastoralist women keeps for months in the Sahelian climate?',
      '¿Qué queso tradicional muy seco, prensado sobre esteras de paja por mujeres pastoras tuaregs y fulani, se conserva meses en el Sahel?',
      'Qual queijo tradicional bem seco, prensado sobre esteiras de palha por mulheres pastoras tuaregues e fulanis, dura meses no Sahel?',
      'أي جبن تقليدي جاف تصنعه النساء الرعويات من الطوارق والفولاني على حصائر القش ويصمد أشهراً في مناخ الساحل؟'
    ),
    countryModePrompt: L(
      'Quel fromage sec pastoral, réputé notamment dans les régions de Tahoua et Agadez et souvent consommé avec du thé vert ou réduit en poudre dans les sauces, tient son nom du tamasheq ?',
      'Which dry nomadic cheese from regions like Tahoua and Agadez is pressed on straw mats and often enjoyed alongside desert mint tea?',
      '¿Qué queso seco pastoral típico de Tahoua y Agadez se prensa en esterillas de paja y acompaña al té del desierto?',
      'Qual queijo seco pastoral típico de Tahoua e Agadez é prensado em esteiras de palha e servido com chá verde?',
      'ما اسم الجبن البدوي الجاف المشهور في تاهوا وأغاديز والذي يُجفف على حصائر القش ويُقدم غالباً مع الشاي؟'
    ),
    correct: L('Le tchoukou', 'Tchoukou cheese', 'Queso tchoukou', 'Queijo tchoukou', 'جبن تشوكو'),
    distractors: [
      L('Le wagashi', 'Wagashi cheese', 'Queso wagashi', 'Queijo wagashi', 'جبن واغاشي'),
      L('Le halloumi', 'Halloumi', 'Halloumi', 'Halloumi', 'الحلومي'),
      L('Le jibna', 'Jibna', 'Jibna', 'Jibna', 'الجبنة'),
    ],
    explanation: L(
      'Riche en calcium et parfaitement adapté à la vie nomade, le tchoukou tire sa texture marquée des fines tiges de la natte sur laquelle il sèche au soleil.',
      'Sun-dried on woven palm mats that leave distinctive ridges on its crust, tchoukou is a nutrient-dense staple of desert herders.',
      'Secado al sol sobre esteras que dejan sus características marcas, el tchoukou es esencial en la dieta pastoral.',
      'Seco ao sol sobre esteiras que marcam sua superfície, o tchoukou é alimento valioso da vida nômade.',
      'يجفف جبن التشوكو تحت الشمس فوق حصائر تترك نقوشها عليه، وهو غذاء غني يلائم حياة الترحال الصحراوي.'
    ),
  }),
  mkQ({
    id: 'cur_NE_38',
    countryCode: 'NE',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'fura_da_nono_mil_lait_caille',
    source: 'Boissons & encas traditionnels du Sahel',
    prompt: L(
      'Quelle préparation rafraîchissante très populaire dans les rues et marchés associe des boulettes de mil cuit et épicé écrasées dans du lait caillé frais ?',
      'Which refreshing street-market favourite blends spiced cooked millet dough balls mashed into cool fermented milk?',
      '¿Qué bebida nutritiva muy popular combina bolas de mijo cocido y especiado desmenuzadas en leche cuajada fresca?',
      'Qual preparo refrescante muito popular combina bolinhas de milheto cozido e temperado desmanchadas em leite coalhado fresco?',
      'أي مشروب ووجبة خفيفة شهيرة يمزج كرات الدخن المطهوة والمتبلة داخل اللبن الرائب البارد؟'
    ),
    countryModePrompt: L(
      'Comment appelle-t-on le mélange rafraîchissant de boules de farine de mil cuites aux épices (gingembre, clou de girofle) délayées dans du lait caillé (« nono ») ?',
      'What is the popular refreshing drink made by mashing spiced millet dough balls (ginger and cloves) into fermented cow’s milk ("nono")?',
      '¿Cómo se llama la mezcla refrescante de bolas de mijo con jengibre y clavo disueltas en leche cuajada ("nono")?',
      'Como se chama a mistura refrescante de bolas de milheto com gengibre e cravo dissolvidas em leite coalhado ("nono")?',
      'ما اسم الخليط المنعش المكون من كرات الدخن بالزنجبيل والقرنفل الممزوجة بالحليب الرائب؟'
    ),
    correct: L('Le fura da nono', 'Fura da nono', 'Fura da nono', 'Fura da nono', 'فورا دا نونو'),
    distractors: [
      L('Le gingembre ananas', 'Pineapple ginger juice', 'Jugo de piña y jengibre', 'Suco de abacaxi com gengibre', 'عصير الأناناس بالزنجبيل'),
      L('Le zoom-koom', 'Zoom-koom', 'Zoom-koom', 'Zoom-koom', 'زوم كوم'),
      L('Le bouye', 'Bouye (baobab juice)', 'Bouye (jugo de baobab)', 'Suco de baobá', 'عصير الباوباب'),
    ],
    explanation: L(
      'Vendu dans des calebasses glacées par les vendeuses peules et haoussa, le fura da nono constitue à la fois une boisson désaltérante et un repas nourrissant.',
      'Prepared with millet, ginger, cloves, and cool cultured milk, fura da nono offers both thirst-quenching freshness and lasting energy.',
      'Preparado con mijo, especias y leche fermentada fría, el fura da nono aporta frescor y energía duradera.',
      'Preparado com milheto, especiarias e leite fermentado fresco, o fura da nono refresca e alimenta.',
      'يُعد مشروب فورا دا نونو باللبن الرائب والدخن المتبل بالزنجبيل والقرنفل غذاءً منعشاً ومشبعاً في حر الساحل.'
    ),
  }),
  mkQ({
    id: 'cur_NE_39',
    countryCode: 'NE',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'langues_nationales_haoussa_zarma',
    source: 'Constitution & Politique linguistique du Niger',
    prompt: L(
      'Quelles sont les deux langues nationales parlées par la très grande majorité de la population du Niger, l’une plutôt au centre-est et l’autre dans l’ouest autour de Niamey ?',
      'Which two national languages are spoken by the overwhelming majority of Niger’s population—one across the centre-east and the other in the west around Niamey?',
      '¿Cuáles son las dos lenguas nacionales habladas por la gran mayoría de la población de Níger, una en el centro-este y otra en el oeste?',
      'Quais são as duas línguas nacionais faladas pela grande maioria da população do Níger, uma no centro-leste e outra no oeste?',
      'ما اللغتان الوطنيتان الرئيسيتان اللتان يتحدث بهما غالبية سكان النيجر في الوسط والشرق وفي الغرب حول نيامي؟'
    ),
    countryModePrompt: L(
      'Quelles sont les deux langues nationales les plus parlées du pays — respectivement majoritaire du centre à l’est et dominante dans l’ouest autour de Niamey ?',
      'Which two national languages are the most widely spoken—predominating from the centre-east and around western Niamey respectively?',
      '¿Cuáles son las dos lenguas nacionales más habladas del país, dominantes respectivamente en el centro-este y en torno a Niamey?',
      'Quais são as duas línguas nacionais mais faladas no país, dominantes no centro-leste e no oeste em torno de Niamey?',
      'ما أكثر لغتين وطنيتين انتشاراً في البلاد بين الوسط والشرق من جهة والغرب حول نيامي من جهة أخرى؟'
    ),
    correct: L('Le haoussa et le zarma-songhaï', 'Hausa and Zarma-Songhai', 'Hausa y zarma-songhai', 'Hauçá e zarma-songhai', 'الهوسا والزارما السونغاي'),
    distractors: [
      L('Le bambara et le dioula', 'Bambara and Dioula', 'Bambara y dioula', 'Bambara e dioula', 'البامبارا والديولا'),
      L('Le wolof et le sérère', 'Wolof and Serer', 'Wólof y serer', 'Uólofe e serere', 'الولوف والسيرير'),
      L('Le lingala et le swahili', 'Lingala and Swahili', 'Lingala y suajili', 'Lingala e suaíli', 'اللينغالا والسواحيلية'),
    ],
    explanation: L(
      'Le haoussa (plus de la moitié des locuteurs) et le zarma-songhaï (environ un quart) coexistent avec huit autres langues nationales dont le fulfuldé, le tamasheq et le kanouri.',
      'Hausa and Zarma-Songhai are the two widest-spoken national languages alongside Fulfulde, Tamasheq, Kanuri, Tubu, Buduma, Gourmanchéma, and Arabic.',
      'El hausa y el zarma-songhai conviven con otras lenguas nacionales como el fulfulde, tamasheq y kanuri.',
      'O hauçá e o zarma-songhai convivem com outras línguas nacionais como fulfulde, tamasheq e kanúri.',
      'تُعد الهوسا والزارما السونغاي اللغتين الأوسع انتشاراً إلى جانب الفولفولدي والتماشق والكانوري وغيرها.'
    ),
  }),
  mkQ({
    id: 'cur_NE_40',
    countryCode: 'NE',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 3,
    topicKey: 'fete_fantasia_dosso_zinder',
    source: 'Patrimoine équestre — Chefferies de Dosso et Zinder',
    prompt: L(
      'Quelle spectaculaire parade équestre des chefferies traditionnelles, avec cavaliers en boubous brodés et chevaux richement harnachés galopant en ligne, anime les grandes fêtes de Dosso et Zinder ?',
      'Which spectacular equestrian parade of traditional chieftaincies features riders in embroidered robes on ornate horses charging in unison at festivals in Dosso and Zinder?',
      '¿Qué espectacular desfile ecuestre tradicional reúne a jinetes ricamente ataviados en las fiestas de Dosso y Zinder?',
      'Qual espetacular desfile equestre tradicional reúne cavaleiros ricamente paramentados nas festas de Dosso e Zinder?',
      'أي عرض فروسية تقليدي مهيب يجتمع فيه الفرسان بملابسهم المطرزة وخيولهم المزينة في احتفالات دوسو وزيندر؟'
    ),
    countryModePrompt: L(
      'Quel nom donne-t-on aux prestigieuses charges de cavaliers en tenues d’apparat devant les palais des sultans de Zinder ou du Djermakoy de Dosso ?',
      'What name is given to the ceremonial horseback charges performed in ornate regalia before the palaces of Zinder and Dosso?',
      '¿Qué nombre reciben los desfiles ceremoniales de caballería frente a los palacios tradicionales de Zinder y Dosso?',
      'Qual nome recebem os cortejos cerimoniais de cavalaria diante dos palácios tradicionais de Zinder e Dosso?',
      'ما الاسم الذي يُطلق على عروض الفروسية الاحتفالية المهيبة أمام قصور السلاطين في زيندر ودوسو؟'
    ),
    correct: L('La fantasia (ou durbar)', 'Fantasia (Durbar)', 'La fantasía (durbar)', 'A fantasia (durbar)', 'الفانتازيا (الفروسية التقليدية)'),
    distractors: [
      L('La régate des pirogues', 'Pirogue regatta', 'Regata de piraguas', 'Regata de pirogas', 'سباق القوارب'),
      L('La danse des échasses', 'Stilt dance', 'Danza de zancos', 'Dança de pernas de pau', 'رقصة العصي الطويلة'),
      L('Le saut de la corde', 'Rope leap', 'Salto de cuerda', 'Salto da corda', 'القفز بالحبل'),
    ],
    explanation: L(
      'Héritée des cavaleries des anciens royaumes du Sahel central, la fantasia réunit trompettes kakaki, tambours et cavaliers lors des fêtes religieuses et intronisations.',
      'Echoing the cavalry heritage of central Sahelian kingdoms, durbar horsemen charge to the sound of long kakaki trumpets during major celebrations.',
      'Heredera de las caballerías históricas del Sahel, la fantasía deslumbra al son de largas trompetas kakaki.',
      'Herança das cavalarias históricas do Sahel, a fantasia deslumbra ao som de longas trombetas kakaki.',
      'تجسد عروض الفروسية إرث الفرسان التاريخي في سلطنات الساحل على إيقاع الأبواق النحاسية الطويلة.'
    ),
  }),
  mkQ({
    id: 'cur_NE_41',
    countryCode: 'NE',
    category: 'culture',
    subCategory: 'sciences_innovations',
    difficulty: 3,
    topicKey: 'foyer_ameliore_economie_bois',
    source: 'Centre national d’énergie solaire & reboisement sahélien',
    prompt: L(
      'À Niamey, quel institut créé dès 1965 sous l’impulsion d’Abdou Moumouni Dioffo fut l’un des premiers centres d’Afrique dédiés à la recherche sur l’énergie solaire ?',
      'Which research centre in Niamey, launched in 1965 under physicist Abdou Moumouni Dioffo, became one of Africa’s earliest pioneers in solar energy?',
      '¿Qué centro de investigación de Niamey, impulsado desde 1965 por el físico Abdou Moumouni Dioffo, fue pionero en energía solar en África?',
      'Qual centro de pesquisa em Niamey, impulsionado desde 1965 pelo físico Abdou Moumouni Dioffo, foi pioneiro em energia solar na África?',
      'أي معهد في نيامي أنشئ منذ الستينيات بقيادة الفيزيائي عبدو موموني ديوفو ليكون رائداً إفريقياً في الطاقة الشمسية؟'
    ),
    countryModePrompt: L(
      'Quel célèbre physicien pionnier de l’énergie solaire en Afrique, inventeur de chauffe-eau solaires dès les années 1960, donne son nom à la plus grande université de Niamey ?',
      'Which pioneering solar-energy physicist who designed solar water heaters in the 1960s gave his name to the main public university in Niamey?',
      '¿Qué físico pionero de la energía solar en África desde los años 60 da nombre a la principal universidad de Niamey?',
      'Qual físico pioneiro da energia solar na África desde os anos 1960 dá nome à principal universidade de Niamey?',
      'أي عالم فيزياء رائد في الطاقة الشمسية منذ الستينيات تحمل أكبر جامعة في نيامي اسمه؟'
    ),
    correct: L('Abdou Moumouni Dioffo', 'Abdou Moumouni Dioffo', 'Abdou Moumouni Dioffo', 'Abdou Moumouni Dioffo', 'عبدو موموني ديوفو'),
    distractors: [
      L('Cheikh Modibo Diarra', 'Cheick Modibo Diarra', 'Cheick Modibo Diarra', 'Cheick Modibo Diarra', 'شيخ موديبو ديارا'),
      L('Souleymane Mboup', 'Souleymane Mboup', 'Souleymane Mboup', 'Souleymane Mboup', 'سليمان مبوب'),
      L('Francisca Nneka Okeke', 'Francisca Nneka Okeke', 'Francisca Nneka Okeke', 'Francisca Nneka Okeke', 'فرانسيسكا أوكيكي'),
    ],
    explanation: L(
      'Premier Africain francophone agrégé de physique et chercheur de renommée mondiale sur le solaire thermodynamique, Abdou Moumouni Dioffo dirigea l’ONERSOL puis donna son nom à l’Université de Niamey.',
      'The first Francophone African agrégé in physics, Abdou Moumouni Dioffo spearheaded ONERSOL’s solar research and inspired the naming of Niamey’s flagship university.',
      'Primer africano francófono catedrático de física, Abdou Moumouni Dioffo lideró la investigación solar y da nombre a la Universidad de Niamey.',
      'Primeiro africano francófono catedrático em física, Abdou Moumouni Dioffo liderou pesquisas solares e dá nome à Universidade de Niamey.',
      'كان الفيزيائي عبدو موموني ديوفو رائداً في أبحاث الطاقة الشمسية وحملت جامعة نيامي الكبرى اسمه تكريماً لإسهاماته.'
    ),
  }),
  mkQ({
    id: 'cur_NE_42',
    countryCode: 'NE',
    category: 'culture',
    subCategory: 'anecdotes_insolites',
    difficulty: 3,
    topicKey: 'dinosaures_gadoufaoua_nigersaurus',
    source: 'Paléontologie — Désert du Ténéré',
    prompt: L(
      'Quel célèbre gisement fossilifère du Ténéré, surnommé le « cimetière des dinosaures », a révélé des squelettes uniques comme le Ouranosaurus et le Nigersaurus ?',
      'Which famous fossil site in the Ténéré desert, nicknamed the "dinosaur graveyard", yielded remarkable species like Ouranosaurus and Nigersaurus?',
      '¿Qué célebre yacimiento fósil del Teneré, apodado el "cementerio de dinosaurios", reveló especies como Ouranosaurus y Nigersaurus?',
      'Qual famoso sítio fóssil do Ténéré, apelidado de "cemitério de dinossauros", revelou espécies como Ouranosaurus e Nigersaurus?',
      'أي موقع أحفوري شهير في صحراء تينيري يُلقب بـ"مقبرة الديناصورات" وكُشف فيه عن هيكل أورانوسورس؟'
    ),
    countryModePrompt: L(
      'Dans quel site paléontologique fameux de la bordure ouest du Ténéré a-t-on exhumé les fossiles spectaculaires d’Ouranosaurus, de Jobaria et de Sarcosuchus ?',
      'At which renowned palaeontological site along the western Ténéré were complete skeletons of Ouranosaurus, Jobaria, and giant Sarcosuchus unearthed?',
      '¿En qué famoso yacimiento paleontológico al borde del Teneré se hallaron fósiles de Ouranosaurus, Jobaria y Sarcosuchus?',
      'Em qual famoso sítio paleontológico na borda do Ténéré foram descobertos fósseis de Ouranosaurus, Jobaria e Sarcosuchus?',
      'في أي موقع أحفوري شهير على أطراف صحراء تينيري اكتُشفت هياكل أورانوسورس وجوباريا والتمساح العملاق ساركوسوكس؟'
    ),
    correct: L('Gadoufaoua', 'Gadoufaoua', 'Gadoufaoua', 'Gadoufaoua', 'غادوفاوا'),
    distractors: [
      L('Kouré', 'Kouré', 'Kouré', 'Kouré', 'كوري'),
      L('Téra', 'Téra', 'Téra', 'Téra', 'تيرا'),
      L('Diffa', 'Diffa', 'Diffa', 'Diffa', 'ديفا'),
    ],
    explanation: L(
      'Avant de devenir un désert de dunes, Gadoufaoua abritait au Crétacé inférieur des rivières verdoyantes où vivaient dinosaures à voile dorsale et crocodiles géants de 11 mètres.',
      'During the Early Cretaceous, Gadoufaoua was a lush river delta teeming with sail-backed dinosaurs and 11-metre Sarcosuchus super-crocodiles.',
      'En el Cretácico inferior, Gadoufaoua era un delta fluvial habitado por dinosaurios y cocodrilos gigantes de 11 metros.',
      'No Cretáceo Inferior, Gadoufaoua era um delta fértil povoado por dinossauros e crocodilos gigantes de 11 metros.',
      'كانت غادوفاوا في العصر الطباشيري منطقة أنهار خصبة، وأخرجت رمالها اليوم أحد أغنى كنوز حفريات الديناصورات في إفريقيا.'
    ),
  }),
  mkQ({
    id: 'cur_NE_43',
    countryCode: 'NE',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'le_masa_galette_mil_riz',
    source: 'Cuisine matinale sahélienne',
    prompt: L(
      'Comment appelle-t-on les petites galettes moelleuses à base de pâte fermentée de riz ou de mil, cuites dans des alvéoles en terre cuite et très vendues le matin au Sahel ?',
      'What are the soft, slightly tangy fermented rice or millet pancakes cooked in clay dimple-pans and sold widely each morning called?',
      '¿Cómo se llaman las tortitas esponjosas de arroz o mijo fermentado cocidas en moldes de barro y vendidas por las mañanas?',
      'Como se chamam os bolinhos macios de arroz ou milheto fermentado assados em formas de barro nas manhãs?',
      'ما اسم الفطائر الصغيرة الهشة المصنوعة من عجينة الأرز أو الدخن المخمرة والمطهوة في قوالب فخارية صباحاً؟'
    ),
    countryModePrompt: L(
      'Quelles petites galettes dorées de farine de riz ou de mil fermenté, cuites dans des moules à alvéoles et dégustées avec du sucre ou du piment yaji, embaument les marchés du matin ?',
      'Which golden fermented rice-or-millet cakes cooked in dimpled clay griddles and served with sugar or spiced yaji fill morning markets with aroma?',
      '¿Qué tortitas doradas de arroz o mijo fermentado servidas con azúcar o yaji aromatizan los mercados matutinos?',
      'Quais bolinhos dourados de arroz ou milheto fermentado servidos com açúcar ou yaji perfumam as feiras matinais?',
      'ما الفطائر الذهبية المصنوعة من الأرز أو الدخن المخمر والتي تُباع صباحاً مع السكر أو التوابل الحارة؟'
    ),
    correct: L('Les masa (ou waina)', 'Masa (Waina)', 'Masa (waina)', 'Masa (waina)', 'فطائر ماسا (واينا)'),
    distractors: [
      L('Les beignets mikate', 'Mikate puffs', 'Buñuelos mikate', 'Bolinhos mikate', 'كرات ميكاتي'),
      L('Les samoussas', 'Samosas', 'Samosas', 'Chamuças', 'السمبوسة'),
      L('Les chapatis', 'Chapatis', 'Chapatis', 'Chapatis', 'الشباتي'),
    ],
    explanation: L(
      'Cuites dans des plaques alvéolées huilées au beurre de karité ou à l’arachide, les masa offrent une croûte croustillante et un cœur moelleux apprécié à toute heure.',
      'Cooked in sizzling dimpled clay griddles, crispy-edged masa cakes make a beloved breakfast or snack alongside spiced peanut yaji or honey.',
      'Cocidas en moldes calientes con alvéolos, las tortitas masa combinan bordes crujientes con un interior tierno.',
      'Assadas em formas furadas aquecidas, as massas combinam borda crocante com miolo macio no café da manhã.',
      'تُطهى فطائر الماسا في قوالب ساخنة لتمنح قرمشة خارجية وقلباً طرياً يتناوله الجميع في الصباح.'
    ),
  }),
  mkQ({
    id: 'cur_NE_44',
    countryCode: 'NE',
    category: 'culture',
    subCategory: 'economie_developpement',
    difficulty: 2,
    topicKey: 'oignon_violet_galmi',
    source: 'Agriculture commerciale — Vallée de Galmi (Tahoua)',
    prompt: L(
      'Quel célèbre produit agricole de la vallée de Galmi dans la région de Tahoua est réputé pour sa couleur pourpre et sa saveur intense sur tous les marchés d’Afrique de l’Ouest ?',
      'Which famous agricultural crop from the Galmi valley in Tahoua is prized across West African markets for its purple skin and rich aroma?',
      '¿Qué famoso producto agrícola del valle de Galmi en Tahoua destaca en los mercados de África Occidental por su color púrpura e intenso sabor?',
      'Qual famoso produto agrícola do vale de Galmi em Tahoua é valorizado na África Ocidental pela cor roxa e aroma intenso?',
      'أي محصول زراعي شهير من وادي غالمي في تاهوا يشتهر بلونه البنفسجي ونكهته القوية في أسواق غرب إفريقيا؟'
    ),
    countryModePrompt: L(
      'Quel légume emblématique cultivé dans la localité de Galmi (région de Tahoua) est exporté par milliers de tonnes vers toute l’Afrique de l’Ouest ?',
      'Which celebrated purple vegetable grown around Galmi in the Tahoua region is exported by the thousands of tonnes across West Africa?',
      '¿Qué hortaliza emblemática cultivada en Galmi (Tahoua) se exporta por miles de toneladas a toda África Occidental?',
      'Qual hortaliça emblemática cultivada em Galmi (Tahoua) é exportada em milhares de toneladas pela África Ocidental?',
      'أي منتج زراعي بنفسجي اللون يُزرع في بلدة غالمي بتاهوا ويُصدر بآلاف الأطنان إلى دول غرب إفريقيا؟'
    ),
    correct: L('L’oignon violet de Galmi', 'Violet de Galmi onion', 'Cebolla morada de Galmi', 'Cebola roxa de Galmi', 'البصل البنفسجي لـغالمي'),
    distractors: [
      L('Le manioc doux de Dosso', 'Dosso sweet cassava', 'Yuca dulce de Dosso', 'Mandioca doce de Dosso', 'الكسافا الحلوة لدوسو'),
      L('L’igname de Gaya', 'Gaya yam', 'Ñame de Gaya', 'Inhame de Gaya', 'اليام في غايا'),
      L('La banane de Diffa', 'Diffa banana', 'Plátano de Diffa', 'Banana de Diffa', 'موز ديفا'),
    ],
    explanation: L(
      'Labellisé en indication géographique protégée, l’oignon violet de Galmi est prisé des cuisiniers de Dakar à Abidjan et Lagos pour son goût sucré-piquant et sa longue conservation.',
      'Protected as a regional hallmark, the Violet de Galmi onion is coveted by cooks from Dakar to Abidjan for its pungent sweetness and shelf life.',
      'Reconocida por su calidad regional, la cebolla morada de Galmi es muy apreciada desde Dakar hasta Abiyán.',
      'Famosa em toda a região, a cebola roxa de Galmi é muito procurada de Dacar a Abidjan por seu sabor marcante.',
      'يحظى البصل البنفسجي المزروع في غالمي بشهرة إقليمية واسعة بفضل مذاقه المميز وقدرته العالية على التخزين.'
    ),
  }),
];

import { L } from '../../countriesPart1';
import { mkQ } from './packHelpers';

export const GUINEA_CURATED_PACK = [
  mkQ({
    id: 'cur_GN_01',
    countryCode: 'GN',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 1,
    topicKey: 'water_tower_west_africa',
    source: 'Géographie physique de l’Afrique de l’Ouest',
    prompt: L(
      'Pour quelle raison hydrologique majeure la Guinée porte-t-elle fièrement le surnom de « Château d’eau de l’Afrique de l’Ouest » ?',
      'For what major hydrological reason is Guinea proudly nicknamed the "Water Tower of West Africa"?',
      '¿Por qué gran razón hidrológica se apoda a Guinea la «Torre de agua de África Occidental»?',
      'Por qual grande razão hidrológica a Guiné é apelidada de "Caixa d’água da África Ocidental"?',
      'لماذا تُلقب غينيا بـ«خزان مياه غرب أفريقيا»؟'
    ),
    countryModePrompt: L(
      'Pourquoi ce pays porte-t-il le célèbre surnom géographique de « Château d’eau de l’Afrique de l’Ouest » ?',
      'Why does the country carry the famous geographical nickname "Water Tower of West Africa"?',
      '¿Por qué el país recibe el famoso apodo geográfico de «Torre de agua de África Occidental»?',
      'Por que o país recebe o famoso apelido geográfico de "Caixa d’água da África Ocidental"?',
      'لماذا تحظى البلاد باللقب الجغرافي الشهير «خزان مياه غرب أفريقيا»؟'
    ),
    correct: L('Les grands fleuves Niger, Sénégal et Gambie y prennent tous leur source', 'The great Niger, Senegal, and Gambia rivers all rise within its highlands', 'Los grandes ríos Níger, Senegal y Gambia nacen en sus macizos', 'Os grandes rios Níger, Senegal e Gâmbia nascem todos em seus planaltos', 'تنبع من مرتفعاتها أنهار النيجر والسنغال وغامبيا الكبرى'),
    distractors: [
      L('Elle est entièrement recouverte de glaciers polaires', 'It is covered by polar ice caps', 'Está cubierta por glaciares polares', 'É coberta por geleiras polares', 'تغطيها الأنهار الجليدية القطبية'),
      L('Elle ne reçoit aucune pluie de toute l’année', 'It receives zero rainfall year-round', 'No recibe ninguna lluvia al año', 'Não recebe chuvas o ano todo', 'لا تشهد أي أمطار طوال العام'),
      L('Elle possède la plus grande usine de dessalement du Pacifique', 'It operates the Pacific’s largest desalination plant', 'Opera la mayor desalinizadora del Pacífico', 'Opera a maior dessalinizadora do Pacífico', 'تمتلك أكبر محطة تحلية في المحيط الهادئ'),
    ],
    explanation: L(
      'Près de 1 160 cours d’eau prennent leur source en Guinée, notamment dans le Fouta-Djalon et la Dorsale guinéenne, irriguant toute la sous-région.',
      'Over 1,100 rivers and streams—including the Niger, Senegal, and Gambia—originate in its mountainous highlands.',
      'Más de mil cursos de agua, incluidos el Níger, Senegal y Gambia, nacen en sus tierras altas.',
      'Mais de mil cursos d’água, incluindo Níger, Senegal e Gâmbia, nascem em seus planaltos.',
      'ينبع من هضابها أكثر من ألف مجرى مائي بينها أنهار النيجر والسنغال وغامبيا.'
    ),
  }),
  mkQ({
    id: 'cur_GN_02',
    countryCode: 'GN',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'dame_de_mali_mount_loura',
    source: 'Géographie du Fouta-Djalon — Préfecture de Mali',
    prompt: L(
      'Quelle célèbre falaise de granit au sommet du mont Loura (dans la préfecture de Mali) dessine naturellement le profil sculpté d’un visage féminin ?',
      'Which famous granite cliff near Mount Loura (in Mali Prefecture) naturally forms the silhouette of a woman’s profile?',
      '¿Qué célebre acantilado de granito en el monte Loura dibuja naturalmente el perfil de un rostro femenino?',
      'Qual célebre falésia de granito no monte Loura forma naturalmente a silhueta de um rosto feminino?',
      'ما الجرف الجرانيتي الشهير على قمة جبل لورا الذي يرسم طبيعياً ملامح وجه امرأة؟'
    ),
    correct: L('La Dame de Mali', 'The Lady of Mali (Dame de Mali)', 'La Dama de Mali', 'A Dama de Mali', 'سيدة مالي'),
    distractors: [
      L('La Falaise d’Étretat', 'Cliffs of Étretat', 'Acantilados de Étretat', 'Falésias de Étretat', 'منحدرات إيتريتا'),
      L('Le Pain de Sucre de Rio', 'Sugarloaf Mountain', 'Pan de Azúcar', 'Pão de Açúcar', 'جبل سوغرلوف'),
      L('Le Rocher de Gibraltar', 'Rock of Gibraltar', 'Peñón de Gibraltar', 'Rochedo de Gibraltar', 'صخرة جبل طارق'),
    ],
    explanation: L(
      'Culminant à 1 515 m dans le nord du Fouta-Djalon, la Dame de Mali fascine visiteurs et légendes locales par la finesse de sa silhouette rocheuse.',
      'Standing at 1,515 m in northern Fouta-Djalon, the striking natural rock sculpture overlooks vast West African valleys.',
      'A 1515 m en el norte de Fouta-Djalon, esta formación rocosa natural fascina por su silueta.',
      'A 1.515 m no norte de Fouta-Djalon, essa formação rochosa encanta por sua silhueta natural.',
      'تعلو صخرة «سيدة مالي» إلى 1515 متراً وتطل على وديان فوتا جالون الخلابة.'
    ),
  }),
  mkQ({
    id: 'cur_GN_03',
    countryCode: 'GN',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'iles_de_los_conakry',
    source: 'Géographie maritime — Basse-Guinée',
    prompt: L(
      'Quel petit archipel paradisiaque composé notamment de Kassa, Tamara et Roume se trouve juste au large de la presqu’île de Kaloum (Conakry) ?',
      'Which scenic island archipelago comprising Kassa, Tamara, and Roume lies just off the Kaloum peninsula?',
      '¿Qué archipiélago turístico formado por Kassa, Tamara y Roume se encuentra frente a la península de Kaloum?',
      'Qual arquipélago cênico composto por Kassa, Tamara e Roume fica diante da península de Kaloum?',
      'ما الأرخبيل الساحلي الخلاب المؤلف من جزر كاسا وتامارا وروم قبالة شبه جزيرة كالوم؟'
    ),
    correct: L('Les Îles de Loos', 'The Îles de Los', 'Las Islas de Los', 'As Ilhas de Los', 'جزر لوس'),
    distractors: [
      L('Les Îles Bijagos', 'Bijagos Islands', 'Islas Bijagós', 'Ilhas Bijagós', 'جزر بيجاغوس'),
      L('Les Îles Baléares', 'Balearic Islands', 'Islas Baleares', 'Ilhas Baleares', 'جزر البليار'),
      L('Les Îles Lofoten', 'Lofoten Islands', 'Islas Lofoten', 'Ilhas Lofoten', 'جزر لوفوتين'),
    ],
    explanation: L(
      'D’origine volcanique, les Îles de Loos (de l’ancien portugais « Ilhas dos Ídolos ») auraient même inspiré le célèbre roman « L’Île au trésor » de Stevenson.',
      'Named from the Portuguese "Ilhas dos Ídolos," the Loos Islands are famed for white-sand beaches and maritime history.',
      'Llamadas antaño «Ilhas dos Ídolos», destacan por sus playas de arena blanca y su historia marítima.',
      'Batizadas pelos portugueses de "Ilhas dos Ídolos", encantam pelas praias de areia branca.',
      'سُميت قديماً «جزر الأصنام» وتشتهر بشواطئها البيضاء وتاريخها البحري.'
    ),
  }),
  mkQ({
    id: 'cur_GN_04',
    countryCode: 'GN',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 2,
    topicKey: 'bauxite_boké_simandou_iron',
    source: 'Ministère des Mines / USGS — Ressources minérales',
    prompt: L(
      'De quel minerai indispensable à la fabrication de l’aluminium la Guinée détient-elle les plus grandes réserves prouvées au monde (notamment à Boké, Sangarédi et Fria) ?',
      'Of which mineral essential for aluminum production does Guinea hold the world’s largest proven reserves, notably around Boké, Sangarédi, and Fria?',
      '¿De qué mineral clave para producir aluminio posee Guinea las mayores reservas probadas del mundo (Boké, Sangarédi, Fria)?',
      'De qual minério essencial para produzir alumínio a Guiné detém as maiores reservas provadas do mundo (Boké, Sangarédi, Fria)?',
      'ما المعدن الأساسي لصناعة الألمنيوم الذي تمتلك غينيا أكبر احتياطي مؤكد منه في العالم (خصوصاً في بوكي وسانغاريدي)؟'
    ),
    countryModePrompt: L(
      'Pour quel minerai rouge exploité à Boké, Sangarédi et Kindia — matière première de l’aluminium — le pays possède-t-il les premières réserves mondiales ?',
      'For which reddish aluminum-ore mineral mined in Boké, Sangarédi, and Kindia does the country hold the largest reserves on Earth?',
      '¿De qué mineral rojizo base del aluminio extraído en Boké y Sangarédi posee el país las mayores reservas mundiales?',
      'De qual minério avermelhado base do alumínio extraído em Boké e Sangarédi o país detém as maiores reservas mundiais?',
      'ما المعدن الأحمر المستخرج من بوكي وسانغاريدي والذي تمتلك فيه البلاد أكبر احتياطي عالمي؟'
    ),
    correct: L('La bauxite', 'Bauxite', 'La bauxita', 'A bauxita', 'البوكسيت'),
    distractors: [
      L('L’étain polaire', 'Polar tin', 'Estaño', 'Estanho', 'القصدير'),
      L('Le lithium marin', 'Marine lithium', 'Litio', 'Lítio', 'الليثيوم'),
      L('L’ardoise bleue', 'Blue slate', 'Pizarra', 'Ardósia', 'الأردواز'),
    ],
    explanation: L(
      'Première réserve mondiale de bauxite et bientôt fournisseur majeur de minerai de fer grâce à la chaîne du Simandou, le sous-sol du pays est exceptionnellement riche.',
      'Holding roughly a quarter of global bauxite reserves alongside the giant Simandou iron-ore range, mining drives major rail and port growth.',
      'Junto al gigante yacimiento de hierro de Simandou, la bauxita coloca al país en el centro de la minería mundial.',
      'Ao lado da jazida de ferro de Simandou, a bauxita destaca o país na mineração mundial.',
      'إلى جانب مناجم حديد سيماندو الضخمة، يجعل البوكسيت البلاد محوراً معدنياً عالمياً.'
    ),
  }),
  mkQ({
    id: 'cur_GN_05',
    countryCode: 'GN',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'voile_de_la_mariee_kambadaga',
    source: 'Sites naturels — Kindia & Pita',
    prompt: L(
      'Près de Kindia, quelles cascades spectaculaires très appréciées des voyageurs portent un nom poétique évoquant une robe de cérémonie ?',
      'Near Kindia, which spectacular waterfalls carry a poetic name evoking a traditional wedding garment?',
      'Cerca de Kindia, ¿qué espectaculares cascadas llevan un nombre poético que evoca una prenda nupcial?',
      'Perto de Kindia, quais cachoeiras espetaculares levam um nome poético que evoca uma vestimenta nupcial?',
      'قرب كيندا، ما الشلالات الخلابة التي تحمل اسماً شاعرياً يرمز إلى طرحة العروس؟'
    ),
    correct: L('Les Chutes du Voile de la Mariée', 'Bridal Veil Falls (Voile de la Mariée)', 'Cataratas Velo de la Novia', 'Cachoeiras Véu da Noiva', 'شلالات طرحة العروس'),
    distractors: [
      L('Les Chutes du Niagara', 'Niagara Falls', 'Cataratas del Niágara', 'Cataratas do Niágara', 'شلالات نياغارا'),
      L('Les Chutes d’Iguazú', 'Iguazu Falls', 'Cataratas del Iguazú', 'Cataratas do Iguaçu', 'شلالات إغوازو'),
      L('Les Chutes du Rhin', 'Rhine Falls', 'Cataratas del Rin', 'Cataratas do Reno', 'شلالات الراين'),
    ],
    explanation: L(
      'Nappant une large paroi boisée à quelques kilomètres de Kindia, elles côtoient d’autres merveilles comme les chutes de Kambadaga près de Pita.',
      'Cascading softly over lush green cliffs outside Kindia, they complement the powerful Kambadaga Falls near Pita.',
      'Deslizándose sobre un muro verde cerca de Kindia, rivalizan en belleza con las cascadas de Kambadaga en Pita.',
      'Deslizando por um paredão verde perto de Kindia, rivalizam com as quedas de Kambadaga em Pita.',
      'تنساب هذه الشلالات برقة قرب كيندا إلى جانب شلالات كامباداغا الشهيرة قرب بيتا.'
    ),
  }),
  mkQ({
    id: 'cur_GN_06',
    countryCode: 'GN',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'four_natural_regions_gn',
    source: 'Géographie régionale nationale',
    prompt: L(
      'Quelles sont les quatre grandes régions naturelles complémentaires qui structurent le territoire de l’ouest à l’est et au sud-est ?',
      'Which four distinct natural geographic regions structure the country from the Atlantic coast to the southeastern forests?',
      '¿Qué cuatro grandes regiones naturales estructuran el territorio desde la costa hasta el sureste boscoso?',
      'Quais quatro grandes regiões naturais estruturam o território da costa até o sudeste florestal?',
      'ما الأقاليم الطبيعية الأربعة الكبرى التي يتشكل منها البلد من الساحل الغربي حتى الغابات الجنوبية الشرقية؟'
    ),
    correct: L('Basse-Guinée (Maritime), Moyenne-Guinée (Fouta-Djalon), Haute-Guinée et Guinée forestière', 'Maritime Guinea, Fouta-Djalon, Upper Guinea, and Forest Guinea', 'Baja Guinea, Media Guinea (Fouta-Djalon), Alta Guinea y Guinea Forestal', 'Baixa Guiné, Média Guiné (Fouta-Djalon), Alta Guiné e Guiné Florestal', 'غينيا البحرية وفوتا جالون وغينيا العليا وغينيا الغابية'),
    distractors: [
      L('Atlas, Sahara, Nil et Delta', 'Atlas, Sahara, Nile, and Delta', 'Atlas, Sáhara, Nilo y Delta', 'Atlas, Saara, Nilo e Delta', 'الأطلس والصحراء والنيل والدلتا'),
      L('Toundra, Taïga, Steppe et Banquise', 'Tundra, Taiga, Steppe, and Ice Sheet', 'Tundra, taiga y estepa', 'Tundra, taiga e estepe', 'التندرا والتايغا والسهوب'),
      L('Fjords, Alpes, Pampa et Patagonie', 'Fjords, Alps, Pampas, and Patagonia', 'Fiordos, Alpes y Pampa', 'Fiordes, Alpes e Pampa', 'الفيورد والألب والباتاغونيا'),
    ],
    explanation: L(
      'De la côte atlantique (Conakry, Boké) aux plateaux frais du Fouta (Labé), aux savanes de Kankan et aux forêts de Nzérékoré, ces quatre régions offrent une immense variété.',
      'From coastal mangroves to cool Fouta plateaus, Upper savannas (Kankan), and lush southern rainforests (Nzérékoré), geography spans four vivid ecosystems.',
      'Desde la costa hasta los valles frescos del Fouta, las sabanas de Kankan y las selvas de Nzérékoré.',
      'Da costa aos planaltos frescos do Fouta, às savanas de Kankan e às florestas de Nzérékoré.',
      'تتنوع تضاريس البلاد بين السواحل والمرتفعات المعتدلة والسافانا في كانكان والغابات المطيرة في نزيريكوري.'
    ),
  }),
  mkQ({
    id: 'cur_GN_07',
    countryCode: 'GN',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'kankan_labe_nzerekore_cities',
    source: 'Géographie urbaine nationale',
    prompt: L(
      'Quelle grande métropole universitaire de Haute-Guinée, bâtie sur les rives du fleuve Milo et réputée pour sa grande danse du Mamaya, est historiquement la deuxième ville du pays ?',
      'Which major Upper Guinea city on the Milo River—renowned for its university and the annual Mamaya dance—is historically the country’s second-largest city?',
      '¿Qué gran ciudad de Alta Guinea junto al río Milo, famosa por la danza Mamaya, es históricamente la segunda ciudad del país?',
      'Qual grande cidade da Alta Guiné às margens do rio Milo, famosa pela dança Mamaya, é historicamente a segunda maior do país?',
      'ما المدينة الكبرى في غينيا العليا على نهر ميلو والشهيرة برقصة مامايا والتي تُعد تاريخياً ثاني مدن البلاد؟'
    ),
    correct: L('Kankan', 'Kankan', 'Kankan', 'Kankan', 'كانكان'),
    distractors: [
      L('Boffa', 'Boffa', 'Boffa', 'Boffa', 'بوفا'),
      L('Dalaba', 'Dalaba', 'Dalaba', 'Dalaba', 'دالابا'),
      L('Fria', 'Fria', 'Fria', 'Fria', 'فريا'),
    ],
    explanation: L(
      'Capitale de la Haute-Guinée, Kankan rayonne par son université Julius Nyerere, son artisanat et ses célébrations musicales mandingues.',
      'Capital of Upper Guinea, Kankan is a historic crossroads of Malinké culture, scholarship, and music along the Milo River.',
      'Capital de Alta Guinea, Kankan irradia cultura mandinga, música y saber a orillas del río Milo.',
      'Capital da Alta Guiné, Kankan brilha pela cultura mandinga, música e saber às margens do rio Milo.',
      'تُعد كانكان حاضرة غينيا العليا ومركزاً تاريخياً للثقافة والموسيقى والتعليم.'
    ),
  }),
  mkQ({
    id: 'cur_GN_08',
    countryCode: 'GN',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 3,
    topicKey: 'simandou_iron_ore_mountains',
    source: 'Géologie d’Afrique de l’Ouest — Chaîne du Simandou',
    prompt: L(
      'Quelle longue chaîne de montagnes du sud-est (Guinée forestière), culminant au pic de Fon (1 658 m), renferme l’un des plus riches gisements inexploités de minerai de fer à haute teneur au monde ?',
      'Which long southeastern mountain range peaking at Pic de Fon (1,658 m) holds one of the richest high-grade iron ore deposits on Earth?',
      '¿Qué cordillera del sureste culminante en el pico de Fon alberga uno de los mayores yacimientos de hierro de alta ley del mundo?',
      'Qual cordilheira do sudeste culminando no pico de Fon abriga uma das maiores jazidas de ferro de alto teor do mundo?',
      'ما السلسلة الجبلية في الجنوب الشرقي التي تضم أحد أضخم احتياطيات خام الحديد عالي الجودة في العالم؟'
    ),
    correct: L('La Chaîne du Simandou', 'The Simandou Range', 'La Cordillera de Simandou', 'A Serra de Simandou', 'سلسلة جبال سيماندو'),
    distractors: [
      L('Les Monts de l’Estérel', 'Esterel Massif', 'Macizo de Esterel', 'Maciço de Esterel', 'جبال إستيريل'),
      L('La Cordillère Cantabrique', 'Cantabrian Mountains', 'Cordillera Cantábrica', 'Cordilheira Cantábrica', 'جبال كانتابريا'),
      L('Les Monts Grampians', 'Grampian Mountains', 'Montes Grampianos', 'Montes Grampianos', 'جبال غرامبيان'),
    ],
    explanation: L(
      'Longue de plus de 100 km entre Beyla et Kérouané, la chaîne du Simandou relie ses gisements au futur grand port en eau profonde de Moribayah par un chemin de fer transguinéen de 650 km.',
      'Stretching over 100 km, Simandou links massive high-grade iron deposits to a 650-km trans-national railway to the Atlantic coast.',
      'Con más de 100 km de extensión, Simandou está unido a un gran ferrocarril hacia el Atlántico.',
      'Com mais de 100 km de extensão, Simandou conecta suas reservas a uma grande ferrovia rumo ao Atlântico.',
      'يمتد مشروع سيماندو عبر سكة حديدية بطول 650 كم تربط المناجم بالمحيط الأطلسي.'
    ),
  }),
  mkQ({
    id: 'cur_GN_09',
    countryCode: 'GN',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 2,
    topicKey: 'samory_toure_wassoulou_empire',
    source: 'UNESCO — Histoire générale de l’Afrique (XIXe siècle)',
    prompt: L(
      'Quel grand stratège et souverain né près de Kérouané bâtit le puissant Empire du Wassoulou et mena pendant 16 ans (1882–1898) l’une des plus célèbres résistances militaires contre la colonisation en Afrique de l’Ouest ?',
      'Which brilliant strategist born near Kérouané built the powerful Wassoulou Empire and waged 16 years (1882–1898) of legendary military resistance against colonial conquest?',
      '¿Qué gran estratega nacido cerca de Kérouané forjó el Imperio de Wassoulou y lideró 16 años de brillante resistencia (1882-1898)?',
      'Qual grande estrategista nascido perto de Kérouané ergueu o Império de Wassoulou e liderou 16 anos de resistência militar (1882–1898)?',
      'من هو القائد والمخطط العسكري الكبير المولود قرب كيرواني الذي بنى إمبراطورية واسولو وقاد مقاومة استمرت 16 عاماً؟'
    ),
    correct: L('L’Almamy Samory Touré', 'Almamy Samori Touré', 'Almamy Samori Touré', 'Almamy Samori Touré', 'الإمام ساموري توري'),
    distractors: [
      L('Mansa Moussa', 'Mansa Musa', 'Mansa Musa', 'Mansa Musa', 'مانسا موسى'),
      L('Askia Mohammed', 'Askia Muhammad', 'Askia Mohammed', 'Askia Mohammed', 'أسكيا محمد'),
      L('Chaka Zoulou', 'Shaka Zulu', 'Shaka Zulu', 'Shaka Zulu', 'شاكا زولو'),
    ],
    explanation: L(
      'Créateur d’ateliers d’armement modernes à Bissandougou et d’une armée disciplinée de « sofas », Samory Touré reste un symbole majeur de souveraineté africaine.',
      'Organizing disciplined "sofa" regiments and skilled blacksmith workshops at Bissandougou, Samori Touré mounted an extraordinary defense of sovereignty.',
      'Organizando disciplinados regimientos y talleres propios en Bissandougou, Samori Touré defendió su soberanía hasta 1898.',
      'Organizando regimentos disciplinados e oficinas próprias em Bissandougou, Samori Touré defendeu sua soberania até 1898.',
      'أسس ساموري توري جيشاً منظماً وورش تصنيع سلاح محلية ودافع ببسالة عن السيادة الإفريقية.'
    ),
  }),
  mkQ({
    id: 'cur_GN_10',
    countryCode: 'GN',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'jeanne_martin_cisse_un_1972',
    source: 'Nations Unies — Conseil de sécurité (novembre 1972)',
    prompt: L(
      'Quelle diplomate, enseignante et militante née à Kankan entra dans l’histoire mondiale en novembre 1972 en devenant la toute première femme à présider le Conseil de sécurité de l’ONU ?',
      'Which Kankan-born teacher, activist, and diplomat made world history in November 1972 as the first woman ever to preside over the United Nations Security Council?',
      '¿Qué diplomática y militante nacida en Kankan hizo historia mundial en noviembre de 1972 al ser la primera mujer en presidir el Consejo de Seguridad de la ONU?',
      'Qual diplomata e militante nascida em Kankan entrou para a história em novembro de 1972 como a primeira mulher a presidir o Conselho de Segurança da ONU?',
      'من هي الدبلوماسية المولودة في كانكان التي دخلت التاريخ العالمي عام 1972 كأول امرأة تترأس مجلس الأمن الدولي؟'
    ),
    correct: L('Jeanne Martin Cissé', 'Jeanne Martin Cissé', 'Jeanne Martin Cissé', 'Jeanne Martin Cissé', 'جين مارتن سيسيه'),
    distractors: [
      L('Ellen Johnson Sirleaf', 'Ellen Johnson Sirleaf', 'Ellen Johnson Sirleaf', 'Ellen Johnson Sirleaf', 'إيلين جونسون سيرليف'),
      L('Wangari Maathai', 'Wangari Maathai', 'Wangari Maathai', 'Wangari Maathai', 'وانغاري ماثاي'),
      L('Miriam Makeba', 'Miriam Makeba', 'Miriam Makeba', 'Miriam Makeba', 'ميريام ماكيبا'),
    ],
    explanation: L(
      'Figure majeure de la lutte contre l’apartheid (Prix Lénine de la paix 1975) et pionnière des droits des femmes africaines, Jeanne Martin Cissé ouvrit la voie aux Nations unies.',
      'A champion against apartheid and pioneer for African women’s leadership, Jeanne Martin Cissé broke a historic global barrier at the UN.',
      'Pionera en la lucha contra el apartheid y por los derechos de las mujeres, rompió una barrera histórica en la ONU.',
      'Pioneira contra o apartheid e pelos direitos das mulheres, quebrou uma barreira histórica na ONU.',
      'تُعد جين مارتن سيسيه من أبرز المناضلات ضد الفصل العنصري ورائدة للعمل الدبلوماسي النسائي عالمياً.'
    ),
  }),
  mkQ({
    id: 'cur_GN_11',
    countryCode: 'GN',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'alpha_yaya_diallo_bokar_biro',
    source: 'Histoire du Fouta-Djalon (XIXe siècle)',
    prompt: L(
      'Quel célèbre Almamy du Fouta-Djalon livra la bataille héroïque de Porédaka en novembre 1896 pour défendre l’indépendance de la confédération théocratique du Fouta ?',
      'Which renowned Almamy of Fouta-Djalon fought the heroic Battle of Porédaka in November 1896 to defend the confederation’s independence?',
      '¿Qué célebre Almamy de Fouta-Djalon libró la heroica batalla de Porédaka en noviembre de 1896 por la independencia?',
      'Qual célebre Almamy de Fouta-Djalon travou a heroica Batalha de Porédaka em novembro de 1896 pela independência?',
      'من هو إمام فوتا جالون الشهير الذي خاض معركة بوريداكا البطولية في نوفمبر 1896 دفاعاً عن الاستقلال؟'
    ),
    correct: L('Almamy Bokar Biro Barry', 'Almamy Bokar Biro Barry', 'Almamy Bokar Biro Barry', 'Almamy Bokar Biro Barry', 'الإمام بوكار بيرو باري'),
    distractors: [
      L('Soundiata Keïta', 'Sundiata Keita', 'Sundiata Keita', 'Sundiata Keita', 'سوندياتا كيتا'),
      L('Kankou Moussa', 'Mansa Musa', 'Mansa Musa', 'Mansa Musa', 'مانسا موسى'),
      L('Ménélik II', 'Menelik II', 'Menelik II', 'Menelik II', 'منليك الثاني'),
    ],
    explanation: L(
      'Aux côtés d’Alpha Yaya Diallo (célébré dans l’hymne national « Liberté » !), Bokar Biro incarne la bravoure historique des peuples du Fouta-Djalon.',
      'Remembered alongside Alpha Yaya Diallo—honored in the melody of the national anthem "Liberté"—Bokar Biro stood firm at Porédaka.',
      'Recordado junto a Alpha Yaya Diallo —cuya gesta inspira el himno nacional—, resistió con valentía en Porédaka.',
      'Lembrado ao lado de Alpha Yaya Diallo —cuja gesta inspira o hino nacional—, resistiu bravamente em Porédaka.',
      'يُخلّد التاريخ شجاعة بوكار بيرو وألفا يايا ديالو الذي استُلهمت من سيرته أنغام النشيد الوطني.'
    ),
  }),
  mkQ({
    id: 'cur_GN_12',
    countryCode: 'GN',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 1,
    topicKey: 'october_2_1958_freedom_speech',
    source: 'Archives nationales — 2 octobre 1958',
    prompt: L(
      'À quelle date précise de 1958, quatre jours après son « NON » retentissant au référendum du 28 septembre, le pays devint-il le premier État francophone d’Afrique subsaharienne indépendant ?',
      'On which exact date in 1958—four days after its historic "NO" vote on September 28—did the country become the first French-speaking sub-Saharan nation to gain independence?',
      '¿En qué fecha exacta de 1958 —cuatro días tras el histórico «NO» del 28 de septiembre— logró ser el primer país francófono subsahariano independiente?',
      'Em que data exata de 1958 —quatro dias após o histórico "NÃO" de 28 de setembro— tornou-se o primeiro país francófono subsaariano independente?',
      'في أي تاريخ بالضبط من عام 1958 —بعد أربعة أيام من تصويت «لا» التاريخي— نالت البلاد استقلالها كأول دولة فرانكوفونية في أفريقيا جنوب الصحراء؟'
    ),
    correct: L('Le 2 octobre 1958', 'October 2, 1958', '2 de octubre de 1958', '2 de outubro de 1958', '2 أكتوبر 1958'),
    distractors: [
      L('Le 7 août 1960', 'August 7, 1960', '7 de agosto de 1960', '7 de agosto de 1960', '7 أغسطس 1960'),
      L('Le 1er janvier 1960', 'January 1, 1960', '1 de enero de 1960', '1 de janeiro de 1960', '1 يناير 1960'),
      L('Le 22 septembre 1960', 'September 22, 1960', '22 de septiembre de 1960', '22 de setembro de 1960', '22 سبتمبر 1960'),
    ],
    explanation: L(
      'Proclamée le 2 octobre 1958 à Conakry devant l’Assemblée territoriale, cette indépendance précoce inspira tous les mouvements souverainistes du continent.',
      'Proclaimed on October 2, 1958 in Conakry, early independence inspired freedom movements across the continent.',
      'Proclamada el 2 de octubre de 1958, esta temprana independencia inspiró a todo el continente.',
      'Proclamada em 2 de outubro de 1958, essa independência precoce inspirou todo o continente.',
      'ألهم إعلان الاستقلال المبكر في 2 أكتوبر 1958 حركات التحرر في عموم القارة الأفريقية.'
    ),
  }),
  mkQ({
    id: 'cur_GN_13',
    countryCode: 'GN',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'hadja_mafory_bangoura_women_1958',
    source: 'Histoire politique de l’indépendance (1950–1976)',
    prompt: L(
      'Quelle célèbre militante ouvrière et héroïne de l’indépendance, proche d’Ahmed Sékou Touré et première femme ministre du pays (Affaires sociales), mobilisa les femmes des marchés dès les années 1950 ?',
      'Which pioneering labor organizer and independence heroine—the country’s first female cabinet minister—mobilized market women during the 1950s?',
      '¿Qué célebre militante obrera e heroína de la independencia —primera mujer ministra del país— movilizó a las mujeres desde los años 50?',
      'Qual célebre militante operária e heroína da independência —primeira mulher ministra do país— mobilizou as mulheres nos anos 1950?',
      'من هي المناضلة العمالية وبطلة الاستقلال التي نظمت نساء الأسواق منذ الخمسينيات وأصبحت أول وزيرة في البلاد؟'
    ),
    correct: L('Hadja Mafory Bangoura', 'Hadja Mafory Bangoura', 'Hadja Mafory Bangoura', 'Hadja Mafory Bangoura', 'الحاجة مافوري بانغورا'),
    distractors: [
      L('Funmilayo Ransome-Kuti', 'Funmilayo Ransome-Kuti', 'Funmilayo Ransome-Kuti', 'Funmilayo Ransome-Kuti', 'فونميلايو رانسوم كوتي'),
      L('Yaa Asantewaa', 'Yaa Asantewaa', 'Yaa Asantewaa', 'Yaa Asantewaa', 'يا أسانتيوا'),
      L('Winnie Mandela', 'Winnie Mandela', 'Winnie Mandela', 'Winnie Mandela', 'ويني مانديلا'),
    ],
    explanation: L(
      'Surnommée la « mère de la révolution » et honorée sur des timbres et édifices publics, Mafory Bangoura fut une cheville ouvrière de la victoire de 1958.',
      'Honored as a founding mother of independence, Mafory Bangoura helped secure women’s vital participation in national politics.',
      'Recordada como madre fundadora de la independencia, impulsó decisivamente la participación cívica femenina.',
      'Homenageada como mãe fundadora da independência, impulsionou a participação cívica feminina.',
      'تُخلّد ذكراها كإحدى أمهات الاستقلال لدورها الحاسم في تعبئة النساء.'
    ),
  }),
  mkQ({
    id: 'cur_GN_14',
    countryCode: 'GN',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 3,
    topicKey: 'moneda_syli_franc_guineen',
    source: 'Banque centrale de la République de Guinée (BCRG)',
    prompt: L(
      'Comment s’appelait la monnaie nationale créée en 1972 en hommage au mot soussou désignant l’éléphant, avant le retour au Franc guinéen en 1986 ?',
      'What was the national currency introduced in 1972—named after the Susu word for "elephant"—before returning to the Guinean franc in 1986?',
      '¿Cómo se llamó la moneda nacional creada en 1972 con el nombre susú del elefante antes de volver al franco guineano en 1986?',
      'Como se chamou a moeda nacional criada em 1972 com o nome susu do elefante antes do retorno ao franco guineense em 1986?',
      'ما الاسم الذي حملته العملة الوطنية الصادرة عام 1972 تيمناً بكلمة «الفيل» بلغة السوسو قبل العودة للفرنك الغيني 1986؟'
    ),
    correct: L('Le Syli', 'The Syli', 'El Syli', 'O Syli', 'السيلي (Syli)'),
    distractors: [
      L('Le Dalasi', 'Dalasi', 'Dalasi', 'Dalasi', 'الدالاسي'),
      L('Le Leone', 'Leone', 'Leone', 'Leone', 'الليون'),
      L('Le Kwanza', 'Kwanza', 'Kwanza', 'Kwanza', 'الكوانزا'),
    ],
    explanation: L(
      'En langue soussou, « Syli » signifie l’éléphant : symbole de force, de mémoire et de sagesse, qui donne encore son nom au « Syli National » de football !',
      'Meaning "elephant" in Susu, "Syli" stood for strength and wisdom—and still names the national football squad, the Syli National!',
      '«Syli» significa elefante en susú, símbolo que aún hoy da nombre a la selección nacional de fútbol.',
      '"Syli" significa elefante em susu, símbolo que até hoje dá nome à seleção nacional de futebol.',
      'تعني «سيلي» الفيل بلغة السوسو، وما زالت تطلق اليوم لقباً على المنتخب الوطني لكرة القدم.'
    ),
  }),
  mkQ({
    id: 'cur_GN_15',
    countryCode: 'GN',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'mory_kante_yeke_yeke_kora',
    source: 'Patrimoine musical — Kora électrique (1987)',
    prompt: L(
      'Quel célèbre griot et musicien né à Albadaria (Kissidougou) a fait danser la planète entière en 1987 grâce au tube planétaire à la kora électrifiée « Yéké Yéké » ?',
      'Which famed Kissidougou-born griot and musician made the entire planet dance in 1987 with the global electric-kora smash hit "Yéké Yéké"?',
      '¿Qué célebre griot y músico nacido en Kissidougou hizo bailar al mundo en 1987 con el éxito «Yéké Yéké»?',
      'Qual célebre griô e músico nascido em Kissidougou fez o mundo dançar em 1987 com o sucesso "Yéké Yéké"?',
      'من هو الموسيقي والغريو الشهير المولود في كيسيدوغو الذي أمتع العالم عام 1987 بأغنية «ييكي ييكي» مع آلة الكورا الكهربائية؟'
    ),
    correct: L('Mory Kanté', 'Mory Kanté', 'Mory Kanté', 'Mory Kanté', 'موري كانتي'),
    distractors: [
      L('Toumani Diabaté', 'Toumani Diabaté', 'Toumani Diabaté', 'Toumani Diabaté', 'توماني دياباتي'),
      L('Manu Dibango', 'Manu Dibango', 'Manu Dibango', 'Manu Dibango', 'مانو ديبانغو'),
      L('Baaba Maal', 'Baaba Maal', 'Baaba Maal', 'Baaba Maal', 'بابا مال'),
    ],
    explanation: L(
      'Premier single africain à dépasser le million d’exemplaires vendus en Europe (n° 1 dans de nombreux pays), « Yéké Yéké » de Mory Kanté a propulsé la kora dans la pop mondiale.',
      '"Yéké Yéké" became the first African single to top European charts and sell over a million copies, uniting griot kora mastery with synth-funk.',
      '«Yéké Yéké» superó el millón de copias y llevó la kora tradicional a lo más alto de las listas internacionales.',
      '"Yéké Yéké" vendeu mais de um milhão de cópias e levou a kora ao topo das paradas internacionais.',
      'حقق موري كانتي بـ«ييكي ييكي» انتشاراً عالمياً غير مسبوق لآلة الكورا الأفريقية.'
    ),
  }),
  mkQ({
    id: 'cur_GN_16',
    countryCode: 'GN',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'bembeya_jazz_ballets_africains',
    source: 'Patrimoine musical — Beyla & Conakry (1961)',
    prompt: L(
      'Quel orchestre légendaire né en 1961 à Beyla, emmené par le guitariste Sékou Diabaté (« Diamond Fingers ») et Aboubacar Demba Camara, signa le chef-d’œuvre épique « Regard sur le passé » ?',
      'Which legendary orchestra founded in 1961 in Beyla—led by guitarist Sékou "Diamond Fingers" Diabaté and Demba Camara—created the epic "Regard sur le passé"?',
      '¿Qué legendaria orquesta fundada en Beyla en 1961 grabó la obra maestra «Regard sur le passé»?',
      'Qual lendária orquestra fundada em Beyla em 1961 gravou a obra-prima "Regard sur le passé"?',
      'ما الأوركسترا الأسطورية التي تأسست في بيلا عام 1961 وأبدعت الملحمة الموسيقية «نظرة إلى الماضي»؟'
    ),
    correct: L('Le Bembeya Jazz National', 'Bembeya Jazz National', 'Bembeya Jazz National', 'Bembeya Jazz National', 'بيمبيا جاز الوطني'),
    distractors: [
      L('Le Super Rail Band', 'Super Rail Band', 'Super Rail Band', 'Super Rail Band', 'سوبر رايل باند'),
      L('L’Orchestra Baobab', 'Orchestra Baobab', 'Orchestra Baobab', 'Orchestra Baobab', 'أوركسترا باوباب'),
      L('Le TP OK Jazz', 'TP OK Jazz', 'TP OK Jazz', 'TP OK Jazz', 'تي بي أوكيه جاز'),
    ],
    explanation: L(
      'Dédié à l’Almamy Samory Touré, l’album « Regard sur le passé » reste l’un des sommets de la musique mandingue moderne aux côtés des Ballets Africains de Fodéba Keïta.',
      'Tribute to Samori Touré, "Regard sur le passé" remains a cornerstone of modern Mandinka orchestra music alongside Les Ballets Africains.',
      'Dedicado a Samori Touré, «Regard sur le passé» es una cumbre de la música mandinga moderna.',
      'Dedicado a Samori Touré, "Regard sur le passé" é um marco eterno da música mandinga moderna.',
      'تُعد أسطوانة «نظرة إلى الماضي» التي تُخلد ساموري توري إحدى أعظم روائع الموسيقى الماندينغية الحديثة.'
    ),
  }),
  mkQ({
    id: 'cur_GN_17',
    countryCode: 'GN',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'djibril_tamsir_niane_monenembo',
    source: 'Littérature mandingue & Prix Renaudot 2008',
    prompt: L(
      'Quel grand historien et écrivain guinéen a recueilli la célèbre version écrite de « Soundiata ou l’épopée mandingue » auprès du griot Djeli Mamadou Kouyaté en 1960 ?',
      'Which eminent historian and writer recorded the classic written telling of "Sundiata: An Epic of Old Mali" from griot Djeli Mamadou Kouyaté in 1960?',
      '¿Qué gran historiador y escritor recogió en 1960 la célebre versión escrita de «Sundiata o la epopeya mandinga»?',
      'Qual grande historiador e escritor registrou em 1960 a célebre versão escrita de "Sundiata ou a epopeia mandinga"?',
      'من هو المؤرخ والأديب الكبير الذي دوّن عام 1960 النسخة الشهيرة من ملحمة «سوندياتا» عن الغريو مامادو كوياتي؟'
    ),
    correct: L('Djibril Tamsir Niane', 'Djibril Tamsir Niane', 'Djibril Tamsir Niane', 'Djibril Tamsir Niane', 'جبريل تامسير نياني'),
    distractors: [
      L('Amadou Hampâté Bâ', 'Amadou Hampâté Bâ', 'Amadou Hampâté Bâ', 'Amadou Hampâté Bâ', 'أمادو همباطي با'),
      L('Cheikh Hamidou Kane', 'Cheikh Hamidou Kane', 'Cheikh Hamidou Kane', 'Cheikh Hamidou Kane', 'شيخ حميدو كان'),
      L('Sony Labou Tansi', 'Sony Labou Tansi', 'Sony Labou Tansi', 'Sony Labou Tansi', 'سوني لابو تانسي'),
    ],
    explanation: L(
      'Grâce à Djibril Tamsir Niane (suivi plus tard par le Prix Renaudot 2008 Tierno Monénembo pour « Le Roi de Kahel »), la tradition orale mandingue a conquis les bibliothèques du monde entier.',
      'Djibril Tamsir Niane preserved West Africa’s oral epic for global readers—followed decades later by 2008 Prix Renaudot winner Tierno Monénembo.',
      'Gracias a Djibril Tamsir Niane, la epopeya oral mandinga llegó a los lectores de todo el mundo.',
      'Graças a Djibril Tamsir Niane, a epopeia oral mandinga alcançou leitores no mundo todo.',
      'خلّد جبريل تامسير نياني التراث الشفهي الماندينغي، كما فاز تييرنو مونينيمبو بجائزة رينودو 2008.'
    ),
  }),
  mkQ({
    id: 'cur_GN_18',
    countryCode: 'GN',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'fonio_grain_fouta_djalon',
    source: 'FAO — Patrimoine agricole du Fouta-Djalon',
    prompt: L(
      'Quelle minuscule céréale dorée ancestrale d’Afrique de l’Ouest (sans gluten, très digeste et cuite à la vapeur) est un trésor gastronomique du Fouta-Djalon, souvent servie aux fêtes avec de la sauce arachide ou du poisson ?',
      'Which tiny, gluten-free ancient West African grain—steamed fluffy like fine couscous—is a culinary treasure of Fouta-Djalon?',
      '¿Qué diminuto cereal ancestral sin gluten de África Occidental —cocido al vapor— es un tesoro culinario de Fouta-Djalon?',
      'Qual minúsculo cereal ancestral sem glúten da África Ocidental —cozido no vapor— é um tesouro culinário de Fouta-Djalon?',
      'ما الحبوب الذهبية الدقيقة القديمة الخالية من الغلوتين التي تُطهى على البخار وتُعد كنزاً غذائياً في فوتا جالون؟'
    ),
    correct: L('Le fonio', 'Fonio', 'El fonio', 'O fonio', 'حبوب الفونيو'),
    distractors: [
      L('L’orge perlé d’Écosse', 'Scottish pearl barley', 'Cebada perlada', 'Cevada perlada', 'الشعير الأسكتلندي'),
      L('Le riz sauvage canadien', 'Canadian wild rice', 'Arroz salvaje', 'Arroz selvagem', 'الأرز الكندي'),
      L('Le sarrasin breton', 'Buckwheat', 'Trigo sarraceno', 'Trigo-sarraceno', 'الحنطة السوداء'),
    ],
    explanation: L(
      'Cultivé depuis plus de 5 000 ans dans le Sahel et en Moyenne-Guinée, le fonio résiste à la sécheresse et a conquis les plus grands chefs africains.',
      'Cultivated in West Africa for over 5,000 years, drought-resilient fonio is prized across Fouta-Djalon and lauded by top chefs worldwide.',
      'Cultivado desde hace más de 5000 años, el fonio resiste la sequía y conquista hoy las mejores mesas.',
      'Cultivado há mais de 5.000 anos, o fonio resiste à seca e brilha hoje na gastronomia mundial.',
      'تُزرع حبوب الفونيو منذ أكثر من خمسة آلاف عام وتتحمل الجفاف وتحتل مكانة مميزة في المطبخ الغيني.'
    ),
  }),
  mkQ({
    id: 'cur_GN_19',
    countryCode: 'GN',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'konkoe_tiga_sauce_feuilles',
    source: 'Gastronomie populaire guinéenne',
    prompt: L(
      'En Basse-Guinée et à Conakry, quel plat convivial incontournable est préparé avec des feuilles de manioc pilées, du poisson fumé (konkoé), de l’huile de palme rouge et du riz blanc ?',
      'Across Conakry and Lower Guinea, which beloved dish stews pounded cassava leaves with smoked catfish (konkoé) and palm oil over white rice?',
      'En Conakri y Baja Guinea, ¿qué plato popular mezcla hojas de yuca majadas, pescado ahumado (konkoé) y aceite de palma con arroz?',
      'Em Conacri e Baixa Guiné, qual prato popular combina folhas de mandioca socadas, peixe defumado (konkoé) e azeite de dendê com arroz?',
      'في كوناكري وغينيا السفلى، ما الطبق الشعبي المحبوب المُحضّر من أوراق الكسافا المهروسة والسمك المدخن (كونكوي) وزيت النخيل؟'
    ),
    correct: L('La sauce feuilles de manioc (au konkoé)', 'Cassava leaf stew (with smoked konkoé fish)', 'Guiso de hojas de yuca (con konkoé)', 'Ensopado de folhas de mandioca (com konkoé)', 'يخنة أوراق الكسافا بالسمك المدخن'),
    distractors: [
      L('La fondue savoyarde au comté', 'Swiss cheese fondue', 'Fondue de queso', 'Fondue de queijo', 'فوندو الجبن'),
      L('La choucroute alsacienne', 'Alsatian sauerkraut', 'Chucrut alsaciano', 'Chucrute alsaciano', 'الملفوف المخلل'),
      L('Les lasagnes aux épinards', 'Spinach lasagna', 'Lasaña de espinacas', 'Lasanha de espinafre', 'لازانيا السبانخ'),
    ],
    explanation: L(
      'Riche et parfumée, la sauce feuilles de manioc rivalise avec le « Mafé tiga » (sauce arachide), le « Lafidi » et le riz gras sur toutes les tables.',
      'Hearty and fragrant, cassava leaf stew shares top honors at family gatherings with peanut stew (mafé tiga) and lafidi rice.',
      'Sabroso y aromático, comparte protagonismo familiar con el mafé de cacahuete y el arroz lafidi.',
      'Saboroso e aromático, divide a mesa festiva com o mafé de amendoim e o arroz lafidi.',
      'يُعد هذا الطبق إلى جانب صلصة الفول السوداني (مافي تيغا) والأرز من أشهر المأكولات العائلية.'
    ),
  }),
  mkQ({
    id: 'cur_GN_20',
    countryCode: 'GN',
    category: 'culture',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'leppi_indigo_kendou_textile',
    source: 'Patrimoine artisanal du Fouta-Djalon',
    prompt: L(
      'Comment s’appelle l’étoffe de coton traditionnelle tissée à la main en bandes et teinte à l’indigo naturel brillant dans le Fouta-Djalon (notamment à Labé et Kindia) ?',
      'What is the traditional hand-woven striped cotton textile naturally dyed in lustrous deep indigo across Fouta-Djalon (Labé, Kindia)?',
      '¿Cómo se llama el tradicional tejido de algodón en tiras teñido con índigo natural brillante en Fouta-Djalon?',
      'Como se chama o tradicional tecido de algodão em tiras tingido com índigo natural brilhante em Fouta-Djalon?',
      'ما اسم القماش القطني التقليدي المنسوج يدوياً والمصبوغ بالنيلة الطبيعية اللامعة في فوتا جالون؟'
    ),
    correct: L('Le Léppi (Kendou)', 'Léppi cloth (Kendou)', 'Tela Léppi (Kendou)', 'Tecido Léppi (Kendou)', 'نسيج الليبي (كيندو)'),
    distractors: [
      L('Le Cachemire écossais', 'Scottish cashmere', 'Cachemira escocesa', 'Caxemira escocesa', 'الكشمير الأسكتلندي'),
      L('La Dentelle de Bruges', 'Bruges lace', 'Encaje de Brujas', 'Renda de Bruges', 'دانتيل بروج'),
      L('Le Satin synthétique fluoré', 'Fluorescent satin', 'Satén fluorescente', 'Cetim fluorescente', 'الساتان الفلوري'),
    ],
    explanation: L(
      'Battu au maillet sur des rondins pour lui donner un éclat métallique mordoré unique, le léppi est porté avec fierté lors des mariages et grandes cérémonies.',
      'Beaten gently with wooden mallets for a distinctive metallic sheen, indigo léppi is treasured for weddings and celebrations.',
      'Golpeado con mazos para darle un brillo metálico único, el léppi se luce en bodas y grandes ceremonias.',
      'Batido com maços para ganhar um brilho metálico singular, o léppi brilha em casamentos e festas.',
      'يُدق القماش بمطارق خشبية ليمنحه بريقاً معدنياً مميزاً ويُرتدى في الأعراس والمناسبات.'
    ),
  }),
  mkQ({
    id: 'cur_GN_21',
    countryCode: 'GN',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 3,
    topicKey: 'mamaya_kankan_heritage_dance',
    source: 'Patrimoine culturel — Haute-Guinée (Kankan)',
    prompt: L(
      'Quelle célèbre fête chorégraphique annuelle de Haute-Guinée, organisée à Kankan à la fin du Ramadan (Tabaski/Aïd), rassemble des milliers de participants vêtus de tenues assorties dansant lentement en cercle ?',
      'Which celebrated annual festival in Kankan (Upper Guinea) gathers thousands in matching traditional robes for graceful circular dances after Eid?',
      '¿Qué célebre fiesta anual en Kankan (Alta Guinea) reúne a miles de participantes con trajes a juego bailando en círculo?',
      'Qual célebre festa anual em Kankan (Alta Guiné) reúne milhares de participantes em trajes combinando numa dança circular?',
      'ما المهرجان الاحتفالي السنوي الشهير في كانكان الذي يجمع آلاف المشاركين بملابس موحدة في رقصة دائرية مهيبة؟'
    ),
    correct: L('La Mamaya de Kankan', 'The Mamaya of Kankan', 'La Mamaya de Kankan', 'A Mamaya de Kankan', 'مهرجان مامايا كانكان'),
    distractors: [
      L('La Valse de Vienne', 'Viennese Waltz', 'Vals vienés', 'Valsa de Viena', 'فالس فيينا'),
      L('Le Haka néo-zélandais', 'New Zealand Haka', 'Haka neozelandés', 'Haka neozelandês', 'رقصة الهاكا'),
      L('La Sardane catalane', 'Catalan Sardana', 'Sardana catalana', 'Sardana catalã', 'السردانا'),
    ],
    explanation: L(
      'Créée dans les années 1930 et accompagnée de balafons et chants de griots, la Mamaya est un moment inoubliable de concorde, d’élégance et de fraternité.',
      'Born in the 1930s to the melodies of balafons and griots, Kankan’s Mamaya is an unforgettable celebration of unity and elegance.',
      'Nacida en los años 30 al son del balafón, la Mamaya es un símbolo inolvidable de elegancia y concordia.',
      'Nascida nos anos 1930 ao som do balafon, a Mamaya é um símbolo marcante de elegância e união.',
      'انطلقت مامايا في الثلاثينيات على أنغام البالافون وتجسد الأناقة والأخوة المجتمعية.'
    ),
  }),
  mkQ({
    id: 'cur_GN_22',
    countryCode: 'GN',
    category: 'culture',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'nimba_toad_viviparous_ecology',
    source: 'UNESCO & UICN — Biodiversité des Monts Nimba',
    prompt: L(
      'Quelle espèce animale unique au monde, célèbre auprès des biologistes, ne vit que dans les prairies d’altitude des Monts Nimba (à la frontière Guinée–Côte d’Ivoire) et met au monde des petits déjà formés sans passer par le stade têtard libre ?',
      'Which extraordinary endemic species found only in Mount Nimba’s high-altitude meadows gives birth to fully formed young rather than laying eggs in water?',
      '¿Qué extraordinaria especie endémica que solo habita en los prados altos del monte Nimba pare crías ya formadas sin pasar por renacuajo libre?',
      'Qual extraordinária espécie endêmica que só vive nos prados altos do monte Nimba dá à luz filhotes já formados?',
      'ما الكائن الحي النادر الذي يعيش حصرياً في مرتفعات جبال نيمبا ويلد صغاراً مكتملي النمو دون مرحلة الشرغوف؟'
    ),
    correct: L('Le crapaud vivipare des Monts Nimba (Nimbaphrynoides occidentalis)', 'The Mount Nimba viviparous toad', 'El sapo vivíparo de Nimba', 'O sapo vivíparo de Nimba', 'علجوم نيمبا الولود'),
    distractors: [
      L('Le manchot empereur', 'Emperor penguin', 'Pingüino emperador', 'Pinguim-imperador', 'البطريق الإمبراطور'),
      L('Le koala d’Australie', 'Australian koala', 'Koala australiano', 'Coala australiano', 'الكوالا الأسترالي'),
      L('Le dragon de Komodo', 'Komodo dragon', 'Dragón de Komodo', 'Dragão-de-komodo', 'تنين كومودو'),
    ],
    explanation: L(
      'Seul amphibien anoure véritablement vivipare au monde, ce minuscule crapaud témoigne de l’exceptionnelle richesse écologique de la réserve UNESCO du Nimba.',
      'The world’s only truly viviparous tailless amphibian highlights the extraordinary biodiversity of the UNESCO Mount Nimba Strict Nature Reserve.',
      'Único anfibio anuro realmente vivíparo del planeta, demuestra la riqueza ecológica única del Nimba.',
      'Único anfíbio anuro verdadeiramente vivíparo do planeta, revela a riqueza ecológica única do Nimba.',
      'البرمائي عديم الذيل الوحيد في العالم الذي يلد صغاره مباشرة، مما يبرز فرادة محمية نيمبا.'
    ),
  }),
  mkQ({
    id: 'cur_GN_23',
    countryCode: 'GN',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 1,
    topicKey: 'syli_national_susu_elephant',
    source: 'FEGUIFOOT — Surnom officiel de la sélection',
    prompt: L(
      'Quel animal puissant se cache derrière le surnom officiel « le Syli National », issu de la langue soussou ?',
      'Which powerful animal does the national team’s official nickname "Syli National" mean in the Susu language?',
      '¿Qué poderoso animal designa el apodo oficial de la selección «Syli National» en lengua susú?',
      'Qual animal poderoso dá nome ao apelido oficial da seleção "Syli National" na língua susu?',
      'ما الحيوان القوي الذي يعنيه اللقب الرسمي للمنتخب «سيلي الوطني» بلغة السوسو؟'
    ),
    correct: L('L’éléphant', 'The Elephant', 'El elefante', 'O elefante', 'الفيل'),
    distractors: [
      L('Le condor des Andes', 'Andean condor', 'Cóndor andino', 'Condor-dos-andes', 'كندور الأنديز'),
      L('L’ours polaire', 'Polar bear', 'Oso polar', 'Urso polar', 'الدب القطبي'),
      L('Le kangourou roux', 'Red kangaroo', 'Canguro rojo', 'Canguru vermelho', 'الكنغر الأحمر'),
    ],
    explanation: L(
      'Symbole de sagesse et de force tranquille, l’éléphant (« Syli ») incarne depuis les années 1960 la fierté du football national.',
      'Symbolizing strength and memory since the 1960s, the elephant ("Syli") remains the proud emblem of national football.',
      'Símbolo de fuerza y sabiduría desde los años 60, el elefante («Syli») encarna el orgullo futbolístico nacional.',
      'Símbolo de força e sabedoria desde os anos 1960, o elefante ("Syli") encarna o orgulho futebolístico nacional.',
      'يرمز الفيل «سيلي» منذ الستينيات إلى القوة والحكمة في كرة القدم الوطنية.'
    ),
  }),
  mkQ({
    id: 'cur_GN_24',
    countryCode: 'GN',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'cherif_souleymane_ballon_dor_1972',
    source: 'France Football / CAF — Ballon d’Or Africain 1972',
    prompt: L(
      'Quel milieu de terrain mythique du Hafia FC (champion d’Afrique en 1972, 1975 et 1977) est le tout premier et unique Guinéen de l’histoire à avoir remporté le Ballon d’Or africain en 1972 ?',
      'Which legendary Hafia FC midfielder—three-time African champion—remains Guinea’s first and only African Footballer of the Year (1972)?',
      '¿Qué mítico centrocampista del Hafia FC ganó el Balón de Oro africano en 1972?',
      'Qual mítico meio-campista do Hafia FC conquistou a Bola de Ouro africana em 1972?',
      'من هو لاعب وسط هافيا كوناكري الأسطوري الفائز بالكرة الذهبية الأفريقية الوحيدة في تاريخ البلاد عام 1972؟'
    ),
    correct: L('Chérif Souleymane', 'Chérif Souleymane', 'Chérif Souleymane', 'Chérif Souleymane', 'شريف سليمان'),
    distractors: [
      L('Naby Keïta', 'Naby Keïta', 'Naby Keïta', 'Naby Keïta', 'نابي كيتا'),
      L('Titi Camara', 'Titi Camara', 'Titi Camara', 'Titi Camara', 'تيتي كامارا'),
      L('Pascal Feindouno', 'Pascal Feindouno', 'Pascal Feindouno', 'Pascal Feindouno', 'باسكال فيندونو'),
    ],
    explanation: L(
      'Capitaine élégant et technicien hors pair du grand Hafia FC et du Syli (finaliste de la CAN 1976), Chérif Souleymane devança Tshimen Bwanga et Petit Sory en 1972.',
      'Captain of the golden Hafia FC era and 1976 AFCON finalist, Chérif Souleymane captured the 1972 Ballon d’Or Africain.',
      'Capitán del legendario Hafia FC y finalista de la CAN 1976, conquistó el Balón de Oro africano de 1972.',
      'Capitão do lendário Hafia FC e finalista da CAN 1976, conquistou a Bola de Ouro africana de 1972.',
      'قاد شريف سليمان الجيل الذهبي لهافيا كوناكري ونال الكرة الذهبية الأفريقية عام 1972.'
    ),
  }),
  mkQ({
    id: 'cur_GN_25',
    countryCode: 'GN',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'naby_keita_liverpool_ucl_2019',
    source: 'FEGUIFOOT & UEFA Champions League 2019',
    prompt: L(
      'Quel capitaine du Syli National (passé par Horoya, RB Salzbourg et RB Leipzig) a remporté la Ligue des champions UEFA 2019 et la Premier League 2020 avec le Liverpool FC ?',
      'Which Syli National captain—who played for Horoya, RB Salzburg, and RB Leipzig—won the 2019 UEFA Champions League and 2020 Premier League with Liverpool FC?',
      '¿Qué capitán del Syli National ganó la Champions League 2019 y la Premier League 2020 con el Liverpool FC?',
      'Qual capitão do Syli National venceu a Liga dos Campeões de 2019 e a Premier League de 2020 pelo Liverpool FC?',
      'من هو قائد منتخب «سيلي الوطني» المتوج بدوري أبطال أوروبا 2019 والدوري الإنجليزي 2020 مع نادي ليفربول؟'
    ),
    correct: L('Naby Keïta (« Deco »)', 'Naby Keïta', 'Naby Keïta', 'Naby Keïta', 'نابي كيتا'),
    distractors: [
      L('Ibrahima Konaté', 'Ibrahima Konaté', 'Ibrahima Konaté', 'Ibrahima Konaté', 'إبراهيما كوناتي'),
      L('Amadou Diawara', 'Amadou Diawara', 'Amadou Diawara', 'Amadou Diawara', 'أمادو دياوارا'),
      L('François Kamano', 'François Kamano', 'François Kamano', 'François Kamano', 'فرانسوا كامانو'),
    ],
    explanation: L(
      'Formé dans les rues de Coleah à Conakry puis au Horoya AC, Naby Keïta a hérité du mythique numéro 8 de Steven Gerrard à Liverpool.',
      'Raised in Conakry’s Coleah district and Horoya AC, Naby Keïta inherited Steven Gerrard’s iconic #8 shirt at Anfield.',
      'Formado en Conakri y el Horoya AC, Naby Keïta vistió el mítico dorsal 8 de Gerrard en Anfield.',
      'Formado em Conacri e no Horoya AC, Naby Keïta vestiu a mítica camisa 8 de Gerrard em Anfield.',
      'بدأ نابي كيتا في أزقة كوناكري وهورويا وارتدى القميص رقم 8 الشهير في ليفربول.'
    ),
  }),
  mkQ({
    id: 'cur_GN_26',
    countryCode: 'GN',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'pascal_feindouno_afcon_legend',
    source: 'FEGUIFOOT — CAN 2004, 2006, 2008',
    prompt: L(
      'Quel attaquant virevoltant passé par les Girondins de Bordeaux et l’AS Saint-Étienne fut le meneur de jeu adulé du Syli National durant les épopées des CAN 2004, 2006 et 2008 ?',
      'Which dazzling forward of Bordeaux and AS Saint-Étienne fame served as the beloved talisman of the Syli National during the 2004, 2006, and 2008 AFCON runs?',
      '¿Qué virtuoso atacante ex del Burdeos y Saint-Étienne lideró al Syli National en las CAN de 2004, 2006 y 2008?',
      'Qual habilidoso atacante ex-Bordeaux e Saint-Étienne liderou o Syli National nas CANs de 2004, 2006 e 2008?',
      'من هو المهاجم الموهوب نجم بوردو وسانت إتيان السابق وقائد منتخب سيلي في بطولات 2004 و2006 و2008؟'
    ),
    correct: L('Pascal Feindouno', 'Pascal Feindouno', 'Pascal Feindouno', 'Pascal Feindouno', 'باسكال فيندونو'),
    distractors: [
      L('Kaba Diawara', 'Kaba Diawara', 'Kaba Diawara', 'Kaba Diawara', 'كابا دياوارا'),
      L('Dianbobo Baldé', 'Dianbobo Baldé', 'Dianbobo Baldé', 'Dianbobo Baldé', 'ديانبوبو بالدي'),
      L('Morlaye Sylla', 'Morlaye Sylla', 'Morlaye Sylla', 'Morlaye Sylla', 'مورلاي سيلا'),
    ],
    explanation: L(
      'Buteur décisif pour offrir le titre de champion de France à Bordeaux en 1999 à seulement 18 ans, Pascal Feindouno a enchanté les supporters par sa créativité.',
      'Scoring the 1999 Ligue 1 title-clinching goal for Bordeaux at 18, Pascal Feindouno lit up three consecutive AFCON quarter-final runs.',
      'Autor del gol que dio la liga al Burdeos con solo 18 años, iluminó tres copas africanas consecutivas.',
      'Autor do gol do título francês do Bordeaux aos 18 anos, brilhou em três Copas Africanas seguidas.',
      'سجل هدف تتويج بوردو بالدوري الفرنسي في الثامنة عشرة وأمتع جماهير أفريقيا بمهاراته.'
    ),
  }),
  mkQ({
    id: 'cur_GN_27',
    countryCode: 'GN',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'horoya_ac_kaloum_1978',
    source: 'CAF & FEGUIFOOT — Clubs historiques',
    prompt: L(
      'Quel célèbre club rouge et blanc de Conakry (vainqueur de la Coupe d’Afrique des vainqueurs de coupe en 1978) forme avec l’AS Kaloum et le Hafia FC le grand trio du championnat national ?',
      'Which famous red-and-white Conakry club—winner of the 1978 African Cup Winners’ Cup—forms the traditional top trio alongside AS Kaloum and Hafia FC?',
      '¿Qué célebre club rojiblanco de Conakri —campeón de la Recopa Africana en 1978— forma el gran trío junto al AS Kaloum y Hafia FC?',
      'Qual célebre clube alvirrubro de Conacri —campeão da Recopa Africana em 1978— forma o grande trio com AS Kaloum e Hafia FC?',
      'أي نادٍ شهير في كوناكري توج بكأس أفريقيا أبطال الكؤوس عام 1978 ويشكل مع كالوم وهافيا الثلاثي التاريخي للبلاد؟'
    ),
    correct: L('Le Horoya AC', 'Horoya AC', 'Horoya AC', 'Horoya AC', 'نادي هورويا كوناكري'),
    distractors: [
      L('Le Djoliba AC', 'Djoliba AC', 'Djoliba AC', 'Djoliba AC', 'دجوليبا'),
      L('L’Enyimba FC', 'Enyimba FC', 'Enyimba FC', 'Enyimba FC', 'إنييمبا'),
      L('Le Primeiro de Agosto', 'Primeiro de Agosto', 'Primeiro de Agosto', 'Primeiro de Agosto', 'بريميرو دي أغوستو'),
    ],
    explanation: L(
      '« Horoya » signifie « Liberté / Dignité » en langue malinké et soussou ; le club de Matam règne régulièrement sur la Ligue 1 nationale et dispute la Ligue des champions CAF.',
      '"Horoya" means "Freedom" in local languages; the Matam club dominates domestic championships and regularly competes in CAF Champions League play.',
      '«Horoya» significa «Libertad»; el club de Matam domina la liga nacional y compite con frecuencia en torneos CAF.',
      '"Horoya" significa "Liberdade"; o clube de Matam domina a liga nacional e brilha em torneios CAF.',
      'تعني كلمة «هورويا» الحرية، ويواصل النادي حضوره القوي محلياً وفي البطولات القارية.'
    ),
  }),
  mkQ({
    id: 'cur_GN_28',
    countryCode: 'GN',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'afcon_1976_runner_up_unbeaten',
    source: 'CAF — CAN 1976 en Éthiopie',
    prompt: L(
      'Quelle est la meilleure performance historique du Syli National en phase finale de la Coupe d’Afrique des nations (réalisée sans perdre un seul match du tournoi !) ?',
      'What is the Syli National’s best-ever finish at the Africa Cup of Nations—achieved without losing a single match in the tournament?',
      '¿Cuál es la mejor actuación histórica del Syli National en la Copa Africana de Naciones (¡invicto en todo el torneo!)?',
      'Qual é o melhor desempenho histórico do Syli National na Copa Africana de Nações (invicto em todo o torneio!)?',
      'ما أفضل إنجاز تاريخي لمنتخب «سيلي الوطني» في نهائيات كأس الأمم الأفريقية دون أي هزيمة؟'
    ),
    correct: L('Vice-champion d’Afrique en 1976 (2e de la poule finale derrière le Maroc)', 'Runners-up in 1976 (2nd in the final group behind Morocco)', 'Subcampeón en 1976 (2.º tras Marruecos)', 'Vice-campeão em 1976 (2.º atrás do Marrocos)', 'الوصيف عام 1976 (المركز الثاني خلف المغرب)'),
    distractors: [
      L('Cinq titres consécutifs entre 1990 et 1998', 'Five consecutive titles (1990–1998)', 'Cinco títulos seguidos', 'Cinco títulos seguidos', 'خمسة ألقاب متتالية'),
      L('Aucune qualification de toute l’histoire', 'Never qualified for AFCON', 'Nunca clasificado', 'Nunca classificado', 'لم يتأهل قط'),
      L('Troisième de la Coupe du monde 1966', '3rd place at 1966 World Cup', 'Tercero en el Mundial 1966', '3º lugar na Copa de 1966', 'المركز الثالث في مونديال 1966'),
    ],
    explanation: L(
      'Lors de l’édition 1976 en Éthiopie (jouée sous forme de poule finale à 4), le Syli invaincu mena 1-0 face au Maroc avant une égalisation marocaine tardive (1-1) à la 86e minute.',
      'In Ethiopia 1976—the only AFCON decided by a four-team final group—the unbeaten Syli fell just one late Moroccan equalizer shy of the trophy.',
      'En Etiopía 1976, un empate tardío de Marruecos (1-1) dejó invicto al Syli a las puertas del título.',
      'Na Etiópia 1976, um empate tardio do Marrocos (1 a 1) deixou o Syli invicto a minutos do título.',
      'أنهى المنتخب بطولة 1976 دون خسارة وحل وصيفاً بفارق نقطة وحيدة بعد التعادل المتأخر أمام المغرب.'
    ),
  }),
  mkQ({
    id: 'cur_GN_29',
    countryCode: 'GN',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 4,
    topicKey: 'kambadaga_kakimbon_caves',
    source: 'Patrimoine naturel & grottes — Moyenne & Basse-Guinée',
    prompt: L(
      'Dans le Fouta-Djalon près de Pita, quelles célèbres chutes d’eau à trois paliers spectaculaires coulent à travers les rochers verdoyants de la rivière Kokoulo ?',
      'In Fouta-Djalon near Pita, which dramatic three-tiered waterfalls cascade over lush mossy terraces along the Kokoulo River?',
      'En Fouta-Djalon cerca de Pita, ¿qué espectaculares cascadas de tres niveles caen sobre el río Kokoulo?',
      'Em Fouta-Djalon perto de Pita, quais espetaculares quedas d’água em três degraus caem pelo rio Kokoulo?',
      'في فوتا جالون قرب بيتا، ما الشلالات الشهيرة ذات المستويات الثلاثة على نهر كوكولو؟'
    ),
    correct: L('Les Chutes de Kambadaga', 'Kambadaga Falls', 'Cataratas de Kambadaga', 'Cachoeiras de Kambadaga', 'شلالات كامباداغا'),
    distractors: [
      L('Les Chutes de Victoria', 'Victoria Falls', 'Cataratas Victoria', 'Cataratas Vitória', 'شلالات فيكتوريا'),
      L('Les Chutes de Tugela', 'Tugela Falls', 'Cataratas del Tugela', 'Cachoeiras de Tugela', 'شلالات توغيلا'),
      L('Les Chutes d’Ouzoud', 'Ouzoud Falls', 'Cataratas de Ouzoud', 'Cachoeiras de Ouzoud', 'شلالات أوزود'),
    ],
    explanation: L(
      'Très impressionnantes pendant la saison des pluies entre juin et octobre, les chutes de Kambadaga comptent parmi les joyaux naturels de Pita et Dalaba.',
      'Particularly dramatic during the rainy season from June to October, Kambadaga Falls rank among the Fouta-Djalon’s finest sights.',
      'Impresionantes entre junio y octubre, son una de las grandes joyas naturales entre Pita y Dalaba.',
      'Espetaculares entre junho e outubro, estão entre as grandes joias naturais entre Pita e Dalaba.',
      'تبلغ شلالات كامباداغا ذروة روعتها في موسم الأمطار وتُعد من أجمل معالم فوتا جالون.'
    ),
  }),
  mkQ({
    id: 'cur_GN_30',
    countryCode: 'GN',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 4,
    topicKey: 'saifoulaye_diallo_1958_assembly',
    source: 'Archives parlementaires — Assemblée nationale (1958)',
    prompt: L(
      'Quel homme d’État originaire de Labé (Diari) présida l’Assemblée territoriale lors de la proclamation historique de l’indépendance le 2 octobre 1958 et devint le premier Président de l’Assemblée nationale ?',
      'Which statesman from Labé presided over the Territorial Assembly during the October 2, 1958 independence proclamation and became the first Speaker of the National Assembly?',
      '¿Qué estadista originario de Labé presidió la Asamblea el 2 de octubre de 1958 y fue el primer presidente del Parlamento?',
      'Qual estadista natural de Labé presidiu a Assembleia em 2 de outubro de 1958 e foi o primeiro presidente do Parlamento?',
      'من هو رجل الدولة المولود في لابي الذي ترأس الجمعية التأسيسية يوم إعلان الاستقلال في 2 أكتوبر 1958؟'
    ),
    correct: L('Saïfoulaye Diallo', 'Saïfoulaye Diallo', 'Saïfoulaye Diallo', 'Saïfoulaye Diallo', 'سيفولاي ديالو'),
    distractors: [
      L('Modibo Keïta', 'Modibo Keïta', 'Modibo Keïta', 'Modibo Keïta', 'موديبو كيتا'),
      L('Sylvanus Olympio', 'Sylvanus Olympio', 'Sylvanus Olympio', 'Sylvanus Olympio', 'سيلفانوس أوليمبيو'),
      L('Hubert Maga', 'Hubert Maga', 'Hubert Maga', 'Hubert Maga', 'هوبير ماغا'),
    ],
    explanation: L(
      'Cofondateur du PDG-RDA et compagnon d’émancipation de 1958, Saïfoulaye Diallo a laissé son nom à l’un des principaux amphithéâtres de Conakry et places de Labé.',
      'A pivotal architect of 1958 independence, Saïfoulaye Diallo shaped the early parliamentary institutions of the young republic.',
      'Arquitecto clave de la independencia de 1958, Saïfoulaye Diallo dio forma a las primeras instituciones nacionales.',
      'Artífice central da independência de 1958, Saïfoulaye Diallo moldou o primeiro parlamento da república.',
      'أسهم سيفولاي ديالو في صياغة إعلان الاستقلال وإرساء المؤسسات البرلمانية الأولى.'
    ),
  }),
  mkQ({
    id: 'cur_GN_31',
    countryCode: 'GN',
    category: 'culture',
    subCategory: 'sciences_innovations',
    difficulty: 3,
    topicKey: 'kante_solomana_nko_inventor',
    source: 'Linguistique africaine — Kankan (1949)',
    prompt: L(
      'À quel érudit né près de Kankan doit-on l’invention de l’alphabet N’Ko (« Je dis ») en 1949 afin de transcrire avec précision les langues tonales mandingues ?',
      'Which Kankan-born scholar invented the N’Ko ("I say") alphabet in 1949 to accurately transcribe West African tonal Manding languages?',
      '¿Qué erudito nacido cerca de Kankan inventó en 1949 el alfabeto N’Ko («Yo digo») para escribir con precisión las lenguas mandingas?',
      'Qual erudito nascido perto de Kankan inventou em 1949 o alfabeto N’Ko ("Eu digo") para escrever com precisão as línguas mandingas?',
      'من هو العالم المولود قرب كانكان الذي ابتكر أبجدية «نكو» عام 1949 لكتابة اللغات الماندينغية بدقة؟'
    ),
    correct: L('Souleymane Kanté (Solomana Kanté)', 'Solomana Kanté', 'Solomana Kanté', 'Solomana Kanté', 'سليمان كانتي'),
    distractors: [
      L('Cheikh Anta Diop', 'Cheikh Anta Diop', 'Cheikh Anta Diop', 'Cheikh Anta Diop', 'شيخ أنتا ديوب'),
      L('Wole Soyinka', 'Wole Soyinka', 'Wole Soyinka', 'Wole Soyinka', 'وولي سوينكا'),
      L('Ali Mazrui', 'Ali Mazrui', 'Ali Mazrui', 'Ali Mazrui', 'علي مزروعي'),
    ],
    explanation: L(
      'Écrit de droite à gauche avec des diacritiques de ton complets et intégré aujourd’hui en Unicode, le N’Ko permet d’éditer journaux, ouvrages scientifiques et poèmes.',
      'Written right-to-left with full tone marks and now included in Unicode, N’Ko supports thousands of books, newspapers, and digital tools.',
      'Escrito de derecha a izquierda con marcas tonales completas, el N’Ko cuenta hoy con miles de publicaciones y soporte Unicode.',
      'Escrito da direita para a esquerda com marcas tonais completas, o N’Ko possui milhares de livros e suporte Unicode.',
      'تُكتب أبجدية نكو من اليمين إلى اليسار مع علامات النبرة وهي معتمدة في نظام يونيكود العالمي.'
    ),
  }),
  mkQ({
    id: 'cur_GN_32',
    countryCode: 'GN',
    category: 'culture',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'foret_sacree_nzerekore_kpele',
    source: 'Patrimoine forestier — Nzérékoré & Lola',
    prompt: L(
      'En Guinée forestière (autour de Nzérékoré, Macenta et Yomou), quelle célèbre tradition initiatique des peuples Guerzé (Kpelle), Toma et Kissi protège également des bois sacrés ancestraux ?',
      'Across Forest Guinea around Nzérékoré and Macenta, which ancestral community rite among Kpelle, Toma, and Kissi peoples also safeguards sacred village groves?',
      'En Guinea Forestal en torno a Nzérékoré y Macenta, ¿qué tradición comunitaria protege además los bosques sagrados ancestrales?',
      'Na Guiné Florestal perto de Nzérékoré e Macenta, qual tradição comunitária protege também as florestas sagradas ancestrais?',
      'في غينيا الغابية حول نزيريكوري وماسينتا، ما التقليد المجتمعي العريق الذي يصون الغابات المقدسة؟'
    ),
    correct: L('Les bois sacrés et sociétés initiatiques du Poro et du Sande (Forêt sacrée)', 'Sacred groves and Poro / Sande initiation heritage', 'Los bosques sagrados y ritos del Poro y Sande', 'As florestas sagradas e ritos do Poro e Sande', 'الغابات المقدسة وطقوس بورو وساندي التراثية'),
    distractors: [
      L('Les fjords viking de Norvège', 'Norwegian Viking fjords', 'Fiordos vikingos', 'Fiordes vikings', 'الفيورد النرويجي'),
      L('Les steppes mongoles', 'Mongolian steppes', 'Estepas mongolas', 'Estepes mongóis', 'سهوب منغوليا'),
      L('Les glaciers alpins', 'Alpine glaciers', 'Glaciares alpinos', 'Geleiras alpinas', 'أنهار جبال الألب'),
    ],
    explanation: L(
      'Respectées depuis des siècles, ces forêts sacrées autour des villages de Guinée forestière jouent un rôle écologique remarquable en abritant arbres géants et faune rare.',
      'Venerated for generations, community-protected sacred groves across Forest Guinea preserve priceless rainforest biodiversity.',
      'Respetados durante siglos, estos bosques sagrados conservan árboles centenarios y fauna protegida.',
      'Respeitados há séculos, esses bosques sagrados preservam árvores centenárias e fauna rara.',
      'تساهم هذه الغابات المقدسة في صون أشجار معمرة وتنوع بيئي نادر في المنطقة.'
    ),
  }),
  mkQ({
    id: 'cur_GN_33',
    countryCode: 'GN',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'sory_kandia_ballets_africains',
    source: 'Patrimoine théâtral & vocal — Fodéba Keïta',
    prompt: L(
      'Quelle célèbre troupe nationale fondée en 1952 par Fodéba Keïta fit connaître les danses, les acrobaties et les percussions d’Afrique de l’Ouest sur les plus grandes scènes mondiales dès les années 1950 ?',
      'Which acclaimed national troupe founded in 1952 by Fodéba Keïta brought West African dance, acrobatics, and percussion to the world’s grandest stages?',
      '¿Qué célebre compañía nacional fundada en 1952 por Fodéba Keïta llevó la danza y percusión africana por los escenarios del mundo?',
      'Qual célebre companhia nacional fundada em 1952 por Fodéba Keïta levou a dança e percussão africana aos maiores palcos do mundo?',
      'ما الفرقة الوطنية الشهيرة التي أسسها فوديبا كيتا عام 1952 ونقلت الرقص والإيقاعات الأفريقية إلى كبرى مسارح العالم؟'
    ),
    correct: L('Les Ballets Africains', 'Les Ballets Africains', 'Les Ballets Africains', 'Les Ballets Africains', 'فرقة الباليه الأفريقي'),
    distractors: [
      L('Le Bolchoï de Moscou', 'Bolshoi Ballet', 'Ballet Bolshói', 'Balé Bolshoi', 'باليه البولشوي'),
      L('L’Opéra de Vienne', 'Vienna State Opera', 'Ópera de Viena', 'Ópera de Viena', 'أوبرا فيينا'),
      L('Le Moulin Rouge de Paris', 'Moulin Rouge', 'Moulin Rouge', 'Moulin Rouge', 'مولان روج'),
    ],
    explanation: L(
      'Élevés au rang d’ambassadeurs culturels en 1958, Les Ballets Africains (aux côtés de la voix d’or de Sory Kandia Kouyaté) ont conquis Broadway, Paris et Tokyo.',
      'Designated national cultural ambassadors in 1958, Les Ballets Africains toured Broadway, Europe, and Asia for decades.',
      'Embajadores culturales desde 1958, conquistaron Broadway, Europa y Asia durante décadas.',
      'Embaixadores culturais desde 1958, encantaram plateias da Broadway a Tóquio por décadas.',
      'أصبحت الفرقة سفيرة ثقافية منذ 1958 وجابت مسارح برودواي وأوروبا وآسيا لعقود.'
    ),
  }),
  mkQ({
    id: 'cur_GN_34',
    countryCode: 'GN',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 3,
    topicKey: 'kaleta_souapiti_konkoure_dams',
    source: 'Énergie hydroélectrique — Bassin du Konkouré',
    prompt: L(
      'Sur quel grand fleuve traversant la Basse et la Moyenne-Guinée ont été construits les grands barrages hydroélectriques de Garafiri, Kaléta et Souapiti ?',
      'Along which major river flowing from Fouta-Djalon toward the Atlantic were the large Garafiri, Kaléta, and Souapiti hydroelectric dams built?',
      '¿Sobre qué gran río entre el Fouta-Djalon y el Atlántico se construyeron las grandes presas de Garafiri, Kaléta y Souapiti?',
      'Em qual grande rio entre o Fouta-Djalon e o Atlântico foram construídas as hidrelétricas de Garafiri, Kaléta e Souapiti?',
      'على أي نهر رئيسي تنحدر مياهه نحو الأطلسي شُيدت السدود الكهرومائية الكبرى لغارافيري وكاليتا وسوابيتي؟'
    ),
    correct: L('Le Fleuve Konkouré', 'The Konkouré River', 'El Río Konkouré', 'O Rio Konkouré', 'نهر كونكوري'),
    distractors: [
      L('Le Fleuve Limpopo', 'Limpopo River', 'Río Limpopo', 'Rio Limpopo', 'نهر ليمبوبو'),
      L('Le Fleuve Orange', 'Orange River', 'Río Orange', 'Rio Orange', 'نهر أورانج'),
      L('Le Fleuve Tana', 'Tana River', 'Río Tana', 'Rio Tana', 'نهر تانا'),
    ],
    explanation: L(
      'Alimenté par les fortes pluies du Fouta-Djalon, le fleuve Konkouré fournit une part majeure de l’électricité propre de la façade maritime et de Conakry.',
      'Fed by heavy rains over the Fouta-Djalon, the Konkouré basin anchors clean hydropower generation for Conakry and western towns.',
      'Alimentado por las lluvias del Fouta-Djalon, el Konkouré impulsa la producción hidroeléctrica nacional.',
      'Alimentado pelas chuvas do Fouta-Djalon, o Konkouré sustenta a geração hidrelétrica do oeste.',
      'يمثل حوض نهر كونكوري العمود الفقري لإنتاج الطاقة الكهرومائية النظيفة في البلاد.'
    ),
  }),
  mkQ({
    id: 'cur_GN_35',
    countryCode: 'GN',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'flag_red_yellow_green_unity',
    source: 'Constitution nationale — Symboles de la République',
    prompt: L(
      'Dans le drapeau tricolore rouge, jaune et vert adopté en novembre 1958, quelle est la devise officielle inscrite sur les armoiries de la République ?',
      'With the red, yellow, and green tricolor adopted in November 1958, what is the official national motto inscribed on the coat of arms?',
      'Con la bandera roja, amarilla y verde adoptada en noviembre de 1958, ¿cuál es el lema oficial de la República?',
      'Com a bandeira vermelha, amarela e verde adotada em novembro de 1958, qual é o lema oficial da República?',
      'مع العلم الوطني الثلاثي الألوان المعتمد في نوفمبر 1958، ما الشعار الرسمي المكتوب على شعار الجمهورية؟'
    ),
    correct: L('« Travail – Justice – Solidarité »', '"Work – Justice – Solidarity"', '«Trabajo – Justicia – Solidaridad»', '"Trabalho – Justiça – Solidariedade"', '«العمل – العدالة – التضامن»'),
    distractors: [
      L('« Soleil – Neige – Océan »', '"Sun – Snow – Ocean"', '«Sol – Nieve – Océano»', '"Sol – Neve – Oceano"', '«الشمس – الثلج – المحيط»'),
      L('« Couronne – Sceptre – Empire »', '"Crown – Scepter – Empire"', '«Corona – Cetro – Imperio»', '"Coroa – Cetro – Império"', '«التاج – الصولجان – الإمبراطورية»'),
      L('« Or – Diamant – Acier »', '"Gold – Diamond – Steel"', '«Oro – Diamante – Acero»', '"Ouro – Diamante – Aço"', '«الذهب – الألماس – الفولاذ»'),
    ],
    explanation: L(
      'Les trois couleurs rappellent aussi chaque terme : rouge pour le travail et le sacrifice, jaune pour l’or du sol et le soleil de justice, vert pour la végétation et la solidarité.',
      'The three stripes mirror the motto: red for labor and sacrifice, yellow for sunlight and justice, green for lush abundance and solidarity.',
      'Los colores reflejan el lema: rojo por el trabajo, amarillo por el sol y la justicia, verde por la solidaridad.',
      'As cores espelham o lema: vermelho pelo trabalho, amarelo pelo sol da justiça e verde pela solidariedade.',
      'تعكس ألوان العلم الشعار الوطني: الأحمر للعمل والتضحية والأصفر للعدل والأخضر للتضامن.'
    ),
  }),
  mkQ({
    id: 'cur_GN_36',
    countryCode: 'GN',
    category: 'culture',
    subCategory: 'anecdotes_insolites',
    difficulty: 3,
    topicKey: 'doumbouya_camara_guinea_names_soso_pular',
    source: 'Patrimoine linguistique et noms traditionnels',
    prompt: L(
      'Quelle particularité culturelle originale caractérise la tradition des prénoms de naissance dans de nombreuses familles du Fouta-Djalon (chez les Peuls) selon l’ordre d’arrivée des enfants ?',
      'What charming traditional naming custom in many Fouta-Djalon families assigns specific birth-order names to sons and daughters?',
      '¿Qué encantadora costumbre tradicional de muchas familias de Fouta-Djalon asigna nombres fijos según el orden de nacimiento?',
      'Qual encantador costume tradicional de muitas famílias de Fouta-Djalon atribui nomes fixos segundo a ordem de nascimento?',
      'ما التقليد الاجتماعي الجميل لدى كثير من عائلات فوتا جالون بخصوص تسمية الأبناء والبنات؟'
    ),
    correct: L('Les filles portent souvent des noms d’ordre comme Nènè, Kadiatou, Mariama, Aïssatou et les garçons Amadou, Mamadou, Ibrahima, Alpha selon la tradition familiale', 'Fixed birth-order customs link lineage names (like Mamadou, Alpha, Amadou or Nènè, Kadiatou, Aïssatou) to elder/younger rank', 'Nombres tradicionales vinculados al orden de nacimiento y rango familiar (como Mamadou, Alpha o Kadiatou)', 'Nomes tradicionais ligados à ordem de nascimento e linhagem familiar (como Mamadou, Alpha ou Kadiatou)', 'تقليد ربط الأسماء بترتيب المواليد بين الإخوة والأخوات مثل ماماودو وألفا وخدياتو'),
    distractors: [
      L('On tire un numéro de code-barres au hasard', 'Random barcode numbers are used', 'Se sortea un código de barras', 'Sorteia-se um código de barras', 'يتم اختيار رمز عشوائي'),
      L('Tous les enfants reçoivent le même prénom « X » jusqu’à 20 ans', 'Everyone shares the letter X until age 20', 'Todos llevan la letra X hasta los 20 años', 'Todos usam a letra X até os 20 anos', 'يحمل الجميع حرفاً واحداً حتى سن العشرين'),
      L('On choisit exclusivement le nom d’une planète du système solaire', 'Only planets of the solar system are allowed', 'Solo nombres de planetas', 'Apenas nomes de planetas', 'تُستخدم أسماء الكواكب فقط'),
    ],
    explanation: L(
      'En Basse, Moyenne et Haute-Guinée, les prénoms d’ordre et les « noms de famille » claniques (« diammou » comme Diallo, Bah, Barry, Sow, Camara, Sylla, Touré, Condé) tissent immédiatement des liens de parenté et de cousinage à plaisanterie.',
      'Both birth-order customs and historic clan names ("diammou" like Diallo, Bah, Camara, Condé, Touré) create instant warmth and joking kinship across regions.',
      'Los apellidos de clan («diammou» como Diallo, Bah, Camara, Condé, Touré) tejen lazos inmediatos de fraternidad.',
      'Os sobrenomes de clã ("diammou" como Diallo, Bah, Camara, Condé, Touré) criam laços imediatos de irmandade.',
      'تنسج أسماء العائلات والقبائل العريقة مثل ديالو وباري وكامارا وكوندي وتوري روابط أخوة ومودة قوية.'
    ),
  }),
];

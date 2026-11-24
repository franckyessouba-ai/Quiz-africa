import { L } from '../../countriesPart1';
import { mkQ } from './packHelpers';

export const SUB_SAHARAN_MAJOR_CURATED_PACK = [
  // NG — Nigeria (12 Qs)
  mkQ({
    id: 'cur_NG_01',
    countryCode: 'NG',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 1,
    topicKey: 'independance_1_octobre_1960',
    source: 'Archives fédérales — Lagos (1960)',
    prompt: L(
      'À quelle date précise le Nigeria a-t-il accédé à l’indépendance vis-à-vis du Royaume-Uni en 1960 ?',
      'On what exact date in 1960 did Nigeria gain independence from British colonial rule?',
      '¿En qué fecha exacta de 1960 obtuvo Nigeria su independencia del Reino Unido?',
      'Em que data exata de 1960 a Nigéria conquistou sua independência do Reino Unido?',
      'في أي تاريخ من عام 1960 نالت نيجيريا استقلالها عن بريطانيا؟'
    ),
    countryModePrompt: L(
      'À quelle date exacte de l’année 1960 la Fédération est-elle devenue un État souverain indépendant ?',
      'On what exact date in 1960 did the Federation become a sovereign independent nation?',
      '¿En qué fecha exacta de 1960 se convirtió la Federación en un Estado soberano independiente?',
      'Em que data exata de 1960 a Federação tornou-se uma nação soberana e independente?',
      'في أي يوم وشهر من عام 1960 أصبحت البلاد دولة مستقلة ذات سيادة؟'
    ),
    correct: L('Le 1er octobre 1960', 'October 1, 1960', '1 de octubre de 1960', '1 de outubro de 1960', '1 أكتوبر 1960'),
    distractors: [
      L('Le 1er octobre 1963', 'October 1, 1963', '1 de octubre de 1963', '1 de outubro de 1963', '1 أكتوبر 1963'),
      L('Le 15 janvier 1960', 'January 15, 1960', '15 de enero de 1960', '15 de janeiro de 1960', '15 يناير 1960'),
      L('Le 29 mai 1960', 'May 29, 1960', '29 de mayo de 1960', '29 de maio de 1960', '29 مايو 1960'),
    ],
    explanation: L(
      'Célébré chaque année comme Independence Day, le 1er octobre 1960 fut suivi exactement trois ans plus tard, le 1er octobre 1963, par l’adoption du statut de République.',
      'Celebrated annually as Independence Day, October 1, 1960 was followed exactly three years later by the proclamation of the Republic on October 1, 1963.',
      'Celebrado como Día de la Independencia, el 1 de octubre de 1960 precedió en tres años exactos a la proclamación de la República.',
      'Celebrado como Dia da Independência, 1º de outubro de 1960 antecedeu exatamente em três anos a proclamação da República.',
      'يُحتفل بذكرى استقلال 1 أكتوبر 1960 سنوياً، وتلاه بعد ثلاث سنوات بالضبط إعلان النظام الجمهوري.'
    ),
  }),
  mkQ({
    id: 'cur_NG_02',
    countryCode: 'NG',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 2,
    topicKey: 'nnamdi_azikiwe_zik_premier_president',
    source: 'Histoire politique fédérale — 1963',
    prompt: L(
      'Quel grand journaliste, fondateur du « West African Pilot » et leader nationaliste surnommé « Zik », devint le tout premier président de la République du Nigeria en 1963 ?',
      'Which renowned journalist, founder of the "West African Pilot", and nationalist icon nicknamed "Zik" became Nigeria’s first President in 1963?',
      '¿Qué destacado periodista, fundador de "West African Pilot" y líder nacionalista apodado "Zik", fue el primer presidente de Nigeria en 1963?',
      'Qual renomado jornalista, fundador do "West African Pilot" e líder nacionalista apelidado de "Zik", foi o primeiro presidente da Nigéria em 1963?',
      'أي صحفي وزعيم وطني بارز أسس صحيفة ويست أفريكان بايلوت ولُقب بـ"زيك" وأصبح أول رئيس لنيجيريا عام 1963؟'
    ),
    countryModePrompt: L(
      'Quel père fondateur surnommé affectueusement « Zik of Africa », premier président du pays en 1963, a donné son nom à l’aéroport international d’Abuja ?',
      'Which founding statesman affectionately nicknamed "Zik of Africa" became the nation’s first President in 1963 and inspired the naming of Abuja’s airport?',
      '¿Qué padre fundador apodado "Zik of Africa" se convirtió en el primer presidente en 1963 y da nombre al aeropuerto de Abuya?',
      'Qual líder fundador apelidado de "Zik of Africa" tornou-se o primeiro presidente em 1963 e dá nome ao aeroporto de Abuja?',
      'أي أب مؤسس لُقب بـ"زيك إفريقيا" وتولى أول رئاسة للجمهورية عام 1963 وحمل مطار أبوجا الدولي اسمه؟'
    ),
    correct: L('Nnamdi Azikiwe', 'Nnamdi Azikiwe', 'Nnamdi Azikiwe', 'Nnamdi Azikiwe', 'ننامدي أزيكيوي'),
    distractors: [
      L('Obafemi Awolowo', 'Obafemi Awolowo', 'Obafemi Awolowo', 'Obafemi Awolowo', 'أوبافيمي أوولوو'),
      L('Abubakar Tafawa Balewa', 'Abubakar Tafawa Balewa', 'Abubakar Tafawa Balewa', 'Abubakar Tafawa Balewa', 'أبو بكر تافاوا باليوا'),
      L('Ahmadu Bello', 'Ahmadu Bello', 'Ahmadu Bello', 'Ahmadu Bello', 'أحمدو بيلو'),
    ],
    explanation: L(
      'Tandis qu’Abubakar Tafawa Balewa occupait le poste de Premier ministre, Nnamdi Azikiwe exerça d’abord comme gouverneur général en 1960 puis comme premier président en 1963.',
      'While Abubakar Tafawa Balewa served as Prime Minister, Nnamdi Azikiwe became Governor-General in 1960 and the Republic’s first President in 1963.',
      'Mientras Abubakar Tafawa Balewa era primer ministro, Nnamdi Azikiwe asumió la primera presidencia republicana en 1963.',
      'Enquanto Abubakar Tafawa Balewa era primeiro-ministro, Nnamdi Azikiwe tornou-se o primeiro presidente em 1963.',
      'تولى ننامدي أزيكيوي منصب أول رئيس للجمهورية عام 1963 بينما كان أبو بكر تافاوا باليوا رئيساً للوزراء.'
    ),
  }),
  mkQ({
    id: 'cur_NG_03',
    countryCode: 'NG',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 2,
    topicKey: 'funmilayo_ransome_kuti_abeokuta',
    source: 'Archives des droits civiques — Abeokuta (1947)',
    prompt: L(
      'Quelle militante anticoloniale et pionnière des droits des femmes d’Abeokuta, première femme nigériane à conduire une automobile et mère de Fela Kuti, mena la révolte victorieuse contre l’impôt injuste sur les femmes en 1947 ?',
      'Which anti-colonial activist from Abeokuta—famous as the first Nigerian woman to drive a car and mother of Fela Kuti—led the 1947 women’s tax revolt?',
      '¿Qué activista anticolonial de Abeokuta, primera mujer en conducir un automóvil en Nigeria y madre de Fela Kuti, lideró la protesta de 1947?',
      'Qual ativista anticolonial de Abeokuta, primeira mulher a dirigir na Nigéria e mãe de Fela Kuti, liderou o protesto de 1947?',
      'أي ناشطة مناهضة للاستعمار ورائدة لحقوق النساء في أبيوكوتا، وهي والدة فيلا كوتي، قادت احتجاج النساء عام 1947؟'
    ),
    countryModePrompt: L(
      'Quelle figure historique d’Abeokuta, mère du musicien Fela Anikulapo Kuti, dirigea l’Union des femmes d’Abeokuta et obtint l’abolition des taxes spéciales imposées aux commerçantes en 1949 ?',
      'Which trailblazing Abeokuta leader, mother of Fela Anikulapo Kuti, headed the Abeokuta Women’s Union and overturned unfair taxes on market women?',
      '¿Qué histórica lideresa de Abeokuta, madre de Fela Kuti, encabezó la Unión de Mujeres y logró abolir los impuestos abusivos?',
      'Qual liderança histórica de Abeokuta, mãe de Fela Kuti, comandou a União das Mulheres contra impostos injustos?',
      'أي زعيمة تاريخية من أبيوكوتا ووالدة الموسيقي فيلا كوتي قادت اتحاد النساء لإسقاط الضرائب الجائرة على التاجرات؟'
    ),
    correct: L('Funmilayo Ransome-Kuti', 'Funmilayo Ransome-Kuti', 'Funmilayo Ransome-Kuti', 'Funmilayo Ransome-Kuti', 'فونميلايو رانسوم كوتي'),
    distractors: [
      L('Margaret Ekpo', 'Margaret Ekpo', 'Margaret Ekpo', 'Margaret Ekpo', 'مارغريت إيكبو'),
      L('Flora Nwapa', 'Flora Nwapa', 'Flora Nwapa', 'Flora Nwapa', 'فلورا نوابا'),
      L('Kudirat Abiola', 'Kudirat Abiola', 'Kudirat Abiola', 'Kudirat Abiola', 'كوديرات أبيولا'),
    ],
    explanation: L(
      'Enseignante et organisatrice infatigable, Funmilayo Ransome-Kuti mobilisa des dizaines de milliers de femmes des marchés d’Egba et participa aux négociations constitutionnelles d’indépendance.',
      'Educator and tireless organizer Funmilayo Ransome-Kuti mobilized tens of thousands of Egba market women and participated in pre-independence talks.',
      'Educadora y organizadora incansable, movilizó a decenas de miles de vendedoras y participó en las conferencias constitucionales.',
      'Educadora e organizadora brilhante, mobilizou dezenas de milhares de comerciantes e integrou conferências pela independência.',
      'قادت المعلمة والناشطة فونميلايو رانسوم كوتي تعبئة واسعة للنساء التاجرات وشاركت في مفاوضات الاستقلال.'
    ),
  }),
  mkQ({
    id: 'cur_NG_04',
    countryCode: 'NG',
    category: 'history',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'paysage_culturel_sukur_mandara_unesco',
    source: 'UNESCO — Paysage culturel de Sukur (1999)',
    prompt: L(
      'Quel plateau perché des monts Mandara dans l’État d’Adamawa, célèbre pour ses terrasses agricoles en pierre sèche et le palais du Hidi, est devenu en 1999 le tout premier paysage culturel africain inscrit à l’UNESCO ?',
      'Which hilltop settlement in Adamawa’s Mandara Mountains, famed for dry-stone agricultural terraces and the Hidi’s Palace, became Africa’s very first UNESCO Cultural Landscape in 1999?',
      '¿Qué asentamiento de los montes Mandara en Adamawa, célebre por sus terrazas de piedra y el palacio del Hidi, fue en 1999 el primer Paisaje Cultural africano de la UNESCO?',
      'Qual sítio nos montes Mandara em Adamawa, célebre pelos terraços de pedra e o palácio do Hidi, tornou-se em 1999 a primeira Paisagem Cultural africana da UNESCO?',
      'أي موقع في جبال ماندارا بولاية أداماوا، المشهور بمدرجاته الحجرية وقصر الهيدي، أصبح عام 1999 أول مشهد ثقافي إفريقي لدى اليونسكو؟'
    ),
    countryModePrompt: L(
      'Comment s’appelle le célèbre paysage culturel de l’État d’Adamawa dans les monts Mandara, premier site d’Afrique classé à l’UNESCO dans cette catégorie en 1999 ?',
      'What is the name of the hilltop Adamawa cultural landscape in the Mandara Mountains that became Africa’s first UNESCO Cultural Landscape in 1999?',
      '¿Cómo se llama el célebre paisaje cultural de Adamawa en los montes Mandara inscrito en la UNESCO en 1999?',
      'Como se chama a célebre paisagem cultural de Adamawa nos montes Mandara inscrita na UNESCO em 1999?',
      'ما اسم المشهد الثقافي التاريخي في جبال ماندارا بولاية أداماوا الذي سُجل كأول موقع إفريقي من نوعه في اليونسكو عام 1999؟'
    ),
    correct: L('Le paysage culturel de Sukur', 'Sukur Cultural Landscape', 'Paisaje cultural de Sukur', 'Paisagem Cultural de Sukur', 'المشهد الثقافي في سوكور'),
    distractors: [
      L('Les murs de Sungbo’s Eredo', 'Sungbo’s Eredo', 'Murallas de Sungbo’s Eredo', 'Muralhas de Sungbo’s Eredo', 'أسوار سونغبو إريدو'),
      L('Les monolithes d’Ikom', 'Ikom Monoliths', 'Monolitos de Ikom', 'Monólitos de Ikom', 'نصب إيكوم الصخرية'),
      L('Le rocher d’Olumo', 'Olumo Rock', 'Roca Olumo', 'Rocha Olumo', 'صخرة أولومو'),
    ],
    explanation: L(
      'Dominé par le palais en pierre du souverain Hidi et d’anciennes forges de fer, Sukur témoigne d’une maîtrise architecturale et agricole remarquable sur un plateau granitique.',
      'Crowned by the Hidi’s stone palace, sacred shrines, and iron-smelting remains, Sukur preserves centuries of Mandara highland ingenuity.',
      'Coronado por el palacio de piedra del Hidi y antiguas fraguas, Sukur refleja siglos de arquitectura serrana.',
      'Coroado pelo palácio de pedra do Hidi e antigas forjas de ferro, Sukur preserva séculos de engenharia serrana.',
      'يبرز موقع سوكور بقصره الحجري ومدرجاته الزراعية ومصاهر الحديد القديمة كإرث معماري فريد.'
    ),
  }),
  mkQ({
    id: 'cur_NG_05',
    countryCode: 'NG',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'zuma_rock_monolithe_abuja',
    source: 'Géographie & symboles nationaux (billet de 100 nairas)',
    prompt: L(
      'Quel gigantesque monolithe granitique haut d’environ 300 mètres, visible sur l’autoroute au nord-ouest d’Abuja et représenté sur le billet de 100 nairas, est surnommé la « porte d’Abuja » ?',
      'Which massive 300-metre granite monolith northwest of Abuja—depicted on the 100-naira banknote—is nicknamed the "Gateway to Abuja"?',
      '¿Qué gigantesco monolito granítico de unos 300 metros al noroeste de Abuya, presente en el billete de 100 nairas, es apodado la "Puerta de Abuya"?',
      'Qual gigantesco monólito granítico de cerca de 300 metros a noroeste de Abuja, estampado na nota de 100 nairas, é chamado de "Portal de Abuja"?',
      'ما اسم الصخرة الغرانيتية الضخمة بارتفاع نحو 300 متر شمال غرب أبوجا والمطبوعة على ورقة المئة نيرة؟'
    ),
    countryModePrompt: L(
      'Quel célèbre inselberg de gabbro et granit culminant à près de 300 m au-dessus de la plaine, illustrant le billet de 100 nairas, marque l’entrée d’Abuja ?',
      'Which famous granite-gabbro monolith rising roughly 300 m above the surrounding plain near Suleja appears on the 100-naira note?',
      '¿Qué famoso monolito cercano a Suleja que aparece en el billete de 100 nairas marca la entrada a Abuya?',
      'Qual famoso monólito perto de Suleja retratado na nota de 100 nairas marca a entrada para Abuja?',
      'أي كتلة صخرية ضخمة قرب سوليجا تطل على مدخل أبوجا وتظهر صورتها على العملة من فئة 100 نيرة؟'
    ),
    correct: L('Zuma Rock', 'Zuma Rock', 'Roca Zuma', 'Rocha Zuma', 'صخرة زوما'),
    distractors: [
      L('Aso Rock', 'Aso Rock', 'Roca Aso', 'Rocha Aso', 'صخرة أسو'),
      L('Olumo Rock', 'Olumo Rock', 'Roca Olumo', 'Rocha Olumo', 'صخرة أولومو'),
      L('Idanre Hill', 'Idanre Hill', 'Colina Idanre', 'Colina Idanre', 'تلال إيدانري'),
    ],
    explanation: L(
      'Distinct du rocher présidentiel Aso Rock situé à l’intérieur d’Abuja, Zuma Rock se dresse à Madalla dans l’État du Niger avec des stries naturelles évoquant un visage humain.',
      'Distinct from Aso Rock inside Abuja itself, Zuma Rock rises just across the Niger State border with natural rock contours resembling a human face.',
      'Distinta de la roca Aso dentro de la capital, Zuma Rock se eleva junto a la autopista con contornos que evocan un rostro.',
      'Diferente da Aso Rock dentro da capital, a Rocha Zuma ergue-se na rodovia com contornos que lembram um rosto humano.',
      'تختلف صخرة زوما عن صخرة أسو داخل أبوجا، وتتميز بنقوشها الطبيعية على الطريق السريع التي تشبه ملامح وجه بشري.'
    ),
  }),
  mkQ({
    id: 'cur_NG_06',
    countryCode: 'NG',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'chappal_waddi_taraba_2419m',
    source: 'Géographie physique — Plateau de Mambilla',
    prompt: L(
      'Culminant à 2 419 mètres dans le parc national de Gashaka-Gumti (État de Taraba), quel sommet porte un nom signifiant « Montagne de la Mort » et constitue le point le plus élevé du Nigeria ?',
      'Rising to 2,419 metres in Gashaka-Gumti National Park (Taraba State), which summit—meaning "Mountain of Death"—is Nigeria’s highest point?',
      'Con 2.419 metros en el estado de Taraba, ¿qué cumbre cuyo nombre significa "Montaña de la Muerte" es la más alta de Nigeria?',
      'Com 2.419 metros no estado de Taraba, qual pico cujo nome significa "Montanha da Morte" é o ponto mais alto da Nigéria?',
      'أي قمة جبلية بارتفاع 2419 متراً في ولاية تارابا يُترجم اسمها إلى "جبل الموت" وتُعد أعلى قمة في نيجيريا؟'
    ),
    countryModePrompt: L(
      'Quel sommet culminant à 2 419 mètres sur le plateau de Mambilla dans l’État de Taraba est le point le plus haut du pays ?',
      'Which 2,419-metre summit on the Mambilla Plateau in Taraba State is the highest mountain in the country?',
      '¿Qué cumbre de 2.419 metros en la meseta de Mambilla (Taraba) es la más alta del país?',
      'Qual cume de 2.419 metros no planalto de Mambilla (Taraba) é a maior altitude do país?',
      'ما اسم القمة البالغ ارتفاعها 2419 متراً في هضبة مامبيلا بولاية تارابا والتي تُعد الأعلى في البلاد؟'
    ),
    correct: L('Chappal Waddi', 'Chappal Waddi', 'Chappal Waddi', 'Chappal Waddi', 'جبل تشابال وادي'),
    distractors: [
      L('Les collines d’Idanre', 'Idanre Hills', 'Colinas de Idanre', 'Colinas de Idanre', 'تلال إيدانري'),
      L('Le plateau de Jos', 'Jos Plateau', 'Meseta de Jos', 'Planalto de Jos', 'هضبة جوس'),
      L('Le mont Patti', 'Mount Patti', 'Monte Patti', 'Monte Patti', 'جبل باتي'),
    ],
    explanation: L(
      'Situé à la frontière camerounaise près de l’escarpement du Mambilla, Chappal Waddi surplombe des prairies verdoyantes d’altitude très prisées pour l’élevage et le thé.',
      'Situated along the southeastern highlands of Taraba State, Chappal Waddi overlooks cool highland pastures and tea-growing slopes.',
      'Situado en las tierras altas del sureste en Taraba, Chappal Waddi domina frescos pastizales de montaña.',
      'Situado nas terras altas do sudeste em Taraba, o Chappal Waddi domina campos elevados de clima ameno.',
      'يرتفع تشابال وادي فوق هضبة مامبيلا ذات المناخ المعتدل والمراعي الجبلية الخضراء في ولاية تارابا.'
    ),
  }),
  mkQ({
    id: 'cur_NG_07',
    countryCode: 'NG',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 1,
    topicKey: 'le_suya_brochettes_yaji',
    source: 'Gastronomie populaire — Nord & métropoles',
    prompt: L(
      'Comment appelle-t-on les célèbres brochettes de bœuf marinées dans un mélange grillé d’arachides pilées et d’épices (« yaji »), incontournables des soirées urbaines de Lagos à Kano ?',
      'What are the wildly popular smoky beef skewers rubbed in spiced roasted-peanut blend ("yaji") that rule evening street food from Lagos to Kano called?',
      '¿Cómo se llaman las populares brochetas de carne sazonadas con mezcla de cacahuete tostado y especias ("yaji")?',
      'Como se chamam os famosos espetinhos de carne bovina temperados com mistura de amendoim torrado e especiarias ("yaji")?',
      'ما اسم أسياخ اللحم المشوية الشهيرة المتبلة بمزيج الفول السوداني المحمص والتوابل الحارة (ياجي) المنتشرة ليلاً من لاغوس إلى كانو؟'
    ),
    countryModePrompt: L(
      'Quelle célèbre spécialité de viande grillée au feu de bois, enrobée d’épices « yaji » à base d’arachide moulue et servie dans du papier avec oignons et tomates, embaume les soirées de rue ?',
      'Which beloved evening street-food dish features wood-grilled spiced beef strips coated in nutty "yaji" seasoning and served with sliced red onions?',
      '¿Qué popular comida callejera nocturna consiste en tiras de carne asadas con condimento picante "yaji" y cebolla roja?',
      'Qual famosa comida de rua noturna traz tiras de carne grelhadas com tempero de amendoim "yaji" e cebola roxa?',
      'ما اسم وجبة الشواء الليلية الأشهر من شرائح اللحم المتبلة بمسحوق الفول السوداني الحار والمقدمة مع البصل والطماطم؟'
    ),
    correct: L('Le suya', 'Suya', 'Suya', 'Suya', 'السويا'),
    distractors: [
      L('Le puff-puff', 'Puff-puff', 'Puff-puff', 'Puff-puff', 'باف باف'),
      L('Le moi-moi', 'Moi-moi', 'Moi-moi', 'Moi-moi', 'موي موي'),
      L('L’akara', 'Akara', 'Acará', 'Acarajé', 'أكارا'),
    ],
    explanation: L(
      'Issu de la tradition culinaire haoussa (« tsire »), le suya doit sa saveur incomparable au « yaji » mêlant tourteau d’arachide, gingembre, clou de girofle et piment séché.',
      'Originating in northern Hausa culinary traditions ("tsire"), suya gets its addictive crunch and heat from nutty ginger-and-chilli yaji spice.',
      'De origen hausa ("tsire"), el suya debe su sabor único a la mezcla yaji de cacahuete tostado, jengibre y guindilla.',
      'De tradição hauçá ("tsire"), o suya deve seu sabor marcante ao tempero yaji de amendoim, gengibre e pimenta.',
      'تنحدر السويا من تقاليد الطهي لدى الهوسا، وتستمد مذاقها الفريد من توابل الياجي الغنية بالزنجبيل والفلفل والفول السوداني.'
    ),
  }),
  mkQ({
    id: 'cur_NG_08',
    countryCode: 'NG',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'soupe_egusi_graines_courge',
    source: 'Cuisine traditionnelle ouest-africaine',
    prompt: L(
      'De quel ingrédient principal la célèbre soupe « Egusi », accompagnée d’igname pilée (« pounded yam ») ou d’eba, tire-t-elle sa texture riche et onctueuse ?',
      'From which main ingredient does the classic rich "Egusi" soup, famously eaten with pounded yam or eba, get its distinctive creamy body?',
      '¿De qué ingrediente principal obtiene su textura espesa la célebre sopa "Egusi", servida con ñame machacado o eba?',
      'De qual ingrediente principal a famosa sopa "Egusi", servida com inhame pilado ou eba, obtém sua textura encorpada?',
      'ما المكون الرئيسي الذي يمنح حساء "إيغوسي" قوامه الغني ويُؤكل عادة مع اليام المهروس؟'
    ),
    countryModePrompt: L(
      'Quelle graine oléagineuse moulue sert de base à la célèbre sauce dorée « Egusi », dégustée avec de l’igname pilée (« pounded yam ») ou de l’eba ?',
      'Which ground protein-rich seed forms the hearty golden base of classic Egusi soup served alongside pounded yam or eba?',
      '¿Qué semilla molida constituye la base dorada de la clásica sopa Egusi acompañada de ñame machacado?',
      'Qual semente moída forma a base dourada da clássica sopa Egusi servida com inhame pilado ou eba?',
      'ما البذور المطحونة الغنية بالبروتين التي تشكّل القوام الأساسي لمرق "إيغوسي" التقليدي المقدم مع اليام المهروس؟'
    ),
    correct: L('Les graines de courge / melon (egusi)', 'Melon / gourd seeds (egusi)', 'Semillas de melón / calabaza', 'Sementes de melão / abóbora', 'بذور القرع والبطيخ البري'),
    distractors: [
      L('Les noyaux de mangue sauvage (ogbono)', 'Wild mango seeds (ogbono)', 'Semillas de mango silvestre', 'Sementes de manga silvestre', 'بذور المانجو البري'),
      L('Les fèves de cacao fermentées', 'Fermented cocoa beans', 'Granos de cacao fermentados', 'Sementes de cacau fermentadas', 'حبوب الكاكاو المخمرة'),
      L('La farine de sorgho rouge', 'Red sorghum flour', 'Harina de sorgo rojo', 'Farinha de sorgo vermelho', 'دقيق الذرة الحمراء'),
    ],
    explanation: L(
      'Riche en protéines, la poudre de graines de courge cucurbitacée mijote dans l’huile de palme rouge avec des épinards ou feuilles d’ugwu pour accompagner le pounded yam.',
      'Protein-rich ground melon seeds simmer in fragrant red palm oil with leafy greens and spices to form one of the nation’s signature soups.',
      'Ricas en proteínas, las semillas molidas se cocinan en aceite de palma rojo con hojas verdes para acompañar el ñame.',
      'Ricas em proteínas, as sementes moídas cozinham em óleo de dendê com folhas verdes para acompanhar o inhame.',
      'تُطهى بذور الإيغوسي المطحونة في زيت النخيل الأحمر مع الخضار الورقية لتشكل أحد أشهر الأطباق التقليدية.'
    ),
  }),
  mkQ({
    id: 'cur_NG_09',
    countryCode: 'NG',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'king_sunny_ade_juju_music',
    source: 'Grammy Archives & Musique Yoruba',
    prompt: L(
      'Quel guitariste légendaire et maître des percussions parlantes, nommé deux fois aux Grammy Awards dès 1984 pour « Synchro System », est surnommé le « Roi de la musique Jùjú » ?',
      'Which legendary guitarist and bandleader, twice Grammy-nominated beginning with 1984’s "Synchro System", is celebrated as the "King of Jùjú Music"?',
      '¿Qué legendario guitarrista y director de orquesta, nominado dos veces al Grammy desde "Synchro System", es conocido como el "Rey de la música Jùjú"?',
      'Qual lendário guitarrista e líder de banda, duas vezes indicado ao Grammy desde "Synchro System", é coroado como o "Rei da música Jùjú"?',
      'أي عازف غيتار أسطوري وقائد فرقة رُشح مرتين لجائزة غرامي ويُلقب بـ"ملك موسيقى الجوجو"؟'
    ),
    countryModePrompt: L(
      'Quel pionnier de la musique Jùjú, introduisant la guitare pedal-steel et le synthétiseur aux tambours parleurs yoruba, fut en 1984 l’un des premiers musiciens du pays nommés aux Grammy Awards ?',
      'Which Jùjú music pioneer fused pedal-steel guitar with Yoruba talking drums to earn his country’s landmark Grammy nomination for "Synchro System" in 1984?',
      '¿Qué pionero de la música Jùjú fusionó la guitarra pedal-steel con tambores parlantes yoruba logrando una histórica nominación al Grammy en 1984?',
      'Qual pioneiro da música Jùjú fundiu guitarra pedal-steel com tambores falantes iorubás conquistando indicação ao Grammy em 1984?',
      'أي رائد في موسيقى الجوجو مزج الغيتار الحديث بطبول اليوروبا الناطقة لينال ترشيحاً تاريخياً للغرامي عام 1984؟'
    ),
    correct: L('King Sunny Adé', 'King Sunny Adé', 'King Sunny Adé', 'King Sunny Adé', 'كينغ صني أدي'),
    distractors: [
      L('Ebenezer Obey', 'Ebenezer Obey', 'Ebenezer Obey', 'Ebenezer Obey', 'إيبينيزر أوبي'),
      L('Lagbaja', 'Lagbaja', 'Lagbaja', 'Lagbaja', 'لاغباجا'),
      L('Femi Kuti', 'Femi Kuti', 'Femi Kuti', 'Femi Kuti', 'فيمي كوتي'),
    ],
    explanation: L(
      'Originaire d’Ondo, Sunday Adeniyi Adegeye (King Sunny Adé) a conquis la planète dès les années 1980 avec ses grands ensembles mêlant guitares électriques et percussions traditionnelles.',
      'Born in Ondo, Sunday Adeniyi Adegeye ("King Sunny Adé") brought the infectious pulse of Jùjú orchestras to international festivals and Billboard charts.',
      'Nacido en Ondo, King Sunny Adé llevó la cadencia envolvente de las grandes orquestas jùjú a los escenarios mundiales.',
      'Nascido em Ondo, King Sunny Adé levou as grandes orquestras de jùjú aos palcos internacionais.',
      'قاد كينغ صني أدي فرق موسيقى الجوجو إلى العالمية بأسلوبه الساحر الذي يجمع الإيقاعات التقليدية بالآلات الحديثة.'
    ),
  }),
  mkQ({
    id: 'cur_NG_10',
    countryCode: 'NG',
    category: 'culture',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'ngozi_okonjo_iweala_omc_directrice',
    source: 'OMC Genève — Nomination historique (2021)',
    prompt: L(
      'Quelle ancienne ministre des Finances du Nigeria est devenue en mars 2021 à la fois la première femme et la première personnalité africaine à diriger l’Organisation mondiale du commerce (OMC) ?',
      'Which former Finance Minister became in March 2021 both the first woman and the first African to serve as Director-General of the World Trade Organization (WTO)?',
      '¿Qué exministra de Finanzas se convirtió en marzo de 2021 en la primera mujer y primera persona africana en dirigir la Organización Mundial del Comercio (OMC)?',
      'Qual ex-ministra das Finanças tornou-se em março de 2021 a primeira mulher e primeira pessoa africana a dirigir a Organização Mundial do Comércio (OMC)?',
      'أي وزيرة مالية سابقة أصبحت في مارس 2021 أول امرأة وأول شخصية إفريقية تتولى رئاسة منظمة التجارة العالمية؟'
    ),
    countryModePrompt: L(
      'Quelle économiste formée à Harvard et au MIT, deux fois ministre des Finances, a pris en 2021 la direction générale de l’Organisation mondiale du commerce (OMC) à Genève ?',
      'Which Harvard- and MIT-educated economist and two-time Finance Minister became Director-General of the World Trade Organization (WTO) in Geneva in 2021?',
      '¿Qué economista formada en Harvard y el MIT y dos veces ministra de Finanzas asumió la dirección general de la OMC en 2021?',
      'Qual economista formada em Harvard e no MIT e duas vezes ministra das Finanças assumiu a direção-geral da OMC em 2021?',
      'أي خبيرة اقتصادية ووزيرة مالية سابقة تولت في جنيف عام 2021 منصب المديرة العامة لمنظمة التجارة العالمية؟'
    ),
    correct: L('Ngozi Okonjo-Iweala', 'Ngozi Okonjo-Iweala', 'Ngozi Okonjo-Iweala', 'Ngozi Okonjo-Iweala', 'نغوزي أوكونجو إيويالا'),
    distractors: [
      L('Amina J. Mohammed', 'Amina J. Mohammed', 'Amina J. Mohammed', 'Amina J. Mohammed', 'أمينة محمد'),
      L('Arunma Oteh', 'Arunma Oteh', 'Arunma Oteh', 'Arunma Oteh', 'أرونما أوتيه'),
      L('Dora Akunyili', 'Dora Akunyili', 'Dora Akunyili', 'Dora Akunyili', 'دورا أكونييلي'),
    ],
    explanation: L(
      'Ancienne directrice générale à la Banque mondiale, Ngozi Okonjo-Iweala est réputée pour son combat pour la transparence budgétaire et l’allègement de la dette.',
      'A former Managing Director at the World Bank, Ngozi Okonjo-Iweala won historic global backing to lead the WTO.',
      'Exdirectora gerente del Banco Mundial, Ngozi Okonjo-Iweala asumió con amplio respaldo mundial el timón de la OMC.',
      'Ex-diretora-gerente do Banco Mundial, Ngozi Okonjo-Iweala assumiu a OMC com histórico respaldo internacional.',
      'قادت نغوزي أوكونجو إيويالا إصلاحات اقتصادية ومالية بارزة قبل أن تتبوأ قيادة منظمة التجارة العالمية.'
    ),
  }),
  mkQ({
    id: 'cur_NG_11',
    countryCode: 'NG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'nwankwo_kanu_papilo_ajax_arsenal',
    source: 'CAF & UEFA — Joueur africain de l’année 1996 & 1999',
    prompt: L(
      'Quel attaquant longiligne surnommé « Papilo », champion olympique 1996, vainqueur de la Ligue des champions avec l’Ajax et membre des « Invincibles » d’Arsenal, a remporté deux fois le Ballon d’Or africain ?',
      'Which tall forward nicknamed "Papilo"—1996 Olympic champion, Ajax Champions League winner, and Arsenal "Invincible"—won African Footballer of the Year twice?',
      '¿Qué estilizado delantero apodado "Papilo", campeón olímpico en 1996 y ganador de la Champions con el Ajax y de la Premier invicto con el Arsenal, ganó dos Balones de Oro africanos?',
      'Qual elegante atacante apelidado de "Papilo", campeão olímpico em 1996, vencedor da Champions pelo Ajax e "Invencível" pelo Arsenal, ganhou duas Bolas de Ouro africanas?',
      'أي مهاجم طويل القامة لُقب بـ"بابيلو"، بطل أولمبياد 1996 ودوري الأبطال مع أياكس وأحد نجوم أرسنال الذين لم يُهزموا، فاز بجائزة أفضل لاعب إفريقي مرتين؟'
    ),
    countryModePrompt: L(
      'Quel attaquant natif d’Owerri surnommé « Papilo », double Joueur africain de l’année (1996 et 1999) et héros de la demi-finale olympique 1996 contre le Brésil, a brillé à l’Ajax et à Arsenal ?',
      'Which Owerri-born striker nicknamed "Papilo", two-time African Footballer of the Year (1996 & 1999) and 1996 Olympic semifinal hero against Brazil, starred for Ajax and Arsenal?',
      '¿Qué delantero nacido en Owerri y apodado "Papilo", doble Balón de Oro africano y héroe ante Brasil en 1996, brilló en Ajax y Arsenal?',
      'Qual atacante nascido em Owerri e apelidado de "Papilo", bicampeão africano (1996 e 1999) e herói contra o Brasil em 1996, brilhou no Ajax e Arsenal?',
      'أي مهاجم من مواليد أويري لُقب بـ"بابيلو" ونال الكرة الذهبية الإفريقية مرتين وتألق أمام البرازيل في أولمبياد 1996 ومع أياكس وأرسنال؟'
    ),
    correct: L('Nwankwo Kanu', 'Nwankwo Kanu', 'Nwankwo Kanu', 'Nwankwo Kanu', 'نوانكو كانو'),
    distractors: [
      L('Finidi George', 'Finidi George', 'Finidi George', 'Finidi George', 'فينيدي جورج'),
      L('Daniel Amokachi', 'Daniel Amokachi', 'Daniel Amokachi', 'Daniel Amokachi', 'دانييل أموكاتشي'),
      L('Victor Ikpeba', 'Victor Ikpeba', 'Victor Ikpeba', 'Victor Ikpeba', 'فيكتور إيكبيبا'),
    ],
    explanation: L(
      'Après une opération cardiaque réussie, Nwankwo Kanu signa un retour prodigieux, marqua l’histoire d’Arsenal et créa la Kanu Heart Foundation pour soigner des enfants atteints de cardiopathies.',
      'Recovering from major heart surgery early in his career, Nwankwo Kanu starred at Arsenal and founded the Kanu Heart Foundation.',
      'Recuperado de una delicada cirugía cardíaca, brilló en el Arsenal y fundó la Kanu Heart Foundation.',
      'Superando uma cirurgia cardíaca, brilhou no Arsenal e criou a Kanu Heart Foundation para ajudar crianças.',
      'تجاوز نوانكو كانو جراحة دقيقة في القلب ليتألق مع أرسنال ويؤسس مؤسسة كانو الخيرية لرعاية مرضى القلب من الأطفال.'
    ),
  }),
  mkQ({
    id: 'cur_NG_12',
    countryCode: 'NG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'tobi_amusan_record_monde_100m_haies',
    source: 'World Athletics — Eugene 2022',
    prompt: L(
      'Quelle sprinteuse native d’Ijebu Ode a établi le record du monde féminin du 100 m haies en 12 s 12 avant d’être sacrée championne du monde à Eugene en 2022 ?',
      'Which Ijebu Ode-born hurdler shattered the women’s 100m hurdles world record in 12.12 seconds on her way to 2022 World Championships gold in Eugene?',
      '¿Qué vallista nacida en Ijebu Ode batió el récord mundial de 100 m vallas con 12,12 s camino del oro mundial en Eugene 2022?',
      'Qual barreirista nascida em Ijebu Ode quebrou o recorde mundial dos 100m com barreiras em 12s12 no Mundial de Eugene 2022?',
      'أي عداءة حواجز من إيجيبو أودي حطمت الرقم القياسي العالمي لسباق 100 متر حواجز بزمن 12.12 ثانية وتوجت بذهبية العالم 2022؟'
    ),
    countryModePrompt: L(
      'Quelle spécialiste des haies originaire de l’État d’Ogun a pulvérisé en 2022 le record du monde du 100 m haies en 12 s 12 lors de son sacre mondial à Eugene ?',
      'Which Ogun State hurdler broke the women’s 100m hurdles world record in 12.12 seconds while capturing 2022 World gold in Eugene?',
      '¿Qué vallista del estado de Ogun pulverizó en 2022 el récord mundial de 100 m vallas en 12,12 s durante el Mundial de Eugene?',
      'Qual especialista do estado de Ogun pulverizou em 2022 o recorde mundial dos 100m com barreiras em 12s12 no Mundial de Eugene?',
      'أي بطلة حواجز من ولاية أوغون حطمت الرقم العالمي لـ100 متر حواجز (12.12 ث) ونالت ذهبية بطولة العالم 2022؟'
    ),
    correct: L('Tobi Amusan', 'Tobi Amusan', 'Tobi Amusan', 'Tobi Amusan', 'توبي أموسان'),
    distractors: [
      L('Blessing Okagbare', 'Blessing Okagbare', 'Blessing Okagbare', 'Blessing Okagbare', 'بليسينغ أوكاغباري'),
      L('Ese Brume', 'Ese Brume', 'Ese Brume', 'Ese Brume', 'إيسي برومي'),
      L('Mary Onyali', 'Mary Onyali', 'Mary Onyali', 'Mary Onyali', 'ماري أونيالي'),
    ],
    explanation: L(
      'En demi-finale à Eugene en juillet 2022, Tobi Amusan a battu le record de Kendra Harrison en 12 s 12 avant de remporter le tout premier titre mondial d’athlétisme de son pays.',
      'Clocking 12.12 s in the Eugene semifinals before storming the final, Tobi Amusan claimed her nation’s first-ever World Athletics Championships gold medal.',
      'Con 12,12 s en semifinales de Eugene 2022, Tobi Amusan logró luego el primer oro mundial de atletismo para el país.',
      'Com 12s12 na semifinal de Eugene 2022, Tobi Amusan conquistou na sequência o primeiro ouro mundial de atletismo do país.',
      'حققت توبي أموسان زمناً عالمياً مذهلاً (12.12 ثانية) ومنحت بلادها أول ذهبية على الإطلاق في بطولات العالم لألعاب القوى.'
    ),
  }),

  // ZA — Afrique du Sud (16 Qs)
  mkQ({
    id: 'cur_ZA_01',
    countryCode: 'ZA',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 1,
    topicKey: 'freedom_day_27_avril_1994',
    source: 'Constitution & Archives nationales — 1994',
    prompt: L(
      'Que commémore en Afrique du Sud le jour férié national appelé « Freedom Day » chaque 27 avril ?',
      'What historic milestone does South Africa commemorate every April 27 on the national holiday known as "Freedom Day"?',
      '¿Qué hito histórico conmemora Sudáfrica cada 27 de abril en el festivo nacional llamado "Freedom Day"?',
      'Que marco histórico a África do Sul celebra todo dia 27 de abril no feriado nacional chamado "Freedom Day"?',
      'ما الحدث التاريخي الذي تحييه جنوب إفريقيا سنوياً في السابع والعشرين من أبريل تحت اسم "يوم الحرية"؟'
    ),
    countryModePrompt: L(
      'Quel événement historique survenu le 27 avril 1994 est célébré chaque année lors du jour férié national appelé « Freedom Day » ?',
      'What landmark event of April 27, 1994 is celebrated annually on the national public holiday known as "Freedom Day"?',
      '¿Qué acontecimiento del 27 de abril de 1994 se conmemora anualmente en la fiesta nacional de "Freedom Day"?',
      'Qual acontecimento de 27 de abril de 1994 é celebrado anualmente no feriado nacional de "Freedom Day"?',
      'أي حدث تاريخي وقع في 27 أبريل 1994 ويُحتفل بذكراه سنوياً في عطلة "يوم الحرية" الوطنية؟'
    ),
    correct: L('Les premières élections démocratiques multiraciales', 'The first non-racial democratic elections', 'Las primeras elecciones democráticas multirraciales', 'As primeiras eleições democráticas multirraciais', 'أول انتخابات ديمقراطية غير عنصرية'),
    distractors: [
      L('La libération de Nelson Mandela', 'Nelson Mandela’s release from prison', 'La liberación de Nelson Mandela', 'A libertação de Nelson Mandela', 'إطلاق سراح نيلسون مانديلا'),
      L('L’adoption de la Constitution de 1996', 'Adoption of the 1996 Constitution', 'Adopción de la Constitución de 1996', 'Adoção da Constituição de 1996', 'اعتماد دستور عام 1996'),
      L('La création de l’Union africaine', 'Founding of the African Union', 'Fundación de la Unión Africana', 'Criação da União Africana', 'تأسيس الاتحاد الإفريقي'),
    ],
    explanation: L(
      'Du 26 au 29 avril 1994, des millions de citoyens de toutes origines ont fait la queue pour voter librement pour la première fois, portant Nelson Mandela à la présidence.',
      'From April 26 to 29, 1994, millions queued peacefully to cast their first democratic votes in a non-racial election.',
      'Del 26 al 29 de abril de 1994, millones de ciudadanos votaron libremente por primera vez sin distinción racial.',
      'Em abril de 1994, milhões de cidadãos formaram longas filas para votar livremente pela primeira vez sem barreiras raciais.',
      'شهدت أيام أواخر أبريل 1994 اصطفاف الملايين للإدلاء بأصواتهم بحرية للمرة الأولى في انتخابات ديمقراطية شاملة.'
    ),
  }),
  mkQ({
    id: 'cur_ZA_02',
    countryCode: 'ZA',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 2,
    topicKey: 'steve_biko_conscience_noire',
    source: 'Histoire du mouvement anti-apartheid',
    prompt: L(
      'Quel militant et penseur anti-apartheid né à Tarkastad, fondateur du Mouvement de la Conscience noire à la fin des années 1960, mourut en détention en 1977 à 30 ans ?',
      'Which Tarkastad-born anti-apartheid thinker founded the Black Consciousness Movement in the late 1960s and died in police custody in 1977 aged 30?',
      '¿Qué pensador y activista antiapartheid fundó el Movimiento de Conciencia Negra a fines de los 60 y murió detenido en 1977 con 30 años?',
      'Qual pensador e ativista antiapartheid fundou o Movimento da Consciência Negra no fim dos anos 1960 e morreu sob custódia em 1977?',
      'أي مفكر ومناضل ضد الفصل العنصري أسس حركة الوعي الأسود أواخر الستينيات وتوفي في المعتقل عام 1977 بعمر الثلاثين؟'
    ),
    countryModePrompt: L(
      'Quel fondateur du Mouvement de la Conscience noire (« Black Consciousness Movement »), auteur de la célèbre formule sur l’émancipation mentale et tué en détention en 1977, marqua toute une génération ?',
      'Which founder of the Black Consciousness Movement who famously wrote on psychological liberation died in police custody in September 1977?',
      '¿Qué fundador del Movimiento de Conciencia Negra, muerto bajo custodia en septiembre de 1977, inspiró a toda una generación?',
      'Qual fundador do Movimento da Consciência Negra, morto sob custódia em setembro de 1977, inspirou toda uma geração?',
      'أي مؤسس لحركة الوعي الأسود استشهد في السجن عام 1977 وشكّلت أفكاره مصدر إلهام لجيل كامل؟'
    ),
    correct: L('Steve Biko', 'Steve Biko', 'Steve Biko', 'Steve Biko', 'ستيف بيكو'),
    distractors: [
      L('Robert Sobukwe', 'Robert Sobukwe', 'Robert Sobukwe', 'Robert Sobukwe', 'روبرت سوبوكوي'),
      L('Chris Hani', 'Chris Hani', 'Chris Hani', 'Chris Hani', 'كريس هاني'),
      L('Oliver Tambo', 'Oliver Tambo', 'Oliver Tambo', 'Oliver Tambo', 'أوليفر تامبو'),
    ],
    explanation: L(
      'À travers le SASO puis « I Write What I Like », Steve Biko prôna la fierté identitaire et l’autonomie intellectuelle face à l’oppression ; son décès en 1977 souleva une vague d’indignation mondiale.',
      'Leading SASO and penning "I Write What I Like", Steve Biko inspired pride and self-reliance; his 1977 death sparked global sanctions.',
      'Desde la organización SASO y su obra "Escribo lo que quiero", Steve Biko impulsó la dignidad frente a la opresión.',
      'À frente da SASO e autor de "Eu Escrevo o que Quero", Steve Biko promoveu orgulho e autodeterminação.',
      'دعا ستيف بيكو عبر حركة الوعي الأسود إلى الاعتزاز بالذات والتحرر النفسي قبل استشهاده في الاعتقال عام 1977.'
    ),
  }),
  mkQ({
    id: 'cur_ZA_03',
    countryCode: 'ZA',
    category: 'history',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'royaume_mapungubwe_rhinoceros_or_unesco',
    source: 'UNESCO — Paysage culturel de Mapungubwe (2003)',
    prompt: L(
      'Quel royaume médiéval de l’âge du fer situé au confluent du Limpopo et de la Shashe (XIe–XIIIe siècle), célèbre pour son rhinocéros en feuille d’or, fut le prédécesseur du Grand Zimbabwe ?',
      'Which medieval Iron Age kingdom at the confluence of the Limpopo and Shashe rivers (11th–13th century), famed for its tiny golden rhinoceros, preceded Great Zimbabwe?',
      '¿Qué reino medieval de la Edad del Hierro en la confluencia del Limpopo y el Shashe, célebre por su rinoceronte de oro, precedió al Gran Zimbabue?',
      'Qual reino medieval da Idade do Ferro na confluência dos rios Limpopo e Shashe, famoso por seu rinoceronte de ouro, precedeu o Grande Zimbábue?',
      'أي مملكة من العصر الحديدي عند ملتقى نهري ليمبوبو وشاشي، المشهورة بتمثال وحيد القرن الذهبي، سبقت زيمبابوي العظمى؟'
    ),
    countryModePrompt: L(
      'Quel site archéologique du Limpopo classé à l’UNESCO abritait dès le XIe siècle un puissant royaume commerçant l’ivoire et l’or jusqu’en Inde et en Chine, symbolisé par un rhinocéros d’or ?',
      'Which UNESCO-listed Limpopo hilltop kingdom traded gold and ivory across the Indian Ocean from the 11th century and yielded an iconic golden rhinoceros?',
      '¿Qué reino del Limpopo inscrito en la UNESCO comerciaba oro y marfil desde el siglo XI y legó un famoso rinoceronte de oro?',
      'Qual reino histórico do Limpopo inscrito na UNESCO comerciava ouro e marfim desde o século XI e legou um rinoceronte de ouro?',
      'أي مملكة أثرية في إقليم ليمبوبو مدرجة باليونسكو تاجرت بالذهب والعاج عبر المحيط الهندي وخلّفت وحيد قرن ذهبياً؟'
    ),
    correct: L('Mapungubwe', 'Mapungubwe', 'Mapungubwe', 'Mapungubwe', 'مملكة مابونغوبوي'),
    distractors: [
      L('Thulamela', 'Thulamela', 'Thulamela', 'Thulamela', 'ثولاميلا'),
      L('Khami', 'Khami', 'Khami', 'Khami', 'خامي'),
      L('Ulundi', 'Ulundi', 'Ulundi', 'Ulundi', 'أولوندي'),
    ],
    explanation: L(
      'Découvert sur la colline sacrée de Mapungubwe dans les années 1930, le rhinocéros d’or sculpté sur bois atteste de la sophistication de cette société africaine du XIIIe siècle.',
      'Excavated atop Mapungubwe Hill, the delicate 13th-century gold-foil rhinoceros highlights a stratified state connected to Indian Ocean trade.',
      'Hallado en la colina sagrada de Mapungubwe, el rinoceronte de oro del siglo XIII demuestra una avanzada sociedad comercial.',
      'Encontrado na colina de Mapungubwe, o rinoceronte de ouro do século XIII revela uma sociedade refinada e ligada ao Índico.',
      'عُثر في تلة مابونغوبوي على تمثال وحيد القرن الذهبي من القرن الثالث عشر شاهداً على مملكة تجارية مزدهرة.'
    ),
  }),
  mkQ({
    id: 'cur_ZA_04',
    countryCode: 'ZA',
    category: 'history',
    subCategory: 'sciences_innovations',
    difficulty: 2,
    topicKey: 'berceau_humanite_sterkfontein_unesco',
    source: 'UNESCO — Sites des hominidés fossiles (Gauteng)',
    prompt: L(
      'Quel réseau de grottes calcaires situé près de Johannesburg au cœur du « Berceau de l’humanité » a livré certains des fossiles d’Australopithèques les plus célèbres au monde, comme « Mrs. Ples » et « Little Foot » ?',
      'Which limestone cave system near Johannesburg at the heart of the "Cradle of Humankind" yielded world-famous Australopithecus fossils like "Mrs. Ples" and "Little Foot"?',
      '¿Qué sistema de cuevas calizas cerca de Johannesburgo en la "Cuna de la Humanidad" reveló fósiles célebres como "Mrs. Ples" y "Little Foot"?',
      'Qual sistema de cavernas calcárias perto de Joanesburgo no "Berço da Humanidade" revelou fósseis célebres como "Mrs. Ples" e "Little Foot"?',
      'أي نظام كهوف جيرية قرب جوهانسبرغ في قلب "مهد البشرية" كُشف فيه عن أحفوري "السيدة بليس" و"القدم الصغيرة"؟'
    ),
    countryModePrompt: L(
      'Comment s’appellent les célèbres grottes du Gauteng au cœur du « Berceau de l’humanité », où furent mis au jour « Mrs. Ples » et le squelette presque complet « Little Foot » ?',
      'What are the famous Gauteng caves at the heart of the Cradle of Humankind where "Mrs. Ples" and the near-complete "Little Foot" skeleton were unearthed?',
      '¿Cómo se llaman las célebres cuevas de Gauteng en la Cuna de la Humanidad donde se descubrieron "Mrs. Ples" y "Little Foot"?',
      'Como se chamam as célebres cavernas de Gauteng no Berço da Humanidade onde foram descobertos "Mrs. Ples" e "Little Foot"?',
      'ما اسم الكهوف الشهيرة في غاوتينغ بقلب مهد البشرية حيث اكتُشفت أحفورتا السيدة بليس وليتل فوت؟'
    ),
    correct: L('Les grottes de Sterkfontein', 'Sterkfontein Caves', 'Cuevas de Sterkfontein', 'Cavernas de Sterkfontein', 'كهوف ستيركفونتين'),
    distractors: [
      L('Les grottes de Cango', 'Cango Caves', 'Cuevas de Cango', 'Cavernas de Cango', 'كهوف كانغو'),
      L('Les grottes de Sudwala', 'Sudwala Caves', 'Cuevas de Sudwala', 'Cavernas de Sudwala', 'كهوف سودوالا'),
      L('La grotte de Blombos', 'Blombos Cave', 'Cueva de Blombos', 'Caverna de Blombos', 'كهف بلومبوس'),
    ],
    explanation: L(
      'Fouillées depuis 1936 par Robert Broom puis Phillip Tobias et Ron Clarke, les grottes de Sterkfontein éclairent trois millions d’années d’évolution des hominidés.',
      'Excavated continuously since 1936, Sterkfontein has revealed over a third of all early hominid fossils known prior to Homo.',
      'Excavadas desde 1936, las cuevas de Sterkfontein han aportado una proporción clave de fósiles de homínidos tempranos.',
      'Escavadas desde 1936, as cavernas de Sterkfontein revelaram grande parte dos fósseis conhecidos de primeiros hominídeos.',
      'قدمت كهوف ستيركفونتين منذ عام 1936 جانباً أساسياً من سجل أحافير أشباه البشر الأوائل في العالم.'
    ),
  }),
  mkQ({
    id: 'cur_ZA_05',
    countryCode: 'ZA',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 2,
    topicKey: 'winnie_madikizela_mandela',
    source: 'Archives du mouvement démocratique',
    prompt: L(
      'Surnommée affectueusement « Mère de la Nation » (« Mama Winnie »), quelle militante née dans le Cap-Oriental incarna la résistance intérieure de Soweto durant les 27 années d’emprisonnement de Nelson Mandela ?',
      'Affectionately called "Mother of the Nation", which Eastern Cape-born activist sustained internal resistance in Soweto throughout Nelson Mandela’s 27-year imprisonment?',
      'Apodada cariñosamente "Madre de la Nación", ¿qué activista sostuvo la resistencia interior en Soweto durante los 27 años de prisión de Nelson Mandela?',
      'Chamada carinhosamente de "Mãe da Nação", qual ativista sustentou a resistência interna em Soweto durante os 27 anos de prisão de Nelson Mandela?',
      'من المناضلة الملقبة بـ"أم الأمة" التي جسدت المقاومة الداخلية في سويتو طوال سبعة وعشرين عاماً من سجن نيلسون مانديلا؟'
    ),
    countryModePrompt: L(
      'Quelle travailleuse sociale et combattante anti-apartheid née à Bizana, surnommée « Mère de la Nation », maintint vivant le flambeau de la lutte à Soweto pendant le long emprisonnement de son époux ?',
      'Which Bizana-born social worker and activist, honoured as "Mother of the Nation", kept the struggle alive in Soweto during her husband’s 27-year imprisonment?',
      '¿Qué trabajadora social y militante nacida en Bizana, llamada "Madre de la Nación", mantuvo viva la lucha en Soweto?',
      'Qual assistente social e militante nascida em Bizana, chamada "Mãe da Nação", manteve a luta viva em Soweto?',
      'أي ناشطة وأخصائية اجتماعية من بيزانا لُقبت بـ"أم الأمة" وأبقت جذوة النضال مشتعلة في سويتو طوال سنوات الأسر؟'
    ),
    correct: L('Winnie Madikizela-Mandela', 'Winnie Madikizela-Mandela', 'Winnie Madikizela-Mandela', 'Winnie Madikizela-Mandela', 'ويني ماديكيزيلا مانديلا'),
    distractors: [
      L('Albertina Sisulu', 'Albertina Sisulu', 'Albertina Sisulu', 'Albertina Sisulu', 'ألبرتينا سيسولو'),
      L('Lilian Ngoyi', 'Lilian Ngoyi', 'Lilian Ngoyi', 'Lilian Ngoyi', 'ليليان نغويي'),
      L('Graça Machel', 'Graça Machel', 'Graça Machel', 'Graça Machel', 'غراسا ماشيل'),
    ],
    explanation: L(
      'Malgré les assignations à résidence à Brandfort, les arrestations et l’isolement, Winnie Madikizela-Mandela demeura une voix inflexible de la lutte contre l’apartheid.',
      'Enduring banishment to Brandfort, arrests, and harassment, Winnie Madikizela-Mandela remained a towering symbol of defiance in Soweto.',
      'Pese al destierro en Brandfort y las detenciones, Winnie Madikizela-Mandela encarnó la resistencia frente al apartheid.',
      'Mesmo sob banimento em Brandfort e prisões, Winnie Madikizela-Mandela seguiu como símbolo de resistência.',
      'رغم النفي والاعتقال المتكرر، ظلت ويني ماديكيزيلا مانديلا رمزاً بارزاً لصمود الشعب في مواجهة نظام الفصل العنصري.'
    ),
  }),
  mkQ({
    id: 'cur_ZA_06',
    countryCode: 'ZA',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 1,
    topicKey: 'parc_national_kruger_big_five',
    source: 'SANParks — Mpumalanga & Limpopo',
    prompt: L(
      'Quel immense parc national de près de 20 000 km² dans le nord-est de l’Afrique du Sud, fondé en 1898 sous l’appellation Sabie Game Reserve, figure parmi les réserves de faune les plus célèbres au monde ?',
      'Which vast 20,000 sq km national park in northeastern South Africa, founded in 1898 as the Sabie Game Reserve, ranks among the world’s premier wildlife sanctuaries?',
      '¿Qué inmenso parque nacional de casi 20.000 km² en el noreste de Sudáfrica, fundado en 1898, figura entre las mayores reservas de fauna del mundo?',
      'Qual imenso parque nacional de quase 20 mil km² no nordeste da África do Sul, fundado em 1898, está entre as maiores reservas de vida selvagem do mundo?',
      'أي منتزه وطني شاسع في شمال شرق جنوب إفريقيا تبلغ مساحته نحو 20 ألف كم² ويُعد من أشهر محميات الحياة البرية في العالم؟'
    ),
    countryModePrompt: L(
      'Quel parc national géant s’étendant sur le Mpumalanga et le Limpopo depuis 1898 est célèbre dans le monde entier pour l’observation des « Big Five » ?',
      'Which sprawling wildlife sanctuary across Mpumalanga and Limpopo, founded in 1898, is world-famous for sheltering Africa’s "Big Five"?',
      '¿Qué enorme parque nacional extendido entre Mpumalanga y Limpopo desde 1898 es célebre por los "Cinco Grandes"?',
      'Qual imenso parque nacional entre Mpumalanga e Limpopo desde 1898 é célebre em todo o mundo pelos "Big Five"?',
      'أي منتزه وطني عملاق يمتد عبر مبومالانغا وليمبوبو منذ 1898 ويشتهر بكونه موطناً للخمسة الكبار؟'
    ),
    correct: L('Le parc national Kruger', 'Kruger National Park', 'Parque Nacional Kruger', 'Parque Nacional Kruger', 'منتزه كروغر الوطني'),
    distractors: [
      L('Le parc d’Addo', 'Addo Elephant Park', 'Parque Nacional Addo', 'Parque Nacional Addo', 'منتزه أدو للفيلة'),
      L('Le parc de Hluhluwe-iMfolozi', 'Hluhluwe–iMfolozi Park', 'Parque Hluhluwe-iMfolozi', 'Parque Hluhluwe-iMfolozi', 'منتزه هلوهلوي إيمفولوزي'),
      L('Le parc du Kgalagadi', 'Kgalagadi Park', 'Parque Kgalagadi', 'Parque Kgalagadi', 'منتزه كغالاغادي'),
    ],
    explanation: L(
      'Abritant lions, éléphants, léopards, rhinocéros et buffles ainsi que des centaines d’espèces d’oiseaux, le parc Kruger forme avec le Mozambique et le Zimbabwe un vaste corridor transfrontalier.',
      'Home to all "Big Five" species and over 500 bird species, Kruger forms part of the Great Limpopo Transfrontier Park with Mozambique and Zimbabwe.',
      'Hogar de los cinco grandes mamíferos y más de 500 aves, Kruger integra el gran parque transfronterizo del Limpopo.',
      'Lar dos cinco grandes mamíferos e mais de 500 aves, o Kruger integra um grande corredor de conservação transfronteiriço.',
      'يحتضن منتزه كروغر الحيوانات الخمسة الكبرى ومئات أنواع الطيور ويشكل جزءاً من حديقة عابرة للحدود.'
    ),
  }),
  mkQ({
    id: 'cur_ZA_07',
    countryCode: 'ZA',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'cape_agulhas_point_plus_meridional',
    source: 'Hydrographie & Géographie côtière — Western Cape',
    prompt: L(
      'Contrairement à une idée répandue sur le cap de Bonne-Espérance, quel cap constitue le véritable point le plus au sud du continent africain et la frontière officielle entre l’Atlantique et l’océan Indien ?',
      'Contrary to popular belief about the Cape of Good Hope, which cape is actually the southernmost tip of Africa and the official meeting point of the Atlantic and Indian oceans?',
      'A diferencia de la creencia popular sobre el cabo de Buena Esperanza, ¿qué cabo es el verdadero punto más austral de África y divisoria entre el Atlántico y el Índico?',
      'Ao contrário da crença popular sobre o Cabo da Boa Esperança, qual cabo é o verdadeiro ponto mais ao sul da África onde o Atlântico encontra o Índico?',
      'خلافاً للاعتقاد الشائع عن رأس الرجاء الصالح، ما الرأس الذي يمثل أقصى نقطة في جنوب قارة إفريقيا وملتقى المحيطين الأطلسي والهندي؟'
    ),
    countryModePrompt: L(
      'Quel cap du Cap-Occidental — et non celui de Bonne-Espérance — marque véritablement l’extrémité la plus méridionale du continent africain ?',
      'Which Western Cape headland—rather than the Cape of Good Hope—marks Africa’s true geographic southernmost tip where the Atlantic meets the Indian Ocean?',
      '¿Qué cabo del Cabo Occidental —y no el de Buena Esperanza— marca realmente el extremo más austral de África?',
      'Qual cabo do Cabo Ocidental — e não o da Boa Esperança — marca verdadeiramente o extremo sul do continente africano?',
      'أي رأس بحري في كيب الغربية يمثل فعلياً أقصى نقطة جنوبية في القارة الإفريقية وملتقى المحيطين؟'
    ),
    correct: L('Le cap des Aiguilles (Cape Agulhas)', 'Cape Agulhas', 'Cabo Agulhas', 'Cabo das Agulhas', 'رأس أغولاس (رأس الإبر)'),
    distractors: [
      L('Le cap Point', 'Cape Point', 'Cape Point', 'Cape Point', 'رأس بوينت'),
      L('Le cap Recife', 'Cape Recife', 'Cabo Recife', 'Cabo Recife', 'رأس ريسيفي'),
      L('Le cap St Francis', 'Cape St Francis', 'Cabo San Francisco', 'Cabo São Francisco', 'رأس سانت فرانسيس'),
    ],
    explanation: L(
      'Situé à environ 150 km au sud-est du cap de Bonne-Espérance, le cap des Aiguilles doit son nom aux navigateurs portugais dont les boussoles indiquaient précisément le nord magnétique dans ces parages.',
      'About 150 km southeast of Cape Town, Cape Agulhas was named by Portuguese sailors after compass needles aligned directly north near its rocky reefs.',
      'A unos 150 km al sureste de Ciudad del Cabo, debe su nombre a navegantes portugueses cuyas brújulas apuntaban allí al norte exacto.',
      'Cerca de 150 km a sudeste da Cidade do Cabo, recebeu seu nome dos navegadores portugueses pela agulha das bússolas.',
      'سمّاه البحارة البرتغاليون برأس الإبر لأن إبر البوصلة كانت تشير فيه بدقة إلى الشمال، وهو النقطة الجنوبية الأبعد في إفريقيا.'
    ),
  }),
  mkQ({
    id: 'cur_ZA_08',
    countryCode: 'ZA',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'dome_de_vredefort_asteroide_unesco',
    source: 'UNESCO — Dôme de Vredefort (2005)',
    prompt: L(
      'Quel site de l’État libre classé au patrimoine mondial de l’UNESCO constitue le plus vaste et l’un des plus anciens cratères d’impact d’astéroïde connus sur Terre (vieux de 2 milliards d’années) ?',
      'Which UNESCO World Heritage site in the Free State is the largest and among the oldest verified asteroid impact craters on Earth (roughly 2 billion years old)?',
      '¿Qué sitio del Estado Libre inscrito en la UNESCO es el cráter de impacto de asteroide más grande y antiguo conocido en la Tierra?',
      'Qual sítio do Estado Livre inscrito na UNESCO é a maior e mais antiga cratera de impacto de asteroide conhecida na Terra?',
      'أي موقع في مقاطعة الولاية الحرة أُدرج في اليونسكو ويُعد أكبر وأقدم فوهة نيزكية مؤكدة على كوكب الأرض؟'
    ),
    countryModePrompt: L(
      'Comment s’appelle l’immense structure géologique de l’État libre créée il y a plus de deux milliards d’années par la chute d’un astéroïde géant ?',
      'What is the name of the colossal Free State geological structure formed over two billion years ago by a massive asteroid impact?',
      '¿Cómo se llama la colosal estructura geológica del Estado Libre formada hace más de dos mil millones de años por un asteroide?',
      'Como se chama a colossal estrutura geológica do Estado Livre formada há mais de dois bilhões de anos por um asteroide?',
      'ما اسم التكوين الجيولوجي الهائل في مقاطعة فري ستيت الذي تشكل قبل ملياري عام بفعل اصطدام كويكب ضخم؟'
    ),
    correct: L('Le dôme de Vredefort', 'Vredefort Dome', 'Cráter de Vredefort', 'Cratera de Vredefort', 'قبة فريديفورت'),
    distractors: [
      L('Le bassin du Karoo', 'Karoo Basin', 'Cuenca del Karoo', 'Bacia do Karoo', 'حوض كارو'),
      L('Le cratère de Tswaing', 'Tswaing Crater', 'Cráter Tswaing', 'Cratera Tswaing', 'فوهة تسواينغ'),
      L('Les Cederberg', 'Cederberg Range', 'Sierra de Cederberg', 'Serra de Cederberg', 'سلسلة سيدربيرغ'),
    ],
    explanation: L(
      'D’un diamètre initial estimé à près de 300 km, le dôme de Vredefort fut creusé il y a 2,02 milliards d’années par un astéroïde d’au moins 10 à 15 km de large.',
      'Originally stretching nearly 300 km across, the Vredefort impact structure was carved 2.02 billion years ago by a massive bolide.',
      'Con un diámetro original cercano a 300 km, la estructura de Vredefort se formó hace 2.020 millones de años.',
      'Com diâmetro original próximo a 300 km, a estrutura de Vredefort formou-se há cerca de 2 bilhões de anos.',
      'خلّف اصطدام الكويكب قبل أكثر من ملياري عام بنية فريديفورت الجيولوجية العملاقة التي تجاوز قطرها الأولي 300 كم.'
    ),
  }),
  mkQ({
    id: 'cur_ZA_09',
    countryCode: 'ZA',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'blyde_river_canyon_mpumalanga',
    source: 'Géographie physique — Panorama Route (Mpumalanga)',
    prompt: L(
      'Quel spectaculaire canyon du Mpumalanga, tapissé de végétation subtropicale et dominé par les Three Rondavels, est souvent présenté comme le plus grand « canyon vert » au monde ?',
      'Which spectacular Mpumalanga gorge crowned by the Three Rondavels rock formations is famed as the largest "green canyon" on Earth?',
      '¿Qué espectacular cañón de Mpumalanga, coronado por los Three Rondavels y cubierto de vegetación, es el mayor "cañón verde" del mundo?',
      'Qual espetacular cânion de Mpumalanga, coroado pelas formações Three Rondavels e coberto de vegetação, é o maior "cânion verde" do mundo?',
      'أي وادٍ عميق خلاب في مبومالانغا تعلوه صخور "الأكواخ الدائرية الثلاثة" ويُعد أكبر "وادي أخضر" على وجه الأرض؟'
    ),
    countryModePrompt: L(
      'Comment s’appelle la gorge longue de 26 km au Mpumalanga, bordée par la formation rocheuse des Three Rondavels et les Bourke’s Luck Potholes ?',
      'What is the name of the 26 km Mpumalanga gorge framed by the Three Rondavels cliffs and Bourke’s Luck Potholes?',
      '¿Cómo se llama el cañón de 26 km en Mpumalanga enmarcado por los Three Rondavels y las marmitas de Bourke’s Luck?',
      'Como se chama o cânion de 26 km em Mpumalanga emoldurado pelos Three Rondavels e pelos poços de Bourke’s Luck?',
      'ما اسم الوادي الضيق الممتد 26 كم في مبومالانغا والمحاط بصخور الثلاثة رونداڤلز وحفر بورك؟'
    ),
    correct: L('Le Blyde River Canyon', 'Blyde River Canyon', 'Cañón del río Blyde', 'Cânion do Rio Blyde', 'وادي نهر بلايد'),
    distractors: [
      L('Le Fish River Canyon', 'Fish River Canyon', 'Cañón del río Fish', 'Cânion do Rio Fish', 'وادي نهر فيش'),
      L('La vallée de Franschhoek', 'Franschhoek Valley', 'Valle de Franschhoek', 'Vale de Franschhoek', 'وادي فرانشهوك'),
      L('La gorge de l’Umgeni', 'Umgeni Gorge', 'Garganta de Umgeni', 'Garganta do Umgeni', 'مضيق أومغيني'),
    ],
    explanation: L(
      'Creusé dans le grès rouge de l’escarpement du Drakensberg, le Blyde River Canyon (Motlatse) contraste avec les gorges arides par sa couverture dense de forêts et de fougères.',
      'Carved into red sandstone along the northern Drakensberg escarpment, Blyde River Canyon (Motlatse) is blanketed in lush subtropical foliage.',
      'Tallado en arenisca roja en la escarpa del Drakensberg, el cañón del río Blyde destaca por su denso verdor subtropical.',
      'Esculpido em arenito vermelho na escarpa do Drakensberg, o Cânion do Rio Blyde destaca-se pela vegetação verdejante.',
      'يتميز وادي نهر بلايد المنحوت في الحجر الرملي الأحمر بغطائه النباتي الكثيف مقارنة بالأودية الصحراوية الجافة.'
    ),
  }),
  mkQ({
    id: 'cur_ZA_10',
    countryCode: 'ZA',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'art_mural_ndebele_esther_mahlangu',
    source: 'Art contemporain & traditions du Mpumalanga',
    prompt: L(
      'Quel peuple d’Afrique australe, dont la peintre Esther Mahlangu est l’ambassadrice mondiale, est célèbre pour les façades géométriques aux couleurs vives peintes à la main par les femmes sur leurs maisons ?',
      'Which Southern African people—globally represented by painter Esther Mahlangu—are famous for vibrant geometric murals hand-painted by women on house facades?',
      '¿Qué pueblo del sur de África, representado mundialmente por la pintora Esther Mahlangu, destaca por los vivos murales geométricos pintados por sus mujeres en las fachadas?',
      'Qual povo da África Austral, representado mundialmente pela pintora Esther Mahlangu, é célebre pelos murais geométricos coloridos pintados por mulheres nas casas?',
      'أي شعب في الجنوب الإفريقي تمثله الفنانة إستر ماهلانغو عالمياً ويشتهر بجداريات نسائه الهندسية ذات الألوان الزاهية على واجهات المنازل؟'
    ),
    countryModePrompt: L(
      'Quelle tradition artistique portée sur la scène internationale par l’artiste Esther Mahlangu consiste en de vastes motifs géométriques multicolores peints à la main par les femmes sur les murs des maisons ?',
      'Which artistic tradition championed globally by artist Esther Mahlangu features bold, symmetrical multicoloured murals hand-painted by women on home facades?',
      '¿Qué tradición artística proyectada mundialmente por Esther Mahlangu plasma vivos motivos geométricos pintados a mano por mujeres en las fachadas?',
      'Qual tradição artística levada ao mundo por Esther Mahlangu estampa padrões geométricos coloridos pintados à mão pelas mulheres nas fachadas?',
      'ما التراث الفني الذي أبدعت فيه الفنانة إستر ماهلانغو ويقوم على رسم نساء القبيلة لزخارف هندسية ملونة على جدران المنازل؟'
    ),
    correct: L('L’art mural des Ndebele', 'Ndebele mural art', 'Arte mural ndebele', 'Arte mural ndebele', 'فن جداريات شعب نديبيلي'),
    distractors: [
      L('Les sculptures sur bois Makonde', 'Makonde woodcarving', 'Talla en madera makonde', 'Escultura em madeira maconde', 'نحت خشب الماكوندي'),
      L('Les tapisseries de Rorke’s Drift', 'Rorke’s Drift tapestries', 'Tapices de Rorke’s Drift', 'Tapeçarias de Rorke’s Drift', 'منسوجات روركس دريفت'),
      L('Le perlage zoulou uBuhlalu', 'Zulu uBuhlalu beadwork', 'Abalorios zulúes uBuhlalu', 'Miçangas zulus uBuhlalu', 'خرز الزولو'),
    ],
    explanation: L(
      'Transmise de mère en fille et réalisée sans règle ni compas, parfois à l’aide de plumes de poulet, l’esthétique ndebele d’Esther Mahlangu a même habillé musées et voitures d’art.',
      'Passed down by women and painted freehand—traditionally with chicken feathers—Ndebele geometric art has graced international galleries and museums.',
      'Transmitido por mujeres y pintado a pulso incluso con plumas de ave, el arte ndebele ha conquistado museos internacionales.',
      'Transmitida de mãe para filha e pintada à mão livre, a arte geométrica ndebele conquistou museus de todo o mundo.',
      'انتقل فن نديبيلي الهندسي الزاهي عبر الأجيال النسائية ليصل بإبداعات إستر ماهلانغو إلى أشهر متاحف العالم.'
    ),
  }),
  mkQ({
    id: 'cur_ZA_11',
    countryCode: 'ZA',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'bunny_chow_durban_street_food',
    source: 'Patrimoine culinaire de Durban (KwaZulu-Natal)',
    prompt: L(
      'Quelle spécialité de cuisine de rue née au XXe siècle dans la communauté indienne de Durban consiste en une miche de pain blanc évidée et garnie d’un curry épicé ?',
      'Which iconic street food born in 20th-century Durban’s Indian community consists of a hollowed-out loaf of white bread filled with rich curry?',
      '¿Qué especialidad callejera nacida en Durban en el siglo XX consiste en una hogaza de pan blanco ahuecada y rellena de curry especiado?',
      'Qual comida de rua criada em Durban no século XX consiste em um pão de forma oco recheado com curry bem temperado?',
      'أي وجبة شوارع شهيرة نشأت في ديربان خلال القرن العشرين وتتكون من رغيف خبز أبيض مجوف محشو بالكاري المتبل؟'
    ),
    countryModePrompt: L(
      'Comment appelle-t-on le plat emblématique de Durban composé d’un quart ou d’une moitié de pain carré évidé et rempli de curry parfumé de viande ou de haricots ?',
      'What is the iconic Durban dish made of a hollowed quarter or half loaf of white bread filled with fragrant meat or bean curry called?',
      '¿Cómo se llama el plato emblemático de Durban hecho con pan hueco relleno de curry de carne o alubias?',
      'Como se chama o prato emblemático de Durban feito de pão oco recheado com curry de carne ou feijão?',
      'ما اسم الطبق الشهير في مدينة ديربان المكون من رغيف خبز مجوف محشو بصلصة الكاري باللحم أو الفاصولياء؟'
    ),
    correct: L('Le Bunny Chow', 'Bunny Chow', 'Bunny Chow', 'Bunny Chow', 'باني تشاو'),
    distractors: [
      L('Le Boerewors', 'Boerewors', 'Boerewors', 'Boerewors', 'بوريفورس'),
      L('Le Chakalaka', 'Chakalaka', 'Chakalaka', 'Chakalaka', 'تشاكالاكا'),
      L('Le Biltong', 'Biltong', 'Biltong', 'Biltong', 'بيلتونغ'),
    ],
    explanation: L(
      'Malgré son nom trompeur, le Bunny Chow ne contient pas de lapin : né à Durban pour emporter son repas sans assiette à l’époque de la ségrégation, il se déguste partout avec les doigts.',
      'Despite its name, Bunny Chow contains no rabbit; created in Durban as a portable edible curry bowl, the hollowed bread lid is used to scoop up the sauce.',
      'A pesar de su nombre, no lleva conejo: nació en Durban como plato comestible para llevar curry con las manos.',
      'Apesar do nome, não leva coelho: surgiu em Durban como recipiente comestível e prático para servir curry.',
      'رغم تسميته، لا يحتوي طبق باني تشاو على لحم الأرانب، بل ابتُكر في ديربان كوعاء خبز عملي يحفظ الكاري الساخن.'
    ),
  }),
  mkQ({
    id: 'cur_ZA_12',
    countryCode: 'ZA',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'le_bobotie_cap_epices',
    source: 'Cuisine traditionnelle du Cap',
    prompt: L(
      'Quel plat traditionnel emblématique de la région du Cap se compose de viande hachée parfumée au curry doux, aux fruits secs et cuite au four sous une couche dorée d’œuf et de lait ?',
      'Which classic Cape dish consists of spiced minced meat with curry and dried fruit baked under a golden savoury egg-and-milk topping?',
      '¿Qué plato tradicional de la región del Cabo combina carne picada con curry suave y fruta seca horneada bajo una capa dorada de huevo y leche?',
      'Qual prato tradicional da região do Cabo combina carne moída com curry suave e frutas secas assada sob cobertura dourada de ovo e leite?',
      'أي طبق تقليدي في منطقة كيب يجمع اللحم المفروم بالكاري والفواكه المجففة ويُخبز في الفرن تحت طبقة ذهبية من البيض والحليب؟'
    ),
    countryModePrompt: L(
      'Comment appelle-t-on ce gratin de viande hachée aux épices douces, raisins secs et feuilles de laurier recouvert d’un flan salé doré, symbole culinaire du Cap ?',
      'What is the name of this spiced minced-meat bake enriched with dried fruit and bay leaves beneath a golden egg custard crust?',
      '¿Cómo se llama este pastel salado de carne picada con especias, pasas y laurel cubierto de crema de huevo horneada?',
      'Como se chama este assado de carne moída com especiarias, passas e louro coberto por creme dourado de ovos?',
      'ما اسم طاجن اللحم المفروم بالتوابل والزبيب وورق الغار المغطى بطبقة ذهبية مخبوزة في الفرن؟'
    ),
    correct: L('Le bobotie', 'Bobotie', 'Bobotie', 'Bobotie', 'البوبوتي'),
    distractors: [
      L('La pap en vleis', 'Pap en vleis', 'Pap en vleis', 'Pap en vleis', 'باب إن فليس'),
      L('Les koeksisters', 'Koeksisters', 'Koeksisters', 'Koeksisters', 'كوكسيسترز'),
      L('Le potjiekos', 'Potjiekos', 'Potjiekos', 'Potjiekos', 'بوتجيكوس'),
    ],
    explanation: L(
      'Né du métissage culinaire du Cap entre influences malaises, indonésiennes et locales dès le XVIIe siècle, le bobotie est traditionnellement accompagné de riz jaune au curcuma.',
      'Born from the Cape’s centuries-old Malay and local culinary crossroads, bobotie is customarily served with fragrant yellow turmeric rice.',
      'Fruto del mestizaje culinario malayo y local en el Cabo, el bobotie suele acompañarse con arroz amarillo a la cúrcuma.',
      'Fruto das influências malaias e locais no Cabo, o bobotie costuma ser servido com arroz amarelo de cúrcuma.',
      'يمثل طبق البوبوتي ثمرة التمازج الثقافي في مدينة كيب ويُقدم تقليدياً مع الأرز الأصفر بالكركم.'
    ),
  }),
  mkQ({
    id: 'cur_ZA_13',
    countryCode: 'ZA',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'johnny_clegg_juluka_savuka',
    source: 'Musique populaire & lutte culturelle — Johannesburg',
    prompt: L(
      'Quel musicien et anthropologue surnommé « le Zoulou blanc », fondateur des groupes multiraciaux Juluka et Savuka avec Sipho Mchunu, a défié les lois de l’apartheid par la musique et la danse zouloues ?',
      'Which musician and anthropologist nicknamed "The White Zulu", founder of multiracial bands Juluka and Savuka, defied apartheid laws through Zulu song and dance?',
      '¿Qué músico y antropólogo apodado "El Zulú Blanco", fundador de Juluka y Savuka, desafió al apartheid mediante la música y danza zulúes?',
      'Qual músico e antropólogo apelidado de "O Zulu Branco", fundador de Juluka e Savuka, desafiou o apartheid com música e dança zulus?',
      'أي موسيقي وعالم أنثروبولوجيا لُقب بـ"الزولو الأبيض" وأسس فرقتي جولوكا وسافوكا متحدياً الفصل العنصري؟'
    ),
    countryModePrompt: L(
      'Quel célèbre chanteur et guitariste de Juluka et Savuka, ami de Nelson Mandela et auteur d’« Asimbonanga », contribua à faire tomber les barrières culturelles durant l’apartheid ?',
      'Which acclaimed Juluka and Savuka frontman, friend of Nelson Mandela and writer of "Asimbonanga", bridged cultural divides under apartheid?',
      '¿Qué célebre vocalista de Juluka y Savuka, autor de "Asimbonanga", derribó barreras culturales durante el apartheid?',
      'Qual célebre cantor de Juluka e Savuka, autor de "Asimbonanga", rompeu barreiras culturais durante o apartheid?',
      'أي مغنٍ شهير في فرقتي جولوكا وسافوكا ألّف أغنية "أسيمبونانغا" وأسهم في كسر الحواجز الثقافية زمن الفصل العنصري؟'
    ),
    correct: L('Johnny Clegg', 'Johnny Clegg', 'Johnny Clegg', 'Johnny Clegg', 'جوني كليغ'),
    distractors: [
      L('Abdullah Ibrahim', 'Abdullah Ibrahim', 'Abdullah Ibrahim', 'Abdullah Ibrahim', 'عبد الله إبراهيم'),
      L('Brenda Fassie', 'Brenda Fassie', 'Brenda Fassie', 'Brenda Fassie', 'بريندا فاسي'),
      L('Jonas Gwangwa', 'Jonas Gwangwa', 'Jonas Gwangwa', 'Jonas Gwangwa', 'جوناس غوانغوا'),
    ],
    explanation: L(
      'Enregistrée en 1987 alors que Mandela était toujours emprisonné, sa chanson « Asimbonanga » (« Nous ne l’avons pas vu ») devint un hymne mondial de solidarité et fut chantée avec Mandela sur scène en 1999.',
      'Written in 1987 while Mandela remained imprisoned, "Asimbonanga" became an international anthem, famously joined onstage by Nelson Mandela himself in 1999.',
      'Compuesta en 1987 mientras Mandela seguía preso, "Asimbonanga" se convirtió en himno universal de libertad.',
      'Composta em 1987 durante a prisão de Mandela, "Asimbonanga" tornou-se um hino mundial pela liberdade.',
      'تحولت أغنية "أسيمبونانغا" لجوني كليغ عام 1987 إلى نشيد عالمي للتضامن مع نيلسون مانديلا وشارك في غنائها لاحقاً على المسرح.'
    ),
  }),
  mkQ({
    id: 'cur_ZA_14',
    countryCode: 'ZA',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'benni_mccarthy_porto_bafana',
    source: 'SAFA & UEFA Champions League 2004',
    prompt: L(
      'Quel ancien attaquant né au Cap, vainqueur de la Ligue des champions 2004 avec le FC Porto de José Mourinho, est le meilleur buteur de l’histoire des Bafana Bafana ?',
      'Which Cape Town-born forward, a 2004 UEFA Champions League winner under José Mourinho at FC Porto, is the all-time leading scorer for Bafana Bafana?',
      '¿Qué exdelantero nacido en Ciudad del Cabo, campeón de la Champions 2004 con el Porto, es el máximo goleador histórico de los Bafana Bafana?',
      'Qual ex-atacante nascido na Cidade do Cabo, campeão da Champions de 2004 pelo Porto, é o maior artilheiro dos Bafana Bafana?',
      'أي مهاجم ولد في كيب تاون وتوج بدوري أبطال أوروبا 2004 مع بورتو ويتصدر قائمة هدافي منتخب بافانا بافانا عبر التاريخ؟'
    ),
    countryModePrompt: L(
      'Quel attaquant originaire d’Hanover Park au Cap, sacré co-meilleur buteur de la CAN 1998 puis champion d’Europe 2004 avec le FC Porto, détient le record de buts des Bafana Bafana ?',
      'Which forward from Cape Town’s Hanover Park finished 1998 AFCON joint top scorer, won the 2004 Champions League with Porto, and holds the Bafana Bafana goalscoring record?',
      '¿Qué delantero de Ciudad del Cabo fue máximo goleador de la CAN 1998, campeón europeo con el Porto y récord goleador de la selección?',
      'Qual atacante da Cidade do Cabo foi artilheiro da CAN 1998, campeão europeu pelo Porto e recordista de gols pela seleção?',
      'أي مهاجم من كيب تاون تصدر هدافي أمم إفريقيا 1998 وفاز بدوري الأبطال مع بورتو ويحمل الرقم القياسي لهدافي المنتخب؟'
    ),
    correct: L('Benni McCarthy', 'Benni McCarthy', 'Benni McCarthy', 'Benni McCarthy', 'بيني ماكارثي'),
    distractors: [
      L('Shaun Bartlett', 'Shaun Bartlett', 'Shaun Bartlett', 'Shaun Bartlett', 'شون بارتليت'),
      L('Doctor Khumalo', 'Doctor Khumalo', 'Doctor Khumalo', 'Doctor Khumalo', 'دكتور خومالو'),
      L('Lucas Radebe', 'Lucas Radebe', 'Lucas Radebe', 'Lucas Radebe', 'لوكاس راديبي'),
    ],
    explanation: L(
      'Avec 31 buts internationaux et un doublé décisif contre Manchester United en 2004 avec Porto, Benni McCarthy reste le seul joueur de son pays à avoir soulevé la Ligue des champions européenne.',
      'With 31 international goals and a famous 2004 brace against Manchester United for FC Porto, Benni McCarthy remains the sole South African UEFA Champions League winner.',
      'Con 31 goles internacionales y la Champions de 2004 con el Porto, Benni McCarthy lidera la historia anotadora de los Bafana Bafana.',
      'Com 31 gols pela seleção e a Champions de 2004 pelo Porto, Benni McCarthy lidera os artilheiros nacionais.',
      'سجل بيني ماكارثي 31 هدفاً دولياً وبقي اللاعب الوحيد من بلاده المتوج بدوري أبطال أوروبا.'
    ),
  }),
  mkQ({
    id: 'cur_ZA_15',
    countryCode: 'ZA',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 1,
    topicKey: 'siya_kolisi_springboks_rugby_2019_2023',
    source: 'World Rugby — Coupes du monde 2019 & 2023',
    prompt: L(
      'Quel capitaine emblématique, premier capitaine noir de l’histoire des Springboks en test-match, a soulevé deux Coupes du monde de rugby consécutives en 2019 et 2023 ?',
      'Which inspirational captain—the first Black Test captain of the Springboks—lifted back-to-back Rugby World Cup trophies in 2019 and 2023?',
      '¿Qué emblemático capitán —el primero negro en la historia de los Springboks— alzó dos Copas del Mundo de rugby seguidas en 2019 y 2023?',
      'Qual emblemático capitão — o primeiro capitão negro da história dos Springboks — ergueu duas Copas do Mundo de rúgbi seguidas em 2019 e 2023?',
      'أي قائد تاريخي — وهو أول قائد أسود لمنتخب سبرينغبوكس — رفع كأس العالم للرغبي مرتين متتاليتين في 2019 و2023؟'
    ),
    countryModePrompt: L(
      'Quel troisième-ligne aile issu du township de Zwide a mené les Springboks à deux sacres consécutifs en Coupe du monde de rugby au Japon puis en France ?',
      'Which flanker raised in Zwide township led the Springboks to back-to-back Rugby World Cup triumphs in Japan and France?',
      '¿Qué ala surgido del township de Zwide condujo a los Springboks a dos títulos mundiales seguidos en Japón y Francia?',
      'Qual terceira-linha criado em Zwide liderou os Springboks ao bicampeonato mundial consecutivo no Japão e na França?',
      'أي لاعب وقائد نشأ في حي زوايدي قاد منتخب سبرينغبوكس للفوز ببطولتي العالم للرغبي على التوالي في اليابان وفرنسا؟'
    ),
    correct: L('Siya Kolisi', 'Siya Kolisi', 'Siya Kolisi', 'Siya Kolisi', 'سيا كوليسي'),
    distractors: [
      L('Francois Pienaar', 'Francois Pienaar', 'Francois Pienaar', 'Francois Pienaar', 'فرانسوا بينار'),
      L('John Smit', 'John Smit', 'John Smit', 'John Smit', 'جون سميت'),
      L('Bryan Habana', 'Bryan Habana', 'Bryan Habana', 'Bryan Habana', 'برايان هابانا'),
    ],
    explanation: L(
      'Portant le numéro 6 de Nelson Mandela en 1995, Siya Kolisi est devenu le deuxième capitaine de l’histoire mondiale du rugby à remporter deux Coupes du monde après Richie McCaw.',
      'Following Francois Pienaar (1995) and John Smit (2007), Siya Kolisi guided the Springboks to a record fourth World Cup title in 2023.',
      'Tras los triunfos de 1995 y 2007, Siya Kolisi condujo a los Springboks hacia un récord histórico de cuatro títulos mundiales.',
      'Após os títulos de 1995 e 2007, Siya Kolisi liderou os Springboks rumo ao recorde de quatro taças mundiais.',
      'قاد سيا كوليسي منتخب سبرينغبوكس إلى تحقيق إنجاز تاريخي بإضافة اللقبين العالميين الثالث والرابع في 2019 و2023.'
    ),
  }),
  mkQ({
    id: 'cur_ZA_16',
    countryCode: 'ZA',
    category: 'culture',
    subCategory: 'sciences_innovations',
    difficulty: 3,
    topicKey: 'mark_shuttleworth_espace_ubuntu',
    source: 'Exploration spatiale (Soyouz TM-34, 2002) & Informatique',
    prompt: L(
      'Quel entrepreneur sud-africain né à Welkom, fondateur du système d’exploitation Ubuntu Linux, est devenu en avril 2002 le tout premier citoyen africain à voyager dans l’espace ?',
      'Which Welkom-born South African entrepreneur and founder of Ubuntu Linux became in April 2002 the first African citizen to travel to space?',
      '¿Qué emprendedor sudafricano nacido en Welkom y creador de Ubuntu Linux se convirtió en abril de 2002 en el primer ciudadano africano en viajar al espacio?',
      'Qual empreendedor sul-africano nascido em Welkom e fundador do Ubuntu Linux tornou-se em abril de 2002 o primeiro cidadão africano a viajar ao espaço?',
      'أي رائد أعمال من مواليد ويلكوم ومؤسس نظام أوبونتو لينكس أصبح في أبريل 2002 أول مواطن إفريقي يصعد إلى الفضاء؟'
    ),
    countryModePrompt: L(
      'Quel informaticien né à Welkom a volé à bord de Soyouz TM-34 vers la Station spatiale internationale en 2002 puis créé la distribution Linux baptisée « Ubuntu » ?',
      'Which Welkom-born computer pioneer flew aboard Soyuz TM-34 to the International Space Station in 2002 before launching Ubuntu Linux?',
      '¿Qué informático nacido en Welkom viajó en la Soyuz TM-34 a la Estación Espacial Internacional en 2002 y fundó Ubuntu Linux?',
      'Qual cientista da computação nascido em Welkom voou na Soyuz TM-34 à Estação Espacial em 2002 e criou o Ubuntu Linux?',
      'أي مبرمج ورائد أعمال من ويلكوم سافر على متن سويوز إلى محطة الفضاء الدولية عام 2002 وأطلق نظام تشغيل أوبونتو؟'
    ),
    correct: L('Mark Shuttleworth', 'Mark Shuttleworth', 'Mark Shuttleworth', 'Mark Shuttleworth', 'مارك شاتلوورث'),
    distractors: [
      L('Elon Musk', 'Elon Musk', 'Elon Musk', 'Elon Musk', 'إيلون ماسك'),
      L('Patrick Soon-Shiong', 'Patrick Soon-Shiong', 'Patrick Soon-Shiong', 'Patrick Soon-Shiong', 'باتريك سون شيونغ'),
      L('Sydney Brenner', 'Sydney Brenner', 'Sydney Brenner', 'Sydney Brenner', 'سيدني برينر'),
    ],
    explanation: L(
      'Passant huit jours à bord de la Station spatiale internationale en 2002 avec un équipage russo-italien, Mark Shuttleworth fonda ensuite Canonical et Ubuntu en hommage à la philosophie d’humanité partagée.',
      'Spending eight days conducting experiments aboard the ISS in 2002, Mark Shuttleworth later launched Ubuntu Linux named after the African philosophy.',
      'Tras pasar ocho días en la Estación Espacial Internacional en 2002, fundó Canonical y el sistema libre Ubuntu.',
      'Após passar oito dias na Estação Espacial Internacional em 2002, fundou a Canonical e o sistema Ubuntu.',
      'أمضى مارك شاتلوورث ثمانية أيام في محطة الفضاء الدولية عام 2002 ثم أطلق نظام أوبونتو تيمناً بالفلسفة الإفريقية.'
    ),
  }),
];

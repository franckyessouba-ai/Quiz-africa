import { QuizQuestion } from '../../../types/quiz';
import { L } from '../../countriesPart1';
import { mkQ } from './packHelpers';

export const DRC_CURATED_PACK: QuizQuestion[] = [
  mkQ({
    id: 'cur_CD_01',
    countryCode: 'CD',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'okapi_endemic',
    source: 'UICN & UNESCO — Réserve de faune à okapis (Ituri)',
    prompt: L(
      'Quel mammifère timide aux pattes zébrées et cousin de la girafe ne vit à l’état sauvage que dans les forêts du nord-est de la RD Congo ?',
      'Which shy mammal with zebra-striped legs—the giraffe’s closest living relative—lives wild exclusively in DR Congo’s forests?',
      '¿Qué tímido mamífero de patas rayadas —pariente cercano de la jirafa— vive en libertad únicamente en la RD del Congo?',
      'Que tímido mamífero de patas listradas —parente próximo da girafa— vive livre exclusivamente na RD Congo?',
      'ما الحيوان الخجول ذو الأرجل المخططة وقريب الزرافة الذي يعيش في البرية حصراً في غابات الكونغو الديمقراطية؟'
    ),
    countryModePrompt: L(
      'Quel animal rare de la forêt de l’Ituri, surnommé « la licorne africaine », n’existe à l’état naturel dans aucun autre pays du monde ?',
      'Which rare Ituri rainforest animal, cousin of the giraffe, exists in the wild nowhere else on Earth?',
      '¿Qué raro animal de la selva de Ituri, pariente de la jirafa, no existe en estado salvaje en ningún otro país?',
      'Qual animal raro da floresta de Ituri, parente da girafa, não existe na natureza em nenhum outro país?',
      'ما الحيوان النادر في غابة إيتوري قريب الزرافة الذي لا يوجد برياً في أي دولة أخرى بالعالم؟'
    ),
    correct: L('L’okapi', 'The okapi', 'El okapi', 'O ocapi', 'الأوكابي'),
    distractors: [
      L('Le panda géant', 'The giant panda', 'El panda gigante', 'O panda-gigante', 'الباندا العملاقة'),
      L('Le kangourou roux', 'The red kangaroo', 'El canguro rojo', 'O canguru-vermelho', 'الكنغر الأحمر'),
      L('Le lama des Andes', 'The Andean llama', 'La llama andina', 'A lhama andina', 'اللاما'),
    ],
    explanation: L(
      'Découvert scientifiquement en 1901 dans la forêt de l’Ituri, l’okapi est protégé dans la réserve d’Épulu, inscrite à l’UNESCO.',
      'Scientifically documented in 1901 in the Ituri rainforest, the okapi is protected inside a dedicated UNESCO World Heritage reserve.',
      'Documentado en 1901 en la selva de Ituri, el okapi es emblema de la reserva homónima protegida por la UNESCO.',
      'Documentado em 1901 na floresta de Ituri, o ocapi é protegido em uma reserva da UNESCO.',
      'اكتُشف الأوكابي علمياً عام 1901 في غابة إيتوري ويحظى بحماية دولية في محمية اليونسكو.'
    ),
  }),
  mkQ({
    id: 'cur_CD_02',
    countryCode: 'CD',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'bonobo_endemic',
    source: 'WWF & Lola ya Bonobo',
    prompt: L(
      'Quel grand singe pacifique, très proche génétiquement de l’être humain, ne vit à l’état sauvage qu’au sud de la boucle du fleuve Congo en RD Congo ?',
      'Which peaceful great ape, sharing over 98% of human DNA, lives in the wild exclusively south of the Congo River in DR Congo?',
      '¿Qué gran simio pacífico vive en libertad únicamente al sur de la curva del río Congo en la RD del Congo?',
      'Que grande sídeo pacífico vive livre exclusivamente ao sul da curva do rio Congo na RD Congo?',
      'ما القرد العظيم المسالم الذي يعيش في البرية حصراً جنوب قوس نهر الكونغو بالكونغو الديمقراطية؟'
    ),
    countryModePrompt: L(
      'Quel grand singe célèbre pour son organisation matriarcale et pacifique est strictement endémique des forêts au sud du fleuve Congo ?',
      'Which great ape famed for its peaceful, matriarchal societies is strictly endemic to forests south of the Congo River?',
      '¿Qué gran simio célebre por su sociedad pacífica y matriarcal es endémico de los bosques al sur del río Congo?',
      'Qual grande sídeo famoso por sua sociedade pacífica e matriarcal é endêmico das florestas ao sul do rio Congo?',
      'ما القرد العظيم المعروف بمجتمعه السلمي والأمومي المتوطن حصراً جنوب نهر الكونغو؟'
    ),
    correct: L('Le bonobo', 'The bonobo', 'El bonobo', 'O bonobo', 'البونوبو'),
    distractors: [
      L('L’orang-outan de Bornéo', 'Bornean orangutan', 'Orangután de Borneo', 'Orangotango de Bornéu', 'إنسان الغاب البورنيوي'),
      L('Le macaque japonais', 'Japanese macaque', 'Macaco japonés', 'Macaco-japonês', 'مكاك ياباني'),
      L('Le gibbon à mains blanches', 'Lar gibbon', 'Gibón de manos blancas', 'Gibão-de-mãos-brancas', 'الجيبون أبيض اليدين'),
    ],
    explanation: L(
      'À l’inverse de la rive nord où vit le chimpanzé commun, le bonobo n’habite que le cœur forestier du bassin sud du fleuve Congo.',
      'Unlike chimpanzees north of the river, bonobos exist nowhere in the wild outside the southern Congo Basin.',
      'A diferencia del chimpancé al norte, el bonobo solo habita las selvas al sur del gran arco del Congo.',
      'Ao contrário do chimpanzé ao norte, o bonobo habita apenas as florestas ao sul do rio Congo.',
      'يعيش البونوبو برياً في الغابات الواقعة جنوب نهر الكونغو فقط.'
    ),
  }),
  mkQ({
    id: 'cur_CD_03',
    countryCode: 'CD',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 2,
    topicKey: 'cobalt_ev_batteries',
    source: 'USGS & Banque mondiale — Ressources minérales',
    prompt: L(
      'De quel minerai indispensable aux batteries des voitures électriques et smartphones la RD Congo fournit-elle plus de 70 % de la production mondiale ?',
      'Which mineral essential for electric-vehicle and smartphone batteries is supplied over 70% worldwide by DR Congo?',
      '¿De qué mineral esencial para las baterías de coches eléctricos y móviles aporta la RD del Congo más del 70 % mundial?',
      'De qual mineral essencial para baterias de carros elétricos e celulares a RD Congo fornece mais de 70% no mundo?',
      'ما المعدن الأساسي لبطاريات السيارات الكهربائية والهواتف الذي توفر الكونغو الديمقراطية أكثر من 70% من إنتاجه العالمي؟'
    ),
    countryModePrompt: L(
      'Quel métal stratégique extrait notamment à Kolwezi place le pays au premier rang mondial avec plus de 70 % de l’offre planétaire pour les batteries ?',
      'Which strategic battery metal mined notably around Kolwezi gives the country over 70% of global supply?',
      '¿Qué metal estratégico extraído en Kolwezi sitúa al país como líder mundial con más del 70 % del suministro para baterías?',
      'Qual metal estratégico extraído em Kolwezi coloca o país com mais de 70% da oferta mundial para baterias?',
      'ما المعدن الاستراتيجي المستخرج في كولويزي الذي يتصدر فيه البلد بأكثر من 70% من الإمداد العالمي للبطاريات؟'
    ),
    correct: L('Le cobalt', 'Cobalt', 'El cobalto', 'O cobalto', 'الكوبالت'),
    distractors: [
      L('Le platine arctique', 'Arctic platinum', 'Platino ártico', 'Platina ártica', 'البلاتين القطبي'),
      L('L’amiante', 'Asbestos', 'Amianto', 'Amianto', 'الأسبستوس'),
      L('Le mercure liquide', 'Liquid mercury', 'Mercurio líquido', 'Mercúrio líquido', 'الزئبق السائل'),
    ],
    explanation: L(
      'Les gisements cupro-cobaltifères du Katanga (Kolwezi, Lubumbashi, Likasi) sont au cœur de la transition énergétique mondiale.',
      'Katanga’s rich copper-cobalt belt around Kolwezi and Lubumbashi is central to the global clean-energy transition.',
      'El cinturón cuprífero y de cobalto de Katanga es clave para las baterías modernas en todo el mundo.',
      'O cinturão de cobre e cobalto de Katanga é peça-chave na transição energética global.',
      'يشكل حزام النحاس والكوبالت في كاتانغا ركيزة عالمية لصناعة البطاريات الحديثة.'
    ),
  }),
  mkQ({
    id: 'cur_CD_04',
    countryCode: 'CD',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'salonga_park',
    source: 'UNESCO — Parc national de la Salonga (1984)',
    prompt: L(
      'Quel parc de la RD Congo (36 000 km², plus grand que la Belgique) est la plus grande réserve de forêt tropicale humide protégée d’Afrique ?',
      'Which DR Congo national park (36,000 km², larger than Belgium) is Africa’s largest protected tropical rainforest reserve?',
      '¿Qué parque de la RD del Congo (36.000 km²) es la mayor reserva de selva tropical protegida de África?',
      'Que parque da RD Congo (36.000 km²) é a maior reserva protegida de floresta tropical da África?',
      'ما المنتزه في الكونغو الديمقراطية (36 ألف كم²) الذي يُعد أكبر محمية غابات مطيرة في أفريقيا؟'
    ),
    countryModePrompt: L(
      'Quel immense parc national accessible principalement par voie fluviale dans la Cuvette centrale est le plus vaste parc forestier d’Afrique ?',
      'Which vast Cuvette Centrale park—reached largely by river—is Africa’s largest tropical rainforest national park?',
      '¿Qué inmenso parque nacional de la Cuvette Centrale es el mayor parque forestal tropical de África?',
      'Qual imenso parque nacional na Cuvette Centrale é o maior parque de floresta tropical da África?',
      'ما المنتزه الوطني الشاسع في قلب الغابات الاستوائية الذي يُعد الأكبر من نوعه في أفريقيا؟'
    ),
    correct: L('Le parc national de la Salonga', 'Salonga National Park', 'Parque Nacional de Salonga', 'Parque Nacional de Salonga', 'منتزه سالونغا الوطني'),
    distractors: [
      L('Le parc du Tsavo', 'Tsavo National Park', 'Parque de Tsavo', 'Parque de Tsavo', 'منتزه تسافو'),
      L('Le parc d’Etosha', 'Etosha National Park', 'Parque de Etosha', 'Parque de Etosha', 'منتزه إيتوشا'),
      L('Le parc de Bwindi', 'Bwindi Impenetrable Park', 'Parque de Bwindi', 'Parque de Bwindi', 'منتزه بويندي'),
    ],
    explanation: L(
      'Inscrit à l’UNESCO depuis 1984 et retiré de la liste en péril en 2021, Salonga protège bonobos, paons du Congo et éléphants de forêt.',
      'Removed from UNESCO’s Danger List in 2021 thanks to conservation progress, Salonga shelters bonobos and Congo peafowl.',
      'Retirado de la lista en peligro de la UNESCO en 2021, Salonga protege al bonobo y al pavo real del Congo.',
      'Retirado da lista em perigo da UNESCO em 2021, Salonga protege bonobos e elefantes-da-floresta.',
      'يحمي منتزه سالونغا البونوبو وفيلة الغابات، وأُزيل من قائمة الخطر لدى اليونسكو عام 2021.'
    ),
  }),
  mkQ({
    id: 'cur_CD_05',
    countryCode: 'CD',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'rwenzori_margherita',
    source: 'Monts Rwenzori — Atlas d’Afrique centrale',
    prompt: L(
      'Quel sommet culminant à 5 109 mètres dans les monts Rwenzori (« Monts de la Lune »), à la frontière avec l’Ouganda, est le point le plus élevé de la RD Congo ?',
      'Which 5,109-meter peak in the Rwenzori ("Mountains of the Moon") on the Ugandan border is DR Congo’s highest point?',
      '¿Qué cumbre de 5.109 metros en los montes Ruwenzori, en la frontera con Uganda, es el punto más alto de la RD del Congo?',
      'Qual pico de 5.109 metros nos montes Rwenzori, na fronteira com Uganda, é o ponto mais alto da RD Congo?',
      'ما القمة البالغ ارتفاعها 5109 أمتار في جبال روينزوري التي تُعد أعلى نقطة في الكونغو الديمقراطية؟'
    ),
    countryModePrompt: L(
      'Quel sommet enneigé à 5 109 m dans le massif du Rwenzori est le point culminant du pays et le 3e plus haut sommet d’Afrique ?',
      'Which snow-capped 5,109m peak in the Rwenzori range is the country’s highest point and Africa’s 3rd-tallest mountain?',
      '¿Qué cima nevada de 5.109 m en la cordillera del Ruwenzori es el punto más alto del país?',
      'Qual pico nevado de 5.109 m na cordilheira do Rwenzori é o ponto mais alto do país?',
      'ما القمة الثلجية التي ترتفع 5109 أمتار في سلسلة روينزوري وتُعد أعلى نقطة في البلاد؟'
    ),
    correct: L('Le Pic Margherita (Mont Stanley)', 'Margherita Peak (Mount Stanley)', 'Pico Margherita (Monte Stanley)', 'Pico Margherita (Monte Stanley)', 'قمة مارغيريتا (جبل ستانلي)'),
    distractors: [
      L('Le Mont Toubkal', 'Mount Toubkal', 'Monte Toubkal', 'Monte Toubkal', 'جبل توبقال'),
      L('Le Mont Karthala', 'Mount Karthala', 'Monte Karthala', 'Monte Karthala', 'جبل كارتالا'),
      L('L’Emi Koussi', 'Emi Koussi', 'Emi Koussi', 'Emi Koussi', 'إيمي كوسي'),
    ],
    explanation: L(
      'Après le Kilimandjaro (5 895 m) et le Mont Kenya (5 199 m), le Pic Margherita conserve les rares glaciers d’altitude d’Afrique équatoriale.',
      'Behind Kilimanjaro and Mount Kenya, Margherita Peak ranks third in Africa and still carries rare equatorial glaciers.',
      'Tras el Kilimanjaro y el Monte Kenia, el pico Margherita es el tercero de África y conserva glaciares ecuatoriales.',
      'Atrás apenas do Kilimanjaro e do Monte Quênia, o Pico Margherita guarda raras geleiras equatoriais.',
      'تُعد قمة مارغيريتا ثالث أعلى قمة في أفريقيا وتحتفظ بأنهار جليدية استوائية نادرة.'
    ),
  }),
  mkQ({
    id: 'cur_CD_06',
    countryCode: 'CD',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 3,
    topicKey: 'inga_hydropower',
    source: 'Hydroélectricité — Chutes d’Inga (Kongo-Central)',
    prompt: L(
      'Quel site de rapides sur le fleuve Congo dans le Kongo-Central possède le plus grand potentiel hydroélectrique de toute l’Afrique ?',
      'Which series of rapids on the Congo River in Kongo-Central holds Africa’s greatest hydroelectric power potential?',
      '¿Qué salto del río Congo en Kongo-Central posee el mayor potencial hidroeléctrico de toda África?',
      'Qual conjunto de quedas do rio Congo no Kongo-Central possui o maior potencial hidrelétrico de toda a África?',
      'ما الموقع الواقع على نهر الكونغو الذي يمتلك أكبر إمكانات للطاقة الكهرومائية في أفريقيا؟'
    ),
    countryModePrompt: L(
      'Sur quels célèbres rapides du Bas-Congo entre Kinshasa et Matadi se dressent les grands barrages hydroélectriques I et II ?',
      'At which famous Lower Congo rapids between Kinshasa and Matadi do the major hydroelectric dams I and II stand?',
      '¿En qué famosos rápidos del Bajo Congo entre Kinshasa y Matadi se alzan las grandes centrales hidroeléctricas I y II?',
      'Em quais famosas corredeiras entre Kinshasa e Matadi ficam as grandes hidrelétricas I e II?',
      'عند أي مساقط مائية شهيرة بين كينشاسا وماتادي تقع السدود الكهرومائية الكبرى؟'
    ),
    correct: L('Les chutes et barrages d’Inga', 'Inga Falls and Dams', 'Cataratas y presas de Inga', 'Quedas e barragens de Inga', 'شلالات وسدود إنغا'),
    distractors: [
      L('Les barrages de Kariba', 'Kariba Dam', 'Presa de Kariba', 'Barragem de Kariba', 'سد كاريبا'),
      L('Le barrage d’Assouan', 'Aswan High Dam', 'Presa de Asuán', 'Barragem de Assuã', 'السد العالي بأسوان'),
      L('Le barrage d’Akosombo', 'Akosombo Dam', 'Presa de Akosombo', 'Barragem de Akosombo', 'سد أكوسومبو'),
    ],
    explanation: L(
      'Là où le fleuve dévale près de 100 mètres sur 15 km, les installations d’Inga alimentent Kinshasa, le Katanga et plusieurs voisins africains.',
      'Dropping nearly 100m over 15 km, the Inga rapids power Kinshasa, Katanga mines, and regional power grids.',
      'Con un desnivel de casi 100 m en 15 km, Inga abastece de electricidad a gran parte del país y vecinos.',
      'Com um desnível de quase 100 m em 15 km, as usinas de Inga fornecem energia ao país e vizinhos.',
      'تولد مساقط إنغا طاقة كهربائية هائلة تغذي العاصمة والمنطقة الصناعية ودولاً مجاورة.'
    ),
  }),
  mkQ({
    id: 'cur_CD_07',
    countryCode: 'CD',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'boyoma_falls',
    source: 'Géographie fluviale du Congo',
    prompt: L(
      'Comment s’appellent les sept cataractes célèbres situées près de Kisangani, marquant la jonction entre le fleuve Lualaba et le fleuve Congo ?',
      'What are the seven famous cataracts near Kisangani that mark the transition from the Lualaba River to the Congo River?',
      '¿Cómo se llaman las siete famosas cataratas cerca de Kisangani donde el Lualaba pasa a llamarse río Congo?',
      'Como se chamam as sete famosas cataratas perto de Kisangani onde o Lualaba passa a ser o rio Congo?',
      'ما اسم الشلالات السبعة الشهيرة قرب كيسانغاني التي ينتقل عندها مجرى نهر لوالابا إلى نهر الكونغو؟'
    ),
    countryModePrompt: L(
      'Comment nomme-t-on aujourd’hui les anciennes « chutes Stanley », célèbres pour les pêcheries en paniers coniques du peuple Wagenia ?',
      'What is the modern name of the former "Stanley Falls" near Kisangani, famous for Wagenia conical basket fishing?',
      '¿Cómo se llaman hoy las antiguas "cataratas Stanley" cerca de Kisangani, célebres por la pesca wagenia con cestas?',
      'Como se chamam hoje as antigas "cataratas Stanley" perto de Kisangani, famosas pela pesca wagenia?',
      'ما الاسم الحالي لشلالات ستانلي السابقة قرب كيسانغاني المشهورة بصيد السمك بالسلال لدى شعب واغينيا؟'
    ),
    correct: L('Les chutes Boyoma', 'Boyoma Falls', 'Las cataratas Boyoma', 'As cataratas Boyoma', 'شلالات بويوما'),
    distractors: [
      L('Les chutes du Tugela', 'Tugela Falls', 'Cataratas del Tugela', 'Cataratas do Tugela', 'شلالات توغيلا'),
      L('Les chutes de Kalambo', 'Kalambo Falls', 'Cataratas de Kalambo', 'Cataratas de Kalambo', 'شلالات كالامبو'),
      L('Les chutes de Murchison', 'Murchison Falls', 'Cataratas Murchison', 'Cataratas Murchison', 'شلالات مورشيسون'),
    ],
    explanation: L(
      'Aux chutes Boyoma, les pêcheurs Wagenia installent depuis des siècles d’ingénieuses nasse-paniers au milieu des rapides tumultueux.',
      'At Boyoma Falls, Wagenia fishers build intricate wooden scaffolds and conical baskets directly in the roaring rapids.',
      'En las cataratas Boyoma, los pescadores wagenia tienden ingeniosas cestas cónicas sobre los rápidos.',
      'Nas cataratas Boyoma, os pescadores wagenia instalam cestos cônicos engenhosos em meio às corredeiras.',
      'ينصب صيادو واغينيا سلالهم المخروطية المبتكرة وسط التيارات القوية عند شلالات بويوما.'
    ),
  }),
  mkQ({
    id: 'cur_CD_08',
    countryCode: 'CD',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'first_pres_kasavubu',
    source: 'Archives nationales — Indépendance du 30 juin 1960',
    prompt: L(
      'Alors que Patrice Lumumba devint Premier ministre en juin 1960, qui fut élu tout premier Président de la République démocratique du Congo ?',
      'While Patrice Lumumba became Prime Minister in June 1960, who served as the first President of DR Congo?',
      'Mientras Patrice Lumumba fue primer ministro en junio de 1960, ¿quién fue el primer presidente de la RD del Congo?',
      'Enquanto Patrice Lumumba foi primeiro-ministro em junho de 1960, quem foi o primeiro presidente da RD Congo?',
      'بينما كان باتريس لومومبا رئيساً للوزراء في يونيو 1960، من كان أول رئيس لجمهورية الكونغو الديمقراطية؟'
    ),
    countryModePrompt: L(
      'Qui fut le tout premier Président de la République aux côtés du Premier ministre Patrice Lumumba le 30 juin 1960 ?',
      'Who served as the Republic’s first President alongside Prime Minister Patrice Lumumba on June 30, 1960?',
      '¿Quién fue el primer presidente de la República junto al primer ministro Patrice Lumumba el 30 de junio de 1960?',
      'Quem foi o primeiro presidente da República ao lado do primeiro-ministro Patrice Lumumba em 30 de junho de 1960?',
      'من كان أول رئيس للجمهورية إلى جانب رئيس الوزراء باتريس لومومبا في 30 يونيو 1960؟'
    ),
    correct: L('Joseph Kasa-Vubu', 'Joseph Kasa-Vubu', 'Joseph Kasa-Vubu', 'Joseph Kasa-Vubu', 'جوزيف كاسا فوبو'),
    distractors: [
      L('Laurent-Désiré Kabila', 'Laurent-Désiré Kabila', 'Laurent-Désiré Kabila', 'Laurent-Désiré Kabila', 'لوران ديزيريه كابيلا'),
      L('Moïse Tshombe', 'Moïse Tshombe', 'Moïse Tshombe', 'Moïse Tshombe', 'مويز تشومبي'),
      L('Étienne Tshisekedi', 'Étienne Tshisekedi', 'Étienne Tshisekedi', 'Étienne Tshisekedi', 'إتيان تشيسيكيدي'),
    ],
    explanation: L(
      'Leader historique de l’ABAKO, Joseph Kasa-Vubu occupa la présidence de la République de 1960 à 1965 et est salué comme Père de l’indépendance.',
      'Leader of the ABAKO movement, Joseph Kasa-Vubu served as the nation’s first President from 1960 to 1965.',
      'Líder del movimiento ABAKO, Joseph Kasa-Vubu fue el primer presidente del país entre 1960 y 1965.',
      'Líder do movimento ABAKO, Joseph Kasa-Vubu foi o primeiro presidente do país de 1960 a 1965.',
      'تولى جوزيف كاسا فوبو منصب أول رئيس للجمهورية بين عامي 1960 و1965.'
    ),
  }),
  mkQ({
    id: 'cur_CD_09',
    countryCode: 'CD',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 2,
    topicKey: 'city_renames_1966',
    source: 'Histoire urbaine de la RD Congo (1966)',
    prompt: L(
      'Comment s’appelaient respectivement Kinshasa, Lubumbashi et Kisangani avant l’africanisation des noms de villes décidée en 1966 ?',
      'What were Kinshasa, Lubumbashi, and Kisangani named respectively prior to the 1966 city-renaming campaign?',
      '¿Cómo se llamaban Kinshasa, Lubumbashi y Kisangani antes del cambio de nombres en 1966?',
      'Como se chamavam Kinshasa, Lubumbashi e Kisangani antes da renomeação de 1966?',
      'ما الأسماء السابقة لمدن كينشاسا ولوبومباشي وكيسانغاني قبل تغيير الأسماء عام 1966؟'
    ),
    countryModePrompt: L(
      'Quels étaient les anciens noms coloniaux des trois métropoles Kinshasa, Lubumbashi et Kisangani avant 1966 ?',
      'What were the former colonial names of the three major cities Kinshasa, Lubumbashi, and Kisangani before 1966?',
      '¿Cuáles eran los antiguos nombres coloniales de Kinshasa, Lubumbashi y Kisangani antes de 1966?',
      'Quais eram os antigos nomes coloniais de Kinshasa, Lubumbashi e Kisangani antes de 1966?',
      'ما الأسماء الاستعمارية السابقة لمدن كينشاسا ولوبومباشي وكيسانغاني قبل عام 1966؟'
    ),
    correct: L(
      'Léopoldville, Élisabethville et Stanleyville',
      'Léopoldville, Élisabethville, and Stanleyville',
      'Léopoldville, Élisabethville y Stanleyville',
      'Léopoldville, Élisabethville e Stanleyville',
      'ليوبولدفيل وإليزابيثفيل وستانليفيل'
    ),
    distractors: [
      L('Salisbury, Lourenço Marques et Bathurst', 'Salisbury, Lourenço Marques, and Bathurst', 'Salisbury, Lourenço Marques y Bathurst', 'Salisbury, Lourenço Marques e Bathurst', 'سالزبوري ولورينسو ماركيز وباثورست'),
      L('Fort-Lamy, Port-Étienne et Fort-Archambault', 'Fort-Lamy, Port-Étienne, and Fort-Archambault', 'Fort-Lamy, Port-Étienne y Fort-Archambault', 'Fort-Lamy, Port-Étienne e Fort-Archambault', 'فور لامي وبور إتيان'),
      L('Astrida, Usumbura et Nova Lisboa', 'Astrida, Usumbura, and Nova Lisboa', 'Astrida, Usumbura y Nova Lisboa', 'Astrida, Usumbura e Nova Lisboa', 'أستريدا ونوفا لشبوا'),
    ],
    explanation: L(
      'En juin 1966, ces villes ont repris leurs racines africaines : Kinshasa, Lubumbashi, Kisangani, Kisantu ou encore Mbandaka (Coquilhatville).',
      'In June 1966, Léopoldville, Élisabethville, and Stanleyville became Kinshasa, Lubumbashi, and Kisangani.',
      'En junio de 1966 recuperaron nombres africanos: Kinshasa, Lubumbashi y Kisangani.',
      'Em junho de 1966, as cidades adotaram seus nomes africanos: Kinshasa, Lubumbashi e Kisangani.',
      'في يونيو 1966 استعادت هذه المدن الكبرى أسماءها الأفريقية الأصيلة.'
    ),
  }),
  mkQ({
    id: 'cur_CD_10',
    countryCode: 'CD',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'zaire_era_1971_1997',
    source: 'Histoire contemporaine de la RDC (1971–1997)',
    prompt: L(
      'Entre 1971 et 1997, sous quel nom officiel la République démocratique du Congo était-elle désignée ?',
      'Between 1971 and 1997, under what official name was the Democratic Republic of the Congo known?',
      'Entre 1971 y 1997, ¿con qué nombre oficial fue conocida la República Democrática del Congo?',
      'Entre 1971 e 1997, por qual nome oficial a República Democrática do Congo era conhecida?',
      'بين عامي 1971 و1997، ما الاسم الرسمي الذي عُرفت به جمهورية الكونغو الديمقراطية؟'
    ),
    countryModePrompt: L(
      'Sous quel autre nom officiel tiré d’un ancien mot kikongo (« Nzadi », grand fleuve) le pays était-il connu entre octobre 1971 et mai 1997 ?',
      'By what official name derived from the Kikongo word "Nzadi" (great river) was the country known from 1971 to 1997?',
      '¿Con qué nombre oficial derivado de la palabra kikongo "Nzadi" fue conocido el país entre 1971 y 1997?',
      'Por qual nome oficial derivado da palavra kikongo "Nzadi" o país foi conhecido entre 1971 e 1997?',
      'ما الاسم الرسمي المشتق من كلمة «نزادي» بلغة الكيكونغو الذي حملته البلاد بين 1971 و1997؟'
    ),
    correct: L('La République du Zaïre', 'The Republic of Zaire', 'La República de Zaire', 'A República do Zaire', 'جمهورية زائير'),
    distractors: [
      L('La Rhodésie du Nord', 'Northern Rhodesia', 'Rodesia del Norte', 'Rodésia do Norte', 'روديسيا الشمالية'),
      L('Le Tanganyika', 'Tanganyika', 'Tanganica', 'Tanganica', 'تنجانيقا'),
      L('La Haute-Volta', 'Upper Volta', 'Alto Volta', 'Alto Volta', 'فولتا العليا'),
    ],
    explanation: L(
      'Le mot « Zaïre » provenait de la déformation portugaise du terme kikongo « Nzadi » (ou Nzere), signifiant « le grand fleuve ».',
      'The name "Zaire" came from a Portuguese rendering of the Kikongo word "Nzadi," meaning "the river that swallows all rivers."',
      'El nombre «Zaire» procedía de la adaptación portuguesa del término kikongo «Nzadi» (gran río).',
      'O nome «Zaire» originou-se da adaptação portuguesa do termo kikongo «Nzadi» (grande rio).',
      'جاء اسم «زائير» من تحريف برتغالي لكلمة «نزادي» أي النهر الكبير.'
    ),
  }),
  mkQ({
    id: 'cur_CD_11',
    countryCode: 'CD',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'kimpa_vita_kongo',
    source: 'Histoire du Royaume du Kongo (XVIIIe siècle)',
    prompt: L(
      'Quelle jeune prophétesse et héroïne du Royaume du Kongo au début du XVIIIe siècle (1684–1706) œuvra pour la réunification et la paix du royaume face aux guerres civiles ?',
      'Which young Kongo prophetess and heroine in the early 1700s (1684–1706) rallied people to reunite and bring peace to the Kongo Kingdom?',
      '¿Qué joven profetisa y heroína del Reino del Kongo a principios del siglo XVIII luchó por la reunificación y la paz del reino?',
      'Que jovem profetisa e heroína do Reino do Kongo no início do século XVIII lutou pela reunificação e paz do reino?',
      'من هي الزعيمة والبطلة في مملكة الكونغو أوائل القرن الثامن عشر التي دعت إلى السلام وتوحيد المملكة؟'
    ),
    countryModePrompt: L(
      'Quelle figure féminine emblématique du Royaume du Kongo (Dona Beatriz, 1684–1706) prêcha l’unité et la paix face aux ingérences européennes ?',
      'Which iconic female leader of the Kongo Kingdom (Dona Beatriz, 1684–1706) preached unity and peace against foreign interference?',
      '¿Qué figura femenina del Reino del Kongo (Dona Beatriz, 1684-1706) predicó la unidad y la paz?',
      'Qual figura feminina do Reino do Kongo (Dona Beatriz, 1684–1706) pregou a unidade e a paz?',
      'من هي الشخصية النسائية التاريخية في مملكة الكونغو (دونا بياتريس) التي نادت بالوحدة والسلام؟'
    ),
    correct: L('Kimpa Vita (Dona Beatriz)', 'Kimpa Vita (Dona Beatriz)', 'Kimpa Vita (Dona Beatriz)', 'Kimpa Vita (Dona Beatriz)', 'كيمبا فيتا (دونا بياتريس)'),
    distractors: [
      L('La reine Pokou', 'Queen Pokou', 'La reina Pokou', 'A rainha Pokou', 'الملكة بوكو'),
      L('Yaa Asantewaa', 'Yaa Asantewaa', 'Yaa Asantewaa', 'Yaa Asantewaa', 'يا أسانتيوا'),
      L('La Kahina', 'Dihya (Kahina)', 'La Kahina', 'A Kahina', 'الكاهنة ديهيا'),
    ],
    explanation: L(
      'Figure majeure de l’histoire d’Afrique centrale, Kimpa Vita rassembla des milliers de partisans à São Salvador pour restaurer l’unité du Kongo.',
      'Revered across Central Africa, Kimpa Vita inspired thousands in Mbanza Kongo to restore peace and sovereignty.',
      'Venerada en África Central, Kimpa Vita inspiró a miles de seguidores para restaurar la unidad del Kongo.',
      'Reverenciada na África Central, Kimpa Vita inspirou milhares de seguidores para restaurar a paz no Kongo.',
      'تُعد كيمبا فيتا من أبرز الشخصيات النسائية في تاريخ أفريقيا الوسطى لنضالها من أجل الوحدة والسلام.'
    ),
  }),
  mkQ({
    id: 'cur_CD_12',
    countryCode: 'CD',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'simon_kimbangu_nkamba',
    source: 'Patrimoine spirituel — Nkamba (Kongo-Central)',
    prompt: L(
      'Quel leader spirituel congolais né à Nkamba fonda un mouvement religieux africain en avril 1921, dont le 6 avril est aujourd’hui jour férié officiel ?',
      'Which Congolese spiritual leader born in Nkamba founded a major African religious movement in April 1921, commemorated every April 6 as a national holiday?',
      '¿Qué líder espiritual congoleño nacido en Nkamba fundó un gran movimiento religioso en abril de 1921?',
      'Que líder espiritual congolês nascido em Nkamba fundou um grande movimento religioso em abril de 1921?',
      'من هو الزعيم الروحي الكونغولي المولود في نكامبا الذي أسس حركة دينية أفريقية في أبريل 1921؟'
    ),
    countryModePrompt: L(
      'De quel prophète né à Nkamba et emprisonné trente ans à Élisabethville commémore-t-on le ministère le 6 avril (fête nationale légale depuis 2023) ?',
      'Which spiritual leader born in Nkamba and imprisoned for 30 years is commemorated on the April 6 national holiday introduced in 2023?',
      '¿De qué líder espiritual nacido en Nkamba se conmemora el 6 de abril como día festivo nacional desde 2023?',
      'De qual líder espiritual nascido em Nkamba se comemora o dia 6 de abril como feriado nacional desde 2023?',
      'من هو الزعيم الروحي المولود في نكامبا الذي يُحتفل بذكراه عطلةً رسمية في 6 أبريل منذ 2023؟'
    ),
    correct: L('Simon Kimbangu', 'Simon Kimbangu', 'Simon Kimbangu', 'Simon Kimbangu', 'سيمون كيمبانغو'),
    distractors: [
      L('Cheikh Ahmadou Bamba', 'Cheikh Ahmadou Bamba', 'Cheikh Ahmadou Bamba', 'Cheikh Ahmadou Bamba', 'الشيخ أحمدو بمبا'),
      L('Desmond Tutu', 'Desmond Tutu', 'Desmond Tutu', 'Desmond Tutu', 'ديزموند توتو'),
      L('William Wade Harris', 'William Wade Harris', 'William Wade Harris', 'William Wade Harris', 'وليام ويد هاريس'),
    ],
    explanation: L(
      'Arrêté en 1921 et resté 30 ans en détention jusqu’à sa mort en 1951, Simon Kimbangu est reconnu pour son message d’émancipation spirituelle et africaine.',
      'Imprisoned for 30 years until 1951, Simon Kimbangu founded the Kimbanguist Church centered in Nkamba.',
      'Encarcelado durante 30 años hasta 1951, Simon Kimbangu fundó la Iglesia kimbanguista.',
      'Preso por 30 anos até 1951, Simon Kimbangu fundou a Igreja Kimbanguista em Nkamba.',
      'سُجن سيمون كيمبانغو ثلاثين عاماً وأسس الكنيسة الكيمبانغية ذات الانتشار الواسع.'
    ),
  }),
  mkQ({
    id: 'cur_CD_13',
    countryCode: 'CD',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 1,
    topicKey: 'papa_wemba_molokai',
    source: 'Patrimoine musical congolais (Matonge / Kinshasa)',
    prompt: L(
      'Quel célèbre chanteur congolais surnommé « le Roi de la Rumba rock » et « le Pape de la SAPE » fonda le groupe Viva La Musica ?',
      'Which iconic Congolese singer nicknamed "King of Rumba Rock" founded the band Viva La Musica?',
      '¿Qué célebre cantante congoleño apodado "Rey de la Rumba Rock" fundó la banda Viva La Musica?',
      'Que célebre cantor congolês apelidado de "Rei da Rumba Rock" fundou a banda Viva La Musica?',
      'من هو المغني الكونغولي الشهير الملقب بـ«ملك الرومبا روك» ومؤسس فرقة فيفا لا موزيكا؟'
    ),
    countryModePrompt: L(
      'Quel monument de la chanson et chef du « Village Molokaï » à Matonge a lancé « Show Me the Way », « Yolele » et « Maria Valencia » ?',
      'Which musical icon and leader of Matonge’s "Village Molokaï" recorded hits like "Show Me the Way" and "Maria Valencia"?',
      '¿Qué icono musical del barrio de Matonge creó éxitos como "Show Me the Way" y "Maria Valencia"?',
      'Qual ícone musical do bairro de Matonge gravou sucessos como "Show Me the Way" e "Maria Valencia"?',
      'من هو الأيقونة الغنائية وزعيم حي ماتونغي صاحب أغاني «يوليلي» و«ماريا فالنسيا»؟'
    ),
    correct: L('Papa Wemba (Jules Shungu Wembadio)', 'Papa Wemba (Jules Shungu Wembadio)', 'Papa Wemba', 'Papa Wemba', 'بابا ويمبا'),
    distractors: [
      L('Youssou N’Dour', 'Youssou N’Dour', 'Youssou N’Dour', 'Youssou N’Dour', 'يوسو ندور'),
      L('Ali Farka Touré', 'Ali Farka Touré', 'Ali Farka Touré', 'Ali Farka Touré', 'علي فاركا توري'),
      L('Hugh Masekela', 'Hugh Masekela', 'Hugh Masekela', 'Hugh Masekela', 'هيو ماسيكيلا'),
    ],
    explanation: L(
      'Voix cristalline inoubliable de Zaïko Langa Langa puis de Viva La Musica, Papa Wemba fit briller la rumba et la SAPE sur toutes les scènes du monde.',
      'From Zaïko Langa Langa to Viva La Musica and Peter Gabriel collaborations, Papa Wemba carried Congolese rumba around the globe.',
      'De Zaïko Langa Langa a Viva La Musica, Papa Wemba llevó la rumba congoleña por todo el planeta.',
      'De Zaïko Langa Langa a Viva La Musica, Papa Wemba levou a rumba congolesa aos palcos do mundo.',
      'حمل بابا ويمبا موسيقى الرومبا الكونغولية إلى المسارح العالمية بصوته العذب وإبداعه.'
    ),
  }),
  mkQ({
    id: 'cur_CD_14',
    countryCode: 'CD',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'franco_tpok_jazz',
    source: 'Patrimoine musical d’Afrique centrale (1956–1989)',
    prompt: L(
      'Quel guitariste et compositeur surnommé « le Grand Maître » dirigea pendant plus de trente ans l’orchestre légendaire TP OK Jazz ?',
      'Which legendary guitarist and composer nicknamed "Le Grand Maître" led the famed TP OK Jazz orchestra for over 30 years?',
      '¿Qué legendario guitarrista y compositor apodado "Le Grand Maître" dirigió durante más de 30 años la orquesta TP OK Jazz?',
      'Que lendário guitarrista e compositor apelidado de "Le Grand Maître" liderou a orquestra TP OK Jazz por mais de 30 anos?',
      'من هو عازف الغيتار والملحن الأسطوري الملقب بـ«المعلم الأكبر» قائد أوركسترا TP OK Jazz لأكثر من ثلاثين عاماً؟'
    ),
    countryModePrompt: L(
      'Quel « Sorcier de la guitare » et chef du TP OK Jazz composa des chefs-d’œuvre éternels comme « Mario » et « Mamou » ?',
      'Which "Sorcerer of the Guitar" and TP OK Jazz leader composed timeless classics such as "Mario" and "Mamou"?',
      '¿Qué "Hechicero de la guitarra" y líder del TP OK Jazz compuso clásicos inmortales como "Mario"?',
      'Qual "Feiticeiro da guitarra" e líder do TP OK Jazz compôs clássicos eternos como "Mario"?',
      'من هو «ساحر الغيتار» وقائد TP OK Jazz الذي لحّن روائع خالدة مثل «ماريو»؟'
    ),
    correct: L('Franco Luambo Makiadi', 'Franco Luambo Makiadi', 'Franco Luambo Makiadi', 'Franco Luambo Makiadi', 'فرانكو لوامبو ماكيادي'),
    distractors: [
      L('Miriam Makeba', 'Miriam Makeba', 'Miriam Makeba', 'Miriam Makeba', 'ميريام ماكيبا'),
      L('Fela Kuti', 'Fela Kuti', 'Fela Kuti', 'Fela Kuti', 'فيلا كوتي'),
      L('Boubacar Traoré', 'Boubacar Traoré', 'Boubacar Traoré', 'Boubacar Traoré', 'بوبكر تراوري'),
    ],
    explanation: L(
      'Auteur de centaines de titres majeurs en lingala dès 1956, Franco Luambo demeure l’un des géants absolus de la musique africaine du XXe siècle.',
      'Recording hundreds of classics starting in 1956, Franco Luambo stands among the towering musical giants of 20th-century Africa.',
      'Autor de cientos de éxitos desde 1956, Franco Luambo es uno de los mayores gigantes musicales del siglo XX.',
      'Autor de centenas de sucessos desde 1956, Franco Luambo é um dos maiores gigantes musicais do século XX.',
      'يُعد فرانكو لوامبو من أعظم عمالقة الموسيقى الأفريقية في القرن العشرين.'
    ),
  }),
  mkQ({
    id: 'cur_CD_15',
    countryCode: 'CD',
    category: 'culture',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'cheri_samba_painting',
    source: 'Art contemporain africain — Kinshasa',
    prompt: L(
      'Quel célèbre peintre populaire de Kinshasa, exposé au Centre Pompidou et au MoMA, est reconnu pour ses toiles figuratives colorées accompagnées de bulles de texte ?',
      'Which famed Kinshasa popular painter, exhibited at Centre Pompidou and MoMA, is celebrated for vivid narrative canvases with speech bubbles?',
      '¿Qué famoso pintor popular de Kinshasa, expuesto en el Centro Pompidou y el MoMA, destaca por sus coloridos cuadros narrativos con textos?',
      'Que famoso pintor popular de Kinshasa, exposto no Centro Pompidou e no MoMA, é célebre por suas telas coloridas com textos?',
      'من هو الرسام الشعبي الشهير في كينشاسا الذي عُرضت أعماله في بومبيدو ومتحف الفن الحديث بنيويورك؟'
    ),
    countryModePrompt: L(
      'Quel maître de la « peinture populaire » kinoise signa l’exposition rétrospective « J’aime la couleur » et raconte le quotidien urbain en tableaux satiriques ?',
      'Which master of Kinshasa popular painting earned global acclaim for his colorful, witty canvases chronicling urban life?',
      '¿Qué maestro de la pintura popular de Kinshasa alcanzó fama mundial por sus cuadros satíricos sobre la vida urbana?',
      'Qual mestre da pintura popular de Kinshasa ganhou fama mundial com seus quadros satíricos sobre a vida urbana?',
      'من هو رائد الرسم الشعبي في كينشاسا المشهور بلوحاته الساخرة المفعمة بالألوان عن الحياة الحضرية؟'
    ),
    correct: L('Chéri Samba', 'Chéri Samba', 'Chéri Samba', 'Chéri Samba', 'شيري سامبا'),
    distractors: [
      L('Ousmane Sow', 'Ousmane Sow', 'Ousmane Sow', 'Ousmane Sow', 'عثمان سو'),
      L('El Anatsui', 'El Anatsui', 'El Anatsui', 'El Anatsui', 'إل أناتسوي'),
      L('Malick Sidibé', 'Malick Sidibé', 'Malick Sidibé', 'Malick Sidibé', 'مالك سيديبي'),
    ],
    explanation: L(
      'Né Samba wa Mbimba N’zingo Nuni Masi Ndo Mbasi en 1956, Chéri Samba débuta comme peintre d’enseignes dans la capitale avant de conquérir les grands musées.',
      'Starting out as a Kinshasa sign painter, Chéri Samba rose to become one of Africa’s most celebrated contemporary painters.',
      'Iniciado como rotulista en Kinshasa, Chéri Samba llegó a ser uno de los pintores africanos más célebres.',
      'Começando como pintor de letreiros em Kinshasa, Chéri Samba tornou-se um dos maiores pintores africanos contemporâneos.',
      'بدأ شيري سامبا رسام لافتات في كينشاسا ليصل بأعماله إلى أشهر المتاحف العالمية.'
    ),
  }),
  mkQ({
    id: 'cur_CD_16',
    countryCode: 'CD',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'four_national_languages',
    source: 'Constitution de la RD Congo — Langues nationales',
    prompt: L(
      'En plus du français (langue officielle), quelles sont les quatre langues nationales reconnues en RD Congo ?',
      'In addition to French (official), which four national languages are recognized in DR Congo?',
      'Además del francés (oficial), ¿cuáles son las cuatro lenguas nacionales reconocidas en la RD del Congo?',
      'Além do francês (oficial), quais são as quatro línguas nacionais reconhecidas na RD Congo?',
      'إلى جانب الفرنسية، ما اللغات الوطنية الأربع المعترف بها في الكونغو الديمقراطية؟'
    ),
    countryModePrompt: L(
      'Quelles quatre grandes langues nationales relient l’ouest, le nord, le centre et l’est du pays ?',
      'Which four major national languages connect the west, north, center, and east of the country?',
      '¿Qué cuatro grandes lenguas nacionales conectan el oeste, norte, centro y este del país?',
      'Quais quatro grandes línguas nacionais conectam oeste, norte, centro e leste do país?',
      'ما اللغات الوطنية الأربع الكبرى التي تربط غرب البلاد وشمالها ووسطها وشرقها؟'
    ),
    correct: L('Kikongo, Lingala, Swahili et Tshiluba', 'Kikongo, Lingala, Swahili, and Tshiluba', 'Kikongo, Lingala, Suajili y Tshiluba', 'Kikongo, Lingala, Suaíli e Tshiluba', 'الكيكونغو واللينغالا والسواحيلية والتشيلوبا'),
    distractors: [
      L('Wolof, Peul, Bambara et Haoussa', 'Wolof, Fula, Bambara, and Hausa', 'Wólof, fula, bambara y hausa', 'Uólofe, fula, bambara e hauçá', 'الولوف والفولاني والبامبارا والهوسا'),
      L('Amharique, Oromo, Somali et Afar', 'Amharic, Oromo, Somali, and Afar', 'Amhárico, oromo, somalí y afar', 'Amárico, oromo, somali e afar', 'الأمهرية والأورومو والصومالية والعفر'),
      L('Zoulou, Sotho, Tswana et Shona', 'Zulu, Sotho, Tswana, and Shona', 'Zulú, sotho, tsuana y shona', 'Zulu, soto, tswana e shona', 'الزولو والسوتو والتسوانا والشونا'),
    ],
    explanation: L(
      'Ces quatre grandes langues véhiculaires côtoient plus de 200 langues locales, formant une immense richesse linguistique.',
      'These four regional lingua francas unite speakers across a nation rich in over 200 local languages.',
      'Estas cuatro lenguas vehiculares conviven con más de 200 idiomas locales en todo el país.',
      'Essas quatro línguas nacionais convivem com mais de 200 línguas locais em todo o país.',
      'تتعايش هذه اللغات الأربع مع أكثر من 200 لغة محلية عبر أرجاء البلاد.'
    ),
  }),
  mkQ({
    id: 'cur_CD_17',
    countryCode: 'CD',
    category: 'culture',
    subCategory: 'patrimoine_tourisme',
    difficulty: 4,
    topicKey: 'kuba_raffia_velvet',
    source: 'Patrimoine textile du Kasaï — Royaume Kuba',
    prompt: L(
      'Quel célèbre textile brodé géométrique en fibres de palmier raphia, appelé « velours du Kasaï », est créé par les tisserands et brodeuses du royaume Kuba ?',
      'Which famous geometric embroidered raffia-fiber textile—known as "Kasai velvet"—is crafted by weavers and embroiderers of the Kuba Kingdom?',
      '¿Qué famoso tejido geométrico bordado en rafia —conocido como "terciopelo del Kasai"— crean los artesanos del reino Kuba?',
      'Que famoso tecido geométrico bordado em ráfia —conhecido como "veludo do Kasai"— é criado pelo reino Kuba?',
      'ما النسيج الهندسي المطرز الشهير من ألياف الرافيا المعروف بـ«مخمل كاساي» لدى مملكة كوبا؟'
    ),
    countryModePrompt: L(
      'De quelle fibre végétale traditionnelle sont tissés les précieux « velours du Kasaï » aux motifs géométriques fractals du royaume Kuba ?',
      'From which natural palm fiber are the intricate geometric "Kasai velvet" textiles of the Kuba Kingdom woven?',
      '¿Con qué fibra vegetal tradicional se tejen los preciados "terciopelos del Kasai" del reino Kuba?',
      'Com qual fibra vegetal tradicional são tecidos os preciosos "veludos do Kasai" do reino Kuba?',
      'من أي ألياف نباتية تقليدية تُنسج أقمشة «مخمل كاساي» الهندسية الدقيقة في مملكة كوبا؟'
    ),
    correct: L('Le raphia (tissu Kuba brodé à poils coupés)', 'Raffia palm fiber (cut-pile Kuba cloth)', 'La rafia (tejido Kuba bordado)', 'A ráfia (tecido Kuba bordado)', 'ألياف نخيل الرافيا'),
    distractors: [
      L('La laine de mérinos d’altitude', 'Merino sheep wool', 'Lana merina', 'Lã merino', 'صوف المارينو'),
      L('Le lin égyptien blanchi', 'Bleached linen', 'Lino blanco', 'Linho branco', 'الكتان الأبيض'),
      L('La soie synthétique de nylon', 'Nylon silk', 'Nailon sintético', 'Náilon sintético', 'النايلون الصناعي'),
    ],
    explanation: L(
      'Les hommes tissent la toile de raphia sur métier incliné puis les femmes brodent des motifs géométriques complexes aux reflets veloutés.',
      'Men weave the raffia base cloth and women embroider intricate geometric cut-pile patterns prized by art collectors worldwide.',
      'Los hombres tejen la base de rafia y las mujeres bordan intrincados diseños geométricos aterciopelados.',
      'Os homens tecem a base de ráfia e as mulheres bordam complexos padrões geométricos aveludados.',
      'ينسج الرجال القماش وتطرزه النساء بزخارف هندسية مخملية بديعة.'
    ),
  }),
  mkQ({
    id: 'cur_CD_18',
    countryCode: 'CD',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'fumbwa_poulet_moambe',
    source: 'Gastronomie traditionnelle de RD Congo',
    prompt: L(
      'Quel plat emblématique composé de poulet mijoté dans une riche sauce onctueuse à la pâte de noix de palme figure souvent au sommet de la gastronomie congolaise ?',
      'Which iconic dish of chicken simmered in a rich, creamy palm-nut sauce ranks atop Congolese cuisine?',
      '¿Qué plato emblemático de pollo cocinado en cremosa salsa de nuez de palma destaca en la cocina congoleña?',
      'Qual prato emblemático de frango cozido em molho cremoso de dendê destaca-se na cozinha congolesa?',
      'ما الطبق الشهير المكون من الدجاج المطهو في صلصة ثمار النخيل الكريمية في المطبخ الكونغولي؟'
    ),
    countryModePrompt: L(
      'Quelle spécialité nationale marie poulet fermier, noix de palme pressées (« moambe »), tomates, oignons et piment doux ?',
      'Which national specialty pairs chicken with rich pressed palm-nut sauce ("moambe"), tomatoes, and onions?',
      '¿Qué especialidad nacional combina pollo con cremosa salsa de nuez de palma ("moambe")?',
      'Qual especialidade nacional combina frango com molho cremoso de noz de palma ("moambe")?',
      'ما الطبق الوطني الذي يجمع الدجاج بصلصة جوز النخيل الكريمية «موامبي»؟'
    ),
    correct: L('Le Poulet à la moambe', 'Chicken Moambe (Poulet à la Moambe)', 'Pollo a la moambe', 'Frango à moambe', 'الدجاج بصلصة موامبي'),
    distractors: [
      L('La Bouillabaisse marseillaise', 'Bouillabaisse', 'Bullabesa', 'Bouillabaisse', 'بويابيس'),
      L('La Paella valenciana', 'Valencian Paella', 'Paella valenciana', 'Paella valenciana', 'الباييا'),
      L('Le Risotto aux cèpes', 'Mushroom Risotto', 'Risotto de setas', 'Risoto de cogumelos', 'الريزوتو'),
    ],
    explanation: L(
      'Accompagné de riz, de fufu, de bananes plantains frites (makemba) ou de chikwangue, le Poulet à la moambe est un fleuron de la table familiale.',
      'Served with rice, fried plantains (makemba), or fufu, Poulet à la Moambe is a beloved Sunday celebration dish.',
      'Servido con arroz, plátanos fritos o fufu, el pollo a la moambe es un clásico festivo.',
      'Servido com arroz, banana-da-terra frita ou fufu, o frango à moambe é um clássico festivo.',
      'يُقدم الدجاج بصلصة موامبي مع الأرز أو الموز المقلي في المناسبات العائلية.'
    ),
  }),
  mkQ({
    id: 'cur_CD_19',
    countryCode: 'CD',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'fumbwa_mikate',
    source: 'Cuisine populaire de Kinshasa & Kongo-Central',
    prompt: L(
      'Comment appelle-t-on les savoureux petits beignets dorés frits vendus à tous les coins de rue de Kinshasa pour le petit-déjeuner (souvent avec des arachides ou du thé) ?',
      'What are the golden fried sweet dough puffs sold across Kinshasa’s streets for breakfast alongside peanuts or tea called?',
      '¿Cómo se llaman los populares buñuelos dorados vendidos en las calles de Kinshasa para desayunar?',
      'Como se chamam os populares bolinhos fritos dourados vendidos nas ruas de Kinshasa no café da manhã?',
      'ما اسم فطائر العجين المقلية الذهبية التي تُباع في شوارع كينشاسا للإفطار؟'
    ),
    countryModePrompt: L(
      'Quel est le nom populaire des célèbres beignets ronds dorés mangés au petit-déjeuner avec du café ou de la pâte d’arachide ?',
      'What is the popular local name for the round golden fried doughnuts enjoyed for breakfast with tea or peanut butter?',
      '¿Cuál es el nombre popular de los célebres buñuelos dorados que se comen en el desayuno?',
      'Qual é o nome popular dos célebres bolinhos dourados comidos no café da manhã?',
      'ما الاسم الشعبي للفطائر المقلية الذهبية التي تُؤكل صباحاً مع الشاي أو زبدة الفول السوداني؟'
    ),
    correct: L('Les mikate', 'Mikate', 'Los mikate', 'Os mikate', 'الميكاتي'),
    distractors: [
      L('Les macarons parisiens', 'Parisian macarons', 'Macarons', 'Macarons', 'الماكارون'),
      L('Les cannoli siciliens', 'Sicilian cannoli', 'Cannoli', 'Cannoli', 'الكانولي'),
      L('Les churros madrilènes', 'Churros', 'Churros', 'Churros', 'التشوروس'),
    ],
    explanation: L(
      'Proches des puff-puff d’Afrique de l’Ouest, les mikate dorés et moelleux font partie du paysage matinal de toutes les villes du pays.',
      'Golden, pillowy mikate doughnuts are a cherished daily street-food staple across cities from Kinshasa to Lubumbashi.',
      'Los suaves y dorados mikate forman parte inseparable del desayuno popular urbano.',
      'Os macios e dourados mikate fazem parte do café da manhã popular urbano.',
      'تُعد فطائر الميكاتي الذهبية الطرية جزءاً يومياً محبوباً من وجبة الإفطار الشعبية.'
    ),
  }),
  mkQ({
    id: 'cur_CD_20',
    countryCode: 'CD',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'rumble_in_the_jungle_1974',
    source: 'Histoire mondiale de la boxe — Kinshasa (30 octobre 1974)',
    prompt: L(
      'Quel combat de boxe légendaire du XXe siècle eut lieu à Kinshasa (Stade du 20-Mai) le 30 octobre 1974 devant plus de 60 000 spectateurs ?',
      'Which legendary 20th-century heavyweight boxing match took place in Kinshasa on October 30, 1974 before over 60,000 fans?',
      '¿Qué legendario combate de boxeo del siglo XX tuvo lugar en Kinshasa el 30 de octubre de 1974?',
      'Que lendária luta de boxe do século XX aconteceu em Kinshasa em 30 de outubro de 1974?',
      'ما نزال الملاكمة الأسطوري في القرن العشرين الذي أُقيم في كينشاسا يوم 30 أكتوبر 1974؟'
    ),
    countryModePrompt: L(
      'Quels deux géants de la boxe poids lourds s’affrontèrent à Kinshasa le 30 octobre 1974 dans le mythique « Rumble in the Jungle » ?',
      'Which two heavyweight boxing legends fought in Kinshasa on October 30, 1974 in the historic "Rumble in the Jungle"?',
      '¿Qué dos leyendas del boxeo se enfrentaron en Kinshasa el 30 de octubre de 1974 en el "Rumble in the Jungle"?',
      'Quais duas lendas do boxe enfrentaram-se em Kinshasa em 30 de outubro de 1974 no "Rumble in the Jungle"?',
      'من هما أسطورتا الملاكمة اللذان تقابلا في كينشاسا يوم 30 أكتوبر 1974 في نزال «رامبل إن ذا جانغل»؟'
    ),
    correct: L('Mohamed Ali contre George Foreman', 'Muhammad Ali vs. George Foreman', 'Muhammad Ali contra George Foreman', 'Muhammad Ali contra George Foreman', 'محمد علي كلاي ضد جورج فورمان'),
    distractors: [
      L('Mike Tyson contre Evander Holyfield', 'Mike Tyson vs. Evander Holyfield', 'Mike Tyson vs. Evander Holyfield', 'Mike Tyson vs. Evander Holyfield', 'مايك تايسون ضد هوليفيلد'),
      L('Floyd Mayweather contre Manny Pacquiao', 'Mayweather vs. Pacquiao', 'Mayweather vs. Pacquiao', 'Mayweather vs. Pacquiao', 'مايويذر ضد باكياو'),
      L('Rocky Marciano contre Joe Louis', 'Marciano vs. Joe Louis', 'Marciano vs. Joe Louis', 'Marciano vs. Joe Louis', 'روكي مارسيانو ضد جو لويس'),
    ],
    explanation: L(
      'Utilisant la tactique du « rope-a-dope », Mohamed Ali mit George Foreman KO au 8e round dans une ambiance inoubliable scandée par « Ali boma ye ! ».',
      'Using his famous rope-a-dope strategy, Muhammad Ali knocked out George Foreman in round 8 as fans chanted "Ali boma ye!"',
      'Con la táctica "rope-a-dope", Ali noqueó a Foreman en el octavo asalto entre gritos de "¡Ali boma ye!".',
      'Usando a tática "rope-a-dope", Ali nocauteou Foreman no 8º round sob o coro de "Ali boma ye!".',
      'هزم محمد علي كلاي منافسه جورج فورمان بالضربة القاضية في الجولة الثامنة وسط هتاف الجماهير.'
    ),
  }),
  mkQ({
    id: 'cur_CD_21',
    countryCode: 'CD',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'dikembe_mutombo_nba',
    source: 'Naismith Memorial Basketball Hall of Fame',
    prompt: L(
      'Quel pivot légendaire né à Kinshasa — célèbre pour son geste « Not in my house » du doigt après chaque contre — a été élu 4 fois Meilleur défenseur de la NBA ?',
      'Which Hall of Fame center born in Kinshasa—famed for his finger wag after blocking shots—won NBA Defensive Player of the Year 4 times?',
      '¿Qué legendario pívot nacido en Kinshasa —famoso por agitar el dedo tras cada tapón— ganó 4 veces el premio al Mejor Defensor de la NBA?',
      'Que lendário pivô nascido em Kinshasa —famoso pelo gesto do dedo após cada toco— venceu 4 vezes o prêmio de Melhor Defensor da NBA?',
      'من هو نجم السلة الأسطوري المولود في كينشاسا الفائز 4 مرات بجائزة أفضل مدافع في NBA والمعروف بحركة إصبعه الشهيرة؟'
    ),
    countryModePrompt: L(
      'Quel géant de la NBA originaire de Kinshasa, disparu en 2024, a aussi bâti le grand hôpital Biamba-Marie-Mutombo dans la capitale ?',
      'Which Kinshasa-born NBA Hall of Famer, who passed away in 2024, also built the Biamba Marie Mutombo Hospital in the capital?',
      '¿Qué gigante de la NBA nacido en Kinshasa construyó además el hospital Biamba Marie Mutombo en la capital?',
      'Qual gigante da NBA nascido em Kinshasa também construiu o hospital Biamba Marie Mutombo na capital?',
      'من هو عملاق NBA المولود في كينشاسا الذي أسس أيضاً مستشفى بيامبا ماري موتومبو في العاصمة؟'
    ),
    correct: L('Dikembe Mutombo', 'Dikembe Mutombo', 'Dikembe Mutombo', 'Dikembe Mutombo', 'ديكيمبي موتومبو'),
    distractors: [
      L('Shaquille O’Neal', 'Shaquille O’Neal', 'Shaquille O’Neal', 'Shaquille O’Neal', 'شاكيل أونيل'),
      L('Kareem Abdul-Jabbar', 'Kareem Abdul-Jabbar', 'Kareem Abdul-Jabbar', 'Kareem Abdul-Jabbar', 'كريم عبد الجبار'),
      L('Patrick Ewing', 'Patrick Ewing', 'Patrick Ewing', 'Patrick Ewing', 'باتريك إيوينغ'),
    ],
    explanation: L(
      'Deuxième plus grand contreur de l’histoire de la NBA et ambassadeur humanitaire exemplaire, Dikembe Mutombo finança un hôpital moderne à Masina (Kinshasa).',
      'One of the NBA’s greatest shot-blockers and humanitarians, Dikembe Mutombo funded the landmark hospital named for his mother in Kinshasa.',
      'Uno de los mejores taponadores de la historia de la NBA, Dikembe Mutombo financió un moderno hospital en Kinshasa.',
      'Um dos maiores bloqueadores da história da NBA, Dikembe Mutombo financiou um moderno hospital em Kinshasa.',
      'جمع ديكيمبي موتومبو بين المجد الرياضي في NBA والعمل الإنساني ببناء مستشفى كبير في كينشاسا.'
    ),
  }),
  mkQ({
    id: 'cur_CD_22',
    countryCode: 'CD',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'as_vita_club_1973',
    source: 'CAF — Coupe des Clubs Champions 1973',
    prompt: L(
      'Quel grand club populaire de Kinshasa surnommé les « Dauphins Noirs » a remporté la Coupe d’Afrique des clubs champions en 1973 face à l’Asante Kotoko ?',
      'Which famous Kinshasa club nicknamed the "Black Dolphins" won the 1973 African Cup of Champions Clubs against Asante Kotoko?',
      '¿Qué gran club de Kinshasa apodado los "Delfines Negros" ganó la Copa Africana de Clubes Campeones en 1973?',
      'Que grande clube de Kinshasa apelidado de "Golfinhos Negros" venceu a Copa dos Campeões da África em 1973?',
      'أي نادٍ كبير في كينشاسا يُلقب بـ«الدلافين السوداء» توج ببطولة أفريقيا للأندية الأبطال عام 1973؟'
    ),
    countryModePrompt: L(
      'Quel célèbre club vert et noir de Kinshasa, grand rival du DCMP, souleva la Coupe d’Afrique des clubs champions en décembre 1973 ?',
      'Which famous green-and-black Kinshasa club, fierce rival of DCMP, lifted the African Cup of Champions Clubs in 1973?',
      '¿Qué célebre club verdinegro de Kinshasa levantó la Copa Africana de Clubes Campeones en 1973?',
      'Qual famoso clube alviverde de Kinshasa conquistou a Copa dos Campeões da África em 1973?',
      'أي نادٍ شهير في كينشاسا أحرز بطولة أفريقيا للأندية الأبطال في ديسمبر 1973؟'
    ),
    correct: L('L’AS Vita Club', 'AS Vita Club', 'AS Vita Club', 'AS Vita Club', 'نادي فيتا كلوب'),
    distractors: [
      L('Le FC Saint-Éloi Lupopo', 'FC Lupopo', 'FC Lupopo', 'FC Lupopo', 'سانت إيلوا لوبوبو'),
      L('Le Maniema Union', 'AS Maniema Union', 'Maniema Union', 'Maniema Union', 'مانيما يونيون'),
      L('L’AS Bantous', 'AS Bantous', 'AS Bantous', 'AS Bantous', 'نادي بانتوس'),
    ],
    explanation: L(
      'Porté par Ndaye Mulamba et Jean Kembo, l’AS Vita Club battit l’Asante Kotoko 3-0 au match retour à Kinshasa pour conquérir le titre 1973.',
      'Powered by Ndaye Mulamba, AS Vita Club overturned the first-leg deficit by beating Asante Kotoko 3-0 in Kinshasa in 1973.',
      'Impulsado por Ndaye Mulamba, el AS Vita Club remontó ante el Asante Kotoko con un 3-0 en Kinshasa en 1973.',
      'Com Ndaye Mulamba, o AS Vita Club venceu o Asante Kotoko por 3 a 0 em Kinshasa para faturar o título de 1973.',
      'فاز فيتا كلوب على أشانتي كوتوكو 3-0 في الإياب بكينشاسا ليتوج بلقب 1973.'
    ),
  }),
  mkQ({
    id: 'cur_CD_23',
    countryCode: 'CD',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'bwalya_kakoko_1973',
    source: 'CAF / France Football — Ballon d’Or Africain 1973',
    prompt: L(
      'Quel défenseur congolais d’exception surnommé « le Beckenbauer noir » fut sacré premier Ballon d’Or africain du pays en 1973 ?',
      'Which standout Congolese defender nicknamed "the Black Beckenbauer" became the country’s first African Player of the Year in 1973?',
      '¿Qué excepcional defensor congoleño apodado el "Beckenbauer negro" ganó el primer Balón de Oro africano del país en 1973?',
      'Qual excepcional defensor congolês apelidado de "Beckenbauer negro" venceu a primeira Bola de Ouro africana do país em 1973?',
      'من هو المدافع الكونغولي الاستثنائي الملقب بـ«بيكنباور الأسود» وأول فائز بالكرة الذهبية الأفريقية في بلاده عام 1973؟'
    ),
    countryModePrompt: L(
      'Quel défenseur polyvalent du TP Mazembe surnommé « le Beckenbauer noir » reçut le Ballon d’Or africain en 1973 ?',
      'Which versatile TP Mazembe defender nicknamed "the Black Beckenbauer" won the 1973 African Footballer of the Year trophy?',
      '¿Qué defensor polivalente del TP Mazembe apodado el "Beckenbauer negro" ganó el Balón de Oro africano en 1973?',
      'Qual defensor polivalente do TP Mazembe apelidado de "Beckenbauer negro" conquistou a Bola de Ouro africana em 1973?',
      'من هو مدافع تي بي مازيمبي الملقب بـ«بيكنباور الأسود» الفائز بجائزة أفضل لاعب أفريقي عام 1973؟'
    ),
    correct: L('Tshimimu Bwanga', 'Tshimimu Bwanga', 'Tshimimu Bwanga', 'Tshimimu Bwanga', 'تشيميمو بوانغا'),
    distractors: [
      L('Trésor Mputu', 'Trésor Mputu', 'Trésor Mputu', 'Trésor Mputu', 'تريزور مبوتو'),
      L('Yannick Bolasie', 'Yannick Bolasie', 'Yannick Bolasie', 'Yannick Bolasie', 'يانيك بولاسي'),
      L('Shabani Nonda', 'Shabani Nonda', 'Shabani Nonda', 'Shabani Nonda', 'شعباني نوندا'),
    ],
    explanation: L(
      'Défenseur polyvalent d’exception du TP Mazembe surnommé le « Beckenbauer noir », Tshimimu Bwanga fut sacré Ballon d’Or africain en 1973.',
      'Standout TP Mazembe defender Tshimimu Bwanga, nicknamed "the Black Beckenbauer," won the 1973 African Footballer of the Year award.',
      'Apodado el "Beckenbauer negro", el defensor del TP Mazembe Tshimimu Bwanga ganó el Balón de Oro africano en 1973.',
      'Apelidado de "Beckenbauer negro", o defensor do TP Mazembe Tshimimu Bwanga venceu a Bola de Ouro africana em 1973.',
      'توج مدافع مازيمبي تشيميمو بوانغا الملقب بـ«بيكنباور الأسود» بجائزة أفضل لاعب أفريقي عام 1973.'
    ),
  }),
  mkQ({
    id: 'cur_CD_24',
    countryCode: 'CD',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'kidiaba_dance_celebration',
    source: 'CAF & Coupe du monde des clubs FIFA (2010)',
    prompt: L(
      'Quel gardien de but du TP Mazembe et des Léopards a rendu célèbre dans le monde entier sa danse assise en sautillant après chaque but de son équipe ?',
      'Which TP Mazembe and Leopards goalkeeper became famous worldwide for his seated bouncing goal celebration?',
      '¿Qué portero del TP Mazembe y de los Leopardos hizo famosa en todo el mundo su celebración saltando sentado tras cada gol?',
      'Qual goleiro do TP Mazembe e dos Leopardos ficou famoso no mundo todo por comemorar gols quicando sentado?',
      'من هو حارس مرمى تي بي مازيمبي والمنتخب الذي اشتهر عالمياً برقصة الاحتفال جالساً بعد كل هدف؟'
    ),
    countryModePrompt: L(
      'Quel gardien mythique à la queue de cheval et double vainqueur du CHAN a popularisé la célèbre « danse des fesses » au Mondial des clubs 2010 ?',
      'Which iconic ponytail-wearing goalkeeper and two-time CHAN winner popularized his seated bounce celebration at the 2010 Club World Cup?',
      '¿Qué mítico portero bicampeón del CHAN popularizó su célebre baile sentado en el Mundial de Clubes 2010?',
      'Qual mítico goleiro bicampeão do CHAN popularizou sua dança sentado no Mundial de Clubes de 2010?',
      'من هو الحارس الأسطوري الفائز ببطولتي الشان الذي اشتهر برقصة الاحتفال الشهيرة في مونديال الأندية 2010؟'
    ),
    correct: L('Robert Kidiaba', 'Robert Kidiaba', 'Robert Kidiaba', 'Robert Kidiaba', 'روبرت كيديابا'),
    distractors: [
      L('Vincent Enyeama', 'Vincent Enyeama', 'Vincent Enyeama', 'Vincent Enyeama', 'فينسنت إنياما'),
      L('Essam El-Hadary', 'Essam El-Hadary', 'Essam El-Hadary', 'Essam El-Hadary', 'عصام الحضري'),
      L('Itumeleng Khune', 'Itumeleng Khune', 'Itumeleng Khune', 'Itumeleng Khune', 'إيتوميلينغ خوني'),
    ],
    explanation: L(
      'Élu dans l’équipe type de la CAN 2015 et héros de la demi-finale du Mondial des clubs 2010 contre l’Internacional, Robert Kidiaba a conquis les supporters.',
      'Hero of TP Mazembe’s 2010 Club World Cup upset over Internacional, Robert Kidiaba became an unforgettable cult favorite.',
      'Héroe en el Mundial de Clubes 2010 ante el Internacional, Robert Kidiaba conquistó a la afición mundial.',
      'Herói no Mundial de Clubes de 2010 contra o Internacional, Robert Kidiaba conquistou torcedores no mundo todo.',
      'أبهر روبرت كيديابا جماهير العالم بتصدياته ورقصته الشهيرة في مونديال الأندية 2010.'
    ),
  }),
  mkQ({
    id: 'cur_CD_25',
    countryCode: 'CD',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'mbemba_afcon_2023',
    source: 'CAF — CAN 2023 & FECOFA',
    prompt: L(
      'Quel capitaine et défenseur central des Léopards (également joueur de l’Olympique de Marseille) a reçu le Prix Marc-Vivien Foé en 2023 et mené l’équipe en demi-finale de la CAN 2023 ?',
      'Which Leopards captain and center-back won the 2023 Prix Marc-Vivien Foé and led the squad to the AFCON 2023 semi-finals?',
      '¿Qué capitán y central de los Leopardos ganó el Premio Marc-Vivien Foé 2023 y lideró al equipo hasta semifinales de la CAN 2023?',
      'Qual capitão e zagueiro dos Leopardos venceu o Prêmio Marc-Vivien Foé de 2023 e liderou o time às semifinais da CAN 2023?',
      'من هو قائد وقلب دفاع الفهود الفائز بجائزة مارك فيفيان فوي 2023 والذي قاد المنتخب لنصف نهائي أمم أفريقيا 2023؟'
    ),
    countryModePrompt: L(
      'Quel capitaine emblématique de la défense a remporté le Prix Marc-Vivien Foé 2023 avant d’atteindre le dernier carré de la CAN 2023 ?',
      'Which defensive captain won the 2023 Prix Marc-Vivien Foé before reaching the AFCON 2023 semi-finals?',
      '¿Qué capitán defensivo ganó el Premio Marc-Vivien Foé 2023 antes de llegar a semifinales de la CAN 2023?',
      'Qual capitão defensivo venceu o Prêmio Marc-Vivien Foé 2023 antes das semifinais da CAN 2023?',
      'من هو القائد المدافع الفائز بجائزة مارك فيفيان فوي 2023 قبل بلوغ نصف نهائي أمم أفريقيا 2023؟'
    ),
    correct: L('Chancel Mbemba', 'Chancel Mbemba', 'Chancel Mbemba', 'Chancel Mbemba', 'شانسيل مبيمبا'),
    distractors: [
      L('Cédric Bakambu', 'Cédric Bakambu', 'Cédric Bakambu', 'Cédric Bakambu', 'سيدريك باكامبو'),
      L('Yoane Wissa', 'Yoane Wissa', 'Yoane Wissa', 'Yoane Wissa', 'يوان ويسا'),
      L('Gaël Kakuta', 'Gaël Kakuta', 'Gaël Kakuta', 'Gaël Kakuta', 'غايل كاكوتا'),
    ],
    explanation: L(
      'Recordman du nombre de sélections avec les Léopards, Chancel Mbemba a marqué contre la Guinée en quart de finale de la CAN 2023.',
      'The Leopards’ all-time appearance leader, Chancel Mbemba scored in the 2023 AFCON quarter-final win over Guinea.',
      'Líder histórico en internacionalidades, Chancel Mbemba marcó en cuartos de final de la CAN 2023 ante Guinea.',
      'Recordista de jogos pelos Leopardos, Chancel Mbemba marcou nas quartas de final da CAN 2023 contra a Guiné.',
      'يُعد شانسيل مبيمبا أكثر لاعبي الفهود مشاركةً وسجل هدفاً مهماً في ربع نهائي 2023.'
    ),
  }),
  mkQ({
    id: 'cur_CD_26',
    countryCode: 'CD',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'nine_neighbors_drc',
    source: 'Géographie frontalière d’Afrique centrale',
    prompt: L(
      'Avec combien d’États souverains la RD Congo (deuxième plus vaste pays d’Afrique) partage-t-elle des frontières terrestres ?',
      'How many sovereign nations share a land border with the Democratic Republic of the Congo (Africa’s second-largest country)?',
      '¿Con cuántos Estados soberanos comparte frontera terrestre la República Democrática del Congo?',
      'Com quantos Estados soberanos a República Democrática do Congo faz fronteira terrestre?',
      'مع كم دولة ذات سيادة تشترك جمهورية الكونغو الديمقراطية في حدود برية؟'
    ),
    countryModePrompt: L(
      'Combien de pays frontaliers entourent cet immense territoire situé au cœur du continent africain ?',
      'How many bordering countries surround this vast nation at the geographic heart of Africa?',
      '¿Cuántos países limítrofes rodean este inmenso territorio en el corazón de África?',
      'Quantos países fronteiriços cercam este imenso território no coração da África?',
      'كم دولة مجاورة تحيط بهذا البلد الشاسع في قلب القارة الأفريقية؟'
    ),
    correct: L('9 pays', '9 countries', '9 países', '9 países', '9 دول'),
    distractors: [
      L('2 pays', '2 countries', '2 países', '2 países', 'دولتان'),
      L('4 pays', '4 countries', '4 países', '4 países', '4 دول'),
      L('15 pays', '15 countries', '15 países', '15 países', '15 دولة'),
    ],
    explanation: L(
      'Ses 9 voisins sont : Angola, République du Congo, RCA, Soudan du Sud, Ouganda, Rwanda, Burundi, Tanzanie et Zambie !',
      'Its nine neighbors are Angola, Republic of the Congo, CAR, South Sudan, Uganda, Rwanda, Burundi, Tanzania, and Zambia.',
      'Sus 9 vecinos son Angola, Rep. del Congo, RCA, Sudán del Sur, Uganda, Ruanda, Burundi, Tanzania y Zambia.',
      'Seus 9 vizinhos são Angola, Rep. do Congo, RCA, Sudão do Sul, Uganda, Ruanda, Burundi, Tanzânia e Zâmbia.',
      'تجاوره تسع دول أفريقية من كافة الجهات.'
    ),
  }),
  mkQ({
    id: 'cur_CD_27',
    countryCode: 'CD',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 3,
    topicKey: 'mbuji_mayi_diamonds',
    source: 'Géographie minière — Kasaï-Oriental',
    prompt: L(
      'Quelle grande ville du Kasaï-Oriental est historiquement célèbre comme la « capitale du diamant » de la RD Congo ?',
      'Which major city in Kasaï-Oriental is historically famous as DR Congo’s "Diamond Capital"?',
      '¿Qué gran ciudad de Kasai Oriental es famosa históricamente como la "capital del diamante" de la RD del Congo?',
      'Que grande cidade do Kasai Oriental é historicamente famosa como a "capital do diamante" da RD Congo?',
      'ما المدينة الكبرى في إقليم كاساي الشرقي الملقبة تاريخياً بـ«عاصمة الألماس»؟'
    ),
    countryModePrompt: L(
      'Quelle grande agglomération du Kasaï-Oriental doit son essor fulgurant au XXe siècle aux immenses gisements de diamants de la Bakwanga (MIBA) ?',
      'Which major Kasaï-Oriental city grew rapidly in the 20th century around the vast diamond deposits of MIBA?',
      '¿Qué gran ciudad de Kasai Oriental creció en torno a los inmensos yacimientos de diamantes de la MIBA?',
      'Qual grande cidade do Kasai Oriental cresceu em torno das imensas jazidas de diamantes da MIBA?',
      'ما المدينة الكبرى في كاساي الشرقي التي ازدهرت حول مناجم الألماس الشهيرة؟'
    ),
    correct: L('Mbuji-Mayi', 'Mbuji-Mayi', 'Mbuji-Mayi', 'Mbuji-Mayi', 'مبوجي مايي'),
    distractors: [
      L('Mbandaka', 'Mbandaka', 'Mbandaka', 'Mbandaka', 'مبانداكا'),
      L('Matadi', 'Matadi', 'Matadi', 'Matadi', 'ماتادي'),
      L('Bukavu', 'Bukavu', 'Bukavu', 'Bukavu', 'بوكافو'),
    ],
    explanation: L(
      'Troisième ville la plus peuplée du pays après Kinshasa et Lubumbashi, Mbuji-Mayi (« eau de chèvre » en tshiluba) est un centre majeur du diamant industriel.',
      'The country’s third-largest city after Kinshasa and Lubumbashi, Mbuji-Mayi has long been a major global source of industrial diamonds.',
      'Tercera ciudad más poblada del país, Mbuji-Mayi es un centro histórico del diamante industrial.',
      'Terceira cidade mais populosa do país, Mbuji-Mayi é um centro histórico do diamante industrial.',
      'تُعد مبوجي مايي ثالث أكبر مدن البلاد ومركزاً عالمياً تاريخياً لإنتاج الألماس الصناعي.'
    ),
  }),
  mkQ({
    id: 'cur_CD_28',
    countryCode: 'CD',
    category: 'history',
    subCategory: 'sciences_innovations',
    difficulty: 3,
    topicKey: 'mukwege_nobel_2018',
    source: 'Comité Nobel — Prix Nobel de la paix 2018',
    prompt: L(
      'Quel chirurgien et gynécologue congolais fondateur de l’hôpital de Panzi à Bukavu a reçu le Prix Nobel de la paix en 2018 ?',
      'Which Congolese gynecologist and surgeon, founder of Panzi Hospital in Bukavu, received the 2018 Nobel Peace Prize?',
      '¿Qué cirujano y ginecólogo congoleño, fundador del hospital de Panzi en Bukavu, recibió el Premio Nobel de la Paz en 2018?',
      'Que cirurgião e ginecologista congolês, fundador do hospital de Panzi em Bukavu, recebeu o Prêmio Nobel da Paz em 2018?',
      'من هو الجراح وطبيب النساء الكونغولي مؤسس مستشفى بانزي في بوكافو والحائز على جائزة نوبل للسلام عام 2018؟'
    ),
    countryModePrompt: L(
      'Quel médecin surnommé « l’homme qui répare les femmes » à l’hôpital de Panzi (Bukavu) fut couronné du Prix Nobel de la paix en 2018 ?',
      'Which surgeon—known for founding Panzi Hospital in Bukavu—won the 2018 Nobel Peace Prize for aiding survivors of wartime violence?',
      '¿Qué médico del hospital de Panzi en Bukavu ganó el Premio Nobel de la Paz en 2018?',
      'Qual médico do hospital de Panzi em Bukavu conquistou o Prêmio Nobel da Paz em 2018?',
      'من هو الطبيب مؤسس مستشفى بانزي في بوكافو الفائز بجائزة نوبل للسلام عام 2018؟'
    ),
    correct: L('Le Dr Denis Mukwege', 'Dr. Denis Mukwege', 'Dr. Denis Mukwege', 'Dr. Denis Mukwege', 'الدكتور دينيس موكويغي'),
    distractors: [
      L('Le Dr Jean-Jacques Muyembe', 'Dr. Jean-Jacques Muyembe', 'Dr. Jean-Jacques Muyembe', 'Dr. Jean-Jacques Muyembe', 'د. جان جاك مويمبي'),
      L('Le Dr Albert Schweitzer', 'Dr. Albert Schweitzer', 'Dr. Albert Schweitzer', 'Dr. Albert Schweitzer', 'د. ألبرت شفايتزر'),
      L('Le Dr Tedros Adhanom', 'Dr. Tedros Adhanom', 'Dr. Tedros Adhanom', 'Dr. Tedros Adhanom', 'د. تيدروس أدهانوم'),
    ],
    explanation: L(
      'Co-lauréat du Nobel de la paix 2018 avec Nadia Murad, le Dr Denis Mukwege soigne et défend inlassablement la dignité des femmes au Sud-Kivu.',
      'Sharing the 2018 Nobel Peace Prize with Nadia Murad, Dr. Denis Mukwege has treated tens of thousands of survivors at Panzi Hospital.',
      'Galardonado junto a Nadia Murad en 2018, el Dr. Mukwege atiende incansablemente a supervivientes en Bukavu.',
      'Premiado ao lado de Nadia Murad em 2018, o Dr. Mukwege dedica sua vida às pacientes de Panzi.',
      'تُوج الدكتور دينيس موكويغي بنوبل للسلام 2018 تقديراً لجهوده الإنسانية والطبية في بوكافو.'
    ),
  }),
  mkQ({
    id: 'cur_CD_29',
    countryCode: 'CD',
    category: 'history',
    subCategory: 'sciences_innovations',
    difficulty: 4,
    topicKey: 'muyembe_ebola_pioneer',
    source: 'INRB Kinshasa & OMS — Découverte d’Ebola (1976)',
    prompt: L(
      'Quel célèbre virologue congolais co-découvrit le virus Ebola en 1976 à Yambuku et dirigea ensuite l’Institut National de Recherche Biomédicale (INRB) à Kinshasa ?',
      'Which renowned Congolese virologist co-discovered the Ebola virus in 1976 at Yambuku and later led the National Institute of Biomedical Research (INRB) in Kinshasa?',
      '¿Qué célebre virólogo congoleño codescubrió el virus del Ébola en 1976 y dirigió el INRB en Kinshasa?',
      'Que célebre virologista congolês codescobriu o vírus Ebola em 1976 e dirigiu o INRB em Kinshasa?',
      'من هو عالم الفيروسات الكونغولي البارز الذي شارك في اكتشاف فيروس إيبولا عام 1976 وقاد المعهد الوطني للأبحاث الطبية الحيوية؟'
    ),
    countryModePrompt: L(
      'Quel microbiologiste pionnier a identifié les premiers foyers du virus Ebola en 1976 et développé l’un des premiers traitements par anticorps monoclonaux ?',
      'Which pioneering microbiologist investigated the first Ebola outbreak in 1976 and helped pioneer the mAb114 antibody therapy?',
      '¿Qué microbiólogo pionero investigó el primer brote de Ébola en 1976 y contribuyó a su tratamiento?',
      'Qual microbiologista pioneiro investigou o primeiro surto de Ebola em 1976 e desenvolveu terapia contra a doença?',
      'من هو عالم الأحياء الدقيقة الرائد الذي شارك في اكتشاف الإيبولا عام 1976 وأسهم في تطوير علاجه بالأجسام المضادة؟'
    ),
    correct: L('Le Prof. Jean-Jacques Muyembe-Tamfum', 'Prof. Jean-Jacques Muyembe-Tamfum', 'Prof. Jean-Jacques Muyembe', 'Prof. Jean-Jacques Muyembe', 'البروفيسور جان جاك مويمبي'),
    distractors: [
      L('Le Prof. Cheikh Anta Diop', 'Prof. Cheikh Anta Diop', 'Prof. Cheikh Anta Diop', 'Prof. Cheikh Anta Diop', 'البروفيسور شيخ أنتا ديوب'),
      L('Le Prof. Joseph Ki-Zerbo', 'Prof. Joseph Ki-Zerbo', 'Prof. Joseph Ki-Zerbo', 'Prof. Joseph Ki-Zerbo', 'البروفيسور جوزيف كي زيربو'),
      L('Le Prof. Wangari Maathai', 'Wangari Maathai', 'Wangari Maathai', 'Wangari Maathai', 'وانغاري ماثاي'),
    ],
    explanation: L(
      'Cité par Time Magazine parmi les 100 personnalités les plus influentes en 2020, le Prof. Muyembe a mis au point le traitement mAb114 (Ebanga) contre Ebola.',
      'Named among Time’s 100 Most Influential People in 2020, Prof. Muyembe pioneered the life-saving mAb114 (Ebanga) Ebola treatment.',
      'Incluido entre las 100 personas más influyentes de Time en 2020, el Prof. Muyembe impulsó la terapia Ebanga.',
      'Citado entre as 100 pessoas mais influentes da Time em 2020, o Prof. Muyembe foi decisivo no combate ao Ebola.',
      'صُنّف البروفيسور مويمبي ضمن أكثر 100 شخصية تأثيراً في العالم عام 2020 لدوره الحاسم في مكافحة الإيبولا.'
    ),
  }),
  mkQ({
    id: 'cur_CD_30',
    countryCode: 'CD',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 3,
    topicKey: 'matadi_bridge_kongocentral',
    source: 'Infrastructures du Kongo-Central (1983)',
    prompt: L(
      'Quel grand pont suspendu de 722 mètres enjambe le fleuve Congo près de son embouchure depuis 1983 ?',
      'Which 722-meter suspension bridge has spanned the Congo River near Matadi since 1983?',
      '¿Qué gran puente colgante de 722 metros cruza el río Congo cerca de Matadi desde 1983?',
      'Qual grande ponte pênsil de 722 metros cruza o rio Congo perto de Matadi desde 1983?',
      'ما الجسر المعلق الكبير البالغ طوله 722 متراً الذي يعبر نهر الكونغو قرب ماتادي منذ عام 1983؟'
    ),
    countryModePrompt: L(
      'Quel spectaculaire pont suspendu reliant les deux rives du bas fleuve à Matadi ouvre la route vers Boma et le littoral atlantique ?',
      'Which dramatic suspension bridge crossing the Lower Congo at Matadi opens the road west toward Boma and the Atlantic?',
      '¿Qué espectacular puente colgante en Matadi une ambas orillas del bajo río Congo rumbo al Atlántico?',
      'Qual espetacular ponte pênsil em Matadi liga as duas margens do baixo rio Congo rumo ao Atlântico?',
      'ما الجسر المعلق المهيب في ماتادي الذي يربط ضفتي النهر باتجاه بوما والساحل الأطلسي؟'
    ),
    correct: L('Le Pont Matadi (Pont Maréchal)', 'Matadi Bridge (Marshal Bridge)', 'El Puente de Matadi', 'A Ponte de Matadi', 'جسر ماتادي المعلق'),
    distractors: [
      L('Le Pont du Gard', 'Pont du Gard', 'Puente del Gard', 'Pont du Gard', 'جسر غار'),
      L('Le Pont du 25-Avril', '25 de Abril Bridge', 'Puente 25 de Abril', 'Ponte 25 de Abril', 'جسر 25 أبريل'),
      L('Le Pont de Katima Mulilo', 'Katima Mulilo Bridge', 'Puente de Katima Mulilo', 'Ponte de Katima Mulilo', 'جسر كاتيما موليلو'),
    ],
    explanation: L(
      'Long d’une travée centrale de 520 m pour 722 m au total, le pont suspendu de Matadi demeure le seul pont routier traversant le bas fleuve Congo.',
      'With a 520m main span, Matadi Bridge remains the sole road bridge crossing the mighty Lower Congo River.',
      'Con un vano principal de 520 m, el puente de Matadi sigue siendo el único puente carretero del bajo Congo.',
      'Com vão central de 520 m, a Ponte de Matadi segue sendo a única ponte rodoviária sobre o baixo Congo.',
      'يُعد جسر ماتادي الجسر البري الوحيد الذي يعبر المجرى الأسفل لنهر الكونغو.'
    ),
  }),
];

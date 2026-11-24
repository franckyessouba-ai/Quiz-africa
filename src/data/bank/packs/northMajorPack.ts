import { L } from '../../countriesPart1';
import { mkQ } from './packHelpers';

export const NORTH_MAJOR_CURATED_PACK = [
  // MA — Maroc (18 Qs)
  mkQ({
    id: 'cur_MA_01',
    countryCode: 'MA',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 2,
    topicKey: 'independance_2_mars_1956',
    source: 'Archives du Royaume — Déclaration franco-marocaine (1956)',
    prompt: L(
      'À quelle date précise la déclaration commune franco-marocaine de 1956 a-t-elle officiellement mis fin au protectorat français et reconnu l’indépendance du Maroc ?',
      'On what exact date in 1956 did the Franco-Moroccan declaration formally end the French protectorate and recognize Morocco’s independence?',
      '¿En qué fecha exacta de 1956 puso fin al protectorado francés la declaración que reconoció la independencia de Marruecos?',
      'Em que data exata de 1956 a declaração conjunta encerrou o protetorado francês reconhecendo a independência do Marrocos?',
      'في أي تاريخ من عام 1956 أنهى الإعلان المشترك الحماية الفرنسية واعترف باستقلال المغرب؟'
    ),
    countryModePrompt: L(
      'À quelle date de l’année 1956 fut signée la déclaration commune mettant officiellement fin au protectorat français et reconnaissant la pleine souveraineté ?',
      'On what exact date in 1956 was the joint declaration signed formally ending the French protectorate and recognizing full sovereignty?',
      '¿En qué fecha exacta de 1956 se firmó la declaración conjunta que puso fin al protectorado francés?',
      'Em que data exata de 1956 foi assinada a declaração que encerrou o protetorado francês e reconheceu a soberania?',
      'في أي تاريخ من عام 1956 وُقّع الإعلان المشترك الذي أنهى الحماية الفرنسية وأقر بالسيادة الكاملة؟'
    ),
    correct: L('Le 2 mars 1956', 'March 2, 1956', '2 de marzo de 1956', '2 de março de 1956', '2 مارس 1956'),
    distractors: [
      L('Le 18 novembre 1955', 'November 18, 1955', '18 de noviembre de 1955', '18 de novembro de 1955', '18 نوفمبر 1955'),
      L('Le 7 avril 1956', 'April 7, 1956', '7 de abril de 1956', '7 de abril de 1956', '7 أبريل 1956'),
      L('Le 14 août 1957', 'August 14, 1957', '14 de agosto de 1957', '14 de agosto de 1957', '14 أغسطس 1957'),
    ],
    explanation: L(
      'Signée le 2 mars 1956 après le retour d’exil du sultan Mohammed V en novembre 1955, cette déclaration fut suivie le 7 avril 1956 de l’accord hispano-marocain.',
      'Signed on March 2, 1956 following Sultan Mohammed V’s return from exile in November 1955, it was followed on April 7 by the Spanish treaty.',
      'Firmada el 2 de marzo de 1956 tras el regreso del sultán Mohamed V, siguió luego el acuerdo con España el 7 de abril.',
      'Assinada em 2 de março de 1956 após o retorno de Mohamed V do exílio, seguiu-se o acordo com a Espanha em 7 de abril.',
      'تلا عودة السلطان محمد الخامس من المنفى توقيع إعلان 2 مارس 1956 ثم اتفاقية 7 أبريل مع إسبانيا.'
    ),
  }),
  mkQ({
    id: 'cur_MA_02',
    countryCode: 'MA',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 2,
    topicKey: 'sultan_mohammed_v_exil_madagascar',
    source: 'Histoire contemporaine du Maghreb',
    prompt: L(
      'Sur quelle grande île de l’océan Indien le sultan Mohammed ben Youssef (futur roi Mohammed V) fut-il exilé par les autorités coloniales en 1954 avant son retour triomphal en 1955 ?',
      'To which large Indian Ocean island was Sultan Mohammed Ben Youssef (later King Mohammed V) exiled in 1954 before his triumphant return in 1955?',
      '¿A qué gran isla del océano Índico fue exiliado el sultán Mohamed ben Youssef en 1954 antes de su regreso en 1955?',
      'Para qual grande ilha do oceano Índico foi exilado o sultão Mohamed ben Youssef em 1954 antes de retornar em 1955?',
      'إلى أي جزيرة كبرى في المحيط الهندي نُفي السلطان محمد بن يوسف (الملك محمد الخامس) عام 1954 قبل عودته المظفرة عام 1955؟'
    ),
    countryModePrompt: L(
      'Sur quelle grande île de l’océan Indien le sultan Mohammed V (Mohammed ben Youssef) fut-il déporté avec sa famille à Antsirabe avant son retour triomphal en novembre 1955 ?',
      'To which major Indian Ocean island—specifically the spa town of Antsirabe—was Sultan Mohammed V exiled before returning in November 1955?',
      '¿A qué gran isla del océano Índico, concretamente a Antsirabe, fue deportado el sultán Mohamed V antes de volver en 1955?',
      'Para qual grande ilha do oceano Índico, na cidade de Antsirabe, foi deportado o sultão Mohamed V antes de voltar em 1955?',
      'إلى أي جزيرة كبرى في المحيط الهندي نُفي السلطان محمد الخامس (تحديداً إلى أنتسيرابي) قبل عودته في نوفمبر 1955؟'
    ),
    correct: L('Madagascar', 'Madagascar', 'Madagascar', 'Madagascar', 'مدغشقر'),
    distractors: [
      L('La Réunion', 'Réunion', 'Reunión', 'Reunião', 'ريونيون'),
      L('Les Comores', 'Comoros', 'Comoras', 'Comores', 'جزر القمر'),
      L('Zanzibar', 'Zanzibar', 'Zanzíbar', 'Zanzibar', 'زنجبار'),
    ],
    explanation: L(
      'D’abord envoyé en Corse en août 1953 puis à Antsirabe (Madagascar), le sultan Mohammed V revint acclamé à Rabat le 16 novembre 1955, prélude à l’indépendance.',
      'First flown to Corsica in 1953 and then held in Antsirabe, Madagascar, Sultan Mohammed V returned to huge crowds in Rabat on November 16, 1955.',
      'Trasladado primero a Córcega y luego a Antsirabe en Madagascar, el sultán regresó triunfante a Rabat en noviembre de 1955.',
      'Levado inicialmente à Córsega e depois a Antsirabe em Madagascar, o sultão retornou triunfante a Rabat em novembro de 1955.',
      'نُقل السلطان محمد الخامس أولاً إلى كورسيكا ثم إلى أنتسيرابي بمدغشقر قبل عودته المهيبة إلى الرباط في نوفمبر 1955.'
    ),
  }),
  mkQ({
    id: 'cur_MA_03',
    countryCode: 'MA',
    category: 'history',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'ksar_ait_ben_haddou_unesco',
    source: 'UNESCO — Liste du patrimoine mondial (1987)',
    prompt: L(
      'Quel célèbre village fortifié en terre crue (« ksar ») de la province d’Ouarzazate au Maroc, classé à l’UNESCO, a servi de décor à des films comme « Lawrence d’Arabie » et « Gladiator » ?',
      'Which famous UNESCO-listed mud-brick fortified village ("ksar") near Ouarzazate in Morocco served as a filming location for "Lawrence of Arabia" and "Gladiator"?',
      '¿Qué célebre poblado fortificado de adobe ("ksar") cerca de Uarzazat en Marruecos fue escenario de "Lawrence de Arabia" y "Gladiator"?',
      'Qual célebre aldeia fortificada de barro ("ksar") perto de Uarzazate no Marrocos foi cenário de "Lawrence da Arábia" e "Gladiador"?',
      'ما اسم القصر الطيني المحصن الشهير قرب ورزازات بالمغرب والمدرج في اليونسكو والذي صُورت فيه أفلام عالمية مثل غلادياتور؟'
    ),
    countryModePrompt: L(
      'Quel ksar spectaculaire en pisé sur la route caravanière du Draâ près d’Ouarzazate, inscrit à l’UNESCO en 1987, est mondialement célèbre au cinéma ?',
      'Which dramatic earthen ksar along the Draâ caravan route near Ouarzazate earned UNESCO status in 1987 and worldwide cinema fame?',
      '¿Qué espectacular alcázar de adobe en la ruta caravanera del Draa, cerca de Uarzazat, ingresó en la UNESCO en 1987?',
      'Qual espetacular ksar de barro na rota do Draâ perto de Uarzazate entrou para a UNESCO em 1987 e brilhou no cinema?',
      'أي قصر طيني عريق على طريق القوافل قرب ورزازات أُدرج في اليونسكو عام 1987 واشتهر عالمياً في السينما؟'
    ),
    correct: L('Aït-Ben-Haddou', 'Aït-Ben-Haddou', 'Ait Ben Hadu', 'Aït-Ben-Haddou', 'قصر آيت بن حدو'),
    distractors: [
      L('Chefchaouen', 'Chefchaouen', 'Chauen', 'Chefchaouen', 'شفشاون'),
      L('Taza', 'Taza', 'Taza', 'Taza', 'تازة'),
      L('Azemmour', 'Azemmour', 'Azemmur', 'Azemmour', 'أزمور'),
    ],
    explanation: L(
      'Étagé sur le flanc d’une colline au bord de l’oued Ounila, le ksar d’Aït-Ben-Haddou rassemble kasbahs à tours d’angle et greniers collectifs en architecture présaharienne.',
      'Rising along a hillside above the Ounila river valley, Ksar of Ait-Ben-Haddou preserves classic earthen tower houses and communal granaries.',
      'Alzado sobre la ladera junto al valle del Ounila, Ait Ben Hadu conserva torres de adobe y graneros fortificados.',
      'Erguido na encosta do vale do Ounila, Aït-Ben-Haddou preserva casas-torre de barro e celeiros coletivos.',
      'يتربع قصر آيت بن حدو على تلة بوادي أونيلا ليحفظ نموذجاً فريداً للعمارة الطينية ما قبل الصحراوية.'
    ),
  }),
  mkQ({
    id: 'cur_MA_04',
    countryCode: 'MA',
    category: 'history',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'volubilis_cité_romaine_unesco',
    source: 'UNESCO — Site archéologique de Volubilis',
    prompt: L(
      'Quel grand site archéologique romain près de Meknès, célèbre pour ses arcs de triomphe et ses mosaïques parfaitement conservées, fut la capitale de la Maurétanie tingitane ?',
      'Which major Roman archaeological site near Meknès, famed for its triumphal arches and well-preserved mosaics, served as capital of Mauretania Tingitana?',
      '¿Qué gran yacimiento romano cerca de Mequinez, célebre por sus mosaicos y arcos triunfales, fue capital de Mauritania Tingitana?',
      'Qual grande sítio romano perto de Meknès, famoso pelos mosaicos preservados e arcos triunfais, foi capital da Mauritânia Tingitana?',
      'أي موقع أثري روماني شهير قرب مكناس يشتهر بفسيفسائه وأقواسه وكان عاصمة لموريطانيا الطنجية؟'
    ),
    countryModePrompt: L(
      'Comment s’appelle la célèbre cité antique romaine située près de Meknès et Moulay Idriss Zerhoun, classée au patrimoine mondial de l’UNESCO ?',
      'What is the name of the famous ancient Roman city located near Meknès and Moulay Idriss Zerhoun, a UNESCO World Heritage site?',
      '¿Cómo se llama la famosa ciudad romana antigua situada cerca de Mequinez y Mulay Idrís, Patrimonio de la UNESCO?',
      'Como se chama a famosa cidade romana antiga perto de Meknès e Moulay Idriss, Patrimônio da UNESCO?',
      'ما اسم المدينة الأثرية الرومانية الشهيرة قرب مكناس ومولاي إدريس زرهون والمدرجة لدى اليونسكو؟'
    ),
    correct: L('Volubilis (Oualili)', 'Volubilis', 'Volubilis', 'Volubilis', 'وليلي (فولوبيليس)'),
    distractors: [
      L('Carthage', 'Carthage', 'Cartago', 'Cartago', 'قرطاج'),
      L('Leptis Magna', 'Leptis Magna', 'Leptis Magna', 'Leptis Magna', 'لبدة الكبرى'),
      L('Timgad', 'Timgad', 'Timgad', 'Timgad', 'تيمقاد'),
    ],
    explanation: L(
      'Prospère grâce à l’huile d’olive et au blé dès l’époque maurétanienne puis romaine, Volubilis (Oualili) accueillit plus tard Idris Ier, fondateur de la dynastie idrisside.',
      'Prospering on olive oil and grain in antiquity, Volubilis (Walili) later welcomed Idris I, founder of the Idrisid dynasty.',
      'Próspera por su aceite de oliva en época romana, Volubilis acogió más tarde a Idrís I.',
      'Próspera pelo azeite na Antiguidade, Volubilis acolheu séculos depois Idrís I, fundador dos idríssidas.',
      'ازدهرت مدينة وليلي قديماً بإنتاج زيت الزيتون واحتضنت لاحقاً المولى إدريس الأول مؤسس دولة الأدارسة.'
    ),
  }),
  mkQ({
    id: 'cur_MA_05',
    countryCode: 'MA',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'fatima_mernissi_sociologue_fes',
    source: 'Littérature & Sociologie — Fès',
    prompt: L(
      'Quelle célèbre sociologue et écrivaine née à Fès, auteure de « Rêves de femmes : une enfance au harem » et lauréate du Prix Prince des Asturies en 2003, est une figure majeure de la pensée méditerranéenne ?',
      'Which renowned Fez-born sociologist and writer, author of "Dreams of Trespass" and 2003 Prince of Asturias Award laureate, shaped modern Mediterranean thought?',
      '¿Qué célebre socióloga y escritora nacida en Fez, autora de "Sueños en el umbral" y Premio Príncipe de Asturias 2003, destacó en el pensamiento contemporáneo?',
      'Qual célebre socióloga e escritora nascida em Fez, autora de "Sonhos de Transgressão" e Prêmio Príncipe das Astúrias 2003, marcou o pensamento moderno?',
      'أي عالمة اجتماع وكاتبة شهيرة ولدت في فاس وألّفت كتاب "أحلام النساء" وفازت بجائزة أمير أستورياس عام 2003؟'
    ),
    countryModePrompt: L(
      'Quelle sociologue et autrice native de Fès, mondialement lue pour « Rêves de femmes » et lauréate du Prix Prince des Asturies des Lettres 2003, a analysé l’histoire des femmes dans le monde arabo-musulman ?',
      'Which Fez-born sociologist and author of "Dreams of Trespass" won the 2003 Prince of Asturias Award for Literature for her studies of women in society?',
      '¿Qué socióloga y escritora nacida en Fez recibió el Premio Príncipe de Asturias de las Letras 2003 y escribió "Sueños en el umbral"?',
      'Qual socióloga e escritora nascida em Fez recebeu o Prêmio Príncipe das Astúrias de Letras 2003 após escrever "Sonhos de Transgressão"?',
      'أي باحثة وأديبة من مواليد فاس حازت جائزة أمير أستورياس للآداب عام 2003 وكتبت "أحلام النساء"؟'
    ),
    correct: L('Fatima Mernissi', 'Fatima Mernissi', 'Fatema Mernissi', 'Fatima Mernissi', 'فاطمة المرنيسي'),
    distractors: [
      L('Assia Djebar', 'Assia Djebar', 'Assia Djebar', 'Assia Djebar', 'آسيا جبار'),
      L('Nawal El Saadawi', 'Nawal El Saadawi', 'Nawal El Saadawi', 'Nawal El Saadawi', 'نوال السعداوي'),
      L('Leïla Slimani', 'Leïla Slimani', 'Leïla Slimani', 'Leïla Slimani', 'ليلى سليماني'),
    ],
    explanation: L(
      'Traduit en plus de trente langues, l’œuvre de Fatima Mernissi mêle sociologie rigoureuse, mémoire familiale à Fès et dialogue universel sur les droits et la citoyenneté.',
      'Translated into over 30 languages, Fatima Mernissi’s writings blended sociological scholarship with vivid memories of growing up in Fez.',
      'Traducida a más de treinta idiomas, la obra de Fatema Mernissi unió rigor sociológico y memoria de su infancia en Fez.',
      'Traduzida para mais de trinta idiomas, a obra de Fatima Mernissi uniu rigor sociológico e memórias de infância em Fez.',
      'تُرجمت أعمال فاطمة المرنيسي لأكثر من ثلاثين لغة وجمعت بين البحث الاجتماعي والذاكرة الثقافية في مدينة فاس.'
    ),
  }),
  mkQ({
    id: 'cur_MA_06',
    countryCode: 'MA',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 1,
    topicKey: 'jbel_toubkal_haut_atlas_4167m',
    source: 'Géographie physique — Haut Atlas',
    prompt: L(
      'Quel sommet du Haut Atlas culminant à 4 167 mètres est à la fois le point le plus élevé du Maroc et de toute l’Afrique du Nord ?',
      'Which High Atlas summit rising to 4,167 metres is the highest peak in both Morocco and all of North Africa?',
      '¿Qué cumbre del Alto Atlas de 4.167 metros es la cima más alta de Marruecos y de todo el norte de África?',
      'Qual pico do Alto Atlas com 4.167 metros é o ponto mais alto do Marrocos e de todo o Norte da África?',
      'أي قمة في جبال الأطلس الكبير يبلغ ارتفاعها 4167 متراً وتُعد الأعلى في المغرب وشمال إفريقيا بأسره؟'
    ),
    countryModePrompt: L(
      'Quel sommet du Haut Atlas culminant à 4 167 mètres près d’Imlil constitue le point culminant du territoire et de tout le Maghreb ?',
      'Which High Atlas peak near Imlil rises to 4,167 metres as the highest summit of both the country and the entire Maghreb?',
      '¿Qué cumbre del Alto Atlas de 4.167 metros cercana a Imlil es el techo del país y de todo el Magreb?',
      'Qual cume do Alto Atlas com 4.167 metros perto de Imlil é o ponto mais alto do país e do Magrebe?',
      'ما اسم القمة الجبلية البالغ ارتفاعها 4167 متراً في الأطلس الكبير قرب إمليل والتي تُعد الأعلى في المغرب العربي؟'
    ),
    correct: L('Le Jbel Toubkal', 'Mount Toubkal', 'Jbel Toubkal', 'Monte Toubkal', 'جبل توبقال'),
    distractors: [
      L('Le Jbel Ayachi', 'Mount Ayachi', 'Jbel Ayachi', 'Monte Ayachi', 'جبل العياشي'),
      L('Le M’Goun', 'Mount M’Goun', 'Monte M’Goun', 'Monte M’Goun', 'جبل مكون'),
      L('Le Tahat', 'Mount Tahat', 'Monte Tahat', 'Monte Tahat', 'جبل تاهات'),
    ],
    explanation: L(
      'À une soixantaine de kilomètres au sud de Marrakech, le parc national du Toubkal offre des cimes enneigées jusqu’au printemps dominant les vallées amazighes.',
      'Roughly 60 km south of Marrakech, snow-dusted Mount Toubkal towers over Amazigh mountain villages and alpine valleys.',
      'A unos 60 km al sur de Marrakech, el Jbel Toubkal corona con nieves invernales los valles amazighes del Alto Atlas.',
      'A cerca de 60 km ao sul de Marrakech, o Jbel Toubkal domina os vales berberes com picos nevados no inverno.',
      'يرتفع جبل توبقال جنوب مراكش ليشرف بقممه المغطاة بالثلوج على القرى الأمازيغية في الأطلس الكبير.'
    ),
  }),
  mkQ({
    id: 'cur_MA_07',
    countryCode: 'MA',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 1,
    topicKey: 'mosquee_hassan_ii_casablanca',
    source: 'Architecture contemporaine — Casablanca (1993)',
    prompt: L(
      'Construite en partie sur l’océan Atlantique à Casablanca avec un minaret de 210 mètres, quelle mosquée inaugurée en 1993 possède l’un des plus hauts minarets du monde ?',
      'Built partly over the Atlantic Ocean in Casablanca with a 210-metre minaret, which mosque inaugurated in 1993 features one of the tallest minarets on Earth?',
      'Construida en parte sobre el Atlántico en Casablanca con un minarete de 210 metros, ¿qué mezquita inaugurada en 1993 es un icono arquitectónico?',
      'Construída em parte sobre o Atlântico em Casablanca com minarete de 210 metros, qual mesquita inaugurada em 1993 destaca-se mundialmente?',
      'أي مسجد في الدار البيضاء شُيد جزء منه فوق مياه الأطلسي بمئذنة ارتفاعها 210 أمتار وافتُتح عام 1993؟'
    ),
    countryModePrompt: L(
      'Quelle majestueuse mosquée de Casablanca, édifiée en partie sur l’océan Atlantique et dotée d’un toit ouvrant et d’un minaret de 210 mètres, fut inaugurée en 1993 ?',
      'Which monumental Casablanca mosque built partly above Atlantic waves, boasting a retractable roof and a 210-metre minaret, opened in 1993?',
      '¿Qué monumental mezquita de Casablanca edificada junto al Atlántico con techo retráctil y minarete de 210 metros abrió en 1993?',
      'Qual monumental mesquita de Casablanca erguida sobre as ondas do Atlântico com minarete de 210 metros abriu em 1993?',
      'أي مسجد ضخم في الدار البيضاء بُني على ضفاف الأطلسي بسقف متحرك ومئذنة ارتفاعها 210 أمتار وافتُتح عام 1993؟'
    ),
    correct: L('La Mosquée Hassan-II', 'Hassan II Mosque', 'Mezquita Hassan II', 'Mesquita Hassan II', 'مسجد الحسن الثاني'),
    distractors: [
      L('La Mosquée Koutoubia', 'Koutoubia Mosque', 'Mezquita Kutubía', 'Mesquita Koutoubia', 'مسجد الكتبية'),
      L('La Mosquée Al Quaraouiyine', 'Al Quaraouiyine Mosque', 'Mezquita Al Qarawiyyin', 'Mesquita Al Quaraouiyine', 'جامع القرويين'),
      L('La Tour Hassan', 'Hassan Tower', 'Torre Hassan', 'Torre Hassan', 'صومعة حسان'),
    ],
    explanation: L(
      'Conçue par Michel Pinseau avec le concours de milliers de maâlems (maîtres artisans) en zellige, stuc et bois de cèdre, la Mosquée Hassan-II peut accueillir plus de 100 000 fidèles sur son esplanade.',
      'Adorned by master craftsmen in cedarwood, marble, and zellige tilework, the Hassan II Mosque holds over 100,000 worshippers across its hall and esplanade.',
      'Obra de miles de maestros artesanos en cedro, mármol y azulejo zellige, su recinto acoge a más de cien mil fieles.',
      'Decorada por mestres artesãos em madeira de cedro, mármore e zellige, a mesquita comporta mais de 100 mil fiéis.',
      'أبدع آلاف الحرفيين التقليديين في زخرفة مسجد الحسن الثاني بالزليج والجبس وخشب الأرز فوق أمواج المحيط.'
    ),
  }),
  mkQ({
    id: 'cur_MA_08',
    countryCode: 'MA',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 2,
    topicKey: 'centrale_solaire_noor_ouarzazate',
    source: 'MASEN — Énergies renouvelables à Ouarzazate',
    prompt: L(
      'Quel gigantesque complexe énergétique situé près d’Ouarzazate figure parmi les plus grandes centrales solaires thermodynamiques du monde ?',
      'Which massive renewable-energy complex near Ouarzazate ranks among the largest concentrated solar power plants on Earth?',
      '¿Qué gigantesco complejo energético situado cerca de Uarzazat figura entre las mayores plantas solares del mundo?',
      'Qual gigantesco complexo energético perto de Uarzazate está entre as maiores usinas solares do mundo?',
      'أي مجمع ضخم للطاقة الشمسية قرب ورزازات يُعد من أكبر محطات الطاقة الشمسية المركزة في العالم؟'
    ),
    countryModePrompt: L(
      'Comment s’appelle l’immense complexe solaire de plusieurs milliers d’hectares implanté aux portes du désert près d’Ouarzazate, dont le nom signifie « lumière » ?',
      'What is the name of the vast solar power complex outside Ouarzazate whose Arabic name means "Light"?',
      '¿Cómo se llama el inmenso complejo solar situado cerca de Uarzazat cuyo nombre significa "Luz"?',
      'Como se chama o imenso complexo solar próximo a Uarzazate cujo nome significa "Luz"?',
      'ما اسم مجمع الطاقة الشمسية العملاق القريب من ورزازات الذي يحمل اسم "النور"؟'
    ),
    correct: L('Noor Ouarzazate', 'Noor Ouarzazate', 'Noor Uarzazat', 'Noor Uarzazate', 'محطة نور ورزازات'),
    distractors: [
      L('Parc éolien de Tarfaya', 'Tarfaya Wind Farm', 'Parque eólico de Tarfaya', 'Parque eólico de Tarfaya', 'محطة رياح طرفاية'),
      L('Barrage Al Wahda', 'Al Wahda Dam', 'Presa Al Wahda', 'Barragem Al Wahda', 'سد الوحدة'),
      L('Noor Midelt Est', 'Noor Midelt East', 'Noor Midelt Este', 'Noor Midelt Leste', 'نور ميدلت'),
    ],
    explanation: L(
      'Composé de miroirs paraboliques géants et d’une tour solaire centrale de plus de 240 mètres visible à des kilomètres, Noor Ouarzazate alimente des centaines de milliers de foyers.',
      'Combining vast parabolic mirror arrays and a 243-metre central solar tower with molten-salt storage, Noor Ouarzazate powers electricity even after sunset.',
      'Con espejos parabólicos gigantes y una torre central de 243 metros, Noor Uarzazat genera electricidad incluso de noche.',
      'Com espelhos parabólicos e torre central de 243 metros com armazenamento térmico, Noor Uarzazate gera energia após o pôr do sol.',
      'يضم مجمع نور ورزازات مرايا ضخمة وبرجاً مركزياً بارتفاع 243 متراً يتيح تخزين الحرارة وإنتاج الكهرباء ليلاً.'
    ),
  }),
  mkQ({
    id: 'cur_MA_09',
    countryCode: 'MA',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'oued_draa_plus_long_fleuve',
    source: 'Hydrologie du Maghreb',
    prompt: L(
      'Quel cours d’eau long d’environ 1 100 km, qui prend naissance dans le Haut Atlas et s’écoule à travers les palmeraies du sud jusqu’à l’Atlantique lors des fortes crues, est le plus long fleuve du Maroc ?',
      'Which roughly 1,100 km waterway rising in the High Atlas and winding past southern palm oases toward the Atlantic is Morocco’s longest river?',
      '¿Qué curso fluvial de unos 1.100 km que nace en el Alto Atlas y recorre los palmerales del sur es el río más largo de Marruecos?',
      'Qual rio de cerca de 1.100 km que nasce no Alto Atlas e atravessa os palmeirais do sul é o mais extenso do Marrocos?',
      'أي نهر يبلغ طوله نحو 1100 كم وينبع من الأطلس الكبير عابراً واحات النخيل جنوباً ليكون أطول أنهار المغرب؟'
    ),
    countryModePrompt: L(
      'Quel fleuve long de près de 1 100 km irrigue les célèbres vallées de palmeraies entre Ouarzazate, Zagora et M’Hamid avant d’atteindre l’Atlantique lors des grandes crues ?',
      'Which nearly 1,100 km river waters famed palm-grove valleys past Zagora before reaching the Atlantic in high-water years?',
      '¿Qué río de casi 1.100 km riega los célebres palmerales de Zagora y M’Hamid antes de alcanzar el Atlántico?',
      'Qual rio de quase 1.100 km irriga os célebres oásis de Zagora até o Atlântico nas grandes cheias?',
      'أي وادٍ ونهر يمتد لنحو 1100 كم مروراً بواحات زاكورة قبل وصوله إلى المحيط الأطلسي في مواسم الفيضان؟'
    ),
    correct: L('L’Oued Draâ', 'Draa River', 'Río Draa', 'Rio Draa', 'وادي درعة'),
    distractors: [
      L('La Moulouya', 'Moulouya River', 'Río Muluya', 'Rio Muluya', 'وادي ملوية'),
      L('L’Oum Er-Rbia', 'Oum Er-Rbia River', 'Río Oum Er-Rbia', 'Rio Oum Er-Rbia', 'نهر أم الربيع'),
      L('Le Sebou', 'Sebou River', 'Río Sebú', 'Rio Sebu', 'نهر سبو'),
    ],
    explanation: L(
      'Alimentant les célèbres dattiers de la vallée du Draâ entre Agdz et Zagora, l’oued devient sec en aval dans le désert mais retrouve son lit lors des pluies exceptionnelles.',
      'Nourishing millions of date palms from Agdz to Zagora, the Draa River mostly dries into desert sands unless heavy rains drive it all the way to the ocean.',
      'Motor de los inmensos palmerales de dátiles entre Agdz y Zagora, el Draa solo alcanza el océano en años muy lluviosos.',
      'Vital para os palmeirais de tâmaras entre Agdz e Zagora, o rio Draa seca no deserto exceto em grandes cheias.',
      'يُغذي وادي درعة واحات النخيل الشاسعة بين أكدز وزاكورة، وتصل مياهه إلى المحيط الأطلسي في السنوات المطيرة.'
    ),
  }),
  mkQ({
    id: 'cur_MA_10',
    countryCode: 'MA',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 1,
    topicKey: 'la_pastilla_fes_sucre_sale',
    source: 'Patrimoine culinaire de Fès',
    prompt: L(
      'Quel feuilleté traditionnel emblématique de Fès mêle pâte ouarka croustillante, farce salée au pigeon ou au poulet, amandes grillées, cannelle et sucre glace ?',
      'Which iconic Fez pastry layers crisp warqa dough around savoury pigeon or chicken, toasted almonds, cinnamon, and powdered sugar?',
      '¿Qué emblemático hojaldre de Fez combina masa crujiente, relleno de pichón o pollo, almendras tostadas, canela y azúcar glas?',
      'Qual emblemática massa folhada de Fez combina massa crocante, recheio de pombo ou frango, amêndoas, canela e açúcar de confeiteiro?',
      'أي طبق فاسي تقليدي شهير يجمع بين رقائق الورقة المقرمشة وحشوة الدجاج أو الحمام واللوز المحمص والقرفة والسكر؟'
    ),
    countryModePrompt: L(
      'Quelle tourte feuilletée sucrée-salée préparée avec de fines feuilles de « ouarka », des amandes, de la cannelle et de la volaille trône lors des grands banquets ?',
      'Which sweet-and-savoury layered pastry made with wafer-thin warqa sheets, spiced poultry, toasted almonds, and cinnamon headlines celebratory banquets?',
      '¿Qué pastel hojaldrado agridulce elaborado con finas láminas de masa warqa, ave, almendras y canela preside los banquetes festivos?',
      'Qual torta folhada agridoce feita com finas folhas de massa warqa, aves, amêndoas e canela brilha nos grandes banquetes?',
      'أي فطيرة مورّقة تجمع بين الحلو والمالح باستخدام أوراق البسطيلة واللوز والقرفة والدجاج في المآدب الكبرى؟'
    ),
    correct: L('La pastilla', 'Pastilla (Bastilla)', 'La pastela', 'A pastilla', 'البسطيلة'),
    distractors: [
      L('La harira', 'Harira', 'Harira', 'Harira', 'الحريرة'),
      L('La tanjia', 'Tangia', 'Tangía', 'Tangia', 'الطنجية'),
      L('Le msemen', 'Msemen', 'Msemen', 'Msemen', 'المسمن'),
    ],
    explanation: L(
      'Symbole du raffinement culinaire fassi hérité de la tradition andalouse-maghrébine, la pastilla marie harmonieusement saveurs salées et notes sucrées.',
      'A crowning masterpiece of Fez’s Andalusian-Maghrebi culinary heritage, pastilla balances delicate crunch, warm spice, and sweet-savory depth.',
      'Joya de la gastronomía de Fez de herencia andalusí, la pastela combina texturas crujientes y equilibrio dulce-salado.',
      'Obra-prima da culinária de Fez de herança andaluza, a pastilla equilibra crocância, especiarias e contraste agridoce.',
      'تُعد البسطيلة الفاسية تحفة المطبخ التقليدي بفضل تناغمها بين القرمشة والنكهات المالحة والحلوة.'
    ),
  }),
  mkQ({
    id: 'cur_MA_11',
    countryCode: 'MA',
    category: 'culture',
    subCategory: 'economie_developpement',
    difficulty: 1,
    topicKey: 'huile_argan_vallee_souss_unesco',
    source: 'UNESCO — Arganeraie du Souss (Patrimoine immatériel)',
    prompt: L(
      'Quelle huile précieuse, surnommée « l’or liquide du Souss », est pressée par des coopératives féminines à partir des amandons d’un arbre endémique du sud-ouest du Maroc ?',
      'Which prized oil, nicknamed "liquid gold of the Souss", is pressed by women’s cooperatives from the kernels of an endemic southwestern Moroccan tree?',
      '¿Qué preciado aceite, llamado "oro líquido del Sus", elaboran cooperativas de mujeres con frutos de un árbol endémico del suroeste de Marruecos?',
      'Qual precioso óleo, apelidado de "ouro líquido do Souss", é extraído por cooperativas femininas de uma árvore endêmica do sudoeste do Marrocos?',
      'أي زيت ثمين يُلقب بـ"الذهب السائل لسوس" وتستخلصه التعاونيات النسائية من شجرة متوطنة في جنوب غرب المغرب؟'
    ),
    countryModePrompt: L(
      'Quelle huile culinaire et cosmétique rare est extraite par des coopératives féminines des noix d’un arbre endémique classé réserve de biosphère dans la région du Souss ?',
      'Which rare culinary and cosmetic oil is extracted by women’s cooperatives from the nuts of an endemic biosphere-reserve tree in the Souss region?',
      '¿Qué aceite culinario y cosmético único extraen cooperativas femeninas de un árbol endémico de la región del Sus?',
      'Qual óleo culinário e cosmético raro é extraído por cooperativas femininas de uma árvore endêmica da região do Souss?',
      'أي زيت غذائي وتجميلي نادر تستخلصه التعاونيات النسائية من ثمار شجرة متوطنة في منطقة سوس؟'
    ),
    correct: L('L’huile d’argan', 'Argan oil', 'Aceite de argán', 'Óleo de argan', 'زيت الأركان'),
    distractors: [
      L('L’huile de figue de Barbarie', 'Prickly pear oil', 'Aceite de higo chumbo', 'Óleo de figo-da-índia', 'زيت التين الشوكي'),
      L('L’huile de nigelle', 'Black seed oil', 'Aceite de comino negro', 'Óleo de cominho preto', 'زيت الحبة السوداء'),
      L('L’huile de caroube', 'Carob oil', 'Aceite de algarrobo', 'Óleo de alfarroba', 'زيت الخروب'),
    ],
    explanation: L(
      'Les savoir-faire liés à l’arganier (Argania spinosa) entre Essaouira et Agadir sont inscrits au patrimoine culturel immatériel de l’UNESCO.',
      'Traditional knowledge and cooperative practices around the argan tree between Essaouira and Agadir are recognized as UNESCO Intangible Cultural Heritage.',
      'Los saberes tradicionales en torno al argán entre Esauira y Agadir forman parte del Patrimonio Inmaterial de la UNESCO.',
      'Os saberes tradicionais ligados ao argan entre Essaouira e Agadir são Patrimônio Imaterial da UNESCO.',
      'تُعد المعارف التقليدية المرتبطة بشجرة الأركان بين الصويرة وأكادير تراثاً ثقافياً غير مادي لدى اليونسكو.'
    ),
  }),
  mkQ({
    id: 'cur_MA_12',
    countryCode: 'MA',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 1,
    topicKey: 'the_vert_menthe_hospitalite',
    source: 'Arts culinaires & hospitalité',
    prompt: L(
      'Quel geste traditionnel spectaculaire accompagne toujours le service du thé vert à la menthe fraîche (« atay ») pour former une mousse légère (« rezâ ») au sommet du verre ?',
      'Which classic pouring technique accompanies the serving of fresh mint green tea ("atay") to create a light frothy foam atop the glass?',
      '¿Qué gesto tradicional acompaña al servicio del té verde con menta fresca para formar una ligera espuma en el vaso?',
      'Qual gesto tradicional acompanha o preparo do chá verde com hortelã para formar uma espuma leve no copo?',
      'أي حركة تقليدية شهيرة ترافق صب الشاي الأخضر بالنعناع (أتاي) لتكوين رغوة خفيفة في أعلى الكأس؟'
    ),
    countryModePrompt: L(
      'Pourquoi sert-on traditionnellement le thé vert à la menthe en élevant la théière très haut au-dessus des petits verres colorés ?',
      'Why is fresh mint green tea traditionally poured from high above the small ornate glasses?',
      '¿Por qué se sirve tradicionalmente el té verde con menta elevando mucho la tetera sobre los vasos?',
      'Por que o chá verde com hortelã é servido tradicionalmente erguendo o bule bem alto acima dos copos?',
      'لماذا يُصب الشاي الأخضر بالنعناع تقليدياً مع رفع الإبريق عالياً فوق الكؤوس الصغيرة؟'
    ),
    correct: L('Aérer le thé et créer la mousse (« rezâ »)', 'To aerate the tea and form foam ("rezâ")', 'Para oxigenar el té y crear espuma', 'Para aerar o chá e formar espuma', 'لتهوية الشاي وتكوين الرغوة'),
    distractors: [
      L('Dissoudre le sel gemme', 'To dissolve rock salt', 'Para disolver sal gema', 'Para dissolver sal-gema', 'لإذابة الملح الصخري'),
      L('Séparer les graines de sésame', 'To separate sesame seeds', 'Para separar semillas de sésamo', 'Para separar sementes de gergelim', 'لفصل بذور السمسم'),
      L('Éteindre le charbon du brasero', 'To cool charcoal embers', 'Para apagar las brasas', 'Para resfriar o braseiro', 'لإطفاء الجمر'),
    ],
    explanation: L(
      'Verser de haut refroidit légèrement l’infusion, révèle ses arômes et couronne chaque verre de « rezâ », signe de thé réussi et d’hospitalité chaleureuse.',
      'Pouring from a height aerates the tea, cools it slightly, and produces the prized crown of foam symbolizing fine hospitality.',
      'Servir desde lo alto airea el té, lo templa y forma la preciada corona de espuma símbolo de hospitalidad.',
      'Servir do alto aera o chá, ameniza a temperatura e forma a espuma que simboliza boa hospitalidade.',
      'يساعد رفع الإبريق على تهوية الشاي وتبريده قليلاً وتشكيل الرغوة التي تُعد علامة جودة وحسن ضيافة.'
    ),
  }),
  mkQ({
    id: 'cur_MA_13',
    countryCode: 'MA',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'nass_el_ghiwane_casablanca_1970',
    source: 'Patrimoine musical — Hay Mohammadi (Casablanca)',
    prompt: L(
      'Quel groupe mythique né à Casablanca en 1970, surnommé par Martin Scorsese les « Rolling Stones de l’Afrique », a révolutionné la chanson populaire au bendir et au guembri ?',
      'Which legendary Casablanca band formed in 1970, dubbed by Martin Scorsese the "Rolling Stones of Africa", revolutionized popular music with bendir and guembri?',
      '¿Qué mítico grupo de Casablanca nacido en 1970, apodado por Martin Scorsese los "Rolling Stones de África", revolucionó la música con bendir y guembri?',
      'Qual mítico grupo de Casablanca fundado em 1970, chamado por Martin Scorsese de "Rolling Stones da África", revolucionou a música com bendir e guembri?',
      'أي فرقة موسيقية أسطورية نشأت في الدار البيضاء عام 1970 ووصفها مارتن سكورسيزي بـ"رولينغ ستونز إفريقيا"؟'
    ),
    countryModePrompt: L(
      'Quel groupe légendaire issu du quartier Hay Mohammadi de Casablanca a marqué toute la jeunesse nord-africaine dès les années 1970 avec des titres comme « Essiniya » ?',
      'Which legendary group from Casablanca’s Hay Mohammadi neighbourhood captured North African youth in the 1970s with classics like "Essiniya"?',
      '¿Qué grupo legendario del barrio Hay Mohammadi de Casablanca marcó a la juventud magrebí desde los años 70 con "Essiniya"?',
      'Qual banda lendária de Hay Mohammadi em Casablanca marcou a juventude norte-africana nos anos 1970 com "Essiniya"?',
      'أي فرقة أسطورية من الحي المحمدي بالدار البيضاء صنعت ثورة موسيقية منذ السبعينيات بأغنية "الصينية"؟'
    ),
    correct: L('Nass El Ghiwane', 'Nass El Ghiwane', 'Nass El Ghiwane', 'Nass El Ghiwane', 'ناس الغيوان'),
    distractors: [
      L('Jil Jilala', 'Jil Jilala', 'Jil Jilala', 'Jil Jilala', 'جيل جيلالة'),
      L('Lemchaheb', 'Lemchaheb', 'Lemchaheb', 'Lemchaheb', 'لمشاهب'),
      L('Izenzaren', 'Izenzaren', 'Izenzaren', 'Izenzaren', 'إزنزارن'),
    ],
    explanation: L(
      'Puisant dans les transes gnaoua, le malhoun et la poésie populaire, Larbi Batma et Nass El Ghiwane ont donné une voix poétique et engagée à toute une génération.',
      'Blending Gnaoua grooves, malhoun poetry, and acoustic instruments like the guembri and tbel, Nass El Ghiwane redefined popular song across the Maghreb.',
      'Fusionando ritmos gnaoua y poesía popular, Nass El Ghiwane dio voz poética y social a toda una generación.',
      'Fundindo ritmos gnaoua, poesia malhoun e instrumentos acústicos, Nass El Ghiwane redefiniu a canção no Magrebe.',
      'مزجت فرقة ناس الغيوان بين إيقاعات كناوة والملحون والكلام الشعبي الملتزم لتخلق ظاهرة فنية خالدة.'
    ),
  }),
  mkQ({
    id: 'cur_MA_14',
    countryCode: 'MA',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'caftan_traditionnel_ceremonie',
    source: 'Patrimoine vestimentaire maghrébin',
    prompt: L(
      'Quel somptueux vêtement d’apparat brodé à la main avec boutons « sfifa » et « âaqad », souvent porté en deux pièces (« takchita ») lors des mariages, incarne la haute couture traditionnelle marocaine ?',
      'Which ornate hand-embroidered ceremonial robe trimmed with "sfifa" braid and "aaqad" buttons, often layered as a two-piece "takchita", defines traditional Moroccan couture?',
      '¿Qué suntuoso traje de ceremonia bordado a mano con pasamanería "sfifa" y botones "aaqad", a menudo en dos piezas ("takchita"), define la alta costura tradicional de Marruecos?',
      'Qual suntuoso traje cerimonial bordado à mão com cordão "sfifa" e botões "aaqad", frequentemente em duas peças ("takchita"), define a alta-costura tradicional marroquina?',
      'أي زي تقليدي فاخر مطرز يدوياً بالسفيفة والعقاد، ويُرتدى غالباً من قطعتين في الأعراس، يجسد أناقة التراث المغربي؟'
    ),
    countryModePrompt: L(
      'Comment appelle-t-on la longue tunique de cérémonie ornée de galons « sfifa » et de petits boutons « âaqad » souvent ceinturée d’une « mdamma » lors des fêtes ?',
      'What is the name of the ornate ceremonial robe trimmed with hand-woven "sfifa" braid, "aaqad" buttons, and a "mdamma" belt?',
      '¿Cómo se llama la túnica ceremonial adornada con galones "sfifa", botones "aaqad" y cinturón "mdamma"?',
      'Como se chama a túnica cerimonial adornada com galões "sfifa", botões "aaqad" e cinto "mdamma"?',
      'ما اسم اللباس الاحتفالي الطويل المزدان بالسفيفة والعقاد والمشدود بحزام المضمة في المناسبات والأعراس؟'
    ),
    correct: L('Le caftan', 'Caftan', 'El caftán', 'O caftã', 'القفطان'),
    distractors: [
      L('Le boubou', 'Boubou', 'Bubu', 'Bubu', 'البوبو'),
      L('Le kente', 'Kente', 'Kente', 'Kente', 'الكينتي'),
      L('La habesha kemis', 'Habesha kemis', 'Habesha kemis', 'Habesha kemis', 'الحبشة كيميس'),
    ],
    explanation: L(
      'Travail minutieux d’artisans brodeurs de Fès, Rabat ou Tétouan, le caftan associe soie, velours ou brocart aux passementeries de fil d’or et d’argent.',
      'Handcrafted by master maâlems in Fez, Rabat, and Tetouan, the caftan pairs rich silk and brocade with intricate braided silk trim.',
      'Confeccionado por maestros bordadores en Fez o Tetuán, el caftán combina seda, terciopelo y finos hilos metálicos.',
      'Elaborado por mestres artesãos de Fez, Rabat e Tetuão, o caftã une seda, brocado e bordados minuciosos.',
      'يمثل القفطان ذروة إبداع الصناع التقليديين في فاس والرباط وتطوان بفضل تطريزه اليدوي الدقيق.'
    ),
  }),
  mkQ({
    id: 'cur_MA_15',
    countryCode: 'MA',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 1,
    topicKey: 'hicham_el_guerrouj_athenes_2004',
    source: 'CIO & World Athletics — Athènes 2004',
    prompt: L(
      'Quel athlète marocain natif de Berkane, détenteur du record du monde du 1 500 mètres depuis 1998, a réalisé le rare doublé 1 500 m / 5 000 m aux Jeux olympiques d’Athènes en 2004 ?',
      'Which Berkane-born Moroccan runner, holder of the 1500m world record since 1998, completed a rare 1500m and 5000m golden double at Athens 2004?',
      '¿Qué atleta de Marruecos nacido en Berkane, plusmarquista mundial de 1.500 m desde 1998, logró el doblete 1.500 m / 5.000 m en Atenas 2004?',
      'Qual atleta do Marrocos nascido em Berkane, recordista mundial dos 1.500m desde 1998, conquistou a dobradinha 1.500m / 5.000m em Atenas 2004?',
      'أي عداء مغربي من بركان، صاحب الرقم القياسي العالمي في 1500 متر منذ 1998، حقق ثنائية 1500 و5000 متر الذهبية في أثينا 2004؟'
    ),
    countryModePrompt: L(
      'Quel champion natif de Berkane, quadruple champion du monde du 1 500 m et détenteur du record mondial de la distance, a remporté deux médailles d’or à Athènes en 2004 ?',
      'Which Berkane-born four-time 1500m World Champion and world record holder won double Olympic gold (1500m and 5000m) at Athens 2004?',
      '¿Qué campeón nacido en Berkane, tetracampeón mundial y plusmarquista de 1.500 m, ganó dos oros olímpicos en Atenas 2004?',
      'Qual campeão nascido em Berkane, tetracampeão mundial e recordista dos 1.500m, venceu dois ouros olímpicos em Atenas 2004?',
      'أي بطل من بركان حمل الرقم القياسي العالمي لسباق 1500 متر وفاز بذهبيتين أولمبيتين في أثينا 2004؟'
    ),
    correct: L('Hicham El Guerrouj', 'Hicham El Guerrouj', 'Hicham El Guerrouj', 'Hicham El Guerrouj', 'هشام الكروج'),
    distractors: [
      L('Saïd Aouita', 'Saïd Aouita', 'Saïd Aouita', 'Saïd Aouita', 'سعيد عويطة'),
      L('Soufiane El Bakkali', 'Soufiane El Bakkali', 'Soufiane El Bakkali', 'Soufiane El Bakkali', 'سفيان البقالي'),
      L('Khalid Skah', 'Khalid Skah', 'Khalid Skah', 'Khalid Skah', 'خالد سكاح'),
    ],
    explanation: L(
      'Premier homme depuis Paavo Nurmi en 1924 à réussir le doublé olympique 1 500 m / 5 000 m dans les mêmes Jeux, Hicham El Guerrouj reste invaincu sur son record de 3 min 26 s 00.',
      'The first athlete since Paavo Nurmi in 1924 to win the 1500m and 5000m at the same Olympics, Hicham El Guerrouj’s 3:26.00 mark still stands.',
      'Primero desde Paavo Nurmi en 1924 en lograr ese doblete olímpico, su récord de 3:26.00 sigue vigente.',
      'Primeiro desde Paavo Nurmi em 1924 a vencer 1.500m e 5.000m na mesma Olimpíada, seu recorde de 3:26.00 permanece intacto.',
      'أصبح هشام الكروج أول عداء منذ 1924 يحقق ثنائية 1500 و5000 متر في دورة أولمبية واحدة، ولا يزال رقمه القياسي صامداً.'
    ),
  }),
  mkQ({
    id: 'cur_MA_16',
    countryCode: 'MA',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'nawal_el_moutawakel_jo_1984',
    source: 'CIO — Los Angeles 1984',
    prompt: L(
      'Quelle coureuse de haies casablancaise est entrée dans l’histoire à Los Angeles en 1984 en devenant la première femme africaine, arabe et musulmane sacrée championne olympique ?',
      'Which Casablanca-born hurdler made history at Los Angeles 1984 as the first African, Arab, and Muslim woman to win an Olympic gold medal?',
      '¿Qué vallista nacida en Casablanca hizo historia en Los Ángeles 1984 al ser la primera campeona olímpica africana, árabe y musulmana?',
      'Qual barreirista nascida em Casablanca fez história em Los Angeles 1984 como a primeira mulher africana, árabe e muçulmana campeã olímpica?',
      'أي عداءة حواجز من الدار البيضاء دخلت التاريخ في أولمبياد لوس أنجلوس 1984 كأول بطلة أولمبية إفريقية وعربية ومسلمة؟'
    ),
    countryModePrompt: L(
      'Quelle championne née à Casablanca a remporté la toute première finale féminine du 400 m haies aux Jeux olympiques de Los Angeles en 1984 ?',
      'Which Casablanca-born athlete won the inaugural women’s 400m hurdles Olympic final at Los Angeles 1984?',
      '¿Qué campeona nacida en Casablanca ganó la primera final olímpica femenina de 400 m vallas en Los Ángeles 1984?',
      'Qual campeã nascida em Casablanca venceu a primeira final olímpica feminina dos 400m com barreiras em 1984?',
      'أي بطلة من الدار البيضاء أحرزت أول ذهبية أولمبية نسائية في سباق 400 متر حواجز بأولمبياد 1984؟'
    ),
    correct: L('Nawal El Moutawakel', 'Nawal El Moutawakel', 'Nawal El Moutawakel', 'Nawal El Moutawakel', 'نوال المتوكل'),
    distractors: [
      L('Nezha Bidouane', 'Nezha Bidouane', 'Nezha Bidouane', 'Nezha Bidouane', 'نزهة بدوان'),
      L('Hasna Benhassi', 'Hasna Benhassi', 'Hasna Benhassi', 'Hasna Benhassi', 'حسناء بنحسي'),
      L('Zohra El Kamch', 'Zohra El Kamch', 'Zohra El Kamch', 'Zohra El Kamch', 'زهرة الكمش'),
    ],
    explanation: L(
      'Sacrée en 54 s 61 à seulement 22 ans en 1984, Nawal El Moutawakel a ouvert la voie à des millions de sportives et siège ensuite comme vice-présidente du CIO.',
      'Winning gold in 54.61 seconds aged 22, Nawal El Moutawakel inspired generations of women athletes and went on to serve as IOC Vice-President.',
      'Campeona con 22 años en 54,61 segundos, Nawal El Moutawakel abrió camino a millones de mujeres en el deporte.',
      'Campeã aos 22 anos em 54s61, Nawal El Moutawakel abriu caminhos históricos e chegou à vice-presidência do COI.',
      'فتحت نوال المتوكل بذهبيتها عام 1984 آفاقاً جديدة للرياضة النسائية وتولت لاحقاً مناصب رفيعة في اللجنة الأولمبية الدولية.'
    ),
  }),
  mkQ({
    id: 'cur_MA_17',
    countryCode: 'MA',
    category: 'history',
    subCategory: 'sciences_innovations',
    difficulty: 3,
    topicKey: 'jebel_irhoud_homo_sapiens_300000',
    source: 'Revue Nature (2017) & INSAP Rabat',
    prompt: L(
      'Quel site préhistorique situé entre Marrakech et Safi a bouleversé la paléoanthropologie en 2017 en révélant les plus anciens fossiles connus d’Homo sapiens, datés d’environ 300 000 ans ?',
      'Which prehistoric site between Marrakech and Safi reshaped human origins in 2017 by yielding the oldest known Homo sapiens fossils, dated to around 300,000 years ago?',
      '¿Qué yacimiento prehistórico entre Marrakech y Safí reveló en 2017 los fósiles más antiguos conocidos de Homo sapiens, de unos 300.000 años?',
      'Qual sítio pré-histórico entre Marrakech e Safi revelou em 2017 os fósseis mais antigos conhecidos de Homo sapiens, com cerca de 300 mil anos?',
      'أي موقع أثري بين مراكش وآسفي أحدث ثورة علمية عام 2017 بالكشف عن أقدم حفريات معروفة للإنسان العاقل قبل نحو 300 ألف عام؟'
    ),
    countryModePrompt: L(
      'Comment s’appelle le gisement archéologique situé près de Youssoufia où ont été mis au jour les restes d’Homo sapiens les plus anciens au monde (environ 300 000 ans) ?',
      'What is the name of the archaeological site near Youssoufia where the world’s oldest known Homo sapiens fossils (~300,000 years old) were discovered?',
      '¿Cómo se llama el yacimiento cercano a Youssoufia donde se hallaron los restos de Homo sapiens más antiguos del mundo?',
      'Como se chama o sítio arqueológico perto de Youssoufia onde foram encontrados os fósseis de Homo sapiens mais antigos do mundo?',
      'ما اسم الموقع الأثري قرب اليوسفية الذي احتضن أقدم بقايا معروفة للإنسان العاقل في العالم بنحو 300 ألف سنة؟'
    ),
    correct: L('Jebel Irhoud', 'Jebel Irhoud', 'Jebel Irhoud', 'Jebel Irhoud', 'جبل إيغود'),
    distractors: [
      L('Taforalt', 'Taforalt', 'Taforalt', 'Taforalt', 'تافوغالت'),
      L('Omo Kibish', 'Omo Kibish', 'Omo Kibish', 'Omo Kibish', 'أومو كيبيش'),
      L('Herto Bouri', 'Herto Bouri', 'Herto Bouri', 'Herto Bouri', 'هيرتو بوري'),
    ],
    explanation: L(
      'Les fouilles dirigées par Abdelouahed Ben-Ncer et Jean-Jacques Hublin à Jebel Irhoud ont reculé de près de 100 000 ans l’âge reconnu de notre espèce et montré une évolution pan-africaine.',
      'Excavations at Jebel Irhoud pushed back the fossil record of Homo sapiens by roughly 100,000 years, proving a continent-wide African origin.',
      'Las excavaciones en Jebel Irhoud retrasaron unos 100.000 años el registro de Homo sapiens hacia un origen panafricano.',
      'As escavações em Jebel Irhoud recuaram cerca de 100 mil anos na idade conhecida do Homo sapiens na África.',
      'أرجعت حفريات جبل إيغود تاريخ ظهور الإنسان العاقل نحو مئة ألف سنة إضافية مؤكدة الأصل الإفريقي الشامل للبشرية.'
    ),
  }),
  mkQ({
    id: 'cur_MA_18',
    countryCode: 'MA',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 3,
    topicKey: 'dynastie_idrisside_fondation_fes',
    source: 'Histoire médiévale du Maghreb',
    prompt: L(
      'Quel fondateur de la première grande dynastie musulmane indépendante au Maroc à la fin du VIIIe siècle a donné son nom à la cité sainte de Zerhoun et initié la ville de Fès ?',
      'Which late-8th-century founder of Morocco’s first major independent Muslim dynasty gave his name to the holy town of Zerhoun and laid the beginnings of Fez?',
      '¿Qué fundador a fines del siglo VIII de la primera gran dinastía independiente de Marruecos dio nombre a Mulay Idrís Zerhoun e inició Fez?',
      'Qual fundador no final do século VIII da primeira grande dinastia independente do Marrocos deu nome a Moulay Idriss Zerhoun e iniciou Fez?',
      'من مؤسس الدولة الإدريسية أواخر القرن الثامن الميلادي الذي ارتبط اسمه بمدينة زرهون وبداية تأسيس فاس؟'
    ),
    countryModePrompt: L(
      'Sous l’impulsion de quel souverain du VIIIe siècle, ancêtre de la dynastie qui régna pendant près de deux siècles depuis Fès, la cité de Fès vit-elle le jour vers 789 ?',
      'Which 8th-century ruler founded the dynasty that reigned from Fez for nearly two centuries and established the settlement around 789 CE?',
      '¿Qué soberano del siglo VIII fundó la dinastía que reinó desde Fez durante casi dos siglos tras iniciar la ciudad hacia 789?',
      'Qual soberano do século VIII fundou a dinastia que reinou a partir de Fez por quase dois séculos após 789?',
      'على يد أي مؤسس في أواخر القرن الثامن نشأت نواة مدينة فاس والدولة المستقلة التي حكمت قرنين؟'
    ),
    correct: L('Idris Ier (Moulay Idriss)', 'Idris I (Moulay Idriss)', 'Idrís I', 'Idris I', 'إدريس الأول (مولاي إدريس)'),
    distractors: [
      L('Youssef ben Tachfine', 'Yusuf ibn Tashfin', 'Yusuf ibn Tasufin', 'Iúçufe ibne Taxufine', 'يوسف بن تاشفين'),
      L('Ahmed al-Mansour', 'Ahmad al-Mansur', 'Ahmad al-Mansur', 'Amade Almançor', 'أحمد المنصور الذهبي'),
      L('Abdelmoumen', 'Abd al-Mu’min', 'Abd al-Mumin', 'Abdalmumine', 'عبد المؤمن بن علي'),
    ],
    explanation: L(
      'Accueilli par la tribu berbère des Awraba à Oualili en 788, Idris Ier fonda la dynastie idrisside que son fils Idris II amplifia en développant Fès.',
      'Welcomed by the Awraba Amazigh confederation at Volubilis in 788, Idris I founded the Idrisid state later expanded from Fez by his son Idris II.',
      'Acogido por la tribu amazigh Awraba en 788, Idrís I fundó la dinastía idrisí que su hijo Idrís II consolidó en Fez.',
      'Acolhido pela tribo amazigh Awraba em 788, Idris I fundou o Estado idríssida expandido depois por seu filho em Fez.',
      'بايعت قبيلة أوربة الأمازيغية إدريس الأول عام 788 فأسس الدولة الإدريسية التي وسع ابنه إدريس الثاني عاصمتها فاس.'
    ),
  }),

  // EG — Égypte (16 Qs)
  mkQ({
    id: 'cur_EG_01',
    countryCode: 'EG',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 2,
    topicKey: 'revolution_23_juillet_1952',
    source: 'Archives du Caire — Juillet 1952',
    prompt: L(
      'À quelle date précise le mouvement des Officiers libres a-t-il déclenché la révolution qui mit fin à la monarchie en Égypte ?',
      'On what exact date did the Free Officers Movement launch the revolution that ended the monarchy in Egypt?',
      '¿En qué fecha exacta inició el Movimiento de Oficiales Libres la revolución que puso fin a la monarquía en Egipto?',
      'Em que data exata o Movimento dos Oficiais Livres iniciou a revolução que encerrou a monarquia no Egito?',
      'في أي تاريخ نفذت حركة الضباط الأحرار الثورة التي أنهت النظام الملكي في مصر؟'
    ),
    countryModePrompt: L(
      'Quel jour de juillet 1952 le mouvement des Officiers libres a-t-il pris le pouvoir, ouvrant la voie à l’abolition de la monarchie et à la République ?',
      'On which day in July 1952 did the Free Officers Movement seize power, leading to the abolition of the monarchy and declaration of the Republic?',
      '¿Qué día de julio de 1952 tomó el poder el Movimiento de Oficiales Libres abriendo paso a la República?',
      'Em que dia de julho de 1952 o Movimento dos Oficiais Livres tomou o poder abrindo caminho à República?',
      'في أي يوم من يوليو 1952 تحرك الضباط الأحرار لإنهاء الملكية وإعلان الجمهورية لاحقاً؟'
    ),
    correct: L('Le 23 juillet 1952', 'July 23, 1952', '23 de julio de 1952', '23 de julho de 1952', '23 يوليو 1952'),
    distractors: [
      L('Le 28 février 1922', 'February 28, 1922', '28 de febrero de 1922', '28 de fevereiro de 1922', '28 فبراير 1922'),
      L('Le 18 juin 1953', 'June 18, 1953', '18 de junio de 1953', '18 de junho de 1953', '18 يونيو 1953'),
      L('Le 6 octobre 1973', 'October 6, 1973', '6 de octubre de 1973', '6 de outubro de 1973', '6 أكتوبر 1973'),
    ],
    explanation: L(
      'Menée par Gamal Abdel Nasser et Mohammed Naguib le 23 juillet 1952, la révolution aboutit à la proclamation de la République le 18 juin 1953 et reste fête nationale.',
      'Led by Gamal Abdel Nasser and Mohamed Naguib on July 23, 1952, the revolution led to the Republic’s proclamation in June 1953.',
      'Encabezada por Nasser y Naguib el 23 de julio de 1952, la revolución proclamó la República en junio de 1953.',
      'Liderada por Nasser e Naguib em 23 de julho de 1952, a revolução levou à proclamação da República em junho de 1953.',
      'قادت ثورة 23 يوليو 1952 بقيادة الضباط الأحرار إلى إعلان الجمهورية في 18 يونيو 1953.'
    ),
  }),
  mkQ({
    id: 'cur_EG_02',
    countryCode: 'EG',
    category: 'history',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'temples_abou_simbel_deplacement_unesco',
    source: 'UNESCO — Campagne de Nubie (1964–1968)',
    prompt: L(
      'Quel monument colossal sculpté dans la falaise par Ramsès II en Nubie égyptienne a été entièrement découpé en blocs et déplacé de 65 mètres en hauteur par l’UNESCO pour échapper aux eaux du lac Nasser ?',
      'Which colossal rock-cut monument built by Ramesses II in Nubia was sawn into blocks and lifted 65 metres higher by UNESCO to save it from Lake Nasser’s rising waters?',
      '¿Qué monumental templo excavado en roca por Ramsés II fue cortado en bloques y elevado 65 metros por la UNESCO para salvarlo del lago Nasser?',
      'Qual monumento colossal esculpido na rocha por Ramsés II foi serrado em blocos e erguido 65 metros pela UNESCO para escapar das águas do lago Nasser?',
      'أي معبد صخري ضخم شيده رمسيس الثاني في النوبة وقُطع ونُقل لارتفاع 65 متراً بجهود اليونسكو لإنقاذه من مياه بحيرة ناصر؟'
    ),
    countryModePrompt: L(
      'Quels temples rupestres géants de Haute-Nubie, ornés de quatre statues assises de 20 mètres de Ramsès II, ont été déplacés pierre par pierre dans les années 1960 ?',
      'Which giant rock-cut Nubian temples featuring four 20-metre seated colossi of Ramesses II were dismantled and reassembled higher up in the 1960s?',
      '¿Qué templos rupestres de Nubia con cuatro colosos de 20 metros de Ramsés II fueron desmontados y reubicados en los años 60?',
      'Quais templos rupestres da Núbia com quatro colossos de 20 metros de Ramsés II foram remontados em local mais alto nos anos 1960?',
      'أي معبدين صخريين في النوبة بتماثيل رمسيس الثاني العملاقة نُقلا حجراً بحجر في الستينيات؟'
    ),
    correct: L('Les temples d’Abou Simbel', 'Abu Simbel temples', 'Templos de Abu Simbel', 'Templos de Abu Simbel', 'معبدا أبو سمبل'),
    distractors: [
      L('Le temple de Karnak', 'Karnak Temple', 'Templo de Karnak', 'Templo de Karnak', 'معبد الكرنك'),
      L('Le temple d’Edfou', 'Edfu Temple', 'Templo de Edfu', 'Templo de Edfu', 'معبد إدفو'),
      L('Le Ramesseum', 'Ramesseum', 'Ramesseum', 'Ramesseum', 'الرامسيوم'),
    ],
    explanation: L(
      'Ce sauvetage international monumental entre 1964 et 1968 inspira directement la création de la Convention du patrimoine mondial de l’UNESCO.',
      'This extraordinary 1964–1968 engineering rescue inspired the creation of the UNESCO World Heritage Convention.',
      'Aquella gesta de ingeniería entre 1964 y 1968 inspiró directamente la Convención del Patrimonio Mundial de la UNESCO.',
      'Esse resgate monumental entre 1964 e 1968 inspirou a criação da Convenção do Patrimônio Mundial da UNESCO.',
      'ألهمت حملة إنقاذ معبدي أبو سمبل بين 1964 و1968 إنشاء اتفاقية التراث العالمي التابعة لليونسكو.'
    ),
  }),
  mkQ({
    id: 'cur_EG_03',
    countryCode: 'EG',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 3,
    topicKey: 'traite_qadesh_paix_antique',
    source: 'ONU & Musées d’Istanbul / Karnak — 1259 av. J.-C.',
    prompt: L(
      'Quel traité conclu vers 1259 av. J.-C. entre le pharaon Ramsès II et l’empire hittite est reconnu comme le plus ancien traité de paix écrit conservé dans l’histoire diplomatique ?',
      'Which treaty concluded around 1259 BCE between Pharaoh Ramesses II and the Hittite Empire stands as the oldest surviving written peace treaty in diplomatic history?',
      '¿Qué tratado firmado hacia 1259 a. C. entre Ramsés II y el Imperio hitita se considera el tratado de paz escrito más antiguo conservado?',
      'Qual tratado firmado por volta de 1259 a.C. entre Ramsés II e o Império Hitita é o mais antigo tratado de paz escrito preservado?',
      'أي معاهدة أُبرمت قرابة عام 1259 ق.م بين رمسيس الثاني والإمبراطورية الحيثية وتُعد أقدم معاهدة سلام مكتوبة محفوظة؟'
    ),
    countryModePrompt: L(
      'Comment s’appelle l’accord de paix gravé vers 1259 av. J.-C. sur les murs de Karnak et sur des tablettes d’argile avec le roi hittite Hattusili III, dont une réplique orne le siège de l’ONU ?',
      'What is the name of the c. 1259 BCE peace accord carved at Karnak and on clay tablets with Hittite King Hattusili III, whose replica hangs at UN Headquarters?',
      '¿Cómo se llama el tratado de paz de ca. 1259 a. C. grabado en Karnak cuya réplica figura en la sede de la ONU?',
      'Como se chama o tratado de paz de cerca de 1259 a.C. gravado em Karnak cuja réplica está na sede da ONU?',
      'ما اسم معاهدة السلام التاريخية المنقوشة على جدران الكرنك نحو 1259 ق.م والتي تُعرض نسخة منها في مقر الأمم المتحدة؟'
    ),
    correct: L('Le traité de Qadesh', 'Treaty of Kadesh', 'Tratado de Qadesh', 'Tratado de Kadesh', 'معاهدة قادش'),
    distractors: [
      L('La paix de Memphis', 'Peace of Memphis', 'Paz de Menfis', 'Paz de Mênfis', 'صلح منف'),
      L('L’édit d’Amarna', 'Amarna Edict', 'Edicto de Amarna', 'Édito de Amarna', 'مرسوم العمارنة'),
      L('Le pacte de Thèbes', 'Pact of Thebes', 'Pacto de Tebas', 'Pacto de Tebas', 'ميثاق طيبة'),
    ],
    explanation: L(
      'Gravé en hiéroglyphes à Karnak et au Ramesseum ainsi qu’en akkadien cunéiforme à Hattusa, le traité de Qadesh instaurait paix perpétuelle et alliance défensive.',
      'Inscribed in both Egyptian hieroglyphs and Akkadian cuneiform, the Treaty of Kadesh established lasting peace, border respect, and mutual aid.',
      'Grabado en jeroglíficos en Karnak y en escritura cuneiforme en Hattusa, estableció paz duradera y ayuda mutua.',
      'Gravado em hieróglifos em Karnak e em cuneiforme em Hattusa, estabeleceu paz duradoura e aliança mútua.',
      'سُجلت معاهدة قادش بالهيروغليفية في الكرنك وبالكتابة المسمارية في خاتوشا لإرساء السلام والتحالف.'
    ),
  }),
  mkQ({
    id: 'cur_EG_04',
    countryCode: 'EG',
    category: 'history',
    subCategory: 'sciences_innovations',
    difficulty: 2,
    topicKey: 'ahmed_zewail_nobel_chimie_1999',
    source: 'Fondation Nobel — Prix Nobel de Chimie 1999',
    prompt: L(
      'Quel chimiste égyptien né à Damanhur a remporté le prix Nobel de chimie en 1999 pour avoir fondé la femtochimie grâce aux lasers ultrarapides ?',
      'Which Damanhur-born Egyptian chemist won the 1999 Nobel Prize in Chemistry for pioneering femtochemistry with ultrafast lasers?',
      '¿Qué químico nacido en Damanhur ganó el Premio Nobel de Química en 1999 por fundar la femtoquímica con láseres ultrarrápidos?',
      'Qual químico nascido em Damanhur venceu o Prêmio Nobel de Química de 1999 por fundar a femtoquímica?',
      'أي عالم كيمياء مصري ولد في دمنهور ونال جائزة نوبل في الكيمياء عام 1999 لتأسيسه علم كيمياء الفيمتو؟'
    ),
    countryModePrompt: L(
      'Quel scientifique né à Damanhur, lauréat du prix Nobel de chimie 1999 pour l’observation des réactions chimiques à l’échelle de la femtoseconde, a inspiré la Cité des Sciences portant son nom ?',
      'Which Damanhur-born 1999 Nobel laureate in Chemistry pioneered femtosecond laser spectroscopy and inspired the Zewail City of Science and Technology?',
      '¿Qué premio Nobel de Química en 1999 nacido en Damanhur da nombre a una gran ciudad científica y tecnológica en el país?',
      'Qual Prêmio Nobel de Química de 1999 nascido em Damanhur dá nome a uma importante cidade científica no país?',
      'أي عالم حائز على نوبل في الكيمياء عام 1999 ولد في دمنهور وتُحمل مدينة العلوم والتكنولوجيا اسمه؟'
    ),
    correct: L('Ahmed Zewail', 'Ahmed Zewail', 'Ahmed Zewail', 'Ahmed Zewail', 'أحمد زويل'),
    distractors: [
      L('Magdi Yacoub', 'Magdi Yacoub', 'Magdi Yacoub', 'Magdi Yacoub', 'مجدي يعقوب'),
      L('Farouk El-Baz', 'Farouk El-Baz', 'Farouk El-Baz', 'Farouk El-Baz', 'فاروق الباز'),
      L('Mostafa El-Sayed', 'Mostafa El-Sayed', 'Mostafa El-Sayed', 'Mostafa El-Sayed', 'مصطفى السيد'),
    ],
    explanation: L(
      'En captant le mouvement des atomes au millionième de milliardième de seconde grâce au laser, Ahmed Zewail devint le premier scientifique du monde arabe et africain à recevoir un Nobel de chimie.',
      'By capturing chemical bonds breaking and forming on the femtosecond timescale, Ahmed Zewail earned the 1999 Chemistry Nobel Prize.',
      'Al captar reacciones atómicas en femtosegundos, Ahmed Zewail obtuvo el Nobel de Química en 1999.',
      'Ao observar ligações químicas na escala do femtossegundo, Ahmed Zewail recebeu o Nobel de Química em 1999.',
      'تمكّن أحمد زويل من رصد حركة الذرات بالليزر في زمن الفيمتو ثانية ليصبح أول عربي وإفريقي ينال نوبل في الكيمياء.'
    ),
  }),
  mkQ({
    id: 'cur_EG_05',
    countryCode: 'EG',
    category: 'history',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'monastere_sainte_catherine_sinai',
    source: 'UNESCO — Mont Sinaï (2002)',
    prompt: L(
      'Quel monastère fortifié du VIe siècle situé au pied du mont Sinaï abrite l’une des plus anciennes bibliothèques chrétiennes au monde encore en activité ?',
      'Which 6th-century fortified monastery at the foot of Mount Sinai houses one of the oldest continuously operating libraries on Earth?',
      '¿Qué monasterio fortificado del siglo VI al pie del monte Sinaí alberga una de las bibliotecas cristianas activas más antiguas del mundo?',
      'Qual mosteiro fortificado do século VI aos pés do monte Sinai abriga uma das bibliotecas cristãs ativas mais antigas do mundo?',
      'أي دير محصن من القرن السادس الميلادي عند سفح جبل سيناء يضم واحدة من أقدم المكتبات التاريخية العاملة في العالم؟'
    ),
    countryModePrompt: L(
      'Quel célèbre monastère classé à l’UNESCO au pied du mont Sinaï, fondé sous l’empereur Justinien au VIe siècle, est resté habité sans interruption depuis l’Antiquité tardive ?',
      'Which UNESCO-listed monastery at the foot of Mount Sinai, built under Emperor Justinian in the 6th century, has operated continuously ever since?',
      '¿Qué famoso monasterio inscrito en la UNESCO al pie del monte Sinaí permanece habitado sin interrupción desde el siglo VI?',
      'Qual célebre mosteiro inscrito na UNESCO aos pés do monte Sinai permanece ativo ininterruptamente desde o século VI?',
      'أي دير شهير مدرج في اليونسكو عند سفح جبل موسى بسيناء ظل عامراً دون انقطاع منذ القرن السادس؟'
    ),
    correct: L('Le monastère Sainte-Catherine', 'Saint Catherine’s Monastery', 'Monasterio de Santa Catalina', 'Mosteiro de Santa Catarina', 'دير سانت كاترين'),
    distractors: [
      L('Le monastère Saint-Antoine', 'Monastery of Saint Anthony', 'Monasterio de San Antonio', 'Mosteiro de Santo Antônio', 'دير الأنبا أنطونيوس'),
      L('La forteresse de Babylone', 'Babylon Fortress', 'Fortaleza de Babilonia', 'Fortaleza da Babilônia', 'حصن بابليون'),
      L('Le couvent d’Abou Mena', 'Abu Mena Monastery', 'Monasterio de Abu Mena', 'Mosteiro de Abu Mena', 'دير أبو مينا'),
    ],
    explanation: L(
      'Lieu vénéré par les traditions juive, chrétienne et musulmane, Sainte-Catherine possède des manuscrits et icônes exceptionnels protégés au cœur du massif du Sinaï.',
      'Revered by Judaism, Christianity, and Islam alike, Saint Catherine’s preserves priceless ancient manuscripts and icons beneath Mount Sinai.',
      'Venerado por judíos, cristianos y musulmanes, Santa Catalina conserva manuscritos e iconos milenarios en el Sinaí.',
      'Reverenciado pelas tradições judaica, cristã e islâmica, Santa Catarina preserva manuscritos raros no Sinai.',
      'يحظى دير سانت كاترين بمكانة رفيعة لدى الديانات السماوية ويحفظ مخطوطات وأيقونات نادرة منذ القرون الأولى.'
    ),
  }),
  mkQ({
    id: 'cur_EG_06',
    countryCode: 'EG',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 1,
    topicKey: 'peninsule_du_sinai_afrique_asie',
    source: 'Géographie physique — Transcontinentalité',
    prompt: L(
      'Quelle péninsule triangulaire désertique de l’est de l’Égypte, bordée par la Méditerranée et la mer Rouge, constitue la partie asiatique du pays ?',
      'Which triangular desert peninsula in eastern Egypt, bordered by the Mediterranean and Red Seas, forms the Asian part of the country?',
      '¿Qué península desértica triangular del este de Egipto, bañada por el Mediterráneo y el mar Rojo, constituye la parte asiática del país?',
      'Qual península desértica triangular do leste do Egito, banhada pelo Mediterrâneo e pelo Mar Vermelho, forma a parte asiática do país?',
      'أي شبه جزيرة صحراوية مثلثة شرق مصر بين البحر المتوسط والبحر الأحمر تمثل الجزء الآسيوي من البلاد؟'
    ),
    countryModePrompt: L(
      'Quelle grande péninsule montagneuse et désertique située à l’est du canal de Suez relie géographiquement l’Afrique au continent asiatique ?',
      'Which dramatic mountainous desert peninsula east of the Suez Canal geographically links Africa to Asia?',
      '¿Qué gran península montañosa y desértica al este del canal de Suez conecta geográficamente África con Asia?',
      'Qual grande península montanhosa e desértica a leste do canal de Suez liga geograficamente a África à Ásia?',
      'أي شبه جزيرة جبلية وصحراوية كبرى تقع شرق قناة السويس وتربط إفريقيا بآسيا؟'
    ),
    correct: L('La péninsule du Sinaï', 'Sinai Peninsula', 'Península del Sinaí', 'Península do Sinai', 'شبه جزيرة سيناء'),
    distractors: [
      L('Le désert Libyque', 'Libyan Desert', 'Desierto Líbico', 'Deserto da Líbia', 'الصحراء الغربية'),
      L('Le plateau de Gizeh', 'Giza Plateau', 'Meseta de Guiza', 'Planalto de Gizé', 'هضبة الجيزة'),
      L('Le delta du Nil', 'Nile Delta', 'Delta del Nilo', 'Delta do Nilo', 'دلتا النيل'),
    ],
    explanation: L(
      'Séparé du reste du pays par le canal de Suez, le Sinaï fait de l’Égypte un État transcontinental à cheval entre l’Afrique et l’Asie.',
      'Separated from mainland Egypt by the Suez Canal, Sinai makes Egypt a transcontinental bridge spanning Africa and Asia.',
      'Separado por el canal de Suez, el Sinaí convierte al país en puente natural entre África y Asia.',
      'Separado pelo canal de Suez, o Sinai torna o país uma ponte transcontinental entre África e Ásia.',
      'تفصل قناة السويس شبه جزيرة سيناء عن وادي النيل، ما يجعل البلاد حلقة وصل جغرافية بين قارتي إفريقيا وآسيا.'
    ),
  }),
  mkQ({
    id: 'cur_EG_07',
    countryCode: 'EG',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'lac_nasser_retenue_assouan',
    source: 'Hydrologie du Nil — Assouan',
    prompt: L(
      'Quel immense lac artificiel long d’environ 500 km, partagé avec le Soudan sous le nom de lac de Nubie, s’est formé après la construction du Haut Barrage d’Assouan ?',
      'Which massive 500 km reservoir—called Lake Nubia across the Sudanese border—formed behind the Aswan High Dam?',
      '¿Qué inmenso lago artificial de unos 500 km, llamado lago Nubia en Sudán, se formó tras la construcción de la Gran Presa de Asuán?',
      'Qual imenso lago artificial de cerca de 500 km, chamado lago Núbia no Sudão, formou-se atrás da Grande Barragem de Assuã?',
      'أي بحيرة صناعية شاسعة يمتد طولها لنحو 500 كم تشكلت خلف السد العالي في أسوان؟'
    ),
    countryModePrompt: L(
      'Comment s’appelle l’immense lac artificiel créé en amont du Haut Barrage d’Assouan dans les années 1960, qui régule les crues du Nil ?',
      'What is the name of the giant reservoir formed upstream of the Aswan High Dam in the 1960s to regulate Nile floods?',
      '¿Cómo se llama el inmenso embalse creado aguas arriba de la Gran Presa de Asuán en los años 60?',
      'Como se chama o imenso reservatório formado a montante da Grande Barragem de Assuã nos anos 1960?',
      'ما اسم البحيرة الصناعية العملاقة التي تكونت أمام السد العالي بأسوان في الستينيات لتنظيم فيضان النيل؟'
    ),
    correct: L('Le lac Nasser', 'Lake Nasser', 'Lago Nasser', 'Lago Nasser', 'بحيرة ناصر'),
    distractors: [
      L('Le lac Qarun', 'Lake Qarun', 'Lago Qarun', 'Lago Qarun', 'بحيرة قارون'),
      L('Le lac Manzala', 'Lake Manzala', 'Lago Manzala', 'Lago Manzala', 'بحيرة المنزلة'),
      L('Le lac Bardawil', 'Lake Bardawil', 'Lago Bardawil', 'Lago Bardawil', 'بحيرة البردويل'),
    ],
    explanation: L(
      'Stockant plus de 130 milliards de m³ d’eau, le lac Nasser protège les vallées des sécheresses et crues dévastatrices tout en développant pêche et hydroélectricité.',
      'Holding over 130 billion cubic metres of water, Lake Nasser safeguards farming against droughts and powers Aswan’s hydroelectric turbines.',
      'Con más de 130.000 millones de m³, el lago Nasser protege las cosechas frente a sequías y alimenta la hidroelectricidad.',
      'Armazenando mais de 130 bilhões de m³ de água, o lago Nasser protege contra secas e gera hidroeletricidade.',
      'تختزن بحيرة ناصر كميات هائلة من المياه لتحمي الزراعة من الجفاف وتُغذي محطات توليد الكهرباء في السد العالي.'
    ),
  }),
  mkQ({
    id: 'cur_EG_08',
    countryCode: 'EG',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'oasis_de_siwa_desert_occidental',
    source: 'Désert occidental — Patrimoine amazigh & antique',
    prompt: L(
      'Quelle oasis isolée du désert occidental près de la frontière libyenne, célèbre pour les ruines du temple de l’oracle d’Amon visité par Alexandre le Grand et ses lacs salés turquoise, conserve une culture amazighe unique ?',
      'Which isolated Western Desert oasis near the Libyan border preserves a distinct Amazigh language, turquoise salt lakes, and the ancient Temple of the Oracle visited by Alexander the Great?',
      '¿Qué oasis aislado del desierto occidental, célebre por el templo del Oráculo visitado por Alejandro Magno y sus lagos salados, conserva una lengua amazigh propia?',
      'Qual oásis isolado do deserto ocidental, famoso pelo templo do Oráculo visitado por Alexandre, o Grande e seus lagos salgados, preserva cultura amazigh própria?',
      'أي واحة نائية في الصحراء الغربية تشتهر ببحيراتها المالحة الزرقاء ومعبد الوحي الذي زاره الإسكندر الأكبر؟'
    ),
    countryModePrompt: L(
      'Quelle célèbre oasis berbérophone du désert occidental, située sous le niveau de la mer entre dunes et palmeraies, abrite la forteresse de terre salée « Shali » et le temple de l’Oracle d’Amon ?',
      'Which celebrated Amazigh-speaking Western Desert oasis, resting below sea level amidst salt-lake palms, holds the mud-salt Shali Fortress and Amun’s Oracle?',
      '¿Qué célebre oasis de habla amazigh del desierto occidental alberga la fortaleza de sal Shali y el Oráculo de Amón?',
      'Qual célebre oásis de língua amazigh no deserto ocidental abriga a fortaleza de sal Shali e o Oráculo de Amon?',
      'ما اسم الواحة الأمازيغية الشهيرة في الصحراء الغربية التي تحتضن قلعة شالي ومعبد وحي آمون؟'
    ),
    correct: L('L’oasis de Siwa', 'Siwa Oasis', 'Oasis de Siwa', 'Oásis de Siwa', 'واحة سيوة'),
    distractors: [
      L('L’oasis de Bahariya', 'Bahariya Oasis', 'Oasis de Bahariya', 'Oásis de Bahariya', 'الواحات البحرية'),
      L('L’oasis de Dakhla', 'Dakhla Oasis', 'Oasis de Dakhla', 'Oásis de Dakhla', 'واحة الداخلة'),
      L('L’oasis de Kharga', 'Kharga Oasis', 'Oasis de Kharga', 'Oásis de Kharga', 'واحة الخارجة'),
    ],
    explanation: L(
      'À 560 km à l’ouest du Caire, les habitants de Siwa parlent le siwi, langue amazighe orientale, au milieu de sources chaudes, d’oliveraies et de palmiers-dattiers.',
      'Nearly 560 km west of Cairo, Siwa’s inhabitants speak Eastern Amazigh (Siwi) while cultivating dates and olives beside desert hot springs.',
      'A 560 km de El Cairo, Siwa habla el siwi amazigh entre fuentes termales, olivares y extensos palmerales.',
      'A 560 km do Cairo, os habitantes de Siwa preservam o idioma siwi entre fontes termais, oliveiras e tamareiras.',
      'يحافظ أهالي سيوة على لغتهم السيوية الأمازيغية وتشتهر واحتهم بالعيون الطبيعية وإنتاج التمور والزيتون.'
    ),
  }),
  mkQ({
    id: 'cur_EG_09',
    countryCode: 'EG',
    category: 'geography',
    subCategory: 'anecdotes_insolites',
    difficulty: 3,
    topicKey: 'wadi_al_hitan_baleines_fayoum',
    source: 'UNESCO — Wadi Al-Hitan (2005)',
    prompt: L(
      'Quel site désertique classé à l’UNESCO dans le gouvernorat du Fayoum conserve des squelettes complets de baleines archaïques vieilles de 40 millions d’années dotées de pattes arrière vestigiales ?',
      'Which UNESCO-listed desert valley in Fayoum preserves 40-million-year-old fossil whales showing vestigial hind limbs from their transition from land to sea?',
      '¿Qué valle desértico en Fayún, Patrimonio de la UNESCO, conserva esqueletos fósiles de ballenas primitivas de 40 millones de años con patas traseras?',
      'Qual vale desértico em Faium, Patrimônio da UNESCO, preserva esqueletos fósseis de baleias de 40 milhões de anos com patas traseiras?',
      'أي وادٍ صحراوي في الفيوم مدرج لدى اليونسكو يحفظ هياكل حيتان بدائية عمرها 40 مليون سنة كانت لها أطراف خلفية؟'
    ),
    countryModePrompt: L(
      'Quel site paléontologique du Fayoum inscrit à l’UNESCO en 2005 prouve comment les ancêtres terrestres des cétacés ont évolué vers la vie marine ?',
      'Which Fayoum palaeontological site inscribed by UNESCO in 2005 preserves giant Basilosaurus fossils showing how whales evolved from land mammals?',
      '¿Qué yacimiento paleontológico de Fayún, inscrito en la UNESCO en 2005, documenta el paso de las ballenas de la tierra al mar?',
      'Qual sítio paleontológico de Faium, inscrito na UNESCO em 2005, documenta a evolução das baleias da terra ao mar?',
      'أي موقع أحفوري في الفيوم أُدرج في اليونسكو عام 2005 ويوثق تطور الحيتان من كائنات برية إلى بحرية؟'
    ),
    correct: L('Wadi Al-Hitan (Vallée des Baleines)', 'Wadi Al-Hitan (Whale Valley)', 'Wadi Al-Hitan (Valle de las Ballenas)', 'Wadi Al-Hitan (Vale das Baleias)', 'وادي الحيتان'),
    distractors: [
      L('Le Désert Blanc de Farafra', 'White Desert of Farafra', 'Desierto Blanco de Farafra', 'Deserto Branco de Farafra', 'الصحراء البيضاء بالفرافرة'),
      L('La Vallée des Rois', 'Valley of the Kings', 'Valle de los Reyes', 'Vale dos Reis', 'وادي الملوك'),
      L('Le plateau de Saqqarah', 'Saqqara Plateau', 'Meseta de Saqqara', 'Planalto de Sacará', 'هضبة سقارة'),
    ],
    explanation: L(
      'Jadis recouvert par l’océan Téthys, Wadi Al-Hitan révèle plus de 400 squelettes de Basilosaurus et Dorudon dans un musée à ciel ouvert exceptionnel.',
      'Once submerged beneath the ancient Tethys Ocean, Wadi Al-Hitan preserves over 400 archaic whale skeletons in open desert sandstone.',
      'Antaño cubierto por el océano Tetis, Wadi Al-Hitan conserva más de 400 esqueletos de cetáceos arcaicos.',
      'Antigo fundo do oceano Tétis, Wadi Al-Hitan preserva mais de 400 esqueletos fósseis de baleias primitivas.',
      'كان وادي الحيتان مغموراً قديماً ببحر تيثس، ويحفظ اليوم أكثر من 400 هيكل أحفوري للحيتان المنقرضة.'
    ),
  }),
  mkQ({
    id: 'cur_EG_10',
    countryCode: 'EG',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 1,
    topicKey: 'le_papyrus_support_ecriture_antique',
    source: 'Civilisation pharaonique — Delta du Nil',
    prompt: L(
      'Quelle plante aquatique poussant dans les marais du Nil permit aux anciens scribes d’inventer le support d’écriture qui a donné le mot « papier » ?',
      'Which aquatic reed growing along Nile marshes enabled ancient scribes to create the writing sheets that gave rise to the word "paper"?',
      '¿Qué planta acuática del Nilo permitió a los antiguos escribas fabricar las láminas de escritura que dieron origen a la palabra "papel"?',
      'Qual planta aquática do Nilo permitiu aos antigos escribas criar as folhas que deram origem à palavra "papel"?',
      'أي نبات مائي كان ينمو على ضفاف النيل واستخدمه القدماء لصناعة صحائف الكتابة التي اشتُقت منها كلمة "ورق" باللغات الأوروبية؟'
    ),
    countryModePrompt: L(
      'Comment s’appelle la plante des berges du Nil dont la moelle tressée et pressée servait de support officiel aux manuscrits pharaoniques et méditerranéens pendant des millénaires ?',
      'What is the name of the Nile riverbank reed whose pressed strips formed the premier Mediterranean writing material for millennia?',
      '¿Cómo se llama la planta de las orillas del Nilo cuyas fibras prensadas fueron el soporte de escritura durante milenios?',
      'Como se chama a planta das margens do Nilo cujas tiras prensadas foram suporte de escrita por milênios?',
      'ما اسم النبات النيلي الذي ضُغطت سيقانه لصنع ألواح الكتابة في الحضارة الفرعونية لآلاف السنين؟'
    ),
    correct: L('Le papyrus', 'Papyrus', 'El papiro', 'O papiro', 'نبات البردي'),
    distractors: [
      L('Le bambou du Nil', 'Nile bamboo', 'Bambú del Nilo', 'Bambu do Nilo', 'خيزران النيل'),
      L('Le lotus bleu', 'Blue lotus', 'Loto azul', 'Lótus-azul', 'اللوتس الأزرق'),
      L('La feuille de dattier', 'Date palm frond', 'Hoja de datilera', 'Folha de tamareira', 'سعف النخيل'),
    ],
    explanation: L(
      'Assemblé en bandes croisées pressées sans colle grâce à sa propre sève végétale, le papyrus fut exporté dans toute la Méditerranée dès le IIIe millénaire av. J.-C.',
      'Woven in criss-crossing strips pressed together with natural plant sap, papyrus scrolls carried Mediterranean scholarship for over 3,000 years.',
      'Prensado en tiras cruzadas con su propia savia, el papiro fue el gran soporte cultural del Mediterráneo antiguo.',
      'Prensado em tiras cruzadas com a própria seiva natural, o papiro difundiu textos por todo o Mediterrâneo antigo.',
      'صُنع ورق البردي بضغط شرائح السيقان المتقاطعة فانتشر في أرجاء المتوسط كأهم وعاء للمعرفة القديمة.'
    ),
  }),
  mkQ({
    id: 'cur_EG_11',
    countryCode: 'EG',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'ful_medames_petit_dejeuner',
    source: 'Gastronomie populaire cairote',
    prompt: L(
      'Quel plat populaire incontournable des matins égyptiens consiste en fèves brunes mijotées toute la nuit dans une jarre (« idra »), assaisonnées d’huile, de citron et de cumin ?',
      'Which beloved Egyptian morning staple consists of brown fava beans slow-simmered overnight in an urn ("idra") and dressed with oil, lemon, and cumin?',
      '¿Qué popular plato matutino egipcio consiste en habas cocidas lentamente toda la noche y aliñadas con aceite, limón y comino?',
      'Qual popular prato matinal egípcio consiste em favas cozidas lentamente por toda a noite e temperadas com azeite, limão e cominho?',
      'أي طبق مصري شعبي لا غنى عنه في وجبة الإفطار يُحضّر من الفول المطبوخ طوال الليل بالزيت والليمون والكمون؟'
    ),
    countryModePrompt: L(
      'Comment appelle-t-on le plat traditionnel de fèves mijotées longuement dans un récipient étroit (« idra ») et servies avec huile, cumin et pain baladi dès l’aube ?',
      'What is the classic morning dish of fava beans simmered slowly in a narrow "idra" pot and served with olive oil, cumin, and baladi bread?',
      '¿Cómo se llama el plato tradicional de habas cocidas en olla "idra" y servidas con aceite, comino y pan baladi al amanecer?',
      'Como se chama o prato matinal de favas cozidas em pote "idra" e servidas com azeite, cominho e pão baladi?',
      'ما اسم الطبق الشعبي الأشهر للفطور والمحضّر من الفول المطهو ببطء في القدرة والمقدم بالزيت والكمون؟'
    ),
    correct: L('Le ful medames', 'Ful medames', 'Ful medames', 'Ful medames', 'الفول المدمس'),
    distractors: [
      L('La fatteh', 'Fatteh', 'Fatteh', 'Fatteh', 'الفتة'),
      L('Le shawarma', 'Shawarma', 'Shawarma', 'Shawarma', 'الشاورما'),
      L('La basboussa', 'Basbousa', 'Basbousa', 'Basbousa', 'البسبوسة'),
    ],
    explanation: L(
      'Souvent accompagné de falafels de fèves (« taamiya »), de tomates et de pain baladi chaud, le ful medames remonterait à l’époque antique.',
      'Paired with crispy fava-bean taamiya and warm baladi flatbread, ful medames has nourished Nile households for centuries.',
      'Acompañado de taamiya crujiente y pan baladi caliente, el ful medames alimenta el día a día desde tiempos ancestrales.',
      'Servido com taamiya crocante e pão baladi quentinho, o ful medames nutre o país há séculos.',
      'يُعد الفول المدمس مع الطعمية والخبز البلدي الركيزة اليومية الأساسية لوجبة الإفطار الشعبية.'
    ),
  }),
  mkQ({
    id: 'cur_EG_12',
    countryCode: 'EG',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'la_molokhia_soupe_verte_ail',
    source: 'Cuisine traditionnelle du Nil',
    prompt: L(
      'Quelle célèbre soupe verte veloutée à base de feuilles de corète potagère finement hachées à la mezzaluna (« makhrata ») reçoit à la fin une poêlée parfumée d’ail et de coriandre (« tasha ») ?',
      'Which famous velvety green soup made from finely minced jute leaves receives a sizzling garlic-and-coriander finish ("tasha") at the end?',
      '¿Qué famosa sopa verde elaborada con hojas de yute picadas finamente recibe al final un sofrito aromático de ajo y cilantro ("tasha")?',
      'Qual famosa sopa verde feita de folhas de juta picadas recebe ao final um refogado aromático de alho e coentro ("tasha")?',
      'أي حساء أخضر شهير يُعد من أوراق الملوخية المفرومة بالمخرطة ويُختم بطشة الثوم والكزبرة الساخنة؟'
    ),
    countryModePrompt: L(
      'Quelle spécialité culinaire incontournable se reconnaît au célèbre bruit et parfum de la « tasha » (ail frit à la coriandre versé dans le bouillon vert de corète) ?',
      'Which quintessential green soup is famous for the dramatic sizzle of "tasha" (garlic fried with ground coriander) poured over minced jute leaves?',
      '¿Qué plato verde tradicional se distingue por el inconfundible chisporroteo de la "tasha" de ajo y cilantro sobre sus hojas picadas?',
      'Qual prato verde tradicional é famoso pelo aroma da "tasha" de alho e coentro despejada sobre as folhas picadas?',
      'ما اسم الطبق الأخضر التقليدي الذي يشتهر بصوت ورائحة "الطشة" من الثوم المقلي بالكزبرة؟'
    ),
    correct: L('La molokhia', 'Molokhia', 'Molokhia', 'Molokhia', 'الملوخية'),
    distractors: [
      L('La bamia', 'Bamia', 'Bamia', 'Bamia', 'البامية'),
      L('La shorba adas', 'Shorbat adas', 'Sopa de lentejas', 'Sopa de lentilha', 'شوربة العدس'),
      L('Le hawawshi', 'Hawawshi', 'Hawawshi', 'Hawawshi', 'الحواوشي'),
    ],
    explanation: L(
      'Hachée à la lame courbe à deux poignées (makhrata) plutôt qu’au mixeur pour préserver sa texture soyeuse, la molokhia se déguste sur du riz blanc ou avec du pain.',
      'Traditionally minced with a crescent-shaped makhrata blade for silky body, molokhia is served with white rice or crisp flatbread.',
      'Picada con cuchilla curva makhrata para lograr su textura sedosa, la molokhia se sirve con arroz o pan.',
      'Picada com lâmina curva makhrata para manter a textura aveludada, a molokhia acompanha arroz ou pão.',
      'تُفرم أوراق الملوخية تقليدياً بالمخرطة للحفاظ على قوامها المميز وتُقدم مع الأرز الأبيض أو الخبز.'
    ),
  }),
  mkQ({
    id: 'cur_EG_13',
    countryCode: 'EG',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'abdel_halim_hafez_rossignol_brun',
    source: 'Âge d’or de la chanson & du cinéma arabes',
    prompt: L(
      'Quel légendaire chanteur et acteur égyptien des années 1950–1970, interprète de « Ahwak » et « Sawah », était surnommé « Al-Andalib Al-Asmar » (le Rossignol brun) ?',
      'Which legendary Egyptian singer and film star of the 1950s–1970s, famous for "Ahwak" and "Sawah", was nicknamed "The Dark-Skinned Nightingale" (Al-Andalib Al-Asmar)?',
      '¿Qué legendario cantante y actor egipcio de los años 50-70, intérprete de "Ahwak" y "Sawah", fue apodado el "Ruiseñor Moreno"?',
      'Qual lendário cantor e ator egípcio dos anos 1950–1970, intérprete de "Ahwak" e "Sawah", ficou conhecido como "Rouxinol Moreno"?',
      'أي مطرب وممثل مصري أسطوري في الخمسينيات والسبعينيات اشتهر بأغنيتي "أهواك" و"سواح" ولُقب بالعندليب الأسمر؟'
    ),
    countryModePrompt: L(
      'Comment s’appelait le célèbre chanteur romantique et vedette du grand écran, interprète d’« Ahwak » et de « Zay El Hawa », surnommé « le Rossignol brun » ?',
      'Who was the beloved romantic singer and cinema icon behind "Ahwak" and "Zay El Hawa", affectionately called "Al-Andalib Al-Asmar"?',
      '¿Cómo se llamaba el célebre cantante romántico y astro del cine apodado "El Ruiseñor Moreno", voz de "Ahwak"?',
      'Quem foi o célebre cantor romântico e astro de cinema apelidado de "Rouxinol Moreno", voz de "Ahwak"?',
      'من المطرب الرومانسي الشهير ونجم السينما صاحب "أهواك" و"زي الهوا" والملقب بالعندليب الأسمر؟'
    ),
    correct: L('Abdel Halim Hafez', 'Abdel Halim Hafez', 'Abdel Halim Hafez', 'Abdel Halim Hafez', 'عبد الحليم حافظ'),
    distractors: [
      L('Farid El Atrache', 'Farid al-Atrash', 'Farid al-Atrash', 'Farid al-Atrash', 'فريد الأطرش'),
      L('Mohammed Abdel Wahab', 'Mohammed Abdel Wahab', 'Mohammed Abdel Wahab', 'Mohammed Abdel Wahab', 'محمد عبد الوهاب'),
      L('Sayed Darwish', 'Sayed Darwish', 'Sayed Darwish', 'Sayed Darwish', 'سيد درويش'),
    ],
    explanation: L(
      'Avec Oum Kalthoum, Mohammed Abdel Wahab et Farid El Atrache, Abdel Halim Hafez incarne l’âge d’or de la chanson moderne et du cinéma musical du Caire.',
      'Alongside Umm Kulthum and Mohammed Abdel Wahab, Abdel Halim Hafez shaped the golden age of Arab song and Cairo musical cinema.',
      'Junto a Umm Kulthum y Mohammed Abdel Wahab, Abdel Halim Hafez definió la edad de oro musical de El Cairo.',
      'Ao lado de Umm Kulthum e Abdel Wahab, Abdel Halim Hafez marcou a era de ouro da música e do cinema no Cairo.',
      'شكّل عبد الحليم حافظ مع أم كلثوم وعبد الوهاب عصر الغناء والسينما الذهبي في القاهرة.'
    ),
  }),
  mkQ({
    id: 'cur_EG_14',
    countryCode: 'EG',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'youssef_chahine_cinema_alexandrie',
    source: 'Festival de Cannes 1997 & Cinéma d’Alexandrie',
    prompt: L(
      'Quel immense réalisateur natif d’Alexandrie, auteur de « Gare centrale » (1958), « Le Moineau » et « Le Destin », a reçu en 1997 le Prix du 50e anniversaire du Festival de Cannes pour l’ensemble de son œuvre ?',
      'Which acclaimed Alexandria-born filmmaker behind "Cairo Station" (1958) and "Destiny" received the 1997 Cannes 50th Anniversary Lifetime Achievement Award?',
      '¿Qué gran cineasta nacido en Alejandría, director de "Estación central" y "El destino", recibió en 1997 el Premio del 50º aniversario de Cannes?',
      'Qual grande cineasta nascido em Alexandria, diretor de "Estação Central" e "O Destino", recebeu em 1997 o Prêmio do 50º aniversário de Cannes?',
      'أي مخرج سينمائي كبير من مواليد الإسكندرية أخرج "باب الحديد" و"المصير" ونال جائزة اليوبيل الخمسيني في كان عام 1997؟'
    ),
    countryModePrompt: L(
      'Quel grand cinéaste originaire d’Alexandrie a réalisé « Gare centrale » (Bab El Hadid), « Alexandrie… pourquoi ? » et « Le Destin », primé à Cannes en 1997 ?',
      'Which famed Alexandria-born director created "Cairo Station" (Bab El Hadid), "Alexandria... Why?", and Cannes-honoured "Destiny"?',
      '¿Qué célebre cineasta de Alejandría dirigió "Bab El Hadid", "Alejandría ¿por qué?" y "El destino"?',
      'Qual célebre cineasta de Alexandria dirigiu "Bab El Hadid", "Alexandria... Por quê?" e "O Destino"?',
      'أي مخرج سكندري بارز أبدع أفلام "باب الحديد" و"إسكندرية ليه" و"المصير" وكُرّم في مهرجان كان 1997؟'
    ),
    correct: L('Youssef Chahine', 'Youssef Chahine', 'Youssef Chahine', 'Youssef Chahine', 'يوسف شاهين'),
    distractors: [
      L('Salah Abou Seif', 'Salah Abu Seif', 'Salah Abu Seif', 'Salah Abu Seif', 'صلاح أبو سيف'),
      L('Shadi Abdel Salam', 'Shadi Abdel Salam', 'Shadi Abdel Salam', 'Shadi Abdel Salam', 'شادي عبد السلام'),
      L('Marwan Hamed', 'Marwan Hamed', 'Marwan Hamed', 'Marwan Hamed', 'مروان حامد'),
    ],
    explanation: L(
      'Figure humaniste et passionnée du septième art, Youssef Chahine a révélé Omar Sharif au cinéma et porté la cité méditerranéenne d’Alexandrie au rang de mythe cinématographique.',
      'A towering figure of world cinema, Youssef Chahine gave Omar Sharif his screen debut and immortalized Alexandria in an autobiographical quartet.',
      'Figura universal del séptimo arte, Youssef Chahine descubrió a Omar Sharif e inmortalizó Alejandría en su tetralogía.',
      'Nome maior do cinema mundial, Youssef Chahine revelou Omar Sharif e imortalizou Alexandria nas telas.',
      'أطلق يوسف شاهين مسيرة عمر الشريف السينمائية وخلد مدينة الإسكندرية في أعمال عالمية نالت تقدير المهرجانات الكبرى.'
    ),
  }),
  mkQ({
    id: 'cur_EG_15',
    countryCode: 'EG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'hassan_shehata_triple_can_2006_2010',
    source: 'CAF — Palmarès historique 2006–2010',
    prompt: L(
      'Quel sélectionneur légendaire a dirigé les Pharaons d’Égypte lors d’un exploit unique : remporter trois Coupes d’Afrique des Nations d’affilée (2006, 2008 et 2010) ?',
      'Which legendary coach guided Egypt’s Pharaohs to an unprecedented feat: winning three consecutive Africa Cup of Nations titles in 2006, 2008, and 2010?',
      '¿Qué legendario seleccionador dirigió a los Faraones de Egipto en la hazaña única de ganar tres Copas Africanas seguidas (2006, 2008 y 2010)?',
      'Qual lendário técnico comandou os Faraós do Egito no feito único de vencer três Copas Africanas seguidas (2006, 2008 e 2010)?',
      'أي مدرب أسطوري قاد منتخب الفراعنة في إنجاز غير مسبوق بتحقيق ثلاثة ألقاب متتالية لكأس أمم إفريقيا (2006 و2008 و2010)؟'
    ),
    countryModePrompt: L(
      'Quel ancien numéro 10 du Zamalek devenu sélectionneur surnommé « El Moallem » a guidé les Pharaons vers le triplé historique des CAN 2006, 2008 et 2010 ?',
      'Which former Zamalek star turned head coach, nicknamed "El Moallem", guided the Pharaohs to an unprecedented AFCON three-peat in 2006, 2008, and 2010?',
      '¿Qué exestrella del Zamalek apodada "El Moallem" dirigió a los Faraones hacia el tricampeonato seguido de 2006, 2008 y 2010?',
      'Qual ex-craque do Zamalek apelidado de "El Moallem" conduziu os Faraós ao tricampeonato seguido da CAN em 2006, 2008 e 2010?',
      'أي نجم سابق للزمالك ومدرب لُقب بـ"المعلم" قاد الفراعنة إلى الثلاثية التاريخية المتتالية في 2006 و2008 و2010؟'
    ),
    correct: L('Hassan Shehata', 'Hassan Shehata', 'Hassan Shehata', 'Hassan Shehata', 'حسن شحاتة'),
    distractors: [
      L('Mahmoud El-Gohary', 'Mahmoud El-Gohary', 'Mahmoud El-Gohary', 'Mahmoud El-Gohary', 'محمود الجوهري'),
      L('Hossam Hassan', 'Hossam Hassan', 'Hossam Hassan', 'Hossam Hassan', 'حسام حسن'),
      L('Taha Ismail', 'Taha Ismail', 'Taha Ismail', 'Taha Ismail', 'طه إسماعيل'),
    ],
    explanation: L(
      'Surnommé « Le Maître » (El Moallem), Hassan Shehata resta invaincu sur 19 matchs consécutifs en phase finale de CAN avec Mohamed Aboutrika, Essam El-Hadary et Ahmed Hassan.',
      'Known as "El Moallem", Hassan Shehata went 19 consecutive AFCON finals matches unbeaten while lifting three straight trophies.',
      'Apodado "El Maestro", Hassan Shehata encadenó 19 partidos invicto en fases finales de la CAN al conquistar tres títulos seguidos.',
      'Apelidado de "O Mestre", Hassan Shehata somou 19 jogos de invencibilidade seguidos em fases finais da CAN com três títulos.',
      'حافظ المدرب حسن شحاتة الملقب بالمعلم على سجل خالٍ من الهزائم في 19 مباراة متتالية بالبطولة ليحقق الثلاثية الذهبية.'
    ),
  }),
  mkQ({
    id: 'cur_EG_16',
    countryCode: 'EG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'mahmoud_el_khatib_bibo_ballon_or_1983',
    source: 'France Football / CAF — Ballon d’Or Africain 1983',
    prompt: L(
      'Sous quel surnom populaire l’icône d’Al Ahly Mahmoud El Khatib, sacré Ballon d’Or africain en 1983 avant de devenir président du club, est-il célébré des supporters ?',
      'By what popular nickname is Al Ahly legend Mahmoud El Khatib—winner of the 1983 African Footballer of the Year award and later club president—affectionately known?',
      '¿Con qué popular apodo se conoce a Mahmoud El Khatib, Balón de Oro africano en 1983 y presidente del Al Ahly?',
      'Por qual apelido popular é conhecido Mahmoud El Khatib, Bola de Ouro africano em 1983 e presidente do Al Ahly?',
      'بأي لقب شعبي يُعرف أسطورة النادي الأهلي محمود الخطيب الفائز بالكرة الذهبية الإفريقية عام 1983؟'
    ),
    countryModePrompt: L(
      'Quel surnom affectueux porte l’ancien attaquant génial d’Al Ahly Mahmoud El Khatib, premier joueur du pays à remporter le Ballon d’Or africain en 1983 ?',
      'What affectionate nickname does Al Ahly icon Mahmoud El Khatib carry, the nation’s first winner of the African Footballer of the Year trophy in 1983?',
      '¿Qué cariñoso apodo recibe Mahmoud El Khatib, primer futbolista del país en ganar el Balón de Oro africano en 1983?',
      'Qual apelido carinhoso carrega Mahmoud El Khatib, primeiro jogador do país a conquistar a Bola de Ouro africana em 1983?',
      'ما اللقب المحبب لنجم الأهلي السابق محمود الخطيب أول لاعب من البلاد يتوج بالكرة الذهبية الإفريقية عام 1983؟'
    ),
    correct: L('Bibo', 'Bibo', 'Bibo', 'Bibo', 'بيبو'),
    distractors: [
      L('Mido', 'Mido', 'Mido', 'Mido', 'ميدو'),
      L('Zizo', 'Zizo', 'Zizo', 'Zizo', 'زيزو'),
      L('Shika', 'Shika', 'Shika', 'Shika', 'شيكا'),
    ],
    explanation: L(
      'Adulé pour ses dribbles chaloupés et sa sportivité exemplaire — n’ayant reçu qu’un seul carton jaune de toute sa carrière — « Bibo » remporta la CAN 1986 avant de présider Al Ahly.',
      'Admired for graceful dribbling and receiving only a single yellow card in his entire career, "Bibo" won the 1986 AFCON before serving as Al Ahly president.',
      'Admirado por su elegancia y juego limpio, "Bibo" ganó la CAN 1986 antes de presidir el Al Ahly.',
      'Admirado pela técnica e fair play, "Bibo" conquistou a CAN 1986 antes de se tornar presidente do Al Ahly.',
      'اشتهر الخطيب بلقب "بيبو" وبأخلاقه الرياضية العالية وتتويجه بأمم إفريقيا 1986 قبل توليه رئاسة النادي الأهلي.'
    ),
  }),
];

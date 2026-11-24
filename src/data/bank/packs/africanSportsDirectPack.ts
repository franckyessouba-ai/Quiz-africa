import { L } from '../../countriesPart1';
import { mkQ } from './packHelpers';

export const AFRICAN_SPORTS_DIRECT_PACK = [
  // AO — Angola
  mkQ({
    id: 'cur_AO_sp1',
    countryCode: 'AO',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'flavio_amado_coupe_du_monde_2006',
    source: 'FIFA — Coupe du Monde 2006',
    prompt: L(
      'Quel attaquant des Palancas Negras a inscrit l’unique but de l’Angola lors de sa première participation à la Coupe du monde en 2006 face à l’Iran ?',
      'Which Palancas Negras striker scored Angola’s sole goal at their debut 2006 FIFA World Cup against Iran?',
      '¿Qué delantero marcó el único gol de Angola en su debut mundialista de 2006 frente a Irán?',
      'Qual atacante marcou o único gol de Angola em sua estreia na Copa do Mundo de 2006 contra o Irã?',
      'أي مهاجم سجل الهدف الوحيد لأنغولا في مشاركتها المونديالية الأولى عام 2006 أمام إيران؟'
    ),
    countryModePrompt: L(
      'Quel avant-centre des Palancas Negras a inscrit l’unique but national de la Coupe du monde 2006 de la tête contre l’Iran avant de briller à Al Ahly ?',
      'Which Palancas Negras striker headed home the nation’s lone 2006 FIFA World Cup goal against Iran before starring for Al Ahly?',
      '¿Qué delantero de los Palancas Negras anotó de cabeza el gol nacional en el Mundial de 2006 ante Irán?',
      'Qual centroavante dos Palancas Negras marcou de cabeça o gol nacional na Copa de 2006 contra o Irã?',
      'أي مهاجم لمنتخب بالانكاس نيغراس سجل الهدف الوطني الوحيد في مونديال 2006 برأسية أمام إيران؟'
    ),
    correct: L('Flávio Amado', 'Flávio Amado', 'Flávio Amado', 'Flávio Amado', 'فلافيو أمادو'),
    distractors: [
      L('Akwá', 'Akwá', 'Akwá', 'Akwá', 'أكوا'),
      L('Manucho', 'Manucho', 'Manucho', 'Manucho', 'مانوتشو'),
      L('Mantorras', 'Mantorras', 'Mantorras', 'Mantorras', 'مانتوراس'),
    ],
    explanation: L(
      'Formé à Petro de Luanda, Flávio Amado marqua à Leipzig en 2006 puis remporta plusieurs Ligues des champions CAF avec Al Ahly.',
      'Rising from Petro de Luanda, Flávio Amado netted in Leipzig in 2006 and won multiple CAF Champions League crowns with Al Ahly.',
      'Surgido del Petro de Luanda, Flávio Amado anotó en 2006 y ganó varias Ligas de Campeones de la CAF con Al Ahly.',
      'Revelado pelo Petro de Luanda, Flávio Amado marcou em 2006 e venceu várias Ligas dos Campeões da CAF pelo Al Ahly.',
      'تألق فلافيو أمادو في مونديال 2006 قبل أن يحرز عدة ألقاب لدوري أبطال إفريقيا مع الأهلي المصري.'
    ),
  }),
  mkQ({
    id: 'cur_AO_sp2',
    countryCode: 'AO',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'petro_de_luanda_girabola',
    source: 'Girabola & CAF — Clubs de Luanda',
    prompt: L(
      'Quel grand club de football basé à Luanda, aux couleurs bleu, jaune et rouge, détient le record historique de titres de champion d’Angola en Girabola ?',
      'Which major Luanda football club in blue, yellow, and red holds the all-time record for Angolan Girabola titles?',
      '¿Qué gran club de Luanda posee el récord histórico de títulos de la liga Girabola de Angola?',
      'Qual grande clube de Luanda detém o recorde histórico de títulos do campeonato Girabola de Angola?',
      'أي نادٍ كبير في لواندا يحمل الرقم القياسي في عدد ألقاب الدوري المحلي (جيرابولا)؟'
    ),
    countryModePrompt: L(
      'Quel club fondé en 1980 dans la capitale détient le palmarès le plus riche du championnat national Girabola devant Primeiro de Agosto ?',
      'Which capital club founded in 1980 leads the all-time Girabola championship table ahead of Primeiro de Agosto?',
      '¿Qué club fundado en 1980 en la capital encabeza el palmarés histórico de la Girabola por delante de Primeiro de Agosto?',
      'Qual clube fundado em 1980 na capital lidera o ranking de títulos da Girabola à frente do Primeiro de Agosto?',
      'أي نادٍ تأسس عام 1980 في العاصمة يتصدر قائمة الأندية الأكثر تتويجاً بالدوري المحلي أمام بريميرو دي أغوستو؟'
    ),
    correct: L('Petro de Luanda', 'Petro de Luanda', 'Petro de Luanda', 'Petro de Luanda', 'بترو دي لواندا'),
    distractors: [
      L('Sagrada Esperança', 'Sagrada Esperança', 'Sagrada Esperança', 'Sagrada Esperança', 'ساغرادا إسبيرانسا'),
      L('Interclube', 'Interclube', 'Interclube', 'Interclube', 'إنتركلوب'),
      L('Kabuscorp', 'Kabuscorp', 'Kabuscorp', 'Kabuscorp', 'كابوسكورب'),
    ],
    explanation: L(
      'Fondé en 1980, l’Atlético Petróleos de Luanda règne régulièrement sur la Girabola et participe aux phases finales de Ligue des champions CAF.',
      'Founded in 1980, Atlético Petróleos de Luanda has captured record Girabola titles and regularly reaches CAF Champions League knockouts.',
      'Fundado en 1980, el Atlético Petróleos de Luanda lidera el palmarés de la Girabola y compite en la élite africana.',
      'Fundado em 1980, o Atlético Petróleos de Luanda lidera os títulos nacionais e marca presença constante na CAF.',
      'يتصدر نادي أتلتيكو بترو دي لواندا سجل الألقاب المحلية ويحضر بانتظام في الأدوار المتقدمة بدوري أبطال إفريقيا.'
    ),
  }),

  // BW — Botswana
  mkQ({
    id: 'cur_BW_sp1',
    countryCode: 'BW',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 1,
    topicKey: 'letsile_tebogo_paris_2024_200m',
    source: 'CIO & World Athletics — Paris 2024',
    prompt: L(
      'Quel sprinteur originaire de Kanye a offert au Botswana la toute première médaille d’or olympique de son histoire en remportant le 200 mètres à Paris en 2024 ?',
      'Which Kanye-born sprinter won Botswana’s first-ever Olympic gold medal by storming the men’s 200m at Paris 2024?',
      '¿Qué velocista dio a Botsuana su primera medalla de oro olímpica en los 200 metros de París 2024?',
      'Qual velocista deu a Botsuana sua primeira medalha de ouro olímpica ao vencer os 200m em Paris 2024?',
      'أي عداء سريع من كانيي منح بوتسوانا أول ميدالية ذهبية أولمبية في تاريخها بفوزه بسباق 200 متر في باريس 2024؟'
    ),
    countryModePrompt: L(
      'Quel sprinteur de 21 ans a décroché la première médaille d’or olympique du pays en remportant la finale du 200 m aux Jeux de Paris 2024 en 19 s 46 ?',
      'Which 21-year-old sprinter captured the nation’s historic first Olympic gold medal in the 200m final at Paris 2024 in 19.46 seconds?',
      '¿Qué velocista ganó el primer oro olímpico del país en la final de 200 m de París 2024 con 19,46 s?',
      'Qual velocista conquistou o primeiro ouro olímpico do país na final dos 200m em Paris 2024 com 19s46?',
      'أي عداء شاب أحرز أول ذهبية أولمبية للبلاد في نهائي 200 متر بأولمبياد باريس 2024 بزمن 19.46 ثانية؟'
    ),
    correct: L('Letsile Tebogo', 'Letsile Tebogo', 'Letsile Tebogo', 'Letsile Tebogo', 'ليتسيل تيبوغو'),
    distractors: [
      L('Nijel Amos', 'Nijel Amos', 'Nijel Amos', 'Nijel Amos', 'نايجل أموس'),
      L('Isaac Makwala', 'Isaac Makwala', 'Isaac Makwala', 'Isaac Makwala', 'إسحاق ماكوالا'),
      L('Bayapo Ndori', 'Bayapo Ndori', 'Bayapo Ndori', 'Bayapo Ndori', 'بايابو ندوري'),
    ],
    explanation: L(
      'Avec un chrono historique de 19 s 46 (record d’Afrique), Letsile Tebogo est devenu le premier champion olympique africain du 200 m.',
      'Running an African record 19.46 seconds, Letsile Tebogo became Africa’s first-ever Olympic 200m champion.',
      'Con un récord africano de 19,46 segundos, Letsile Tebogo fue el primer campeón olímpico africano en 200 metros.',
      'Com recorde africano de 19s46, Letsile Tebogo tornou-se o primeiro africano campeão olímpico dos 200 metros.',
      'حقق ليتسيل تيبوغو رقماً قياسياً إفريقياً (19.46 ثانية) ليصبح أول عداء إفريقي يفوز بذهبية 200 متر الأولمبية.'
    ),
  }),
  mkQ({
    id: 'cur_BW_sp2',
    countryCode: 'BW',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'zebras_premiere_can_2012',
    source: 'BFA & CAF — Qualifications CAN 2012',
    prompt: L(
      'En quelle année les Zebras du Botswana ont-ils disputé pour la première fois de leur histoire la phase finale de la Coupe d’Afrique des Nations ?',
      'In what year did the Botswana Zebras qualify for and compete in their first-ever Africa Cup of Nations finals?',
      '¿En qué año disputaron las Cebras de Botsuana su primera fase final de la Copa Africana de Naciones?',
      'Em que ano as Zebras de Botsuana disputaram pela primeira vez a fase final da Copa Africana de Nações?',
      'في أي عام شارك منتخب الحمر الوحشية (زيبراز) لأول مرة في نهائيات كأس أمم إفريقيا؟'
    ),
    countryModePrompt: L(
      'En quelle année les Zebras, menés par Diphetogo Selolwane et Jerome Ramatlhakwane, ont-ils participé à la toute première CAN de leur histoire ?',
      'In what year did the Zebras, led by Diphetogo Selolwane and Jerome Ramatlhakwane, make their historic AFCON debut?',
      '¿En qué año debutaron las Cebras en la Copa Africana de Naciones bajo el liderazgo de Diphetogo Selolwane?',
      'Em que ano as Zebras estrearam na Copa Africana de Nações lideradas por Diphetogo Selolwane?',
      'في أي عام سجل منتخب زيبراز أول حضور له في نهائيات كأس أمم إفريقيا بقيادة ديفيتوغو سيلولواني؟'
    ),
    correct: L('2012', '2012', '2012', '2012', '2012'),
    distractors: [
      L('2004', '2004', '2004', '2004', '2004'),
      L('2008', '2008', '2008', '2008', '2008'),
      L('2017', '2017', '2017', '2017', '2017'),
    ],
    explanation: L(
      'Première sélection qualifiée pour la CAN 2012 avant même la fin des éliminatoires, l’équipe des Zebras créa la sensation sous la direction de Stanley Tshosane.',
      'Guided by Stanley Tshosane, the Zebras became the very first team to qualify for the 2012 AFCON after dominating their group.',
      'Dirigidos por Stanley Tshosane, las Cebras fueron la primera selección en asegurar su billete a la CAN 2012.',
      'Treinadas por Stanley Tshosane, as Zebras foram a primeira seleção a garantir vaga na CAN 2012.',
      'تأهل منتخب زيبراز مبكراً لنهائيات أمم إفريقيا 2012 في إنجاز تاريخي تحت قيادة المدرب ستانلي تشوساني.'
    ),
  }),

  // BI — Burundi
  mkQ({
    id: 'cur_BI_sp1',
    countryCode: 'BI',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'fiston_abdul_razak_can_2019',
    source: 'FFB & CAF — Qualifications CAN 2019',
    prompt: L(
      'Quel buteur des Hirondelles du Burundi a largement contribué avec 6 buts en qualifications à la toute première participation du pays à la CAN en 2019 ?',
      'Which Swallows striker netted six goals in qualifying to fire Burundi to their maiden Africa Cup of Nations in 2019?',
      '¿Qué goleador de las Golondrinas impulsó a Burundi con seis tantos rumbo a su histórica primera CAN en 2019?',
      'Qual artilheiro das Andorinhas marcou seis gols nas eliminatórias levando o Burundi à sua primeira CAN em 2019?',
      'أي هداف لمنتخب السنونو قاد بوروندي بستة أهداف في التصفيات إلى أول مشاركة في أمم إفريقيا عام 2019؟'
    ),
    countryModePrompt: L(
      'Quel avant-centre et meilleur buteur de l’histoire des Hirondelles a inscrit 6 buts décisifs pour qualifier l’équipe à sa première CAN en 2019 ?',
      'Which all-time top scorer for the Swallows hit six crucial goals to earn the nation’s maiden AFCON berth in 2019?',
      '¿Qué máximo goleador histórico de las Golondrinas anotó seis goles clave para clasificar a la CAN 2019?',
      'Qual maior artilheiro da história das Andorinhas marcou seis gols decisivos rumo à CAN 2019?',
      'أي هداف تاريخي لمنتخب السنونو سجل 6 أهداف حاسمة أهلت البلاد إلى أمم إفريقيا 2019؟'
    ),
    correct: L('Fiston Abdul Razak', 'Fiston Abdul Razak', 'Fiston Abdul Razak', 'Fiston Abdul Razak', 'فيستون عبد الرزاق'),
    distractors: [
      L('Saido Berahino', 'Saido Berahino', 'Saido Berahino', 'Saido Berahino', 'سايدو بيراهينو'),
      L('Cédric Amissi', 'Cédric Amissi', 'Cédric Amissi', 'Cédric Amissi', 'سيدريك أميسي'),
      L('Youssouf Ndayishimiye', 'Youssouf Ndayishimiye', 'Youssouf Ndayishimiye', 'Youssouf Ndayishimiye', 'يوسف ندايشيمي'),
    ],
    explanation: L(
      'Auteur notamment d’un quadruplé contre le Soudan du Sud, Fiston Abdul Razak demeure le meilleur réalisateur de la sélection nationale.',
      'Highlighted by a four-goal haul against South Sudan, Fiston Abdul Razak stands as the Swallows’ all-time top scorer.',
      'Autor de un póker ante Sudán del Sur, Fiston Abdul Razak lidera la tabla histórica de goleadores nacionales.',
      'Autor de quatro gols num só jogo contra o Sudão do Sul, Fiston Abdul Razak é o maior artilheiro da seleção.',
      'يتصدر فيستون عبد الرزاق قائمة هدافي المنتخب بفضل تألقه التهديفي في تصفيات أمم إفريقيا 2019.'
    ),
  }),
  mkQ({
    id: 'cur_BI_sp2',
    countryCode: 'BI',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'venuste_niyongabo_atlanta_1996',
    source: 'CIO — Jeux olympiques d’Atlanta 1996',
    prompt: L(
      'Quel athlète burundais a remporté l’or sur 5 000 mètres aux Jeux olympiques d’Atlanta en 1996, offrant à son pays sa toute première médaille olympique ?',
      'Which Burundian runner won gold in the men’s 5,000m at the 1996 Atlanta Olympics for the nation’s very first Olympic medal?',
      '¿Qué atleta de Burundi ganó el oro en los 5.000 m de Atlanta 1996, logrando la primera medalla olímpica del país?',
      'Qual atleta do Burundi conquistou o ouro nos 5.000m em Atlanta 1996, primeira medalha olímpica do país?',
      'أي عداء بوروندي أحرز ذهبية سباق 5000 متر في أولمبياد أتلانتا 1996 ليحقق أول ميدالية أولمبية لبلاده؟'
    ),
    countryModePrompt: L(
      'Quel coureur de fond a offert au pays dès sa première participation olympique en 1996 à Atlanta une médaille d’or sur 5 000 mètres ?',
      'Which distance runner captured Olympic gold in the 5,000 metres on the country’s very first Olympic appearance at Atlanta 1996?',
      '¿Qué fondista ganó la medalla de oro en 5.000 metros en Atlanta 1996 durante el debut olímpico del país?',
      'Qual fundista conquistou a medalha de ouro nos 5.000m em Atlanta 1996 na estreia olímpica do país?',
      'أي عداء مسافات طويلة حقق الميدالية الذهبية في سباق 5000 متر في أولمبياد أتلانتا 1996 في أول مشاركة أولمبية للبلاد؟'
    ),
    correct: L('Vénuste Niyongabo', 'Vénuste Niyongabo', 'Vénuste Niyongabo', 'Vénuste Niyongabo', 'فينوست نييونغابو'),
    distractors: [
      L('Francine Niyonsaba', 'Francine Niyonsaba', 'Francine Niyonsaba', 'Francine Niyonsaba', 'فرانسين نيونسابا'),
      L('Dieudonné Kwizéra', 'Dieudonné Kwizéra', 'Dieudonné Kwizéra', 'Dieudonné Kwizéra', 'ديودوني كويزيرا'),
      L('Thierry Ndikumwenayo', 'Thierry Ndikumwenayo', 'Thierry Ndikumwenayo', 'Thierry Ndikumwenayo', 'تييري نديكوموينايو'),
    ],
    explanation: L(
      'Spécialiste du 1 500 m engagé au dernier moment sur 5 000 m à Atlanta, Vénuste Niyongabo créa l’exploit grâce à un dernier tour foudroyant.',
      'Entering the 5,000m late after focusing on the 1,500m, Vénuste Niyongabo unleashed a blistering final lap to win gold at Atlanta 1996.',
      'Especialista en 1.500 m, Vénuste Niyongabo sorprendió en los 5.000 m de Atlanta con un último giro fulminante.',
      'Especialista nos 1.500m, Vénuste Niyongabo surpreendeu nos 5.000m em Atlanta com uma volta final avassaladora.',
      'فاجأ فينوست نييونغابو العالم في أتلانتا 1996 بلفة أخيرة مذهلة منحت بلاده أول ذهبية أولمبية.'
    ),
  }),

  // CV — Cabo Verde
  mkQ({
    id: 'cur_CV_sp1',
    countryCode: 'CV',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'ryan_mendes_requins_bleus',
    source: 'FCF & CAF — Records des Requins Bleus',
    prompt: L(
      'Quel ailier et capitaine emblématique des Requins Bleus du Cap-Vert, passé notamment par le Havre et Lille, détient les records de sélections et de buts en équipe nationale ?',
      'Which Blue Sharks captain and winger, formerly of Le Havre and Lille, holds Cape Verde’s all-time appearance and goalscoring records?',
      '¿Qué extremo y capitán de los Tiburones Azules de Cabo Verde posee los récords de partidos y goles con la selección?',
      'Qual ponta e capitão dos Tubarões Azuis de Cabo Verde detém os recordes de jogos e gols pela seleção?',
      'أي جناح وقائد لمنتخب القروش الزرقاء للرأس الأخضر يحمل الرقم القياسي في عدد المباريات والأهداف الدولية؟'
    ),
    countryModePrompt: L(
      'Quel capitaine emblématique des Requins Bleus, formé en partie au Havre puis sacré champion de France avec Lille en 2011... pardon, recruté par Lille en 2012, est le meilleur buteur de l’histoire de la sélection ?',
      'Which iconic Blue Sharks captain, formerly of Le Havre and Lille, stands as the all-time leading scorer and most-capped player?',
      '¿Qué capitán emblemático de los Tiburones Azules, exjugador de Le Havre y Lille, es el máximo goleador histórico?',
      'Qual capitão emblemático dos Tubarões Azuis, ex-Le Havre e Lille, é o maior artilheiro da seleção?',
      'أي قائد تاريخي لمنتخب القروش الزرقاء لعب سابقاً للهافر وليل ويتصدر قائمة هدافي المنتخب؟'
    ),
    correct: L('Ryan Mendes', 'Ryan Mendes', 'Ryan Mendes', 'Ryan Mendes', 'ريان مينديز'),
    distractors: [
      L('Héldon Ramos', 'Héldon Ramos', 'Héldon Ramos', 'Héldon Ramos', 'هيلدون راموس'),
      L('Djaniny Tavares', 'Djaniny Tavares', 'Djaniny Tavares', 'Djaniny Tavares', 'دجانيني تافاريس'),
      L('Garry Rodrigues', 'Garry Rodrigues', 'Garry Rodrigues', 'Garry Rodrigues', 'غاري رودريغيز'),
    ],
    explanation: L(
      'Originaire de Mindelo sur l’île de São Vicente, Ryan Mendes a guidé les Requins Bleus lors de quatre CAN dont les quarts de finale de 2013 et 2023.',
      'Born in Mindelo on São Vicente, Ryan Mendes captained the Blue Sharks into the AFCON quarterfinals in both 2013 and 2023.',
      'Nacido en Mindelo, Ryan Mendes lideró a los Tiburones Azules hasta los cuartos de final de las CAN 2013 y 2023.',
      'Nascido em Mindelo, Ryan Mendes capitaneou os Tubarões Azuis às quartas de final da CAN em 2013 e 2023.',
      'قاد ريان مينديز منتخب بلاده إلى ربع نهائي أمم إفريقيا عامي 2013 و2023 وحطم الأرقام القياسية الدولية.'
    ),
  }),
  mkQ({
    id: 'cur_CV_sp2',
    countryCode: 'CV',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'bubista_quart_finaliste_can_2023',
    source: 'CAF — CAN 2023',
    prompt: L(
      'Sous quel surnom connaît-on l’ancien défenseur international Pedro Leitão Brito, sélectionneur ayant mené le Cap-Vert en quart de finale de la CAN 2023 ?',
      'By what nickname is former defender Pedro Leitão Brito known, the coach who guided Cape Verde to the 2023 AFCON quarterfinals?',
      '¿Con qué apodo se conoce al seleccionador Pedro Leitão Brito, que llevó a Cabo Verde a los cuartos de la CAN 2023?',
      'Por qual apelido é conhecido o técnico Pedro Leitão Brito, que levou Cabo Verde às quartas da CAN 2023?',
      'بأي لقب يُعرف المدرب بيدرو ليتاو بريتو الذي قاد منتخب الرأس الأخضر إلى ربع نهائي أمم إفريقيا 2023؟'
    ),
    countryModePrompt: L(
      'Sous quel pseudonyme célèbre connaît-on le sélectionneur Pedro Leitão Brito, artisan de l’épopée jusqu’en quart de finale de la CAN 2023 ?',
      'By what famous nickname is head coach Pedro Leitão Brito known after guiding the Blue Sharks to the 2023 AFCON quarterfinals?',
      '¿Con qué conocido apodo se llama al técnico Pedro Leitão Brito tras alcanzar los cuartos de la CAN 2023?',
      'Por qual apelido é conhecido o técnico Pedro Leitão Brito após levar a seleção às quartas da CAN 2023?',
      'ما اللقب الشهير للمدرب بيدرو ليتاو بريتو الذي قاد القروش الزرقاء إلى ربع نهائي أمم إفريقيا 2023؟'
    ),
    correct: L('Bubista', 'Bubista', 'Bubista', 'Bubista', 'بوبيستا'),
    distractors: [
      L('Lúcio Antunes', 'Lúcio Antunes', 'Lúcio Antunes', 'Lúcio Antunes', 'لوسيو أنتونيس'),
      L('Vozinha', 'Vozinha', 'Vozinha', 'Vozinha', 'فوزينيا'),
      L('Nando', 'Nando', 'Nando', 'Nando', 'ناندو'),
    ],
    explanation: L(
      'Nommé en 2020, Bubista a bâti une équipe offensive et disciplinée qui a terminé invaincue en tête de son groupe devant l’Égypte et le Ghana à la CAN 2023.',
      'Appointed in 2020, Bubista steered an unbeaten group campaign ahead of Egypt and Ghana before reaching the 2023 AFCON quarterfinals.',
      'Nombrado en 2020, Bubista superó a Egipto y Ghana en la fase de grupos de la CAN 2023 rumbo a cuartos.',
      'Nomeado em 2020, Bubista liderou o grupo à frente de Egito e Gana rumo às quartas da CAN 2023.',
      'قاد بوبيستا المنتخب لصدارة مجموعة ضمت مصر وغانا وبلغ معه ربع نهائي كأس أمم إفريقيا 2023.'
    ),
  }),

  // CF — République centrafricaine
  mkQ({
    id: 'cur_CF_sp1',
    countryCode: 'CF',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 1,
    topicKey: 'geoffrey_kondogbia_fauves',
    source: 'CAF & UEFA — Capitaine des Fauves',
    prompt: L(
      'Quel milieu défensif passé par Séville, Monaco, l’Inter Milan, l’Atlético de Madrid et l’Olympique de Marseille porte le brassard de capitaine des Fauves de Centrafrique ?',
      'Which holding midfielder who starred for Sevilla, Monaco, Inter Milan, Atlético Madrid, and Marseille captains the Central African Republic?',
      '¿Qué mediocentro que jugó en Sevilla, Mónaco, Inter y Atlético de Madrid capitanea a los Fieras de Centroáfrica?',
      'Qual volante com passagens por Sevilla, Monaco, Inter e Atlético de Madrid capitaneia a República Centro-Africana?',
      'أي لاعب وسط دفاعي لعب لإشبيلية وموناكو وإنتر وأتلتيكو مدريد ومرسيليا ويرتدي شارة قيادة منتخب إفريقيا الوسطى؟'
    ),
    countryModePrompt: L(
      'Quel milieu international ayant remporté la Liga avec l’Atlético de Madrid puis rejoint l’OM dirige le milieu de terrain des Fauves du Bas-Oubangui ?',
      'Which La Liga-winning midfielder, also a star for Monaco, Inter Milan, and Marseille, captains the Fauves du Bas-Oubangui?',
      '¿Qué mediocentro campeón de Liga con el Atlético y jugador del Marsella capitanea a los Fauves?',
      'Qual meio-campista campeão espanhol pelo Atlético e jogador do Olympique de Marselha capitaneia os Fauves?',
      'أي لاعب وسط تُوج بالدوري الإسباني مع أتلتيكو مدريد ولعب لمرسيليا ويقود منتخب الفهود (لي فوف)؟'
    ),
    correct: L('Geoffrey Kondogbia', 'Geoffrey Kondogbia', 'Geoffrey Kondogbia', 'Geoffrey Kondogbia', 'جيفري كوندوبيا'),
    distractors: [
      L('Louis Mafouta', 'Louis Mafouta', 'Louis Mafouta', 'Louis Mafouta', 'لويس مافوتا'),
      L('Foxi Kéthévoama', 'Foxi Kéthévoama', 'Foxi Kéthévoama', 'Foxi Kéthévoama', 'فوكسي كيثيفواما'),
      L('Habib Habibou', 'Habib Habibou', 'Habib Habibou', 'Habib Habibou', 'حبيب حبيبو'),
    ],
    explanation: L(
      'International depuis 2018 avec les Fauves, Geoffrey Kondogbia met son expérience du plus haut niveau européen au service du football centrafricain.',
      'Representing the Fauves since 2018, Geoffrey Kondogbia brings top-tier Champions League and La Liga experience to the national side.',
      'Internacional desde 2018, Geoffrey Kondogbia aporta su jerarquía europea como capitán del equipo nacional.',
      'Internacional desde 2018, Geoffrey Kondogbia traz sua experiência europeia à liderança dos Fauves.',
      'يجلب القائد جيفري كوندوبيا خبرته الكبيرة من البطولات الأوروبية الكبرى لقيادة خط وسط المنتخب.'
    ),
  }),
  mkQ({
    id: 'cur_CF_sp2',
    countryCode: 'CF',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'foxi_kethevoama_fauves_bangui',
    source: 'FCF & UEFA — Parcours de Foxi Kéthévoama',
    prompt: L(
      'Quel meneur de jeu natif de Bangui, longtemps capitaine des Fauves et héros du club kazakh d’Astana en Ligue des champions, reste l’un des joueurs les plus capés de Centrafrique ?',
      'Which Bangui-born playmaker, longtime Fauves captain and FC Astana UEFA Champions League star, is one of his country’s most-capped players?',
      '¿Qué centrocampista nacido en Bangui, capitán de los Fieras y figura del FC Astana, está entre los más internacionales del país?',
      'Qual meia nascido em Bangui, capitão dos Fauves e destaque do FC Astana, está entre os recordistas de jogos pela seleção?',
      'أي صانع ألعاب من مواليد بانغي وقائد سابق للمنتخب تألق مع أستانا في دوري أبطال أوروبا؟'
    ),
    countryModePrompt: L(
      'Quel meneur de jeu natif de Bangui, passé par le Stade Centrafricain Tocages puis devenu légende du FC Astana en Ligue des champions, fut capitaine historique des Fauves ?',
      'Which Bangui-born playmaker who started at Stade Centrafricain Tocages before becoming an FC Astana legend captained the Fauves for years?',
      '¿Qué mediapunta nacido en Bangui y leyenda del FC Astana fue capitán histórico de los Fauves?',
      'Qual meia nascido em Bangui e ídolo do FC Astana foi capitão histórico dos Fauves?',
      'أي صانع ألعاب من مواليد بانغي وأسطورة نادي أستانا حمل شارة قيادة المنتخب لسنوات طويلة؟'
    ),
    correct: L('Foxi Kéthévoama', 'Foxi Kéthévoama', 'Foxi Kéthévoama', 'Foxi Kéthévoama', 'فوكسي كيثيفواما'),
    distractors: [
      L('Eloge Enza-Yamissi', 'Eloge Enza-Yamissi', 'Eloge Enza-Yamissi', 'Eloge Enza-Yamissi', 'إيلوج إنزا ياميسي'),
      L('Hilaire Momi', 'Hilaire Momi', 'Hilaire Momi', 'Hilaire Momi', 'هيلير مومي'),
      L('Moussa Limane', 'Moussa Limane', 'Moussa Limane', 'Moussa Limane', 'موسى ليمان'),
    ],
    explanation: L(
      'Artisan de victoires marquantes des Fauves face à l’Algérie et à l’Égypte dans les années 2010, Foxi Kéthévoama a aussi disputé la phase de groupes de la Ligue des champions avec Astana.',
      'Instrumental in historic qualifiers against Algeria and Egypt, Foxi Kéthévoama also starred in the UEFA Champions League group stage with Astana.',
      'Protagonista de triunfos históricos ante Argelia y Egipto, Foxi Kéthévoama brilló también en Europa con el Astana.',
      'Peça-chave em vitórias históricas sobre Argélia e Egito, Foxi Kéthévoama também brilhou na Champions pelo Astana.',
      'أسهم فوكسي كيثيفواما في انتصارات تاريخية للمنتخب أمام الجزائر ومصر وتألق مع أستانا في المسابقات الأوروبية.'
    ),
  }),

  // DJ — Djibouti
  mkQ({
    id: 'cur_DJ_sp1',
    countryCode: 'DJ',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'ayanleh_souleiman_1500m_champion',
    source: 'World Athletics — Mondiaux en salle 2014',
    prompt: L(
      'Quel athlète djiboutien est devenu champion du monde en salle du 1 500 mètres à Sopot en 2014 après avoir remporté le bronze sur 800 m aux Mondiaux de Moscou ?',
      'Which Djiboutian track star won the 2014 World Indoor 1500m title in Sopot after taking 800m bronze at the 2013 World Championships?',
      '¿Qué atleta de Yibuti ganó el oro mundial bajo techo en 1.500 m en 2014 tras lograr bronce en 800 m en 2013?',
      'Qual atleta do Djibuti foi campeão mundial indoor dos 1.500m em 2014 após conquistar bronze nos 800m em 2013?',
      'أي عداء جيبوتي تُوج بذهبية بطولة العالم داخل الصالات في سباق 1500 متر عام 2014 بعد برونزية 800 متر عام 2013؟'
    ),
    countryModePrompt: L(
      'Quel spécialiste du demi-fond a décroché l’or mondial en salle sur 1 500 m à Sopot en 2014 et battu le record du monde en salle du 1 000 m ?',
      'Which middle-distance star won 2014 World Indoor 1500m gold in Sopot and broke the 1000m world indoor record?',
      '¿Qué especialista de mediofondo ganó el oro mundial bajo techo de 1.500 m en 2014 y batió el récord de 1.000 m?',
      'Qual meio-fundista ganhou o ouro mundial indoor de 1.500m em 2014 e quebrou o recorde dos 1.000m?',
      'أي عداء مسافات متوسطة نال ذهبية العالم داخل الصالات عام 2014 في سباق 1500 متر وحطم الرقم العالمي لسباق 1000 متر؟'
    ),
    correct: L('Ayanleh Souleiman', 'Ayanleh Souleiman', 'Ayanleh Souleiman', 'Ayanleh Souleiman', 'أيانله سليمان'),
    distractors: [
      L('Ahmed Salah', 'Ahmed Salah', 'Ahmed Salah', 'Ahmed Salah', 'أحمد صلاح'),
      L('Mumin Gala', 'Mumin Gala', 'Mumin Gala', 'Mumin Gala', 'مؤمن غالا'),
      L('Mohamed Ismail Ibrahim', 'Mohamed Ismail Ibrahim', 'Mohamed Ismail Ibrahim', 'Mohamed Ismail Ibrahim', 'محمد إسماعيل إبراهيم'),
    ],
    explanation: L(
      'Porte-drapeau national, Ayanleh Souleiman a brillé sur 800 m, 1 000 m et 1 500 m, marchant sur les traces du marathonien Ahmed Salah.',
      'Following in marathon legend Ahmed Salah’s footsteps, Ayanleh Souleiman became one of the world’s premier middle-distance runners of the 2010s.',
      'Siguiendo la estela de Ahmed Salah, Ayanleh Souleiman brilló entre la élite mundial del mediofondo.',
      'Seguindo os passos de Ahmed Salah, Ayanleh Souleiman firmou-se na elite mundial do meio-fundo.',
      'سار أيانله سليمان على خطى أسطورة الماراثون أحمد صلاح ليحصد الألقاب العالمية في المسافات المتوسطة.'
    ),
  }),
  mkQ({
    id: 'cur_DJ_sp2',
    countryCode: 'DJ',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'stade_gouled_aptidon_djibouti',
    source: 'FDF — Infrastructures sportives',
    prompt: L(
      'Comment s’appelle le grand stade national de Djibouti, inauguré en 1993 et baptisé en hommage au premier président du pays ?',
      'What is the name of Djibouti’s main national stadium, opened in 1993 and named in honour of the nation’s first president?',
      '¿Cómo se llama el principal estadio nacional de Yibuti, inaugurado en 1993 en honor a su primer presidente?',
      'Como se chama o principal estádio nacional do Djibuti, inaugurado em 1993 em homenagem ao primeiro presidente?',
      'ما اسم الملعب الوطني الرئيسي في جيبوتي الذي افتُتح عام 1993 وسُمي تكريماً لأول رئيس للبلاد؟'
    ),
    countryModePrompt: L(
      'Quel stade national inauguré en 1993 accueille les matchs internationaux des Requins de la Mer Rouge dans la capitale ?',
      'Which national stadium inaugurated in 1993 hosts international matches of the Shoremen of the Red Sea in the capital?',
      '¿Qué estadio nacional inaugurado en 1993 alberga en la capital los partidos internacionales de la selección?',
      'Qual estádio nacional inaugurado em 1993 recebe na capital os jogos internacionais da seleção?',
      'أي ملعب وطني افتُتح عام 1993 يستضيف في العاصمة المباريات الدولية للمنتخب الوطني؟'
    ),
    correct: L('Le Stade El Hadj Hassan Gouled Aptidon', 'El Hadj Hassan Gouled Aptidon Stadium', 'Estadio El Hadj Hassan Gouled Aptidon', 'Estádio El Hadj Hassan Gouled Aptidon', 'ملعب الحاج حسن جوليد أبتيدون'),
    distractors: [
      L('Le Stade de Tadjourah', 'Tadjourah Stadium', 'Estadio de Tadjourah', 'Estádio de Tadjourah', 'ملعب تاجورة'),
      L('Le Stade du Lac Assal', 'Lake Assal Stadium', 'Estadio del Lago Assal', 'Estádio do Lago Assal', 'ملعب بحيرة عسل'),
      L('Le Stade d’Obock', 'Obock Stadium', 'Estadio de Obock', 'Estádio de Obock', 'ملعب أوبوك'),
    ],
    explanation: L(
      'Doté d’une capacité de plus de 20 000 places, le Stade El Hadj Hassan Gouled Aptidon est le cœur du football national et du championnat de Première Division.',
      'Seating around 20,000 spectators, El Hadj Hassan Gouled Aptidon Stadium serves as the hub of domestic league finals and World Cup qualifiers.',
      'Con unas 20.000 localidades, este estadio es el epicentro del fútbol nacional y las eliminatorias.',
      'Com cerca de 20 mil lugares, o estádio é o palco principal das competições nacionais e eliminatórias.',
      'يتسع ملعب الحاج حسن جوليد أبتيدون لنحو عشرين ألف متفرج ويُعد المسرح الرئيسي لكرة القدم الوطنية.'
    ),
  }),

  // ER — Érythrée
  mkQ({
    id: 'cur_ER_sp1',
    countryCode: 'ER',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 1,
    topicKey: 'biniam_girmay_tour_de_france_maillot_vert',
    source: 'Tour de France 2024 & UCI',
    prompt: L(
      'Quel cycliste érythréen originaire d’Asmara est entré dans l’histoire en 2024 en devenant le premier coureur africain noir à remporter des étapes et le maillot vert du Tour de France ?',
      'Which Asmara-born Eritrean cyclist made history in 2024 as the first Black African rider to win stages and the Green Jersey at the Tour de France?',
      '¿Qué ciclista de Eritrea nacido en Asmara hizo historia en 2024 al ganar etapas y el maillot verde del Tour de Francia?',
      'Qual ciclista da Eritreia nascido em Asmara fez história em 2024 ao vencer etapas e a camisa verde do Tour de France?',
      'أي دراج إريتري من أسمرة دخل التاريخ عام 2024 كأول دراج إفريقي أسود يفوز بمراحل وبالقميص الأخضر في طواف فرنسا؟'
    ),
    countryModePrompt: L(
      'Quel sprinteur cycliste originaire d’Asmara a remporté trois étapes et le classement par points (maillot vert) lors du Tour de France 2024 ?',
      'Which Asmara-born sprinter won three stages and the points classification (Green Jersey) at the 2024 Tour de France?',
      '¿Qué esprínter ciclista nacido en Asmara ganó tres etapas y el maillot verde en el Tour de Francia 2024?',
      'Qual velocista do ciclismo nascido em Asmara venceu três etapas e a camisa verde no Tour de France 2024?',
      'أي دراج من مواليد أسمرة فاز بثلاث مراحل وبالقميص الأخضر للنقاط في طواف فرنسا 2024؟'
    ),
    correct: L('Biniam Girmay', 'Biniam Girmay', 'Biniam Girmay', 'Biniam Girmay', 'بينيام غيرماي'),
    distractors: [
      L('Daniel Teklehaimanot', 'Daniel Teklehaimanot', 'Daniel Teklehaimanot', 'Daniel Teklehaimanot', 'دانييل تيكليهايمانوت'),
      L('Merhawi Kudus', 'Merhawi Kudus', 'Merhawi Kudus', 'Merhawi Kudus', 'ميرهاوي كودوس'),
      L('Natnael Berhane', 'Natnael Berhane', 'Natnael Berhane', 'Natnael Berhane', 'ناتنائيل برهاني'),
    ],
    explanation: L(
      'Déjà vainqueur historique de Gand-Wevelgem en 2022, Biniam Girmay a confirmé la ferveur cycliste exceptionnelle d’Asmara sur les routes du Tour de France.',
      'Already winner of Gent–Wevelgem in 2022, Biniam Girmay brought Asmara’s passionate cycling culture to global glory at the 2024 Tour de France.',
      'Ya ganador de la Gante-Wevelgem en 2022, Biniam Girmay coronó la gran tradición ciclista de Asmara en el Tour 2024.',
      'Após vencer a Gent-Wevelgem em 2022, Biniam Girmay coroou a paixão ciclística de Asmara no Tour de 2024.',
      'تُوّج بينيام غيرماي بمراحل في طواف فرنسا وبالقميص الأخضر ليعكس شغف أسمرة العريق برياضة الدراجات.'
    ),
  }),
  mkQ({
    id: 'cur_ER_sp2',
    countryCode: 'ER',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'zersenay_tadese_athenes_2004',
    source: 'CIO & World Athletics — Athènes 2004',
    prompt: L(
      'Quel coureur de fond a offert à l’Érythrée la toute première médaille olympique de son histoire en décrochant le bronze du 10 000 m à Athènes en 2004 ?',
      'Which long-distance runner won Eritrea’s first-ever Olympic medal by taking 10,000m bronze at Athens 2004?',
      '¿Qué fondista dio a Eritrea su primera medalla olímpica al lograr el bronce en 10.000 m en Atenas 2004?',
      'Qual fundista deu à Eritreia sua primeira medalha olímpica ao conquistar o bronze nos 10.000m em Atenas 2004?',
      'أي عداء مسافات طويلة منح إريتريا أول ميدالية أولمبية في تاريخها ببرونزية 10 آلاف متر في أثينا 2004؟'
    ),
    countryModePrompt: L(
      'Quel quintuple champion du monde de semi-marathon a rapporté la toute première médaille olympique de l’histoire du pays sur 10 000 m à Athènes en 2004 ?',
      'Which five-time World Half Marathon champion earned the nation’s historic first Olympic medal in the 10,000m at Athens 2004?',
      '¿Qué pentacampeón mundial de media maratón ganó la primera medalla olímpica nacional en los 10.000 m de Atenas 2004?',
      'Qual pentacampeão mundial de meia maratona conquistou a primeira medalha olímpica nacional em Atenas 2004?',
      'أي بطل عالمي خمس مرات في نصف الماراثون أحرز أول ميدالية أولمبية في تاريخ البلاد بأثينا 2004؟'
    ),
    correct: L('Zersenay Tadese', 'Zersenay Tadese', 'Zersenay Tadese', 'Zersenay Tadese', 'زيرسيناي تاديسي'),
    distractors: [
      L('Ghirmay Ghebreslassie', 'Ghirmay Ghebreslassie', 'Ghirmay Ghebreslassie', 'Ghirmay Ghebreslassie', 'غيرماي غيبريسلاسي'),
      L('Yonas Kifle', 'Yonas Kifle', 'Yonas Kifle', 'Yonas Kifle', 'يوناس كيفلي'),
      L('Aron Kifle', 'Aron Kifle', 'Aron Kifle', 'Aron Kifle', 'آرون كيفلي'),
    ],
    explanation: L(
      'Champion à cinq reprises aux Mondiaux de semi-marathon (2006–2012), Zersenay Tadese reste un monument du sport en Afrique de l’Est.',
      'A five-time World Half Marathon champion between 2006 and 2012, Zersenay Tadese set global road-racing benchmarks.',
      'Cinco veces campeón mundial de media maratón, Zersenay Tadese es una leyenda del atletismo de fondo.',
      'Pentacampeão mundial de meia maratona, Zersenay Tadese é uma lenda do atletismo africano.',
      'حصد زيرسيناي تاديسي خمسة ألقاب عالمية في نصف الماراثون بعد إنجازه الأولمبي التاريخي في أثينا.'
    ),
  }),

  // SZ — Eswatini
  mkQ({
    id: 'cur_SZ_sp1',
    countryCode: 'SZ',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'somhlolo_national_stadium_lobamba',
    source: 'EFA & COSAFA — Infrastructures de Lobamba',
    prompt: L(
      'Comment s’appelle le principal stade national d’Eswatini situé à Lobamba, nommé en hommage au roi fondateur du royaume ?',
      'What is the name of Eswatini’s main national stadium in Lobamba, named after the kingdom’s founding monarch?',
      '¿Cómo se llama el principal estadio nacional de Esuatini situado en Lobamba en honor a su rey fundador?',
      'Como se chama o principal estádio nacional de Essuatíni em Lobamba, nomeado em homenagem ao rei fundador?',
      'ما اسم الملعب الوطني الرئيسي في إسواتيني الواقع في لوبامبا والذي يحمل اسم الملك المؤسس؟'
    ),
    countryModePrompt: L(
      'Quel stade national situé à Lobamba, d’environ 20 000 places, accueille les rencontres du Sihlangu Semnikati ainsi que les grandes cérémonies royales ?',
      'Which roughly 20,000-capacity national stadium in Lobamba hosts Sihlangu Semnikati matches and major state ceremonies?',
      '¿Qué estadio nacional situado en Lobamba acoge los partidos del Sihlangu Semnikati y grandes ceremonias?',
      'Qual estádio nacional localizado em Lobamba recebe os jogos do Sihlangu Semnikati e grandes cerimônias?',
      'ما اسم الملعب الوطني في لوبامبا الذي يستضيف مباريات منتخب سيهلانغو والاحتفالات الكبرى؟'
    ),
    correct: L('Le Stade national Somhlolo', 'Somhlolo National Stadium', 'Estadio Nacional Somhlolo', 'Estádio Nacional Somhlolo', 'ملعب سومهلولو الوطني'),
    distractors: [
      L('Le Stade de Manzini', 'Manzini Stadium', 'Estadio de Manzini', 'Estádio de Manzini', 'ملعب مانزيني'),
      L('Le Stade de Nhlangano', 'Nhlangano Stadium', 'Estadio de Nhlangano', 'Estádio de Nhlangano', 'ملعب نهلانغانو'),
      L('Le Stade du Komati', 'Komati Stadium', 'Estadio del Komati', 'Estádio do Komati', 'ملعب كوماتي'),
    ],
    explanation: L(
      'Inauguré en 1968 l’année de l’indépendance, le Stade Somhlolo de Lobamba porte le nom du roi Ngwane IV (Somhlolo), père de la nation.',
      'Opened in 1968 on the year of independence, Somhlolo National Stadium in Lobamba honours King Somhlolo (Ngwane IV).',
      'Inaugurado en 1968 el año de la independencia, el Estadio Somhlolo honra al rey fundador en Lobamba.',
      'Inaugurado em 1968 no ano da independência, o Estádio Somhlolo em Lobamba homenageia o rei fundador.',
      'افتُتح ملعب سومهلولو في لوبامبا عام الاستقلال 1968 وحمل اسم الملك المؤسس للمملكة.'
    ),
  }),
  mkQ({
    id: 'cur_SZ_sp2',
    countryCode: 'SZ',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'felix_badenhorst_cosafa_2016',
    source: 'COSAFA Cup 2016 — Palmarès',
    prompt: L(
      'Quel milieu offensif du Sihlangu Semnikati a terminé meilleur buteur de la Coupe COSAFA 2016 avec 5 réalisations en aidant l’Eswatini à décrocher une historique 3e place ?',
      'Which Sihlangu Semnikati attacking midfielder won the 2016 COSAFA Cup Golden Boot with five goals as Eswatini claimed a historic third place?',
      '¿Qué centrocampista ofensivo fue máximo goleador de la Copa COSAFA 2016 con cinco tantos en el histórico tercer puesto de Esuatini?',
      'Qual meio-atacante foi artilheiro da Copa COSAFA de 2016 com cinco gols na histórica terceira colocação de Essuatíni?',
      'أي لاعب وسط هجومي تُوج هدافاً لكأس كوسافا 2016 بخمسة أهداف وقاد منتخب إسواتيني لمركز ثالث تاريخي؟'
    ),
    countryModePrompt: L(
      'Quel joueur des Mbabane Swallows et du Sihlangu Semnikati a remporté le Soulier d’or de la Coupe COSAFA 2016 grâce à ses cinq buts ?',
      'Which Mbabane Swallows and Sihlangu Semnikati star claimed the 2016 COSAFA Cup Golden Boot with five goals?',
      '¿Qué jugador de los Mbabane Swallows ganó la Bota de Oro de la Copa COSAFA 2016 con cinco goles?',
      'Qual jogador do Mbabane Swallows conquistou a Chuteira de Ouro da Copa COSAFA de 2016 com cinco gols?',
      'أي نجم لنادي مباباني سوالوز والمنتخب فاز بالحذاء الذهبي في كأس كوسافا 2016 بتسجيله خمسة أهداف؟'
    ),
    correct: L('Felix Badenhorst', 'Felix Badenhorst', 'Felix Badenhorst', 'Felix Badenhorst', 'فيليكس بادنهورست'),
    distractors: [
      L('Sibusiso Mkhonta', 'Sibusiso Mkhonta', 'Sibusiso Mkhonta', 'Sibusiso Mkhonta', 'سيبوسيسو مخونتا'),
      L('Tony Tsabedze', 'Tony Tsabedze', 'Tony Tsabedze', 'Tony Tsabedze', 'توني تسابيدزي'),
      L('Sandile Hlatjwako', 'Sandile Hlatjwako', 'Sandile Hlatjwako', 'Sandile Hlatjwako', 'سانديل هلاتجواكو'),
    ],
    explanation: L(
      'Grâce aux cinq buts de Felix Badenhorst, le Sihlangu Semnikati réalisa sa meilleure campagne en Coupe COSAFA en 2016 en battant notamment la RDC en petite finale.',
      'Powered by Felix Badenhorst’s five goals, Sihlangu Semnikati beat DR Congo to secure their best-ever third-place COSAFA Cup finish in 2016.',
      'Con cinco tantos de Felix Badenhorst, la selección derrotó a la RD del Congo en 2016 por el tercer puesto de la COSAFA.',
      'Com cinco gols de Felix Badenhorst, a seleção venceu a RD Congo pelo terceiro lugar inédito na COSAFA 2016.',
      'قاد فيليكس بادنهورست المنتخب بأهدافه الخمسة للفوز على الكونغو الديمقراطية وتحقيق المركز الثالث في كأس كوسافا 2016.'
    ),
  }),

  // ET — Éthiopie
  mkQ({
    id: 'cur_ET_sp1',
    countryCode: 'ET',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'mengistu_worku_can_1962',
    source: 'CAF — Palmarès CAN 1962',
    prompt: L(
      'Quel légendaire attaquant de Saint George et des Walya d’Éthiopie a inscrit deux buts en finale de la CAN 1962 à Addis-Abeba pour offrir au pays son unique sacre continental ?',
      'Which legendary Saint George and Walia Ibex forward scored twice in the 1962 AFCON final in Addis Ababa to win Ethiopia’s lone continental title?',
      '¿Qué legendario delantero anotó dos goles en la final de la CAN 1962 en Adís Abeba para dar el título a Etiopía?',
      'Qual lendário atacante marcou dois gols na final da CAN 1962 em Adis Abeba garantindo o título à Etiópia?',
      'أي مهاجم أسطوري لنادي سانت جورج سجل هدفين في نهائي أمم إفريقيا 1962 في أديس أبابا ليمنح إثيوبيا لقبها القاري الوحيد؟'
    ),
    countryModePrompt: L(
      'Quel buteur mythique de Saint George SC a signé un doublé face à la République arabe unie (Égypte) en finale de la CAN 1962 à Addis-Abeba ?',
      'Which legendary Saint George SC striker scored twice against Egypt in the 1962 AFCON final in Addis Ababa to seal the championship?',
      '¿Qué mítico goleador del Saint George SC firmó un doblete ante Egipto en la final de la CAN 1962 en Adís Abeba?',
      'Qual mítico artilheiro do Saint George SC marcou duas vezes contra o Egito na final da CAN 1962 em Adis Abeba?',
      'أي هداف تاريخي لنادي سانت جورج سجل ثنائية ضد مصر في نهائي كأس أمم إفريقيا 1962 في أديس أبابا؟'
    ),
    correct: L('Mengistu Worku', 'Mengistu Worku', 'Mengistu Worku', 'Mengistu Worku', 'منغستو وركو'),
    distractors: [
      L('Luciano Vassallo', 'Luciano Vassallo', 'Luciano Vassallo', 'Luciano Vassallo', 'لوتشيانو فاسالو'),
      L('Saladin Said', 'Saladin Said', 'Saladin Said', 'Saladin Said', 'صلاح الدين سعيد'),
      L('Getaneh Kebede', 'Getaneh Kebede', 'Getaneh Kebede', 'Getaneh Kebede', 'جيتانيه كيبيدي'),
    ],
    explanation: L(
      'Devant le public du stade d’Addis-Abeba, Mengistu Worku mena la victoire 4-2 après prolongation contre le tenant égyptien et partagea le titre de meilleur buteur de 1962.',
      'Before a roaring Addis Ababa crowd, Mengistu Worku struck twice in a 4–2 extra-time victory over defending champions Egypt in 1962.',
      'Ante el público de Adís Abeba, Mengistu Worku lideró el 4-2 en la prórroga ante Egipto en la final de 1962.',
      'Diante da torcida em Adis Abeba, Mengistu Worku comandou a virada por 4 a 2 sobre o Egito na final de 1962.',
      'أمام جماهير أديس أبابا، سجل منغستو وركو هدفين في الفوز 4-2 على مصر في نهائي أمم إفريقيا 1962.'
    ),
  }),
  mkQ({
    id: 'cur_ET_sp2',
    countryCode: 'ET',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'yidnekatchew_tessema_caf_fondateur',
    source: 'CAF & CIO — Dirigeants pionniers',
    prompt: L(
      'Quel ancien attaquant, sélectionneur champion d’Afrique en 1962 et dirigeant visionnaire né à Jimma a présidé la Confédération africaine de football (CAF) de 1972 à 1987 ?',
      'Which Jimma-born former player, 1962 AFCON-winning coach, and visionary administrator served as CAF President from 1972 to 1987?',
      '¿Qué exjugador, seleccionador campeón de la CAN 1962 y dirigente nacido en Jimma presidió la CAF entre 1972 y 1987?',
      'Qual ex-jogador, técnico campeão da CAN 1962 e dirigente nascido em Jimma presidiu a CAF de 1972 a 1987?',
      'أي لاعب ومدرب سابق تُوج بأمم إفريقيا 1962 ورأس الاتحاد الإفريقي لكرة القدم (كاف) من 1972 حتى 1987؟'
    ),
    countryModePrompt: L(
      'Quel ancien capitaine de Saint George et entraîneur sacré champion d’Afrique en 1962 dirigea la CAF pendant quinze ans de 1972 à 1987 ?',
      'Which former Saint George captain and 1962 AFCON-winning coach led CAF as president for 15 years from 1972 to 1987?',
      '¿Qué excapitán del Saint George y técnico campeón de África en 1962 presidió la CAF entre 1972 y 1987?',
      'Qual ex-capitão do Saint George e técnico campeão africano em 1962 presidiu a CAF de 1972 a 1987?',
      'أي قائد سابق لنادي سانت جورج ومدرب متوج بأمم إفريقيا 1962 ترأس الكاف لمدة 15 عاماً؟'
    ),
    correct: L('Yidnekatchew Tessema', 'Yidnekatchew Tessema', 'Yidnekatchew Tessema', 'Yidnekatchew Tessema', 'يدنيكاتشو تيسيما'),
    distractors: [
      L('Issa Hayatou', 'Issa Hayatou', 'Issa Hayatou', 'Issa Hayatou', 'عيسى حياتو'),
      L('Abdel Aziz Abdallah Salem', 'Abdel Aziz Abdallah Salem', 'Abdel Aziz Abdallah Salem', 'Abdel Aziz Abdallah Salem', 'عبد العزيز عبد الله سالم'),
      L('Abebe Bikila', 'Abebe Bikila', 'Abebe Bikila', 'Abebe Bikila', 'أبيبي بيكيلا'),
    ],
    explanation: L(
      'Cofondateur de la CAF en 1957, Yidnekatchew Tessema fit tripler le nombre de places africaines en Coupe du monde et obtint le boycott sportif de l’apartheid.',
      'A CAF co-founder in 1957, Yidnekatchew Tessema championed Africa’s World Cup quota expansion and led international sporting sanctions against apartheid.',
      'Cofundador de la CAF en 1957, Yidnekatchew Tessema impulsó más plazas mundialistas para África.',
      'Cofundador da CAF em 1957, Yidnekatchew Tessema ampliou a representação africana nas Copas do Mundo.',
      'أسهم يدنيكاتشو تيسيما، أحد مؤسسي الكاف عام 1957، في زيادة مقاعد إفريقيا بالمونديال ومناهضة الفصل العنصري رياضياً.'
    ),
  }),

  // GM — Gambie
  mkQ({
    id: 'cur_GM_sp1',
    countryCode: 'GM',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'musa_barrow_scorpions_can_2021',
    source: 'CAF — Épopée CAN 2021',
    prompt: L(
      'Quel attaquant des Scorpions de la Gambie, formé à l’Atalanta Bergame avant de rejoindre Bologne, a brillé lors du parcours historique jusqu’en quart de finale de la CAN 2021 ?',
      'Which Gambia Scorpions forward, developed at Atalanta before starring at Bologna, shone during their historic run to the 2021 AFCON quarterfinals?',
      '¿Qué delantero de los Escorpiones de Gambia, formado en el Atalanta y exjugador del Bolonia, brilló en los cuartos de la CAN 2021?',
      'Qual atacante dos Escorpiões da Gâmbia, revelado na Atalanta e destaque no Bologna, brilhou na campanha da CAN 2021?',
      'أي مهاجم لمنتخب العقارب الغامبي تدرج في أتالانتا وتألق مع بولونيا وفي بلوغ ربع نهائي أمم إفريقيا 2021؟'
    ),
    countryModePrompt: L(
      'Quel attaquant des Scorpions passé par la Serie A italienne (Atalanta, Bologne) a marqué deux buts lors de la première CAN de l’histoire du pays en janvier 2022 ?',
      'Which former Serie A striker (Atalanta, Bologna) scored twice to propel the Scorpions into the quarterfinals on their maiden AFCON appearance?',
      '¿Qué delantero con pasado en la Serie A italiana marcó dos goles en la histórica primera CAN de los Escorpiones?',
      'Qual atacante ex-Serie A italiana marcou dois gols na histórica primeira campanha da seleção na CAN?',
      'أي مهاجم تألق في الدوري الإيطالي مع أتالانتا وبولونيا وسجل هدفين في أول مشاركة للمنتخب بأمم إفريقيا؟'
    ),
    correct: L('Musa Barrow', 'Musa Barrow', 'Musa Barrow', 'Musa Barrow', 'موسى بارو'),
    distractors: [
      L('Assan Ceesay', 'Assan Ceesay', 'Assan Ceesay', 'Assan Ceesay', 'حسن سيساي'),
      L('Ablie Jallow', 'Ablie Jallow', 'Ablie Jallow', 'Ablie Jallow', 'أبلي جالو'),
      L('Ebrima Colley', 'Ebrima Colley', 'Ebrima Colley', 'Ebrima Colley', 'إبريما كولي'),
    ],
    explanation: L(
      'Auteur d’un but superbe et d’une passe décisive décisive en huitième face à la Guinée, Musa Barrow est l’un des grands visages de la génération dorée des Scorpions.',
      'Scoring and assisting in a magical debut AFCON campaign that stunned Tunisia and Guinea, Musa Barrow leads the Scorpions’ golden generation.',
      'Clave ante Túnez y Guinea en su debut en la Copa Africana, Musa Barrow encabeza la generación dorada de los Escorpiones.',
      'Decisivo diante de Tunísia e Guiné na estreia da seleção na CAN, Musa Barrow lidera a geração dourada.',
      'تألق موسى بارو في مشاركة العقارب التاريخية الأولى بأمم إفريقيا ليقودهم إلى الدور ربع النهائي.'
    ),
  }),
  mkQ({
    id: 'cur_GM_sp2',
    countryCode: 'GM',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'omar_colley_capitaine_scorpions',
    source: 'GFF & UEFA — Capitaine de la sélection',
    prompt: L(
      'Quel défenseur central natif de Banjul, passé par Genk, la Sampdoria et Beşiktaş, porte le brassard de capitaine des Scorpions de la Gambie ?',
      'Which Banjul-born centre-back who played for Genk, Sampdoria, and Beşiktaş captains the Gambia Scorpions?',
      '¿Qué defensa central nacido en Banjul, exjugador de Genk, Sampdoria y Beşiktaş, es capitán de los Escorpiones de Gambia?',
      'Qual zagueiro nascido em Banjul, com passagens por Genk, Sampdoria e Beşiktaş, é capitão dos Escorpiões da Gâmbia?',
      'أي مدافع ولد في بانجول ولعب لأندية غينك وسامبدوريا وبشكتاش ويرتدي شارة قيادة منتخب العقارب؟'
    ),
    countryModePrompt: L(
      'Quel défenseur central formé au Wallidan FC puis révélé en Europe à Genk, à la Sampdoria et à Beşiktaş dirige la défense et porte le brassard des Scorpions ?',
      'Which centre-back developed at Wallidan FC before starring at Genk, Sampdoria, and Beşiktaş captains the Scorpions’ back line?',
      '¿Qué defensa central formado en Wallidan FC y curtido en Sampdoria y Beşiktaş capitanea a los Escorpiones?',
      'Qual zagueiro revelado no Wallidan FC e destaque em Sampdoria e Beşiktaş capitaneia os Escorpiões?',
      'أي مدافع تخرج من نادي واليدان ولعب في سامبدوريا وبشكتاش ويقود دفاع منتخب العقارب؟'
    ),
    correct: L('Omar Colley', 'Omar Colley', 'Omar Colley', 'Omar Colley', 'عمر كولي'),
    distractors: [
      L('Pa Modou Jagne', 'Pa Modou Jagne', 'Pa Modou Jagne', 'Pa Modou Jagne', 'با مودو جاغني'),
      L('Yankuba Minteh', 'Yankuba Minteh', 'Yankuba Minteh', 'Yankuba Minteh', 'يانكوبا مينتيه'),
      L('Modou Barrow', 'Modou Barrow', 'Modou Barrow', 'Modou Barrow', 'مودو بارو'),
    ],
    explanation: L(
      'Arrivé très jeune dans le football européen par la Finlande et la Suède, Omar Colley a solidifié l’arrière-garde des Scorpions jusqu’aux compétitions continentales.',
      'Rising from Wallidan FC to top European leagues via Scandinavia, Belgium, Italy, and Turkey, Omar Colley anchors the national defence.',
      'Tras abrirse paso desde el Wallidan FC hacia Europa, Omar Colley aporta liderazgo y solidez en la zaga.',
      'Revelado pelo Wallidan FC até grandes ligas europeias, Omar Colley lidera a defesa nacional com firmeza.',
      'أصبح عمر كولي صمام الأمان والقائد المخضرم في خط دفاع منتخب العقارب بعد مسيرة أوروبية حافلة.'
    ),
  }),

  // GW — Guinée-Bissau
  mkQ({
    id: 'cur_GW_sp1',
    countryCode: 'GW',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'baciro_cande_djurtus_can',
    source: 'FFGB & CAF — Série 2017-2023',
    prompt: L(
      'Quel sélectionneur emblématique a qualifié les Djurtus de Guinée-Bissau à quatre Coupes d’Afrique des Nations consécutives (2017, 2019, 2021 et 2023) ?',
      'Which landmark coach guided Guinea-Bissau’s Djurtus to four consecutive Africa Cup of Nations finals (2017, 2019, 2021, and 2023)?',
      '¿Qué seleccionador clasificó a los Djurtus de Guinea-Bisáu para cuatro Copas Africanas consecutivas (2017, 2019, 2021 y 2023)?',
      'Qual treinador classificou os Djurtus da Guiné-Bissau para quatro Copas Africanas seguidas (2017, 2019, 2021 e 2023)?',
      'أي مدرب تاريخي قاد منتخب غينيا بيساو (دجورتوس) إلى أربع نسخ متتالية من كأس أمم إفريقيا (2017 و2019 و2021 و2023)؟'
    ),
    countryModePrompt: L(
      'Quel ancien défenseur devenu sélectionneur a offert aux Djurtus leur toute première qualification à la CAN en 2017 puis trois autres participations d’affilée ?',
      'Which former defender turned head coach led the Djurtus to their maiden AFCON in 2017 followed by three more consecutive finals?',
      '¿Qué exdefensa y seleccionador guió a los Djurtus a su primera CAN en 2017 y a tres ediciones seguidas más?',
      'Qual ex-zagueiro e técnico levou os Djurtus à sua primeira CAN em 2017 e a mais três edições seguidas?',
      'أي مدافع سابق ومدرب قاد منتخب دجورتوس لأول تأهل في تاريخه إلى أمم إفريقيا 2017 ثم ثلاث مشاركات متتالية؟'
    ),
    correct: L('Baciro Candé', 'Baciro Candé', 'Baciro Candé', 'Baciro Candé', 'باسيرو كاندي'),
    distractors: [
      L('Luís Boa Morte', 'Luís Boa Morte', 'Luís Boa Morte', 'Luís Boa Morte', 'لويس بوا مورتي'),
      L('Zezinho Lopes', 'Zezinho Lopes', 'Zezinho Lopes', 'Zezinho Lopes', 'زيزينيو لوبيز'),
      L('Paulo Torres', 'Paulo Torres', 'Paulo Torres', 'Paulo Torres', 'باولو توريس'),
    ],
    explanation: L(
      'Ancien joueur international bissau-guinéen, Baciro Candé a transformé les Djurtus en habitués réguliers de la Coupe d’Afrique des Nations.',
      'A former national team defender, Baciro Candé turned the Djurtus into regular AFCON contenders across four straight editions.',
      'Exinternacional nacional, Baciro Candé convirtió a los Djurtus en habituales de la Copa Africana.',
      'Ex-jogador da seleção, Baciro Candé transformou os Djurtus em presença constante na Copa Africana.',
      'جعل المدرب الوطني باسيرو كاندي منتخب بلاده ضيفاً دائماً في أربع بطولات إفريقية متتالية.'
    ),
  }),
  mkQ({
    id: 'cur_GW_sp2',
    countryCode: 'GW',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'estadio_24_setembro_bissau',
    source: 'FFGB — Stade national de Bissau',
    prompt: L(
      'Quelle date historique donne son nom au grand stade national de Bissau inauguré en 1989 ?',
      'Which historic national date gives its name to Bissau’s main national stadium opened in 1989?',
      '¿Qué fecha histórica da nombre al principal estadio nacional de Bisáu inaugurado en 1989?',
      'Qual data histórica dá nome ao principal estádio nacional de Bissau inaugurado em 1989?',
      'أي تاريخ وطني يحمله اسم الملعب الوطني الرئيسي في بيساو الذي افتُتح عام 1989؟'
    ),
    countryModePrompt: L(
      'Comment s’appelle le principal stade national situé à Bissau, nommé en souvenir de la proclamation unilatérale de l’indépendance de 1973 ?',
      'What is the name of the main national stadium in Bissau, commemorating the 1973 declaration of independence?',
      '¿Cómo se llama el principal estadio nacional situado en Bisáu en recuerdo de la declaración de independencia de 1973?',
      'Como se chama o principal estádio nacional situado em Bissau em memória da declaração de independência de 1973?',
      'ما اسم الملعب الوطني الرئيسي في بيساو المسمى تخليداً ليوم إعلان الاستقلال عام 1973؟'
    ),
    correct: L('Estádio 24 de Setembro', 'Estádio 24 de Setembro', 'Estadio 24 de Septiembre', 'Estádio 24 de Setembro', 'ملعب 24 سبتمبر'),
    distractors: [
      L('Estádio 10 de Setembro', 'Estádio 10 de Setembro', 'Estadio 10 de Septiembre', 'Estádio 10 de Setembro', 'ملعب 10 سبتمبر'),
      L('Estádio Lino Correia', 'Estádio Lino Correia', 'Estadio Lino Correia', 'Estádio Lino Correia', 'ملعب لينو كوريا'),
      L('Estádio dos Bijagós', 'Estádio dos Bijagós', 'Estadio de Bijagós', 'Estádio dos Bijagós', 'ملعب بيجاغوس'),
    ],
    explanation: L(
      'Le 24 septembre 1973 à Madina do Boé marque la proclamation de l’indépendance de l’État, célébrée jusque dans le nom du stade national de Bissau.',
      'September 24, 1973 marks the proclamation of independence at Madina do Boé, commemorated in Bissau’s 20,000-seat national stadium.',
      'El 24 de septiembre de 1973 recuerda la proclamación de la independencia en Madina do Boé.',
      'O 24 de setembro de 1973 remete à proclamação da independência em Madina do Boé.',
      'يخلد اسم الملعب الوطني في بيساو ذكرى إعلان الاستقلال في 24 سبتمبر 1973 في مادينا دو بوي.'
    ),
  }),

  // LS — Lesotho
  mkQ({
    id: 'cur_LS_sp1',
    countryCode: 'LS',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'setsoto_stadium_maseru',
    source: 'LeFA — Infrastructures de Maseru',
    prompt: L(
      'Comment s’appelle le grand stade national de Maseru où évolue l’équipe du Lesotho surnommée Likuena (les Crocodiles) ?',
      'What is the name of Maseru’s national stadium where Lesotho’s Likuena (the Crocodiles) play their home matches?',
      '¿Cómo se llama el estadio nacional de Maseru donde juega la selección de Lesoto, los Likuena?',
      'Como se chama o estádio nacional de Maseru onde atua a seleção do Lesoto, os Likuena?',
      'ما اسم الملعب الوطني في ماسيرو الذي يستضيف مباريات منتخب ليسوتو الملقب بالتـماسيح (ليكوينا)؟'
    ),
    countryModePrompt: L(
      'Quel stade national inauguré au cœur de Maseru accueille les rencontres des Likuena ainsi que les finales nationales ?',
      'Which national stadium in central Maseru hosts Likuena international fixtures and domestic cup finals?',
      '¿Qué estadio nacional en el centro de Maseru acoge los partidos internacionales de los Likuena?',
      'Qual estádio nacional no centro de Maseru recebe os jogos internacionais dos Likuena?',
      'ما اسم الملعب الوطني في وسط ماسيرو الذي يحتضن المباريات الدولية لمنتخب ليكوينا؟'
    ),
    correct: L('Le Setsoto Stadium', 'Setsoto Stadium', 'Estadio Setsoto', 'Estádio Setsoto', 'ملعب سيتسوتو'),
    distractors: [
      L('Le Moshoeshoe Arena', 'Moshoeshoe Arena', 'Estadio Moshoeshoe', 'Estádio Moshoeshoe', 'ملعب موشوشو'),
      L('Le Leribe Bowl', 'Leribe Bowl', 'Estadio de Leribe', 'Estádio de Leribe', 'ملعب ليريبي'),
      L('Le Maloti Park', 'Maloti Park', 'Parque Maloti', 'Parque Maloti', 'ملعب مالوتي'),
    ],
    explanation: L(
      'Le Setsoto Stadium tire son nom du mot sesotho signifiant « merveille » ou « beauté » et peut accueillir environ 20 000 supporters à Maseru.',
      'Named after the Sesotho word for "wonder" or "beauty", Setsoto Stadium sits in Maseru with a capacity around 20,000.',
      'El Estadio Setsoto toma su nombre de una palabra sesoto que significa "maravilla" y alberga unas 20.000 plazas.',
      'O Estádio Setsoto deriva da palavra sesoto para "maravilha" e comporta cerca de 20 mil torcedores em Maseru.',
      'يعني اسم ملعب سيتسوتو بلغة السيسوتو "الأعجوبة"، ويتسع لنحو عشرين ألف متفرج في ماسيرو.'
    ),
  }),
  mkQ({
    id: 'cur_LS_sp2',
    countryCode: 'LS',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'matlama_fc_premier_league',
    source: 'Lesotho Premier League — Palmarès',
    prompt: L(
      'Quel club historique fondé en 1932 à Maseru détient le plus grand nombre de titres de champion de première division du Lesotho ?',
      'Which historic Maseru club founded in 1932 holds the most Lesotho Premier League championship titles?',
      '¿Qué club histórico fundado en 1932 en Maseru posee más títulos de la primera división de Lesoto?',
      'Qual clube histórico fundado em 1932 em Maseru detém mais títulos da primeira divisão do Lesoto?',
      'أي نادٍ عريق تأسس عام 1932 في ماسيرو يحمل الرقم القياسي في عدد ألقاب دوري ليسوتو الممتاز؟'
    ),
    countryModePrompt: L(
      'Quel club surnommé « Tse Putsoa », fondé à Maseru en 1932, domine le palmarès historique de la Premier League nationale ?',
      'Which historic Maseru club nicknamed "Tse Putsoa" and founded in 1932 leads the all-time national Premier League title chart?',
      '¿Qué club apodado "Tse Putsoa" y fundado en Maseru en 1932 domina el palmarés histórico de la liga?',
      'Qual clube apelidado de "Tse Putsoa" e fundado em Maseru em 1932 lidera os títulos da liga nacional?',
      'أي نادٍ عريق في ماسيرو يُلقب بـ"تسي بوتسوا" وتأسس عام 1932 يتصدر سجل بطولات الدوري الوطني؟'
    ),
    correct: L('Matlama FC', 'Matlama FC', 'Matlama FC', 'Matlama FC', 'ماتلاما إف سي'),
    distractors: [
      L('Lioli FC', 'Lioli FC', 'Lioli FC', 'Lioli FC', 'ليولي إف سي'),
      L('Bantu FC', 'Bantu FC', 'Bantu FC', 'Bantu FC', 'بانتو إف سي'),
      L('LDF FC', 'LDF FC', 'LDF FC', 'LDF FC', 'نادي LDF'),
    ],
    explanation: L(
      'Créé en 1932, Matlama FC (dont le nom signifie « le lien ») est l’un des doyens du football en Afrique australe avec plus de dix titres nationaux.',
      'Founded in 1932, Matlama FC ("The Bond") ranks among Southern Africa’s oldest clubs and tops the national league honours list.',
      'Fundado en 1932, el Matlama FC es uno de los clubes más antiguos del sur de África y el más laureado del país.',
      'Fundado em 1932, o Matlama FC é um dos clubes mais antigos da África Austral e lidera o palmarés nacional.',
      'تأسس نادي ماتلاما عام 1932 ويُعد من أعرق أندية الجنوب الإفريقي وأكثرها تتويجاً في البلاد.'
    ),
  }),

  // LR — Liberia
  mkQ({
    id: 'cur_LR_sp1',
    countryCode: 'LR',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'james_debbah_lone_star',
    source: 'LFA & Ligue 1 — Carrière de James Debbah',
    prompt: L(
      'Quel ancien attaquant vedette de la Lone Star du Liberia, cousin de George Weah, a évolué en France sous les maillots de Monaco, Lyon, Nice et du Paris Saint-Germain ?',
      'Which former Liberia Lone Star striker, a cousin of George Weah, played in France for Monaco, Lyon, Nice, and Paris Saint-Germain?',
      '¿Qué exdelantero de la selección de Liberia, primo de George Weah, jugó en Mónaco, Lyon, Niza y PSG?',
      'Qual ex-atacante da seleção da Libéria, primo de George Weah, jogou por Monaco, Lyon, Nice e Paris Saint-Germain?',
      'أي مهاجم سابق لمنتخب ليبيريا وابن عم جورج ويا لعب في فرنسا لأندية موناكو وليون ونيس وباريس سان جيرمان؟'
    ),
    countryModePrompt: L(
      'Quel international surnommé « Miracle Man », cousin de George Weah, a marqué l’attaque de Monaco, Lyon, Nice, du PSG et de la sélection dans les années 1990 ?',
      'Which striker nicknamed "Miracle Man", a cousin of George Weah, starred for Monaco, Lyon, Nice, PSG, and the Lone Star in the 1990s?',
      '¿Qué goleador apodado "Miracle Man", primo de George Weah, jugó en Mónaco, Lyon, Niza y PSG en los años 90?',
      'Qual artilheiro apelidado de "Miracle Man", primo de George Weah, jogou por Monaco, Lyon, Nice e PSG nos anos 1990?',
      'أي مهاجم دولي لُقب بـ"رجل المعجزات" ولعب في موناكو وليون ونيس وباريس سان جيرمان في التسعينيات؟'
    ),
    correct: L('James Debbah', 'James Debbah', 'James Debbah', 'James Debbah', 'جيمس ديبا'),
    distractors: [
      L('Christopher Wreh', 'Christopher Wreh', 'Christopher Wreh', 'Christopher Wreh', 'كريستوفر وريه'),
      L('Kelvin Sebwe', 'Kelvin Sebwe', 'Kelvin Sebwe', 'Kelvin Sebwe', 'كيلفين سيبوي'),
      L('Prince Daye', 'Prince Daye', 'Prince Daye', 'Prince Daye', 'برينس دايي'),
    ],
    explanation: L(
      'Partenaire d’attaque redoutable de George Weah en équipe nationale, James Debbah a disputé deux CAN (1996 et 2002) et plus de 70 sélections.',
      'Forming a lethal strike partnership with George Weah for the Lone Star, James Debbah shone at both the 1996 and 2002 AFCON finals.',
      'Socio ofensivo de George Weah en la selección, James Debbah disputó las Copas Africanas de 1996 y 2002.',
      'Parceiro de ataque de George Weah na seleção, James Debbah disputou as CANs de 1996 e 2002.',
      'شكّل جيمس ديبا ثنائياً هجومياً لافتاً مع جورج ويا في المنتخب وشارك في نسختي أمم إفريقيا 1996 و2002.'
    ),
  }),
  mkQ({
    id: 'cur_LR_sp2',
    countryCode: 'LR',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'skd_sports_complex_paynesville',
    source: 'LFA — Infrastructures sportives',
    prompt: L(
      'Dans quelle ville de l’agglomération du Grand Monrovia se dresse le Samuel Kanyon Doe Sports Complex, plus grand stade du Liberia ?',
      'In which city of Greater Monrovia stands the Samuel Kanyon Doe Sports Complex, Liberia’s largest stadium?',
      '¿En qué ciudad del área metropolitana de Monrovia se encuentra el Complejo Deportivo Samuel Kanyon Doe, el mayor estadio de Liberia?',
      'Em qual cidade da Grande Monróvia fica o Complexo Esportivo Samuel Kanyon Doe, maior estádio da Libéria?',
      'في أي مدينة ضمن منطقة مونروفيا الكبرى يقع مجمع صامويل كانيون دو الرياضي، أكبر ملاعب ليبيريا؟'
    ),
    countryModePrompt: L(
      'Dans quelle commune limitrophe de Monrovia se trouve le Samuel Kanyon Doe Sports Complex, enceinte officielle de la Lone Star depuis 1986 ?',
      'In which municipality bordering Monrovia does the Samuel Kanyon Doe Sports Complex host Lone Star matches since 1986?',
      '¿En qué municipio contiguo a Monrovia se ubica el Complejo Deportivo Samuel Kanyon Doe desde 1986?',
      'Em qual município vizinho a Monróvia fica o Complexo Esportivo Samuel Kanyon Doe desde 1986?',
      'في أي بلدية مجاورة لمونروفيا يقع مجمع صامويل كانيون دو الرياضي منذ افتتاحه عام 1986؟'
    ),
    correct: L('Paynesville', 'Paynesville', 'Paynesville', 'Paynesville', 'بينزفيل'),
    distractors: [
      L('Buchanan', 'Buchanan', 'Buchanan', 'Buchanan', 'بوكانان'),
      L('Gbarnga', 'Gbarnga', 'Gbarnga', 'Gbarnga', 'غبارنغا'),
      L('Harper', 'Harper', 'Harper', 'Harper', 'هاربر'),
    ],
    explanation: L(
      'Pouvant accueillir plus de 22 000 personnes, le SKD Sports Complex de Paynesville est le théâtre des grands derbys locaux et des éliminatoires du Mondial.',
      'Seating over 22,000 fans, Paynesville’s SKD Sports Complex hosts both national derbies and FIFA World Cup qualifiers.',
      'Con más de 22.000 plazas, el SKD de Paynesville alberga los grandes partidos de liga y clasificatorios.',
      'Com mais de 22 mil lugares, o complexo SKD em Paynesville recebe clássicos locais e eliminatórias da Copa.',
      'يحتضن مجمع SKD الرياضي في بينزفيل المباريات الكبرى للمنتخب والتصفيات القارية والدولية.'
    ),
  }),

  // LY — Libye
  mkQ({
    id: 'cur_LY_sp1',
    countryCode: 'LY',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'tarik_el_taib_libyan_maradona',
    source: 'LFF & CAF — Légendes des Chevaliers de la Méditerranée',
    prompt: L(
      'Quel virtuose technique du milieu de terrain, surnommé « le Maradona libyen » et star au CS Sfaxien comme à Al-Hilal, reste l’un des joueurs les plus adulés de l’histoire de la Libye ?',
      'Which gifted midfield playmaker, nicknamed "the Libyan Maradona" and a star at CS Sfaxien and Al-Hilal, ranks among Libya’s most revered footballers?',
      '¿Qué virtuoso centrocampista, apodado "el Maradona libio" y estrella en Sfaxien y Al-Hilal, es uno de los ídolos del fútbol de Libia?',
      'Qual habilidoso meio-campista, apelidado de "Maradona líbio" e ídolo em Sfaxien e Al-Hilal, é um dos maiores nomes da Líbia?',
      'أي صانع ألعاب موهوب لُقب بـ"مارادونا ليبيا" وتألق في الصفاقسي والهلال السعودي ليصبح من أساطير الكرة الليبية؟'
    ),
    countryModePrompt: L(
      'Quel numéro 10 d’Al-Ahly Tripoli puis du CS Sfaxien et d’Al-Hilal Riyad a brillé à la CAN 2006 sous le surnom affectueux de « Maradona » ?',
      'Which creative No. 10 from Al-Ahly Tripoli, CS Sfaxien, and Al-Hilal Riyadh starred at the 2006 AFCON under a famous Argentine legend’s nickname?',
      '¿Qué talentoso número 10 de Al-Ahly Trípoli, Sfaxien y Al-Hilal brilló en la CAN 2006 con el apodo de "El Maradona"?',
      'Qual talentoso camisa 10 de Al-Ahly Trípoli, Sfaxien e Al-Hilal brilhou na CAN 2006 com o apelido de "Maradona"?',
      'أي صانع ألعاب حمل الرقم 10 في أهلي طرابلس والصفاقسي والهلال وتألق في أمم إفريقيا 2006 بلقب "مارادونا"؟'
    ),
    correct: L('Tarik El Taib', 'Tarik El Taib', 'Tarik El Taib', 'Tarik El Taib', 'طارق التائب'),
    distractors: [
      L('Jehad Muntasser', 'Jehad Muntasser', 'Jehad Muntasser', 'Jehad Muntasser', 'جهاد المنتصر'),
      L('Ahmed Saad Osman', 'Ahmed Saad Osman', 'Ahmed Saad Osman', 'Ahmed Saad Osman', 'أحمد سعد عثمان'),
      L('Nader Kara', 'Nader Kara', 'Nader Kara', 'Nader Kara', 'نادر كارا'),
    ],
    explanation: L(
      'Doté d’un contrôle de balle et d’une vision exceptionnels, Tarik El Taib a conquis les supporters tunisiens, saoudiens et de toute l’Afrique du Nord.',
      'Celebrated across North Africa and the Gulf for dazzling dribbling and assists, Tarik El Taib led the Knights back to AFCON in 2006.',
      'Admirado en el Magreb y el Golfo por su técnica exquisita, Tarik El Taib devolvió a su selección a la CAN en 2006.',
      'Admirado no Magrebe e no Golfo pela técnica refinada, Tarik El Taib conduziu a seleção de volta à CAN em 2006.',
      'أبهر طارق التائب جماهير الكرة العربية والإفريقية بمهاراته الاستثنائية وقاد فرسان المتوسط في أمم إفريقيا 2006.'
    ),
  }),
  mkQ({
    id: 'cur_LY_sp2',
    countryCode: 'LY',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'finale_can_1982_tripoli',
    source: 'CAF — Finale CAN 1982',
    prompt: L(
      'En quelle année la Libye a-t-elle accueilli la Coupe d’Afrique des Nations et disputé la finale à Tripoli face au Ghana (défaite aux tirs au but) ?',
      'In what year did Libya host the Africa Cup of Nations and reach the Tripoli final, narrowly losing to Ghana on penalties?',
      '¿En qué año organizó Libia la Copa Africana de Naciones y alcanzó la final en Trípoli frente a Ghana?',
      'Em que ano a Líbia sediou a Copa Africana de Nações e chegou à final em Trípoli contra Gana?',
      'في أي عام استضافت ليبيا كأس أمم إفريقيا وبلغت النهائي في طرابلس أمام غانا؟'
    ),
    countryModePrompt: L(
      'En quelle année le pays a-t-il organisé pour la seule fois à ce jour la phase finale de la CAN, s’inclinant uniquement aux tirs au but (7-6) en finale contre le Ghana ?',
      'In what year did the nation host the AFCON finals, losing only 7–6 on penalties to Ghana in a dramatic Tripoli final?',
      '¿En qué año acogió el país la fase final de la CAN, cayendo únicamente en los penaltis ante Ghana en Trípoli?',
      'Em que ano o país sediou a fase final da CAN, sendo superado apenas nos pênaltis por Gana na final em Trípoli?',
      'في أي عام استضافت البلاد نهائيات كأس أمم إفريقيا ووصلت إلى النهائي قبل أن تخسر بركلات الترجيح أمام غانا؟'
    ),
    correct: L('1982', '1982', '1982', '1982', '1982'),
    distractors: [
      L('1976', '1976', '1976', '1976', '1976'),
      L('1990', '1990', '1990', '1990', '1990'),
      L('1996', '1996', '1996', '1996', '1996'),
    ],
    explanation: L(
      'Portés par Ali Al-Beshari, les Chevaliers de la Méditerranée restèrent invaincus dans le temps réglementaire durant toute la CAN 1982 avant de céder aux tirs au but devant les Black Stars.',
      'Inspired by star Ali Al-Beshari, the hosts went unbeaten in open play at the 1982 AFCON before Ghana edged a tense shootout 7–6.',
      'Con Ali Al-Beshari como estandarte, los anfitriones terminaron invictos en juego en la CAN 1982 antes de la tanda de penaltis.',
      'Com Ali Al-Beshari em destaque, a seleção anfitriã terminou a CAN 1982 invicta no tempo normal antes dos pênaltis.',
      'لم يخسر المنتخب في الوقت الأصلي طوال نسخة 1982 بقيادة علي البشاري قبل أن يحسم غانا النهائي بركلات الترجيح.'
    ),
  }),

  // MW — Malawi
  mkQ({
    id: 'cur_MW_sp1',
    countryCode: 'MW',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'gabadinho_mhango_can_2021',
    source: 'FAM & CAF — CAN 2021',
    prompt: L(
      'Quel attaquant des Flames du Malawi a inscrit un doublé contre le Zimbabwe puis un but mémorable de plus de 30 mètres face au Maroc en huitième de finale de la CAN 2021 ?',
      'Which Malawi Flames striker scored twice against Zimbabwe and struck a 30-yard wonder goal against Morocco in the 2021 AFCON Round of 16?',
      '¿Qué delantero de las Llamas de Malaui marcó un doblete ante Zimbabue y un golazo lejano frente a Marruecos en la CAN 2021?',
      'Qual atacante dos Flames do Malaui marcou duas vezes contra o Zimbábue e fez um golaço de longe contra Marrocos na CAN 2021?',
      'أي مهاجم لمنتخب مالاوي (فليمز) سجل ثنائية أمام زيمبابوي وهدفاً صاروخياً بعيد المدى ضد المغرب في أمم إفريقيا 2021؟'
    ),
    countryModePrompt: L(
      'Quel attaquant des Flames a brillé à la CAN 2021 par son doublé contre le Zimbabwe et une frappe lointaine sensationnelle face au Maroc ?',
      'Which Flames forward lit up the 2021 AFCON with a brace against Zimbabwe and an extraordinary long-range strike against Morocco?',
      '¿Qué atacante de los Flames brilló en la CAN 2021 con un doblete ante Zimbabue y un disparo lejano frente a Marruecos?',
      'Qual atacante dos Flames brilhou na CAN 2021 com dois gols sobre o Zimbábue e um chute espetacular contra Marrocos?',
      'أي مهاجم لمنتخب فليمز تألق في أمم إفريقيا 2021 بثنائية في مرمى زيمبابوي وهدف بعيد مذهل أمام المغرب؟'
    ),
    correct: L('Gabadinho Mhango', 'Gabadinho Mhango', 'Gabadinho Mhango', 'Gabadinho Mhango', 'غابادينيو مهانغو'),
    distractors: [
      L('Kinnah Phiri', 'Kinnah Phiri', 'Kinnah Phiri', 'Kinnah Phiri', 'كيناه فيري'),
      L('Essau Kanyenda', 'Essau Kanyenda', 'Essau Kanyenda', 'Essau Kanyenda', 'إيساو كانيندا'),
      L('Peter Mponda', 'Peter Mponda', 'Peter Mponda', 'Peter Mponda', 'بيتر مبوندا'),
    ],
    explanation: L(
      'Classé parmi les plus beaux buts du tournoi, le tir lointain de Gabadinho Mhango contribua à emmener les Flames pour la première fois en huitièmes de finale de CAN.',
      'Voting lists ranked Mhango’s thunderbolt among the goals of the 2021 tournament as the Flames reached the AFCON knockout rounds for the very first time.',
      'Elegido entre los mejores tantos del torneo, el disparo de Mhango acompañó la primera clasificación a octavos en la historia de los Flames.',
      'Eleito um dos gols mais bonitos do torneio, o chutaço de Mhango marcou a estreia dos Flames nas oitavas da CAN.',
      'أُسندت لهدف مهانغو الصاروخي مكانة بين أجمل أهداف البطولة خلال أول عبور تاريخي للمنتخب إلى ثمن نهائي أمم إفريقيا.'
    ),
  }),
  mkQ({
    id: 'cur_MW_sp2',
    countryCode: 'MW',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'kamuzu_stadium_blantyre',
    source: 'FAM — Blantyre',
    prompt: L(
      'Dans quelle grande ville commerciale du sud du Malawi se dresse le stade historique Kamuzu, longtemps antre emblématique de l’équipe nationale ?',
      'In which major commercial city of southern Malawi does the historic Kamuzu Stadium stand as a longtime home of the Flames?',
      '¿En qué gran ciudad comercial del sur de Malaui se alza el histórico Estadio Kamuzu?',
      'Em qual grande cidade comercial do sul do Malaui fica o histórico Estádio Kamuzu?',
      'في أي مدينة تجارية كبرى جنوب مالاوي يقع ملعب كاموزو التاريخي؟'
    ),
    countryModePrompt: L(
      'Dans quelle ville économique du Sud se trouve le Kamuzu Stadium, théâtre depuis les années 1960 des grands chocs des Flames et du derby local Big Bullets–Mighty Wanderers ?',
      'In which southern economic hub does Kamuzu Stadium host major Flames fixtures and the fierce Big Bullets vs Mighty Wanderers derby?',
      '¿En qué ciudad comercial del sur acoge el Estadio Kamuzu el gran derbi entre Big Bullets y Mighty Wanderers?',
      'Em qual polo econômico do sul fica o Estádio Kamuzu, palco do clássico entre Big Bullets e Mighty Wanderers?',
      'في أي مدينة اقتصادية جنوب البلاد يقع ملعب كاموزو مسرح ديربي بيغ بوليتس ومايتي واندررز؟'
    ),
    correct: L('Blantyre', 'Blantyre', 'Blantyre', 'Blantyre', 'بلانتاير'),
    distractors: [
      L('Zomba', 'Zomba', 'Zomba', 'Zomba', 'زومبا'),
      L('Mzuzu', 'Mzuzu', 'Mzuzu', 'Mzuzu', 'مزوزو'),
      L('Mangochi', 'Mangochi', 'Mangochi', 'Mangochi', 'مانغوتشي'),
    ],
    explanation: L(
      'Également lieu de la cérémonie d’indépendance en juillet 1964, le Kamuzu Stadium de Blantyre vibre notamment lors du bouillant derby entre Nyasa Big Bullets et Mighty Wanderers.',
      'Site of the 1964 independence celebrations, Blantyre’s Kamuzu Stadium pulses with energy during Flames matches and the Nyasa Big Bullets–Wanderers derby.',
      'Escenario de la independencia en 1964, el Estadio Kamuzu de Blantyre vibra con los partidos de liga y de la selección.',
      'Palco das celebrações da independência em 1964, o Estádio Kamuzu em Blantyre pulsa nos jogos de clubes e da seleção.',
      'شهد ملعب كاموزو في بلانتاير احتفالات الاستقلال عام 1964 ويُعد قلعة كروية عريقة للمنتخب والأندية.'
    ),
  }),

  // MU — Maurice
  mkQ({
    id: 'cur_MU_sp1',
    countryCode: 'MU',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'kersley_appou_record_age_buteur',
    source: 'MFA & CAF — Éliminatoires CAN 2015',
    prompt: L(
      'Quel attaquant emblématique du Club M de l’île Maurice est devenu en 2014, à 43 ans passés, l’un des buteurs les plus âgés de l’histoire du football international face à la Mauritanie ?',
      'Which veteran Mauritius Club M forward became one of international football’s oldest goalscorers in 2014 at over 43 years of age against Mauritania?',
      '¿Qué veterano delantero del Club M de Mauricio se convirtió en 2014, con 43 años, en uno de los goleadores internacionales más longevos?',
      'Qual veterano atacante do Club M das Maurícias tornou-se em 2014, aos 43 anos, um dos artilheiros internacionais mais velhos?',
      'أي مهاجم مخضرم لمنتخب موريشيوس (كلوب M) أصبح عام 2014 عن عمر 43 عاماً من أكبر مسجلي الأهداف الدولية سناً؟'
    ),
    countryModePrompt: L(
      'Quel buteur historique du Club M a marqué contre la Mauritanie en avril 2014 à l’âge de 43 ans et 354 jours, effaçant le vieux record africain de Roger Milla ?',
      'Which veteran Club M striker netted against Mauritania in April 2014 aged 43 years and 354 days, surpassing Roger Milla’s longstanding African mark?',
      '¿Qué histórico delantero del Club M marcó en abril de 2014 con 43 años y 354 días superando el registro africano de Roger Milla?',
      'Qual artilheiro histórico do Club M marcou em abril de 2014 aos 43 anos e 354 dias superando o recorde africano de Roger Milla?',
      'أي هداف تاريخي لمنتخب كلوب M سجل هدفاً دولياً عام 2014 بعمر 43 عاماً و354 يوماً متجاوزاً رقم روجيه ميلا الإفريقي؟'
    ),
    correct: L('Kersley Appou', 'Kersley Appou', 'Kersley Appou', 'Kersley Appou', 'كيرسلي أبو'),
    distractors: [
      L('Jonathan Bru', 'Jonathan Bru', 'Jonathan Bru', 'Jonathan Bru', 'جوناثان برو'),
      L('Lindsay Rose', 'Lindsay Rose', 'Lindsay Rose', 'Lindsay Rose', 'ليندسي روز'),
      L('Kévin Bru', 'Kévin Bru', 'Kévin Bru', 'Kévin Bru', 'كيفن برو'),
    ],
    explanation: L(
      'Sélectionné sur plus de vingt ans sous le maillot du Club M, Kersley Appou entra dans les annales de la CAF et de la FIFA en 2014 par sa longévité exceptionnelle.',
      'Spanning a two-decade international career for Club M, Kersley Appou entered football record books in 2014 at nearly 44 years old.',
      'Con más de dos décadas en la selección, Kersley Appou ingresó en los récords internacionales en 2014.',
      'Com duas décadas servindo o Club M, Kersley Appou entrou para os livros de recordes em 2014.',
      'سجل كيرسلي أبو اسمه في السجلات القارية عام 2014 بعد مسيرة دولية امتدت لأكثر من عقدين.'
    ),
  }),
  mkQ({
    id: 'cur_MU_sp2',
    countryCode: 'MU',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'stade_george_v_curepipe',
    source: 'MFA — Curepipe',
    prompt: L(
      'Dans quelle ville des hauts plateaux mauriciens se situe l’historique Stade George-V, où le Club M remporta les Jeux des îles de l’océan Indien en 1985 et 2003 ?',
      'In which central Mauritian highland town is the historic Stade George V located, where Club M won Indian Ocean Island Games gold in 1985 and 2003?',
      '¿En qué ciudad de la meseta central de Mauricio se sitúa el histórico Estadio George V, donde el Club M ganó los Juegos de las Islas en 1985 y 2003?',
      'Em qual cidade do planalto central das Maurícias fica o histórico Estádio George V, palco dos títulos de 1985 e 2003?',
      'في أي مدينة بمرتفعات موريشيوس الوسطى يقع ملعب جورج الخامس التاريخي الذي شهد تتويج المنتخب في 1985 و2003؟'
    ),
    countryModePrompt: L(
      'Dans quelle ville du centre se dresse le célèbre Stade George-V, théâtre historique des sacres du Club M aux Jeux des îles 1985 et 2003 ?',
      'In which central town does the famous Stade George V stand, hosting Club M’s historic 1985 and 2003 Indian Ocean Island Games triumphs?',
      '¿En qué ciudad central se levanta el célebre Estadio George V, escenario de los títulos de 1985 y 2003?',
      'Em qual cidade central fica o célebre Estádio George V, palco das conquistas de 1985 e 2003?',
      'في أي مدينة وسط الجزيرة يقع ملعب جورج الخامس الشهير مسرح تتويجات ألعاب جزر المحيط الهندي 1985 و2003؟'
    ),
    correct: L('Curepipe', 'Curepipe', 'Curepipe', 'Curepipe', 'كيوربيب'),
    distractors: [
      L('Mahébourg', 'Mahébourg', 'Mahébourg', 'Mahébourg', 'ماهيبورغ'),
      L('Grand Baie', 'Grand Baie', 'Grand Baie', 'Grand Baie', 'غراند باي'),
      L('Centre de Flacq', 'Centre de Flacq', 'Centre de Flacq', 'Centre de Flacq', 'سنتر دي فلاك'),
    ],
    explanation: L(
      'Inauguré en 1955 puis modernisé pour 2003, le Stade George-V de Curepipe reste un haut lieu de la mémoire sportive nationale.',
      'Opened in 1955 and renovated ahead of the 2003 Games, Curepipe’s Stade George V holds a cherished place in local sports history.',
      'Inaugurado en 1955 y renovado para 2003, el Estadio George V de Curepipe guarda grandes páginas del deporte nacional.',
      'Inaugurado em 1955 e modernizado para 2003, o Estádio George V em Curepipe guarda grandes memórias esportivas.',
      'يُعد ملعب جورج الخامس في كيوربيب منذ افتتاحه عام 1955 رمزاً رياضياً ارتبط بأفراح ألعاب جزر المحيط الهندي.'
    ),
  }),

  // NA — Namibie
  mkQ({
    id: 'cur_NA_sp1',
    countryCode: 'NA',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'peter_shalulile_brave_warriors',
    source: 'NFA & CAF — CAN 2023 & PSL',
    prompt: L(
      'Quel avant-centre et capitaine des Brave Warriors de Namibie, multiple Soulier d’or du championnat sud-africain avec les Mamelodi Sundowns, a mené son pays en huitièmes de la CAN 2023 ?',
      'Which Namibia Brave Warriors captain and prolific Mamelodi Sundowns Golden Boot striker led his country into the 2023 AFCON Round of 16?',
      '¿Qué delantero y capitán de los Brave Warriors de Namibia, goleador en los Mamelodi Sundowns, guió a su país a octavos de la CAN 2023?',
      'Qual atacante e capitão dos Brave Warriors da Namíbia, artilheiro pelo Mamelodi Sundowns, levou o país às oitavas da CAN 2023?',
      'أي مهاجم وقائد لمنتخب ناميبيا (المحاربون الشجعان) وهداف ماميلودي صن داونز قاد بلاده إلى ثمن نهائي أمم إفريقيا 2023؟'
    ),
    countryModePrompt: L(
      'Quel attaquant originaire d’Engela et capitaine des Brave Warriors a remporté plusieurs fois le titre de meilleur joueur d’Afrique du Sud avec les Mamelodi Sundowns ?',
      'Which Engela-born Brave Warriors captain won multiple South African Player of the Season awards starring for Mamelodi Sundowns?',
      '¿Qué delantero nacido en Engela y capitán de los Brave Warriors brilló con múltiples premios en el Mamelodi Sundowns?',
      'Qual atacante nascido em Engela e capitão dos Brave Warriors conquistou prêmios seguidos pelo Mamelodi Sundowns?',
      'أي مهاجم وقائد للمنتخب ولد في إنغيلا وتُوّج عدة مرات بجائزة أفضل لاعب في جنوب إفريقيا مع ماميلودي صن داونز؟'
    ),
    correct: L('Peter Shalulile', 'Peter Shalulile', 'Peter Shalulile', 'Peter Shalulile', 'بيتر شالوليلي'),
    distractors: [
      L('Collin Benjamin', 'Collin Benjamin', 'Collin Benjamin', 'Collin Benjamin', 'كولين بنجامين'),
      L('Deon Hotto', 'Deon Hotto', 'Deon Hotto', 'Deon Hotto', 'ديون هوتو'),
      L('Ricardo Mannetti', 'Ricardo Mannetti', 'Ricardo Mannetti', 'Ricardo Mannetti', 'ريكاردو مانيتي'),
    ],
    explanation: L(
      'Vainqueur de la Ligue africaine de football 2023 en club et artisan de la première victoire en phase finale de CAN (contre la Tunisie en janvier 2024), Peter Shalulile est une star d’Afrique australe.',
      'A multi-time Golden Boot winner with Mamelodi Sundowns, Peter Shalulile captained the Brave Warriors to their historic first-ever AFCON win in 2024.',
      'Multicampeón y máximo artillero con el Sundowns, Peter Shalulile lideró la histórica primera victoria del país en una CAN en 2024.',
      'Artilheiro histórico pelo Sundowns, Peter Shalulile capitaneou a equipe na primeira vitória em fases finais de CAN em 2024.',
      'قاد القائد بيتر شالوليلي منتخب بلاده لتحقيق أول فوز تاريخي له في نهائيات أمم إفريقيا أمام تونس في يناير 2024.'
    ),
  }),
  mkQ({
    id: 'cur_NA_sp2',
    countryCode: 'NA',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'frankie_fredericks_jo_1992_1996',
    source: 'CIO & World Athletics — Barcelone 1992 / Atlanta 1996',
    prompt: L(
      'Quel immense sprinteur namibien a décroché quatre médailles d’argent olympiques sur 100 m et 200 m (1992 et 1996) ainsi que le titre mondial du 200 m en 1993 ?',
      'Which legendary Namibian sprinter won four Olympic silver medals in the 100m and 200m (1992 & 1996) plus the 1993 200m World Championship gold?',
      '¿Qué legendario velocista de Namibia ganó cuatro platas olímpicas en 100 m y 200 m y el título mundial de 200 m en 1993?',
      'Qual lendário velocista da Namíbia conquistou quatro pratas olímpicas nos 100m e 200m e o ouro mundial dos 200m em 1993?',
      'أي عداء ناميبي أسطوري أحرز أربع فضيات أولمبية في سباقي 100 و200 متر وذهبية بطولة العالم 1993؟'
    ),
    countryModePrompt: L(
      'Quel sprinteur de Windhoek a remporté quatre médailles d’argent aux Jeux de 1992 et 1996 sur 100 m et 200 m, ainsi que l’or mondial sur 200 m à Stuttgart en 1993 ?',
      'Which Windhoek-born sprinter won four Olympic silver medals in 1992 and 1996 across the 100m and 200m plus 1993 World 200m gold?',
      '¿Qué velocista de Windhoek ganó cuatro platas olímpicas en 1992 y 1996 y el oro mundial de 200 m en 1993?',
      'Qual velocista de Windhoek conquistou quatro pratas olímpicas em 1992 e 1996 e o ouro mundial dos 200m em 1993?',
      'أي عداء من ويندهوك حصد أربع فضيات أولمبية عامي 1992 و1996 وذهبية العالم في سباق 200 متر عام 1993؟'
    ),
    correct: L('Frankie Fredericks', 'Frankie Fredericks', 'Frankie Fredericks', 'Frankie Fredericks', 'فرانكي فريدريكس'),
    distractors: [
      L('Christine Mboma', 'Christine Mboma', 'Christine Mboma', 'Christine Mboma', 'كريستين مبوما'),
      L('Beatrice Masilingi', 'Beatrice Masilingi', 'Beatrice Masilingi', 'Beatrice Masilingi', 'بياتريس ماسيلينغي'),
      L('Luketz Swartbooi', 'Luketz Swartbooi', 'Luketz Swartbooi', 'Luketz Swartbooi', 'لوكتز سوارتبوي'),
    ],
    explanation: L(
      'Premier médaillé olympique de l’histoire du pays dès Barcelone 1992, Frankie Fredericks demeure un symbole sportif et membre d’honneur du mouvement olympique.',
      'Winning the nation’s very first Olympic medals at Barcelona 1992, Frankie Fredericks went on to become a global ambassador for athletics.',
      'Primer medallista olímpico nacional en Barcelona 1992, Frankie Fredericks es una figura universal del atletismo.',
      'Primeiro medalhista olímpico do país em Barcelona 1992, Frankie Fredericks é um ícone mundial do esporte.',
      'يُعد فرانكي فريدريكس أول متوج أولمبي في تاريخ البلاد منذ ألعاب برشلونة 1992 وأحد أعظم عدائي التسعينيات.'
    ),
  }),

  // UG — Ouganda
  mkQ({
    id: 'cur_UG_sp1',
    countryCode: 'UG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'denis_onyango_caf_player_2016',
    source: 'CAF Awards 2016 & FUFA',
    prompt: L(
      'Quel célèbre gardien de but des Cranes de l’Ouganda, vainqueur de la Ligue des champions CAF avec les Mamelodi Sundowns, a été élu Meilleur joueur africain basé en Afrique en 2016 ?',
      'Which Uganda Cranes goalkeeper, a CAF Champions League winner with Mamelodi Sundowns, was named 2016 African-Based Player of the Year?',
      '¿Qué famoso portero de los Cranes de Uganda, campeón de la Liga de Campeones de la CAF con Sundowns, fue elegido mejor jugador basado en África en 2016?',
      'Qual famoso goleiro dos Cranes de Uganda, campeão da Liga dos Campeões da CAF pelo Sundowns, foi eleito melhor jogador atuando na África em 2016?',
      'أي حارس مرمى شهير لمنتخب أوغندا ونادي ماميلودي صن داونز تُوّج بجائزة أفضل لاعب داخل القارة الإفريقية عام 2016؟'
    ),
    countryModePrompt: L(
      'Quel gardien de but et ancien capitaine des Cranes, sacré champion d’Afrique des clubs en 2016 avec les Mamelodi Sundowns, a reçu le trophée CAF du meilleur joueur évoluant sur le continent ?',
      'Which longtime Cranes goalkeeper and captain won the 2016 CAF Champions League with Mamelodi Sundowns and earned CAF African-Based Player of the Year?',
      '¿Qué guardameta y excapitán de los Cranes ganó la Champions africana de 2016 y el premio al mejor jugador del continente?',
      'Qual goleiro e ex-capitão dos Cranes venceu a Champions africana em 2016 e o prêmio de melhor jogador atuando no continente?',
      'أي حارس مرمى وقائد سابق للمنتخب أحرز دوري أبطال إفريقيا 2016 وجائزة الكاف لأفضل لاعب محلي بالقارة؟'
    ),
    correct: L('Denis Onyango', 'Denis Onyango', 'Denis Onyango', 'Denis Onyango', 'دينيس أونيانغو'),
    distractors: [
      L('David Obua', 'David Obua', 'David Obua', 'David Obua', 'ديفيد أوبوا'),
      L('Geoffrey Massa', 'Geoffrey Massa', 'Geoffrey Massa', 'Geoffrey Massa', 'جيفري ماسا'),
      L('Farouk Miya', 'Farouk Miya', 'Farouk Miya', 'Farouk Miya', 'فاروق ميا'),
    ],
    explanation: L(
      'Artisan majeur du retour des Cranes à la CAN 2017 après 39 ans d’attente puis aux huitièmes de 2019, Denis Onyango est une icône du football est-africain.',
      'Crucial in returning the Cranes to AFCON in 2017 after a 39-year wait, Denis Onyango became one of Africa’s finest goalkeepers.',
      'Pieza fundamental en el regreso de los Cranes a la CAN en 2017 tras 39 años de ausencia, Denis Onyango es leyenda regional.',
      'Peça-chave no retorno dos Cranes à CAN em 2017 após 39 anos, Denis Onyango tornou-se ídolo do futebol africano.',
      'أسهم دينيس أونيانغو بقيادته وتصدياته في عودة أوغندا إلى أمم إفريقيا عام 2017 بعد غياب دام 39 عاماً.'
    ),
  }),
  mkQ({
    id: 'cur_UG_sp2',
    countryCode: 'UG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'phillip_omondi_can_1978_finaliste',
    source: 'CAF — CAN 1978',
    prompt: L(
      'Quel grand attaquant des Cranes de l’Ouganda a terminé meilleur buteur de la CAN 1978 lors de l’épopée qui mena l’équipe jusqu’en finale face au Ghana ?',
      'Which brilliant Uganda Cranes striker finished top scorer at the 1978 AFCON as the team reached the final against hosts Ghana?',
      '¿Qué gran delantero de los Cranes de Uganda fue máximo goleador de la CAN 1978 en el camino hacia la final ante Ghana?',
      'Qual grande atacante dos Cranes de Uganda foi artilheiro da CAN 1978 na campanha até a final contra Gana?',
      'أي مهاجم أوغندي كبير تُوّج هدافاً لكأس أمم إفريقيا 1978 عندما بلغ منتخب كرينز المباراة النهائية أمام غانا؟'
    ),
    countryModePrompt: L(
      'Quel légendaire attaquant du Kampala City Council (KCCA) termina co-meilleur buteur de la CAN 1978 en portant les Cranes à la finale ?',
      'Which legendary Kampala City Council (KCCA) forward finished joint top scorer at the 1978 AFCON while inspiring the Cranes to the final?',
      '¿Qué legendario delantero del KCCA terminó máximo artillero de la CAN 1978 llevando a los Cranes a la final?',
      'Qual lendário atacante do KCCA terminou como artilheiro da CAN 1978 ao levar os Cranes à final?',
      'أي مهاجم أسطوري لنادي كمبالا سيتي كاونسل أنهى أمم إفريقيا 1978 هدافاً للبطولة وقاد المنتخب إلى النهائي؟'
    ),
    correct: L('Phillip Omondi', 'Phillip Omondi', 'Phillip Omondi', 'Phillip Omondi', 'فيليب أوموندي'),
    distractors: [
      L('Majid Musisi', 'Majid Musisi', 'Majid Musisi', 'Majid Musisi', 'ماجد موسيسي'),
      L('Jackson Mayanja', 'Jackson Mayanja', 'Jackson Mayanja', 'Jackson Mayanja', 'جاكسون مايانجا'),
      L('Polly Ouma', 'Polly Ouma', 'Polly Ouma', 'Polly Ouma', 'بولي أوما'),
    ],
    explanation: L(
      'Surnommé le « Maestro » à Kampala, Phillip Omondi inscrivit trois buts décisifs en 1978, offrant au pays son meilleur classement historique en Coupe d’Afrique des Nations.',
      'Revered as the "Maestro" in Kampala, Phillip Omondi scored three crucial goals at the 1978 AFCON to guide the Cranes to runner-up silver.',
      'Apodado el "Maestro", Phillip Omondi anotó tres goles decisivos en 1978 para lograr el histórico subcampeonato.',
      'Chamado de "Maestro" em Kampala, Phillip Omondi marcou três gols decisivos no histórico vice-campeonato de 1978.',
      'سجل فيليب أوموندي ثلاثة أهداف حاسمة في نسخة 1978 ليقود المنتخب إلى وصافة البطولة القارية.'
    ),
  }),

  // RW — Rwanda
  mkQ({
    id: 'cur_RW_sp1',
    countryCode: 'RW',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'apr_fc_kigali_palmares',
    source: 'FERWAFA — Rwanda Premier League',
    prompt: L(
      'Quel club de Kigali, fondé en 1993 et rival historique de Rayon Sports, détient le record absolu de titres de champion du Rwanda ?',
      'Which Kigali club founded in 1993 and arch-rival of Rayon Sports holds the all-time record for Rwandan Premier League titles?',
      '¿Qué club de Kigali fundado en 1993 y gran rival del Rayon Sports posee el récord de títulos de liga en Ruanda?',
      'Qual clube de Kigali fundado em 1993 e grande rival do Rayon Sports detém o recorde de títulos nacionais em Ruanda?',
      'أي نادٍ في كيغالي تأسس عام 1993 والغريم التقليدي لنادي رايون سبورتس يحمل الرقم القياسي في عدد ألقاب الدوري؟'
    ),
    countryModePrompt: L(
      'Quel grand club de Kigali fondé en 1993, rival traditionnel du Rayon Sports FC, domine le palmarès du championnat national de football ?',
      'Which major Kigali club founded in 1993, traditional rival of Rayon Sports FC, holds the most national league championships?',
      '¿Qué gran club de Kigali fundado en 1993 y rival del Rayon Sports domina el historial de títulos de liga?',
      'Qual grande clube de Kigali fundado em 1993 e rival do Rayon Sports lidera o histórico de títulos nacionais?',
      'أي نادٍ كبير في كيغالي تأسس عام 1993 والغريم الأبرز لرايون سبورتس يتصدر سجل ألقاب الدوري الوطني؟'
    ),
    correct: L('APR FC', 'APR FC', 'APR FC', 'APR FC', 'نادي الجيش الوطني (APR FC)'),
    distractors: [
      L('AS Kigali', 'AS Kigali', 'AS Kigali', 'AS Kigali', 'نادي كيغالي'),
      L('SC Kiyovu Sports', 'SC Kiyovu Sports', 'SC Kiyovu Sports', 'SC Kiyovu Sports', 'كيوفو سبورتس'),
      L('Police FC', 'Police FC', 'Police FC', 'Police FC', 'نادي الشرطة'),
    ],
    explanation: L(
      'Comptant plus de vingt titres nationaux et plusieurs victoires en Coupe CECAFA Kagame, l’APR FC anime avec Rayon Sports le grand classique de Kigali.',
      'With more than 20 league crowns and multiple CECAFA Kagame Cup trophies, APR FC shares Kigali’s fiercest derby with Rayon Sports.',
      'Con más de veinte ligas y varias copas CECAFA Kagame, el APR FC protagoniza con Rayon Sports el gran clásico de Kigali.',
      'Com mais de vinte títulos da liga e taças CECAFA Kagame, o APR FC faz com o Rayon Sports o maior clássico de Kigali.',
      'يتصدر نادي APR سجل البطولات بأكثر من عشرين لقباً ويخوض مع رايون سبورتس ديربي كيغالي الشهير.'
    ),
  }),
  mkQ({
    id: 'cur_RW_sp2',
    countryCode: 'RW',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'stade_amahoro_paix_kigali',
    source: 'FERWAFA & Kigali Sports Hub',
    prompt: L(
      'Que signifie en kinyarwanda le nom du grand stade national de Kigali, « Amahoro », récemment agrandi à 45 000 places ?',
      'What does the Kinyarwanda name "Amahoro" of Kigali’s newly expanded 45,000-seat national stadium mean?',
      '¿Qué significa en kinyarwanda "Amahoro", el nombre del gran estadio nacional de Kigali ampliado a 45.000 plazas?',
      'O que significa em quinyaruanda "Amahoro", o nome do grande estádio nacional de Kigali ampliado para 45 mil lugares?',
      'ماذا تعني كلمة "أماهورو" بلغة كينيارواندا، وهو اسم الملعب الوطني الكبير في كيغالي المتسع لـ45 ألف متفرج؟'
    ),
    countryModePrompt: L(
      'Que signifie en kinyarwanda le nom du stade national « Amahoro » à Kigali, théâtre des exploits des Amavubi et modernisé à 45 000 places en 2024 ?',
      'What does the Kinyarwanda word "Amahoro" mean—the name of Kigali’s 45,000-seat national stadium hosting the Amavubi?',
      '¿Qué significa en kinyarwanda la palabra "Amahoro", nombre del estadio nacional de 45.000 plazas de Kigali?',
      'O que significa em quinyaruanda a palavra "Amahoro", nome do estádio nacional de 45 mil lugares em Kigali?',
      'ما معنى كلمة "أماهورو" بلغة كينيارواندا التي يحملها الملعب الوطني في كيغالي؟'
    ),
    correct: L('La Paix', 'Peace', 'La Paz', 'A Paz', 'السلام'),
    distractors: [
      L('La Victoire', 'Victory', 'La Victoria', 'A Vitória', 'النصر'),
      L('Les Mille Collines', 'Thousand Hills', 'Las Mil Colinas', 'As Mil Colinas', 'الألف تلة'),
      L('Le Soleil', 'The Sun', 'El Sol', 'O Sol', 'الشمس'),
    ],
    explanation: L(
      'Symbole d’unité et de reconstruction, le Stade Amahoro (« Stade de la Paix ») abrite les rencontres des Guêpes (Amavubi) au cœur de Kigali.',
      'A symbol of unity and renewal, Amahoro ("Peace") Stadium stands in Kigali as the newly modernized home of the Amavubi national team.',
      'Símbolo de unidad, el Estadio Amahoro ("Paz") alberga en Kigali los encuentros de los Amavubi.',
      'Símbolo de união, o Estádio Amahoro ("Paz") recebe em Kigali os jogos dos Amavubi.',
      'يرمز ملعب أماهورو أي "السلام" إلى الوحدة والتجدد ويستضيف مباريات منتخب الدبابير (أمافوبي) في كيغالي.'
    ),
  }),

  // ST — Sao Tomé-et-Príncipe
  mkQ({
    id: 'cur_ST_sp1',
    countryCode: 'ST',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'luis_leal_falcoes_e_papagaios',
    source: 'FSF & Statistiques internationales',
    prompt: L(
      'Quel prolifique attaquant international de Sao Tomé-et-Príncipe, ayant joué au Portugal, en Argentine (Newell’s Old Boys) et au Mexique, est le meilleur buteur historique des Falcões e Papagaios ?',
      'Which prolific São Tomé and Príncipe striker, who played club football in Portugal, Argentina (Newell’s Old Boys), and Mexico, is the nation’s all-time top goalscorer?',
      '¿Qué delantero de Santo Tomé y Príncipe, con paso por Portugal, Newell’s Old Boys y México, es el máximo goleador histórico de su selección?',
      'Qual atacante de São Tomé e Príncipe, com passagens por Portugal, Newell’s Old Boys e México, é o maior artilheiro da seleção?',
      'أي مهاجم دولي لمنتخب ساو تومي وبرينسيبي لعب في البرتغال والأرجنتين (نيويلز أولد بويز) والمكسيك ويتصدر هدافي المنتخب؟'
    ),
    countryModePrompt: L(
      'Quel attaquant des Falcões e Papagaios, célèbre pour ses buts dans le championnat argentin sous le maillot de Newell’s Old Boys, est le meilleur buteur de l’histoire de la sélection ?',
      'Which Falcões e Papagaios forward, famed for his club spells at Newell’s Old Boys in Argentina and in Liga MX, holds the all-time national goalscoring record?',
      '¿Qué delantero de los Falcões e Papagaios, recordado por su paso por Newell’s Old Boys de Argentina, es el máximo artilheiro de la selección?',
      'Qual atacante dos Falcões e Papagaios, lembrado por atuar no Newell’s Old Boys da Argentina, é o maior artilheiro da seleção?',
      'أي مهاجم لمنتخب الصقور والببغاوات اشتهر باللعب في نيويلز أولد بويز الأرجنتيني ويحمل لقب الهداف التاريخي للمنتخب؟'
    ),
    correct: L('Luís Leal', 'Luís Leal', 'Luís Leal', 'Luís Leal', 'لويس ليال'),
    distractors: [
      L('Jônatas Obina', 'Jônatas Obina', 'Jônatas Obina', 'Jônatas Obina', 'جوناطاس أوبينا'),
      L('Zé Turbo', 'Zé Turbo', 'Zé Turbo', 'Zé Turbo', 'زي توربو'),
      L('Harramiz Soares', 'Harramiz Soares', 'Harramiz Soares', 'Harramiz Soares', 'هاراميز سواريس'),
    ],
    explanation: L(
      'Surnommé « La Pantera », Luís Leal a inscrit des buts mémorables sous les couleurs des Falcões e Papagaios tout en menant une longue carrière professionnelle sur trois continents.',
      'Nicknamed "La Pantera", Luís Leal became his national team’s all-time top scorer alongside a prolific club career across Europe, South America, and Asia.',
      'Apodado "La Pantera", Luís Leal es el máximo goleador histórico nacional tras una notable trayectoria en tres continentes.',
      'Apelidado de "La Pantera", Luís Leal é o maior goleador da história da seleção após carreira por três continentes.',
      'أحرز المهاجم لويس ليال الملقب بالنمر صدارة هدافي المنتخب بعد مسيرة احترافية امتدت عبر ثلاث قارات.'
    ),
  }),
  mkQ({
    id: 'cur_ST_sp2',
    countryCode: 'ST',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'estadio_nacional_12_de_julho',
    source: 'FSF — Stade national de São Tomé',
    prompt: L(
      'Quelle date historique figure dans le nom du stade national de São Tomé où évoluent les Falcões e Papagaios ?',
      'Which historic national date appears in the name of São Tomé’s national stadium where the Falcões e Papagaios play?',
      '¿Qué fecha histórica figura en el nombre del estadio nacional de Santo Tomé donde juegan los Falcões e Papagaios?',
      'Qual data histórica consta no nome do estádio nacional de São Tomé onde atuam os Falcões e Papagaios?',
      'أي تاريخ وطني يحمله اسم الملعب الوطني في ساو تومي الذي يستضيف مباريات المنتخب؟'
    ),
    countryModePrompt: L(
      'Comment s’appelle le stade national de la capitale, nommé en souvenir de la date d’indépendance du 12 juillet 1975 ?',
      'What is the name of the capital’s national stadium, commemorating the July 12, 1975 independence date?',
      '¿Cómo se llama el estadio nacional de la capital que conmemora la fecha de independencia del 12 de julio de 1975?',
      'Como se chama o estádio nacional da capital que homenageia a data da independência em 12 de julho de 1975?',
      'ما اسم الملعب الوطني في العاصمة المسمى تخليداً ليوم الاستقلال في 12 يوليو 1975؟'
    ),
    correct: L('Estádio Nacional 12 de Julho', 'Estádio Nacional 12 de Julho', 'Estadio Nacional 12 de Julio', 'Estádio Nacional 12 de Julho', 'الملعب الوطني 12 يوليو'),
    distractors: [
      L('Estádio 25 de Abril', 'Estádio 25 de Abril', 'Estadio 25 de Abril', 'Estádio 25 de Abril', 'ملعب 25 أبريل'),
      L('Estádio do Príncipe', 'Estádio do Príncipe', 'Estadio de Príncipe', 'Estádio do Príncipe', 'ملعب برينسيبي'),
      L('Estádio Pico Cão Grande', 'Estádio Pico Cão Grande', 'Estadio Pico Cão Grande', 'Estádio Pico Cão Grande', 'ملعب بيكو كاو غراندي'),
    ],
    explanation: L(
      'Situé en bord de mer à São Tomé, l’Estádio Nacional 12 de Julho accueille la sélection nationale ainsi que les grands clubs insulaires comme Sporting Praia Cruz.',
      'Sitting along the waterfront in São Tomé city, Estádio Nacional 12 de Julho hosts both national matches and local league derbies.',
      'Situado frente al mar en la capital, el Estádio Nacional 12 de Julho acoge los partidos internacionales y de liga.',
      'Localizado à beira-mar na capital, o Estádio Nacional 12 de Julho sedia jogos da seleção e do campeonato nacional.',
      'يطل الملعب الوطني 12 يوليو على البحر في العاصمة ويستضيف مباريات المنتخب وبطولات الأندية المحلية.'
    ),
  }),

  // SC — Seychelles
  mkQ({
    id: 'cur_SC_sp1',
    countryCode: 'SC',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'stade_linite_victoria_seychelles',
    source: 'SFF — Infrastructures de Victoria',
    prompt: L(
      'Que signifie en créole seychellois le nom du stade national situé près de Victoria, le « Stade Linité » ?',
      'What does the Seychellois Creole name "Stade Linité" of the national stadium near Victoria mean?',
      '¿Qué significa en criollo seychellense "Stade Linité", el nombre del estadio nacional junto a Victoria?',
      'O que significa em crioulo seichelense "Stade Linité", o nome do estádio nacional próximo a Victoria?',
      'ماذا تعني كلمة "لينيتيه" باللغة الكريولية في اسم الملعب الوطني "ستاد لينيتيه" قرب فيكتوريا؟'
    ),
    countryModePrompt: L(
      'Que signifie en créole local le nom du stade national de Roche Caïman près de Victoria, appelé « Stade Linité » ?',
      'What does the Creole name "Stade Linité" of the 10,000-seat national stadium near Victoria mean?',
      '¿Qué significa en lengua criolla el nombre del estadio nacional situado en Roche Caïman, "Stade Linité"?',
      'O que significa na língua crioula o nome do estádio nacional em Roche Caïman, "Stade Linité"?',
      'ماذا تعني كلمة "لينيتيه" بالكريولية المحلية في اسم الملعب الوطني بروك كايمان قرب فيكتوريا؟'
    ),
    correct: L('L’Unité', 'Unity', 'La Unidad', 'A Unidade', 'الوحدة'),
    distractors: [
      L('L’Étoile', 'The Star', 'La Estrella', 'A Estrela', 'النجمة'),
      L('L’Océan', 'The Ocean', 'El Océano', 'O Oceano', 'المحيط'),
      L('La Tortue', 'The Tortoise', 'La Tortuga', 'A Tartaruga', 'السلحفاة'),
    ],
    explanation: L(
      'Inauguré en 1992 sur des terres gagnées sur la mer à Roche Caïman (Mahé), le Stade Linité (« Stade de l’Unité ») accueille les Pirates.',
      'Opened in 1992 on reclaimed land at Roche Caïman on Mahé, Stade Linité ("Unity Stadium") is the home ground of the Pirates.',
      'Inaugurado en 1992 en Roche Caïman, el Stade Linité ("Estadio de la Unidad") es la casa de los Piratas.',
      'Inaugurado em 1992 em Roche Caïman, o Stade Linité ("Estádio da Unidade") é a casa da seleção.',
      'افتُتح ملعب لينيتيه أي "الوحدة" عام 1992 على جزيرة ماهي ويحتضن مباريات منتخب القراصنة.'
    ),
  }),
  mkQ({
    id: 'cur_SC_sp2',
    countryCode: 'SC',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'jeux_iles_ocean_indien_2011_or',
    source: 'JIOI 2011 — Tournoi masculin de football',
    prompt: L(
      'En quelle année les Pirates des Seychelles ont-ils remporté devant leur public la toute première médaille d’or de leur histoire en football aux Jeux des îles de l’océan Indien ?',
      'In what year did the Seychelles Pirates win their historic first-ever Indian Ocean Island Games football gold medal on home soil?',
      '¿En qué año ganaron los Piratas de Seychelles en casa su primera medalla de oro futbolística en los Juegos de las Islas del Océano Índico?',
      'Em que ano os Piratas das Seychelles conquistaram em casa sua primeira medalha de ouro no futebol dos Jogos das Ilhas do Oceano Índico?',
      'في أي عام فاز منتخب سيشل (القراصنة) على أرضه بأول ميدالية ذهبية في كرة القدم بدورة ألعاب جزر المحيط الهندي؟'
    ),
    countryModePrompt: L(
      'En quelle année le pays a-t-il accueilli les Jeux des îles de l’océan Indien et vu les Pirates décrocher une médaille d’or historique aux tirs au but face à Maurice ?',
      'In what year did the nation host the Indian Ocean Island Games and capture a historic football gold medal on penalties against Mauritius?',
      '¿En qué año organizó el país los Juegos de las Islas y conquistó el oro futbolístico por penaltis ante Mauricio?',
      'Em que ano o país sediou os Jogos das Ilhas e venceu Maurício nos pênaltis pelo ouro inédito no futebol?',
      'في أي عام استضافت البلاد ألعاب جزر المحيط الهندي وتوج المنتخب بذهبية كرة القدم بركلات الترجيح أمام موريشيوس؟'
    ),
    correct: L('2011', '2011', '2011', '2011', '2011'),
    distractors: [
      L('1993', '1993', '1993', '1993', '1993'),
      L('2003', '2003', '2003', '2003', '2003'),
      L('2019', '2019', '2019', '2019', '2019'),
    ],
    explanation: L(
      'Portés par un Stade Linité en fusion en août 2011, les Pirates battirent l’île Maurice aux tirs au but (4-3 après 1-1) pour décrocher un sacre inoubliable.',
      'Roared on by a packed Stade Linité in August 2011, the Pirates edged Mauritius in a shootout to win their maiden regional gold.',
      'Empujados por un repleto Stade Linité en agosto de 2011, los Piratas superaron a Mauricio en los penaltis.',
      'Empurrados por um Stade Linité lotado em agosto de 2011, os Piratas bateram Maurício nos pênaltis pelo ouro.',
      'وسط أجواء جماهيرية حماسية في ملعب لينيتيه عام 2011، حصد القراصنة الذهب التاريخي على حساب موريشيوس.'
    ),
  }),

  // SL — Sierra Leone
  mkQ({
    id: 'cur_SL_sp1',
    countryCode: 'SL',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'mohamed_kallon_inter_monaco',
    source: 'SLFA & Serie A / Ligue 1',
    prompt: L(
      'Quel célèbre attaquant des Leone Stars de Sierra Leone, ayant porté les maillots de l’Inter Milan et de l’AS Monaco, a également fondé le club FC Kallon à Freetown ?',
      'Which famous Sierra Leone Leone Stars forward played for Inter Milan and AS Monaco before founding FC Kallon in Freetown?',
      '¿Qué célebre delantero de las Leone Stars de Sierra Leona jugó en el Inter de Milán y el AS Mónaco y fundó el FC Kallon?',
      'Qual célebre atacante de Serra Leoa defendeu Inter de Milão e AS Monaco e fundou o FC Kallon em Freetown?',
      'أي مهاجم شهير لمنتخب سيراليون لعب لإنتر ميلان وموناكو وأسس نادي إف سي كالون في فريتاون؟'
    ),
    countryModePrompt: L(
      'Quel ancien attaquant vedette des Leone Stars, finaliste de la Ligue des champions avec Monaco en 2004 après son passage à l’Inter Milan, a dirigé et formé de nombreux jeunes au FC Kallon ?',
      'Which former Leone Stars forward starred for Inter Milan and reached the 2004 Champions League final with Monaco before running FC Kallon?',
      '¿Qué exdelantero de las Leone Stars brilló en el Inter y alcanzó la final europea con el Mónaco antes de impulsar el FC Kallon?',
      'Qual ex-atacante dos Leone Stars brilhou na Inter e chegou à final da Champions pelo Monaco antes de dirigir o FC Kallon?',
      'أي مهاجم سابق للمنتخب لعب لإنتر ميلان وبلغ نهائي دوري الأبطال مع موناكو 2004 قبل تأسيس نادي كالون؟'
    ),
    correct: L('Mohamed Kallon', 'Mohamed Kallon', 'Mohamed Kallon', 'Mohamed Kallon', 'محمد كالون'),
    distractors: [
      L('Kei Kamara', 'Kei Kamara', 'Kei Kamara', 'Kei Kamara', 'كي كامارا'),
      L('Alhassan Bangura', 'Alhassan Bangura', 'Alhassan Bangura', 'Alhassan Bangura', 'الحسن بانغورا'),
      L('Umaru Bangura', 'Umaru Bangura', 'Umaru Bangura', 'Umaru Bangura', 'عمر بانغورا'),
    ],
    explanation: L(
      'Débutant en sélection à 15 ans seulement, Mohamed Kallon s’illustra en Serie A puis remporta la Ligue des champions asiatique avec Al-Ittihad avant de devenir sélectionneur.',
      'Debuting internationally at age 15, Mohamed Kallon starred in Italy and France, won the Asian Champions League with Al-Ittihad, and later coached the national team.',
      'Debutante con 15 años, Mohamed Kallon brilló en Italia y Francia y luego impulsó la cantera nacional con el FC Kallon.',
      'Estreando na seleção aos 15 anos, Mohamed Kallon brilhou na Europa e investiu no futebol de base local.',
      'سطع نجم محمد كالون في أوروبا وآسيا وأسهم لاحقاً في تطوير الكرة المحلية عبر ناديه وتدريب المنتخب.'
    ),
  }),
  mkQ({
    id: 'cur_SL_sp2',
    countryCode: 'SL',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'kei_kamara_mls_leone_stars',
    source: 'SLFA & Major League Soccer',
    prompt: L(
      'Quel attaquant natif de Kenema figure parmi les deux meilleurs buteurs de toute l’histoire de la Major League Soccer (MLS) nord-américaine tout en ayant disputé la CAN 2021 avec la Sierra Leone ?',
      'Which Kenema-born striker ranks among the top two all-time goalscorers in North America’s MLS while starring for Sierra Leone at the 2021 AFCON?',
      '¿Qué delantero nacido en Kenema figura entre los máximos goleadores históricos de la MLS y jugó la CAN 2021 con Sierra Leona?',
      'Qual atacante nascido em Kenema está entre os maiores artilheiros da história da MLS e jogou a CAN 2021 por Serra Leoa?',
      'أي مهاجم ولد في كينيما ويحتل مرتبة متقدمة بين هدافي الدوري الأمريكي (MLS) التاريخيين وشارك في أمم إفريقيا 2021؟'
    ),
    countryModePrompt: L(
      'Quel avant-centre né à Kenema, l’un des buteurs les plus prolifiques de l’histoire de la MLS aux États-Unis, transforma le penalty décisif qualifiant les Leone Stars à la CAN 2021 ?',
      'Which Kenema-born MLS legend converted the decisive penalty kick that sent the Leone Stars back to the 2021 AFCON after 25 years?',
      '¿Qué leyenda de la MLS nacida en Kenema anotó el penalti decisivo rumbo a la CAN 2021 tras 25 años de espera?',
      'Qual lenda da MLS nascida em Kenema converteu o pênalti decisivo que levou a seleção de volta à CAN em 2021?',
      'أي مهاجم من مواليد كينيما وأحد أبرز هدافي الدوري الأمريكي سجل ركلة الجزاء الحاسمة للتأهل إلى أمم إفريقيا 2021؟'
    ),
    correct: L('Kei Kamara', 'Kei Kamara', 'Kei Kamara', 'Kei Kamara', 'كي كامارا'),
    distractors: [
      L('Steven Caulker', 'Steven Caulker', 'Steven Caulker', 'Steven Caulker', 'ستيفن كولكر'),
      L('Mustapha Dumbuya', 'Mustapha Dumbuya', 'Mustapha Dumbuya', 'Mustapha Dumbuya', 'مصطفى دومبويا'),
      L('Mohamed Buya Turay', 'Mohamed Buya Turay', 'Mohamed Buya Turay', 'Mohamed Buya Turay', 'محمد بويا توراي'),
    ],
    explanation: L(
      'Auteur de plus de 145 buts en MLS et héros de la qualification contre le Bénin en 2021, Kei Kamara incarne la persévérance des Leone Stars.',
      'With over 145 MLS goals across more than a decade, Kei Kamara fired the Leone Stars back to AFCON in 2021 for the first time since 1996.',
      'Con más de 145 goles en la MLS, Kei Kamara devolvió a la selección a la Copa Africana por primera vez desde 1996.',
      'Com mais de 145 gols na MLS, Kei Kamara liderou o retorno da seleção à CAN pela primeira vez desde 1996.',
      'عاد كي كامارا بالمنتخب إلى نهائيات أمم إفريقيا بعد غياب ربع قرن إثر مسيرة تهديفية أسطورية في الدوري الأمريكي.'
    ),
  }),

  // SO — Somalie
  mkQ({
    id: 'cur_SO_sp1',
    countryCode: 'SO',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'abdi_bile_rome_1987_1500m',
    source: 'World Athletics — Rome 1987',
    prompt: L(
      'Quel athlète somalien originaire de Las Anod est devenu le tout premier champion du monde de l’histoire du pays en remportant le 1 500 mètres à Rome en 1987 ?',
      'Which Las Anod-born Somali runner became his country’s first-ever World Champion by winning the 1500m at Rome 1987?',
      '¿Qué atleta somalí nacido en Las Anod logró el primer título mundial del país en los 1.500 m de Roma 1987?',
      'Qual atleta somali nascido em Las Anod conquistou o primeiro título mundial do país nos 1.500m em Roma 1987?',
      'أي عداء صومالي من لاس عنود تُوج بأول لقب عالمي في تاريخ بلاده بفوزه بسباق 1500 متر في روما 1987؟'
    ),
    countryModePrompt: L(
      'Quel coureur de demi-fond a décroché la médaille d’or historique du 1 500 m aux Championnats du monde d’athlétisme de Rome en 1987 grâce à un sprint final fulgurant ?',
      'Which middle-distance runner captured historic 1500m gold at the 1987 World Athletics Championships in Rome with a blistering final kick?',
      '¿Qué corredor de mediofondo ganó el histórico oro mundial de 1.500 m en Roma 1987 con un remate espectacular?',
      'Qual meio-fundista conquistou o ouro histórico nos 1.500m do Mundial de Roma 1987 com uma arrancada incrível?',
      'أي عداء مسافات متوسطة أحرز ذهبية تاريخية في سباق 1500 متر ببطولة العالم لألعاب القوى في روما 1987؟'
    ),
    correct: L('Abdi Bile', 'Abdi Bile', 'Abdi Bile', 'Abdi Bile', 'عبدي بيلي'),
    distractors: [
      L('Jama Aden', 'Jama Aden', 'Jama Aden', 'Jama Aden', 'جامع أدن'),
      L('Abdi Nageeye', 'Abdi Nageeye', 'Abdi Nageeye', 'Abdi Nageeye', 'عبدي ناغيي'),
      L('Bashir Abdi', 'Bashir Abdi', 'Bashir Abdi', 'Bashir Abdi', 'بشير عبدي'),
    ],
    explanation: L(
      'Vainqueur à Rome en 1987 puis médaillé mondial de bronze en 1993, Abdi Bile est resté une figure vénérée de l’athlétisme africain.',
      'Capturing gold in Rome 1987 and bronze in 1993, Abdi Bile remains one of the greatest middle-distance champions from the Horn of Africa.',
      'Oro en Roma 1987 y bronce en 1993, Abdi Bile es uno de los mayores referentes atléticos del Cuerno de África.',
      'Ouro em Roma 1987 e bronze em 1993, Abdi Bile é um dos grandes nomes do atletismo do Chifre da África.',
      'يُعد عبدي بيلي بطل عالم 1987 وصاحب برونزية 1993 من أبرز أبطال ألعاب القوى في القرن الإفريقي.'
    ),
  }),
  mkQ({
    id: 'cur_SO_sp2',
    countryCode: 'SO',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'horseed_fc_cecafa_1977',
    source: 'SFF & CECAFA — Football de club somalien',
    prompt: L(
      'Quel club somalien légendaire des années 1970 et 1980 détient le record national de titres de champion et fut le premier du pays à atteindre la finale de la Coupe CECAFA des clubs en 1977 ?',
      'Which storied Somali club of the 1970s and 1980s holds the record for national league titles and reached the 1977 CECAFA Club Cup final?',
      '¿Qué legendario club somalí posee el récord de ligas nacionales y alcanzó la final de la Copa CECAFA de clubes en 1977?',
      'Qual lendário clube somali detém o recorde de títulos da liga nacional e alcançou a final da Copa CECAFA em 1977?',
      'أي نادٍ صومالي عريق يحمل الرقم القياسي في بطولات الدوري وبلغ نهائي كأس سيكافا للأندية عام 1977؟'
    ),
    countryModePrompt: L(
      'Quel club historique de la capitale, premier champion national en 1972 et finaliste de la Coupe CECAFA des clubs en 1977, domine le palmarès national ?',
      'Which historic club from the capital, 1977 CECAFA Club Cup finalists, leads the all-time national football league honours list?',
      '¿Qué club histórico de la capital, finalista de la Copa CECAFA de 1977, lidera el palmarés de la liga nacional?',
      'Qual clube histórico da capital, finalista da Copa CECAFA de 1977, lidera os títulos da liga nacional?',
      'أي نادٍ تاريخي من العاصمة بلغ نهائي كأس سيكافا للأندية عام 1977 ويتصدر سجل بطولات الدوري الوطني؟'
    ),
    correct: L('Horseed FC', 'Horseed FC', 'Horseed FC', 'Horseed FC', 'نادي هورسيد'),
    distractors: [
      L('Elman FC', 'Elman FC', 'Elman FC', 'Elman FC', 'نادي إلمان'),
      L('Banaadir SC', 'Banaadir SC', 'Banaadir SC', 'Banaadir SC', 'نادي بنادر'),
      L('Dekedaha FC', 'Dekedaha FC', 'Dekedaha FC', 'Dekedaha FC', 'نادي ديكيداها'),
    ],
    explanation: L(
      'Vainqueur de six titres consécutifs entre 1976 et 1980 et finaliste régional en 1977 contre Luo Union, Horseed FC a marqué l’âge d’or du football de club.',
      'Winning six consecutive league championships between 1976 and 1980, Horseed FC pioneered regional club success in 1977.',
      'Ganador de seis ligas seguidas entre 1976 y 1980, el Horseed FC protagonizó la época dorada del fútbol nacional.',
      'Hexacampeão nacional consecutivo entre 1976 e 1980, o Horseed FC marcou a era de ouro do futebol local.',
      'تُوج نادي هورسيد بستة ألقاب دوري متتالية بين 1976 و1980 ودوّن حضوراً إقليمياً مميزاً عام 1977.'
    ),
  }),

  // SS — Soudan du Sud
  mkQ({
    id: 'cur_SS_sp1',
    countryCode: 'SS',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'luol_deng_bright_stars_paris_2024',
    source: 'FIBA & CIO — Coupe du monde 2023 / Paris 2024',
    prompt: L(
      'Quel ancien ailier All-Star de la NBA, né à Wau, préside la fédération de basket-ball du Soudan du Sud et a mené les Bright Stars jusqu’à leur exploit historique aux JO de Paris 2024 ?',
      'Which Wau-born former NBA All-Star serves as president of South Sudan’s basketball federation and guided the Bright Stars to their debut Paris 2024 Olympics?',
      '¿Qué exjugador All-Star de la NBA nacido en Wau preside la federación de baloncesto de Sudán del Sur rumbo a París 2024?',
      'Qual ex-All-Star da NBA nascido em Wau preside a federação de basquete do Sudão do Sul rumo ao feito em Paris 2024?',
      'أي نجم سابق في دوري NBA من مواليد واو يرأس اتحاد كرة السلة في جنوب السودان وقاد المنتخب لإنجاز أولمبياد باريس 2024؟'
    ),
    countryModePrompt: L(
      'Quel ancien joueur All-Star des Chicago Bulls a pris la tête de la fédération nationale de basket-ball pour qualifier les Bright Stars à la Coupe du monde 2023 puis aux JO de Paris 2024 ?',
      'Which former Chicago Bulls NBA All-Star became basketball federation president and built the Bright Stars’ fairy-tale rise to the 2023 World Cup and Paris 2024 Olympics?',
      '¿Qué exjugador All-Star de los Chicago Bulls asumió la presidencia de la federación de baloncesto llevando al equipo a París 2024?',
      'Qual ex-All-Star do Chicago Bulls assumiu a federação de basquete levando o país à Copa de 2023 e às Olimpíadas de Paris 2024?',
      'أي نجم سابق لفريق شيكاغو بولز تولى رئاسة اتحاد كرة السلة وقاد المنتخب إلى مونديال 2023 وأولمبياد باريس 2024؟'
    ),
    correct: L('Luol Deng', 'Luol Deng', 'Luol Deng', 'Luol Deng', 'لول دينغ'),
    distractors: [
      L('Manute Bol', 'Manute Bol', 'Manute Bol', 'Manute Bol', 'مانوت بول'),
      L('Thon Maker', 'Thon Maker', 'Thon Maker', 'Thon Maker', 'ثون ميكر'),
      L('Wenyen Gabriel', 'Wenyen Gabriel', 'Wenyen Gabriel', 'Wenyen Gabriel', 'وينين غابرييل'),
    ],
    explanation: L(
      'Finançant personnellement la montée en puissance de l’équipe nationale avec l’entraîneur Royal Ivey, Luol Deng a offert au pays sa première victoire olympique en battant Porto Rico à Lille en 2024.',
      'Investing heavily alongside coach Royal Ivey, Luol Deng saw the Bright Stars defeat Puerto Rico at Paris 2024 for a historic Olympic debut.',
      'Impulsado por Luol Deng junto al técnico Royal Ivey, el equipo venció a Puerto Rico en su histórico estreno olímpico en 2024.',
      'Com apoio decisivo de Luol Deng e do técnico Royal Ivey, o time venceu Porto Rico na estreia olímpica em 2024.',
      'قاد لول دينغ نهضة كرة السلة الوطنية محققاً أول فوز أولمبي تاريخي للمنتخب أمام بورتوريكو في ألعاب 2024.'
    ),
  }),
  mkQ({
    id: 'cur_SS_sp2',
    countryCode: 'SS',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'manute_bol_nba_geants',
    source: 'NBA Hall of Fame Archives & Histoire sportive',
    prompt: L(
      'Quel géant de 2,31 m originaire de la région de Turalei, au Soudan du Sud, demeure l’un des deux plus grands joueurs de l’histoire de la NBA et un célèbre humanitaire ?',
      'Which 7-foot-7 (2.31 m) giant from the Turalei area of South Sudan remains one of the tallest players in NBA history and a noted humanitarian?',
      '¿Qué pívot de 2,31 metros originario de Turalei, en Sudán del Sur, figura entre los dos jugadores más altos de la historia de la NBA?',
      'Qual pivô de 2,31 metros originário de Turalei, no Sudão do Sul, permanece entre os dois jogadores mais altos da história da NBA?',
      'أي عملاق بطول 2.31 متر من منطقة تورالي في جنوب السودان يُعد من أطول اللاعبين في تاريخ دوري NBA ومن رواد العمل الإنساني؟'
    ),
    countryModePrompt: L(
      'Quel pivot légendaire de 2,31 m né près de Turalei a mené la NBA aux contres dès sa saison rookie en 1986 tout en finançant écoles et hôpitaux au pays ?',
      'Which iconic 2.31 m shot-blocking centre born near Turalei led the NBA in blocks as a 1986 rookie while funding schools and hospitals back home?',
      '¿Qué legendario pívot taponador de 2,31 metros nacido cerca de Turalei lideró la NBA en tapones en 1986 y financió escuelas?',
      'Qual lendário pivô de 2,31 m nascido perto de Turalei liderou a NBA em tocos em 1986 enquanto financiava escolas no país?',
      'أي لاعب ارتكاز أسطوري بطول 2.31 متر ولد قرب تورالي وتصدر تصديات NBA عام 1986 وأنشأ مدارس ومستشفيات في وطنه؟'
    ),
    correct: L('Manute Bol', 'Manute Bol', 'Manute Bol', 'Manute Bol', 'مانوت بول'),
    distractors: [
      L('Gheorghe Mureșan', 'Gheorghe Mureșan', 'Gheorghe Mureșan', 'Gheorghe Mureșan', 'جورجي موريشان'),
      L('Bol Bol', 'Bol Bol', 'Bol Bol', 'Bol Bol', 'بول بول'),
      L('Guor Marial', 'Guor Marial', 'Guor Marial', 'Guor Marial', 'غور ماريال'),
    ],
    explanation: L(
      'Avec près de cinq contres par match lors de sa première saison NBA, Manute Bol consacra une grande partie de sa fortune à construire des écoles et des cliniques pour son peuple.',
      'Averaging five blocks per game in his rookie NBA season, Manute Bol dedicated most of his earnings to schools, clinics, and peace efforts.',
      'Con cinco tapones de media en su primer año en la NBA, Manute Bol dedicó sus ingresos a escuelas y clínicas.',
      'Com média de cinco tocos por jogo como calouro na NBA, Manute Bol dedicou sua fortuna a escolas e clínicas.',
      'برع مانوت بول في التصدي للرميات بدوري NBA وكرّس ثروته لبناء المدارس والمستوصفات وخدمة مجتمعه.'
    ),
  }),
];

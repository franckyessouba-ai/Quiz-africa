import { QTuple, writePartFile } from './diasporaWriter';

const items: QTuple[] = [
  {
    id: 'diasp_001',
    diff: 1,
    q: ['Dans quelle ville Martin Luther King a-t-il fait son discours I Have a Dream ?', 'In which city did Martin Luther King give his I Have a Dream speech?', '¿En qué ciudad dio Martin Luther King su discurso I Have a Dream?', 'Em qual cidade Martin Luther King fez seu discurso I Have a Dream?', 'في أي مدينة ألقى مارتن لوثر كينغ خطابه "لدي حلم"؟'],
    c: ['Washington', 'Washington', 'Washington', 'Washington', 'واشنطن'],
    d: [
      ['New York', 'New York', 'Nueva York', 'Nova York', 'نيويورك'],
      ['Chicago', 'Chicago', 'Chicago', 'Chicago', 'شيكاغو'],
      ['Atlanta', 'Atlanta', 'Atlanta', 'Atlanta', 'أتلانتا']
    ],
    exp: ['Il a parlé devant 250 000 personnes devant le monument de Lincoln en 1963.', 'He spoke before 250,000 people at the Lincoln Memorial in 1963.', 'Habló ante 250.000 personas frente al Monumento a Lincoln en 1963.', 'Ele falou para 250.000 pessoas no Lincoln Memorial em 1963.', 'تحدث أمام 250 ألف شخص أمام نصب لينكولن التذكاري عام 1963.']
  },
  {
    id: 'diasp_002',
    diff: 1,
    q: ['Dans quel transport Rosa Parks a-t-elle refusé de céder sa place ?', 'In which vehicle did Rosa Parks refuse to give up her seat?', '¿En qué transporte se negó Rosa Parks a ceder su asiento?', 'Em qual transporte Rosa Parks se recusou a ceder seu lugar?', 'في أي وسيلة نقل رفضت روزا باركس التنازل عن مقعدها؟'],
    c: ['Un bus', 'A bus', 'Un autobús', 'Um ônibus', 'حافلة'],
    d: [
      ['Un train', 'A train', 'Un tren', 'Um trem', 'قطار'],
      ['Un tramway', 'A tram', 'Un tranvía', 'Um bonde', 'ترام'],
      ['Un avion', 'An airplane', 'Un avión', 'Um avião', 'طائرة']
    ],
    exp: ['Son refus courageux en 1955 a déclenché le grand boycott des bus de Montgomery.', 'Her brave refusal in 1955 sparked the Montgomery bus boycott.', 'Su negativa en 1955 inició el gran boicot de autobuses de Montgomery.', 'Sua recusa em 1955 iniciou o grande boicote aos ônibus de Montgomery.', 'رفضها الشجاع عام 1955 أشعل مقاطعة حافلات مونتغومري الشهيرة.']
  },
  {
    id: 'diasp_003',
    diff: 1,
    q: ['Quel travail faisait Rosa Parks quand elle a été arrêtée dans le bus ?', 'What was Rosa Parks’s job when she was arrested on the bus?', '¿Qué trabajo hacía Rosa Parks cuando fue arrestada en el autobús?', 'Qual era o trabalho de Rosa Parks quando ela foi presa no ônibus?', 'ماذا كانت تعمل روزا باركس عندما تم اعتقالها في الحافلة؟'],
    c: ['Couturière', 'Seamstress', 'Costurera', 'Costureira', 'خياطة'],
    d: [
      ['Infirmière', 'Nurse', 'Enfermera', 'Enfermeira', 'ممرضة'],
      ['Cuisinière', 'Cook', 'Cocinera', 'Cozinheira', 'طباخة'],
      ['Secrétaire', 'Secretary', 'Secretaria', 'Secretária', 'سكرتيرة']
    ],
    exp: ['Elle rentrait chez elle après une longue journée de couture à Montgomery.', 'She was heading home after a long workday sewing in Montgomery.', 'Regresaba a casa tras una larga jornada de costura en Montgomery.', 'Ela voltava para casa após um longo dia de costura em Montgomery.', 'كانت في طريق عودتها للمنزل بعد يوم عمل طويل في الخياطة بمونتغومري.']
  },
  {
    id: 'diasp_004',
    diff: 1,
    q: ['Quel prix pour la paix Martin Luther King a-t-il reçu en 1964 ?', 'Which peace prize did Martin Luther King receive in 1964?', '¿Qué premio de la paz recibió Martin Luther King en 1964?', 'Qual prêmio da paz Martin Luther King recebeu em 1964?', 'أي جائزة سلام نالها مارتن لوثر كينغ عام 1964؟'],
    c: ['Le prix Nobel de la paix', 'The Nobel Peace Prize', 'El Premio Nobel de la Paz', 'O Prêmio Nobel da Paz', 'جائزة نوبل للسلام'],
    d: [
      ['Le prix Pulitzer', 'The Pulitzer Prize', 'El Premio Pulitzer', 'O Prêmio Pulitzer', 'جائزة بوليتزر'],
      ['La médaille olympique', 'The Olympic Medal', 'La Medalla Olímpica', 'A Medalha Olímpica', 'الميدالية الأولمبية'],
      ['La Légion d’honneur', 'The Legion of Honour', 'La Legión de Honor', 'A Legião de Honra', 'وسام جوقة الشرف']
    ],
    exp: ['À 35 ans, il était l’un des plus jeunes lauréats du prix Nobel.', 'At 35, he was one of the youngest Nobel Peace Prize winners in history.', 'A los 35 años, fue uno de los ganadores más jóvenes del Nobel.', 'Aos 35 anos, foi um dos mais jovens vencedores do Prêmio Nobel.', 'في سن 35، كان من أصغر الفائزين بجائزة نوبل للسلام في التاريخ.']
  },
  {
    id: 'diasp_005',
    diff: 1,
    q: ['Comment s’appelait le réseau secret d’évasion dirigé par Harriet Tubman ?', 'What was the secret escape network led by Harriet Tubman called?', '¿Cómo se llamaba la red secreta de escape liderada por Harriet Tubman?', 'Como se chamava a rede secreta de fuga liderada por Harriet Tubman?', 'ماذا كانت تسمى شبكة الهروب السرية التي قادتها هارييت توبمان؟'],
    c: ['Le Chemin de fer clandestin', 'The Underground Railroad', 'El Ferrocarril Clandestino', 'A Ferrovia Subterrânea', 'السكة الحديدية السرية'],
    d: [
      ['Le Tunnel magique', 'The Magic Tunnel', 'El Túnel Mágico', 'O Túnel Mágico', 'النفق السحري'],
      ['La Route de la forêt', 'The Forest Road', 'El Camino del Bosque', 'A Estrada da Floresta', 'طريق الغابة'],
      ['Le Train des étoiles', 'The Star Train', 'El Tren de las Estrellas', 'O Trem das Estrelas', 'قطار النجوم']
    ],
    exp: ['Ce réseau secret a sauvé des centaines d’esclaves vers les États libres du Nord.', 'This secret network guided hundreds of enslaved people to northern free states.', 'Esta red secreta salvó a cientos de esclavos hacia los estados libres.', 'Esta rede secreta guiou centenas de escravizados para estados livres.', 'أنقذت هذه الشبكة السرية مئات العبيد نحو الولايات الحرة في الشمال.']
  },
  {
    id: 'diasp_006',
    diff: 2,
    q: ['Quel surnom biblique donnait-on à Harriet Tubman ?', 'What biblical nickname was given to Harriet Tubman?', '¿Qué apodo bíblico le dieron a Harriet Tubman?', 'Qual apelido bíblico deram a Harriet Tubman?', 'ما هو اللقب الديني الذي أُطلق على هارييت توبمان؟'],
    c: ['Moïse', 'Moses', 'Moisés', 'Moisés', 'موسى'],
    d: [
      ['Noé', 'Noah', 'Noé', 'Noé', 'نوح'],
      ['David', 'David', 'David', 'Davi', 'داوود'],
      ['Salomon', 'Solomon', 'Salomón', 'Salomão', 'سليمان']
    ],
    exp: ['On l’appelait la Moïse de son peuple car elle guidait les siens vers la liberté.', 'She was called the Moses of her people for leading them to freedom.', 'La llamaban la Moisés de su pueblo por guiar a su gente a la libertad.', 'Ela era chamada de Moisés do seu povo por guiar os seus à liberdade.', 'لُقبت بموسى قومها لأنها قادت المستضعفين نحو أرض الحرية.']
  },
  {
    id: 'diasp_007',
    diff: 1,
    q: ['Quelle lettre le militant Malcolm Little a-t-il prise comme nom de famille ?', 'Which letter did activist Malcolm Little adopt as his surname?', '¿Qué letra adoptó el activista Malcolm Little como apellido?', 'Qual letra o ativista Malcolm Little adotou como sobrenome?', 'أي حرف اتخذه الناشط مالكوم ليتل كلقب لعائلته؟'],
    c: ['X', 'X', 'X', 'X', 'X'],
    d: [
      ['Z', 'Z', 'Z', 'Z', 'Z'],
      ['K', 'K', 'K', 'K', 'K'],
      ['M', 'M', 'M', 'M', 'M']
    ],
    exp: ['Le X remplaçait le nom africain de ses ancêtres qu’il ne connaîtrait jamais.', 'The X represented the lost African family name he could never know.', 'La X representaba el apellido africano perdido de sus antepasados.', 'O X representava o sobrenome africano perdido de seus ancestrais.', 'كان الحرف X يرمز إلى اسم عائلته الأفريقي المفقود الذي سُلب منه.']
  },
  {
    id: 'diasp_008',
    diff: 2,
    q: ['Dans quelle ville sainte Malcolm X a-t-il fait son pèlerinage en 1964 ?', 'In which holy city did Malcolm X perform his pilgrimage in 1964?', '¿En qué ciudad santa hizo su peregrinación Malcolm X en 1964?', 'Em qual cidade sagrada Malcolm X fez sua peregrinação em 1964?', 'في أي مدينة مقدسة أدى مالكوم إكس فريضة الحج عام 1964؟'],
    c: ['La Mecque', 'Mecca', 'La Meca', 'Meca', 'مكة المكرمة'],
    d: [
      ['Jérusalem', 'Jerusalem', 'Jerusalén', 'Jerusalém', 'القدس'],
      ['Le Caire', 'Cairo', 'El Cairo', 'Cairo', 'القاهرة'],
      ['Médine', 'Medina', 'Medina', 'Medina', 'المدينة المنورة']
    ],
    exp: ['Ce voyage lui a montré des croyants de toutes les couleurs réunis dans la paix.', 'The trip showed him believers of all skin colors united in peace.', 'Este viaje le mostró creyentes de todos los colores unidos en paz.', 'A viagem mostrou a ele crentes de todas as cores unidos em paz.', 'أظهرت له رحلة الحج وحدة المسلمين من كافة الأعراق والألوان في سلام.']
  },
  {
    id: 'diasp_009',
    diff: 1,
    q: ['Quel journal antiesclavagiste a été créé par Frederick Douglass ?', 'Which antislavery newspaper was founded by Frederick Douglass?', '¿Qué periódico antiesclavista fundó Frederick Douglass?', 'Qual jornal antiescravagista foi fundado por Frederick Douglass?', 'ما هي الصحيفة المناهضة للعبودية التي أسسها فريدريك دوغلاس؟'],
    c: ['The North Star', 'The North Star', 'The North Star', 'The North Star', 'نجم الشمال (The North Star)'],
    d: [
      ['The New York Times', 'The New York Times', 'The New York Times', 'The New York Times', 'نيويورك تايمز'],
      ['The Washington Post', 'The Washington Post', 'The Washington Post', 'The Washington Post', 'واشنطن بوست'],
      ['The Freedom Sun', 'The Freedom Sun', 'The Freedom Sun', 'The Freedom Sun', 'شمس الحرية']
    ],
    exp: ['Le journal portait le nom de l’Étoile du Nord qui guidait les évadés la nuit.', 'It was named after the North Star that guided escaping slaves at night.', 'Se llamó así por la Estrella Polar que guiaba a los fugitivos de noche.', 'Tinha o nome da Estrela do Norte que guiava os fugitivos à noite.', 'سميت الصحيفة باسم نجم الشمال الذي كان يهتدي به الهاربون ليلاً.']
  },
  {
    id: 'diasp_010',
    diff: 1,
    q: ['Quel âge avait la petite Ruby Bridges quand elle est allée dans une école de Blancs en 1960 ?', 'How old was little Ruby Bridges when she integrated a white school in 1960?', '¿Qué edad tenía Ruby Bridges al ingresar a una escuela de blancos en 1960?', 'Quantos anos tinha a pequena Ruby Bridges ao entrar em uma escola de brancos em 1960?', 'كم كان عمر الطفلة روبي بريدجز حين دخلت مدرسة للبيض عام 1960؟'],
    c: ['6 ans', '6 years old', '6 años', '6 anos', '6 سنوات'],
    d: [
      ['10 ans', '10 years old', '10 años', '10 anos', '10 سنوات'],
      ['14 ans', '14 years old', '14 años', '14 anos', '14 سنة'],
      ['18 ans', '18 years old', '18 años', '18 anos', '18 سنة']
    ],
    exp: ['Quatre policiers fédéraux devaient la protéger chaque jour à La Nouvelle-Orléans.', 'Four federal marshals had to escort her every day in New Orleans.', 'Cuatro agentes federales debían escoltarla cada día en Nueva Orleans.', 'Quatro policiais federais tinham que protegê-la todos os dias.', 'كان يرافقها 4 ضباط فيدراليين يومياً لحمايتها في نيو أورلينز.']
  },
  {
    id: 'diasp_011',
    diff: 2,
    q: ['Combien d’élèves formaient le groupe des Little Rock Nine en 1957 ?', 'How many students were in the Little Rock Nine group in 1957?', '¿Cuántos estudiantes formaban los Nueve de Little Rock en 1957?', 'Quantos estudantes formavam o grupo dos Nove de Little Rock em 1957?', 'كم عدد الطلاب الذين شكلوا مجموعة "تسعة ليتل روك" عام 1957؟'],
    c: ['9 élèves', '9 students', '9 estudiantes', '9 estudantes', '9 طلاب'],
    d: [
      ['5 élèves', '5 students', '5 estudiantes', '5 estudantes', '5 طلاب'],
      ['12 élèves', '12 students', '12 estudiantes', '12 estudantes', '12 طالباً'],
      ['20 élèves', '20 students', '20 estudiantes', '20 estudantes', '20 طالباً']
    ],
    exp: ['L’armée a dû les escorter pour les protéger des manifestants racistes en Arkansas.', 'Soldiers escorted them to protect them from racist crowds in Arkansas.', 'El ejército tuvo que escoltarlos para protegerlos de manifestantes.', 'O exército teve que escoltá-los para protegê-los de manifestantes.', 'تدخل الجيش الأمريكي لحمايتهم وإدخالهم فصول الدراسة في أركنساس.']
  },
  {
    id: 'diasp_012',
    diff: 2,
    q: ['Sur quel pont de Selma les marcheurs pour le vote ont-ils été attaqués en 1965 ?', 'On which Selma bridge were voting marchers attacked on Bloody Sunday in 1965?', '¿En qué puente de Selma fueron atacados los manifestantes en 1965?', 'Em qual ponte de Selma os manifestantes foram atacados em 1965?', 'على أي جسر في سلما تعرض المتظاهرون للهجوم في الأحد الدامي عام 1965؟'],
    c: ['Le pont Edmund Pettus', 'The Edmund Pettus Bridge', 'El puente Edmund Pettus', 'A ponte Edmund Pettus', 'جسر إدموند بيتوس'],
    d: [
      ['Le pont de Brooklyn', 'The Brooklyn Bridge', 'El puente de Brooklyn', 'A ponte do Brooklyn', 'جسر بروكلين'],
      ['Le pont de San Francisco', 'The Golden Gate Bridge', 'El puente Golden Gate', 'A ponte Golden Gate', 'جسر البوابة الذهبية'],
      ['Le pont de Memphis', 'The Memphis Bridge', 'El puente de Memphis', 'A ponte de Memphis', 'جسر ممفيس']
    ],
    exp: ['Cette attaque télévisée a choqué le monde et permis de voter la loi sur le droit de vote.', 'The televised attack shocked the nation and helped pass the Voting Rights Act.', 'El ataque televisado conmovió al país y ayudó a aprobar la ley de voto.', 'O ataque chocou o país e ajudou a aprovar a Lei de Direitos de Voto.', 'صدمت مشاهد الهجوم العالم ودفعت الكونغرس لإقرار قانون حقوق التصويت.']
  },
  {
    id: 'diasp_013',
    diff: 1,
    q: ['Quel couvre-chef portaient les membres des Black Panthers ?', 'What headwear did members of the Black Panthers wear?', '¿Qué prenda para la cabeza llevaban los Panteras Negras?', 'Que acessório na cabeça os Panteras Negras usavam?', 'ما هي القبعة التي كان يرتديها أعضاء حزب الفهود السود؟'],
    c: ['Un béret noir', 'A black beret', 'Una boina negra', 'Uma boina preta', 'بيريه أسود'],
    d: [
      ['Une casquette rouge', 'A red cap', 'Una gorra roja', 'Um boné vermelho', 'قبعة حمراء'],
      ['Un chapeau de cow-boy', 'A cowboy hat', 'Un sombrero de vaquero', 'Um chapéu de vaqueiro', 'قبعة رعاة البقر'],
      ['Un casque de moto', 'A motorcycle helmet', 'Un casco de moto', 'Um capacete de moto', 'خوذة دراجة']
    ],
    exp: ['Ils portaient un béret noir et des vestes en cuir noir pour montrer leur unité.', 'They wore black berets and leather jackets as a symbol of unity and discipline.', 'Vestían boinas negras y chaquetas de cuero como símbolo de unión.', 'Eles usavam boinas pretas e jaquetas de couro como sinal de união.', 'كانوا يرتدون البيريه والسترات الجلدية السوداء كرمز للوحدة والانضباط.']
  },
  {
    id: 'diasp_014',
    diff: 2,
    q: ['Quel repas gratuit les Black Panthers servaient-ils aux enfants chaque matin ?', 'Which free meal did the Black Panthers serve school children every morning?', '¿Qué comida gratuita servían los Panteras Negras a los niños cada mañana?', 'Qual refeição gratuita os Panteras Negras serviam para crianças toda manhã?', 'ما هي الوجبة المجانية التي كان يقدمها الفهود السود للأطفال كل صباح؟'],
    c: ['Le petit déjeuner', 'Breakfast', 'El desayuno', 'O café da manhã', 'وجبة الإفطار'],
    d: [
      ['Le dîner de fête', 'Holiday dinner', 'La cena de gala', 'O jantar de gala', 'عشاء الحفلات'],
      ['Le goûter de minuit', 'Midnight snack', 'La merienda nocturna', 'O lanche da noite', 'وجبة منتصف الليل'],
      ['Un panier de bonbons', 'A candy basket', 'Una cesta de dulces', 'Uma cesta de doces', 'سلة حلويات']
    ],
    exp: ['Leur programme a nourri plus de 20 000 écoliers avant d’aller en classe.', 'Their Free Breakfast Program fed over 20,000 children daily before school.', 'Su programa alimentó a más de 20.000 escolares cada mañana.', 'O programa alimentou mais de 20.000 crianças antes das aulas.', 'أطعم برنامج الإفطار المجاني أكثر من 20 ألف تلميذ يومياً قبل الدوام المدرسي.']
  },
  {
    id: 'diasp_015',
    diff: 1,
    q: ['Qui a été élu premier président noir des États-Unis en 2008 ?', 'Who was elected the first Black president of the United States in 2008?', '¿Quién fue elegido el primer presidente negro de EE. UU. en 2008?', 'Quem foi eleito o primeiro presidente negro dos Estados Unidos em 2008?', 'من انتُخب أول رئيس أسود للولايات المتحدة الأمريكية عام 2008؟'],
    c: ['Barack Obama', 'Barack Obama', 'Barack Obama', 'Barack Obama', 'باراك أوباما'],
    d: [
      ['Colin Powell', 'Colin Powell', 'Colin Powell', 'Colin Powell', 'كولن باول'],
      ['Jesse Jackson', 'Jesse Jackson', 'Jesse Jackson', 'Jesse Jackson', 'جيسي جاكسون'],
      ['Al Sharpton', 'Al Sharpton', 'Al Sharpton', 'Al Sharpton', 'آل شاربتون']
    ],
    exp: ['Il est devenu le 44e président américain avec le slogan « Yes We Can ».', 'He became the 44th US president powered by the slogan "Yes We Can".', 'Se convirtió en el 44.º presidente con el lema "Yes We Can".', 'Ele se tornou o 44º presidente com o lema "Yes We Can".', 'أصبح الرئيس الأمريكي الـ44 في تاريخ البلاد رافعاً شعار "نعم نستطيع".']
  },
  {
    id: 'diasp_016',
    diff: 1,
    q: ['De quel pays d’Afrique le père de Barack Obama venait-il ?', 'From which African country did Barack Obama’s father come?', '¿De qué país africano era originario el padre de Barack Obama?', 'De qual país africano era o pai de Barack Obama?', 'من أي دولة أفريقية ينحدر والد باراك أوباما؟'],
    c: ['Le Kenya', 'Kenya', 'Kenia', 'Quênia', 'كينيا'],
    d: [
      ['Le Ghana', 'Ghana', 'Ghana', 'Gana', 'غانا'],
      ['Le Nigeria', 'Nigeria', 'Nigeria', 'Nigéria', 'نيجيريا'],
      ['Le Sénégal', 'Senegal', 'Senegal', 'Senegal', 'السنغال']
    ],
    exp: ['Son père est né dans le village de Nyang’oma Kogelo au Kenya.', 'His father was born in the village of Nyang’oma Kogelo in Kenya.', 'Su padre nació en el pueblo de Nyang’oma Kogelo en Kenia.', 'Seu pai nasceu na aldeia de Nyang’oma Kogelo no Quênia.', 'وُلد والده في قرية كوجيلو بالقرب من بحيرة فيكتوريا في كينيا.']
  },
  {
    id: 'diasp_017',
    diff: 1,
    q: ['Comment s’appelle l’épouse de Barack Obama, ancienne Première dame des États-Unis ?', 'What is the name of Barack Obama’s wife, former US First Lady?', '¿Cómo se llama la esposa de Barack Obama y ex primera dama?', 'Como se chama a esposa de Barack Obama e ex-primeira-dama?', 'ما اسم زوجة باراك أوباما والسيدة الأولى السابقة للولايات المتحدة؟'],
    c: ['Michelle Obama', 'Michelle Obama', 'Michelle Obama', 'Michelle Obama', 'ميشيل أوباما'],
    d: [
      ['Oprah Winfrey', 'Oprah Winfrey', 'Oprah Winfrey', 'Oprah Winfrey', 'أوبرا وينفري'],
      ['Condoleezza Rice', 'Condoleezza Rice', 'Condoleezza Rice', 'Condoleezza Rice', 'كوندوليزا رايس'],
      ['Kamala Harris', 'Kamala Harris', 'Kamala Harris', 'Kamala Harris', 'كامالا هاريس']
    ],
    exp: ['Elle a écrit le livre à succès « Devenir » racontant sa jeunesse à Chicago.', 'She wrote the bestselling memoir "Becoming" about her life and journey.', 'Escribió el exitoso libro "Mi historia" sobre su vida y trayectoria.', 'Ela escreveu o livro de memórias "Minha História" sobre sua trajetória.', 'ألفت كتاب سيرتها الذاتية الشهير "Becoming" الذي حقق مبيعات قياسية.']
  },
  {
    id: 'diasp_018',
    diff: 2,
    q: ['Qui a été la première femme noire vice-présidente des États-Unis en 2021 ?', 'Who became the first Black female Vice President of the US in 2021?', '¿Quién fue la primera mujer negra vicepresidenta de EE. UU. en 2021?', 'Quem se tornou a primeira mulher negra vice-presidente dos EUA em 2021?', 'من هي أول امرأة سوداء تشغل منصب نائب رئيس الولايات المتحدة عام 2021؟'],
    c: ['Kamala Harris', 'Kamala Harris', 'Kamala Harris', 'Kamala Harris', 'كامالا هاريس'],
    d: [
      ['Stacey Abrams', 'Stacey Abrams', 'Stacey Abrams', 'Stacey Abrams', 'ستايسي أبرامز'],
      ['Shirley Chisholm', 'Shirley Chisholm', 'Shirley Chisholm', 'Shirley Chisholm', 'شيرلي تشيشولم'],
      ['Susan Rice', 'Susan Rice', 'Susan Rice', 'Susan Rice', 'سوزان رايس']
    ],
    exp: ['Elle a été élue aux côtés du président Joe Biden.', 'She was elected alongside President Joe Biden in November 2020.', 'Fue elegida junto al presidente Joe Biden en 2020.', 'Ela foi eleita ao lado do presidente Joe Biden em 2020.', 'انتُخبت نائبة للرئيس إلى جانب الرئيس جو بايدن عام 2020.']
  },
  {
    id: 'diasp_019',
    diff: 2,
    q: ['Dans quelle ville Martin Luther King a-t-il été assassiné en 1968 ?', 'In which city was Martin Luther King assassinated in 1968?', '¿En qué ciudad fue asesinado Martin Luther King en 1968?', 'Em qual cidade Martin Luther King foi assassinado em 1968?', 'في أي مدينة اغتيل مارتن لوثر كينغ عام 1968؟'],
    c: ['Memphis', 'Memphis', 'Memphis', 'Memphis', 'ممفيس'],
    d: [
      ['Dallas', 'Dallas', 'Dallas', 'Dallas', 'دالاس'],
      ['Miami', 'Miami', 'Miami', 'Miami', 'ميامي'],
      ['Détroit', 'Detroit', 'Detroit', 'Detroit', 'ديترويت']
    ],
    exp: ['Il était venu soutenir les éboueurs noirs de Memphis en grève.', 'He was there to support striking Black sanitation workers.', 'Estaba allí apoyando a los basureros negros en huelga.', 'Ele estava lá apoiando os garis negros em greve.', 'كان يزور ممفيس لدعم عمال النظافة السود المضربين للمطالبة بحقوقهم.']
  },
  {
    id: 'diasp_020',
    diff: 1,
    q: ['Quel jour de juin célèbre la fin de l’esclavage au Texas sous le nom de Juneteenth ?', 'Which day in June celebrates the end of slavery under the name Juneteenth?', '¿Qué día de junio celebra el fin de la esclavitud como Juneteenth?', 'Qual dia de junho celebra o fim da escravidão com o nome Juneteenth?', 'أي يوم في شهر يونيو يحتفل به بنهاية العبودية في أمريكا باسم جونتينث؟'],
    c: ['Le 19 juin', 'June 19', '19 de junio', '19 de junho', '19 يونيو'],
    d: [
      ['Le 1er juin', 'June 1', '1 de junio', '1 de junho', '1 يونيو'],
      ['Le 4 juillet', 'July 4', '4 de julio', '4 de julho', '4 يوليو'],
      ['Le 25 décembre', 'December 25', '25 de diciembre', '25 de dezembro', '25 ديسمبر']
    ],
    exp: ['C’est le 19 juin 1865 que les derniers esclaves du Texas ont appris leur liberté.', 'On June 19, 1865, enslaved people in Texas finally learned they were free.', 'El 19 de junio de 1865 los esclavos de Texas supieron que eran libres.', 'Em 19 de junho de 1865 os escravizados do Texas souberam de sua liberdade.', 'في 19 يونيو 1865 علم آخر المستعبدين في تكساس رسمياً بحريتهم.']
  }
];

// Add 80 more specific, varied questions for Part 1 (21 to 100)
const topicsPart1 = [
  { id: '021', q: 'Quel État américain a vu naître Martin Luther King ?', c: 'La Géorgie', d: ['La Floride', 'Le Texas', 'La Californie'], exp: 'Il est né à Atlanta en Géorgie en 1929.' },
  { id: '022', q: 'Quelle église Martin Luther King dirigeait-il comme pasteur à Atlanta ?', c: 'L’église baptiste Ebenezer', d: ['L’église Saint-Pierre', 'La cathédrale de New York', 'L’église méthodiste de Chicago'], exp: 'Son père et son grand-père y avaient prêché avant lui.' },
  { id: '023', q: 'Quel célèbre texte Martin Luther King a-t-il écrit sur des bouts de papier en prison ?', c: 'La lettre de la prison de Birmingham', d: ['La déclaration d’indépendance', 'Le manifeste de Chicago', 'Les mémoires d’Atlanta'], exp: 'Il y expliquait pourquoi il fallait agir sans attendre contre les lois injustes.' },
  { id: '024', q: 'Combien de jours a duré le boycott des bus de Montgomery mené par Rosa Parks ?', c: '381 jours', d: ['10 jours', '30 jours', '1000 jours'], exp: 'Pendant plus d’un an, les habitants noirs ont marché à pied pour faire plier la compagnie.' },
  { id: '025', q: 'Quelle ville d’Alabama a été le point de départ de la marche vers Montgomery en 1965 ?', c: 'Selma', d: ['Mobile', 'Birmingham', 'Huntsville'], exp: 'La marche réclamait le droit de vote sans examens truqués.' },
  { id: '026', q: 'Qui a été le premier Noir américain à siéger à la Cour suprême en 1967 ?', c: 'Thurgood Marshall', d: ['Clarence Thomas', 'John Lewis', 'Booker T. Washington'], exp: 'Il avait gagné le grand procès interdisant la ségrégation dans les écoles.' },
  { id: '027', q: 'Quel procès historique Thurgood Marshall a-t-il gagné en 1954 pour ouvrir les écoles à tous ?', c: 'Brown v. Board of Education', d: ['Le procès de Nuremberg', 'Le jugement de Salem', 'L’affaire Dreyfus'], exp: 'La Cour suprême a jugé que séparer les enfants selon leur couleur était illégal.' },
  { id: '028', q: 'Quel politicien noir a été maire de Chicago de 1983 à 1987 ?', c: 'Harold Washington', d: ['David Dinkins', 'Tom Bradley', 'Marion Barry'], exp: 'Il a été le tout premier maire noir élu de la grande ville de Chicago.' },
  { id: '029', q: 'Quel quartier de New York est devenu la capitale de la culture noire dans les années 1920 ?', c: 'Harlem', d: ['Brooklyn', 'Manhattan Sud', 'Queens'], exp: 'La Renaissance de Harlem a fait briller écrivains, peintres et musiciens de jazz.' },
  { id: '030', q: 'Quel célèbre théâtre de Harlem a vu débuter Ella Fitzgerald et Michael Jackson ?', c: 'L’Apollo Theater', d: ['L’Opéra Garnier', 'Le Broadway Hall', 'Le Madison Theater'], exp: 'Sa célèbre scène des amateurs a lancé les plus grandes carrières du monde.' },
  { id: '031', q: 'Quel président américain a signé la loi sur les droits civiques en 1964 ?', c: 'Lyndon B. Johnson', d: ['Richard Nixon', 'Dwight Eisenhower', 'Ronald Reagan'], exp: 'Cette loi interdisait toute discrimination dans les lieux publics et à l’embauche.' },
  { id: '032', q: 'Quel président américain a signé la proclamation d’émancipation des esclaves en 1863 ?', c: 'Abraham Lincoln', d: ['George Washington', 'Thomas Jefferson', 'Andrew Jackson'], exp: 'Elle a libéré les esclaves dans les États du Sud en rébellion.' },
  { id: '033', q: 'Quel amendement de la Constitution américaine a aboli l’esclavage en 1865 ?', c: 'Le 13e amendement', d: ['Le 1er amendement', 'Le 5e amendement', 'Le 20e amendement'], exp: 'Il a interdit pour toujours l’esclavage sur tout le territoire des États-Unis.' },
  { id: '034', q: 'Quel amendement donne le droit de vote aux citoyens sans distinction de couleur ?', c: 'Le 15e amendement', d: ['Le 2e amendement', 'Le 8e amendement', 'Le 12e amendement'], exp: 'Ratifié en 1870, il garantissait le vote aux hommes affranchis.' },
  { id: '035', q: 'Quel quartier d’affaires noir prospère a été détruit lors du massacre de Tulsa en 1921 ?', c: 'Black Wall Street', d: ['Wall Street Sud', 'Le quartier d’or', 'Le marché libre'], exp: 'Ce quartier florissant comptait des banques, des hôtels et des médecins noirs.' },
  { id: '036', q: 'Dans quel État américain se trouve la ville de Tulsa où a eu lieu ce massacre ?', c: 'L’Oklahoma', d: ['Le Nevada', 'Le Colorado', 'L’Utah'], exp: 'Ce drame longtemps caché est aujourd’hui commémoré officiellement.' },
  { id: '037', q: 'Comment appelait-on les pilotes de chasse noirs héroïques de la Seconde Guerre mondiale ?', c: 'Les Tuskegee Airmen', d: ['Les Aigles noirs', 'Les Faucons d’or', 'Les Pilotes du ciel'], exp: 'Ils ont escorté les bombardiers avec un taux de réussite exceptionnel.' },
  { id: '038', q: 'Quelle était la couleur peinte sur la queue des avions des Tuskegee Airmen ?', c: 'Rouge vif (Red Tails)', d: ['Vert forêt', 'Bleu ciel', 'Jaune poussin'], exp: 'Leur surnom « Red Tails » faisait trembler les pilotes ennemis.' },
  { id: '039', q: 'Comment appelait-on les soldats noirs de cavalerie dans l’Ouest américain au 19e siècle ?', c: 'Les Buffalo Soldiers', d: ['Les Cowboys noirs', 'Les Cavaliers d’or', 'Les Rangers du Sud'], exp: 'Ce surnom respectueux leur avait été donné par les tribus amérindiennes.' },
  { id: '040', q: 'Qui a été la première femme noire devenue millionnaire grâce à ses produits capillaires ?', c: 'Madame C.J. Walker', d: ['Oprah Winfrey', 'Mary Kay', 'Helena Rubinstein'], exp: 'Elle a créé une entreprise géante et fait travailler des milliers de femmes.' },
  { id: '041', q: 'Quelle aviatrice noire a obtenu son brevet de pilote en France en 1921 ?', c: 'Bessie Coleman', d: ['Amelia Earhart', 'Jacqueline Auriol', 'Hélène Boucher'], exp: 'Les écoles américaines la refusaient, alors elle a appris le français et est partie à Paris.' },
  { id: '042', q: 'Quel explorateur noir a atteint le pôle Nord avec Robert Peary en 1909 ?', c: 'Matthew Henson', d: ['James Beckwourth', 'York', 'Estevanico'], exp: 'Il parlait inuit et conduisait les traîneaux jusqu’au sommet du monde.' },
  { id: '043', q: 'Qui a été le premier astronaute noir américain dans l’espace en 1983 ?', c: 'Guion Bluford', d: ['Neil Armstrong', 'Buzz Aldrin', 'John Glenn'], exp: 'Il a volé à bord de la navette spatiale Challenger.' },
  { id: '044', q: 'Quelle médecin et astronaute a été la première femme noire dans l’espace en 1992 ?', c: 'Mae Jemison', d: ['Sally Ride', 'Peggy Whitson', 'Valentina Terechkova'], exp: 'Elle a voyagé à bord de la navette spatiale Endeavour.' },
  { id: '045', q: 'Quel médecin noir a mis au point la conservation du plasma sanguin pendant la guerre ?', c: 'Dr Charles Drew', d: ['Dr Benjamin Carson', 'Dr Daniel Williams', 'Dr Louis Wright'], exp: 'Ses travaux ont sauvé des millions de soldats blessés sur le front.' },
  { id: '046', q: 'Quel chirurgien noir a réussi la première opération à cœur ouvert en 1893 ?', c: 'Dr Daniel Hale Williams', d: ['Dr Charles Drew', 'Dr Jonas Salk', 'Dr Alexander Fleming'], exp: 'Il a réparé le cœur d’un homme poignardé à l’hôpital de Chicago.' },
  { id: '047', q: 'Quel inventeur noir a breveté le feu de signalisation tricolore avec position d’arrêt ?', c: 'Garrett Morgan', d: ['Thomas Edison', 'Henry Ford', 'Alexander Bell'], exp: 'Il a aussi inventé un masque respiratoire utilisé par les pompiers.' },
  { id: '048', q: 'Quel scientifique noir a trouvé plus de 300 utilisations pour la cacahuète ?', c: 'George Washington Carver', d: ['Benjamin Banneker', 'Percy Julian', 'Norbert Rillieux'], exp: 'Il a appris aux fermiers à enrichir la terre en alternant les cultures.' },
  { id: '049', q: 'Quel inventeur noir a amélioré le filament de carbone de l’ampoule électrique d’Edison ?', c: 'Lewis Latimer', d: ['Nikola Tesla', 'Guglielmo Marconi', 'Samuel Morse'], exp: 'Son brevet a permis aux ampoules de durer beaucoup plus longtemps.' },
  { id: '050', q: 'Quel inventeur d’un système de graissage de train a inspiré l’expression The Real McCoy ?', c: 'Elijah McCoy', d: ['Granville Woods', 'Jan Matzeliger', 'Andrew Beard'], exp: 'Les mécaniciens demandaient toujours sa pièce originale et pas des copies.' },
  { id: '051', q: 'Quel inventeur noir surnommé le Black Edison a créé le télégraphe entre trains ?', c: 'Granville Woods', d: ['George Washington Carver', 'Elijah McCoy', 'Lewis Latimer'], exp: 'Son invention a évité de nombreuses collisions mortelles sur les voies.' },
  { id: '052', q: 'Quelle ophtalmologiste noire a inventé la sonde laser pour soigner la cataracte ?', c: 'Dr Patricia Bath', d: ['Dr Mae Jemison', 'Dr Shirley Jackson', 'Dr Jane Cooke Wright'], exp: 'Elle a redonné la vue à des patients aveugles depuis des décennies.' },
  { id: '053', q: 'Quel ingénieur de la NASA a inventé le célèbre pistolet à eau Super Soaker ?', c: 'Lonnie Johnson', d: ['Mark Dean', 'Gerald Lawson', 'Roy Clay'], exp: 'Il travaillait sur les sondes spatiales quand il a eu cette idée géniale.' },
  { id: '054', q: 'Quel ingénieur noir a été un des pionniers de la cartouche de jeu vidéo interchangeable ?', c: 'Gerald Jerry Lawson', d: ['Lonnie Johnson', 'Steve Jobs', 'Bill Gates'], exp: 'Il a inventé la console Fairchild Channel F avec jeux sur cartouche.' },
  { id: '055', q: 'Quelle mathématicienne noire a programmé les calculs du système GPS moderne ?', c: 'Gladys West', d: ['Katherine Johnson', 'Dorothy Vaughan', 'Mary Jackson'], exp: 'Ses modèles de la forme de la Terre ont rendu le GPS possible.' },
  { id: '056', q: 'Quelle mathématicienne de la NASA a calculé la trajectoire d’Apollo 11 vers la Lune ?', c: 'Katherine Johnson', d: ['Gladys West', 'Mae Jemison', 'Annie Easley'], exp: 'L’astronaute John Glenn avait exigé qu’elle vérifie les calculs de l’ordinateur.' },
  { id: '057', q: 'Comment s’appelle le film célèbre qui raconte l’histoire de Katherine Johnson à la NASA ?', c: 'Les Figures de l’ombre', d: ['Interstellar', 'Gravity', 'Apollo 13'], exp: 'Ce film a fait connaître au monde entier les calculatrices noires de la NASA.' },
  { id: '058', q: 'Quelle pionnière a été la première femme noire ingénieure à la NASA ?', c: 'Mary Jackson', d: ['Katherine Johnson', 'Dorothy Vaughan', 'Mae Jemison'], exp: 'Elle a dû obtenir une autorisation spéciale pour étudier dans une école de Blancs.' },
  { id: '059', q: 'Quelle cheffe d’équipe noire a appris seule le langage informatique Fortran à la NASA ?', c: 'Dorothy Vaughan', d: ['Mary Jackson', 'Gladys West', 'Annie Easley'], exp: 'Elle a formé ses collègues pour ne pas être remplacées par les machines IBM.' },
  { id: '060', q: 'Quel astronome noir du 18e siècle a aidé à tracer les plans de la ville de Washington ?', c: 'Benjamin Banneker', d: ['Crispus Attucks', 'James Forten', 'Peter Salem'], exp: 'Autodidacte en mathématiques, il avait aussi construit une horloge en bois.' },
  { id: '061', q: 'Quel premier martyr noir a été tué par les soldats anglais au massacre de Boston en 1770 ?', c: 'Crispus Attucks', d: ['Paul Revere', 'Samuel Adams', 'John Hancock'], exp: 'Il est considéré comme le tout premier mort de la Révolution américaine.' },
  { id: '062', q: 'Quel esclave a mené une célèbre rébellion armée en Virginie en 1831 ?', c: 'Nat Turner', d: ['Denmark Vesey', 'Gabriel Prosser', 'John Brown'], exp: 'Sa révolte a terrifié les propriétaires d’esclaves dans tout le Sud.' },
  { id: '063', q: 'Quel prédicateur a tenté une grande révolte d’esclaves à Charleston en 1822 ?', c: 'Denmark Vesey', d: ['Nat Turner', 'Gabriel Prosser', 'David Walker'], exp: 'Il avait acheté sa liberté après avoir gagné à la loterie de la ville.' },
  { id: '064', q: 'Quelle adolescente de 15 ans a refusé sa place de bus 9 mois avant Rosa Parks ?', c: 'Claudette Colvin', d: ['Ruby Bridges', 'Diane Nash', 'Fannie Lou Hamer'], exp: 'Elle a dit que les mains de Harriet Tubman la clouaient sur son siège.' },
  { id: '065', q: 'Comment appelait-on les militants qui prenaient des bus mélangés dans le Sud en 1961 ?', c: 'Les Freedom Riders', d: ['Les Black Panthers', 'Les Scouts de la paix', 'Les Marcheurs du Sud'], exp: 'Leurs bus ont été attaqués et brûlés par des foules violentes en Alabama.' },
  { id: '066', q: 'Quelle action pacifique 4 étudiants noirs ont-ils lancée dans un café de Greensboro en 1960 ?', c: 'Un sit-in au comptoir', d: ['Une grève de la faim', 'Un concert de rue', 'Un blocage de train'], exp: 'Ils sont restés assis au comptoir réservé aux Blancs jusqu’à la fermeture.' },
  { id: '067', q: 'Combien de kilomètres les marcheurs ont-ils parcourus de Selma à Montgomery ?', c: 'Environ 87 kilomètres', d: ['5 kilomètres', '500 kilomètres', '1000 kilomètres'], exp: 'Ils ont marché pendant cinq jours sous la protection de l’armée.' },
  { id: '068', q: 'Quelle militante paysanne du Mississippi a dit la phrase Je suis fatiguée d’être fatiguée ?', c: 'Fannie Lou Hamer', d: ['Angela Davis', 'Coretta King', 'Septima Clark'], exp: 'Elle avait été battue en prison pour avoir simplement voulu s’inscrire pour voter.' },
  { id: '069', q: 'Quel organisateur pacifique a planifié dans l’ombre la Marche sur Washington de 1963 ?', c: 'Bayard Rustin', d: ['Malcolm X', 'Stokely Carmichael', 'Roy Wilkins'], exp: 'Grand stratège de la non-violence, il était le bras droit de Martin Luther King.' },
  { id: '070', q: 'Quelle femme a été présidente du Conseil national des femmes noires pendant 40 ans ?', c: 'Dorothy Height', d: ['Mary McLeod Bethune', 'Ida B. Wells', 'Rosa Parks'], exp: 'Elle était sur l’estrade avec King lors du discours de Washington.' },
  { id: '071', q: 'Quelle éducatrice noire a été conseillère spéciale du président Roosevelt ?', c: 'Mary McLeod Bethune', d: ['Madame C.J. Walker', 'Fannie Lou Hamer', 'Daisy Bates'], exp: 'Elle a fondé une université réputée en Floride pour les étudiants noirs.' },
  { id: '072', q: 'Quelle poétesse noire a été la première femme esclave publiée aux États-Unis en 1773 ?', c: 'Phillis Wheatley', d: ['Maya Angelou', 'Toni Morrison', 'Gwendolyn Brooks'], exp: 'Elle écrivait des poèmes en anglais et en latin qui ont épaté George Washington.' },
  { id: '073', q: 'Quelle écrivaine a été la première femme noire à gagner le prix Pulitzer de poésie en 1950 ?', c: 'Gwendolyn Brooks', d: ['Maya Angelou', 'Alice Walker', 'Toni Morrison'], exp: 'Ses poèmes racontaient la vie quotidienne des familles noires de Chicago.' },
  { id: '074', q: 'Quel quartier de Los Angeles s’est embrasé lors des grandes émeutes de l’été 1965 ?', c: 'Watts', d: ['Hollywood', 'Beverly Hills', 'Santa Monica'], exp: 'La jeunesse protestait contre le chômage et les violences policières.' },
  { id: '075', q: 'Quel automobiliste noir battu par des policiers en 1991 a provoqué les émeutes de Los Angeles ?', c: 'Rodney King', d: ['George Floyd', 'O.J. Simpson', 'Tupac Shakur'], exp: 'Leur acquittement par un jury sans Noir a déclenché six jours de colère.' },
  { id: '076', q: 'Quel mouvement mondial a été lancé en 2013 après la mort du jeune Trayvon Martin ?', c: 'Black Lives Matter', d: ['Civil Rights Now', 'Freedom First', 'We Are One'], exp: 'Trois femmes militantes ont créé ce mot d’ordre repris sur toute la planète.' },
  { id: '077', q: 'Dans quelle ville du Minnesota George Floyd a-t-il été tué en mai 2020 ?', c: 'Minneapolis', d: ['Chicago', 'Détroit', 'Saint-Louis'], exp: 'Sa mort a provoqué les plus grandes manifestations antiracistes de l’histoire.' },
  { id: '078', q: 'Quel grand boxeur noir a été le premier champion du monde poids lourds en 1908 ?', c: 'Jack Johnson', d: ['Joe Louis', 'Mohamed Ali', 'Mike Tyson'], exp: 'Sa victoire contre un Blanc a choqué l’Amérique ségrégationniste de l’époque.' },
  { id: '079', q: 'Quel boxeur noir surnommé le Bombardier brun a battu l’Allemand Max Schmeling en 1938 ?', c: 'Joe Louis', d: ['Jack Johnson', 'Sugar Ray Robinson', 'Sonny Liston'], exp: 'Il a mis son adversaire K.O. au premier round devant 70 000 spectateurs.' },
  { id: '080', q: 'Combien d’années Joe Louis est-il resté champion du monde des poids lourds ?', c: '12 ans', d: ['2 ans', '5 ans', '25 ans'], exp: 'Il a défendu son titre avec succès 25 fois consécutives.' },
  { id: '081', q: 'Quel athlète a sauté à 8,90 mètres aux Jeux de Mexico en 1968, un record mythique ?', c: 'Bob Beamon', d: ['Carl Lewis', 'Jesse Owens', 'Mike Powell'], exp: 'Les juges n’avaient même pas d’appareil assez long pour mesurer son saut.' },
  { id: '082', q: 'Combien de médailles d’or Carl Lewis a-t-il remportées aux Jeux de Los Angeles en 1984 ?', c: '4 médailles d’or', d: ['1 médaille', '2 médailles', '7 médailles'], exp: 'Il a égalé l’exploit historique réussi par Jesse Owens en 1936.' },
  { id: '083', q: 'Quelle sprinteuse américaine aux ongles longs a établi les records du 100m et 200m en 1988 ?', c: 'Florence Griffith-Joyner', d: ['Marion Jones', 'Wilma Rudolph', 'Allyson Felix'], exp: 'Surnommée Flo-Jo, ses records du monde tiennent toujours aujourd’hui.' },
  { id: '084', q: 'Quelle sprinteuse qui boitait enfant à cause de la polio a gagné 3 médailles d’or en 1960 ?', c: 'Wilma Rudolph', d: ['Florence Griffith-Joyner', 'Gail Devers', 'Evelyn Ashford'], exp: 'Les médecins disaient qu’elle ne marcherait jamais, elle est devenue la femme la plus rapide.' },
  { id: '085', q: 'Quelle athlète américaine est la femme la plus médaillée de l’histoire des Jeux en athlétisme ?', c: 'Allyson Felix', d: ['Florence Griffith-Joyner', 'Marion Jones', 'Carmelita Jeter'], exp: 'Elle a remporté 11 médailles olympiques au cours de sa carrière.' },
  { id: '086', q: 'Dans quelle ville Martin Luther King a-t-il été arrêté et emprisonné en Alabama en 1963 ?', c: 'Birmingham', d: ['Mobile', 'Montgomery', 'Tuscaloosa'], exp: 'La ville était surnommée Bombingham à cause des attentats racistes.' },
  { id: '087', q: 'Combien de petites filles noires ont été tuées dans l’attentat de l’église de Birmingham en 1963 ?', c: '4 fillettes', d: ['1 fillette', '8 fillettes', '12 fillettes'], exp: 'Cet attentat à la bombe a indigné le monde entier et accéléré les lois civiques.' },
  { id: '088', q: 'Quel jeune de 17 ans non armé a été abattu en Floride en 2012 alors qu’il portait un sweat à capuche ?', c: 'Trayvon Martin', d: ['Tamir Rice', 'Michael Brown', 'Eric Garner'], exp: 'Son sweat à capuche (hoodie) est devenu le symbole de la protestation.' },
  { id: '089', q: 'Quelle ville du Missouri a connu de grandes émeutes après la mort de Michael Brown en 2014 ?', c: 'Ferguson', d: ['Kansas City', 'Saint-Louis', 'Columbia'], exp: 'Les manifestants défilaient les mains en l’air en criant « Don’t shoot ».' },
  { id: '090', q: 'Quel basketteur des Lakers a porté un t-shirt I Can’t Breathe en hommage à Eric Garner ?', c: 'Kobe Bryant', d: ['Shaquille O’Neal', 'Magic Johnson', 'Kareem Abdul-Jabbar'], exp: 'Plusieurs stars de la NBA ont porté ce message sur le parquet.' },
  { id: '091', q: 'Dans quelle université d’élite Barack Obama a-t-il été président de la revue de droit ?', c: 'Harvard', d: ['Yale', 'Princeton', 'Stanford'], exp: 'Il était le premier étudiant noir à diriger la prestigieuse Harvard Law Review.' },
  { id: '092', q: 'Quelle ville américaine a vu grandir Barack Obama pendant ses années de travailleur social ?', c: 'Chicago', d: ['Boston', 'Philadelphie', 'Seattle'], exp: 'Il aidait les familles pauvres du quartier de South Side à trouver du travail.' },
  { id: '093', q: 'Quel célèbre révérend a fait deux grandes campagnes présidentielles américaines dans les années 80 ?', c: 'Jesse Jackson', d: ['Al Sharpton', 'Andrew Young', 'Ralph Abernathy'], exp: 'Sa coalition Rainbow a réuni des millions de citoyens de toutes origines.' },
  { id: '094', q: 'Qui a été le premier secrétaire d’État noir à diriger la diplomatie américaine en 2001 ?', c: 'Colin Powell', d: ['Condoleezza Rice', 'Ron Brown', 'Eric Holder'], exp: 'Il avait auparavant été le grand chef militaire des armées américaines.' },
  { id: '095', q: 'Quelle femme noire a succédé à Colin Powell comme secrétaire d’État en 2005 ?', c: 'Condoleezza Rice', d: ['Susan Rice', 'Loretta Lynch', 'Kamala Harris'], exp: 'Brillante pianiste et experte en géopolitique, elle a dirigé la diplomatie.' },
  { id: '096', q: 'Qui a été le tout premier procureur général noir (ministre de la Justice) des États-Unis en 2009 ?', c: 'Eric Holder', d: ['Thurgood Marshall', 'Clarence Thomas', 'John Lewis'], exp: 'Il a été nommé par le président Barack Obama pour diriger la justice.' },
  { id: '097', q: 'Quel célèbre musée national dédié à l’histoire des Noirs a ouvert à Washington en 2016 ?', c: 'Le Musée national de l’histoire afro-américaine', d: ['Le Musée du Louvre', 'Le Musée d’histoire naturelle', 'Le Musée de l’aviation'], exp: 'Inauguré par Barack Obama, son bâtiment doré se dresse sur le National Mall.' },
  { id: '098', q: 'Quel mot français désigne la fête qui célèbre la culture et l’héritage africain en décembre ?', c: 'Kwanzaa', d: ['Thanksgiving', 'Mardi Gras', 'Halloween'], exp: 'Créée en 1966, Kwanzaa allume sept bougies pour sept valeurs de communauté.' },
  { id: '099', q: 'Combien de bougies allume-t-on sur le chandelier Kinara pendant la fête de Kwanzaa ?', c: '7 bougies', d: ['3 bougies', '5 bougies', '12 bougies'], exp: 'Elles sont rouge, noire et verte, les couleurs de la fierté panafricaine.' },
  { id: '100', q: 'Quel mois de l’année est officiellement le Mois de l’histoire des Noirs aux États-Unis ?', c: 'Février', d: ['Janvier', 'Mai', 'Octobre'], exp: 'Le Black History Month a été créé par l’historien Carter G. Woodson en 1926.' },
];

for (const t of topicsPart1) {
  items.push({
    id: `diasp_${t.id}`,
    diff: ((parseInt(t.id, 10) % 4) + 1) as 1 | 2 | 3 | 4,
    q: [t.q, t.q, t.q, t.q, t.q],
    c: [t.c, t.c, t.c, t.c, t.c],
    d: [
      [t.d[0], t.d[0], t.d[0], t.d[0], t.d[0]],
      [t.d[1], t.d[1], t.d[1], t.d[1], t.d[1]],
      [t.d[2], t.d[2], t.d[2], t.d[2], t.d[2]],
    ],
    exp: [t.exp, t.exp, t.exp, t.exp, t.exp],
  });
}

writePartFile('diasporaPart1.ts', 'DIASPORA_PART_1', items);

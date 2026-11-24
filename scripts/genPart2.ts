import { QTuple, writePartFile } from './diasporaWriter';

const items: QTuple[] = [
  {
    id: 'diasp_101',
    diff: 1,
    q: ['Dans quel pays Mohamed Ali a-t-il disputé le combat mythique Rumble in the Jungle en 1974 ?', 'In which country did Muhammad Ali fight the legendary Rumble in the Jungle in 1974?', '¿En qué país peleó Muhammad Ali el mítico combate Rumble in the Jungle en 1974?', 'Em qual país Muhammad Ali lutou a lendária luta Rumble in the Jungle em 1974?', 'في أي بلد خاض محمد علي كلاي نزاله الأسطوري "نزال الغابة" عام 1974؟'],
    c: ['En République Démocratique du Congo (Zaïre)', 'In the Democratic Republic of the Congo (Zaire)', 'En la República Democrática del Congo (Zaire)', 'Na República Democrática do Congo (Zaire)', 'في جمهورية الكونغو الديمقراطية (زائير)'],
    d: [
      ['En Afrique du Sud', 'In South Africa', 'En Sudáfrica', 'Na África do Sul', 'في جنوب أفريقيا'],
      ['Au Nigeria', 'In Nigeria', 'En Nigeria', 'Na Nigéria', 'في نيجيريا'],
      ['En Égypte', 'In Egypt', 'En Egipto', 'No Egito', 'في مصر']
    ],
    exp: ['Il a battu George Foreman par K.O. au 8e round dans le grand stade de Kinshasa.', 'He knocked out George Foreman in the 8th round at Kinshasa’s stadium.', 'Noqueó a George Foreman en el octavo asalto en Kinshasa.', 'Ele nocauteou George Foreman no 8º round em Kinshasa.', 'هزم جورج فورمان بالضربة القاضية في الجولة الثامنة بملعب كينشاسا.']
  },
  {
    id: 'diasp_102',
    diff: 1,
    q: ['Quel boxeur Mohamed Ali a-t-il mis K.O. à Kinshasa en 1974 ?', 'Which boxer did Muhammad Ali knock out in Kinshasa in 1974?', '¿A qué boxeador noqueó Muhammad Ali en Kinshasa en 1974?', 'Qual boxeador Muhammad Ali nocauteou em Kinshasa em 1974?', 'أي ملاكم هزمه محمد علي بالضربة القاضية في كينشاسا عام 1974؟'],
    c: ['George Foreman', 'George Foreman', 'George Foreman', 'George Foreman', 'جورج فورمان'],
    d: [
      ['Mike Tyson', 'Mike Tyson', 'Mike Tyson', 'Mike Tyson', 'مايك تايسون'],
      ['Joe Frazier', 'Joe Frazier', 'Joe Frazier', 'Joe Frazier', 'جو فريزر'],
      ['Sonny Liston', 'Sonny Liston', 'Sonny Liston', 'Sonny Liston', 'سوني ليستون']
    ],
    exp: ['Foreman était invaincu et tout le monde pensait qu’Ali allait perdre.', 'Foreman was undefeated and heavily favored, but Ali outsmarted him.', 'Foreman estaba invicto, pero Ali lo sorprendió con su táctica.', 'Foreman estava invicto, mas Ali o surpreendeu com sua tática.', 'كان فورمان غير مهزوم، لكن تكتيك محمد علي المتقن حسم النزال.']
  },
  {
    id: 'diasp_103',
    diff: 1,
    q: ['Combien de Coupes du monde de football Pelé a-t-il remportées avec le Brésil ?', 'How many FIFA World Cups did Pelé win with Brazil?', '¿Cuántas Copas del Mundo ganó Pelé con Brasil?', 'Quantas Copas do Mundo Pelé conquistou com o Brasil?', 'كم عدد كؤوس العالم التي فاز بها بيليه مع منتخب البرازيل؟'],
    c: ['3 Coupes du monde', '3 World Cups', '3 Copas del Mundo', '3 Copas do Mundo', '3 كؤوس عالم'],
    d: [
      ['1 Coupe du monde', '1 World Cup', '1 Copa del Mundo', '1 Copa do Mundo', 'كأس عالم واحدة'],
      ['2 Coupes du monde', '2 World Cups', '2 Copas del Mundo', '2 Copas do Mundo', 'كأسين للعالم'],
      ['5 Coupes du monde', '5 World Cups', '5 Copas del Mundo', '5 Copas do Mundo', '5 كؤوس عالم']
    ],
    exp: ['Pelé est le seul joueur de toute l’histoire à avoir gagné trois Coupes du monde (1958, 1962, 1970).', 'Pelé is the only player in history to win three World Cups.', 'Pelé es el único futbolista de la historia que ganó tres Mundiales.', 'Pelé é o único jogador da história a vencer três Copas do Mundo.', 'بيليه هو اللاعب الوحيد في تاريخ كرة القدم الذي تُوج بـ3 كؤوس عالم.']
  },
  {
    id: 'diasp_104',
    diff: 1,
    q: ['Quel numéro de maillot mythique Pelé portait-il en équipe du Brésil ?', 'Which legendary jersey number did Pelé wear for the Brazilian national team?', '¿Qué mítico número de camiseta llevaba Pelé en Brasil?', 'Qual lendário número de camisa Pelé usava na seleção brasileira?', 'ما هو رقم القميص التاريخي الذي كان يرتديه بيليه مع البرازيل؟'],
    c: ['Le numéro 10', 'Number 10', 'El número 10', 'O número 10', 'الرقم 10'],
    d: [
      ['Le numéro 7', 'Number 7', 'El número 7', 'O número 7', 'الرقم 7'],
      ['Le numéro 9', 'Number 9', 'El número 9', 'O número 9', 'الرقم 9'],
      ['Le numéro 11', 'Number 11', 'El número 11', 'O número 11', 'الرقم 11']
    ],
    exp: ['C’est Pelé qui a donné au numéro 10 sa légende de maître du jeu.', 'Pelé turned the number 10 jersey into football’s most iconic symbol.', 'Fue Pelé quien convirtió la camiseta número 10 en un símbolo mítico.', 'Foi Pelé quem transformou a camisa 10 no maior símbolo do futebol.', 'بيليه هو من جعل القميص رقم 10 رمزاً لصانع الألعاب وأيقونة كرة القدم.']
  },
  {
    id: 'diasp_105',
    diff: 1,
    q: ['De quel pays des Caraïbes le sprinteur Usain Bolt est-il originaire ?', 'From which Caribbean country does sprinter Usain Bolt come?', '¿De qué país caribeño es originario el velocista Usain Bolt?', 'De qual país caribenho é o velocista Usain Bolt?', 'من أي دولة كاريبية ينحدر العداء الأسطوري يوسين بولت؟'],
    c: ['La Jamaïque', 'Jamaica', 'Jamaica', 'Jamaica', 'جامايكا'],
    d: [
      ['Cuba', 'Cuba', 'Cuba', 'Cuba', 'كوبا'],
      ['Trinité-et-Tobago', 'Trinidad and Tobago', 'Trinidad y Tobago', 'Trinidad e Tobago', 'ترينيداد وتوباغو'],
      ['La Barbade', 'Barbados', 'Barbados', 'Barbados', 'باربادوس']
    ],
    exp: ['Il est né à Sherwood Content dans la paroisse de Trelawny en Jamaïque.', 'He was born in Sherwood Content, Trelawny, Jamaica.', 'Nació en Sherwood Content, en la parroquia de Trelawny, Jamaica.', 'Ele nasceu em Sherwood Content, na Jamaica.', 'وُلد في شيروود كونتنت بمقاطعة تريلاوني في جامايكا.']
  },
  {
    id: 'diasp_106',
    diff: 1,
    q: ['Quel est le record du monde du 100 mètres établi par Usain Bolt en 2009 ?', 'What is Usain Bolt’s 100-meter world record time set in 2009?', '¿Cuál es el récord mundial de 100 metros de Usain Bolt logrado en 2009?', 'Qual é o recorde mundial dos 100 metros de Usain Bolt estabelecido em 2009?', 'ما هو الرقم القياسي العالمي في سباق 100 متر الذي سجله يوسين بولت عام 2009؟'],
    c: ['9 secondes et 58 centièmes', '9.58 seconds', '9 segundos y 58 centésimas', '9 segundos e 58 centésimos', '9 ثوانٍ و58 جزءاً من المائة'],
    d: [
      ['9 secondes et 80 centièmes', '9.80 seconds', '9 segundos y 80 centésimas', '9 segundos e 80 centésimos', '9 ثوانٍ و80 جزءاً'],
      ['10 secondes piles', '10.00 seconds', '10 segundos exactos', '10 segundos cravados', '10 ثوانٍ بالتمام'],
      ['9 secondes et 20 centièmes', '9.20 seconds', '9 segundos y 20 centésimas', '9 segundos e 20 centésimos', '9 ثوانٍ و20 جزءاً']
    ],
    exp: ['Il a couru à près de 44 km/h lors des championnats du monde à Berlin.', 'He reached a top speed of nearly 44 km/h at the Berlin World Championships.', 'Alcanzó casi 44 km/h en el Mundial de Berlín.', 'Ele atingiu quase 44 km/h no Mundial de Berlim.', 'بلغت سرعته القصوى نحو 44 كم/ساعة في بطولة العالم ببرلين.']
  },
  {
    id: 'diasp_107',
    diff: 1,
    q: ['Combien de titres de champion NBA Michael Jordan a-t-il remportés avec les Bulls ?', 'How many NBA championships did Michael Jordan win with the Chicago Bulls?', '¿Cuántos campeonatos de la NBA ganó Michael Jordan con los Bulls?', 'Quantos títulos da NBA Michael Jordan conquistou com o Chicago Bulls?', 'كم عدد بطولات الدوري الأمريكي للمحترفين التي فاز بها مايكل جوردان مع شيكاغو بولز؟'],
    c: ['6 titres', '6 titles', '6 títulos', '6 títulos', '6 ألقاب'],
    d: [
      ['3 titres', '3 titles', '3 títulos', '3 títulos', '3 ألقاب'],
      ['8 titres', '8 titles', '8 títulos', '8 títulos', '8 ألقاب'],
      ['10 titres', '10 titles', '10 títulos', '10 títulos', '10 ألقاب']
    ],
    exp: ['Il a réussi deux triplés historiques (1991-1993 et 1996-1998) avec Chicago.', 'He completed two historic three-peats with Chicago.', 'Consiguió dos tripletes históricos con los Chicago Bulls.', 'Ele conquistou dois tricampeonatos históricos com o Chicago Bulls.', 'حقق ثلاثيتين تاريخيتين متتاليتين مع شيكاغو بولز.']
  },
  {
    id: 'diasp_108',
    diff: 1,
    q: ['Quel numéro de maillot Michael Jordan a-t-il rendu célèbre dans le basket mondial ?', 'Which jersey number did Michael Jordan make famous worldwide in basketball?', '¿Qué número de camiseta hizo famoso Michael Jordan en el baloncesto?', 'Qual número de camisa Michael Jordan tornou famoso no basquete mundial?', 'ما هو رقم القميص الذي اشتهر به مايكل جوردان في عالم كرة السلة؟'],
    c: ['Le numéro 23', 'Number 23', 'El número 23', 'O número 23', 'الرقم 23'],
    d: [
      ['Le numéro 7', 'Number 7', 'El número 7', 'O número 7', 'الرقم 7'],
      ['Le numéro 32', 'Number 32', 'El número 32', 'O número 32', 'الرقم 32'],
      ['Le numéro 99', 'Number 99', 'El número 99', 'O número 99', 'الرقم 99']
    ],
    exp: ['Son numéro 23 est retiré et personne ne peut plus le porter aux Bulls de Chicago.', 'His number 23 was retired by the Chicago Bulls.', 'Su número 23 fue retirado por los Chicago Bulls.', 'Sua camisa 23 foi aposentada pelo Chicago Bulls.', 'تم حجب قميصه رقم 23 تقديراً لمسيرته مع شيكاغو بولز.']
  },
  {
    id: 'diasp_109',
    diff: 1,
    q: ['Quel était le surnom de reptile du champion de basket Kobe Bryant ?', 'What was basketball champion Kobe Bryant’s reptile nickname?', '¿Cuál era el apodo de reptil del campeón de baloncesto Kobe Bryant?', 'Qual era o apelido de réptil do campeão de basquete Kobe Bryant?', 'ما هو لقب الثعبان الذي اشتُهر به نجم كرة السلة كوبي براينت؟'],
    c: ['Black Mamba', 'Black Mamba', 'Black Mamba', 'Black Mamba', 'بلاك مامبا (Black Mamba)'],
    d: [
      ['Vipère rouge', 'Red Viper', 'Víbora Roja', 'Víbora Vermelha', 'الأفعى الحمراء'],
      ['Cobra royal', 'King Cobra', 'Cobra Real', 'Naja Real', 'الكوبرا الملكية'],
      ['Crocodile', 'Crocodile', 'Cocodrilo', 'Crocodilo', 'التمساح']
    ],
    exp: ['Il disait avoir choisi le serpent Black Mamba pour sa précision et sa vitesse.', 'He chose the Black Mamba for its striking speed and precision.', 'Eligió la mamba negra por su velocidad y precisión letal en la cancha.', 'Ele escolheu a Black Mamba por sua rapidez e precisão na quadra.', 'اختار لقب المامبا السوداء لسرعتها ودقتها الفائقة في الهجوم.']
  },
  {
    id: 'diasp_110',
    diff: 1,
    q: ['Dans quel sport Serena Williams a-t-elle remporté 23 titres du Grand Chelem ?', 'In which sport did Serena Williams win 23 Grand Slam singles titles?', '¿En qué deporte ganó Serena Williams 23 títulos de Grand Slam?', 'Em qual esporte Serena Williams conquistou 23 títulos de Grand Slam?', 'في أي رياضة توجت سيرينا ويليامز بـ23 لقباً في بطولات الغراند سلام؟'],
    c: ['Le tennis', 'Tennis', 'El tenis', 'O tênis', 'التنس (كرة المضرب)'],
    d: [
      ['Le golf', 'Golf', 'El golf', 'O golfe', 'الغولف'],
      ['La natation', 'Swimming', 'La natación', 'A natação', 'السباحة'],
      ['L’escrime', 'Fencing', 'La esgrima', 'A esgrima', 'المبارزة']
    ],
    exp: ['Elle a dominé le tennis mondial féminin pendant plus de deux décennies.', 'She dominated women’s tennis for more than two decades.', 'Dominó el tenis femenino mundial durante más de dos décadas.', 'Ela dominou o tênis feminino mundial por mais de duas décadas.', 'سيطرت على تنس السيدات عالمياً لأكثر من عقدين من الزمن.']
  },
  {
    id: 'diasp_111',
    diff: 1,
    q: ['Combien de titres de champion du monde de Formule 1 Lewis Hamilton a-t-il gagnés ?', 'How many Formula 1 World Championships has Lewis Hamilton won?', '¿Cuántos campeonatos mundiales de Fórmula 1 ha ganado Lewis Hamilton?', 'Quantos títulos mundiais de Fórmula 1 Lewis Hamilton conquistou?', 'كم عدد بطولات العالم في الفورمولا 1 التي فاز بها لويس هاميلتون؟'],
    c: ['7 titres mondiaux', '7 World Titles', '7 títulos mundiales', '7 títulos mundiais', '7 ألقاب عالمية'],
    d: [
      ['3 titres mondiaux', '3 World Titles', '3 títulos mundiales', '3 títulos mundiais', '3 ألقاب عالمية'],
      ['5 titres mondiaux', '5 World Titles', '5 títulos mundiales', '5 títulos mundiais', '5 ألقاب عالمية'],
      ['10 titres mondiaux', '10 World Titles', '10 títulos mundiales', '10 títulos mundiais', '10 ألقاب عالمية']
    ],
    exp: ['Il partage le record historique de sept couronnes mondiales avec Michael Schumacher.', 'He shares the all-time record of seven world titles with Michael Schumacher.', 'Comparte el récord de siete títulos con Michael Schumacher.', 'Ele divide o recorde histórico de sete títulos com Michael Schumacher.', 'يتقاسم الرقم القياسي بـ7 ألقاب عالمية مع مايكل شوماخر.']
  },
  {
    id: 'diasp_112',
    diff: 1,
    q: ['Dans quelle discipline sportive Simone Biles est-elle considérée comme la plus grande de l’histoire ?', 'In which sport is Simone Biles considered the greatest of all time?', '¿En qué deporte es Simone Biles considerada la mejor de todos los tiempos?', 'Em qual esporte Simone Biles é considerada a maior de todos os tempos?', 'في أي رياضة تُعد سيمون بايلز الأعظم في التاريخ؟'],
    c: ['La gymnastique artistique', 'Artistic Gymnastics', 'La gimnasia artística', 'A ginástica artística', 'الجمباز الفني'],
    d: [
      ['Le patinage artistique', 'Figure Skating', 'El patinaje artístico', 'A patinação artística', 'التزلج الفني'],
      ['Le plongeon', 'Diving', 'El salto de trampolín', 'O salto ornamental', 'الغطس'],
      ['La natation synchronisée', 'Artistic Swimming', 'La natación sincronizada', 'O nado artístico', 'السباحة الإيقاعية']
    ],
    exp: ['Elle a plus de 30 médailles mondiales et cinq figures acrobatiques portent son nom.', 'She has won over 30 world championship medals and has five moves named after her.', 'Tiene más de 30 medallas mundiales y cinco movimientos llevan su nombre.', 'Tem mais de 30 medalhas mundiais e cinco movimentos com o seu nome.', 'حصدت أكثر من 30 ميدالية عالمية وسُميت 5 حركات بهلوانية باسمها.']
  },
  {
    id: 'diasp_113',
    diff: 1,
    q: ['Quel joueur de baseball noir est entré dans la ligue majeure en 1947 avec le numéro 42 ?', 'Which Black baseball player broke the color barrier in 1947 wearing number 42?', '¿Qué beisbolista negro rompió la barrera racial en 1947 con el número 42?', 'Qual jogador negro quebrou a barreira racial no beisebol em 1947 com a camisa 42?', 'من هو لاعب البيسبول الأسود الذي كسر حاجز العنصرية عام 1947 بالقميص رقم 42؟'],
    c: ['Jackie Robinson', 'Jackie Robinson', 'Jackie Robinson', 'Jackie Robinson', 'جاكي روبنسون'],
    d: [
      ['Hank Aaron', 'Hank Aaron', 'Hank Aaron', 'Hank Aaron', 'هانك آرون'],
      ['Willie Mays', 'Willie Mays', 'Willie Mays', 'Willie Mays', 'ويلي ميس'],
      ['Babe Ruth', 'Babe Ruth', 'Babe Ruth', 'Babe Ruth', 'بيب روث']
    ],
    exp: ['Son numéro 42 a été retiré de toutes les équipes professionnelles de baseball aux États-Unis.', 'His number 42 was retired across all Major League Baseball teams.', 'Su número 42 fue retirado de todos los equipos de las Grandes Ligas.', 'Sua camisa 42 foi aposentada em todos os times da liga de beisebol.', 'تم حظر وسحب رقم قميصه 42 في جميع فرق الدوري الأمريكي تكريماً له.']
  },
  {
    id: 'diasp_114',
    diff: 1,
    q: ['Quel coup de basket imparable au-dessus de la tête Kareem Abdul-Jabbar a-t-il inventé ?', 'What unblockable overhead basketball shot did Kareem Abdul-Jabbar make famous?', '¿Qué tiro imparable de baloncesto sobre la cabeza hizo famoso Kareem Abdul-Jabbar?', 'Qual arremesso indefensável de basquete Kareem Abdul-Jabbar tornou famoso?', 'ما هي الرمية الخطافية الشهيرة التي ابتكرها كريم عبد الجبار في كرة السلة؟'],
    c: ['Le Skyhook (bras roulé)', 'The Skyhook', 'El Skyhook (gancho del cielo)', 'O Skyhook (gancho)', 'الرمية الخطافية (Skyhook)'],
    d: [
      ['Le tir à 3 points', 'The 3-point shot', 'El triple', 'O arremesso de 3 pontos', 'رمية الثلاث نقاط'],
      ['Le dunk arrière', 'The reverse dunk', 'El mate hacia atrás', 'A enterrada de costas', 'الدانك الخلفي'],
      ['Le lancer franc', 'The free throw', 'El tiro libre', 'O lance livre', 'الرمية الحرة']
    ],
    exp: ['Du haut de ses 2,18 m, son bras roulé était presque impossible à contrer.', 'Standing 7-foot-2, his skyhook was virtually impossible to block.', 'Con sus 2,18 metros de altura, su tiro era casi imposible de taponar.', 'Com seus 2,18 m de altura, seu arremesso era quase impossível de bloquear.', 'بطوله البالغ 2.18 م، كان من المستحيل تقريباً صد رميته الخطافية.']
  },
  {
    id: 'diasp_115',
    diff: 1,
    q: ['Quel grand tournoi de tennis sur terre battue Yannick Noah a-t-il remporté en 1983 ?', 'Which clay-court Grand Slam tennis tournament did Yannick Noah win in 1983?', '¿Qué torneo de Grand Slam sobre tierra batida ganó Yannick Noah en 1983?', 'Qual torneio de Grand Slam no saibro Yannick Noah conquistou em 1983?', 'أي بطولة غراند سلام كبرى على الملاعب الترابية فاز بها يانيك نوا عام 1983؟'],
    c: ['Roland-Garros', 'Roland-Garros (French Open)', 'Roland Garros', 'Roland Garros', 'رولان غاروس (بطولة فرنسا المفتوحة)'],
    d: [
      ['Wimbledon', 'Wimbledon', 'Wimbledon', 'Wimbledon', 'ويمبلدون'],
      ['L’US Open', 'The US Open', 'El US Open', 'O US Open', 'أمريكا المفتوحة'],
      ['L’Open d’Australie', 'The Australian Open', 'El Abierto de Australia', 'O Aberto da Austrália', 'أستراليا المفتوحة']
    ],
    exp: ['Il a fêté sa victoire en chantant avec son père venu sur le court central.', 'He celebrated his win by embracing his father who rushed onto the court.', 'Celebró su triunfo abrazando a su padre que saltó a la pista.', 'Ele celebrou a vitória abraçando o pai que invadiu a quadra.', 'احتفل بانتصاره التاريخي مع والده الذي نزل فرحاً إلى أرض الملعب.']
  },
  {
    id: 'diasp_116',
    diff: 1,
    q: ['Dans quel art martial le Français Teddy Riner a-t-il gagné plusieurs médailles d’or olympiques ?', 'In which martial art has Frenchman Teddy Riner won multiple Olympic gold medals?', '¿En qué arte marcial ha ganado Teddy Riner múltiples medallas de oro olímpicas?', 'Em qual arte marcial o francês Teddy Riner conquistou várias medalhas de ouro olímpicas?', 'في أي فن قتالي فاز الفرنسي تيدي رينر بميداليات ذهبية أولمبية متعددة؟'],
    c: ['Le judo', 'Judo', 'El judo', 'O judô', 'الجودو'],
    d: [
      ['Le karaté', 'Karate', 'El kárate', 'O caratê', 'الكاراتيه'],
      ['La boxe thaïe', 'Muay Thai', 'El muay thai', 'O muay thai', 'المواي تاي'],
      ['La lutte gréco-romaine', 'Greco-Roman Wrestling', 'La lucha grecorromana', 'A luta greco-romana', 'المصارعة الرومانية']
    ],
    exp: ['Du haut de ses 2,04 mètres, il est resté invaincu pendant plus de neuf ans.', 'Standing 6-foot-8, he went undefeated for over nine years in heavyweight judo.', 'Con 2,04 metros de estatura, permaneció invicto durante más de nueve años.', 'Com 2,04 m de altura, permaneceu invicto por mais de nove anos.', 'بطوله البالغ 2.04 م، ظل دون أي هزيمة لأكثر من تسع سنوات متتالية.']
  },
  {
    id: 'diasp_117',
    diff: 1,
    q: ['Quel âge avait Kylian Mbappé quand il a été champion du monde avec la France en 2018 ?', 'How old was Kylian Mbappé when he won the FIFA World Cup with France in 2018?', '¿Qué edad tenía Kylian Mbappé cuando fue campeón del mundo en 2018?', 'Quantos anos tinha Kylian Mbappé quando foi campeão do mundo em 2018?', 'كم كان عمر كيليان مبابي عندما توج بطلاً لكأس العالم مع فرنسا عام 2018؟'],
    c: ['19 ans', '19 years old', '19 años', '19 anos', '19 سنة'],
    d: [
      ['16 ans', '16 years old', '16 años', '16 anos', '16 سنة'],
      ['23 ans', '23 years old', '23 años', '23 anos', '23 سنة'],
      ['26 ans', '26 years old', '26 años', '26 anos', '26 سنة']
    ],
    exp: ['Il était le plus jeune buteur en finale de Coupe du monde depuis Pelé en 1958.', 'He was the youngest player to score in a World Cup final since Pelé in 1958.', 'Fue el goleador más joven en una final mundialista desde Pelé en 1958.', 'Ele foi o mais jovem a marcar numa final de Copa desde Pelé em 1958.', 'أصبح أصغر لاعب يسجل هدفاً في نهائي كأس العالم منذ بيليه عام 1958.']
  },
  {
    id: 'diasp_118',
    diff: 1,
    q: ['Combien de buts Kylian Mbappé a-t-il marqués en finale de la Coupe du monde 2022 ?', 'How many goals did Kylian Mbappé score in the 2022 World Cup final?', '¿Cuántos goles marcó Kylian Mbappé en la final del Mundial 2022?', 'Quantos gols Kylian Mbappé marcou na final da Copa do Mundo de 2022?', 'كم هدفاً سجل كيليان مبابي في نهائي كأس العالم 2022؟'],
    c: ['3 buts (un triplé)', '3 goals (a hat-trick)', '3 goles (un triplete)', '3 gols (um hat-trick)', '3 أهداف (هاتريك)'],
    d: [
      ['1 but', '1 goal', '1 gol', '1 gol', 'هدف واحد'],
      ['2 buts', '2 goals', '2 goles', '2 gols', 'هدفان'],
      ['4 buts', '4 goals', '4 goles', '4 gols', '4 أهداف']
    ],
    exp: ['Il est le deuxième joueur de l’histoire à réussir un triplé en finale de Coupe du monde.', 'He is only the second player in history to score a World Cup final hat-trick.', 'Es el segundo jugador en marcar un triplete en una final de Copa del Mundo.', 'Ele é o segundo jogador a marcar três gols numa final de Copa do Mundo.', 'هو ثاني لاعب فقط في التاريخ يسجل هاتريك في نهائي كأس العالم.']
  },
  {
    id: 'diasp_119',
    diff: 1,
    q: ['Combien de buts le défenseur Lilian Thuram a-t-il marqués en demi-finale de la Coupe du monde 1998 ?', 'How many goals did defender Lilian Thuram score in the 1998 World Cup semi-final?', '¿Cuántos goles marcó el defensa Lilian Thuram en la semifinal de 1998?', 'Quantos gols o zagueiro Lilian Thuram marcou na semifinal da Copa de 1998?', 'كم هدفاً سجل المدافع ليليان تورام في نصف نهائي كأس العالم 1998؟'],
    c: ['2 buts', '2 goals', '2 goles', '2 gols', 'هدفان'],
    d: [
      ['0 but', '0 goals', '0 goles', '0 gol', 'لا شيء'],
      ['1 but', '1 goal', '1 gol', '1 gol', 'هدف واحد'],
      ['3 buts', '3 goals', '3 goles', '3 gols', '3 أهداف']
    ],
    exp: ['Ce sont les deux seuls buts de toute sa carrière en 142 sélections avec les Bleus.', 'Those were the only two goals of his entire 142-cap international career.', 'Fueron los dos únicos goles de toda su carrera con la selección francesa.', 'Foram os únicos dois gols de toda a sua carreira pela seleção da França.', 'كانا الهدفين الوحيدين في مسيرته الدولية الطويلة مع منتخب فرنسا.']
  },
  {
    id: 'diasp_120',
    diff: 1,
    q: ['Dans quelle ville de Guadeloupe la championne d’athlétisme Marie-José Pérec est-elle née ?', 'In which Guadeloupean town was track champion Marie-José Pérec born?', '¿En qué localidad de Guadalupe nació la campeona Marie-José Pérec?', 'Em qual cidade de Guadalupe a campeã Marie-José Pérec nasceu?', 'في أي بلدة بجزيرة غوادلوب وُلدت بطلة ألعاب القوى ماري جوزيه بيريك؟'],
    c: ['Basse-Terre', 'Basse-Terre', 'Basse-Terre', 'Basse-Terre', 'باس تير (Basse-Terre)'],
    d: [
      ['Pointe-à-Pitre', 'Pointe-à-Pitre', 'Pointe-à-Pitre', 'Pointe-à-Pitre', 'بوانت-آ-بيتر'],
      ['Fort-de-France', 'Fort-de-France', 'Fort-de-France', 'Fort-de-France', 'فور دو فرانس'],
      ['Cayenne', 'Cayenne', 'Cayenne', 'Caiena', 'كايين']
    ],
    exp: ['Surnommée la Gazelle, elle a réussi le doublé 200m et 400m aux Jeux d’Atlanta en 1996.', 'Nicknamed the Gazelle, she won double gold in the 200m and 400m in Atlanta 1996.', 'Apodada la Gacela, logró el doblete de 200 y 400 metros en Atlanta 1996.', 'Apelidada de Gazela, venceu os 200m e 400m em Atlanta 1996.', 'لُقبت بالغزالة وحققت ثنائية تاريخية في سباقي 200 و400 م بأولمبياد أتلانتا 1996.']
  }
];

// Add 80 more specific sports questions (121 to 200)
const topicsPart2 = [
  { id: '121', q: 'Quelle escrimeuse de Guadeloupe était surnommée La Guêpe pour ses touches précises ?', c: 'Laura Flessel', d: ['Marie-José Pérec', 'Surya Bonaly', 'Christine Arron'], exp: 'Elle a remporté deux médailles d’or olympiques à l’épée en 1996.' },
  { id: '122', q: 'Quelle patineuse artistique noire française faisait un salto arrière interdit atterrissant sur un seul patin ?', c: 'Surya Bonaly', d: ['Laura Flessel', 'Katarina Witt', 'Tonya Harding'], exp: 'Elle a réalisé cette acrobatie spectaculaire aux Jeux olympiques de Nagano en 1998.' },
  { id: '123', q: 'Dans quel club de football londonien Thierry Henry a-t-il marqué 228 buts et a une statue ?', c: 'Arsenal', d: ['Chelsea', 'Tottenham', 'West Ham'], exp: 'Il a été le grand attaquant des Invincibles d’Arsenal en 2004.' },
  { id: '124', q: 'Quel joueur de football d’origine guadeloupéenne a marqué le but en or en finale de l’Euro 2000 ?', c: 'David Trezeguet', d: ['Thierry Henry', 'Sylvain Wiltord', 'Nicolas Anelka'], exp: 'Sa reprise de volée sous la barre a donné la victoire à la France contre l’Italie.' },
  { id: '125', q: 'De quel pays africain les parents de l’attaquant belge Romelu Lukaku sont-ils originaires ?', c: 'La République Démocratique du Congo', d: ['Le Cameroun', 'Le Sénégal', 'La Côte d’Ivoire'], exp: 'Son père Roger Lukaku était aussi footballeur international congolais.' },
  { id: '126', q: 'Quel footballeur anglais a mené une grande campagne pour les repas gratuits des écoliers ?', c: 'Marcus Rashford', d: ['Raheem Sterling', 'Bukayo Saka', 'Harry Kane'], exp: 'Le gouvernement britannique a cédé et a financé les repas pendant les vacances.' },
  { id: '127', q: 'Dans quelle ville de Jamaïque le footballeur anglais Raheem Sterling est-il né ?', c: 'Kingston', d: ['Montego Bay', 'Spanish Town', 'Negril'], exp: 'Il a grandi à Kingston avant de déménager à Londres à l’âge de cinq ans.' },
  { id: '128', q: 'Quel joueur noir brésilien a gagné le Ballon d’or en 2005 avec le FC Barcelone ?', c: 'Ronaldinho', d: ['Rivaldo', 'Ronaldo Nazário', 'Neymar'], exp: 'Il a été applaudi par les supporters rivaux du Real Madrid au stade Santiago-Bernabéu.' },
  { id: '129', q: 'Quel joueur brésilien surnommé R9 a marqué 8 buts pour gagner la Coupe du monde en 2002 ?', c: 'Ronaldo Nazário', d: ['Ronaldinho', 'Romário', 'Bebeto'], exp: 'Il a signé un doublé en finale contre l’Allemagne avec sa célèbre coupe de cheveux.' },
  { id: '130', q: 'Combien de médailles d’or Usain Bolt a-t-il gagnées en tout aux Jeux olympiques ?', c: '8 médailles d’or', d: ['4 médailles', '12 médailles', '16 médailles'], exp: 'Il a régné sans partage sur le sprint à Pékin 2008, Londres 2012 et Rio 2016.' },
  { id: '131', q: 'Quel plat de poulet Usain Bolt a-t-il raconté avoir mangé avant ses exploits de Pékin en 2008 ?', c: 'Des nuggets de poulet', d: ['Un tajine', 'Du riz sénégalais', 'Des sushis'], exp: 'Il en mangeait des boîtes entières parce qu’il n’avait pas l’habitude des plats chinois.' },
  { id: '132', q: 'Quelle sprinteuse jamaïcaine aux cheveux colorés est surnommée Pocket Rocket ?', c: 'Shelly-Ann Fraser-Pryce', d: ['Elaine Thompson-Herah', 'Shericka Jackson', 'Merlene Ottey'], exp: 'Du haut de son mètre 52, elle a gagné des titres mondiaux sur trois décennies.' },
  { id: '133', q: 'Quel sprinteur canadien d’origine jamaïcaine a gagné l’or olympique du 100m à Atlanta en 1996 ?', c: 'Donovan Bailey', d: ['Andre De Grasse', 'Bruny Surin', 'Ben Johnson'], exp: 'Il avait battu le record du monde en 9 secondes et 84 centièmes.' },
  { id: '134', q: 'Quel athlète cubain détient toujours le record du monde du saut en hauteur à 2,45 mètres ?', c: 'Javier Sotomayor', d: ['Mutaz Barshim', 'Stefan Holm', 'Patrik Sjöberg'], exp: 'Il a franchi cette hauteur incroyable à Salamanque en Espagne en 1993.' },
  { id: '135', q: 'Quel boxeur cubain légendaire a refusé des millions pour rester amateur et boxer pour son peuple ?', c: 'Teófilo Stevenson', d: ['Félix Savón', 'Kid Chocolate', 'Guillermo Rigondeaux'], exp: 'Il a dit : Que vaut un million de dollars comparé à l’amour de huit millions de Cubains ?' },
  { id: '136', q: 'Quelle athlète vénézuélienne noire détient le record du monde féminin du triple saut ?', c: 'Yulimar Rojas', d: ['Caterine Ibargüen', 'Ana Peleteiro', 'Françoise Mbango'], exp: 'Elle a sauté à 15,74 mètres avec une énergie et une joie communicatives.' },
  { id: '137', q: 'Quel pilote de Formule 1 noir a été anobli et fait chevalier par la reine d’Angleterre ?', c: 'Sir Lewis Hamilton', d: ['Lando Norris', 'George Russell', 'Max Verstappen'], exp: 'Il a été fait chevalier pour ses victoires et son engagement en faveur de la diversité.' },
  { id: '138', q: 'Quelle écurie italienne historique Lewis Hamilton a-t-il rejoint pour courir en 2025 ?', c: 'Ferrari', d: ['Red Bull', 'McLaren', 'Alpine'], exp: 'Ce transfert historique vers les bolides rouges a enflammé les passionnés de sport automobile.' },
  { id: '139', q: 'Quel golfeur noir a gagné le Masters d’Augusta en 1997 à seulement 21 ans avec 12 coups d’avance ?', c: 'Tiger Woods', d: ['Lee Elder', 'Charlie Sifford', 'Phil Mickelson'], exp: 'Sa victoire a brisé les barrières raciales d’un club qui avait longtemps refusé les Noirs.' },
  { id: '140', q: 'Combien de tournois majeurs du Grand Chelem de golf Tiger Woods a-t-il remportés ?', c: '15 tournois majeurs', d: ['5 majeurs', '8 majeurs', '25 majeurs'], exp: 'Il est l’un des plus grands golfeurs de tous les temps et a inspiré toute une génération.' },
  { id: '141', q: 'Quel joueur de baseball noir a battu le record légendaire de home runs de Babe Ruth en 1974 ?', c: 'Hank Aaron', d: ['Jackie Robinson', 'Barry Bonds', 'Willie Mays'], exp: 'Il a frappé son 715e home run malgré les menaces de mort racistes qu’il recevait.' },
  { id: '142', q: 'Combien de points Kobe Bryant a-t-il marqués en un seul match NBA contre Toronto en 2006 ?', c: '81 points', d: ['50 points', '65 points', '100 points'], exp: 'C’est le deuxième plus grand total de points marqués par un seul joueur dans l’histoire de la NBA.' },
  { id: '143', q: 'Quel joueur détient le record absolu de 100 points marqués en un seul match de NBA en 1962 ?', c: 'Wilt Chamberlain', d: ['Kobe Bryant', 'Michael Jordan', 'LeBron James'], exp: 'Il jouait pour les Warriors de Philadelphie lors de ce match d’anthologie.' },
  { id: '144', q: 'Quel joueur a dépassé Kareem Abdul-Jabbar pour devenir le meilleur marqueur de l’histoire de la NBA ?', c: 'LeBron James', d: ['Stephen Curry', 'Kevin Durant', 'James Harden'], exp: 'Il a franchi la barre légendaire des 38 387 points en février 2023.' },
  { id: '145', q: 'Dans quelle ville de l’Ohio LeBron James a-t-il ouvert son école gratuite I PROMISE School ?', c: 'Akron', d: ['Cleveland', 'Cincinnati', 'Columbus'], exp: 'Son école offre des repas, des vélos et des bourses d’études aux enfants défavorisés.' },
  { id: '146', q: 'Combien de bagues de champion NBA le pivot Bill Russell a-t-il gagnées avec les Celtics ?', c: '11 bagues', d: ['4 bagues', '7 bagues', '15 bagues'], exp: 'Il a plus de bagues que de doigts sur les mains et a été le premier entraîneur noir de la NBA.' },
  { id: '147', q: 'Quel basketteur des Warriors a battu le record de paniers à 3 points de l’histoire de la NBA ?', c: 'Stephen Curry', d: ['Ray Allen', 'Reggie Miller', 'Klay Thompson'], exp: 'Son tir ultra-rapide a complètement transformé la façon de jouer au basket.' },
  { id: '148', q: 'Quel joueur grec d’origine nigériane a été champion NBA avec les Bucks en 2021 ?', c: 'Giannis Antetokounmpo', d: ['Thanasis Antetokounmpo', 'Dennis Schröder', 'Rudy Gobert'], exp: 'Surnommé The Greek Freak, il vendait des montres dans la rue à Athènes enfant.' },
  { id: '149', q: 'Quel joueur camerounais a été élu MVP de la NBA en 2023 avec les Sixers de Philadelphie ?', c: 'Joel Embiid', d: ['Pascal Siakam', 'Luc Mbah a Moute', 'Bismack Biyombo'], exp: 'Né à Yaoundé, il a découvert le basket à l’âge de 15 ans lors d’un camp de détection.' },
  { id: '150', q: 'Quel joueur camerounais a été champion NBA en 2019 avec les Raptors de Toronto ?', c: 'Pascal Siakam', d: ['Joel Embiid', 'Serge Ibaka', 'Dikembe Mutombo'], exp: 'Surnommé Spicy P, il a été un des grands artisans du premier titre de Toronto.' },
  { id: '151', q: 'Quel basketteur congolais légendaire remuait son doigt pour dire Non après chaque contre ?', c: 'Dikembe Mutombo', d: ['Bismack Biyombo', 'Jonathan Kuminga', 'Serge Ibaka'], exp: 'Son geste du doigt No, no, no est devenu l’un des plus célèbres de la NBA.' },
  { id: '152', q: 'Dans quelle ville de Californie les sœurs Serena et Venus Williams ont-elles appris le tennis ?', c: 'Compton', d: ['Beverly Hills', 'San Diego', 'San Francisco'], exp: 'Leur père Richard les entraînait sur les courts publics abîmés de leur quartier.' },
  { id: '153', q: 'Quel grand tournoi de tennis Arthur Ashe a-t-il été le premier Noir à gagner en 1975 ?', c: 'Wimbledon', d: ['Roland-Garros', 'L’Open d’Australie', 'Le tournoi de Rome'], exp: 'Il a battu son compatriote Jimmy Connors en finale avec une tactique brillante.' },
  { id: '154', q: 'Quel stade de tennis de New York, le plus grand du monde avec 23 000 places, porte son nom ?', c: 'Le stade Arthur Ashe', d: ['Le stade Louis Armstrong', 'Le Madison Square Garden', 'Le court central'], exp: 'C’est là que se dispute chaque année la grande finale de l’US Open.' },
  { id: '155', q: 'Quelle joueuse noire a remporté Roland-Garros en 1956 et Wimbledon en 1957 ?', c: 'Althea Gibson', d: ['Serena Williams', 'Venus Williams', 'Zina Garrison'], exp: 'Elle a ouvert la voie à toutes les championnes afro-américaines qui ont suivi.' },
  { id: '156', q: 'Quel boxeur noir a été le plus jeune champion du monde poids lourds de l’histoire à 20 ans en 1986 ?', c: 'Mike Tyson', d: ['Evander Holyfield', 'Lennox Lewis', 'Riddick Bowe'], exp: 'Surnommé Iron Mike, il terrassait ses adversaires dès les premières secondes.' },
  { id: '157', q: 'Quel appareil de cuisson George Foreman a-t-il vendu à plus de 100 millions d’exemplaires ?', c: 'Un gril électrique sans graisse', d: ['Un four à micro-ondes', 'Une friteuse', 'Un mixeur de jus'], exp: 'Ce gril de cuisine lui a rapporté plus d’argent que toute sa carrière de boxeur.' },
  { id: '158', q: 'À quel âge George Foreman est-il redevenu champion du monde des poids lourds en 1994 ?', c: '45 ans', d: ['35 ans', '40 ans', '50 ans'], exp: 'Il a mis K.O. Michael Moorer, devenant le champion du monde poids lourds le plus âgé.' },
  { id: '159', q: 'Quel boxeur a battu Mohamed Ali lors de leur premier combat en 1971 au Madison Square Garden ?', c: 'Joe Frazier', d: ['George Foreman', 'Ken Norton', 'Sonny Liston'], exp: 'Ce combat historique était surnommé Le Combat du Siècle.' },
  { id: '160', q: 'Dans quelle capitale des Philippines Ali et Frazier ont-ils disputé le Thrilla in Manila en 1975 ?', c: 'Manille', d: ['Tokyo', 'Bangkok', 'Jakarta'], exp: 'Sous une chaleur suffocante, Ali a remporté ce combat considéré comme le plus dur de l’histoire.' },
  { id: '161', q: 'Quel coureur noir a couru le 100 mètres en 9 secondes et 95 centièmes en altitude en 1968 ?', c: 'Jim Hines', d: ['Jesse Owens', 'Carl Lewis', 'Bob Hayes'], exp: 'Il a été le premier être humain à passer officiellement sous la barre des 10 secondes.' },
  { id: '162', q: 'Quel sprinteur américain a gagné l’or olympique du 100 mètres en 2004 à Athènes ?', c: 'Justin Gatlin', d: ['Maurice Greene', 'Tyson Gay', 'Asafa Powell'], exp: 'Il a devancé ses rivaux dans une finale ultra-serrée en 9 secondes et 85 centièmes.' },
  { id: '163', q: 'Quel sprinteur jamaïcain détenait le record du monde du 100 mètres juste avant Usain Bolt ?', c: 'Asafa Powell', d: ['Yohan Blake', 'Nesta Carter', 'Michael Frater'], exp: 'Il avait couru en 9 secondes et 74 centièmes en Italie en 2007.' },
  { id: '164', q: 'Quel athlète a remporté 3 titres mondiaux consécutifs du 110 mètres haies dans les années 80 ?', c: 'Greg Foster', d: ['Edwin Moses', 'Colin Jackson', 'Renaldo Nehemiah'], exp: 'Il a dominé les haies avec une puissance et une régularité impressionnantes.' },
  { id: '165', q: 'Quel coureur de 400 mètres haies a été invaincu pendant 122 courses consécutives entre 1977 et 1987 ?', c: 'Edwin Moses', d: ['Kevin Young', 'Karsten Warholm', 'Angelo Taylor'], exp: 'Pendant près de dix ans, personne n’a réussi à le battre sur sa distance fétiche.' },
  { id: '166', q: 'Quelle gymnaste noire a été championne olympique du concours général individuel à Londres en 2012 ?', c: 'Gabby Douglas', d: ['Simone Biles', 'Dominique Dawes', 'Sunisa Lee'], exp: 'Elle a été la toute première Afro-Américaine à remporter ce titre prestigieux.' },
  { id: '167', q: 'Quelle nageuse noire a été la première championne olympique américaine individuelle en 2016 ?', c: 'Simone Manuel', d: ['Lia Neal', 'Maritza Correia', 'Cullen Jones'], exp: 'Elle a gagné l’or sur 100 mètres nage libre à égalité parfaite avec la Canadienne Penny Oleksiak.' },
  { id: '168', q: 'Quel nageur noir américain a gagné l’or au relais 4x100m nage libre aux Jeux de Pékin en 2008 ?', c: 'Cullen Jones', d: ['Anthony Ervin', 'Michael Phelps', 'Ryan Lochte'], exp: 'Ayant failli se noyer enfant, il a ensuite appris à nager et a créé une fondation pour apprendre aux enfants.' },
  { id: '169', q: 'Quel joueur noir a remporté le trophée Heisman du meilleur joueur universitaire américain en 1961 ?', c: 'Ernie Davis', d: ['Jim Brown', 'OJ Simpson', 'Walter Payton'], exp: 'Surnommé l’Express d’Elmira, son histoire émouvante a été racontée dans un grand film.' },
  { id: '170', q: 'Quel joueur des Bears de Chicago était surnommé Sweetness pour sa grâce sur le terrain ?', c: 'Walter Payton', d: ['Jim Brown', 'Barry Sanders', 'Jerry Rice'], exp: 'Le prix de l’homme de l’année de la NFL pour les actions caritatives porte son nom.' },
  { id: '171', q: 'Quel receveur noir légendaire des 49ers de San Francisco détient les records de touchdowns en NFL ?', c: 'Jerry Rice', d: ['Randy Moss', 'Terrell Owens', 'Calvin Johnson'], exp: 'Il a attrapé 208 touchdowns et a gagné 3 Super Bowls avec San Francisco.' },
  { id: '172', q: 'Quel quarterback noir a mené les Chiefs de Kansas City à trois victoires au Super Bowl ?', c: 'Patrick Mahomes', d: ['Lamar Jackson', 'Russell Wilson', 'Cam Newton'], exp: 'Ses passes acrobatiques et son sang-froid en font l’un des plus grands de sa génération.' },
  { id: '173', q: 'Qui a été le tout premier quarterback noir à remporter le Super Bowl en 1988 ?', c: 'Doug Williams', d: ['Warren Moon', 'Randall Cunningham', 'Steve McNair'], exp: 'Il a lancé quatre passes de touchdown dans le deuxième quart-temps avec Washington.' },
  { id: '174', q: 'Quel entraîneur noir a été le premier à remporter le Super Bowl en 2007 avec les Colts ?', c: 'Tony Dungy', d: ['Mike Tomlin', 'Lovie Smith', 'Marvin Lewis'], exp: 'Il affrontait en finale son ami Lovie Smith, premier duel d’entraîneurs noirs au Super Bowl.' },
  { id: '175', q: 'Quel joueur noir a gagné le Tournoi des Six Nations de rugby avec la France en 2022 ?', c: 'Cameron Woki', d: ['Teddy Thomas', 'Mathieu Bastareaud', 'Serge Blanco'], exp: 'Ce joueur talentueux a brillé en deuxième ligne avec le XV de France.' },
  { id: '176', q: 'Quel arrière noir légendaire né à Caracas au Venezuela a illuminé le rugby français dans les années 80 ?', c: 'Serge Blanco', d: ['Thierry Dusautoir', 'Yannick Jauzion', 'Vincent Clerc'], exp: 'Surnommé le Pelé du rugby, il a marqué un essai d’anthologie en demi-finale de Coupe du monde 1987.' },
  { id: '177', q: 'Quel capitaine noir né à Abidjan a mené le XV de France en finale de la Coupe du monde en 2011 ?', c: 'Thierry Dusautoir', d: ['Serge Blanco', 'Fulgence Ouedraogo', 'Yannick Nyanga'], exp: 'Élu meilleur joueur du monde en 2011, il a réalisé 38 plaquages lors de la finale.' },
  { id: '178', q: 'Quel joueur noir sud-africain a été le premier capitaine noir des Springboks champion du monde en 2019 ?', c: 'Siya Kolisi', d: ['Bryan Habana', 'Cheslin Kolbe', 'Tendai Mtawarira'], exp: 'Né dans un township très pauvre, il a soulevé la Coupe du monde en 2019 et 2023.' },
  { id: '179', q: 'Quel ailier sud-africain noir a égalé le record de 15 essais en Coupe du monde de rugby de Jonah Lomu ?', c: 'Bryan Habana', d: ['Siya Kolisi', 'Cheslin Kolbe', 'Makazole Mapimpi'], exp: 'Sa vitesse phénoménale lui permettait de faire des courses contre des guépards.' },
  { id: '180', q: 'Quel club brésilien a été le club de presque toute la carrière de Pelé entre 1956 et 1974 ?', c: 'Le Santos FC', d: ['Flamengo', 'Corinthians', 'Palmeiras'], exp: 'Avec Santos, Pelé a voyagé dans le monde entier et marqué plus de 1000 buts.' },
  { id: '181', q: 'Quel joueur noir brésilien a été champion du monde en 1994 et a été élu meilleur joueur du monde ?', c: 'Romário', d: ['Bebeto', 'Ronaldo', 'Dunga'], exp: 'Son adresse géniale devant le but a fait triompher la Seleção aux États-Unis.' },
  { id: '182', q: 'Quel joueur brésilien né à Porto Alegre régalait le public avec sa passe aveugle et ses virgules ?', c: 'Ronaldinho', d: ['Kaká', 'Adriano', 'Robinho'], exp: 'Il jouait toujours avec un sourire éclatant qui communiquait la joie de vivre.' },
  { id: '183', q: 'Quel footballeur brésilien du Real Madrid a mené la lutte contre le racisme dans les stades espagnols ?', c: 'Vinícius Júnior', d: ['Rodrygo', 'Éder Militão', 'Endrick'], exp: 'Il a reçu le Prix Socrates pour son engagement éducatif et social pour les enfants au Brésil.' },
  { id: '184', q: 'Quel défenseur latéral brésilien était réputé pour ses tirs surpuissants du pied gauche à plus de 130 km/h ?', c: 'Roberto Carlos', d: ['Cafu', 'Marcelo', 'Dani Alves'], exp: 'Son coup franc aux effets magiques contre la France en 1997 défiait les lois de la physique.' },
  { id: '185', q: 'Quel capitaine brésilien a soulevé la Coupe du monde 2002 et disputé trois finales consécutives ?', c: 'Cafu', d: ['Roberto Carlos', 'Lúcio', 'Dunga'], exp: 'Il arpentait son couloir droit avec une énergie inépuisable tout le match.' },
  { id: '186', q: 'Quel gardien noir français des Bleus a été le héros des tirs au but contre le Portugal à l’Euro 2024 ?', c: 'Mike Maignan', d: ['Steve Mandanda', 'Bernard Lama', 'Alphonse Areola'], exp: 'Né en Guyane, il est reconnu comme l’un des meilleurs gardiens du monde à l’AC Milan.' },
  { id: '187', q: 'Quel gardien noir français d’origine guyanaise a remporté la Coupe du monde en 1998 ?', c: 'Bernard Lama', d: ['Mike Maignan', 'Steve Mandanda', 'Fabien Barthez'], exp: 'Avec son pantalon noir et ses sorties aériennes félines, il a marqué l’histoire du PSG.' },
  { id: '188', q: 'Quel milieu de terrain français d’origine congolaise a été champion du monde 2018 avec ses tacles ?', c: 'Blaise Matuidi', d: ['Paul Pogba', 'N’Golo Kanté', 'Steven Nzonzi'], exp: 'Surnommé le poulpe pour son volume de jeu infatigable, il récupérait tous les ballons.' },
  { id: '189', q: 'Quel milieu de terrain français d’origine guinéenne a marqué en finale de la Coupe du monde 2018 ?', c: 'Paul Pogba', d: ['N’Golo Kanté', 'Blaise Matuidi', 'Corentin Tolisso'], exp: 'Sa frappe du pied gauche a trompé le gardien croate pour le troisième but français.' },
  { id: '190', q: 'Quel attaquant néerlandais d’origine surinamaise a été triple Ballon d’or dans les années 70 et 80 ?', c: 'Ruud Gullit', d: ['Frank Rijkaard', 'Patrick Kluivert', 'Clarence Seedorf'], exp: 'Avec ses dreadlocks et sa puissance athlétique, il a mené les Pays-Bas au titre européen en 1988.' },
  { id: '191', q: 'Quel milieu néerlandais né au Suriname est le seul joueur à avoir gagné la Ligue des champions avec 3 clubs différents ?', c: 'Clarence Seedorf', d: ['Ruud Gullit', 'Frank Rijkaard', 'Edgar Davids'], exp: 'Il a soulevé la coupe avec l’Ajax Amsterdam, le Real Madrid et l’AC Milan.' },
  { id: '192', q: 'Quel milieu de terrain néerlandais né au Suriname portait des lunettes de protection orange sur le terrain ?', c: 'Edgar Davids', d: ['Clarence Seedorf', 'Patrick Kluivert', 'Ruud Gullit'], exp: 'Surnommé le Pitbull par Louis van Gaal, ses lunettes étaient devenues sa marque de fabrique.' },
  { id: '193', q: 'Quel jeune attaquant néerlandais né de parents surinamais a marqué le but de la victoire en finale de C1 en 1995 à 18 ans ?', c: 'Patrick Kluivert', d: ['Clarence Seedorf', 'Edgar Davids', 'Michael Reiziger'], exp: 'Son but en fin de match a donné la Ligue des champions à l’Ajax contre l’AC Milan.' },
  { id: '194', q: 'Quel défenseur central néerlandais de Liverpool a des origines afro-surinamaises ?', c: 'Virgil van Dijk', d: ['Nathan Aké', 'Stefan de Vrij', 'Matthijs de Ligt'], exp: 'Il a été élu meilleur joueur d’Europe en 2019 après avoir remporté la Ligue des champions.' },
  { id: '195', q: 'Quel joueur noir a été le premier à marquer un but pour l’équipe nationale d’Angleterre en 1978 ?', c: 'Viv Anderson', d: ['Cyrille Regis', 'John Barnes', 'Ian Wright'], exp: 'Défenseur de Nottingham Forest, il a ouvert la porte à des générations d’internationaux anglais.' },
  { id: '196', q: 'Quel joueur anglais né à la Jamaïque a marqué un but de légende en dribblant tout le Brésil au Maracanã en 1984 ?', c: 'John Barnes', d: ['Ian Wright', 'Viv Anderson', 'Paul Ince'], exp: 'Il a effacé cinq défenseurs brésiliens avant de glisser le ballon dans le filet.' },
  { id: '197', q: 'Qui a été le premier joueur noir à porter le brassard de capitaine de l’équipe de football d’Angleterre en 1993 ?', c: 'Paul Ince', d: ['John Barnes', 'Sol Campbell', 'Rio Ferdinand'], exp: 'Milieu de terrain rugueux de Manchester United, il a dirigé les Three Lions.' },
  { id: '198', q: 'Quel défenseur central anglais a été le capitaine de la défense des Invincibles d’Arsenal en 2004 ?', c: 'Sol Campbell', d: ['Rio Ferdinand', 'John Terry', 'Ledley King'], exp: 'Il a disputé trois Coupes du monde et a marqué de la tête en finale de Ligue des champions.' },
  { id: '199', q: 'Quel défenseur anglais a formé une charnière légendaire avec Nemanja Vidić à Manchester United ?', c: 'Rio Ferdinand', d: ['Sol Campbell', 'Ashley Cole', 'Micah Richards'], exp: 'Élégant balle au pied, il a remporté la Ligue des champions en 2008 à Moscou.' },
  { id: '200', q: 'Quel joueur noir canadien du Bayern Munich a des origines libériennes et est né dans un camp de réfugiés au Ghana ?', c: 'Alphonso Davies', d: ['Jonathan David', 'Atiba Hutchinson', 'Cyle Larin'], exp: 'Sa vitesse de pointe foudroyante en fait l’un des meilleurs latéraux gauches du monde.' },
];

for (const t of topicsPart2) {
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

writePartFile('diasporaPart2.ts', 'DIASPORA_PART_2', items);

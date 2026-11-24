import { QTuple, writePartFile } from './diasporaWriter';

const items: QTuple[] = [
  {
    id: 'diasp_201',
    diff: 1,
    q: ['Quel style musical de Jamaïque Bob Marley a-t-il fait connaître au monde entier ?', 'Which Jamaican musical style did Bob Marley make famous worldwide?', '¿Qué estilo musical de Jamaica hizo mundialmente famoso Bob Marley?', 'Qual estilo musical jamaicano Bob Marley tornou famoso mundialmente?', 'ما هو اللون الموسيقي الجامايكي الذي نشره بوب مارلي في العالم بأسره؟'],
    c: ['Le reggae', 'Reggae', 'El reggae', 'O reggae', 'الريغي (Reggae)'],
    d: [
      ['La salsa', 'Salsa', 'La salsa', 'A salsa', 'السالسا'],
      ['Le tango', 'Tango', 'El tango', 'O tango', 'التانغو'],
      ['La techno', 'Techno', 'El techno', 'O techno', 'التكنو']
    ],
    exp: ['Avec son groupe The Wailers, il a porté les rythmes de Kingston sur toutes les scènes.', 'With The Wailers, he brought the rhythms of Kingston to stadiums across the globe.', 'Con su grupo The Wailers, llevó los ritmos de Kingston a todo el mundo.', 'Com o grupo The Wailers, levou os ritmos de Kingston para o mundo todo.', 'مع فرقته "ذا ويلرز"، نقل إيقاعات كينغستون إلى مسارح العالم.']
  },
  {
    id: 'diasp_202',
    diff: 1,
    q: ['Quelle chanson de Bob Marley appelle tous les peuples à s’unir dans l’amour ?', 'Which Bob Marley anthem calls for all humanity to unite in love?', '¿Qué canción de Bob Marley llama a todos los pueblos a unirse en el amor?', 'Qual música de Bob Marley chama todos os povos a se unirem no amor?', 'ما هي أغنية بوب مارلي الشهيرة التي تدعو البشرية للتوحد في المحبة والسلام؟'],
    c: ['One Love', 'One Love', 'One Love', 'One Love', 'One Love (حب واحد)'],
    d: [
      ['Yesterday', 'Yesterday', 'Yesterday', 'Yesterday', 'Yesterday'],
      ['Stayin’ Alive', 'Stayin’ Alive', 'Stayin’ Alive', 'Stayin’ Alive', 'Stayin’ Alive'],
      ['Bohemian Rhapsody', 'Bohemian Rhapsody', 'Bohemian Rhapsody', 'Bohemian Rhapsody', 'Bohemian Rhapsody']
    ],
    exp: ['La BBC a désigné « One Love » comme la chanson du millénaire en l’an 2000.', 'The BBC named "One Love" the Song of the Millennium in 2000.', 'La BBC eligió "One Love" como la canción del milenio en el año 2000.', 'A BBC escolheu "One Love" como a canção do milênio no ano 2000.', 'اختارت هيئة الإذاعة البريطانية BBC أغنية "One Love" كأغنية الألفية عام 2000.']
  },
  {
    id: 'diasp_203',
    diff: 1,
    q: ['Dans quelle ville de Jamaïque se trouve la maison transformée en musée de Bob Marley ?', 'In which Jamaican city is Bob Marley’s home and museum located?', '¿En qué ciudad de Jamaica se encuentra la casa museo de Bob Marley?', 'Em qual cidade da Jamaica fica a casa-museu de Bob Marley?', 'في أي مدينة بجامايكا يوجد منزل ومتحف بوب مارلي الشهير؟'],
    c: ['Kingston', 'Kingston', 'Kingston', 'Kingston', 'كينغستون'],
    d: [
      ['Montego Bay', 'Montego Bay', 'Montego Bay', 'Montego Bay', 'مونتيغو باي'],
      ['Ocho Rios', 'Ocho Rios', 'Ocho Rios', 'Ocho Rios', 'أوتشو ريوس'],
      ['Port Antonio', 'Port Antonio', 'Port Antonio', 'Port Antonio', 'بورت أنطونيو']
    ],
    exp: ['Sa maison au 56 Hope Road porte encore les impacts de balles de la tentative d’attentat de 1976.', 'His home at 56 Hope Road still bears bullet marks from the 1976 assassination attempt.', 'Su casa en Hope Road aún conserva marcas de balas del atentado de 1976.', 'Sua casa na Hope Road ainda guarda marcas de tiros do atentado de 1976.', 'ما زال منزله في شارع هوب رود يحتفظ بآثار إطلاق النار من محاولة اغتياله عام 1976.']
  },
  {
    id: 'diasp_204',
    diff: 1,
    q: ['Quel instrument à vent a rendu Louis Armstrong célèbre dans l’histoire du jazz ?', 'Which brass instrument made Louis Armstrong world-famous in jazz history?', '¿Qué instrumento de viento hizo famoso a Louis Armstrong en el jazz?', 'Qual instrumento de sopro tornou Louis Armstrong mundialmente famoso no jazz?', 'ما هي الآلة النحاسية التي اشتهر بها لويس أرمسترونغ في تاريخ موسيقى الجاز؟'],
    c: ['La trompette', 'The trumpet', 'La trompeta', 'O trompete', 'البوق (الترمبيت)'],
    d: [
      ['La flûte', 'The flute', 'La flauta', 'A flauta', 'الناي (الفلوت)'],
      ['L’accordéon', 'The accordion', 'El acordeón', 'O acordeão', 'الأكورديون'],
      ['La clarinette', 'The clarinet', 'El clarinete', 'O clarinete', 'الكلارينيت']
    ],
    exp: ['Avec sa trompette dorée et sa voix rauque, il a fait rire et pleurer des millions de personnes.', 'With his golden horn and raspy voice, he became the ambassador of American jazz.', 'Con su trompeta dorada y su voz ronca, fue el gran embajador del jazz.', 'Com seu trompete dourado e voz rouca, virou o grande embaixador do jazz.', 'ببوقه الذهبي وصوته الأجش الدافئ، كان سفيراً عالمياً لموسيقى الجاز.']
  },
  {
    id: 'diasp_205',
    diff: 1,
    q: ['Quel était le surnom affectueux de Louis Armstrong ?', 'What was Louis Armstrong’s affectionate nickname?', '¿Cuál era el apodo cariñoso de Louis Armstrong?', 'Qual era o apelido carinhoso de Louis Armstrong?', 'ما هو اللقب المحبب الذي اشتُهر به لويس أرمسترونغ؟'],
    c: ['Satchmo', 'Satchmo', 'Satchmo', 'Satchmo', 'ساتشيمو (Satchmo)'],
    d: [
      ['Dizzy', 'Dizzy', 'Dizzy', 'Dizzy', 'ديزي'],
      ['Bird', 'Bird', 'Bird', 'Bird', 'بيرد'],
      ['Duke', 'Duke', 'Duke', 'Duke', 'دوك']
    ],
    exp: ['Satchmo vient de Satchel Mouth, en référence à sa grande bouche expressive.', 'Satchmo was short for Satchel Mouth, teasing his wide, expressive smile.', 'Satchmo venía de Satchel Mouth, por su amplia sonrisa.', 'Satchmo vinha de Satchel Mouth, em alusão ao seu sorriso aberto.', 'ساتشيمو اختصار لـ "فم الحقيبة" إشارة إلى ابتسامته العريضة وفمه الواسع.']
  },
  {
    id: 'diasp_206',
    diff: 1,
    q: ['Quelle chanson pleine d’espoir Louis Armstrong a-t-il chantée en 1967 ?', 'Which hopeful classic did Louis Armstrong sing in 1967?', '¿Qué clásica canción de esperanza cantó Louis Armstrong en 1967?', 'Qual clássico de esperança Louis Armstrong cantou em 1967?', 'ما هي الأغنية الكلاسيكية المليئة بالأمل التي غناها لويس أرمسترونغ عام 1967؟'],
    c: ['What a Wonderful World', 'What a Wonderful World', 'What a Wonderful World', 'What a Wonderful World', 'What a Wonderful World (يا له من عالم رائع)'],
    d: [
      ['Imagine', 'Imagine', 'Imagine', 'Imagine', 'Imagine'],
      ['My Way', 'My Way', 'My Way', 'My Way', 'My Way'],
      ['Hallelujah', 'Hallelujah', 'Hallelujah', 'Hallelujah', 'Hallelujah']
    ],
    exp: ['Il y décrivait les arbres verts, les roses rouges et les bébés qui grandissent.', 'He sang of green trees, red roses, and skies of blue in a turbulent era.', 'Describía los árboles verdes, las rosas rojas y la belleza de la vida.', 'Ele cantava sobre árvores verdes, rosas vermelhas e a beleza da vida.', 'وصف فيها خضرة الأشجار وجمال السماء والزهور كرسالة محبة للعالم.']
  },
  {
    id: 'diasp_207',
    diff: 1,
    q: ['Quel titre royal les fans de musique donnaient-ils à Aretha Franklin ?', 'What royal title was given to Aretha Franklin by music fans worldwide?', '¿Qué título real le dieron los fanáticos a Aretha Franklin?', 'Qual título de nobreza os fãs deram a Aretha Franklin?', 'ما هو اللقب الملكي الموسيقي الذي أُطلق على أريثا فرانكلين حول العالم؟'],
    c: ['La Reine de la Soul', 'The Queen of Soul', 'La Reina del Soul', 'A Rainha do Soul', 'ملكة السول (Queen of Soul)'],
    d: [
      ['La Princesse de la Pop', 'The Pop Princess', 'La Princesa del Pop', 'A Princesa do Pop', 'أميرة البوب'],
      ['La Dame du Jazz', 'The Lady of Jazz', 'La Dama del Jazz', 'A Dama do Jazz', 'سيدة الجاز'],
      ['La Reine du Rock', 'The Queen of Rock', 'La Reina del Rock', 'A Rainha do Rock', 'ملكة الروك']
    ],
    exp: ['Sa voix puissante et son tube « Respect » en ont fait une légende vivante.', 'Her soaring voice and anthem "Respect" made her an enduring musical legend.', 'Su potente voz y su himno "Respect" la convirtieron en una leyenda.', 'Sua voz marcante e o hino "Respect" fizeram dela uma lenda viva.', 'بصوتها الصادح وأغنيتها "Respect" أصبحت رمزاً أسطورياً للموسيقى.']
  },
  {
    id: 'diasp_208',
    diff: 1,
    q: ['Quel mot anglais Aretha Franklin épelait-elle dans son hymne pour les femmes en 1967 ?', 'Which English word did Aretha Franklin famously spell out in her 1967 anthem?', '¿Qué palabra en inglés deletreaba Aretha Franklin en su canción de 1967?', 'Qual palavra em inglês Aretha Franklin soletrava no seu clássico de 1967?', 'ما هي الكلمة الإنجليزية التي كانت تهجئها أريثا فرانكلين في أغنيتها الشهيرة عام 1967؟'],
    c: ['R-E-S-P-E-C-T', 'R-E-S-P-E-C-T', 'R-E-S-P-E-C-T', 'R-E-S-P-E-C-T', 'R-E-S-P-E-C-T (احترام)'],
    d: [
      ['F-R-E-E-D-O-M', 'F-R-E-E-D-O-M', 'F-R-E-E-D-O-M', 'F-R-E-E-D-O-M', 'F-R-E-E-D-O-M (حرية)'],
      ['L-O-V-E', 'L-O-V-E', 'L-O-V-E', 'L-O-V-E', 'L-O-V-E (حب)'],
      ['P-E-A-C-E', 'P-E-A-C-E', 'P-E-A-C-E', 'P-E-A-C-E', 'P-E-A-C-E (سلام)']
    ],
    exp: ['Cette chanson est devenue un hymne à la fois pour les droits civiques et le droit des femmes.', 'The song became a rallying cry for civil rights and women’s liberation.', 'La canción fue un himno de los derechos civiles y de la liberación femenina.', 'A música virou um hino dos direitos civis e das mulheres.', 'أصبحت الأغنية نشيداً لحقوق الإنسان والمطالبة باحترام النساء حول العالم.']
  },
  {
    id: 'diasp_209',
    diff: 1,
    q: ['Quel chanteur aveugle et pianiste de génie a chanté Georgia on My Mind ?', 'Which blind singer and pianist sang the state anthem "Georgia on My Mind"?', '¿Qué cantante ciego y pianista de genio cantó "Georgia on My Mind"?', 'Qual cantor cego e pianista genial cantou "Georgia on My Mind"?', 'أي مغنٍ كفيف وعازف بيانو عبقري غنى التحفة الخالدة "Georgia on My Mind"؟'],
    c: ['Ray Charles', 'Ray Charles', 'Ray Charles', 'Ray Charles', 'راي تشارلز'],
    d: [
      ['Stevie Wonder', 'Stevie Wonder', 'Stevie Wonder', 'Stevie Wonder', 'ستيفي واندر'],
      ['Nat King Cole', 'Nat King Cole', 'Nat King Cole', 'Nat King Cole', 'نات كينغ كول'],
      ['Sam Cooke', 'Sam Cooke', 'Sam Cooke', 'Sam Cooke', 'سام كوك']
    ],
    exp: ['Ayant perdu la vue à 7 ans, il a mélangé le gospel et le blues pour inventer la soul.', 'Blinded at age 7, he fused church gospel and blues to pioneer soul music.', 'Perdió la vista a los 7 años y unió el gospel con el blues para crear el soul.', 'Cego aos 7 anos, fundiu o gospel e o blues para criar a soul music.', 'فقد بصره في السابعة من عمره ومزج بين موسيقى الإنجيل والبلوز ليبتكر موسيقى السول.']
  },
  {
    id: 'diasp_210',
    diff: 1,
    q: ['Quel artiste prodige aveugle jouait de l’harmonica et a chanté I Just Called to Say I Love You ?', 'Which blind multi-instrumentalist prodigy played harmonica and sang "I Just Called to Say I Love You"?', '¿Qué prodigio ciego tocaba la armónica y cantó "I Just Called to Say I Love You"?', 'Qual prodígio cego tocava gaita e cantou "I Just Called to Say I Love You"?', 'أي فنان كفيف يعزف على الهارمونيكا وغنى "I Just Called to Say I Love You"؟'],
    c: ['Stevie Wonder', 'Stevie Wonder', 'Stevie Wonder', 'Stevie Wonder', 'ستيفي واندر'],
    d: [
      ['Ray Charles', 'Ray Charles', 'Ray Charles', 'Ray Charles', 'راي تشارلز'],
      ['Marvin Gaye', 'Marvin Gaye', 'Marvin Gaye', 'Marvin Gaye', 'مارفن غاي'],
      ['Prince', 'Prince', 'Prince', 'Prince', 'برنس']
    ],
    exp: ['Il a signé chez Motown à 11 ans sous le nom de Little Stevie Wonder.', 'He was signed to Motown at age 11 as Little Stevie Wonder.', 'Fichó por Motown a los 11 años como Little Stevie Wonder.', 'Ele assinou com a Motown aos 11 anos como Little Stevie Wonder.', 'تعاقدت معه شركة موتاون في سن 11 عاماً تحت اسم "الطفل المعجزة ستيفي واندر".']
  },
  {
    id: 'diasp_211',
    diff: 1,
    q: ['Quelle chanson Stevie Wonder a-t-il écrite pour que l’anniversaire de Martin Luther King devienne un jour férié ?', 'Which song did Stevie Wonder write to make Martin Luther King’s birthday a national holiday?', '¿Qué canción escribió Stevie Wonder para que el natalicio de Martin Luther King fuera festivo?', 'Qual música Stevie Wonder escreveu para tornar o aniversário de Martin Luther King feriado nacional?', 'ما هي الأغنية التي كتبها ستيفي واندر ليصبح يوم ميلاد مارتن لوثر كينغ عطلة وطنية رسمية؟'],
    c: ['Happy Birthday', 'Happy Birthday', 'Happy Birthday', 'Happy Birthday', 'Happy Birthday'],
    d: [
      ['Superstition', 'Superstition', 'Superstition', 'Superstition', 'Superstition'],
      ['Isn’t She Lovely', 'Isn’t She Lovely', 'Isn’t She Lovely', 'Isn’t She Lovely', 'Isn’t She Lovely'],
      ['Sir Duke', 'Sir Duke', 'Sir Duke', 'Sir Duke', 'Sir Duke']
    ],
    exp: ['Grâce à sa campagne musicale, le président Reagan a signé la loi créant le jour férié MLK.', 'His campaign helped persuade Congress and President Reagan to enact MLK Day.', 'Gracias a su campaña, el presidente Reagan firmó la ley del día festivo MLK.', 'Graças à sua campanha, o feriado do MLK Day foi aprovado nos EUA.', 'بفضل حملته الغنائية، تم اعتماد يوم مارتن لوثر كينغ كعطلة فيدرالية في أمريكا.']
  },
  {
    id: 'diasp_212',
    diff: 1,
    q: ['Quel surnom planétaire a été donné au chanteur Michael Jackson ?', 'What global title was bestowed upon pop singer Michael Jackson?', '¿Qué título mundial le dieron al cantante Michael Jackson?', 'Qual título mundial foi dado ao cantor Michael Jackson?', 'ما هو اللقب العالمي الذي أُطلق على المغني مايكل جاكسون؟'],
    c: ['Le Roi de la Pop', 'The King of Pop', 'El Rey del Pop', 'O Rei do Pop', 'ملك البوب (King of Pop)'],
    d: [
      ['Le Prince du R&B', 'The Prince of R&B', 'El Príncipe del R&B', 'O Príncipe do R&B', 'أمير الآر إن بي'],
      ['Le Baron du Rock', 'The Baron of Rock', 'El Barón del Rock', 'O Barão do Rock', 'بارون الروك'],
      ['L’Empereur du Funk', 'The Emperor of Funk', 'El Emperador del Funk', 'O Imperador do Funk', 'إمبراطور الفانك']
    ],
    exp: ['Son album Thriller reste l’album le plus vendu de toute l’histoire de la musique.', 'His 1982 album Thriller remains the best-selling album in music history.', 'Su álbum Thriller sigue siendo el más vendido de toda la historia musical.', 'Seu álbum Thriller continua sendo o mais vendido de toda a história.', 'ما زال ألبومه "ثريلر" لعام 1982 الألبوم الأكثر مبيعاً في تاريخ الموسيقى.']
  },
  {
    id: 'diasp_213',
    diff: 1,
    q: ['Quel pas de danse célèbre Michael Jackson a-t-il présenté en 1983 où il glisse vers l’arrière ?', 'Which dance move where he glided backward did Michael Jackson debut in 1983?', '¿Qué famoso paso de baile donde se desliza hacia atrás presentó Michael Jackson en 1983?', 'Qual passo de dança onde desliza para trás Michael Jackson estreou em 1983?', 'ما اسم الرقصة الشهيرة التي قدمها مايكل جاكسون عام 1983 حيث ينزلق إلى الخلف بنعومة؟'],
    c: ['Le Moonwalk', 'The Moonwalk', 'El Moonwalk', 'O Moonwalk', 'مشية القمر (Moonwalk)'],
    d: [
      ['La Macarena', 'The Macarena', 'La Macarena', 'A Macarena', 'الماكارينا'],
      ['Le Twist', 'The Twist', 'El Twist', 'O Twist', 'التويست'],
      ['La Salsa', 'The Salsa', 'La Salsa', 'A Salsa', 'السالسا']
    ],
    exp: ['Il a sidéré le public en dansant sur Billie Jean pour les 25 ans de la Motown.', 'He stunned viewers while performing Billie Jean on the Motown 25 TV special.', 'Asombró al mundo bailando Billie Jean en el aniversario de Motown.', 'Ele impressionou o mundo dançando Billie Jean no especial da Motown.', 'أدهش العالم بحركاته أثناء أدائه لأغنية بيلي جين في احتفال موتاون.']
  },
  {
    id: 'diasp_214',
    diff: 1,
    q: ['Quelle couleur de veste en cuir Michael Jackson portait-il dans le clip vidéo de Thriller ?', 'What color leather jacket did Michael Jackson wear in the iconic Thriller video?', '¿De qué color era la chaqueta de cuero de Michael Jackson en el vídeo de Thriller?', 'De que cor era a jaqueta de couro de Michael Jackson no clipe de Thriller?', 'ما هو لون السترة الجلدية التي ارتداها مايكل جاكسون في فيديو كليب "ثريلر"؟'],
    c: ['Rouge et noire', 'Red and black', 'Roja y negra', 'Vermelha e preta', 'حمراء وسوداء'],
    d: [
      ['Verte et jaune', 'Green and yellow', 'Verde y amarilla', 'Verde e amarela', 'خضراء وصفراء'],
      ['Bleue et blanche', 'Blue and white', 'Azul y blanca', 'Azul e branca', 'زرقاء وبيضاء'],
      ['Toute violette', 'All purple', 'Morada', 'Toda roxa', 'بنفسجية بالكامل']
    ],
    exp: ['Cette veste rouge avec des bandes noires est devenue l’une des plus célèbres de la mode.', 'The red jacket with black stripes became one of pop culture’s most iconic outfits.', 'Esa chaqueta roja con franjas negras se convirtió en un icono de la moda.', 'Essa jaqueta vermelha com listras pretas virou um ícone da cultura pop.', 'أصبحت تلك السترة الحمراء ذات الخطوط السوداء أشهر قطعة أزياء في تاريخ البوب.']
  },
  {
    id: 'diasp_215',
    diff: 1,
    q: ['Quelle couleur le chanteur de Minneapolis Prince a-t-il rendue inséparable de son image ?', 'Which color did Minneapolis music genius Prince make inseparable from his identity?', '¿Qué color hizo inseparable de su imagen el músico Prince?', 'Qual cor o músico Prince tornou inseparável de sua imagem?', 'ما هو اللون الذي ارتبط بشخصية وأغاني الفنان العبقري برنس؟'],
    c: ['Le violet (Purple)', 'Purple', 'El morado (púrpura)', 'O roxo', 'اللون البنفسجي (الأرجواني)'],
    d: [
      ['Le vert pomme', 'Apple green', 'El verde manzana', 'O verde-maçã', 'الأخضر التفاحي'],
      ['Le marron', 'Brown', 'El marrón', 'O marrom', 'البني'],
      ['Le gris clair', 'Light gray', 'El gris claro', 'O cinza-claro', 'الرمادي']
    ],
    exp: ['Son film et son album culte s’appellent « Purple Rain » (Pluie violette).', 'His masterpiece movie, song, and album were all titled "Purple Rain".', 'Su película y disco más famosos llevan por título "Purple Rain".', 'Seu filme e álbum mais famosos têm o nome de "Purple Rain".', 'ارتبط باللون البنفسجي بفضل أغنيته وفيلمه الأيقوني "Purple Rain" (المطر البنفسجي).']
  },
  {
    id: 'diasp_216',
    diff: 1,
    q: ['Quel guitariste gaucher a joué l’hymne américain en faisant des bruits de bombes à Woodstock en 1969 ?', 'Which left-handed guitarist played the US anthem imitating bomb sounds at Woodstock in 1969?', '¿Qué guitarrista zurdo tocó el himno de EE. UU. imitando bombas en Woodstock 1969?', 'Qual guitarrista canhoto tocou o hino americano imitando bombas em Woodstock 1969?', 'أي عازف غيتار أعسر عزف النشيد الأمريكي محاكياً أصوات القنابل في مهرجان وودستوك 1969؟'],
    c: ['Jimi Hendrix', 'Jimi Hendrix', 'Jimi Hendrix', 'Jimi Hendrix', 'جيمي هندريكس'],
    d: [
      ['Eric Clapton', 'Eric Clapton', 'Eric Clapton', 'Eric Clapton', 'إريك كلابتون'],
      ['Carlos Santana', 'Carlos Santana', 'Carlos Santana', 'Carlos Santana', 'كارلوس سانتانا'],
      ['Jimmy Page', 'Jimmy Page', 'Jimmy Page', 'Jimmy Page', 'جيمي بيج']
    ],
    exp: ['Il jouait de la guitare électrique avec ses dents ou derrière son dos pour épater la foule.', 'He often played his electric guitar behind his back or with his teeth.', 'Tocaba la guitarra eléctrica con los dientes o a la espalda para asombrar al público.', 'Ele tocava guitarra com os dentes ou atrás das costas.', 'كان يعزف على الغيتار الكهربائي بأسنانه أو خلف ظهره لإشعال حماس الجماهير.']
  },
  {
    id: 'diasp_217',
    diff: 1,
    q: ['Quel chanteur de soul et de funk criait « I Feel Good » en dansant comme une toupie ?', 'Which soul and funk pioneer shouted "I Got You (I Feel Good)" while spinning on stage?', '¿Qué pionero del funk y el soul gritaba "I Feel Good" girando sobre el escenario?', 'Qual pioneiro do funk e soul gritava "I Feel Good" rodopiando no palco?', 'من رائد موسيقى الفانك والسول الذي اشتهر بصيحته "I Feel Good" ورقصاته الحماسية؟'],
    c: ['James Brown', 'James Brown', 'James Brown', 'James Brown', 'جيمس براون'],
    d: [
      ['Barry White', 'Barry White', 'Barry White', 'Barry White', 'باري وايت'],
      ['Marvin Gaye', 'Marvin Gaye', 'Marvin Gaye', 'Marvin Gaye', 'مارفن غاي'],
      ['Otis Redding', 'Otis Redding', 'Otis Redding', 'Otis Redding', 'أوتيس ريدينغ']
    ],
    exp: ['Surnommé The Godfather of Soul, ses pas de danse ont inspiré Michael Jackson.', 'Nicknamed the Godfather of Soul, his explosive footwork inspired Michael Jackson.', 'Apodado el Padrino del Soul, sus pasos de baile inspiraron a Michael Jackson.', 'Apelidado de Poderoso Chefão do Soul, sua dança inspirou Michael Jackson.', 'لُقب بعرّاب موسيقى السول، وكانت حركاته الراقصة مصدر إلهام لمايكل جاكسون.']
  },
  {
    id: 'diasp_218',
    diff: 1,
    q: ['Quel nom le roi du blues B.B. King donnait-il avec tendresse à sa guitare Gibson noire ?', 'What affectionate name did blues king B.B. King give to his beloved Gibson guitar?', '¿Qué nombre cariñoso le dio el rey del blues B.B. King a su guitarra Gibson?', 'Qual nome carinhoso o rei do blues B.B. King deu à sua guitarra Gibson?', 'ما الاسم الذي أطلقه ملك البلوز بي بي كينغ على غيتاره المفضل؟'],
    c: ['Lucille', 'Lucille', 'Lucille', 'Lucille', 'لوسيل (Lucille)'],
    d: [
      ['Marie', 'Mary', 'María', 'Maria', 'ماري'],
      ['Daisy', 'Daisy', 'Daisy', 'Daisy', 'ديزي'],
      ['Rosie', 'Rosie', 'Rosie', 'Rosie', 'روزي']
    ],
    exp: ['Il avait sauvé sa guitare des flammes lors d’une bagarre entre deux hommes pour une femme nommée Lucille.', 'He named it Lucille after rushing into a burning hall to rescue it during a fight over a woman.', 'La llamó Lucille tras rescatarla de un incendio provocado por una pelea por una mujer.', 'Deu o nome de Lucille após resgatá-la de um incêndio causado por briga por uma mulher.', 'أنقذ غيتاره من حريق نشب بسبب شجار حول امرأة تدعى لوسيل فأطلق اسمها عليه.']
  },
  {
    id: 'diasp_219',
    diff: 1,
    q: ['Quelle fleur blanche la chanteuse de jazz Billie Holiday portait-elle toujours dans ses cheveux ?', 'Which white flower did jazz singer Billie Holiday famously pin in her hair for concerts?', '¿Qué flor blanca llevaba siempre la cantante de jazz Billie Holiday en el pelo?', 'Qual flor branca a cantora de jazz Billie Holiday sempre usava no cabelo?', 'ما هي الزهرة البيضاء التي كانت تضعها أسطورة الجاز بيلي هوليداي في شعرها؟'],
    c: ['Un gardénia blanc', 'A white gardenia', 'Una gardenia blanca', 'Uma gardênia branca', 'زهرة الغردينيا البيضاء'],
    d: [
      ['Une rose rouge', 'A red rose', 'Una rosa roja', 'Uma rosa vermelha', 'وردة حمراء'],
      ['Une tulipe jaune', 'A yellow tulip', 'Un tulipán amarillo', 'Uma tulipa amarela', 'زهرة توليب صفراء'],
      ['Une fleur de tournesol', 'A sunflower', 'Un girasol', 'Um girassol', 'دوار الشمس']
    ],
    exp: ['Ce gardénia blanc parfumé était sa signature visuelle sur toutes les scènes de jazz.', 'The fragrant white gardenia became her unmistakable visual trademark on stage.', 'Esa gardenia blanca se convirtió en su sello inconfundible en todos los escenarios.', 'A gardênia branca virou sua marca registrada inconfundível nos palcos.', 'أصبحت زهرة الغردينيا البيضاء علامتها المميزة في جميع حفلاتها الموسيقية.']
  },
  {
    id: 'diasp_220',
    diff: 2,
    q: ['Quel poème tragique chanté par Billie Holiday dénonçait les lynchages sous le nom de fruits étranges ?', 'Which haunting protest song by Billie Holiday condemned Southern lynchings as strange fruit?', '¿Qué trágica canción de Billie Holiday denunciaba los linchamientos como frutos extraños?', 'Qual canção comovente de Billie Holiday denunciava os linchamentos como frutos estranhos?', 'ما اسم الأغنية الحزينة التي نددت بها بيلي هوليداي بجرائم الشنق واصفة الضحايا بـ "الثمار الغريبة"؟'],
    c: ['Strange Fruit', 'Strange Fruit', 'Strange Fruit', 'Strange Fruit', 'Strange Fruit (ثمار غريبة)'],
    d: [
      ['Blue Moon', 'Blue Moon', 'Blue Moon', 'Blue Moon', 'Blue Moon'],
      ['Summertime', 'Summertime', 'Summertime', 'Summertime', 'Summertime'],
      ['Fly Me to the Moon', 'Fly Me to the Moon', 'Fly Me to the Moon', 'Fly Me to the Moon', 'Fly Me to the Moon']
    ],
    exp: ['Les fruits étranges suspendus aux peupliers étaient les corps des Noirs lynchés dans le Sud.', 'The "strange fruit hanging from the poplar trees" were the bodies of lynched Black Americans.', 'Los frutos extraños que colgaban de los árboles eran los cuerpos de hombres negros linchados.', 'Os frutos estranhos eram os corpos de homens negros linchados no Sul.', 'كانت "الثمار الغريبة المعلقة على الأشجار" ترمز إلى جثامين السود الذين تعرضوا للشنق في الجنوب.']
  }
];

// Add 80 more specific music questions (221 to 300)
const topicsPart3 = [
  { id: '221', q: 'Quelle chanteuse a interprété la chanson d’amour At Last avec une voix chaleureuse et puissante ?', c: 'Etta James', d: ['Aretha Franklin', 'Diana Ross', 'Tina Turner'], exp: 'Cette chanson est devenue l’une des plus jouées lors des mariages dans le monde.' },
  { id: '222', q: 'Quelle chanteuse de jazz était surnommée La Première Dame de la Chanson et imitait les trompettes en scat ?', c: 'Ella Fitzgerald', d: ['Billie Holiday', 'Sarah Vaughan', 'Dinah Washington'], exp: 'Elle a remporté 14 Grammy Awards au cours de sa formidable carrière.' },
  { id: '223', q: 'Quel saxophoniste de jazz a composé l’album spirituel A Love Supreme en 1964 ?', c: 'John Coltrane', d: ['Charlie Parker', 'Sonny Rollins', 'Wayne Shorter'], exp: 'Il a composé cet album de quatre mouvements pour remercier Dieu de l’avoir sauvé de ses addictions.' },
  { id: '224', q: 'Quel trompettiste de jazz a enregistré l’album légendaire Kind of Blue en 1959 ?', c: 'Miles Davis', d: ['Louis Armstrong', 'Dizzy Gillespie', 'Chet Baker'], exp: 'Kind of Blue est considéré comme le disque de jazz le plus vendu et le plus influent de l’histoire.' },
  { id: '225', q: 'Quel accessoire métallique Miles Davis mettait-il dans sa trompette pour lui donner un son feutré et intime ?', c: 'Une sourdine Harmon', d: ['Un mouchoir en soie', 'Un bouchon en liège', 'Un morceau de bois'], exp: 'Ce son chuchoté avec sa sourdine est devenu sa signature immédiatement reconnaissable.' },
  { id: '226', q: 'Quel chef d’orchestre de jazz de Harlem a composé Take the A Train et Mood Indigo ?', c: 'Duke Ellington', d: ['Count Basie', 'Cab Calloway', 'Fletcher Henderson'], exp: 'Son grand orchestre de jazz a joué pendant des décennies au célèbre Cotton Club.' },
  { id: '227', q: 'Quel chanteur de jazz déjanté chantait Minnie the Moocher avec le refrain Hi-de-hi-de-hi-di-ho ?', c: 'Cab Calloway', d: ['Duke Ellington', 'Louis Armstrong', 'Fats Waller'], exp: 'Il portait un habit blanc à queue-de-pie et dansait avec une énergie folle.' },
  { id: '228', q: 'Quel pianiste aveugle a chanté Unforgettable en duo virtuel avec sa fille Natalie Cole ?', c: 'Nat King Cole', d: ['Ray Charles', 'Stevie Wonder', 'Fats Domino'], exp: 'Sa voix de velours a conquis des millions de foyers à la radio et à la télévision.' },
  { id: '229', q: 'Quel chanteur de la Nouvelle-Orléans a rendu célèbre le rock au piano avec Blueberry Hill ?', c: 'Fats Domino', d: ['Little Richard', 'Chuck Berry', 'Jerry Lee Lewis'], exp: 'Avec son sourire rond et son piano boogie-woogie, il a vendu des dizaines de millions de disques.' },
  { id: '230', q: 'Quel pionnier du rock a inventé la marche du canard (Duck Walk) en jouant de la guitare ?', c: 'Chuck Berry', d: ['Bo Diddley', 'Little Richard', 'B.B. King'], exp: 'Il sautillait sur une jambe tout en pliant l’autre sans jamais s’arrêter de jouer.' },
  { id: '231', q: 'Quel morceau de guitare de Chuck Berry a été envoyé dans l’espace sur le disque d’or de la sonde Voyager ?', c: 'Johnny B. Goode', d: ['Roll Over Beethoven', 'Maybellene', 'Sweet Little Sixteen'], exp: 'C’est le seul morceau de rock choisi pour représenter la musique humaine auprès des extraterrestres.' },
  { id: '232', q: 'Quel chanteur noir criait A-wop-bop-a-loo-bop au début de son tube Tutti Frutti en 1955 ?', c: 'Little Richard', d: ['Chuck Berry', 'Fats Domino', 'James Brown'], exp: 'Ses cris sauvages et son jeu de piano debout ont posé les bases explosives du rock.' },
  { id: '233', q: 'Quelle reine du rock’n’roll chantait The Best après avoir fui un mari violent pour reconstruire sa vie ?', c: 'Tina Turner', d: ['Aretha Franklin', 'Diana Ross', 'Donna Summer'], exp: 'À 44 ans, son retour triomphal a rempli les stades du monde entier jusqu’à plus de 70 ans.' },
  { id: '234', q: 'Quelle reine du disco a fait danser la planète avec Hot Stuff et I Feel Love dans les années 70 ?', c: 'Donna Summer', d: ['Gloria Gaynor', 'Diana Ross', 'Chaka Khan'], exp: 'Elle a été la première artiste à classer trois doubles albums consécutifs numéro 1 aux États-Unis.' },
  { id: '235', q: 'Quelle chanteuse a chanté l’hymne de survie et de fierté I Will Survive en 1978 ?', c: 'Gloria Gaynor', d: ['Donna Summer', 'Tina Turner', 'Aretha Franklin'], exp: 'Ce tube mondial a été repris en France comme hymne de la victoire des Bleus en 1998.' },
  { id: '236', q: 'Quel groupe de filles dirigé par Diana Ross a accumulé 12 numéros 1 chez Motown dans les années 60 ?', c: 'The Supremes', d: ['The Marvelettes', 'The Ronettes', 'Destiny’s Child'], exp: 'Avec Baby Love et Stop! In the Name of Love, elles rivalisaient en popularité avec les Beatles.' },
  { id: '237', q: 'Quelle maison de disques fondée par Berry Gordy à Détroit portait le surnom de Hitsville USA ?', c: 'La Motown', d: ['Stax Records', 'Def Jam', 'Atlantic Records'], exp: 'Motown a fait triompher les chanteurs noirs au sommet des hit-parades américains.' },
  { id: '238', q: 'Quel chanteur de Motown a chanté l’album écologique et pacifiste What’s Going On en 1971 ?', c: 'Marvin Gaye', d: ['Stevie Wonder', 'Smokey Robinson', 'David Ruffin'], exp: 'Il dénonçait la guerre du Vietnam, la pollution des océans et la souffrance des enfants.' },
  { id: '239', q: 'Quel chanteur de soul a écrit la chanson pour les droits civiques A Change Is Gonna Come en 1964 ?', c: 'Sam Cooke', d: ['Otis Redding', 'Al Green', 'Wilson Pickett'], exp: 'Inspiré par Bob Dylan et les humiliations du racisme, il chantait qu’un changement allait venir.' },
  { id: '240', q: 'Quel chanteur de soul a composé Sittin’ on the Dock of the Bay au bord de l’eau à San Francisco ?', c: 'Otis Redding', d: ['Sam Cooke', 'Wilson Pickett', 'Percy Sledge'], exp: 'Il est mort tragiquement dans un accident d’avion quelques jours avant la sortie du disque.' },
  { id: '241', q: 'Quelle chanteuse à la voix d’or a vendu des millions de disques avec la bande originale du film Bodyguard ?', c: 'Whitney Houston', d: ['Mariah Carey', 'Céline Dion', 'Toni Braxton'], exp: 'Sa reprise de « I Will Always Love You » de Dolly Parton a battu tous les records d’écoute.' },
  { id: '242', q: 'Quelle chanteuse aux cinq octaves a débuté avec le tube Vision of Love et chante All I Want for Christmas ?', c: 'Mariah Carey', d: ['Whitney Houston', 'Beyoncé', 'Alicia Keys'], exp: 'Elle a classé 19 chansons à la première place du classement américain Billboard.' },
  { id: '243', q: 'Quel DJ d’origine jamaïcaine a inventé le hip-hop lors d’une fête de quartier dans le Bronx en 1973 ?', c: 'DJ Kool Herc', d: ['Grandmaster Flash', 'Afrika Bambaataa', 'DJ Premier'], exp: 'Il isolait les pauses de batterie (les breaks) sur deux platines pour faire danser les jeunes.' },
  { id: '244', q: 'Quel groupe a sorti le tout premier grand tube de rap Rapper’s Delight en 1979 ?', c: 'The Sugarhill Gang', d: ['Run-DMC', 'Grandmaster Flash', 'Public Enemy'], exp: 'Leur refrain chanté au micro a fait entrer le rap dans les radios du monde entier.' },
  { id: '245', q: 'Quel groupe de hip-hop a chanté le quotidien dur du ghetto new-yorkais dans The Message en 1982 ?', c: 'Grandmaster Flash and the Furious Five', d: ['Run-DMC', 'Beastie Boys', 'N.W.A'], exp: 'La phrase « Don’t push me ’cause I’m close to the edge » est devenue légendaire.' },
  { id: '246', q: 'Quel groupe de rap de New York portait des chapeaux noirs Fedora et des baskets Adidas sans lacets ?', c: 'Run-DMC', d: ['LL Cool J', 'Public Enemy', 'Beastie Boys'], exp: 'Leur chanson My Adidas a été le premier partenariat officiel entre une marque de sport et des rappeurs.' },
  { id: '247', q: 'Quel groupe de rap engagé emmené par Chuck D avait pour slogan Fight the Power en 1989 ?', c: 'Public Enemy', d: ['N.W.A', 'A Tribe Called Quest', 'De La Soul'], exp: 'Leur musique puissante dénonçait les injustices raciales et les médias corrompus.' },
  { id: '248', q: 'Quel membre de Public Enemy portait une immense horloge suspendue autour du cou ?', c: 'Flavor Flav', d: ['Chuck D', 'Terminator X', 'Professor Griff'], exp: 'Il disait que cette horloge rappelait que le temps passe et qu’il faut savoir quelle heure il est pour agir.' },
  { id: '249', q: 'Quel groupe de rap de Compton en Californie réunissait Dr. Dre, Ice Cube et Eazy-E ?', c: 'N.W.A', d: ['Cypress Hill', 'Snoop Dogg', 'Outkast'], exp: 'Leur album Straight Outta Compton a raconté la réalité brutale des rues de Californie.' },
  { id: '250', q: 'Quel producteur de Compton a créé le son G-Funk et a lancé les carrières de Snoop Dogg et Eminem ?', c: 'Dr. Dre', d: ['Suge Knight', 'Diddy', 'Timbaland'], exp: 'Il a aussi fondé la célèbre marque de casques audio Beats vendue à Apple.' },
  { id: '251', q: 'Quel rappeur poète de la côte Ouest portait le tatouage Thug Life sur le ventre ?', c: 'Tupac Shakur (2Pac)', d: ['The Notorious B.I.G.', 'Nas', 'Jay-Z'], exp: 'Fils d’une militante des Black Panthers, ses chansons parlaient de pauvreté, d’amour et d’espoir.' },
  { id: '252', q: 'Quel rappeur géant de Brooklyn surnommé Biggie Smalls a chanté Juicy et Hypnotize ?', c: 'The Notorious B.I.G.', d: ['2Pac', 'Puff Daddy', 'Busta Rhymes'], exp: 'Son flow coulé et ses récits de vie à New York en ont fait une légende du rap.' },
  { id: '253', q: 'Quel rappeur de Brooklyn devenu milliardaire a fondé la société de divertissement Roc Nation ?', c: 'Jay-Z', d: ['Kanye West', '50 Cent', 'P. Diddy'], exp: 'Parti des logements sociaux de Marcy Projects, il est l’un des plus grands entrepreneurs de la musique.' },
  { id: '254', q: 'Quel groupe féminin de Houston comptait Beyoncé Knowles comme chanteuse principale ?', c: 'Destiny’s Child', d: ['TLC', 'En Vogue', 'SWV'], exp: 'Avec Survivor et Say My Name, le trio a vendu des dizaines de millions d’albums.' },
  { id: '255', q: 'Sur quelle île des Caraïbes la star mondiale de la musique et femme d’affaires Rihanna est-elle née ?', c: 'La Barbade', d: ['La Jamaïque', 'Sainte-Lucie', 'Trinité'], exp: 'Elle a été proclamée héroïne nationale de la Barbade par la Première ministre de son île.' },
  { id: '256', q: 'Quel objet de pluie a donné son titre au tube planétaire de Rihanna en duo avec Jay-Z en 2007 ?', c: 'Un parapluie (Umbrella)', d: ['Des bottes en caoutchouc', 'Un ciré jaune', 'Un imperméable'], exp: 'Le refrain « Under my umbrella, ella, ella » a tourné en boucle sur toutes les radios.' },
  { id: '257', q: 'Quel groupe réunissant Lauryn Hill, Wyclef Jean et Pras Michel chantait Killing Me Softly ?', c: 'The Fugees', d: ['The Roots', 'Black Eyed Peas', 'Fugees 99'], exp: 'Leur nom Fugees venait de refugees (réfugiés) en référence aux Haïtiens arrivant en Floride.' },
  { id: '258', q: 'Quel album mythique de Lauryn Hill sorti en 1998 a remporté 5 Grammy Awards en une seule soirée ?', c: 'The Miseducation of Lauryn Hill', d: ['The Score', 'Dangerously in Love', 'Baduizm'], exp: 'Elle a été la première femme à remporter autant de trophées dans une même cérémonie.' },
  { id: '259', q: 'Quel rappeur de Compton a été le premier artiste hip-hop à remporter le prix Pulitzer en 2018 ?', c: 'Kendrick Lamar', d: ['J. Cole', 'Drake', 'Nas'], exp: 'Son album DAMN. a été salué pour sa poésie et sa description de la vie des jeunes Noirs en Amérique.' },
  { id: '260', q: 'Quel rappeur canadien né à Toronto a battu les records d’écoute en streaming sur Spotify ?', c: 'Drake', d: ['The Weeknd', 'Tory Lanez', 'Partynextdoor'], exp: 'Fils d’un musicien afro-américain de Memphis et d’une mère canadienne, il domine les charts.' },
  { id: '261', q: 'Quelle chanteuse soul coiffée d’un haut turban vert a lancé le mouvement néo-soul avec Baduizm ?', c: 'Erykah Badu', d: ['Jill Scott', 'Lauryn Hill', 'India.Arie'], exp: 'Sa musique mêlait les rythmes hip-hop à la sensibilité jazz de Billie Holiday.' },
  { id: '262', q: 'Quelle pianiste et chanteuse de New York a triomphé à 20 ans avec la chanson Fallin’ en 2001 ?', c: 'Alicia Keys', d: ['Norah Jones', 'Mary J. Blige', 'Beyoncé'], exp: 'Virtuose du piano classique depuis l’enfance, elle a vendu des dizaines de millions de disques.' },
  { id: '263', q: 'Quelle reine du hip-hop soul a chanté Family Affair et a chanté au Super Bowl 2022 ?', c: 'Mary J. Blige', d: ['Faith Evans', 'Missy Elliott', 'Queen Latifah'], exp: 'Ses chansons touchaient le cœur des femmes des quartiers populaires racontant leurs peines et espoirs.' },
  { id: '264', q: 'Quelle pionnière du rap déguisée en sac poubelle gonflé chantait The Rain (Supa Dupa Fly) ?', c: 'Missy Elliott', d: ['Lil’ Kim', 'Foxy Brown', 'Nicki Minaj'], exp: 'Ses clips vidéo futuristes ont révolutionné l’image des femmes dans le hip-hop.' },
  { id: '265', q: 'Quelle rappeuse née à Trinité-et-Tobago est devenue la reine des charts avec Super Bass ?', c: 'Nicki Minaj', d: ['Cardi B', 'Megan Thee Stallion', 'Doja Cat'], exp: 'Elle a battu le record du plus grand nombre d’entrées au classement américain pour une femme.' },
  { id: '266', q: 'Quelle rappeuse du Bronx d’origine dominicaine et trinidadienne a triomphé avec Bodak Yellow ?', c: 'Cardi B', d: ['Nicki Minaj', 'Ice Spice', 'City Girls'], exp: 'Elle est devenue la première rappeuse solo numéro 1 aux États-Unis en vingt ans.' },
  { id: '267', q: 'Quel genre musical d’origine nigériane réunissant Burna Boy, Wizkid et Davido fait danser la planète ?', c: 'L’Afrobeats', d: ['Le zouk', 'La kizomba', 'La samba'], exp: 'Né des rythmes traditionnels yorubas et du hip-hop, il remplit les plus grands stades mondiaux.' },
  { id: '268', q: 'Quel musicien nigérian a inventé l’Afrobeat dans les années 70 avec son groupe Africa 70 ?', c: 'Fela Kuti', d: ['King Sunny Adé', 'Femi Kuti', 'Burna Boy'], exp: 'Il chantait contre la corruption des militaires et a fondé la République indépendante de Kalakuta.' },
  { id: '269', q: 'Quel instrument à vent Fela Kuti jouait-il avec énergie sur scène ?', c: 'Le saxophone', d: ['La flûte traversière', 'Le trombone', 'Le tuba'], exp: 'Il dirigeait son grand orchestre pendant des concerts de plusieurs heures à Lagos.' },
  { id: '270', q: 'Quelle chanteuse sud-africaine surnommée Mama Africa chantait la chanson à clics Pata Pata ?', c: 'Miriam Makeba', d: ['Brenda Fassie', 'Yvonne Chaka Chaka', 'Lira'], exp: 'Exilée pendant 30 ans, elle a témoigné contre l’apartheid à la tribune des Nations Unies.' },
  { id: '271', q: 'Quel trompettiste sud-africain a lutté en exil contre l’apartheid et chanté Grazing in the Grass ?', c: 'Hugh Masekela', d: ['Abdullah Ibrahim', 'Dollar Brand', 'Lucky Dube'], exp: 'Son hymne Bring Him Back Home réclamait la libération de Nelson Mandela.' },
  { id: '272', q: 'Quel chanteur de reggae sud-africain a été assassiné à Johannesburg après avoir chanté contre l’injustice ?', c: 'Lucky Dube', d: ['Bob Marley', 'Peter Tosh', 'Alpha Blondy'], exp: 'Ses albums comme Slave ou Prisoner ont touché des millions de cœurs à travers l’Afrique.' },
  { id: '273', q: 'Quel chanteur de reggae ivoirien a chanté Brigadier Sabari et prône la paix en Afrique ?', c: 'Alpha Blondy', d: ['Tiken Jah Fakoly', 'Ismaël Isaac', 'Serge Kassi'], exp: 'Il chante en dioula, en français, en anglais, en arabe et en hébreu pour unir les peuples.' },
  { id: '274', q: 'Quel chanteur ivoirien de reggae engagé a été forcé de s’exiler au Mali pour ses critiques politiques ?', c: 'Tiken Jah Fakoly', d: ['Alpha Blondy', 'Meiway', 'Arafat DJ'], exp: 'Il répète souvent : « Le pouvoir est dans la rue, réveillez-vous ! ».' },
  { id: '275', q: 'Quel saxophoniste camerounais a vu son refrain Soul Makossa samplé par Michael Jackson dans Thriller ?', c: 'Manu Dibango', d: ['Francis Bebey', 'Richard Bona', 'Eboa Lotin'], exp: 'Le refrain « Mama-ko, mama-sa, maka-mako-sa » a fait le tour du monde entier.' },
  { id: '276', q: 'Quelle chanteuse du Cap-Vert était surnommée la Diva aux pieds nus car elle montait sur scène déchaussée ?', c: 'Cesária Évora', d: ['Mayra Andrade', 'Lura', 'Sara Tavares'], exp: 'Elle chantait la morna triste et nostalgique en hommage aux pauvres de son île natale.' },
  { id: '277', q: 'Dans quelle île du Cap-Vert Cesária Évora est-elle née et a chanté Sodade ?', c: 'São Vicente (Mindelo)', d: ['Santiago', 'Sal', 'Boa Vista'], exp: 'La ville de Mindelo est connue comme la capitale culturelle et musicale de l’archipel.' },
  { id: '278', q: 'Quel chanteur sénégalais de renommée mondiale chante avec Peter Gabriel et a composé 7 Seconds ?', c: 'Youssou N’Dour', d: ['Baaba Maal', 'Ismaël Lô', 'Cheikh Lô'], exp: 'Il a popularisé le rythme mbalax et ses tambours sabars sur les scènes internationales.' },
  { id: '279', q: 'Quel guitariste malien aveugle chantait en duo d’amour avec son épouse Mariam ?', c: 'Amadou Bagayoko (Amadou et Mariam)', d: ['Ali Farka Touré', 'Salif Keïta', 'Boubacar Traoré'], exp: 'Leur tube « Dimanche à Bamako » a fait danser les festivals de musique du monde.' },
  { id: '280', q: 'Quel chanteur malien descendant de Soundiata Keïta est surnommé la Voix d’or de l’Afrique ?', c: 'Salif Keïta', d: ['Mory Kanté', 'Ali Farka Touré', 'Toumani Diabaté'], exp: 'Atteint d’albinisme, il s’est battu contre les préjugés et a fondé une association d’aide.' },
  { id: '281', q: 'Quel chanteur guinéen joueur de kora a signé le premier tube africain vendu à un million d’exemplaires en Europe avec Yéké Yéké ?', c: 'Mory Kanté', d: ['Salif Keïta', 'Sekouba Bambino', 'Kandia Kouyaté'], exp: 'En 1987, Yéké Yéké a été le premier titre africain numéro 1 des hit-parades européens.' },
  { id: '282', q: 'De quel instrument à 21 cordes en calebasse Toumani Diabaté était-il le maître absolu au Mali ?', c: 'La kora', d: ['Le balafon', 'Le djembé', 'Le ngoni'], exp: 'Héritier de 71 générations de griots, il a fait voyager la kora dans les orchestres symphoniques.' },
  { id: '283', q: 'Quel bluesman malien de Niafunké a enregistré des disques magiques avec le guitariste américain Ry Cooder ?', c: 'Ali Farka Touré', d: ['Vieux Farka Touré', 'Habib Koité', 'Boubacar Traoré'], exp: 'Leur album Talking Timbuktu a prouvé que le blues du Mississippi descendait des rives du fleuve Niger.' },
  { id: '284', q: 'Quel guitariste et bassiste camerounais virtuose chante en douala et a enseigné à l’université de New York ?', c: 'Richard Bona', d: ['Etienne Mbappé', 'Manu Dibango', 'Guy N’Sangué'], exp: 'Sa technique incroyable sur la guitare basse est admirée par les plus grands jazzmen du monde.' },
  { id: '285', q: 'Quel chanteur congolais à la voix suave est surnommé Dicap la Merveille et remplit les grandes salles européennes ?', c: 'Fally Ipupa', d: ['Koffi Olomidé', 'Ferre Gola', 'Werrason'], exp: 'Il fait briller la rumba congolaise moderne avec son style élégant et ses chorégraphies.' },
  { id: '286', q: 'Quel chanteur congolais vêtu de haute couture a créé la SAPE et a chanté avec le groupe Viva La Musica ?', c: 'Papa Wemba', d: ['Tabu Ley Rochereau', 'Franco Luambo', 'Pepe Kalle'], exp: 'Surnommé le roi de la rumba et de la SAPE, il est mort sur scène à Abidjan en 2016.' },
  { id: '287', q: 'Que signifie l’abréviation des élégants de Kinshasa et Brazzaville appelés les SAPEURS ?', c: 'Société des Ambianceurs et des Personnes Élégantes', d: ['Société des Amis de Paris et d’Europe', 'Syndicat des Acteurs Professionnels Étoilés', 'Société des Artistes Passionnés d’Élégance'], exp: 'Les sapeurs défilent dans les rues avec des costumes de grands couturiers et un art de vivre joyeux.' },
  { id: '288', q: 'Quelle reine de la chanson béninoise a remporté 5 Grammy Awards et chante avec fierté en fon, yoruba et français ?', c: 'Angélique Kidjo', d: ['Oumou Sangaré', 'Fatoumata Diawara', 'Aïcha Koné'], exp: 'Elle a repris l’album Remain in Light des Talking Heads en y injectant les rythmes de son enfance à Cotonou.' },
  { id: '289', q: 'Quelle cantatrice malienne du Wassoulou milite contre les mariages forcés et a chanté à l’opéra ?', c: 'Oumou Sangaré', d: ['Rokia Traoré', 'Fatoumata Diawara', 'Nahawa Doumbia'], exp: 'Femme d’affaires et artiste respectée, elle défend la liberté et l’autonomie des femmes africaines.' },
  { id: '290', q: 'Quel artiste et chanteur de reggae de Côte d’Ivoire est célèbre pour son titre Premier Gaou avec Magic System ?', c: 'A’Salfo', d: ['Tiken Jah', 'Meiway', 'Molare'], exp: 'A’Salfo a fondé le FEMUA, le plus grand festival de musique gratuit pour les enfants d’Anoumabo.' },
  { id: '291', q: 'Quel genre de musique et danse de rue festive a été créé à Abidjan par Douk Saga au début des années 2000 ?', c: 'Le Coupé-Décalé', d: ['Le Zouglou', 'L’Amapiano', 'Le Makossa'], exp: 'Douk Saga et la Jet Set distribuaient des billets de banque dans les boîtes de nuit pour donner de la joie.' },
  { id: '292', q: 'Quel roi de la musique électronique sud-africaine a gagné le Grammy Award du meilleur album dance en 2022 ?', c: 'Black Coffee', d: ['Master KG', 'DJ Maphorisa', 'Kabza De Small'], exp: 'Ce DJ de Durban qui mixe d’un seul bras après un accident d’enfance remplit les plus grands clubs d’Ibiza.' },
  { id: '293', q: 'Quel producteur sud-africain a fait danser le monde entier pendant le confinement de 2020 avec la chanson Jerusalema ?', c: 'Master KG', d: ['Black Coffee', 'DJ Lag', 'Musa Keys'], exp: 'La chanson chantée en zoulou par Nomcebo Zikode a été vue plus de 500 millions de fois sur YouTube.' },
  { id: '294', q: 'Quelle jeune chanteuse sud-africaine a remporté le premier Grammy de la musique africaine en 2024 avec Water ?', c: 'Tyla', d: ['Sho Madjozi', 'Makhadzi', 'Ayra Starr'], exp: 'Sa danse où elle verse de l’eau sur son dos est devenue virale sur tous les réseaux sociaux.' },
  { id: '295', q: 'Quelle chanteuse nigériane a co-écrit la chanson de Rihanna pour le film Black Panther et chante Free Mind ?', c: 'Tems', d: ['Tiwa Savage', 'Yemi Alade', 'Simi'], exp: 'Elle a remporté un Grammy en 2023 pour sa collaboration avec Future et Drake.' },
  { id: '296', q: 'Quel jeune chanteur nigérian de 23 ans a fait le tour du monde avec sa chanson Calm Down avec Selena Gomez ?', c: 'Rema', d: ['Fireboy DML', 'Omah Lay', 'Asake'], exp: 'Né à Benin City, il est le premier chanteur africain à dépasser un milliard d’écoutes sur Spotify.' },
  { id: '297', q: 'Quel chanteur nigérian surnommé African Giant a rempli le stade de Londres et remporté un Grammy avec Twice as Tall ?', c: 'Burna Boy', d: ['Wizkid', 'Davido', 'Tekno'], exp: 'Il mélange les rythmes de Fela Kuti avec le dancehall jamaïcain et le hip-hop.' },
  { id: '298', q: 'Quel chanteur nigérian a chanté le tube mondial Essence avec Tems, surnommé Starboy ?', c: 'Wizkid', d: ['Davido', 'Burna Boy', 'CKay'], exp: 'Originaire d’Ojuelegba à Lagos, il a collaboré avec Drake sur le titre planétaire One Dance.' },
  { id: '299', q: 'Quel chanteur nigérian né à Atlanta a fait chanter tout le monde avec Fall et a chanté en finale de la Coupe du monde 2022 ?', c: 'Davido', d: ['Wizkid', 'Burna Boy', 'Ruger'], exp: 'Sa devise généreuse est : « We rise by lifting others » (On s’élève en aidant les autres).' },
  { id: '300', q: 'Quel chanteur nigérian a fait un carton mondial avec sa chanson d’amour Love Nwantiti reprise sur TikTok ?', c: 'CKay', d: ['Joeboy', 'Kizz Daniel', 'Oxlade'], exp: 'La chanson en langue igbo et pidgin a été certifiée disque de platine dans des dizaines de pays.' },
];

for (const t of topicsPart3) {
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

writePartFile('diasporaPart3.ts', 'DIASPORA_PART_3', items);

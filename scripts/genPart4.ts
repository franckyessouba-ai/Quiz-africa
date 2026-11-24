import { QTuple, writePartFile } from './diasporaWriter';

const items: QTuple[] = [
  {
    id: 'diasp_301',
    diff: 1,
    q: ['Quel général noir a mené la grande révolution d’Haïti contre l’esclavage ?', 'Which Black general led the historic Haitian revolution against slavery?', '¿Qué general negro lideró la gran revolución de Haití contra la esclavitud?', 'Qual general negro liderou a grande revolução do Haiti contra a escravidão?', 'أي جنرال أسود قاد ثورة هايتي التاريخية العظيمة ضد العبودية؟'],
    c: ['Toussaint Louverture', 'Toussaint Louverture', 'Toussaint Louverture', 'Toussaint Louverture', 'توسان لوفرتور (Toussaint Louverture)'],
    d: [
      ['Jean Moulin', 'Jean Moulin', 'Jean Moulin', 'Jean Moulin', 'جان مولان'],
      ['Napoléon Bonaparte', 'Napoleon Bonaparte', 'Napoleón Bonaparte', 'Napoleão Bonaparte', 'نابليون بونابرت'],
      ['Simón Bolívar', 'Simón Bolívar', 'Simón Bolívar', 'Simón Bolívar', 'سيمون بوليفار']
    ],
    exp: ['Ancien esclave devenu général, il a vaincu les armées anglaises et espagnoles.', 'An enslaved man who became a brilliant general, he defeated British and Spanish armies.', 'Antiguo esclavo que llegó a general, derrotó a tropas británicas y españolas.', 'Ex-escravizado que virou general, derrotou tropas britânicas e espanholas.', 'عبد سابق تحول إلى قائد عسكري بارع وهزم الجيوش البريطانية والإسبانية.']
  },
  {
    id: 'diasp_302',
    diff: 1,
    q: ['Dans quel fort des montagnes du Jura en France Toussaint Louverture est-il mort emprisonné en 1803 ?', 'In which mountain fortress in France did Toussaint Louverture die imprisoned in 1803?', '¿En qué fuerte de Francia murió encarcelado Toussaint Louverture en 1803?', 'Em qual fortaleza na França Toussaint Louverture morreu preso em 1803?', 'في أي حصن بفرنسا توفي توسان لوفرتور أسيراً في البرد القارس عام 1803؟'],
    c: ['Le fort de Joux', 'Fort de Joux', 'El fuerte de Joux', 'O forte de Joux', 'حصن جو (Fort de Joux)'],
    d: [
      ['La Bastille', 'The Bastille', 'La Bastilla', 'A Bastilha', 'سجن الباستيل'],
      ['Le fort Boyard', 'Fort Boyard', 'El fuerte Boyard', 'O forte Boyard', 'حصن بويار'],
      ['Le château d’If', 'Château d’If', 'El castillo de If', 'O castelo de If', 'قلعة إيف']
    ],
    exp: ['Arrêté par trahison, Napoléon l’a enfermé dans une cellule glaciale sans procès.', 'Lured into a trap, Napoleon ordered him held without trial in freezing isolation.', 'Capturado a traición, Napoleón lo encerró en una celda helada sin juicio.', 'Preso por traição, Napoleão o manteve em cela gelada sem julgamento.', 'اعتُقل غدراً وحبسه نابليون في زنزانة متجمدة بجبال جورا دون محاكمة.']
  },
  {
    id: 'diasp_303',
    diff: 1,
    q: ['Quel général noir a proclamé l’indépendance d’Haïti le 1er janvier 1804 ?', 'Which Black general proclaimed Haiti’s independence on January 1, 1804?', '¿Qué general negro proclamó la independencia de Haití el 1 de enero de 1804?', 'Qual general negro proclamou a independência do Haiti em 1º de janeiro de 1804?', 'أي جنرال أسود أعلن استقلال دولة هايتي في 1 يناير 1804؟'],
    c: ['Jean-Jacques Dessalines', 'Jean-Jacques Dessalines', 'Jean-Jacques Dessalines', 'Jean-Jacques Dessalines', 'جان جاك ديسالين (Dessalines)'],
    d: [
      ['Henri Christophe', 'Henri Christophe', 'Henri Christophe', 'Henri Christophe', 'هنري كريستوف'],
      ['Alexandre Pétion', 'Alexandre Pétion', 'Alexandre Pétion', 'Alexandre Pétion', 'ألكسندر بيتيون'],
      ['Dutty Boukman', 'Dutty Boukman', 'Dutty Boukman', 'Dutty Boukman', 'دوتي بوكمان']
    ],
    exp: ['Haïti est devenue la première république noire libre de toute l’histoire du monde.', 'Haiti became the world’s first independent Black republic.', 'Haití se convirtió en la primera república negra libre de la historia.', 'O Haiti virou a primeira república negra livre de toda a história.', 'أصبحت هايتي أول جمهورية سوداء حرة في تاريخ العالم بأسره.']
  },
  {
    id: 'diasp_304',
    diff: 2,
    q: ['Quelle bataille décisive de novembre 1803 a vu les troupes haïtiennes battre définitivement l’armée française ?', 'Which decisive battle in November 1803 saw Haitian troops defeat Napoleon’s army?', '¿Qué batalla decisiva de 1803 vio a las tropas haitianas vencer al ejército francés?', 'Qual batalha decisiva em 1803 viu as tropas haitianas derrotarem o exército francês?', 'ما هي المعركة الحاسمة في نوفمبر 1803 التي هزمت فيها القوات الهايتية جيش نابليون؟'],
    c: ['La bataille de Vertières', 'The Battle of Vertières', 'La batalla de Vertières', 'A Batalha de Vertières', 'معركة فيرتيير (Vertières)'],
    d: [
      ['La bataille de Waterloo', 'The Battle of Waterloo', 'La batalla de Waterloo', 'A Batalha de Waterloo', 'معركة واترلو'],
      ['La bataille d’Austerlitz', 'The Battle of Austerlitz', 'La batalla de Austerlitz', 'A Batalha de Austerlitz', 'معركة أوسترليتز'],
      ['La bataille de Yorktown', 'The Battle of Yorktown', 'La batalla de Yorktown', 'A Batalha de Yorktown', 'معركة يوركتاون']
    ],
    exp: ['Le courage des soldats haïtiens a forcé le général français Rochambeau à capituler.', 'The unmatched bravery of Haitian forces forced the French army to surrender.', 'La valentía de los soldados haitianos obligó al ejército francés a capitular.', 'A coragem das tropas haitianas forçou a rendição do exército francês.', 'أجبرت شجاعة المقاتلين الهايتيين الجيش الفرنسي بقيادة روشامبو على الاستسلام.']
  },
  {
    id: 'diasp_305',
    diff: 2,
    q: ['Dans quel lieu secret une cérémonie vaudou a-t-elle réuni les esclaves pour lancer la révolte d’Haïti en 1791 ?', 'At which secret site did a historic ceremony launch the Haitian revolution in 1791?', '¿En qué lugar secreto una ceremonia dio inicio a la revolución de Haití en 1791?', 'Em qual local secreto uma cerimônia histórica deu início à revolta do Haiti em 1791?', 'في أي مكان سري عُقد الاجتماع التاريخي الذي أطلق شرارة ثورة هايتي عام 1791؟'],
    c: ['Le Bois-Caïman', 'Bois Caïman', 'Bois Caïman', 'Bois Caïman', 'بوا كايمان (Bois-Caïman)'],
    d: [
      ['La montagne pelée', 'Mount Pelée', 'El monte Pelée', 'O monte Pelée', 'جبل بيليه'],
      ['La forêt enchantée', 'The Enchanted Forest', 'El bosque encantado', 'A floresta encantada', 'الغابة الساحرة'],
      ['La vallée des rois', 'The Valley of the Kings', 'El valle de los reyes', 'O vale dos reis', 'وادي الملوك']
    ],
    exp: ['Dutty Boukman y a prêté serment avec des centaines d’esclaves pour vivre libres ou mourir.', 'Dutty Boukman led hundreds in taking an oath to live free or die.', 'Dutty Boukman juró con cientos de esclavos vivir libres o morir.', 'Dutty Boukman jurou com centenas de escravizados viver livres ou morrer.', 'أقسم دوتي بوكمان مع مئات العبيد على نيل الحرية أو الموت دونها.']
  },
  {
    id: 'diasp_306',
    diff: 1,
    q: ['Quelle immense forteresse au sommet d’une montagne le roi Henri Christophe a-t-il bâtie en Haïti ?', 'Which massive mountain fortress did King Henri Christophe build in northern Haiti?', '¿Qué imponente fortaleza en la cima de una montaña construyó el rey Henri Christophe?', 'Qual enorme fortaleza no topo da montanha o rei Henri Christophe ergueu no Haiti?', 'ما هي القلعة الجبلية الضخمة التي بناها الملك هنري كريستوف في شمال هايتي؟'],
    c: ['La Citadelle Laferrière', 'Citadelle Laferrière', 'La Ciudadela Laferrière', 'A Cidadela Laferrière', 'قلعة لافيريار (Citadelle)'],
    d: [
      ['Le palais de l’Alhambra', 'The Alhambra', 'La Alhambra', 'A Alhambra', 'قصر الحمراء'],
      ['Le Colisée', 'The Colosseum', 'El Coliseo', 'O Coliseu', 'الكولوسيوم'],
      ['Le château de Versailles', 'Versailles Palace', 'El palacio de Versalles', 'O Palácio de Versalhes', 'قصر فرساي']
    ],
    exp: ['Cette merveille perchée à 900 mètres d’altitude devait protéger l’île d’une invasion.', 'Perched 3,000 feet high, it was built to protect the free republic from foreign attacks.', 'Encaramada a 900 metros de altura, debía defender al país de una invasión.', 'Situada a 900 metros de altitude, foi erguida para defender o país de ataques.', 'شُيدت على ارتفاع 900 متر لحماية الجمهورية الوليدة من أي هجوم بحري أجنبي.']
  },
  {
    id: 'diasp_307',
    diff: 2,
    q: ['Quel héros vénézuélien le président haïtien Alexandre Pétion a-t-il aidé avec des armes et des navires ?', 'Which South American liberator did Haitian President Alexandre Pétion supply with arms and ships?', '¿A qué héroe sudamericano ayudó el presidente haitiano Alexandre Pétion con armas y barcos?', 'A qual herói sul-americano o presidente haitiano Alexandre Pétion apoiou com armas e navios?', 'أي بطل لاتيني قدم له الرئيس الهايتي ألكسندر بيتيون السلاح والسفن لتحرير أمريكا الجنوبية؟'],
    c: ['Simón Bolívar', 'Simón Bolívar', 'Simón Bolívar', 'Simón Bolívar', 'سيمون بوليفار (Bolívar)'],
    d: [
      ['Che Guevara', 'Che Guevara', 'Che Guevara', 'Che Guevara', 'تشي غيفارا'],
      ['Fidel Castro', 'Fidel Castro', 'Fidel Castro', 'Fidel Castro', 'فيدل كاسترو'],
      ['Bernardo O’Higgins', 'Bernardo O’Higgins', 'Bernardo O’Higgins', 'Bernardo O’Higgins', 'برناردو أوهيغينز']
    ],
    exp: ['En échange de son aide, Pétion lui a seulement demandé de libérer tous les esclaves en Amérique du Sud.', 'In return for his support, Pétion asked only that Bolívar abolish slavery across South America.', 'A cambio de barcos y armas, Pétion solo le pidió que aboliera la esclavitud.', 'Em troca de armas e navios, Pétion pediu apenas a libertação de todos os escravizados.', 'طلب منه بيتيون في المقابل شرطاً وحيداً: تحرير جميع العبيد في أمريكا الجنوبية.']
  },
  {
    id: 'diasp_308',
    diff: 1,
    q: ['Quelle reine guerrière marronne est devenue une héroïne nationale en Jamaïque ?', 'Which fierce warrior queen became a national hero in Jamaica for leading free maroon towns?', '¿Qué reina guerrera se convirtió en heroína nacional de Jamaica?', 'Qual rainha guerreira quilombola tornou-se heroína nacional na Jamaica?', 'من هي الملكة المحاربة التي أصبحت بطلة وطنية في جامايكا لقيادتها مجتمعات الأحرار في الجبال؟'],
    c: ['Nanny des Marrons', 'Queen Nanny of the Maroons', 'Nanny de los Cimarrones', 'Nanny dos Maroons', 'الملكة ناني (Nanny of the Maroons)'],
    d: [
      ['Cléopâtre', 'Cleopatra', 'Cleopatra', 'Cleópatra', 'كليوباترا'],
      ['Reine Victoria', 'Queen Victoria', 'Reina Victoria', 'Rainha Vitória', 'الملكة فيكتوريا'],
      ['Reine Elizabeth', 'Queen Elizabeth', 'Reina Isabel', 'Rainha Elizabeth', 'الملكة إليزابيث']
    ],
    exp: ['Elle a dirigé une communauté libre dans les Blue Mountains et battu l’armée britannique.', 'She led an independent mountain settlement and outsmarted the British military.', 'Lideró una comunidad libre en las montañas y derrotó a tropas británicas.', 'Ela liderou uma comunidade livre nas montanhas e venceu tropas britânicas.', 'قادت مجتمعاً حراً في الجبال الزرقاء وهزمت الجيوش البريطانية بذكائها العسكري.']
  },
  {
    id: 'diasp_309',
    diff: 1,
    q: ['Sur quel billet de banque jamaïcain le visage de Nanny des Marrons est-il imprimé ?', 'On which Jamaican banknote does the portrait of Queen Nanny appear?', '¿En qué billete de banco jamaicano aparece el rostro de Nanny?', 'Em qual cédula jamaicana aparece o rosto de Nanny dos Maroons?', 'على أي ورقة نقدية في جامايكا تظهر صورة البطلة القومية ناني؟'],
    c: ['Le billet de 500 dollars jamaïcains', 'The 500-dollar banknote', 'El billete de 500 dólares', 'A nota de 500 dólares', 'ورقة 500 دولار جامايكي'],
    d: [
      ['Le billet de 5 dollars', 'The 5-dollar banknote', 'El billete de 5 dólares', 'A nota de 5 dólares', 'ورقة 5 دولارات'],
      ['Le billet de 20 dollars', 'The 20-dollar banknote', 'El billete de 20 dólares', 'A nota de 20 dólares', 'ورقة 20 دولاراً'],
      ['Le billet de 1 million', 'The 1-million banknote', 'El billete de 1 millón', 'A nota de 1 milhão', 'ورقة مليون']
    ],
    exp: ['Les Jamaïcains appellent souvent ce billet de 500 dollars une Nanny en son honneur.', 'Jamaicans affectionately nickname the 500-dollar bill a "Nanny".', 'En Jamaica llaman cariñosamente "Nanny" al billete de 500 dólares.', 'Na Jamaica, a nota de 500 dólares é carinhosamente chamada de "Nanny".', 'يطلق أهل جامايكا شعبياً على ورقة الـ500 دولار اسم "ناني" تكريماً لها.']
  },
  {
    id: 'diasp_310',
    diff: 2,
    q: ['Quel chef d’esclaves a mené la grande révolte de Pâques 1816 sur l’île de la Barbade ?', 'Which enslaved leader led the massive 1816 Easter rebellion in Barbados?', '¿Qué líder esclavo encabezó la gran rebelión de 1816 en Barbados?', 'Qual líder escravizado comandou a grande revolta de 1816 em Barbados?', 'من القائد الذي قاد الثورة الكبرى لتحرير العبيد في جزيرة باربادوس عام 1816؟'],
    c: ['Bussa', 'Bussa', 'Bussa', 'Bussa', 'بوسا (Bussa)'],
    d: [
      ['Marcus Garvey', 'Marcus Garvey', 'Marcus Garvey', 'Marcus Garvey', 'ماركوس غارفي'],
      ['Bob Marley', 'Bob Marley', 'Bob Marley', 'Bob Marley', 'بوب مارلي'],
      ['Toussaint Louverture', 'Toussaint Louverture', 'Toussaint Louverture', 'Toussaint Louverture', 'توسان لوفرتور']
    ],
    exp: ['Une immense statue en bronze avec des chaînes brisées se dresse en son honneur à Bridgetown.', 'A famous bronze statue with broken chains stands in his memory in Bridgetown.', 'Una estatua de bronce con cadenas rotas lo conmemora en Bridgetown.', 'Uma estátua de bronze com correntes rompidas o homenageia em Bridgetown.', 'ينتصب له تمثال برونزي شهير بسلاسل مكسورة في العاصمة بريدجتاون.']
  },
  {
    id: 'diasp_311',
    diff: 1,
    q: ['Quel grand chef guerrier a dirigé la république libre de Palmares au Brésil ?', 'Which legendary warrior king led the free quilombo republic of Palmares in Brazil?', '¿Qué gran líder guerrero dirigió la república libre de Palmares en Brasil?', 'Qual grande líder guerreiro comandou o quilombo livre de Palmares no Brasil?', 'من القائد المحارب العظيم الذي تزعم جمهورية بالماريس الحرة في البرازيل؟'],
    c: ['Zumbi dos Palmares', 'Zumbi dos Palmares', 'Zumbi dos Palmares', 'Zumbi dos Palmares', 'زومبي دوس بالماريس (Zumbi)'],
    d: [
      ['Pelé', 'Pelé', 'Pelé', 'Pelé', 'بيليه'],
      ['Tiradentes', 'Tiradentes', 'Tiradentes', 'Tiradentes', 'تيرادينتس'],
      ['Pedro Álvares Cabral', 'Pedro Álvares Cabral', 'Pedro Álvares Cabral', 'Pedro Álvares Cabral', 'كابرال']
    ],
    exp: ['Il a résisté pendant des années aux armées coloniales pour défendre la liberté des siens.', 'He fiercely defended the free settlement against colonial assaults for years.', 'Defendió durante años a su comunidad frente a las tropas coloniales.', 'Ele defendeu por anos a comunidade quilombola contra os colonizadores.', 'قاوم ببسالة هجمات الجيوش الاستعمارية لسنوات دفاعاً عن حرية قومه.']
  },
  {
    id: 'diasp_312',
    diff: 1,
    q: ['Quel jour de novembre célèbre la Conscience noire au Brésil en mémoire de Zumbi ?', 'Which day in November celebrates Black Consciousness Day in Brazil honoring Zumbi?', '¿Qué día de noviembre celebra el Día de la Conciencia Negra en Brasil?', 'Qual dia de novembro celebra o Dia da Consciência Negra no Brasil?', 'أي يوم في شهر نوفمبر يُحتفل به بيوم الوعي الأسود في البرازيل تخليداً لزومبي؟'],
    c: ['Le 20 novembre', 'November 20', '20 de noviembre', '20 de novembro', '20 نوفمبر'],
    d: [
      ['Le 1er novembre', 'November 1', '1 de noviembre', '1 de novembro', '1 نوفمبر'],
      ['Le 14 juillet', 'July 14', '14 de julio', '14 de julho', '14 يوليو'],
      ['Le 25 décembre', 'December 25', '25 de diciembre', '25 de dezembro', '25 ديسمبر']
    ],
    exp: ['C’est la date de la mort de Zumbi en 1695, devenu jour férié dans tout le pays.', 'It marks the anniversary of Zumbi’s death in 1695 and is a national holiday.', 'Conmemora la muerte de Zumbi en 1695 y es día festivo nacional.', 'Marca a data da morte de Zumbi em 1695 e é feriado nacional.', 'يوافق تاريخ استشهاده عام 1695 وأصبح عطلة وطنية رسمية في البرازيل.']
  },
  {
    id: 'diasp_313',
    diff: 2,
    q: ['Quelle guerrière courageuse, épouse de Zumbi, a préféré mourir libre que de redevenir esclave ?', 'Which fearless warrior woman and wife of Zumbi chose death over being re-enslaved?', '¿Qué valiente guerrera, esposa de Zumbi, prefirió morir libre a volver a ser esclava?', 'Qual guerreira corajosa, esposa de Zumbi, preferiu morrer livre a ser escravizada?', 'أي محاربة شجاعة وزوجة لزومبي فضلت الموت حرة على العودة إلى ذل الأسر؟'],
    c: ['Dandara dos Palmares', 'Dandara dos Palmares', 'Dandara dos Palmares', 'Dandara dos Palmares', 'داندارا دوس بالماريس (Dandara)'],
    d: [
      ['Maria Quitéria', 'Maria Quitéria', 'Maria Quitéria', 'Maria Quitéria', 'ماريا كيتيريا'],
      ['Anita Garibaldi', 'Anita Garibaldi', 'Anita Garibaldi', 'Anita Garibaldi', 'أنيتا غاريبالدي'],
      ['Princesse Isabel', 'Princess Isabel', 'Princesa Isabel', 'Princesa Isabel', 'الأميرة إيزابيل']
    ],
    exp: ['Experte en capoeira et stratège militaire, elle s’est jetée d’une falaise pour rester libre.', 'A master of martial defense, she threw herself from a cliff rather than surrender.', 'Experta en capoeira y estrategia, se arrojó al vacío para no rendirse.', 'Líder militar e capoeirista, atirou-se de um abismo para não se render.', 'كانت فارسة في الكابويرا وفضلت إلقاء نفسها من الجبل على أن تقع أسيرة في أيدي الغزاة.']
  },
  {
    id: 'diasp_314',
    diff: 1,
    q: ['Pendant combien de temps la communauté libre de Palmares a-t-elle résisté aux colonisateurs ?', 'For how long did the free republic of Palmares resist European colonizers?', '¿Durante cuánto tiempo resistió la comunidad de Palmares a los colonizadores?', 'Por quanto tempo a comunidade de Palmares resistiu aos colonizadores?', 'كم عاماً صمدت جمهورية بالماريس الحرة في وجه الجيوش الاستعمارية بالبرازيل؟'],
    c: ['Près de 100 ans (un siècle)', 'Nearly 100 years (a century)', 'Cerca de 100 años (un siglo)', 'Quase 100 anos (um século)', 'ما يقرب من 100 عام (قرن كامل)'],
    d: [
      ['2 semaines', '2 weeks', '2 semanas', '2 semanas', 'أسبوعين'],
      ['6 mois', '6 months', '6 meses', '6 meses', '6 أشهر'],
      ['500 ans', '500 years', '500 años', '500 anos', '500 عام']
    ],
    exp: ['Cette république cachée dans les forêts abritait plus de 20 000 habitants libres.', 'This hidden mountain settlement was home to over 20,000 self-governed free people.', 'Esta comunidad oculta albergó a más de 20.000 habitantes libres.', 'O quilombo abrigou mais de 20.000 pessoas livres governando a si mesmas.', 'ضمت تلك الجمهورية في أحضان الغابات أكثر من 20 ألف شخص عاشوا أحراراً.']
  },
  {
    id: 'diasp_315',
    diff: 1,
    q: ['Quel art martial brésilien déguisé en danse a été créé par les esclaves africains ?', 'Which Afro-Brazilian martial art disguised as an acrobatic dance was created by enslaved Africans?', '¿Qué arte marcial brasileño disfrazado de danza crearon los esclavos africanos?', 'Qual arte marcial brasileira disfarçada de dança foi criada pelos escravizados africanos?', 'ما هو الفن القتالي البرازيلي المموّه برقصات بهلوانية الذي ابتكره العبيد الأفارقة؟'],
    c: ['La capoeira', 'Capoeira', 'La capoeira', 'A capoeira', 'الكابويرا (Capoeira)'],
    d: [
      ['Le judo', 'Judo', 'El judo', 'O judô', 'الجودو'],
      ['Le karaté', 'Karate', 'El kárate', 'O caratê', 'الكاراتيه'],
      ['Le taekwondo', 'Taekwondo', 'El taekwondo', 'O taekwondo', 'التايكوندو']
    ],
    exp: ['Ils s’entraînaient au combat en faisant croire aux maîtres qu’ils dansaient au son de la musique.', 'They practiced fighting moves under the guise of dancing to musical rhythms.', 'Entrenaban combate fingiendo bailar ante los amos al son de la música.', 'Treinavam luta disfarçando em dança e ritmo para enganar os senhores.', 'كانوا يتدربون على مهارات القتال تحت غطاء الرقص والموسيقى لخداع حراسهم.']
  },
  {
    id: 'diasp_316',
    diff: 1,
    q: ['Quel arc musical avec une calebasse donne le rythme aux combats de capoeira ?', 'Which single-string musical bow with a gourd drives the rhythm in capoeira circles?', '¿Qué arco musical con calabaza marca el ritmo en la capoeira?', 'Qual arco musical com cabaça comanda o ritmo nas rodas de capoeira?', 'ما هي الآلة الوترية المصنوعة من القوس والقرع التي تقود إيقاع الكابويرا؟'],
    c: ['Le berimbau', 'The berimbau', 'El berimbau', 'O berimbau', 'البيريمباو (Berimbau)'],
    d: [
      ['Le violon', 'The violin', 'El violín', 'O violino', 'الكمان'],
      ['La flûte', 'The flute', 'La flauta', 'A flauta', 'الناي'],
      ['La harpe', 'The harp', 'El arpa', 'A harpa', 'القيثارة']
    ],
    exp: ['Le joueur frappe la corde avec une baguette et module le son avec une pierre plate.', 'The player strikes the steel wire with a small stick and modulates tone with a stone.', 'El tocador golpea la cuerda con una varilla y modula el sonido con una piedra.', 'O tocador bate na corda de arame com uma baqueta e usa uma pedra.', 'يضرب العازف على السلك المعدني بعود صغير ويتحكم بنبرة الصوت بحجر أملس.']
  },
  {
    id: 'diasp_317',
    diff: 1,
    q: ['Quelle ville du Brésil est surnommée la capitale afro-brésilienne pour sa richesse culturelle ?', 'Which Brazilian city is known as the Afro-Brazilian cultural capital?', '¿Qué ciudad de Brasil es considerada la capital cultural afrobrasileña?', 'Qual cidade do Brasil é conhecida como a capital cultural afro-brasileira?', 'أي مدينة في البرازيل تُعد عاصمة التراث والثقافة الأفرو-برازيلية؟'],
    c: ['Salvador de Bahia', 'Salvador da Bahia', 'Salvador de Bahía', 'Salvador da Bahia', 'سلفادور دي باهيا'],
    d: [
      ['Brasília', 'Brasília', 'Brasilia', 'Brasília', 'برازيليا'],
      ['São Paulo', 'São Paulo', 'São Paulo', 'São Paulo', 'ساو باولو'],
      ['Curitiba', 'Curitiba', 'Curitiba', 'Curitiba', 'كوريتيبا']
    ],
    exp: ['C’est la ville qui compte le plus grand nombre d’habitants d’ascendance africaine hors d’Afrique.', 'It has the largest population of African ancestry of any city outside Africa.', 'Es la ciudad con mayor población de ascendencia africana fuera de África.', 'É a cidade com a maior população de origem africana fora da África.', 'هي أكبر مدينة تضم سكاناً من أصول أفريقية في العالم خارج القارة الأفريقية.']
  },
  {
    id: 'diasp_318',
    diff: 2,
    q: ['Quel grand écrivain noir brésilien a écrit Mémoires d’outre-tombe d’un homme mort ?', 'Which Black author is widely celebrated as Brazil’s greatest classical novelist?', '¿Qué gran escritor negro brasileño es considerado el mayor novelista clásico de su país?', 'Qual grande escritor negro é considerado o maior romancista da literatura brasileira?', 'أي كاتب وروائي برازيلي أسود يُعد أعظم أديب كلاسيكي في تاريخ البرازيل؟'],
    c: ['Machado de Assis', 'Machado de Assis', 'Machado de Assis', 'Machado de Assis', 'ماتشادو دي أسيس (Machado de Assis)'],
    d: [
      ['Paulo Coelho', 'Paulo Coelho', 'Paulo Coelho', 'Paulo Coelho', 'باولو كويلو'],
      ['Jorge Amado', 'Jorge Amado', 'Jorge Amado', 'Jorge Amado', 'خورخي أمادو'],
      ['Carlos Drummond', 'Carlos Drummond', 'Carlos Drummond', 'Carlos Drummond', 'كارلوس دروموند']
    ],
    exp: ['Petit-fils d’esclaves affranchis, il a été le premier président de l’Académie brésilienne des Lettres.', 'Grandson of freed slaves, he founded the Brazilian Academy of Letters.', 'Nieto de esclavos libertos, fundó la Academia Brasileña de Letras.', 'Neto de escravizados libertos, fundou a Academia Brasileira de Letras.', 'حفيد لعبيد محررين، أسس وترأس الأكاديمية البرازيلية للآداب.']
  },
  {
    id: 'diasp_319',
    diff: 2,
    q: ['Quel célèbre musicien noir brésilien est devenu ministre de la Culture sous la présidence de Lula ?', 'Which renowned Afro-Brazilian musician served as Minister of Culture under President Lula?', '¿Qué famoso músico afrobrasileño fue ministro de Cultura con el presidente Lula?', 'Qual famoso músico afro-brasileiro foi Ministro da Cultura no governo Lula?', 'أي فنان وموسيقي أفرو-برازيلي شهير شغل منصب وزير الثقافة في عهد الرئيس لولا؟'],
    c: ['Gilberto Gil', 'Gilberto Gil', 'Gilberto Gil', 'Gilberto Gil', 'جيلبرتو جيل (Gilberto Gil)'],
    d: [
      ['Caetano Veloso', 'Caetano Veloso', 'Caetano Veloso', 'Caetano Veloso', 'كايتانو فيلوسو'],
      ['Chico Buarque', 'Chico Buarque', 'Chico Buarque', 'Chico Buarque', 'شيكو بواركي'],
      ['Milton Nascimento', 'Milton Nascimento', 'Milton Nascimento', 'Milton Nascimento', 'ميلتون ناسيمنتو']
    ],
    exp: ['Pionnier du mouvement Tropicalia, il a joué de la guitare à l’ONU pour promouvoir la culture.', 'A Tropicalia pioneer, he famously played acoustic guitar at the UN to celebrate world culture.', 'Pionero de la Tropicalia, tocó su guitarra en la ONU para defender la cultura.', 'Pioneiro da Tropicália, tocou violão na ONU celebrando a cultura popular.', 'أحد رواد حركة تروبيكاليا، عزف على غيتاره بمقر الأمم المتحدة دفاعاً عن التنوع الثقافي.']
  },
  {
    id: 'diasp_320',
    diff: 2,
    q: ['Quelle chanteuse de samba de Rio était surnommée la Chanteuse du millénaire par la BBC ?', 'Which legendary samba icon from Rio was named Singer of the Millennium by BBC Radio?', '¿Qué cantante de samba de Río fue nombrada Cantante del Milenio por la BBC?', 'Qual lendária cantora de samba do Rio foi eleita Cantora do Milênio pela BBC?', 'أي مغنية سامبا أسطورية من ريو دي جانيرو اختارتها إذاعة بي بي سي كـ "صوت الألفية"؟'],
    c: ['Elza Soares', 'Elza Soares', 'Elza Soares', 'Elza Soares', 'إيلزا سواريس (Elza Soares)'],
    d: [
      ['Ivete Sangalo', 'Ivete Sangalo', 'Ivete Sangalo', 'Ivete Sangalo', 'إيفيتي سانغالو'],
      ['Gal Costa', 'Gal Costa', 'Gal Costa', 'Gal Costa', 'غال كوستا'],
      ['Elis Regina', 'Elis Regina', 'Elis Regina', 'Elis Regina', 'إليس ريجينا']
    ],
    exp: ['Née dans une favela très pauvre, elle a chanté jusqu’à plus de 90 ans avec une voix éraillée inoubliable.', 'Born in deep poverty in a favela, she performed with fierce brilliance into her 90s.', 'Nacida en una favela muy humilde, cantó con fuerza indomable hasta los 90 años.', 'Nascida numa favela pobre, cantou com vigor inigualável até os 91 anos.', 'وُلدت في أفقر أحياء الصفيح وظلت تصدح بصوتها القوي الفريد حتى سن التسعين.']
  }
];

// Add 80 more specific Caribbean, Brazil and Latin American questions (321 to 400)
const topicsPart4 = [
  { id: '321', q: 'Quelle conseillère municipale noire et militante des favelas a été assassinée à Rio en 2018 ?', c: 'Marielle Franco', d: ['Benedita da Silva', 'Marina Silva', 'Elza Soares'], exp: 'Elle défendait les droits des femmes noires, des jeunes des favelas et combattait les milices.' },
  { id: '322', q: 'Quelle femme noire ramasseuse de vieux papiers à São Paulo a écrit le journal Le Dépotoir en 1960 ?', c: 'Carolina Maria de Jesus', d: ['Conceição Evaristo', 'Lélia Gonzalez', 'Djamila Ribeiro'], exp: 'Son livre poignant racontant la faim a été traduit en quatorze langues.' },
  { id: '323', q: 'Comment appelle-t-on au Brésil un village fondé par des esclaves noirs en fuite ?', c: 'Un quilombo', d: ['Une favela', 'Une hacienda', 'Une estancia'], exp: 'Les habitants de ces communautés libres sont appelés les quilombolas.' },
  { id: '324', q: 'Quel célèbre sculpteur et architecte noir du 18e siècle a sculpté les prophètes de Congonhas au Brésil ?', c: 'Aleijadinho', d: ['Mestre Valentim', 'Tebas', 'Carybé'], exp: 'Malgré une maladie qui déformait ses mains, il attachait ses ciseaux à ses poignets pour sculpter.' },
  { id: '325', q: 'Quel groupe de percussions afro-brésilien de Salvador a joué avec Michael Jackson dans le clip à Bahia ?', c: 'Olodum', d: ['Timbalada', 'Ilê Aiyê', 'Araketu'], exp: 'Leurs tambours et leurs couleurs rouge, noir, vert et or ont fait le tour de la terre.' },
  { id: '326', q: 'Comment s’appelle la première ville libre d’esclaves des Amériques fondée en Colombie en 1603 ?', c: 'Palenque de San Basilio', d: ['Carthagène', 'Cali', 'Medellín'], exp: 'Cette ville a conservé sa propre langue créole mêlant espagnol et langues bantoues d’Afrique.' },
  { id: '327', q: 'Quel roi africain évadé a fondé la ville libre de Palenque de San Basilio en Colombie ?', c: 'Benkos Biohó', d: ['Zumbi', 'Toussaint', 'Boukman'], exp: 'La couronne espagnole a été obligée de signer un traité de paix reconnaissant son indépendance.' },
  { id: '328', q: 'Quel chef noir africain a fondé une ville libre au Mexique en 1570 près de Veracruz ?', c: 'Gaspar Yanga', d: ['Vicente Guerrero', 'José María Morelos', 'Benito Juárez'], exp: 'La ville de Yanga au Mexique porte son nom en hommage à sa résistance victorieuse.' },
  { id: '329', q: 'Quel héros noir d’origine africaine et indigène est devenu le deuxième président du Mexique en 1829 ?', c: 'Vicente Guerrero', d: ['Gaspar Yanga', 'Benito Juárez', 'Emiliano Zapata'], exp: 'C’est lui qui a aboli définitivement l’esclavage sur tout le territoire mexicain.' },
  { id: '330', q: 'Comment appelle-t-on le peuple noir des Caraïbes qui vit sur les côtes du Honduras, Belize et Guatemala ?', c: 'Les Garifunas', d: ['Les Mayas', 'Les Arawaks', 'Les Tainos'], exp: 'Ils descendent d’Africains rescapés de naufrages qui se sont alliés aux Amérindiens caraïbes.' },
  { id: '331', q: 'Quelle langue afro-amérindienne des Garifunas est reconnue au patrimoine immatériel de l’UNESCO ?', c: 'La langue garifuna', d: ['Le quechua', 'Le nahuatl', 'Le guarani'], exp: 'Leur musique jouée sur des tambours en bois Garawoun est une tradition vivante.' },
  { id: '332', q: 'Quel mot haïtien désigne la soupe au giraumon consommée chaque 1er janvier pour fêter la liberté ?', c: 'La soupe Joumou', d: ['Le bouillon d’awara', 'Le colombo', 'Le calalou'], exp: 'Les esclaves n’avaient pas le droit de manger cette soupe réservée aux colons avant l’indépendance.' },
  { id: '333', q: 'De quelles deux couleurs est composé le drapeau national d’Haïti créé en mai 1803 ?', c: 'Bleu et rouge', d: ['Bleu, blanc et rouge', 'Vert et blanc', 'Noir et jaune'], exp: 'Dessalines a arraché la bande blanche du drapeau français pour marquer l’union des Noirs et des Métis.' },
  { id: '334', q: 'Quelle femme haïtienne a cousu le tout premier drapeau bleu et rouge d’Haïti en 1803 ?', c: 'Catherine Flon', d: ['Sanité Bélair', 'Marie-Jeanne Lamartinière', 'Suzanne Louverture'], exp: 'Elle a réuni les deux morceaux d’étoffe avec ses cheveux et son aiguille à l’Arcahaie.' },
  { id: '335', q: 'Quelle lieutenante héroïque de l’armée de Toussaint Louverture a refusé d’avoir les yeux bandés devant le peloton ?', c: 'Sanité Bélair', d: ['Catherine Flon', 'Suzanne Louverture', 'Henriette Saint-Marc'], exp: 'Elle a crié « Vivre libre ou mourir ! » avec fierté devant les soldats coloniaux.' },
  { id: '336', q: 'Quelle jeune femme a combattu sur les remparts du fort de la Crête-à-Pierrot en uniforme militaire ?', c: 'Marie-Jeanne Lamartinière', d: ['Sanité Bélair', 'Catherine Flon', 'Dédée Bazile'], exp: 'Fusil en bandoulière et sabre à la main, elle ranimait le courage de tous les défenseurs.' },
  { id: '337', q: 'Quel titre de noblesse le général Henri Christophe s’est-il donné en devenant roi du Nord d’Haïti ?', c: 'Roi Henri Ier', d: ['Empereur Napoléon', 'Duc de Kingston', 'Prince de Port-au-Prince'], exp: 'Il a créé une cour royale et fait bâtir le splendide palais Sans-Souci à Milot.' },
  { id: '338', q: 'Combien de canons la Citadelle Laferrière abritait-elle pour défendre Haïti des navires ennemis ?', c: 'Plus de 300 canons', d: ['10 canons', '50 canons', '1000 canons'], exp: 'C’est la plus grande forteresse militaire de toutes les Caraïbes et des Amériques.' },
  { id: '339', q: 'Quel président américain a refusé de reconnaître l’indépendance d’Haïti pendant des décennies ?', c: 'Thomas Jefferson', d: ['George Washington', 'Abraham Lincoln', 'Andrew Jackson'], exp: 'Les planteurs américains du Sud avaient peur que leurs propres esclaves s’inspirent des Haïtiens.' },
  { id: '340', q: 'Combien de millions de francs or la France a-t-elle exigés d’Haïti en 1825 pour reconnaître son existence ?', c: '150 millions de francs or', d: ['1 million', '5 millions', '500 millions'], exp: 'Cette dette injuste et colossale a étouffé l’économie du pays pendant plus d’un siècle.' },
  { id: '341', q: 'Dans quelle mer chaude se trouvent les îles d’Haïti, de la Jamaïque et de la Barbade ?', c: 'La mer des Caraïbes', d: ['L’océan Pacifique', 'La mer Méditerranée', 'La mer Baltique'], exp: 'Ces îles tropicales ont été le théâtre des plus grandes luttes pour l’émancipation.' },
  { id: '342', q: 'Quel oiseau national vert à longue queue orne les billets de banque de la Jamaïque ?', c: 'Le colibri (Doctor Bird)', d: ['Le toucan', 'L’aigle royal', 'Le perroquet gris'], exp: 'Ce minuscule oiseau brillant est le symbole national de l’île.' },
  { id: '343', q: 'Quelle reine de la Jamaïque avait appris les secrets des plantes médicinales africaines pour soigner son peuple ?', c: 'Nanny des Marrons', d: ['Reine Mary', 'Reine Anne', 'Reine Sarah'], exp: 'Elle connaissait toutes les herbes de la forêt pour guérir les blessures et purifier l’eau.' },
  { id: '344', q: 'Comment les marrons de Jamaïque communiquaient-ils d’une montagne à l’autre sans se faire repérer ?', c: 'Avec une corne de bœuf (l’Abeng)', d: ['Avec des fumées', 'Avec des tambours géants', 'Avec des miroirs'], exp: 'Le son puissant de l’Abeng résonnait dans les vallées pour avertir de l’arrivée des soldats.' },
  { id: '345', q: 'En quelle année l’esclavage a-t-il été officiellement aboli dans les colonies britanniques comme la Jamaïque ?', c: '1834', d: ['1789', '1804', '1900'], exp: 'Les révoltes courageuses des esclaves ont forcé le Parlement de Londres à voter l’abolition.' },
  { id: '346', q: 'Quel prédicateur noir a mené la grande révolte de Noël 1831 en Jamaïque pour réclamer un salaire ?', c: 'Samuel Sharpe', d: ['Paul Bogle', 'George William Gordon', 'Marcus Garvey'], exp: 'Héros national de la Jamaïque, il a dit : « Je préfère mourir sur cet échafaud que de vivre esclave ».' },
  { id: '347', q: 'Quel diacre noir a mené la rébellion de Morant Bay en 1865 pour exiger des terres pour les paysans jamaïcains ?', c: 'Paul Bogle', d: ['Samuel Sharpe', 'Marcus Garvey', 'Norman Manley'], exp: 'Sa marche courageuse réclamait la justice sociale et le droit de cultiver la terre.' },
  { id: '348', q: 'Quelle île des Caraïbes est devenue une république indépendante en 2021 en retirant la reine d’Angleterre ?', c: 'La Barbade', d: ['La Jamaïque', 'Les Bahamas', 'Antigua'], exp: 'La Première ministre Mia Mottley a présidé cette transition historique sous les acclamations.' },
  { id: '349', q: 'Quelle chanteuse née à la Barbade a été nommée Héroïne nationale lors de la proclamation de la république ?', c: 'Rihanna', d: ['Beyoncé', 'Nicki Minaj', 'Grace Jones'], exp: 'Mia Mottley lui a dit : « Puissiez-vous continuer à briller comme un diamant ».' },
  { id: '350', q: 'Quelle île caribéenne a été la première au monde à abolir l’esclavage dès sa création en 1804 ?', c: 'Haïti', d: ['Cuba', 'La Martinique', 'Porto Rico'], exp: 'L’article 14 de sa première constitution déclarait tous les citoyens libres et égaux.' },
  { id: '351', q: 'Quelle religion afro-brésilienne pratique ses cérémonies de tambours et de danses blanches à Bahia ?', c: 'Le Candomblé', d: ['Le bouddhisme', 'Le taoïsme', 'Le shintoïsme'], exp: 'Les fidèles y rendent hommage aux divinités de la nature venues d’Afrique de l’Ouest.' },
  { id: '352', q: 'Comment appelle-t-on les esprits et divinités protectrices dans le Candomblé et la Santeria ?', c: 'Les Orixás (Orishas)', d: ['Les génies', 'Les elfes', 'Les anges gardiens'], exp: 'Chaque divinité comme Oxum, Yemanjá ou Ogum est associée à un élément naturel.' },
  { id: '353', q: 'Quelle déesse de la mer vêtue de bleu ciel et de blanc est fêtée le 2 février sur les plages du Brésil ?', c: 'Yemanjá', d: ['Oxum', 'Iansã', 'Nanã'], exp: 'Des milliers de personnes lui offrent des fleurs blanches et des parfums jetés sur les vagues.' },
  { id: '354', q: 'Quelle déesse des rivières, de l’or et de la beauté porte des colliers jaunes dans le Candomblé ?', c: 'Oxum', d: ['Yemanjá', 'Iansã', 'Obá'], exp: 'Elle protège les eaux douces et la fertilité des familles.' },
  { id: '355', q: 'Quel plat typique afro-brésilien de Bahia est un beignet de haricots frit dans l’huile de palme rouge ?', c: 'L’Acarajé', d: ['La Feijoada', 'Le Churrasco', 'La Coxinha'], exp: 'Les Baianas vêtues de grandes robes blanches le vendent dans toutes les rues de Salvador.' },
  { id: '356', q: 'Quelle huile rouge d’Afrique de l’Ouest donne sa couleur et sa saveur magique à l’Acarajé ?', c: 'L’huile de palme (Dendê)', d: ['L’huile d’olive', 'L’huile de tournesol', 'L’huile de maïs'], exp: 'Les navigateurs l’avaient transportée à travers l’Atlantique avec les savoir-faire ancestraux.' },
  { id: '357', q: 'Quel grand plat national brésilien est un ragoût de haricots noirs préparé autrefois par les esclaves ?', c: 'La Feijoada', d: ['La Moqueca', 'Le Bobó', 'Le Pastel'], exp: 'Les cuisinières utilisaient les haricots et les morceaux savoureux pour nourrir la communauté.' },
  { id: '358', q: 'Quel ragoût de poisson et de crevettes au lait de coco et à l’huile de dendê est typique de Bahia ?', c: 'La Moqueca Baiana', d: ['Le Ceviche', 'La Paella', 'La Bouillabaisse'], exp: 'Il mijote traditionnellement dans des plats en terre cuite posés sur le feu.' },
  { id: '359', q: 'Quel célèbre quartier historique aux maisons colorées est le cœur de la culture noire à Salvador de Bahia ?', c: 'Le Pelourinho', d: ['Copacabana', 'Ipanema', 'Lapa'], exp: 'Autrefois lieu de punition des esclaves, c’est aujourd’hui le centre mondial des tambours Olodum.' },
  { id: '360', q: 'Quel groupe culturel noir de Bahia défile au carnaval en blanc pour célébrer la paix et les racines africaines ?', c: 'Les Filhos de Gandhy', d: ['Les Aigles de Rio', 'Les Sauvages de Santos', 'Les Rois de la Nuit'], exp: 'Créé par les dockers noirs de Salvador en 1949, ils portent des turbans blancs et des colliers bleus.' },
  { id: '361', q: 'Quel bloc afro de carnaval né en 1974 à Salvador n’accepte que des personnes noires pour valoriser leur fierté ?', c: 'Ilê Aiyê', d: ['Olodum', 'Timbalada', 'Cortejo Afro'], exp: 'Chaque année, ils élisent leur « Déesse de l’Ébène » vêtue de tissus traditionnels africains.' },
  { id: '362', q: 'Quel tambour brésilien en bois et peau de chèvre est joué avec deux baguettes pour faire claquer le rythme ?', c: 'Le repique (repinique)', d: ['La flûte', 'Le triangle', 'Le violoncelle'], exp: 'C’est le chef d’orchestre des percussions qui donne les signaux aux autres musiciens.' },
  { id: '363', q: 'Quel grand tambour cylindrique grave forme la basse lourde des écoles de samba au carnaval de Rio ?', c: 'Le surdo', d: ['Le pandeiro', 'Le cuíca', 'L’agogô'], exp: 'Ses battements sourds imitent le cœur qui bat et font vibrer le sol des défilés.' },
  { id: '364', q: 'Quel instrument à percussion avec deux cloches métalliques reliées par une anse joue les rythmes à Bahia ?', c: 'L’agogô', d: ['Le berimbau', 'Le triangle', 'Les castagnettes'], exp: 'Venu des cérémonies yorubas d’Afrique de l’Ouest, il marque le tempo aigu du carnaval.' },
  { id: '365', q: 'Quel petit tambour avec une tige à l’intérieur fait un bruit de rire ou de gémissement quand on le frotte ?', c: 'La cuíca', d: ['Le surdo', 'Le djembé', 'Le bongo'], exp: 'Le musicien frotte un tissu humide contre la tige en bambou à l’intérieur de la caisse.' },
  { id: '366', q: 'Quel genre musical et de danse est né dans les quartiers populaires noirs de Rio de Janeiro au début du 20e siècle ?', c: 'La samba', d: ['Le tango', 'La valse', 'La polka'], exp: 'La samba a été créée dans les maisons des « Tias Baianas » (tantes de Bahia) émigrées à Rio.' },
  { id: '367', q: 'Quelle célèbre tante noire de Bahia accueillait les musiciens dans sa cour à Rio pour inventer la samba ?', c: 'Tia Ciata', d: ['Tia Maria', 'Tia Rosa', 'Tia Carmen'], exp: 'C’est dans sa maison que la première samba enregistrée sur disque (« Pelo Telefone ») est née en 1916.' },
  { id: '368', q: 'Dans quel stade mythique de Rio de Janeiro Pelé a-t-il marqué son 1000e but en novembre 1969 ?', c: 'Le Maracanã', d: ['L’Estádio da Luz', 'Le Camp Nou', 'Wembley'], exp: 'La foule en délire a envahi la pelouse et le match a dû s’arrêter pendant de longues minutes.' },
  { id: '369', q: 'En quelle année le Brésil a-t-il été le tout dernier pays d’Amérique à abolir l’esclavage ?', c: '1888', d: ['1804', '1865', '1920'], exp: 'La loi d’or (Lei Áurea) a mis fin à plus de trois siècles d’esclavage cruel.' },
  { id: '370', q: 'Quel avocat noir brésilien né esclave a acheté et plaidé la liberté de plus de 500 esclaves au tribunal ?', c: 'Luiz Gama', d: ['Machado de Assis', 'José do Patrocínio', 'André Rebouças'], exp: 'Vendu par son propre père enfant, il a appris à lire seul et est devenu un juriste redoutable.' },
  { id: '371', q: 'Quel ingénieur noir brésilien brillant a construit le premier tunnel sous l’eau et des chemins de fer audacieux ?', c: 'André Rebouças', d: ['Luiz Gama', 'Aleijadinho', 'Tebas'], exp: 'Abolitionniste convaincu, il a refusé d’être payé par des propriétaires d’esclaves.' },
  { id: '372', q: 'Quel architecte noir né esclave au 18e siècle a construit la façade historique de la cathédrale de São Paulo ?', c: 'Joaquim Pinto de Oliveira (Tebas)', d: ['Aleijadinho', 'Mestre Valentim', 'Luiz Gama'], exp: 'Maître tailleur de pierre, ses monuments solides ornent encore le centre historique de la ville.' },
  { id: '373', q: 'Quel mouvement théâtral noir d’avant-garde Abdias do Nascimento a-t-il fondé à Rio en 1944 ?', c: 'Le Théâtre expérimental du Noir', d: ['La Comédie brésilienne', 'Le Théâtre libre', 'La Troupe d’or'], exp: 'Il formait des acteurs noirs des favelas pour jouer des grands rôles et combattre les stéréotypes.' },
  { id: '374', q: 'Quelle philosophe et militante noire brésilienne a inventé le concept d’Améfricanité pour unir les peuples ?', c: 'Lélia Gonzalez', d: ['Djamila Ribeiro', 'Marielle Franco', 'Sueli Carneiro'], exp: 'Elle a montré que les cultures noires ont profondément façonné l’identité de toute l’Amérique latine.' },
  { id: '375', q: 'Quelle philosophe noire contemporaine a écrit le livre à succès Petit manuel antiraciste au Brésil ?', c: 'Djamila Ribeiro', d: ['Lélia Gonzalez', 'Marielle Franco', 'Anitta'], exp: 'Ses livres simples et percutants sont devenus des lectures indispensables dans les écoles brésiliennes.' },
  { id: '376', q: 'Quel président afro-mexicain d’ascendance africaine et indigène a donné son nom à un État du Mexique ?', c: 'Vicente Guerrero', d: ['Benito Juárez', 'Emiliano Zapata', 'Lázaro Cárdenas'], exp: 'L’État de Guerrero sur la côte pacifique du Mexique porte son nom en hommage à sa bravoure.' },
  { id: '377', q: 'Quelle ville d’esclaves libres rebelles a été officiellement reconnue libre par l’Espagne au Mexique en 1630 ?', c: 'San Lorenzo de los Negros (Yanga)', d: ['Acapulco', 'Cancún', 'Guadalajara'], exp: 'Les guerriers de Yanga ont forcé les troupes du vice-roi espagnol à négocier la paix.' },
  { id: '378', q: 'Dans quel pays d’Amérique du Sud se trouve le village noir de San Basilio de Palenque ?', c: 'La Colombie', d: ['Le Pérou', 'L’Argentine', 'Le Chili'], exp: 'La musique des tambours pechiche y rythme les funérailles et les fêtes traditionnelles.' },
  { id: '379', q: 'Comment s’appelle la langue créole unique parlée par les habitants de Palenque en Colombie ?', c: 'Le palenquero', d: ['Le papiamento', 'Le créole haïtien', 'Le sranan tongo'], exp: 'C’est le seul créole à base espagnole et bantoue conservé sur le continent sud-américain.' },
  { id: '380', q: 'Quel boxeur noir colombien de Palenque est devenu le premier champion du monde de son pays en 1972 ?', c: 'Antonio Cervantes (Kid Pambelé)', d: ['Rodrigo Valdez', 'Miguel Happy Lora', 'Edison Miranda'], exp: 'Grâce à ses victoires, sa ville natale a enfin obtenu l’électricité et l’eau courante.' },
  { id: '381', q: 'Quel joueur de football colombien aux cheveux crépus blonds légendaires a illuminé le Mondial 1990 ?', c: 'Carlos Valderrama', d: ['Faustino Asprilla', 'Freddy Rincón', 'James Rodríguez'], exp: 'Surnommé El Pibe, ses passes magiques au millimètre ont enchanté la planète football.' },
  { id: '382', q: 'Quel attaquant colombien rapide comme l’éclair a brillé à Newcastle et à Parme dans les années 90 ?', c: 'Faustino Asprilla', d: ['Carlos Valderrama', 'Freddy Rincón', 'Radamel Falcao'], exp: 'Il célébrait ses buts en faisant des saltos avant spectaculaires sur la pelouse.' },
  { id: '383', q: 'Quel joueur colombien a marqué le but égalisateur historique contre l’Allemagne à la 93e minute au Mondial 1990 ?', c: 'Freddy Rincón', d: ['Carlos Valderrama', 'René Higuita', 'Andrés Escobar'], exp: 'Cette égalisation mémorable a qualifié la Colombie pour les huitièmes de finale.' },
  { id: '384', q: 'Quel grand compositeur noir cubain a composé la chanson Guantanamera chantée dans le monde entier ?', c: 'Joseíto Fernández', d: ['Benny Moré', 'Compay Segundo', 'Chucho Valdés'], exp: 'La chanson reprend les vers poétiques du héros national cubain José Martí.' },
  { id: '385', q: 'Quelle reine de la salsa d’origine cubaine criait son mot fétiche ¡ Azúcar ! sur toutes les scènes ?', c: 'Celia Cruz', d: ['Gloria Estefan', 'La Lupe', 'Omara Portuondo'], exp: 'Avec ses perruques colorées et son énergie débordante, elle a fait danser le monde entier.' },
  { id: '386', q: 'Quel chanteur noir cubain était surnommé El Bárbaro del Ritmo pour sa voix et son sens du rythme ?', c: 'Benny Moré', d: ['Compay Segundo', 'Ibrahim Ferrer', 'Pérez Prado'], exp: 'Sans savoir lire la musique, il dirigeait son grand orchestre avec une canne et une oreille absolue.' },
  { id: '387', q: 'Quel pianiste noir cubain virtuose a fondé le célèbre groupe de jazz afro-cubain Irakere ?', c: 'Chucho Valdés', d: ['Rubén González', 'Bebo Valdés', 'Gonzalo Rubalcaba'], exp: 'Il a mélangé les tambours rituels batas avec les cuivres puissants du jazz moderne.' },
  { id: '388', q: 'Quel joueur cubain de la ligue américaine de baseball était surnommé The Cuban Comet pour sa vitesse ?', c: 'Minnie Miñoso', d: ['Tony Oliva', 'Luis Tiant', 'Yasiel Puig'], exp: 'Il a été le premier joueur noir latino vedette des White Sox de Chicago.' },
  { id: '389', q: 'Quelle île caribéenne voisine d’Haïti a vu naître le rythme joyeux du merengue et de la bachata ?', c: 'La République Dominicaine', d: ['Porto Rico', 'La Jamaïque', 'La Barbade'], exp: 'Les tambours tambora et l’accordéon donnent aux danses dominicaines leur pulsation irrésistible.' },
  { id: '390', q: 'Quel joueur noir dominicain de baseball a frappé plus de 600 home runs avec les Red Sox de Boston ?', c: 'David Ortiz (Big Papi)', d: ['Sammy Sosa', 'Pedro Martínez', 'Manny Ramírez'], exp: 'Idole de Boston, il a mené son équipe à remporter trois Séries mondiales.' },
  { id: '391', q: 'Quel lanceur dominicain légendaire a remporté trois trophées Cy Young avec ses balles rapides foudroyantes ?', c: 'Pedro Martínez', d: ['David Ortiz', 'Mariano Rivera', 'Juan Marichal'], exp: 'Du haut de son gabarit modeste, il dominait les plus grands frappeurs avec une précision chirurgicale.' },
  { id: '392', q: 'Quel joueur noir portoricain de baseball légendaire est mort dans un crash d’avion en allant secourir le Nicaragua en 1972 ?', c: 'Roberto Clemente', d: ['Orlando Cepeda', 'Bernie Williams', 'Carlos Beltrán'], exp: 'Héros généreux, il convoyait lui-même des vivres pour les victimes d’un terrible tremblement de terre.' },
  { id: '393', q: 'Quel instrument de percussion cubain composé de deux petits tambours en bois se coince entre les genoux ?', c: 'Les bongos', d: ['Les congas', 'Les timbales', 'Le djembé'], exp: 'Le percussionniste en joue avec les doigts et les paumes pour donner des claquements aigus.' },
  { id: '394', q: 'Quels deux bâtons ronds en bois dur frappe-t-on l’un contre l’autre pour donner la mesure dans la salsa ?', c: 'Les claves', d: ['Les maracas', 'Les castagnettes', 'Les baguettes'], exp: 'Le rythme de la clave (3-2 ou 2-3) est le cœur battant de toute la musique caribéenne.' },
  { id: '395', q: 'Quel tambour allongé d’origine congo est joué à deux mains dans la rumba et la salsa ?', c: 'La conga (tumbadora)', d: ['Le bongo', 'Le surdo', 'La caisse claire'], exp: 'Les rythmes tumbao des congas font bouger les hanches des danseurs du monde entier.' },
  { id: '396', q: 'Quel rythme et danse populaire de Porto Rico d’origine africaine raconte les joies et peines du peuple ?', c: 'La bomba', d: ['La salsa', 'Le tango', 'Le flamenco'], exp: 'Dans la bomba, c’est le joueur de tambour barril qui suit les mouvements improvisés du danseur.' },
  { id: '397', q: 'Quel groupe de percussions de Trinidad a inventé les instruments faits dans des bidons de pétrole martelés ?', c: 'Les Steelbands (Steel drums)', d: ['Les Brass bands', 'Les Fanfares', 'Les Tambours d’or'], exp: 'Ces tambours d’acier appelés pans produisent des sons doux de xylophone magique.' },
  { id: '398', q: 'Sur quelle île des Caraïbes le grand carnaval de Notting Hill à Londres trouve-t-il ses racines musicales de calypso ?', c: 'Trinité-et-Tobago', d: ['La Barbade', 'La Jamaïque', 'Sainte-Lucie'], exp: 'Le calypso et le soca font vibrer des millions de danseurs chaque été dans les rues.' },
  { id: '399', q: 'Quel calypsonien trinidadien a écrit des chansons racontant l’histoire et les querelles politiques avec humour ?', c: 'Mighty Sparrow', d: ['Lord Kitchener', 'Harry Belafonte', 'Calypso Rose'], exp: 'Surnommé le roi du calypso, il a remporté huit fois le titre suprême du carnaval de Trinité.' },
  { id: '400', q: 'Quelle reine du calypso de Tobago a été la première femme à remporter le titre du carnaval en 1978 ?', c: 'Calypso Rose', d: ['Mighty Sparrow', 'Alison Hinds', 'Destra Garcia'], exp: 'Elle a reçu une Victoire de la musique en France en 2017 à l’âge de 76 ans avec son album Far from Home.' },
];

for (const t of topicsPart4) {
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

writePartFile('diasporaPart4.ts', 'DIASPORA_PART_4', items);

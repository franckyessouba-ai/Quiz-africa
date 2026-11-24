import { QuizQuestion } from '../../../types/quiz';
import { L } from '../../countriesPart1';
import { mkQ } from './packHelpers';

export const CONGO_CURATED_PACK: QuizQuestion[] = [
  mkQ({
    id: 'cur_CG_01',
    countryCode: 'CG',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 2,
    topicKey: 'free_france_capital',
    source: 'Histoire mondiale — Seconde Guerre mondiale (1940–1943)',
    prompt: L(
      'Entre 1940 et 1943, quelle ville d’Afrique centrale fut la capitale symbolique et militaire de la « France Libre » ?',
      'Between 1940 and 1943, which Central African city served as the symbolic capital of Free France?',
      'Entre 1940 y 1943, ¿qué ciudad centroafricana fue la capital simbólica de la Francia Libre?',
      'Entre 1940 e 1943, qual cidade centro-africana foi a capital simbólica da França Livre?',
      'بين عامي 1940 و1943، أي مدينة في وسط أفريقيا كانت العاصمة الرمزية لفرنسا الحرة؟'
    ),
    countryModePrompt: L(
      'Quel rôle historique mondial la capitale Brazzaville joua-t-elle entre 1940 et 1943 pendant la Seconde Guerre mondiale ?',
      'What historic global role did the capital Brazzaville play between 1940 and 1943 during World War II?',
      '¿Qué papel histórico mundial desempeñó Brazzaville entre 1940 y 1943 durante la Segunda Guerra Mundial?',
      'Que papel histórico mundial Brazzaville desempenhou entre 1940 e 1943 na Segunda Guerra Mundial?',
      'ما الدور التاريخي العالمي الذي لعبته برازافيل بين 1940 و1943 خلال الحرب العالمية الثانية؟'
    ),
    correct: L(
      'Elle fut la capitale de la France Libre et abrita Radio Brazzaville',
      'It served as the capital of Free France and hosted Radio Brazzaville',
      'Fue la capital de la Francia Libre y sede de Radio Brazzaville',
      'Foi a capital da França Livre e abrigou a Rádio Brazzaville',
      'كانت عاصمة فرنسا الحرة ومقر إذاعة برازافيل'
    ),
    distractors: [
      L('Elle fut la capitale de l’Empire ottoman', 'Capital of the Ottoman Empire', 'Capital del Imperio otomano', 'Capital do Império Otomano', 'عاصمة الدولة العثمانية'),
      L('Elle accueillit la signature du traité de Versailles', 'Site of the Treaty of Versailles', 'Sede del Tratado de Versalles', 'Sede do Tratado de Versalhes', 'مقر معاهدة فرساي'),
      L('Elle fut choisie comme siège permanent de l’ONU', 'Permanent UN Headquarters', 'Sede permanente de la ONU', 'Sede permanente da ONU', 'المقر الدائم للأمم المتحدة'),
    ],
    explanation: L(
      'Ralliée dès août 1940 sous l’impulsion du gouverneur Félix Éboué, Brazzaville devint le bastion africain de la résistance contre le nazisme.',
      'Rallied in August 1940 alongside Governor Félix Éboué, Brazzaville served as Free France’s wartime capital.',
      'Adherida en agosto de 1940 bajo Félix Éboué, Brazzaville fue el bastión de la Francia Libre.',
      'Sob liderança de Félix Éboué em 1940, Brazzaville tornou-se o bastião da França Livre.',
      'انضمت برازافيل بقيادة الحاكم فيليكس إيبوي عام 1940 لتصبح معقل المقاومة وإذاعة فرنسا الحرة.'
    ),
  }),
  mkQ({
    id: 'cur_CG_02',
    countryCode: 'CG',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 2,
    topicKey: 'makoko_iloo_1880',
    source: 'Archives du Royaume Téké — Mbé (1880)',
    prompt: L(
      'Quel souverain du royaume Téké (Anziku) signa en 1880 à Mbé le célèbre traité avec Pierre Savorgnan de Brazza ?',
      'Which sovereign of the Téké Kingdom signed the famous 1880 treaty at Mbé with Pierre Savorgnan de Brazza?',
      '¿Qué soberano del reino Téké firmó en 1880 en Mbé el célebre tratado con Pierre Savorgnan de Brazza?',
      'Que soberano do reino Téké assinou em 1880 em Mbé o célebre tratado com Pierre Savorgnan de Brazza?',
      'من هو ملك مملكة تيكي الذي وقع معاهدة عام 1880 في مبي مع بيير سافورنيان دي برازا؟'
    ),
    countryModePrompt: L(
      'Comment s’appelait le roi (Makoko) des Téké qui signa le traité historique de Mbé en 1880 ?',
      'What was the name of the Téké king (Makoko) who signed the historic 1880 Mbé treaty?',
      '¿Cómo se llamaba el rey (Makoko) téké que firmó el histórico tratado de Mbé en 1880?',
      'Como se chamava o rei (Makoko) téké que assinou o histórico tratado de Mbé em 1880?',
      'ما اسم الملك (ماكوكو) لشعب تيكي الذي وقع معاهدة مبي التاريخية عام 1880؟'
    ),
    correct: L('Le Makoko Ilo Ier', 'Makoko Iloo I', 'El Makoko Iloo I', 'O Makoko Iloo I', 'الملك ماكوكو إيلو الأول'),
    distractors: [
      L('Le roi Glèlè', 'King Glele', 'El rey Glele', 'O rei Glèlè', 'الملك غليلي'),
      L('L’empereur Théodoros II', 'Emperor Tewodros II', 'Emperador Teodoro II', 'Imperador Teodoro II', 'الإمبراطور تيودروس الثاني'),
      L('Le roi Shaka Zoulou', 'King Shaka Zulu', 'El rey Shaka Zulú', 'O rei Shaka Zulu', 'الملك شاكا زولو'),
    ],
    explanation: L(
      'Le 10 septembre 1880 à Mbé, le roi Ilo Ier scella un traité pacifique avec l’explorateur de Brazza, à l’origine du nom de la capitale.',
      'On September 10, 1880 at Mbé, King Iloo I signed a peaceful treaty with de Brazza, leading to the naming of Brazzaville.',
      'El 10 de septiembre de 1880 en Mbé, el rey Iloo I firmó un tratado pacífico con de Brazza.',
      'Em 10 de setembro de 1880 em Mbé, o rei Iloo I assinou um tratado pacífico com de Brazza.',
      'في 10 سبتمبر 1880 وقع الملك إيلو الأول اتفاقية مبي التي ارتبطت بتسمية برازافيل.'
    ),
  }),
  mkQ({
    id: 'cur_CG_03',
    countryCode: 'CG',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'first_pres_youlou',
    source: 'Archives de la République du Congo (1960)',
    prompt: L(
      'Qui fut élu premier Président de la République du Congo lors de l’indépendance en 1960 ?',
      'Who was elected the first President of the Republic of the Congo at independence in 1960?',
      '¿Quién fue elegido primer presidente de la República del Congo tras la independencia en 1960?',
      'Quem foi eleito o primeiro presidente da República do Congo na independência em 1960?',
      'من انتُخب أول رئيس لجمهورية الكونغو عند الاستقلال عام 1960؟'
    ),
    countryModePrompt: L(
      'Quel ancien maire de Brazzaville et abbé devint le tout premier président de la République à l’indépendance en août 1960 ?',
      'Which former mayor of Brazzaville became the country’s very first President at independence in August 1960?',
      '¿Qué exalcalde de Brazzaville se convirtió en el primer presidente del país en agosto de 1960?',
      'Qual ex-prefeito de Brazzaville tornou-se o primeiro presidente do país em agosto de 1960?',
      'من هو عمدة برازافيل السابق الذي أصبح أول رئيس للبلاد عند الاستقلال في أغسطس 1960؟'
    ),
    correct: L('Fulbert Youlou', 'Fulbert Youlou', 'Fulbert Youlou', 'Fulbert Youlou', 'فولبير يولو'),
    distractors: [
      L('Patrice Lumumba', 'Patrice Lumumba', 'Patrice Lumumba', 'Patrice Lumumba', 'باتريس لومومبا'),
      L('Ahmadou Ahidjo', 'Ahmadou Ahidjo', 'Ahmadou Ahidjo', 'Ahmadou Ahidjo', 'أحمدو أهيدجو'),
      L('Modibo Keïta', 'Modibo Keïta', 'Modibo Keïta', 'Modibo Keïta', 'موديبو كيتا'),
    ],
    explanation: L(
      'Premier maire de Brazzaville en 1956, Fulbert Youlou proclama l’indépendance le 15 août 1960 et resta chef de l’État jusqu’en août 1963.',
      'Mayor of Brazzaville from 1956, Fulbert Youlou proclaimed independence on August 15, 1960 and served as president until 1963.',
      'Alcalde de Brazzaville en 1956, Fulbert Youlou proclamó la independencia el 15 de agosto de 1960.',
      'Prefeito de Brazzaville em 1956, Fulbert Youlou proclamou a independência em 15 de agosto de 1960.',
      'أعلن فولبير يولو الاستقلال في 15 أغسطس 1960 وشغل منصب أول رئيس للجمهورية.'
    ),
  }),
  mkQ({
    id: 'cur_CG_04',
    countryCode: 'CG',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'ngouabi_university',
    source: 'Université Marien-Ngouabi (Brazzaville)',
    prompt: L(
      'Quel ancien président de la République (1969–1977) a donné son nom à la plus grande université publique de Brazzaville ?',
      'Which former President (1969–1977) gave his name to Brazzaville’s largest public university?',
      '¿Qué expresidente (1969-1977) dio nombre a la mayor universidad pública de Brazzaville?',
      'Que ex-presidente (1969–1977) deu nome à maior universidade pública de Brazzaville?',
      'من هو الرئيس السابق (1969–1977) الذي تحمل أكبر جامعة حكومية في برازافيل اسمه؟'
    ),
    countryModePrompt: L(
      'De quel ancien chef d’État (1969–1977) la principale université historique de Brazzaville porte-t-elle le nom ?',
      'Which former Head of State (1969–1977) is the namesake of Brazzaville’s historic main public university?',
      '¿Qué exjefe de Estado (1969-1977) da nombre a la principal universidad pública de Brazzaville?',
      'Qual ex-chefe de Estado (1969–1977) dá nome à principal universidade pública de Brazzaville?',
      'باسم أي رئيس دولة سابق (1969–1977) سُميت الجامعة الوطنية الرئيسية في برازافيل؟'
    ),
    correct: L('Marien Ngouabi', 'Marien Ngouabi', 'Marien Ngouabi', 'Marien Ngouabi', 'ماريان نغوابي'),
    distractors: [
      L('Joseph Kasa-Vubu', 'Joseph Kasa-Vubu', 'Joseph Kasa-Vubu', 'Joseph Kasa-Vubu', 'جوزيف كاسا فوبو'),
      L('Sylvanus Olympio', 'Sylvanus Olympio', 'Sylvanus Olympio', 'Sylvanus Olympio', 'سيلفانوس أوليمبيو'),
      L('Hamani Diori', 'Hamani Diori', 'Hamani Diori', 'Hamani Diori', 'هاماني ديوري'),
    ],
    explanation: L(
      'Fondée en 1971 sous le nom d’Université de Brazzaville, l’institution a été rebaptisée Université Marien-Ngouabi en 1977.',
      'Founded in 1971 as the University of Brazzaville, it was renamed Marien Ngouabi University in 1977.',
      'Fundada en 1971, la universidad pública de Brazzaville adoptó el nombre de Marien Ngouabi en 1977.',
      'Fundada em 1971, a universidade pública de Brazzaville passou a se chamar Marien Ngouabi em 1977.',
      'تأسست الجامعة عام 1971 وأُعيدت تسميتها جامعة ماريان نغوابي عام 1977.'
    ),
  }),
  mkQ({
    id: 'cur_CG_05',
    countryCode: 'CG',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'anthem_la_congolaise',
    source: 'Archives nationales — Hymne et devise',
    prompt: L(
      'Quelle est la devise nationale officielle de la République du Congo ?',
      'What is the official national motto of the Republic of the Congo?',
      '¿Cuál es el lema nacional oficial de la República del Congo?',
      'Qual é o lema nacional oficial da República do Congo?',
      'ما هو الشعار الوطني الرسمي لجمهورية الكونغو؟'
    ),
    countryModePrompt: L(
      'Quelle devise trinitaire figure sur les armoiries officielles de la République ?',
      'Which three-word national motto appears on the Republic’s official coat of arms?',
      '¿Qué lema oficial de tres palabras figura en el escudo de la República?',
      'Qual lema oficial de três palavras aparece no brasão da República?',
      'ما الشعار الثلاثي الرسمي المنقوش على شعار الجمهورية؟'
    ),
    correct: L('Unité – Travail – Progrès', 'Unity – Work – Progress', 'Unidad – Trabajo – Progreso', 'Unidade – Trabalho – Progresso', 'الوحدة – العمل – التقدم'),
    distractors: [
      L('Union – Discipline – Travail', 'Union – Discipline – Work', 'Unión – Disciplina – Trabajo', 'União – Disciplina – Trabalho', 'الاتحاد – الانضباط – العمل'),
      L('Justice – Paix – Solidarité', 'Justice – Peace – Solidarity', 'Justicia – Paz – Solidaridad', 'Justiça – Paz – Solidariedade', 'العدالة – السلام – التضامن'),
      L('Travail – Liberté – Patrie', 'Work – Liberty – Fatherland', 'Trabajo – Libertad – Patria', 'Trabalho – Liberdade – Pátria', 'العمل – الحرية – الوطن'),
    ],
    explanation: L(
      'Accompagnée de l’hymne « La Congolaise », la devise « Unité – Travail – Progrès » exprime l’idéal civique national.',
      'Paired with the anthem "La Congolaise," "Unity – Work – Progress" serves as the country’s constitutional motto.',
      'Junto al himno nacional, el lema «Unidad – Trabajo – Progreso» resume el ideal cívico del país.',
      'Junto ao hino nacional, o lema «Unidade – Trabalho – Progresso» resume o ideal cívico do país.',
      'يرفع شعار «الوحدة – العمل – التقدم» إلى جانب النشيد الوطني منذ الاستقلال.'
    ),
  }),
  mkQ({
    id: 'cur_CG_06',
    countryCode: 'CG',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'andre_matsoua_amicale',
    source: 'Histoire contemporaine d’Afrique centrale',
    prompt: L(
      'Quel précurseur congolais fondateur de l’Amicale des originaires de l’AEF en 1926 réclama dès les années 1920 la fin du code de l’indigénat et l’égalité des droits ?',
      'Which Congolese pioneer founded the Amicale association in 1926 and campaigned early for civil equality and the end of colonial subject status?',
      '¿Qué pionero congoleño fundó en 1926 la Amicale para exigir el fin del código de indigenado y la igualdad de derechos?',
      'Que pioneiro congolês fundou em 1926 a Amicale para exigir o fim do indigenato e a igualdade de direitos?',
      'من هو الرائد الكونغولي الذي أسس جمعية الأميكال عام 1926 وطالب بالمساواة في الحقوق؟'
    ),
    countryModePrompt: L(
      'Quel grand pionnier de la dignité civique né près de Kinkala fonda l’Amicale en 1926 pour combattre les abus du système colonial ?',
      'Which early civil-rights pioneer born near Kinkala founded the Amicale movement in 1926 against colonial discrimination?',
      '¿Qué gran pionero cívico nacido cerca de Kinkala fundó la Amicale en 1926 contra los abusos coloniales?',
      'Que grande pioneiro cívico nascido perto de Kinkala fundou a Amicale em 1926 contra os abusos coloniais?',
      'من هو الرائد الوطني المولود قرب كينكالا الذي أسس حركة الأميكال عام 1926 لمناهضة التمييز الاستعماري؟'
    ),
    correct: L('André Grenard Matsoua', 'André Grenard Matsoua', 'André Grenard Matsoua', 'André Grenard Matsoua', 'أندريه غرينار ماتسوا'),
    distractors: [
      L('Jean Ralaimongo', 'Jean Ralaimongo', 'Jean Ralaimongo', 'Jean Ralaimongo', 'جان راليمونغو'),
      L('Nnamdi Azikiwe', 'Nnamdi Azikiwe', 'Nnamdi Azikiwe', 'Nnamdi Azikiwe', 'نامدي أزيكيوي'),
      L('Léopold Sédar Senghor', 'Léopold Sédar Senghor', 'Léopold Sédar Senghor', 'Léopold Sédar Senghor', 'ليوبولد سيدار سنغور'),
    ],
    explanation: L(
      'Déporté au Tchad où il mourut en 1942, André Matsoua devint une figure emblématique de la conscience politique en Afrique équatoriale.',
      'Deported to Chad where he died in 1942, André Matsoua remains a revered early champion of equality and dignity.',
      'Deportado a Chad, donde murió en 1942, André Matsoua es un símbolo temprano de la lucha por la igualdad.',
      'Deportado para o Chade, onde faleceu em 1942, André Matsoua tornou-se símbolo da luta pela igualdade.',
      'أصبح أندريه ماتسوا رمزاً مبكراً للوعي السياسي والمطالبة بالمساواة حتى وفاته في المنفى عام 1942.'
    ),
  }),
  mkQ({
    id: 'cur_CG_07',
    countryCode: 'CG',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 2,
    topicKey: 'pointe_noire_cfco',
    source: 'CFCO — Chemin de fer Congo-Océan (1934)',
    prompt: L(
      'Quelles deux villes majeures relie la célèbre ligne de chemin de fer Congo-Océan (CFCO) achevée en 1934 ?',
      'Which two major cities are linked by the historic Congo–Ocean Railway (CFCO) completed in 1934?',
      '¿Qué dos grandes ciudades une el histórico ferrocarril Congo-Océano (CFCO) inaugurado en 1934?',
      'Quais duas grandes cidades são ligadas pela histórica ferrovia Congo-Oceano (CFCO) concluída em 1934?',
      'ما المدينتان الكبيرتان اللتان يربط بينهما خط سكة حديد الكونغو-المحيط (CFCO) المنجز عام 1934؟'
    ),
    countryModePrompt: L(
      'Quelles deux métropoles — l’une fluviale et l’autre océanique — relie la ligne ferroviaire du CFCO longue de 512 km ?',
      'Which two cities—one on the river and one on the ocean—are connected by the 512-km CFCO railway?',
      '¿Qué dos metrópolis —una fluvial y otra atlántica— conecta la línea ferroviaria del CFCO de 512 km?',
      'Quais duas metrópoles —uma fluvial e outra oceânica— são ligadas pela ferrovia CFCO de 512 km?',
      'ما المدينتان —إحداهما نهرية والأخرى ساحلية— اللتان يربطهما خط السكة الحديدية البالغ طوله 512 كم؟'
    ),
    correct: L('Brazzaville et Pointe-Noire', 'Brazzaville and Pointe-Noire', 'Brazzaville y Pointe-Noire', 'Brazzaville e Pointe-Noire', 'برازافيل وبوانت نوار'),
    distractors: [
      L('Owando et Ouesso', 'Owando and Ouesso', 'Owando y Ouesso', 'Owando e Ouesso', 'أواندو وويسو'),
      L('Impfondo et Djambala', 'Impfondo and Djambala', 'Impfondo y Djambala', 'Impfondo e Djambala', 'إمبفوندو وجامبالا'),
      L('Sibiti et Nkayi', 'Sibiti and Nkayi', 'Sibiti y Nkayi', 'Sibiti e Nkayi', 'سيبيتي ونكايي'),
    ],
    explanation: L(
      'En contournant les cataractes infranchissables du bas fleuve à travers le massif du Mayombe, le CFCO relie l’intérieur fluvial au port atlantique de Pointe-Noire.',
      'Bypassing the impassable lower-river rapids through the Mayombe hills, the CFCO links Brazzaville to Atlantic Pointe-Noire.',
      'Salvando los rápidos a través del macizo de Mayombe, el CFCO conecta Brazzaville con el puerto de Pointe-Noire.',
      'Contornando as corredeiras pela serra de Mayombe, a CFCO conecta Brazzaville ao porto de Pointe-Noire.',
      'يتجاوز هذا الخط الشلالات النهرية الوعرة ليربط العاصمة النهرية بميناء بوانت نوار على المحيط.'
    ),
  }),
  mkQ({
    id: 'cur_CG_08',
    countryCode: 'CG',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'diosso_gorges',
    source: 'Patrimoine naturel du Kouilou',
    prompt: L(
      'Comment s’appellent les spectaculaires falaises et amphithéâtres d’argile rouge sculptés par l’érosion au nord de Pointe-Noire ?',
      'What are the dramatic red laterite cliffs and amphitheater canyons carved by erosion just north of Pointe-Noire called?',
      '¿Cómo se llaman los espectaculares cañones de arcilla roja esculpidos por la erosión al norte de Pointe-Noire?',
      'Como se chamam os espetaculares cânions de argila vermelha esculpidos pela erosão ao norte de Pointe-Noire?',
      'ما اسم الأخاديد والمنحدرات الطينية الحمراء المدهشة المنحوتة بالتعرية شمال بوانت نوار؟'
    ),
    countryModePrompt: L(
      'Quel site géologique spectaculaire aux parois ocre-rouge surplombe la côte atlantique près de Pointe-Noire ?',
      'Which spectacular red-ochre canyon landmark overlooks the Atlantic coast near Pointe-Noire?',
      '¿Qué espectacular cañón de paredes rojo ocre domina la costa atlántica cerca de Pointe-Noire?',
      'Qual cânion espetacular de paredões ocre-vermelhos domina a costa atlântica perto de Pointe-Noire?',
      'ما المعلم الجيولوجي المذهل بجدرانه الحمراء المطلة على الساحل الأطلسي قرب بوانت نوار؟'
    ),
    correct: L('Les Gorges de Diosso', 'The Diosso Gorges', 'Las Gargantas de Diosso', 'As Gargantas de Diosso', 'أخاديد ديوسو'),
    distractors: [
      L('Les Falaises de Bandiagara', 'Bandiagara Cliffs', 'Acantilados de Bandiagara', 'Falésias de Bandiagara', 'منحدرات باندياغارا'),
      L('Le Canyon du Fish River', 'Fish River Canyon', 'Cañón del Fish River', 'Cânion do Fish River', 'وادي فيش ريفر'),
      L('Les Tsingy de Bemaraha', 'Tsingy de Bemaraha', 'Tsingy de Bemaraha', 'Tsingy de Bemaraha', 'تسينجي دي بيماراها'),
    ],
    explanation: L(
      'Couvertes de forêt dense et d’ocre flamboyant face à la mer, les Gorges de Diosso sont l’un des joyaux paysagers de la côte du Kouilou.',
      'Draped in lush greenery and vivid red earth overlooking the sea, the Diosso Gorges are a beloved coastal wonder.',
      'Rodeadas de vegetación frente al océano, las Gargantas de Diosso son una joya natural del litoral.',
      'Cobertas de verde e terra ocre frente ao mar, as Gargantas de Diosso são uma maravilha costeira.',
      'تُعد أخاديد ديوسو من أجمل العجائب الجيولوجية الساحلية بألوانها الحمراء الزاهية.'
    ),
  }),
  mkQ({
    id: 'cur_CG_09',
    countryCode: 'CG',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'odzala_kokoua_park',
    source: 'UNESCO — Parc national d’Odzala-Kokoua (2023)',
    prompt: L(
      'Quel parc national du nord du pays — l’un des plus anciens d’Afrique (1935) — a été classé au patrimoine mondial de l’UNESCO en 2023 pour ses baïs forestiers ?',
      'Which northern national park—one of Africa’s oldest (1935)—joined the UNESCO World Heritage List in 2023 for its forest clearings (bais)?',
      '¿Qué parque nacional del norte —uno de los más antiguos de África (1935)— fue inscrito en la UNESCO en 2023?',
      'Que parque nacional do norte —um dos mais antigos da África (1935)— entrou na lista da UNESCO em 2023?',
      'ما المنتزه الوطني في شمال البلاد —ومن أقدم منتزهات أفريقيا (1935)— الذي أُدرج في اليونسكو عام 2023؟'
    ),
    countryModePrompt: L(
      'Quel massif forestier protégé depuis 1935 dans le nord du pays abrite les célèbres baïs où se rassemblent gorilles des plaines et éléphants ?',
      'Which northern forest park protected since 1935 is famous for its open bais visited by lowland gorillas and forest elephants?',
      '¿Qué parque forestal protegido desde 1935 en el norte es célebre por sus claros visitados por gorilas y elefantes?',
      'Qual parque florestal protegido desde 1935 no norte é famoso pelas clareiras visitadas por gorilas e elefantes?',
      'ما المنتزه المحمي منذ 1935 في الشمال المشهور بغاباته ومراعيه المفتوحة للغوريلا والفيلة؟'
    ),
    correct: L('Le parc national d’Odzala-Kokoua', 'Odzala-Kokoua National Park', 'Parque Nacional de Odzala-Kokoua', 'Parque Nacional de Odzala-Kokoua', 'منتزه أودزالا-كوكوا الوطني'),
    distractors: [
      L('Le parc de Tarangire', 'Tarangire Park', 'Parque Tarangire', 'Parque Tarangire', 'منتزه تارانغيري'),
      L('Le parc de Zakouma', 'Zakouma Park', 'Parque Zakouma', 'Parque Zakouma', 'منتزه زاكوما'),
      L('Le parc du Banc d’Arguin', 'Banc d’Arguin', 'Banc d’Arguin', 'Banc d’Arguin', 'بانك دارغان'),
    ],
    explanation: L(
      'Le massif forestier d’Odzala-Kokoua abrite l’une des plus importantes populations de gorilles des plaines de l’Ouest et des baïs salins spectaculaires.',
      'Odzala-Kokoua safeguards one of the world’s largest populations of western lowland gorillas and mineral-rich forest clearings.',
      'Odzala-Kokoua protege una de las mayores poblaciones de gorilas occidentales de llanura del mundo.',
      'Odzala-Kokoua abriga uma das maiores populações de gorilas-das-planícies-ocidentais do mundo.',
      'يأوي منتزه أودزالا-كوكوا إحدى أكبر تجمعات غوريلا السهول الغربية في العالم.'
    ),
  }),
  mkQ({
    id: 'cur_CG_10',
    countryCode: 'CG',
    category: 'geography',
    subCategory: 'sciences_innovations',
    difficulty: 4,
    topicKey: 'cuvette_centrale_peatlands',
    source: 'Nature / Ministère de l’Environnement & Bassin du Congo',
    prompt: L(
      'Quel écosystème climatique colossal découvert scientifiquement en 2017 s’étend sous les forêts marécageuses de la Cuvette centrale entre les deux Congo ?',
      'Which colossal climate-regulating ecosystem mapped scientifically in 2017 lies beneath the swamp forests of the Cuvette Centrale?',
      '¿Qué colosal ecosistema climático cartografiado en 2017 yace bajo los bosques pantanosos de la Cuvette Centrale?',
      'Que colossal ecossistema climático mapeado em 2017 fica sob as florestas pantanosas da Cuvette Centrale?',
      'ما النظام البيئي المناخي الهائل الذي تم رسم خريطته عام 2017 تحت غابات المستنقعات في حوض الكونغو الأوسط؟'
    ),
    countryModePrompt: L(
      'Quelle richesse écologique majeure, la plus vaste de tout le monde tropical, a été cartographiée en 2017 dans le département de la Likouala et la Cuvette ?',
      'Which giant tropical carbon reservoir—the largest of its kind on Earth—was mapped in 2017 across Likouala and the Cuvette?',
      '¿Qué enorme reserva de carbono tropical —la mayor del planeta— se cartografió en 2017 en Likouala y Cuvette?',
      'Qual gigantesco reservatório tropical de carbono —o maior do planeta— foi mapeado em 2017 em Likouala e Cuvette?',
      'ما الثروة البيئية الكربونية الضخمة —الأكبر في العالم الاستوائي— التي رُسمت خريطتها عام 2017 في ليكوالا؟'
    ),
    correct: L(
      'Les plus vastes tourbières tropicales du monde (stockant ~30 milliards de tonnes de carbone)',
      'The world’s largest tropical peatlands (~30 billion tonnes of stored carbon)',
      'Las mayores turberas tropicales del mundo (~30.000 millones de toneladas de carbono)',
      'As maiores turfeiras tropicais do mundo (~30 bilhões de toneladas de carbono)',
      'أكبر أراضي الخث الاستوائية في العالم (تخزن نحو 30 مليار طن من الكربون)'
    ),
    distractors: [
      L('Les plus grands geysers volcaniques d’eau bouillante', 'The world’s largest volcanic geysers', 'Los mayores géiseres volcánicos', 'Os maiores gêiseres vulcânicos', 'أكبر الينابيع البركانية الساخنة'),
      L('Des récifs de corail fossiles vieux de 500 millions d’années', '500-million-year-old coral reefs', 'Arrecifes fósiles de 500 millones de años', 'Recifes fósseis de 500 milhões de anos', 'شعاب مرجانية متحجرة'),
      L('Des nappes de glace souterraines', 'Underground permafrost ice sheets', 'Capas de hielo subterráneas', 'Lençóis de gelo subterrâneos', 'صفائح جليدية جوفية'),
    ],
    explanation: L(
      'Les tourbières de la Cuvette centrale stockent l’équivalent d’environ 20 ans d’émissions des États-Unis et font de la région un pilier mondial du climat.',
      'Covering over 145,000 km², the Cuvette Centrale peatlands form the planet’s largest tropical carbon vault.',
      'Con más de 145.000 km², las turberas de la Cuvette Centrale forman la mayor reserva tropical de carbono.',
      'Com mais de 145.000 km², as turfeiras da Cuvette Centrale formam o maior estoque tropical de carbono.',
      'تغطي أراضي الخث مساحات شاسعة تجعل حوض الكونغو مخزناً عالمياً رئيسياً للكربون.'
    ),
  }),
  mkQ({
    id: 'cur_CG_11',
    countryCode: 'CG',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'nabemba_tower',
    source: 'Architecture contemporaine de Brazzaville',
    prompt: L(
      'Comment s’appelle la célèbre tour cylindrique de 106 mètres de haut, plus haut édifice de Brazzaville, nommée d’après une montagne du nord ?',
      'What is the name of Brazzaville’s iconic 106-meter cylindrical skyscraper, the city’s tallest building, named after a northern mountain?',
      '¿Cómo se llama el icónico rascacielos cilíndrico de 106 metros en Brazzaville que lleva el nombre de una montaña del norte?',
      'Como se chama o icônico arranha-céu cilíndrico de 106 metros em Brazzaville batizado com o nome de uma montanha do norte?',
      'ما اسم البرج الأسطواني الشهير في برازافيل البالغ ارتفاعه 106 أمتار والذي يحمل اسم جبل في الشمال؟'
    ),
    countryModePrompt: L(
      'Quel gratte-ciel cylindrique de 30 étages inauguré en 1990 est le plus haut bâtiment du pays et porte le nom du sommet culminant de la Sangha ?',
      'Which 30-story cylindrical skyscraper inaugurated in 1990 is the country’s tallest building and shares the name of its highest peak?',
      '¿Qué rascacielos cilíndrico de 30 pisos es el edificio más alto del país y lleva el nombre de su cima más alta?',
      'Qual arranha-céu cilíndrico de 30 andares é o prédio mais alto do país e leva o nome do seu pico mais alto?',
      'ما ناطحة السحاب الأسطوانية المكونة من 30 طابقاً التي تُعد أعلى مبنى في البلاد وتحمل اسم أعلى قمة جبلية فيها؟'
    ),
    correct: L('La Tour Nabemba', 'Nabemba Tower', 'La Torre Nabemba', 'A Torre Nabemba', 'برج نابيمبا'),
    distractors: [
      L('La Tour Montparnasse', 'Montparnasse Tower', 'Torre Montparnasse', 'Torre Montparnasse', 'برج مونبارناس'),
      L('La Tour de l’Échangeur', 'Limete Tower', 'Torre de Limete', 'Torre de Limete', 'برج ليميتي'),
      L('La Tour Hassan', 'Hassan Tower', 'Torre Hassan', 'Torre Hassan', 'صومعة حسان'),
    ],
    explanation: L(
      'Dessinée par l’architecte Jean Marie Legrand en 1986–1990, la Tour Nabemba porte le nom du Mont Nabemba (1 020 m) dans la Sangha.',
      'Completed in 1990, the 30-story Nabemba Tower is named after Mount Nabemba (1,020 m) in the Sangha region.',
      'Finalizada en 1990, la Torre Nabemba lleva el nombre del monte más alto del país, en Sangha.',
      'Concluída em 1990, a Torre Nabemba leva o nome do Monte Nabemba, o ponto mais alto do país.',
      'أُنجز برج نابيمبا عام 1990 وسُمي تيمناً بجبل نابيمبا في إقليم سانغا.'
    ),
  }),
  mkQ({
    id: 'cur_CG_12',
    countryCode: 'CG',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'basilique_sainte_anne',
    source: 'Architecture religieuse de Poto-Poto (1949)',
    prompt: L(
      'Quelle basilique emblématique de Brazzaville (quartier Poto-Poto), achevée en 1949, se distingue par sa grande nef en arcs brisés et sa toiture en tuiles vert émeraude ?',
      'Which iconic basilica in Brazzaville’s Poto-Poto district, consecrated in 1949, is famed for its pointed arches and emerald-green tiled roof?',
      '¿Qué emblemática basílica de Poto-Poto en Brazzaville destaca por sus arcos ojivales y su tejado de tejas verde esmeralda?',
      'Que emblemática basílica de Poto-Poto em Brazzaville destaca-se pelos arcos ogivais e telhado verde-esmeralda?',
      'ما الكاتدرائية الشهيرة في حي بوتو بوتو ببرازافيل المميزة بأقواسها المدببة وسقفها الأخضر الزمردي؟'
    ),
    countryModePrompt: L(
      'Quel monument religieux célèbre du quartier Poto-Poto marie architecture gothique à arcs ogivaux, brique rouge et tuiles vernissées vertes ?',
      'Which famed landmark church in Poto-Poto blends soaring pointed arches, red brick, and glazed green roof tiles?',
      '¿Qué célebre templo de Poto-Poto combina arcos ojivales, ladrillo rojo y tejas verdes esmaltadas?',
      'Qual célebre templo de Poto-Poto combina arcos ogivais, tijolo vermelho e telhas verdes esmaltadas?',
      'ما المعلم الديني الشهير في حي بوتو بوتو الذي يجمع بين الأقواس المدببة والطوب الأحمر والقرميد الأخضر؟'
    ),
    correct: L('La basilique Sainte-Anne du Congo', 'Basilica of Sainte-Anne', 'Basílica de Santa Ana', 'Basílica de Santa Ana', 'كنيسة القديسة حنة'),
    distractors: [
      L('La cathédrale de Saint-Louis', 'Saint-Louis Cathedral', 'Catedral de Saint-Louis', 'Catedral de Saint-Louis', 'كاتدرائية سانت لويس'),
      L('La basilique de Yamoussoukro', 'Basilica of Yamoussoukro', 'Basílica de Yamusukro', 'Basílica de Yamoussoukro', 'كنيسة ياموسوكرو'),
      L('L’église de Lalibela', 'Lalibela Rock Church', 'Iglesia de Lalibela', 'Igreja de Lalibela', 'كنيسة لاليبيلا'),
    ],
    explanation: L(
      'Conçue par l’architecte Roger Erell avec des artisans locaux, la basilique Sainte-Anne associe inspiration des lances traditionnelles et voûtes majestueuses.',
      'Designed by Roger Erell with local craftsmen, the Basilica of Sainte-Anne blends pointed vaults inspired by traditional spears.',
      'Diseñada por Roger Erell con artesanos locales, la basílica de Santa Ana es un hito arquitectónico de Brazzaville.',
      'Projetada por Roger Erell com artesãos locais, a Basílica de Santa Ana é um marco arquitetônico de Brazzaville.',
      'صممها المعماري روجيه إيريل بمشاركة حرفيين محليين لتصبح تحفة معمارية في قلب برازافيل.'
    ),
  }),
  mkQ({
    id: 'cur_CG_13',
    countryCode: 'CG',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'corniche_bridge_brazza',
    source: 'Infrastructures & Urbanisme de Brazzaville',
    prompt: L(
      'Quel pont à haubans spectaculaire inauguré en 2016 longe la corniche du fleuve Congo à Brazzaville face aux rapides ?',
      'Which dramatic cable-stayed viaduct opened in 2016 runs along Brazzaville’s Congo River Corniche?',
      '¿Qué espectacular puente atirantado inaugurado en 2016 bordea el paseo del río Congo en Brazzaville?',
      'Que espetacular ponte estaiada inaugurada em 2016 acompanha a orla do rio Congo em Brazzaville?',
      'ما الجسر المعلق المذهل الذي افتُتح عام 2016 على كورنيش نهر الكونغو في برازافيل؟'
    ),
    countryModePrompt: L(
      'Quel pont à haubans moderne devenu le lieu de promenade favori le long du fleuve porte la date de l’indépendance nationale ?',
      'Which modern cable-stayed Corniche bridge—a favorite riverside landmark—is named after Independence Day?',
      '¿Qué moderno puente atirantado junto al río lleva el nombre de la fecha de la independencia nacional?',
      'Qual moderna ponte estaiada junto ao rio leva o nome da data da independência nacional?',
      'ما الجسر المعلق الحديث على النهر الذي يحمل اسم تاريخ استقلال البلاد؟'
    ),
    correct: L('Le Pont du 15-Août-1960', 'The 15 August 1960 Bridge', 'El Puente del 15 de Agosto de 1960', 'A Ponte de 15 de Agosto de 1960', 'جسر 15 أغسطس 1960'),
    distractors: [
      L('Le Pont Henri-Konan-Bédié', 'Henri Konan Bédié Bridge', 'Puente Henri Konan Bédié', 'Ponte Henri Konan Bédié', 'جسر هنري كونان بيدييه'),
      L('Le Pont Mohammed-VI', 'Mohammed VI Bridge', 'Puente Mohammed VI', 'Ponte Mohammed VI', 'جسر محمد السادس'),
      L('Le Pont de Faidherbe', 'Faidherbe Bridge', 'Puente Faidherbe', 'Ponte Faidherbe', 'جسر فيديرب'),
    ],
    explanation: L(
      'Long de 545 mètres, ce viaduc à haubans offre une vue splendide sur les rapides du fleuve Congo et Kinshasa en face.',
      'Spanning 545 meters along the riverfront, the 15 August 1960 Bridge offers panoramic views across the Congo rapids.',
      'Con 545 metros junto al río, este puente ofrece una vista panorámica de los rápidos y de Kinshasa enfrente.',
      'Com 545 metros à beira-rio, a ponte oferece vista panorâmica das corredeiras e de Kinshasa na outra margem.',
      'يمتد جسر 15 أغسطس بطول 545 متراً مطلاً على شلالات النهر وضفة كينشاسا المقابلة.'
    ),
  }),
  mkQ({
    id: 'cur_CG_14',
    countryCode: 'CG',
    category: 'culture',
    subCategory: 'personnalites_heros',
    difficulty: 2,
    topicKey: 'alain_mabanckou_writer',
    source: 'Académie & Prix Renaudot (2006)',
    prompt: L(
      'Quel célèbre écrivain originaire de Pointe-Noire a remporté le Prix Renaudot en 2006 pour « Mémoires de porc-épic » et enseigné au Collège de France ?',
      'Which acclaimed writer from Pointe-Noire won the 2006 Prix Renaudot for "Memoirs of a Porcupine" and lectured at the Collège de France?',
      '¿Qué célebre escritor nacido en Pointe-Noire ganó el Premio Renaudot en 2006 por "Memorias de puercoespín"?',
      'Que célebre escritor natural de Pointe-Noire venceu o Prêmio Renaudot em 2006 por "Memórias de porco-espinho"?',
      'من هو الكاتب الشهير المنحدر من بوانت نوار الفائز بجائزة رينودو الأدبية عام 2006؟'
    ),
    countryModePrompt: L(
      'Quel romancier né en 1966, auteur de « Verre Cassé » et « Petit Piment », a reçu le Prix Renaudot 2006 et le Grand Prix de l’Académie française ?',
      'Which novelist born in 1966, author of "Broken Glass" and "Black Moses," won the 2006 Prix Renaudot?',
      '¿Qué novelista nacido en 1966, autor de "Vaso roto", ganó el Premio Renaudot en 2006?',
      'Qual romancista nascido em 1966, autor de "Copo Quebrado", venceu o Prêmio Renaudot em 2006?',
      'من هو الروائي مؤلف «الزجاج المكسور» الفائز بجائزة رينودو عام 2006؟'
    ),
    correct: L('Alain Mabanckou', 'Alain Mabanckou', 'Alain Mabanckou', 'Alain Mabanckou', 'آلان مابانكو'),
    distractors: [
      L('Tahar Ben Jelloun', 'Tahar Ben Jelloun', 'Tahar Ben Jelloun', 'Tahar Ben Jelloun', 'الطاهر بن جلون'),
      L('Ahmadou Kourouma', 'Ahmadou Kourouma', 'Ahmadou Kourouma', 'Ahmadou Kourouma', 'أحمدو كوروما'),
      L('Mohamed Mbougar Sarr', 'Mohamed Mbougar Sarr', 'Mohamed Mbougar Sarr', 'Mohamed Mbougar Sarr', 'محمد مبوغار سار'),
    ],
    explanation: L(
      'Né en 1966 et élevé à Pointe-Noire, Alain Mabanckou est l’un des romanciers francophones contemporains les plus lus dans le monde.',
      'Raised in Pointe-Noire, Alain Mabanckou is one of the most widely translated contemporary African novelists.',
      'Criado en Pointe-Noire, Alain Mabanckou es uno de los novelistas africanos más leídos del mundo.',
      'Criado em Pointe-Noire, Alain Mabanckou é um dos romancistas africanos mais lidos do mundo.',
      'يُعد آلان مابانكو المتربّي في بوانت نوار أحد أشهر الروائيين الأفارقة المعاصرين عالمياً.'
    ),
  }),
  mkQ({
    id: 'cur_CG_15',
    countryCode: 'CG',
    category: 'culture',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'sony_labou_tansi',
    source: 'Littérature africaine — Éditions du Seuil',
    prompt: L(
      'Quel dramaturge et romancier majeur né en 1947 écrivit « La Vie et demie » et fonda le Rocado Zulu Théâtre à Brazzaville ?',
      'Which visionary playwright and novelist wrote "Life and a Half" ("La Vie et demie") and founded the Rocado Zulu Theatre in Brazzaville?',
      '¿Qué gran dramaturgo y novelista escribió "La vida y media" y fundó el Rocado Zulu Théâtre en Brazzaville?',
      'Que grande dramaturgo e romancista escreveu "A Vida e Meia" e fundou o Rocado Zulu Théâtre em Brazzaville?',
      'من هو المسرحي والروائي البارز مؤلف «الحياة ونصف» ومؤسس مسرح روكادو زولو في برازافيل؟'
    ),
    countryModePrompt: L(
      'Quel géant des lettres surnommé « le poète en colère », auteur de « La Vie et demie », fonda le célèbre Rocado Zulu Théâtre ?',
      'Which literary giant, author of "La Vie et demie" and "The Antipeople," founded Brazzaville’s Rocado Zulu Theatre?',
      '¿Qué gigante literario, autor de "La vida y media", fundó el célebre Rocado Zulu Théâtre?',
      'Qual gigante literário, autor de "A Vida e Meia", fundou o célebre Rocado Zulu Théâtre?',
      'من هو العملاق الأدبي مؤلف «الحياة ونصف» ومؤسس مسرح روكادو زولو؟'
    ),
    correct: L('Sony Labou Tansi', 'Sony Labou Tansi', 'Sony Labou Tansi', 'Sony Labou Tansi', 'سوني لابو تانسي'),
    distractors: [
      L('Wole Soyinka', 'Wole Soyinka', 'Wole Soyinka', 'Wole Soyinka', 'وولي سوينكا'),
      L('Ngũgĩ wa Thiong’o', 'Ngũgĩ wa Thiong’o', 'Ngũgĩ wa Thiong’o', 'Ngũgĩ wa Thiong’o', 'نغوغي وا ثيونغو'),
      L('Birago Diop', 'Birago Diop', 'Birago Diop', 'Birago Diop', 'بيراغو ديوب'),
    ],
    explanation: L(
      'Disparu en 1995, Sony Labou Tansi a bouleversé la littérature francophone par son écriture baroque, satirique et engagée.',
      'Passing away in 1995, Sony Labou Tansi revolutionized African theatre and fiction with bold political satire.',
      'Fallecido en 1995, Sony Labou Tansi renovó el teatro y la novela africana con su sátira audaz.',
      'Falecido em 1995, Sony Labou Tansi revolucionou o teatro e a ficção africana com sátira audaciosa.',
      'أحدث سوني لابو تانسي ثورة في الرواية والمسرح الأفريقي بأسلوبه الجريء الساخر.'
    ),
  }),
  mkQ({
    id: 'cur_CG_16',
    countryCode: 'CG',
    category: 'culture',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'poto_poto_painting_school',
    source: 'Histoire de l’art moderne africain (1951)',
    prompt: L(
      'Quelle célèbre école de peinture moderne, fondée en 1951 à Brazzaville par Pierre Lods, est connue pour ses silhouettes élancées et ses couleurs éclatantes ?',
      'Which famous modern painting school founded in Brazzaville in 1951 by Pierre Lods is celebrated for elongated dancing figures and vivid colors?',
      '¿Qué famosa escuela de pintura moderna fundada en Brazzaville en 1951 por Pierre Lods es célebre por sus siluetas estilizadas y vivos colores?',
      'Que famosa escola de pintura moderna fundada em Brazzaville em 1951 por Pierre Lods é célebre pelas silhuetas alongadas e cores vivas?',
      'ما مدرسة الرسم الحديث الشهيرة التي تأسست في برازافيل عام 1951 واشتهرت بألوانها الزاهية وأشكالها الرشيقة؟'
    ),
    countryModePrompt: L(
      'Comment s’appelle le célèbre atelier de peinture moderne né en 1951 dans un quartier populaire de Brazzaville et exposé dans les musées du monde entier ?',
      'What is the name of the famed modern painting workshop founded in 1951 in Brazzaville and exhibited worldwide?',
      '¿Cómo se llama el célebre taller de pintura moderna nacido en 1951 en Brazzaville?',
      'Como se chama o célebre ateliê de pintura moderna surgido em 1951 em Brazzaville?',
      'ما اسم مدرسة الرسم الحديثة التي ولدت عام 1951 في أحد أحياء برازافيل؟'
    ),
    correct: L('L’École de peinture de Poto-Poto', 'The Poto-Poto School of Painting', 'La Escuela de Pintura de Poto-Poto', 'A Escola de Pintura de Poto-Poto', 'مدرسة بوتو-بوتو للرسم'),
    distractors: [
      L('L’École de Tingatinga', 'Tingatinga School', 'Escuela Tingatinga', 'Escola Tingatinga', 'مدرسة تينغاتينغا'),
      L('L’Atelier d’Abomey', 'Abomey Workshop', 'Taller de Abomey', 'Ateliê de Abomey', 'مشغل أبومي'),
      L('Le mouvement Dak’Art', 'Dak’Art Movement', 'Movimiento Dak’Art', 'Movimento Dak’Art', 'حركة داك آرت'),
    ],
    explanation: L(
      'Révélant des maîtres comme Marcel Gotène, Jacques Zigoma et François Thango, l’École de Poto-Poto est un pilier de l’art contemporain africain.',
      'Launching masters such as Marcel Gotène and François Thango, the Poto-Poto School remains an icon of modern African art.',
      'Con maestros como Marcel Gotène, la Escuela de Poto-Poto es un referente del arte africano moderno.',
      'Revelando mestres como Marcel Gotène, a Escola de Poto-Poto é referência na arte africana moderna.',
      'قدمت مدرسة بوتو-بوتو فنانين كباراً وتُعد من أعمدة الفن الأفريقي الحديث.'
    ),
  }),
  mkQ({
    id: 'cur_CG_17',
    countryCode: 'CG',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'fespam_brazzaville',
    source: 'Union Africaine & Ministère de la Culture (1996)',
    prompt: L(
      'Quel grand festival biennal lancé par l’Union Africaine se tient à Brazzaville depuis 1996 pour célébrer toutes les musiques d’Afrique et de la diaspora ?',
      'Which major biennial festival launched by the African Union has been hosted in Brazzaville since 1996 to celebrate African and diaspora music?',
      '¿Qué gran festival bienal impulsado por la Unión Africana se celebra en Brazzaville desde 1996?',
      'Que grande festival bienal lançado pela União Africana é realizado em Brazzaville desde 1996?',
      'ما المهرجان الموسيقي الكبير الذي أطلقه الاتحاد الأفريقي ويُقام في برازافيل منذ عام 1996؟'
    ),
    countryModePrompt: L(
      'Quel prestigieux festival panafricain réunit tous les deux ans à Brazzaville musiciens du continent et de la diaspora ?',
      'Which prestigious Pan-African music festival brings continent and diaspora artists together in Brazzaville every two years?',
      '¿Qué prestigioso festival panafricano reúne cada dos años en Brazzaville a músicos del continente y la diáspora?',
      'Qual prestigioso festival pan-africano reúne a cada dois anos em Brazzaville músicos do continente e da diáspora?',
      'ما المهرجان الأفريقي الشامل الذي يجمع موسيقيي القارة والشتات في برازافيل كل عامين؟'
    ),
    correct: L('Le FESPAM (Festival Panafricain de Musique)', 'FESPAM (Pan-African Music Festival)', 'El FESPAM (Festival Panafricano de Música)', 'O FESPAM (Festival Pan-Africano de Música)', 'مهرجان فيسبام للموسيقى الأفريقية'),
    distractors: [
      L('Le FESPACO', 'FESPACO', 'FESPACO', 'FESPACO', 'مهرجان فيسباكو للسينما'),
      L('Le MASA', 'MASA', 'MASA', 'MASA', 'سوق الفنون ماسا'),
      L('Le Sauti za Busara', 'Sauti za Busara', 'Sauti za Busara', 'Sauti za Busara', 'ساوتي زا بوسارا'),
    ],
    explanation: L(
      'Alors que Ouagadougou accueille le FESPACO (cinéma), Brazzaville abrite le FESPAM (musique) et le Musée panafricain de la musique.',
      'Just as Ouagadougou hosts FESPACO for cinema, Brazzaville serves as the African Union’s capital for FESPAM music celebrations.',
      'Así como Uagadugú acoge el FESPACO de cine, Brazzaville alberga el FESPAM para la música africana.',
      'Assim como Ouagadougou sedia o FESPACO de cinema, Brazzaville sedia o FESPAM da música.',
      'تستضيف برازافيل مهرجان فيسبام للموسيقى على غرار استضافة واغادوغو لمهرجان فيسباكو للسينما.'
    ),
  }),
  mkQ({
    id: 'cur_CG_18',
    countryCode: 'CG',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'extra_musica_roga',
    source: 'Musique populaire d’Afrique centrale (1993)',
    prompt: L(
      'Quel célèbre groupe fondé à Brazzaville en 1993 avec Roga-Roga, Quentin Moyascko et Guy-Guy Fall a fait danser tout le continent sur « État-Major » ?',
      'Which hit band founded in Brazzaville in 1993 with Roga-Roga set dancefloors ablaze across Africa with hits like "État-Major"?',
      '¿Qué famoso grupo fundado en Brazzaville en 1993 con Roga-Roga hizo bailar a África con "État-Major"?',
      'Que famosa banda fundada em Brazzaville em 1993 com Roga-Roga animou a África com sucessos como "État-Major"?',
      'ما الفرقة الشهيرة التي تأسست في برازافيل عام 1993 مع روغا روغا وألهبت أفريقيا بأغنية «إيتا ماجور»؟'
    ),
    countryModePrompt: L(
      'Quel orchestre mythique né à Brazzaville en 1993 et mené par Roga-Roga a remporté le prix du Meilleur Groupe africain aux Kora Awards en 2000 ?',
      'Which legendary Brazzaville band formed in 1993 and led by Roga-Roga won Best African Group at the 2000 Kora Awards?',
      '¿Qué mítica orquesta nacida en Brazzaville en 1993 y liderada por Roga-Roga ganó el premio Kora en 2000?',
      'Qual mítica banda nascida em Brazzaville em 1993 e liderada por Roga-Roga venceu o prêmio Kora em 2000?',
      'ما الفرقة الأسطورية التي تأسست في برازافيل عام 1993 بقيادة روغا روغا وفازت بجائزة كورا عام 2000؟'
    ),
    correct: L('Extra Musica', 'Extra Musica', 'Extra Musica', 'Extra Musica', 'إكسترا موزيكا'),
    distractors: [
      L('Magic System', 'Magic System', 'Magic System', 'Magic System', 'ماجيك سيستم'),
      L('Bembeya Jazz', 'Bembeya Jazz', 'Bembeya Jazz', 'Bembeya Jazz', 'بيمبيا جاز'),
      L('Kassav’', 'Kassav’', 'Kassav’', 'Kassav’', 'كاساف'),
    ],
    explanation: L(
      'Enchaînant « Les Nouveaux Missiles », « État-Major » et « Trop c’est trop », Extra Musica a marqué toute une génération de rumba et ndombolo.',
      'With anthems like "État-Major" and "Trop c’est trop," Extra Musica defined a golden era of modern Congolese dance music.',
      'Con éxitos como «État-Major» y «Trop c’est trop», Extra Musica marcó toda una época del ndombolo.',
      'Com sucessos como «État-Major» e «Trop c’est trop», Extra Musica marcou uma era da música congolesa.',
      'صنعت فرقة إكسترا موزيكا حقبة ذهبية في موسيقى الرومبا والندومبولو الأفريقية.'
    ),
  }),
  mkQ({
    id: 'cur_CG_19',
    countryCode: 'CG',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'zao_ancien_combattant',
    source: 'Patrimoine musical d’Afrique francophone (1984)',
    prompt: L(
      'Quel chanteur humoriste congolais (Casimir Zoba) a signé en 1984 le tube satirique légendaire « Ancien Combattant » contre l’absurdité de la guerre ?',
      'Which Congolese singer-humorist (Casimir Zoba) recorded the 1984 satirical anti-war classic "Ancien Combattant"?',
      '¿Qué cantante y humorista congoleño grabó en 1984 el clásico satírico antibélico "Ancien Combattant"?',
      'Que cantor e humorista congolês gravou em 1984 o clássico satírico antiguerra "Ancien Combattant"?',
      'من هو المغني الكونغولي الساخر الذي سجل عام 1984 الأغنية الكلاسيكية المناهضة للحرب «المقاتل القديم»؟'
    ),
    countryModePrompt: L(
      'Sous quel célèbre nom de scène l’artiste Casimir Zoba a-t-il conquis l’Afrique en 1984 avec « Ancien Combattant » (« La guerre n’est pas bonne ! ») ?',
      'Under what famous stage name did Casimir Zoba sweep Africa in 1984 with "Ancien Combattant"?',
      '¿Con qué famoso nombre artístico conquistó Casimir Zoba toda África en 1984 con "Ancien Combattant"?',
      'Com que famoso nome artístico Casimir Zoba conquistou a África em 1984 com "Ancien Combattant"?',
      'تحت أي اسم فني اشتهر كازيمير زوبا في أنحاء أفريقيا عام 1984 بأغنية «المقاتل القديم»؟'
    ),
    correct: L('Zao', 'Zao', 'Zao', 'Zao', 'زاو'),
    distractors: [
      L('Alpha Blondy', 'Alpha Blondy', 'Alpha Blondy', 'Alpha Blondy', 'ألفا بلوندي'),
      L('Fally Ipupa', 'Fally Ipupa', 'Fally Ipupa', 'Fally Ipupa', 'فالي إيبوبا'),
      L('Touré Kunda', 'Touré Kunda', 'Touré Kunda', 'Touré Kunda', 'توري كوندا'),
    ],
    explanation: L(
      'Avec son humour incisif et ses chansons devenues cultes (« Ancien Combattant », « Soulard », « Moustique »), Zao fait rire et réfléchir depuis plus de 40 ans.',
      'Blending sharp humor and social satire, Zao’s "Ancien Combattant" remains one of Africa’s most beloved anti-war songs.',
      'Con humor mordaz y crítica social, «Ancien Combattant» de Zao es un himno inolvidable contra la guerra.',
      'Com humor afiado e crítica social, «Ancien Combattant» de Zao é um hino inesquecível contra a guerra.',
      'حظيت أغنية زاو الساخرة بشعبية جارفة لرسالتها الإنسانية الساخرة ضد الحروب.'
    ),
  }),
  mkQ({
    id: 'cur_CG_20',
    countryCode: 'CG',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'maboke_fish_leaves',
    source: 'Gastronomie fluviale du fleuve Congo',
    prompt: L(
      'Comment s’appelle la célèbre spécialité culinaire consistant à cuire à l’étouffée du poisson d’eau douce assaisonné dans de grandes feuilles de marantacées ?',
      'What is the traditional specialty made by steaming seasoned freshwater fish wrapped inside large wild marantaceae leaves?',
      '¿Cómo se llama la especialidad tradicional de pescado de río cocinado al vapor envuelto en grandes hojas silvestres?',
      'Como se chama a especialidade tradicional de peixe de rio cozido no vapor embrulhado em grandes folhas silvestres?',
      'ما اسم الطبق التقليدي الذي يُطهى فيه سمك النهر المتبل بالبخار ملفوفاً بأوراق نباتية عريضة؟'
    ),
    countryModePrompt: L(
      'Quel plat emblématique des bords du fleuve cuit du poisson frais (comme le capitaine ou le silure) à l’étouffée en papillote de feuilles naturelles ?',
      'Which riverside delicacy steams fresh fish like Nile perch or catfish inside aromatic forest-leaf packets?',
      '¿Qué manjar ribereño cuece pescado fresco al vapor dentro de envoltorios aromáticos de hojas?',
      'Qual iguaria ribeirinha cozinha peixe fresco no vapor dentro de trouxinhas aromáticas de folhas?',
      'ما الطبق النهري الشهير الذي يُطهى فيه السمك الطازج على البخار داخل لفائف أوراق الغابات العطرية؟'
    ),
    correct: L('Le Maboké (Liboké)', 'Maboké (Liboké)', 'El Maboké (Liboké)', 'O Maboké (Liboké)', 'المابوكي (ليبوكي)'),
    distractors: [
      L('La Pastilla au pigeon', 'Pigeon Pastilla', 'Pastela de pichón', 'Pastilla de pombo', 'بسطيلة الحمام'),
      L('Le Biryani de mouton', 'Mutton Biryani', 'Biryani de cordero', 'Biryani de carneiro', 'برياني لحم الضأن'),
      L('La Fondue savoyarde', 'Savoyard Fondue', 'Fondue saboyana', 'Fondue saboiana', 'فوندو السافوا'),
    ],
    explanation: L(
      'Parfumé de piment, ciboule, oignon et aubergines locales, le Maboké reste un incontournable des tables familiales et des guinguettes du fleuve.',
      'Seasoned with chili, scallions, and herbs before steaming in forest leaves, Maboké is a quintessential riverside dish.',
      'Aderezado con chile, cebolleta y hierbas en hojas de bosque, el Maboké es un clásico de las mesas ribereñas.',
      'Temperado com pimenta, cebolinha e ervas em folhas da mata, o Maboké é um clássico ribeirinho.',
      'يُتبل المابوكي بالفلفل والبصل والأعشاب قبل طهيه بالبخار ليمنح نكهة نهرية أصيلة.'
    ),
  }),
  mkQ({
    id: 'cur_CG_21',
    countryCode: 'CG',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'chikwangue_cassava',
    source: 'Alimentation traditionnelle du Bassin du Congo',
    prompt: L(
      'Comment s’appelle la pâte de manioc fermentée, cuite et enveloppée dans des feuilles vertes qui accompagne traditionnellement le poisson grillé et le Saka-Saka ?',
      'What is the traditional steamed fermented cassava loaf wrapped in green leaves that accompanies grilled fish and Saka-Saka?',
      '¿Cómo se llama el pan tradicional de yuca fermentada cocida y envuelta en hojas que acompaña al pescado y al Saka-Saka?',
      'Como se chama o pão tradicional de mandioca fermentada cozida em folhas que acompanha peixe grelhado e Saka-Saka?',
      'ما اسم عجينة الكسافا المخمرة والمطهوة في أوراق خضراء التي تُقدم مع السمك المشوي والساكا ساكا؟'
    ),
    countryModePrompt: L(
      'Quel pain de manioc cuit dans de grandes feuilles et ficelé en rouleau accompagne presque tous les plats traditionnels du pays ?',
      'Which leaf-wrapped steamed cassava loaf is the everyday staple accompanying nearly every traditional meal?',
      '¿Qué rollo de yuca cocida envuelto en hojas acompaña casi todas las comidas tradicionales del país?',
      'Qual rolo de mandioca cozida embrulhado em folhas acompanha quase todas as refeições tradicionais?',
      'ما رغيف الكسافا الملفوف بالأوراق والمطهو بالبخار الذي يرافق معظم الوجبات التقليدية؟'
    ),
    correct: L('La chikwangue (kwanga)', 'Chikwangue (Kwanga)', 'La chikwangue (kwanga)', 'A chikwangue (kwanga)', 'التشيكوانغ (كوانغا)'),
    distractors: [
      L('La polenta au parmesan', 'Parmesan polenta', 'Polenta con parmesano', 'Polenta com parmesão', 'بولينتا بالبارميزان'),
      L('Le naan au fromage', 'Cheese naan', 'Pan naan con queso', 'Pão naan com queijo', 'خبز نان بالجبن'),
      L('Le bretzel alsacien', 'Pretzel', 'Bretzel', 'Pretzel', 'البريتزل'),
    ],
    explanation: L(
      'Riche en énergie et se conservant plusieurs jours grâce à ses feuilles protectrices, la chikwangue est la base alimentaire des deux rives du fleuve.',
      'Energy-rich and naturally preserved inside leaf wrappings, chikwangue is a foundational staple across the Congo Basin.',
      'Rica en energía y conservada en hojas naturales, la chikwangue es básica en toda la cuenca del Congo.',
      'Rica em energia e protegida por folhas naturais, a chikwangue é um alimento básico na bacia do Congo.',
      'تُحفظ التشيكوانغ لأيام بفضل لفها بالأوراق الطبيعية وتُعد غذاءً أساسياً في حوض الكونغو.'
    ),
  }),
  mkQ({
    id: 'cur_CG_22',
    countryCode: 'CG',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 2,
    topicKey: 'kituba_lingala_langs',
    source: 'Constitution & Langues nationales du Congo',
    prompt: L(
      'En plus du français (langue officielle), quelles sont les deux grandes langues nationales véhiculaires reconnues par la Constitution de la République du Congo ?',
      'Alongside French (official), which two major national vehicular languages are recognized by the Constitution of the Republic of the Congo?',
      'Además del francés, ¿cuáles son las dos grandes lenguas nacionales vehiculares reconocidas por la Constitución de la República del Congo?',
      'Além do francês, quais são as duas grandes línguas nacionais veiculares reconhecidas pela Constituição da República do Congo?',
      'إلى جانب الفرنسية، ما اللغتان الوطنيتان الرئيسيتان المعترف بهما دستورياً في جمهورية الكونغو؟'
    ),
    countryModePrompt: L(
      'Quelles deux grandes langues nationales véhiculaires (l’une surtout au nord et à Brazzaville, l’autre surtout au sud et à Pointe-Noire) reconnaît la Constitution ?',
      'Which two major national vehicular languages—one dominant in the north and Brazzaville, one in the south and Pointe-Noire—are recognized by the Constitution?',
      '¿Qué dos grandes lenguas nacionales vehiculares reconoce la Constitución del país?',
      'Quais duas grandes línguas nacionais veiculares são reconhecidas pela Constituição do país?',
      'ما اللغتان الوطنيتان المعترف بهما دستورياً في شمال وجنوب البلاد؟'
    ),
    correct: L('Le lingala et le kituba (munukutuba)', 'Lingala and Kituba (Munukutuba)', 'El lingala y el kituba (munukutuba)', 'O lingala e o kituba (munukutuba)', 'اللينغالا والكيتوبا'),
    distractors: [
      L('Le wolof et le sérère', 'Wolof and Serer', 'Wólof y serer', 'Uólofe e serere', 'الولوف والسيرير'),
      L('L’amharique et le tigrigna', 'Amharic and Tigrinya', 'Amhárico y tigriña', 'Amárico e tigrínia', 'الأمهرية والتيغرينية'),
      L('Le zoulou et le xhosa', 'Zulu and Xhosa', 'Zulú y xhosa', 'Zulu e xhosa', 'الزولو والخوسا'),
    ],
    explanation: L(
      'Le kituba (monokutuba) rayonne de Brazzaville-sud jusqu’à Pointe-Noire, tandis que le lingala domine le nord du pays et les quartiers nord de la capitale.',
      'Kituba predominates from southern regions to Pointe-Noire, while Lingala connects Brazzaville and the northern river basin.',
      'El kituba predomina hacia Pointe-Noire, mientras el lingala une Brazzaville y el norte fluvial.',
      'O kituba predomina rumo a Pointe-Noire, enquanto o lingala liga Brazzaville e o norte.',
      'تسود الكيتوبا في الجنوب وبوانت نوار، بينما تنتشر اللينغالا في برازافيل والشمال.'
    ),
  }),
  mkQ({
    id: 'cur_CG_23',
    countryCode: 'CG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'all_africa_games_1965_2015',
    source: 'Union Africaine — Jeux Africains (1965 & 2015)',
    prompt: L(
      'Quel événement multisports continental majeur Brazzaville a-t-elle inauguré en 1965 puis accueilli de nouveau pour son cinquantenaire en 2015 ?',
      'Which major continental multi-sport event was inaugurated in Brazzaville in 1965 and returned there for its 50th anniversary in 2015?',
      '¿Qué gran evento multideportivo continental inauguró Brazzaville en 1965 y volvió a acoger en su 50.º aniversario en 2015?',
      'Que grande evento multiesportivo continental Brazzaville inaugurou em 1965 e voltou a sediar em seu 50º aniversário em 2015?',
      'ما الحدث الرياضي القاري متعدد الألعاب الذي انطلق من برازافيل عام 1965 وعاد إليها في ذكراه الخمسين عام 2015؟'
    ),
    countryModePrompt: L(
      'Quelle grande compétition olympique continentale est née à Brazzaville en juillet 1965 avant d’y revenir en 2015 au complexe de Kintélé ?',
      'Which premier continental multi-sport Games began in Brazzaville in July 1965 before returning to Kintélé in 2015?',
      '¿Qué gran competición multideportiva continental nació en Brazzaville en 1965 antes de regresar en 2015?',
      'Qual grande competição poliesportiva continental nasceu em Brazzaville em 1965 antes de retornar em 2015?',
      'ما الألعاب الرياضية القارية الكبرى التي تأسست في برازافيل عام 1965 وعادت إليها في 2015؟'
    ),
    correct: L('Les Jeux Africains (All-Africa Games)', 'The African Games (All-Africa Games)', 'Los Juegos Panafricanos', 'Os Jogos Africanos', 'الألعاب الأفريقية'),
    distractors: [
      L('Les Jeux Méditerranéens', 'The Mediterranean Games', 'Juegos Mediterráneos', 'Jogos do Mediterrâneo', 'ألعاب البحر المتوسط'),
      L('Les Jeux du Pacifique', 'The Pacific Games', 'Juegos del Pacífico', 'Jogos do Pacífico', 'ألعاب المحيط الهادئ'),
      L('Les Jeux Panaméricains', 'The Pan American Games', 'Juegos Panamericanos', 'Jogos Pan-Americanos', 'الألعاب الأمريكية'),
    ],
    explanation: L(
      'En juillet 1965, Brazzaville accueillit les tout premiers Jeux Africains avec 2 500 athlètes ; 50 ans plus tard en 2015, le complexe de Kintélé célébra cet anniversaire.',
      'In July 1965, Brazzaville staged the very first African Games, returning 50 years later for the 2015 golden-jubilee edition.',
      'En julio de 1965, Brazzaville acogió los primeros Juegos Africanos y celebró su 50.º aniversario en 2015.',
      'Em julho de 1965, Brazzaville sediou os primeiros Jogos Africanos e celebrou os 50 anos em 2015.',
      'انطلقت النسخة الأولى من الألعاب الأفريقية في برازافيل عام 1965 واحتفلت المدينة بيوبيلها الذهبي عام 2015.'
    ),
  }),
  mkQ({
    id: 'cur_CG_24',
    countryCode: 'CG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'paul_moukila_1974',
    source: 'France Football / CAF — Ballon d’Or Africain 1974',
    prompt: L(
      'Quel illustre milieu offensif du CARA Brazzaville surnommé « Sayal » a remporté le Ballon d’Or africain en 1974 ?',
      'Which iconic CARA Brazzaville playmaker nicknamed "Sayal" won the 1974 African Footballer of the Year award?',
      '¿Qué ilustre mediapunta del CARA Brazzaville apodado "Sayal" ganó el Balón de Oro africano en 1974?',
      'Que ilustre meia do CARA Brazzaville apelidado de "Sayal" venceu a Bola de Ouro africana em 1974?',
      'من هو صانع ألعاب نادي كارا برازافيل الملقب بـ«سايال» الفائز بجائزة أفضل لاعب أفريقي عام 1974؟'
    ),
    countryModePrompt: L(
      'Quel maître à jouer surnommé « Sayal », vainqueur de la Coupe des champions 1974 avec le CARA, reste l’unique Ballon d’Or africain de l’histoire du pays ?',
      'Which midfield maestro nicknamed "Sayal," winner of the 1974 Champions Cup with CARA, remains the country’s sole African Player of the Year?',
      '¿Qué maestro apodado "Sayal", campeón africano con CARA en 1974, es el único Balón de Oro africano del país?',
      'Qual maestro apelidado de "Sayal", campeão africano pelo CARA em 1974, é o único Bola de Ouro africano do país?',
      'من هو اللاعب الملقب بـ«سايال» بطل أفريقيا 1974 مع كارا والفائز الوحيد بالكرة الذهبية الأفريقية في تاريخ البلاد؟'
    ),
    correct: L('Paul Moukila', 'Paul Moukila', 'Paul Moukila', 'Paul Moukila', 'بول موكيلا'),
    distractors: [
      L('Jean-Michel M’Bono', 'Jean-Michel M’Bono', 'Jean-Michel M’Bono', 'Jean-Michel M’Bono', 'جان ميشيل مبونو'),
      L('Ndaye Mulamba', 'Ndaye Mulamba', 'Ndaye Mulamba', 'Ndaye Mulamba', 'نداي مولامبا'),
      L('François M’Pelé', 'François M’Pelé', 'François M’Pelé', 'François M’Pelé', 'فرانسوا مبيلي'),
    ],
    explanation: L(
      'Capitaine rayonnant du CARA Brazzaville champion d’Afrique en 1974, Paul Moukila (1950–1992) fut sacré meilleur footballeur du continent la même année.',
      'Captain of 1974 African champions CARA Brazzaville, Paul Moukila earned the continental Player of the Year crown in 1974.',
      'Capitán del CARA campeón de África en 1974, Paul Moukila ganó el premio continental ese mismo año.',
      'Capitão do CARA campeão africano em 1974, Paul Moukila foi eleito o melhor jogador do continente no mesmo ano.',
      'قاد بول موكيلا نادي كارا للقب القاري عام 1974 ونال جائزة أفضل لاعب في أفريقيا في العام ذاته.'
    ),
  }),
  mkQ({
    id: 'cur_CG_25',
    countryCode: 'CG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'serge_ibaka_nba',
    source: 'NBA — Toronto Raptors (2019)',
    prompt: L(
      'Quel célèbre basketteur né à Brazzaville et surnommé « Air Congo » a remporté le titre de champion NBA en 2019 avec les Raptors de Toronto ?',
      'Which NBA star born in Brazzaville and nicknamed "Air Congo" won the 2019 NBA Championship with the Toronto Raptors?',
      '¿Qué estrella de la NBA nacida en Brazzaville y apodada "Air Congo" ganó el anillo de 2019 con Toronto?',
      'Que astro da NBA nascido em Brazzaville e apelidado de "Air Congo" venceu o título de 2019 pelo Toronto Raptors?',
      'من هو نجم دوري NBA المولود في برازافيل والملقب بـ«إير كونغو» الذي توج بلقب 2019 مع تورونتو رابتورز؟'
    ),
    countryModePrompt: L(
      'Quel grand pivot et contreur d’élite né à Brazzaville a brillé à Oklahoma City puis remporté le titre NBA 2019 avec Toronto ?',
      'Which elite shot-blocking forward born in Brazzaville starred in Oklahoma City before winning the 2019 NBA title with Toronto?',
      '¿Qué gran pívot y taponador nacido en Brazzaville brilló en Oklahoma City y ganó la NBA 2019 con Toronto?',
      'Qual grande pivô nascido em Brazzaville brilhou em Oklahoma City e conquistou o título da NBA em 2019 por Toronto?',
      'من هو لاعب الارتكاز المولود في برازافيل الذي تألق في NBA وتوج ببطولة 2019 مع تورونتو؟'
    ),
    correct: L('Serge Ibaka', 'Serge Ibaka', 'Serge Ibaka', 'Serge Ibaka', 'سيرجي إيباكا'),
    distractors: [
      L('Bismack Biyombo', 'Bismack Biyombo', 'Bismack Biyombo', 'Bismack Biyombo', 'بيزماك بيومبو'),
      L('Clint Capela', 'Clint Capela', 'Clint Capela', 'Clint Capela', 'كلينت كابيلا'),
      L('Gorgui Dieng', 'Gorgui Dieng', 'Gorgui Dieng', 'Gorgui Dieng', 'غورغي ديينغ'),
    ],
    explanation: L(
      'Formé au club Avenir du Rail à Brazzaville et issu d’une famille de basketteurs, Serge Ibaka a été triple membre du meilleur cinq défensif de NBA.',
      'Starting out with Avenir du Rail in Brazzaville, Serge Ibaka earned three NBA All-Defensive First Team honors and the 2019 ring.',
      'Formado en Avenir du Rail en Brazzaville, Serge Ibaka fue elegido tres veces en el mejor quinteto defensivo de la NBA.',
      'Formado no Avenir du Rail em Brazzaville, Serge Ibaka foi três vezes do time ideal defensivo e campeão da NBA.',
      'بدأ سيرجي إيباكا مسيرته في برازافيل قبل أن يصبح من أبرز المدافعين في تاريخ NBA.'
    ),
  }),
  mkQ({
    id: 'cur_CG_26',
    countryCode: 'CG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'can_1972_yaounde_squad',
    source: 'CAF — Finale CAN 1972 (Yaoundé)',
    prompt: L(
      'Contre quelle nation les Diables Rouges ont-ils remporté la finale de la CAN 1972 sur le score spectaculaire de 3 buts à 2 à Yaoundé ?',
      'Which nation did the Red Devils defeat 3–2 in Yaoundé to win the 1972 Africa Cup of Nations final?',
      '¿Contra qué selección ganaron los Diablos Rojos por 3-2 la final de la CAN 1972 en Yaundé?',
      'Contra qual seleção os Diabos Vermelhos venceram a final da CAN 1972 por 3 a 2 em Yaoundé?',
      'أمام أي منتخب فاز «الشياطين الحمر» بنهائي كأس أمم أفريقيا 1972 بنتيجة 3-2 في ياوندي؟'
    ),
    countryModePrompt: L(
      'Quel adversaire porté par Salif Keïta et Fantamady Keïta les Diables Rouges ont-ils battu 3-2 en finale de la CAN 1972 ?',
      'Which opponent featuring Salif Keïta and Fantamady Keïta did the Red Devils beat 3–2 in the 1972 AFCON final?',
      '¿A qué rival liderado por Salif Keïta derrotaron los Diablos Rojos por 3-2 en la final de la CAN 1972?',
      'Qual adversário liderado por Salif Keïta os Diabos Vermelhos venceram por 3 a 2 na final da CAN 1972?',
      'أي منتخب هزمه «الشياطين الحمر» بنتيجة 3-2 في نهائي أمم أفريقيا 1972؟'
    ),
    correct: L('Le Mali', 'Mali', 'Malí', 'Mali', 'مالي'),
    distractors: [
      L('L’Égypte', 'Egypt', 'Egipto', 'Egito', 'مصر'),
      L('L’Algérie', 'Algeria', 'Argelia', 'Argélia', 'الجزائر'),
      L('La Zambie', 'Zambia', 'Zambia', 'Zâmbia', 'زامبيا'),
    ],
    explanation: L(
      'Menés 1-0 à la mi-temps, les Diables Rouges renversèrent le Mali en six minutes grâce à Jean-Michel M’Bono (doublé) et François M’Pelé !',
      'Trailing 1-0 at halftime, the Red Devils struck three quick goals via Jean-Michel M’Bono (2) and François M’Pelé to triumph 3-2.',
      'Tras ir 1-0 abajo, remontaron ante Malí con dos goles de M’Bono y uno de M’Pelé.',
      'Após sair perdendo por 1 a 0, viraram sobre o Mali com dois gols de M’Bono e um de M’Pelé.',
      'قلب الشياطين الحمر تأخرهم إلى فوز تاريخي 3-2 على مالي بفضل ثنائية مبونو وهدف مبيلي.'
    ),
  }),
  mkQ({
    id: 'cur_CG_27',
    countryCode: 'CG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'francois_mpele_psg',
    source: 'Ligue 1 & Archives sportives du Congo',
    prompt: L(
      'Quel grand avant-centre des Diables Rouges (champion d’Afrique 1972) fut aussi l’un des tout premiers grands buteurs historiques du Paris Saint-Germain dans les années 1970 ?',
      'Which Red Devils striker (1972 AFCON champion) also became one of Paris Saint-Germain’s earliest all-time scoring legends in the 1970s?',
      '¿Qué gran delantero de los Diablos Rojos (campeón en 1972) fue también uno de los primeros goleadores históricos del PSG en los años 70?',
      'Que grande atacante dos Diabos Vermelhos (campeão em 1972) também foi um dos primeiros grandes artilheiros do PSG nos anos 1970?',
      'من هو مهاجم الشياطين الحمر وبطل 1972 الذي يُعد أيضاً من أوائل هدافي باريس سان جيرمان التاريخيين في السبعينيات؟'
    ),
    countryModePrompt: L(
      'Quel buteur champion d’Afrique 1972 inscrivit près de 100 buts sous le maillot du Paris Saint-Germain entre 1973 et 1979 ?',
      'Which 1972 AFCON-winning striker scored nearly 100 goals for Paris Saint-Germain between 1973 and 1979?',
      '¿Qué goleador campeón africano en 1972 anotó casi 100 goles con el Paris Saint-Germain entre 1973 y 1979?',
      'Qual artilheiro campeão africano em 1972 marcou quase 100 gols pelo Paris Saint-Germain entre 1973 e 1979?',
      'من هو الهدّاف بطل 1972 الذي سجل قرابة 100 هدف بقميص باريس سان جيرمان بين 1973 و1979؟'
    ),
    correct: L('François M’Pelé', 'François M’Pelé', 'François M’Pelé', 'François M’Pelé', 'فرانسوا مبيلي'),
    distractors: [
      L('Thierry Bifouma', 'Thievy Bifouma', 'Thievy Bifouma', 'Thievy Bifouma', 'تيفي بيفوما'),
      L('Christopher Samba', 'Christopher Samba', 'Christopher Samba', 'Christopher Samba', 'كريستوفر سامبا'),
      L('Delvin N’Dinga', 'Delvin N’Dinga', 'Delvin N’Dinga', 'Delvin N’Dinga', 'ديلفين ندينغا'),
    ],
    explanation: L(
      'Avec 95 buts en 217 matchs au PSG (1973–1979) et un but décisif en finale de la CAN 1972, François M’Pelé est une légende des deux continents.',
      'Scoring 95 goals for PSG alongside his 1972 AFCON heroics, François M’Pelé remains one of the club’s all-time greats.',
      'Con 95 goles en el PSG y su gol clave en la final de la CAN 1972, François M’Pelé es una leyenda.',
      'Com 95 gols pelo PSG e gol decisivo na final da CAN 1972, François M’Pelé é uma lenda.',
      'سجل فرانسوا مبيلي 95 هدفاً مع باريس سان جيرمان إلى جانب مساهمته الحاسمة في نهائي 1972.'
    ),
  }),
  mkQ({
    id: 'cur_CG_28',
    countryCode: 'CG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'elemba_rio_2016',
    source: 'Jeux Olympiques de Rio 2016 — Athlétisme',
    prompt: L(
      'Dans quelle épreuve d’athlétisme Franck Elemba a-t-il terminé 4e aux Jeux olympiques de Rio 2016, tout près de la première médaille olympique du Congo ?',
      'In which track-and-field event did Franck Elemba finish 4th at the Rio 2016 Olympics, narrowly missing Congo’s first Olympic medal?',
      '¿En qué prueba de atletismo terminó cuarto Franck Elemba en los Juegos Olímpicos de Río 2016?',
      'Em que prova de atletismo Franck Elemba terminou em 4º lugar nos Jogos Olímpicos do Rio 2016?',
      'في أي مسابقة بألعاب القوى حلّ فرانك إليمبا رابعاً في أولمبياد ريو 2016؟'
    ),
    countryModePrompt: L(
      'Dans quel concours de lancer Franck Elemba a-t-il battu le record national (21,20 m) pour finir 4e des JO de Rio 2016 ?',
      'In which throwing event did Franck Elemba set a 21.20m national record to place 4th at Rio 2016?',
      '¿En qué prueba de lanzamiento batió Franck Elemba el récord nacional (21,20 m) para quedar 4.º en Río 2016?',
      'Em que prova de arremesso Franck Elemba bateu o recorde nacional (21,20 m) ao ficar em 4º no Rio 2016?',
      'في أي مسابقة رمي حطم فرانك إليمبا الرقم الوطني بمسافة 21.20 متراً ليحتل المركز الرابع في ريو 2016؟'
    ),
    correct: L('Le lancer du poids', 'Shot put', 'Lanzamiento de peso', 'Arremesso de peso', 'دفع الجلة'),
    distractors: [
      L('Le saut à la perche', 'Pole vault', 'Salto con pértiga', 'Salto com vara', 'القفز بالزانة'),
      L('Le 400 m haies', '400m hurdles', '400 m vallas', '400m com barreiras', '400 متر حواجز'),
      L('Le marathon', 'Marathon', 'Maratón', 'Maratona', 'الماراثون'),
    ],
    explanation: L(
      'Avec un jet à 21,20 m à Rio, Franck Elemba échoua à seulement 16 centimètres du podium olympique, réalisant la meilleure performance olympique nationale.',
      'With a 21.20m throw in Rio, Franck Elemba missed Olympic bronze by just 16 cm, marking the country’s best-ever Olympic finish.',
      'Con un lanzamiento de 21,20 m en Río, Franck Elemba quedó a solo 16 cm del bronce olímpico.',
      'Com um arremesso de 21,20 m no Rio, Franck Elemba ficou a apenas 16 cm do bronze olímpico.',
      'بمسافة 21.20 متراً في ريو اقترب فرانك إليمبا بـ16 سنتيمتراً فقط من الميدالية البرونزية الأولمبية.'
    ),
  }),
  mkQ({
    id: 'cur_CG_29',
    countryCode: 'CG',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 3,
    topicKey: 'departements_12_congo',
    source: 'Administration territoriale de la République du Congo',
    prompt: L(
      'Quelle ville industrielle située dans la vallée du Niari est surnommée la « capitale sucrière » pour ses grandes plantations de canne à sucre (SARIS) ?',
      'Which industrial town in the Niari Valley is known as Congo’s "sugar capital" for its vast sugarcane estates (SARIS)?',
      '¿Qué ciudad industrial del valle de Niari es conocida como la "capital azucarera" por sus ingenios de caña de azúcar?',
      'Que cidade industrial do vale do Niari é conhecida como a "capital do açúcar" por suas usinas de cana?',
      'ما المدينة الصناعية في وادي نياري الملقبة بـ«عاصمة السكر» لانتشار مزارع قصب السكر فيها؟'
    ),
    countryModePrompt: L(
      'Quelle ville de la Bouenza située entre Brazzaville et Dolisie est célèbre comme le grand pôle sucrier et agricole du pays ?',
      'Which Bouenza town between Brazzaville and Dolisie is renowned as the country’s leading sugar-producing hub?',
      '¿Qué ciudad de Bouenza entre Brazzaville y Dolisie es célebre como polo azucarero del país?',
      'Qual cidade de Bouenza entre Brazzaville e Dolisie é célebre como o polo açucareiro do país?',
      'ما المدينة الواقعة في إقليم بوينزا بين برازافيل ودوليزي وتُعد مركز إنتاج السكر في البلاد؟'
    ),
    correct: L('Nkayi', 'Nkayi', 'Nkayi', 'Nkayi', 'نكايي'),
    distractors: [
      L('Ouesso', 'Ouesso', 'Ouesso', 'Ouesso', 'ويسو'),
      L('Impfondo', 'Impfondo', 'Impfondo', 'Impfondo', 'إمبفوندو'),
      L('Gamboma', 'Gamboma', 'Gamboma', 'Gamboma', 'غامبوما'),
    ],
    explanation: L(
      'Fondée en 1929 (anciennement Jacob), Nkayi est la quatrième ville du pays et le cœur de l’industrie sucrière de la vallée du Niari.',
      'Located in Bouenza along the CFCO railway, Nkayi is the country’s fourth-largest city and main sugar-refining hub.',
      'Situada en Bouenza junto al ferrocarril CFCO, Nkayi es la cuarta ciudad del país y centro azucarero.',
      'Localizada em Bouenza ao longo da ferrovia CFCO, Nkayi é a quarta maior cidade e centro açucareiro.',
      'تُعد نكايي رابع أكبر مدن البلاد والمركز الرئيسي لصناعة السكر في وادي نياري.'
    ),
  }),
  mkQ({
    id: 'cur_CG_30',
    countryCode: 'CG',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'felix_eboue_brazza',
    source: 'Panthéon — Histoire d’Afrique équatoriale',
    prompt: L(
      'Quel gouverneur guyanais nommé à Brazzaville en 1940 devint la première personnalité noire honorée au Panthéon à Paris (1949), et donne son nom au stade historique de la capitale ?',
      'Which Guyanese-born governor stationed in Brazzaville in 1940 became the first Black person honored in France’s Panthéon and gave his name to the capital’s historic stadium?',
      '¿Qué gobernador nacido en Guayana en 1940 dio nombre al estadio histórico de Brazzaville y reposa en el Panteón de París?',
      'Que governador nascido na Guiana em 1940 deu nome ao estádio histórico de Brazzaville e está sepultado no Panteão de Paris?',
      'من هو الحاكم الذي عُين في برازافيل عام 1940 ودفن في البانتيون بباريس وسُمي الملعب التاريخي للعاصمة باسمه؟'
    ),
    countryModePrompt: L(
      'Quel grand gouverneur général de l’AEF à Brazzaville en 1940 a laissé son nom au célèbre stade historique du centre-ville ?',
      'Which Governor-General based in Brazzaville in 1940 gave his name to the capital’s famed central stadium?',
      '¿Qué gobernador general radicado en Brazzaville en 1940 dio nombre al histórico estadio central?',
      'Qual governador-geral sediado em Brazzaville em 1940 deu nome ao famoso estádio central?',
      'من هو الحاكم العام المقيم في برازافيل عام 1940 الذي يحمل الملعب التاريخي وسط المدينة اسمه؟'
    ),
    correct: L('Félix Éboué', 'Félix Éboué', 'Félix Éboué', 'Félix Éboué', 'فيليكس إيبوي'),
    distractors: [
      L('Aimé Césaire', 'Aimé Césaire', 'Aimé Césaire', 'Aimé Césaire', 'إيمي سيزير'),
      L('René Maran', 'René Maran', 'René Maran', 'René Maran', 'رينيه ماران'),
      L('Frantz Fanon', 'Frantz Fanon', 'Frantz Fanon', 'Frantz Fanon', 'فرانتز فانون'),
    ],
    explanation: L(
      'Humaniste et administrateur respecté, Félix Éboué réunit la Conférence de Brazzaville en 1944 avant de décéder la même année.',
      'A respected administrator and humanist, Félix Éboué helped organize the 1944 Brazzaville Conference before passing away later that year.',
      'Respetado humanista, Félix Éboué impulsó la Conferencia de Brazzaville de 1944.',
      'Humanista respeitado, Félix Éboué impulsionou a Conferência de Brazzaville de 1944.',
      'كان فيليكس إيبوي شخصية إنسانية بارزة وأسهم في تنظيم مؤتمر برازافيل عام 1944.'
    ),
  }),
  mkQ({
    id: 'cur_CG_31',
    countryCode: 'CG',
    category: 'culture',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'tchicaya_utamsi_poet',
    source: 'Poésie africaine & Prix Tchicaya U Tam’si',
    prompt: L(
      'Quel grand poète congolais né à Mpili en 1931, auteur de « Le Mauvais Sang », a inspiré un prestigieux prix international de poésie africaine décerné à Assilah ?',
      'Which major Congolese poet born in Mpili in 1931, author of "Le Mauvais Sang," inspired the prestigious African Poetry Prize awarded in Asilah?',
      '¿Qué gran poeta congoleño nacido en Mpili en 1931 inspiró un prestigioso premio internacional de poesía africana?',
      'Que grande poeta congolês nascido em Mpili em 1931 inspirou um prestigioso prêmio internacional de poesia africana?',
      'من هو الشاعر الكونغولي الكبير المولود عام 1931 الذي سُميت باسمه جائزة دولية مرموقة للشعر الأفريقي؟'
    ),
    countryModePrompt: L(
      'Quel illustre poète né en 1931 dans le Kouilou, surnommé « la petite feuille qui parle pour son pays », reçut le prix du FESMAN en 1966 ?',
      'Which celebrated poet born in Kouilou in 1931—whose pen name means "little leaf that speaks for its country"—won the 1966 Dakar Arts Festival prize?',
      '¿Qué ilustre poeta nacido en Kouilou en 1931 ganó el premio de poesía en Dakar 1966?',
      'Qual ilustre poeta nascido no Kouilou em 1931 venceu o prêmio de poesia em Dacar 1966?',
      'من هو الشاعر الشهير المولود في كويلو عام 1931 الفائز بجائزة مهرجان دكار عام 1966؟'
    ),
    correct: L('Tchicaya U Tam’si', 'Tchicaya U Tam’si', 'Tchicaya U Tam’si', 'Tchicaya U Tam’si', 'تشيكايا أو تامسي'),
    distractors: [
      L('David Diop', 'David Diop', 'David Diop', 'David Diop', 'ديفيد ديوب'),
      L('Léon-Gontran Damas', 'Léon-Gontran Damas', 'Léon-Gontran Damas', 'Léon-Gontran Damas', 'ليون غونتران داماس'),
      L('Édouard Maunick', 'Édouard Maunick', 'Édouard Maunick', 'Édouard Maunick', 'إدوارد مونيك'),
    ],
    explanation: L(
      'Gérald-Félix Tchicaya choisit le nom de plume « U Tam’si » (« petite feuille qui parle pour son pays » en kikongo/vili) et travailla aussi à l’UNESCO.',
      'Born Gérald-Félix Tchicaya, his pen name "U Tam’si" means "little leaf that speaks for its country."',
      'Nacido Gérald-Félix Tchicaya, su seudónimo significa "hoja pequeña que habla por su país".',
      'Nascido Gérald-Félix Tchicaya, seu pseudônimo significa "pequena folha que fala por seu país".',
      'اختار اسم «أو تامسي» ومعناه «الورقة الصغيرة التي تتحدث باسم وطنها» وترك إرثاً شعرياً عظيماً.'
    ),
  }),
  mkQ({
    id: 'cur_CG_32',
    countryCode: 'CG',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'stanley_pool_malebo',
    source: 'Géographie du Bassin du Congo',
    prompt: L(
      'Comment s’appelle l’élargissement lacustre naturel du fleuve Congo long de 35 km entre Brazzaville et Kinshasa (autrefois appelé Stanley Pool) ?',
      'What is the name of the 35-km-long natural lake-like widening of the Congo River between Brazzaville and Kinshasa (formerly Stanley Pool)?',
      '¿Cómo se llama el ensanchamiento lacustre natural del río Congo de 35 km entre Brazzaville y Kinshasa?',
      'Como se chama o alargamento natural do rio Congo entre Brazzaville e Kinshasa (antigo Stanley Pool)?',
      'ما اسم الاتساع البحيراتي الطبيعي لنهر الكونغو بطول 35 كم بين برازافيل وكينشاسا؟'
    ),
    countryModePrompt: L(
      'Sous quel nom connaît-on aujourd’hui l’ancien « Stanley Pool », vaste bassin fluvial que domine Brazzaville avant les rapides ?',
      'By what name is the former "Stanley Pool," the broad river basin bordering Brazzaville just above the rapids, known today?',
      '¿Con qué nombre se conoce hoy al antiguo "Stanley Pool" frente a Brazzaville?',
      'Por qual nome é hoje conhecida a antiga bacia "Stanley Pool" em frente a Brazzaville?',
      'ما الاسم الحالي للحوض النهري الواسع أمام برازافيل الذي كان يُعرف سابقاً ببحيرة ستانلي؟'
    ),
    correct: L('Le Pool Malebo', 'Pool Malebo', 'El Pool Malebo', 'O Pool Malebo', 'حوض ماليبو'),
    distractors: [
      L('Le Lac Albert', 'Lake Albert', 'Lago Alberto', 'Lago Alberto', 'بحيرة ألبرت'),
      L('Le Delta du Saloum', 'Saloum Delta', 'Delta del Saloum', 'Delta do Saloum', 'دلتا سالوم'),
      L('La Baie de Biafra', 'Bight of Biafra', 'Golfo de Biafra', 'Golfo de Biafra', 'خليج بيافرا'),
    ],
    explanation: L(
      'Nommé d’après les palmiers « malebo » (rônier/borassus) de ses îles comme l’île Mbamou, le Pool Malebo s’étire sur près de 35 km de long et 25 km de large.',
      'Named after the malebo palm trees on Mbamou Island, Pool Malebo forms a sweeping 35-km-long river basin.',
      'Llamado así por las palmeras "malebo" de la isla Mbamou, forma una amplia cuenca fluvial de 35 km.',
      'Batizado em referência às palmeiras "malebo" da ilha Mbamou, forma uma ampla bacia fluvial de 35 km.',
      'سُمي تيمناً بأشجار النخيل «ماليبو» في جزيرة مبامو ويشكل حوضاً نهرياً واسعاً بين العاصمتين.'
    ),
  }),
  mkQ({
    id: 'cur_CG_33',
    countryCode: 'CG',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 4,
    topicKey: 'kouilou_niari_river',
    source: 'Hydrographie de la République du Congo',
    prompt: L(
      'Quel fleuve long de plus de 700 km porte le nom de « Niari » dans son cours supérieur avant de devenir le « Kouilou » vers l’océan Atlantique ?',
      'Which river over 700 km long is known as the "Niari" in its upper course before becoming the "Kouilou" toward the Atlantic Ocean?',
      '¿Qué río de más de 700 km se llama "Niari" en su curso alto antes de pasar a llamarse "Kouilou" hacia el Atlántico?',
      'Que rio com mais de 700 km chama-se "Niari" no curso superior antes de virar "Kouilou" rumo ao Atlântico?',
      'ما النهر الذي يبلغ طوله أكثر من 700 كم ويُسمى «نياري» في مجراه الأعلى ثم «كويلو» عند مصبه في الأطلسي؟'
    ),
    countryModePrompt: L(
      'Quel grand fleuve côtier traversant Dolisie et les gorges du Mayombe est l’unique bassin hydrographique majeur à couler entièrement en dehors du bassin du Congo dans le pays ?',
      'Which major coastal river flowing past Dolisie and through the Mayombe hills empties directly into the Atlantic instead of the Congo River?',
      '¿Qué gran río costero que cruza el Mayombe desemboca directamente en el Atlántico en lugar de hacerlo en el río Congo?',
      'Qual grande rio costeiro que atravessa o Mayombe deságua diretamente no Atlântico sem passar pelo rio Congo?',
      'ما النهر الساحلي الكبير الذي يعبر مرتفعات مايومبي ويصب مباشرة في الأطلسي؟'
    ),
    correct: L('Le fleuve Kouilou-Niari', 'The Kouilou-Niari River', 'El río Kouilou-Niari', 'O rio Kouilou-Niari', 'نهر كويلو-نياري'),
    distractors: [
      L('La rivière Alima', 'The Alima River', 'El río Alima', 'O rio Alima', 'نهر أليما'),
      L('La Sangha', 'The Sangha River', 'El río Sangha', 'O rio Sangha', 'نهر سانغا'),
      L('L’Oubangui', 'The Ubangi River', 'El río Ubangui', 'O rio Ubangui', 'نهر أوبانغي'),
    ],
    explanation: L(
      'Tandis que la Sangha, l’Alima et le Djoué rejoignent le fleuve Congo, le Kouilou-Niari se jette directement dans l’Atlantique au nord de Pointe-Noire.',
      'While the Sangha and Alima feed the Congo, the Kouilou-Niari flows directly into the Atlantic north of Pointe-Noire.',
      'Mientras el Sangha y el Alima alimentan al Congo, el Kouilou-Niari desemboca directamente en el Atlántico.',
      'Enquanto o Sangha e o Alima deságuam no Congo, o Kouilou-Niari chega diretamente ao Atlântico.',
      'يصب نهر كويلو-نياري مباشرة في المحيط الأطلسي شمال بوانت نوار، بخلاف روافد نهر الكونغو.'
    ),
  }),
  mkQ({
    id: 'cur_CG_34',
    countryCode: 'CG',
    category: 'culture',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'franklin_boukaka',
    source: 'Patrimoine musical engagé (1940–1972)',
    prompt: L(
      'Quel auteur-compositeur congolais engagé est l’auteur du célèbre hymne social « Le Bûcheron » et « Et quand on est seul » ?',
      'Which committed Congolese singer-songwriter composed the famous social anthem "Le Bûcheron" (The Woodcutter)?',
      '¿Qué cantautor congoleño comprometido compuso el célebre himno social "Le Bûcheron"?',
      'Que cantor e compositor congolês compôs o célebre hino social "Le Bûcheron"?',
      'من هو المغني والملحن الكونغولي الملتزم مؤلف الأغنية الاجتماعية الشهيرة «الحطاب»؟'
    ),
    countryModePrompt: L(
      'Quel musicien et poète disparu en 1972 a marqué toute l’Afrique avec la chanson culte « Le Bûcheron » (« Nakoki te ! ») ?',
      'Which musician and poet who passed in 1972 moved Africa with the iconic protest song "Le Bûcheron"?',
      '¿Qué músico y poeta fallecido en 1972 emocionó a África con la canción "Le Bûcheron"?',
      'Qual músico e poeta falecido em 1972 emocionou a África com a canção "Le Bûcheron"?',
      'من هو الموسيقار والشاعر الراحل عام 1972 صاحب الأغنية الخالدة «الحطاب»؟'
    ),
    correct: L('Franklin Boukaka', 'Franklin Boukaka', 'Franklin Boukaka', 'Franklin Boukaka', 'فرانكلين بوكاكا'),
    distractors: [
      L('Franco Luambo', 'Franco Luambo', 'Franco Luambo', 'Franco Luambo', 'فرانكو لوامبو'),
      L('Tabu Ley Rochereau', 'Tabu Ley Rochereau', 'Tabu Ley Rochereau', 'Tabu Ley Rochereau', 'تابو لي روشيرو'),
      L('Koffi Olomidé', 'Koffi Olomidé', 'Koffi Olomidé', 'Koffi Olomidé', 'كوفي أولوميدي'),
    ],
    explanation: L(
      'Collaborateur du grand arrangeur Manu Dibango pour l’enregistrement de « Le Bûcheron », Franklin Boukaka reste une voix inoubliable des indépendances.',
      'Recorded with Manu Dibango’s arrangements, Franklin Boukaka’s "Le Bûcheron" stands as a classic of post-independence African music.',
      'Grabada con arreglos de Manu Dibango, «Le Bûcheron» de Franklin Boukaka es un clásico inolvidable.',
      'Gravada com arranjos de Manu Dibango, «Le Bûcheron» de Franklin Boukaka é um clássico inesquecível.',
      'تُعد أغنية «الحطاب» التي سُجلت بتوزيع مانو ديبانغو من كلاسيكيات الغناء الأفريقي الملتزم.'
    ),
  }),
  mkQ({
    id: 'cur_CG_35',
    countryCode: 'CG',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'diables_rouges_name',
    source: 'FECOFOOT — Équipe nationale',
    prompt: L(
      'En 1972, quel gardien héroïque surnommé « l’homme aux mains d’or » gardait les buts des Diables Rouges lors du triomphe à la CAN ?',
      'In 1972, which heroic goalkeeper defended the Red Devils’ net during their triumphant AFCON campaign?',
      'En 1972, ¿qué heroico portero defendió la meta de los Diablos Rojos en su conquista de la CAN?',
      'Em 1972, qual heroico goleiro defendeu a baliza dos Diabos Vermelhos na conquista da CAN?',
      'من هو الحارس البطل الذي حمى مرمى «الشياطين الحمر» خلال التتويج بأمم أفريقيا 1972؟'
    ),
    countryModePrompt: L(
      'Quel gardien légendaire (plus tard sélectionneur) gardait les cages de la sélection championne d’Afrique en 1972 à Yaoundé ?',
      'Which legendary goalkeeper (and later head coach) stood between the posts for the 1972 AFCON champions?',
      '¿Qué legendario guardameta defendió la portería de la selección campeona de África en 1972?',
      'Qual lendário goleiro defendeu a seleção campeã da África em 1972?',
      'من هو الحارس الأسطوري الذي حرس عرين المنتخب المتوج باللقب القاري عام 1972؟'
    ),
    correct: L('Maxime Matsima', 'Maxime Matsima', 'Maxime Matsima', 'Maxime Matsima', 'ماكسيم ماتسيما'),
    distractors: [
      L('Thomas Nkono', 'Thomas Nkono', 'Thomas Nkono', 'Thomas Nkono', 'توماس نكونو'),
      L('Badou Zaki', 'Badou Zaki', 'Badou Zaki', 'Badou Zaki', 'بادو الزاكي'),
      L('Vincent Enyeama', 'Vincent Enyeama', 'Vincent Enyeama', 'Vincent Enyeama', 'فينسنت إنياما'),
    ],
    explanation: L(
      'Décisif en demi-finale contre le Cameroun hôte puis en finale face au Mali, Maxime Matsima fut un pilier de l’épopée de Yaoundé 1972.',
      'Crucial in the semi-final win over hosts Cameroon and the 3-2 final vs Mali, Maxime Matsima anchored the 1972 title.',
      'Decisivo ante Camerún y Malí, Maxime Matsima fue un pilar del título de 1972.',
      'Decisivo contra Camarões e Mali, Maxime Matsima foi um pilar da conquista de 1972.',
      'كان ماكسيم ماتسيما سداً منيعاً أمام الكاميرون ومالي ليقود المنتخب للقب 1972.'
    ),
  }),
  mkQ({
    id: 'cur_CG_36',
    countryCode: 'CG',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 2,
    topicKey: 'ocean_oil_djeno',
    source: 'Économie maritime & Énergie du Congo',
    prompt: L(
      'Quelle ressource naturelle extraite principalement au large de Pointe-Noire (terminal de Djéno) constitue le premier poste d’exportation du Congo ?',
      'Which natural resource extracted mainly offshore near Pointe-Noire (Djéno terminal) is the Republic of the Congo’s top export?',
      '¿Qué recurso natural extraído principalmente frente a Pointe-Noire constituye la principal exportación del Congo?',
      'Que recurso natural extraído principalmente ao largo de Pointe-Noire é a principal exportação do Congo?',
      'ما المورد الطبيعي المستخرج قبالة سواحل بوانت نوار الذي يشكل الصادرات الرئيسية لجمهورية الكونغو؟'
    ),
    countryModePrompt: L(
      'Quelle ressource énergétique extraite en mer au large de Pointe-Noire et acheminée au terminal de Djéno domine les exportations du pays ?',
      'Which energy resource pumped offshore near Pointe-Noire and exported via the Djéno terminal dominates national exports?',
      '¿Qué recurso energético extraído frente a Pointe-Noire domina las exportaciones del país?',
      'Qual recurso energético extraído ao largo de Pointe-Noire domina as exportações do país?',
      'ما المورد الطاقوي المستخرج قبالة بوانت نوار والذي يهيمن على صادرات البلاد؟'
    ),
    correct: L('Le pétrole brut offshore', 'Offshore crude oil', 'El petróleo crudo marino', 'O petróleo bruto offshore', 'النفط الخام البحري'),
    distractors: [
      L('Le safran', 'Saffron', 'Azafrán', 'Açafrão', 'الزعفران'),
      L('La vanille', 'Vanilla', 'Vainilla', 'Baunilha', 'الفانيليا'),
      L('L’étain polaire', 'Arctic tin', 'Estaño polar', 'Estanho polar', 'القصدير القطبي'),
    ],
    explanation: L(
      'Avec d’importants gisements marins (Moho Nord, Nkossa, Likouala), le pétrole offshore et le gaz naturel liquéfié forment le cœur des exportations maritimes.',
      'Driven by offshore fields like Moho Nord and Nkossa, crude oil and emerging LNG shipments anchor the coastal economy.',
      'Con yacimientos como Moho Nord y Nkossa, el crudo marino es el motor exportador costero.',
      'Com campos como Moho Nord e Nkossa, o petróleo offshore é a base das exportações.',
      'تُعد حقول النفط البحرية قبالة بوانت نوار المحرك الرئيسي للصادرات الوطنية.'
    ),
  }),
  mkQ({
    id: 'cur_CG_37',
    countryCode: 'CG',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 3,
    topicKey: 'bouillon_nzombe_saka',
    source: 'Cuisine congolaise traditionnelle',
    prompt: L(
      'Dans la cuisine des deux rives du fleuve Congo, quel légume vert pilé longuement au mortier et mijoté à l’huile de palme s’appelle « Saka-Saka » (ou Pondu) ?',
      'In Congolese cuisine, what pounded green leaf stew slow-cooked with palm oil is called "Saka-Saka" (or Pondu)?',
      'En la cocina congoleña, ¿qué guiso verde machacado y cocido con aceite de palma se llama "Saka-Saka"?',
      'Na culinária congolesa, qual prato verde socado no pilão e cozido com azeite de dendê chama-se "Saka-Saka"?',
      'في المطبخ الكونغولي، ما الخضار الورقي المدقوق والمطهو بزيت النخيل المعروف باسم «ساكا ساكا»؟'
    ),
    countryModePrompt: L(
      'À partir de quelles feuilles soigneusement pilées prépare-t-on le célèbre plat vert nommé « Saka-Saka » ?',
      'Which plant’s young leaves are carefully pounded and slow-simmered to make the beloved dish "Saka-Saka"?',
      '¿Con qué hojas machacadas y cocidas a fuego lento se prepara el célebre plato "Saka-Saka"?',
      'Com quais folhas socadas e cozidas lentamente se prepara o célebre prato "Saka-Saka"?',
      'من أوراق أي نبات مدقوقة ومطهوة ببطء يُحضّر طبق «ساكا ساكا» الشهير؟'
    ),
    correct: L('Les feuilles de manioc', 'Cassava leaves', 'Las hojas de yuca', 'As folhas de mandioca', 'أوراق الكسافا (المنيهوت)'),
    distractors: [
      L('Les feuilles de chêne', 'Oak leaves', 'Hojas de roble', 'Folhas de carvalho', 'أوراق البلوط'),
      L('Les algues japonaises nori', 'Nori seaweed', 'Algas nori', 'Algas nori', 'أعشاب النوري البحرية'),
      L('Les aiguilles de pin', 'Pine needles', 'Agujas de pino', 'Agulhas de pinheiro', 'إبر الصنوبر'),
    ],
    explanation: L(
      'Pilées avec de l’ail, des oignons, du poireau, des aubergines et parfois de la pâte d’arachide ou du poisson fumé, les feuilles de manioc nourrissent toute la région.',
      'Pounded cassava leaves simmered with garlic, leeks, palm oil, and smoked fish form one of Central Africa’s greatest comfort dishes.',
      'Las hojas de yuca machacadas con ajo, puerro y pescado ahumado son un plato esencial de África Central.',
      'Folhas de mandioca socadas com alho, alho-poró e peixe defumado formam um clássico centro-africano.',
      'تُدق أوراق الكسافا وتُطهى ببطء مع الثوم وزيت النخيل لتشكّل أحد أشهر الأطباق الشعبية.'
    ),
  }),
  mkQ({
    id: 'cur_CG_38',
    countryCode: 'CG',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'sangha_trinational_unesco',
    source: 'UNESCO — Trinational de la Sangha (2012)',
    countryModeAllowed: false,
    prompt: L(
      'Quels trois pays partagent la grande forêt protégée du « Trinational de la Sangha » (TNS), inscrite au patrimoine mondial de l’UNESCO ?',
      'Which three countries share the UNESCO World Heritage Sangha Trinational rainforest reserve?',
      '¿Qué tres países comparten la selva protegida del Trinacional del Sangha (UNESCO)?',
      'Quais três países compartilham a floresta protegida Trinacional do Sangha (UNESCO)?',
      'ما الدول الثلاث التي تتقاسم محمية «سانغا الثلاثية» المدرجة في اليونسكو؟'
    ),
    countryModePrompt: L(
      'Avec quels deux pays voisins le parc national de Nouabalé-Ndoki forme-t-il le site transfrontalier UNESCO du « Trinational de la Sangha » ?',
      'With which two neighboring countries does Nouabalé-Ndoki National Park form the UNESCO Sangha Trinational site?',
      '¿Con qué dos países vecinos forma el parque de Nouabalé-Ndoki el sitio UNESCO Trinacional del Sangha?',
      'Com quais dois países vizinhos o parque de Nouabalé-Ndoki forma o sítio UNESCO Trinacional do Sangha?',
      'مع أي دولتين مجاورتين يشكل منتزه نوابالي ندوكي موقع سانغا الثلاثي المدرج لدى اليونسكو؟'
    ),
    correct: L(
      'La République du Congo, le Cameroun et la République centrafricaine',
      'Republic of the Congo, Cameroon, and Central African Republic',
      'República del Congo, Camerún y República Centroafricana',
      'República do Congo, Camarões e República Centro-Africana',
      'جمهورية الكونغو والكاميرون وأفريقيا الوسطى'
    ),
    distractors: [
      L('Le Maroc, la Tunisie et l’Algérie', 'Morocco, Tunisia, and Algeria', 'Marruecos, Túnez y Argelia', 'Marrocos, Tunísia e Argélia', 'المغرب وتونس والجزائر'),
      L('Le Sénégal, la Gambie et le Cap-Vert', 'Senegal, Gambia, and Cabo Verde', 'Senegal, Gambia y Cabo Verde', 'Senegal, Gâmbia e Cabo Verde', 'السنغال وغامبيا والرأس الأخضر'),
      L('Le Kenya, la Somalie et Djibouti', 'Kenya, Somalia, and Djibouti', 'Kenia, Somalia y Yibuti', 'Quênia, Somália e Djibuti', 'كينيا والصومال وجيبوتي'),
    ],
    explanation: L(
      'Créé en 2012 à l’UNESCO, le Trinational de la Sangha réunit les parcs de Nouabalé-Ndoki, Lobéké et Dzanga-Ndoki sur 750 000 hectares continus.',
      'Uniting Nouabalé-Ndoki, Lobéké, and Dzanga-Ndoki parks, the Sangha Trinational forms a vast transboundary forest sanctuary.',
      'Reuniendo tres parques fronterizos, el Trinacional del Sangha protege un santuario forestal único.',
      'Unindo três parques fronteiriços, o Trinacional do Sangha protege um santuário florestal contínuo.',
      'تجمع محمية سانغا الثلاثية ثلاثة منتزهات حدودية لحماية غابات حوض الكونغو.'
    ),
  }),
  mkQ({
    id: 'cur_CG_39',
    countryCode: 'CG',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 3,
    topicKey: 'departements_louise_poto',
    source: 'Constitution & Départements de la République du Congo',
    prompt: L(
      'Combien de départements administratifs (incluant Brazzaville et Pointe-Noire jusqu’en 2024, avant la création de 3 nouveaux départements en octobre 2024) comptait traditionnellement le pays, portant aujourd’hui le total à 15 ?',
      'After adding three new administrative departments in October 2024 (Congo-Oubangui, Djoué-Léfini, Nkeni-Alima), how many departments make up the Republic of the Congo?',
      '¿Cuántos departamentos administrativos integran la República del Congo desde la creación de tres nuevos departamentos en octubre de 2024?',
      'Quantos departamentos administrativos integram a República do Congo após a criação de três novos em outubro de 2024?',
      'كم مقاطعة إدارية تضم جمهورية الكونغو بعد استحداث ثلاث مقاطعات جديدة في أكتوبر 2024؟'
    ),
    countryModePrompt: L(
      'Passant de 12 à quel nouveau total de départements en octobre 2024 après la création de Congo-Oubangui, Djoué-Léfini et Nkeni-Alima ?',
      'Expanding from 12, how many total administrative departments does the country count since October 2024?',
      'Pasando de 12, ¿cuántos departamentos administrativos suma el país desde octubre de 2024?',
      'Passando de 12, quantos departamentos administrativos o país soma desde outubro de 2024?',
      'بعد أن كانت 12 مقاطعة، إلى كم ارتفع عدد المقاطعات الإدارية في البلاد منذ أكتوبر 2024؟'
    ),
    correct: L('15 départements', '15 departments', '15 departamentos', '15 departamentos', '15 مقاطعة'),
    distractors: [
      L('3 départements', '3 departments', '3 departamentos', '3 departamentos', '3 مقاطعات'),
      L('50 États fédérés', '50 states', '50 estados', '50 estados', '50 ولاية'),
      L('2 provinces seulement', 'Only 2 provinces', 'Solo 2 provincias', 'Apenas 2 províncias', 'مقاطعتان فقط'),
    ],
    explanation: L(
      'Historiquement organisée en 12 départements, la carte administrative a été élargie en octobre 2024 à 15 départements pour rapprocher l’administration des citoyens.',
      'Expanding from 12 to 15 departments in October 2024, Congo-Oubangui, Djoué-Léfini, and Nkeni-Alima joined the map.',
      'Ampliada de 12 a 15 departamentos en octubre de 2024, la reforma territorial acercó la administración.',
      'Ampliada de 12 para 15 departamentos em outubro de 2024, a divisão territorial ganhou três novas unidades.',
      'توسع التقسيم الإداري في أكتوبر 2024 من 12 إلى 15 مقاطعة.'
    ),
  }),
  mkQ({
    id: 'cur_CG_40',
    countryCode: 'CG',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'sape_bacongo',
    source: 'Patrimoine urbain — La SAPE de Brazzaville',
    prompt: L(
      'Dans quel quartier historique de Brazzaville est né dès les années 1920–1960 le cœur du mouvement des « Sapeurs » (la SAPE) ?',
      'Which historic Brazzaville district gave rise to the iconic "Sapeurs" fashion movement (La SAPE)?',
      '¿En qué barrio histórico de Brazzaville nació el corazón del movimiento de los "Sapeurs" (La SAPE)?',
      'Em que bairro histórico de Brazzaville surgiu o berço do movimento dos "Sapeurs" (La SAPE)?',
      'في أي حي تاريخي ببرازافيل نشأت حركة الأناقة الشهيرة «لاساب» (SAPE)؟'
    ),
    countryModePrompt: L(
      'Quel célèbre quartier du sud de Brazzaville (fondé sur l’avenue Matsoua) est reconnu comme le berceau historique de la SAPE ?',
      'Which famous southern Brazzaville district is recognized as the historic birthplace of the SAPE elegance movement?',
      '¿Qué famoso barrio del sur de Brazzaville es reconocido como la cuna histórica de la SAPE?',
      'Qual famoso bairro do sul de Brazzaville é reconhecido como o berço histórico da SAPE?',
      'أي حي شهير في جنوب برازافيل يُعد المهد التاريخي لحركة الأناقة «لاساب»؟'
    ),
    correct: L('Bacongo', 'Bacongo', 'Bacongo', 'Bacongo', 'باكونغو'),
    distractors: [
      L('Médina de Fès', 'Medina of Fez', 'Medina de Fez', 'Medina de Fez', 'مدينة فاس'),
      L('Soweto', 'Soweto', 'Soweto', 'Soweto', 'سويتو'),
      L('Yopougon', 'Yopougon', 'Yopougon', 'Yopougon', 'يوبوغون'),
    ],
    explanation: L(
      'De Bacongo à Poto-Poto jusqu’à Matonge à Kinshasa, les Sapeurs (« Société des Ambianceurs et des Personnes Élégantes ») ont fait du costume un art pacifique et joyeux.',
      'From Bacongo in Brazzaville to Matonge across the river, Sapeurs turned dandy tailoring into a joyful statement of dignity and art.',
      'Desde Bacongo hasta Matonge, los Sapeurs convirtieron la elegancia en un arte pacífico y alegre.',
      'De Bacongo a Matonge, os Sapeurs transformaram a elegância em arte pacífica e criativa.',
      'حوّل أبناء باكونغو حركة الأناقة إلى فن اجتماعي يجمع بين الرقي والبهجة.'
    ),
  }),
];

import { L } from '../../countriesPart1';
import { mkQ } from './packHelpers';

export const CHAD_CURATED_PACK = [
  mkQ({
    id: 'cur_TD_01',
    countryCode: 'TD',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 2,
    topicKey: 'guelta_archei_ennedi',
    source: 'UNESCO — Massif de l’Ennedi',
    prompt: L(
      'Quel spectaculaire point d’eau caché au fond d’un canyon du massif de l’Ennedi, au Tchad, abrite encore les derniers crocodiles du Sahara et voit défiler des centaines de dromadaires ?',
      'Which dramatic desert canyon waterhole in Chad’s Ennedi Massif shelters some of the Sahara’s last crocodiles alongside camel caravans?',
      '¿Qué espectacular cañón del macizo de Ennedi en Chad alberga los últimos cocodrilos del Sáhara?',
      'Qual cânion espetacular do maciço de Ennedi no Chade abriga os últimos crocodilos do Saara?',
      'ما الموقع المائي الصحراوي الشهير في هضبة إنيدي بتشاد الذي يأوي آخر تماسيح الصحراء الكبرى؟'
    ),
    countryModePrompt: L(
      'Quel point d’eau encaissé du massif de l’Ennedi, au pied de gravures rupestres millénaires, abrite encore quelques crocodiles reliques du Sahara ?',
      'Which deep canyon waterhole in the Ennedi Massif shelters relic Saharan crocodiles beneath ancient rock art?',
      '¿Qué pozo natural del macizo de Ennedi alberga cocodrilos relictos del Sáhara?',
      'Qual poço natural do maciço de Ennedi abriga crocodilos relíquias do Saara?',
      'أي بحيرة صخرية في هضبة إنيدي تأوي بقايا تماسيح الصحراء الكبرى؟'
    ),
    correct: L('La Guelta d’Archei', 'Guelta d’Archei', 'Guelta d’Archei', 'Guelta d’Archei', 'قلتة أرشي'),
    distractors: [
      L('Les Gorges du Todra', 'Todra Gorge', 'Gargantas del Todra', 'Gargantas do Todra', 'مضيق تودغا'),
      L('La Vallée des Merveilles', 'Valley of Marvels', 'Valle de las Maravillas', 'Vale das Maravilhas', 'وادي العجائب'),
      L('Le Canyon de la Fish River', 'Fish River Canyon', 'Cañón del río Fish', 'Cânion do Rio Fish', 'وادي نهر فيش'),
    ],
    explanation: L(
      'Classée à l’UNESCO avec l’Ennedi, la Guelta d’Archei garde de l’eau toute l’année sous de hautes falaises de grès teintées par les passages séculaires.',
      'A UNESCO wonder in the Ennedi Massif, Guelta d’Archei holds permanent spring water fed by an ancient underground aquifer.',
      'Patrimonio de la UNESCO en Ennedi, la Guelta d’Archei conserva agua todo el año entre altos acantilados.',
      'Patrimônio da UNESCO em Ennedi, a Guelta d’Archei mantém água permanente entre paredões de arenito.',
      'تُعد قلتة أرشي في هضبة إنيدي موقعاً تراثياً عالمياً تحتفظ بالمياه طوال العام في قلب الصحراء.'
    ),
  }),
  mkQ({
    id: 'cur_TD_02',
    countryCode: 'TD',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'lacs_ounianga_unesco',
    source: 'UNESCO — Liste du patrimoine mondial (2012)',
    prompt: L(
      'Quel ensemble de 18 lacs sahariens aux reflets bleus et émeraude, entourés de palmiers et de dunes dans le nord du Tchad, est inscrit au patrimoine mondial de l’UNESCO depuis 2012 ?',
      'Which cluster of 18 blue-and-emerald Saharan desert lakes fringed by palms in northern Chad became a UNESCO World Heritage site in 2012?',
      '¿Qué conjunto de 18 lagos saharianos rodeados de palmeras en el norte de Chad es Patrimonio de la Humanidad desde 2012?',
      'Qual conjunto de 18 lagos saarianos cercados por palmeiras no norte do Chade é Patrimônio Mundial desde 2012?',
      'ما مجموعة البحيرات الصحراوية الثماني عشرة المدرجة ضمن التراث العالمي لليونسكو شمال تشاد منذ 2012؟'
    ),
    countryModePrompt: L(
      'Quel chapelet de 18 lacs naturels alimentés par une nappe fossile dans le désert du Borkou-Ennedi est classé à l’UNESCO depuis 2012 ?',
      'Which string of 18 aquifer-fed desert lakes in the northern Borkou-Ennedi sands earned UNESCO World Heritage status in 2012?',
      '¿Qué conjunto de 18 lagos naturales del norte desértico figura en la UNESCO desde 2012?',
      'Qual conjunto de 18 lagos naturais no norte desértico integra a UNESCO desde 2012?',
      'ما سلسلة البحيرات الثماني عشرة الصحراوية المدرجة في قائمة اليونسكو منذ عام 2012؟'
    ),
    correct: L('Les Lacs d’Ounianga', 'Lakes of Ounianga', 'Los Lagos de Unianga', 'Os Lagos de Ounianga', 'بحيرات أونيانغا'),
    distractors: [
      L('Les Lacs de Bishoftu', 'Bishoftu Crater Lakes', 'Lagos de Bishoftu', 'Lagos de Bishoftu', 'بحيرات بيشوفتو'),
      L('Les Chotts du Djérid', 'Chott el Djerid', 'Chott el Djerid', 'Chott el Djerid', 'شط الجريد'),
      L('Les Lacs du Toshka', 'Toshka Lakes', 'Lagos de Toshka', 'Lagos de Toshka', 'بحيرات توشكى'),
    ],
    explanation: L(
      'Ounianga Kébir et Ounianga Sérir forment un miracle hydrologique unique : les algues et roseaux limitent l’évaporation malgré plus de 40 °C.',
      'Ounianga Kebir and Ounianga Serir form an astonishing hydrological oasis where floating reeds help preserve fresh water in intense desert heat.',
      'Ounianga Kebir y Serir forman un oasis hidrológico único en pleno Sáhara.',
      'Ounianga Kebir e Serir formam um oásis hidrológico único em pleno Saara.',
      'تمثل بحيرات أونيانغا ظاهرة هيدرولوجية فريدة تحافظ على المياه وسط حرارة الصحراء الشديدة.'
    ),
  }),
  mkQ({
    id: 'cur_TD_03',
    countryCode: 'TD',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'parc_zakouma_elephants',
    source: 'African Parks / UICN — Salamat',
    prompt: L(
      'Quel célèbre parc national du sud-est du Tchad (dans le Salamat) est mondialement reconnu pour le spectaculaire sauvetage de ses troupeaux d’éléphants et de girafes du Kordofan ?',
      'Which renowned national park in southeastern Chad (Salamat) won global acclaim for rescuing its elephant and Kordofan giraffe herds?',
      '¿Qué famoso parque nacional del sureste de Chad (Salamat) es célebre por la recuperación de sus elefantes y jirafas de Kordofán?',
      'Qual famoso parque nacional do sudeste do Chade (Salamat) é célebre pelo resgate de seus elefantes e girafas do Kordofan?',
      'ما المتنزه الوطني الشهير جنوب شرق تشاد المعروف عالمياً بإنقاذ قطعان الفيلة وزرافات كردفان؟'
    ),
    countryModePrompt: L(
      'Quel grand parc national du Salamat abrite aujourd’hui l’une des populations les plus protégées d’éléphants d’Afrique centrale et de girafes du Kordofan ?',
      'Which major national park in Salamat today shelters one of Central Africa’s best-protected herds of elephants and Kordofan giraffes?',
      '¿Qué gran parque nacional del Salamat protege hoy grandes manadas de elefantes y jirafas de Kordofán?',
      'Qual grande parque nacional do Salamat protege hoje grandes rebanhos de elefantes e girafas do Kordofan?',
      'أي متنزه وطني في إقليم سلامات يحتضن اليوم قطعاناً محمية من الفيلة وزرافات كردفان؟'
    ),
    correct: L('Le Parc national de Zakouma', 'Zakouma National Park', 'Parque Nacional de Zakouma', 'Parque Nacional de Zakouma', 'متنزه زاكوما الوطني'),
    distractors: [
      L('Le Parc national de Murchison', 'Murchison Falls Park', 'Parque Murchison Falls', 'Parque Murchison Falls', 'متنزه مورتشيسون'),
      L('Le Parc national d’Etosha', 'Etosha National Park', 'Parque Etosha', 'Parque Etosha', 'متنزه إيتوشا'),
      L('Le Parc national du Tsavo', 'Tsavo National Park', 'Parque Tsavo', 'Parque Tsavo', 'متنزه تسافو'),
    ],
    explanation: L(
      'Grâce à une protection exemplaire depuis 2010, la population d’éléphants de Zakouma est remontée et attire les amoureux de faune sauvage du monde entier.',
      'Since 2010, strict community-backed protection helped Zakouma’s elephant population rebound steadily.',
      'Desde 2010, la protección en Zakouma permitió recuperar de forma notable sus manadas de elefantes.',
      'Desde 2010, a proteção em Zakouma permitiu uma recuperação notável de seus elefantes.',
      'نجحت جهود الحماية منذ عام 2010 في تعافي أعداد الفيلة بمتنزه زاكوما بشكل لافت.'
    ),
  }),
  mkQ({
    id: 'cur_TD_04',
    countryCode: 'TD',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'chari_logone_ndjamena',
    source: 'Hydrographie du Bassin du Lac Tchad',
    prompt: L(
      'Quels deux grands fleuves jumeaux se rejoignent juste au pied de N’Djamena avant d’alimenter à 95 % les eaux du lac Tchad ?',
      'Which two major rivers converge right at N’Djamena before supplying roughly 95% of Lake Chad’s water?',
      '¿Qué dos grandes ríos confluyen en Yamena antes de aportar el 95 % del agua del lago Chad?',
      'Quais dois grandes rios se encontram em N’Djamena antes de fornecer 95% da água do lago Chade?',
      'ما النهران الرئيسيان اللذان يلتقيان عند انجامينا قبل أن يغذيا بحيرة تشاد بنحو 95% من مياهها؟'
    ),
    countryModePrompt: L(
      'Quels deux grands fleuves issus du sud confluent à la pointe de la capitale avant de s’écouler vers le nord-ouest dans le lac Tchad ?',
      'Which two major southern rivers meet at the edge of the capital before flowing northwest into Lake Chad?',
      '¿Qué dos grandes ríos del sur confluyen junto a la capital antes de desembocar en el lago Chad?',
      'Quais dois grandes rios do sul se encontram junto à capital antes de desaguar no lago Chade?',
      'ما النهران الكبيران اللذان يلتقيان عند العاصمة قبل أن يصبا في بحيرة تشاد؟'
    ),
    correct: L('Le Chari et le Logone', 'The Chari and the Logone', 'El Chari y el Logone', 'O Chari e o Logone', 'نهرا شاري ولوغون'),
    distractors: [
      L('Le Nil Blanc et le Nil Bleu', 'White Nile and Blue Nile', 'Nilo Blanco y Nilo Azul', 'Nilo Branco e Nilo Azul', 'النيل الأبيض والأزرق'),
      L('Le Sénégal et la Gambie', 'Senegal and Gambia', 'Senegal y Gambia', 'Senegal e Gâmbia', 'نهر السنغال وغامبيا'),
      L('Le Zambèze et le Limpopo', 'Zambezi and Limpopo', 'Zambeze y Limpopo', 'Zambeze e Limpopo', 'زامبيزي وليمبوبو'),
    ],
    explanation: L(
      'La confluence du Chari et du Logone à Chagoua/N’Djamena constitue la principale artère agricole et halieutique du sud du pays.',
      'The Chari–Logone river system is the lifeblood of southern agriculture, fishing, and Lake Chad’s seasonal flood pulse.',
      'La confluencia del Chari y el Logone constituye la arteria fluvial vital del país.',
      'A confluência dos rios Chari e Logone forma a principal artéria fluvial do país.',
      'يشكل التقاء نهري شاري ولوغون الشريان المائي والزراعي الأهم في البلاد.'
    ),
  }),
  mkQ({
    id: 'cur_TD_05',
    countryCode: 'TD',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'moundou_economic_capital',
    source: 'Géographie urbaine du Tchad — Logone Occidental',
    prompt: L(
      'Quelle deuxième ville du pays, située sur la rive du Logone dans le sud, est considérée comme la capitale économique et brassicole du Tchad ?',
      'Which second-largest city, set on the Logone River in the south, serves as Chad’s economic and brewing hub?',
      '¿Qué segunda ciudad del país, a orillas del río Logone, es la capital económica de Chad?',
      'Qual segunda maior cidade do país, às margens do rio Logone, é a capital econômica do Chade?',
      'ما ثاني أكبر مدن تشاد والواقعة على نهر لوغون وتُعد العاصمة الاقتصادية للبلاد؟'
    ),
    countryModePrompt: L(
      'Quelle grande ville du Logone Occidental, sur la route du coton, porte le surnom de « capitale économique » du pays ?',
      'Which major city in Logone Occidental along the southern cotton belt is nicknamed the country’s "economic capital"?',
      '¿Qué gran ciudad de Logone Occidental es apodada la "capital económica" del país?',
      'Qual grande cidade de Logone Occidental é apelidada de "capital econômica" do país?',
      'ما المدينة الكبرى في إقليم لوغون الغربي الملقبة بـ«العاصمة الاقتصادية» للبلاد؟'
    ),
    correct: L('Moundou', 'Moundou', 'Mundu', 'Moundou', 'موندو'),
    distractors: [
      L('Faya-Largeau', 'Faya-Largeau', 'Faya-Largeau', 'Faya-Largeau', 'فايا لارجو'),
      L('Biltine', 'Biltine', 'Biltine', 'Biltine', 'بلتن'),
      L('Bardaï', 'Bardaï', 'Bardaï', 'Bardaï', 'برداي'),
    ],
    explanation: L(
      'Moundou abrite historiquement la Brasserie du Tchad (bière Gala), d’importantes usines d’égrenage du coton de CotonTchad et un vaste marché fluvial.',
      'Moundou hosts historic cotton-ginning facilities, Gala brewery, and thriving agricultural trade along the Logone.',
      'Moundou alberga importantes industrias algodoneras, cerveceras y agrícolas del sur.',
      'Moundou concentra grandes indústrias algodoeiras, cervejeiras e comerciais do sul.',
      'تُعد موندو مركزاً صناعياً وزراعياً وتجارياً رئيسياً في جنوب البلاد.'
    ),
  }),
  mkQ({
    id: 'cur_TD_06',
    countryCode: 'TD',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 4,
    topicKey: 'trou_au_natron_tibesti',
    source: 'Géologie volcanique du massif du Tibesti',
    prompt: L(
      'Comment appelle-t-on la spectaculaire caldeira volcanique large de 8 km et blanchie par des croûtes de sel minéral près du pic Toussidé dans le Tibesti ?',
      'What is the name of the dramatic 8-km-wide volcanic caldera crusted with bright white mineral salts beside Pic Toussidé in the Tibesti?',
      '¿Cómo se llama la espectacular caldera volcánica de 8 km cubierta de sales minerales blancas en el Tibesti?',
      'Como se chama a espetacular caldeira vulcânica de 8 km coberta por sais minerais brancos no Tibesti?',
      'ما اسم الفوهة البركانية الواسعة المغطاة بالأملاح المعدنية البيضاء في جبال تيبستي؟'
    ),
    correct: L('Le Trou au Natron (Doon Kidimi)', 'Trou au Natron (Doon Kidimi)', 'El Trou au Natron', 'O Trou au Natron', 'فوهة النطرون (ترو أو ناترون)'),
    distractors: [
      L('Le Gouffre de Padirac', 'Padirac Chasm', 'Sima de Padirac', 'Abismo de Padirac', 'هاوية باديراك'),
      L('Le Salar d’Uyuni', 'Salar de Uyuni', 'Salar de Uyuni', 'Salar de Uyuni', 'سالار دي أويوني'),
      L('La Fosse des Mariannes', 'Mariana Trench', 'Fosa de las Marianas', 'Fossa das Marianas', 'خندق ماريانا'),
    ],
    explanation: L(
      'Profond de près de 700 à 1 000 mètres, ce cratère du Tibesti forme un paysage lunaire blanc de carbonate de sodium exploité depuis des siècles.',
      'Up to 1,000 meters deep, this extinct volcano caldera is floored with gleaming white sodium carbonate deposits.',
      'Con casi 1000 metros de profundidad, esta caldera volcánica presenta un suelo blanco de carbonato sódico.',
      'Com quase 1.000 metros de profundidade, esta caldeira vulcânica exibe um solo branco de carbonato de sódio.',
      'فوهة بركانية خاملة بعمق يقارب ألف متر تغطي قاعها ترسبات كربونات الصوديوم البيضاء.'
    ),
  }),
  mkQ({
    id: 'cur_TD_07',
    countryCode: 'TD',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 3,
    topicKey: 'abeche_ouaddai_gate',
    source: 'Géographie historique — Est du Tchad',
    prompt: L(
      'Quelle grande ville de l’est du pays fut longtemps la capitale du puissant sultanat du Ouaddaï et un carrefour caravanier majeur ?',
      'Which major eastern city served for centuries as the capital of the powerful Wadai Sultanate and a caravan crossroads?',
      '¿Qué gran ciudad del este fue durante siglos la capital del poderoso sultanato de Ouaddaï?',
      'Qual grande cidade do leste foi durante séculos a capital do poderoso sultanato de Ouaddaï?',
      'ما المدينة الكبرى في شرق البلاد التي كانت عاصمة لسلطنة وداي التاريخية ومركزاً للقوافل؟'
    ),
    correct: L('Abéché', 'Abéché', 'Abéché', 'Abéché', 'أبيشي'),
    distractors: [
      L('Doba', 'Doba', 'Doba', 'Doba', 'دوبا'),
      L('Bongor', 'Bongor', 'Bongor', 'Bongor', 'بونغور'),
      L('Léré', 'Léré', 'Léré', 'Léré', 'ليري'),
    ],
    explanation: L(
      'Ancienne étape entre le Bassin du lac Tchad et la vallée du Nil, Abéché conserve le palais du sultan du Ouaddaï et des mosquées historiques.',
      'Situated between Lake Chad and the Nile corridor, Abéché preserves the historic Wadai Sultan’s palace and vibrant markets.',
      'Ubicada entre el lago Chad y el valle del Nilo, Abéché conserva el histórico palacio del sultán de Ouaddaï.',
      'Situada entre o lago Chade e o vale do Nilo, Abéché preserva o histórico palácio do sultão de Ouaddaï.',
      'تقع أبيشي شرق تشاد وتحتفظ بقصر سلطان وداي التاريخي وإرث القوافل العريق.'
    ),
  }),
  mkQ({
    id: 'cur_TD_08',
    countryCode: 'TD',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 4,
    topicKey: 'lac_fitri_batha',
    source: 'Convention de Ramsar — Zones humides du Batha',
    prompt: L(
      'Quel second grand lac d’eau douce du centre du Tchad (région du Batha), inscrit à la convention Ramsar, forme une oasis vitale pour les éleveurs et les oiseaux migrateurs ?',
      'Which second major freshwater lake in central Chad (Batha region), listed under the Ramsar Convention, forms a vital oasis for herders and migratory birds?',
      '¿Qué segundo gran lago de agua dulce del centro de Chad (región de Batha) es un sitio Ramsar vital para las aves migratorias?',
      'Qual segundo grande lago de água doce do centro do Chade (região de Batha) é um sítio Ramsar vital para aves migratórias?',
      'ما ثاني أكبر بحيرة للمياه العذبة وسط تشاد في إقليم البطحاء والمسجلة في اتفاقية رامسار؟'
    ),
    countryModePrompt: L(
      'Quel important lac d’eau douce du Batha, alimenté par le fleuve Batha, forme une réplique miniature du grand lac de l’ouest ?',
      'Which vital freshwater lake in the Batha region serves as a central wetland oasis for migratory birds and pastoralists?',
      '¿Qué importante lago de agua dulce de la región de Batha es un humedal Ramsar vital?',
      'Qual importante lago de água doce da região de Batha é uma área úmida Ramsar vital?',
      'أي بحيرة عذبة مهمة في إقليم البطحاء تمثل واحة رئيسية للطيور المهاجرة والرعاة؟'
    ),
    correct: L('Le Lac Fitri', 'Lake Fitri', 'El Lago Fitri', 'O Lago Fitri', 'بحيرة فيتري'),
    distractors: [
      L('Le Lac Tana', 'Lake Tana', 'Lago Tana', 'Lago Tana', 'بحيرة تانا'),
      L('Le Lac Turkana', 'Lake Turkana', 'Lago Turkana', 'Lago Turkana', 'بحيرة توركانا'),
      L('Le Lac Kivu', 'Lake Kivu', 'Lago Kivu', 'Lago Kivu', 'بحيرة كيفو'),
    ],
    explanation: L(
      'Situé près de Yao, le lac Fitri reste doux toute l’année grâce aux crues saisonnières du Batha et abrite des pêcheries bilala séculaires.',
      'Located near Yao, Lake Fitri supports seasonal fishing, pastoral herds, and hundreds of thousands of migrating waterbirds.',
      'Situado cerca de Yao, el lago Fitri sostiene pesquerías tradicionales y miles de aves migratorias.',
      'Localizado perto de Yao, o lago Fitri sustenta pescarias tradicionais e milhares de aves migratórias.',
      'تُعد بحيرة فيتري موطناً لمصايد الأسماك التقليدية وملاذاً لمئات الآلاف من الطيور المهاجرة.'
    ),
  }),
  mkQ({
    id: 'cur_TD_09',
    countryCode: 'TD',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 2,
    topicKey: 'sao_civilization_clay',
    source: 'Archéologie du Bassin du lac Tchad',
    prompt: L(
      'Quelle mystérieuse civilisation antique de la plaine du Chari-Logone et du sud du lac Tchad a laissé de célèbres statues en terre cuite et d’immenses jarres funéraires en bronze et argile ?',
      'Which famed ancient civilization along the Chari–Logone plain and southern Lake Chad left remarkable terracotta figurines and giant burial urns?',
      '¿Qué antigua civilización de la llanura Chari-Logone dejó notables estatuillas de terracota y grandes urnas funerarias?',
      'Qual antiga civilização da planície Chari-Logone deixou notáveis estatuetas de terracota e grandes urnas funerárias?',
      'ما الحضارة القديمة في سهل شاري ولوغون وجنوب بحيرة تشاد الشهيرة بتماثيلها الفخارية وجرارها الجنائزية؟'
    ),
    correct: L('La civilisation Sao', 'The Sao civilization', 'La civilización Sao', 'A civilização Sao', 'حضارة ساو'),
    distractors: [
      L('La civilisation punique', 'Punic civilization', 'Civilización púnica', 'Civilização púnica', 'الحضارة البونية'),
      L('La civilisation axoumite', 'Aksumite civilization', 'Civilización aksumita', 'Civilização axumita', 'حضارة أكسوم'),
      L('La civilisation méroïtique', 'Meroitic civilization', 'Civilización meroítica', 'Civilização meroítica', 'الحضارة المروية'),
    ],
    explanation: L(
      'Célébrée dans le nom même de l’équipe nationale de football (« Les Sao »), la culture Sao fleurit entre le Ve siècle av. J.-C. et le XVIe siècle.',
      'Honored in the nickname of Chad’s national football team ("Les Sao"), Sao artisans crafted refined bronzes and ceramics.',
      'Homenajeada en el apodo de la selección nacional ("Les Sao"), esta cultura destacó en bronce y cerámica.',
      'Homenageada no apelido da seleção nacional ("Les Sao"), essa cultura brilhou no bronze e na cerâmica.',
      'يُخلّد اسم «ساو» اليوم في لقب المنتخب الوطني تقديراً لإبداع هذه الحضارة العريقة.'
    ),
  }),
  mkQ({
    id: 'cur_TD_10',
    countryCode: 'TD',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 2,
    topicKey: 'fort_lamy_to_ndjamena_1973',
    source: 'Archives officielles de la République du Tchad (1973)',
    prompt: L(
      'Comment s’appelait la capitale N’Djamena avant d’être rebaptisée en 1973 pour marquer l’authenticité culturelle nationale ?',
      'What was N’Djamena called before being renamed in 1973 as part of cultural Africanization?',
      '¿Cómo se llamaba Yamena antes de cambiar su nombre en 1973?',
      'Como se chamava N’Djamena antes de mudar de nome em 1973?',
      'ماذا كان اسم العاصمة انجامينا قبل تغيير اسمها عام 1973؟'
    ),
    correct: L('Fort-Lamy', 'Fort-Lamy', 'Fort-Lamy', 'Fort-Lamy', 'فورت لامي'),
    distractors: [
      L('Fort-Archambault', 'Fort-Archambault', 'Fort-Archambault', 'Fort-Archambault', 'فورت أرشامبو'),
      L('Fort-Crampel', 'Fort-Crampel', 'Fort-Crampel', 'Fort-Crampel', 'فورت كرامبل'),
      L('Fort-Sibut', 'Fort-Sibut', 'Fort-Sibut', 'Fort-Sibut', 'فورت سيبو'),
    ],
    explanation: L(
      'En arabe tchadien, N’Djamena vient de « Niǧāmīna » qui signifie « nous nous sommes reposés » ; Fort-Archambault devint quant à elle Sarh.',
      'In Chadian Arabic, N’Djamena derives from a phrase meaning "place of rest"; Fort-Archambault was likewise renamed Sarh.',
      'En árabe chadiano, Yamena significa «lugar de descanso», mientras Fort-Archambault pasó a llamarse Sarh.',
      'Em árabe chadiano, N’Djamena significa "lugar de descanso", enquanto Fort-Archambault virou Sarh.',
      'تعني كلمة انجامينا بالعربية التشادية «مكان الراحة»، فيما أُعيدت تسمية فورت أرشامبو إلى سار.'
    ),
  }),
  mkQ({
    id: 'cur_TD_11',
    countryCode: 'TD',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 3,
    topicKey: 'felix_eboue_1940_chad',
    source: 'Histoire de la Seconde Guerre mondiale — Fort-Lamy (août 1940)',
    prompt: L(
      'Quel gouverneur guyanais visionnaire fit du Tchad, le 26 août 1940 à Fort-Lamy, le tout premier territoire de l’Afrique-Équatoriale française à rallier la France libre ?',
      'Which visionary Caribbean-born governor led Chad on August 26, 1940 to become the very first Free French territory in Equatorial Africa?',
      '¿Qué visionario gobernador convirtió a Chad el 26 de agosto de 1940 en el primer territorio africano en unirse a la Francia Libre?',
      'Qual governador visionário tornou o Chade, em 26 de agosto de 1940, o primeiro território a aderir à França Livre?',
      'من هو الحاكم الذي جعل تشاد في 26 أغسطس 1940 أول إقليم في أفريقيا الاستوائية ينضم إلى فرنسا الحرة؟'
    ),
    countryModePrompt: L(
      'Quel gouverneur noir humaniste fit du pays, le 26 août 1940 à Fort-Lamy, le point de départ militaire du ralliement de l’AEF face au nazisme ?',
      'Which humanist governor turned Fort-Lamy on August 26, 1940 into the first Allied stronghold of Equatorial Africa?',
      '¿Qué gobernador humanista convirtió a Fort-Lamy en agosto de 1940 en el primer bastión aliado del África Ecuatorial?',
      'Qual governador humanista transformou Fort-Lamy, em agosto de 1940, no primeiro reduto aliado da África Equatorial?',
      'من هو الحاكم الذي جعل فورت لامي في أغسطس 1940 أول معقل للحلفاء في أفريقيا الاستوائية؟'
    ),
    correct: L('Félix Éboué', 'Félix Éboué', 'Félix Éboué', 'Félix Éboué', 'فيليكس إيبوي'),
    distractors: [
      L('Blaise Diagne', 'Blaise Diagne', 'Blaise Diagne', 'Blaise Diagne', 'بليز دياني'),
      L('Aimé Césaire', 'Aimé Césaire', 'Aimé Césaire', 'Aimé Césaire', 'إيمي سيزير'),
      L('René Maran', 'René Maran', 'René Maran', 'René Maran', 'رينيه ماران'),
    ],
    explanation: L(
      'Premier haut fonctionnaire noir au Panthéon en France, Félix Éboué ouvrit depuis Fort-Lamy la voie à la colonne Leclerc vers Koufra et le désert libyen.',
      'Later enshrined in France’s Panthéon, Félix Éboué’s bold stance at Fort-Lamy enabled General Leclerc’s Saharan campaigns.',
      'Félix Éboué abrió desde Fort-Lamy la ruta sahariana de las tropas aliadas hacia Kufra.',
      'Félix Éboué abriu a partir de Fort-Lamy a rota saariana das tropas aliadas rumo a Cufra.',
      'أطلق فيليكس إيبوي من فورت لامي الشرارة الأولى لتحرير أفريقيا الاستوائية والزحف عبر الصحراء.'
    ),
  }),
  mkQ({
    id: 'cur_TD_12',
    countryCode: 'TD',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 2,
    topicKey: 'chad_independence_1960_aug11',
    source: 'Archives nationales — 11 août 1960',
    prompt: L(
      'À quelle date précise le Tchad a-t-il proclamé son indépendance, avec François (Ngarta) Tombalbaye comme premier président ?',
      'On what exact date did Chad proclaim its independence, with François (Ngarta) Tombalbaye as its first president?',
      '¿En qué fecha exacta proclamó Chad su independencia con François Tombalbaye como primer presidente?',
      'Em que data exata o Chade proclamou sua independência com François Tombalbaye como primeiro presidente?',
      'في أي تاريخ بالضبط أعلنت تشاد استقلالها بقيادة أول رئيس لها فرانسوا تومبالباي؟'
    ),
    countryModePrompt: L(
      'Quel jour précis d’août 1960 marque la proclamation de l’indépendance et la fête nationale ?',
      'Which exact day in August 1960 marks the country’s proclamation of independence and National Day?',
      '¿Qué día exacto de agosto de 1960 marca la proclamación de la independencia nacional?',
      'Que dia exato de agosto de 1960 marca a proclamação da independência nacional?',
      'أي يوم محدد في أغسطس 1960 يوافق إعلان الاستقلال والعيد الوطني للبلاد؟'
    ),
    correct: L('Le 11 août 1960', 'August 11, 1960', '11 de agosto de 1960', '11 de agosto de 1960', '11 أغسطس 1960'),
    distractors: [
      L('Le 17 août 1960', 'August 17, 1960', '17 de agosto de 1960', '17 de agosto de 1960', '17 أغسطس 1960'),
      L('Le 4 avril 1960', 'April 4, 1960', '4 de abril de 1960', '4 de abril de 1960', '4 أبريل 1960'),
      L('Le 2 octobre 1958', 'October 2, 1958', '2 de octubre de 1958', '2 de outubro de 1958', '2 أكتوبر 1958'),
    ],
    explanation: L(
      'Proclamée à minuit dans la nuit du 10 au 11 août 1960 à Fort-Lamy, l’indépendance est célébrée chaque année le 11 août.',
      'Proclaimed at Fort-Lamy, Independence Day is celebrated across all provinces every August 11.',
      'Proclamada en Fort-Lamy, la independencia se celebra cada año el 11 de agosto.',
      'Proclamada em Fort-Lamy, a independência é celebrada todo dia 11 de agosto.',
      'أُعلن الاستقلال في فورت لامي يوم 11 أغسطس 1960 ويُحتفل به سنوياً عيداً وطنياً.'
    ),
  }),
  mkQ({
    id: 'cur_TD_13',
    countryCode: 'TD',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 3,
    topicKey: 'baguirmi_ouaddai_sultanates',
    source: 'Histoire précoloniale d’Afrique centrale',
    prompt: L(
      'Avec le Kanem-Bornou et le Ouaddaï, quel autre puissant sultanat historique du centre du Tchad avait pour capitale Massenya dès le XVIe siècle ?',
      'Alongside Kanem-Bornu and Wadai, which other historic sultanate in central Chad was centered at Massenya from the 16th century?',
      'Junto a Kanem-Bornu y Ouaddaï, ¿qué otro sultanato histórico del centro de Chad tuvo su capital en Massenya?',
      'Ao lado de Kanem-Bornu e Ouaddaï, qual outro sultanato histórico do centro do Chade tinha capital em Massenya?',
      'إلى جانب كانم برنو ووداي، ما السلطنة التاريخية التي كانت عاصمتها ماسينيا وسط تشاد منذ القرن السادس عشر؟'
    ),
    countryModePrompt: L(
      'Quel grand sultanat centré à Massenya, sur les rives du Chari-Baguirmi, rayonna du XVIe au XIXe siècle ?',
      'Which historic sultanate centered at Massenya along the Chari basin flourished from the 16th to the 19th century?',
      '¿Qué gran sultanato centrado en Massenya floreció entre los siglos XVI y XIX?',
      'Qual grande sultanato sediado em Massenya floresceu entre os séculos XVI e XIX?',
      'ما السلطنة الكبرى التي اتخذت من ماسينيا عاصمة لها وازدهرت بين القرنين السادس عشر والتاسع عشر؟'
    ),
    correct: L('Le Sultanat du Baguirmi', 'The Sultanate of Baguirmi', 'El Sultanato de Baguirmi', 'O Sultanato de Baguirmi', 'سلطنة باقرمي'),
    distractors: [
      L('Le Royaume du Monomotapa', 'Kingdom of Mutapa', 'Reino de Mutapa', 'Reino do Monomotapa', 'مملكة مونوموتابا'),
      L('L’Empire du Jolof', 'Jolof Empire', 'Imperio Jolof', 'Império Jalofo', 'إمبراطورية جولوف'),
      L('Le Royaume de Kaffa', 'Kingdom of Kaffa', 'Reino de Kaffa', 'Reino de Kaffa', 'مملكة كافا'),
    ],
    explanation: L(
      'Fondé autour de 1522 par Dokkengé, le royaume du Baguirmi forma l’un des trois grands États sahéliens historiques du bassin du lac Tchad.',
      'Founded around 1522, Baguirmi formed with Kanem-Bornu and Wadai the triad of major Sahelian states around Lake Chad.',
      'Fundado hacia 1522, Baguirmi formó junto a Kanem-Bornu y Ouaddaï los tres grandes reinos del país.',
      'Fundado por volta de 1522, Baguirmi formou com Kanem-Bornu e Ouaddaï os três grandes Estados sahelianos.',
      'أسست سلطنة باقرمي نحو عام 1522 وشكلت مع كانم برنو ووداي أبرز الممالك التاريخية بالمنطقة.'
    ),
  }),
  mkQ({
    id: 'cur_TD_14',
    countryCode: 'TD',
    category: 'history',
    subCategory: 'sciences_innovations',
    difficulty: 3,
    topicKey: 'abel_bahrelghazali_1995',
    source: 'Paléoanthropologie — Mission MPFT (1995)',
    prompt: L(
      'Avant même la découverte de Toumaï, quel hominidé vieux de 3,5 millions d’années (le premier australopithèque connu à l’ouest du Rift africain) fut exhumé au Tchad en 1995 ?',
      'Even before Toumaï, which 3.5-million-year-old hominin—the first australopithecine ever found west of the East African Rift—was unearthed in Chad in 1995?',
      'Incluso antes de Toumaï, ¿qué homínido de 3,5 millones de años fue descubierto en Chad en 1995 al oeste del Rift?',
      'Antes mesmo de Toumaï, qual hominídeo de 3,5 milhões de anos foi descoberto no Chade em 1995 a oeste do Rift?',
      'قبل اكتشاف توماي، ما الأحفورة البشرية التي يعود عمرها إلى 3.5 مليون سنة واكتُشفت في تشاد عام 1995؟'
    ),
    countryModePrompt: L(
      'Quel célèbre fossile d’australopithèque vieux de 3,5 millions d’années fut découvert en 1995 dans la région du Bahr el Ghazal (surnommé « Abel ») ?',
      'Which 3.5-million-year-old fossil nicknamed "Abel," discovered in Bahr el Ghazal in 1995, rewrote human evolution models?',
      '¿Qué célebre fósil de australopiteco de 3,5 millones de años apodado "Abel" fue hallado en Bahr el Ghazal en 1995?',
      'Qual célebre fóssil de australopiteco de 3,5 milhões de anos apelidado de "Abel" foi achado em Bahr el Ghazal em 1995?',
      'ما الاسم الذي أُطلق على أحفورة الأسترالوبيثيكوس المكتشفة في بحر الغزال عام 1995 وعمرها 3.5 مليون سنة؟'
    ),
    correct: L('Abel (Australopithecus bahrelghazali)', 'Abel (Australopithecus bahrelghazali)', 'Abel (Australopithecus bahrelghazali)', 'Abel (Australopithecus bahrelghazali)', 'أبيل (أسترالوبيثيكوس بحر الغزال)'),
    distractors: [
      L('L’Homme de Cro-Magnon', 'Cro-Magnon', 'Hombre de Cro-Magnon', 'Homem de Cro-Magnon', 'إنسان كرو مانيون'),
      L('L’Homme de Florès', 'Homo floresiensis', 'Hombre de Flores', 'Homem de Flores', 'إنسان فلوريس'),
      L('L’Homme de Java', 'Java Man', 'Hombre de Java', 'Homem de Java', 'إنسان جاوة'),
    ],
    explanation: L(
      'Trouvé dans le Bahr el Ghazal par la mission franco-tchadienne (Michel Brunet et Ahounta Djimdoumalbaye), Abel prouva que nos ancêtres peuplaient l’Afrique centrale il y a 3,5 Ma.',
      'Found in 1995 in the Bahr el Ghazal region, Abel proved early hominins thrived in Central Africa long before previously thought.',
      'Hallado en 1995, Abel demostró que los primeros homínidos habitaron África Central hace 3,5 millones de años.',
      'Encontrado em 1995, Abel provou que os primeiros hominídeos habitavam a África Central há 3,5 milhões de anos.',
      'أثبتت أحفورة «أبيل» عام 1995 أن أسلاف البشر الأوائل عاشوا في حوض بحر الغزال بوسط أفريقيا.'
    ),
  }),
  mkQ({
    id: 'cur_TD_15',
    countryCode: 'TD',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'moussa_faki_au_chair',
    source: 'Union Africaine — Commission de l’UA (2017–2025)',
    prompt: L(
      'Quel ancien Premier ministre et ministre des Affaires étrangères tchadien a présidé pendant deux mandats (2017–2025) la Commission de l’Union africaine à Addis-Abeba ?',
      'Which former Chadian Prime Minister and Foreign Minister served two terms (2017–2025) as Chairperson of the African Union Commission?',
      '¿Qué ex primer ministro y canciller chadiano presidió durante dos mandatos (2017-2025) la Comisión de la Unión Africana?',
      'Qual ex-primeiro-ministro e chanceler chadiano presidiu por dois mandatos (2017–2025) a Comissão da União Africana?',
      'من هو رئيس الوزراء ووزير الخارجية التشادي السابق الذي ترأس مفوضية الاتحاد الأفريقي لفترتين (2017–2025)؟'
    ),
    countryModePrompt: L(
      'Quel ancien chef de la diplomatie nationale dirigea la Commission de l’Union africaine pendant huit ans, de 2017 à 2025 ?',
      'Which former national foreign minister served as Chairperson of the African Union Commission for eight years from 2017 to 2025?',
      '¿Qué exministro de Exteriores nacional presidió la Comisión de la Unión Africana entre 2017 y 2025?',
      'Qual ex-ministro das Relações Exteriores nacional presidiu a Comissão da União Africana de 2017 a 2025?',
      'من هو وزير الخارجية السابق الذي ترأس مفوضية الاتحاد الأفريقي لثماني سنوات من 2017 إلى 2025؟'
    ),
    correct: L('Moussa Faki Mahamat', 'Moussa Faki Mahamat', 'Moussa Faki Mahamat', 'Moussa Faki Mahamat', 'موسى فكي محمد'),
    distractors: [
      L('Kofi Annan', 'Kofi Annan', 'Kofi Annan', 'Kofi Annan', 'كوفي عنان'),
      L('Ban Ki-moon', 'Ban Ki-moon', 'Ban Ki-moon', 'Ban Ki-moon', 'بان كي مون'),
      L('Boutros Boutros-Ghali', 'Boutros Boutros-Ghali', 'Butros Butros-Ghali', 'Boutros Boutros-Ghali', 'بطرس بطرس غالي'),
    ],
    explanation: L(
      'Élu en janvier 2017 puis réélu en 2021, Moussa Faki Mahamat pilota le lancement historique de la ZLECAf et le siège de l’UA au G20.',
      'Elected in 2017 and re-elected in 2021, Moussa Faki Mahamat oversaw the AfCFTA launch and the African Union’s admission to the G20.',
      'Elegido en 2017 y reelegido en 2021, supervisó el lanzamiento de la ZLECAf y la entrada de la UA en el G20.',
      'Eleito em 2017 e reeleito em 2021, supervisionou a criação da ZLECAf e o ingresso da UA no G20.',
      'أشرف موسى فكي خلال رئاسته لمفوضية الاتحاد الأفريقي على إطلاق منطقة التجارة الحرة وانضمام الاتحاد لمجموعة العشرين.'
    ),
  }),
  mkQ({
    id: 'cur_TD_16',
    countryCode: 'TD',
    category: 'history',
    subCategory: 'politique_institutions',
    difficulty: 2,
    topicKey: 'chad_flag_colors_pan',
    source: 'Constitution nationale — Symboles de la République',
    prompt: L(
      'Quelles trois bandes verticales composent le drapeau officiel du Tchad (bleu, or et rouge), adopté en 1959 ?',
      'Which three vertical stripes make up Chad’s official national flag adopted in 1959?',
      '¿Qué tres franjas verticales forman la bandera oficial de Chad adoptada en 1959?',
      'Quais três faixas verticais compõem a bandeira oficial do Chade adotada em 1959?',
      'ما الألوان الثلاثة للعلم الوطني الرسمي لتشاد المعتمد عام 1959؟'
    ),
    countryModePrompt: L(
      'Que symbolisent respectivement les bandes verticales bleu, jaune or et rouge du drapeau national adopté en novembre 1959 ?',
      'What do the vertical blue, gold-yellow, and red stripes of the national flag adopted in 1959 symbolize?',
      '¿Qué simbolizan las franjas verticales azul, amarillo oro y roja de la bandera nacional?',
      'O que simbolizam as faixas verticais azul, amarelo-ouro e vermelha da bandeira nacional?',
      'إلامَ ترمز ألوان العلم الوطني الثلاثة (الأزرق والأصفر الذهبي والأحمر)؟'
    ),
    correct: L('Le ciel/sud fertile (bleu), le soleil/désert du nord (or) et l’unité/sacrifice (rouge)', 'Sky & southern waters (blue), sun & northern desert (gold), unity & sacrifice (red)', 'Cielo/sur (azul), sol/desierto norte (oro) y unidad/sacrificio (rojo)', 'Céu/sul (azul), sol/deserto norte (ouro) e unidade/sacrifício (vermelho)', 'السماء والجنوب (أزرق) والشمس والصحراء (ذهبي) والوحدة والتضحية (أحمر)'),
    distractors: [
      L('Uniquement les couleurs du drapeau olympique à cinq anneaux', 'Only the five Olympic rings', 'Solo los cinco anillos olímpicos', 'Apenas os cinco anéis olímpicos', 'ألوان الحلقات الأولمبية الخمس فقط'),
      L('Le vert émeraude, le blanc pur et le noir volcanique', 'Emerald green, pure white, and black', 'Verde esmeralda, blanco y negro', 'Verde-esmeralda, branco e preto', 'الأخضر والأبيض والأسود'),
      L('Une croix blanche sur fond rouge royal', 'White cross on red background', 'Cruz blanca sobre fondo rojo', 'Cruz branca sobre fundo vermelho', 'صليب أبيض على خلفية حمراء'),
    ],
    explanation: L(
      'Ce tricolore marie le bleu des eaux et du ciel du sud à l’or du Sahara et au rouge du courage patriotique (devise : Unité, Travail, Progrès).',
      'Adopted in 1959 alongside the motto "Unity, Work, Progress," the tricolor bridges the blue southern rivers and golden northern Sahara.',
      'Adoptada en 1959 con el lema «Unidad, Trabajo, Progreso», la bandera une el azul del sur con el oro del Sáhara.',
      'Adotada em 1959 com o lema "Unidade, Trabalho, Progresso", a bandeira une o azul do sul ao ouro do Saara.',
      'يجمع العلم التشادي بين أزرق المياه والجنوب وذهبي الصحراء وأحمر التضحية والوحدة.'
    ),
  }),
  mkQ({
    id: 'cur_TD_17',
    countryCode: 'TD',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 4,
    topicKey: 'wara_ruins_ouaddai',
    source: 'Patrimoine archéologique du Ouaddaï',
    prompt: L(
      'Comment s’appelle l’ancienne capitale fortifiée en ruines de l’Empire du Ouaddaï (XVIIe–XIXe siècle), nichée au milieu de collines granitiques au nord d’Abéché ?',
      'What is the name of the ruined fortified 17th–19th-century capital of the Wadai Empire nestled among granite hills north of Abéché?',
      '¿Cómo se llama la antigua capital fortificada en ruinas del Imperio de Ouaddaï al norte de Abéché?',
      'Como se chama a antiga capital fortificada em ruínas do Império de Ouaddaï ao norte de Abéché?',
      'ما اسم العاصمة الأثرية المحصنة القديمة لسلطنة وداي الواقعة بين التلال شمال أبيشي؟'
    ),
    correct: L('Ouara (Wara)', 'Wara (Ouara)', 'Wara (Ouara)', 'Wara (Ouara)', 'وارا الأثرية'),
    distractors: [
      L('Lalibela', 'Lalibela', 'Lalibela', 'Lalibela', 'لاليبيلا'),
      L('Volubilis', 'Volubilis', 'Volubilis', 'Volubilis', 'وليلي'),
      L('Carthage', 'Carthage', 'Cartago', 'Cartago', 'قرطاج'),
    ],
    explanation: L(
      'Inscrite sur la liste indicative de l’UNESCO, Ouara conserve l’enceinte de briques cuites du palais royal et les vestiges d’une ancienne mosquée en terre.',
      'Built inside a natural ring of rocky hills, Wara still shows baked-brick palace walls and one of Central Africa’s oldest mosques.',
      'Rodeada por colinas rocosas, Wara conserva murallas de ladrillo cocido y antiguos vestigios reales.',
      'Cercada por colinas rochosas, Wara preserva muralhas de tijolo cozido e antigos vestígios reais.',
      'تحتفظ مدينة وارا الأثرية بجدران القصر الملكي المبني من الطوب المحروق وآثار مسجد عتيق.'
    ),
  }),
  mkQ({
    id: 'cur_TD_18',
    countryCode: 'TD',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 2,
    topicKey: 'mahamat_saleh_haroun_cinema',
    source: 'Festival de Cannes — Prix du Jury 2010',
    prompt: L(
      'Quel célèbre cinéaste né à Abéché réalisa « Un homme qui crie » (Prix du Jury au Festival de Cannes 2010) ainsi que « Daratt » et « Lingui, les liens sacrés » ?',
      'Which acclaimed Abéché-born filmmaker directed "A Screaming Man" (2010 Cannes Jury Prize), "Daratt," and "Lingui, The Sacred Bonds"?',
      '¿Qué célebre cineasta nacido en Abéché dirigió «Un hombre que grita» (Premio del Jurado en Cannes 2010) y «Daratt»?',
      'Qual célebre cineasta nascido em Abéché dirigiu "Um Homem que Grita" (Prêmio do Júri em Cannes 2010) e "Daratt"?',
      'من هو المخرج السينمائي المولود في أبيشي صاحب فيلم «رجل يصرخ» الفائز بجائزة لجنة التحكيم في كان 2010؟'
    ),
    correct: L('Mahamat-Saleh Haroun', 'Mahamat-Saleh Haroun', 'Mahamat-Saleh Haroun', 'Mahamat-Saleh Haroun', 'محمد صالح هارون'),
    distractors: [
      L('Djibril Diop Mambéty', 'Djibril Diop Mambéty', 'Djibril Diop Mambéty', 'Djibril Diop Mambéty', 'جبريل ديوب مامبيتي'),
      L('Souleymane Cissé', 'Souleymane Cissé', 'Souleymane Cissé', 'Souleymane Cissé', 'سليمان سيسيه'),
      L('Idrissa Ouédraogo', 'Idrissa Ouédraogo', 'Idrissa Ouédraogo', 'Idrissa Ouédraogo', 'إدريسا ويدراوغو'),
    ],
    explanation: L(
      'Avec « Un homme qui crie », Mahamat-Saleh Haroun offrit au cinéma d’Afrique centrale l’une de ses récompenses les plus prestigieuses à Cannes.',
      'With "A Screaming Man," Mahamat-Saleh Haroun became the first Chadian filmmaker to win a major prize at the Cannes Film Festival.',
      'Con «Un hombre que grita», Mahamat-Saleh Haroun logró un histórico galardón en el Festival de Cannes.',
      'Com "Um Homem que Grita", Mahamat-Saleh Haroun conquistou um prêmio histórico no Festival de Cannes.',
      'حقق المخرج محمد صالح هارون إنجازاً تاريخياً للسينما التشادية بفوزه في مهرجان كان 2010.'
    ),
  }),
  mkQ({
    id: 'cur_TD_19',
    countryCode: 'TD',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'daraba_boule_chad_cuisine',
    source: 'Gastronomie traditionnelle du Tchad',
    prompt: L(
      'Quel plat populaire tchadien marie gombo frais, feuilles vertes (épinards ou feuilles de patate douce), tomates et pâte d’arachide pour accompagner la « boule » de mil ?',
      'Which beloved Chadian stew blends okra, leafy greens, tomatoes, and groundnut paste to serve alongside millet "boule"?',
      '¿Qué popular plato chadiano combina quimbombó, verduras de hoja, tomate y pasta de cacahuete para acompañar la «boule» de mijo?',
      'Qual prato popular chadiano combina quiabo, folhas verdes, tomate e pasta de amendoim para acompanhar a "boule" de milheto?',
      'ما الطبق التشادي الشعبي الذي يجمع البامية والخضراوات الورقية والطماطم وزبدة الفول السوداني مع العصيدة؟'
    ),
    countryModePrompt: L(
      'Quelle sauce onctueuse au gombo, aux légumes-feuilles et à la pâte d’arachide accompagne traditionnellement la boule de mil ou de sorgho ?',
      'Which comforting stew of okra, greens, and peanut paste traditionally accompanies millet or sorghum boule?',
      '¿Qué salsa tradicional de quimbombó, hojas verdes y cacahuete acompaña habitualmente la boule de mijo?',
      'Qual molho tradicional de quiabo, folhas verdes e amendoim acompanha habitualmente a boule de milheto?',
      'ما الصلصة الشعبية الغنية بالبامية والفول السوداني التي تُقدَّم تقليدياً مع عصيدة الدخن أو الذرة؟'
    ),
    correct: L('La sauce Daraba', 'Daraba', 'Daraba', 'Daraba', 'مرق الدارابا (الدرابة)'),
    distractors: [
      L('La Tarte Tatin', 'Tarte Tatin', 'Tarta Tatin', 'Tarte Tatin', 'تارت تاتان'),
      L('Le Goulash hongrois', 'Hungarian Goulash', 'Gulash húngaro', 'Goulash húngaro', 'الغولاش المجري'),
      L('Les Samosas au curry', 'Curry Samosas', 'Samosas al curry', 'Chamussas de caril', 'السمبوسة الهندية'),
    ],
    explanation: L(
      'Nourrissante et parfumée, la Daraba accompagne la boule (assida/esh) de mil, de sorgho ou de maïs sur toutes les tables du sud au centre du pays.',
      'Rich and nourishing, Daraba pairs naturally with traditional millet or sorghum boule across households.',
      'Nutritiva y aromática, la Daraba acompaña tradicionalmente la boule de mijo o sorgo.',
      'Nutritiva e saborosa, a Daraba acompanha tradicionalmente a boule de milheto ou sorgo.',
      'تُعد صلصة الدارابا طبقاً مغذياً واسع الانتشار يُقدَّم مع العصيدة في البيوت التشادية.'
    ),
  }),
  mkQ({
    id: 'cur_TD_20',
    countryCode: 'TD',
    category: 'culture',
    subCategory: 'gastronomie',
    difficulty: 2,
    topicKey: 'kisra_karkandji_chad',
    source: 'Patrimoine culinaire sahélien du Tchad',
    prompt: L(
      'Comment s’appelle la fine crêpe souple et légèrement acidulée préparée à base de farine de mil ou de sorgho fermentée, servie en feuillets avec des sauces comme le charmout ?',
      'What is the thin, slightly tangy fermented sorghum or millet flatbread served rolled alongside stews like charmout?',
      '¿Cómo se llama la fina crepa fermentada de mijo o sorgo servida con guisos como el charmout?',
      'Como se chama o fino pão achatado fermentado de milheto ou sorgo servido com ensopados como o charmout?',
      'ما اسم الخبز الرقيق المخمّر المصنوع من دقيق الذرة أو الدخن الذي يُقدَّم مع المرق مثل الشرموط؟'
    ),
    correct: L('La Kisra', 'Kisra', 'Kisra', 'Kisra', 'الكسرة'),
    distractors: [
      L('La Focaccia génoise', 'Genoese Focaccia', 'Focaccia genovesa', 'Focaccia genovesa', 'الفوكاشيا'),
      L('Le Naan au fromage', 'Cheese Naan', 'Naan de queso', 'Naan de queijo', 'خبز النان'),
      L('La Tortilla de maïs mexicaine', 'Corn Tortilla', 'Tortilla de maíz', 'Tortilha de milho', 'تورتيلا الذرة'),
    ],
    explanation: L(
      'Partagée entre le Tchad et la vallée du Nil, la kisra se déguste souvent avec une sauce de viande séchée (« charmout ») et du jus d’hibiscus frais (« karkandji »).',
      'Shared across eastern Chad and Sudan, kisra is often enjoyed with dried-meat stew ("charmout") and chilled hibiscus juice ("karkandji").',
      'Compartida entre Chad y el valle del Nilo, la kisra se disfruta con salsa de carne seca (charmout) y jugo de hibisco (karkandji).',
      'Partilhada entre o Chade e o vale do Nilo, a kisra é servida com molho de carne seca (charmout) e suco de hibisco.',
      'تُؤكل الكسرة مع مرق الشرموط وعصير الكركديه البارد في مائدة شعبية أصيلة.'
    ),
  }),
  mkQ({
    id: 'cur_TD_21',
    countryCode: 'TD',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'mounira_mitchala_rfi',
    source: 'Prix Découvertes RFI 2007 — Musique tchadienne',
    prompt: L(
      'Quelle chanteuse et autrice-compositrice surnommée « la Panthère douce » remporta le Prix Découvertes RFI en 2007 avec son album « Talou Lena » mêlant saï, gouroun et afro-folk ?',
      'Which singer-songwriter nicknamed "la Panthère douce" won the 2007 RFI Découvertes Award with "Talou Lena"?',
      '¿Qué cantautora apodada «la Panthère douce» ganó el Premio Découvertes RFI en 2007 con «Talou Lena»?',
      'Qual cantora e compositora apelidada de "la Panthère douce" venceu o Prêmio Découvertes RFI em 2007 com "Talou Lena"?',
      'من هي المغنية الملقبة بـ«النمرة اللطيفة» الفائزة بجائزة راديو فرنسا الدولي 2007 بألبوم «تالو لينا»؟'
    ),
    correct: L('Mounira Mitchala', 'Mounira Mitchala', 'Mounira Mitchala', 'Mounira Mitchala', 'منيرة ميتشالا'),
    distractors: [
      L('Rokia Traoré', 'Rokia Traoré', 'Rokia Traoré', 'Rokia Traoré', 'روكيا تراوري'),
      L('Charlotte Dipanda', 'Charlotte Dipanda', 'Charlotte Dipanda', 'Charlotte Dipanda', 'شارلوت ديباندا'),
      L('Zeynab Habib', 'Zeynab Habib', 'Zeynab Habib', 'Zeynab Habib', 'زينب حبيب'),
    ],
    explanation: L(
      'Porte-voix engagée pour la paix et les droits des femmes, Mounira Mitchala a fait voyager les rythmes traditionnels du pays sur les scènes internationales.',
      'Celebrating peace and women’s empowerment, Mounira Mitchala carried traditional Chadian rhythms onto international stages.',
      'Voz comprometida por la paz y los derechos de las mujeres, llevó los ritmos tradicionales por el mundo.',
      'Voz engajada pela paz e pelos direitos das mulheres, levou os ritmos tradicionais aos palcos internacionais.',
      'حملت منيرة ميتشالا الإيقاعات التقليدية إلى المسارح العالمية بأغانٍ تدعو للسلام والعدالة.'
    ),
  }),
  mkQ({
    id: 'cur_TD_22',
    countryCode: 'TD',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 3,
    topicKey: 'official_languages_fr_ar',
    source: 'Constitution de la République du Tchad',
    prompt: L(
      'Quelles sont les deux langues officielles inscrites dans la Constitution du Tchad, aux côtés de plus de 120 langues nationales comme le sara, le kanembou et le tubu ?',
      'Which two official languages are enshrined in Chad’s constitution alongside more than 120 national languages like Sara, Kanembu, and Toubou?',
      '¿Cuáles son las dos lenguas oficiales constitucionales de Chad junto a más de 120 idiomas nacionales?',
      'Quais são as duas línguas oficiais constitucionais do Chade ao lado de mais de 120 línguas nacionais?',
      'ما اللغتان الرسميتان المنصوص عليهما في الدستور التشادي إلى جانب أكثر من 120 لغة محلية؟'
    ),
    countryModePrompt: L(
      'Quelles deux langues officielles coexistent dans l’administration et l’école aux côtés de plus de 120 langues locales (sara, toubou, maba, kanembou...) ?',
      'Which two official languages share administrative and educational status alongside over 120 national languages?',
      '¿Qué dos lenguas oficiales comparten uso administrativo junto a más de 120 idiomas nacionales?',
      'Quais duas línguas oficiais compartilham o uso administrativo ao lado de mais de 120 línguas nacionais?',
      'ما اللغتان الرسميتان المعتمدتان في الإدارة والتعليم إلى جانب أكثر من 120 لغة محلية؟'
    ),
    correct: L('Le français et l’arabe', 'French and Arabic', 'Francés y árabe', 'Francês e árabe', 'الفرنسية والعربية'),
    distractors: [
      L('L’anglais et le portugais', 'English and Portuguese', 'Inglés y portugués', 'Inglês e português', 'الإنجليزية والبرتغالية'),
      L('L’espagnol et le swahili', 'Spanish and Swahili', 'Español y suajili', 'Espanhol e suaíli', 'الإسبانية والسواحيلية'),
      L('L’italien et l’amharique', 'Italian and Amharic', 'Italiano y amhárico', 'Italiano e amárico', 'الإيطالية والأمهرية'),
    ],
    explanation: L(
      'L’arabe tchadien sert aussi de langue véhiculaire largement comprise à travers les marchés de N’Djamena et du centre-est, tandis que les langues sara dominent au sud.',
      'Chadian Arabic also acts as a widespread lingua franca across markets, complementing Sara and dozens of other vibrant national languages.',
      'El árabe chadiano actúa como lengua vehicular en numerosos mercados junto al sara y decenas de idiomas.',
      'O árabe chadiano atua como língua veicular nos mercados, ao lado do sara e de dezenas de idiomas.',
      'تؤدي العربية التشادية أيضاً دور لغة تواصل واسعة الانتشار في الأسواق إلى جانب السارا وعشرات اللغات الوطنية.'
    ),
  }),
  mkQ({
    id: 'cur_TD_23',
    countryCode: 'TD',
    category: 'culture',
    subCategory: 'sciences_innovations',
    difficulty: 4,
    topicKey: 'spirulina_dihe_kanem',
    source: 'FAO / Patrimoine alimentaire du Kanem',
    prompt: L(
      'Quelle micro-algue bleu-vert ultra-nutritive appelée localement « diéhé » est récoltée de manière ancestrale par les femmes kanembou dans les mares natronées près du lac Tchad ?',
      'Which nutrient-rich blue-green microalga locally called "dihé" is traditionally harvested by Kanembu women in natron ponds near Lake Chad?',
      '¿Qué microalga azul-verde muy nutritiva llamada localmente «dihé» cosechan las mujeres kanembú cerca del lago Chad?',
      'Qual microalga azul-esverdeada muito nutritiva chamada localmente de "dihé" é colhida pelas mulheres kanembu perto do lago Chade?',
      'ما الطحلب الدقيق الغني بالبروتين المعروف محلياً باسم «ديهي» الذي تحصدنه نساء كانمبو قرب بحيرة تشاد؟'
    ),
    correct: L('La spiruline', 'Spirulina', 'Espirulina', 'Espirulina', 'السبيرولينا'),
    distractors: [
      L('Le safran de Perse', 'Persian saffron', 'Azafrán persa', 'Açafrão persa', 'الزعفران'),
      L('La levure de bière houblonnée', 'Brewer’s yeast', 'Levadura de cerveza', 'Levedura de cerveja', 'خميرة البيرة'),
      L('L’algue nori du Japon', 'Japanese nori seaweed', 'Alga nori', 'Alga nori', 'طحالب النوري'),
    ],
    explanation: L(
      'Séchée au soleil sur des nattes de sable, la spiruline (« diéhé ») est riche en protéines, fer et vitamines, et soutient des milliers de familles du Kanem.',
      'Sun-dried on sandy mats as "dihé," natural spirulina provides vital protein, iron, and income for Kanembu women’s cooperatives.',
      'Secada al sol en forma de tortas («dihé»), la espirulina aporta proteínas e ingresos esenciales en Kanem.',
      'Seca ao sol em forma de placas ("dihé"), a espirulina fornece proteínas e renda vital no Kanem.',
      'تُجفف السبيرولينا تحت الشمس وتوفر بروتيناً وحديداً عالي القيمة الغذائية ومصدراً مهماً لرزق الأسر.'
    ),
  }),
  mkQ({
    id: 'cur_TD_24',
    countryCode: 'TD',
    category: 'culture',
    subCategory: 'musique_divertissement',
    difficulty: 3,
    topicKey: 'koulsy_lamko_nimrod_literature',
    source: 'Littérature contemporaine francophone d’Afrique centrale',
    prompt: L(
      'Quel grand écrivain et poète tchadien, né à Koyom, a reçu le Prix Ahmadou-Kourouma (pour « Le Bal des débutants ») et le Prix Guillaume-Apollinaire de poésie ?',
      'Which acclaimed Koyom-born Chadian novelist and poet won both the Ahmadou Kourouma Prize and the Guillaume Apollinaire Poetry Prize?',
      '¿Qué gran escritor y poeta chadiano nacido en Koyom ganó el Premio Ahmadou Kourouma y el Premio Guillaume Apollinaire?',
      'Qual grande escritor e poeta chadiano nascido em Koyom venceu o Prêmio Ahmadou Kourouma e o Prêmio Guillaume Apollinaire?',
      'من هو الأديب والشاعر التشادي المولود في كويوم والفائز بجائزتي أحمدو كوروما وغيوم أبولينير؟'
    ),
    countryModePrompt: L(
      'Sous quel nom de plume l’écrivain et poète Bena Djangrang, lauréat du Prix Ahmadou-Kourouma, signe-t-il ses romans et recueils ?',
      'Under what pen name does acclaimed novelist and poet Bena Djangrang, winner of the Ahmadou Kourouma Prize, publish his works?',
      '¿Con qué seudónimo publica sus novelas y poemarios el escritor Bena Djangrang?',
      'Com que pseudônimo o escritor e poeta Bena Djangrang publica seus romances e poemas?',
      'ما الاسم الأدبي الذي ينشر تحته الروائي والشاعر بينا دجانغرانغ الفائز بجائزة أحمدو كوروما؟'
    ),
    correct: L('Nimrod (Bena Djangrang)', 'Nimrod (Bena Djangrang)', 'Nimrod (Bena Djangrang)', 'Nimrod (Bena Djangrang)', 'نيمرود (بينا دجانغرانغ)'),
    distractors: [
      L('Sony Labou Tansi', 'Sony Labou Tansi', 'Sony Labou Tansi', 'Sony Labou Tansi', 'سوني لابو تانسي'),
      L('Mongo Beti', 'Mongo Beti', 'Mongo Beti', 'Mongo Beti', 'مونغو بيتي'),
      L('Tchicaya U Tam’si', 'Tchicaya U Tam’si', 'Tchicaya U Tam’si', 'Tchicaya U Tam’si', 'تشيكايا أو تامسي'),
    ],
    explanation: L(
      'Poète, essayiste et romancier majeur né en 1959, Nimrod explore la mémoire, l’enfance au bord du Logone et les défis contemporains.',
      'Born in 1959 in southern Chad, Nimrod is celebrated across the French-speaking world for his luminous poetry and prose.',
      'Nacido en 1959, Nimrod es una de las grandes voces de la poesía y narrativa africana contemporánea.',
      'Nascido em 1959, Nimrod é uma das grandes vozes da poesia e prosa africana contemporânea.',
      'يُعد نيمرود من أبرز أصوات الشعر والرواية الأفريقية المعاصرة باللغة الفرنسية.'
    ),
  }),
  mkQ({
    id: 'cur_TD_25',
    countryCode: 'TD',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 3,
    topicKey: 'kakaki_trumpet_sahel',
    source: 'Patrimoine instrumental du Sahel et des sultanats',
    prompt: L(
      'Quel spectaculaire instrument à vent cérémoniel en métal pouvant mesurer 3 à 4 mètres de long annonce l’arrivée des sultans du Kanem, du Baguirmi et du Ouaddaï ?',
      'Which dramatic ceremonial metal horn up to 3–4 meters long heralds royal processions of sultans in Kanem, Baguirmi, and Wadai?',
      '¿Qué espectacular trompeta ceremonial metálica de hasta 3 o 4 metros anuncia los cortejos de los sultanes del Kanem y Ouaddaï?',
      'Qual espetacular trombeta cerimonial metálica de até 3 a 4 metros anuncia os cortejos dos sultões do Kanem e Ouaddaï?',
      'ما البوق المعدني الطقسي الطويل الذي يصل طوله إلى 3 أو 4 أمتار ويُعزف في مواكب سلاطين كانم ووداي؟'
    ),
    correct: L('Le kakaki', 'The kakaki trumpet', 'El kakaki', 'O kakaki', 'بوق الكاكاكي'),
    distractors: [
      L('Le didgeridoo australien', 'Australian didgeridoo', 'Didyeridú australiano', 'Didgeridoo australiano', 'الديدجيريدو الأسترالي'),
      L('La cornemuse écossaise', 'Scottish bagpipes', 'Gaita escocesa', 'Gaita de foles escocesa', 'مزمار القربة الأسكتلندي'),
      L('Le cor des Alpes', 'Alphorn', 'Trompa de los Alpes', 'Trompa dos Alpes', 'بوق الألب'),
    ],
    explanation: L(
      'Façonné en laiton ou en fer-blanc, le kakaki est joué à cheval lors des grandes fêtes musulmanes, des intronisations et des cortèges princiers.',
      'Played on horseback during royal ceremonies and festivals, the soaring notes of the kakaki echo across Sahelian courtyards.',
      'Tocado a caballo durante ceremonias reales y fiestas, el kakaki resuena en todos los grandes sultanatos.',
      'Tocado a cavalo em cerimônias reais e festas, o kakaki ecoa pelos grandes sultanatos.',
      'يُعزف بوق الكاكاكي فوق ظهور الخيل في الأعياد والمواكب الملكية التقليدية.'
    ),
  }),
  mkQ({
    id: 'cur_TD_26',
    countryCode: 'TD',
    category: 'culture',
    subCategory: 'economie_developpement',
    difficulty: 3,
    topicKey: 'cotton_gum_arabic_doba_oil',
    source: 'Économie du Tchad — FAO & Banque mondiale',
    prompt: L(
      'En plus du pétrole du bassin de Doba et de l’élevage, pour quelle résine naturelle récoltée sur les acacias du Sahel le Tchad compte-t-il parmi les tout premiers exportateurs mondiaux ?',
      'Besides Doba oil and livestock, Chad ranks among the world’s top exporters of which natural resin harvested from Sahelian acacia trees?',
      'Además del petróleo de Doba y la ganadería, ¿de qué resina natural extraída de las acacias es Chad uno de los mayores exportadores mundiales?',
      'Além do petróleo de Doba e da pecuária, de qual resina natural extraída de acácias o Chade é um dos maiores exportadores mundiais?',
      'إلى جانب النفط والثروة الحيوانية، تُعد تشاد من أكبر مصدّري العالم لأي مادة صمغية طبيعية تُستخرج من أشجار الأكاسيا؟'
    ),
    correct: L('La gomme arabique', 'Gum arabic', 'La goma arábiga', 'A goma-arábica', 'الصمغ العربي'),
    distractors: [
      L('Le caoutchouc de synthèse', 'Synthetic rubber', 'Caucho sintético', 'Borracha sintética', 'المطاط الصناعي'),
      L('Le sirop d’érable', 'Maple syrup', 'Jarabe de arce', 'Xarope de bordo', 'شراب القيقب'),
      L('L’huile d’olive vierge', 'Olive oil', 'Aceite de oliva', 'Azeite de oliva', 'زيت الزيتون'),
    ],
    explanation: L(
      'Récoltée de manière durable sur l’Acacia senegal (hashab) et l’Acacia seyal (talha), la gomme arabique sert dans l’alimentation, la pharmacie et les boissons du monde entier.',
      'Harvested sustainably from Sahelian acacia trees, Chadian gum arabic is prized globally by food, beverage, and pharmaceutical industries.',
      'Extraída de acacias sahelianas, la goma arábiga se exporta a todo el mundo para la industria alimentaria y farmacéutica.',
      'Extraída de acácias sahelianas, a goma-arábica é exportada globalmente para alimentos, bebidas e fármacos.',
      'يُحصد الصمغ العربي من أشجار السنط في حزام الساحل ويُصدَّر عالمياً للصناعات الغذائية والدوائية.'
    ),
  }),
  mkQ({
    id: 'cur_TD_27',
    countryCode: 'TD',
    category: 'culture',
    subCategory: 'anecdotes_insolites',
    difficulty: 3,
    topicKey: 'camel_horse_fantasia_guera',
    source: 'Traditions équestres du Sahel tchadien',
    prompt: L(
      'Dans les régions sahariennes et sahéliennes du Tchad (Borkou, Kanem, Batha, Ouaddaï), comment appelle-t-on le harnachement d’apparat et les courses spectaculaires de dromadaires et cavaliers ?',
      'Across Chad’s Saharan and Sahelian provinces, which majestic animal alongside the horse stars in ornate desert parades and high-speed races?',
      'En las regiones desérticas y sahelianas de Chad, ¿qué animal majestuoso acompaña al caballo en desfiles y carreras tradicionales?',
      'Nas regiões saarianas e sahelianas do Chade, qual animal majestoso acompanha o cavalo em desfiles e corridas tradicionais?',
      'في الأقاليم الصحراوية والساحلية بتشاد، ما الحيوان الأصيل الذي يرافق الخيول في السباقات والمواكب التقليدية؟'
    ),
    countryModePrompt: L(
      'Quel animal surnommé « le vaisseau du désert » est au cœur des courses festives et des caravanes de sel entre le Borkou, l’Ennedi et le Kanem ?',
      'Which animal nicknamed the "ship of the desert" anchors festive races and salt caravans across Borkou, Ennedi, and Kanem?',
      '¿Qué animal apodado el «barco del desierto» protagoniza carreras festivas y caravanas de sal en el norte?',
      'Qual animal apelidado de "navio do deserto" estrela corridas festivas e caravanas de sal no norte?',
      'ما الحيوان الملقب بـ«سفينة الصحراء» الذي يتصدر السباقات التراثية وقوافل الملح في الشمال؟'
    ),
    correct: L('Le dromadaire (méhari)', 'The dromedary camel (méhari)', 'El dromedario (mehari)', 'O dromedário (mehari)', 'الجمل العربي (المهري)'),
    distractors: [
      L('Le lama des Andes', 'Andean llama', 'Llama andina', 'Lhama andina', 'اللاما الأنديزية'),
      L('Le renne boréal', 'Arctic reindeer', 'Reno ártico', 'Rena ártica', 'الرنة القطبية'),
      L('Le bison d’Amérique', 'American bison', 'Bisonte americano', 'Bisão americano', 'البيسون الأمريكي'),
    ],
    explanation: L(
      'Le pays possède l’un des plus importants cheptels camelins d’Afrique ; le festival des courses camelines de N’Djamena et d’Abéché attire chaque année de grands méharistes.',
      'Home to one of Africa’s largest dromedary herds, annual camel races celebrate nomadic horsemanship and desert culture.',
      'El país alberga uno de los mayores rebaños de dromedarios de África y celebra espectaculares carreras anuales.',
      'O país possui um dos maiores rebanhos de dromedários da África e celebra corridas tradicionais espetaculares.',
      'تمتلك تشاد إحدى أكبر ثروات الإبل في أفريقيا وتُقام لها مهرجانات وسباقات تراثية سنوية.'
    ),
  }),
  mkQ({
    id: 'cur_TD_28',
    countryCode: 'TD',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 2,
    topicKey: 'ndoram_japhet_les_sao',
    source: 'FTFA / FC Nantes — Légendes du football tchadien',
    prompt: L(
      'Quel milieu offensif tchadien de génie, surnommé « le Sorcier », devint champion de France avec le FC Nantes en 1995 et reste une icône absolue des Sao ?',
      'Which brilliant Chadian attacking midfielder nicknamed "the Wizard" won the 1995 French Ligue 1 title with FC Nantes and remains an icon of Les Sao?',
      '¿Qué brillante centrocampista ofensivo chadiano apodado «el Brujo» ganó la liga francesa con el FC Nantes en 1995?',
      'Qual brilhante meia-atacante chadiano apelidado de "o Mago" venceu o Campeonato Francês pelo FC Nantes em 1995?',
      'من هو صانع الألعاب التشادي الشهير الملقب بـ«الساحر» الذي تُوج بالدوري الفرنسي مع نانت عام 1995؟'
    ),
    countryModePrompt: L(
      'Quel meneur de jeu surnommé « le Sorcier » à Nantes et champion de France 1995 (puis champion avec Monaco en 2000) est la plus grande légende du football national ?',
      'Which playmaker nicknamed "le Sorcier" at FC Nantes—1995 French champion—is the nation’s greatest football legend?',
      '¿Qué mediapunta apodado «el Brujo» en el FC Nantes y campeón de Francia en 1995 es la mayor leyenda del fútbol nacional?',
      'Qual meia apelidado de "o Mago" no FC Nantes e campeão francês de 1995 é a maior lenda do futebol nacional?',
      'من هو صانع الألعاب الملقب بـ«الساحر» في نانت وبطل فرنسا 1995 وأعظم أسطورة في تاريخ الكرة المحلية؟'
    ),
    correct: L('Japhet N’Doram', 'Japhet N’Doram', 'Japhet N’Doram', 'Japhet N’Doram', 'جافيت ندورام'),
    distractors: [
      L('Jay-Jay Okocha', 'Jay-Jay Okocha', 'Jay-Jay Okocha', 'Jay-Jay Okocha', 'جاي جاي أوكوشا'),
      L('Abedi Pelé', 'Abedi Pelé', 'Abedi Pelé', 'Abedi Pelé', 'عبيدي بيليه'),
      L('Rabah Madjer', 'Rabah Madjer', 'Rabah Madjer', 'Rabah Madjer', 'رابح ماجر'),
    ],
    explanation: L(
      'Transféré du Tonnerre de Yaoundé à Nantes en 1990, Japhet N’Doram marqua notamment un but d’anthologie en demi-finale de Ligue des champions face à la Juventus en 1996.',
      'Signed by FC Nantes in 1990, Japhet N’Doram enchanted Europe with his flair and scored against Juventus in the 1996 Champions League semi-finals.',
      'Fichado por el Nantes en 1990, Japhet N’Doram deslumbró en Europa y marcó a la Juventus en semifinales de Champions de 1996.',
      'Contratado pelo Nantes em 1990, Japhet N’Doram brilhou na Europa e marcou contra a Juventus na Liga dos Campeões de 1996.',
      'تألق جافيت ندورام في الملاعب الأوروبية مع نانت وموناكو وسجل هدفاً شهيراً أمام يوفنتوس في نصف نهائي 1996.'
    ),
  }),
  mkQ({
    id: 'cur_TD_29',
    countryCode: 'TD',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'ezechiel_ndouassel_record',
    source: 'FTFA — Records des Sao du Tchad',
    prompt: L(
      'Quel avant-centre et capitaine emblématique détient le record historique de buts inscrits en équipe nationale du Tchad (Les Sao) ?',
      'Which towering striker and long-time captain holds the all-time goalscoring record for Chad’s national team (Les Sao)?',
      '¿Qué delantero y capitán emblemático posee el récord histórico de goles con la selección de Chad (Les Sao)?',
      'Qual centroavante e capitão emblemático detém o recorde histórico de gols pela seleção do Chade (Les Sao)?',
      'من هو المهاجم والقائد التاريخي الذي يحمل الرقم القياسي لعدد الأهداف مع منتخب تشاد (ساو)؟'
    ),
    countryModePrompt: L(
      'Quel attaquant prolifique formé à Tourbillon FC, passé par l’Afrique du Nord et l’Asie, est le meilleur buteur de l’histoire des Sao ?',
      'Which prolific striker who began at Tourbillon FC and starred in North Africa and Asia is the all-time top scorer for Les Sao?',
      '¿Qué prolífico delantero formado en el Tourbillon FC es el máximo goleador histórico de Les Sao?',
      'Qual artilheiro revelado pelo Tourbillon FC é o maior goleador da história dos Sao?',
      'من هو الهداف التاريخي لمنتخب «ساو» الذي بدأ مسيرته في توربيون إف سي؟'
    ),
    correct: L('Ezechiel Ndouassel', 'Ezechiel Ndouassel', 'Ezechiel Ndouassel', 'Ezechiel Ndouassel', 'إيزيكييل ندواسيل'),
    distractors: [
      L('Pierre-Emerick Aubameyang', 'Pierre-Emerick Aubameyang', 'Pierre-Emerick Aubameyang', 'Pierre-Emerick Aubameyang', 'بيير إيميريك أوباميانغ'),
      L('Vincent Aboubakar', 'Vincent Aboubakar', 'Vincent Aboubakar', 'Vincent Aboubakar', 'فينسنت أبو بكر'),
      L('Samuel Eto’o', 'Samuel Eto’o', 'Samuel Eto’o', 'Samuel Eto’o', 'صامويل إيتو'),
    ],
    explanation: L(
      'Passé par le MC Blida, le Club Africain de Tunis, Terek Grozny et le Persib Bandung, Ezechiel Ndouassel a porté Les Sao pendant près de deux décennies.',
      'Having starred in Tunisia, Algeria, Russia, and Indonesia, Ezechiel Ndouassel has led Les Sao’s attack for nearly two decades.',
      'Con carrera en Túnez, Argelia, Rusia e Indonesia, Ezechiel Ndouassel lideró durante casi veinte años a Les Sao.',
      'Com passagens por Tunísia, Argélia, Rússia e Indonésia, Ezechiel Ndouassel liderou o ataque dos Sao por quase duas décadas.',
      'قاد إيزيكييل ندواسيل خط هجوم منتخب ساو لقرابة عقدين وسجل أهدافاً تاريخية في التصفيات القارية.'
    ),
  }),
  mkQ({
    id: 'cur_TD_30',
    countryCode: 'TD',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'kaltoum_nadjina_athletics',
    source: 'World Athletics & Championnats d’Afrique 2002',
    prompt: L(
      'Quelle grande sprinteuse tchadienne du 400 m a remporté l’or aux Championnats d’Afrique 2002 à Radès et terminé sur le podium mondial en salle en 2001 ?',
      'Which celebrated Chadian 400m sprinter won gold at the 2002 African Athletics Championships and a 2001 World Indoor Championships medal?',
      '¿Qué gran velocista chadiana de los 400 m ganó el oro en el Campeonato Africano de 2002 y medalla mundial en pista cubierta en 2001?',
      'Qual grande velocista chadiana dos 400 m ganhou o ouro no Campeonato Africano de 2002 e medalha mundial indoor em 2001?',
      'من هي العداءة التشادية الشهيرة في سباق 400 متر الفائزة بذهبية أفريقيا 2002 وميدالية بطولة العالم داخل الصالات 2001؟'
    ),
    countryModePrompt: L(
      'Quelle spécialiste du 200 m et du 400 m, championne d’Afrique 2002 et médaillée mondiale en salle à Lisbonne en 2001, a porté le drapeau national aux Jeux olympiques ?',
      'Which 200m and 400m track star—2002 African Champion and 2001 World Indoor medalist—represented the country at the Olympic Games?',
      '¿Qué especialista de los 200 m y 400 m, campeona africana en 2002, representó al país en los Juegos Olímpicos?',
      'Qual especialista nos 200 m e 400 m, campeã africana em 2002, representou o país nos Jogos Olímpicos?',
      'من هي بطلة أفريقيا 2002 في سباق 400 متر والحائزة على ميدالية عالمية في لشبونة 2001؟'
    ),
    correct: L('Kaltoum Nadjina', 'Kaltoum Nadjina', 'Kaltoum Nadjina', 'Kaltoum Nadjina', 'كلثوم نجينا'),
    distractors: [
      L('Marie-Josée Ta Lou', 'Marie-Josée Ta Lou', 'Marie-Josée Ta Lou', 'Marie-Josée Ta Lou', 'ماري جوزيه تا لو'),
      L('Tirunesh Dibaba', 'Tirunesh Dibaba', 'Tirunesh Dibaba', 'Tirunesh Dibaba', 'تيرونيش ديبابا'),
      L('Caster Semenya', 'Caster Semenya', 'Caster Semenya', 'Caster Semenya', 'كاستر سيمينيا'),
    ],
    explanation: L(
      'Née à Bol au bord du lac Tchad, Kaltoum Nadjina reste l’une des plus grandes athlètes de l’histoire du pays avec ses records sur 200 m et 400 m.',
      'Born in Bol on Lake Chad, Kaltoum Nadjina remains one of the country’s greatest track champions with multiple continental medals.',
      'Nacida en Bol a orillas del lago Chad, Kaltoum Nadjina es una de las mayores figuras del atletismo nacional.',
      'Nascida em Bol às margens do lago Chade, Kaltoum Nadjina é um dos maiores nomes do atletismo nacional.',
      'تُعد كلثوم نجينا المولودة في بول من أبرز بطلات ألعاب القوى في تاريخ البلاد.'
    ),
  }),
  mkQ({
    id: 'cur_TD_31',
    countryCode: 'TD',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'casimir_ninga_marius_ligue1',
    source: 'FTFA / Ligue 1 — Joueurs tchadiens',
    prompt: L(
      'Quel attaquant rapide des Sao né à N’Djamena (passé par MangaSport au Gabon avant Montpellier, Caen et Angers en Ligue 1) a inscrit un triplé mémorable en Ligue 1 en 2019 ?',
      'Which speedy N’Djamena-born striker of Les Sao played in Ligue 1 for Montpellier, Caen, and Angers, scoring a memorable hat-trick in 2019?',
      '¿Qué veloz delantero nacido en Yamena jugó en la Ligue 1 con Montpellier, Caen y Angers y firmó un triplete en 2019?',
      'Qual veloz atacante nascido em N’Djamena atuou na Ligue 1 por Montpellier, Caen e Angers, marcando um hat-trick em 2019?',
      'من هو المهاجم التشادي السريع المولود في انجامينا الذي تألق في الدوري الفرنسي مع مونبلييه وكان وأنجيه؟'
    ),
    countryModePrompt: L(
      'Quel attaquant international des Sao passé par la Renaissance FC, Montpellier, Caen et Angers a brillé en Ligue 1 française ?',
      'Which international striker who rose from Renaissance FC to star for Montpellier, Caen, and Angers shone in France’s Ligue 1?',
      '¿Qué delantero internacional formado en el Renaissance FC brilló en la Ligue 1 francesa?',
      'Qual atacante internacional revelado pelo Renaissance FC brilhou na Ligue 1 francesa?',
      'من هو المهاجم الدولي الذي انطلق من رينيسانس إف سي وتألق في الدوري الفرنسي الممتاز؟'
    ),
    correct: L('Casimir Ninga', 'Casimir Ninga', 'Casimir Ninga', 'Casimir Ninga', 'كازيمير نينغا'),
    distractors: [
      L('Karl Toko-Ekambi', 'Karl Toko-Ekambi', 'Karl Toko-Ekambi', 'Karl Toko-Ekambi', 'كارل توكو إيكامبي'),
      L('Boulaye Dia', 'Boulaye Dia', 'Boulaye Dia', 'Boulaye Dia', 'بولاي ديا'),
      L('Habib Diallo', 'Habib Diallo', 'Habib Diallo', 'Habib Diallo', 'حبيب ديالو'),
    ],
    explanation: L(
      'Révélé très jeune à N’Djamena puis champion du Gabon avec Mangasport, Casimir Ninga s’est imposé sur les pelouses européennes par sa vitesse explosive.',
      'Starting in N’Djamena before moving to France’s top flight, Casimir Ninga carried the flag of Chadian football in Ligue 1.',
      'Formado en Yamena antes de dar el salto a Francia, Casimir Ninga destacó por su velocidad explosiva.',
      'Revelado em N’Djamena antes de chegar à França, Casimir Ninga destacou-se por sua velocidade explosiva.',
      'برز كازيمير نينغا في الدوري الفرنسي وأسهم في تمثيل كرة القدم التشادية في الملاعب الأوروبية.'
    ),
  }),
  mkQ({
    id: 'cur_TD_32',
    countryCode: 'TD',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 3,
    topicKey: 'renaissance_tourbillon_elect_clubs',
    source: 'FTFA — Championnat du Tchad D1',
    prompt: L(
      'Quels clubs historiques de N’Djamena se partagent de nombreux titres du championnat de football du Tchad aux côtés du Gazelle FC et de l’AS CotonTchad ?',
      'Which historic N’Djamena clubs have won numerous Chadian Premier League titles alongside Gazelle FC and AS CotonTchad?',
      '¿Qué clubes históricos de Yamena han ganado numerosos títulos de la liga de Chad junto al Gazelle FC y AS CotonTchad?',
      'Quais clubes históricos de N’Djamena conquistaram diversos títulos da liga do Chade ao lado do Gazelle FC e AS CotonTchad?',
      'أي أندية عريقة من انجامينا توجت بعدة ألقاب في الدوري التشادي إلى جانب غازيل وكوتون تشاد؟'
    ),
    countryModePrompt: L(
      'Quels deux grands rivaux historiques du championnat national de la capitale affrontent régulièrement Gazelle FC et Foullah Edifice ?',
      'Which two historic capital-city league powerhouses regularly rival Gazelle FC and Foullah Edifice?',
      '¿Qué dos grandes rivales históricos de la liga nacional de la capital compiten ante el Gazelle FC?',
      'Quais dois grandes rivais históricos da liga nacional da capital enfrentam o Gazelle FC?',
      'ما الناديان العريقان في الدوري المحلي بالعاصمة اللذان ينافسان غازيل إف سي وفولاه إيديفيس؟'
    ),
    correct: L('Renaissance FC, Tourbillon FC et Elect-Sport FC', 'Renaissance FC, Tourbillon FC & Elect-Sport FC', 'Renaissance FC, Tourbillon FC y Elect-Sport FC', 'Renaissance FC, Tourbillon FC e Elect-Sport FC', 'رينيسانس إف سي وتوربيون وإليكت سبورت'),
    distractors: [
      L('Canon Yaoundé et Union Douala', 'Canon Yaoundé & Union Douala', 'Canon Yaoundé y Union Douala', 'Canon Yaoundé e Union Douala', 'كانون ياوندي ويونيون دوالا'),
      L('Al-Merreikh et Al-Hilal', 'Al-Merreikh & Al-Hilal', 'Al-Merreikh y Al-Hilal', 'Al-Merreikh e Al-Hilal', 'المريخ والهلال'),
      L('Diables Noirs et Étoile du Congo', 'Diables Noirs & Étoile du Congo', 'Diables Noirs y Étoile du Congo', 'Diables Noirs e Étoile du Congo', 'الشياطين السود وإيتوال دو كونغو'),
    ],
    explanation: L(
      'Renaissance FC (plusieurs fois champion national), Elect-Sport FC, Tourbillon FC et Gazelle FC animent les derbys de la capitale.',
      'Renaissance FC, Elect-Sport FC, Tourbillon FC, and Gazelle FC are the traditional pillars of domestic club football.',
      'Renaissance FC, Elect-Sport FC, Tourbillon FC y Gazelle FC animan los grandes derbis de la capital.',
      'Renaissance FC, Elect-Sport FC, Tourbillon FC e Gazelle FC são pilares dos clássicos da capital.',
      'تشكل أندية رينيسانس وإليكت سبورت وتوربيون وغازيل أبرز أركان كرة القدم المحلية.'
    ),
  }),
  mkQ({
    id: 'cur_TD_33',
    countryCode: 'TD',
    category: 'football',
    subCategory: 'football_sports',
    difficulty: 4,
    topicKey: 'mouandilmadji_olympic_stadium_mandjafa',
    source: 'CAF — Stade Olympique de Mandjafa & Ligue 1',
    prompt: L(
      'Comment s’appelle la nouvelle enceinte ultramoderne de 30 000 places inaugurée près de N’Djamena à Mandjafa pour accueillir les matchs internationaux des Sao ?',
      'What is the name of the modern 30,000-seat Olympic stadium built at Mandjafa near N’Djamena to host international matches for Les Sao?',
      '¿Cómo se llama el moderno estadio olímpico de 30 000 plazas construido en Mandjafa cerca de Yamena?',
      'Como se chama o moderno estádio olímpico de 30.000 lugares construído em Mandjafa perto de N’Djamena?',
      'ما اسم الملعب الأولمبي الحديث بسعة 30 ألف متفرج الذي أُنشئ في مانجافا قرب انجامينا؟'
    ),
    countryModePrompt: L(
      'Dans quel quartier périphérique au sud-est de la capitale a été érigé le nouveau grand Stade Olympique de 30 000 places ?',
      'In which southeastern suburb of the capital was the new 30,000-seat Olympic Stadium built?',
      '¿En qué localidad al sureste de la capital se construyó el nuevo Estadio Olímpico de 30 000 asientos?',
      'Em qual localidade a sudeste da capital foi erguido o novo Estádio Olímpico de 30.000 lugares?',
      'في أي منطقة جنوب شرق العاصمة شُيّد الملعب الأولمبي الجديد بسعة 30 ألف متفرج؟'
    ),
    correct: L('Le Stade Olympique de Mandjafa (Maréchal Idriss Déby Itno)', 'Mandjafa Olympic Stadium (Maréchal Idriss Déby Itno)', 'Estadio Olímpico de Mandjafa', 'Estádio Olímpico de Mandjafa', 'الملعب الأولمبي بمانجافا'),
    distractors: [
      L('Le Stade du 28-Septembre', '28 September Stadium', 'Estadio 28 de Septiembre', 'Estádio 28 de Setembro', 'ملعب 28 سبتمبر'),
      L('Le Stade Général Seyni-Kountché', 'Stade Général Seyni Kountché', 'Estadio Seyni Kountché', 'Estádio Seyni Kountché', 'ملعب سيني كونتشي'),
      L('Le Stade d’Olembé', 'Olembe Stadium', 'Estadio de Olembé', 'Estádio de Olembé', 'ملعب أوليمبي'),
    ],
    explanation: L(
      'Conçu selon les normes CAF/FIFA à Mandjafa, ce stade permet aux Sao de retrouver leur public à domicile après des années de matchs délocalisés.',
      'Built to CAF/FIFA international standards at Mandjafa, the arena gives Les Sao a modern home venue on national soil.',
      'Construido en Mandjafa según normas FIFA/CAF, este estadio permite a Les Sao jugar ante su afición.',
      'Construído em Mandjafa nos padrões FIFA/CAF, o estádio devolve aos Sao o calor de sua torcida em casa.',
      'صُمم الملعب وفق المعايير الدولية لاحتضان مباريات المنتخب التشادي أمام جماهيره.'
    ),
  }),
  mkQ({
    id: 'cur_TD_34',
    countryCode: 'TD',
    category: 'geography',
    subCategory: 'geographie_environnement',
    difficulty: 2,
    topicKey: 'faya_largeau_borkou',
    source: 'Géographie du nord saharien — Borkou',
    prompt: L(
      'Quelle grande ville-oasis du Borkou constitue la porte d’entrée principale du Sahara tchadien entre le lac Tchad et les montagnes du Tibesti ?',
      'Which major oasis town in Borkou serves as the main northern gateway between Lake Chad and the Tibesti Mountains?',
      '¿Qué gran ciudad-oasis de Borkou sirve de puerta de entrada entre el lago Chad y el macizo del Tibesti?',
      'Qual grande cidade-oásis de Borkou serve de porta de entrada entre o lago Chade e as montanhas do Tibesti?',
      'ما مدينة الواحة الكبرى في إقليم بوركو التي تُعد البوابة الرئيسية نحو جبال تيبستي؟'
    ),
    countryModePrompt: L(
      'Quelle oasis célèbre pour ses palmeraies dattiers est le chef-lieu de la grande région désertique du Borkou ?',
      'Which famed date-palm oasis serves as the capital of the vast northern desert region of Borkou?',
      '¿Qué célebre oasis de palmeras datileras es la capital de la región desértica de Borkou?',
      'Qual famoso oásis de tamareiras é a capital da região desértica de Borkou?',
      'ما الواحة الشهيرة بنخيل التمر والتي تُعد عاصمة إقليم بوركو الصحراوي؟'
    ),
    correct: L('Faya-Largeau', 'Faya-Largeau', 'Faya-Largeau', 'Faya-Largeau', 'فايا لارجو'),
    distractors: [
      L('Sarh', 'Sarh', 'Sarh', 'Sarh', 'سار'),
      L('Kélo', 'Kélo', 'Kélo', 'Kélo', 'كيلو'),
      L('Laï', 'Laï', 'Laï', 'Laï', 'لاي'),
    ],
    explanation: L(
      'Plus grande oasis du nord du pays, Faya-Largeau produit des dattes réputées grâce à d’abondantes nappes phréatiques artésiennes.',
      'The largest oasis in northern Chad, Faya-Largeau thrives on deep artesian groundwater and lush date palm groves.',
      'Mayor oasis del norte del país, Faya-Largeau destaca por sus palmerales datileros y pozos artesianos.',
      'Maior oásis do norte do país, Faya-Largeau prospera com tamareiras e águas artesianas.',
      'تُعد فايا لارجو أكبر واحة في شمال البلاد وتشتهر بإنتاج التمور بفضل المياه الجوفية.'
    ),
  }),
  mkQ({
    id: 'cur_TD_35',
    countryCode: 'TD',
    category: 'geography',
    subCategory: 'economie_developpement',
    difficulty: 3,
    topicKey: 'doba_oil_kribi_pipeline',
    source: 'Économie — Bassin pétrolier du Logone Oriental (2003)',
    prompt: L(
      'Depuis 2003, par quel port atlantique d’un pays voisin le pétrole extrait dans le bassin de Doba (sud du Tchad) est-il exporté via un oléoduc de 1 070 km ?',
      'Since 2003, via which neighboring country’s Atlantic port is crude oil from Chad’s Doba basin exported through a 1,070-km pipeline?',
      'Desde 2003, ¿por qué puerto atlántico de un país vecino se exporta el petróleo de Doba a través de un oleoducto de 1070 km?',
      'Desde 2003, por qual porto atlântico de um país vizinho é exportado o petróleo de Doba através de um oleoduto de 1.070 km?',
      'منذ عام 2003، عبر أي ميناء أطلسي في دولة مجاورة يُصدّر نفط حوض دوبا بأنبوب يمتد 1070 كيلومتراً؟'
    ),
    countryModePrompt: L(
      'Vers quel terminal maritime camerounais de l’océan Atlantique aboutit l’oléoduc de 1 070 km acheminant le pétrole de Doba depuis 2003 ?',
      'To which Cameroonian Atlantic terminal does the 1,070-km pipeline carry crude oil from the Doba basin since 2003?',
      '¿En qué terminal marítima camerunesa del Atlántico desemboca el oleoducto desde la cuenca de Doba?',
      'Em qual terminal marítimo camaronês no Atlântico termina o oleoduto vindo da bacia de Doba?',
      'إلى أي ميناء كاميروني على المحيط الأطلسي يصل خط أنابيب نفط حوض دوبا منذ 2003؟'
    ),
    correct: L('Kribi (Cameroun)', 'Kribi (Cameroon)', 'Kribi (Camerún)', 'Kribi (Camarões)', 'كريبي (الكاميرون)'),
    distractors: [
      L('Alexandrie (Égypte)', 'Alexandria (Egypt)', 'Alejandría (Egipto)', 'Alexandria (Egito)', 'الإسكندرية (مصر)'),
      L('Mombasa (Kenya)', 'Mombasa (Kenya)', 'Mombasa (Kenia)', 'Mombaça (Quênia)', 'مومباسا (كينيا)'),
      L('Takoradi (Ghana)', 'Takoradi (Ghana)', 'Takoradi (Ghana)', 'Takoradi (Gana)', 'تاكورادي (غانا)'),
    ],
    explanation: L(
      'Pays enclavé sans accès direct à la mer, le Tchad a construit l’oléoduc Doba–Kribi (1 070 km) vers la côte atlantique pour acheminer sa production pétrolière.',
      'Landlocked Chad exports Doba basin crude via the 1,070-km pipeline terminating at Kribi on the Atlantic Ocean.',
      'Al no tener salida al mar, el país exporta el petróleo de Doba mediante el oleoducto hasta Kribi.',
      'Sem saída para o mar, o país escoa o petróleo de Doba por meio do oleoduto até Kribi.',
      'لأن البلاد حبيسة، يمتد خط الأنابيب من حوض دوبا إلى ميناء كريبي الأطلسي لتصدير النفط.'
    ),
  }),
  mkQ({
    id: 'cur_TD_36',
    countryCode: 'TD',
    category: 'geography',
    subCategory: 'patrimoine_tourisme',
    difficulty: 3,
    topicKey: 'guera_peaks_mongo',
    source: 'Géographie du centre du Tchad — Massif du Guéra',
    prompt: L(
      'Quel spectaculaire massif montagneux granitique du centre du Tchad, autour de la ville de Mongo, abrite les pics vertigineux de la « Dame de Kenga » et des traditions de danse célèbres ?',
      'Which dramatic granite mountain massif in central Chad around Mongo features jagged peaks and celebrated mountaintop cultural traditions?',
      '¿Qué espectacular macizo granítico del centro de Chad en torno a Mongo destaca por sus picos y tradiciones?',
      'Qual espetacular maciço granítico do centro do Chade em torno de Mongo destaca-se por seus picos e tradições?',
      'ما السلسلة الجبلية الجرانيتية البارزة وسط تشاد حول مدينة مونغو ذات القمم الشاهقة والتقاليد العريقة؟'
    ),
    correct: L('Le Massif du Guéra', 'The Guéra Massif', 'El Macizo de Guéra', 'O Maciço de Guéra', 'سلسلة جبال غيرا'),
    distractors: [
      L('Les Monts Drakensberg', 'Drakensberg Mountains', 'Montes Drakensberg', 'Montes Drakensberg', 'جبال دراكنزبرغ'),
      L('Les Monts de l’Aurès', 'Aurès Mountains', 'Montes Aurés', 'Montes Aurès', 'جبال الأوراس'),
      L('Le Massif du Hoggar', 'Hoggar Mountains', 'Macizo de Ahaggar', 'Maciço de Hoggar', 'جبال الهقار'),
    ],
    explanation: L(
      'Au cœur du pays, le massif du Guéra culmine au mont Guédi (1 506 m) et offre des paysages de pitons rocheux au milieu de la savane.',
      'Rising at the geographic heart of the country near Mongo, the Guéra Massif crowns the savanna with dramatic granite domes.',
      'En el corazón del país, el macizo de Guéra alza impresionantes domos graníticos sobre la sabana.',
      'No coração do país, o maciço de Guéra ergue impressionantes picos graníticos sobre a savana.',
      'ترتفع قمم جبال غيرا الجرانيتية في قلب تشاد حول مونغو مشكّلةً مشاهد طبيعية خلابة.'
    ),
  }),
  mkQ({
    id: 'cur_TD_37',
    countryCode: 'TD',
    category: 'history',
    subCategory: 'personnalites_heros',
    difficulty: 4,
    topicKey: 'idris_alooma_kanem_bornu',
    source: 'Histoire médiévale et moderne du Kanem-Bornou',
    prompt: L(
      'Quel illustre souverain (« Maï ») de la dynastie Sayfawa porta l’Empire du Kanem-Bornou à son apogée politique et militaire à la fin du XVIe siècle ?',
      'Which illustrious ruler ("Mai") of the Sayfawa dynasty brought the Kanem-Bornu Empire to its height in the late 16th century?',
      '¿Qué ilustre soberano («Mai») de la dinastía Sayfawa llevó al Imperio Kanem-Bornu a su apogeo a finales del siglo XVI?',
      'Qual ilustre soberano ("Mai") da dinastia Sayfawa levou o Império Kanem-Bornu ao apogeu no final do século XVI?',
      'من هو الحاكم الشهير الذي بلغت إمبراطورية كانم برنو في عهده ذروة قوتها أواخر القرن السادس عشر؟'
    ),
    correct: L('Idris Alaoma (Idris III)', 'Idris Alooma (Idris III)', 'Idris Alooma', 'Idris Alooma', 'إدريس ألوما'),
    distractors: [
      L('Kankou Moussa', 'Mansa Musa', 'Mansa Musa', 'Mansa Musa', 'مانسا موسى'),
      L('Chaka Zoulou', 'Shaka Zulu', 'Shaka Zulu', 'Shaka Zulu', 'شاكا زولو'),
      L('Ménélik II', 'Menelik II', 'Menelik II', 'Menelik II', 'منليك الثاني'),
    ],
    explanation: L(
      'Chroniqué par l’érudit Ahmed ibn Furtu, Idris Alaoma modernisa l’armée avec les premières armes à feu du bassin du lac Tchad et ouvrit des relations diplomatiques avec l’Empire ottoman.',
      'Recorded by scholar Ibn Furtu, Idris Alooma built brick mosques, introduced muskets via Ottoman links, and codified Islamic law.',
      'Registrado por el cronista Ibn Furtu, Idris Alooma modernizó el ejército y fortaleció la administración y las escuelas.',
      'Registrado pelo cronista Ibn Furtu, Idris Alooma modernizou o exército e fortaleceu a administração do império.',
      'استعان إدريس ألوما بالأتراك العثمانيين في تحديث جيشه وبنى المساجد والمدارس في حوض بحيرة تشاد.'
    ),
  }),
  mkQ({
    id: 'cur_TD_38',
    countryCode: 'TD',
    category: 'history',
    subCategory: 'histoire_independance',
    difficulty: 3,
    topicKey: 'battle_of_kousseri_1900',
    source: 'Histoire contemporaine du Bassin du Lac Tchad',
    prompt: L(
      'Contre quel chef de guerre venu du Soudan, bâtisseur d’un vaste royaume militaire autour du Bornou et du Baguirmi, la bataille décisive de Kousséri eut-elle lieu en avril 1900 ?',
      'Against which Sudan-born military leader, who forged a powerful state across Bornu and Baguirmi, was the decisive Battle of Kousséri fought in April 1900?',
      '¿Contra qué caudillo militar procedente de Sudán tuvo lugar la decisiva batalla de Kousséri en abril de 1900?',
      'Contra qual chefe militar vindo do Sudão ocorreu a decisiva Batalha de Kousséri em abril de 1900?',
      'ضد أي قائد عسكري قادم من السودان دارت معركة كوسيري الحاسمة في أبريل 1900؟'
    ),
    correct: L('Rabah (Rabih az-Zubayr)', 'Rabih az-Zubayr', 'Rabih az-Zubayr', 'Rabih az-Zubayr', 'رابح بن الزبير'),
    distractors: [
      L('El Hadj Omar Tall', 'El Hadj Umar Tall', 'El Hadj Umar Tall', 'El Hadj Umar Tall', 'الحاج عمر تال'),
      L('Lat Dior Diop', 'Lat Dior Diop', 'Lat Dior Diop', 'Lat Dior Diop', 'لات ديور ديوب'),
      L('Yaa Asantewaa', 'Yaa Asantewaa', 'Yaa Asantewaa', 'Yaa Asantewaa', 'يا أسانتيوا'),
    ],
    explanation: L(
      'Après sa victoire sur le Baguirmi et le Bornou dans les années 1890, Rabah fut défait en 1900 à Kousséri (face à N’Djamena) par trois colonnes françaises convergeant à travers le Tchad.',
      'Having carved out a powerful state around Lake Chad in the 1890s, Rabih az-Zubayr fell at Kousséri opposite N’Djamena in 1900.',
      'Tras consolidar un poderoso estado en torno al lago Chad, Rabih cayó en Kousséri frente a Yamena en 1900.',
      'Após erguer um poderoso Estado no lago Chade, Rabih caiu em Kousséri diante de N’Djamena em 1900.',
      'أقام رابح بن الزبير دولة قوية حول بحيرة تشاد قبل مقتله في معركة كوسيري عام 1900.'
    ),
  }),
  mkQ({
    id: 'cur_TD_39',
    countryCode: 'TD',
    category: 'culture',
    subCategory: 'culture_traditions',
    difficulty: 3,
    topicKey: 'hsao_band_afro_pop_chad',
    source: 'Scène musicale contemporaine du Tchad',
    prompt: L(
      'Quel célèbre groupe vocal et musical tchadien créé par les frères Rimtobaye marie gospel, soul, pop et rythmes traditionnels sara entre N’Djamena et Montréal ?',
      'Which acclaimed Chadian band founded by the Rimtobaye brothers blends gospel, soul, pop, and traditional Sara rhythms between N’Djamena and Montreal?',
      '¿Qué célebre banda chadiana fundada por los hermanos Rimtobaye mezcla gospel, pop y ritmos tradicionales sara?',
      'Qual célebre banda chadiana fundada pelos irmãos Rimtobaye mistura gospel, pop e ritmos tradicionais sara?',
      'ما الفرقة الموسيقية التشادية الشهيرة التي أسسها الإخوة ريمتوباي وتجمع بين الغوسبل والبوب وإيقاعات السارا؟'
    ),
    correct: L('H’Sao', 'H’Sao', 'H’Sao', 'H’Sao', 'فرقة هـ ساو (H’Sao)'),
    distractors: [
      L('Tinariwen', 'Tinariwen', 'Tinariwen', 'Tinariwen', 'تيناريوين'),
      L('Magic System', 'Magic System', 'Magic System', 'Magic System', 'ماجيك سيستم'),
      L('Amadou & Mariam', 'Amadou & Mariam', 'Amadou & Mariam', 'Amadou & Mariam', 'أمادو ومريم'),
    ],
    explanation: L(
      'Médaillé de bronze aux Jeux de la Francophonie 2001, H’Sao tire son nom d’une plante médicinale du sud du pays et d’un clin d’œil à la civilisation Sao.',
      'Bronze medalists at the 2001 Francophone Games, H’Sao named themselves after a medicinal Chadian plant and the ancient Sao heritage.',
      'Medallistas en los Juegos de la Francofonía 2001, H’Sao lleva en su nombre un guiño a la antigua cultura Sao.',
      'Medalhistas nos Jogos da Francofonia de 2001, H’Sao homenageia em seu nome a antiga herança Sao.',
      'فازت فرقة هـ ساو بميدالية في ألعاب الفرانكوفونية وتستلهم اسمها من تراث حضارة ساو العريقة.'
    ),
  }),
  mkQ({
    id: 'cur_TD_40',
    countryCode: 'TD',
    category: 'culture',
    subCategory: 'anecdotes_insolites',
    difficulty: 3,
    topicKey: 'kourtou_sarah_initiation_nangara',
    source: 'Ethnologie & Arts du sud tchadien (Moyen-Chari / Logone)',
    prompt: L(
      'À quelle occasion célèbre-t-on le « Gerewol » (souvent posé en culture sahélienne) chez les Wodaabé du Tchad et du Niger : quel élément spectaculaire les jeunes hommes arborent-ils durant ces danses rituelles ?',
      'During the annual Gerewol festival celebrated by Wodaabe pastoralists across Chad and Niger, what do the young male dancers showcase while singing in line?',
      'Durante el festival anual Gerewol celebrado por los pastores wodaabe en Chad y Níger, ¿qué lucen los jóvenes bailarines en fila?',
      'Durante o festival anual Gerewol dos pastores wodaabe no Chade e Níger, o que os jovens dançarinos exibem em fileira?',
      'خلال مهرجان الغيريوول السنوي لدى رعاة الودابي في تشاد والنيجر، بمَ يتباهى الراقصون الشباب؟'
    ),
    correct: L('Maquillages ocres/jaunes, coiffes à plumes d’autruche, charisme, yeux écarquillés et sourire éclatant', 'Bright ochre/yellow face paint, ostrich plumes, charisma, wide expressive eyes, and bright smiles', 'Pinturas faciales ocre/amarillas, plumas de avestruz, ojos expresivos y sonrisa', 'Pintura facial ocre/amarela, plumas de avestruz, olhos expressivos e sorriso', 'طلاء الوجه باللون الأصفر والمغرة وريش النعام وجمال الابتسامة والعيون'),
    distractors: [
      L('Des armures métalliques de chevaliers européens', 'European steel knight armor', 'Armaduras medievales europeas', 'Armaduras medievais europeias', 'دروع الفرسان المعدنية'),
      L('Des masques de plongée et palmes marines', 'Diving masks and flippers', 'Gafas de buceo y aletas', 'Máscaras de mergulho e nadadeiras', 'أقنعة الغوص البحرية'),
      L('Des patins à glace de compétition', 'Figure ice skates', 'Patines sobre hielo', 'Patins de gelo', 'أحذية التزلج على الجليد'),
    ],
    explanation: L(
      'Pendant la saison des pluies au Kanem et au Bahr el Ghazal, les danseurs exécutent le « Yaake » devant un jury féminin chargé de désigner les plus charismatiques.',
      'Held during the rainy season in regions like Kanem and Bahr el Ghazal, young women judge the Yaake dancers on grace, poise, and charm.',
      'Celebrado en temporada de lluvias en regiones como Kanem, las jóvenes eligen al bailarín más elegante y carismático.',
      'Realizado na estação chuvosa em regiões como Kanem, as jovens elegem o dançarino mais elegante e carismático.',
      'يُقام هذا الاحتفال في موسم الأمطار حيث تختار الشابات أكثر الراقصين أناقةً وحضوراً.'
    ),
  }),
];

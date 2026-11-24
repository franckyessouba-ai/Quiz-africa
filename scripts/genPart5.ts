import { QTuple, writePartFile } from './diasporaWriter';

interface TopicItem {
  id: string;
  q: string;
  c: string;
  d: [string, string, string];
  exp: string;
}

const rawList: TopicItem[] = [
  // 401: Alexandre Dumas
  {
    id: '401',
    q: 'Quel roman célèbre sur des épéistes courageux a été écrit par Alexandre Dumas ?',
    c: 'Les Trois Mousquetaires',
    d: ['Les Misérables', 'Germinal', 'Notre-Dame de Paris'],
    exp: 'Alexandre Dumas est l’un des écrivains français les plus lus au monde, petit-fils d’une esclave noire.'
  },
  // 402: Thomas-Alexandre Dumas
  {
    id: '402',
    q: 'Dans quel pays des Caraïbes est né le général Thomas-Alexandre Dumas, père de l’écrivain ?',
    c: 'Haïti (Saint-Domingue)',
    d: ['La Jamaïque', 'Cuba', 'La Barbade'],
    exp: 'Né esclave à Saint-Domingue, il est devenu le premier général noir de l’armée française.'
  },
  // 403: Aimé Césaire
  {
    id: '403',
    q: 'Quel mot pour exprimer la fierté d’être noir a été inventé par le poète Aimé Césaire ?',
    c: 'La Négritude',
    d: ['Le Panafricanisme', 'Le Marronnage', 'L’Émancipation'],
    exp: 'Aimé Césaire, poète et homme politique de Martinique, a créé ce mouvement avec Léopold Senghor.'
  },
  // 404: Léopold Sédar Senghor
  {
    id: '404',
    q: 'À quelle célèbre institution française Léopold Sédar Senghor a-t-il été le premier Noir élu en 1983 ?',
    c: 'L’Académie française',
    d: ['Le Conseil constitutionnel', 'Le Collège de France', 'L’Académie des sciences'],
    exp: 'Poète et premier président du Sénégal, il est surnommé un Immortel sous la coupole.'
  },
  // 405: Frantz Fanon
  {
    id: '405',
    q: 'Quel métier Frantz Fanon exerçait-il avant d’écrire son livre Peau noire, masques blancs ?',
    c: 'Médecin psychiatre',
    d: ['Avocat pénaliste', 'Capitaine de marine', 'Professeur de chimie'],
    exp: 'Originaire de Martinique, il a soigné les malades en Algérie tout en soutenant leur indépendance.'
  },
  // 406: Christiane Taubira
  {
    id: '406',
    q: 'En quelle année la loi Taubira a-t-elle reconnu l’esclavage comme un crime contre l’humanité en France ?',
    c: 'En 2001',
    d: ['En 1981', 'En 1995', 'En 2012'],
    exp: 'Christiane Taubira, députée de Guyane, a porté cette loi historique adoptée à l’unanimité.'
  },
  // 407: Christiane Taubira fonction
  {
    id: '407',
    q: 'Quel grand poste ministériel Christiane Taubira a-t-elle occupé en France entre 2012 et 2016 ?',
    c: 'Ministre de la Justice',
    d: ['Ministre de l’Éducation', 'Ministre des Finances', 'Ministre de la Santé'],
    exp: 'Elle a été garde des Sceaux de la République française et a défendu plusieurs grandes lois.'
  },
  // 408: Joséphine Baker Panthéon
  {
    id: '408',
    q: 'Dans quel célèbre monument de Paris Joséphine Baker est-elle entrée pour être honorée en 2021 ?',
    c: 'Le Panthéon',
    d: ['L’Hôtel des Invalides', 'La basilique Saint-Denis', 'Le musée du Louvre'],
    exp: 'Elle est la première femme noire à entrer au Panthéon parmi les grands personnages de France.'
  },
  // 409: Joséphine Baker tribu arc-en-ciel
  {
    id: '409',
    q: 'Combien d’enfants de pays différents Joséphine Baker a-t-elle adoptés dans son château des Milandes ?',
    c: '12 enfants',
    d: ['4 enfants', '7 enfants', '20 enfants'],
    exp: 'Elle appelait sa famille sa « tribu arc-en-ciel » pour prouver que toutes les races peuvent vivre unies.'
  },
  // 410: Félix Éboué
  {
    id: '410',
    q: 'Quel gouverneur noir a été le premier à rejoindre la France libre du général de Gaulle en 1940 ?',
    c: 'Félix Éboué',
    d: ['Aimé Césaire', 'Gaston Monnerville', 'Blaise Diagne'],
    exp: 'Né en Guyane, il dirigeait le Tchad et a offert une base essentielle à la Résistance française.'
  },
  // 411: Gaston Monnerville
  {
    id: '411',
    q: 'Pendant plus de 20 ans, quelle haute assemblée française Gaston Monnerville a-t-il présidée ?',
    c: 'Le Sénat',
    d: ['L’Assemblée nationale', 'La Cour suprême', 'Le Conseil d’État'],
    exp: 'Originaire de Guyane, il a été le deuxième personnage de l’État français durant deux décennies.'
  },
  // 412: Mary Seacole
  {
    id: '412',
    q: 'Pendant quelle guerre européenne l’infirmière jamaïcaine Mary Seacole est-elle allée soigner les soldats ?',
    c: 'La guerre de Crimée',
    d: ['La guerre de Cent Ans', 'La Première Guerre mondiale', 'La guerre d’Espagne'],
    exp: 'Refusée par l’armée britannique, elle a financé son propre voyage pour sauver les blessés au front.'
  },
  // 413: Ignatius Sancho
  {
    id: '413',
    q: 'Dans quelle ville d’Europe Ignatius Sancho a-t-il été le premier Noir à voter à une élection en 1774 ?',
    c: 'À Londres',
    d: ['À Paris', 'À Amsterdam', 'À Lisbonne'],
    exp: 'Né sur un bateau d’esclaves, il est devenu commerçant, écrivain et compositeur de musique.'
  },
  // 414: Olaudah Equiano
  {
    id: '414',
    q: 'Qu’a raconté Olaudah Equiano dans son livre à succès en 1789 en Angleterre ?',
    c: 'Sa vie d’esclave et sa liberté',
    d: ['La cuisine de son village', 'Des contes de fées', 'La pêche en mer'],
    exp: 'Son livre bouleversant a convaincu les Anglais d’interdire le commerce des esclaves.'
  },
  // 415: Paul Bogle
  {
    id: '415',
    q: 'Sur quelle île le pasteur Paul Bogle a-t-il mené la révolte de Morant Bay en 1865 ?',
    c: 'En Jamaïque',
    d: ['À la Barbade', 'En Martinique', 'À Cuba'],
    exp: 'Il s’est battu contre la faim et l’injustice dont souffraient les ouvriers noirs après l’esclavage.'
  },
  // 416: Marcus Garvey navires
  {
    id: '416',
    q: 'Quel était le nom de la compagnie de bateaux créée par Marcus Garvey pour relier les peuples noirs ?',
    c: 'La Black Star Line',
    d: ['Le Titanic', 'La White Star Line', 'Le Mayflower'],
    exp: 'Ces navires devaient transporter du commerce et des passagers entre l’Amérique, les Caraïbes et l’Afrique.'
  },
  // 417: Claude McKay
  {
    id: '417',
    q: 'Quel poème célèbre appelant au courage face aux attaques racistes Claude McKay a-t-il écrit en 1919 ?',
    c: 'If We Must Die (Si nous devons mourir)',
    d: ['I Have a Dream', 'The Raven', 'Ode à la joie'],
    exp: 'Ce poète né en Jamaïque a inspiré toute la Renaissance littéraire de Harlem à New York.'
  },
  // 418: Langston Hughes
  {
    id: '418',
    q: 'De quel grand quartier noir de New York Langston Hughes était-il l’écrivain le plus célèbre ?',
    c: 'Harlem',
    d: ['Brooklyn', 'Manhattan', 'Le Bronx'],
    exp: 'Il a écrit des poèmes rythmés comme le blues sur la beauté et la vie des Noirs américains.'
  },
  // 419: Zora Neale Hurston
  {
    id: '419',
    q: 'Quel métier d’enquête sur les coutumes et les contes Zora Neale Hurston exerçait-elle ?',
    c: 'Anthropologue',
    d: ['Astronome', 'Chirurgienne', 'Pilote d’avion'],
    exp: 'Elle parcourait le sud des États-Unis et les Caraïbes pour enregistrer les histoires du peuple noir.'
  },
  // 420: James Baldwin
  {
    id: '420',
    q: 'Dans quelle ville d’Europe James Baldwin a-t-il vécu de nombreuses années pour écrire ses livres au calme ?',
    c: 'À Paris',
    d: ['À Rome', 'À Berlin', 'À Madrid'],
    exp: 'Fuyant le racisme violent d’Amérique, il a trouvé en France la paix pour écrire ses grands chefs-d’œuvre.'
  },
  // 421: Toni Morrison
  {
    id: '421',
    q: 'Quelle haute récompense mondiale Toni Morrison a-t-elle reçue en 1993 pour ses romans ?',
    c: 'Le prix Nobel de littérature',
    d: ['Le prix Goncourt', 'La médaille Fields', 'Le prix Pulitzer de musique'],
    exp: 'Elle est la première femme noire de l’histoire à avoir reçu ce prix prestigieux.'
  },
  // 422: Toni Morrison roman
  {
    id: '422',
    q: 'Quel est le titre du célèbre roman de Toni Morrison racontant le fantôme d’un passé d’esclave ?',
    c: 'Beloved',
    d: ['Jane Eyre', 'Les Misérables', 'L’Étranger'],
    exp: 'Ce livre poignant a été adapté au cinéma avec Oprah Winfrey dans le rôle principal.'
  },
  // 423: Maya Angelou
  {
    id: '423',
    q: 'À la cérémonie de quel président américain Maya Angelou a-t-elle lu un poème en 1993 ?',
    c: 'Bill Clinton',
    d: ['Barack Obama', 'George Bush', 'Ronald Reagan'],
    exp: 'Son poème « On the Pulse of Morning » a ému des millions de téléspectateurs à travers le monde.'
  },
  // 424: Katherine Johnson
  {
    id: '424',
    q: 'Quelle agence spatiale Katherine Johnson aidait-elle en calculant les trajectoires des fusées ?',
    c: 'La NASA',
    d: ['L’Agence spatiale européenne', 'Roscosmos', 'L’Unesco'],
    exp: 'Ses calculs étaient tellement précis que les astronautes refusaient de décoller sans sa vérification.'
  },
  // 425: John Glenn
  {
    id: '425',
    q: 'Quel astronaute a exigé que Katherine Johnson vérifie lui-même ses calculs avant d’aller dans l’espace ?',
    c: 'John Glenn',
    d: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarine'],
    exp: 'Il a dit : « Si elle dit que les chiffres sont bons, alors je suis prêt à partir ! »'
  },
  // 426: Dorothy Vaughan
  {
    id: '426',
    q: 'Quel langage informatique pour ordinateurs Dorothy Vaughan a-t-elle appris pour former ses collègues ?',
    c: 'Le Fortran',
    d: ['Le Python', 'Le Java', 'Le Basic'],
    exp: 'Elle a dirigé la première équipe d’informaticiennes noires à la NASA.'
  },
  // 427: Mary Jackson
  {
    id: '427',
    q: 'Quel diplôme Mary Jackson a-t-elle été la première femme noire à obtenir pour devenir ingénieure à la NASA ?',
    c: 'Ingénieure en aérospatiale',
    d: ['Doctorat en médecine', 'Diplôme de pilote', 'Licence de chimie'],
    exp: 'Elle a dû obtenir une autorisation spéciale pour assister aux cours du soir dans une école pour Blancs.'
  },
  // 428: Mae Jemison
  {
    id: '428',
    q: 'Dans quel engin spatial Mae Jemison a-t-elle voyagé pour devenir la première femme noire dans l’espace ?',
    c: 'La navette Endeavour',
    d: ['La capsule Apollo 11', 'La fusée Ariane 5', 'La station Mir'],
    exp: 'En 1992, elle a tourné 127 fois autour de la Terre en menant des expériences médicales.'
  },
  // 429: Guion Bluford
  {
    id: '429',
    q: 'En quelle année Guion Bluford est-il devenu le premier Noir américain à voler dans l’espace ?',
    c: 'En 1983',
    d: ['En 1969', 'En 1995', 'En 2001'],
    exp: 'Il a volé à bord de la navette Challenger et a participé à 4 missions spatiales complètes.'
  },
  // 430: George Washington Carver
  {
    id: '430',
    q: 'Avec quelle plante George Washington Carver a-t-il fabriqué plus de 300 produits utiles comme du savon et de l’encre ?',
    c: 'L’arachide (la cacahuète)',
    d: ['La tomate', 'La pomme de terre', 'Le maïs'],
    exp: 'Ce grand savant a aidé les fermiers pauvres à enrichir leurs sols grâce à la rotation des cultures.'
  },
  // 431: Garrett Morgan
  {
    id: '431',
    q: 'Quel objet de sécurité sur la route avec trois lumières différentes Garrett Morgan a-t-il fait breveter en 1923 ?',
    c: 'Le feu de signalisation (feu tricolore)',
    d: ['Le radar de vitesse', 'La ceinture de sécurité', 'Le passage piéton'],
    exp: 'Il a aussi inventé un masque de protection respiratoire qui a sauvé des pompiers dans des tunnels.'
  },
  // 432: Charles Drew
  {
    id: '432',
    q: 'Quelle invention médicale vitale pour sauver les blessés le docteur Charles Drew a-t-il mise au point ?',
    c: 'La banque de sang moderne',
    d: ['Le vaccin contre la grippe', 'Le plâtre pour os cassé', 'Le thermomètre digital'],
    exp: 'Il a découvert comment conserver le plasma sanguin pour soigner les soldats pendant la guerre.'
  },
  // 433: Daniel Hale Williams
  {
    id: '433',
    q: 'Sur quel organe vital le docteur Daniel Hale Williams a-t-il réussi une opération pionnière en 1893 ?',
    c: 'Le cœur',
    d: ['Le cerveau', 'Le foie', 'Le poumon'],
    exp: 'Il a opéré avec succès un homme blessé d’un coup de couteau dans la poitrine sans antibiotiques modernes.'
  },
  // 434: Patricia Bath
  {
    id: '434',
    q: 'Quel organe du corps humain le docteur Patricia Bath soignait-elle avec son invention au laser ?',
    c: 'Les yeux (la cataracte)',
    d: ['Les dents', 'Les oreilles', 'La peau'],
    exp: 'Elle a redonné la vue à des personnes aveugles depuis plus de trente ans grâce à sa sonde laser.'
  },
  // 435: Lonnie Johnson
  {
    id: '435',
    q: 'Quel jouet à eau très puissant vendu à des millions d’exemplaires Lonnie Johnson a-t-il inventé ?',
    c: 'Le pistolet à eau Super Soaker',
    d: ['Le pistolet Nerf', 'La toupie Beyblade', 'La pâte à modeler'],
    exp: 'Ingénieur pour la NASA, il a créé ce jouet génial en testant un nouveau système de pompe à air.'
  },
  // 436: Mark Dean
  {
    id: '436',
    q: 'Pour quelle grande marque d’ordinateurs l’ingénieur noir Mark Dean a-t-il co-inventé le premier PC couleur ?',
    c: 'IBM',
    d: ['Apple', 'Microsoft', 'Dell'],
    exp: 'Il détient trois des neuf brevets originaux qui ont permis la création de l’ordinateur personnel.'
  },
  // 437: Sidney Poitier Oscar
  {
    id: '437',
    q: 'En quelle année Sidney Poitier est-il devenu le premier acteur noir à remporter l’Oscar du meilleur rôle ?',
    c: 'En 1964',
    d: ['En 1945', 'En 1978', 'En 1990'],
    exp: 'Il a gagné pour son rôle émouvant d’ouvrier aidant des religieuses dans Le Lys des champs.'
  },
  // 438: Denzel Washington
  {
    id: '438',
    q: 'Dans quel film sur des soldats noirs de la guerre de Sécession Denzel Washington a-t-il gagné son premier Oscar ?',
    c: 'Glory',
    d: ['Training Day', 'Malcolm X', 'Philadelphia'],
    exp: 'Il jouait un soldat fier et courageux dans le fameux 54e régiment du Massachusetts.'
  },
  // 439: Halle Berry
  {
    id: '439',
    q: 'Quelle distinction historique Halle Berry a-t-elle obtenue au cinéma en 2002 ?',
    c: 'Première femme noire Oscar de la meilleure actrice',
    d: ['Première femme présidente du festival de Cannes', 'Première réalisatrice récompensée', 'Premier rôle dans un dessin animé'],
    exp: 'En larmes sur scène, elle a dédié son prix à toutes les actrices noires qui se sont battues avant elle.'
  },
  // 440: Spike Lee
  {
    id: '440',
    q: 'Quel film célèbre sur une journée d’été explosive à Brooklyn Spike Lee a-t-il réalisé en 1989 ?',
    c: 'Do the Right Thing',
    d: ['BlacKkKlansman', 'Jungle Fever', 'Inside Man'],
    exp: 'Ce réalisateur new-yorkais porte toujours des casquettes et des lunettes très colorées.'
  },
  // 441: Chadwick Boseman
  {
    id: '441',
    q: 'Quel roi super-héros du royaume africain imaginaire du Wakanda Chadwick Boseman a-t-il incarné ?',
    c: 'Black Panther',
    d: ['Iron Man', 'Falcon', 'Spider-Man'],
    exp: 'Son cri « Wakanda Forever » bras croisés sur le torse est devenu un symbole de fierté mondiale.'
  },
  // 442: Harry Belafonte
  {
    id: '442',
    q: 'Quelle chanson joyeuse sur les dockers qui chargent des bananes Harry Belafonte chantait-il ?',
    c: 'Day-O (The Banana Boat Song)',
    d: ['No Woman No Cry', 'Guantanamera', 'Stand by Me'],
    exp: 'Ami intime de Martin Luther King, il a utilisé tout son argent pour financer les marches des droits civiques.'
  },
  // 443: Paul Robeson
  {
    id: '443',
    q: 'Quelle célèbre chanson sur un fleuve immense Paul Robeson chantait-il avec sa voix très grave ?',
    c: 'Ol’ Man River',
    d: ['Summertime', 'Georgia on My Mind', 'My Way'],
    exp: 'Ce grand chanteur et athlète a bravé toutes les menaces pour chanter pour les ouvriers et la paix.'
  },
  // 444: Nina Simone
  {
    id: '444',
    q: 'De quel instrument classique Nina Simone était-elle une joueuse virtuose depuis son enfance ?',
    c: 'Le piano',
    d: ['Le violon', 'La trompette', 'La flûte'],
    exp: 'Elle rêvait d’être la première concertiste classique noire en Amérique avant de chanter le jazz et la soul.'
  },
  // 445: Jean-Michel Basquiat
  {
    id: '445',
    q: 'Quel symbole royal doré Jean-Michel Basquiat peignait-il souvent sur la tête de ses héros noirs ?',
    c: 'Une couronne',
    d: ['Une étoile', 'Un chapeau', 'Une auréole'],
    exp: 'Ce peintre de New York aux origines haïtiennes a révolutionné l’art moderne dans les années 1980.'
  },
  // 446: Gordon Parks
  {
    id: '446',
    q: 'Quel outil artistique Gordon Parks appelait-il « son arme contre la pauvreté et le racisme » ?',
    c: 'Son appareil photo',
    d: ['Son pinceau', 'Sa guitare', 'Son micro'],
    exp: 'Premier photographe noir du grand magazine Life, il a montré la vie et la dignité des quartiers pauvres.'
  },
  // 447: Bessie Coleman
  {
    id: '447',
    q: 'Dans quel pays d’Europe Bessie Coleman est-elle allée passer son brevet de pilote d’avion en 1921 ?',
    c: 'En France',
    d: ['En Espagne', 'En Angleterre', 'En Italie'],
    exp: 'Comme aucune école aux États-Unis ne voulait d’une femme noire, elle a appris le français pour venir voler en France.'
  },
  // 448: Tuskegee Airmen
  {
    id: '448',
    q: 'De quelle couleur était peinte la queue des avions de chasse des célèbres pilotes noirs de la Seconde Guerre mondiale ?',
    c: 'En rouge vif (les Red Tails)',
    d: ['En jaune', 'En vert', 'En bleu ciel'],
    exp: 'Les bombardiers américains demandaient toujours la protection de cette escadrille noire car ils ne perdaient aucun avion.'
  },
  // 449: Benjamin O. Davis Jr.
  {
    id: '449',
    q: 'Dans quel corps de l’armée américaine Benjamin O. Davis Jr. a-t-il été le premier général noir ?',
    c: 'L’armée de l’air (US Air Force)',
    d: ['La marine (US Navy)', 'La cavalerie', 'Les garde-côtes'],
    exp: 'Pendant ses 4 ans d’études à West Point, les autres élèves blancs ne lui avaient jamais adressé la parole.'
  },
  // 450: Colin Powell
  {
    id: '450',
    q: 'De quelle île des Caraïbes les parents du général Colin Powell avaient-ils émigré ?',
    c: 'La Jamaïque',
    d: ['La Barbade', 'Haïti', 'Trinité-et-Tobago'],
    exp: 'Né à Harlem, il est devenu le chef de toutes les armées américaines puis ministre des Affaires étrangères.'
  },
  // 451: Condoleezza Rice
  {
    id: '451',
    q: 'En dehors de la politique, dans quel instrument de musique Condoleezza Rice excelle-t-elle ?',
    c: 'Le piano classique',
    d: ['La batterie', 'Le saxophone', 'La harpe'],
    exp: 'Elle a été la première femme noire à diriger la diplomatie des États-Unis en tant que secrétaire d’État.'
  },
  // 452: Thurgood Marshall
  {
    id: '452',
    q: 'Dans quelle plus haute institution judiciaire des États-Unis Thurgood Marshall a-t-il siégé comme juge ?',
    c: 'La Cour suprême',
    d: ['Le Tribunal international', 'La Cour martiale', 'Le Sénat'],
    exp: 'Avocat infatigable, il avait gagné le grand procès Brown interdisant la séparation des Noirs et Blancs à l’école.'
  },
  // 453: Ketanji Brown Jackson
  {
    id: '453',
    q: 'En quelle année Ketanji Brown Jackson est-elle devenue la première femme noire juge à la Cour suprême des États-Unis ?',
    c: 'En 2022',
    d: ['En 2008', 'En 2015', 'En 1999'],
    exp: 'Elle a été nommée par le président Joe Biden pour siéger à vie dans la plus haute cour du pays.'
  },
  // 454: Kamala Harris
  {
    id: '454',
    q: 'Quel poste présidentiel Kamala Harris a-t-elle été la première femme à occuper aux États-Unis en 2021 ?',
    c: 'Vice-présidente des États-Unis',
    d: ['Secrétaire générale de l’ONU', 'Gouverneure de Floride', 'Présidente du Sénat mondial'],
    exp: 'Elle a prêté serment le 20 janvier 2021 aux côtés de Joe Biden.'
  },
  // 455: Shirley Chisholm
  {
    id: '455',
    q: 'Quel était le slogan de campagne de Shirley Chisholm, première femme noire candidate à la Maison-Blanche en 1972 ?',
    c: 'Unbought and Unbossed (Inachetée et libre)',
    d: ['Yes We Can', 'America First', 'Make It Happen'],
    exp: 'Elle refusait l’argent des grands lobbies pour défendre les pauvres, les femmes et les minorités.'
  },
  // 456: John Lewis
  {
    id: '456',
    q: 'Sur quel pont de la ville de Selma John Lewis a-t-il été blessé lors du dimanche sanglant de 1965 ?',
    c: 'Le pont Edmund Pettus',
    d: ['Le pont de Brooklyn', 'Le Golden Gate', 'Le pont de Londres'],
    exp: 'Il appelait les jeunes à faire du « bon trouble nécessaire » pour changer les lois injustes.'
  },
  // 457: Ralph Bunche
  {
    id: '457',
    q: 'Pour quel organisme international Ralph Bunche a-t-il obtenu le prix Nobel de la paix en 1950 ?',
    c: 'L’ONU (Nations unies)',
    d: ['La Croix-Rouge', 'L’Unicef', 'L’Unesco'],
    exp: 'Il a réussi à négocier la paix au Moyen-Orient entre Israéliens et pays arabes.'
  },
  // 458: Thomas Sankara nom
  {
    id: '458',
    q: 'Que signifie le nom Burkina Faso donné au pays par Thomas Sankara en 1984 ?',
    c: 'Le pays des hommes intègres',
    d: ['Le pays du fleuve d’or', 'Le soleil du matin', 'La terre des braves'],
    exp: 'Il a changé le nom colonial de Haute-Volta pour redonner la fierté à son peuple.'
  },
  // 459: Thomas Sankara action
  {
    id: '459',
    q: 'Dans quelle voiture modeste Thomas Sankara obligeait-il tous ses ministres à rouler au lieu de voitures de luxe ?',
    c: 'La Renault 5',
    d: ['La Mercedes', 'La Rolls-Royce', 'La BMW'],
    exp: 'Il voulait que les dirigeants de l’État vivent simplement, comme la population de son pays.'
  },
  // 460: Patrice Lumumba
  {
    id: '460',
    q: 'Quel était le métier de Patrice Lumumba dans l’administration de la poste avant de diriger le Congo ?',
    c: 'Employé des postes',
    d: ['Mécanicien de train', 'Chauffeur de taxi', 'Garde forestier'],
    exp: 'Il est devenu le premier Premier ministre du Congo indépendant le 30 juin 1960 avec un discours retentissant.'
  },
  // 461: Kwame Nkrumah
  {
    id: '461',
    q: 'De quel premier pays d’Afrique noire devenu indépendant en 1957 Kwame Nkrumah était-il le président ?',
    c: 'Le Ghana',
    d: ['Le Kenya', 'Le Cameroun', 'La Côte d’Ivoire'],
    exp: 'Il a affirmé que l’indépendance du Ghana n’avait aucun sens si toute l’Afrique n’était pas libre.'
  },
  // 462: Amílcar Cabral
  {
    id: '462',
    q: 'Pour l’indépendance de quels territoires Amílcar Cabral s’est-il battu contre le colonisateur portugais ?',
    c: 'La Guinée-Bissau et le Cap-Vert',
    d: ['L’Angola et le Mozambique', 'Madagascar et les Comores', 'Le Togo et le Bénin'],
    exp: 'Ingénieur agronome de formation, il a enseigné aux paysans comment cultiver et libérer leur terre.'
  },
  // 463: Samora Machel
  {
    id: '463',
    q: 'De quel pays d’Afrique australe Samora Machel est-il devenu le premier président en 1975 ?',
    c: 'Le Mozambique',
    d: ['La Namibie', 'La Zambie', 'Le Zimbabwe'],
    exp: 'Sa devise célèbre était « A luta continua » (La lutte continue).'
  },
  // 464: Steve Biko
  {
    id: '464',
    q: 'Quel mouvement incitant les Noirs sud-africains à être fiers de leur couleur Steve Biko a-t-il dirigé ?',
    c: 'La Conscience noire (Black Consciousness)',
    d: ['L’ANC', 'Les Black Panthers', 'La Marche verte'],
    exp: 'Il disait : « L’arme la plus puissante dans les mains de l’oppresseur est l’esprit de l’opprimé. »'
  },
  // 465: Bob Marley Nine Mile
  {
    id: '465',
    q: 'Dans quel petit village des collines de Jamaïque Bob Marley est-il né en 1945 ?',
    c: 'Nine Mile',
    d: ['Trenchtown', 'Montego Bay', 'Portmore'],
    exp: 'C’est là aussi qu’il repose aujourd’hui dans un mausolée visité par des milliers d’admirateurs.'
  },
  // 466: Peter Tosh
  {
    id: '466',
    q: 'Quel instrument en forme de fusil Peter Tosh a-t-il fait fabriquer sur mesure pour ses concerts ?',
    c: 'Une guitare électrique',
    d: ['Un saxophone', 'Une trompette', 'Un violoncelle'],
    exp: 'Ce compagnon de route de Bob Marley était un maître des arts martiaux et un militant intrépide.'
  },
  // 467: Bunny Wailer
  {
    id: '467',
    q: 'Combien de Grammy Awards Bunny Wailer a-t-il remportés pour ses albums de reggae solo ?',
    c: '3 Grammy Awards',
    d: ['10 Grammy Awards', '0 Grammy Award', '15 Grammy Awards'],
    exp: 'Il était le dernier membre vivant du trio originel des Wailers avec Bob Marley et Peter Tosh.'
  },
  // 468: Jimmy Cliff
  {
    id: '468',
    q: 'Dans quel premier grand film sur la musique jamaïcaine Jimmy Cliff a-t-il tenu le rôle principal en 1972 ?',
    c: 'The Harder They Come',
    d: ['Cool Runnings', 'Roots', 'One Love'],
    exp: 'La bande originale de ce film a fait exploser la musique reggae dans le monde entier.'
  },
  // 469: Lee Scratch Perry
  {
    id: '469',
    q: 'Quel était le nom du légendaire studio d’enregistrement de Lee « Scratch » Perry à Kingston ?',
    c: 'The Black Ark (L’Arche noire)',
    d: ['Abbey Road', 'Motown Studios', 'Sun Studio'],
    exp: 'Il y produisait des échos magiques en soufflant de la fumée sur les bandes magnétiques.'
  },
  // 470: DJ Kool Herc
  {
    id: '470',
    q: 'Dans quel quartier de New York DJ Kool Herc a-t-il inventé le breakbeat lors d’une fête en août 1973 ?',
    c: 'Le Bronx',
    d: ['Manhattan', 'Queens', 'Staten Island'],
    exp: 'En enchaînant la partie instrumentale de deux mêmes disques, il a donné naissance à la culture hip-hop.'
  },
  // 471: Grandmaster Flash
  {
    id: '471',
    q: 'Quelle technique consistant à faire tourner un disque vinyle d’avant en arrière avec la main a-t-il popularisée ?',
    c: 'Le scratching',
    d: ['Le karaoké', 'Le play-back', 'Le sample vocal'],
    exp: 'Avec son groupe The Furious Five, il a sorti le célèbre morceau The Message en 1982.'
  },
  // 472: Afrika Bambaataa
  {
    id: '472',
    q: 'Quelle organisation pour remplacer la violence des gangs par la danse et le rap a-t-il fondée dans le Bronx ?',
    c: 'La Universal Zulu Nation',
    d: ['Les Black Panthers', 'Les Boy Scouts', 'L’Armée du salut'],
    exp: 'Sa devise universelle est : « Paix, Unité, Amour et S’amuser ensemble ».'
  },
  // 473: Tupac Shakur
  {
    id: '473',
    q: 'À quel groupe militant appartenait Afeni Shakur, la mère du rappeur Tupac Shakur ?',
    c: 'Les Black Panthers',
    d: ['Les Quakers', 'Les Suffragettes', 'Les Casques bleus'],
    exp: 'Tupac lui a rendu un vibrant hommage d’amour dans sa célèbre chanson Dear Mama.'
  },
  // 474: Notorious B.I.G.
  {
    id: '474',
    q: 'De quel quartier de Brooklyn à New York venait le rappeur géant The Notorious B.I.G. ?',
    c: 'Bedford-Stuyvesant (Bed-Stuy)',
    d: ['Harlem', 'Chinatown', 'Little Italy'],
    exp: 'Surnommé Biggie Smalls, son premier album s’intitulait Ready to Die.'
  },
  // 475: Lauryn Hill
  {
    id: '475',
    q: 'Quel groupe de musique composé de trois artistes de talent a révélé Lauryn Hill dans les années 1990 ?',
    c: 'The Fugees',
    d: ['TLC', 'Destiny’s Child', 'The Supremes'],
    exp: 'Avec Wyclef Jean et Pras Michel, ils ont connu un succès mondial avec Killing Me Softly.'
  },
  // 476: Lauryn Hill Grammy
  {
    id: '476',
    q: 'Combien de Grammy Awards son album solo The Miseducation of Lauryn Hill a-t-il remportés en 1999 ?',
    c: '5 Grammy Awards en une nuit',
    d: ['1 seul Grammy Award', '20 Grammy Awards', '0 Grammy Award'],
    exp: 'Elle a été la toute première femme à remporter cinq trophées lors d’une seule soirée.'
  },
  // 477: Queen Latifah
  {
    id: '477',
    q: 'Que réclamait la rappeuse Queen Latifah pour les femmes dans son titre à succès U.N.I.T.Y. en 1993 ?',
    c: 'Le respect total',
    d: ['Des bijoux en or', 'Des voitures rapides', 'Des vacances gratuites'],
    exp: 'Elle s’est dressée contre les insultes faites aux femmes dans le rap avant de devenir une grande actrice de cinéma.'
  },
  // 478: Missy Elliott
  {
    id: '478',
    q: 'Quel clip musical révolutionnaire avec un costume gonflable en sac poubelle noir a fait décoller Missy Elliott ?',
    c: 'The Rain (Supa Dupa Fly)',
    d: ['Get Ur Freak On', 'Work It', 'Lose Control'],
    exp: 'Elle a été la première femme rappeuse à entrer au panthéon des grands auteurs-compositeurs (Songwriters Hall of Fame).'
  },
  // 479: MC Solaar
  {
    id: '479',
    q: 'En quelle langue MC Solaar a-t-il été le premier artiste à faire triompher le rap avec des textes poétiques ?',
    c: 'En français',
    d: ['En anglais', 'En espagnol', 'En allemand'],
    exp: 'Né au Sénégal de parents tchadiens et élevé en France, son tube Bouge de là a marqué l’histoire de la musique.'
  },
  // 480: Kery James
  {
    id: '480',
    q: 'De quel département de la banlieue parisienne vient le rappeur engagé Kery James ?',
    c: 'Le Val-de-Marne (Orly)',
    d: ['La Seine-Maritime', 'Le Finistère', 'Les Alpes-Maritimes'],
    exp: 'Né en Guadeloupe de parents haïtiens, il organise des concours d’éloquence et finance des bourses d’études.'
  },
  // 481: Stromae
  {
    id: '481',
    q: 'De quels deux pays viennent les racines familiales de l’artiste Stromae ?',
    c: 'La Belgique et le Rwanda',
    d: ['La France et le Mali', 'La Suisse et le Congo', 'Le Canada et le Sénégal'],
    exp: 'Son père rwandais a disparu pendant le génocide de 1994, à qui il a dédié la chanson poignante Papaoutai.'
  },
  // 482: Maitre Gims
  {
    id: '482',
    q: 'Dans quelle immense enceinte de concert de 80 000 places Gims a-t-il été le premier rappeur solo à chanter en 2019 ?',
    c: 'Le Stade de France',
    d: ['Le Madison Square Garden', 'L’Olympia', 'Wembley'],
    exp: 'Né à Kinshasa en RD Congo, il est venu en France enfant et a conquis des millions d’auditeurs.'
  },
  // 483: Angélique Kidjo
  {
    id: '483',
    q: 'De quel pays d’Afrique de l’Ouest la chanteuse Angélique Kidjo aux 5 Grammy Awards est-elle originaire ?',
    c: 'Le Bénin',
    d: ['Le Ghana', 'Le Sénégal', 'Le Togo'],
    exp: 'Elle chante en plusieurs langues et défend sans relâche l’éducation des jeunes filles en Afrique.'
  },
  // 484: Youssou N’Dour
  {
    id: '484',
    q: 'Avec quelle chanteuse suédoise Youssou N’Dour a-t-il chanté le tube mondial 7 Seconds en 1994 ?',
    c: 'Neneh Cherry',
    d: ['Céline Dion', 'Madonna', 'Björk'],
    exp: 'Cette chanson chantée en wolof, français et anglais a été numéro un des ventes dans de nombreux pays.'
  },
  // 485: Salif Keïta
  {
    id: '485',
    q: 'Quel surnom donne-t-on au chanteur malien Salif Keïta en hommage à son timbre exceptionnel ?',
    c: 'La voix d’or de l’Afrique',
    d: ['Le rossignol du désert', 'Le prince du blues', 'Le tambour royal'],
    exp: 'Descendant de Sundiata Keïta, il s’est battu contre les préjugés liés à son albinisme.'
  },
  // 486: Manu Dibango
  {
    id: '486',
    q: 'Quel morceau de saxophone de Manu Dibango sorti en 1972 a été repris par Michael Jackson dans Wanna Be Startin’ Somethin’ ?',
    c: 'Soul Makossa',
    d: ['Wakafrika', 'Big Blow', 'Pata Pata'],
    exp: 'Le refrain « Mama-ko, mama-sa, maka-mako-sa » est devenu célèbre sur toute la planète.'
  },
  // 487: Hugh Masekela
  {
    id: '487',
    q: 'De quel instrument à vent le grand musicien sud-africain Hugh Masekela jouait-il contre l’apartheid ?',
    c: 'La trompette (ou le bugle)',
    d: ['La clarinette', 'L’accordéon', 'Le violon'],
    exp: 'Louis Armstrong lui avait envoyé une de ses trompettes en cadeau lorsqu’il était jeune adolescent.'
  },
  // 488: Oprah Winfrey
  {
    id: '488',
    q: 'Quel métier a permis à Oprah Winfrey de devenir la première femme noire milliardaire de l’histoire ?',
    c: 'Animatrice de talk-show et productrice',
    d: ['Banquière à Wall Street', 'Pilote de ligne', 'Chirurgienne'],
    exp: 'The Oprah Winfrey Show a été regardé par des dizaines de millions de téléspectateurs chaque jour pendant 25 ans.'
  },
  // 489: Madam C.J. Walker
  {
    id: '489',
    q: 'Quels produits Madam C.J. Walker a-t-elle créés pour devenir la première femme millionnaire autodidacte aux États-Unis ?',
    c: 'Des produits de soins pour cheveux noirs',
    d: ['Des chaussures de sport', 'Des voitures électriques', 'Des gâteaux en boîte'],
    exp: 'Fille d’anciens esclaves, elle a formé des milliers de femmes noires à devenir indépendantes financièrement.'
  },
  // 490: Robert F. Smith
  {
    id: '490',
    q: 'Quel cadeau incroyable le milliardaire Robert F. Smith a-t-il fait aux 400 étudiants diplômés de Morehouse College en 2019 ?',
    c: 'Il a payé toutes leurs dettes d’études',
    d: ['Une voiture neuve pour chacun', 'Un voyage autour du monde', 'Un ordinateur portable doré'],
    exp: 'Ce geste généreux d’une valeur de 34 millions de dollars a libéré tous ces jeunes diplômés de leurs emprunts.'
  },
  // 491: Arthur Ashe
  {
    id: '491',
    q: 'Quel grand tournoi de tennis sur gazon Arthur Ashe a-t-il été le premier Noir à remporter en 1975 ?',
    c: 'Wimbledon',
    d: ['Roland-Garros', 'L’Open d’Australie', 'Le tournoi de Rome'],
    exp: 'Le court central de l’US Open à New York, le plus grand stade de tennis de la planète, porte aujourd’hui son nom.'
  },
  // 492: Althea Gibson
  {
    id: '492',
    q: 'Sur quelle terre battue de Paris Althea Gibson a-t-elle été la première personne noire à gagner un Grand Chelem en 1956 ?',
    c: 'À Roland-Garros',
    d: ['À Bercy', 'Au Parc des Princes', 'Au stade de France'],
    exp: 'Elle a ensuite conquis Wimbledon et les États-Unis en brisant la barrière de la ségrégation dans le tennis.'
  },
  // 493: Wilma Rudolph
  {
    id: '493',
    q: 'De quelle maladie grave infantile Wilma Rudolph avait-elle guéri avant de gagner 3 médailles d’or aux JO de 1960 ?',
    c: 'La polio (paralysie d’une jambe)',
    d: ['L’asthme aigu', 'La rougeole', 'La fièvre jaune'],
    exp: 'Les médecins disaient qu’elle ne marcherait jamais ; elle est devenue la femme la plus rapide de la Terre.'
  },
  // 494: Carl Lewis
  {
    id: '494',
    q: 'Combien de médailles d’or olympiques Carl Lewis a-t-il remportées au total en sprint et en saut en longueur ?',
    c: '9 médailles d’or',
    d: ['3 médailles d’or', '15 médailles d’or', '5 médailles d’or'],
    exp: 'Aux JO de Los Angeles en 1984, il a égalé l’exploit légendaire de Jesse Owens en remportant 4 titres.'
  },
  // 495: Tommie Smith et John Carlos
  {
    id: '495',
    q: 'Que portaient Tommie Smith et John Carlos à leurs mains levées sur le podium des JO de Mexico en 1968 ?',
    c: 'Un gant noir',
    d: ['Un drapeau américain', 'Une montre en or', 'Une fleur rouge'],
    exp: 'Ce geste silencieux tête baissée était un cri mondial contre la pauvreté et l’oppression des Noirs.'
  },
  // 496: Colin Kaepernick
  {
    id: '496',
    q: 'Quel geste Colin Kaepernick faisait-il pendant l’hymne américain pour protester contre les violences policières ?',
    c: 'Il posait un genou à terre',
    d: ['Il tournait le dos', 'Il levait le bras droit', 'Il fermait les yeux en marchant'],
    exp: 'Son geste courageux est devenu un symbole mondial adopté par les sportifs et les manifestants de tous pays.'
  },
  // 497: Marcus Rashford
  {
    id: '497',
    q: 'Pour quelle cause essentielle le footballeur anglais Marcus Rashford a-t-il forcé son gouvernement à agir ?',
    c: 'Des repas gratuits pour les enfants pauvres',
    d: ['La baisse du prix des billets de stade', 'La création de parcs de jeux', 'L’achat de crampons pour tous'],
    exp: 'Ayant lui-même manqué de nourriture enfant, il a permis à plus d’un million d’enfants défavorisés de manger dignement.'
  },
  // 498: Bukayo Saka
  {
    id: '498',
    q: 'Dans quel grand club de football de Londres Bukayo Saka joue-t-il comme attaquant vedette ?',
    c: 'Arsenal',
    d: ['Chelsea', 'Tottenham', 'West Ham'],
    exp: 'Né à Londres de parents nigérians, il est un modèle de travail et d’humilité pour la jeunesse.'
  },
  // 499: Didier Drogba paix
  {
    id: '499',
    q: 'Qu’a demandé Didier Drogba à genoux devant les caméras de télévision en 2005 pour son pays la Côte d’Ivoire ?',
    c: 'D’arrêter la guerre civile et de faire la paix',
    d: ['De reconstruire le stade', 'De baisser les impôts', 'D’organiser la Coupe du monde'],
    exp: 'Son appel solennel avec ses coéquipiers qualifiés pour le Mondial a poussé les belligérants à déposer les armes.'
  },
  // 500: George Weah
  {
    id: '500',
    q: 'De quel pays d’Afrique de l’Ouest George Weah, unique Ballon d’or africain de l’histoire, est-il devenu président ?',
    c: 'Le Liberia',
    d: ['Le Sénégal', 'La Sierra Leone', 'La Côte d’Ivoire'],
    exp: 'Après sa carrière brillante au PSG et à l’AC Milan, il a été élu président de sa patrie en 2017.'
  },
  // 501: Samuel Eto’o
  {
    id: '501',
    q: 'Avec quel club italien Samuel Eto’o a-t-il réalisé un triplé historique Championnat-Coupe-Ligue des champions en 2010 ?',
    c: 'L’Inter Milan',
    d: ['L’AC Milan', 'La Juventus', 'L’AS Rome'],
    exp: 'Il est le seul joueur au monde à avoir gagné ce triplé deux années d’affilée avec deux clubs différents (Barcelone puis Inter).'
  },
  // 502: Sadio Mané
  {
    id: '502',
    q: 'Qu’a fait construire le footballeur Sadio Mané dans son village natal de Bambali au Sénégal ?',
    c: 'Un hôpital moderne et un lycée',
    d: ['Un aéroport international', 'Un centre commercial géant', 'Un circuit automobile'],
    exp: 'Il a aussi installé une antenne 4G, un bureau de poste et offre une bourse mensuelle aux familles modestes.'
  },
  // 503: Aliko Dangote
  {
    id: '503',
    q: 'Quel produit de construction essentiel fabriqué dans ses usines a fait la fortune d’Aliko Dangote ?',
    c: 'Le ciment',
    d: ['Le verre', 'Le carrelage', 'L’aluminium'],
    exp: 'Cet entrepreneur nigérian a bâti le plus grand groupe industriel d’Afrique et une raffinerie de pétrole géante.'
  },
  // 504: Wangari Maathai
  {
    id: '504',
    q: 'Que faisait planter le Mouvement de la ceinture verte de Wangari Maathai pour sauver la terre au Kenya ?',
    c: 'Des millions d’arbres',
    d: ['Des vignes de raisin', 'Des rosiers', 'Du maïs transgénique'],
    exp: 'Elle est devenue la première femme africaine à recevoir le prix Nobel de la paix en 2004.'
  },
  // 505: Desmond Tutu
  {
    id: '505',
    q: 'Quelle commission de réconciliation et de pardon l’archevêque Desmond Tutu a-t-il présidée après l’apartheid ?',
    c: 'La Commission Vérité et Réconciliation',
    d: ['La Cour internationale de justice', 'Le Conseil de sécurité', 'Le Haut-Commissariat aux réfugiés'],
    exp: 'Surnommé « l’archevêque de la paix », il a appris au monde la force du pardon et la notion de l’Ubuntu.'
  }
];

const items: QTuple[] = [];

for (const t of rawList) {
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

writePartFile('diasporaPart5.ts', 'DIASPORA_PART_5', items);

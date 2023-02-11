// const ethnie = {
//     eth0 : ["Umélorien","ddjjjjjjjff" ],
//     eth1 : ["Cassars","hhhhhhhhhhhhhhhhh" ],
//     eth2 : ["Khalers", "eeeeeeeeeeeeeeee"]
// };
// document.getElementById("ethnie").innerHTML = indexEthnieSelected[0];
// document.getElementById("test").innerHTML = indexEthnieSelected[1];

const valideBtnDestin = document.getElementById("valide_destin");
const valideBtnContree = document.getElementById("valide_contree");
const valideBtnSocial = document.getElementById("valide_social");
const valideBtnLieu = document.getElementById("valide_lieu");
const valideBtnmetier = document.getElementById("valide_metier");
const valideBtnreligion = document.getElementById("valide_religion");
const valideBtnOrigineVp = document.getElementById("valide_origine_vp");


//=====================================================================

const ethnie = {
    eth0 : ["Umélorien", "De taille et corpulence moyenne, la peau blanche, les uméloriens sont une population civilisée, vivant dans de grandes cités, militairement forte où églises et cathédrales accueillent la parole d'Arlam."],
    eth1 : ["Cassar","Cousins des uméloriens, les cassars sont des barbares de grandes tailles, souvent robustes et musclés. Ils vivent plutôt en grandes tribus de l'élevage et de la chasse."],
    eth2 : ["Khaler","Peuple trés policé, les khalers ont la peau mat et les yeux noirs. Ils vivents sous le soleil brûlant des zones désertiques et sont organisés en grands émirats au sein de belle cités blanches où le commerce est roi."],
    eth3 : ["Soloman", "Peau légèrement mat et cheveux frisés, les solomans sont d'élégant gaillard portant fièrement la barbe, signe de sagesse. Ils vivent à cheval sur un vaste empire dont ils parcourent les terres agricoles qui s'étendent entre les villes fortifiés."],
    eth4 : ["Effarat", "Cousins des Khalers mais de plus grande taille, les effarats sont des nomades sillonnant le grand désert blanc avec leurs troupeaux. Malgré leur pauvreté, ils vous partageront toujours leur plus grande richesse : l'eau !"],
    eth5 : ["Djazar", "Peau noire, cheveux noirs et crépus, les Djazars sont de grands gaillards robustes et athlétiques vivant en tribu dans les savanes et les jungles situés au dela du désert blanc." ],
    eth6 : ["Stovenger", "Cheveleures longues, blondes ou rousses, grands et musclés, les stovengers sont des barbares du nord. Marin dans l'âme, ils vivent en clan, souvent de pillages et de raides sur les côtes voisines."],
    eth7 : ["Keshite", "Les keshites ont la peau jaunes et les yeux bridés. Plutôt de petites tailles, ils vivent loin à l'est au sein de royaumes fabuleux dont ils viennent commercer de suprenantes inventions."],
    eth8 : ["Shivalinga", "Plutôt petits, la peau mat foncée, ils vivent dans un vaste royaume fait de fleuves et de jungle, loin à l'est et pratique l'élevage et l'agriculture"],
    eth9 : ["Sang-mélée", "Humain/elfe ou humain/félis, les sangs mélés sont souvent mal perçu voir rejeté par la population." ],
    eth10 : ["Izganes", "Peau blanche ou lègèrement mat, les izganes sont un peuple nomade et déraciné, se déplaçant en caravane de villes en villages à travers le monde connu."],
    eth11 : ["Azayas", "Peuple d'au delà de la grande mer, les azayas ont la peau rouge. Civilisation avancée, ils ont batit d'immenses villes de pierres entre jungle et montagne qui regorgeraient d'or et de richesse incroyable."]
};

// fonction qui affiche l'ethnie du personnage dans le DOM aléatoirement
function afficherEthnie(){
    const randomIndexEthnie = Math.floor(Math.random() * 12);
    console.log("chiffre random : ", randomIndexEthnie)
    const indexEthnieSelected = Object.values(ethnie)[randomIndexEthnie];
    console.log(indexEthnieSelected);

    document.getElementById("origine").innerHTML = "Ton peuple d'origine est";
    // document.getElementById("ethnie").innerHTML = indexEthnieSelected;
    document.getElementById("ethnie").innerHTML = indexEthnieSelected[0];
    document.getElementById("description").innerHTML = indexEthnieSelected[1];
};

//Bouton ethnie
valideBtnDestin.addEventListener("click", () => { 
    afficherEthnie();
});

// contree ==================================================================================
const contree = {
    cont0 : "dans la principauté de Samarande.",
    cont1 : "au sein du Grand Duché d'Assidoine.",
    cont2 : "dans le royaume d'Anvard.",
    cont3 : "à travers le vaste empire Soloman.",
    cont4 : "dans l'un des emirats suivant : Kelim, Kahdar ou Orphane.",
    cont5 : "dans le Royaume d'Urtanve.",
    cont6 : "en Cassarie.",
    cont7 : "caché dans les Monts Ocres.",
    cont8 : "au milieu d'un immense désert de sable.",
    cont9 : "au milieu des steppes glacées.",
    cont10 : "en Aquilonie.",
    cont11 : "quelque part en Corinthie.",
    cont12 : "dans les fiords du Vanaheim.",
    cont13 : "sur L'île de Melniboné.",
    cont14 : "quelque part dans les jeunes royaumes.",
    cont15 : "au sein du Royaume de Shem.",
    cont16 : "sur le territoire de Koh.",
    cont17 : "sur les terres de Zamora.",
    cont18 : "le long des côtes de Khitaï.",
    cont19 : "dans la lointaine Cimérie.",
    cont20 : "dans les Terres glacées du Nord."
};

// fonction qui affiche la contree du personnage dans le DOM aléatoirement
function afficherContree(){
    const randomIndexContree = Math.floor(Math.random() * 21);
    console.log("chiffre random : ", randomIndexContree)
    const indexContreeSelected = Object.values(contree)[randomIndexContree];
    console.log(indexContreeSelected);

    document.getElementById("intro_contree").innerHTML = "Durant ta vie précédente, tu as principalement vécu";
    document.getElementById("contree").innerHTML = indexContreeSelected;
};

//Bouton contree
valideBtnContree.addEventListener("click", () => { 
    afficherContree();
})

// origine sociale ==============================================================
const social = {
    soc0 : "pauvre voir mendiant même ...",
    soc1 : "de paysan, d'éléveur ou de laboureur.",
    soc2 : "ecclésiastique !",
    soc3 : "de militaire : armée régulière de l'empire ou du roi !",
    soc4 : "de marchands avec pignon sur rue ou itinérant !",
    soc5 : "aisé de bon bourgeois.",
    soc6 : "de rang noble, habitué aux privilèges !",
    soc7 : "défavorisé d'ouvriers agricoles ou de batisseurs.",
    soc8 : "de criminels : assassins ou meutriers de masse !",
    soc9 : "de brigands : voleurs de grand chemins ou détrousseurs de quartier !",
    soc10 : "nomade ou de grand voyageur.",
    soc11 : "fait de privations : Tu a vécu en esclave jadis !",
    soc12 : "de fiers marins.",
};

// fonction qui affiche la contree du personnage dans le DOM aléatoirement
function afficherSocial(){
    const randomIndexSocial = Math.floor(Math.random() * 13);
    console.log("chiffre random : ", randomIndexSocial)
    const indexSocialSelected = Object.values(social)[randomIndexSocial];
    console.log(indexSocialSelected);

    document.getElementById("intro_social").innerHTML = "Tu es issu d'un milieu social";
    document.getElementById("social").innerHTML = indexSocialSelected;
};

//Bouton Social
valideBtnSocial.addEventListener("click", () => { 
    afficherSocial();
})

// lieu de vie ==============================================================
const lieu = {
    lieu0 : "au sein d'une cité importante.",
    lieu1 : "dans un bastion militaire.",
    lieu2 : "dans un jolie petit village de campagne !",
    lieu3 : "dans une cité religieuse",
    lieu4 : "à travers les steppes du nord.",
    lieu5 : "au milieu des dunes brûlantes du désert.",
    lieu6 : "une vie rude dans les montagnes !",
    lieu7 : "dans une cabane, cachée dans la forêt.",
    lieu8 : "dans un bourg de pêcheurs au bord de la mer !",
    lieu9 : "protégé dans un chateau !",
    lieu10 : "replié dans une fortesse !",
    lieu11 : "dans un bastion religieux.",
    lieu12 : "dans une ferme au milieu de la prairie.",
    lieu13 : "sur les routes du vaste monde.",
    lieu14 : "sur de nombreux navires à travers tous les océans connus.",
    lieu15 : "en hermite au fin fond d'une grotte !",
    lieu16 : "dans un taudis d'ivrognes et de creuvards.",
    lieu17 : "dans une belle maison bourgeoise !",
    lieu18 : "dans un temple à la doctrine stricte.",
    lieu19 : "au sein de tribus nomades.",
    lieu20 : "dans des camps militaires.",
    lieu21 : "dans un bourbier au milieu des marécages.",
    lieu22 : "ou plutôt survécu dans une jungle loitaine.",
    lieu23 : "seul dans un village abandonné.",
    lieu24 : "en exile, un peu partout ou tu n'étais pas chassé !",
    lieu25 : "dans un village barbares.",
    lieu26 : "dans les ruines d'une cité, jadis pillée et saccagée.",
    lieu27 : "enfermé dans une prison.",
    lieu28 : "dans la cage d'un cirque itinérant.",
    lieu29 : "caché dans une cave.",
    lieu30 : "dans une barraque infecte pour esclave.",

};

// fonction qui affiche le lieu de vie du personnage dans le DOM aléatoirement
function afficherlieu(){
    const randomIndexLieu = Math.floor(Math.random() * 31);
    console.log("chiffre random : ", randomIndexLieu)
    const indexLieuSelected = Object.values(lieu)[randomIndexLieu];
    console.log(indexLieuSelected);

    document.getElementById("intro_lieu").innerHTML = "Pendant longtemps tu a vécu";
    document.getElementById("lieu").innerHTML = indexLieuSelected;
};

//Bouton lieu
valideBtnLieu.addEventListener("click", () => { 
    afficherlieu();
})

// métier d'origine ==============================================================
const metier = {
    metier0 : "au sein d'une guilde d'assassin.",
    metier1 : "comme ouvier agricole.",
    metier2 : "comme éleveur de bétails.",
    metier3 : "en tant qu'artisan : orfèvre, tapissier, drapier ou couturier.",
    metier4 : "comme serveur dans une taverne.",
    metier5 : "comme forgeron.",
    metier6 : "comme marin.",
    metier7 : "dans une armée régulière comme soldat.",
    metier8 : "dans un clan comme chef de guerre.",
    metier9 : "... heu pardon, tu n'as jamais travaillé de ta vie, petit nobliaux !",
    metier10 : "comme chasseur de gibier.",
    metier11 : "en tant qu'artiste de rue ou de cirque.",
    metier12 : "comme aubergiste.",
    metier13 : "comme gardien de prison.",
    metier14 : "comme trésorier d'une guilde.",
    metier15 : "comme fermier.",
    metier16 : "dans l'anti-chambre de l'enfer !!!",
    metier17 : "dans une communauté religieuse.",
    metier18 : "comme valet de pisse pour une noblesse méprisante.",
    metier19 : "comme videur pour une taverne mal fréquentée !",
    metier20 : "comme spadassin à la solde du plus offrant.",
    metier21 : "comme milicien affecté à la patrouille de rue.",
    metier22 : "comme garde de remparts.",
    metier23 : "dans le milieu de la pègre d'une cité.",
    metier24 : "comme domestique pour une riche famille.",
    metier25 : "comme laboureur de champs.",
    metier26 : "sur les marchés à vendre tout et n'importe quoi !",
    metier27 : "à faire ce qu'on te disais de faire !",
    metier28 : "à suivre les autres dans les mauvais coup !",
    metier29 : "à survivre dans des milieux hostiles et les pires conditions.",
    metier30 : "dans une barraque infecte pour esclave.",

};

// fonction qui affiche le metier de vie du personnage dans le DOM aléatoirement
function affichermetier(){
    const randomIndexmetier = Math.floor(Math.random() * 31);
    console.log("chiffre random : ", randomIndexmetier)
    const indexmetierSelected = Object.values(metier)[randomIndexmetier];
    console.log(indexmetierSelected);

    document.getElementById("intro_metier").innerHTML = "Jadis, tu as oeuvré";
    document.getElementById("metier").innerHTML = indexmetierSelected;
};

//Bouton metier
valideBtnmetier.addEventListener("click", () => { 
    affichermetier();
})

// religion ==============================================================
const religion = {
    religion0 : "Khorne, le dieu du sang et seigneur des crânes.",
    religion1 : "Nurgle, le seigneur de la déchéance, maitre de la pourriture et de la pestilence.",
    religion2 : "Slaanesh, le magnifique prince du chaos, séduisant et pervers dans ses faveurs surnaturelles.",
    religion3 : "Tzeentch, l'architecte du changement, appelé aussi le grand sorcier.",
    religion4 : "Calis, la déesse de la torture, du viol et du pillage.",
    religion5 : "Valind, le dieu des combats et du courage.",
    religion6 : "Féria, la déesse de la lumière.",
    religion7 : "Golod, le dieu du chaos et du cancer cosmique.",
    religion8 : "Ténéra, la Déesse de la nuit et de l’obscurité protectrice.",
    religion9 : "Arlam et adère au culte de la pensée. Maudit sois tu, blasphémateur !",
    religion10 : "Thanatar, le dieu des champs de batailles et des armée ténébreuses.",
    religion11 : "Crôm et tu te débrouilles avec ça ...",
    religion12 : "Hypnos & Thanatos.",
    religion13 : "Naggash, pour qu'il ne te tue pas tout de suite !!",
    religion14 : "les Grands Anciens : Cthulhu et Azatoth.",
    religion15 : "Gorgona, la maitresse des goules. Aucun respect pour toi même !",
    religion16 : "Vorala, le dieu de la vengeance et de la haine.",
    religion17 : "en silence, sans rien dire à personne ...",
    religion18 : "aucun dieu car tu es athé !",
    religion19 : "personne car tu maudits les dieux de toutes sortes !!!",
    religion20 : "certainement pas ces fantoches, qui ne sont là que pourt te tourmenter !",
    religion21 : "pour que les dieux t'oublient aprés tout ce que tu as fait pour les énerver !",
    religion22 : "pour que les dieux te pardonnent et sinon qu'ils aillent se faire voir !",
    religion23 : "pour que les dieux t'accueillent à leurs côtés car tu es leur égale aprés tout !",
    religion24 : "juste pour te servir d'eux car au fond tu les méprises !",
    religion25 : "pour pouvoir les combattre et leur faire payer tout ce qu'ils t'ont fait subir !",
    religion26 : "Zuvassin le défaiseur !",
    religion27 : "Necoho le septique !",
    religion28 : "Malal le banni !",
    religion29 : "Arthagos le seigneur des Bêtes !",
    religion30 : "Rhasneth, dieu de la démense !",
    religion31 : "Miséris, la déesse de la misère !",

};

// fonction qui affiche la religion du personnage dans le DOM aléatoirement
function afficherReligion(){
    const randomIndexreligion = Math.floor(Math.random() * 32);
    console.log("chiffre random : ", randomIndexreligion)
    const indexreligionSelected = Object.values(religion)[randomIndexreligion];
    console.log(indexreligionSelected);

    document.getElementById("intro_religion").innerHTML = "Afin d'accomplir ta destinée et peut être gagner quelques points de destin, chaque jour tu pries";
    document.getElementById("religion").innerHTML = indexreligionSelected;
};

//Bouton religion
valideBtnreligion.addEventListener("click", () => { 
    afficherReligion();
})


// origine ténébreuse ==============================================================

const pereVp = {
    pereVp0 : "un père vampirique",
    pereVp1 : "une mère vampirique",
};

const origine_vp = {
    origine_vp0 : "à qui tu t'es donné sans réserve car tu voulais rejoindre les ténébres ...",
    origine_vp1 : "qui ne t'a pas laissé le choix !",
    origine_vp2 : "qui t'a enlevé à tes parents pour te préparer à ce moment !",
    origine_vp3 : "inconnu qui t'a laissé pour mort juste aprés ...",
    origine_vp4 : "qui t'a ensuite initié aux ténébres au sein de sa lignée !",
    origine_vp5 : "pour te livrer à l'inquisition afin de couvrir ses traces mais tu as survécu ...",
    origine_vp6 : "car tu étais tout désigné pour rejopindre sa lignée !",
    origine_vp7 : "pour t'offrir en sacrifice aux dieux mais ceux-ci ont rejeté l'offrande ...",
    origine_vp8 : "pour te punir de tous tes péchés de ta vie humaine !",
    origine_vp9 : "car la soif de sang a toujours été présente en toi !",
    origine_vp10 : "au cours d'un rituel de clan pour rejoindre leur rang !",
    origine_vp11 : "qui a ensuite essayé de te détruire en comprenant son erreur ...",
    origine_vp12 : "que tu as tué dans la frénésie de ta venue au monde des ténébres !",
    origine_vp13 : "qui t'as ensuite abandonné à ton destin !",
    origine_vp14 : "sur qui tu peux toujours compter aujourd'hui !",
    origine_vp15 : "pour te récompenser de tous les péchés que tu as commis durant ta vie humaine !",
    origine_vp16 : "dont les exploits et la rénommée au sein du sanctuaire rejaillissent sur toi !",
    origine_vp17 : "dont la disgràce au sein du sanctuaire te porte souvent préjusdice !",

};

//fonction qui affiche le pere ou la mère vampire du perso
function pereMere(){
    const randomIndexpereVp = Math.floor(Math.random() * 2);
    console.log("pere mere", randomIndexpereVp)
    const indexPereVpSelected = Object.values(pereVp)[randomIndexpereVp];

    document.getElementById("intro_origine_vp").innerHTML = "Le don ténébreux t'a été accordé par";
    document.getElementById("pere_vp").innerHTML = indexPereVpSelected;

}

// fonction qui affiche l'origine ténébreuse du personnage dans le DOM aléatoirement
function afficherOrigine_vp(){
    const randomIndexOrigineVp = Math.floor(Math.random() * 15);
    const indexOrigineVpSelected = Object.values(origine_vp)[randomIndexOrigineVp];
    console.log("origine des ténébres", indexOrigineVpSelected)
    document.getElementById("origine_vp").innerHTML = indexOrigineVpSelected;
};

//Bouton origine_vp
valideBtnOrigineVp.addEventListener("click", () => { 
    pereMere()
    afficherOrigine_vp();
})

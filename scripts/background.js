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

//partie responsive navbar -------------------------------------
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
//=====================================================================



const ethnie = {
    eth0 : "Umélorien",
    eth1 : "Cassar",
    eth2 : "Khaler",
    eth3 : "Soloman",
    eth4 : "Effarat",
    eth5 : "Djazar",
    eth6 : "Stovenger",
    eth7 : "Keshite",
    eth8 : "Shivalinga",
    eth9 : "Sang-mélée",
    eth10 : "Azayas"
};

// fonction qui affiche l'ethnie du personnage dans le DOM aléatoirement
function afficherEthnie(){
    const randomIndexEthnie = Math.floor(Math.random() * 11);
    console.log("chiffre random : ", randomIndexEthnie)
    const indexEthnieSelected = Object.values(ethnie)[randomIndexEthnie];
    console.log(indexEthnieSelected);

    document.getElementById("origine").innerHTML = "Ton peuple d'origine est";
    document.getElementById("ethnie").innerHTML = indexEthnieSelected;
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
    religion25 : "pour pouvoir les combattre et leur faire payer ce qu'ils t'ont fait subir !",

};

// fonction qui affiche la religion du personnage dans le DOM aléatoirement
function afficherReligion(){
    const randomIndexreligion = Math.floor(Math.random() * 26);
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

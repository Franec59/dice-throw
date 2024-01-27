// Page js de la page cyberpunk
//======================================

//Partie lancer de dés pour les caractéristiques =============

const jetMax = 18
const zoneDeLancer = document.getElementById("zonedelancer");

// selection des boutons ====================================
const CyberBtnD = document.getElementById("jetdeD");
const valideCarac = document.getElementById("valide_carac");

// tableau des caractéristiques. 
var cyberCarac = [];
var cyberCaracSelected = [];

//masquer le bouton et la div répartition des caractéristiques ========
document.getElementById("aff_bouton").style.display = "none";
document.getElementById("div_repartition").style.display = "none";

// fonction pour lancer les dés =======================================
function cyberD () {
    const cubeContainer = document.createElement("div");
    cubeContainer.classList.add("cube-container");
    zoneDeLancer.appendChild(cubeContainer);
    
    const cube = document.createElement("div");
    cube.classList.add("cube");
    cubeContainer.appendChild(cube);

    const face1 = document.createElement("div");
    face1.classList.add("face");
    face1.classList.add("front1");
    cube.appendChild(face1);

    const face2 = document.createElement("div");
    face2.classList.add("face");
    face2.classList.add("bottom");
    cube.appendChild(face2);

    const face3 = document.createElement("div");
    face3.classList.add("face");
    face3.classList.add("right");
    cube.appendChild(face3);

    const face4 = document.createElement("div");
    face4.classList.add("face");
    face4.classList.add("left");
    cube.appendChild(face4);

    const face5 = document.createElement("div");
    face5.classList.add("face");
    face5.classList.add("top");
    cube.appendChild(face5);

    const face6 = document.createElement("div");
    face6.classList.add("face");
    face6.classList.add("back");
    cube.appendChild(face6);

    const resultTop = document.querySelectorAll(".top");
    resultTop.forEach((destop) => {
        destop.textContent = Math.floor(Math.random() * (jetMax) +1)
    });
    const resultBack = document.querySelectorAll(".back");
    resultBack.forEach((desback) => {
        desback.textContent = Math.floor(Math.random() * (jetMax) +1)
    });
    const resultBottom = document.querySelectorAll(".bottom");
    resultBottom.forEach((desbottom) => {
        desbottom.textContent = Math.floor(Math.random() * (jetMax) +1)
    });
    const resultRight = document.querySelectorAll(".right");
    resultRight.forEach((desright) => {
        desright.textContent = Math.floor(Math.random() * (jetMax) +1)
    });
    const resultLeft = document.querySelectorAll(".left");
    resultLeft.forEach((desleft) => {
        desleft.textContent = Math.floor(Math.random() * (jetMax) +1)
    });

};

// afficher le score des caractéristiques sur la face visible (carac de 8 à 18 =>1D10+8)

function jetEnCarac () {
    const resultFront1 = document.querySelectorAll(".front1");
    resultFront1.forEach((desfront) => {
        desfront.textContent = Math.floor((Math.random() * 10 +1)+8);
        cyberCarac.push(desfront.textContent);
    });
}

//fonction pour ajouter le son au jet de dés =================
const diceSound = () => {
    const audio = new Audio();
    audio.src = "./sound/dice-sound.mp3";
    audio.play();
};

//fonction qui lance les fonctions nécéssaires quand on click sur le bouton "lancer les dés"
CyberBtnD.addEventListener("click", () => {

    zoneDeLancer.innerHTML = "";
    cyberCarac.length = 0;
    zoneDeLancer.classList.add("tapis");
    //11 karac entre 8 et 18 
    for (let a = 0; a < 11; a++ ){
        cyberD()
    };
    jetEnCarac()
    diceSound();
    //afficher le bouton pour la répartition des valeurs ========
    document.getElementById("aff_bouton").style.display = "flex";
    console.log("karac du lancer de D =", cyberCarac)
});


//Répartition des caractéristiques ============================================

// classement aléatoire des valeurs dans un tableau
function shuffleTabCyber(inputTab){
    inputTab.sort(()=> Math.random() - 0.5);
};

// fonction qui attribue les valeurs du tableau dans les karacs
function repartition(){
    const cyberAgi = cyberCaracSelected[0];
    const cyberFor = cyberCaracSelected[1];
    const cyberEnd = cyberCaracSelected[2];
    const cyberPer = cyberCaracSelected[3];
    const cyberRef = cyberCaracSelected[4];
    const cyberInt = cyberCaracSelected[5];
    const cyberAdr = cyberCaracSelected[6];
    const cyberTech = cyberCaracSelected[7];
    const cyberVol = cyberCaracSelected[8];
    const cyberEmp = cyberCaracSelected[9];
    const cyberBt = cyberCaracSelected[10];
    console.log("carac AGI = ", cyberAgi)
    document.getElementById("cyber_agi").innerHTML = cyberAgi;
    document.getElementById("cyber_for").innerHTML = cyberFor;
    document.getElementById("cyber_end").innerHTML = cyberEnd;
    document.getElementById("cyber_per").innerHTML = cyberPer;
    document.getElementById("cyber_ref").innerHTML = cyberRef;
    document.getElementById("cyber_int").innerHTML = cyberInt;
    document.getElementById("cyber_adr").innerHTML = cyberAdr;
    document.getElementById("cyber_tech").innerHTML = cyberTech;
    document.getElementById("cyber_vol").innerHTML = cyberVol;
    document.getElementById("cyber_emp").innerHTML = cyberEmp;
    document.getElementById("cyber_bt").innerHTML = cyberBt;
};

// bouton de répartition auto du jet de dés => select value in new array

valideCarac.addEventListener("click", () => { 
    //afficher la div pour la répartition des caractéristiques ========
    document.getElementById("div_repartition").style.display = "flex";
    cyberCaracSelected = [].concat(cyberCarac);
    console.log("tab idem carac : ",cyberCaracSelected );
    shuffleTabCyber(cyberCaracSelected);
    console.log("mélange carac :", cyberCaracSelected)
    repartition()
    
})

//=====================================================================
// Partie background du personnage
//===================================================================

const validBtnHistory = document.getElementById("valid_history");

const phrase1 = {
    pha1_0 : ["Alors, écoutes bien, mec,"],
    pha1_1 : ["Et bien si tu le demandes,"],
    pha1_2 : ["Do you talking to me ? Be careful,"],
    pha1_3 : ["Quoi ? C'est un interrogatoire ou quoi ? Ok,"],
    pha1_4 : ["Ok choom, alors voilà,"],
    pha1_5 : ["Une interview ? Cool, voilà mon histoire,"],
    pha1_6 : ["Ok, tu peux mettre ça sur ton live,"],
    pha1_7 : ["Regardes mon profil Fakebook, tu verras que"],
};

const phrase2 = {
    pha2_0 : [" je fais partit d'une population évacuée d'un secteur contaminé"],
    pha2_1 : [" je me suis échappé d'un trou perdu"],
    pha2_2 : [" je me suis tiré d'un bled de merde"],
    pha2_3 : [" je suis un pure citadin, j'ai grandit dans une grosse mégalopôle, "],
    pha2_4 : [" autrefois, j'étais un zonard perdu dans un vaste désert urbain"],
    pha2_5 : [" j'ai étè contraint de fuir une zone de guerre"],
    pha2_6 : [" je un réfugié climatique, on a du quitter une région sinistrée"],
};

const origine = {
    ori_0 : [" d'Amérique du Nord."],
    ori_1 : [" d'Amérique du Sud."],
    ori_2 : [" d'Amérique Centrale."],
    ori_3 : [" d'Europe de l'Ouest."],
    ori_4 : [" du Moyen Orient."],
    ori_5 : [" d'Afrique du Nord."],
    ori_6 : [" d'Asie."],
    ori_7 : [" d'Europe de l'Est."],
    ori_8 : [" d'Afrique Centrale."],
};

const famille = {
    fam_0 : [" Le pire c'est qu'au départ j'étais un putain de gosse de riche, ouais, mes parents étaient cadres coproratistes. Maison de luxe, écoles privées, domestiques et tout le toutime !"],
    fam_1 : [" Mais dans le fond, on n'a manqué de rien grâce à la corpo, belle maison, quartier tranquille, belles voitures, écoles corporatistes, tout le tremblement !"],
    fam_2 : [" Je viens du côté banlieu, une putain de citée dortoir de l'autre côté du périf, peuplé de moutons décérébrés !"],
    fam_3 : [" J'ai sillonné les routes avec une horde de nomade, ma vrai famille. Grosses cylindrées pour bouger, caravanes pour dormir et du bitume à respirer. La liberté quoi !"],
    fam_4 : [" J'ai grandit dans un putain de gang ! Eduqué par une mère camée à me battre, tuer et voler. j'ai grandit avec la faim, la violence et la peur !"],
    fam_5 : [" Je suis un crevar de la zone de combat, squats, combines et surtout conneries à gogo !"],
    fam_6 : [" Je suis né dans la rue, à dormir dans des carcasses abandonnées, manger dans des bennes à ordures et des rats en guise de doudou !"],
    fam_7 : [" J'ai grandi dans une des méga-structures bâties aprés la guerre. Un minuscule conapt et des croquettes à bouffer. Un lit pas trop froid et une école financée par les bonnes oeuvres de la corpo !"],
    fam_8 : [" Je viens d'une famille de Néo-colons. On avait fait le choix de s'installer dans un de ces villages fantômes à rebâtir. Une vie de pionner moderne en somme, à faire pousser des légumes modifiés sous une forêt d'éloliennes !"],
    fam_9 : [" On a vécu dans une ferme corporatiste, à manger corpo, respirer corpo et chier corpo !"],
};

// fonction qui affiche la 1ere phrase du texte
function afficherPhrase1(){
    const randomIndexPhrase1 = Math.floor(Math.random() * 8);
        // console.log("phrase 1 random : ", randomIndexPhrase1)
    const indexPhrase1Selected = Object.values(phrase1)[randomIndexPhrase1];
        // console.log(randomIndexPhrase1);

    document.getElementById("phrase1").innerHTML = indexPhrase1Selected;
};

// fonction qui affiche la 2ere phrase du texte
function afficherPhrase2(){
    const randomIndexPhrase2 = Math.floor(Math.random() * 6);
    const indexPhrase2Selected = Object.values(phrase2)[randomIndexPhrase2];

    document.getElementById("phrase2").innerHTML = indexPhrase2Selected;
};

// fonction qui affiche l'origine du perso dans le texte.
function afficherOrigine(){
    const randomIndexOrigine = Math.floor(Math.random() * 9);
    const indexOrigineSelected = Object.values(origine)[randomIndexOrigine];

    document.getElementById("origine").innerHTML = indexOrigineSelected;
};

// fonction qui affiche la famille du perso dans le texte.
function afficherFamille(){
    const randomIndexFamille = Math.floor(Math.random() * 10);
    const indexFamilleSelected = Object.values(famille)[randomIndexFamille];

    document.getElementById("famille").innerHTML = indexFamilleSelected;
};

// fonction qui affiche la phrase 3 et la tragédie dans le texte.
function afficherTragedie(){
    const randomIndexTragedie = Math.floor(Math.random() * 10);
    const indexTragedieSelected = Object.values(tragedie)[randomIndexTragedie];

    document.getElementById("phrase3").innerHTML = "Et ensuite ma story familialle est partie en couille";
    document.getElementById("tragedie").innerHTML = indexTragedieSelected;
};


//Bouton history
validBtnHistory.addEventListener("click", () => { 
    afficherPhrase1();
    afficherPhrase2();
    afficherOrigine();
    afficherFamille();
});



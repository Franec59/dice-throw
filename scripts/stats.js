// Page js de la page stats - points de personnage
//=====================================================

//définir les variables =============

const zoneDeLancer = document.getElementById("zonedelancer");
let cyberAgi = 1;
let cyberFor = 1;
let cyberEnd = 1;
let cyberPer = 1;
let cyberRef = 1;
let cyberInt = 1;
let cyberAdr = 1;
let cyberTech =1;
let cyberVol = 1;
let cyberEmp = 1;
let cyberBt = 1;

// selection des boutons ====================================
const CyberBtnD = document.getElementById("jetdeD");
const valideCarac = document.getElementById("valide_carac");

// tableau des caractéristiques. 
var cyberCarac = [];
var cyberCaracSelected = [];

//masquer les boutons et les div de la partie 2  ================================
document.getElementById("aff_bouton").style.display = "none";
document.getElementById("div_repartition").style.display = "none";
document.getElementById("div_base").style.display = "none";
document.getElementById("div_aptitudes").style.display = "none";

// fonction pour générer un nombre aléatoire compris entre un nbre min et un nbre max

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
        // destop.textContent = Math.floor(Math.random() * (jetMax) +1)
        destop.textContent = getRandomInt(9, 18);

    });
    const resultBack = document.querySelectorAll(".back");
    resultBack.forEach((desback) => {
        desback.textContent = getRandomInt(9, 18)
    });
    const resultBottom = document.querySelectorAll(".bottom");
    resultBottom.forEach((desbottom) => {
        desbottom.textContent = getRandomInt(9, 18)
    });
    const resultRight = document.querySelectorAll(".right");
    resultRight.forEach((desright) => {
        desright.textContent = getRandomInt(9, 18)
    });
    const resultLeft = document.querySelectorAll(".left");
    resultLeft.forEach((desleft) => {
        desleft.textContent = getRandomInt(9, 18)
    });

};

// afficher le score des caractéristiques sur la face visible (carac de 9 à 18)

function jetEnCarac () {
    const resultFront1 = document.querySelectorAll(".front1");
    resultFront1.forEach((desfront) => {
        // desfront.textContent = Math.floor((Math.random() * 10 +1)+8);
        desfront.textContent = getRandomInt(9, 18);
        cyberCarac.push(desfront.textContent);
    });
};

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
    //Pour lancer 11 dés ======
    for (let a = 0; a < 11; a++ ){
        cyberD()
    };
    jetEnCarac()
    diceSound();
    //afficher le bouton pour la répartition des valeurs ========
    document.getElementById("aff_bouton").style.display = "flex";
    // Vérif ====================
    console.log("Tab des carac générées = ", cyberCarac)

});


//Répartition des caractéristiques ============================================

// classement aléatoire des valeurs dans un tableau
function shuffleTabCyber(inputTab){
    inputTab.sort(()=> Math.random() - 0.5);
};

// fonction qui attribue les valeurs du tableau dans les karacs
function repartition(){
    cyberAgi = cyberCaracSelected[0];
    cyberFor = cyberCaracSelected[1];
    cyberEnd = cyberCaracSelected[2];
    cyberPer = cyberCaracSelected[3];
    cyberRef = cyberCaracSelected[4];
    cyberInt = cyberCaracSelected[5];
    cyberAdr = cyberCaracSelected[6];
    cyberTech = cyberCaracSelected[7];
    cyberVol = cyberCaracSelected[8];
    cyberEmp = cyberCaracSelected[9];
    cyberBt = cyberCaracSelected[10];
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

// calcul des bases en caractéristiques ===================

function baseKarac (){
    const baseAgi = Math.ceil(cyberAgi/2+3);
    console.log( "base en agi = ", baseAgi)
    document.getElementById("Base_agi").innerHTML = baseAgi;
    const basePer = Math.ceil(cyberPer/2+4);
    document.getElementById("Base_per").innerHTML = basePer;
    const baseInt = Math.ceil(cyberInt/2+2);
    document.getElementById("Base_int").innerHTML = baseInt;
    const baseAdr = Math.ceil(cyberAdr/2+4);
    document.getElementById("Base_adr").innerHTML = baseAdr;
    const baseTech = Math.ceil(cyberTech/2+2);
    document.getElementById("Base_tech").innerHTML = baseTech;
    const baseVol = Math.ceil(cyberVol/2+4);
    document.getElementById("Base_vol").innerHTML = baseVol;
    const baseEmp = Math.ceil(cyberEmp/2+3);
    document.getElementById("Base_emp").innerHTML = baseEmp;

};

// calcul du modificateur de constitution ===================

function modifCon(){
    const constitution = Math.ceil((Number(cyberFor)+Number(cyberEnd))/2);
    console.log("CON = ", constitution);
    
    if (Number(constitution)>=7 && Number(constitution)<=10){
        document.getElementById("mc").innerHTML = 1;
    } else if (Number(constitution)>=11 && Number(constitution)<=14){
        document.getElementById("mc").innerHTML = 2;
    } else if (Number(constitution)>=15 && Number(constitution)<=18){
        document.getElementById("mc").innerHTML = 3;
    } else {
        document.getElementById("mc").innerHTML = "par les dieux du chaos !!!";
    }
};

// calcul du modificateur du bonus aux dégâts ===================

function bonusDegats(){
    if (Number(cyberFor)<=9){
        document.getElementById("bon_deg").innerHTML = 0;
    } else if (Number(cyberFor)>=10 && Number(cyberFor)<=12){
        document.getElementById("bon_deg").innerHTML = "x1,5";
    } else if (Number(cyberFor)>=13 && Number(cyberFor)<=15){
        document.getElementById("bon_deg").innerHTML = "x2";
    } else if (Number(cyberFor)>=16 && Number(cyberFor)<=20){
        document.getElementById("bon_deg").innerHTML = "x3";
    } else {
        document.getElementById("bon_deg").innerHTML = "par les dieux du chaos !!!";
    }
};

// calcul niveau d'encombrement [ENC] ===================

function encombrement(){
    if (Number(cyberFor)>=5 && Number(cyberFor)<=9){
        document.getElementById("enc").innerHTML = "Malus de 1 pour 5 pts d'enc";
    } else if (Number(cyberFor)>=10 && Number(cyberFor)<=14){
        document.getElementById("enc").innerHTML = "Malus de 1 pour 7 pts d'enc";
    } else if (Number(cyberFor)>=15 && Number(cyberFor)<=18){
        document.getElementById("enc").innerHTML = "Malus de 1 pour 9 pts d'enc";
    } else {
        document.getElementById("enc").innerHTML = "par les dieux du chaos !!!";
    }
};

// bouton de répartition auto des scores générés =======================

valideCarac.addEventListener("click", () => { 
    //afficher la div pour la répartition des caractéristiques ========
    document.getElementById("div_repartition").style.display = "flex";
    document.getElementById("div_base").style.display = "flex";
    document.getElementById("div_aptitudes").style.display = "flex";
    cyberCaracSelected = [].concat(cyberCarac);
    // console.log("tab idem carac : ",cyberCaracSelected );
    shuffleTabCyber(cyberCaracSelected);
    // console.log("mélange carac :", cyberCaracSelected)
    repartition()
    baseKarac()
    modifCon()
    bonusDegats()
    encombrement()
    
});



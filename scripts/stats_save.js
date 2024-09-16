// Page js de la page stats - points de personnage
//=====================================================

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
document.getElementById("div_base").style.display = "none";

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
    document.getElementById("div_base").style.display = "flex";
    cyberCaracSelected = [].concat(cyberCarac);
    console.log("tab idem carac : ",cyberCaracSelected );
    shuffleTabCyber(cyberCaracSelected);
    console.log("mélange carac :", cyberCaracSelected)
    repartition()
    
})



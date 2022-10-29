//javascript de la page fiche age noir
//=================================================

const numberOfFace = 20

const tapis = document.getElementById("tapis");
    //console.log(tapis);

// selection des boutons ====================================
const lancerBtn = document.getElementById("lancer-btn");
const valideBtn = document.getElementById("valide-btn2");
const getKarac = document.getElementById("getKarac");



// tableau des caractéristiques. 
var karac = [];
var karacSelected = [];
var karacForm = [];

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

// jouer 2 cubes du score 1
function playCube1 () {
    const cubeContainer = document.createElement("div");
    cubeContainer.classList.add("cube-container");
    tapis.appendChild(cubeContainer);
    
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
        destop.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });
    const resultBack = document.querySelectorAll(".back");
    resultBack.forEach((desback) => {
        desback.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });
    const resultBottom = document.querySelectorAll(".bottom");
    resultBottom.forEach((desbottom) => {
        desbottom.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });
    const resultRight = document.querySelectorAll(".right");
    resultRight.forEach((desright) => {
        desright.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });
    const resultLeft = document.querySelectorAll(".left");
    resultLeft.forEach((desleft) => {
        desleft.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });

};

//jouer 4 cubes du score2
function playCube2 () {
    const cubeContainer = document.createElement("div");
    cubeContainer.classList.add("cube-container");
    tapis.appendChild(cubeContainer);
    
    const cube = document.createElement("div");
    cube.classList.add("cube");
    cubeContainer.appendChild(cube);

    const face1 = document.createElement("div");
    face1.classList.add("face");
    face1.classList.add("front2");
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
        destop.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });
    const resultBack = document.querySelectorAll(".back");
    resultBack.forEach((desback) => {
        desback.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });
    const resultBottom = document.querySelectorAll(".bottom");
    resultBottom.forEach((desbottom) => {
        desbottom.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });
    const resultRight = document.querySelectorAll(".right");
    resultRight.forEach((desright) => {
        desright.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });
    const resultLeft = document.querySelectorAll(".left");
    resultLeft.forEach((desleft) => {
        desleft.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });

};

//jouer 2 cubes du score3
function playCube3 () {
    const cubeContainer = document.createElement("div");
    cubeContainer.classList.add("cube-container");
    tapis.appendChild(cubeContainer);
    
    const cube = document.createElement("div");
    cube.classList.add("cube");
    cubeContainer.appendChild(cube);

    const face1 = document.createElement("div");
    face1.classList.add("face");
    face1.classList.add("front3");
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
        destop.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });
    const resultBack = document.querySelectorAll(".back");
    resultBack.forEach((desback) => {
        desback.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });
    const resultBottom = document.querySelectorAll(".bottom");
    resultBottom.forEach((desbottom) => {
        desbottom.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });
    const resultRight = document.querySelectorAll(".right");
    resultRight.forEach((desright) => {
        desright.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });
    const resultLeft = document.querySelectorAll(".left");
    resultLeft.forEach((desleft) => {
        desleft.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });

};

//jouer 2 cubes du score4
function playCube4 () {
    const cubeContainer = document.createElement("div");
    cubeContainer.classList.add("cube-container");
    tapis.appendChild(cubeContainer);
    
    const cube = document.createElement("div");
    cube.classList.add("cube");
    cubeContainer.appendChild(cube);

    const face1 = document.createElement("div");
    face1.classList.add("face");
    face1.classList.add("front4");
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
        destop.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });
    const resultBack = document.querySelectorAll(".back");
    resultBack.forEach((desback) => {
        desback.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });
    const resultBottom = document.querySelectorAll(".bottom");
    resultBottom.forEach((desbottom) => {
        desbottom.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });
    const resultRight = document.querySelectorAll(".right");
    resultRight.forEach((desright) => {
        desright.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });
    const resultLeft = document.querySelectorAll(".left");
    resultLeft.forEach((desleft) => {
        desleft.textContent = Math.floor(Math.random() * (numberOfFace) +1)
    });

};

// afficher le score sur la face visible pour 2 karac à 10 +1D4

function score1 () {
    const resultFront1 = document.querySelectorAll(".front1");
    resultFront1.forEach((desfront) => {
        desfront.textContent = Math.floor((Math.random() * 4 +1)+10);
        karac.push(desfront.textContent);
    });
}

// afficher le score sur la face visible pour 4 karac à 8 +1D6
function score2 () {
    const resultFront2 = document.querySelectorAll(".front2");
    resultFront2.forEach((desfront) => {
        desfront.textContent = Math.floor((Math.random() * 6 +1)+8);
        karac.push(desfront.textContent);
        
    });
}

// afficher le score sur la face visible pour 2 karac à 7 +1D6
function score3 () {
    const resultFront3 = document.querySelectorAll(".front3");
    resultFront3.forEach((desfront) => {
        desfront.textContent = Math.floor((Math.random() * 6 +1)+6);
        karac.push(desfront.textContent);
        
    });
}

// afficher le score sur la face visible pour 2 karac à 6 +1D4
function score4 () {
    const resultFront4 = document.querySelectorAll(".front4");
    resultFront4.forEach((desfront) => {
        desfront.textContent = Math.floor((Math.random() * 4 +1)+6);
        karac.push(desfront.textContent);
        
    });
}


const diceSound = () => {
    const audio = new Audio();
    audio.src = "./sound/dice-sound.mp3";
    audio.play();
};

//fonction qui lance les autres fonctions quand on click sur le bouton "lancer les dés"
lancerBtn.addEventListener("click", () => {

    tapis.innerHTML = "";
    karac.length = 0;
    tapis.classList.add("tapis");
    for (let a = 0; a < 2; a++ ){
            playCube1()
    };
    for (let i = 0; i< 4; i++ ){
            playCube2()
            
    };
    for (let i = 0; i< 2; i++ ){
            playCube3()
            
    };
    for (let i = 0; i< 2; i++ ){
            playCube4()
            
    };
    score1()
    score2()
    score3()
    score4()
    diceSound();
    console.log("karac du lancer de D =", karac)
});


//partie validation du jet de dés
//======================================================================

// classement aléatoire des valeurs dans un tableau

function shuffleArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
};

// fonction qui attribue les valeurs du tableau dans les karacs
function attribution(){
    const refHum = karacSelected[0];
    const perHum = karacSelected[1];
    const volHum = karacSelected[2];
    const humHum = karacSelected[3];
    const intHum = karacSelected[4];
    const adrHum = karacSelected[5];
    const agiHum = karacSelected[6];
    const endHum = karacSelected[7];
    const forHum = karacSelected[8];
    const btHum = karacSelected[9];
    console.log("ref de l'humain = ", refHum)
    document.getElementById("ref_hum").innerHTML = refHum
    document.getElementById("per_hum").innerHTML = perHum
    document.getElementById("vol_hum").innerHTML = volHum
    document.getElementById("hum_hum").innerHTML = humHum
    document.getElementById("int_hum").innerHTML = intHum
    document.getElementById("adr_hum").innerHTML = adrHum
    document.getElementById("agi_hum").innerHTML = agiHum
    document.getElementById("end_hum").innerHTML = endHum
    document.getElementById("for_hum").innerHTML = forHum
    document.getElementById("bt_hum").innerHTML = btHum
};

// fonction qui calcul des valeurs de la forme vampire à partir de karacForm
function calculKaracVp(){
    let refVp = parseInt(karacForm[0]) +2;
    let perVp = parseInt(karacForm[1]) +2;
    let volVp = parseInt(karacForm[2]) +2;
    let humVp = parseInt(karacForm[3]) -2;
    let intVp = parseInt(karacForm[4]);
    let adrVp = parseInt(karacForm[5]);
    let agiVp = parseInt(karacForm[6]) +2;
    let endVp = parseInt(karacForm[7]) +4;
    let forVp = parseInt(karacForm[8]) +2;
    let btVp = parseInt(karacForm[9]) -2;
    console.log("ref du vampire = ", refVp);

    document.getElementById("ref_vp").innerHTML = refVp;
    document.getElementById("per_vp").innerHTML = perVp;
    document.getElementById("vol_vp").innerHTML = volVp;
    document.getElementById("hum_vp").innerHTML = humVp;
    document.getElementById("int_vp").innerHTML = intVp;
    document.getElementById("adr_vp").innerHTML = adrVp;
    document.getElementById("agi_vp").innerHTML = agiVp;
    document.getElementById("end_vp").innerHTML = endVp;
    document.getElementById("for_vp").innerHTML = forVp;
    document.getElementById("bt_vp").innerHTML = btVp;
};

// fonction qui calcul des valeurs de la forme berseker à partir de karacForm
function calculKaracBer(){
    let refBer = parseInt(karacForm[0]) +4;
    let perBer = parseInt(karacForm[1]) -2;
    let volBer = Math.round(parseInt(karacForm[2]) /2);
    let humBer = Math.round(parseInt(karacForm[3]) /2);
    let intBer = Math.round(parseInt(karacForm[4]) /2);
    let adrBer = parseInt(karacForm[5]) -4;
    let agiBer = parseInt(karacForm[6]) +2;
    let endBer = parseInt(karacForm[7]) +4;
    let forBer = parseInt(karacForm[8]) +2;
    let btBer = "X";
    console.log("ref du berseker = ", refBer);

    document.getElementById("ref_ber").innerHTML = refBer;
    document.getElementById("per_ber").innerHTML = perBer;
    document.getElementById("vol_ber").innerHTML = volBer;
    document.getElementById("hum_ber").innerHTML = humBer;
    document.getElementById("int_ber").innerHTML = intBer;
    document.getElementById("adr_ber").innerHTML = adrBer;
    document.getElementById("agi_ber").innerHTML = agiBer;
    document.getElementById("end_ber").innerHTML = endBer;
    document.getElementById("for_ber").innerHTML = forBer;
    document.getElementById("bt_ber").innerHTML = btBer;
};

// fonction qui calcul des valeurs de la forme Gargouille à partir de karacForm
function calculKaracGar(){
    let refGar = parseInt(karacForm[0]) -4;
    let perGar = parseInt(karacForm[1]) +4;
    let volGar = parseInt(karacForm[2]) -2;
    let humGar = Math.round(parseInt(karacForm[3]) /2);
    let intGar = parseInt(karacForm[4]) -4;
    let adrGar = parseInt(karacForm[5]) -4;
    let agiGar = parseInt(karacForm[6]) -4;
    let endGar = parseInt(karacForm[7]) +4;
    let forGar = parseInt(karacForm[8]) +4;
    let btGar = "X";
    console.log("ref de la gargouille = ", refGar);

    document.getElementById("ref_gar").innerHTML = refGar;
    document.getElementById("per_gar").innerHTML = perGar;
    document.getElementById("vol_gar").innerHTML = volGar;
    document.getElementById("hum_gar").innerHTML = humGar;
    document.getElementById("int_gar").innerHTML = intGar;
    document.getElementById("adr_gar").innerHTML = adrGar;
    document.getElementById("agi_gar").innerHTML = agiGar;
    document.getElementById("end_gar").innerHTML = endGar;
    document.getElementById("for_gar").innerHTML = forGar;
    document.getElementById("bt_gar").innerHTML = btGar;
};

// fonction qui calcul des valeurs de la forme spectral à partir de karacForm
function calculKaracSpec(){
    let refSpec = parseInt(karacForm[0]) -2;
    let perSpec = parseInt(karacForm[1]) +4;
    let volSpec = parseInt(karacForm[2]) +2;
    let humSpec = Math.round(parseInt(karacForm[3]) /2);
    let intSpec = parseInt(karacForm[4]);
    let adrSpec = parseInt(karacForm[5]) -4;
    let agiSpec = Math.round(parseInt(karacForm[6]) /2);
    let endSpec = parseInt(karacForm[7]);
    let forSpec = "X";
    let btSpec = "X";
    console.log("ref du spectre = ", refSpec);

    document.getElementById("ref_spec").innerHTML = refSpec;
    document.getElementById("per_spec").innerHTML = perSpec;
    document.getElementById("vol_spec").innerHTML = volSpec;
    document.getElementById("hum_spec").innerHTML = humSpec;
    document.getElementById("int_spec").innerHTML = intSpec;
    document.getElementById("adr_spec").innerHTML = adrSpec;
    document.getElementById("agi_spec").innerHTML = agiSpec;
    document.getElementById("end_spec").innerHTML = endSpec;
    document.getElementById("for_spec").innerHTML = forSpec;
    document.getElementById("bt_spec").innerHTML = btSpec;
};

// fonction qui calcul des valeurs des attributs à partir de karacForm
function calculAttributs(){
    let ptsSang = parseInt(karacForm[8]) + parseInt(karacForm[7]) +6;
    let auraPhy = Math.round(parseInt(karacForm[7]) /2) +4;
    let auraMagi = Math.round(parseInt(karacForm[4]) /2);
    let auraSur = Math.round(parseInt(karacForm[2]) /2) +2;
    let totalAura = parseInt(auraPhy) + parseInt(auraMagi) + parseInt(auraSur);

    console.log("points de sang = ", ptsSang);

    document.getElementById("pts_sang").innerHTML = ptsSang;
    document.getElementById("aura_phy").innerHTML = auraPhy;
    document.getElementById("aura_magi").innerHTML = auraMagi;
    document.getElementById("aura_surna").innerHTML = auraSur;
    document.getElementById("total_aura").innerHTML = totalAura;
};

// bouton de répartition auto du jet de dés => select value in new array

valideBtn.addEventListener("click", () => { 
    if (karac.length === 0){
        alert("Hé, tu dois lancer les dés avant, gros malin !!!");
    } else {
    karacSelected = [].concat(karac);
    shuffleArray(karacSelected);
    attribution()
    karacForm = [].concat(karacSelected);
    console.log("karacformAuto = ", karacForm)
    calculKaracVp();
    calculKaracBer();
    calculKaracGar();
    calculKaracSpec();
    calculAttributs();
    }
})

// fonction pour récupérer les saisies utilisateur ( Get the number of a number field )
getKarac.addEventListener("click", () => {
    //réinitialiser le tableau avant
    karacForm.length = 0;

    const getRefHum = document.getElementById("ref-hum").value;
    karacForm.push(getRefHum);
    console.log("REF = ", getRefHum);
    const getPerHum = document.getElementById("per-hum").value;
    karacForm.push(getPerHum);
    console.log("PER = ", getPerHum);
    const getVolHum = document.getElementById("vol-hum").value;
    karacForm.push(getVolHum);
    console.log("VOL = ", getVolHum);
    const getHumHum = document.getElementById("hum-hum").value;
    karacForm.push(getHumHum);
    console.log("HUM = ", getHumHum);
    const getIntHum = document.getElementById("int-hum").value;
    karacForm.push(getIntHum);
    console.log("INT = ", getIntHum);
    const getAdrHum = document.getElementById("adr-hum").value;
    karacForm.push(getAdrHum);
    console.log("ADR = ", getAdrHum);
    const getAgiHum = document.getElementById("agi-hum").value;
    karacForm.push(getAgiHum);
    console.log("AGI = ", getAgiHum);
    const getEndHum = document.getElementById("end-hum").value;
    karacForm.push(getEndHum);
    console.log("END = ", getEndHum);
    const getForHum = document.getElementById("for-hum").value;
    karacForm.push(getForHum);
    console.log("FOR = ", getForHum);
    const getBtHum = document.getElementById("bt-hum").value;
    karacForm.push(getBtHum);
    console.log("BT = ", getBtHum);

    console.log("karacformSaisie = ", karacForm);
    calculKaracVp();
    calculKaracBer();
    calculKaracGar();
    calculKaracSpec();
    calculAttributs();
});




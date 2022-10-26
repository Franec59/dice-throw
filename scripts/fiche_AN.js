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
    console.log(karac)
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
    console.log(refHum)
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

// bouton de répartition auto du jet de dés => select value in new array

valideBtn.addEventListener("click", () => {  
    karacSelected = [].concat(karac);
    // console.log(karacSelected)
    shuffleArray(karacSelected);
    // console.log(karacSelected)
    attribution()
    karacForm = [].concat(karacSelected);
    console.log("karacformAuto = ", karacForm)
})

// fonction pour récupérer les saisies utilisateur ( Get the number of a number field )
getKarac.addEventListener("click", () => {
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
});




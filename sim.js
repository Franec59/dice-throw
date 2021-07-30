let numberOfD = document.getElementById("cursor-des");

const numberOfFace = document.getElementById("cursor-face");
    //console.log(numberOfFace.value);

const tapis = document.getElementById("tapis");
    //console.log(tapis);
const resultId = document.getElementById("result");
    //console.log(resultId);
const synthese = document.getElementById("aff-result");
    

const lancerBtn = document.getElementById("lancer-btn");
    //console.log(lancerBtn);

var arrayResult = [];
var arrayCollect = [];

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

function playD () {
    const cubeContainer = document.createElement("div");
    cubeContainer.classList.add("cube-container");
    tapis.appendChild(cubeContainer);
    
    const cube = document.createElement("div");
    cube.classList.add("cube");
    cubeContainer.appendChild(cube);

    const face1 = document.createElement("div");
    face1.classList.add("face");
    face1.classList.add("front");
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
        destop.textContent = Math.floor(Math.random() * (numberOfFace.value) +1)
    });
    const resultBack = document.querySelectorAll(".back");
    resultBack.forEach((desback) => {
        desback.textContent = Math.floor(Math.random() * (numberOfFace.value) +1)
    });
    const resultBottom = document.querySelectorAll(".bottom");
    resultBottom.forEach((desbottom) => {
        desbottom.textContent = Math.floor(Math.random() * (numberOfFace.value) +1)
    });
    const resultRight = document.querySelectorAll(".right");
    resultRight.forEach((desright) => {
        desright.textContent = Math.floor(Math.random() * (numberOfFace.value) +1)
    });
    const resultLeft = document.querySelectorAll(".left");
    resultLeft.forEach((desleft) => {
        desleft.textContent = Math.floor(Math.random() * (numberOfFace.value) +1)
    });

};

function score () {
    const resultFront = document.querySelectorAll(".front");
    resultFront.forEach((desfront) => {
        desfront.textContent = Math.floor(Math.random() * (numberOfFace.value) +1);
        //console.log(desfront.textContent);
        arrayResult.push(desfront.textContent);
        
    });
}
//console.log(arrayResult);

const diceSound = () => {
    const audio = new Audio();
    audio.src = "./sound/dice-sound.mp3";
    audio.play();
};

function showResult () {
    var arraySort = arrayResult.sort();
    
    //pour regrouper les données identiques dans des tableaux--------
    for (let i of arraySort){ 
        function tri(element){
            return element <= i && element >= i;
        }
    var newArraySort = arraySort.filter(tri);
    arrayCollect.push(newArraySort);
    }
    //console.log(arrayCollect);

    //Pour supprimer les tableaux en doublons ---------------------------
    function uniqBy(a, key) {
    var seen = {};
    return a.filter(function(item) {
        var k = key(item);
        return seen.hasOwnProperty(k) ? false : (seen[k] = true);
    })
    }

    a = arrayCollect
    arrayUniq = uniqBy(a, JSON.stringify)
    //console.log(arrayUniq);

    //insérer chaque occurence unique dans un dictionnaire (objet)
    const scoreResult = {};

    for (var i = 0; i<= arrayUniq.length - 1; i++) {  
        arrayUniq.forEach(result => { 
        scoreResult[arrayUniq[i][0]] = arrayUniq[i];     
        })
    };
    //console.log(scoreResult);

    //afficher la synthèse des scores dans le body
    for (const key in scoreResult){
    
        const showResult = document.getElementById("result");
        
        const showScore = document.createElement("div");
        showScore.classList.add("show")
        showResult.appendChild(showScore);

        const faceResult = document.createElement("div");
        faceResult.classList.add("faceresult");
        faceResult.textContent = key;
        showScore.appendChild(faceResult);

        const xTimes = document.createElement("div");
        xTimes.classList.add("xtimes");
        xTimes.textContent = "x" + scoreResult[key].length;
        showScore.appendChild(xTimes);
    };
    synthese.style.opacity = "1";
}

lancerBtn.addEventListener("click", () => {

    tapis.innerHTML = "";
    arrayResult.length = 0;
    arrayCollect.length = 0;
    resultId.innerHTML = "";
    tapis.classList.add("tapis");
    for (let i = 0; i< numberOfD.value; i++ ){
            playD()
    };
    score();
    diceSound();
    resultId.classList.add("result");
    showResult();
});




// for(let i in arraySort){
//     console.log("score: " + arrayResult[i]);
//     const showResult = document.getElementById("result");
//     const show1 = document.createElement("div");
//     show1.classList.add("show")
//     show1.textContent = arrayResult[i];
//     showResult.appendChild(show1);
// }



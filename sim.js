let numberOfD = document.getElementById("cursor-des");

const numberOfFace = document.getElementById("cursor-face");
    //console.log(numberOfFace.value);

const tapis = document.getElementById("tapis");
    //console.log(tapis);

const lancerBtn = document.getElementById("lancer-btn");
    //console.log(lancerBtn);

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

    const resultFront = document.querySelectorAll(".front");
    resultFront.forEach((desfront) => {
        desfront.textContent = Math.floor(Math.random() * (numberOfFace.value) +1)
        // const array = [];
        // array.push(desfront.textContent)
        // console.log(array);
        //console.log(desfront.innerText);
    });
        
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

const diceSound = () => {
    const audio = new Audio();
    audio.src = "./sound/dice-sound.mp3";
    audio.play();
}

lancerBtn.addEventListener("click", () => {

    tapis.innerHTML = "";
    tapis.classList.add("tapis");
    for (let i = 0; i< numberOfD.value; i++ ){
            playD()
    }
    diceSound();
});

//rassembler les scores

const front = document.querySelectorAll(".front");


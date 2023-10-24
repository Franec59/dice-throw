// import du détails des pouvoirs depuis pouvoirsLignees.js
import { quietus, diablerie, chaotis } from "/scripts/pouvoirsLignees.js";

const valideBtnClan = document.getElementById("valide_clan");
// délcarer la constante ici pour éviter la répétition du bouton.
const btnPower = document.createElement("button");
const btnHistory = document.createElement("button");
const tabAllClan =[];

//=====================================================================

const clanVampire = {
    clvp0 : ["Assamites", "Confrérie d'assassin fanatique", quietus],
    clvp1 : ["Nécromanciens", "Sorciers, magiciens vampires", diablerie],
    clvp2 : ["Seigneurs du Chaos", "Maitre de guerre, guerrier du Chaos, Elu de Khorne", chaotis],
}


// fonction qui affiche la lignée vampirique dans le DOM aléatoirement
function afficherClan(){
    const randomIndexClan = Math.floor(Math.random() * 3);
    console.log("random clan : ", randomIndexClan)
    const indexClanSelected = Object.values(clanVampire)[randomIndexClan];

    document.getElementById("clanVp").innerHTML = indexClanSelected[0];
    document.getElementById("resumeClan").innerHTML = "Description : " + indexClanSelected[1];
    
    //afficher le nom du pouvoir de lignée correspondant au clan.
    const powerName = Object.values(indexClanSelected[2])[0];
    document.getElementById("pouvoirVp").innerHTML = "Pouvoir spécifique : " +powerName;

};

//fonction pour afficher un bouton pour avoir le détail du pouvoir

function afficheBtnPower() {
    btnPower.innerHTML = "Cliquer pour détailler";
    btnPower.classList.add("btnDetail")
    document.getElementById("btnForPower").appendChild(btnPower);
};

function afficheBtnHistory() {
    btnHistory.innerHTML = "Cliquer pour détailler";
    btnHistory.classList.add("btnDetail")
    document.getElementById("btnForHistory").appendChild(btnHistory);
};


//Bouton clan
valideBtnClan.addEventListener("click", () => {
    
    afficherClan();
    afficheBtnHistory()
    afficheBtnPower();
});

//=====================================================================

// test avec l'objet clanvampire
// console.log("object clanvampire : ", Object.values(clanVampire)[0][1])

//afficher toutes les valeurs de l'objet clanVampire

function getAllClan(){
    for (const [key, value] of Object.entries(clanVampire)) {
        console.log(`${value[0]}`);
        tabAllClan.push(`${value[0]}`);
        
      }
};

getAllClan();
    console.log("tableau des lignées : " + tabAllClan);
    // console.table(tabAllClan);

// fonction pour afficher la liste des lignées dans le DOM.

function affAllClan(){
    document.getElementById("allClan").innerHTML = tabAllClan;
};

affAllClan();

//===================================================================
// test avec un construceur

class Lignee {
    constructor(clan, resume, pouvoir){
        this.clan = clan;
        this.resume = resume;
        this.pouvoir = pouvoir;
    }
};

const assamite = new Lignee ("Assamites", "Confrérie d'assassin fanatique", quietus );
const necromancien = new Lignee ("Nécromanciens", "Sorciers, magiciens vampires", diablerie );
const chaos = new Lignee ("Seigneurs du Chaos", "Maitre de guerre, guerrier du Chaos, Elu de Khorne", chaotis);

console.log( "assamite : ", assamite)

const tabLignee = [];
tabLignee.push(assamite, necromancien, chaos);
console.log("tableau :", tabLignee);
console.log("1 élément :", tabLignee[1].clan);
// console.log("tous les clans :", tabLignee.clan);

const ligneeName =[];
tabLignee.forEach((elt)=> 
    ligneeName.push(tabLignee[0])
);
console.log("tab list lignee : ", ligneeName);

// // fonction qui affiche la lignée vampirique dans le DOM aléatoirement

// function afficherLignee(){
//     const randomIndexLignee = Math.floor(Math.random() * 3);
//     console.log("random clan : ", randomIndexLignee)
//     const indexLigneeSelected = Object.values(clanVampire)[randomIndexClan];

//     document.getElementById("clanVp").innerHTML = indexClanSelected[0];
//     document.getElementById("resumeClan").innerHTML = "Description : " + indexClanSelected[1];
    
//     //afficher le nom du pouvoir de lignée correspondant au clan.
//     const powerName = Object.values(indexClanSelected[2])[0];
//     document.getElementById("pouvoirVp").innerHTML = "Pouvoir spécifique : " +powerName;

// };

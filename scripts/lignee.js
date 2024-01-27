// import des class ===
import { assamiteHy, necromancienHy, chaosHy, sethisteHy, enfantNuitHy } from './ligneeDescription.js';

import {quietus, diablerie, chaotis, sethisme, p_ombre, aucun, auspex, ronin, pantomime, 
    sanctis, cimeris, abysse, pervertis, mystification, bubanis, epervier, devoris, 
    tortured, globulis, lumens } from "./pouvoirsLignees.js";

import { martyrSanguin, armeDeSang } from "./pouvoirsLignees.js";

// variables & cie =================================

const valideBtnClan = document.getElementById("valide_clan");
// délcarer la constante ici pour éviter la répétition du bouton.
const btnPower = document.createElement("button");
const btnHistory = document.createElement("button");
const tabAllClan =[];
let clanSelected ="";

//=====================================================================
// Lignée vampirique ================================================

class Lignee {
    constructor(clan, resume, pouvoir){
        this.clan = clan;
        this.resume = resume;
        this.pouvoir = pouvoir;
    }
};

const assamite = new Lignee ("Assamites", "Confrérie d'assassin fanatique ...", quietus.powerName );
const necromancien = new Lignee ("Nécromanciens", "Sorciers, magiciens vampires ...", diablerie.powerName );
const chaos = new Lignee ("Seigneurs du Chaos", "Maitre de guerre, guerrier du Chaos, Elu de Khorne ...", chaotis.powerName);
const sethiste = new Lignee ("Sethiste", "Espions, Manipulateur, Agitateurs, Grands Prêtres, Séducteur ...", sethisme.powerName);
const enfantNuit = new Lignee ("Enfant de la Nuit", "Voleurs, Rôdeurs, Détrousseurs, Monte-en-l'air, cambrioleur ...", p_ombre.powerName);
const nosferatus = new Lignee ("Nosferatus", "Mendiants, Parias, Lèpreux, Maudits ...", aucun.powerName);
const gangrel = new Lignee ("Gangrel", "Voyageur, ambassadeur, protecteur des forêts ...", auspex.powerName);
const ssine = new Lignee ("Guerrier Ssine", "Ronin, guerrier sans clan, mercenaire, garde du corps ...", ronin.powerName);
const saltimbanque = new Lignee ("Saltimbanque", "Lanceur de couteau, bouffon, jongleurs et amuseurs de rue ...", pantomime.powerName);
const draculean = new Lignee ("Draculéans", "Noble acariatre, riche marchand avare, bourgeois vicieux, vieux banquier sénile ...", sanctis.powerName);
const cimerian = new Lignee ("Cimérians", "barbares, guerriers des steppes, peuplades du Grand-Est ...", cimeris.powerName);
const abysshai = new Lignee ("Abysshaï", "assamite rénégat revenu des abysses ...", abysse.powerName);
const cikariotte = new Lignee ("Cikariottes", "Prostituée, catin, séductrice, femme de compagnie, intrigante, espionne ...", pervertis.powerName);
const necrophosis = new Lignee ("Nécrophosis", "Les nettoyeurs, les maquilleurs de vérité, les détricoteurs de rumeurs ...", mystification.powerName);
const bubanos = new Lignee ("Bubanos", "Prêtre ou moine d'Arlam maudit, transformé en vampire ...", bubanis.powerName);
const falconidaes = new Lignee ("Falconidaes", "Faucons, voltigeurs pratiquant l'Art de la chasse ...", epervier.powerName);
const devoreur = new Lignee ("Dévoreurs d'âmes", "vampire possédé par un esprit qui veut survivre à travers son hôte...", devoris.powerName);
const ceraste = new Lignee ("Cérastes", "Les dépeceurs d’âmes, les profanateurs de chair, les prophètes de la souffrance...", tortured.powerName);
const reaper = new Lignee ("Blood-reaper", "Les moissonneurs de sang, Œnologue pervers, dandy enivré, collecteur de sang...", globulis.powerName);
const paladin = new Lignee ("Paladins de Néphégos", "Ordre fanatique, chevalier noir, guerrier vampire....", lumens.powerName);


// Rangement des lignées dans un tableau ==============
const tabLignee = [];
tabLignee.push(assamite, necromancien, chaos, sethiste, enfantNuit, nosferatus, gangrel, 
    ssine, saltimbanque, draculean, cimerian, abysshai, cikariotte, necrophosis, bubanos,
    falconidaes, devoreur, ceraste, reaper, paladin
    );

    //vérif tableau et accès à 1 élément ============================
        // console.log("tableau :", tabLignee);
        // console.log("1 élément :", tabLignee[1]);
        // console.log("tous les clans :", tabLignee.clan);

//=============================================================

// fonction qui affiche la lignée vampirique dans le DOM aléatoirement ==============
function afficherClan(){
    const randomIndexClan = Math.floor(Math.random() * 20);
        console.log("random clan : ", randomIndexClan)
    const indexClanSelected = Object.values(tabLignee)[randomIndexClan];
        console.log("lignée selected : ", indexClanSelected)


    document.getElementById("clanVp").innerHTML = indexClanSelected.clan;
    document.getElementById("resumeClan").innerHTML = indexClanSelected.resume;
    document.getElementById("pouvoirVp").innerHTML = "Pouvoir de lignée : " + indexClanSelected.pouvoir;
    
    clanSelected = indexClanSelected.clan
    console.log("clan selected = :", clanSelected)
    
};

//fonction afin d'afficher la description via le btn btnForHistory ======================

function affDescriptionClan(){
    if ( clanSelected == "Assamites"){
        document.getElementById("histoireduclan").innerHTML = assamiteHy.description;
    } else if ( clanSelected == "Nécromanciens"){
        document.getElementById("histoireduclan").innerHTML = necromancienHy.description;
    } else if ( clanSelected == "Seigneurs du Chaos"){
        document.getElementById("histoireduclan").innerHTML = chaosHy.description;
    } else if ( clanSelected == "Sethiste"){
        document.getElementById("histoireduclan").innerHTML = sethisteHy.description;
    } else if ( clanSelected == "Enfant de la Nuit") {
        document.getElementById("histoireduclan").innerHTML = enfantNuitHy.description;
    } else {
        document.getElementById("histoireduclan").innerHTML = "Clan sans histoire !!!";
    }

};

function afficheBtnHistory() {
    btnHistory.innerHTML = "Histoire du clan";
    btnHistory.classList.add("btnDetail");
    btnHistory.setAttribute("id","btnDescription");
    document.getElementById("btnForHistory").appendChild(btnHistory);

    const valideBtnDescription = document.getElementById("btnDescription");
    valideBtnDescription.addEventListener("click", () => {
        affDescriptionClan()
    });
};

//fonction pour afficher un bouton pour avoir le détail du pouvoir =================

function affPouvoirLignee(){
    if ( clanSelected == "Assamites"){
        document.getElementById("pouvoirdelignee").innerHTML = assamiteHy.description;
    } else {
        document.getElementById("pouvoirdelignee").innerHTML = "Clan sans pouvoir !!!";
    }
};


function afficheBtnPower() {
    btnPower.innerHTML = "Détails du pouvoir";
    btnPower.classList.add("btnDetail")
    document.getElementById("btnForPower").appendChild(btnPower);
};


//Bouton pour le choix aléatoire de la lignée ==========================
valideBtnClan.addEventListener("click", () => {
    
    afficherClan();
    afficheBtnHistory()
    afficheBtnPower();
    document.getElementById("histoireduclan").innerHTML = "";

});

//======================================================================================
//======================================================================================

// Affichage de toutes les lignées + select manuel via radio btn =============================

const getRadios = document.querySelectorAll('input'); //getRadios = tab car querySetectorAll
const getRadioSelected = document.querySelector('form');

//récuperer le choix du bouton radio ==========================

getRadioSelected.addEventListener("change", () => {
    for (var i=0; i<getRadios.length; i++ ){
        if ( getRadios[i].checked ) break;
    }
    console.log(getRadios[i].value);
    let radioSelected = getRadios[i].value;
    console.log(radioSelected);

    if (radioSelected == "assamite"){
        document.getElementById("affRadio").innerHTML = assamiteHy.description;
        document.getElementById("pouvoirVp2").innerHTML = "Pouvoir de lignée : " + assamite.pouvoir;
        
    } else if ( radioSelected == "necromancien" ){
        document.getElementById("affRadio").innerHTML = necromancienHy.description;
        document.getElementById("pouvoirVp2").innerHTML = "Pouvoir de lignée : " + necromancien.pouvoir;
        
    } else if ( radioSelected == "chaos" ){
        document.getElementById("affRadio").innerHTML = chaosHy.description;
        document.getElementById("pouvoirVp2").innerHTML = "Pouvoir de lignée : " + chaos.pouvoir;
    } else if ( radioSelected == "sethiste" ){
        document.getElementById("affRadio").innerHTML = sethisteHy.description;
        document.getElementById("pouvoirVp2").innerHTML = "Pouvoir de lignée : " + sethiste.pouvoir;
    } else if ( radioSelected == "enfantNuit" ){
        document.getElementById("affRadio").innerHTML = enfantNuitHy.description;
        document.getElementById("pouvoirVp2").innerHTML = "Pouvoir de lignée : " + enfantNuit.pouvoir;
    }

});

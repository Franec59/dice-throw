// import du détails des pouvoirs depuis pouvoirsLignees.js
import { quietus, diablerie, chaotis, sethisme, p_ombre, aucun, auspex, ronin, pantomime, 
    sanctis, cimeris, abysse, pervertis, mystification, bubanis, epervier, devoris, tortured,
    globulis, lumens
} from "/scripts/pouvoirsLignees.js";

const valideBtnClan = document.getElementById("valide_clan");
// délcarer la constante ici pour éviter la répétition du bouton.
const btnPower = document.createElement("button");
const btnHistory = document.createElement("button");
const tabAllClan =[];

//=====================================================================
// test avec un construceur

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

    //vérif objet ====================================  
    // console.log( "assamite : ", assamite)

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

// fonction qui affiche la lignée vampirique dans le DOM aléatoirement ==============
function afficherClan(){
    const randomIndexClan = Math.floor(Math.random() * 20);
        console.log("random clan : ", randomIndexClan)
    const indexClanSelected = Object.values(tabLignee)[randomIndexClan];
        console.log("lignée selected : ", indexClanSelected)


    document.getElementById("clanVp").innerHTML = indexClanSelected.clan;
    document.getElementById("resumeClan").innerHTML = indexClanSelected.resume;
    document.getElementById("pouvoirVp").innerHTML = "Pouvoir de lignée : " + indexClanSelected.pouvoir;
    
};

//fonction pour afficher un bouton pour avoir le détail du pouvoir =================

function afficheBtnPower() {
    btnPower.innerHTML = "Détails du pouvoir";
    btnPower.classList.add("btnDetail")
    document.getElementById("btnForPower").appendChild(btnPower);
};

function afficheBtnHistory() {
    btnHistory.innerHTML = "Histoire du clan";
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

// getAllClan();
//     console.log("tableau des lignées : " + tabAllClan);
    // console.table(tabAllClan);

// fonction pour afficher la liste des lignées dans le DOM.

// function affAllClan(){
//     document.getElementById("allClan").innerHTML = tabAllClan;
// };

// affAllClan();

//===================================================================
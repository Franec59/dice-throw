// pouvoirs Vampiriques =============================

class PouvoirsLignees {
    constructor(powerName){ 
        this.powerName = powerName
    }
};

const quietus = new PouvoirsLignees ( "Quiétus");
const diablerie = new PouvoirsLignees ( "Diablerie");
const chaotis = new PouvoirsLignees ("Chaotis");
const sethisme = new PouvoirsLignees ("Sethisme");
const p_ombre = new PouvoirsLignees ("Pouvoir de l'ombre");
const aucun = new PouvoirsLignees ("Aucun pouvoir de lignée en raison de sa malédiction");
const auspex = new PouvoirsLignees ("Auspex");
const ronin = new PouvoirsLignees ("La voie du Ronin");
const pantomime = new PouvoirsLignees ("Pantomime");
const sanctis = new PouvoirsLignees ("Sanctis");
const cimeris = new PouvoirsLignees ("Cimeris");
const abysse = new PouvoirsLignees ("Le Baiser de l'abysse");
const pervertis = new PouvoirsLignees ("Pervertis");
const mystification = new PouvoirsLignees ("Mystifications");
const bubanis = new PouvoirsLignees ("Bubanis");
const epervier = new PouvoirsLignees ("Les Faveurs de l'épervier");
const devoris = new PouvoirsLignees ("Amès Dévoris");
const tortured = new PouvoirsLignees ("Tortured Souls");
const globulis = new PouvoirsLignees ("Sanguiné Globulis");
const lumens = new PouvoirsLignees ("Néphégus Lumens");

//=============================================================
export {quietus, diablerie, chaotis, sethisme, p_ombre, aucun, auspex, ronin, pantomime, 
    sanctis, cimeris, abysse, pervertis, mystification, bubanis, epervier, devoris, 
    tortured, globulis, lumens };

// détails de chaque pouvoir ========================================================

class DisciplineOfQuietus {
    constructor(discipline, powerNiveau){
        this.discipline = discipline;
        this.powerNiveau = powerNiveau;
    }
};

const martyrSanguin = new DisciplineOfQuietus ("L'assamite peut empoissonner de la nourriture, un puit, un pichet d'eau, grâce à une simple goutte ou plus de son sang auquel il va conférer une mortalité foudroyante. Il lui suffit alors de s'entailler pour faire couler son venin.", "[4]");
// console.log("discipline2 : ", martyrSanguin.discipline )
// console.log("discipline3 : ", martyrSanguin.powerNiveau)

const armeDeSang = new DisciplineOfQuietus ("L’assamite peut maculer de sang une arme de son sang empoisonné afin d’en accroitre les dégâts. Chaque blessure ouverte contaminera son adversaire selon le même principe que le martyr sanguin.", "[5]");

// export ===============================================
export { martyrSanguin, armeDeSang };
// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
let date = new Date();
let heur = date.getHours(); 
let minite = date.getMinutes();
let seconde = date.getSeconds();

//Ajouter l'heure , minite , seconde  dans des varaiables

let degreHeur = 1 / 120;
let degreMinite = 1 / 10;
let degreSeconde = 6;


// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
let posiHeur =  (heur * 3600 + minite * 60 + seconde) * degreHeur;
let posiMinite = (minite * 60 + seconde) * degreMinite;
let posiSeconde = seconde * degreSeconde;

// Déplacer les aiguilles 
function demarrerLaMontre() {
  
    posiHeur += degreHeur;
    posiMinite += degreMinite;
    posiSeconde += degreSeconde;


	AIGUILLEHR.style.transform = `rotate(${posiHeur}deg)`;
	AIGUILLEMIN.style.transform = `rotate(${posiMinite}deg)`;
    AIGUILLESEC.style.transform = `rotate(${posiSeconde}deg)`;

}
// Exercuter la fonction chaque second

var interval = setInterval(demarrerLaMontre, 1000);
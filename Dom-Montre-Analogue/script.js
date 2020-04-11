// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");


// Déplacer les aiguilles 
function demarrerLaMontre() {
//Extraire l'heure actuel à l'aide de l'objet Date()

let date = new Date();

//Ajouter l'heure , minite , seconde  dans des varaiables
let sec = date.getSeconds() / 60;
let min = date.getMinutes() / 60;
let hr = (min + date.getHours()) / 12;


  let hrDegre =  hr + (3 / (360 * 60)); ;
  let minDegre =  min + (6 / (360 * 60));
  let secDegre = sec + (6 / 360);


// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

  AIGUILLEHR.style.transform = "rotate(" + hrDegre*360 + "deg)";
  AIGUILLEMIN.style.transform = "rotate(" + minDegre*360 + "deg)";
  AIGUILLESEC.style.transform = "rotate(" + secDegre*360 + "deg)";

}
// Exercuter la fonction chaque second
let interval = setInterval(demarrerLaMontre, 1000);
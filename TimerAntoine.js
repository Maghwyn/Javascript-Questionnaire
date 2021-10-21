let tmp = document.getElementById("tmp") //Créer l'emplacement sur la page du chronomètre.

let button1 = document.getElementById("button1") //Créer un bouton. (utilisé pour le gamemode 1)

let button2 = document.getElementById("button2") //Créer un bouton. (utilisé pour le gamemode 2)

//let button3 = document.getElementById("button3")

//let button4 = document.getElementById("button4")

//let button5 = document.getElementById("button5")

let Temps //Créer le chronomètre

Temps = window.localStorage.getItem("TimerTest", Temps);

function decrease(){ //Fonction qui fait baisser le chrono de 1 à chaque seconde. Le chrono démarre à 180. (adapté pour le gamemode 1)
    Temps = 180
    let intervalID = setInterval(conditionTimer, 1000);
}

function decrease2(){ //Fonction qui fait baisser le chrono de 1 à chaque seconde. Le chrono démarre à 20. (adapté pour le gamemode 2)
    Temps = 20
    let intervalID = setInterval(conditionTimer, 1000);
}

//function decrease2Bis() { //Fonction qui reset le chrono à chaque question.
//    Temps = 20;
//}

//function increase() {
//    Temps = Temps + 4;
//}

//function decrease3() {
//    Temps = Temps - 2;
//}

function conditionTimer() { //Fait beaucoup de chose : fait perdre la partie si le chrono atteind zero, empeche le chrono de dépasser 180, fait baisser le chrono et mets le chrono dans le localestorage chaque seconde.
    if (Temps < 0) {
    Temps = 0; /*faire perdre la partie*/
    } else if (Temps > 180){
    Temps = 180;
    } else {
    tmp.innerHTML = Temps--;}
    window.localStorage.setItem("Timer", Temps);
}

// function plusFour() { //Fonction qui rajoute 4 secondes au chrono.
//     if /*bonne réponse*/ {
//     Temps = Temps + 4;}
// }

// function minusTwo() { //Fonction qui enleve 2 secondes au chrono.
//     if /*mauvaise réponse*/ {
//     Temps = Temps - 2;}
// }

button1.addEventListener('click', decrease); //Active le bouton du gamemode 1.

button2.addEventListener('click', decrease2); //Active le bouton du gamemode 2.

//button3.addEventListener('click', decrease2Bis);

//button4.addEventListener('click', increase);

//button5.addEventListener('click', decrease3);

tmp.innerHTML = `Temps` //Active le temps.

let obj_json = {
    Timer: Temps
}

//for (let key in obj_json){
//    window.localStorage.setItem(key, obj_json[key]);
//}
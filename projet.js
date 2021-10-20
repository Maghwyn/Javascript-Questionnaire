///////////////////////////////////////////////
// I I I I I I I I I I I I I I I I I I I I I //
//////////////:INITIALISATION://///////////////


let menu = document.querySelector('#regles')
let clone = menu.cloneNode(true);
let bouton2 = document.querySelector('#button2')
bouton2.addEventListener('click',defi2)

let gameOn = false  // True = quizz en cours, False = quizz stoppé
let gameMode = 0    // 0 = Dans menu, 1 = Dans GM 1, 2 = Dans GM 2
let mistakes = 0    // Nombre d'erreurs dans l'itération
let nombre = 0      // Nombre aléatoire entre 1 et 2000
let repSelect = 0   // Réponse cliquée
let repSelect2 = 0  // Réponse cliquée (bis)
let score = 0       // Score dans l'itération  
let reponse = 0     
let broken = false  // Question cassée?

let center = document.querySelector('center')

let titre = document.body.querySelector('b')
titre.innerText = ('Le Super Quizz')


///////////////////////////////////////////////
// I I I I I I I I I I I I I I I I I I I I I //
/////////////////:FONCTIONS:///////////////////


function defi2(){  //Fonction du bouton défi 2 du menu principal
    gameOn = true
    gameMode = 2
    mistakes = 0
    console.log("defi2 appuyé")
    questions()
}
////////////////


function questions(){  //Fonction appelée à chaque nouvelle question, qui fait apparaître 
    menu.innerHTML = ('')
    whichQuestion()
//   reponse = [allQuestions[nombre].rep1,allQuestions[nombre].rep2,allQuestions[nombre].rep3,allQuestions[nombre].rep4]
//   if(allQuestions[nombre].goodrep == reponse[allQuestions[nombre].goodrep]){
    
    if(mistakes<5){
        menu.innerHTML = (allQuestions[nombre].quizz)

        let menu2 = document.createElement('ul')
        menu.appendChild(menu2)

          if(allQuestions[nombre].rep1 != undefined){
        let item1 = document.createElement('li');
        item1.innerText = (allQuestions[nombre].rep1)
        menu.appendChild(item1)
        item1.setAttribute('repSelect', 1)
        item1.addEventListener('click',checkAnswer)
        //item1.addEventListener('mousehover',changeColor)
        }

          if(allQuestions[nombre].rep2 != undefined){
        let item2 = document.createElement('li');
        item2.innerText = (allQuestions[nombre].rep2)
        menu.appendChild(item2)
        item2.setAttribute('repSelect', 2)
        item2.addEventListener('click',checkAnswer)
        //item2.addEventListener('mousehover',changeColor)
        }

          if(allQuestions[nombre].rep3 != undefined){
        let item3 = document.createElement('li');
        item3.innerText = (allQuestions[nombre].rep3)
        menu.appendChild(item3)
        item3.setAttribute('repSelect', 3)
        item3.addEventListener('click',checkAnswer)
        //item3.addEventListener('mousehover',changeColor)
        }

          if(allQuestions[nombre].rep4 != undefined){
        let item4 = document.createElement('li');
        item4.innerText = (allQuestions[nombre].rep4)
        menu.appendChild(item4)
        item4.setAttribute('repSelect', 4)
        item4.addEventListener('click',checkAnswer)
        //item4.addEventListener('mousehover',changeColor)
        }

        console.log("Mistakes :" + mistakes)
        console.log("Score :" + score)
        console.log("Right answer:" + allQuestions[nombre].goodrep)
        console.log("Question :" + nombre)

    } else {
       reset()
}}
////////////////


function checkAnswer(){
    repSelect2 = this.getAttribute('repSelect')
    console.log("Rep select" + repSelect2)
    console.log("Bonne rep:" + allQuestions[nombre].goodrep)
    if(allQuestions[nombre].goodrep == repSelect2)
        score = score + 1
    else  mistakes = mistakes + 1
    questions()
}
////////////////


function reset(){
    gameOn = false
    gameMode = 0
    mistakes = 0
    localStorage.setItem('score', score)
    score = 0
    menu.innerHTML = clone.innerHTML
    bouton2 = document.querySelector('#button2')
    bouton2.addEventListener('click',defi2)
}
////////////////


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function whichQuestion(){
    nombre = getRandomInt(1,2000)
  }
/////////////////
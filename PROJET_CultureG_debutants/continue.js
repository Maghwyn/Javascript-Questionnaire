var reload = localStorage.getItem('Reload')
let Q = null;
let BR = null;
let R1 = null;
let R2 = null;
let R3 = null;
let R4 = null;
let RA = null;
let WA = null;
let GM = null;
let CT = null;
let notTwice = 0;

if(reload == 1) {
    if(notTwice == 0) {
        getItems();
        test();
    }
}

function getItems() {
    console.log("hello")
    Q = localStorage.getItem('Question :') //
    BR = localStorage.getItem('Good rep :') //
    R1 = localStorage.getItem(2) //
    R2 = localStorage.getItem(3) //
    R3 = localStorage.getItem(4) //
    R4 = localStorage.getItem(5) //
    RA = localStorage.getItem('Wrong answers') //
    WA = localStorage.getItem('Right answers') //
    GM = localStorage.getItem('Current gamemode') //
    CT = localStorage.getItem('Current time left') //
}

function test() {

    fetchHome.innerHTML = ('');
    paragraph.innerHTML = `Bonne réponse : ${RA} | Mauvaise réponse : ${WA}`;
    goodAnswerCounter += RA;
    wrongAnswerCounter += WA;
    gameMode = GM;
    notTwice == 1

    createGiveUpButton();
    createPauseButton();


    timeLimit = CT;
    console.log(CT)
    if(gameMode == 1) {
        maximumSecond = 180;
    }else maximumSecond = 20;

    myInterval = setInterval(runTimer,1000)

    if(WA > 4 && GM == 2) { homePage(); return; }

    let answDocker = document.createElement('ul')

    let answContainer = [
        document.createElement('p'),
        document.createElement('p'),
        document.createElement('p'),  
        document.createElement('p')
    ]

    let answStyle = [
        document.createElement('button'),
        document.createElement('button'),
        document.createElement('button'),  
        document.createElement('button')
    ]

    let answerContent = [R1,R2,R3,R4];

    fetchHome.innerHTML = 'Question : ' + Q;
    fetchHome.appendChild(answDocker);

    for(let index = 0; index < answContainer.length; index++) {

        let fetchRightAnswer;
        if(answerContent[index].includes(BR)) fetchRightAnswer = 1;
        else fetchRightAnswer = 0;

        answStyle[index].innerHTML = answerContent[index];
        answStyle[index].setAttribute('answIndex', fetchRightAnswer);
        answStyle[index].setAttribute('type', 'button');
        answStyle[index].setAttribute("style", "background-color:white");
        answStyle[index].addEventListener('mouseover', getColorGreen);
        answStyle[index].addEventListener('mouseout', removeColor);
        answStyle[index].addEventListener('click', nextAction)
        answContainer[index].appendChild(answStyle[index])
        fetchHome.appendChild(answContainer[index])

        if(answerContent[index] == "Supprimer") answContainer[index].remove()         
    }
}
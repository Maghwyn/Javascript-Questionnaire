//GLOBAL FUNCTION
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function homePage(){
    localStorage.clear;
    wrongAnswerCounter = 0
    goodAnswerCounter = 0
    clearInterval(myInterval1);
    clearInterval(myInterval2);
    myInterval1 = null;
    myInterval2 = null;
    timeLimit1 = 120;
    timeLimit2 = 15;
    pause = false;
    addSecond = 0, subSecond = 0;
    tmp.textContent = "Waiting to start timer...";
    fetchHome.innerHTML = homeClone.innerHTML;
    challenge_1 = document.querySelector('#button1');
    challenge_1.addEventListener('click', initC1);
    challenge_2 = document.querySelector('#button2')
    challenge_2.addEventListener('click', initC2);
}

function getColor() {
    return this.style.color = "red"
}

function removeColor() {
    return this.style.color = "black"
}

//GLOBAL VARIABLE
let goodAnswerCounter = 0;
let wrongAnswerCounter = 0;
let timeNow = 0;
let number = 0;
const tmp = document.querySelector('#tmp');
tmp.textContent = "Waiting to start timer...";
let fetchHome = document.querySelector('#regles')
let homeClone = fetchHome.cloneNode(true);
let challenge_1 = document.querySelector('#button1')
challenge_1.addEventListener('click', initC1)
const titre = document.body.querySelector('b')
titre.innerText = ('Le Super Quizz')

let addSecond = 0, subSecond = 0;
let myInterval1;
let myInterval2;
let timeLimit1 = 120;
let maximumSecond1 = 180;
let gameMode = 0;
let pause = false;

//SPECIFIC FUNCTION
function timerChallenge() {

    if(pause == false) {
        if(timeLimit1 != 0) timeLimit1 = timeLimit1 + addSecond - subSecond;
        if(timeLimit1 > maximumSecond1) timeLimit1 = maximumSecond1;
        let minutes = Math.floor((timeLimit1 % 3600)/60);
        let seconds = Math.floor(timeLimit1 % 60)
        let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
        let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;
        
        tmp.textContent = displayMinutes + ':' + displaySeconds;

        if(timeLimit1 <= 0) {
            homePage();
            return 0;
        }else {
            timeLimit1--;
            addSecond = 0; subSecond = 0;
        }
    }else return; 
}

function initC1() {
    gameMode = 1;
    myInterval1 = setInterval(timerChallenge,1000);
    challenge1Action();
}

function challenge1Action(){
    fetchHome.innerHTML = ('')
    number = getRandomInt(1,2000)

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

    let answerContent = [
        allQuestions[number].rep1,
        allQuestions[number].rep2,
        allQuestions[number].rep3,
        allQuestions[number].rep4
    ]

    let answerArray = [];
    for(let index = 0; index < answContainer.length; index++) {
        if(answerContent[index] == undefined) answerArray.push("Supprimer");
        else answerArray.push(answerContent[index]) 
    }
    if(allQuestions[number].goodrep > answerArray.length) { challenge1Action(); console.log('wait ?')}

    answerArray.push(answerArray[allQuestions[number].goodrep - 1]);
    let answerRandom = [answerArray[0],answerArray[1],answerArray[2],answerArray[3]].sort( () => .5 - Math.random() );

    fetchHome.innerHTML = 'Question : ' + allQuestions[number].quizz;
    fetchHome.appendChild(answDocker);

    for(let index = 0; index < answContainer.length; index++) {

        let fetchRightAnswer = 0;
        if(answerRandom[index].includes(answerArray[answerArray.length-1])) fetchRightAnswer = 1;
        else fetchRightAnswer = 0;

        answStyle[index].innerHTML = answerRandom[index];
        answStyle[index].setAttribute('answIndex', fetchRightAnswer);
        answStyle[index].setAttribute('type', 'button');
        answStyle[index].addEventListener('mouseover', getColor);
        answStyle[index].addEventListener('mouseout', removeColor);
        answStyle[index].addEventListener('click', answChecker1)
        answContainer[index].appendChild(answStyle[index])
        fetchHome.appendChild(answContainer[index])

        if(answerRandom[index] == "Supprimer") answContainer[index].remove()          
    }
}

function answChecker1(){
    let answIndex = this.getAttribute('answIndex')
    if(allQuestions[number].goodrep == answIndex) {
        goodAnswerCounter += 1;
        addSecond += 2;
    }else {
        wrongAnswerCounter += 1;
        subSecond += 4;
    }

    localStorage.setItem('Good answer :', goodAnswerCounter);
    localStorage.setItem('Wrong answer :', wrongAnswerCounter);

    challenge1Action()
}
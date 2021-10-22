let fetchHome   = document.querySelector('#regles')
let challenge_1 = document.querySelector('#button1')
let challenge_2 = document.querySelector('#button2')
let homeClone   = fetchHome.cloneNode(true);
challenge_1.setAttribute("style", "background-color:white");
challenge_1.addEventListener('mouseover', getColorRed);
challenge_1.addEventListener('mouseout', removeColor);
challenge_1.addEventListener('click', initC1);
challenge_2.setAttribute("style", "background-color:white");
challenge_2.addEventListener('mouseover', getColorRed);
challenge_2.addEventListener('mouseout', removeColor);
challenge_2.addEventListener('click', initC2);

let goodAnswerCounter  = 0;
let wrongAnswerCounter = 0;

let arrayObjectJSON = [...allQuestions];
let questionNumber  = 0;
let fetchUniqueJSON = 0;
let random = 0;

let bannerCounter = document.querySelector("#div3")
let paragraph = document.createElement('p')
bannerCounter.appendChild(paragraph);

function initC1() {
  createGiveUpButton();
  createPauseButton();
  gameMode = 1;
  timeLimit = 120;
  maximumSecond = 180;
  myInterval = setInterval(runTimer,1000);
  challengeAction();
}

function initC2() {
    createGiveUpButton();
    createPauseButton();
    gameMode = 2;
    timeLimit = 20;
    maximumSecond = 20;
    myInterval = setInterval(runTimer,1000)
    challengeAction()
}

function challengeAction() {

    fetchHome.innerHTML = ('');
    if(wrongAnswerCounter > 4 && gameMode == 2) { homePage(); return; }

    random = randomUniqueJSON();

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
        allQuestions[random].rep1,
        allQuestions[random].rep2,
        allQuestions[random].rep3,
        allQuestions[random].rep4
    ]

    let answerArray = [];
    for(let index = 0; index < answContainer.length; index++) {
        if(answerContent[index] == undefined) answerArray.push("Supprimer");
        else answerArray.push(answerContent[index]) 
    }
    if(allQuestions[random].goodrep > answerArray.length) { challengeAction(); console.log('wait ?')}

    answerArray.push(answerArray[allQuestions[random].goodrep - 1]);
    let answerRandom = [answerArray[0],answerArray[1],answerArray[2],answerArray[3]].sort( () => .5 - Math.random() );

    fetchHome.innerHTML = 'Question : ' + allQuestions[random].quizz;
    fetchHome.appendChild(answDocker);

    for(let index = 0; index < answContainer.length; index++) {

        let fetchRightAnswer;
        if(answerRandom[index].includes(answerArray[answerArray.length-1])) fetchRightAnswer = 1;
        else fetchRightAnswer = 0;

        answStyle[index].innerHTML = answerRandom[index];
        answStyle[index].setAttribute('answIndex', fetchRightAnswer);
        answStyle[index].setAttribute('type', 'button');
        answStyle[index].setAttribute("style", "background-color:white");
        answStyle[index].addEventListener('mouseover', getColorGreen);
        answStyle[index].addEventListener('mouseout', removeColor);
        answStyle[index].addEventListener('click', nextAction)
        answContainer[index].appendChild(answStyle[index])
        fetchHome.appendChild(answContainer[index])

        if(answerRandom[index] == "Supprimer") answContainer[index].remove()         
    }
}

function dataAttribution(answIndex) {

  if(gameMode == 1) {
    if(answIndex == 1) { goodAnswerCounter  += 1; addSecond += 2; }
    else               { wrongAnswerCounter += 1; subSecond += 4; }
  }
  
  else if(gameMode == 2) {
    if(answIndex == 1) goodAnswerCounter  += 1;
    else               wrongAnswerCounter += 1;

    addSecond = maximumSecond;
  }


  paragraph.innerHTML = `Bonne réponse : ${goodAnswerCounter} | Mauvaise réponse : ${wrongAnswerCounter}`;
  localStorage.setItem('Good answer :', goodAnswerCounter);
  localStorage.setItem('Wrong answer :', wrongAnswerCounter);
}

function nextAction(){

    let answIndex = this.getAttribute('answIndex');
    dataAttribution(answIndex);
    challengeAction()
}
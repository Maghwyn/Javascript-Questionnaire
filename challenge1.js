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
    // stopTheTimer = false;
    clearInterval(myInterval1);
    clearInterval(myInterval2);
    myInterval1 = null;
    myInterval2 = null;
    timeLimit1 = 120;
    timeLimit2 = 15;
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
let bannerCounter = document.querySelector("#div3")
let paragraph = document.createElement('p')
paragraph.innerHTML = `${goodAnswerCounter} \f ${wrongAnswerCounter}`;//poser la question a chris
bannerCounter.appendChild(paragraph);


// let stopTheTimer = false;
let addSecond = 0, subSecond = 0;
let myInterval1;
let myInterval2;
let timeLimit1 = 120;

//SPECIFIC FUNCTION
function timerChallenge() {
    if(timeLimit1 != 0) timeLimit1 = timeLimit1 + addSecond - subSecond;
    let minutes = Math.floor((timeLimit1 % 3600)/60);
    let seconds = Math.floor(timeLimit1 % 60)
    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;
    
    tmp.textContent = displayMinutes + ':' + displaySeconds;

    if(timeLimit1 <= 0) {;
        homePage();
        // stopTheTimer = true;
        return 0;
    }else {
        timeLimit1--;
        addSecond = 0; subSecond = 0;
    }
}

function initC1() {
    myInterval1 = setInterval(timerChallenge,1000)
    challenge1Action();
}

function challenge1Action(){
    fetchHome.innerHTML = ('')
    number = getRandomInt(1,2000)

    // if(stopTheTimer == false) {
        let answDocker = document.createElement('ul')

        let answContainer = [
            document.createElement('li'),
            document.createElement('li'),
            document.createElement('li'),  
            document.createElement('li')
        ]

        let answer = [
            allQuestions[number].rep1,
            allQuestions[number].rep2,
            allQuestions[number].rep3,
            allQuestions[number].rep4
        ]

        fetchHome.innerHTML = 'Question : ' + allQuestions[number].quizz;
        fetchHome.appendChild(answDocker);

        for(let index = 0; index < answContainer.length; index++) {
            if(answer[index] == undefined || answer[index] == undefined) break;

            answContainer[index].innerHTML = answer[index];
            answContainer[index].setAttribute('answIndex', index + 1);
            answContainer[index].setAttribute('type', 'button');
            answContainer[index].addEventListener('mouseover', getColor);
            answContainer[index].addEventListener('mouseout', removeColor);
            answContainer[index].addEventListener('click', answChecker1)
            fetchHome.appendChild(answContainer[index])
        }
    // }else homePage()
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

    paragraph.innerHTML = `${goodAnswerCounter} \f ${wrongAnswerCounter}`;//qhy'jetzxyrgdhbyxrg
    localStorage.setItem('Good answer :', goodAnswerCounter);
    localStorage.setItem('Wrong answer :', wrongAnswerCounter);

    challenge1Action()
}


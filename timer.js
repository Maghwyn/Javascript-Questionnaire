const tmp = document.querySelector('#tmp');
tmp.textContent = "Waiting to start timer...";

let gameMode;
let myInterval;
let timeLimit;
let maximumSecond;
let addSecond = 0, subSecond = 0;
let pause = false;

function displayTimer() {

  let minutes = Math.floor((timeLimit % 3600)/60);
  let seconds = Math.floor(timeLimit % 60);
  let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
  let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;
  tmp.textContent = displayMinutes + ":" + displaySeconds;
}

function gameModeCondition() {

  if(timeLimit <= 0) {
      console.log('hello')

    if     (gameMode == 1) { homePage(); }
    else if(gameMode == 2) {

      timeLimit = maximumSecond; /**/ wrongAnswerCounter += 1;
      localStorage.setItem('Good answer :', goodAnswerCounter);
      localStorage.setItem('Wrong answer :', wrongAnswerCounter);
      challengeAction();
    }
  }else {
    timeLimit--; addSecond = 0; subSecond = 0;
  }
}


function runTimer() {
  
  if(pause == false) {

    if(timeLimit != 0)            timeLimit = timeLimit + addSecond - subSecond;
    if(timeLimit > maximumSecond) timeLimit = maximumSecond;
    displayTimer(); /**/ gameModeCondition();
  }else return; 
}
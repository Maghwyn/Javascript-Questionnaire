const tmp = document.querySelector('#tmp');
tmp.setAttribute("style","font-weight: bold");
tmp.textContent = "En attente du timer...";

let gameMode;
let myInterval;
let timeLimit;
let maximumSecond;
let addSecond = 0, subSecond = 0;
let pause = false;

function displayTimer() {

    console.log(timeLimit)
  let minutes = Math.floor((timeLimit % 3600)/60);
  let seconds = Math.floor(timeLimit % 60);
  let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
  let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;
  tmp.textContent = displayMinutes + ":" + displaySeconds;
}

function gameModeCondition() {

  if(timeLimit <= 0) {

    if     (gameMode == 1) { homePage(); }
    else if(gameMode == 2) {

      timeLimit = maximumSecond; /**/ wrongAnswerCounter += 1;
      paragraph.innerHTML = `Bonne réponse : ${goodAnswerCounter} | Mauvaise réponse : ${wrongAnswerCounter}`;
      localStorage.setItem('Right answers', goodAnswerCounter);
      localStorage.setItem('Wrong answers', wrongAnswerCounter);
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
    localStorage.setItem('Current time left', timeLimit)
  }else return; 
}
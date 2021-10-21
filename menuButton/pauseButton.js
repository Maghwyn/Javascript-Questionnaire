const useDivForReset = document.querySelector('#div2');
const pauseButton    = document.createElement('input');

function createPauseButton() {
    pauseButton.setAttribute('id','pauseButton');
    pauseButton.setAttribute('type','button');
    pauseButton.setAttribute('value','Pause ?');
    pauseButton.setAttribute('style','width:100%');
    pauseButton.addEventListener('click', pauseButtonAction);
    useDivForReset.appendChild(pauseButton); 
}

function pauseInterval() {
    pause = true;
    pauseButton.setAttribute('value','Continue ?');
}

function resumeInterval() {
    pause = false;
    pauseButton.setAttribute('value','Pause ?');
    if     (gameMode == 1) challenge1Action();
    else if(gameMode == 2) challenge2Action();
}

function pauseButtonAction() {
    if      (pause == false) return pauseInterval();
    else if (pause == true ) return resumeInterval();
}

createPauseButton();

const pauseButton    = document.createElement('input');

function createPauseButton() {
    const useDiv2ForReset = document.querySelector('#div2');
    pauseButton.setAttribute('id','pauseButton');
    pauseButton.setAttribute('type','button');
    pauseButton.setAttribute('value','Pause');
    pauseButton.setAttribute("style", "background-color:white");
    pauseButton.addEventListener('mouseover', getColorYellow);
    pauseButton.addEventListener('mouseout', removeColor);
    pauseButton.addEventListener('click', pauseButtonAction);
    useDiv2ForReset.appendChild(pauseButton); 
}

function pauseInterval() {
    pause = true;
    pauseButton.setAttribute('value','Reprendre');
}

function resumeInterval() {
    pause = false;
    pauseButton.setAttribute('value','Pause');
    challengeAction();
}

function pauseButtonAction() {
    if      (pause == false) return pauseInterval();
    else if (pause == true ) return resumeInterval();
}

function removePauseButton() {
    const useDiv2ForResetBis = document.querySelector('#div2');
    useDiv2ForResetBis.innerHTML = ('');
}

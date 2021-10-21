function createPauseButton() {
    const useDivForReset = document.querySelector('#div2');
    const pauseButton    = document.createElement('input');
    pauseButton.setAttribute('id','pauseButton');
    pauseButton.setAttribute('type','button');
    pauseButton.setAttribute('value','Pause ?');
    pauseButton.setAttribute('style','width:100%');
    pauseButton.addEventListener('click', pauseButtonAction);
    useDivForReset.appendChild(pauseButton); 
}

function pauseButtonAction() {
    window.alert('Not implemented yet.')
}

createPauseButton();

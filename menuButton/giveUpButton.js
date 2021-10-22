function createGiveUpButton() {
    const useDivForReset = document.querySelector('#div1');
    const giveUpButton   = document.createElement('input');
    giveUpButton.setAttribute('id','giveUpButton');
    giveUpButton.setAttribute('type','button');
    giveUpButton.setAttribute('value','Abandonner');
    giveUpButton.setAttribute("style", "background-color:white");
    giveUpButton.addEventListener('mouseover', getColorRed);
    giveUpButton.addEventListener('mouseout', removeColor);
    giveUpButton.addEventListener('click', homePage);
    useDivForReset.appendChild(giveUpButton); 
}

function removeGiveUpButton() {
    const useDivForResetBis = document.querySelector('#div1');
    useDivForResetBis.innerHTML = ('');
}

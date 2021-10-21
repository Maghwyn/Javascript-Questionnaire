function createGiveUpButton() {
    const useDivForReset = document.querySelector('#div1');
    const giveUpButton   = document.createElement('input');
    giveUpButton.setAttribute('id','giveUpButton');
    giveUpButton.setAttribute('type','button');
    giveUpButton.setAttribute('value','Give up ?');
    giveUpButton.setAttribute('style','width:100%');
    giveUpButton.addEventListener('click', homePage);
    useDivForReset.appendChild(giveUpButton); 
}

createGiveUpButton();

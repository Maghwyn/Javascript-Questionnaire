function createGiveUpButton() {
    const useDivForReset = document.querySelector('#div1');
    const giveUpButton   = document.createElement('input');
    giveUpButton.setAttribute('id','giveUpButton');
    giveUpButton.setAttribute('type','button');
    giveUpButton.setAttribute('value','Give up ?');
    giveUpButton.setAttribute('style','width:100%');
    giveUpButton.addEventListener('click', giveUpAction);
    useDivForReset.appendChild(giveUpButton); 
}

function giveUpAction() {
    getReset.innerHTML = ('');
    getReset.append(cloneReset);
    //Doesn't return an event on the Défi 1 and Défi 2
}

createGiveUpButton();

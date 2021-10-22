document.body.style.background = "AliceBlue";
const titre = document.body.querySelector('b');
titre.innerText = ('Le Super Quizz')

const containerTR = document.body.querySelectorAll('tr');
const challenge_1_Instruction = containerTR[0].querySelectorAll('td')
const challenge_2_Instruction = containerTR[2].querySelectorAll('td')
challenge_1_Instruction[1].innerHTML = ('');
challenge_2_Instruction[1].innerHTML = ('');

const c1_TEXT_1 = document.createTextNode("Vous avez 3 minutes pour repondre au maximum de question.");
const c1_TEXT_2 = document.createTextNode("- Une bonne réponse : +4 secondes.");
const c1_TEXT_3 = document.createTextNode("- Une mauvaise réponse : -2 secondes.");
const c1_TEXT_4 = document.createTextNode("- Le jeu s'arrête quand le temps arrive à 0.");
const c2_TEXT_1 = document.createTextNode("Vous avez 20 secondes par question.");
const c2_TEXT_2 = document.createTextNode("- Pas de pénalité de temps.");
const c2_TEXT_3 = document.createTextNode("- Au bout de 5 mauvaises réponses le jeu s'arrête.");

challenge_1_Instruction[1].appendChild(c1_TEXT_1)
challenge_1_Instruction[1].appendChild(document.createElement('br'));
challenge_1_Instruction[1].appendChild(c1_TEXT_2)
challenge_1_Instruction[1].appendChild(document.createElement('br'));
challenge_1_Instruction[1].appendChild(c1_TEXT_3)
challenge_1_Instruction[1].appendChild(document.createElement('br'));
challenge_1_Instruction[1].appendChild(c1_TEXT_4)
challenge_1_Instruction[1].appendChild(document.createElement('br'));

challenge_2_Instruction[1].appendChild(c2_TEXT_1)
challenge_2_Instruction[1].appendChild(document.createElement('br'));
challenge_2_Instruction[1].appendChild(c2_TEXT_2)
challenge_2_Instruction[1].appendChild(document.createElement('br'));
challenge_2_Instruction[1].appendChild(c2_TEXT_3)
challenge_2_Instruction[1].appendChild(document.createElement('br'));

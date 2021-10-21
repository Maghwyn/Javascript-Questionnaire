///////////////////////////////////////////////
// I I I I I I I I I I I I I I I I I I I I I //
//////////////:INITIALISATION://///////////////

let challenge_2 = document.querySelector('#button2')
challenge_2.addEventListener('click', initC2)

let timeLimit2 = 20;
const maximumSecond2 = 20;

///////////////////////////////////////////////
// I I I I I I I I I I I I I I I I I I I I I //
/////////////////:FONCTIONS:///////////////////

function timerChallenge2() {
  if(pause == false) {
    if(timeLimit2 != 0) timeLimit2 = timeLimit2 + addSecond;
    if(timeLimit2 > maximumSecond2) timeLimit2 = maximumSecond2;
    let minutes = Math.floor((timeLimit2 % 3600)/60);
    let seconds = Math.floor(timeLimit2 % 60)
    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;
    
    tmp.textContent = displayMinutes + ":" + displaySeconds;

    if(timeLimit2 <= 0) {
        wrongAnswerCounter += 1;
        localStorage.setItem('Good answer :', goodAnswerCounter);
        localStorage.setItem('Wrong answer :', wrongAnswerCounter);
        timeLimit2 = maximumSecond2;
        challenge2Action();
        return 0;
    }else {
        timeLimit2--;
        addSecond = 0;
    }
  }else {
    // timeLimit2 = maximumSecond2;
    // wrongAnswerCounter += 1;
    // localStorage.setItem('Good answer :', goodAnswerCounter);
    // localStorage.setItem('Wrong answer :', wrongAnswerCounter);
    return; 
  }
}

function initC2(){
  gameMode = 2;
  myInterval2 = setInterval(timerChallenge2,1000)
  challenge2Action()
}

function challenge2Action(){ 
    fetchHome.innerHTML = ('')
    number = getRandomInt(1,2000)
  
    if(wrongAnswerCounter<5){
      let answDocker = document.createElement('ul')

      let answContainer = [
          document.createElement('p'),
          document.createElement('p'),
          document.createElement('p'),  
          document.createElement('p')
      ]

      let answStyle = [
        document.createElement('button'),
        document.createElement('button'),
        document.createElement('button'),  
        document.createElement('button')
      ]

      let answerContent = [
          allQuestions[number].rep1,
          allQuestions[number].rep2,
          allQuestions[number].rep3,
          allQuestions[number].rep4
      ]

      let answerArray = [];
      for(let index = 0; index < answContainer.length; index++) {
          if(answerContent[index] == undefined) answerArray.push("Supprimer");
          else answerArray.push(answerContent[index]) 
      }
      if(allQuestions[number].goodrep > answerArray.length) { challenge2Action(); }

      answerArray.push(answerArray[allQuestions[number].goodrep - 1]);
      let answerRandom = [answerArray[0],answerArray[1],answerArray[2],answerArray[3]].sort( () => .5 - Math.random() );

      fetchHome.innerHTML = 'Question : ' + allQuestions[number].quizz;
      fetchHome.appendChild(answDocker);

      for(let index = 0; index < answContainer.length; index++) {

          let fetchRightAnswer = 0;
          if(answerRandom[index].includes(answerArray[answerArray.length-1])) fetchRightAnswer = 1;
          else fetchRightAnswer = 0;

          answStyle[index].innerHTML = answerRandom[index];
          answStyle[index].setAttribute('answIndex', fetchRightAnswer);
          answStyle[index].setAttribute('type', 'button');
          answStyle[index].addEventListener('mouseover', getColor);
          answStyle[index].addEventListener('mouseout', removeColor);
          answStyle[index].addEventListener('click', answChecker2)
          answContainer[index].appendChild(answStyle[index])
          fetchHome.appendChild(answContainer[index])

          if(answerRandom[index] == "Supprimer") answContainer[index].remove()          
      }
    }else homePage()
}

function answChecker2(){
  let answIndex = this.getAttribute('answIndex')
  if(answIndex == 1) goodAnswerCounter += 1;
  else wrongAnswerCounter += 1;

  addSecond = maximumSecond2;
  localStorage.setItem('Good answer :', goodAnswerCounter);
  localStorage.setItem('Wrong answer :', wrongAnswerCounter);

  challenge2Action()
}
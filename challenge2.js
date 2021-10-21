///////////////////////////////////////////////
// I I I I I I I I I I I I I I I I I I I I I //
//////////////:INITIALISATION://///////////////

let challenge_2 = document.querySelector('#button2')
challenge_2.addEventListener('click', initC2)

let timeLimit2 = 15;

///////////////////////////////////////////////
// I I I I I I I I I I I I I I I I I I I I I //
/////////////////:FONCTIONS:///////////////////

// timer();

function timerChallenge2() {
  if(timeLimit2 != 0) timeLimit2 = timeLimit2 + addSecond; //Cette ligne
  if(timeLimit2 > 15) timeLimit2 = 15;
  let minutes = Math.floor((timeLimit2 % 3600)/60);
  let seconds = Math.floor(timeLimit2 % 60)
  let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
  let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;
  
  tmp.textContent = displayMinutes + ":" + displaySeconds;

  if(timeLimit2 <= 0) {
      // stopTheTimer = true;
      homePage();
      return 0;
  }else {
      timeLimit2--;
      addSecond = 0;
  }
}

function initC2(){
  myInterval2 = setInterval(timerChallenge2,1000)
  challenge2Action()
}

function challenge2Action(){ 
  fetchHome.innerHTML = ('')
  number = getRandomInt(1,2000)
  
  // if(stopTheTimer == false) {
    if(wrongAnswerCounter<5){
      let answDocker = document.createElement('ul')

      let answContainer = [
          document.createElement('li'),
          document.createElement('li'),
          document.createElement('li'),  
          document.createElement('li')
      ]

      let answer = [
          allQuestions[number].rep1,
          allQuestions[number].rep2,
          allQuestions[number].rep3,
          allQuestions[number].rep4
      ]

      fetchHome.innerHTML = 'Question : ' + allQuestions[number].quizz;
      fetchHome.appendChild(answDocker);

      for(let index = 0; index < answContainer.length; index++) {
          if(answer[index] == undefined || answer[index] == undefined) break;

          answContainer[index].innerHTML = answer[index];
          answContainer[index].setAttribute('answIndex', index + 1);
          answContainer[index].setAttribute('type', 'button');
          answContainer[index].addEventListener('mouseover', getColor);
          answContainer[index].addEventListener('mouseout', removeColor);
          answContainer[index].addEventListener('click', answChecker2)
          fetchHome.appendChild(answContainer[index])
      }
    }else homePage()
  // }else homePage()
}

function answChecker2(){
  let answIndex = this.getAttribute('answIndex')
  if(allQuestions[number].goodrep == answIndex) goodAnswerCounter += 1;
  else wrongAnswerCounter += 1;

  addSecond = 15;
  localStorage.setItem('Good answer :', goodAnswerCounter);
  localStorage.setItem('Wrong answer :', wrongAnswerCounter);

  challenge2Action()
}
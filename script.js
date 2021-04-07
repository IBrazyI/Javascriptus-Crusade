

/* Intro Segemnt */
function introSequence(){

    let text = document.querySelector(".intro-text");
    let strText = text.textContent;
    let splitText =strText.split("");
    text.textContent ="";
    for(let i=0; i < splitText.length; i++){
        text.innerHTML += "<span>"+ splitText[i] + "</span>";
    }

    let char = 0;
    let timer =setInterval(onTick, 50);

    function onTick(){
        let span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++
        if(char === splitText.length){
            complete();
            return;
        }
    }

    function complete(){
        clearInterval(timer);
        timer = null;

        let introBtn = document.getElementById("intro-btn");
        introBtn.classList.remove("hide");
    }

    document.getElementById("intro-btn").addEventListener("click", revealTitle);

    function revealTitle() {
        document.getElementById("intro-page").classList.add('remove');
        document.getElementById("title-page").classList.remove('remove');
    };

    document.getElementById("title-btn").addEventListener("click", revealFaction);

    function revealFaction() {
        document.getElementById("title-page").classList.add('remove');
        document.getElementById("faction-selection").classList.remove('remove');
        document.getElementById("header").classList.remove('remove');
        document.querySelector(".talking-head-box").classList.remove('remove');
    };

}

/* Talking Head */

function talkingHead() {
    let talkingHead = document.querySelector(".talking-head-box");
    let talkingHeadTxt = document.querySelector("#talking-head-text");
    let talkingHeadBtn = document.querySelector("#talking-head-btn");
    talkingHeadTxt.innerHTML = talkingHeadGreet;
    talkingHeadBtn.addEventListener("click", talkingHeadFaction);
  
    function talkingHeadFaction() {
        talkingHeadTxt.innerHTML = talkingHeadGreetTwo;
        talkingHeadBtn.onclick = removeTalkingHead;
    };

    function removeTalkingHead() {
        talkingHead.classList.add('remove');
    };
}   

function enemyHead() {
    let talkingHead = document.querySelector(".talking-head-box");
    let talkingHeadTxt = document.querySelector("#talking-head-text");
    let talkingHeadBtn = document.querySelector("#talking-head-btn");
    talkingHeadTxt.innerHTML = talkingHeadEnemy;
    talkingHead.classList.remove('remove');
}

function headGame() {
    let talkingHead = document.querySelector(".talking-head-box");
    let talkingHeadTxt = document.querySelector("#talking-head-text");
    let talkingHeadBtn = document.querySelector("#talking-head-btn");
    talkingHeadTxt.innerHTML = talkingHeadGameTwo;
    talkingHead.classList.remove('remove'); 
    talkingHeadBtn.onclick = newText();

    function newText() {
        talkingHeadTxt.innerHTML = talkingHeadGame;
    };

    
}

/* Faction Selection */

function factionSelection() {
    let spaceMarines = document.getElementById("spacemarines-image");
    let adMech = document.getElementById("admech-image");
    let guard = document.getElementById("guard-image");

    
    spaceMarines.addEventListener('mouseenter', () => mouseEnterHandler("spacemarines"));
    spaceMarines.addEventListener('mouseleave', () => mouseLeaveHandler("spacemarines"));
    adMech.addEventListener('mouseenter', () => mouseEnterHandler("admech"));
    adMech.addEventListener('mouseleave', () => mouseLeaveHandler("admech"));
    guard.addEventListener('mouseenter', () => mouseEnterHandler("guard"));
    guard.addEventListener('mouseleave', () => mouseLeaveHandler("guard"));

    
    function mouseEnterHandler(name) {
        const title = document.getElementById(`${name}-title`);
        const info = document.getElementById(`${name}-info`);
        title.classList.add('remove');
        info.classList.remove('remove');
        info.innerHTML = faction[name];
        info.style.backgroundColor = "#b6b5b591";
    }

    function mouseLeaveHandler(name) {
        const title = document.getElementById(`${name}-title`);
        const info = document.getElementById(`${name}-info`);
        title.classList.remove('remove');
        info.classList.add('remove');
    }

    spaceMarines.addEventListener("click", () => factionSelected("spacemarines"));
    adMech.addEventListener("click", () => factionSelected("admech")); 
    guard.addEventListener("click",() => factionSelected("guard"));

    function factionSelected(name) {
        document.getElementById("faction-selection").classList.add('remove');
        document.getElementById("enemy-selection").classList.remove('remove');
        localStorage.setItem("selectedFaction", name);
        console.log(localStorage);
    };
    
}

function enemySelection() {
    let orks = document.getElementById("orks-image");
    let chaos = document.getElementById("chaos-image");
    let tyranids = document.getElementById("tyranids-image");

    orks.addEventListener('mouseenter', () => mouseEnterHandler("orks"));
    orks.addEventListener('mouseleave', () => mouseLeaveHandler("orks"));
    chaos.addEventListener('mouseenter', () => mouseEnterHandler("chaos"));
    chaos.addEventListener('mouseleave', () => mouseLeaveHandler("chaos"));
    tyranids.addEventListener('mouseenter', () => mouseEnterHandler("tyranids"));
    tyranids.addEventListener('mouseleave', () => mouseLeaveHandler("tyranids"));

    function mouseEnterHandler(name) {
        const title = document.getElementById(`${name}-title`);
        const info = document.getElementById(`${name}-info`);
        title.classList.add('remove');
        info.classList.remove('remove');
        info.innerHTML = enemies[name];
        info.style.backgroundColor = "#b6b5b591";
    }

    function mouseLeaveHandler(name) {
        const title = document.getElementById(`${name}-title`);
        const info = document.getElementById(`${name}-info`);
        title.classList.remove('remove');
        info.classList.add('remove');
    }

    orks.addEventListener("click", () => enemySelected("orks"));
    chaos.addEventListener("click", () => enemySelected("chaos")); 
    tyranids.addEventListener("click",() => enemySelected("tyranids"));

    function enemySelected(name) {
        document.getElementById("enemy-selection").classList.add('remove');
        document.getElementById("game-area").classList.remove('remove');
        localStorage.setItem("selectedEnemy", name);
        console.log(localStorage);
    };

}

/* Game */ 
function campaignSelection() {
    let campaign = localStorage.getItem("selectedFaction") + localStorage.getItem("selectedEnemy");
    console.log(campaign)


 switch(campaign) {
    case 'spacemarinesorks':
        campaign = spaceMarinesVsOrks();
        break;
    case 'spacemarineschaos':
        campaign = spaceMarinesVsChaos();
        break;
    case 'spacemarinestyranids':
        campaign = spaceMarinesVsTyranids();
        break;
    case 'admechorks':
        campaign = admechsVsOrks();
        break;
    case 'admechchaos':
        campaign = admechVsChaos();
        break;
    case 'admechtyranids':
        campaign = admechVsTyranids();
        break; 
    case 'guardorks':
        campaign = guardVsOrks();
        break;
    case 'guardchaos':
        campaign = guardVsChaos();
        break;
    case 'guardtyranids':
        campaign = guardVsTyranids();
        break;
    }
};

function spaceMarinesVsOrks() {
    let question = document.querySelector(".question-box");
    let answerOne = document.querySelector(".answer-one");
    let answerTwo = document.querySelector(".answer-two");
    let answerThree =  document.querySelector(".answer-three");
    let i = 0;
    let spaceMarineHealth = 125;
    let defence = 0;
    let optionOne = spaceMarinesVsOrksQuestions[i].choiceOnePower;
    let optionTwo = spaceMarinesVsOrksQuestions[i].choiceTwoPower;
    let optionThree = spaceMarinesVsOrksQuestions[i].choiceThreePower;

    console.log("start game");
    console.log("starting health",spaceMarineHealth);
    nextQuestion();
    
   

   function nextQuestion() {

    question.innerHTML = spaceMarinesVsOrksQuestions[i].question;
    answerOne.innerHTML = spaceMarinesVsOrksQuestions[i].choiceOne;
    answerTwo.innerHTML = spaceMarinesVsOrksQuestions[i].choiceTwo;
    answerThree.innerHTML = spaceMarinesVsOrksQuestions[i].choiceThree;
    attack = spaceMarinesVsOrksQuestions[i].questionPower;
    optionOne = spaceMarinesVsOrksQuestions[i].choiceOnePower;  
    optionTwo = spaceMarinesVsOrksQuestions[i].choiceTwoPower;
    optionThree = spaceMarinesVsOrksQuestions[i].choiceThreePower;

   answerOne.onclick = function(){defence = optionOne; fight()};
   answerTwo.onclick = function(){defence = optionTwo; fight()}; 
   answerThree.onclick = function(){defence = optionThree; fight()}; 
  
   };

   function fight() {
       console.log("current health", spaceMarineHealth);
       console.log("attacked with", attack);
       console.log("defended with", defence);
       spaceMarineHealth = spaceMarineHealth - (attack - defence);
       console.log("new health",spaceMarineHealth);

       if(spaceMarineHealth <= 0) {
           defeatPage();
       }  
       
       if(i === 4 && spaceMarineHealth > 0){
           victoryPage();    
       } else if (i < spaceMarinesVsOrksQuestions.length){
           i++;
           console.log("next question: " + (i+1));
           nextQuestion();
           }
    };
    
    function victoryPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".victory-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

    function defeatPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".defeat-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

}

function spaceMarinesVsChaos() {
    let question = document.querySelector(".question-box");
    let answerOne = document.querySelector(".answer-one");
    let answerTwo = document.querySelector(".answer-two");
    let answerThree =  document.querySelector(".answer-three");
    let i = 0;
    let spaceMarineHealth = 125;
    let defence = 0;
    let optionOne = spaceMarinesVsOrksQuestions[i].choiceOnePower;
    let optionTwo = spaceMarinesVsOrksQuestions[i].choiceTwoPower;
    let optionThree = spaceMarinesVsOrksQuestions[i].choiceThreePower;

    console.log("start game");
    console.log("starting health",spaceMarineHealth);
    nextQuestion();
    
   

   function nextQuestion() {

    question.innerHTML = spaceMarinesVsOrksQuestions[i].question;
    answerOne.innerHTML = spaceMarinesVsOrksQuestions[i].choiceOne;
    answerTwo.innerHTML = spaceMarinesVsOrksQuestions[i].choiceTwo;
    answerThree.innerHTML = spaceMarinesVsOrksQuestions[i].choiceThree;
    attack = spaceMarinesVsOrksQuestions[i].questionPower;
    optionOne = spaceMarinesVsOrksQuestions[i].choiceOnePower;  
    optionTwo = spaceMarinesVsOrksQuestions[i].choiceTwoPower;
    optionThree = spaceMarinesVsOrksQuestions[i].choiceThreePower;

   answerOne.onclick = function(){defence = optionOne; fight()};
   answerTwo.onclick = function(){defence = optionTwo; fight()}; 
   answerThree.onclick = function(){defence = optionThree; fight()}; 
  
   };

   function fight() {
       console.log("current health", spaceMarineHealth);
       console.log("attacked with", attack);
       console.log("defended with", defence);
       spaceMarineHealth = spaceMarineHealth - (attack - defence);
       console.log("new health",spaceMarineHealth);

       if(spaceMarineHealth <= 0) {
           defeatPage();
       }  
       
       if(i === 4 && spaceMarineHealth > 0){
           victoryPage();    
       } else if (i < spaceMarinesVsOrksQuestions.length){
           i++;
           console.log("next question: " + (i+1));
           nextQuestion();
           }
    };
    
    function victoryPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".victory-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

    function defeatPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".defeat-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

}

function spaceMarinesVsTyranids() {
    let question = document.querySelector(".question-box");
    let answerOne = document.querySelector(".answer-one");
    let answerTwo = document.querySelector(".answer-two");
    let answerThree =  document.querySelector(".answer-three");
    let i = 0;
    let spaceMarineHealth = 125;
    let defence = 0;
    let optionOne = spaceMarinesVsOrksQuestions[i].choiceOnePower;
    let optionTwo = spaceMarinesVsOrksQuestions[i].choiceTwoPower;
    let optionThree = spaceMarinesVsOrksQuestions[i].choiceThreePower;

    console.log("start game");
    console.log("starting health",spaceMarineHealth);
    nextQuestion();
    
   

   function nextQuestion() {

    question.innerHTML = spaceMarinesVsOrksQuestions[i].question;
    answerOne.innerHTML = spaceMarinesVsOrksQuestions[i].choiceOne;
    answerTwo.innerHTML = spaceMarinesVsOrksQuestions[i].choiceTwo;
    answerThree.innerHTML = spaceMarinesVsOrksQuestions[i].choiceThree;
    attack = spaceMarinesVsOrksQuestions[i].questionPower;
    optionOne = spaceMarinesVsOrksQuestions[i].choiceOnePower;  
    optionTwo = spaceMarinesVsOrksQuestions[i].choiceTwoPower;
    optionThree = spaceMarinesVsOrksQuestions[i].choiceThreePower;

   answerOne.onclick = function(){defence = optionOne; fight()};
   answerTwo.onclick = function(){defence = optionTwo; fight()}; 
   answerThree.onclick = function(){defence = optionThree; fight()}; 
  
   };

   function fight() {
       console.log("current health", spaceMarineHealth);
       console.log("attacked with", attack);
       console.log("defended with", defence);
       spaceMarineHealth = spaceMarineHealth - (attack - defence);
       console.log("new health",spaceMarineHealth);

       if(spaceMarineHealth <= 0) {
           defeatPage();
       }  
       
       if(i === 4 && spaceMarineHealth > 0){
           victoryPage();    
       } else if (i < spaceMarinesVsOrksQuestions.length){
           i++;
           console.log("next question: " + (i+1));
           nextQuestion();
           }
    };
    
    function victoryPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".victory-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

    function defeatPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".defeat-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

}

function adMechVsOrks() {
    let question = document.querySelector(".question-box");
    let answerOne = document.querySelector(".answer-one");
    let answerTwo = document.querySelector(".answer-two");
    let answerThree =  document.querySelector(".answer-three");
    let i = 0;
    let adMechHealth = 100;
    let defence = 0;
    let optionOne = adMechVsOrksQuestions[i].choiceOnePower;
    let optionTwo = adMechVsOrksQuestions[i].choiceTwoPower;
    let optionThree = adMechVsOrksQuestions[i].choiceThreePower;

    console.log("start game");
    console.log("starting health",adMechHealth);
    nextQuestion();
    
   

   function nextQuestion() {

    question.innerHTML = adMechVsOrksQuestions[i].question;
    answerOne.innerHTML = adMechVsOrksQuestions[i].choiceOne;
    answerTwo.innerHTML = adMechVsOrksQuestions[i].choiceTwo;
    answerThree.innerHTML = adMechVsOrksQuestions[i].choiceThree;
    attack = adMechVsOrksQuestions[i].questionPower;
    optionOne = adMechVsOrksQuestions[i].choiceOnePower;  
    optionTwo = adMechVsOrksQuestions[i].choiceTwoPower;
    optionThree = adMechVsOrksQuestions[i].choiceThreePower;

   answerOne.onclick = function(){defence = optionOne; fight()};
   answerTwo.onclick = function(){defence = optionTwo; fight()}; 
   answerThree.onclick = function(){defence = optionThree; fight()}; 
  
   };

   function fight() {
       console.log("current health", adMechHealth);
       console.log("attacked with", attack);
       console.log("defended with", defence);
       adMechHealth = adMechHealth - (attack - defence);
       console.log("new health",adMechHealth);

       if(adMechHealth <= 0) {
           defeatPage();
       }  
       
       if(i === 4 && adMechHealth > 0){
           victoryPage();    
       } else if (i < adMechHealth.length){
           i++;
           console.log("next question: " + (i+1));
           nextQuestion();
           }
    };
    
    function victoryPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".victory-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

    function defeatPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".defeat-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

}

function adMechVsChaos() {
    let question = document.querySelector(".question-box");
    let answerOne = document.querySelector(".answer-one");
    let answerTwo = document.querySelector(".answer-two");
    let answerThree =  document.querySelector(".answer-three");
    let i = 0;
    let spaceMarineHealth = 125;
    let defence = 0;
    let optionOne = spaceMarinesVsOrksQuestions[i].choiceOnePower;
    let optionTwo = spaceMarinesVsOrksQuestions[i].choiceTwoPower;
    let optionThree = spaceMarinesVsOrksQuestions[i].choiceThreePower;

    console.log("start game");
    console.log("starting health",spaceMarineHealth);
    nextQuestion();
    
   

   function nextQuestion() {

    question.innerHTML = spaceMarinesVsOrksQuestions[i].question;
    answerOne.innerHTML = spaceMarinesVsOrksQuestions[i].choiceOne;
    answerTwo.innerHTML = spaceMarinesVsOrksQuestions[i].choiceTwo;
    answerThree.innerHTML = spaceMarinesVsOrksQuestions[i].choiceThree;
    attack = spaceMarinesVsOrksQuestions[i].questionPower;
    optionOne = spaceMarinesVsOrksQuestions[i].choiceOnePower;  
    optionTwo = spaceMarinesVsOrksQuestions[i].choiceTwoPower;
    optionThree = spaceMarinesVsOrksQuestions[i].choiceThreePower;

   answerOne.onclick = function(){defence = optionOne; fight()};
   answerTwo.onclick = function(){defence = optionTwo; fight()}; 
   answerThree.onclick = function(){defence = optionThree; fight()}; 
  
   };

   function fight() {
       console.log("current health", spaceMarineHealth);
       console.log("attacked with", attack);
       console.log("defended with", defence);
       spaceMarineHealth = spaceMarineHealth - (attack - defence);
       console.log("new health",spaceMarineHealth);

       if(spaceMarineHealth <= 0) {
           defeatPage();
       }  
       
       if(i === 4 && spaceMarineHealth > 0){
           victoryPage();    
       } else if (i < spaceMarinesVsOrksQuestions.length){
           i++;
           console.log("next question: " + (i+1));
           nextQuestion();
           }
    };
    
    function victoryPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".victory-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

    function defeatPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".defeat-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

}

function adMechVsTyranids() {
    let question = document.querySelector(".question-box");
    let answerOne = document.querySelector(".answer-one");
    let answerTwo = document.querySelector(".answer-two");
    let answerThree =  document.querySelector(".answer-three");
    let i = 0;
    let spaceMarineHealth = 125;
    let defence = 0;
    let optionOne = spaceMarinesVsOrksQuestions[i].choiceOnePower;
    let optionTwo = spaceMarinesVsOrksQuestions[i].choiceTwoPower;
    let optionThree = spaceMarinesVsOrksQuestions[i].choiceThreePower;

    console.log("start game");
    console.log("starting health",spaceMarineHealth);
    nextQuestion();
    
   

   function nextQuestion() {

    question.innerHTML = spaceMarinesVsOrksQuestions[i].question;
    answerOne.innerHTML = spaceMarinesVsOrksQuestions[i].choiceOne;
    answerTwo.innerHTML = spaceMarinesVsOrksQuestions[i].choiceTwo;
    answerThree.innerHTML = spaceMarinesVsOrksQuestions[i].choiceThree;
    attack = spaceMarinesVsOrksQuestions[i].questionPower;
    optionOne = spaceMarinesVsOrksQuestions[i].choiceOnePower;  
    optionTwo = spaceMarinesVsOrksQuestions[i].choiceTwoPower;
    optionThree = spaceMarinesVsOrksQuestions[i].choiceThreePower;

   answerOne.onclick = function(){defence = optionOne; fight()};
   answerTwo.onclick = function(){defence = optionTwo; fight()}; 
   answerThree.onclick = function(){defence = optionThree; fight()}; 
  
   };

   function fight() {
       console.log("current health", spaceMarineHealth);
       console.log("attacked with", attack);
       console.log("defended with", defence);
       spaceMarineHealth = spaceMarineHealth - (attack - defence);
       console.log("new health",spaceMarineHealth);

       if(spaceMarineHealth <= 0) {
           defeatPage();
       }  
       
       if(i === 4 && spaceMarineHealth > 0){
           victoryPage();    
       } else if (i < spaceMarinesVsOrksQuestions.length){
           i++;
           console.log("next question: " + (i+1));
           nextQuestion();
           }
    };
    
    function victoryPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".victory-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

    function defeatPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".defeat-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

}

function guardVsOrks() {
    let question = document.querySelector(".question-box");
    let answerOne = document.querySelector(".answer-one");
    let answerTwo = document.querySelector(".answer-two");
    let answerThree =  document.querySelector(".answer-three");
    let i = 0;
    let guardHealth = 75;
    let defence = 0;
    let optionOne = guardVsOrksQuestions[i].choiceOnePower;
    let optionTwo = guardVsOrksQuestions[i].choiceTwoPower;
    let optionThree = guardVsOrksQuestions[i].choiceThreePower;

    console.log("start game");
    console.log("starting health",guardHealth);
    nextQuestion();
    
   

   function nextQuestion() {

    question.innerHTML = guardVsOrksQuestions[i].question;
    answerOne.innerHTML = guardVsOrksQuestions[i].choiceOne;
    answerTwo.innerHTML = guardVsOrksQuestions[i].choiceTwo;
    answerThree.innerHTML = guardVsOrksQuestions[i].choiceThree;
    attack = guardVsOrksQuestions[i].questionPower;
    optionOne = guardVsOrksQuestions[i].choiceOnePower;  
    optionTwo = guardVsOrksQuestions[i].choiceTwoPower;
    optionThree = guardVsOrksQuestions[i].choiceThreePower;

   answerOne.onclick = function(){defence = optionOne; fight()};
   answerTwo.onclick = function(){defence = optionTwo; fight()}; 
   answerThree.onclick = function(){defence = optionThree; fight()}; 
  
   };

   function fight() {
       console.log("current health", guardHealth);
       console.log("attacked with", attack);
       console.log("defended with", defence);
       guardHealth = guardHealth - (attack - defence);
       console.log("new health",guardHealth);

       if(guardHealth <= 0) {
           defeatPage();
       }  
       
       if(i === 4 && guardHealth > 0){
           victoryPage();    
       } else if (i < guardVsOrksQuestions.length){
           i++;
           console.log("next question: " + (i+1));
           nextQuestion();
           }
    };
    
    function victoryPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".victory-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

    function defeatPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".defeat-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

}

function guardVsChaos() {
    let question = document.querySelector(".question-box");
    let answerOne = document.querySelector(".answer-one");
    let answerTwo = document.querySelector(".answer-two");
    let answerThree =  document.querySelector(".answer-three");
    let i = 0;
    let spaceMarineHealth = 125;
    let defence = 0;
    let optionOne = spaceMarinesVsOrksQuestions[i].choiceOnePower;
    let optionTwo = spaceMarinesVsOrksQuestions[i].choiceTwoPower;
    let optionThree = spaceMarinesVsOrksQuestions[i].choiceThreePower;

    console.log("start game");
    console.log("starting health",spaceMarineHealth);
    nextQuestion();
    
   

   function nextQuestion() {

    question.innerHTML = spaceMarinesVsOrksQuestions[i].question;
    answerOne.innerHTML = spaceMarinesVsOrksQuestions[i].choiceOne;
    answerTwo.innerHTML = spaceMarinesVsOrksQuestions[i].choiceTwo;
    answerThree.innerHTML = spaceMarinesVsOrksQuestions[i].choiceThree;
    attack = spaceMarinesVsOrksQuestions[i].questionPower;
    optionOne = spaceMarinesVsOrksQuestions[i].choiceOnePower;  
    optionTwo = spaceMarinesVsOrksQuestions[i].choiceTwoPower;
    optionThree = spaceMarinesVsOrksQuestions[i].choiceThreePower;

   answerOne.onclick = function(){defence = optionOne; fight()};
   answerTwo.onclick = function(){defence = optionTwo; fight()}; 
   answerThree.onclick = function(){defence = optionThree; fight()}; 
  
   };

   function fight() {
       console.log("current health", spaceMarineHealth);
       console.log("attacked with", attack);
       console.log("defended with", defence);
       spaceMarineHealth = spaceMarineHealth - (attack - defence);
       console.log("new health",spaceMarineHealth);

       if(spaceMarineHealth <= 0) {
           defeatPage();
       }  
       
       if(i === 4 && spaceMarineHealth > 0){
           victoryPage();    
       } else if (i < spaceMarinesVsOrksQuestions.length){
           i++;
           console.log("next question: " + (i+1));
           nextQuestion();
           }
    };
    
    function victoryPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".victory-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

    function defeatPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".defeat-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

}

function guardVsTyranids() {
    let question = document.querySelector(".question-box");
    let answerOne = document.querySelector(".answer-one");
    let answerTwo = document.querySelector(".answer-two");
    let answerThree =  document.querySelector(".answer-three");
    let i = 0;
    let spaceMarineHealth = 125;
    let defence = 0;
    let optionOne = spaceMarinesVsOrksQuestions[i].choiceOnePower;
    let optionTwo = spaceMarinesVsOrksQuestions[i].choiceTwoPower;
    let optionThree = spaceMarinesVsOrksQuestions[i].choiceThreePower;

    console.log("start game");
    console.log("starting health",spaceMarineHealth);
    nextQuestion();
    
   

   function nextQuestion() {

    question.innerHTML = spaceMarinesVsOrksQuestions[i].question;
    answerOne.innerHTML = spaceMarinesVsOrksQuestions[i].choiceOne;
    answerTwo.innerHTML = spaceMarinesVsOrksQuestions[i].choiceTwo;
    answerThree.innerHTML = spaceMarinesVsOrksQuestions[i].choiceThree;
    attack = spaceMarinesVsOrksQuestions[i].questionPower;
    optionOne = spaceMarinesVsOrksQuestions[i].choiceOnePower;  
    optionTwo = spaceMarinesVsOrksQuestions[i].choiceTwoPower;
    optionThree = spaceMarinesVsOrksQuestions[i].choiceThreePower;

   answerOne.onclick = function(){defence = optionOne; fight()};
   answerTwo.onclick = function(){defence = optionTwo; fight()}; 
   answerThree.onclick = function(){defence = optionThree; fight()}; 
  
   };

   function fight() {
       console.log("current health", spaceMarineHealth);
       console.log("attacked with", attack);
       console.log("defended with", defence);
       spaceMarineHealth = spaceMarineHealth - (attack - defence);
       console.log("new health",spaceMarineHealth);

       if(spaceMarineHealth <= 0) {
           defeatPage();
       }  
       
       if(i === 4 && spaceMarineHealth > 0){
           victoryPage();    
       } else if (i < spaceMarinesVsOrksQuestions.length){
           i++;
           console.log("next question: " + (i+1));
           nextQuestion();
           }
    };
    
    function victoryPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".victory-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

    function defeatPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".defeat-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

}
introSequence();
talkingHead();
factionSelection();
enemySelection();
campaignSelection();
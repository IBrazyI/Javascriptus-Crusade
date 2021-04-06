

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
const campaign = localStorage.getItem("selectedFaction") + localStorage.getItem("selectedEnemy");
console.log(campaign)

switch(campaign) {
    case 'spacemarinesorks':
        spaceMarinesVsOrks();
        break;
    case 'spacemarineschaos':
        spaceMarinesVsChaos();
        break;
    case 'spacemarinestyranids':
        spaceMarinesVsTyranids();
        break;
    case 'admechorks':
        admechsVsOrks();
        break;
    case 'admechchaos':
        admechVsChaos();
        break;
    case 'admechtyranids':
        admechVsTyranids();
        break; 
    case 'guardorks':
        guardVsOrks();
        break;
    case 'guardchaos':
        guardVsChaos();
        break;
    case 'guardtyranids':
        guardVsTyranids();
        break;
}


}

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
           console.log(i);
           nextQuestion();
           }
       }

       
       

       
       
   }
   

   
        



    


// function spaceMarinesVsOrks() {
//     let question = document.querySelector(".question-box");
//     let answerOne = document.querySelector(".answer-one");
//     let answerTwo = document.querySelector(".answer-two");
//     let answerThree =  document.querySelector(".answer-three");
//     let spaceMarineHealth = 125;
//     let defence = 0;
//     let dammage = spaceMarinesVsOrksQuestions[0].questionPower;

//     console.log(spaceMarineHealth);
//     console.log(defence);
//     console.log(dammage);

//     questionOne();

//     function questionOne(){
//         console.log("begin game");
//         question.innerText = spaceMarinesVsOrksQuestions[0].question;
//         answerOne.innerHTML = spaceMarinesVsOrksQuestions[0].choiceOne;
//         answerTwo.innerHTML = spaceMarinesVsOrksQuestions[0].choiceTwo;
//         answerThree.innerHTML = spaceMarinesVsOrksQuestions[0].choiceThree;

//         answerOne.addEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[0].choiceOnePower; health(), questionTwo()});
//         answerTwo.addEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[0].choiceTwoPower; health(),questionTwo()});
//         answerThree.addEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[0].choiceThreePower; health(),questionTwo()});

//         function health() {
//             spaceMarineHealth = spaceMarineHealth - (dammage - defence);
//             console.log("health",spaceMarineHealth);
//             if(spaceMarineHealth <= 0) {defeatPage();}
//         }
    
//     };

//     function questionTwo() {

//         answerOne.removeEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[0].choiceOnePower; health(), questionTwo()});
//         answerTwo.removeEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[0].choiceTwoPower; health(),questionTwo()});
//         answerThree.removeEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[0].choiceThreePower; health(),questionTwo()});

//         dammage = spaceMarinesVsOrksQuestions[1].questionPower;

//         question.innerText = spaceMarinesVsOrksQuestions[1].question;
//         answerOne.innerHTML = spaceMarinesVsOrksQuestions[1].choiceOne;
//         answerTwo.innerHTML = spaceMarinesVsOrksQuestions[1].choiceTwo;
//         answerThree.innerHTML = spaceMarinesVsOrksQuestions[1].choiceThree;
        
//         answerOne.addEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[1].choiceOnePower; healthTwo(), questionThree()});
//         answerTwo.addEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[1].choiceTwoPower; healthTwo(),questionThree()});
//         answerThree.addEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[1].choiceThreePower; healthTwo(),questionThree()});
        
//         function healthTwo() {
//             spaceMarineHealth = spaceMarineHealth - (dammage - defence);
//             console.log("health",spaceMarineHealth);
//             if(spaceMarineHealth <= 0) {defeatPage();}
//         }
        
//     };

//     function questionThree() {

//         answerOne.removeEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[1].choiceOnePower; healthTwo(), questionThree()});
//         answerTwo.removeEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[1].choiceTwoPower; healthTwo(),questionThree()});
//         answerThree.removeEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[1].choiceThreePower; healthTwo(),questionThree()});

//         dammage = spaceMarinesVsOrksQuestions[2].questionPower;

//         question.innerText = spaceMarinesVsOrksQuestions[2].question;
//         answerOne.innerHTML = spaceMarinesVsOrksQuestions[2].choiceOne;
//         answerTwo.innerHTML = spaceMarinesVsOrksQuestions[2].choiceTwo;
//         answerThree.innerHTML = spaceMarinesVsOrksQuestions[2].choiceThree;

//         answerOne.addEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[2].choiceOnePower; healthThree(), questionFour()});
//         answerTwo.addEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[2].choiceTwoPower; healthThree(), questionFour()});
//         answerThree.addEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[2].choiceThreePower; healthThree(), questionFour()});

//         function healthThree() {
//             spaceMarineHealth = spaceMarineHealth - (dammage - defence);
//             console.log("health",spaceMarineHealth);
//             if(spaceMarineHealth <= 0) {defeatPage();}
//         }
        
//     };

//     function questionFour() {

//         answerOne.removeEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[2].choiceOnePower; healthThree(), questionFour()});
//         answerTwo.removeEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[2].choiceTwoPower; healthThree(), questionFour()});
//         answerThree.removeEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[2].choiceThreePower; healthThree(), questionFour()});

//         dammage = spaceMarinesVsOrksQuestions[3].questionPower;

//         question.innerText = spaceMarinesVsOrksQuestions[3].question;
//         answerOne.innerHTML = spaceMarinesVsOrksQuestions[3].choiceOne;
//         answerTwo.innerHTML = spaceMarinesVsOrksQuestions[3].choiceTwo;
//         answerThree.innerHTML = spaceMarinesVsOrksQuestions[3].choiceThree;

//         answerOne.addEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[3].choiceOnePower; healthFour(), questionFive()});
//         answerTwo.addEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[3].choiceTwoPower; healthFour(), questionFive()});
//         answerThree.addEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[3].choiceThreePower; healthFour(), questionFive()});
    
//         function healthFour() {
//             spaceMarineHealth = spaceMarineHealth - (dammage - defence);
//             console.log("health",spaceMarineHealth);
//             if(spaceMarineHealth <= 0) {defeatPage();}
//         }
        
//     };

//     function questionFive() {

//         answerOne.removeEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[3].choiceOnePower; healthFour(), questionFive()});
//         answerTwo.removeEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[3].choiceTwoPower; healthFour(), questionFive()});
//         answerThree.removeEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[3].choiceThreePower; healthFour(), questionFive()});

//         dammage = spaceMarinesVsOrksQuestions[4].questionPower;

//         question.innerText = spaceMarinesVsOrksQuestions[4].question;
//         answerOne.innerHTML = spaceMarinesVsOrksQuestions[4].choiceOne;
//         answerTwo.innerHTML = spaceMarinesVsOrksQuestions[4].choiceTwo;
//         answerThree.innerHTML = spaceMarinesVsOrksQuestions[4].choiceThree;

//         answerOne.addEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[4].choiceOnePower; healthFive(), victoryPage()});
//         answerTwo.addEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[4].choiceTwoPower; healthFive(), victoryPage()});
//         answerThree.addEventListener("click",  () => {defence = spaceMarinesVsOrksQuestions[4].choiceThreePower; healthFive(), victoryPage()});
        
//         function healthFive() {
//             spaceMarineHealth = spaceMarineHealth - (dammage - defence);
//             console.log("health",spaceMarineHealth);
//             if(spaceMarineHealth <= 0) {defeatPage();}
//         }
//     };

    
    function victoryPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".victory-page").classList.remove('remove');
        localStorage.clear();
        console.log(localStorage);
     };

    function defeatPage() {
        document.getElementById("game-area").classList.add('remove');
        document.querySelector(".defeat-page").classList.remove('remove');
        // localStorage.clear();
        console.log(localStorage);
     };

    // Take user back to faction selection screen

    // Reset faction and enemy choices



introSequence();
talkingHead();
factionSelection();
enemySelection();
campaignSelection();


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
    let answerAll = document.querySelectorAll(".answer");
    let health = 125;
    let dammage = spaceMarinesVsOrksQuestions[0].questionPower;
    

    question.innerText = spaceMarinesVsOrksQuestions[0].question;
    answerOne.innerHTML = spaceMarinesVsOrksQuestions[0].choiceOne;
    answerTwo.innerHTML = spaceMarinesVsOrksQuestions[0].choiceTwo;
    answerThree.innerHTML = spaceMarinesVsOrksQuestions[0].choiceThree;

    answerOne.addEventListener("click", () => questionTwo());
    answerTwo.addEventListener("click", () => questionTwo());
    answerThree.addEventListener("click", () => questionTwo());

    function questionTwo() {
        question.innerText = spaceMarinesVsOrksQuestions[1].question;
        answerOne.innerHTML = spaceMarinesVsOrksQuestions[1].choiceOne;
        answerTwo.innerHTML = spaceMarinesVsOrksQuestions[1].choiceTwo;
        answerThree.innerHTML = spaceMarinesVsOrksQuestions[1].choiceThree;
        answerOne.addEventListener("click", () => questionThree());
        answerTwo.addEventListener("click", () => questionThree());
        answerThree.addEventListener("click", () => questionThree());
    }

    function questionThree() {
        question.innerText = spaceMarinesVsOrksQuestions[2].question;
        answerOne.innerHTML = spaceMarinesVsOrksQuestions[2].choiceOne;
        answerTwo.innerHTML = spaceMarinesVsOrksQuestions[2].choiceTwo;
        answerThree.innerHTML = spaceMarinesVsOrksQuestions[2].choiceThree;
        answerOne.addEventListener("click", () => questionFour());
        answerTwo.addEventListener("click", () => questionFour());
        answerThree.addEventListener("click", () => questionFour());
    }

    function questionFour() {
        question.innerText = spaceMarinesVsOrksQuestions[3].question;
        answerOne.innerHTML = spaceMarinesVsOrksQuestions[3].choiceOne;
        answerTwo.innerHTML = spaceMarinesVsOrksQuestions[3].choiceTwo;
        answerThree.innerHTML = spaceMarinesVsOrksQuestions[3].choiceThree;
        answerOne.addEventListener("click", () => questionFive());
        answerTwo.addEventListener("click", () => questionFive());
        answerThree.addEventListener("click", () => questionFive());
    }

    function questionFive() {
        question.innerText = spaceMarinesVsOrksQuestions[4].question;
        answerOne.innerHTML = spaceMarinesVsOrksQuestions[4].choiceOne;
        answerTwo.innerHTML = spaceMarinesVsOrksQuestions[4].choiceTwo;
        answerThree.innerHTML = spaceMarinesVsOrksQuestions[4].choiceThree;
        answerOne.addEventListener("click", () => victoryPage());
        answerTwo.addEventListener("click", () => victoryPage());
        answerThree.addEventListener("click", () => victoryPage());
    }

    // Display victory page
    function victoryPage() {
        document.querySelector
        localStorage.clear();
        console.log(localStorage);
    }

    function defeatPage() {

    }

    // Take user back to faction selection screen

    // Reset faction and enemy choices

}

introSequence();
talkingHead();
factionSelection();
enemySelection();
campaignSelection();
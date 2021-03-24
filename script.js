

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
    let spaceMarine = document.getElementById("spacemarine-image");
    let spaceMarineTitle = document.getElementById("spacemarine-title");
    let spaceMarineInfo = document.getElementById("spacemarine-info");

    let adMech = document.getElementById("admech-image");
    let adMechTitle = document.getElementById("admech-title");
    let adMechInfo = document.getElementById("admech-info");

    let guard = document.getElementById("guard-image");
    let guardTitle = document.getElementById("guard-title");
    let guardInfo =  document.getElementById("guard-info");

        spaceMarine.onmouseenter = function(){
            spaceMarineTitle.classList.add('remove');
            spaceMarineInfo.classList.remove('remove');
            spaceMarineInfo.innerHTML = spacemarineDescription;
            spaceMarineInfo.style.backgroundColor = "#b6b5b591";
        };

        spaceMarine.onmouseleave = function(){
           spaceMarineTitle.classList.remove('remove');
            spaceMarineInfo.classList.add('remove');
        };

        adMech.onmouseenter = function(){
            adMechTitle.classList.add('remove');
            adMechInfo.classList.remove('remove');
            adMechInfo.innerHTML = admechDescription;
            adMechInfo.style.backgroundColor = "#b6b5b591";
        };
        adMech.onmouseleave = function(){
            adMechTitle.classList.remove('remove');
            adMechInfo.classList.add('remove');
        };

        guard.onmouseenter = function(){
            guardTitle.classList.add('remove');
            guardInfo.classList.remove('remove');
            guardInfo.innerHTML = guardDescription;
            guardInfo.style.backgroundColor = "#b6b5b591";
        };
        guard.onmouseleave = function(){
            guardTitle.classList.remove('remove');
            guardInfo.classList.add('remove');
        };

     spaceMarine.addEventListener("click", revealEnemy);
     adMech.addEventListener("click", revealEnemy);
     guard.addEventListener("click", revealEnemy);
     spaceMarine.addEventListener("click", enemyHead);
     adMech.addEventListener("click", enemyHead);
     guard.addEventListener("click", enemyHead);


    function revealEnemy() {
        document.getElementById("faction-selection").classList.add('remove');
        document.getElementById("enemy-selection").classList.remove('remove');
    };
}

function enemySelection() {
    let orks = document.getElementById("orks-image");
    let orksTitle = document.getElementById("orks-title");
    let orksInfo = document.getElementById("orks-info");

    let chaos = document.getElementById("chaos-image");
    let chaosTitle =  document.getElementById("chaos-title");
    let chaosInfo = document.getElementById("chaos-info");

    let tyranids = document.getElementById("tyranids-image");
    let tyranidsTitle = document.getElementById("tyranids-title");
    let tyranidsInfo = document.getElementById("tyranids-info");

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
    orks.addEventListener('mouseenter', () => mouseEnterHandler("orks"));
    orks.addEventListener('mouseleave', () => mouseLeaveHandler("orks"));
    chaos.addEventListener('mouseenter', () => mouseEnterHandler("chaos"));
    chaos.addEventListener('mouseleave', () => mouseLeaveHandler("chaos"));
    tyranids.addEventListener('mouseenter', () => mouseEnterHandler("tyranids"));
    tyranids.addEventListener('mouseleave', () => mouseLeaveHandler("tyranids"));


    orks.addEventListener("click", enemySelected);
    chaos.addEventListener("click", enemySelected);
    tyranids.addEventListener("click", enemySelected);
    orks.addEventListener("click", headGame);
    chaos.addEventListener("click", headGame);
    tyranids.addEventListener("click", headGame);

    function enemySelected(name) {
        document.getElementById("enemy-selection").classList.add('remove');
        document.getElementById("game-area").classList.remove('remove');
        localStorage.setItem("selectedEnemy", name)
    };
}

/* Game */ 

let spacemarine = document.getElementById("spacemarine-image");
let admech = document.getElementById("admech-image");
let guard = document.getElementById("guard-image");
let orks = document.getElementById("orks-image");
let chaos = document.getElementById("chaos-image");
let tyranids = document.getElementById("tyranids-image");

let spacemarineSelected = spacemarine.onclick;
let admechSelected = admech.onclick;
let guardSelected = guard.onclick; 
let orksSelected = orks.onclick;
let chaosSelected = chaos.onclick;
let tyranidsSelected = tyranids.onclick;

function spaceMarinesVsOrks() {
    let question = document.querySelector(".question-box");
    let answerOne = document.querySelector(".answer-one");
    let answerTwo = document.querySelector(".answer-two");
    let answerThree =  document.querySelector(".answer-three");
    let health = 125;
    let dammage = spaceMarinesVsOrksQuestions[0].questionPower
    

    question.innerText = spaceMarinesVsOrksQuestions[0].question;
    answerOne.innerHTML = spaceMarinesVsOrksQuestions[0].choiceOne;
    answerTwo.innerHTML = spaceMarinesVsOrksQuestions[0].choiceTwo;
    answerThree.innerHTML = spaceMarinesVsOrksQuestions[0].choiceThree;
     
    

}

introSequence();
talkingHead();
factionSelection();
enemySelection();
spaceMarinesVsOrks();
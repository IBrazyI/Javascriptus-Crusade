

/* Intro Segemnt - Intro animation */
function introSequence() {


    if (sessionStorage.getItem('intro') !== null){
        document.getElementById("intro-page").classList.add('remove');
        document.getElementById("title-page").classList.add('remove');
        revealFaction();
        return;
    };

    sessionStorage.setItem('intro', 'played');

    let text = document.querySelector(".intro-text");
    let strText = text.textContent;
    let splitText = strText.split("");
    text.textContent = "";
    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
        let span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++
        if (char === splitText.length) {
            complete();
            return;
        }
    }

    function complete() {
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
        factionSelection();
        toggleTalkingHead();
    };

};

introSequence();

/* Nav Elements*/

let navItem = document.getElementById("play-button");
navItem.addEventListener('click', () => noIntro());
    function noIntro(){
        document.getElementById("into-page").classList.add('remove');
        document.getElementById("title-page").classList.add('remove');
    }



/* Talking Head - Text box givng context and instruction for the user*/
function removeTalkingHead() {
    talkingHead.classList.add('remove');
};

function toggleTalkingHead() {
    talkingHeadTxt.innerHTML = talkingHeadGreet;
    talkingHeadBtn.onclick = factionText;

    function factionText() {
        talkingHeadTxt.innerHTML = talkingHeadGreetTwo;
        talkingHeadBtn.onclick = removeTalkingHead;
    };
}

function enemyText() {
    talkingHeadTxt.innerHTML = talkingHeadEnemy;
    talkingHead.classList.remove('remove');
    talkingHeadBtn.onclick = removeTalkingHead;
}

function gameText() {
    talkingHeadTxt.innerHTML = talkingHeadGame;
    talkingHead.classList.remove('remove');
    talkingHeadBtn.onclick = newText;

    function newText() {
        talkingHeadTxt.innerHTML = talkingHeadGameTwo;
        talkingHeadBtn.onclick = removeTalkingHead;
    };

}

/* Faction Selection - Chose which faction the player wants to play as, changing answers and image */

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
    guard.addEventListener("click", () => factionSelected("guard"));

    function factionSelected(name) {
        document.getElementById("faction-selection").classList.add('remove');
        document.getElementById("enemy-selection").classList.remove('remove');
        localStorage.setItem("selectedFaction", name);
        console.log(localStorage);
        enemyText();
        enemySelection();
    };

}

/* Enemy Selection - Chose which enemy the player wishes to play against, changes question text and image */
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
    tyranids.addEventListener("click", () => enemySelected("tyranids"));

    function enemySelected(name) {
        document.getElementById("enemy-selection").classList.add('remove');
        document.getElementById("game-area").classList.remove('remove');
        localStorage.setItem("selectedEnemy", name);
        console.log(localStorage);
        campaignSelection();
        gameText();
    };

}

/* Campaign Selection - Choses which sets of questions and answers to load based on local storage selections*/
function campaignSelection() {
    let campaign = localStorage.getItem("selectedFaction") + localStorage.getItem("selectedEnemy");
    console.log(campaign)


    switch (campaign) {
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
            campaign = adMechVsOrks();
            break;
        case 'admechchaos':
            campaign = adMechVsChaos();
            break;
        case 'admechtyranids':
            campaign = adMechVsTyranids();
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

/* Game Function - Runs the game its self is seperate for each matchup cycles through questions and answers, subtraction from the factions starting health */
function spaceMarinesVsOrks() {
    let optionOne = spaceMarinesVsOrksQuestions[i].choiceOnePower;
    let optionTwo = spaceMarinesVsOrksQuestions[i].choiceTwoPower;
    let optionThree = spaceMarinesVsOrksQuestions[i].choiceThreePower;

    console.log("start game");
    console.log("starting health", spaceMarineHealth);
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

        answerOne.onclick = function () { defence = optionOne; fight() };
        answerTwo.onclick = function () { defence = optionTwo; fight() };
        answerThree.onclick = function () { defence = optionThree; fight() };
    };

    function fight() {
        console.log("current health", spaceMarineHealth);
        console.log("attacked with", attack);
        console.log("defended with", defence);
        spaceMarineHealth = spaceMarineHealth - (attack - defence);
        console.log("new health", spaceMarineHealth);

        if (spaceMarineHealth <= 0) {
            defeatPage();
        };

        if (i < spaceMarinesVsOrksQuestions.length) {
            i++;

        };

        if (i === 5 && spaceMarineHealth > 0) {
            victoryPage();
        };
        console.log(i);

        if (i < 5){
        nextQuestion();
        };
    };
};

function spaceMarinesVsChaos() {
    let optionOne = spaceMarinesVsChaosQuestions[i].choiceOnePower;
    let optionTwo = spaceMarinesVsChaosQuestions[i].choiceTwoPower;
    let optionThree = spaceMarinesVsChaosQuestions[i].choiceThreePower;

    battleImage.style.backgroundImage = "url('./assets/images/chaos2.jpg')";

    console.log("start game");
    console.log("starting health", spaceMarineHealth);
    nextQuestion();

    function nextQuestion() {

        question.innerHTML = spaceMarinesVsChaosQuestions[i].question;
        answerOne.innerHTML = spaceMarinesVsChaosQuestions[i].choiceOne;
        answerTwo.innerHTML = spaceMarinesVsChaosQuestions[i].choiceTwo;
        answerThree.innerHTML = spaceMarinesVsChaosQuestions[i].choiceThree;
        attack = spaceMarinesVsChaosQuestions[i].questionPower;
        optionOne = spaceMarinesVsChaosQuestions[i].choiceOnePower;
        optionTwo = spaceMarinesVsChaosQuestions[i].choiceTwoPower;
        optionThree = spaceMarinesVsChaosQuestions[i].choiceThreePower;

        answerOne.onclick = function () { defence = optionOne; fight() };
        answerTwo.onclick = function () { defence = optionTwo; fight() };
        answerThree.onclick = function () { defence = optionThree; fight() };
    };

    function fight() {
        console.log("current health", spaceMarineHealth);
        console.log("attacked with", attack);
        console.log("defended with", defence);
        spaceMarineHealth = spaceMarineHealth - (attack - defence);
        console.log("new health", spaceMarineHealth);

        if (spaceMarineHealth <= 0) {
            defeatPage();
        };

        if (i < spaceMarinesVsChaosQuestions.length) {
            i++;

        };

        if (i === 5 && spaceMarineHealth > 0) {
            victoryPage();
        };
        console.log(i);

        if (i < 5){
        nextQuestion();
        };
    };
};

function spaceMarinesVsTyranids() {
    let optionOne = spaceMarinesVsTyranidsQuestions[i].choiceOnePower;
    let optionTwo = spaceMarinesVsTyranidsQuestions[i].choiceTwoPower;
    let optionThree = spaceMarinesVsTyranidsQuestions[i].choiceThreePower;

    battleImage.style.backgroundImage = "url('./assets/images/tyranids3.jpg')";

    console.log("start game");
    console.log("starting health", spaceMarineHealth);
    nextQuestion();

    function nextQuestion() {

        question.innerHTML = spaceMarinesVsTyranidsQuestions[i].question;
        answerOne.innerHTML = spaceMarinesVsTyranidsQuestions[i].choiceOne;
        answerTwo.innerHTML = spaceMarinesVsTyranidsQuestions[i].choiceTwo;
        answerThree.innerHTML = spaceMarinesVsTyranidsQuestions[i].choiceThree;
        attack = spaceMarinesVsTyranidsQuestions[i].questionPower;
        optionOne = spaceMarinesVsTyranidsQuestions[i].choiceOnePower;
        optionTwo = spaceMarinesVsTyranidsQuestions[i].choiceTwoPower;
        optionThree = spaceMarinesVsTyranidsQuestions[i].choiceThreePower;

        answerOne.onclick = function () { defence = optionOne; fight() };
        answerTwo.onclick = function () { defence = optionTwo; fight() };
        answerThree.onclick = function () { defence = optionThree; fight() };
    };

    function fight() {
        console.log("current health", spaceMarineHealth);
        console.log("attacked with", attack);
        console.log("defended with", defence);
        spaceMarineHealth = spaceMarineHealth - (attack - defence);
        console.log("new health", spaceMarineHealth);

        if (spaceMarineHealth <= 0) {
            defeatPage();
        };

        if (i < spaceMarinesVsTyranidsQuestions.length) {
            i++;

        };

        if (i === 5 && spaceMarineHealth > 0) {
            victoryPage();
        };
        console.log(i);

        if (i < 5){
        nextQuestion();
        };
    };
};

function adMechVsOrks() {
    let optionOne = adMechVsOrksQuestions[i].choiceOnePower;
    let optionTwo = adMechVsOrksQuestions[i].choiceTwoPower;
    let optionThree = adMechVsOrksQuestions[i].choiceThreePower;

    battleImage.style.backgroundImage = "url('./assets/images/admech3.jpg')";

    console.log("start game");
    console.log("starting health", adMechHealth);
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

        answerOne.onclick = function () { defence = optionOne; fight() };
        answerTwo.onclick = function () { defence = optionTwo; fight() };
        answerThree.onclick = function () { defence = optionThree; fight() };
    };

    function fight() {
        console.log("current health", adMechHealth);
        console.log("attacked with", attack);
        console.log("defended with", defence);
        adMechHealth = adMechHealth - (attack - defence);
        console.log("new health", adMechHealth);

        if (adMechHealth <= 0) {
            defeatPage();
        };

        if (i < adMechVsOrksQuestions.length) {
            i++;

        };

        if (i === 5 && adMechHealth > 0) {
            victoryPage();
        };
        console.log(i);

        if (i < 5){
        nextQuestion();
        };
    };
};

function adMechVsChaos() {
    let optionOne = adMechVsChaosQuestions[i].choiceOnePower;
    let optionTwo = adMechVsChaosQuestions[i].choiceTwoPower;
    let optionThree = adMechVsChaosQuestions[i].choiceThreePower;

    battleImage.style.backgroundImage = "url('./assets/images/admech6.jpg')";

    console.log("start game");
    console.log("starting health", adMechHealth);
    nextQuestion();

    function nextQuestion() {

        question.innerHTML = adMechVsChaosQuestions[i].question;
        answerOne.innerHTML = adMechVsChaosQuestions[i].choiceOne;
        answerTwo.innerHTML = adMechVsChaosQuestions[i].choiceTwo;
        answerThree.innerHTML = adMechVsChaosQuestions[i].choiceThree;
        attack = adMechVsChaosQuestions[i].questionPower;
        optionOne = adMechVsChaosQuestions[i].choiceOnePower;
        optionTwo = adMechVsChaosQuestions[i].choiceTwoPower;
        optionThree = adMechVsChaosQuestions[i].choiceThreePower;

        answerOne.onclick = function () { defence = optionOne; fight() };
        answerTwo.onclick = function () { defence = optionTwo; fight() };
        answerThree.onclick = function () { defence = optionThree; fight() };

    };

    function fight() {
        console.log("current health", adMechHealth);
        console.log("attacked with", attack);
        console.log("defended with", defence);
        adMechHealth = adMechHealth - (attack - defence);
        console.log("new health", adMechHealth);

        if (adMechHealth <= 0) {
            defeatPage();
        };

        if (i < adMechVsChaosQuestions.length) {
            i++;

        };

        if (i === 5 && adMechHealth > 0) {
            victoryPage();
        };
        console.log(i);

        if (i < 5){
        nextQuestion();
        };
    };
};

function adMechVsTyranids() {
    let optionOne = adMechVsTyranidsQuestions[i].choiceOnePower;
    let optionTwo = adMechVsTyranidsQuestions[i].choiceTwoPower;
    let optionThree = adMechVsTyranidsQuestions[i].choiceThreePower;

    battleImage.style.backgroundImage = "url('./assets/images/admech1.jpg')";

    console.log("start game");
    console.log("starting health", adMechHealth);
    nextQuestion();

    function nextQuestion() {

        question.innerHTML = adMechVsTyranidsQuestions[i].question;
        answerOne.innerHTML = adMechVsTyranidsQuestions[i].choiceOne;
        answerTwo.innerHTML = adMechVsTyranidsQuestions[i].choiceTwo;
        answerThree.innerHTML = adMechVsTyranidsQuestions[i].choiceThree;
        attack = adMechVsTyranidsQuestions[i].questionPower;
        optionOne = adMechVsTyranidsQuestions[i].choiceOnePower;
        optionTwo = adMechVsTyranidsQuestions[i].choiceTwoPower;
        optionThree = adMechVsTyranidsQuestions[i].choiceThreePower;

        answerOne.onclick = function () { defence = optionOne; fight() };
        answerTwo.onclick = function () { defence = optionTwo; fight() };
        answerThree.onclick = function () { defence = optionThree; fight() };

    };

    function fight() {
        console.log("current health", adMechHealth);
        console.log("attacked with", attack);
        console.log("defended with", defence);
        adMechHealth = adMechHealth - (attack - defence);
        console.log("new health", adMechHealth);

        if (adMechHealth <= 0) {
            defeatPage();
        };

        if (i < adMechVsTyranidsQuestions.length) {
            i++;

        };

        if (i === 5 && adMechHealth > 0) {
            victoryPage();
        };
        console.log(i);

        if (i < 5){
        nextQuestion();
        };
    };
};

function guardVsOrks() {
    let optionOne = guardVsOrksQuestions[i].choiceOnePower;
    let optionTwo = guardVsOrksQuestions[i].choiceTwoPower;
    let optionThree = guardVsOrksQuestions[i].choiceThreePower;

    battleImage.style.backgroundImage = "url('./assets/images/orks3.jpg')";

    console.log("start game");
    console.log("starting health", guardHealth);
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

        answerOne.onclick = function () { defence = optionOne; fight() };
        answerTwo.onclick = function () { defence = optionTwo; fight() };
        answerThree.onclick = function () { defence = optionThree; fight() };

    };

    function fight() {
        console.log("current health", guardHealth);
        console.log("attacked with", attack);
        console.log("defended with", defence);
        guardHealth = guardHealth - (attack - defence);
        console.log("new health", guardHealth);

        if (guardHealth <= 0) {
            defeatPage();
        };

        if (i < guardVsOrksQuestions.length) {
            i++;

        };

        if (i === 5 && guard > 0) {
            victoryPage();
        };
        console.log(i);

        if (i < 5){
        nextQuestion();
        };
    };
};

function guardVsChaos() {
    let optionOne = guardVsChaosQuestions[i].choiceOnePower;
    let optionTwo = guardVsChaosQuestions[i].choiceTwoPower;
    let optionThree = guardVsChaosQuestions[i].choiceThreePower;

    battleImage.style.backgroundImage = "url('./assets/images/guard3.jpg')";

    console.log("start game");
    console.log("starting health", guardHealth);
    nextQuestion();



    function nextQuestion() {

        question.innerHTML = guardVsChaosQuestions[i].question;
        answerOne.innerHTML = guardVsChaosQuestions[i].choiceOne;
        answerTwo.innerHTML = guardVsChaosQuestions[i].choiceTwo;
        answerThree.innerHTML = guardVsChaosQuestions[i].choiceThree;
        attack = guardVsChaosQuestions[i].questionPower;
        optionOne = guardVsChaosQuestions[i].choiceOnePower;
        optionTwo = guardVsChaosQuestions[i].choiceTwoPower;
        optionThree = guardVsChaosQuestions[i].choiceThreePower;

        answerOne.onclick = function () { defence = optionOne; fight() };
        answerTwo.onclick = function () { defence = optionTwo; fight() };
        answerThree.onclick = function () { defence = optionThree; fight() };

    };

    function fight() {
        console.log("current health", guardHealth);
        console.log("attacked with", attack);
        console.log("defended with", defence);
        guardHealth = guardHealth - (attack - defence);
        console.log("new health", guardHealth);

        if (guardHealth <= 0) {
            defeatPage();
        };

        if (i < guardVsChaosQuestions.length) {
            i++;

        };

        if (i === 5 && guardHealth > 0) {
            victoryPage();
        };
        console.log(i);

        if (i < 5){
        nextQuestion();
        };
    };
};

function guardVsTyranids() {
    let optionOne = guardVsTyranidsQuestions[i].choiceOnePower;
    let optionTwo = guardVsTyranidsQuestions[i].choiceTwoPower;
    let optionThree = guardVsTyranidsQuestions[i].choiceThreePower;

    battleImage.style.backgroundImage = "url('./assets/images/tyranids1.jpg')";

    console.log("start game");
    console.log("starting health", guardHealth);
    nextQuestion();



    function nextQuestion() {

        question.innerHTML = guardVsTyranidsQuestions[i].question;
        answerOne.innerHTML = guardVsTyranidsQuestions[i].choiceOne;
        answerTwo.innerHTML = guardVsTyranidsQuestions[i].choiceTwo;
        answerThree.innerHTML = guardVsTyranidsQuestions[i].choiceThree;
        attack = guardVsTyranidsQuestions[i].questionPower;
        optionOne = guardVsTyranidsQuestions[i].choiceOnePower;
        optionTwo = guardVsTyranidsQuestions[i].choiceTwoPower;
        optionThree = guardVsTyranidsQuestions[i].choiceThreePower;

        answerOne.onclick = function () { defence = optionOne; fight() };
        answerTwo.onclick = function () { defence = optionTwo; fight() };
        answerThree.onclick = function () { defence = optionThree; fight() };

    };

    function fight() {
        console.log("current health", guardHealth);
        console.log("attacked with", attack);
        console.log("defended with", defence);
        guardHealth = guardHealth - (attack - defence);
        console.log("new health", guardHealth);

        if (guardHealth <= 0) {
            defeatPage();
        };

        if (i < guardVsTyranidsQuestions.length) {
            i++;

        };

        if (i === 5 && guardHealth > 0) {
            victoryPage();
        };
        console.log(i);

        if (i < 5){
        nextQuestion();
        };
    };
};


function victoryPage() {
    let victoryBtn = document.querySelector("#victory-btn");
    document.getElementById("game-area").classList.add('remove');
    document.querySelector(".victory-page").classList.remove('remove');
    localStorage.clear();
    console.log(localStorage);
    victoryBtn.onclick = function () {
        document.querySelector(".victory-page").classList.add('remove');
        document.getElementById("faction-selection").classList.remove('remove');
        i = 0;
        spaceMarineHealth = 125;
        adMechHealth = 100;
        guardHealth = 75;
    };
};

function defeatPage() {
    let defeatBtn = document.querySelector("#defeat-btn");
    document.getElementById("game-area").classList.add('remove');
    document.querySelector(".defeat-page").classList.remove('remove');
    localStorage.clear();
    console.log(localStorage);
    defeatBtn.onclick = function () {
        document.querySelector(".defeat-page").classList.add('remove');
        document.getElementById("faction-selection").classList.remove('remove');
        i = 0;
        spaceMarineHealth = 125;
        adMechHealth = 100;
        guardHealth = 75;
    };
};




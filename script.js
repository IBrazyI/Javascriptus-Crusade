/* Variables */

/* Text for HTML */

let spacemarineDescription =
 "Spacemarines are the genetically enhanced super soldiers of the Imperium of man. Feared through the galaxy and one of humanity's greatest defenders, they know no fear wear thick ceramite armour that makes them almost invunrable to small arms fire.";
let admechDescription =
 "The Adeptus Mechanicus is one of the most powerful organisations in the Imperium. More machine than human, they field large number machine enhanced troops with technologically advanced weapons while thier gigantic warmachines stalk the battlefield.";
let guardDescription =
  "The Guard forms the very backbone of the Imperium; without it, Mankind would surely perish. Fighting neither with the advantages of genetic enhancement or the most powerful personal weaponry, the Guard possesses the courage and the manpower to face and annihilate the enemies of the Emperor across the galaxy.";
let orksDescription =
 "Orks are a warlike, crude, and highly aggressive green-skinned Xenos race. Although their society is entirely primitive and brutal, the Ork race is also the most successful species in the whole Galaxy, outnumbering possibly every other race. However, due to their aggressive and warlike nature, warring as much between themselves as against other races.";
let chaosDescription =
 "The Chaos Space Marines were once loyal, superhuman warriors of the Emperor, but turned their backs on the Master of Mankind when his foremost son and Primarch, the Warmaster Horus, was corrupted by the Chaos Gods. Now, as champions of the Dark Gods infused with the infernal power of the warp, they seek only to destroy the very empire they once fought to build more than 10 thousand years ago.";
let tyranidsDescription =
 "The Tyranids are an extragalactic alien race, whose sole purpose is the consumption of all forms of genetic and biological material in order to evolve and reproduce. Every function is carried out by living, engineered creatures, each of which collectively forms the Hive Fleet, directed by a single Hive Mind.The Tyranids are seen as one of the gravest threats to the entire Galaxy.";

 let talkingHeadGreet =
 "Greetings commander... you have been assigned to the defence of the planet OMACRON DONACUS 32... you will need to choose which of the Imperiums armys will command to defend it...";
 let talkingHeadGreetTwo =
 "Unfortunatley we only have the resourses to deploy one of the imperial factions... choose wisley not all forces are created equal...";
 let talkingHeadEnemy = 
 "Now you have selected your army we you need to decided what enemy we shall face... all are of equal importance but some may be harder to defeat than others...";
 let talkingHeadGame = 
 "Welcome to the battle screen commander... here you can see the enemys actions and what tactics are avaliable to counter them...";
 let talkingHeadGameTwo = 
 "Be aware... once you decide a plan of action it could have dire consequences... For the Emperor!...";

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

    orks.onmouseenter = function(){
        orksTitle.classList.add('remove');
        orksInfo.classList.remove('remove');
        orksInfo.innerHTML = orksDescription;
        orksInfo.style.backgroundColor = "#b6b5b591";
    };
    
    orks.onmouseleave = function(){
        orksTitle.classList.remove('remove');
        orksInfo.classList.add('remove');
    };

    chaos.onmouseenter = function(){
        chaosTitle.classList.add('remove');
        chaosInfo.classList.remove('remove');
        chaosInfo.innerHTML = chaosDescription;
        chaosInfo.style.backgroundColor = "#b6b5b591";
    };
    chaos.onmouseleave = function(){
        chaosTitle.classList.remove('remove');
        chaosInfo.classList.add('remove');
    };

    tyranids.onmouseenter = function(){
        tyranidsTitle.classList.add('remove');
        tyranidsInfo.classList.remove('remove');
        tyranidsInfo.innerHTML = tyranidsDescription;
        tyranidsInfo.style.backgroundColor = "#b6b5b591";
    };
    tyranids.onmouseleave = function(){
        tyranidsTitle.classList.remove('remove');
        tyranidsInfo.classList.add('remove');
    };

    orks.addEventListener("click", enemySelected);
    chaos.addEventListener("click", enemySelected);
    tyranids.addEventListener("click", enemySelected);
    orks.addEventListener("click", headGame);
    chaos.addEventListener("click", headGame);
    tyranids.addEventListener("click", headGame);

    function enemySelected() {
        document.getElementById("enemy-selection").classList.add('remove');
        document.getElementById("game-area").classList.remove('remove');
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

switch (spacemarineSelected === true) {
    case orksSelected === true:
        spaceMarinesVsOrks();
        break;
    case chaosSelected === true:
        spaceMarinesVsChaos();
        break;
    case tyranidsSelected === true:
        spacemarinesVsTyranids();
        break;
}

function spaceMarinesVsOrks() {
    let question = document.getElementsByClassName("question-box");
    let answerOne = document.getElementsByClassName("answer-box-one");
    let answerTwo = document.getElementsByClassName("answer-box-two");
    let answerThree document.getElementsByClassName("answer-box-three");

    
}

/* Game Objects */

let spaceMarinesVsOrksQuestions = [
    {
        question: 'Ork activity has been reported in the more uninhabited parts of the planet. What is the first step we should take?',
        questionPower: 20,
        choiceOne: 'Send a small scouting force to confirm the reports.',
        choiseOnePower: 10,
        choiceTwo: 'Begin to fortify larger settlements on the plannet and brace for an attack.',
        choiseTwoPower: 15,
        choiceThree: 'Organise rapid strike forces to premptilvey attack the orks before thier numbers can grow.',
        choiseThreePower: 20,
    },

    {
        question: 'The Orks numbers have grown considrably and they are attacking fringe settlements. How do we handle this menance?',
        questionPower: 40,
        choiceOne: 'Strike them hard and fast elminating thier leaders.',
        choiceOnePower: 30,
        choiceTwo: 'Pull back all civilains and our forces to the planetary capital.',
        choiceTwoPower: 20,
        choiceThree: 'Organise a defence in depth, try to hold and defend the settlements.',
        choiceThreePower: 10,
    },

    {
        question: 'The Orks have pushed us back and are now attacking the planetrary capital with all thier might.',
        questionPower: 60,
        choiceOne: 'Counter attack with armoured vehicles and fast attack troops.',
        choiseOnePower: 30,
        choiceTwo: 'Dig in the troops and deploy our heavy weapons teams to hold back the tide.',
        choiseTwoPower: 50,
        choiceThree: 'Bolster the line at key points using Dreadnoughts.',
        choiseThreePower: 40,
    },

    {
        question: 'The Orks have broken through our lines in multiple areas how do we counter this threat?',
        questionPower: 80,
        choiceOne: 'Engage them in melee to slow them down and allow us to reform the line with our reserves.',
        choiseOnePower: 50,
        choiceTwo: 'Pull back inside the city and allow the citys automated defences to thin the horde.',
        choiseTwoPower: 60,
        choiceThree: 'Send our initiates to plug the gaps and prove themselves.',
        choiseThreePower: 30,
    },

    {
        question: 'The Ork Warboss has been seen on the battlefield leading his horde. Elimnating him will cause the Orks to scatter and end the battle.',
        questionPower: 100,
        choiceOne: 'Teleport our elite terminators directley into the Warbosses path and destory him.',
        choiseOnePower: 80,
        choiceTwo: 'Send infiltrators to find and elimnate him at range.',
        choiseTwoPower: 50,
        choiceThree: 'Oblitrate him with a massive bombardment from our ships in orbit.',
        choiseThreePower: 60,
    }
]

introSequence();
talkingHead();
factionSelection();
enemySelection();
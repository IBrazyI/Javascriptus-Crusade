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
    };
}

/* Faction Selection */

function factionSelection() {
    let spaceMarine = document.getElementById("spacemarine-image");
    let adMech = document.getElementById("admech-image");
    let guard = document.getElementById("guard-image");
    console.log(spaceMarine, adMech, guard);

        spaceMarine.onmouseenter = function(){
            document.getElementById("spacemarine-title").classList.add('remove');
            document.getElementById("spacemarine-info").classList.remove('remove');
        };
        spaceMarine.onmouseleave = function(){
            document.getElementById("spacemarine-title").classList.remove('remove');
            document.getElementById("spacemarine-info").classList.add('remove');
        };

        adMech.onmouseenter = function(){
            document.getElementById("admech-title").classList.add('remove');
            document.getElementById("admech-info").classList.remove('remove');
        };
        adMech.onmouseleave = function(){
            document.getElementById("admech-title").classList.remove('remove');
            document.getElementById("admech-info").classList.add('remove');
        };

        guard.onmouseenter = function(){
            document.getElementById("guard-title").classList.add('remove');
            document.getElementById("guard-info").classList.remove('remove');
        };
        guard.onmouseleave = function(){
            document.getElementById("guard-title").classList.remove('remove');
            document.getElementById("guard-info").classList.add('remove');
        };

    spaceMarine.addEventListener("click", revealEnemy);
    adMech.addEventListener("click", revealEnemy);
    guard.addEventListener("click", revealEnemy);

    function revealEnemy() {
        document.getElementById("faction-selection").classList.add('remove');
        document.getElementById("enemy-selection").classList.remove('remove');
    };
}

function enemySelection() {
    let orks = document.getElementById("orks-image");
    let chaos = document.getElementById("chaos-image");
    let tyranids = document.getElementById("tyranids-image");

    orks.addEventListener("click", enemySelected);
    chaos.addEventListener("click", enemySelected);
    tyranids.addEventListener("click", enemySelected);

    function enemySelected() {
        document.getElementById("enemy-selection").classList.add('remove');
        document.getElementById("game-area").classList.remove('remove');
    };
}
/*
talkingHead()

navBarMouseOver()

selectFaction()

selectEnemy()

playGame()

endScreen()

emailSubmit() */

introSequence();
factionSelection();
enemySelection();

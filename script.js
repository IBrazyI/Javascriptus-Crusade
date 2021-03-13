/* Intro Segemnt */

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

/*
titlePage()

talkingHead()

navBarMouseOver()

selectFaction()

selectEnemy()

playGame()

endScreen()

emailSubmit() */
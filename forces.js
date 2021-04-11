/*Talking Head*/

function forcesInformation(){
    document.querySelector(".talking-head-box").classList.remove('remove');
    talkingHeadTxt.innerHTML = forcesIntro;
    talkingHeadBtn.onclick = removeTalkingHead;
}

forcesInformation();

/*Containers*/
const forcesContainer = document.createElement('div');
const factionsContainer = document.createElement('div');
const enemiesContainer = document.createElement('div');
const informationContainer = document.createElement('div');

/*Container Appends*/
forcesContainer.appendChild(factionsContainer);
forcesContainer.appendChild(enemiesContainer);
forcesContainer.appendChild(informationContainer);

/*Container Classes*/
forcesContainer.classList.add('forces-container');
factionsContainer.classList.add('factions-container');
factionsContainer.classList.add('forces-selection');
enemiesContainer.classList.add('eneimes-container');
enemiesContainer.classList.add('focres-selection');
informationContainer.classList.add('forces-info-container');

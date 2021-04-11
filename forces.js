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

/*Forces Container Elements*/
let forcesTitle = document.createElement('h1');

/*Faction Container Elements*/
let factionSpaceMarines = document.createElement('div');
factionSpaceMarines.classList.add("forces-Select-Image");
factionSpaceMarines.id = "faction-space-marines";
    let spaceMarinesLabel = document.createElement('h2');
    spaceMarinesLabel.id = "space-marines-label";
let factionAdMech = document.createElement('div');
factionAdMech.classList.add("forces-Select-Image");
factionAdMech.id = "faction-ad-mech";
    let adMechLabel = document.createElement('h2');
    adMechLabel.id = "ad-mech-label";
let factionGuard = document.createElement('div');
factionGuard.classList.add("forces-Select-Image");
factionGuard.id = "faction-guard";
    let guardLabel = document.createElement('h2');
    guardLabel.id = "guard-label";

/*Appends*/
factionSpaceMarines.appendChild(spaceMarinesLabel);
factionAdMech.appendChild(adMechLabel);
factionGuard.appendChild(guardLabel);

/*Enemies Container Elements*/
let factionOrks = document.createElement('div');
factionOrks.classList.add("forces-Select-Image");
factionOrks.id = "faction-orks";
    let orksLabel = document.createElement('h2');
    orksLabel.id = "orks-label";
let factionChaos = documennt.createElement('div');
factionChaos.classList.add("forces-Select-Image");
factionChaos.id = "faction-chaos";
    let chaosLabel = document.createElement('h2');
    chaosLabel.id = "chaos-label";
let factionTyranids = document.createElement('div');
factionTyranids.classList.add("forces-Select-Image");
factionTyranids.id = "faction-tyranids";
    let tyranidsLabel = document.createElement('h2');
    tyranidsLabel.id = "tyranids-label";

/*Appends*/
factionOrks.appendChild(orksLabel);
factionChaos.appendChild(chaosLabel);
factionTyranids.appendChild(tyranidsLabel);

/*Information Container Elements*/


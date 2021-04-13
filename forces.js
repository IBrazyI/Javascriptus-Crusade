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

/*Forces Container Elements*/
let forcesTitle = document.createElement('h1');
forcesTitle.id = "forces-title";

/*Container Appends*/
document.body.appendChild(forcesContainer);
forcesContainer.appendChild(forcesTitle);
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




/*Faction Container Elements*/
let factionSpaceMarines = document.createElement('div');
factionSpaceMarines.classList.add("forces-select-image");
factionSpaceMarines.id = "faction-space-marines";
    let spaceMarinesLabel = document.createElement('p');
    spaceMarinesLabel.classList.add('forces-label');
let factionAdMech = document.createElement('div');
factionAdMech.classList.add("forces-select-image");
factionAdMech.id = "faction-ad-mech";
    let adMechLabel = document.createElement('p');
    adMechLabel.classList.add('forces-label');
let factionGuard = document.createElement('div');
factionGuard.classList.add("forces-select-image");
factionGuard.id = "faction-guard";
    let guardLabel = document.createElement('p');
    guardLabel.classList.add('forces-label');

/*Appends*/
factionsContainer.appendChild(factionSpaceMarines);
factionsContainer.appendChild(factionAdMech);
factionsContainer.appendChild(factionGuard);
factionSpaceMarines.appendChild(spaceMarinesLabel);
factionAdMech.appendChild(adMechLabel);
factionGuard.appendChild(guardLabel);

/*Enemies Container Elements*/
let factionOrks = document.createElement('div');
factionOrks.classList.add("forces-select-image");
factionOrks.id = "faction-orks";
    let orksLabel = document.createElement('p');
    orksLabel.classList.add('forces-label');
let factionChaos = document.createElement('div');
factionChaos.classList.add("forces-select-image");
factionChaos.id = "faction-chaos";
    let chaosLabel = document.createElement('p');
    chaosLabel.classList.add('forces-label');
let factionTyranids = document.createElement('div');
factionTyranids.classList.add("forces-select-image");
factionTyranids.id = "faction-tyranids";
    let tyranidsLabel = document.createElement('p');
    tyranidsLabel.classList.add('forces-label');

/*Appends*/
enemiesContainer.appendChild(factionOrks);
enemiesContainer.appendChild(factionChaos);
enemiesContainer.appendChild(factionTyranids);
factionOrks.appendChild(orksLabel);
factionChaos.appendChild(chaosLabel);
factionTyranids.appendChild(tyranidsLabel);

/*Information Container Elements*/

/*Text*/
forcesTitle.innerHTML = "What Faction would you like to know more about?"
spaceMarinesLabel.innerHTML = "Spacemarines";
adMechLabel.innerHTML = "Adeptus Mechanicus";
guardLabel.innerHTML = "Imperial Guard";
orksLabel.innerHTML = "Orks";
chaosLabel.innerHTML = "Chaos";
tyranidsLabel.innerHTML = "Tyranids";

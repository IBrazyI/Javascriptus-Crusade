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
informationContainer.classList.add('remove');

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
forcesTitle.innerHTML = "Select a faction to learn more about."
spaceMarinesLabel.innerHTML = "Spacemarines";
adMechLabel.innerHTML = "Adeptus Mechanicus";
guardLabel.innerHTML = "Imperial Guard";
orksLabel.innerHTML = "Orks";
chaosLabel.innerHTML = "Chaos";
tyranidsLabel.innerHTML = "Tyranids";

/*Info Containers*/
let infoTitle = document.createElement('div');
let infoSummary = document.createElement('div');
let infoUnitTypes = document.createElement('div');

informationContainer.appendChild(infoTitle);
informationContainer.appendChild(infoSummary);
informationContainer.appendChild(infoUnitTypes);

infoTitle.classList.add('info-title');
infoSummary.classList.add('info-summary');
infoUnitTypes.classList.add('info-unit-types');


/*Info Elements*/

let selected = 0

/*Title*/
let titleText = document.createElement('h1');
    infoTitle.appendChild(titleText);
    titleText.innerHTML = info[selected].factionName;

/*Summary*/
let summaryText = document.createElement('p');
    infoSummary.appendChild(summaryText);
    summaryText.innerText = info[selected].summary;

/*Unit Types*/
let unitHeadingOne = document.createElement('h2');
    infoUnitTypes.appendChild(unitHeadingOne);
    unitHeadingOne.innerHTML = info[selected].troopTitleOne;
let unitTypesTextOne = document.createElement('p');
    infoUnitTypes.appendChild(unitTypesTextOne);
    unitTypesTextOne.innerHTML = info[selected].troopDescriptionOne;

let unitHeadingTwo = document.createElement('h2');
    infoUnitTypes.appendChild(unitHeadingTwo);
    unitHeadingTwo.innerHTML = info[selected].troopTitleTwo;
let unitTypesTextTwo = document.createElement('p');
    infoUnitTypes.appendChild(unitTypesTextTwo);
    unitTypesTextTwo.innerHTML = info[selected].troopDescriptionTwo;

let unitHeadingThree = document.createElement('h2');
    infoUnitTypes.appendChild(unitHeadingThree);
    unitHeadingThree.innerHTML = info[selected].troopTitleThree;
let unitTypesTextThree = document.createElement('p');
    infoUnitTypes.appendChild(unitTypesTextThree);
    unitTypesTextThree.innerHTML = info[selected].troopDescriptionThree;




    /*On Click Function*/
factionSpaceMarines.addEventListener('click', () => factionInfoClick(selected= 0));
factionAdMech.addEventListener('click', () => factionInfoClick(selected = 1));
factionGuard.addEventListener('click', () => factionInfoClick(selected= 2));
factionOrks.addEventListener('click', () => factionInfoClick(selected= 3));
factionChaos.addEventListener('click', () => factionInfoClick(selected= 4));
factionTyranids.addEventListener('click', () => factionInfoClick(selected= 5));

function factionInfoClick() {
    factionsContainer.classList.add('remove');
    enemiesContainer.classList.add('remove');
    forcesTitle.classList.add('remove');
    informationContainer.classList.remove('remove');
    titleText.innerHTML = info[selected].factionName;
    summaryText.innerText = info[selected].summary;
    unitHeadingOne.innerHTML = info[selected].troopTitleOne;
    unitTypesTextOne.innerHTML = info[selected].troopDescriptionOne;
    unitHeadingTwo.innerHTML = info[selected].troopTitleTwo;
    unitTypesTextTwo.innerHTML = info[selected].troopDescriptionTwo;
    unitHeadingThree.innerHTML = info[selected].troopTitleThree;
    unitTypesTextThree.innerHTML = info[selected].troopDescriptionThree;

}

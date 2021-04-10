/*Containers*/
const contactContainer = document.createElement('div');
const titleContainer = document.createElement('div');
const paraContainer = document.createElement('div');
const formContainer = document.createElement('div');
const emailValidationContainer = document.createElement('div');

/*Add Class*/
contactContainer.classList.add("email-container");
titleContainer.classList.add("title-container");
paraContainer.classList.add("para-container");
formContainer.classList.add("form-container");
emailValidationContainer.classList.add("email-validator-container");


/*Elements*/
let titleElement =document.createElement('h1');
let paraElement = document.createElement('p');
let nameInput = document.createElement('input');
let userInput = document.createElement('input');
let mailListElement = document.createElement('p');
let emailAddressInput = document.createElement('input');
let emailSumbitButton = document.createElement('button');

/*Element Id's*/
nameInput.id = "name-input";
userInput.id = "user-input";
emailAddressInput.id = "email-input";
emailSumbitButton.id = "email-submit";

/*Text Nodes*/
let titleText = document.createTextNode("Want to have your say on the Javascriptus Crusade?");
let emailDescription = document.createTextNode("What faction do you want to command? What enemies do you want to face? Let us know, there are always more crusades!");
let nameInputText = document.createTextNode("Insert you name here!");
let suggestionInput = document.createTextNode("What factions or enemies would you like to see in the game?");
let mailListText = document.createTextNode("Register with us and be notified of all updates to the game!");
let emailInput = document.createTextNode("Input your email here!");
/*Append Childs*/

/*Containers*/
document.body.appendChild(contactContainer);
contactContainer.appendChild(titleContainer);
contactContainer.appendChild(paraContainer);
contactContainer.appendChild(formContainer);
contactContainer.appendChild(emailValidationContainer);

titleContainer.appendChild(titleElement);

paraContainer.appendChild(paraElement);

formContainer.appendChild(nameInput);
formContainer.appendChild(userInput);

emailValidationContainer.appendChild(mailListElement);
emailValidationContainer.appendChild(emailAddressInput);
emailValidationContainer.appendChild(emailSumbitButton);
/*Elements*/
titleElement.appendChild(titleText);
paraElement.appendChild(emailDescription);
mailListElement.appendChild(mailListText);
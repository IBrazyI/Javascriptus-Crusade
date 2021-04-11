/*Containers*/
const contactContainer = document.createElement('div');
const titleContainer = document.createElement('div');
const paraContainer = document.createElement('div');
const formContainer = document.createElement('form');
const emailValidationContainer = document.createElement('form');

/*Contianer Class*/
contactContainer.classList.add("email-container");
titleContainer.classList.add("title-container");
paraContainer.classList.add("para-container");
formContainer.classList.add("form-container");
emailValidationContainer.classList.add("email-validator-container");


/*Elements*/
let titleElement =document.createElement('h1');
let paraElement = document.createElement('p');
let nameInput = document.createElement('input');
let checkNameInput = document.createElement('span');
let userInput = document.createElement('textarea');
let checkUserInput = document.createElement('span');
let suggestionSubmit = document.createElement('button');
let mailListElement = document.createElement('p');
let emailAddressInput = document.createElement('input');
let emailValidText = document.createElement('span');
let emailSumbitButton = document.createElement('button');

/*Element Id's*/
nameInput.id = "name-input";
userInput.id = "user-input";
suggestionSubmit.id = "suggestion-submit";
emailAddressInput.id = "email-input";
emailValidText.id = "email-valid";
emailSumbitButton.id = "email-submit";

/*Text Nodes*/
let titleText = document.createTextNode("Want to have your say on the Javascriptus Crusade?");
let emailDescription = document.createTextNode("What faction do you want to command? What enemies do you want to face? Let us know, there are always more crusades!");
let nameInputText = document.createTextNode("Insert you name here!");
let suggestionInput = document.createTextNode("What factions or enemies would you like to see in the game?");
let mailListText = document.createTextNode("Register with us and be notified of all updates to the game!");
let emailInput = document.createTextNode("Input your email here!");
let submitText = document.createTextNode("Submit.");

/*Containers Append*/
document.body.appendChild(contactContainer);
contactContainer.appendChild(titleContainer);
contactContainer.appendChild(paraContainer);
contactContainer.appendChild(formContainer);
contactContainer.appendChild(emailValidationContainer);

titleContainer.appendChild(titleElement);

paraContainer.appendChild(paraElement);

formContainer.appendChild(nameInput);
formContainer.appendChild(checkNameInput)
formContainer.appendChild(userInput);
formContainer.appendChild(checkUserInput);
formContainer.appendChild(suggestionSubmit);

emailValidationContainer.appendChild(mailListElement);
emailValidationContainer.appendChild(emailAddressInput);
emailValidationContainer.appendChild(emailValidText);
emailValidationContainer.appendChild(emailSumbitButton);


/*Elements Append*/
titleElement.appendChild(titleText);
paraElement.appendChild(emailDescription);
mailListElement.appendChild(mailListText);

/*Input Type*/

/*Suggestion Submit*/
nameInput.setAttribute('type', 'text');
nameInput.placeholder = nameInputText.wholeText;
nameInput.required;
checkNameInput.setAttribute('type', 'text');
userInput.setAttribute('type', 'textarea');
userInput.placeholder = suggestionInput.wholeText;
userInput.required;
checkUserInput.setAttribute('type', 'text');
suggestionSubmit.setAttribute('type', 'submit');
suggestionSubmit.textContent = submitText.wholeText;

/*Email Submit*/
emailAddressInput.setAttribute('type', 'email');
emailAddressInput.placeholder = emailInput.wholeText;
emailAddressInput.required;
emailValidText.setAttribute('type', 'text');
emailSumbitButton.setAttribute('type', 'submit');
emailSumbitButton.textContent = submitText.wholeText;


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
let emailAddressInput = document.createElement('input');
let emailSumbitButton = document.createElement('button');

/*Text Nodes*/
let titleText = document.createTextNode("Want to have your say on the Javascriptus Crusade?")
let emailDescription = document.createTextNode("What faction do you want to command? What enemies do you want to face? Let us know, there are always more crusades!")

/*Append Childs*/

/*Containers*/
document.body.appendChild(contactContainer);
contactContainer.appendChild(titleContainer);
contactContainer.appendChild(paraContainer);
contactContainer.appendChild(formContainer);
contactContainer.appendChild(emailValidationContainer);

titleContainer.appendChild(titleElement);

paraContainer.appendChild(paraElement);

/*Elements*/
titleElement.appendChild(titleText);
paraElement.appendChild(emailDescription);
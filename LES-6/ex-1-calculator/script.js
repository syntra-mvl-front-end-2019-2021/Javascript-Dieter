const sumSubmitBtn = document.querySelector('#sum-submit-btn');                       // id's ophalen en in variabele steken
const sumResultContainer = document.querySelector('#sum-result-container');
const productSubmitBtn = document.querySelector('#product-submit-btn');
const productResultContainer = document.querySelector('#product-result-container');
const numberInputContainer = document.querySelector('#input-container');
const addInputBtn = document.querySelector('#add-input-btn');
const numberCountContainer = document.querySelector('#number-count-container');

function sumNumbers() {
//   return the sum value of all the numbers
  const numberInputs = document.querySelectorAll('.number-input');              // inputvelden ophalen en in variabele steken
//   const numberInputs = document.getElementsByClassName('number-input');      // alternatief

  let totalSum = 0;                                                             // variabele eindresultaat op 0 zetten

  for (let numberInput of numberInputs) {                                       // lopen over variabele met elementen
    totalSum += parseInt(numberInput.value);                                    // telkens de value opvragen (value geeft altijd een string,
  }                                                                             // dus moet met parseInt omgezet worden naar nummer)
                                                                                // en optellen
//   for (let i = 0; i < numberInputs.length; i++) {                            // alternatief
//     totalSum += parseInt(numberInputs[i].value);
//   }

  return totalSum;                                                              // totalSum returnen
}

function printSum() {                                         
  // print the sum value of all the numbers             // de textContent van variabele sumResultContainer
  sumResultContainer.textContent = sumNumbers();        // vervangen door het resultaat van de functie sumNumbers
}

function multiplyNumbers() {
  // return the product of all the numbers
  const numberInputs = document.querySelectorAll(".number-input");              // inputvelden ophalen en in variabele steken
  let totalProduct = 1;                                                         // variabele eindresultaat op 1 zetten
  for (let i = 0; i < numberInputs.length; i++) {                               // for loop om over inputvelden te lopen 
    let numberInput = numberInputs[i];                                          // telkens de waarde van een index in een variabele steken
    totalProduct *= parseInt(numberInput.value);                                // telkens een waarde uithalen, omzettennaar getal en vermenigvuldigen
  }
  return totalProduct;                                                          // totalProduct returnen
}

function printProduct() {
  // print the product of all the numbers                   // de textContent van variabele productResultContainer
  productResultContainer.innerText = multiplyNumbers();     // vervangen door het resultaat van de functie MultiplyNumbers
}

function realTime(event) {
  printProduct();                                            // voert de functies uit
  printSum();
}

function printNumberCount() {
  // get and print the number of input fields
  const numberOfInputs = numberInputContainer.children.length;                       // lengte opvragen hoeveel kinderen er zijn van numberInputContainer
  // same result as >                                                                // en in variabele steken
  // const numberOfInputs = document.querySelectorAll('.input-number').length;
  numberCountContainer.innerText = numberOfInputs;                                   // de waarde van deze variabele met in numberCountContainer steken
}

function addNumberInput() {
//   add a number input
//   const existingInputGroup = document.querySelector('.number-input-group');       // html opgevraagd uit DOM via de class
//   const newInputGroup = existingInputGroup.cloneNode(true);                       // voorgaande in nieuwe variabele als clone (true= ook alle kinderen)
//   const newNumberInput = newInputGroup.querySelector('.number-input');            // de input opvragen binnen de variabele met clone
//   newNumberInput.value = '0';                                                     // value nieuw veld op 0 zetten, anders neemt hij waarde van eerste veld over
//   numberInputContainer.appendChild(newInputGroup);                                // variabele met clone achteraan toevoegen 

const newInputGroup = document.createElement('div');                              // variabele met nieuwe <div> creeëren
newInputGroup.classList.add('field', 'has-addons', 'number-input-group');         // classes toevoegen en hmtl toevoegen
newInputGroup.innerHTML += `                                                      
  <div class="control">
    <input class="input number-input" type="number" step="1" value="0">
  </div>
  <div class="control">
    <a class="button is-danger delete-number-input">
      X
    </a>
  </div>
</div>
  `;

numberInputContainer.appendChild(newInputGroup);                                  // de variabele op het einde toevoegen

  printNumberCount();                   // functie uitvoeren
  realTime();                           // functie uitvoeren
}

function removeNumberInput(eventInformation) {                                    // met eventInformation (kan elke benaming hebben)
  // remove a number input                                                        // kan je info opvragen in DOM (checken waarop geklikt werd)
  console.log(eventInformation.target, eventInformation.target.matches('.delete-number-input'));    // target opvragen waarop event gebeurde

  if (eventInformation.target.matches('.delete-number-input') && numberInputContainer.children.length > 2) { // checken of target overeenkomt met class
    const selectedInputGroup = eventInformation.target.closest('.number-input-group');                       // van verwijderknop en aantal kinderen > 2
    selectedInputGroup.remove();                     // variabele aanmaken en zoeken naar de dichtste parent met class .number-input-group 
                                                     // en dit verwijderen
    printNumberCount();                              // NumberCount updaten via functie 
    realTime();                                      // functie uitvoeren
  }
}

// add event listeners                                                      // click event toevoegen en functies aanspreken
sumSubmitBtn.addEventListener('click', printSum);                           //                 "          "
productSubmitBtn.addEventListener('click', printProduct);                   //                 "          "
addInputBtn.addEventListener('click', addNumberInput);                      //                 "          "
numberInputContainer.addEventListener('click', removeNumberInput);          //                 "          "
numberInputContainer.addEventListener('input', realTime);                   // input event op numberInputContainer en functie aanspreken
                                                                            // het input event staat op div, een event bubbled up en slaan op
                                                                            // alle parents
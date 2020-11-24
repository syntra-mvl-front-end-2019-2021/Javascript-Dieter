//select textarea
let userInput = document.getElementById('user-input');                  // ophalen van elementen uit DOM  en in variabelen steken
//select btn
let submitBtn = document.getElementById('submit-btn');
//select result container
let resultContainer = document.getElementById('result-container');
//# select wordCount
let wordCountContainer = document.getElementById('word-count');
//# select letterCount
let letterCountContainer = document.getElementById('letter-count');

function getUserInput() {
    //return value of userInput
    return userInput.value;
}

function textToWordArray(text) {                        // de tekst omzetten naar een array van woorden
    //return array of words
    return text.split(' ');                             // split met een parameter met spatie
}

function arrayToText(array) {
    return array.join(' ');                             // de array omzetten naar tekst met join
}

function getRandomNumber(max) {
    //return random number between 0 and max (including 0 and excluding max)
    return Math.floor(Math.random() * max);
}

function scrambleArray(oldArray) {                                  // parameter meegeven met functie, kunnen zo uit DOM halen
    //return scrambled array
    //   for (let i = oldArray.length-1; i >=0; i--) {
    //     let randomIndex = getRandomNumber(i);
    //     let randomValue = oldArray[randomIndex];
    //     let arrayValue = oldArray[i];
    //     oldArray[i] = randomValue;
    //     oldArray[randomIndex] = arrayValue;
    //   }

    const scrambledArray = [];                
    while (oldArray.length > 0) {                                   // loopt zolang er minstens 1 item in de array zit
        const randomIndex = getRandomNumber(oldArray.length);       // geeft getal tussen 0 en lengte van oldArray -1, want floor in functie
        const randomValue = oldArray.splice(randomIndex, 1);        // bij iedere loop wordt 1 item uit oldArray gehaald en in variabele gestoken
        scrambleArray.push(randomValue[0]);                         // telkens dit ene item gaan pushen in scrambleArray
    }

    return scrambleArray;                                           // returnen scrambleArray
}

function updateWordCount(array) {
    //# return word count
    wordCountContainer.innerHTML = array.length;               // de lengte van de array opvragen
}

function updateLetterCount(text) {
    //# return letter count
    letterCountContainer.innerHTML = text.length;              // de lengte van de tekst ophalen
}

function scrambleText(text) {
    // return scrambled text
    let array = textToWordArray(text);                         // nieuwe variabele, waarin resultaat van functie zit            
    updateWordCount(array);                                    // aantal woorden ophalen via functie
    let scrambled = scrambleArray(array);                      // nieuwe variabel met scrambleArray 
    return arrayToText(scrambled);                             // returnen via functie
}

function scramble() {
    // update textContent of resultContainer
    let text = getUserInput();                                 // text ophalen uit variabele en in nieuwe variabele steken
    let scrambledText = scrambleText(text);                    // nieuwe variabele, waarin resultaat zit van een functie
    resultContainer.innerHTML = scrambledText;                 // met innerHTML de inhoud vervangen
    updateLetterCount(text);                                   // 
}

//add click event listener to submitBtn                             // events zetten
submitBtn.addEventListener('click', scramble);
//## add input event listener to userinput for realTimeScramble
userInput.addEventListener('input', scramble);
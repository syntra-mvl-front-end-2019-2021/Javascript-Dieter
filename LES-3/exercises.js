// Return the largest element of array (all elements will be numbers), e.g. [1,2,3] → 3
function getLargestItemInArray(array) {             
    let largestVal = array[0];                      // varaiabele met de eerste element (index 0) uit de array

    for (let i = 1; i < array.length; i++) {        // loopen over array vanaf tweede element (index 1)
        if (largestVal < array[i]) {                // als waarde van variabele kleiner is dan waarde van index i
            largestVal = array[i];                  // variabele = waarde van index i
        }
    }

    return largestVal;
}

// Reverse order of array, e.g. [1,2,3] → [3,2,1]
function reverseArray(anArray) {                            
    let reversedArray = [];                                 // nieuwe variabele met nieuwe array, moet op voorhand gedeclareerd zijn

    for (let anArrayIndex in anArray) {                     // loopen over array met for in
        reversedArray.unshift(anArray[anArrayIndex]);       // telkens een item vooraan toevoegen
    }

    return reversedArray;
}

// Make a sum of all elements, e.g. [1,2,3] → 6
function arraySum(anArray) {
    let result = 0;                             // variabele aanmaken met waarde 0

    for (let anArrayIndex in anArray) {         // loopen over array
        result += anArray[anArrayIndex];        // telkens de optellen bij result
    }

    return result;
}

// Make a string of the first letter of each element of array, e.g. ['Dog', 'cat', 'snake'] → 'Dcs'
function stringOfFirstLetters(anArray) {
    let result = '';                                        // variabele aanmaken met lege string

    for (let anArrayIndex in anArray) {                     // lopen over array
        result += anArray[anArrayIndex].substr(0, 1);       // telkens de eerste letter van de nemen en toevoegen
        // anArray[anArrayIndex][0]
    }

    return result;
}

// Combines two arrays by alternatingly taking elements, e.g. ['a','b','c'], [1,2,3] → ['a',1,'b',2,'c',3].
function combineArrays(arrayOne, arrayTwo) {
    let result = [];                                                                // variabele aanmaken met lege array
    let longestLength =                                                             // variabele aanmaken
        arrayOne.length > arrayTwo.length ? arrayOne.length : arrayTwo.length;      // de langste array eruit halen door controleren ofdat 
                                                                                    // de lengte arrayOne > lengte arrayTwo ? indien ja
    for (let i = 0; i < longestLength; i++) {                                       // longestLenght = arrayOne.lenght, indien nee
        if (arrayOne[i] !== undefined) {                                            // longestLenght = arrayTwo.lenght
            result.push(arrayOne[i]);               // als index bij ArrayOne niet undefined is, push die index in result array
        }

        if (arrayTwo[i] !== undefined) {            // als index bij ArrayTwo niet undefined is, push die index in result array
            result.push(arrayTwo[i]);
        }
    }

    return result;
}

// Takes a number and returns a list of its digits. e.g. 2342 → [2,3,4,2]
function numberToDigitArray(aNumber) {
    let digitStringArray = aNumber.toString().split('');    // variabele aanmaken, string gemaakt van aNumber
    let result = [];                                        // en dan array gemaakt van string, geeft ['2', '3', '4', '2'], zijn nog steeds strings

    for (let i in digitStringArray) {                       // lopen over array
        result.push(parseInt(digitStringArray[i]));         // strings met parseInt omgezet en in lege array gepushed
    }

    return result;
}

// Translates a text to Pig Latin.
// English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’.
// e.g. “The quick brown fox” → “Hetay uickqay rownbay oxfay”.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// let aString = 'The quick brown fox';
// console.log(aString);
// console.log(aString.split(' '));

function translateToPigLating(aString) {
    let wordArray = aString.split(' ');         // spatie tussen ' ', maakt een array met alle woorden
    let pigLtnArray = [];                       // lege array aanmaken

    for (let i in wordArray) {                                  // loopen over wordArray
        let curWord = wordArray[i];                             // bij iedere loop het woord op index i in variabele steken
        let curWordFirsLetter = curWord.substr(0, 1); // T      // bij iedere loop de eerste letter van dat woord in variabele steken
        let curWordOtherLetters = curWord.substr(1); // he      // bij iedere loop de rest van het woord in variabele gestoken

        if (curWordFirsLetter === curWordFirsLetter.toUpperCase()) {    // checken ofdat eerste letter een hoofdletter is, indien ja
            curWordOtherLetters =                                       
                curWordOtherLetters.substr(0, 1).toUpperCase() +        // de eerste letter van de rest van het woord omzetten in hoofdletter +
                curWordOtherLetters.substr(1); // He                    // de letters na de eerste letter toevoegen

            curWordFirsLetter = curWordFirsLetter.toLowerCase(); // t   // de eerste letter naar kleine letter
        }

        let pigLtnWord = curWordOtherLetters + curWordFirsLetter + 'ay';    // woord samenstellen
        pigLtnArray.push(pigLtnWord);                                       // resultaat in de array pushen
    }

    return pigLtnArray.join(' ');             // van de array opnieuw een string maken    
}

// Converts English text to Morse code.
// https://en.wikipedia.org/wiki/Morse_code#/media/File:International_Morse_Code.svg
// e.g. 'Hello World' → '****|*|*_**|*_**|___| *__|___|*_*|*_**|_**|'
// if (iets = 'h') {
// iets doen
// } else if (iets = 'e') {

// }...

// switch (iets) {
//     case 'H':
//     case 'h':
//         console.log('h');
//         break;
//     case 'e':
//         console.log('e');
//         break;
//     default:
//         console.log('kweetnie');
//         break;
// }

function letterToMorse(letter) {        // functie aangemaakt dat letter omzet naar morsecode
    let morseLetter;

    switch (letter.toLowerCase()) {     // de letter omzetten naar kleine letter
        case 'a':
            morseLetter = '*_';
            break;
        case 'b':
            morseLetter = '_***';
            break;
        case 'c':
            morseLetter = '_*_*';
            break;
        case 'd':
            morseLetter = '_**';
            break;
        case 'e':
            morseLetter = '*';
            break;
        case 'f':
            morseLetter = '**_*';
            break;
        case 'g':
            morseLetter = '__*';
            break;
        case 'h':
            morseLetter = '****';
            break;
        case 'i':
            morseLetter = '**';
            break;
        case 'j':
            morseLetter = '*___';
            break;
        case 'k':
            morseLetter = '_*_';
            break;
        case 'l':
            morseLetter = '*_**';
            break;
        case 'm':
            morseLetter = '__';
            break;
        case 'n':
            morseLetter = '_*';
            break;
        case 'o':
            morseLetter = '___';
            break;
        case 'p':
            morseLetter = '*__*';
            break;
        case 'q':
            morseLetter = '__*_';
            break;
        case 'r':
            morseLetter = '*_*';
            break;
        case 's':
            morseLetter = '***';
            break;
        case 't':
            morseLetter = '_';
            break;
        case 'u':
            morseLetter = '**_';
            break;
        case 'v':
            morseLetter = '***_';
            break;
        case 'w':
            morseLetter = '*__';
            break;
        case 'x':
            morseLetter = '_**_';
            break;
        case 'y':
            morseLetter = '_*__';
            break;
        case 'z':
            morseLetter = '__**';
            break;
    }

    return morseLetter;
}

function translateToMorse(aString) {
    let aStringArray = aString.split('');       // array per letter maken van string
    let resultArray = [];                       // lege array aanmaken

    for (let i in aStringArray) {               // lopen over array (die met telkens een letter)
        let curLetter = aStringArray[i];        // nieuwe variabele met telkens de letter op index i

        if (curLetter === ' ') {                                // indien de letter waar nu over geloopt wordt een spatie is,
            resultArray.push(' ');                              // gewoon pushen
        } else {                                                // indien niet
            resultArray.push(letterToMorse(curLetter) + '|');   // voer functie uit + |
        }
    }

    return resultArray.join('');                // array terug omzetten naar string
}

// Write a more advanced version of the previous function
// Where the unnecessary | is omitted
// e.g. 'Hello World' → '****|*|*_**|*_**|___ *__|___|*_*|*_**|_**'\
function translateToMorseFancy(aString) {
    let aStringArray = aString.split(' ');                  // array per woord maken van string
    let resultArray = [];                                   // lege array aanmaken

    for (let i in aStringArray) {                           // loopen over woord array
        let curWordArray = aStringArray[i].split('');       // array maken van string

        for (let j in curWordArray) {                       // loopen over de letters in het woord
            let curLetter = curWordArray[j];                // nieuwe variabele met telkens de letter op index j
            resultArray.push(letterToMorse(curLetter));     // functie uitvoeren en pushen naar resultArray

            if (j < curWordArray.length - 1) {              // controleren ofdat de index j kleiner is dan lengte van de array -1, 
                resultArray.push('|');                      // dus, indien het niet de laatste letter is, | pushen, anders niet
            }
        }                                                   // wanneer einde van woord bereikt, stopt deze loop
                                                            // gaat verder naar andere loop
        if (i < aStringArray.length - 1) {                  // controleren ofat de index i kleiner is dan de lengte van de array -1,
            resultArray.push(' ');                          // dus, indien het niet het laatste woord is, spatie pushen, anders niet
        }
    }

    return resultArray.join('');                            // array omzetten naar string
}
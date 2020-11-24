// Return the largest element of array (all elements will be numbers), e.g. [1,2,3] → 3
function  getLargestItemInArray( array ) {

    let largestVal = array[0];

        for (let i = 1; i < array.length; i++) {
            if (array[i] > largestVal) {
            largestVal = array[i];
            }
        }
        
return largestVal;
}

// Reverse order of array, e.g. [1,2,3] → [3,2,1]
function reverseArray(anArray) {

    let reversedArray = [];

    for (let i = 0; i < anArray.length; i++) {
        reversedArray.unshift(anArray[i])
    }

return reversedArray;
}

// Make a sum of all elements, e.g. [1,2,3] → 6
function arraySum(anArray) {

let sum = null;

    for (let i = 0; i < anArray.length; i++) {
        sum += anArray[i];
    }

return sum;
}

// Make a string of the first letter of each element of array, e.g. ['Dog', 'cat', 'snake'] → 'Dcs'
function stringOfFirstLetters(anArray) {

let firstLetters = '';

    for (let i = 0; i < anArray.length; i++) {
        firstLetters += anArray[i].charAt(0);
    }

return firstLetters;
}

// Combines two arrays by alternatingly taking elements, e.g. ['a','b','c'], [1,2,3] → ['a',1,'b',2,'c',3].
function combineArrays(arrayOne, arrayTwo) {

let combined = [];

  
    for (let i = 0; i < arrayOne.length || i < arrayTwo.length; i++ ){
        combined.push(arrayOne[i], arrayTwo[i]);
    }

return combined.filter(noNull => noNull != null);
}

// Takes a number and returns a list of its digits. e.g. 2342 → [2,3,4,2]
function numberToDigitArray(aNumber) {

let list = Array.from(String(aNumber), Number);
return list;
}

// Translates a text to Pig Latin.
// English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’.
// e.g. “The quick brown fox” → “Hetay uickqay rownbay oxfay”.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// let aString = 'The quick brown fox';
// console.log(aString);
// console.log(aString.split(' '));

function translateToPigLating(aString) {

//convert the sentence to lowercase letters and split the sentence into an array of words
var words = aString.toLowerCase().split(" ");

//create an array to hold the new pigLatin sentence
let pigLatinSentence = [];

    //loop through each word in the new array and split it to an array of characters
    for (i=0 ;i < words.length ; i++) {
        letters = words[i].split("");
   
        //extract the first element of the array, concantenate with "ay" and push it to the array of letters
        letters.push(letters.splice(0,1)+"ay");
    
        //join the letters to form a new word
        word = letters.join('');
    
        //if it is the first word of the sentence, convert the first letter to UpperCase
        if (i===0){
        word = word.slice(0,1).toUpperCase() + word.slice(1);
        }
   
    //push the newly formed words to the pigLatinSentence array
    pigLatinSentence.push(word);
    }
 
 //join the words to form a new sentence
 pigLatinSentence = pigLatinSentence.join(" ");
 return pigLatinSentence;
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

function translateToMorse(aString) {






}

// Write a more advanced version of the previous function
// Where the unnecessary | is omitted
// e.g. 'Hello World' → '****|*|*_**|*_**|___ *__|___|*_*|*_**|_**'\
function translateToMorseFancy(aString) {






}
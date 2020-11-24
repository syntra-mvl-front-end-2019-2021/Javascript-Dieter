// Count the number of occurrences of a word in a sentence in,
// e.g. 'Ik heb honger, heb jij ook honger.', 'heb' → 2
function wordCount(sentence, word) {
    const wordArray = sentence.split(' ');                      // array maken van alle woorden in sentence, split met spatie tussen ' '
    let wordCount = 0;                                          // variabele om te tellen aangemaakt, met 0 als waarde
    for (let curWord of wordArray) {                            // met for (wordt de waarde in de variabale gestoken en niet de index)
        if (curWord.toLowerCase() === word.toLowerCase()) {     // loopen over de array met alle woorden uit sentence
            wordCount++;                                        // op dit woord een toLowerCase toepassen en vergelijken met word
        }                                                       // indien gelijk, eentje optellen bij wordcount
    }

    return wordCount;
}

// Calculate scrabbleScore of a word
// See letter values here: https://www.playmeo.com/face-value-scrabble-tiles/
// letterMultipliers, an array of objects like this:
// [{index: 2, multiplier: 2}, {index: 5, multiplier: 3}]
// → this would mean the letter with index 2 has to be multiplied by 2
// and the letter with index 5 has to be multiplied by 3
// wordMultiplier → the number of times the word score has to be multiplied
// 'hello', [{index: 2, multiplier: 2}], 1
function letterVal(letter) {                                           // functie om waarde van letter te bepalen
    const upperCaseLetter = letter.toUpperCase();                      // variabele met letter omgezet naar hoofdletter
    const letterVals = {                                               // variabele met een object,
        1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'S', 'T', 'R'],         // de key is de score, met telkens de letters in een array
        2: ['D', 'G'],
        3: ['B', 'C', 'M', 'P'],
        4: ['F', 'H', 'V', 'W', 'Y'],
        5: ['K'],
        8: ['J', 'X'],
        10: ['Q', 'Z'],
    };

    for (let letterValue in letterVals) {                               // loopen over object, eerste keer over 1, dan 2,... de letterValue (= key)
        if (letterVals[letterValue].includes(upperCaseLetter)) {        // checken ofdat de uppperCaseLetter voorkomt in de array van de key
            return parseInt(letterValue);                               // indien deze voorkomt, de key returnen als getal
        }
    }

    return 0;                                                           // indien niets gevonden, return 0
}

function scrabbleScoreCalculator(word, letterMultipliers, wordMultiplier) {     
    const letterArray = word.toUpperCase().split('');                   // variabele met array van alle letters van het woord en naar hoofdletters
    let wordScore = 0;                                                  // variabele voor score met waarde 0
    for (let letterIndex in letterArray) {                              // lopen over array, met telkens de index
        let letterScore = letterVal(letterArray[letterIndex]);          // variabele met als waarde bepaalt door de functie letterVal

        for (let letterMultiplier of letterMultipliers) {               // lopen over de array letterMultipliers en telkens een object eruithalen
            if (letterMultiplier.index === parseInt(letterIndex)) {     // als de index van de lettermultiplier = aan de letterIndex
                letterScore *= letterMultiplier.multiplier;             // dan letterMultiplier vermenigvuldigen multiplier
            }
        }

        wordScore += letterScore;                                       // op einde van loop de wordScore en letterScore optellen
    }

    return wordScore * wordMultiplier;                                  // wordscore vermenigvuldigen met wordMultiplier
}

// Determine if a sentence is a pangram
// https://en.wikipedia.org/wiki/Pangram
// e.g. 'The quick brown fox jumps over the lazy dog' → true
function isPangram(sentence) {                                          // functie aanmaken 
    const alphabet = [                                                  // variabele met een array met alle letters van alfabet
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];

    for (let letter of alphabet) {                          // lopen over alfabet
        if (!sentence.toLowerCase().includes(letter)) {     // checken ofdat alle letters uit de array van alphabet voorkomt in sentence
            return false;                                   // checkt dus ofdat a voorkomt, dan b, dan c,... (.includes geeft een boolean terug)
        }                                                   // returnt false indien een letter niet voorkomt
    }                                                       // en stopt de loop meteen
    return true;                                            // indien over alle letters geloopt, geeft true
}

// Given a word and a list of possible anagrams,
// return an array with all the correct anagrams.
// e.g. 'master', ['stream', 'pigeon', 'maters'] → ['stream', 'maters']
function removeSpaces(word) {                                               // fuctie om spaties eruit te halen
    return word.split(' ').join('');                                        // array maken van alle letters en dan terugomzetten naar een string
}

function isAnagram(word, possibleAnagram) {                                 // functie isAnagram
    const spacelessWord = removeSpaces(word);                               // spaties uit word halen via functie
    const spacelessPossibleAnagram = removeSpaces(possibleAnagram);         // spaties uit possibleAnagram halen via functie

    const letterArray = spacelessWord.toLowerCase().split('');              // array maken van alle letters van word (nieuwe lege array met '')
                                                                            // 'test' wordt ['t','e','s','t'] 
    if (spacelessWord.length !== spacelessPossibleAnagram.length) {         // eerste check ofdat spacelessWord even lang is als spacelessPossibleAnagram,
        return false;                                                       // indien niet gelijk, geeft false en stopt deze loop,
    }                                                                       // for loop zal niet meer uitgevoerd worden

    for (let letter of letterArray) {                                       // lopen over letterarray (=word zonder spaties) en telkens 1 letter in variabele letter steken
        if (!possibleAnagram.toLowerCase().includes(letter)) {              // checken ofdat alle van possibleAnagram voorkomen in variabele letter
            return false;                                                   // checkt dus ofdat 1e letter voorkomt, dan 2e,... (.includes geeft een boolean terug)
        }                                                                   // returnt false indien een letter niet voorkomt
    }

    return true;                                                            // returnt true indien beiden geen false geven
}

function findAnagrams(word, possibleAnagrams) {
    let anagrams = [];                                       // aanmaken lege array voor anagrams  

    for (let possibleAnagram of possibleAnagrams) {          // loopen over array dat gegeven wordt en telkens een woord in de variabele possibleAnagram steken
        if (isAnagram(word, possibleAnagram)) {              // de functie isAnagram oproepen, met als gegeven, het woord en dan het woord uit de variabele possibleAnagram
            anagrams.push(possibleAnagram);                  // de functie return true of false, indien true, push naar anagrams
        }
    }

    return anagrams;
}
let Avariable = 3;
let AnotherVariable = 5;

Avariable = AnotherVariable + 1;

console.log(Avariable); // 6

function sum(a, b) {
    return a = b;
}

Avariable = sum(5, 6);
console.log(Avariable); // 11

Avariable = Avariable + 1;
console.log(Avariable); // 12

Avariable +=2;
console.log(Avariable); // 14



let newVar = 5;
let otherNewVar = 5;

console.log(++newVar);
console.log(newVar++);

console.log('increment:');
console.log(++newVar);
console.log(otherNewVar++);
console.log(otherNewVar);

let a = 10 + 10; // 20
let b = 5 * 5; // 25
let c = 12 - 6; // 6
let d = 20 / 5; // 4


if ('') {
    console.log('ik ben true');
} else if ('') {
    console.log('ik niet');
} else {
    console.log('ik helemaal niet');
}

if (true && true) { // AND
    console.log ('alletwee true'):
}

if (true || false) { // OR
    console.log('eentje is genoeg');
}

if (true && (true || false)) {
    console.log('hoe meer zielen hoe meer vreugde');
}

let aString;

if (d > 5) {
    aString = 'Groter dan 5';
} else { 
    aString = 'Kleiner of gelijk aan 5';
}

// vorige maar korter:
let bString = d > 5 ? 'Groter dan 5' : 'Kleiner of gelijk aan 5';
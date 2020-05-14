// while (voorwaarde) {
// iets om te doen
// }

let teller = 1;
let getal = 10;

while (teller <= 10) {
    console.log(getal - teller);
    teller++;
}

// for (index; voorwaarde; indexbewerking) {
// doe iets
// }

for (let i = 0; i <= 10; i++) {
    console.log(getal - i);
}


let anArray = [4,5,6,];

for (let i = 0; i < anArray.length; i++) {
    console.log('item ' + i + ':' + anArray[i]);
}

// for (waarde in array) {
// doe iets
// }

for (let arrayIndex in anArray) {
    console.log('item ' + arrayIndex + ':' + anArray[arrayIndex]);
}

for (let objectKey in anObject) {
    console.log('item ' + objectKey + ':' + anArray[objectKey]);
}
let a = 10;
let b = 33;

function sum(a, b) {
    let sumVal = a + b;
    return sumVal;
}

let eleven = sum(5, 6);
console.log(eleven);

function test () {
    let a = 15;
    b = 16;
    console.log(a); // komt van lijn 14, binnen de functie
    console.log(b);
}

test();

console.log(a); // komt van lijn 1, buiten de functie
console.log(b);

function doSomethingWithTwo(something) {
    let result = something(2);
    console.log(result);
}

function plusFour(num) {
    return num + 4;
}
doSomethingWithTwo(plusFour);
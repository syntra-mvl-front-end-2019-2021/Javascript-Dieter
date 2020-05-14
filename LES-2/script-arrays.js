let anArray = [4, 7, 3];
console.log(anArray);
console.log(anArray.length);

let anotherArray = new Array (3, 4, 5);
console.log(anotherArray);

console.log(anArray[1]);

anArray[2] = 10;
console.log(anArray);

console.log(anArray.join(' - '));

anArray.push(2); // achteraan toevoegen
console.log(anArray);

anArray.pop();
console.log(anArray);

anArray.unshift(3, 6);
console.log(anArray);

anArray.shift();
console.log(anArray);

let concatArray = anArray.concat(anotherArray);
console.log(concatArray);

let subArray = concatArray.slice(2, 5);
console.log(subArray);

let splicedArray = concatArray.splice(2, 3, 11, 12, 13)
console.log(concatArray);
console.log(splicedArray); // geeft de verwijderde waardes van splice


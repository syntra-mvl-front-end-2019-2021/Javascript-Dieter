let anObject = {
    valOne: 'test',
    val_two: 2,
    'val space': false,
    valObject: {
        subVal: 'test',
    },
    valFunction: function(a) {
        console.log(this);
        return ++a;
    }
};

console.log(anObject);
console.log(anObject['val space']);
console.log(anObject.valOne);
console.log(anObject.valFunction(3));

let keyVal = 'val_two';
console.log(anObject[keyVal]);

let person = {
    firstName: 'Dieter',
    lastName: 'Handekyn',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}
console.log(person.fullName());

console.log(Object.keys(person));

let personKeys = Object.keys(person);
personKeys[0];
console.log(personKeys.length);
let person = {
    firstName : 'sandeep',
    lastName : 'gupta'
}

// dot notation
console.log(person.firstName);

// array notation
console.log(person['lastName']);

// to add properties in Object

person.age = 25;

console.log(person.age);

// delete properties from object

delete person.lastName;

console.log(person);

// for in loop user array[] to fetch
 
for (key in person){
    console.log(key + ":" + person[key]);
}
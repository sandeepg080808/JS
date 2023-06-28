console.log("Sandeep");

let book = ["Hindi", "Physics","Math", "Bio", "English"];

book.push("AddElementAtIndextLast");

book.unshift("AddElementAtIndextZero");

// TO REMOVE element from last
book.pop();

// to remove element from first
book.shift();

// to remove from element at indext 1 and no element to be removed from index 1
book.splice(1,2);

// Two ways to empty array
//book = [];

//book.length = 0;

// to find indeX oF element in array
let position = book.indexOf("Bio");

console.log(book);
console.log(position); 

let text = "This is a random text";

// converting text into Array
let wordArray = text.split(" ");
console.log(wordArray);

// to convert array into text
let arrayIntoText = book.join(" ");
console.log(arrayIntoText);

// to join to two or more array

let book2 = ["JS", "React"];

// to join 2 array
let newBook = book.concat(book2);
console.log(newBook);

// to join 3 array
let book3 = ["NodeJS", "DB"];
let newBook2 = book.concat(book2,book3);
console.log(newBook2);

//Multi- Dimensional Array

let bookWithPages = [["Maths","100"],["Bio","200"],["Cs","300"]];
console.log(bookWithPages[1][1]);

//forEach Loop

book.forEach(myfu);

function myfu(value){
    console.log(value)
} 

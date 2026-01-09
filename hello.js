let hello = "Hello from hello.js!";
hello.slice(0, 5);  //getting multiple characters from the string
console.log(hello);

let inputText = " Here is my input   ";
inputText.trim(); //removing whitespace from the beginning and end of the string
console.log(inputText);

//finding the length of a string and it's last index in a an array
let myString = "Hello, World!";
console.log(myString.length); // 13
console.log(myString[myString.length - 1]); // "!" (last character)

//Adding elements to an array using push
let myArray = ["apple", "banana", "cherry"];
myArray.push("date"); // Adds "date" to the end of the array
console.log(myArray); // ["apple", "banana", "cherry", "date"]

//Removing the last element from an array using pop
myArray.pop(); // Removes "date" from the end of the array
console.log(myArray); // ["apple", "banana", "cherry"]

//unshifting elements from the beginning of an array
myArray.unshift("kiwi"); // Adds "kiwi" to the beginning of the array
console.log(myArray); // ["kiwi", "apple", "banana", "cherry"]

//Removing the first element from an array using shift
myArray.shift(); // Removes "kiwi" from the beginning of the array
console.log(myArray); // ["apple", "banana", "cherry"]

//Using concat to merge two arrays
let array1 = ["a", "b", "c"];
let array2 = ["d", "e", "f"];
let mergedArray = array1.concat(array2); // Merges array1 and array2
console.log(mergedArray); // ["a", "b", "c", "d", "e", "f"]

//Using concat to merge multiple arrays
let array3 = ["g", "h", "i"];
let mergedMultipleArrays = array1.concat(array2, array3); // Merges array1, array2, and array3
console.log(mergedMultipleArrays); // ["a", "b", "c", "d", "e", "f", "g", "h", "i"]

//Finding the index of an element in an array
let fruits = ["apple", "banana", "cherry"];
let index = fruits.indexOf("banana"); // Finds the index of "banana"
console.log(index); // 1 (index of "banana")

//Finding the index of an element that does not exist
let notFoundIndex = fruits.indexOf("orange"); // "orange" is not in the array
console.log(notFoundIndex); // -1 (not found)

//Turning an array into a string using join
let arrayToJoin = ["Hello", "World", "from", "join"];
let joinedString = arrayToJoin.join(" "); // Joins the array elements with a space
console.log(joinedString); // "Hello World from join"

//key value pairs in an object
let person = {  
    name: "John",
    age: 30,
    city: "New York"
    };

//Accessing object properties using dot notation
console.log(person.name); // "John"

//Accessing object properties using bracket notation
console.log(person["age"]); // 30

//Adding a new property to an object
person.country = "USA"; // Adds a new property "country"
console.log(person); // { name: "John", age: 30, city: "New York", country: "USA" }

//Updating an existing property in an object
person.age = 31; // Updates the "age" property  
console.log(person); // { name: "John", age: 31, city: "New York", country: "USA" }

//Removing a property from an object using delete
delete person.city; // Removes the "city" property
console.log(person); // { name: "John", age: 30, country: "USA" }

//Checking if a property exists in an object using in operator
console.log("name" in person); // true (property exists)
console.log("city" in person); // false (property does not exist)

//Iterating over object properties using for...in loop
for (let key in person) {
    console.log(key + ": " + person[key]); // Logs each key-value pair
}

//objects.keys() to get an array of keys
let keysArray = Object.keys(person); // Gets an array of keys from the object
console.log(keysArray); // ["name", "age", "country"]

//object.entries() to get an array of key-value pairs
let entriesArray = Object.entries(person); // Gets an array of key-value pairs
console.log(entriesArray); // [["name", "John"], ["age", 30], ["country", "USA"]]

//combining objects using Object.assign
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let combinedObject = Object.assign({}, obj1, obj2); // Combines obj1 and obj2
console.log(combinedObject); // { a: 1, b: 3, c: 4 }

//nesting with literals
let trilogies = [
     {
    title: "His Dark Materials",
    author: "Philip Pullman",
    books: ["Northern Lights", "The Subtle Knife", "The Amber Spyglass"]
    },
     {
    title: "Broken Earth",
    author: "N. K. Jemisin",
    books: ["The Fifth Season", "The Obelisk Gate", "The Stone Sky"]
    }
    ];
console.log(trilogies[1].books[0]); // "The Fifth Season" (accessing nested array in an object) 

//Nesting with Variables
let bookSeries = {
    seriesName: "The Lord of the Rings",
    books: [
        { title: "The Fellowship of the Ring", author: "J.R.R. Tolkien" },
        { title: "The Two Towers", author: "J.R.R. Tolkien" },
        { title: "The Return of the King", author: "J.R.R. Tolkien" }
    ]
};
console.log(bookSeries.books[1].title); // "The Two Towers" (accessing nested object in an array)

// Printing Nested Objects with JSON.stringify
let nestedObject = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "hiking"],
    address: {
        city: "Wonderland",
        zip: "12345"
    }
};
console.log(JSON.stringify(nestedObject, null, 2)); // Pretty prints the nested object

//Conditionals and Loops
// Using if-else statements to check conditions
let age = 20;
let number = 10;
if (number > 0) {
    console.log("The number is positive.");
}

else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

//for loop to iterate through an array
let fruitsList = ["apple", "banana", "cherry"];
for (let i = 0; i < fruitsList.length; i++) {
    console.log(fruitsList[i]); // Logs each fruit in the array
}

//while loop to repeat an action until a condition is met
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++; // Increments count by 1
}

//do-while loop to ensure the code runs at least once
let i = 0;
do {
    console.log("i is: " + i);
    i++; // Increments i by 1
}while (i < 3); // Executes at least once, even if i is initially 3

//for...of loop to iterate over iterable objects like arrays
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number); // Logs each number in the array
}

//for...in loop to iterate over object properties
let personInfo = {
    name: "Alice",
    age: 25,
    city: "Wonderland"
};
for (let key in personInfo) {
    console.log(key + ": " + personInfo[key]); // Logs each key-value pair in the object
}

//Iterating over an object using for...in loop
let personDetails = {
    name: "Bob",
    age: 30,
    hobbies: ["reading", "gaming"]
};
for (let key in personDetails) {
    console.log(key + ": " + personDetails[key]); // Logs each key-value pair in the object
}

//Declaring a function to greet a user
function greetUser(name) {
    return "Hello, " + name + "!";
}
console.log(greetUser("Alice")); // "Hello, Alice!"

//Function returning a value
function addNumbers(a, b) {
    return a + b; // Returns the sum of a and b
}   
console.log(addNumbers(5, 10)); // 15

//Difference between var, let and const
// var is used for function-scoped variables
var x = 10;
console.log(x); // 10

// let is used for block-scoped variables
let y = 20;
console.log(y); // 20

// const is used for block-scoped constants
const z = 30;
console.log(z); // 30

//Multi-dimensional Arrays
let multiArray = [
    [1, 2, 3],      
    [4, 5, 6],
    [7, 8, 9]
];
console.log(multiArray[1][2]); // 6 (accessing element in a 2D array)






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

//functions
function multiply(a, b) {
    return a * b; // Returns the product of a and b
}   
console.log(multiply(4, 5)); // 20

//complex funcions with conditionals if-else, && || operators
function checkNumber(num) {
    if (num > 0 && num % 2 === 0) {
        return "The number is positive and even.";
    } else if (num > 0 && num % 2 !== 0) {
        return "The number is positive and odd.";
    } else if (num < 0) {
        return "The number is negative.";
    } else {
        return "The number is zero.";
    }
}
console.log(checkNumber(8)); // "The number is positive and even."
console.log(checkNumber(7)); // "The number is positive and odd."
console.log(checkNumber(-3)); // "The number is negative."
console.log(checkNumber(0)); // "The number is zero."

//Switch statement
function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Adwoa";
            break;
        case 2:
            dayName = "Abenaa";
            break;
        case 3:
            dayName = "Akua";
            break;
        case 4:
            dayName = "Yaa";
            break;
        case 5:
            dayName = "Afia";
            break;
        case 6:
            dayName = "Ama";
            break;
        case 7:
            dayName = "Akosua";
            break;
        default:
            dayName = "Invalid day number";
    }
    return dayName;
}
console.log(getDayName(3)); // "Akua"

//Nested Objects
let game = {
    player: {
        name: "Hero",
        health: 100,
        inventory: {
            gold: 50,
            potions: 3
        }
    },
    enemy: {
        type: "Goblin",
        health: 80
    }
};
console.log(game.player.inventory.gold); // 50 (accessing nested object property)

//Accessing arrays in key value pairs
let library = {
    books: [
        { title: "1984", author: "George Orwell" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" }
    ]
};
console.log(library.books[1].title); // "To Kill a Mockingbird" (accessing array of objects in an object)   
   
      //while loops
      let j = 0;
      while (j < 5) {
          console.log("While loop iteration: " + j);
          j++;
      }

      //for loops
        for (let k = 0; k < 5; k++) {
            console.log("For loop iteration: " + k);
        }

        //Iterating through an array using for loop
        let colors = ["red", "green", "blue"];
        for (let m = 0; m < colors.length; m++) {
            console.log("Color: " + colors[m]);
        }
        
        //Nested for loops
        for (let p = 1; p <= 3; p++) {
            for (let q = 1; q <= 2; q++) {
                console.log("Outer loop: " + p + ", Inner loop: " + q);
            }
        }
    
        //Do.while loop
        let n = 0;
        do {
            console.log("Do-while loop iteration: " + n);
            n++;
        } while (n < 3);
        
        //Random Numbers
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min; // Returns a random integer between min (inclusive) and max (exclusive)
        }
        console.log(getRandomInt(1, 10)); // Random integer between 1 and 9

        function getRandomFloat(min, max) {
            return Math.random() * (max - min) + min; // Returns a random float between min (inclusive) and max (exclusive)
        }
        console.log(getRandomFloat(1.5, 5.5)); // Random float between 1.5 and 5.5

        //Random Whole numbers with a range
        function getRandomWholeNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min; // Returns a random whole number between min and max (both inclusive)
        }
        console.log(getRandomWholeNumber(1, 10)); // Random whole number between 1 and 10
        
        //parseInt with or without radix
        let intString = "42";
        console.log(parseInt(intString)); // 42
        console.log(parseInt(intString, 10)); // 42 (with radix 10)
        
        //Ternary Operator
        function checkAge(age) {
            return age >= 18 ? "Adult" : "Minor"; // Returns "Adult" if age is 18 or older, otherwise "Minor"
        }
        console.log(checkAge(20)); // "Adult"
        console.log(checkAge(16)); // "Minor"

        //Multiple ternary operators
        function getGrade(score) {
            return score >= 90 ? "A" :
                     score >= 80 ? "B" :
                        score >= 70 ? "C" :
                            score >= 60 ? "D" : "F"; // Returns grade based on score
        }
        console.log(getGrade(85));
        console.log(getGrade(72));
        
        //Use strict
        function isEqual(a, b) {
            "use strict";
            return a === b; // Returns true if a and b are strictly equal
        }
        console.log(isEqual(5, '5')); // false
        console.log(isEqual(5, 5)); // true

        //Mutate an array declared with const
        const myConstArray = [1, 2, 3];
        myConstArray.push(4);
        console.log(myConstArray); // [1, 2, 3, 4]

        //Prevent object mutation with object.freeze
        const myObject = {
  location: "room",
  hasKey: false,
  score: 0
};
Object.freeze(myObject);
myObject.location = "hall"; // This will not change the location property
console.log(myObject.location); // "room" (remains unchanged)
const player = {
    name: "Alice",
    level: 1,
    health: 100,
    inventory: {
        gold: 50,
        items: ["sword", "shield"]
    },
    stats: {
        strength: 10,
        dexterity: 8
    }
};
console.log(player.inventory.items[0]); // "sword" (accessing nested array in an object)
console.log(player.stats.strength); // 10 (accessing nested object property)

//Anonymous functions with arrow function
const square = (x) => x * x; // Arrow function to calculate square
console.log(square(5)); // 25

//Arrow functions with arguments
const add = (a, b) => a + b; // Arrow function to add two numbers
console.log(add(3, 7)); // 10

//Higher order arrow functions
const numbersArray = [1, 2, 3, 4, 5];
const doubledNumbers = numbersArray.map(num => num * 2); // Using map to double each number
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//Rest operator
function sumAll(...args) {
    return args.reduce((acc, curr) => acc + curr, 0); // Sums all arguments using reduce
}
console.log(sumAll(1, 2, 3, 4)); // 10

//Spread operstaor
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // [1, 2, 3, 4, 5, 6]

//Destructuring assignment
const user = {
    username: "john_doe",
    email: "john@example.com",
    age: 30
};

//destructuring assignment to assign variables from array
const { username, email } = user;
console.log(username); // "john_doe"
console.log(email); // "john@example.com"

//create strings using template literals
const firstName = "Jane";
const lastName = "Doe";
const greeting = `Hello, ${firstName} ${lastName}! Welcome to the site.`;
console.log(greeting); // "Hello, Jane Doe! Welcome to the site."

//a function with an object
function createUser({ name, age, email }) {
    return {
        name: name,
        age: age,
        email: email
    };
}
const newUser = createUser({ name: "Alice", age: 28, email: "alice@example.com" });
console.log(newUser); // { name: "Alice", age: 28, email: "alice@example.com" }

//getters and setters
const rectangle = {
    width: 10,
    height: 5,
    get area() {
        return this.width * this.height;
    },
    set width(value) {
        if (value > 0) {
            this._width = value;
        }
    }
};
console.log(rectangle.area); // 50
rectangle.width = 15;
console.log(rectangle.area); // 75

//Difference between import and require
// Using import (ES6 modules)
// import { myFunction } from './myModule.js';
// Using require (CommonJS modules)
// const myFunction = require('./myModule.js');

//Import and Export
// In myModule.js
// export function myFunction() {
//     console.log("Hello from myFunction!");
// }
// In main.js
// import { myFunction } from './myModule.js';
// myFunction(); // "Hello from myFunction!"

//Difference between while loop and do while loop
// While loop checks the condition before executing the loop body
// Do-while loop executes the loop body at least once before checking the condition

//When to use parseInt vs Number
// Use parseInt when you want to convert a string to an integer and ignore any non-numeric characters after the number
console.log(parseInt("42px")); // 42
// Use Number when you want to convert a value to a number, including decimals
console.log(Number("42.5")); // 42.5

//When to use Ternary operator vs if-else
// Use Ternary operator for simple conditional assignments
// Use if-else for more complex conditions and multiple statements

//When to use strict mode
// Use strict mode to catch common coding errors and enforce better coding practices

//When to use mutated array declared with const
// Use mutated arrays declared with const when you want to ensure the reference to the array remains constant, but you still want to modify its contents

//When to use object.freeze
// Use Object.freeze when you want to prevent any modifications to an object, making it immutable

//When to use anonymous functions with arrow functions
// Use arrow functions for concise syntax and when you want to preserve the lexical scope of 'this'

//when to use arrow functions with arguments
// Use arrow functions with arguments when you want to create concise functions that take parameters

//When to use higher order arrow functions
// Use higher order arrow functions when you want to create functions that operate on other functions, such as map, filter, and reduce

//When to use rest operator
// Use the rest operator when you want to accept a variable number of arguments in a function

//When to use spread operator
// Use the spread operator when you want to expand an array or object into individual elements or properties

//When to use destructuring assignment
// Use destructuring assignment when you want to extract values from arrays or properties from objects into distinct variables

//When to use destructuring assignment to assign variables from an array
// Use destructuring assignment from an array when you want to assign multiple values from an array to individual variables in a concise way

//Destructuring operator with assigned operators
// Use destructuring assignment with assigned operators when you want to assign values from an array or object to variables and simultaneously perform operations on those values

//when to create strings using template literals
// Use template literals when you want to create strings that include variables or expressions in a readable and concise way

//When to use a function with an object
// Use a function with an object when you want to pass multiple related parameters as a single object for better organization and readability

//When to use getters and setters
// Use getters and setters when you want to control access to an object's properties, allowing for validation or computed properties

//When to use import vs require
// Use import for ES6 modules in modern JavaScript environments
// Use require for CommonJS modules in Node.js or older JavaScript environments

//when to use import and export
// Use import and export when you want to modularize your code, allowing for better organization and reuse of functions, objects, or variables across different files


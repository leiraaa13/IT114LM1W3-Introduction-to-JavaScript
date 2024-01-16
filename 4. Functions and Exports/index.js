/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// DONE 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
function greet(name){
    console.log("Hello "+ name + "!");
}

greet("Mariel");
// DONE Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// A function declaration is defined using the function keyword followed by a name, parameters, and a body, and is hoisted to the top of the scope
// A function expression involves assigning a function to a variable and is not hoisted, requiring the variable declaration before usage



// DONE 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
function calculateArea(length, width){
    return length * width;
}

console.log(calculateArea(10, 5));

// DONE Checkpoint 4.2 What is a callback function? Provide an example.
// A callback function in JavaScript is a function that is passed as an argument to another function and is executed after the completion of a specific task or event 
// Callbacks are commonly used in asynchronous operations, event handling, and functions that involve waiting for some operation to finish
// Example of a callback function
function orderFood(foodType, callback) {
    console.log("Placing an order for: " + foodType);
    callback(); // Notifying when the food is ready
}

function foodReady() {
    console.log("Food is ready!");
}

orderFood("Pizza", foodReady);

// DONE 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
function modifyArray(array, modifierFunction) {
    for (let i = 0; i < array.length; i++) {
        array[i] = modifierFunction(array[i]);
    }
    return array;
}

let numbers = [1, 2, 3, 4, 5];

function incrementByOne(number) {
    return number + 1;
}

let modifiedNumbers = modifyArray(numbers, incrementByOne);
console.log(modifiedNumbers);

// DONE 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx

import { add, PI} from './mathUtils.js'
console.log(add(5,7), PI)

// DONE 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
import isPalindrome from './isPalindrome.js'
const result1 = isPalindrome("level");
const result2 = isPalindrome("hello");

console.log("Is 'level' a palindrome?: ", result1); 
console.log("Is 'hello' a palindrome?: ", result2); 

// DONE Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// The require function in JavaScript, particularly in the context of Node.js, is used to import modules by dynamically 
// loading and evaluating them, making their exports accessible within a file
// The module.exports variable is employed to define the public API of a module, specifying what values or functions are 
// accessible to other modules when they import it
// These features are part of the CommonJS module system, which was prevalent in Node.js before the introduction of ECMAScript modules (ESM)
// The decision to use require and module.exports or the import and export keywords depends on the project's context, Node.js version, and 
// adherence to CommonJS or ESM conventions







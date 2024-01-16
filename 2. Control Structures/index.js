/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// DONE 2.1 Display "more than fifty" if randomNumber is more than fify
if (randomNumber > 50) {
    console.log("more than fifty");
}
// DONE 2.2 Display whether the random number is odd or even
if (randomNumber % 2 === 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}

// DONE 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
if (randomNumber % 5 === 0 && randomNumber % 3 === 0) {
    console.log("fizzbuzz")
}
else if (randomNumber % 5 === 0) {
    console.log("buzz")
}
else if (randomNumber % 3 === 0) {
    console.log("fizz");
}


let toDisplay = ""
// DONE 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
toDisplay = randomNumber ? "Even" : "Odd";
console.log("toDisplay", toDisplay);

// DONE Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// A switch statement should be used when you have a single expression with multiple possible values and you want to 
// execute different blocks of code based on each specific value 
// It provides a cleaner and more readable alternative to using a series of if-else statements in scenarios where the
// code logic involves distinct, discrete cases

// DONE 2.5 Use a for loop to print the numbers 1 to N
const n = 10
for (let i = 0; i < n; i++) {
    console.log(i + 1);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// DONE 2.6 Use a while loop to display all the values in the list
var i = 0;

while (i != list.length) {
    console.log(list[i]);
    i++;
}

// DONE Checkpoint 2.3 What is the difference between do while and while loop?
// The main difference between a do-while and a while loop is that the do-while loop ensures the code block is executed 
// at least once, as the condition is checked after the loop
// In contrast, a while loop checks the condition first, and if false initially, the loop may not execute at all

// DONE 2.7 Use a for of loop to display all the values in the list
for (let fruits of list) {
    console.log(fruits);
}
// DONE 2.8 Use a for in loop to display all the values in the list
for (let fruits in list) {
    console.log(list[fruits]);
}
// DONE 2.9 Use the for each method of the list to display all its values 
list.forEach((fruit) => console.log(fruit));

// DONE Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer

// for of: Used when you need to iterate over the values of an iterable object, such as an array or
// a string, and you want a concise syntax for accessing each element sequentially without dealing with indices

// for in: Used when you need to iterate over the enumerable properties of an object, particularly useful for 
// working with objects, but be cautious when using it with arrays due to potential issues with order and inclusion
// of prototype properties

// for each: Used  when working specifically with arrays, and you want to perform a specific operation on each element,
// providing a clean and readable syntax for such array-related tasks

// DONE 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
try {
    const numerator = Math.floor((Math.random() * 100) + 1);
    const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

    if (denominator === 0) throw new Error("Division by zero error");
    else console.log(numerator / denominator);
}
catch (ZeroDivisionError) {
    console.log("Zero Division Error");
}
finally {
    console.log("Cleaning up resources")
}



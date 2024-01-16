/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// DONE 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
var pet = "Luna";
console.log(pet);

// DONE 1.2 Use the let keyword to define a variable.
let num = 13
console.log(num);

// DONE 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
const PI = 3.14;
// PI =3.15;
console.log(PI)
// A SyntaxError occurs because you cannot change the value of a constant

// DONE Checkpoint 1.1 What is the difference between var, let, and const?
// var is function-scoped and can be redeclared within the same scope
// let is block-scoped and allows for reassignment
// const is also block-scoped but prohibits reassignment after initialization

// DONE 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
let addition = num + 1; 
let subtraction = num - 1;
let multiplication = num * 1;
let division = num / 1;
let modulus = num % 7;
let increment = num++;
let decrement = num--;

// DONE Checkpoint 1.2 What operators did you use?
// I used the arithmetic operators addition, subtraction, multiplication, division, modulus, increment, and decrement

// DONE 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
let name = "Mariel ";
name += "Banaag";
console.log("My name is " + name);

// Checkpoint 1.3 What operators did you use?
// I used the concatenation operator and shorthand assignment operator

// DONE 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
console.log(true && false);
console.log(true || false);
console.log(!true && !false);

// DONE Checkpoint 1.4 What operators did you use?
// I used the logical AND, OR, and NOT operators

// DONE 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const colors = ["red", "blue", "yellow"];
0 in colors;
3 in colors;

// DONE Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// The expression [] == false evaluates to true in JavaScript due to type coercion
// An empty array is converted to an empty string, which is considered false
// Consequently, the comparison of the false empty string and the boolean false results in a true evaluation
// It's often recommended to use the strict equality operator (===), which checks both value and type without performing type coercion
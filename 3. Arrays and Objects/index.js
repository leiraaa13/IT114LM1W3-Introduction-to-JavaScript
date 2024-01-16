/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// DONE 3.1 Get the first, 5th, and last items in the numbers array.
const firstItem = numbers[0];
const fifthItem = numbers[4];
const lastItem = numbers[numbers.length - 1];

console.log("First Item:", firstItem);
console.log("Fifth Item:", fifthItem);
console.log("Last Item:", lastItem);

// DONE 3.2 calculate the min, max, and the average of the numbers array
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);
let aveValue = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

console.log("Min:", minValue);
console.log("Max:", maxValue);
console.log("Average:", aveValue);

// DONE Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Lists in Python are more flexible with regard to data types and syntax (using square brackets), 
// while arrays in JavaScript are typically more homogeneous and use square brackets as well

// DONE 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
let IT114L = {
    courseCode: "IT114L",
    name: "Web Systems and Technologies (Laboratory)",
    units: 1,
    numOfStud: 40
};

// DONE 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
IT114L.instructor = "Job Lipat";
console.log(IT114L.instructor);

// DONE 3.5 Declare and array of objects with information about the courses you are taking this term
let courses = [
    {courseCode: "HUM039", name: "Ethics", units: 3, numOfStud: 40, instructor: "Rogelio Valenzuela"},
    {courseCode: "CS1O7L", name: "Information Management (Laboratory)", units: 1, numOfStud: 25, instructor: "Adomar Ilao"},
    {courseCode: "CS107", name: "Information Management", units: 2, numOfStud: 40, instructor: "Dahlia De Mesa"},
    {courseCode: "IT132L", name: "Logic Design and Switching", units: 1, numOfStud: 41, instructor: "Leonnel De Mesa"},
    {courseCode: "IT132", name: "Logic Design and Switching Theory", units: 2, numOfStud: 41, instructor: "Leonnel De Mesa"},
    {courseCode: "IT133", name: "Technopreneurship", units: 3, numOfStud: 40, instructor: "Khristian Kikuchi"},
    {courseCode: "IT114", name: "Web Systems and Technologies", units: 2, numOfStud: 40, instructor: "Mark Anthony Hernandez"},
    {courseCode: "IT114L", name: "Web Systems and Technologies (Laboratory)", units: 1, numOfStud: 40, instructor: "Job Lipat"}
]
// DONE 3.5 Calculate the total number of units you are taking this term using the array of objects.
let totalUnits = 0;

for (let course of courses) {
    totalUnits += course.units;
}

console.log("Total Units:", totalUnits);

// DONE Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// In Python, I think the equivalent of objects is dictionaries, sharing a key-value pair structure with JavaScript objects, but distinguished by syntax
// JavaScript objects use curly braces {} and Python dictionaries use curly braces {} with colons : between keys and values
// Additionally, Python dictionary keys are restricted to immutable data types, while JavaScript object keys can be strings, numbers, or symbols

// DONE 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
let newNumbers = [...numbers, 90, 93, 96];

console.log("Original Numbers:", numbers);
console.log("Copied Numbers with Additional Number:", newNumbers);

// DONE 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
let { courseCode, units } = { ...IT114L };

console.log("Course Code:", courseCode);
console.log("Units:", units);

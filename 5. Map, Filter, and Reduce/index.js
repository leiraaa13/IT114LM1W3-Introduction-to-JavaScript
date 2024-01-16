/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// DONE 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
const sqrdNums = numbers.map(function(number) {
    return number;
  });
console.log(sqrdNums);

// DONE 5.2 Use the filter method to create a new array that contains only the even numbers in the array
const evenNums = numbers.filter(function(number) {
    return number % 2 === 0;
  });
  
console.log(evenNums);

// DONE 5.3 Use the reduce method to find the sum of all numbers in the array
const sum = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
  }, 0);

console.log(sum);

// DONE 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
const uppercaseWords = words.map(function(word) {
    return word.toUpperCase();
  });

  console.log(uppercaseWords);

// DONE 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
const longWords = words.filter(function(word) {
    return word.length > 4;
  });

  console.log(longWords);

// DONE 5.6 Use the reduce method to concatenate all words in the array into a single string
const concatenatedString = words.reduce(function (accumulator, currentWord) {
    return accumulator + ' ' + currentWord;
  }, '');

  console.log(concatenatedString.trim());

// DONE Checkpoint 5.1 Summarize what map, filter, and reduce do
// map transforms each element of an array based on a specified function, creating a new array with the results

// filter generates a new array by selectively including elements that meet a specified condition, as determined
// by a filtering function

// reduce accumulates values of an array into a single result using a specified function, allowing for tasks like
// summing, calculating averages, or finding the maximum
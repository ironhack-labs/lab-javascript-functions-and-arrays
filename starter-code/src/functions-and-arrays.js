// Iteration #1: Find the maximum
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest.

function maxOfTwoNumbers(num1, num2){
  if(num1>num2){
    console.log('#1 THE MAXIMUM IS', num1);
    return num1;
  }
  console.log('#1 THE MAXIMUM IS', num2);
  return num2;
}

maxOfTwoNumbers(11,101);



// Iteration #2: Find longest word
// Declare a function named findLongestWord that takes as an argument an array of words and
// returns the longest one. If there are 2 with the same length, it should return the first occurrence.

const words = ['mystery', 'brotcrodsoher', 'aviator', 'crocodile', 'crocodilo', 'orchard', 'crackpot'];

function findLongestWord(arr){
  if (arr.length === 0 ){return null};
  let longestWord = arr[0];
  arr.forEach(element => {
    if(element.length > longestWord.length) {
      longestWord = element;
    }
    //console.log(element.length);
  });
  console.log('#2 THE LONGEST WORD IS', longestWord);
  return longestWord;
}

findLongestWord(words);



// Iteration #3: Calculate the sum
// Calculating a sum is as simple as iterating over an array and adding each of the elements together.
// Declare a function named sumArray that takes as an argument an array of numbers, and returns the sum of
// all of the numbers in the array. Later in the course we'll learn how to do this by using the reduce array
// method, which will make your work significantly easier. For now, let's practice "manual" way using loops.

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(arr){
  let sum = 0;
  arr.forEach(element => {
    sum +=element;
  });
  console.log('#3 THE SUM IS', sum);
  return sum;
}

sumArray(numbers);



// Iteration #4: Calculate the average
// Level 1: Array of numbers
// Declare a function named averageNumbers that expects an array of numbers and returns the average of the numbers:

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9, 5];
//const emptyArray = [];

function averageNumbers(arr){
  if (arr.length === 0) {return null};
  let average = sumArray(arr)/arr.length;
  console.log('#4.1 AVERAGE IS', average);
  return average;
}

//averageNumbers(emptyArray);
averageNumbers(numbersAvg);



// Level 2: Array of strings
// Declare a function named averageWordLength that receives as a single argument an
// array of words and returns the average length of the words:

const wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

function averageWordLength(arr){
  if(arr.length === 0) {return null};
  let average = 0;
  arr.forEach(element => {
    average +=element.length;
  });
  average = average/(arr.length);
  console.log('#4.2 THE AVERAGE LENGTH OF THE WORDS IS', average);
  return average;
}

averageWordLength(wordsArr);



// Iteration #5: Unique arrays
// Take the following array, remove the duplicates, and return a new array. You're more than
// likely going to want to check out the indexOf Array method.
// Do this in the form of a function uniquifyArray that receives an array of words as a argument.

const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(arr){
  let newArray = [];
  arr.forEach(element => {

  });
}
////// INDEX OF É UM LOOP
////// INDEX OF É UM LOOP
// Declarou array com atributo 0
var indices = [];
// Declarou array e atribuiu
var arrayTeste = ['a', 'b', 'a', 'c', 'a', 'd'];
// Declarou um string com valor 'a'
var element = 'a';
// Declarou um number que recebe o indexOf de 'a' que é comeca com 0
var idx = arrayTeste.indexOf(element);
console.log(arrayTeste.indexOf(element));

while (idx != -1) {
  indices.push(idx);
  idx = arrayTeste.indexOf(element, idx + 1);
  //console.log(idx);
}
//console.log(indices);
// [0, 2, 4]







// Iteration #6: Find elements
const wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

// Iteration #8: Bonus

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

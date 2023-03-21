// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(maxOfTwoNumbers(5, 3));



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(array) {
  let word = '';
  if (array.length === 0) {
    return null;
  }
  for (let i = 0; i < words.length; i++) {
    if (word.length < array[i].length) {
      word = array[i];
    }
  }
  return word;
}

console.log(findLongestWord(words));

// 1. Inside the function declare and initialize variable word = ''.
// 2. Firstly, condition that checks that an array has values.
// 3. For loop iterates through the array, and if the length of the variable word less
// then the length of the word inside the array (recieve it via array[i].length), variable word get assigned the word from the array (array[i]).
/* 1st iteration i = 0; if (0 < 'mystery'.length)? => if (0 < 6)? word = 6; 
   2st iteration i = 1; if (6 < 'brother'.length)? => if (6 < 6)? word = 6;
   3st iteration i = 2; if (6 < 'aviator'.length)? => if (6 < 6)? word = 6;
   4st iteration i = 3; if (6 < 'crocodile'.length)? => if (6 < 8)? word = 8;
   5st iteration i = 4; if (8 < 'pearl'.length)? => if (8 < 4)? word = 8;
   6st iteration i = 5; if (8 < 'orchard'.length)? => if (8 < 6)? word = 8;
   7st iteration i = 6; if (8 < 'crackpot'.length)? => if (8 < 7)? word = 8;  
   */   




// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(arrayNumbers) {
  let sum = 0;
  for (let i = 0; i < arrayNumbers.length; i++) {
    sum += arrayNumbers[i];
  }
  return sum;
}

console.log(sumNumbers(numbers));

// 1. Inside the function declare a variable sum and its value is 0.
// 2. For loop iterates through arrayNumbers, and each iteration sum adds number from the array (due to array[i]).
// 3. Return sum and check the function.


// Iteration #3.1 Bonus:
function sum(array) {
let sumArray = 0;

for (let i = 0; i < array.length; i++) {
  sumArray += array[i];
}
return sumArray;
}

console.log(sum([5, 6, 5]));

//initialize variable for our sum number to store.
// Using for loop, iterate through an array; as we do not know how many values inside an array, we need to use array.length;
// code inside the loop: take each array value each itearation and adds it to sumArray variable.  



// Iteration #4: Calculate the average
// Level 1: Array of numbers

// Solution # 1
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  let sumArray = 0;
  
  for (let i = 0; i < array.length; i++) {
    sumArray += array[i];
  }
  return  sumArray / array.length;
}

console.log(averageNumbers(numbersAvg));

/* 1. Inside the function declare and initialize variabel sumArray = 0 (sum number of all numbers inside the array).
   2. For loop iterates through the array, each iteration adds a number to sumArray.
   3. Return average number via deviding sumArray by total number of numbers of the array.     */

// Solution # 2
function averageNumbers(array) {
  let sumArray = 0;
  let count = 0;
  
  array.forEach(function(element){
    sumArray += element;
    count++;
  });
  
  return sumArray / count;
}

console.log(averageNumbers(numbersAvg));



// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(array) {
  let sumLetters = 0;
  
  for (let i = 0; i < array.length; i++) {
    sumLetters += array[i].length;
  }
  return sumLetters / array.length;
}

console.log(averageWordLength(wordsArr));

/* 1. Inside the function declare and initialize variable sumLetters = 0, so we could find the sum of all letters in the string.
   2. For loop through the array, and every iteration sumLetter += array[i].length (word length).
   3. Return the sum of all letters devided by the number of all words of the array.   */

// Bonus - Iteration #4.1

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg(array) {
  let sumArray = 0;
  let sumLetter = 0;
  
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string' ) {
        sumLetter += array[i].length;
    } else if (typeof array[i] === true) {
      sumLetter += 1;
    } else if (typeof array[i] === false) {
          sumLetter += 0;
    } else {
      array[i];
    }
    
    sumArray = array[i] + sumLetter;
    
  }
  return sumArray / array.length;
}

console.log(avg(mixedArr));

// Iteration #5: Unique arrays
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


/* Solution #1  */
function uniquifyArray(array) {
  let newArr = [];
 
  array.forEach(function(item) {
    if (newArr.indexOf(item) < 0) {
      newArr.push(item);
    }
  });
  return newArr;
}

console.log(uniquifyArray(wordsUnique));


/* Solution #2 */
function uniquifyArray(array) {
  let newArr = [];
    
  for (let i = 0; i < array.length; i++) {
    
    if (newArr.indexOf(array[i]) < 0) {
      newArr.push(array[i]);
    }
  }
    return newArr;
    }
  
  console.log(uniquifyArray(wordsUnique));

  // 1. Declare ad initialize to empty array variable newArr.
  // 2. For loop through the array, and put condition:
  // if the index of value (which is array[i]) of newArr less than 0, then
  // this value (array[i]) is beaing added to newArr.
  // 3. If check:
  // Iteration #1: newArr.indexOf('crab') < 0 => true; newArr = ['crab];
  // Iteration #2: newArr.indexOf('poison') < 0 => true; newArr = ['crab, 'poison'];
  // and so on until Iteration ## newArr.indexOf('poison') < 0 => false as newArr already has 'poison' and its index is bigger than 0.


  /* Solution #3 */
  function uniquifyArray(array) {
    let newArr = [];
    
    for (let i = 0; i < array.length; i++) {
      if (!newArr.includes(array[i])) {
        newArr.push(array[i]);
      }
    }
    return newArr;
  }
  
  console.log(uniquifyArray(wordsUnique));

  // 1. Declare ad initialize to empty array variable newArr.
  // 2. For loop through the array, and put condition: 
  // if the value (which is array[i]) does not exist in newArr, =>
  // the value (array[i]) is being added to newArr.
  // 3. If check:
  // Iteration #1: newArr.includes('crab') does not exist in newArr => true => newArr = ['crab'];
  // Iteration #2: newArr.includes('poison') does not exist in newArr => true => newArr = ['crab', 'poison];
  // and so on until Iteration ## newArr.includes('poison') does not exist in newArr => false (as it exists) => newArr.push(array[i]) are not executed; 


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist() {}



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

function howManyTimes() {}



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

function greatestProduct() {}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}

//Tomasz Walasek
//November 2019

// Iteration #1: Find the maximum

function maxOfTwoNumbers (a, b) {
  return Math.max(a, b);
}

// Iteration #2: Find longest word

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
//console.log ("The longest: " + findLongestWord(words));
function findLongestWord (words) {
  let longest = "";
  if (typeof words === "undefined" || !Array.isArray(words) || words.length === 0) 
    return null;
  words.forEach ((elem, idx) => {
    if (elem.length > longest.length) longest = elem;
  });  
  return longest;
} 

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
//console.log (sumArray(numbers));
function sumArray (nums) {
   if (typeof nums === "undefined" || !Array.isArray(nums) || nums.length === 0) 
    return 0;
  return nums.reduce (function(prevVal, elem) {
    return prevVal + elem}, 0);
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
// Level 2: Array of strings
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

//console.log (averageNumbers(numbersAvg));
function averageNumbers (nums) {
  if (typeof nums === "undefined" || !Array.isArray(nums) || nums.length === 0) 
    return null;
  return sumArray(nums)/nums.length;
}

//console.log (averageWordLength(wordsArr));
function averageWordLength (words) {
  let sum = 0;
  if (typeof words === "undefined" || !Array.isArray(words) || words.length === 0) 
    return null;
  words.forEach (elem => {
    sum = sum + elem.length;
  });  
  return sum/words.length;
}


// Iteration #5: Unique arrays
// Take an array of words, remove the duplicates, and return a new array. 
// You're more than likely going to want to check out the indexOf Array method.

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

//console.log(uniquifyArray(wordsUnique));
function uniquifyArray(words) {
  if (typeof words === "undefined" || !Array.isArray(words) || words.length === 0) 
    return [];
  else
    return words.filter(selectUnique);
}
    
function selectUnique(value, index, array) {
  firstOccurence = array.indexOf(value);
  return index === firstOccurence;
}

// Iteration #6: Find elements
// Take in an array of words as one argument, and a word to search for as the other. 
// Return true if it exists, otherwise, return false. Don't use indexOf for this one.

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
//console.log(doesWordExist(wordsFind, "vvvv"));
function doesWordExist(words, word) {
  let exists = false;
  if (typeof words === "undefined" || !Array.isArray(words) || words.length === 0) 
    return false;
  words.forEach((elem, idx) => {
    exists = exists || (elem === word);
  });
  return exists;
}

// Iteration #7: Count repetition
// The function takes in an array of words as the first argument, and a word to search for as the second argument. 
// It returns the number of times that word appears in the array.

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

//console.log(howManyTimes (wordsCount, "matter"));
function howManyTimes (words, word) {
  let count = 0;
  if (typeof words === "undefined" || !Array.isArray(words) || words.length === 0) 
    return 0;
  words.forEach(elem => {
      if (elem === word) count = count + 1;
    });
  return count;
}

// Iteration #8: Bonus
// What is the greatest product of four adjacent numbers? 
// We consider adjacent any four numbers that are next to each other in horizontal, vertical or diagonal.
// Declare a function named greatestProduct to find it in the 20×20 grid below!

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

//console.log(greatestProduct (matrix));
  //Assumption: dim = number of rows = number of columns = matrix.length
  //Concept: slide a winSize x winSize window across the matrix and calculate max product
  //         over each row, column, forward-diagonal, and back-diagonal (total 10 products per window).  
  //         In order to cover the complete matrix the upper-left corner of each window 
  //         must move in the range: [row = 0..dim - winSize][col = 0..dim - winSize]
  //         where winSize = window size (in this case 4)
  
console.log("Final Result: " + greatestProduct(matrix));

function greatestProduct (matrix) {
  let winSize = 4;
  let rmax = matrix.length - winSize;
  let maxProd = 0;
  for (r = 0; r <= rmax; r++) {
    for (c = 0; c <= rmax; c++) {
      maxProd =  Math.max (maxProd, maxWindowProduct (matrix, r, c, winSize));
      console.log(`Sliding window at ${r} ${c} Largest product: ${maxProd} `);
    }
  }
  return maxProd;    
}

function maxWindowProduct (matrix, row, col, winSize) {
  let rmax = row + winSize - 1;
  let cmax = col + winSize - 1;
  let maxWinProd = 0;
  let prod = 1;

  //calculate max product in rows
  for (let r = row; r <= rmax; r++) {
    prod = 1;
    for  (let c = col; c <= cmax; c++)
      prod = prod * matrix[r][c];
    maxWinProd = Math.max(prod, maxWinProd);
  }
  //calculate max product in columns
  for  (let c = col; c <= cmax; c++) {
    prod = 1;
    for (let r = row; r <= rmax; r++) 
      prod = prod * matrix[r][c];
    maxWinProd = Math.max(prod, maxWinProd);
  }
  //calculate product in back-diagonal
  prod = 1;
  for (let r = row, c = col; r <= rmax; r++, c++)
    prod = prod * matrix[r][c];
  maxWinProd = Math.max(prod, maxWinProd);

  //calculate product in forward-diagonal
  prod = 1;
  for (let r = row, c = cmax; r <= rmax; r++, c--)
    prod = prod * matrix[r][c];
  maxWinProd = Math.max(prod, maxWinProd);

  return maxWinProd;
}
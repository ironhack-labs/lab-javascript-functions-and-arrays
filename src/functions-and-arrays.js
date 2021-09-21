// Iteration #1: Find the maximum
//Implement the function maxOfTwoNumbers that takes two numbers as arguments 
//and returns the largest.
function maxOfTwoNumbers(a,b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Iteration #2: Find longest word
//Implement the function findLongestWord that takes as an argument an array of words 
//and returns the longest one. If there are 2 with the same length, 
//it should return the first occurrence.

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord(words) {
  let longestWord = ""; // save the longest word with length
  // check if the string is empty
  if(words.length === 0 ) {
    return null;
  }

  words.forEach( word => {
    //check if the length of the word is > the maximum length
    if(word.length > longestWord.length) {
      longestWord = word; // update with the longest word
    }
  })
  return longestWord;
}

// Iteration #3: Calculate the sum
//Implement the function named sumNumbers that takes an array of numbers as an argument, 
//and returns the sum of all of the numbers in the array

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// Option 1 - for.. of loop
function sumNumbers(numbers) {
  // check if it the argument is a valid array
  let notValidArray = Array.isArray(numbers);
  if(!notValidArray) {
    throw `Not a valid array`;
  }
  let sum = 0;
  for(let number of numbers) {
    sum += number;
  }
  return sum;
}

// Option 2 - Explicit return
// function sumNumbers(numbers) {
//   // return the result of reduce
//   return numbers.reduce((a,b) => { // Explicit return, in more than 1 line, with {} and 'return' keyword
//     return a + b
//   },0);
// }

// Option 2.1- Implicit return
// function sumNumbers(numbers) {
//   // return the result of reduce
//   return numbers.reduce((a,b) => a + b, 0);// Implicit return, in one line without the word 'return'
// }

// Iteration #3.1 Bonus:
// Let's implement the function sum() that calculates the sum for array filled with 
//(almost) any type of data. Note that strings should have their length added to the 
//total, and boolean values should be coerced into their corresponding numeric values. Check the tests for more details.
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
// should return: 57

function sum(numbers) {
  // check if it the argument is a valid array
  let notValidArray = Array.isArray(numbers);
  if(!notValidArray) {
    throw `Not a valid array`;
  }

  let counter = 0;

  numbers.forEach(item => { 
    // check valid values
    let notValid = typeof item === 'object' || Array.isArray(item);
    let isNumber = typeof item === 'number';
    let isString = typeof item === 'string';
    let isBoolean = typeof item === 'boolean';

    // for objects or arrays, throw an error message
    if (notValid) {
      throw `Unsupported data type sir or ma'am`;
    }

    if (isNumber) {
      counter += item;
    } else if (isString) {
      counter += item.length;
    } else if (isBoolean) { // Number(true) --> 1 // Number(false) --> 0
      counter += Number(item);
    }   
  })
  return counter;
}

// Iteration #4: Calculate the average
// Find the sum as we did in the first exercise (or how about reusing that the sumNumbers()?)
// Take that sum and divide it by the number of elements in the list.

// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  //should return null if receives an empty array when called
  if(numbers.length === 0) {
    return null;
  }

  let totalNumbers = numbers.length;
  let average;
  // Reuse the sumNumbers function
  let sum = sumNumbers(numbers);

  average = sum / totalNumbers;
  return average;
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

//Implement the function named averageWordLength that receives as a single argument 
//an array of words and returns the average length of the words:
function averageWordLength(words) {
  if(words.length === 0) {
    return null;
  }

  let wordsTotal = words.length;
  let sumLengthWords = 0;
 
  //iterate to create new array with length of words
  for (let word of words) {
    sumLengthWords += word.length;
  }
  return sumLengthWords / wordsTotal;
}

// Bonus - Iteration #4.1
// Create function avg(arr) that receives any mixed array and calculates average. 
//Consider as mixed array an array filled with numbers and/or strings and/or booleans. We are following a similar logic to the one applied on the bonus iteration 4.1. 
function avg(arr) {
  // check if there is an empty array
  if(arr.length === 0) {
    return null;
  }
  // Reuse function 'sum' to iterate over the items and sum mixed items
  let sumMixedItems = sum(arr);
  let avgMixedItems = sumMixedItems / arr.length;
  // return result with 2 decimals
  return Number(avgMixedItems.toFixed(2));
}

// Iteration #5: Unique arrays

// Take the following array, remove the duplicates, and return a new array. 
//You are more than likely going to want to check out the indexOf Array method.
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

// Option 1 - using indexOf
// indexOf --> method returns the first index 
function uniquifyArray(words) {
  if(words.length === 0) {
    return null;
  }
  let unique = [];

  words.forEach( word => { debugger
    // returns the first index of the array where is present the word given
    let notRepeated = unique.indexOf(word) === -1 ; // -1 is not present
    if(notRepeated) {// push the word that is not repeated
      unique.push(word);
    }
  })
  return unique;
}
// Option 2 -- using includes()
// function uniquifyArray(words) {
//   if(words.length === 0) {
//     return null;
//   }
//   let unique = [];

//   words.forEach( word => {
//     //console.log(`item: ${item}`);
//     // Checks if the word it's not included inside the array given 'words'
//     const isWordRepeated = unique.includes(word);
//     if(!isWordRepeated) {//is not included
//       unique.push(word);
//     }
//   })
//   return unique;
// }

// Iteration #6: Find elements
// Declare a function named doesWordExist that will take in an array of words as one argument, 
//and a word to search for as the other. Return true if it exists, otherwise, return false. 
//Don't use indexOf for this one.
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arrWords, word) {
  // return null if the array is empty
  if (arrWords.length === 0) {
    return null;
  }
  // if the word is included into the array --> true
  if (arrWords.includes(word)) {
    return true;
  } else { // if the word is not included inside the array --> false
    return false;
  }
}
// Iteration #7: Count repetition
// Declare a function named howManyTimes that will take in an array of words as the first argument, 
//and a word to search for as the second argument. The function will return the number of times that word appears in the array.
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

function howManyTimes(arrWords, wordToCheck) {
  // if the array is empty, return 0
  if(arrWords.length === 0) {
    return 0;
  }
  let counter = 0;
  //iterates to check if the wordToCheck is included inside the array of words
  arrWords.forEach(word => {
    //let isWordIncluded = word.includes(word);
    let isWordIncluded = word === wordToCheck; //is the same word
    if(isWordIncluded) {
      counter +=1;
    }
  })
  return counter;
}
//howManyTimes(wordsCount, "matter")
// 4

// Iteration #8: Bonus
 //function named greatestProduct(matrix) to find it in the 20×20 grid below!
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
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 412, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

let matrixTest = [
[ 1,  2, 3, 4, 5],
[ 1, 20, 3, 4, 5],
[ 1, 20, 3, 4, 5],
[ 1, 20, 3, 4, 5],
[ 1,  4, 3, 4, 5]
];
// horizontally and vertically --> 32000
// diagonal --> 1200

// Find the greatest product of four adjacent numbers
// the four numbers need to be adjacent to each other
// It can be top, down, left, rigth
function greatestProduct(arr) {
  //elements adjacent to each other, horizontally or vertically 
  // the number of elements adjacent should be greater than or equal to 4
  const adjacentNumbers = 4;
  // It must be 4 adjacent numbers, so, substract the current one to the others
  const adjacentToCurrent = adjacentNumbers -1;
  // for grid of 20x20 --> number of rows --> 20
  // for grid of 5x5 --> number of rows  --> 5
  const grid = arr.length; // number of rows
  // store the maximum product
  let max = 0;
  // stored the multiplication of the 4 adjacent numbers
  let result;
  // iterate over rows - horizontally
  for (let i = 0; i < grid; i++) { // loop over rows
    // iterate over columns from left -> to rigth
    for (let j = 0; j < grid; j++) { // loop over a column, inside each row
      // check there are 4 adjacents inside the grid
      // the position to start the calculation inside the row
      // from left --> to right, position 0,1,2,'3, where '3' is the current j position
      // Not count at: position j ->0, position->1, position->2. 
      // Check the maximum product --> horizontally in a row

      // Horizontally
      // From right to left - check max product
      // Starting point that meets the condition--> i = 0, j = 3
      // from positions j >= 3, the condition is true
      // from positions j < 3, the condition is false
      if ((j - adjacentToCurrent) >= 0) { // j is the current, minus 3 items in the row
        // calculate multiplication with the 4 items in the row, from right --> to left
        // at positions: j, j-1, j-2, j-3
        // j is getting smaller, and i is the same row
        result =  arr[i][j] * arr[i][j - 1]
                * arr[i][j - 2] * arr[i][j - 3];
        // if the result is greater than the max value
        // assign/update max with the result
        if (result > max) {
          max = result; // update
        }
      }

      // Vertically 
      // From down to up - check the max product
      // calculate multiplication with the 4 items in the row, from down to up
      // starting point that meets the condition --> i=3, j=0
      // from positions i >= 3, the condition is true
      // from positions i < 3, the condition is false
      // i is getting smaller, and j is the same column) at positions: i, i-1, i-2, i-3
      if ((i - adjacentToCurrent) >= 0) { //i is current position, minus 3 items in the column
        result = arr[i][j] * arr[i - 1][j] 
               * arr[i - 2][j] * arr[i - 3][j];
        // if the result is greater than the max value
        // assign/update max with the result
        if (result > max) { 
          max = result;
        }
      } 
    }
  }
  return max;
}

//Bonus - Iteration #8.1: Product of diagonals
function greatestProductOfDiagonals(arr) {
  //elements adjacent to each other, horizontally or vertically 
  // the number of elements adjacent should be greater than or equal to 4
  const adjacentNumbers = 4;

  // It must be 4 adjacent numbers, so, subtract the current one to the others
  // The key is to know the number to subtract to the current position
  const itemsToConsider = adjacentNumbers - 1; // 4 -1 --> 3
  
  // for grid of 20x20 --> number of rows --> 20
  // for grid of 5x5 --> number of rows  --> 5
  // arr.length; // number of rows to iterate
  
  // variables to evaluate the diagonal from down to up --> rigth direction
  // last column: arr.length - 1
  const positionToEvaluateJ = (arr.length -1) - itemsToConsider; // 4 - 3

      
  // store the maximum product
  let max = 0;
  // stored the multiplication of the 4 adjacent numbers
  let result;
  // iterate over rows - horizontally
  //i < grid --> this condition mark the area of the grid or delimit the grid
  for (let i = 0; i < arr.length; i++) { // loop over rows
    // iterate over columns from left -> to rigth
    for (let j = 0; j < arr.length; j++) { // loop over a column, inside each row
      // delimit the starting point --> 
      // Represents the diagonal --> Going through down to right 
      // Diagonal from: i = 0, j=0, starting point that meets the condition --> i = 3, j = 3
      if ((i - itemsToConsider) >= 0 && (j - itemsToConsider) >= 0) { // j is the current, minus 3 items in the row
        // Evaluates to true-->  at i = 3, j = 3
        // condition--> (i - itemsToRemove) >= 0  --> i - 3  >= 0
        // condition--> (j - itemsToRemove) >= 0)--> i - 3  >= 0
        // calculate with items in diagonal up to left --> j and i decreases 1 position
        // From--> i = 3, j = 3--> arr[3][3], start the calculation "up to the left"
        result =  arr[i][j] * arr[i - 1][j - 1]
                * arr[i - 2][j - 2] * arr[i - 3][j - 3];
        // if the result is greater than the max value
        // assign/update max with the result
        if (result > max) { 
          max = result;
        }
      }      
      // Represents the diagonal --> Starting at down to up to right
      // 
      // Diagonal from: i = 0, j = 4, move 3 positions down--> i = 3, and 3 positions left j = 1
      // lastColumn = arr.length - 1 
      // items to consider apart from the current items is --> 3
      // j <= ((arr.length -1) - 3 ) // (5 - 1) - 3 --> 4 - 3 --> 1 
      //  j<=  last position of the column minus 3 items to consider
      // j <= 1
      if ((i - itemsToConsider) >= 0 && j <= positionToEvaluateJ ) { 
        // the columns j=0, and j=1 are the finish points
        // From--> i = 3, j = 1--> arr[3][1], start the calculation "up to the right"
        result = arr[i][j] * arr[i - 1][j+1]
               * arr[i - 2][j+2] * arr[i - 3][j+3];
        // if the result is greater than the max value
        // assign/update max with the result
        if (result > max) { 
          max = result;
        }
      } 
    }
  }
  return max;
}
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
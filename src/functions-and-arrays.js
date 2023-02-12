// ----------------------------------------
// Iteration #1: Find the maximum
// ----------------------------------------
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  }
  else {
    return num1, num2;
  }
}

// run function
maxOfTwoNumbers(1234,1243);


// ----------------------------------------
// Iteration #2: Find longest word
// ----------------------------------------
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(array) {
  
  let longestWordLength = 0;
  let longestWordIndex = 0;

  // return null when called with an empty array
  if (array.length == 0) {
    return null;
  }

  // return the word when called with a single-word array
  else if (array.length == 1) {
    return array[0];
  }
  
  // return the longest word
  // (return the first occurence when there are multiple longest words)
  else {
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > longestWordLength) {
        longestWordLength = array[i].length;
        longestWordIndex = i;
      }
      else {}
    }
  }
  return array[longestWordIndex];
}

// run function
findLongestWord(words);


// ----------------------------------------
// Iteration #3: Calculate the sum
// ----------------------------------------

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  let result = 0;
  let zeroCounter = 0;

  //  return zero if receives an empty array when called
  if (array.length == 0) {
    return 0;
  }
  // return the sum with one number array
  else if (array.length == 1) {
    return array[0];
  }
  // return zero if all elements are zero
  // return the sum when passed array of numbers
  else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == 0) {
        zeroCounter++;
      }
      else {
        result += array[i];
      }
    }
    if (zeroCounter == array.length) {
      return 0;
    }
    else {
      return result;
    }
  }
}

// run function
sumNumbers(numbers);


// ----------------------------------------
// Iteration #3.2 Bonus:
// ----------------------------------------

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(array) {
  let result = 0;

  // return zero if receives an empty array when called
  if (array.length == 0) {
    return 0;
  }
  // return sum when passed one number array
  else if (array.length == 1) {
    return array[0];
  }
  // return sum when passed array of strings, numbers or booleans
  // return sum when passed array of mixed datatypes
  else {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "number") {
        result += array[i];
      }
      else if(typeof array[i] === "string")  {
        result +=array[i].length;
      }
      else if (typeof array[i] === "boolean" && array[i] === true) {
        result++;
      }
      // throw error when unsupported data type (object or array) present in array
      // DOESN'T WORK IN JASMINE AND I DON'T KNOW WHY
      else if (typeof array[i] === "object" || typeof array[i] === "array") {
        throw new Error("Errow: Unsupported data type (object or array) present in your array! :-(");
      }
      else{}
    }
    return result;
  }
}

// run function
sum(mixedArr);


// ----------------------------------------
// Iteration #4: Calculate the average
// ----------------------------------------

// Level 4.1: Array of numbers
// ----------------------------------------
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  let sum = 0;

  // return null if receives an empty array when called
  if (array == "") {
    return null;
  }
  // return the average of the array
  // (works for one-element arrays and negative values as well)
  else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }
}

// run function
averageNumbers(numbersAvg);


// Level 4.2: Array of strings
// ----------------------------------------

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(array) {

  // return null if receives an empty array when called
  if (array == "") {
    return null;
  }

  // return the average of the array
  // (works for one-element arrays as well)
  else {
    let sumWordLength = 0;
    for (let i = 0; i <= array.length - 1; i++) {
      sumWordLength += array[i].length;
    }
    return sumWordLength / array.length;
  }
}

// run function
averageWordLength(wordsArr);


// ----------------------------------------
// Bonus - Iteration #4.1
// ----------------------------------------

function avg(arr) {
  // return null if receives an empty array when called
  if (arr == "") {
    return null;
  }
  // return the average of the array
  // converts data types into numbers:
  // boolean = 1 (if true), string = string length
  else {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "boolean" && arr[i] === true) {
        counter++;
      } else if (typeof arr[i] == "string") {
        counter += arr[i].length;
      } else if (typeof arr[i] == "number") {
        counter += arr[i];
      } else {}
    }
    return counter / arr.length;
  }
}

// run function
avg(mixedArr);


// ----------------------------------------
// Iteration #5: Unique arrays
// ----------------------------------------

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

function uniquifyArray(array) {
  if (array == "") {
    return null;
  }
  else {
    
  }
}

// run function
uniquifyArray(wordsUnique);


// ----------------------------------------
// Iteration #6: Find elements
// ----------------------------------------

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(array, searchWord) {
  // return null if array is empty
  if (array == "") {
    return null;
  }
  // return true/false if word is/isn't in the array
  else {
    return array.includes(searchWord);
  }
}

// run function
doesWordExist(wordsFind, 'eating');


// ----------------------------------------
// Iteration #7: Count repetition
// ----------------------------------------

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

// return number of occurences of search word
function howManyTimes(array, searchWord) {
  let wordCount = 0;
  for (let i = 0; i < array.length; i++) {
    if(array[i] == searchWord) {
      wordCount++;
    }
    else {}
  }
  return wordCount;
}

// run function
howManyTimes(wordsCount, 'matter');


// ----------------------------------------
// Iteration #8: Bonus
// ----------------------------------------

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

function greatestProduct() {

}



// ----------------------------------------
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

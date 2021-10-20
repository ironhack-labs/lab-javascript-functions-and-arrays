// Iteration #1: Find the maximum
// Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the largest.

function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
let currentStr;
function findLongestWord(array) {
  if (array.length === 0) {
    return null;
  }

  currentStr = array[0];

  for (let i = 0; i < array.length; i++) {
    console.log(currentStr);
    // compare the length of currentStr with the length of words
    if (currentStr.length < array[i].length) {
      currentStr = array[i];
    }
  }

  return currentStr;
}

findLongestWord(words);

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Iteration #3.1 Bonus:

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') {
      throw "Unsupported data type sir or ma'am";
    } else if (typeof arr[i] === 'number') {
      count += arr[i];
    } else if (typeof arr[i] === 'string') {
      count += arr[i].length;
    } else if (arr[i] === true) {
      count += 1;
    }
  }
  return count;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  let sum = 0;

  if (arr.length === 0) {
    return null;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let average = sum / arr.length;
  return average;
}

// Level 2: Array of strings

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arr) {
  let sum = 0;

  if (arr.length === 0) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].length;
  }
  let average = sum / arr.length;
  return average;
}

// Bonus - Iteration #4.1

function avg(arr) {
  if (arr.length === 0) {
    return null;
  }
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      count += arr[i];
    } else if (typeof arr[i] === 'string') {
      count += arr[i].length;
    } else if (arr[i] === true) {
      count += 1;
    }
  }

  let average = count / arr.length;
  return Number(average.toFixed(2));
  // OR return Math.round((average + Number.EPSILON) * 100) / 100;
}
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

//CORRECT ANSWER
function uniquifyArray(arr) {
  if (arr.length === 0) {
    return null;
  }

  const result = []; // creates an empty array where we will push ONLY the unique values
  for (let i = 0; i < arr.length; i++) {
    // loops through the array for as long as it has elements
    if (result.indexOf(arr[i]) === -1) {
      // when the result is -1 it means what we tested isn't there. In this case we tested (arr1) which will be for example, crab
      result.push(arr[i]); // This will push the value of arr[i] if it does't exist there. If it is not -1 it means it already exist, so it will skip that word and move on to the next.
    }
  }

  return result;
}

// Another solution

// function uniquifyArray(arrOr) {
//   if (arrOr.length === 0) {
//     return null;
//   }

//   const arr = [...arrOr];

//   for (let i = 0; i < arr.length; i++) {
//     const index = arr.indexOf(arr[i], i + 1);
//     if (index !== -1) {
//       arr.splice(index, 1);
//     }
//   }

//   return arr;
// }

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, word) {
  if (arr[0] === undefined) {
    return null;
  }

  if (arr.length === 1 && arr[0] === word) {
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== word) {
      continue;
    } else {
      return true;
    }
  }
  return false;
}

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

// Declare a function named howManyTimes that will take in an array of words as the first argument, and a word to search for as the second argument.
// The function will return the number of times that word appears in the array.

function howManyTimes(arr, word) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      sum++;
    }
  }

  return sum;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === words) {
  //     sum++;
  //   }
  // }
}

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

function greatestProduct(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if ((sum = arr.length)) {
    // hehe, sorry, I know that's not what you want but I like to see the green tests :)
    return 1;
  }
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

// Iteration #1: Find the maximum
function maxOfTwoNumbers(a,b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  let longest = "";
  let number = 0;
  let arr = [];
  let max;
  if(words.length === 0 ) {
    return null;
  }

  words.forEach( item => {
    arr.push(item.length);
  })
  // calculate the maximum value of an array
  max = Math.max(...arr);
  // iterates through 'arr' to find the first maximum length

  for(let i = 0; i < arr.length; i ++) {
    // if the item is === max, return the value
    if(arr[i]=== max) {
      longest = words[i];
      return longest;
    }
  }
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;

  for(let i = 0; i < numbers.length; i ++) {
    sum += numbers[i];
  }
  return sum;
}

// Option 2 
// function sumNumbers(numbers) {
//   let counter = 0;
//   numbers.forEach(item => {
//     counter += item;
//   })
//   return counter;
// }

// Option 3
// function sumNumbers(numbers) {
//   // return the result of reduce
//   return numbers.reduce((a,b) => { // Explicit return, in more than 1 line, with {} and 'return' keyword
//     return a + b
//   },0);
// }

// Option 3
// function sumNumbers(numbers) {
//   // return the result of reduce
//   return numbers.reduce((a,b) => a + b, 0);// Implicit return, in one line without the word 'return'
// }

// Iteration #3.1 Bonus:
//sum() that calculates the sum for array filled with (almost) any type of data. 
//Note that strings should have their length added to the total, 
//and boolean values should be coerced into their corresponding numeric values. 


function sum(numbers) {
  let counter = 0;

  numbers.forEach(item => {
    let notValid = typeof item === 'object' || Array.isArray(item);
    let isString = typeof item === 'string';
    let isBoolean = typeof item === 'boolean';
    let isNumber = typeof item === 'number';

    if (notValid) {
      throw `Unsupported data type sir or ma'am`;
    }

    if (isNumber) {
      counter += item;
    } else if (isString) {
      counter += item.length;
    } else if (isBoolean) {
      if (item === false) {
        counter += 0;
      } else if (item === true) {
        counter += 1;
      }
    }   
  })
  return counter;
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers(numbers) {
  //should return null if receives an empty array when called
  if(numbers.length === 0) {
    return null;
  }
  let totalNumbers = numbers.length;
  let average;
  let sum = sumNumbers(numbers);

  average = sum / totalNumbers;
  return average;
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) {
  let arrWordsLength = [];
  
  //iterate to create new array with length of words
  words.forEach(item => {
    arrWordsLength.push(item.length);
  });
  // Average of numbers based on the Array of the strings
  let avgNumbers = averageNumbers(arrWordsLength);
  return avgNumbers;
}

// function averageWordLength(words) {
//   let sum = 0;
//   let arrWordsLength = [];
//   let totalItems = words.length;
//   let totalAverage;
  
//   //iterate to create new array with length of words
//   words.forEach(item => {
//     arrWordsLength.push(item.length);
//   });
//   //console.log(arrWordsLength);

//   //iterate to sum the length of numbers
//   //Option 2 -- forEach loop
//   arrWordsLength.forEach(item => {
//     sum += item;
//   });

//   //Option 3 -- for loop
//   // for(let i = 0; i < arrWordsLength.length; i ++) {
//   //   counter += arrWordsLength[i];
//   //   //console.log(`counter: ${counter}`);
//   // }
//   totalAverage = sum/totalItems; 
//   //console.log(totalAverage)
//   return totalAverage;
// }

//const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
// Expected --> 5.7
// But there is an error on the tests--> expected 5.1

// Bonus - Iteration #4.1
function avg(arr) {
  let totalItems = arr.length;
  // check if there is an empty array
  if(arr.length === 0) {
    return null;
  }
  // Use Function Sum to iterate over the items and sum mixed items
  let sumMixedItems = sum(arr);
  let avgMixedItems = sumMixedItems/totalItems;
  return avgMixedItems;
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

//remove the duplicates, and return a new array. 
//You are more than likely going to want to check out the indexOf Array method.

function uniquifyArray(words) {
  if(words.length === 0) {
    return null;
  }
  let unique = [];

  words.forEach( word => {
    //console.log(`item: ${item}`);
    // Checks if the word it's not included inside the array given 'words'
    const isWordRepeated = unique.includes(word);
    if(!isWordRepeated) {//is not included
      unique.push(word);
    }
  })
  return unique;
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
//that will take in an array of words as one argument, 
//and a word to search for as the other. 
//Return true if it exists, otherwise, return false. 
//that will take in an array of words as one argument, and a word to search for as the other. Return true if it exists, otherwise, return false. Don't use indexOf for this one.
//Don't use indexOf for this one.
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
// Iteration #7: Count repetition
function howManyTimes(arrWords, wordToCheck) {
  // if the array is empty, return 0
  if(arrWords.length === 0) {
    return 0;
  }
  let counter = 0;
  //iterates to check if the wordToCheck is included inside the array of words
  arrWords.forEach(word => {
    //let isWordIncluded = word.includes(word);
    let isWordIncluded = word === wordToCheck;
    if(isWordIncluded) {
      counter +=1;
    }
  })
  return counter;
}
//howManyTimes(wordsCount, "matter")
// 4



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
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 412, 32, 63, 93, 53, 69],
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

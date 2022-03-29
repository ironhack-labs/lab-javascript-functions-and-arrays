// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else if (number2 > number1) {
    return number2;
  } else if (number1 === number2) {
    return number1;
  }
}


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arrayWords) {
  const numOfLetters = [];
  let indexOfMax;
  let maxNumOfLetters;

  if (arrayWords.length === 0) {
    return null;
  } else if (arrayWords.length === 1) {
    return arrayWords[0];
  } else {
    // Created a new array with the word sizes in the same order of the original words array
    arrayWords.forEach(function (word) {
      numOfLetters.push(word.length);
    });

    // I used the Math.max method fo find the max number of the new array, corresponding to the size of the biggest word
    maxNumOfLetters = Math.max(...numOfLetters);

    // I used then the indexOf method to find the first occurence of the biggest size word
    indexOfMax = numOfLetters.indexOf(maxNumOfLetters);

    return arrayWords[indexOfMax];
  }
}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayToSum) {
  let sum = 0;

  if (arrayToSum.length === 0) {
    return 0;
  } else {
    arrayToSum.forEach(function(number){
        sum += number;
    });
  }
  return sum;
}



// Iteration #3.1 Bonus:
function sum(polyArray) {
  let sum = 0;

  if (polyArray.length === 0) {
    return 0;
  } else {
    polyArray.forEach(function (element) {
      if (typeof element === 'object') {
        throw new Error("Unsupported data type sir or ma'am");
      } else if (typeof element === 'string') {
        sum += element.length;
      } else if (typeof element === 'number') {
        sum += element;
      } else if (element === true) {
        sum += 1;
      } else if (element === false) {
        sum += 0;
      }
    });
  }
  return sum;
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayToAverage) {
  if (arrayToAverage.length === 0) {
    return null;
  } else if (arrayToAverage.length === 1){
    const average = sumNumbers(arrayToAverage);
    return average;
  } else {
    const average = sumNumbers(arrayToAverage) / arrayToAverage.length;
    return average;
  }
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arrayWithWords) {
  let numLettersPerWord = [];
  let averageLength;

  if (arrayWithWords.length === 0) {
    return null;
  } else {
    arrayWithWords.forEach(function (word) {
      numLettersPerWord.push(word.length);
    });
  }
  
averageLength = sumNumbers(numLettersPerWord)/numLettersPerWord.length;

return averageLength;
}

// Bonus - Iteration #4.1
function avg(arr) {
  let numOfElements;
  let average;

  if (arr.length === 0) {
    return null;
  } else {
  numOfElements = arr.length;
  
  // I had to find this workaround to round the result to 2 decimal numbers so it would pass the test, since the result expected was 5.11 and my result was 5.11111111111
  average = Math.round((sum(arr) / numOfElements)*100) / 100;
  }
  return average;
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

function uniquifyArray(arrayToUniquify) {
  let uniquifiedArray = [];

  if (arrayToUniquify.length === 0) {
    return null;
  } else {
    // Here I used a for loop to iterate through the array so I could have an easier access to each index for comparisons
    for (let i = 0; i < arrayToUniquify.length; i++) {
      if (i === arrayToUniquify.indexOf(arrayToUniquify[i])) {
        uniquifiedArray.push(arrayToUniquify[i]);
      }
    }
  }
  return uniquifiedArray;
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(sourceArray, targetWord) {
  let foundWord = false;

  if (sourceArray.length === 0) {
    return null;
  } else if (sourceArray.length === 1 && sourceArray[0] === targetWord) {
    return true;
  } else {
    sourceArray.forEach(function (word) {
      if (word === targetWord) {
        foundWord = true;
      }
    });
  }
  return foundWord;
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

function howManyTimes(arrayToSearch, wordToFind) {
  let timesFound = 0;

  if (arrayToSearch.length === 0) {
    return timesFound;
  } else {
    arrayToSearch.forEach(function(word){
      if (word === wordToFind){
        timesFound += 1;
      }
    });
  }
  return timesFound;
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

function greatestProduct(matrix) {
  let maxProduct = 0;
  let result;

  // Checking for horizontal products. Each cycle on the first for loop will check an element of the array and the nested for loop will iterate the correspodent child array
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // Making sure that the code doesn't try to find numbers outside the range of the array
      // This implies that for each index of the matrix array, it will check the groups of four numbers inside the array located in that index. This means it will check for horizontal products
      if ((j-3) >= 0) {
        result = matrix[i][j]*matrix[i][j-1]*matrix[i][j-2]*matrix[i][j-3];
        if (maxProduct < result) {
          maxProduct = result;
        }
      }
      // This implies that for each specific index of the nested arrays it will check the corresponding index of the adjacent nested arrays inside the matrix array. This means it will check for vertical products.
      if ((i-3)>=0) {
        result = matrix[i][j]*matrix[i-1][j]*matrix[i-2][j]*matrix[i-3][j];
        if (maxProduct < result) {
          maxProduct = result;
        }
      }
    }
  }
  return maxProduct
}


function greatestProductOfDiagonals(matrix){
  let maxProduct = 0;
  let result;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // Making sure that the code doesn't try to find numbers outside the range of the array. Now starting at the top left, and searching in the down -> right diagonal
      if ((j-3) >= 0 && (i-3) >= 0) {
        result = matrix[i][j]*matrix[i-1][j-1]*matrix[i-2][j-2]*matrix[i-3][j-3];
        if (maxProduct < result) {
          maxProduct = result;
        }
      }
      // Now checking for the up -> right diagonal
      if ((i-3)>=0) {
        result = matrix[i][j]*matrix[i-1][j+1]*matrix[i-2][j+2]*matrix[i-3][j+3];
        if (maxProduct < result) {
          maxProduct = result;
        }
      }
    }
  }
  return maxProduct
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

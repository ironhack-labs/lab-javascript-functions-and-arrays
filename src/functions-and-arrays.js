// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}
console.log(maxOfTwoNumbers(4, 8));


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(array) {
  longestWord = "";
  if (!array.length) return null;
  for (const word of array) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord(words));


// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArray) {
  if (!numArray.length) return 0;
  let sum = 0;
  for (const element of numArray) {
    sum += element;
  }
  return sum;
}
console.log(sumNumbers(numbers));


// Iteration #3.1 Bonus:
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
function sum(mixArray) {
  if (!mixArray.length) return 0;
  let sum = 0;
  for (const element of mixArray) {
    if (typeof element === 'number') {
      sum += element;
    } else if (typeof element === 'string') {
      sum += element.length;
    } else if (typeof element === 'boolean') {
      sum += Number(element);
    } else {
      throw new Error('One of the values is a not supported value')
    }
  }
  return sum;
}
console.log(sum(mixedArr));


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numAvgArray) {
  if (!numAvgArray.length) return null;
  return sumNumbers(numAvgArray) / numAvgArray.length;
}
console.log(averageNumbers(numbersAvg));
// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordAvgArray) {
  if (!wordAvgArray.length) return null;
  let arrayLength = 0;
  for (const word of wordAvgArray) {
    arrayLength += word.length;
  }
  return arrayLength / wordAvgArray.length;
}
console.log(averageWordLength(wordsArr));
// Bonus - Iteration #4.1
function avg(mixArray) {
  if (!mixArray.length) return null;
  return sum(mixArray) / mixArray.length;
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

function uniquifyArray(stringsArray) {
  if (!stringsArray.length) return null;
  const indexOfDuplicates = [];
  for (let i = stringsArray.length - 1; i >= 0; i--) {
    const firstTime = stringsArray.indexOf(stringsArray[i], i + 1);
    if (firstTime !== -1) {
      indexOfDuplicates.push(firstTime);
    }
  }
  console.log(indexOfDuplicates)
  for (const index of indexOfDuplicates) {
    stringsArray.splice(index, 1);
  }
  return stringsArray;
}
console.log(uniquifyArray(wordsUnique));


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsArray, word) {
  if (!wordsArray.length) return null;
  if (typeof word != 'string') {
    throw new Error('The word to find is not a String')
  }
  return wordsArray.includes(word);

}
console.log(doesWordExist(wordsFind, 'subset'))


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

function howManyTimes(wordsArray, word) {
  if (!wordsArray.length) return 0;
  if (typeof word != 'string') {
    throw new Error('The word to find is not a String')
  }
  let wordRep = 0;
  for (const element of wordsArray) {
    if (element === word) {
      wordRep++;
    }
  }
  return wordRep;
}
console.log(howManyTimes(wordsCount, 'matter'))


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

function greatestProduct(bigMatrix) {
  const rows = bigMatrix.length;
  const columns = bigMatrix[0].length;
  let greatestProd = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= columns - 4; j++) {
      let rowsProd = bigMatrix[i][j] * bigMatrix[i][j + 1] * bigMatrix[i][j + 2] * bigMatrix[i][j + 3];
      greatestProd = Math.max(greatestProd, rowsProd);
    }
  }
  for (let i = 0; i <= rows - 4; i++) {
    for (let j = 0; j < columns; j++) {
      let columnsProd = bigMatrix[i][j] * bigMatrix[i + 1][j] * bigMatrix[i + 2][j] * bigMatrix[i + 3][j];
      greatestProd = Math.max(greatestProd, columnsProd);
    }
  }
  return greatestProd;
}

console.log(greatestProduct(matrix));

//Iteraction #8.2 Bonus 
function greatestProductOfDiagonals(bigMatrix) {
  const rows = bigMatrix.length;
  const columns = bigMatrix[0].length;
  let greatestProd = 0;


  for (let i = 3; i < rows; i++) {
    for (let j = 3; j < columns; j++) {
      if (i - 3 >= 0 && j - 3 >= 0) {
        let diagonalULProd = bigMatrix[i][j] * bigMatrix[i - 1][j - 1] * bigMatrix[i - 2][j - 2] * bigMatrix[i - 3][j - 3];
        greatestProd = Math.max(greatestProd, diagonalULProd);
      }
      if (i - 3 >= 0 && j + 3 < columns) {
        let diagonalURProd = bigMatrix[i][j] * bigMatrix[i - 1][j + 1] * bigMatrix[i - 2][j + 2] * bigMatrix[i - 3][j + 3];
        greatestProd = Math.max(greatestProd, diagonalURProd);
      }
      if (i + 3 < rows && j - 3 >= 0) {
        let diagonalDLProd = bigMatrix[i][j] * bigMatrix[i + 1][j - 1] * bigMatrix[i + 2][j - 2] * bigMatrix[i + 3][j - 3];
        greatestProd = Math.max(greatestProd, diagonalDLProd);
      }
      if (i + 3 < rows && j + 3 < columns) {
        let diagonalDRProd = bigMatrix[i][j] * bigMatrix[i + 1][j + 1] * bigMatrix[i + 2][j + 2] * bigMatrix[i + 3][j + 3];
        greatestProd = Math.max(greatestProd, diagonalDRProd);
      }
    }
  }
  return greatestProd;
}
console.log(greatestProductOfDiagonals(matrix));

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

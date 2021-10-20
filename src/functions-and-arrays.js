// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2 
}

// Iteration #2: Find longest word
const emptyArray = [];
const arrayMultipleWords = ['hi', 'how', 'are', 'you', 'dear', 'granmother'];
const arraySingleElement = ['Im the only element'];

function findLongestWord(words) {
  let longestWord = "";
  if (words.length == 0) {
    return null
  } else {
    for (let i = 0; i < words.length; i++) {
      if (longestWord.length < words[i].length) {
        longestWord = words[i]
      }
      //console.log(`This word ${longestWord} whose length is ${longestWord.length} and this word ${words[i]} whose length is ${words[i].length}`);
      //longestWord = longestWord.length > words[i].length ? longestWord : words[i]
    }
    return longestWord
  }
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) { 
  let sum = 0;  
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum; 
} 


// Iteration #3.1 Bonus:
function sum(crazyArray) {
  let sum = 0;

  if (crazyArray.length != 0) {

    for (let i = 0; i < crazyArray.length; i++) {
      
      switch(typeof(crazyArray[i])) {
        case 'string':
          sum += crazyArray[i].length
          break;
        case 'number':
          sum += crazyArray[i]
          break;
        case 'boolean':
          if (crazyArray[i]) sum += 1   // if it's true
          break;
        default:
          throw new Error("Unsupported data type sir or ma'am")
      }
    }
  }

  return sum;
}







// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayNumbers) {
  if (arrayNumbers.length === 0) return null
  
  // Average of the numbers: sum all numbers and divide by the length of the array
  return sumNumbers(arrayNumbers) / arrayNumbers.length
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArray) {

  let arrayOfLengths = wordsArray.map(x => x.length);
  return averageNumbers(arrayOfLengths)

}


// Bonus - Iteration #4.1
function avg(crazyArray) {
  if (crazyArray.length === 0) return null

  let result = sum(crazyArray) / crazyArray.length
  return parseFloat(result.toFixed(2))
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

function uniquifyArray(wordsArray) {

  if (wordsArray.length === 0) return null

  for (let i = 0; i < wordsArray.length; i++) {

    let firstAppearance = wordsArray.indexOf(wordsArray[i]);
    let lastAppearance = wordsArray.lastIndexOf(wordsArray[i]);

    // While there is still 2 occurences minimum, I delete one of them
    while (firstAppearance != lastAppearance) {
      wordsArray.splice(lastAppearance, 1);
      lastAppearance = wordsArray.lastIndexOf(wordsArray[i]);
    }
  }

  return wordsArray
}


// Iteration #6: Find elements
const wordsToFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsToFind, word) {
  if (wordsToFind.length === 0) return null
  
  return wordsToFind.includes(word) ? true : false 
}



// Iteration #7: Count repetition
const wordsToCount = [
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

function howManyTimes(wordsToCount, word) {
  if (wordsToCount.length === 0) return 0

  let counter = 0;
  while (wordsToCount.indexOf(word) != -1) {
    wordsToCount.splice(wordsToCount.indexOf(word), 1)
    counter ++
  }
  return counter
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

let biggestProduct = 0;
let biggestProductsArray = [0, 0, 0, 0];

function calculateProduct(factor1, factor2, factor3, factor4) {
  resultProduct = factor1 * factor2 * factor3 * factor4

  if (resultProduct > biggestProduct) {
    biggestProductsArray = [factor1, factor2, factor3, factor4]
    biggestProduct = resultProduct
  }
}

function greatestProduct(matrix) {
  let numColumns = matrix[0].length
  let numRows = matrix.length

  for (let i = 0; i < numRows; i++) {        // vertically
    for (let j = 0; j < numColumns; j++) {   // horizontally  

      // Our position in the Matrix is now (i,j)
      
      // Let's control the limits of the Matrix 
      // if (j + 3 > numColumns - 1) then I don't have enough horizontal adjacents
      // if (i + 3 > numRow - 1) then I don't have enough vertical adjacents

      if (j + 3 <= numColumns - 1) {

        // Horizontal factors
        let factor_h1 = matrix[i][j]
        let factor_h2 = matrix[i][j+1]
        let factor_h3 = matrix[i][j+2]
        let factor_h4 = matrix[i][j+3]

        calculateProduct(factor_h1, factor_h2, factor_h3, factor_h4)
      }

      if (i + 3 <= numRows - 1) {

        // Vertical factors
        let factor_v1 = matrix[i][j]
        let factor_v2 = matrix[i+1][j]
        let factor_v3 = matrix[i+2][j]
        let factor_v4 = matrix[i+3][j]

        calculateProduct(factor_v1, factor_v2, factor_v3, factor_v4)
      }
    }
  }
  
  console.log(`Biggest products are: ${biggestProductsArray}, result: ${biggestProduct}`);
  return biggestProduct
}


// Last Bonus

function greatestProductOfDiagonals(matrix) {
  let numColumns = matrix[0].length
  let numRows = matrix.length

  for (let i = 0; i < numRows; i++) {        
    for (let j = 0; j < numColumns; j++) {    

      // Let's heck the 4 diagonals from the poing (i,j)
      
      if (i - 3 > 0 && j - 3 > 0) {
        // Direction Top - Left
        let factor_diag_TL1 = matrix[i][j]
        let factor_diag_TL2 = matrix[i-1][j-1]
        let factor_diag_TL3 = matrix[i-2][j-2]
        let factor_diag_TL4 = matrix[i-3][j-3]

        calculateProduct(factor_diag_TL1, factor_diag_TL2, factor_diag_TL3, factor_diag_TL4)
      }

      if (i - 3 > 0 && j + 3 <= numColumns - 1) {
        // Direction Top - Right
        let factor_diag_TR1 = matrix[i][j]
        let factor_diag_TR2 = matrix[i-1][j+1]
        let factor_diag_TR3 = matrix[i-2][j+2]
        let factor_diag_TR4 = matrix[i-3][j+3]

        calculateProduct(factor_diag_TR1, factor_diag_TR2, factor_diag_TR3, factor_diag_TR4)
      }

      if (i + 3 <= numRows - 1 && j - 3 > 0) {

        // Direction Bottom - Left
        let factor_diag_BL1 = matrix[i][j]
        let factor_diag_BL2 = matrix[i+1][j-1]
        let factor_diag_BL3 = matrix[i+2][j-2]
        let factor_diag_BL4 = matrix[i+3][j-3]

        calculateProduct(factor_diag_BL1, factor_diag_BL2, factor_diag_BL3, factor_diag_BL4)
      }

      if (i + 3 <= numRows - 1 && j + 3 <= numColumns - 1) {

        // Direction Bottom - Right
        let factor_diag_BR1 = matrix[i][j]
        let factor_diag_BR2 = matrix[i+1][j+1]
        let factor_diag_BR3 = matrix[i+2][j+2]
        let factor_diag_BR4 = matrix[i+3][j+3]

        calculateProduct(factor_diag_BR1, factor_diag_BR2, factor_diag_BR3, factor_diag_BR4)
      }
    }
  }
  
  console.log(`Biggest products are: ${biggestProductsArray}, result: ${biggestProduct}`);
  return biggestProduct
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
    greatestProduct,
    greatestProductOfDiagonals
  };
}

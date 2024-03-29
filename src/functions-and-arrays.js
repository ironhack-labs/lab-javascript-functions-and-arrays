// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a
  } 
  else if (b > a) {
    return b
  }
  else {
    return a
  }
  }





// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot']; 


function findLongestWord(input) {
  if (input.length === 0) {
    return null
  } 
  else {
    let longestWord = ""
  for (let i=0; i<input.length; i++) {
    if (input[i].length > longestWord.length) {
      longestWord = input[i]
    }
    }
  return longestWord
  }
  
}






// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayNums) {
  if (arrayNums.length === 0) {
    return 0
  }
  else {
    let sumN = 0
  for (let i=0; i<arrayNums.length; i++) {
      sumN += arrayNums[i]
    }
  return sumN
  }
}





// Iteration #3.1 Bonus:


function sum(inputArray) {
  if (inputArray.length === 0) {
    return 0 
  }
  else {
    let sumArray = 0
    for (let i = 0; i < inputArray.length; i++) {
      
      if (typeof inputArray[i] === "number") {
        sumArray += inputArray[i]
      }
      else if (typeof inputArray[i] === "string") {
        sumArray += inputArray[i].length
      }
      else if (inputArray[i] === true) {
        sumArray += 1
      }
      else if (inputArray[i] === false) {
        sumArray += 0
      }
      /* else if (typeof inputArray[i] !== "number" || typeof inputArray[i] !== "string" || typeof inputArray[i] !== "boolean") */ 
      else {
        throw new Error(`Wrong type of parameter ${inputArray[i]}. The accepted types are "number", "string" or "boolean".`) /* Should 'Throw new error' return the very long error message including the line of code? Yes */
      }

    }
    return sumArray /* How return should be indented? on the same level as condition or loop? - Same level as a loop */
  }

}




// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(inputNumbers) {
  if (inputNumbers.length === 0) {
    return null
  }
  else {
    let average = sumNumbers(inputNumbers)/inputNumbers.length
  return average} 
}




// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(inputWords) { /* Can we give the same names to parameters in functions if we have several functions? Answ: Only if we need the same paramter as an input e.g.: user's email */
  if (inputWords.length === 0) {
    return null
  }
  else {
    let wordsAvg = 0
    for (let i = 0; i < inputWords.length; i++) {
      wordsAvg += inputWords[i].length
    }
    return wordsAvg/inputWords.length
  }
 }


// Bonus - Iteration #4.1
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 5.7

function avg(inputAvg) {
  if (inputAvg.length === 0) {
    return null
  }
  else {
    return sum(inputAvg)/inputAvg.length}
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

function uniquifyArray(inputWords) {
  if (inputWords.length === 0) {
    return null
  }
  else {
    let simplifiedArray = []
    for (let i = 0; i < inputWords.length; i++) {
      if (simplifiedArray.includes(inputWords[i]) === false){
        simplifiedArray.push(inputWords[i])
      }
      else {
        continue
      }
      

    }
    return simplifiedArray
  }
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsArray, searchWord) {
  if (wordsArray.length === 0) {
    return null
  }
  else if (wordsArray.includes(searchWord)) {
    return true
  }
  else {
    return false
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

function howManyTimes(inputArr, wordToCheck) {
  if (inputArr.length === 0) {
    return 0
  }
  else {
    let howMany = 0;
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i] === wordToCheck) {
        howMany++
      }
      else {
        continue
      }
    }
    return howMany
  }
}




// Iteration #8: Bonus


function greatestProduct(matrixInput) {
  
  for (let i = 0; i < matrixInput.length; i++) {
    matrixInput[i]
    let maxNumHorizontal = 0;
    for (let j = 0; j < matrixInput[i].length; j++) {
      let multipliedValues = (matrixInput[i][j]) * (matrixInput[i][j+1]) * (matrixInput[i][j+2]) * (matrixInput[i][j+3])
      if (multipliedValues > maxNumHorizontal) {
        maxNumHorizontal = multipliedValues
      }
    return maxNumHorizontal
    }
    let maxNumVertical = 0;
    for (let k = 0; k < matrixInput.length; k++) {
      let multipliedVert = (matrixInput[i][k]) * (matrixInput[i+1][k]) * (matrixInput[i+2][k]) * (matrixInput[i+3][k])
      if (multipliedVert > maxNumVertical) {
        maxNumVertical = multipliedVert
      }
    return maxNumVertical
    }
    if (maxNumHorizontal > maxNumVertical) {
      return maxNumHorizontal
    }
    else if(maxNumVertical > maxNumHorizontal) {
      return maxNumVertical
    }
    else if (maxNumVertical === maxNumHorizontal) {
      return maxNumVertical
    }
  }
  }


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


// Iteration #8.2 Bonus

function greatestProductOfDiagonals(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i]
    let maxNumDiag1 = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      let multipliedDiag1 = (matrix[i][j]) * (matrix[i+1][j+1]) * (matrix[i+2][j+2]) * (matrix[i+3][j+3])
      if (multipliedDiag1 > maxNumDiag1) {
        maxNumDiag1 = multipliedDiag1
      }
    return maxNumDiag1
    }
    let maxNumDiag2 = 0;
    for (let k = 0; k < matrix.length; k++) {
      let multipliedDiag2 = (matrix[i][k]) * (matrix[i-1][k-1]) * (matrix[i-2][k-2]) * (matrix[i-3][k-3])
      if (multipliedDiag2 > maxNumDiag2) {
        maxNumDiag2 = multipliedDiag2
      }
    return maxNumDiag2
    }
    if (maxNumDiag1 > maxNumDiag2) {
      return maxNumDiag1
    }
    else if(maxNumDiag2 > maxNumDiag1) {
      return maxNumDiag2
    }
    else if (maxNumDiag2 === maxNumDiag1) {
      return maxNumDiag2
    }
  }
}


// Iteration #1: Find the maximum
function maxOfTwoNumbers(firstNumber, secondNumber) {

  if (firstNumber > secondNumber) {
    return firstNumber
  } else if (firstNumber < secondNumber) {
    return secondNumber
  } else {
    return firstNumber, secondNumber
  }

}

// Iteration #2: Find longest word

function findLongestWord(arrayOfWords) {

  if (arrayOfWords.length != 0) {
    let longestWord = arrayOfWords[0]

    for (let i = 1; i < arrayOfWords.length; i++) {

      if (longestWord.length < arrayOfWords[i].length) {
        longestWord = arrayOfWords[i]
      }
    }
    
    return longestWord
  
  }
  
  return null
  
}

// Iteration #3: Calculate the sum

function sumNumbers(arrayOfNumbers) {

  let totalSum = 0

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    totalSum += arrayOfNumbers[i]
  }

  return totalSum
}


// Iteration #3.1 Bonus:
function sum(arrItThree) {

  let totalSumItThree = 0

  for (let i = 0; i < arrItThree.length; i++) {
    
    if (typeof arrItThree[i] === "string") {
        totalSumItThree += arrItThree[i].length
    } else if (typeof arrItThree[i] === "number") {
        totalSumItThree += arrItThree[i]
    } else if (arrItThree[i] === true) {
        totalSumItThree += 1
    } else if ((typeof arrItThree[i] === "object")||(typeof arrItThree[i] === "array")){
        throw new Error("Unsupported data type sir or ma'am")
    }

    }
    
  return totalSumItThree
} 

// CONDIÇÃO DE OBJETO E ARRAY ESTÂO FEITAS, RESPOSTA ESTÀ SENDO ENVIADA NO CONSOLE, MAS NO TESTE NÃO ESTÀ PASSANDO.

// Iteration #4: Calculate the average
// Level 1: Array of numbers

function averageNumbers(arrayOfNumbers) {
  
  if (arrayOfNumbers.length === 0) {
    return null
  }

  let sum = sumNumbers(arrayOfNumbers)

  let avgIterationFourOne = sum / (arrayOfNumbers.length)

  return avgIterationFourOne
   
}

// Level 2: Array of strings

function averageWordLength(arrayOfWords) {

  if (arrayOfWords.length === 0) {
    return null
  }

  let sumOfLength = 0

  for (let i = 0; i < arrayOfWords.length; i++) {
    sumOfLength += arrayOfWords[i].length
  }
  
  let avgIterationFourTwo = sumOfLength / (arrayOfWords.length)
  
  return avgIterationFourTwo
  }

// Bonus - Iteration #4.1
function avg(arrAvg) {
  
  if (arrAvg.length === 0) {
    return null
  }

  let totalAvgSum = 0

  for (let i = 0; i < arrAvg.length; i++) {
    if (typeof arrAvg[i] === "string") {
      totalAvgSum += arrAvg[i].length
    } else if (typeof arrAvg[i] === "number") {
      totalAvgSum += arrAvg[i]
    } else if (arrAvg[i] === true) {
      totalAvgSum += 1
    }
  }
    
  let avgIterationFourThree = totalAvgSum / arrAvg.length
  
  return parseFloat(avgIterationFourThree.toFixed(2))
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

function uniquifyArray(arrayofWordsIterationFive) {
  arrayofWordsIterationFive.forEach(word => {
    console.log(arrayofWordsIterationFive.indexOf(word))        
  });
}

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

function howManyTimes(arrayItSeven,wordToBeChecked) {

  if (arrayItSeven.length === 0) {
    return 0
  }

  let numberOfTimes = 0

  arrayItSeven.forEach(word => {
    if (word === wordToBeChecked) {
      numberOfTimes += 1
  }})

  return numberOfTimes

}


// Iteration #8: Bonus
const matrixExample = [
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

function greatestProduct(productMatrix) {

  // verificação horizontal 
  let maxValueLine = 0

  for (let lineNumber = 0; lineNumber < productMatrix.length; lineNumber++) {
    for (let indexOfItem = 0; indexOfItem < productMatrix[lineNumber].length;indexOfItem++) {
      let productLine = productMatrix[lineNumber][indexOfItem]*productMatrix[lineNumber][indexOfItem+1]*productMatrix[lineNumber][indexOfItem+2]*productMatrix[lineNumber][indexOfItem+3]
      console.log(productMatrix[lineNumber][indexOfItem+3])
      if (productLine > maxValueLine) {
        maxValueLine = productLine
      }
    }
  }

  // verificação vertical
  let maxValueColumn = 0

  for (let columnIndex = 0; columnIndex < productMatrix.length; columnIndex++) {
    for (let arrayNumber = 0; arrayNumber <= productMatrix.length-4;arrayNumber++) {
      let productColumn = productMatrix[arrayNumber][columnIndex]*productMatrix[arrayNumber+1][columnIndex]*productMatrix[arrayNumber+2][columnIndex]*productMatrix[arrayNumber+3][columnIndex]
  
      if (productColumn>maxValueColumn){
        maxValueColumn = productColumn
      }
    }

  }

  if (maxValueLine > maxValueColumn) {
    return maxValueLine
  } else {
    return maxValueColumn
  }

}

const matrix = [
                [2, 2, 2, 3],
                [2, 2, 2, 1],
                [2, 10, 2, 1]
              ]

console.log(greatestProduct(matrix))


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

//---LAB 02 - JS Functions and Arrays -- 24.05.2021
//---Writen by Pedro Pasquali
//---Code Diary--//
/*
31.05.21 - Bonus 3.1 + 4.1. Falta 8.0 + 8.1

*/
// Iteration #1: Find the maximum
function maxOfTwoNumbers(n1, n2) {
  if (n1 > n2) {
    return n1
  }
  return n2
}
//--ANSWER HERE--//console.log(maxOfTwoNumbers (5, 12));


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordArray) {
  if (wordArray.length === 0) {
    return null
  }
  let longestWordIs = ``;
  for (let index = 0; index < wordArray.length; index += 1) {
    if (wordArray[index].length > longestWordIs.length) {
      longestWordIs = wordArray[index]
    }
  }
  return longestWordIs
}
//--ANSWER HERE--//console.log(findLongestWord(words))


// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nToBeSummed) {
  let startEndResult = 0
  for (let index = 0; index < nToBeSummed.length; index += 1) {
    let lastResult = startEndResult + nToBeSummed[index]
    startEndResult = lastResult
  }
  return startEndResult
}
//--ANSWER HERE--//console.log(sumNumbers(numbers))


// Iteration #3.1: A generic sum() function -------- BONUS-------------------------------
// should return: 57 (Ou é 56???)
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// console.log(mixedArr[5] === true)
// console.log(typeof mixedArr[5].length)

function sumArrays(toBeSummed) {
  let startEndResult = 0;
  for (let index = 0; index < toBeSummed.length; index += 1) {
    switch (typeof toBeSummed[index]) {
      case 'number':
        startEndResult += toBeSummed[index];
        break;
      case 'string':
        startEndResult += toBeSummed[index].length;
        break;
      case true:
        startEndResult += 1;
        break;
    }
  }
  return startEndResult
}
//--ANSWER HERE--//console.log(sumArrays(mixedArr))



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  if (array.length === 0) {
    return null
  }
  return (sumNumbers(array) / array.length)
}
//--ANSWER HERE--//console.log(averageNumbers(numbersAvg))


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arrayOfWords) {
  if (arrayOfWords.length === 0) {
    return null
  }
  let startEndSumOfChar = 0
  for (let index = 0; index < arrayOfWords.length; index += 1) {
    let lastSumOfChar = startEndSumOfChar + arrayOfWords[index].length
    startEndSumOfChar = lastSumOfChar
  }
  return startEndSumOfChar / arrayOfWords.length
}
//--ANSWER HERE--//console.log(averageWordLength(wordsArr))


// Iteration #4.1: A generic avg() function -------- BONUS-------------------------------
const mixedArrn2 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
// should return: 5.7

function avgArr(array) {
  if (array.length === 0) {
    return null
  }
  return (sumArrays(mixedArrn2) / mixedArrn2.length)
}
//--ANSWER HERE--//console.log(avgArr(mixedArrn2))



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

function uniquifyArray (arrayData) {
  let newArrayData = [];
  for (let index = 0; index < arrayData.length; index += 1) {
    if (arrayData.indexOf(arrayData[index],index+1) == `-1`) {
      newArrayData.unshift(arrayData[index]);
    }
  }
  return newArrayData;
}
//--ANSWER HERE--//console.log(uniquifyArray(wordsUnique));


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(bucketOfWords, word) {
  if (bucketOfWords.length === 0) {
    return null
  }
  for (let index = 0; index < bucketOfWords.length; index += 1) {
    console.log(index)
    if (bucketOfWords[index] === word) {
      return true
    }
  }
  return false
}
//--ANSWER HERE--//console.log(doesWordExist(wordsFind,`subset`))

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
  'matter',
  `machine`
];

function howManyTimes (searchArray, wordToCheck) {
  totalTimes = 0;
  for (let index = 0; index < searchArray.length; index += 1) {
    if (searchArray[index] === wordToCheck) {
      totalTimes += 1;
    }
  }
  return totalTimes;
}
//--ANSWER HERE--//console.log(howManyTimes(wordsCount,`machine`));


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

console.log(matrix[0][10])

function greatestProduct(anyMatrix) {
  let index = 0
  let biggestNumbers = []
  for (index; index < anyMatrix.length; index += 1 ) {
    for (index; index < anyMatrix[index].length; += 1) {
      if (anyMatrix[index][index] > anyMatrix[index][index+1]) {

      }
    }
  }  

}
// Iteration #8.1: Bonus
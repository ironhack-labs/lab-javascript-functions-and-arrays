// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 >= num2) {
    return num1
  } else if (num1 < num2) {
    return num2
  } 
}


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(array) {
  if (array.length > 0) {
    let longestString = array[0]
    array.forEach(element => {
      if (element.length > longestString.length) {
        longestString = element
      }
    });
    return longestString
  } else {
    return null
  }
}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numberArray) {
  let result = 0;
  numberArray.forEach(element => result += element)
  return result
}



// Iteration #3.1 Bonus:
function sum(mixedArray) {
  let total = 0;
  mixedArray.forEach(element => {
    if (typeof element === 'number') {
      total += element
    } else if (typeof element === "string") {
      total += element.length
    } else if (typeof element === "boolean") {
      if (element) { total++ }
    } else {
      throw new Error("Error message goes here");
    }
  })
  return total
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numberArray) {
  if (numberArray.length === 0) {
    return null
  } else {
    return sumNumbers(numberArray) / numberArray.length
  }
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(stringArray) {
  if (stringArray.length === 0) {
    return null
  } else {
    return sum(stringArray) / stringArray.length
  }
}

// Bonus - Iteration #4.1
function avg(mixedArray) {
  if (mixedArray.length === 0) {
    return null
  } else {
    return sum(mixedArray) / mixedArray.length
  }
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

function uniquifyArray(stringArray) {
  const uniqueArr = []
  if (stringArray.length === 0) {
    return null
  } else {
    stringArray.forEach(element => {
      if (!uniqueArr.includes(element)) {
        uniqueArr.push(element)
      }
    })
    return uniqueArr
  }
}


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(someStrings, word) {
  if (someStrings.length === 0) {
    return null
  } else {
    return someStrings.includes(word)
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

function howManyTimes(someWords, targetWord) {
  let counter = 0;
  someWords.forEach(word => {
    if (word === targetWord) {
      counter++
    }
  })
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

function greatestProduct(matrix) {
  let row = 0
  let numbers = [0, 0, 0, 0]
  let col = 0

  // acotamos la matriz
  matrix.forEach(matrixRow => {
    if (Math.max(...matrixRow) > numbers[0]) {
      numbers[0] = Math.max(...matrixRow)
      row = matrix.indexOf(matrixRow)
      col = matrixRow.indexOf(numbers[0])
    }
  })

  //iteramos sobre eje horizontal
  matrix[row].slice(col).forEach(num => {
    if (num < numbers[0] && num > numbers[1]) {
      numbers[1] = num
    } else if (num < numbers[1] && num > numbers[2]) {
      numbers[2] = num
    } else if (num < numbers[2] && num > numbers[3]) {
      numbers[3] = num
    }
  })

  //iteramos sobre eje vertical
  matrix.slice(row).forEach(matrixRow => {
    if (matrixRow[col] < numbers[0] && matrixRow[col] > numbers[1]) {
      numbers[1] = matrixRow[col]
    } else if (matrixRow[col] < numbers[1] && matrixRow[col] > numbers[2]) {
      numbers[2] = matrixRow[col]
    } else if (matrixRow[col] < numbers[2] && matrixRow[col] > numbers[3]) {
      numbers[3] = matrixRow[col]
    }
  })

  let multiple = 1
  numbers.forEach(number => multiple *= number)
  return multiple
}

// Bonus - Iteration #8.2: Product of diagonals
function greatestProductDiagonal(matrix) {
  let row = 0
  let numbers = [0, 0, 0, 0]
  let col = 0

  // acotamos la matriz
  matrix.forEach(matrixRow => {
    if (Math.max(...matrixRow) > numbers[0]) {
      numbers[0] = Math.max(...matrixRow)
      row = matrix.indexOf(matrixRow)
      col = matrixRow.indexOf(numbers[0])
    }
  })

  //iteramos sobre la diagonal
  matrix.slice(row).forEach(matrixRow => {
    if (matrixRow[col] < numbers[0] && matrixRow[col] > numbers[1]) {
      numbers[1] = matrixRow[col]
    } else if (matrixRow[col] < numbers[1] && matrixRow[col] > numbers[2]) {
      numbers[2] = matrixRow[col]
    } else if (matrixRow[col] < numbers[2] && matrixRow[col] > numbers[3]) {
      numbers[3] = matrixRow[col]
    }
    col++
  })

  let multiple = 1
  numbers.forEach(number => multiple *= number)
  return multiple
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

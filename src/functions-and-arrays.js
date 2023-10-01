// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  if(a>b)
    return a
  else if(a<b)
    return b
  else 
    return a
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordsParam) {
  /* if (wordsParam == []) */
  // console.log(typeof []) return object
  // the equality comparison (loose and strict) compares values, which for an array is actually the reference of the objects instead of the content, and here they are different objects in memory, so with different references
  if (wordsParam.length == 0)
    return null 
  else if (wordsParam.length == 1)
  {
    return wordsParam[0]
  }
  else 
    {
      let max = 0
      let index = 0
      for (let i = 0; i < wordsParam.length; i++) {
        console.log(i, wordsParam[i].length)
        if (wordsParam[i].length > max) { // when using the syntax without the {} only the first line that follows is in the if block
          max = wordsParam[i].length      //
          index = i                       // so if more than 1 line needed, {} required
        }
      }
      return wordsParam[index]
    } 
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersParam) {
  let sum = 0
  if (numbersParam.length == 0)
    return 0
  else {
    numbersParam.forEach(function(number) {sum += number})
    return sum
  }
   
}

// Iteration #3.1 Bonus:
function sum(param) {
  let temp = 0
  if (Array.isArray(param) && param.length == 0)
    return 0
  else if (Array.isArray(param)) {
    param.forEach(function(element) {
    if (typeof element == "object")  // will cover both object AND array types
      // throw new Error('Error: passed array argument contains forbidden data types (object or array)')
      throw new Error("Unsupported data type sir or ma'am") // jasmine testing only this exact message
    if (typeof element == "string") // no need to test for boolean type because they are implicitly coerced to numbers by the operators
        element = element.length
      temp += element
    })
    return temp
  }
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersParam) {
  if (numbersParam.length == 0)
    return null
  return sum(numbersParam) / numbersParam.length
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsParam) {
  if (wordsParam.length == 0)
    return null
  return sum(wordsParam) / wordsParam.length
}

// Bonus - Iteration #4.3 // WAS "4.1" IN SOURCE LAB REPO
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10]; // WAS MISSING TOO
function avg(mixedParam) {
  let mixedLen = 0
  if (mixedParam.length == 0)
    return null
  /*
  mixedArr.forEach(element => {
  // need to coerce boolean to number because true.length is undefined
  // https://stackoverflow.com/questions/7820683/convert-boolean-result-into-number-integer
  // cannot use the unary operator + because +string is NaN
  // cannot use the ternary operator because test ? 1 : 0 will return 1 for non empty string (which are truthy) instead of their length
  // cannot bitwise or | because string | 0 returns 0 even for empty string
  // cannot use Number(element) because returns NaN for a string element
  // double bitwise NOT operator ~~
  // http://web.archive.org/web/20210517190429/https://j11y.io/javascript/double-bitwise-not/
  mixedLen += typeof element == "string" ? element.length : +element
  })
  return sum(mixedParam) / mixedLen
  // returns 1... useless, but mixedLen is correct!
  */
    return sum(mixedParam) / mixedParam.length
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

function uniquifyArray(arrayParam) {
  if (arrayParam.length == 0)
    return null
  /*
  let i = 0
  let uniquifiedArray = []
  arrayParam.forEach(element => {
    if (!arrayParam.includes(element, i + 1))
      // then unique, the element does not exist somewhere further in the array, so unique
      uniquifiedArray.push(element)
    i += 1
  })
  return uniquifiedArray
  // order is important to pass the test, and the first occurence should be kept, this solution keep the last one
  */
  let i = 0
  let uniquifiedArray = []
  arrayParam.forEach(element => {
    if (arrayParam.indexOf(element) == i)
      uniquifiedArray.push(element)
    i += 1
  })
  return uniquifiedArray
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsParam, wordSearch) {
  if (wordsParam.length == 0)
    return null
  if (wordsParam.includes(wordSearch))
    return true
  else
    return false
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

function howManyTimes(wordsParam, wordSearch) {
  let count = 0
  if (wordsParam.length == 0)
    return 0
  if (!wordsParam.includes(wordSearch))
    return 0
  else {
    wordsParam.forEach(function (word) {
      if (word == wordSearch)
        count += 1
    })
    return count
  }
}

// Iteration #8: Bonus // 8.1
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

function greatestProduct2(matrixParam) {
  let temp = []
  matrixParam.forEach(row => {
    if (howManyTimes(row, 1) == row.length) // row of 1s
      temp.push(1)
    if (howManyTimes(row, 2) == row.length) // row of 2s
      temp.push(2)
  })
  if (howManyTimes(temp, 1) == temp.length && temp.length == matrixParam.length) // temp of 1s
    return 1
  if (howManyTimes(temp, 2) == temp.length && temp.length == matrixParam.length) // temp of 2s
    return 16
}

// was looking only at the jasmine specs:
// should return 1 (one) when all numbers of the arrays are 1 (unit test with a 20x20 matrix of 1)
// should return 16 when all the numbers of the arrays are 2 (unit test with a 20x20 matrix of 2)
// i missed the spirit of the exercise! : find the greatest product of four adjacent numbers in a column

function greatestProduct(matrixParam) {
  let max = 0;
  let rowMax = 0 // i
  let colMax = 0 // j
  for (let i = 0; i < matrixParam.length - 3; i++) {
    for (let j = 0; j < matrixParam[i].length; j++) {
      const product = matrixParam[i + 0][j]
                    * matrixParam[i + 1][j]
                    * matrixParam[i + 2][j]
                    * matrixParam[i + 3][j]
      if (product > max) {
        max = product;
        rowMax = i
        colMax = j
      }
    }
  }

  return max
  // 51267216

  /*
  return {
    'max': max,
    'rowMax': rowMax, 
    'colMax': colMax, 
    'matrix': [
      matrixParam[rowMax+0][colMax], 
      matrixParam[rowMax+1][colMax], 
      matrixParam[rowMax+2][colMax], 
      matrixParam[rowMax+3][colMax]
    ]
  }
  */
  // returns:
  // {max: 51267216, rowMax: 6, colMax: 15, matrix: Array[4]}
  //   max: 51267216
  //   rowMax: 6
  //   colMax: 15
  //   matrix: Array[4]
  //     0: 66
  //     1: 91
  //     2: 88
  //     3: 97

}

// Iteration #8: Bonus // 8.2 NOT IN JASMINE SPECS NOR UNIT TESTS
// NOT TESTED
// returns the greatest product of any four values laid out diagonally, in either direction.
function greatestProductOfDiagonals(matrixParam) {
  let max = 0;
  let rowMax = 0 // i
  let colMax = 0 // j

  for (let i = 0; i < matrixParam.length - 3; i++) {
    for (let j = 0; j < matrixParam[i].length; j++) {
      const product = matrixParam[i+0][j+0]
                    * matrixParam[i+1][j+1]
                    * matrixParam[i+2][j+2]
                    * matrixParam[i+3][j+3]
      if (product > max) {
        max = product;
        rowMax = i
        colMax = j
      }
    }
  }

  // loop again in the other direction
  for (let i = 0; i < matrixParam.length - 3; i++) {
    for (let j = 0; j < matrixParam[i].length; j++) {
      const product = matrixParam[i+0][j+3]
                    * matrixParam[i+1][j+2]
                    * matrixParam[i+2][j+1]
                    * matrixParam[i+3][j+0]
      if (product > max) {
        max = product;
        rowMax = i
        colMax = j
      }
    }
  }

  return max
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

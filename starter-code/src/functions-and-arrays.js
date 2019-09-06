// Find the maximum

/*
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
*/

const maxOfTwoNumbers = (num1, num2) => num1> num2 ? num1 : num2

// Finding Longest Word
const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

/*
function findLongestWord(wordsArray) {

  if (wordsArray.length === 0
    || wordsArray === null || wordsArray === undefined) {
    return null;
  } else {
    let longestWord = '';
    wordsArray.forEach(word => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    })
    return longestWord;
  }

}
*/

const  findLongestWord = wordsArray => {

  if (wordsArray.length === 0 || wordsArray === null || wordsArray === undefined) {
    return null;
  } else {
    let longestWord = '';
    wordsArray.forEach( word => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    })
    return longestWord;
  }

}

// Calculating a Sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

/*
function sumArray(numsArray) {
  let result = 0;
  numsArray.forEach(function (number) {
    result += number;
  })
  return result;
}
*/

const sumArray = numsArray => {
  let result = 0;
  numsArray.forEach( number => {
    result += number;
  })
  return result;
}

// Calculate the Average

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

/*
function averageNumbers(numsArray) {
  if (numsArray.length !== 0) {
    return sumArray(numsArray) / numsArray.length;
  } else {
    return null;
  }
}
*/

const averageNumbers = numsArray  => 
numsArray.length !== 0  ? sumArray(numsArray)/numsArray.length : null

// Array of Strings
const wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

/*
function averageWordLength(wordsArray) {
  let arrayLengths = [];
  wordsArray.forEach(function (word) {
    arrayLengths.push(word.length);
  })
  return averageNumbers(arrayLengths);
}
*/

const averageWordLength = wordsArray => {
  let arrayLengths = [];
  wordsArray.forEach( word => {
    arrayLengths.push(word.length);
  })
  return averageNumbers(arrayLengths);
}

// Unique Arrays
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

/*
function uniquifyArray(wordsArray){
  let arrayResult = [];
  wordsArray.forEach(function (word) {
    if (arrayResult.indexOf(word) === -1) {
      arrayResult.push(word);
    }
  })
  return arrayResult;
}
*/
const uniquifyArray = wordsArray  => {
  let arrayResult = [];
  wordsArray.forEach( word => {
    if (arrayResult.indexOf(word) === -1) {
      arrayResult.push(word);
    }
  })
  return arrayResult;
}

// Finding Elements
const wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

/*
function doesWordExist(wordsArray, wordToFind) {
  let result = false;
  wordsArray.forEach(function (word) {
    if (wordToFind === word) {
      result = true;
    }
  })
  return result;
} 
*/

const doesWordExist = (wordsArray, wordToFind) => {
  let result = false;
  wordsArray.forEach( word => {
    if (wordToFind === word) {
      result = true;
    }
  })
  return result;
}

// Counting Repetion
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

/*
function howManyTimes(wordsArray, wordToSearch) {
  let result = 0;
  wordsArray.forEach(function (word) {
    if (word === wordToSearch) {
      result++;
    }
  })
  return result;
} 
*/

const howManyTimes = (wordsArray, wordToSearch) => {
  let result = 0;
  wordsArray.forEach( word => {
    if (word === wordToSearch) {
      result++;
    }
  })
  return result;
}

// Bonus Quest

const matrix = [
  [08,02,22,97,38,15,00,40,00,75,04,05,07,78,52,12,50,77,91,08],
  [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,04,56,62,00],
  [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,03,49,13,36,65],
  [52,70,95,23,04,60,11,42,69,24,68,56,01,32,56,71,37,02,36,91],
  [22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
  [24,47,32,60,99,03,45,02,44,75,33,53,78,36,84,20,35,17,12,50],
  [32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
  [67,26,20,68,02,62,12,20,95,63,94,39,63,08,40,91,66,49,94,21],
  [24,55,58,05,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
  [21,36,23,09,75,00,76,44,20,45,35,14,00,61,33,97,34,31,33,95],
  [78,17,53,28,22,75,31,67,15,94,03,80,04,62,16,14,09,53,56,92],
  [16,39,05,42,96,35,31,47,55,58,88,24,00,17,54,24,36,29,85,57],
  [86,56,00,48,35,71,89,07,05,44,44,37,44,60,21,58,51,54,17,58],
  [19,80,81,68,05,94,47,69,28,73,92,13,86,52,17,77,04,89,55,40],
  [04,52,08,83,97,35,99,16,07,97,57,32,16,26,26,79,33,27,98,66],
  [88,36,68,87,57,62,20,72,03,46,33,67,46,55,12,32,63,93,53,69],
  [04,42,16,73,38,25,39,11,24,94,72,18,08,46,29,32,40,62,76,36],
  [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,04,36,16],
  [20,73,35,29,78,31,90,01,74,31,49,71,48,86,81,16,23,57,05,54],
  [01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,01,89,19,67,48]
]

/*
// Bonus
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
*/

/*
const greatestProduct = grid => {
  let maxProd = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++ ) {
      let prod = 0;

      if (i >= 3) {
        // top
        prod = grid[i][j] * grid[i-1][j] * grid[i-2][j] * grid[i-3][j] 
        maxProd = prod > maxProd ? prod : maxProd;
      }
      if (i <= 16) {
        // down
        prod = grid[i][j]  * grid[i][j-1] * grid[i][j-2] * grid[i][j-3]
        maxProd = prod > maxProd ? prod : maxProd;
      }
      if (j >= 3) {
        // left
        prod = grid[i][j]  * grid[i][j-1] * grid[i][j-2] * grid[i][j-3]
        maxProd = prod > maxProd ? prod : maxProd;
      }
      if (j <= 16) {
        // right
        prod = grid[i][j]  * grid[i][j+1] * grid[i][j+2] * grid[i][j+3]
        maxProd = prod > maxProd ? prod : maxProd;
      }

    }
  }
  return maxProd;
}
*/

const greatestProduct = grid => {
  let maxProd = 0;
  grid.forEach( (col, y) => {
    col.forEach( (row, x) =>{
      let prod = 0;

      if (y >= 3) {
        // top
        prod = grid[y][x] * grid[y-1][x] * grid[y-2][x] * grid[y-3][x] 
        maxProd = prod > maxProd ? prod : maxProd;
      }
      if (y <= 16) {
        // down
        prod = grid[y][x]  * grid[y][x-1] * grid[y][x-2] * grid[y][x-3]
        maxProd = prod > maxProd ? prod : maxProd;
      }
      if (x >= 3) {
        // left
        prod = grid[y][x]  * grid[y][x-1] * grid[y][x-2] * grid[y][x-3]
        maxProd = prod > maxProd ? prod : maxProd;
      }
      if (x <= 16) {
        // right
        prod = grid[y][x]  * grid[y][x+1] * grid[y][x+2] * grid[y][x+3]
        maxProd = prod > maxProd ? prod : maxProd;
      }

    })
  })
  return maxProd;
}

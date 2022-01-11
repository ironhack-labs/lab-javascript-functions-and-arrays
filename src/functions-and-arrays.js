// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  return Math.max(a, b);
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot', "somethingveryverylong", "short"];

const singleArray = ["oneWord"];

function findLongestWord(array) {
  let longestWord = "";
  if (array.length > 0) {
    longestWord = array.reduce((prev, current) => {
      console.log("Prev: ", prev);
      if (current.length > prev.length) {
        prev = current;
      }
      return prev;
    }, array[0]);
  } else {
    return null;
  }
  console.log("longestWord word: ", longestWord);
  return longestWord;
}

console.log(findLongestWord(singleArray));


// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  let sum = 0;
  if (array.length > 0) {
    sum = array.reduce((acc, curr) => {
      return acc + curr;
    });
  } else {
    return 0;
  }
  return sum;
}


// Iteration #3.1 Bonus:
function sum(array) {
  let sum = 0;
  let element;
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      switch(typeof array[i]) {
        case "number": 
          element = array[i];
          break;
        case "string":
          element = array[i].length;
          break;
        case "boolean":
        case "undefined":
          element = +array[i];
          break;
        default:
          throw new Error("Unsupported data type sir or ma'am");
      }
      sum +=element;
    }
  } else {
    return 0;
  }
  return sum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  let sumOfArray = 0;
  let average = 0;
  if (array.length > 0) {
    sumOfArray = sum(array);
    console.log("Sum: ", sumOfArray);
    average = sumOfArray / array.length;
  } else {
    return null;
  }
  console.log("Average: ", average);
  return average;
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(array) { 
  let sumOfArray = 0;
    let average = 0;
    let arrayOfNumbers = [];
    if (array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        arrayOfNumbers.push(array[i].length);
      }
      sumOfArray = sum(arrayOfNumbers);
      console.log("Sum: ", sumOfArray);
      average = sumOfArray / array.length;
    } else {
      return null;
    }
    console.log("Average length of strings: ", average);
    return average;
}

// Bonus - Iteration #4.1

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 5.7

function avg(array) {
  let sumOfArray = 0;
  let average = 0;
  if (array.length > 0) {
    sumOfArray = sum(array);
    console.log("Sum: ", sumOfArray);
    average = sumOfArray / array.length;
  } else {
    return null;
  }
  console.log("Average: ", average);
  return Number(average.toFixed(2));
}

console.log("Average of mixed array: ", avg(mixedArr));

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

function uniquifyArray(array) {
  let object = {};
  let uniqueArray = [];
  if (array.length > 0) {
    for (let i=0; i < array.length; i++) {
      if (!object[array[i]]) {
        object[array[i]] = 1;
      } else {
        object[array[i]] += 1;
      }
    }
    uniqueArray = Object.keys(object);
    console.log("Object: ", object);
    console.log("Unique array: ", uniqueArray);
    return uniqueArray;
  } else {
    return null;
  }
}


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(array, word) {
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === word) {
        return true;
      }
    } 
    return false;
  } else {
    return null;
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

function howManyTimes(array, word) {
  let counter = 0;
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === word) {
        counter++;
      }
    }
    console.log("Number of repitions: ", counter);
    return counter;
  } else {
    return 0;
  }
}



// Iteration #8: Bonus
const testMatrix = [
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

function greatestProduct(matrix){
  let productRowArray = createProductArray(matrix);
  let productColumnArray = createProductArray(createColumnsMatrix(matrix));
  let maxProductRowArray = getMaximumNumber(productRowArray);
  let maxProductColumnArray = getMaximumNumber(productColumnArray);
  let maxOverall = Math.max(maxProductRowArray, maxProductColumnArray);
  console.log("The overall maximum is: ", maxOverall);
  return maxOverall;
}

function greatestProductFourAdjacent(array) {
  let greatestProduct = 0;
  let tempProduct;
  for (let i = 0; i < array.length - 3; i++) {
    tempProduct = array[i] * array[i+1] * array[i+2] * array[i +3];
    if (tempProduct > greatestProduct) {
      greatestProduct = tempProduct;
    }
  }
  console.log("Greatest product four adjacent: ", greatestProduct);
  return greatestProduct;
}

function createProductArray(matrix) {
  let greatestProductRowArray = [];
  let greatestProduct;
  for (let i = 0; i  < matrix.length; i++) {
    greatestProduct = greatestProductFourAdjacent(matrix[i]);
    greatestProductRowArray.push(greatestProduct);
  }
  console.log("Array containing greatest product for each row: ", greatestProductRowArray);
  return greatestProductRowArray;
}

function getMaximumNumber(array) {
  let max = array.reduce((acc, curr) => Math.max(acc, curr));
  console.log("Biggest number in array: ", max);
  return max;
}

function createColumnsMatrix(matrix) {
  let columnMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let singleColumn = [];
    for (let j = 0; j < matrix.length; j ++) {
      singleColumn[j] = matrix[j][i];
    }
    columnMatrix.push(singleColumn);
  }
  console.log("Column matrix: ", columnMatrix);
  return columnMatrix;
}

// function createDiagonalTopHalf(matrix) {
//   let diagonalMatrixHalf = [];
//     for(i=0; i< matrix.length; i++) {
//     let diagonalArray = [];
//     let element;
//     for (j = 0; j <= i; j++) {
//       element = matrix[i - j][0 + j]
//       diagonalArray.push(element);
//     }
//     diagonalMatrixHalf.push(diagonalArray);
//     }
//     console.log("First half of diagonalMaterix: ", diagonalMatrixHalf);
//     return diagonalMatrixHalf;
// }

function createDiagonalMatrix(matrix) {
  let diagonalMatrix = [];
  let diagonalArray = [];
  let element;
  for(i=0; i< matrix.length; i++) {
    diagonalArray = [];
    for (j = 0; j <= i; j++) {
      element = matrix[i - j][0 + j]
      diagonalArray.push(element);
    }
    diagonalMatrix.push(diagonalArray);
  }

  for(k = matrix.length - 1; k >= 0; k--) {
    diagonalArray = [];
    for (l = 0; l <= k; l++) {
      element = matrix[(matrix.length - 1) - l][(matrix.length -1) - k + l];
      console.log("Element: ", element);
      diagonalArray.push(element);
    }
    diagonalMatrix.push(diagonalArray);
  }
  console.log("Diagonal Matrix: ", diagonalMatrix);
  return diagonalMatrix;
}

function greatestProductOfDiagonals(matrix) {
  let productDiagonalArray = createProductArray(createDiagonalMatrix(matrix));
  let maxProductDiagonalArray = getMaximumNumber(productDiagonalArray);
  console.log("The overall maximum of diagonals is: ", maxProductDiagonalArray);
  return maxProductDiagonalArray;
}

greatestProductOfDiagonals(testMatrix);


// function greatestProductFourAdjacent(array) {
//   let greatestProduct = 0;
//   let tempProduct;
//   for (let i = 0; i < array.length; i++) {
//     tempProduct = array[i] * (array[i + 1] || 1) * (array[i + 2] || 1) * (array[i + 3] || 1);
//     if (tempProduct > greatestProduct) {
//       greatestProduct = tempProduct;
//     }
//   }
//   console.log("Greatest product four adjacent: ", greatestProduct);
//   return greatestProduct;
// }

// function greatestProduct(matrix) {
//   let productRowArray = createProductArray(matrix);
//   let productColumnArray = createProductArray(createColumnsMatrix(matrix));
//   let maxProductRow = getMaximumNumber(productRowArray);
//   let maxProductColumn = getMaximumNumber(productColumnArray);
//   let greatestOverall = Math.max(maxProductColumn, maxProductRow);
//   console.log("Greatest product: ", greatestOverall);
//   return greatestOverall;
// }

// greatestProduct(testMatrix);

// function createProductArray(matrix) {
//   let arrayProductRow = [];
//   let productRow;
//   for (let i = 0; i < matrix.length; i++) {
//     productRow = matrix[i].reduce((acc, curr) => {
//       return acc * curr;
//     }, 1);
//     arrayProductRow.push(productRow)
//   }
//   console.log("Array product row: ", arrayProductRow);
//   return arrayProductRow;
// }

// function createColumnsMatrix(matrix) {
//   let columnMatrix = [];
//   for (let i = 0; i < matrix[0].length; i++) {
//     let singleColumn = [];
//     for (let j = 0; j < matrix.length; j ++) {
//       singleColumn[j] = matrix[j][i];
//     }
//     columnMatrix.push(singleColumn);
//   }
//   console.log("Column matrix: ", columnMatrix);
//   return columnMatrix;
// }

// createColumnsMatrix(testMatrix);  


// function getMaximumNumber(array) {
//   let max = array.reduce((acc, curr) => Math.max(acc, curr));
//   console.log("Biggest number in array: ", max);
//   return max;
// }



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

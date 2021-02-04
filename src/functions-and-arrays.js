// Iteration #1: Find the maximum
function maxOfTwoNumbers(n1, n2) {
  if (n1 === n2) {
    return n1;
  } else if (n1 > n2) {
    return n1;
  } else {
    return n2;
  };
};

console.log(`The greatest number of 2 and 2 is: ${maxOfTwoNumbers(2,2)}`);
console.log(`The greatest number of 3 and 2 is: ${maxOfTwoNumbers(3,2)}`);
console.log(`The greatest number of 2 and 4 is: ${maxOfTwoNumbers(2,4)}`);

// Iteration #2: Find longest word

function findLongestWord(array) {
  //edge case
  if (array.length === 0) {
    return null;
  };
  // define longest word var
  let longestWord = array[0];
  //iterate over array
  for (let i = 1; i < array.length; i++) {
  // if length of current word exceeds length of longest word var
    if (array[i].length > longestWord.length) {
    // reassign longest word var
      longestWord = array[i];
    };
  };
  return longestWord;
};
const words1 = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot',];
const words2 = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot', 'toi', 'anticonstitutionnellement'];

console.log(`The longest word in words1 is: ${findLongestWord(words1)}`);
console.log(`The longest word in words2 is: ${findLongestWord(words2)}`);

// Iteration #3: Calculate the sum
function sumNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
      continue;
    };
    sum += array[i];
  };
  return sum;
};
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const mixedArr1 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

console.log(`The sum of numbers is: ${sumNumbers(numbers)}`);
console.log(`The sum of mixedArr1 is: ${sumNumbers(mixedArr1)}`);

// Iteration #4: Calculate the average
// Level 1: Array of numbers
function averageNumbers(arr) {
  return sumNumbers(arr)/arr.length;
};
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
console.log(`The average of the numbers in numbersAvg is: ${averageNumbers(numbersAvg)}`);

// Level 2: Array of strings
function averageWordLength(arr) {
  let totalLength = 0;
  for (let i = 0; i < arr.length; i++) {
    totalLength += arr[i].length;
  };
  return totalLength/arr.length
};
const wordsArr1 = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
const wordsArr2 = ['seat', 'seat', 'seat', 'seat', 'seat', 'seat', 'seat', 'seat', 'seat', 'seat'];

console.log(`The average length of the words in wordsArr1 is: ${averageWordLength(wordsArr1)}`);
console.log(`The average length of the words in wordsArr2 is: ${averageWordLength(wordsArr2)}`);

// Bonus - Iteration #4.1: A generic avg() function

function avg(arr) {

};

const mixedArr2 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
console.log(`The average of mixedArr2 is ${avg(mixedArr2)}`);

// Iteration #5: Unique arrays
function uniquifyArray(arr) {
  let uniquifiedArr = [];
  for (let i = 0; i < arr.length; i++) {
    let currentWord = arr[i];
    if (uniquifiedArr.indexOf(currentWord) === -1) {
      uniquifiedArr.push(currentWord);
    };
  };
  return uniquifiedArr;
};
const wordsUnique1 = [
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

const wordsUnique2 = [
  'crab',
  'crab',
  'crab',
  'crab',
  'bring'
];

console.log(`The uniquified version of wordsUnique1 is: ${uniquifyArray(wordsUnique1)}`);
console.log(`The uniquified version of wordsUnique2 is: ${uniquifyArray(wordsUnique2)}`);

// Iteration #6: Find elements
function doesWordExist(arr, word) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      return true;
    };
  };
  return false;
};
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

console.log(`The word 'subset' appears in wordsFind: ${doesWordExist(wordsFind, 'subset')}`);
console.log(`The word 'coucou' appears in wordsFind: ${doesWordExist(wordsFind, 'coucou')}`);


// Iteration #7: Count repetition
function howManyTimes(arr, word) {
  let numberOfTimes = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      numberOfTimes += 1;
    };
  };
  return numberOfTimes;
};

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

console.log(`The word 'machine' appears ${howManyTimes(wordsCount, 'machine')} time(s) in wordsCount`);
console.log(`The word 'matter' appears ${howManyTimes(wordsCount, 'matter')} time(s) in wordsCount`);

// Iteration #8: Bonus
function greatestVerticalProduct(matrix) {
  // create greatestVP variable
  let greatestVerticalProduct = 0;
  // iterate over matrix
  for (let i = 0; i < matrix.length - 3; i++) {
    // iterate over array
    let currentArray = matrix[i];
    let belowArray1 = matrix[i+1];
    let belowArray2 = matrix[i+2];
    let belowArray3 = matrix[i+3];
    for (let k = 0; k < currentArray.length; k++) {
     // create a current number var
     let currentNumber = currentArray[k];
     // calculate product of vertical numbers (PV)
     let verticalProduct = currentNumber * belowArray1[k] * belowArray2[k] * belowArray3[k];
     // take the greatest of PH and PV
     // if PH or PV > greatestProduct, reassign
     if (verticalProduct > greatestVerticalProduct) {
       greatestVerticalProduct = verticalProduct;
      };
    };
  };
  return greatestVerticalProduct;
};

function greatestHorizontalProduct(matrix) {
  // edge case
  if (matrix === []) {
    return null;
  };
  // create greatestHP variable
  let greatestHorizontalProduct = 0;
  // iterate over matrix
  for (let i = 0; i < matrix.length; i++) {
    // iterate over array
    let currentArray = matrix[i];
    for (let k = 0; k < currentArray.length - 3; k++) {
     // create a current number var
     let currentNumber = currentArray[k];
     let adjacentNumber1 = currentArray[k+1];
     let adjacentNumber2 = currentArray[k+2];
     let adjacentNumber3 = currentArray[k+3];
     // calculate product of horizontal numbers (PH)
     let horizontalProduct = currentNumber * adjacentNumber1 * adjacentNumber2 * adjacentNumber3;
     if (horizontalProduct > greatestHorizontalProduct) {
       greatestHorizontalProduct = horizontalProduct;
     };
    };
  };
  // return greatestHP
  return greatestHorizontalProduct;
};

function greatestProduct(matrix) {
  // create greatestProductVariable
  let greatestProduct = 0;
  // create HP variable
  let greatestHP = greatestHorizontalProduct(matrix);
  // create VP variable
  let greatestVP = greatestVerticalProduct(matrix);
  if (greatestHP > greatestProduct) {
    greatestProduct = greatestHP;
  }
  if (greatestVP > greatestProduct) {
    greatestProduct = greatestVP;
  }
  return greatestProduct;
}
  

const matrix1 = [ 
  [ 1,  2, 3, 4, 5], 
  [ 1, 20, 3, 4, 5], 
  [ 1, 20, 3, 4, 5], 
  [ 1, 20, 3, 4, 5], 
  [ 1,  4, 3, 4, 5]
]; 

const matrix2 = [ 
  [ 2, 2, 2, 2, 2], 
  [ 2, 2, 2, 2, 2], 
  [ 2, 2, 2, 2, 2], 
  [ 2, 2, 2, 2, 2], 
  [ 2, 2, 2, 2, 2]
];

const matrix3 = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
  [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
  [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
  [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]
];

console.log(`The greatest product of 4 horizontally adjacent numbers in matrix1 is: ${greatestHorizontalProduct(matrix1)}`);
console.log(`The greatest product of 4 horizontally adjacent numbers in matrix2 is: ${greatestHorizontalProduct(matrix2)}`);
console.log(`The greatest product of 4 horizontally adjacent numbers in matrix3 is: ${greatestHorizontalProduct(matrix3)}`);

console.log(`The greatest product of 4 vertically adjacent numbers in matrix1 is: ${greatestVerticalProduct(matrix1)}`);
console.log(`The greatest product of 4 vertically adjacent numbers in matrix2 is: ${greatestVerticalProduct(matrix2)}`);
console.log(`The greatest product of 4 vertically adjacent numbers in matrix3 is: ${greatestVerticalProduct(matrix3)}`);

console.log(`The greatest product of 4 adjacent numbers in matrix1 is: ${greatestProduct(matrix1)}`);
console.log(`The greatest product of 4 adjacent numbers in matrix2 is: ${greatestProduct(matrix2)}`);
console.log(`The greatest product of 4 adjacent numbers in matrix2 is: ${greatestProduct(matrix3)}`);

//Iteration 8.1:Product of diagonals

function greatestProductOfDiagonals(matrix) {
  if (matrix === []) {
    return null;
  };
  let greatestProductOfDiagonals = 0;
  let greatestProductOfLeftDiagonal = greatestProductLeftDiagonal(matrix);
  let greatestProductOfRightDiagonal = greatestProductRightDiagonal(matrix);
  if (greatestProductOfLeftDiagonal > greatestProductOfDiagonals) {
    greatestProductOfDiagonals = greatestProductOfLeftDiagonal
  };
  if (greatestProductOfRightDiagonal > greatestProductOfDiagonals) {
    greatestProductOfDiagonals = greatestProductOfRightDiagonal
  };
  return greatestProductOfDiagonals;
};

function greatestProductLeftDiagonal(matrix) {
  // create greatestPLD variable
  let greatestPLD = 0;
  // iterate over matrix
  for (let i = 0; i < matrix.length - 3; i++) {
    // create varaible for below current and arrays
    let currentArray = matrix[i];
    let belowArray1 = matrix[i+1];
    let belowArray2 = matrix[i+2];
    let belowArray3 = matrix[i+3];
    
    // iterate over current Array
    for (let k = 3; k < currentArray.length; k++) {
      // calculate PLD
      let productOfLeftDiagonal = currentArray[k] * belowArray1[k-1] * belowArray2[k-2] * belowArray3[k-3];
      //if PLD > greatestPLD, reassign
      if (productOfLeftDiagonal > greatestPLD) {
        greatestPLD = productOfLeftDiagonal;
      }
    }
  }
  // return greatestPLD
  return greatestPLD;
};

function greatestProductRightDiagonal(matrix) {
  // create greatestPRD variable
  let greatestPRD = 0;
  // iterate over matrix
  for (let i = 0; i < matrix.length - 3; i++) {
    // create varaible for below current and arrays
    let currentArray = matrix[i];
    let belowArray1 = matrix[i+1];
    let belowArray2 = matrix[i+2];
    let belowArray3 = matrix[i+3];
    
    // iterate over current Array
    for (let k = 0; k < currentArray.length - 3; k++) {
      // calculate PRD
      let productOfRightDiagonal = currentArray[k] * belowArray1[k+1] * belowArray2[k+2] * belowArray3[k+3];
      //if PRD > greatestPRD, reassign
      if (productOfRightDiagonal > greatestPRD) {
        greatestPRD = productOfRightDiagonal;
      }
    }
  }
  // return greatestPRD
  return greatestPRD;
};

console.log(`The greatest product of left diagonal of matrix1 is: ${greatestProductLeftDiagonal(matrix1)}`);
console.log(`The greatest product of right diagonal of matrix1 is: ${greatestProductRightDiagonal(matrix1)}`);
console.log(`The greatest diagonal product of matrix2 is: ${greatestProductOfDiagonals(matrix1)}`);

console.log(`The greatest product of left diagonal of matrix2 is: ${greatestProductLeftDiagonal(matrix2)}`);
console.log(`The greatest product of right diagonal of matrix2 is: ${greatestProductRightDiagonal(matrix2)}`);
console.log(`The greatest diagonal product of matrix2 is: ${greatestProductOfDiagonals(matrix2)}`);

console.log(`The greatest product of left diagonal of matrix3 is: ${greatestProductLeftDiagonal(matrix3)}`);
console.log(`The greatest product of right diagonal of matrix3 is: ${greatestProductRightDiagonal(matrix3)}`);
console.log(`The greatest diagonal product of matrix3 is: ${greatestProductOfDiagonals(matrix3)}`);
// Iteration #1: Find the maximum
function maxOfTwoNumbers (num1, num2) {
  return Math.max(num1, num2);
}


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord (wordArr) {
  if (wordArr.length === 0) {
    return null;
  }
  let longestWord = '';
  wordArr.forEach(function(word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  })
  return longestWord
}

findLongestWord (words);


// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers (numArr) {
  let sumArrNum = 0;
  numArr.forEach(function(number){
    sumArrNum += number;
  })
  return sumArrNum;
}

sumNumbers (numbers);


// Bonus (3.1) - A generic sum() function
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum (anyArr) { 
  let sumAnyArrNum = 0;
  anyArr.forEach(function(element) {
    if (typeof element === 'object') {
      throw Error ("Unsupported data type sir or ma'am");
    } else if (typeof element  === 'string') {
      sumAnyArrNum += element.length;
    } else {
      sumAnyArrNum += +element;
    }
  })
  return sumAnyArrNum;
}

sum (mixedArr);


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers (numArr) {
  if (numArr.length === 0) {
    return null;
  }
  let sumArrNum = sumNumbers(numArr);
  return sumArrNum/numArr.length;
}

averageNumbers (numbersAvg);

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength (wordArr) {
  wordArrLength = [];
  wordArr.forEach (function(word) {
    wordArrLength.push(word.length);
  })
  let wordArrAvgLength = averageNumbers(wordArrLength);
  return wordArrAvgLength;
}

averageWordLength (wordsArr);

// Bonus (4.1) - A generic avg() function
function avg(arr) {
  if (arr.length === 0) {
    return null;
  }
  let avgMixArr = +(sum(arr)/arr.length).toFixed(2) // El método .toFixed exige ser aplicado sobre un número (por eso el +)
  return avgMixArr;
}

avg (mixedArr);


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

function uniquifyArray (arr) {
  if (arr.length === 0) {
    return null;
  }
  let uniqueArr = [];
  arr.forEach(function(element) {
    if (uniqueArr.indexOf(element) === -1) {
      uniqueArr.push(element)
    }
  })
  return uniqueArr; 
}

uniquifyArray (wordsUnique);


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist (wordArr, str) {
  if (wordArr.length === 0){
    return null
  }
  return wordArr.includes(str);
}

doesWordExist (wordsFind, 'machine');


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

function howManyTimes (wordArr, str) {
  let numberOfTimes = [];
  wordArr.forEach(function(element){
    if (element === str) {
      numberOfTimes.push(str);
    }
  })
  return numberOfTimes.length;
}

howManyTimes (wordsCount, 'matter');


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
  let matrixMaxProduct = maxProduct(matrix);
  let turnedToHorizontalMaxProduct = maxProduct(turnVerticalToHorizontal(matrix));
  if (turnedToHorizontalMaxProduct>matrixMaxProduct) {
    return turnedToHorizontalMaxProduct;
  }
  return matrixMaxProduct;
}

greatestProduct(matrix);

// Calcula el máximo producto de una matriz dada
function maxProduct(matrix) {
  let productsOf4Arr = []; // Este array acumulará el resultado de todos los productos de 4 números de las iteraciones.
  matrix.forEach(function(subArr, idx) { // Itera sobre los elementos de la matriz general (matrix)
    for (i=0; i<matrix[idx].length; i++) { // Itera sobre los elementos de cada subarray (matrix[i])
      if (matrix[idx].slice(i,i+4).length<4) { // Elimina todos los grupos de menos de 4 números dentro del subarray.
        break;
      }
      let sliceOf4 = matrix[idx].slice(i,i+4); // El método arr.slice() crea arrays de grupos de 4 números anexos, que se añaden a la variable sliceOf4.
      let productOf4 = 1; // Producto de los 4 números.
      sliceOf4.forEach(function(number, idx) { // Itera sobre el array de 4 números.
      productOf4 *= sliceOf4[idx];  // Añade cada número del sliceOf4 al producto   
      })
      productsOf4Arr.push(productOf4); // Añade al array productsOf4Arr el resultado de los productos de 4 números.
    }
  })
  let maxProduct = Math.max(...productsOf4Arr); // Se almacena en una variable el máximo del total de productos de 4 números.
  return maxProduct;
}

// Transforma las columnas de una matriz en filas creando una nueva matriz horizontal
function turnVerticalToHorizontal (matrix) {
  let matrixTurnedToHorizontal = []; // Se crea un array vacío para almacenar los subArrays. Será un 2D array.
  matrix.forEach (function(subArr, idx) { // Itera sobre los elementos de la matriz general (matrix)
    let subArrTurnedToHorizontal = [] // Se crea un array vacío para almacenar los subArrays.
    for (i=0; i<matrix[idx].length;i++) {
    subArrTurnedToHorizontal.push(matrix[i][idx]); // Esta posición [i][idx] permite iterar sobre un único elemento del subArr que se añade a subArrTurnedToHorizontal creando el nuevo subArray con los valores de vertical a horizontal.
    }
    matrixTurnedToHorizontal.push(subArrTurnedToHorizontal); // Cada vez que se completa una columna se añade el subArrTurnedToHorizontal al 2D array. 
  })
  return matrixTurnedToHorizontal; // matrixTurnedToHorizontal es ahora un 2D array compuesto por los subarrays subArrTurnedToHorizontal.
}

// 8.1 Product of Diagonals

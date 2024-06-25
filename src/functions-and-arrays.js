// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2);
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }
  const lengths = words.map((word) => word.length);
  const maxLength = Math.max(...lengths);
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === maxLength) {
      return words[i];
    }
  }
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let currentSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    currentSum += numbers[i];
  }
  return currentSum;
}

// Iteration #3.1 Bonus:
function getNumericValue(element) {
  const type = typeof element;
  if (type === 'number') {
    return element;
  } else if (type === 'string') {
    return element.length;
  } else if (element === true) {
    return 1;
  } else if (element === false) {
    return 0;
  } else {
    throw new Error("Unsupported data type sir or ma'am");
  }
}

function sum(mixedArray) {
  const numbers = mixedArray.map(getNumericValue);
  return sumNumbers(numbers);
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  const n = numbers.length;
  if (n === 0) {
    return null;
  }

  const sum = sumNumbers(numbers);
  return sum / n;
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) {
  const lengths = words.map((word) => word.length);
  const n = lengths.length;
  if (n === 0) {
    return null;
  }

  const sum = sumNumbers(lengths);
  return sum / n;
}

// Bonus - Iteration #4.1
function avg(mixedArray) {
  const numbers = mixedArray.map(getNumericValue);
  return averageNumbers(numbers);
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

function uniquifyArray(words) {
  if (words.length === 0) {
    return null;
  }
  const uniqueArray = [];
  words.forEach((word) => {
    const isRepeated = uniqueArray.some((previousWord) => previousWord === word);
    if (!isRepeated) {
      uniqueArray.push(word);
    }
  });
  return uniqueArray;
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

// Declare una función llamada doesWordExist que recibirá un array de palabras como un argumento, y una palabra a buscar como el otro. Devuelve true si existe, en caso contrario, devuelve false. No utilice indexOf para esta función.
function doesWordExist(words, wordToFind) {
  if (words.length === 0) {
    return null;
  }
  return words.some((word) => word === wordToFind);
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

function howManyTimes(words, wordToFind) {
  return words.filter((word) => word === wordToFind).length;
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

const ADJACENT_NUMBERS = 4;

function multiplyNums(nums) {
  let currentProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    currentProduct = currentProduct * nums[i];
  }
  return currentProduct;
}

function getProductsOfLines(matrix, lineType) {
  // Get a list of lines, each one represented by a list of coordinates:
  const sideLength = matrix.length;

  const getLineIndex = {
    horizontal: (row, col) => row,
    vertical: (row, col) => col,
    diagonal_ltr: (row, col) => row + col,
    diagonal_rtl: (row, col) => sideLength + col - row - 1
  };

  const lines = [];
  for (let row = 0; row < sideLength; row++) {
    for (let col = 0; col < sideLength; col++) {
      const lineIndex = getLineIndex[lineType](row, col);
      lines[lineIndex] ??= [];
      lines[lineIndex].push([row, col]);
    }
  }

  // Get products of the lines:
  const products = [];
  const lineToProduct = (lineCoordinates) => {
    const valuesInLine = lineCoordinates.map(([row, col]) => matrix[row][col]);
    const product = multiplyNums(valuesInLine);
    products.push(product);
  };

  lines.forEach((lineCoordinates) => {
    const lineLength = lineCoordinates.length;

    // If the line is short enough, we can just process it all (as in some diagonals):
    if (lineLength <= ADJACENT_NUMBERS) {
      lineToProduct(lineCoordinates);
      return;
    }

    // If the line is longer than ADJACENT_NUMBERS, we need to calculate every chunk separately:
    const lastSliceIndex = lineLength - ADJACENT_NUMBERS;
    for (let sliceIndex = 0; sliceIndex <= lastSliceIndex; sliceIndex++) {
      const sliceEndIndex = sliceIndex + ADJACENT_NUMBERS;
      const sliceCoordinates = lineCoordinates.slice(sliceIndex, sliceEndIndex);
      lineToProduct(sliceCoordinates);
    }
  });

  return products;
}

function greatestProduct(matrix) {
  const verticalProducts = getProductsOfLines(matrix, 'vertical');
  const horizontProducts = getProductsOfLines(matrix, 'horizontal');

  return Math.max(...verticalProducts, ...horizontProducts);
}

function greatestProductOfDiagonals(matrix) {
  const diagonal1Products = getProductsOfLines(matrix, 'diagonal_ltr');
  const diagonal2Products = getProductsOfLines(matrix, 'diagonal_rtl');

  return Math.max(...diagonal1Products, ...diagonal2Products);
}

// Diagonal coordinates ltr:
// [                                 [0, 0] ],
// [                         [1, 0], [0, 1] ],
// [                 [2, 0], [1, 1], [0, 2] ],
// [         [3, 0], [2, 1], [1, 2], [0, 3] ],
// [ [4, 0], [3, 1], [2, 2], [1, 3], [0, 4] ],
// [ [4, 1], [3, 2], [2, 3], [1, 4]         ],
// [ [4, 2], [3, 3], [2, 4]                 ],
// [ [4, 3], [3, 4]                         ],
// [ [4, 4]                                 ],

// Diagonal coordinates rtl:
// [                                 [0, 4] ],
// [                         [0, 3], [1, 4] ],
// [                 [0, 2], [1, 3], [2, 4] ],
// [         [0, 1], [1, 2], [2, 3], [3, 4] ],
// [ [0, 0], [1, 1], [2, 2], [3, 3], [4, 4] ],
// [ [1, 0], [2, 1], [3, 2], [4, 3]         ],
// [ [2, 0], [3, 1], [4, 2]                 ],
// [ [3, 0], [4, 1]                         ],
// [ [4, 0]                                 ],

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
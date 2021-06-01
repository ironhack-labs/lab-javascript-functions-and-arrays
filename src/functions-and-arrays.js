// Iteration #1: Find the maximum

function maxOfTwoNumbers(a, b) {
  console.log(arguments.length);
  if (arguments.length === 0) {
    return 0;
  }

  if (arguments.length === 1) {
    return arguments[0];
  }

  if (a >= b) {
    return a;
  }
  else {
    return b;
  }  
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arr) {
  let longestSize = 0;
  let longestWordPosition = 0;

  if (arr.length === 0) {
    return null;
  }
  if (arr.length === 1) {
    return arr[0];
  }

  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longestSize) {
        longestWordPosition = i;
        longestSize = arr[i].length;
      }
    }
  }
  return arr[longestWordPosition];
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;

  if (numbers.length === 0) {
    return 0;
  }

  if (numbers.length === 1) {
    return numbers[0];
  }

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}



// Iteration #3.1 Bonus:
function sum(arr) {
  let total = 0;

  if (arr.length === 0) {
    return 0;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      total += arr[i];
    }
    else if (typeof arr[i] === 'string') {
      total += arr[i].length;
    }
    else if (typeof arr[i] === 'boolean') {
      total += arr[i];
    }
    else if (typeof arr[i] === 'object') {
      throw new Error("Unsupported data type sir or ma'am"); 
    }
  }
  return total;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  let sum = 0;

  if (numbers.length === 0) {
    return null;
  }

  if (numbers.length === 1) {
    return numbers[0];
  }

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
  return sum/numbers.length;
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(strings) { 
  let sum = 0;

  if (strings.length === 0) {
    return null;
  }

  if (strings.length === 1) {
    return strings[0].length;
  }

  for (let i = 0; i < strings.length; i++) {
    sum += strings[i].length;
  }
  
  return sum/strings.length;
}

// Bonus - Iteration #4.1
function avg(arr) {
  if (arr.length === 0) {
    return null;
  }

  let sumArray = sum(arr); 
  return parseFloat((sumArray/arr.length).toFixed(2));
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
  let newWordsArray = [];
  
  if (words.length === 0) {
    return null;
  }

  for (let i = 0; i < words.length; i++) {
    if (newWordsArray.indexOf(words[i]) === -1) {
      newWordsArray.push(words[i]);
    }
  }
  return newWordsArray;
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(words, word) {
  if (words.length === 0) {
    return null;
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      return true;
    }
  }
  return false;
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

function howManyTimes(words, word) {
  let counter = 0;

  if (words.length === 0) {
    return 0;
  }
  
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      counter++;
    }
  }
  return counter;  
}

// Bonus - Iteration #8: Product of adjacent numbers

function greatestProduct(matrix) {
  let productRow;
  let productColumn;
  let maxProduct = 0;

  // Calculates greatest product of any rows
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length - 3; j++) {
      productRow = matrix[i][j] * matrix[i][j+1] * matrix[i][j+2] * matrix[i][j+3];
      if (productRow > maxProduct) {
        maxProduct = productRow;
      }
    }
  }
    
  // Calculates greatest product of any columns
  for (let i = 0; i < matrix.length - 3; i++) {
    for (let j = 0; j < matrix.length; j++) {
      productColumn = matrix[i][j] * matrix[i+1][j] * matrix[i+2][j] * matrix[i+3][j];
      if (productColumn > maxProduct) {
        maxProduct = productColumn;
      }
    }
  }
    
  return maxProduct;
}

// Bonus - Iteration #8.1: Product of diagonals

function greatestProductDiagonal(matrix) {
  let product;
  let maxProduct = 0;

  // Calculates greatest product going to the down/right
  for (let i = 0; i < matrix.length - 3; i++) {
    for (let j = 0; j < matrix.length - 3; j++) {
      if (i + 3 < matrix.length && j + 3 < matrix.length) {
        product = matrix[i][j] * matrix[i+1][j+1] * matrix[i+2][j+2] * matrix[i+3][j+3];
        if (product > maxProduct) {
          maxProduct = product;
        }
      }
    }
  }
    
  // Calculates greatest product going to the down/left
  for (let i = 0; i < matrix.length - 3; i++) {
    for (let j = 3; j < matrix.length; j++) {
      product = matrix[i][j] * matrix[i+1][j-1] * matrix[i+2][j-2] * matrix[i+3][j-3];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }
    
  return maxProduct;
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

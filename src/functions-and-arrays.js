// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else if (number1 < number2) {
    return number2;
  }
  return number1, number2;
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arr) {
  if (arr.length == 0) {
    return null;
  }
  if (arr.length == 1) {
    return arr[0];
  }

  let longest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}


// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersTotal) {
  let counter = 0;
  for (const number of numbersTotal) {
    counter += number;
  }
  console.log(counter);
  return counter;
}



// Iteration #3.1 Bonus:
function sum(array) {
  const checkObjectWithin = array.filter(word => typeof word === "object");
  if (checkObjectWithin.length != 0) {
    throw new Error("Unsupported data type sir or ma'am");
  }

  if (array.length == 0) {
    return 0;
  }

  let sumOfNumbers = 0;
  let sumOfWordLength = 0;
  let sumOfBooleans = 0;

  for (element of array) {
    if (typeof element === "number") {
      sumOfNumbers += element;
    } else if (typeof element === "string") {
      sumOfWordLength += element.length;
    } else if (typeof element === "boolean" && element == true) {
      sumOfBooleans += 1;
    }
  }
  let total = sumOfNumbers + sumOfWordLength + sumOfBooleans;
  return total;
}


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  if (arr.length == 0) {
    return null;
  } else if (arr.length == 1) {
    return arr[0];
  }

  let total = 0;
  for (const num of arr) {
    total += num;
  }
  return total / arr.length;
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arr) {
  if (arr.length == 0) {
    return null;
  } else if (arr.length == 1) {
    return arr[0].length;
  }

  let total = 0;
  for (const str of arr) {
    total += str.length;
  }
  return total / arr.length;
}

// Bonus - Iteration #4.1
function avg(arr) {
  let sumOfNumbers = 0;
  let sumOfWordLength = 0;
  let sumOfBooleans = 0;

  if (arr.length == 0) {
    return null;
  } else if (arr.length == 1) {
    return arr[0].length;
  }

  for (element of arr) {
    if (typeof element === "number") {
      sumOfNumbers += element;
    } else if (typeof element === "string") {
      sumOfWordLength += element.length;
    } else if (typeof element === "boolean" && element == true) {
      sumOfBooleans += 1;
    }
  }
  let total = sumOfNumbers + sumOfWordLength + sumOfBooleans;
  return total / arr.length;
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

function uniquifyArray(arr) {
  if (arr.length == 0) {
    return null;
  }

  let newArr = [];
  arr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, word) {
  if (arr.length == 0) {
    return null;
  }
  if (arr.includes(word)) {
    return true;
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

function howManyTimes(arr, word) {
  if (arr.length == 0) {
    return 0;
  }
  let counter = 0;
  arr.forEach((element) => {
    if (element === word) {
      counter++;
    }
  });
  return counter;
}



// Iteration #8: Bonus
let matrix = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

function greatestProduct(matrix) {
  let max = 0;
  let i = 0;
  let highestOfEach = [];
  // for(let i = 0; i < matrix.length; i++) 
  while (i < matrix.length) {
    for (let j = 0; j < matrix[i].length; j++) {
      // let highest = matrix[i][j];
      if (matrix[i][j] > max) {
        max = matrix[i][j];
        
      }
      
    }
    highestOfEach.push(max);
    max=0;
    i++;
  }
  let multiplied = 1;
  for (let i = 0; i < highestOfEach.length; i++) {
    multiplied *= highestOfEach[i];
  }

  return multiplied;
}

console.log(greatestProduct(matrix));



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

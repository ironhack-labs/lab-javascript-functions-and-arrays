// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 >= num2) {
    return num1;
  }
  else {
    return num2;
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  let maxLength = 0;
  let longestWord = '';

  if (words.length === 0) {
    return null;
  }
  else {
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        longestWord = words[i];
        maxLength = words[i].length;
      }
    }
  
    return longestWord;
  }
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  if (numbersAvg.length === 0) {
    return null;
  }
  else {
    return sumArray(numbersAvg) / numbersAvg.length;
  }
}

// Level 2: Array of strings
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

function averageWordLength(wordsArr) {
  let total = 0;

  if (wordsArr.length === 0) {
    return null;
  }
  else {
    for (let i = 0; i < wordsArr.length; i++) {
      total += wordsArr[i].length;
    }

    return total / wordsArr.length;
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

function uniquifyArray(wordsUnique) {
  let repeated = 0;

  if (wordsUnique.length === 0) {
    return wordsUnique;
  } else {
    for (let i = 0; i < wordsUnique.length; i++) {
      repeated = wordsUnique.indexOf(wordsUnique[i], i + 1);

      while (repeated > 0) {
        wordsUnique.splice(repeated, 1);
        repeated = wordsUnique.indexOf(wordsUnique[i], repeated);
      }
    }

    return wordsUnique;
  }
}

// Iteration #6: Find elements
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

function doesWordExist(wordsFind, word) {
  let found = false;
  let i = 0;

  if (wordsFind.length === 0) {
    return false;
  }
  else {
    while(!found && i < wordsFind.length) {
      if (wordsFind[i] === word) {
        found = true;
      }
      i++;
    }

    return found;
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

function howManyTimes(wordsCount, word) {
  let repetition = -1;
  let total = 0;

  if (wordsCount.length === 0) {
    return 0;
  }
  else {
    do {
      repetition = wordsCount.indexOf(word, repetition + 1);
      
      if (repetition !== -1) {
        total += 1;
      }
    }
    while (repetition !== -1);

    return total;
  }
}
// Iteration #1: Find the maximum

function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return a;
  }
}

// Iteration #2: Find longest word
const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function findLongestWord(array) {
  let longestWord = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestWord.length) {
      console.log('longest word', array[i]);
      longestWord = array[i];
    }
  }
  return longestWord;
}

findLongestWord(words);

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

sumNumbers(numbers);

//Bonus - Iteration #3.1: A generic sum() function

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      sum = sum + array[i];
      return sum;
      console.log(sum);
    } else if (typeof array[i] === 'string') {
      let totalCounting = sum + array[i].length;
      return totalCounting;
    }
  }
}

sum(mixedArr);

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(numbers.length);
  return sum / numbers.length;
}

averageNumbers(numbersAvg);

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

function averageWordLength(array) {
  let sumlength = 0;
  for (let i = 0; i < array.length; i++) {
    sumlength = sumlength + array[i].length;
  }
  return sumlength / array.length;
}
averageWordLength(wordsArr);

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
  let repeatedWords = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i]) {
      uniqueWords = array[i].push(array);
      console.log(repeatedWords);
    }
  }
  return repeatedWords;
}

uniquifyArray(wordsUnique);

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

function doesWordExist(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      console.log(`The word exists in the array ${word}`);
      return true;
    }
  }
  return false;
}

doesWordExist(wordsFind, 'sky');

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
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      count++;
    }
  }
  console.log(`The word exists in the array ${word} ${count} times`);
  return count;
}
howManyTimes(wordsCount, 'matter');

// Iteration #8: Bonus

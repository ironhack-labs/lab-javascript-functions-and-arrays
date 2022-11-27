// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return num1;
  }
}

// Iteration #2: Find longest word

function findLongestWord(words) {
  let word = "";

  if (words.length === 0) {
    return null;
  }
  for (let i = 0; i < words.length; i++) {
    if (word.length < words[i].length) {
      word = words[i];
    }
  }
  return word;
}

// Iteration #3: Calculate the sum


function sumNumbers(numbers) {
  let sum = 0;

  if (numbers.length === 0) {
    return 0;
  } 
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Iteration #3.1 Bonus:

function sum(numbers) {
  let sum = 0;

  if (numbers.length === 0) {
    return 0;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      sum += numbers[i];
    } else if (typeof numbers[i] === "string") {
      sum += numbers[i].length;
    } else if (typeof numbers[i] === "boolean") {
      sum += numbers[i];
    } else {
      throw new Error("Unsupported data type ma'am or sir");
    }
    return sum;
  }
}

// Iteration #4: Calculate the average

// Level 1: Array of numbers


function averageNumbers(numbersAvg) {
  if (numbersAvg.length == 0) {
    return null;
  } else {
    let average = numbersAvg.reduce((a, b) => a + b, 0) / numbersAvg.length;
    return average;
  }
}

// Level 2: Array of strings

function averageWordLength(wordsArr) {
  
  let average = 0;
  
  if (wordsArr.length === 0) {
    return null;
  } else if (wordsArr.length === 1) {
    return wordsArr.length;
  }

  for (let i = 0; i < wordsArr.length; i++) {
    ;
  }
  
}

// Bonus - Iteration #4.1
function avg() {}

// Iteration #5: Unique arrays

function uniquifyArray(wordsUnique) {
  if (wordsUnique.length == 0) {
    return null;
  } else {
    const unique = Array.from(new Set(wordsUnique));
    return unique;
  }
}

// Iteration #6: Find elements

function doesWordExist(wordsFind) {
  if (wordsFind.length == 0) {
    return null;
  } else {
    const indices = [];
    let str = "subset";
    let idx = wordsFind.indexOf(str);
    while (idx !== -1) {
      indices.push(idx);
      idx = wordsFind.indexOf(element, idx + 1);
    }
    console.log(indices);
    // [0, 2, 4]
  }
}
// should return true if the word we are looking for is the only one in the array
number === 1;
// should return false if the word we are looking for is not in the array
number === -1;
// should return true if the word we are looking for is in the array
number >= 1;

// Iteration #7: Count repetition

function howManyTimes() {}

// Iteration #8: Bonus

function greatestProduct() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
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
    greatestProduct,
  };
}

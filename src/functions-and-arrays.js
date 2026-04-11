// Iteration #1: Find the maximum
// Comparing two numbers to see which is greater
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Iteration #2: Find longest word
// Checking each word to find the one with the most characters
function findLongestWord(words) {
  if (words.length === 0) return null;
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

// Iteration #3: Calculate the sum
// Basic sum function for an array of numbers
function sumNumbers(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

// Iteration #3.2 Bonus: Generic sum
// Adding numbers, strings lengths and booleans
function sum(array) {
  if (!array) return null;
  if (array.length === 0) return 0;
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (typeof item === 'object' && item !== null) {
      throw new Error("Unsupported data type inside array");
    }
    if (typeof item === 'number') {
      total += item;
    } else if (typeof item === 'string') {
      total += item.length;
    } else if (typeof item === 'boolean') {
      total += item ? 1 : 0;
    }
  }
  return total;
}

// Iteration #4: Calculate the average
// Dividing the sum by the number of elements
function averageNumbers(numbers) {
  if (numbers.length === 0) return null;
  return sumNumbers(numbers) / numbers.length;
}

// Finding the average length of words in an array
function averageWordLength(words) {
  if (words.length === 0) return null;
  let totalLetters = 0;
  for (let i = 0; i < words.length; i++) {
    totalLetters += words[i].length;
  }
  return totalLetters / words.length;
}

// Bonus - Iteration #4.3: Generic average
// Returns the average of a mixed array, rounded to 2 decimals
function avg(array) {
  if (!array || array.length === 0) return null;
  let totalSum = sum(array);
  return totalSum / array.length;
}

// Iteration #5: Unique arrays
// Removing duplicate words from an array
function uniquifyArray(words) {
  if (words.length === 0) return null;
  let uniqueArr = [];
  for (let i = 0; i < words.length; i++) {
    if (uniqueArr.indexOf(words[i]) === -1) {
      uniqueArr.push(words[i]);
    }
  }
  return uniqueArr;
}

// Iteration #6: Find elements
// Checking if a word exists in the list
function doesWordExist(words, wordToSearch) {
  if (words.length === 0) return null;
  return words.includes(wordToSearch);
}

// Iteration #7: Count repetition
// Counting occurrences of a word in an array
function howManyTimes(words, wordToSearch) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === wordToSearch) {
      count++;
    }
  }
  return count;
}

// Iteration #8: Bonus - Greatest product
// Horizontal and vertical products in the grid
function greatestProduct(matrix) {
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j <= matrix[i].length - 4) {
        let h = matrix[i][j] * matrix[i][j+1] * matrix[i][j+2] * matrix[i][j+3];
        if (h > max) max = h;
      }
      if (i <= matrix.length - 4) {
        let v = matrix[i][j] * matrix[i+1][j] * matrix[i+2][j] * matrix[i+3][j];
        if (v > max) max = v;
      }
    }
  }
  return max;
}

// Environment setup for tests
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
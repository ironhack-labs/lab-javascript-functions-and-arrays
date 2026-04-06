// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  return num1 >= num2 ? num1 : num2;
}

// Iteration #2: Find longest word
function findLongestWord(words) {
  if (!words || words.length === 0) return null;

  let longest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

// Iteration #3: Sum numbers
function sumNumbers(numbers) {
  if (!numbers || numbers.length === 0) return 0;

  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

// Bonus Iteration #3.2
function sum(arr) {
  if (!arr || arr.length === 0) return 0;

  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (typeof value === "number") {
      total += value;
    } else if (typeof value === "string") {
      total += value.length;
    } else if (typeof value === "boolean") {
      total += value ? 1 : 0;
    } else {
      throw new Error("Unsupported data type");
    }
  }

  return total;
}

// Iteration #4.1
function averageNumbers(numbers) {
  if (!numbers || numbers.length === 0) return null;

  return sumNumbers(numbers) / numbers.length;
}

// Iteration #4.2
function averageWordLength(words) {
  if (!words || words.length === 0) return null;

  let total = 0;

  for (let i = 0; i < words.length; i++) {
    total += words[i].length;
  }

  return total / words.length;
}

// Bonus Iteration #4.3
function avg(arr) {
  if (!arr || arr.length === 0) return null;

  return sum(arr) / arr.length;
}

// Iteration #5
function uniquifyArray(words) {
  if (!words || words.length === 0) return null;

  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (!result.includes(words[i])) {
      result.push(words[i]);
    }
  }

  return result;
}

// Iteration #6
function doesWordExist(words, wordToSearch) {
  if (!words || words.length === 0) return null;

  return words.includes(wordToSearch);
}

// Iteration #7
function howManyTimes(words, wordToSearch) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === wordToSearch) {
      count++;
    }
  }

  return count;
}

/* ============================
   BONUS (OPTIONAL)
============================ */

// Iteration #8.1
function greatestProduct(matrix) {
  let max = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {

      // Horizontal
      if (j + 3 < matrix[i].length) {
        let product =
          matrix[i][j] *
          matrix[i][j + 1] *
          matrix[i][j + 2] *
          matrix[i][j + 3];

        if (product > max) max = product;
      }

      // Vertical
      if (i + 3 < matrix.length) {
        let product =
          matrix[i][j] *
          matrix[i + 1][j] *
          matrix[i + 2][j] *
          matrix[i + 3][j];

        if (product > max) max = product;
      }
    }
  }

  return max;
}

// Iteration #8.2
function greatestProductOfDiagonals(matrix) {
  let max = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {

      // Diagonal right
      if (i + 3 < matrix.length && j + 3 < matrix[i].length) {
        let product =
          matrix[i][j] *
          matrix[i + 1][j + 1] *
          matrix[i + 2][j + 2] *
          matrix[i + 3][j + 3];

        if (product > max) max = product;
      }

      // Diagonal left
      if (i + 3 < matrix.length && j - 3 >= 0) {
        let product =
          matrix[i][j] *
          matrix[i + 1][j - 1] *
          matrix[i + 2][j - 2] *
          matrix[i + 3][j - 3];

        if (product > max) max = product;
      }
    }
  }

  return max;
}
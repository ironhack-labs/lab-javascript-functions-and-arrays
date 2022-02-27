// Iteration #1: Find the maximum
const maxOfTwoNumbers = (num1, num2) => {
  const numbers = [num1, num2];

  return Math.max(...numbers);
};

// Iteration #2: Find longest word
const findLongestWord = words => {
  if (words.length === 0) return null;

  const lengthNumbers = words.map(word => word.length);

  const longestLengthNumber = Math.max(...lengthNumbers);

  const longestWord = words.find(word => word.length === longestLengthNumber);

  return longestWord;
};

// Iteration #3: Calculate the sum
const sumNumbers = numbers => {
  let counter = 0;

  for (let i = 0; i < numbers.length; i += 1) counter += numbers[i];

  return counter;
};

// Iteration #3.1 Bonus:
const sum = mixedArr => {
  const objectOrArray = mixedArr.find(element => typeof element === "object")

  if (objectOrArray !== undefined) throw new Error("Unsupported data type sir or ma'am");

  const numbers = mixedArr.map(element => {
    switch (typeof element) {
      case "boolean":
        return element + 0;
      case "string":
        return element.length;
      default:
        return element;
    };
  });

  return sumNumbers(numbers);
};

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const averageNumbers = numbers => {
  if (numbers.length === 0) return null;

  return sumNumbers(numbers) / numbers.length
};

// Level 2: Array of strings
const averageWordLength = words => {
  if (words.length === 0) return null;

  const lengthNumbers = words.map(word => word.length);

  return averageNumbers(lengthNumbers);
};

// Bonus - Iteration #4.1
const avg = mixedArr => {
  if (mixedArr.length === 0) return null;

  const avgNumber = sum(mixedArr) / mixedArr.length;

  return Math.round(avgNumber * 100) / 100;
};

// Iteration #5: Unique arrays
const uniquifyArray = words => {
  if (words.length === 0) return null;

  const uniqueWords = [];

  for (let i = 0; i < words.length; i += 1) if (!uniqueWords.includes(words[i])) uniqueWords.push(words[i]);

  return uniqueWords;
};

// Iteration #6: Find elements
const doesWordExist = (words, word) => {
  if (words.length === 0) return null;

  return words.includes(word);
};

// Iteration #7: Count repetition
const howManyTimes = (words, word) => {
  let counter = 0;

  for (let i = 0; i < words.length; i += 1) if (words[i] === word) counter += 1;

  return counter;
};

// Iteration #8: Bonus
const greatestProduct = matrix => {
  let currentProduct = 0;
  let greatestProduct = 0;
  
  for (let i = 0; i < matrix.length; i += 1) {
    for (let k = 0; k < matrix.length; k += 1) {
      if ((k - 3) >= 0) {
        currentProduct = matrix[i][k] * matrix[i][k - 1] * matrix[i][k - 2] * matrix[i][k - 3];

        if (currentProduct > greatestProduct) greatestProduct = currentProduct;
      };

      if ((i - 3) >= 0) {
        currentProduct = matrix[i][k] * matrix[i - 1][k] * matrix[i - 2][k] * matrix[i - 3][k];

        if (currentProduct > greatestProduct) greatestProduct = currentProduct;
      };
    };
  };
  
  return greatestProduct;
};

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

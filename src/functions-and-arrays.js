// Iteration #1: Find the maximum

function maxOfTwoNumbers(a, b) {
  if (a >= b) {
    return a;
  } else if (b > a) {
    return b;
  }
}

// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  let longest = ""; // set default variable that will be returned at the end

  // conditional for passing test if array is empty
  if (words.length === 0) {
    return null; // the return keyword will end the function here, it will prevent the rest of the code from executing
  }

  // loop that will check each word of the array against the default variable and update accordingly
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest; // return the default variable
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0; // set default variable that will be returned at the end

  // loop that will add all the elements in the array to the default variable
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum; // return the default variable
}

function sum(numbers) {
  let sum = 0; // set default variable that will be returned at the end

  // loop that checks each data type with the typeof keyword and updates the default variable accordingly
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      sum += numbers[i];
    } else if (typeof numbers[i] === "string") {
      sum += numbers[i].length;
    } else if (typeof numbers[i] === "boolean") {
      sum += numbers[i];
    } else {
      throw new Error("Unsupported data type sir or ma'am");
    }
  }

  return sum; // return the default variable
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  let average = 0; // set default variable that will be returned at the end

  // conditional for passing test if array is empty
  if (numbersAvg.length === 0) {
    return null; // the return keyword will end the function here, it will prevent the rest of the code from executing
  }

  // loop to add all of the numbers in the array to the default variable
  for (let i = 0; i < numbersAvg.length; i++) {
    average += numbersAvg[i];
  }

  average = average / numbersAvg.length; // to update variable with average of sum

  return average; // return the default variable
}

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(wordsArr) {
  let average = 0; // set default variable that will be returned at the end

  // conditional for passing test if array is empty
  if (wordsArr.length === 0) {
    return null; // the return keyword will end the function here, it will prevent the rest of the code from executing
  }

  for (let i = 0; i < wordsArr.length; i++) {
    average += wordsArr[i].length;
  }

  average = average / wordsArr.length; // to update variable with average of sum

  return average; // return the default variable
}

function avg(arr) {
  let average = 0; // set default variable that will be returned at the end

  // conditional for passing test if array is empty
  if (arr.length === 0) {
    return null; // the return keyword will end the function here, it will prevent the rest of the code from executing
  }

  // loop that will update the default variable depending on the type of data
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      average += arr[i];
    } else if (typeof arr[i] === "string") {
      average += arr[i].length;
    } else if (typeof arr[i] === "boolean") {
      average += arr[i];
    }
  }

  average = average / arr.length; // to update variable with average of sum
  average = parseFloat(average.toFixed(2)); // code to fix the decimals of the number to be only 2.

  return average; // return the default variable
}

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(arr) {
  const uniqueArr = []; // set default variable that will be returned at the end

  // conditional for passing test if array is empty
  if (arr.length === 0) {
    return null;
  }

  // loop that will check if the uniqueArr includes the words of the arr parameter, and add them only if they don't exist already.
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    // indexOf() => returns 1 (true) if the word already exists in the array
    // indexOf() => returns -1 (false) if the word doesn't exist in the array
    if (uniqueArr.indexOf(word) < 0) {
      uniqueArr.push(word);
    }
  }

  return uniqueArr; // return the default variable
}

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arrOfWords, wordToSearch) {

  // conditional for passing test if array is empty
  if (arrOfWords.length === 0) {
    return null;
  }

  // a loop that will check each for of the array against the wordSearch. return true only if it encounters it.
  for (let i = 0; i < arrOfWords.length; i++) {
    if (arrOfWords[i] === wordToSearch) {
      return true // if at some point the word is found, they function will return true and stop executing the rest of the function.
    }
  }

  return false // if the loop runs and it does not encounters the words (doesn't return true) then it will return false.

  // another approach using ES6 and the method .includes to check if the word is inside the array
  // if (arrOfWords.includes(wordToSearch)) {
  //   return true;
  // } else {
  //   return false;
  // }
}

// Iteration #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(arr, wordToSearch) {

  // conditional for passing test if array is empty
  if (arr.length === 0) {
    return 0;
  }

  var count = 0; // set default variable that will be returned at the end

  // a loop that will add 1 to the default variable everytime it encounters the word
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === wordToSearch) {
      count++;
    }
  }

  return count; // return the default variable
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

// fixed solution
function greatestProduct(matrix) {
  let greatest = 0;
  
  let horizontal = 0;
  let vertical = 0;
  let diagonal = 0;
  let inverseDiagonal = 0
  
  for (let ver = 0; ver < matrix.length - 3; ver++) {
    for (let hor = 0; hor < matrix.length - 3; hor++) {
      horizontal = matrix[ver][hor] * matrix[ver][hor+1] * matrix[ver][hor+2] * matrix[ver][hor+3]
      if (horizontal > greatest) { greatest = horizontal}
      
      vertical = matrix[ver][hor] * matrix[ver+1][hor] * matrix[ver+2][hor] * matrix[ver+3][hor]
      if (vertical > greatest) { greatest = vertical}
      
      diagonal = matrix[ver][hor] * matrix[ver+1][hor+1] * matrix[ver+2][hor+2] * matrix[ver+3][hor+3]
      if (diagonal > greatest) { greatest = diagonal}
      
      inverseDiagonal = matrix[ver][hor+3] * matrix[ver+1][hor+2] * matrix[ver+2][hor+1] * matrix[ver+3][hor]
      if (inverseDiagonal > greatest) { greatest = inverseDiagonal}
      
      // first iteration:  ver 0 hor 0
      // horizontal:       0 0 * 0 1 * 0 2 * 0 3
      // vertical:         0 0 * 1 0 * 2 0 * 3 0
      // diagonal:         0 0 * 1 1 * 2 2 * 3 3
      // inverseDiagonal:  0 3 * 1 2 * 2 1 * 3 0
      
    }
  }
  return greatest
}

function greatestProductOfDiagonals(matrix) {
  const productsOfFourNumbers = [];

  // pushing all products into the array productsOfFourNumbers
  matrix.forEach((arr, index) => {
    // vertical products
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 3]) {
        let product = arr[i] * arr[i + 1] * arr[i + 2] * arr[i + 3];
        productsOfFourNumbers.push(product);
      }
    }
    // horizontal products
    for (let i = 0; i < arr.length; i++) {
      if (matrix[index + 3] && matrix[index + 3][i]) {
        let product =
          matrix[index][i] * matrix[index + 1][i] * matrix[index + 2][i] * matrix[index + 3][i];
        productsOfFourNumbers.push(product);
      }
    }
    // diagonal products
    for (let i = 0; i < arr.length; i++) {
      if (matrix[index + 3] && matrix[index + 3][i + 3]) {
        let product =
          matrix[index][i] *
          matrix[index + 1][i + 1] *
          matrix[index + 2][i + 2] *
          matrix[index + 3][i + 3];
        productsOfFourNumbers.push(product);
      }
    }
  });

  // finding the greatest number in the array productOfFourNumbers
  let result = 0;
  productsOfFourNumbers.forEach(num => {
    if (num > result) {
      result = num;
    }
  });
  return result;
}
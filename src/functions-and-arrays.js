// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  }
  return num1;
}
console.log(maxOfTwoNumbers(5, 50));

// Iteration 2 | Find the Longest Word

function findLongestWord(words) {
  if (!words || words.length === 0) {
    // If the array is null, or undefined OR if the array is empty//
    // the second condition is necessary because an empty array is considered truthy//
    return 0; //no need to check further
  }

  let longestWord = words[0]; // Initialize with the first word
  let maxLength = longestWord.length; // Length of the word at words[0]

  for (let i = 1; i < words.length; i++) {
    //i starts from the second word
    const currentLength = words[i].length;
    if (currentLength > maxLength) {
      longestWord = words[i];
      maxLength = currentLength;
    }
  }

  return longestWord;
}

const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

const result = findLongestWord(words);
console.log(result);

// Iteration 3 | Sum Numbers

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;

  for (const eachNum of numbers) {
    sum += eachNum;
  }
  return sum;
}

console.log(sumNumbers(numbers));

/* Solution 2: 

    for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  } return sum;
}
console.log(sumNumbers(numbers)); */

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    const sum = sumNumbers(numbers);
    const averageNum = sum / numbers.length;
    return averageNum;
  }
}
averageNumbers(numbers);

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(words, word) {
  if (words.length === 0) {
    // check if an array is empty ==> .length === 0
    return null;
  }

  for (let i = 0; i < words.length; i++) {
    if (word === words[i]) {
      return true;
    }
  }
  return false; // this return must be placed OUTSIDE the loop
}

console.log(doesWordExist([words], "eating"));

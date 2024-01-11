// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
  return Math.max(number1, number2);
}

// Iteration 2 | Find the Longest Word
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
    let longestWord = '';

    if(!words.length) {
        return 0;
    }

    for(let i = 0; i < words.length; i ++) {
      if (words[i].length > longestWord.length) {
          longestWord = words[i];
      }
    }
    return longestWord;
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i ++) {
        sum += numbers[i];
    }

    return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if(!numbers.length) {
        return 0;
    }

    const sum = sumNumbers(numbers);

    return sum / numbers.length;
}

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
    let hasWord = false;

    if(!words.length) {
        return null;
    }

    words.forEach(element => {
        if(element === word) {
            hasWord = true;
        }
    });

    return hasWord;
}

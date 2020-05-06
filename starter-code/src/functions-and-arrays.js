// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];

function findLongestWord(arr) {
  if (arr.length === 0) return null;
  let longestWord;
  let lastWord;

  for (let i = 0; i < arr.length; i++) {
    lastWord = arr[i];

    if (i === 0) {
      longestWord = arr[i];
    }

    if (lastWord.length > longestWord.length) {
      longestWord = lastWord;
    }
  }
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(arr) {
  return arr.reduce((acc, num) => (acc += num), 0);
}

//Iteration #3.1: A generic sum() function. should return 57

const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];

function sum(arr) {
  let 
  return arr.reduce((acc,num)) => (acc += num), 0);
}

//Iteration #4: Calculate the average
//Level 1: Array of numbers

const number = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  return arr.reduce((acc, num) => (acc += num), 0);
}


// // Level 2: Array of strings
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
  "palace"
];

function averageWordLength(arr) {
  return arr.join("").length / arr.length;
}


//Iteration #4.1: A generic avg() function

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];


// // Iteration #5: Unique arrays
const words = [
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
  "bring"
];

function avg(arr) {
  let sum = 0;
  const myArr = arr.map(function(item) {
    if (typeof item === "string") {
      sum += item.length;
    } else if (typeof item === "boolean") {
      if (item === true) {
        sum += 1;
      }
    } else {
      sum += item;
    }
  });
  return sum;
}


// // Iteration #6: Find elements
const words = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];

function doesWordExist(arr) {
  if(word === arr.map() )
  return true;
 } else { return false;
   }
  }


// // Iteration #7: Count repetition
const words = [
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
  "matter"
];

function howManyTimes(arr, search) {
  // if(numberOfTimes === a
  // return numberOfTimes
}

// // Iteration #8: Bonus

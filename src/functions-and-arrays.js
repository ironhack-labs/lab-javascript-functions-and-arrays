// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  // Version #1
  if (num1 == num2) {
    return num1;
  } else if (num1 > num2) {
    console.log(`In this case the bigger number is number 1 which is: ${num1}`);
    return num1;
  } else {
    console.log(`In this case the bigger number is number 2 which is: ${num2}`);
    return num2;
  }
  // Version #2
  // return Math.max(num1, num2);
}
console.log("Iteration #1 - Max of two numbers:");
maxOfTwoNumbers(8, 10);
console.log("-------------------");

// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodila ddslkdaskasksajlkm",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];
console.log("Iteration #2 - Find Longest Word:");
// V1 - D
function findLongestWord(words) {
  if (words.length === 0) return null;

  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log("-------------------");
console.log(`The longest word in this array is: "${findLongestWord(words)}"`);
// V2 - K
function findLongestWordK(words) {
  let wordLength;

  if (!words.length) {
    return null;
  } else if (words.length === 1) {
    return words.toString();
  } else {
    let temporal = words.sort((a, b) => (a.length > b.length ? -1 : 1));
    wordLength = temporal[0];
  }
  return wordLength;
}
console.log("-------------------");
console.log(`The longest word in this array is: "${findLongestWord(words)}"`);

// V3 - O - Reduce Method
function findLongestWord3(words) {
  if (words.length == 0) return null;
  else
    return words.reduce((prev, curr) =>
      prev.length >= curr.length ? prev : curr
    );
}
console.log("-------------------");
console.log(`The longest word in this array is: "${findLongestWord3(words)}"`);

console.log(`- Iteration 3 - "`);
// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

console.log("Version 001");
function sumNumbers(numbers) {
  // declare variable to store the sum total
  let sum = 0;
  // Iterate based on the parameter we're pointing to - coincidentally also named 'numbers'
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  // return :)
  return sum;
}
console.log(
  `For LOOP - The sum of all these numbers is: "${sumNumbers(numbers)}"`
);

console.log("Version 002");
function sumNumbers2(numbers) {
  if (numbers.length == 0) {
    return 0;
  } else {
    const total = numbers.reduce((total, current) => total + current);
    return total;
  }
}
console.log(
  `REDUCE V1 - The sum of all these numbers is: "${sumNumbers2(numbers)}"`
);

console.log("Version 003");
function sumNumbers3(sumArray) {
  let suma = 0;
  sumArray.forEach((element) => {
    suma += element;
  });
  return suma;
}
console.log(
  `FOR EACH - The sum of all these numbers is: "${sumNumbers3(numbers)}"`
);

console.log("-------------------");
console.log(`- Iteration 3.2 - "`);
// Iteration #3.1 Bonus:
const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];
function sum(array) {
  let mixedSum = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      str = array[i].split("");
      for (let i = 0; i < str.length; i++) {
        mixedSum += str[i].length;
      }
    } else if (array[i] === true) {
      mixedSum += 1;
    } else if (typeof array[i] === "object" || typeof array[i] === "array") {
      throw new Error("no no...");
    } else {
      mixedSum += array[i];
    }
  }
  return mixedSum;
}
console.log(`Version 001 - The sum of this mixed array is: ${sum(mixedArr)}`);

console.log("Version 002");
function sum2(mixedArr) {
  if (mixedArr.length === 0) return 0;

  let result = 0;
  for (let i = 0; i < mixedArr.length; i++) {
    const element = mixedArr[i];

    if (typeof element === "string") {
      result += element.length;
    } else if (element === true) {
      result += 1;
    } else if (typeof element === "object") {
      throw new Error("no no....");
    } else {
      result += mixedArr[i];
    }
  }
  return result;
}
console.log(`Version 002 - The sum of this mixed array is: ${sum2(mixedArr)}`);

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2.4, 6.6, 9.6, 10.9, 7, 4.4, 1.55, 9];
console.log("Version 001");
// function averageNumbers(numbersAvg) {
//   return (sumNumbers(numbersAvg) / numbersAvg.length).toFixed(2);
// }
function averageNumbers(numbersAvg) {
  if (numbersAvg.length === 0) return null;

  let total = 0;
  for (let i = 0; i < numbersAvg.length; i++) {
    total += numbersAvg[i];
  }

  return total / numbersAvg.length;
}
console.log(`The average of this array is: ${averageNumbers(numbersAvg)}`);
console.log("Version 002");
function averageNumbers2(numbersAvg) {
  if (numbersAvg.length === 0) return null;
  if (numbersAvg.length === 1) return numbersAvg[0];

  let total = 0;
  for (let i = 0; i < numbersAvg.length; i++) {
    total += numbersAvg[i];
  }
  return (total / numbersAvg.length).toFixed(2);
}
console.log(`The average of this array is: ${averageNumbers2(numbersAvg)}`);
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
// V1 - NORMAL
function averageWordLength(wordsArr) {
  if (wordsArr.length === 0) return null;
  let total = 0;
  for (let i = 0; i < wordsArr.length; i++) {
    total += wordsArr[i].length;
  }
  return total / wordsArr.length;
}
console.log(`- Iteration #4.2: Array of strings - "`);
console.log(
  `The average word length in this array is: ${averageWordLength(wordsArr)}`
);
// V2 - A - SIMPLIFIED TERNARIES & ARROW
const averageWordLength2 = (wordsArr) =>
  !wordsArr.length ? null : wordsArr.join("").length / wordsArr.length;
console.log(
  `TERNARY - ARROW - The average word length in this array is: ${averageWordLength2(
    wordsArr
  )}`
);
// Bonus - Iteration #4.1
console.log("-------------------");
console.log(`- Iteration 4.1 - "`);
const mixedArr2 = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];
function avg(array) {
  return sum(array) / array.length;
}
console.log(`The average of this mixed array is: ${avg(mixedArr2)}`);
console.log(`- Iteration 4.1 - V2  "`);
const avg2 = (arr) => (!arr.length ? null : sum(arr) / arr.length);
console.log(`The average of this mixed array is: ${avg2(mixedArr2)}`);

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

function uniquifyArray() {}

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

function doesWordExist() {}

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

function howManyTimes() {}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

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

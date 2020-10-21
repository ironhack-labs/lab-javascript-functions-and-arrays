// Iteration #1: Find the maximum
function maxOfTwoNumbers(firstNum, secondNum) {
  if (firstNum > secondNum) return firstNum;
  else return secondNum;
}
// Notes: 
// 1. The logic is indenpend on JS, think about the logic first, how to implement. 
// 2. It doesn't matter, which number to return, when the two numbers are equal, so two conditions is enough.
// 3. If just return in online, you can remove the {}. 


// Iteration #2: Find longest word

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord (wordsArr) {
  if (wordsArr.length === 0) {
    return null;
  } 
  let longestWord = '';
  for (i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length > longestWord.length) {
      longestWord = wordsArr[i]
    }
  }
  return longestWord;
};

// Notes:
// 1. Don't need the else if condition to check the array has one word. The word would be the longest word.
// 2. Don't need to write the else, because the return already break up the process.


// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// My first code:
// function sumNumbers (numbers) {
//   if (numbers.length === 0) {
//     return 0;
//   } else {
//     let sum = 0;
//     for (i = 0; i < numbers.length; i++) {
//       sum += numbers[i]
//     };
//     return sum;
//   }
// };

// Notes: A more convenient way to do: !!! And don't need to write another condition to return 0 when the array is empty.
function sumNumbers(numbers) {
let sum = 0;  
for (let number of numbers) {
    sum = sum + number;
};
return sum;
};

// Bonus #1: Calculate the sum
const arr = [];
function sum (arr) {

}


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers (numbersAvg) {
  if (numbersAvg.length === 0) return null;
  const average = sumNumbers(numbersAvg) / numbersAvg.length;
  return average;
};
// Notes: 1. Don't need "else"; 2. One line code

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength (wordsArr) {
  let arr = []; // put the numbers of length to a new array, and then you can use the function numbersAvg()
  for (let i =0; i < wordsArr.length; i++) {
    arr.push(wordsArr[i].length);
  };
  return averageNumbers(arr); 
}

// Another way:

function averageWordLength (words) {
  let sum = 0;
  for (let i = 0; i < words.length; i++) {
    sum = sum + words[i].length
  }
  return sum / words.length
}


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

function uniquifyArray (wordsUnique) {
  if (wordsUnique.length === 0) return null;
  let seenObj = {};
  let newArr = [];
    for (i=0; i< wordsUnique.length; i++) {
      if(!(seenObj.hasOwnProperty(wordsUnique[i]))) {
        newArr.push(wordsUnique[i]);
        seenObj[wordsUnique[i]] = true; // when key is code, use []
      };
    };
    return newArr;
};

// Notes: 1. Create a new array. Put the items into another box.
// Another way to do it: !!!
function uniquifyArray (array) {
  let unique = [];
  for (let i = 0; i < array.length; i++) {
    // unique.push(array[i]);
    // if unique does not contain the word we are at, put the word in the unique array
    if (unique.indexOf(array[i]) === -1) { // -1 means the element is not in there
      unique.push(array[i]);
    }
  }
  return unique;
}
// Use includes()
function uniquifyArray (array) {
  let unique = [];
  for (let i = 0; i < array.length; i++) {
    if (!(unique.includes(array[i])) {
      unique.push(array[i]);
    }
  }
  return unique;
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function doesWordExist (wordsFind, word) {
  if (wordsFind.length === 0) {
    return null;
  } else {
    return wordsFind.includes(word);
  };
};

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

function howManyTimes (wordsCount, word) {
  if (wordsCount.length === 0) return 0;
  let count = 0; // like a piece of paper
  for (let element of wordsCount) {  // use let ... in ... is more efficient, because you don't need to loop over the array from start to end
    if (word === element) count ++;  // one line simplify
  return count; // should take care of scope, where to return
};

// Notes: 
// for (let element of wordsCount) {
//   if (word === element) return count++;
// }

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

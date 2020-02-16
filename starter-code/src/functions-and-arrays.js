// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) return a
  if (a < b) return b
  if (a === b) return a,b;
}
maxOfTwoNumbers(1,2)

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(word) {
  let longest = "";
  if (word <= 0) {
    return null;
  }

//   //ALTERNATIVE
// if (!Array.length) {
//   return null;
// }

  // } else if (words = "") {
  //   return words;
  // }
   for (let i = 0; i < word.length; i++) {
    if (word[i].length > longest.length) {
      longest = word[i];
    }
  } return longest
  }

// Iteration #3: Calculate the sum
function sumNumbers(numbers) {
  let sum = 0;
    if (numbers.length == 0){
    return 0;
  } 
  for (let i=0; i <numbers.length; i++) {
    if (numbers.length == 1) {
    return sum += numbers[i];
  } else if (numbers[i] === 0) {
    return 0;
  }
  for (let i=0; i < numbers.length; ++i) {
    sum += numbers[i]; // add each element in an array to total
  } return sum; // return sum of elements in array
}
}
// Alternative
// function sumNumbers (arrayOfNumbers) {
// let number = 0;
// for (let i=0; i < arrayOfNumbers.length; i++) {
  // number = number + arrayOfNumbers[i]; 
// } return number;
// }
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
function sum (mixedArr) {
  let number = 0;
  if (mixedArr.length == 0){
    return 0;
  }
  for (let i=0; i < mixedArr.length; i++) {
    if (typeof mixedArr[i] == "string") {
      number += mixedArr[i].length}
    else if (typeof mixedArr[i] == "boolean") {
      number += Number(mixedArr[i])
    } else {
      number += mixedArr[i];
    }  
  } return number;
}
    // if (typeof mixedArr[i] == "object" || "array") {
    //   let e = new Error("Unsupported data type sir or ma'am");
    //   throw e;
    //   }
  // NOT WORKING
    
// function sum(numbers) {
//   let sum = 0;
//     if (numbers.length == 0){
//     return 0;
//   } 
//   for (i=0; i <numbers.length; i++) {
//     if (numbers.length == 1) {
//     return sum += numbers[i];
//   } else if (numbers[i] === 0) {
//     return 0;
//   }
//   for (i=0; i < numbers.length; ++i) {
//     sum += numbers[i]; // add each element in an array to total
//   } return sum; // return sum of elements in array
// }

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  let sum = 0;
  if (!numbersAvg.length){
    return null;
  }
  for (let i=0; i < numbersAvg.length; i++) {
    sum += numbersAvg[i] / numbersAvg.length;
  } 
  return Math.round(sum); // return sum of elements in array
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  let sum = 0;
  if (!wordsArr.length) {
    return null;
  }
  for (let i=0; i < wordsArr.length; i++) {
    if (typeof wordsArr[i] == "string") {
      sum += wordsArr[i].length / wordsArr.length
    }
  } return sum;
}

//BONUS
function avg (arr) {
  let number = 0;
  if (arr.length == 0){
    return null;
  }
  for (let i=0; i < mixedArr.length; i++) {
    if (typeof mixedArr[i] == "string") {
      number += mixedArr[i].length
    } else {
      number += mixedArr[i];
    }
    } return number / mixedArr.length;
    }
// Jasmine wants 5.11 (don't know which mixed array it uses), but Ironhack git says 5.7, which makes this CORRECT!!! :)

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

function uniquifyArray(wordsUnique) {
  let indices = 0;
  if (wordsUnique = []){
    return null;
  } 
  for (let i = 0; i < wordsUnique.length; i++) {
     if (indices.indexOf(wordsUnique[i]) == -1) {
      indices.push(wordsUnique[i]);
     } return indices;
  }
}
  // } else {
  //   switch(wordsUnique) {
  //     case crab:
  //       wordsUnique.indexOf(crab, 0) === 0;
  //       indices.push(crab);
  //     case poison:
  //       wordsUnique.indexOf(poison, 0) === 0;
  //       indices.push(poison);
  //     case contagious:
  //       wordsUnique.indexOf(contagious, 0) === 0;
  //       indices.push(contagious);
  //     case simple:
  //       wordsUnique.indexOf(simple, 0) === 0;
  //       indices.push(simple);
  //     case bring:
  //       wordsUnique.indexOf(bring, 0) === 0;
  //       indices.push(bring);
  //     case sharp:
  //       wordsUnique.indexOf(sharp, 0) === 0;
  //       indices.push(sharp);
  //     case playground:
  //       wordsUnique.indexOf(playground, 0) === 0;
  //       indices.push(playground);
  //     case communion:
  //       wordsUnique.indexOf(communion, 0) === 0;
  //       indices.push(communion);
  //   }
  // } return indices;
  // } 


// JASMINE SOLUTION WITH DIFFERENT WORDS - WHY IS IT COMMING OUT NULL?

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsFind, newWord) {
  if (wordsFind = []){
    return null;
  }
for (let i=0; i < wordsFind.length; i++) {
      if (wordsFind.includes(newWord[i], 0)) {
        return true;
      } else {
        return false;
      }
    }
  }
// DID NOT WORK
let hasMachine = doesWordExist(wordsFind, "machine");

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

function howManyTimes(wordsCount, word){
  var sum = 0;
  for (let i = 0; i < wordsCount.length; i++) {
    if (wordsCount[i] === word) {
      sum += 1;
  }
} return sum;   
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

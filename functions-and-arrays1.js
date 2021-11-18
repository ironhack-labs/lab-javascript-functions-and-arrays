// Iteration #1: Find the maximum
function maxOfTwoNumbers(firstNum, secondNum) {  
    if (firstNum > secondNum) {
       console.log(firstNum + " is larger than " + secondNum);
    } else {
        console.log(firstNum + " is less than " + secondNum);
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord(word) {
  let longestName = '';

  if ( !word.length )
    return null;

  for (let i = 0 ; i < word.length ; i+= 1) {
    if (word[i].length > longestName.length) {
        longestName = word[i];
    }
  }
  return longestName;
}  

console.log(findLongestWord(words));



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

  function sumNumbers(numbers) {
    if(!numbers.length){
      return 0; 
    }
  
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  if(!numbersAvg.length){
    return null;
  }
  let sum = 0;
  for (let i = 0; i < numbersAvg.length; i++) {
    sum += numbersAvg[i];
  }
  return sum / numbersAvg.length;
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  if(!wordsArr.length){
    return null;
  }

  let sum = 0;
  for (let i = 0; i < wordsArr.length; i++) {
    sum += wordsArr[i].length;
  }
  return sum / wordsArr.length;

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


function uniquifyArray(arr) {
  if (!arr.length){
    return null;
  }
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i += 1){
    if (uniqueArray.indexOf(arr[i]) === -1){
      uniqueArray.push(arr[i])
    }
  }
  return uniqueArray;
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist() {}



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

function howManyTimes(arrayOfWords,word) {
  let repetitions = 0;
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i] === word) {
      repetitions += 1; 
     } 
   }
    return repetitions;
  }






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

// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else return a;
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(array) {
  let longestWord = "";
  if (array.length === 0) {
    return null;
  } else if (array.length === 1) {
    return array[0]
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > longestWord.length) {
        longestWord = array[i]
      }
    }
    return longestWord;
  }
}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    let sum = 0;
    if (array.length === 0) {
      return 0;
    } else {
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum;
    }
}



// Iteration #3.1 Bonus:
function sum() {}
// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  let sum = 0;
  if (array.length === 0) {
    return null;
  } else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }
    return sum / array.length
  }
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) { 
  let sum = 0
  if (wordsArr.length === 0) {
    return null; 
  } else {
    for (let i = 0; i < wordsArr.length; i++) {
      sum += wordsArr[i].length
    }
    return sum / wordsArr.length
  }
}

// Bonus - Iteration #4.1
function avg() {}
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
  if(arr.length === 0){
    return null;
  }
  for(let i = 0; i < arr.length; i++){
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
      arr.splice(i, 1)
    }
  }
  return arr;
}





// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsFind, word) {
  if (wordsFind.length === 0) {
    return null
  } 

  for (let i = 0; i < wordsFind.length; i++) {
    if (word === wordsFind[i]) {
      return true;
    } else {
      continue;
    }
  }

  return false;
}



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

function howManyTimes(array, word) {
 let count = 0;
 for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      count++;
    }
 }
 return count;
}
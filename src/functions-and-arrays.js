// Iteration #1: Find the maximum

function maxOfTwoNumbers(a,b) {
  if (a>b) {return a}
  if (b>a) {return b}
  else return a;
}


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(exampleArr) {
  if (exampleArr == '') {
    return null;
  }
  else {
    let longestWord = '';
    exampleArr.forEach(function(elem, i){
      if (elem.length > longestWord.length) {
        longestWord = elem;
      }
    });
    return longestWord;

  }
}
// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(exampleArr) {
  let sumNum = 0;
  exampleArr.forEach(function(elem, i){
    switch(typeof elem) {
      case 'number':
        sumNum += elem;
        break;
      case 'boolean':
        sumNum += elem;
        break;
      case 'string':
        sumNum += elem.length;
        break;
      default: throw 'Err'; 
    }
  });
  return sumNum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(exampleArr) {
  if (exampleArr.length == 0) {
    return null;
  }
  else {
    return sumNumbers(exampleArr)/exampleArr.length;
  }
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(exampleArr) {
  if (exampleArr.length == 0) {
    return null;  
  }
  else {
    let sumStrings = 0;
    exampleArr.forEach(function(elem, i){
      sumStrings += elem.length;
    });
    return sumStrings/exampleArr.length;
  }
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

function uniquifyArray(exampleArr) {
  if (exampleArr.length == 0) {
    return null;
  }
  let uniqArr = [];
  for (let i = 0; i < exampleArr.length; i++) {
    if (uniqArr.indexOf(exampleArr[i]) === -1) {
      uniqArr.push(exampleArr[i]);
    }
  }
  return uniqArr;
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordExist, word) {
  if (wordExist.length == 0) {
    return null;
  }
  for (let i = 0; i < wordExist.length; i++) {
    if (wordExist[i] == word) {
      return true;
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

function howManyTimes(arr, word) {
  let wordCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] == word){wordCount ++;} 
  }
  return wordCount;
}


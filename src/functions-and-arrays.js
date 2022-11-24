// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  else if (num1 < num2) {
    return num2
  }

  else {return num1, num2;}
}


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  let longestWord = "";
  if (words.length === 0) { 
    return null;}

  for ( let i = 0; i < words.length; i++ ) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nums) {
  let total = 0;
  for (let num of nums) total += num;
  return total
}


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(nums) {
  let result = 0;
  for (let num of nums) result += num;
  return result/nums.length
 }


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) {
  let result = 0;
  if (words.length === 0) {
    return null;
  }

  for (let i = 0; i < words.length; i++) {
    result += words[i].length;
    return result/words.length
  }
 }


// Iteration #5: Unique arrays
const words = [
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
const counter = {};
const newArray = [];
for (let i = 0; i<words.length; i++){
    let word = words[i];
    if (counter[word]){counter[word]++;}
    else {counter[word] = 1;}
}
console.log(counter);
for (let i = 0; i<words.length; i++){
  let word = words[i];
  if (counter[word] === 1){
    newArray.push(word);
  }
}


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsFind, wordSearch) {
  if (wordsFind.length === 0) { 
    return null;
  }
  return wordsFind.includes(wordSearch);
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

function howManyTimes(wordsCount, wordSearch) {
    if (wordsCount.length === 0){ 
      return 0;
    }
      let counter = 0;
    for (let i = 0; i < wordsCount.length; i++ ) {
      if (wordsCount[i] === wordSearch) {
        counter++;
      }
    }
  
    return counter;
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

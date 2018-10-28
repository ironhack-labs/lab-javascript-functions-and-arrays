// Find the maximum
function maxOfTwoNumbers(numOne, numTwo){
  if(numOne > numTwo ){
    return numOne;
  }
  else if (numOne < numTwo){
    return numTwo;
  }
  else {
    return numOne;
  }
}
// Finding Longest Word
function findLongestWord(words){
  let bigger = "";
    if (words.length < 1){
      return undefined;
    }
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > bigger.length) {
        bigger = words[i];
      }
  };
    return bigger;
}
findLongestWord(words);
 var words = [
 'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
// Calculating a Sum
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumArray(numbers){
  let addIt = 0;
  if (numbers.length < 1){
    return 0;
  }
  for(var i=0; i< numbers.length; i++) { 
    addIt += numbers[i];
}
  return addIt;
}

sumArray();

console.log(sumArray());
// Calculate the Average
var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(numbersAvg){
  let addIt = 0;
  if (numbersAvg.length < 1){
    return undefined;
  }
  for(var i=0; i< numbersAvg.length; i++) {
    addIt += numbersAvg[i];
  }
  return addIt/numbersAvg.length;
}

// Array of Strings
var wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

// Unique Arrays
var wordsUnique = [
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

// Finding Elements
var wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

// Counting Repetion
var wordsCount = [
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

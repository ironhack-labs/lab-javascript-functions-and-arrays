// Find the maximum
function maxOfTwoNumbers (a, b){
  if ( a > b ){
    return a;
  } else {
    return b;
  }
}
// Finding Longest Word
var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function findLongestWord(words) {
  if (words.length === 0) {
    return undefined;
  }
  var longest = '';
  for (i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}


// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(numbers) {
  var result = 0;
  for (i = 0; i < numbers.length; i++){
    result += numbers[i]
  }
  return result;
}

/*var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumArray (numbers) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return numbers.reduce(reducer);
}
sumArray(numbers);*/

// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }
  return sumArray(numbers) / numbers.length; 
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

function averageWordLength(words) {
  if (words.length === 0) {
    return undefined;
  }
  var sum = 0;
  words.forEach(function(word) {
    sum += word.length;
  });
  return sum / words.length;
}


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

function uniquifyArray(words){
  if (words.length === 0){
    return undefined;
  }
  var uniquifiedArray = []
  for (i=0; i< words.length; i++){
    if (uniquifiedArray.indexOf(words[i]) === -1){
      uniquifiedArray.push(words[i])
    }
  }
  return uniquifiedArray;
  }

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

function doesWordexist (array, word){
  if (wordsFind.length ===0) {
    return undefined;
  }
  var result = false;
  array.forEach(function(position) {
    if (position === word) {
      result = true;
    }
  });
  return result;
}

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

function howManyTimes(array, wordToCount){
  if (array.length === 0) {
    return false;
  }

var count = 0;
for (i=0; i < array.length; i++) {
  if (array[i] === wordToCount) {
    count++;
  }
}
return count;
}
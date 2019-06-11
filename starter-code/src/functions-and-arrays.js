// Find the maximum
function maxOfTwoNumbers(first, second){
  if(first > second){return first}
  else {return second}
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

function findLongestWord(wordArray){
  let longestWord;
  if(wordArray.length !== 0){
    longestWord="";
    wordArray.forEach((word)=>{
    if(word.length>longestWord.length){
      longestWord = word;
    }
  });
  }
  return longestWord;
}

// Calculating a Sum
function sumArray(array){
  let sum = 0;
  array.forEach((num)=>{
    sum += num;
  });
  return sum;
}

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// Calculate the Average
function averageNumbers(numArray){
  let average;
  if(numArray.length !== 0) {
    let sum = sumArray(numArray);
    let amountOfNumbers = numArray.length;
    average = sum / amountOfNumbers;
  }
  return average;
}

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

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

function averageWordLength(wordArray){
  let averageWordLength;
  if(wordArray.length !== 0) {
    averageWordLength = 0;
    wordLengthArray=[];
    wordArray.forEach((words)=>{
      wordLengthArray.push(words.length);
    });
    averageWordLength = averageNumbers(wordLengthArray);
  }
  return averageWordLength;
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
function uniquifyArray(wordArray){
  let uniqueArray;
  if(wordArray.length !== 0) {
    uniqueArray=[];
    wordArray.forEach((words)=>{
      if(uniqueArray.indexOf(words) === -1) {
        uniqueArray.push(words);
      }
    });
  }
  return uniqueArray;
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

function doesWordExist(wordArray, wordSearch){
  let wordExist = false;
  wordArray.forEach((words)=>{
    if(wordSearch == words) {
      wordExist = true;
    }
  });
  return wordExist;
}


// `IN` STATEMENT DOESN'T WORK FOR US
// function doesWordExist(wordArray, wordSearch){
//   let wordExist = false;
//   if(wordSearch in wordArray === true){
//     wordExist = true;
//   }
//   return wordExist;
// }

// doesWordExist(wordsFind, 'machine');

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

function howManyTimes(wordArray, selectedWord) {
  let wordCount;
  if(wordArray.length === 0) {
    wordCount=false;
  } else {
    wordCount = 0;
    wordArray.forEach((words)=>{
      if(words === selectedWord) {
        wordCount++;
      }
    });
  }
  return wordCount;
}
// Bonus Quest
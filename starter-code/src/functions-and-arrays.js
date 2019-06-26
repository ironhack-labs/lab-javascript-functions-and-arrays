// Find the maximum
function maxOfTwoNumbers(firstNum, secondNum){
  
  if (firstNum > secondNum) {
     console.log(firstNum + " is larger than " + secondNum);
  } else {
      console.log(firstNum + " is less than " + secondNum);
  }
  return;

}

maxOfTwoNumbers(1, 2);

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

console.log(longestStringForLoop(['mystery', 'brother', 'aviator', `crocodile`, `pearl`, `orchard`, `crackpot`]));
console.log(longestStringReduce(['mystery', 'brother', 'aviator', `crocodile`, `pearl`, `orchard`, `crackpot`]));

function longestStringForLoop(arr) {
let word = "";
for (let i = 0; i < arr.length; i++) {
  if (word.length < arr[i].length) {
    word = arr[i];
  }
}
return word;
}

function longestStringReduce(arr) {
return arr.reduce((a, b) => a.length < b.length ? b : a, "");
}

// Calculating a Sum

var sumArray = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

console.log(
[6, 12, 1, 18, 13, 16, 2, 1, 8, 10].reduce((a, b) => a + b, 0))

// Calculate the Average

var avgNumbers= [2, 6, 9, 10, 7, 4, 1, 9];

var total = 0;
for(var i = 0; i < avgNumbers.length; i++) {
  total += avgNumbers[i];
}
var averages = total / avgNumbers.length;

console.log(averages)

// Array of Strings

function averageWordLength(array) {
  return avg(array) / array.length;
}

function avg(array) {
  var avg = 0;
  array.forEach(function(array) {
      avg += array.length;
  });
  return avg;
}

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

var averageLength = averageWordLength(wordsArr);
console.log(averageLength);

// Unique Arrays

function uniquifyArray(array) {
  var index = [];
  for (var j = 0; j < array.length; j++) {
     if (index.indexOf(array[j]) == -1) {
      index.push(array[j]);
     }
  }
        return index; 
}

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

var uniqued = uniquifyArray(wordsUnique);
console.log(uniqued);

// Finding Elements

function doesWordExist(wordsArray, word) {
  for (var i = 0; i < wordsArray.length; i++) {
       if (wordsArray[i] === word) {
         return true;
   }
 }
 return false;
}

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

var hasMatter = doesWordExist(wordsFind, "matter");
console.log(hasMatter);

var hasDog = doesWordExist(wordsFind, "dog");
console.log(hasDog);

// Counting Repetion

function howManyTimes(words, word) {
  var sum = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i] === word) {
      sum += 1;
  }
}
  return sum; 
}

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

var howManyMatter = howManyTimes(wordsCount, "matter");
console.log(howManyMatter);

var howManyDog = howManyTimes(wordsCount, "dog");
console.log(howManyDog);


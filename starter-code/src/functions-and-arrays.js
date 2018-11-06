// Find the maximum

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

var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

var longest = "";

var length = 0;

for (var i = 0; i < words.length; i++) {
  if (words[i].length > longest.length) {
    longest = words[i]
  }

 console.log(longest);
}


//=========================== Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

var s = 0;

for (var i = 0; i < numbers.length;i++) {
  s = s + numbers[i]
}

console.log(s)

// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

var s = 0;

for (var i = 0; i < numbersAvg.length;i++) {
  s = s + numbersAvg[i]
}

console.log(s/numbersAvg.length)

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

//  ==========================================

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


var w = [
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

var newArr = [];

for (var i = 0; i  < w.length; i++) {
  if (newArr.indexOf(w[i]) === -1) {
   newArr.push(w[i])
  } 
}
  console.log(newArr)

  // ======================================

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

var words = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];


for (var i = 0; i < words.length; i++) {
  if(words.includes("truth") === true) {
    console.log("yes we lucky")
  } else{
    console.log("no keep looking")
  }
}

//  ===========================================================
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


var words = [
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

function numRepet(words ,array) {
  var numOccurance = 0

  for (var i = 0; i< array.length; i++) {
    if (array[i] === words){numOccurance += 1;}
  }
  return numOccurance
}
 
// i changed array.length to words.length and result is still same is there a difference in any of the 
// codes? how can i write the exact number of occurance ?ß
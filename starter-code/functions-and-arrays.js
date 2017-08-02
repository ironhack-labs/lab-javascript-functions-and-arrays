//DAY 2 - FUNCTION AND ARRAYS
//#1 Find the maximum
//Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest.
function maxOfTwoNumbers(first, second){
  if (first > second) {
    return first;
  } else {
    return second;
  }
}

var largest = maxOfTwoNumbers(2, 6);
console.log(largest); // 6

//#2 Finding Longest Word
//Write a function findLongestWord that takes an array of words and returns the length of the longest one.
var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];
//create an empty array and push the word's length inside
var longestWord;

function findLongestWord(array) {
  var lgt = 0;
  for (var i = 0; i < array.length; i++) {
    if(array[i].length > lgt) {
      lgt = array[i].length;
      longestWord = array[i];
    }
  }
  return longestWord;
}
var longest = findLongestWord(words);
console.log(longest); // crocodile

//#3 Calculating a Sum
//Calculating a sum is as simple as iterating over an array and adding each of the elements together.
//Semantically reduce is the best method to use for this, but you can use any loop we've discussed so far.
//Calculate the sum of the following array:

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

var numbersAdded = [];

function sumArray(array){
  for(var sum = 0, i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
var total = console.log(sumArray(numbers));
// 87

//#4 Calculate the Average
//Level 1: Array of Numbers
//Write code to calculate the average of the following array:

var numbers = [2, 6, 9, 10, 7, 4, 1, 9];
//var numbersTotal = sumArray(numbers);
//var arrayLength = numbers.length;

function averageNumbers(array){
  return sumArray(array) / array.length;
}

var average = averageNumbers(numbers);
console.log(average);
// 6

//Level 2: Array of Strings
//Write code to calculate the average length of the strings inside of the following array:

var words = [
	"seat",
	"correspond",
	"linen",
	"motif",
	"hole",
	"smell",
	"smart",
	"chaos",
	"fuel",
	"palace"
];

var wordsLength = [];

function averageWordLength(array){
  array.forEach(function(array) {
    wordsLength.push(array.length);
  });

  return wordsLength / array.length;
}

averageWordLength(words);

var averageLength = averageNumbers(wordsLength);
console.log(averageLength);
// 5.3

//#5 Unique Arrays
//Take the following array, remove the duplicates, and return a new array. You're more than likely going to want to check out the indexOf function.
//Do this in the form of a function.
/*
var words = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring"
];
var duplicates = [];
//find the duplicate words indexes and put them into a new array
function findDuplicates(array, arrayN) {
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i + 1] === array[i]) {
      arrayN.push(array.indexOf(array[i]));
    }
  }
  return newArray;
}

console.log(findDuplicates(words, duplicates));


var uniqueArray = [];
function uniquifyArray(array, arrayN){
  for (var i = 0; i < array.length; i++) {
    arrayN.push(array.splice(findDuplicates(array), 1));
  }
return array;
}

var uniqued = uniquifyArray(words, uniqueArray);
console.log(uniqued);
// ["crab", "poison", "contagious", "simple", "bring", "sharp", "playground", "communion"]
*/

// Find the maximum
function maxOfTwoNumbers (first, second) {
  if (first > second) return first;
  else if (first < second) return second;
  else return first;
}

var largest = maxOfTwoNumbers(2, 6);
console.log(largest);

// Finding Longest Word
function findLongestWord (words) {
  var longest = 0;
    var word = null;
    for (var i = 0; i < words.length - 1; i++) {
        if (longest < words[i].length) {
            longest = words[i].length;
            word = words[i];
        }
    }
    return word;
}
// forEach????
var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];
var longest = findLongestWord(words);
console.log(longest);

// Calculating a Sum
function sumArray (array) {
  var sum = array.reduce(add, 0);

  function add(a, b) {
      return a + b;
  }

  return sum;
}

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
var total = sumArray(numbers);
console.log(total);

// Calculate the Average
function averageNumbers (array) {
  var sum = array.reduce(add, 0);

  function add(a, b) {
      return a + b;
  }

  return sum/array.length;
}



var numbers = [2, 6, 9, 10, 7, 4, 1, 9];
var average = averageNumbers(numbers);
console.log(average);

// Array of Strings
function averageWordLength (array) {

  var total=0;
  for(var i in array) { total += array[i].length; }
  return total/array.length;
}

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
var averageLength = averageWordLength(words);
console.log(averageLength);
// Unique Arrays
function uniquifyArray (array) {
  uniquearray= array.filter(function(item, pos) { return array.indexOf(item) == pos;})
  return uniquearray;
}

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
var uniqued = uniquifyArray(words);
console.log(uniqued);

// Finding Elements
function doesWordExist (wordsArray, word) {
  if (wordsArray.find(function(element){return element == word;})) return true;
  else return false;
}

var words = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];

var hasMatter = doesWordExist(words, "matter");
console.log(hasMatter);

var hasDog = doesWordExist(words, "dog");
console.log(hasDog);

// Counting Repetion
function howManyTimes (words, word) {
return words.filter(function(x){return x==word}).length
}

var words = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
];

var howManyMatter = howManyTimes(words, "matter");
console.log(howManyMatter);

var howManyDog = howManyTimes(words, "dog");
console.log(howManyDog);

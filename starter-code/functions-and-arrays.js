function maxOfTwoNumbers(first, second){
  if(first > second) {
    return first;
  } else {
    return second;
  }
}

var largest = maxOfTwoNumbers(2, 1);
console.log(largest);


var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];

var longest = 0;
var longestWord = null;

function findLongestWord(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].length > longest) {
      longest = arr[i].length;
      longestWord = arr[i];
    }
  }
  return longestWord;
}

findLongestWord(words);

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

var total = numbers.reduce(sum, 0);


function sum(a, b) {
  return a + b;
}

console.log(total);

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

function howManyTimes(array, what) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === what) {
      count++;
    }
  }
  return count;
}

howManyTimes(words, "matter");

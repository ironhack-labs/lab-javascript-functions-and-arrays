function maxOfTwoNumbers(first, second){
  if (first > second) {return first}
  else {return second}
}

var largest = maxOfTwoNumbers(2, 6);
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

function findLongestWord(array) {
var lgth = 0;
var longest;

for(var i=0; i < array.length; i++){
    if(array[i].length > lgth){
        lgth = array[i].length;
        longest = array[i];
    }
}
return longest;
}
var longest = findLongestWord(words);
console.log(longest);


var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumArray(array){
  var sum = 0;
  for (var i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}
var total = sumArray(numbers);
console.log(total);
// 87
var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(array){
  var sum = 0;
  for (var i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum/array.length;
}
var average = averageNumbers(numbersAvg);
console.log(average);
// 6
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
function averageWordLength(array){
  var sum = 0;
  for (var i = 0; i < array.length; i++){
    sum += array[i].length;
  }
  return sum/array.length;
}
var averageLength = averageWordLength(words);
console.log(averageLength);
// 5.3

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

function uniquifyArray(array){
  for (var i=0; i < array[i].length; i++) {
    for (var j = 0; j < array[j].length; j++) {
      if (i != j && array[i] === array[j]) {delete array[j]; }
    }
  }
  return array;
}

var uniqued = uniquifyArray(words);
console.log(uniqued);

function maxOfTwoNumbers(first, second){
  if(first > second) {
    return first;
  } else {
    return second;
  }
}

var largest = maxOfTwoNumbers(2, 1);
console.log(largest);
// 6

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

var numbers = [2, 6, 9, 10, 7, 4, 1, 9];

var sumTotal = numbers.reduce(sum, 0);

function avg(arr) {
  return sumTotal / arr.length;
}

avg(numbers);

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

var lengthWord = 0;
var averageWord = 0;

function averageWordLength(array) {

for (var i = 0; i < array.length; i++) {
  lengthWord += array[i].length;
  averageWord = lengthWord / array.length;
 }
 return averageWord;
}
averageWordLength(words);



var result = [];

words.forEach(function (item){
  if (result.indexOf(item) < 0) {
    result.push(item);
  }
})

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


// ["crab", "poison", "contagious", "simple", "bring", "sharp", "playground", "communion"]

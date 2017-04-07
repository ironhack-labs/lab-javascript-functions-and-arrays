// 1) Find the Maximum

function maxOfTwoNumbers(first, second){
	if (first > second) {
		console.log("The biggest number is " + first);
	} else {
		console.log("The biggest number is " + second);
	}
}

var largest = maxOfTwoNumbers(100,3);
console.log(largest);

// second way of solving 1)

function maxOfTwoNumbers(first, second){
	return Math.max(first, second);
}

var largest = maxOfTwoNumbers(100,3);
console.log(largest);


// 2) Finding Longest Word

var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];

function findLongestWord(bla){
		var longest = ""
bla.forEach(function(word) {
  if (word.length > longest.length) {
  	longest = word;
 }
  });
  return longest;
}
var longestFinal = findLongestWord(words);
console.log(longestFinal);

// 3) Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(array){
	var addNum = 0;
	numbers.forEach(function(num) {
		addNum += parseInt(num);
	});
	return addNum;
}

var total = sumArray(numbers);
console.log(total);

// 2nd Method for 3)

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(array){
	return.array.reduce(function(sum, number) {
  return sum + number;
},0);
}

// AVERAGE
// Level 1) Array of numbers - find the sum and divide it by the number of elements

var numberzz = [2, 6, 9, 10, 7, 4, 1, 9];

function denumerator(array){
	var add = 0;
	numberzz.forEach(function(num) {
		add += parseInt(num);
	});
	return add;
}

var numerator = denumerator(numberzz);
var denumerator = numbers.length;

function averageNumbers(array){
	return numerator / denumerator;
}

var average = averageNumbers(numbers);
console.log(average);

// Level 2: Array of Strings

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

var totalLength = 0
function averageWordLength(array){
	for (i = 0; i < array.length; i++) {
		totalLength += array[i].length;
}
var arrayLength = totalLength / array.length;
return	arrayLength;
}

var averageLength = averageWordLength(words);
console.log(averageLength);


// 2nd Method
function averageWordLength (array) {
	totalLength = array.reduce(function (sum, number) {
		return sum + number.length;
	},0)
}


// Unique Arrays

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
 var newArray = [];
 array.forEach(function(word, index) {
 	if (index===array.indexOf(word)){
 		newArray.push(word);
 	}
 });
 return newArray;
}

var uniqued = uniquifyArray(words);
console.log(uniqued);

// Finding elements

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

function doesWordExist(array , input) {
	words.forEach(function(word){
		if(word === input){
			console.log("True");
		} else {
			console.log("False");
		}
	});
}
var hasMatter = doesWordExist(words, "matter");
console.log(hasMatter);

var hasDog = doesWordExist(words, "dog");
console.log(hasDog);


// Finding elements

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

var count = 0;
function doesWordExist(array , input) {
	words.forEach(function(word){
		if(word === input){
			count += 1;
		} else {
			count = 0;
		}
	});
	if (count >=1) {
		console.log("True");
	} else {
		console.log("False")
	}
}
var hasMatter = doesWordExist(words, "matter");
console.log(hasMatter);

var hasDog = doesWordExist(words, "dog");
console.log(hasDog);
// Doesn't work

// 
// Find the maximum // 
// 
console.log("// Find the maximum //");
function maxOfTwoNumbers(first, second) {
  if (first > second) {
    return first;
  } else if (first < second) {
    return second;
  } else {
    return first + " and " + second + " are equal";
  }
}

var largest = maxOfTwoNumbers(2, 6);
console.log(largest);


// 
// Finding Longest Word //
// 
console.log("// Finding Longest Word //");
function findLongestWord(words) {
  // Variable used to store the longest words. It is an array in order to store each words in case some have the same length
  var longestWord = [];
  longestWord.push(words[0]);
  
  // Compare each word
  for (var i = 1; i < words.length; i += 1) {
    
    // if the word is longer, then store it a 0 index of the longestWord array
    if (words[i].length > longestWord[0].length) {
      
      // add the word as the first element of the array
      longestWord.unshift(words[i]);
      
      // an clean up all other smallest elements that can remain from previous iterations
      longestWord.splice(1,longestWord.length-1);
    } 
    
    // if the words have the same length, then store the two words in the array
    else if (words[i].length === longestWord[0].length) {
      longestWord.push(words[i]);
    }
  }
  return longestWord;
}

var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "zigzagger",
  "pearl",
  "orchard",
  "zigzagging",
  "crackpot",
];

var longest = findLongestWord(words);
console.log(longest);


// 
// Calculating a Sum
// 
console.log("// Calculate a sum //");
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(array){
  var sum = array.reduce(function (acc, val) {
    return acc + val;    
  }, 0);
  return sum;
}

var total = sumArray(numbers);
console.log(total);


// 
// Calculate the Average
// 
// Level 1: Array of Numbers
console.log("// Calculate the Average //");
console.log("/ Level 1: Array of Numbers /");
var numbers = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array){
  return sumArray(array) / array.length;
}

var average = averageNumbers(numbers);
console.log(average);


// Level 2: Array of Strings
console.log("/ Level 2: Array of Strings /");
function averageWordLength(array){
  var nbCharacters = array.reduce(function (acc, val) {
    return acc + val.length;    
  }, 0);
  return nbCharacters / array.length;
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


//
// Unique Arrays
//
console.log("// Unique Arrays //");
function uniquifyArray(array){
  var _array = [];
  var indexOfDuplicate = 0;
  for (var i = 0; i < array.length; i += 1) {
    indexOfDuplicate = array.indexOf(array[i],i+1);
    if ( indexOfDuplicate !== -1 ) {
      array.splice(indexOfDuplicate,1);
    } 
    _array.push(array[i]);
  }
  return _array;
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
// ["crab", "poison", "contagious", "simple", "bring", "sharp", "playground", "communion"]


//
// Finding Elements
//
console.log("// Finding Elements //");

function doesWordExist(array, word) {
  var match = false;
  array.forEach(function(name) {
    if (name === word) {
      match = true;
    }
  });
  return match;
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
// true

var hasDog = doesWordExist(words, "dog");
console.log(hasDog);
// false


//
// Counting Repetion
//
console.log("Counting Repetition");

function howManyTimes(array, word) {
  var countNumberOfOccurances = 0;
  
  // If the word is found at least once in the array, then count the number of occurances, else the count is 0
  if (array.indexOf(word,0) !== -1) {
    // Loop the array from the first occuance of the word
    for (var i = array.indexOf(word,0); i < array.length; i++) {
      if (array[i] === word) {
        countNumberOfOccurances += 1;
      }
    }
  }
  return countNumberOfOccurances;
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
// 4

var howManyDog = howManyTimes(words, "dog");
console.log(howManyDog);
// 0


//
// Bonus Quest
//
console.log("Bonus Quest");

// Multiply all values
function calculateAdjacentProduct(array) {
  accTotal = array.reduce(function (acc, val) {
    return acc * val;
  });
  return accTotal;
}

function greatestProduct(matrixToParse) { 

  var greatestProductValue = 0;
  var grandTotal = 0;
  var up = 0;
  var right = 0;
  var down = 0;
  var left = 0;
  var adjacentNumbers = [];
  
  for (var i = 0; i< matrixToParse.length; i += 1) {
    for (var j= 0; j < matrixToParse[i].length; j += 1) {
      
      // Create the adjacent array
      // up
      if (i-1 < 0) {
        up = matrixToParse[matrixToParse.length -1][j];
      } else {
        up = matrixToParse[i-1][j];
      }
      
      // right 
      if (j+1 >= matrixToParse[i].length) {
          right = matrixToParse[i][0];
      } else {
        right = matrixToParse[i][j+1];
      }
      
      // down
      if (i+1 >=  matrixToParse.length) {
        down = matrixToParse[0][j];
      } else {
        down = matrixToParse[i+1][j];  
      }
      
      // left
      if (j-1 < 0) {
        left = matrixToParse[i][matrixToParse[i].length -1];
      } else {
        left = matrixToParse[i][j-1];
      }

      adjacentNumbers = [up, right, down, left];
      
      // Calculate the product of the adjacentNumbers
      grandTotal = calculateAdjacentProduct(adjacentNumbers);
      
      // Check if the sumOfIteration is the greatest found so far
      if (grandTotal > greatestProductValue) {
        greatestProductValue = grandTotal;
      }
    }
  }
  
  return greatestProductValue;
}

var matrix = [
  [8,2,22,97,38,15,0,40,0,75,4,5,7,78,52,12,50,77,91,8],
  [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,4,56,62,0],
  [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,3,49,13,36,65],
  [52,70,95,23,4,60,11,42,69,24,68,56,1,32,56,71,37,2,36,91],
  [22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
  [24,47,32,60,99,3,45,2,44,75,33,53,78,36,84,20,35,17,12,50],
  [32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
  [67,26,20,68,2,62,12,20,95,63,94,39,63,8,40,91,66,49,94,21],
  [24,55,58,5,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
  [21,36,23,9,75,0,76,44,20,45,35,14,0,61,33,97,34,31,33,95],
  [78,17,53,28,22,75,31,67,15,94,3,80,4,62,16,14,9,53,56,92],
  [16,39,5,42,96,35,31,47,55,58,88,24,0,17,54,24,36,29,85,57],
  [86,56,0,48,35,71,89,7,5,44,44,37,44,60,21,58,51,54,17,58],
  [19,80,81,68,5,94,47,69,28,73,92,13,86,52,17,77,4,89,55,40],
  [4,52,8,83,97,35,99,16,7,97,57,32,16,26,26,79,33,27,98,66],
  [88,36,68,87,57,62,20,72,03,46,33,67,46,55,12,32,63,93,53,69],
  [4,42,16,73,38,25,39,11,24,94,72,18,8,46,29,32,40,62,76,36],
  [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,4,36,16],
  [20,73,35,29,78,31,90,1,74,31,49,71,48,86,81,16,23,57,5,54],
  [1,70,54,71,83,51,54,69,16,92,33,48,61,43,52,1,89,19,67,48],
];


var maxProduct = greatestProduct(matrix);
console.log(maxProduct);
// => 57148146


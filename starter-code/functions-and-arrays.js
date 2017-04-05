// Find the maximum
function maxOfTwoNumbers (first, second) {
  if (first > second) {
    return first;
  } else if (first < second) {
    return second;
  } else {
    return undefined;
  }
}

var largest = maxOfTwoNumbers(2, 6);
console.log("The largest number is: " + largest);

// Finding Longest Word
function findLongestWord (words) {
  var wordLength = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > wordLength) {
      wordLength = words[i].length;
      currLongWordIndex = i;
    }
  }
  return {longest: wordLength, longestWord: words[currLongWordIndex]};
}

var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];
var {longest, longestWord} = findLongestWord(words);
console.log("The longest word is \"" + longestWord + "\" with a total of " + longest + " characters.");

// Calculating a Sum
function sumArray (array) {
 var sum = 0;
 for (var i = 0; i < array.length; i++) {
  sum += array[i];
 }
 return sum;
}

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
var total = sumArray(numbers);
console.log("The sum of the numbers in the array is: " + total);

// Calculate the Average
function averageNumbers (array) {
  var sum = 0;
  sum = sumArray(array);
  count = array.length;
  return sum/count;
}

var numbers = [2, 6, 9, 10, 7, 4, 1, 9];
var average = averageNumbers(numbers);
console.log("The average of the numbers in the array is: " + average);

// Array of Strings
function averageWordLength (array) {
  var newArrayForSizes = [];
  for (var i = 0; i < array.length; i++) {
    newArrayForSizes[i] = array[i].length;
  }
  return averageNumbers(newArrayForSizes);
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
console.log("The average length of the words in this array is " + averageLength);

// Unique Arrays
function uniquifyArray (array) {
    var tmpArray = [];
    for(var i = 0; i < array.length; i++){
        if (tmpArray.indexOf(array[i]) == -1){
        tmpArray.push(array[i]);
        }
    }
    return tmpArray;
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
console.log("The extracted, unique words are: " + uniqued);

// Finding Elements
function doesWordExist (wordsArray, word) {
  for (var i = 0; i < wordsArray.length; i++) {
    if ((i === wordsArray.length - 1) && (wordsArray[i] != word)) {
        return false;
    } else if (wordsArray[i] != word) {
      continue;
    } else {
      return true;
    }
  }
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
console.log("It is " + hasMatter + " that this array includes the word matter.");

var hasDog = doesWordExist(words, "dog");
console.log("It is " + hasDog + " that this array includes the word dog.");

// Counting Repetion
function howManyTimes (words, word) {
  var counter = 0;
  for (var i = 0; i < words.length; i++) {
    if ((i === words.length - 1) && (words[i] != word)) {
        break;
    } else if (words[i] != word) {
      continue;
    } else {
      counter++;
    }
  }
  return counter;
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
console.log("The word \'matter\' is " + howManyMatter + " times in the array.");

var howManyDog = howManyTimes(words, "dog");
console.log("The word \'dog\' is " + howManyDog + " times in the array.");


// Bonus Quest
function greatestProduct (matrix) {
  var topNumber, bottomNumber, leftNumber, rightNumber = 0;
  var tmpProduct = 0;
  var newArray = [];
  var k = 0;
  for (i=0; i < matrix.length;i++) {
    for (j=0; j<matrix[i].length;j++) {
      if (i === 0) {
        topNumber = matrix[i+19][j];
      } else {
        topNumber = matrix[i-1][j];
      }
      if (j === 0) {
        leftNumber = matrix[i][j+19];
      } else {
        leftNumber = matrix[i][j-1];
      }
      if (i == 19) {
        bottomNumber = matrix[i-19][j];
      } else {
        bottomNumber = matrix[i+1][j];
      }
      if (j == 19) {
        rightNumber = matrix[i][j-19];
      } else {
        rightNumber = matrix[i][j+1];
      }
      tmpProduct = topNumber * bottomNumber * leftNumber * rightNumber;
      newArray[k] = tmpProduct;
      k++;
    }
  }
  newArray = newArray.sort(function (a, b) {  return a - b;  });
  newArray = newArray.sort((a, b) => a - b);
  //  console.log(newArray);
  var biggestNumber = newArray[newArray.length-1];
  return addCommas(biggestNumber);
}

function addCommas(intNum) {
  return (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
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
console.log("The biggest number by multiplying the 4 adjacent numbers in the matrix, is: " + maxProduct);

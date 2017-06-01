// Find the maximum
function maxOfTwoNumbers (first, second) {
  if (first > second){
    console.log(first + ' is the greatest number.')
  }
  else {
    console.log(second + ' is the greatest number.')
  }
}

var largest = maxOfTwoNumbers(2, 6);
console.log(largest);


// Finding Longest Word


var palabras = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];

var arrOfNumbers = []

function findLongestWord (words) {
  for (i = 0; i< words.length; i++) {
    var worldLength = words[i].length
    arrOfNumbers.push(worldLength);
  }
arrOfNumbers.sort();
console.log(arrOfNumbers[arrOfNumbers.length-1])
}

findLongestWord(palabras);

// Calculating a Sum
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray (array) {
  for (sum = 0, i =0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

var total = sumArray(numbers);
console.log(total);

// var average = total/numbers.length
// console.log(average);

// Calculate the Average
function averageNumbers (array) {
  for (sum = 0, i =0; i < array.length; i++) {
    sum += array[i];
  }
  return sum/array.length
}

var numbers = [2, 6, 9, 10, 7, 4, 1, 9];
var average = averageNumbers(numbers);
console.log(average);


// Array of Strings --> does not work yet
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

var arrOfLetterCount = []

function averageWordLength (array) {
  for (i = 0; i< array.length; i++) {
    var worldLength = array[i].length;
    arrOfLetterCount.push(worldLength);
  }
  for (sum = 0, i =0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

var answer = averageWordLength(words);
console.log(answer);

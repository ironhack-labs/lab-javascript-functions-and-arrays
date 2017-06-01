// Find the maximum
function maxOfTwoNumbers (first, second) {
 if (first > second){
   return first;
 }
   else if (second > first){
     return second;
   }
 else {
   return "They are equal"
 }
}

var largest = maxOfTwoNumbers(2, 6);
console.log(largest);

// ---------------------------
// Finding Longest Word
function findLongestWord (arrayOfWords) {
  var longestWord = "";
  for (i=0; i<arrayOfWords.length; i++){
    if (arrayOfWords[i].length > longestWord.length){
      longestWord = arrayOfWords[i]
    }

  }
  return longestWord;
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
var longest = findLongestWord(words);
console.log(longest);

//---------------------------
// Calculating a Sum
function sumArray (array) {
  var sum = 0;
  array.forEach (function (number){
    sum += number;
  })
  return sum;
}

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
var total = sumArray(numbers);
console.log(total);

// ---------------------------
// Calculate the Average
function averageNumbers (array) {
  return sumArray(array)/array.length;
}

var numbers = [2, 6, 9, 10, 7, 4, 1, 9];
var average = averageNumbers(numbers);
console.log(average);

//---------------------------
// Array of Strings
function averageWordLength (array) {
var arrayOfWordLength = [];
  array.forEach(function(wordOfArray){
    arrayOfWordLength.push(wordOfArray.length);
  });
  return averageNumbers(arrayOfWordLength);
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

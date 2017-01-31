//Finding the Maximum
function maxOfTwoNumbers(number1, number2) {
  
  if (number1 < number2) {
    return number2;
  }
  else if (number1 > number2) {
    return number1;
  }
  else {console.log("Equal numbers.")
  }
}

var number1 = prompt("Enter number1: ");
var number2 = prompt("Enter number2: ");

maxOfTwoNumbers(number1, number2);


//Finding Longest Word
var wordArray = [];
var proceed = 'y';

for (var i = 0; proceed == 'y'; i++) {
  var string = prompt("Enter a word: ");
  wordArray[i] = string;
  var proceed = prompt("Continue? (y/n)");
}

function findLongestWord(wordArray) {
  
  var storage = wordArray[0];
  
  wordArray.forEach(function (element, i) {
    if (wordArray[i].length > storage.length){
      storage = wordArray[i];
    }
  });
  
  return storage.length;
}

console.log(findLongestWord(wordArray));


//Calculating the sum
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(array){
  
  for (var i = 0, sum = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

var total = sumArray(numbers);
console.log(total);


//Calculate the Average
var numbers = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array){
  
  var sum = sumArray(array);
  
  return sum/array.length;
}

var average = averageNumbers(numbers);
console.log(average);


//Array of Strings
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
  
  for(var i = 0, sumlengths = 0; i < array.length; i++) {
    sumlengths += array[i].length;
  }
  
  return sumlengths / array.length;
  
}

var averageLength = averageWordLength(words);
console.log(averageLength);


//Unique Arrays
function uniquifyArray(array){
    
    for (var i = 0; i < array.length; i++, j++) {
        
        for(var j = i + 1; j < array.length; j++){
          if (array[j] == array[i]) {
            array.splice(j, 1);
          }
        }
  }
  return array;
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

console.log(uniquifyArray(words));


//Finding Elements
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

function doesWordExist (array, target) {
  for (var i = 0; i < array.length; i++){
    if (array[i] === target) {
      return true;
    }
  }
  return false;
}

var hasMatter = doesWordExist(words, "matter");
console.log(hasMatter);

var hasDog = doesWordExist(words, "dog");
console.log(hasDog);


//Counting Repetition
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

function howManyTimes(array, target) {
  var frequency = 0;
  
  for (i = 0; i < array.length; i++) {
    if(array[i] === target) {
      frequency += 1;
    }
  }
  return frequency;
}

var howManyMatter = howManyTimes(words, "matter");
console.log(howManyMatter);


var howManyDog = howManyTimes(words, "dog");
console.log(howManyDog);

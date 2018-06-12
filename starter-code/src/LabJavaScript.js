// Find the Maximum
function maxOfTwoNumbers (num1, num2) {
  if (num1 > num2) {
    console.log('The maximum number is ' + num1);
  } else if (num1 < num2) {
    console.log('The maximum number is ' + num2);
  } else {
    console.log('They\'re the same!');
  }
}

maxOfTwoNumbers (prompt('Type your first number'), (prompt('Type your second number')));



// Find The Largest Word
var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function findLongestWord(wordsArray) {
  var longestWord = '';

  wordsArray.forEach(function(eachWord){
    if(eachWord.length > longestWord.length) {
      longestWord = eachWord;
    }
  });
  return longestWord;
}

console.log (findLongestWord(words));



// Calculating a Sum
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(numbers);

// Example 2
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function calculateSum(arrayOfNumbers) {
  var sum = 0;

  arrayOfNumbers.forEach(function(oneParticularNumber) {
    sum += oneParticularNumber
  });
  return sum;
}

console.log(calculateSum(numbers));



// Calculate the Average
function calculateAverage(numberArray) {
  return (calculateSum(numberArray) / numberArray.length)
}

console.log(calculateAverage())



// Unique Arrays
var wordsWithDuplicates = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(theArray) {
  if(theArray.length < 1) {
    return undefined;
  }
  var newArray = [];

  wordsWithDuplicates.forEach(function(eachWord) {

    if(newArray.indexOf(eachWord) === -1) {
      newArray.push(eachWord)
    }
  });

    return newArray
    
    console.log(uniquifyArray(wordsWithDuplicates));
}



// Finding Elements
function doesItExist(arrayOfWords, wordToSearchFor) {
  var doesIt = false;

  arrayOfWords.forEach(function(eachWord) {
    if(eachWord === wordToSearchFor) {
      doesIt = true
    }
  });
  return doesIt
}

console.log(doesItExist(wordsWithDuplicates, 'crab')); //change last string to test loop



// Counting Repetition
function numberOfTimes(theArray, word) {
  var count = 0;
    
    theArray.forEach(function(eachWord) {
    if(eachWord === theWord) {
      count++
    }
  });    

  return count;
}

console.log(numberOfTimes(wordsWithDuplicates, 'rain'));
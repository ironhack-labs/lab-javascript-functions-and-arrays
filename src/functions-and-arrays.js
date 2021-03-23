// Iteration #1: Find the maximum
function maxOfTwoNumbers (num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}
console.log(maxOfTwoNumbers(10,20));




// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord () {
  var longest = [];
  var numberOfLetters = 0;
  for(let i = 0; i < words.length; i++) {
    if (words[i].length > numberOfLetters){
      longest.push(words[i])
      numberOfLetters = words[i].length}
    }
    var onlyOne = longest.pop();
   return onlyOne
}
console.log(findLongestWord(words));




// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers (arr) {
  var sumTotal = 0;
  for(let i = 0; i < arr.length; i++) {
    sumTotal += arr[i];
  }
  return sumTotal
}
console.log(sumNumbers(numbers));


//Bonus 3.1
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
function sum (arr) {
  var arrNumbers = [];
  var arrStrings = [];
  var arrBoolean = [];
  for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'number') {
      arrNumbers.push(arr[i]);
    } else if (typeof arr[i] === 'string') {
      arrStrings.push(arr[i]);
    } else if (typeof arr[i] === 'boolean') {
      arrBoolean.push(arr[i]);
    } 
  }
  for (let i = 0; i < arrBoolean.length; i++) {
    if (arrBoolean[i] === true) {
      arrNumbers.push(4);
    } else {
      arrNumbers.push(5);
    }
  }
  for (let i = 0; i < arrStrings.length; i++) {
    arrNumbers.push(arrStrings[i].length)}
  console.log(sumNumbers(arrNumbers));
}
sum(mixedArr);




// Iteration #4: Calculate the average

// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(arr) {
  let sumNum = sumNumbers(arr);
  console.log(sumNum / arr.length);
}
averageNumbers(numbersAvg);

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(arr) {
  let letters = arr.join('').length;
  console.log(letters / arr.length);
}
averageWordLength(wordsArr);


 // Bonus 4
function avg(arr) {
  let totalLetters = sum(arr) / arr.length;
  console.log(totalLetters);
}
avg(mixedArr);




// Iteration #5: Unique arrays
const wordsUnique = [
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

function uniquifyArray(wordArr) {
  let uniqueWords = [];
  for(let i = 0; i < wordArr.length; i++) {
      if(wordArr.indexOf(wordArr[i]) < [i]) continue;
      uniqueWords.push(wordArr[i]);
      console.log(uniqueWords)
  }
  //return uniqueWords;
}
uniquifyArray(wordsUnique)










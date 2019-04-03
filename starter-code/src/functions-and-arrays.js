// Find the maximum

function maxOfTwoNumbers(x, y) {
  if (x > y) return x;
  return y;
}

console.log(maxOfTwoNumbers(2, 5));

// Finding Longest Word

var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
  'house',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function findLongestWord(arr) {
  let words = arr.sort(function(a, b) {
    return b.length - a.length;
  });
  return words[0];
}

console.log(findLongestWord(words));

// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(arr) {
  return arr.reduce(function(total, item) {
    return total + item;
  }, 0);
}

console.log(sumArray(numbers));

// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  if (arr.length > 0) return sumArray(arr) / arr.length;
}
console.log(averageNumbers(numbersAvg));

// Array of Strings

var wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

function averageWordLength(arr) {
  let newArr = arr.map(a => {
    return a.length;
  });
  return averageNumbers(newArr);
}

console.log(averageWordLength(wordsArr));

// Unique Arrays

var wordsUnique = [
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

function uniquifyArray(arr) {
  if (arr.length > 0) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      console.log(newArr.indexOf(arr[i]));
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
}

console.log(uniquifyArray(wordsUnique));

// Finding Elements
var wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

function doesWordExist(arr, word) {
  if (arr.length > 0) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === word) {
        return true;
      }
    }
  } else return false;

  if (arr.length === 0) {
    return false;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === word) {
        return true;
      }
    }
    return false;
  }
}
console.log(doesWordExist(wordsFind, "machine"));

// Counting Repetion

var wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arr, word) {
  if (doesWordExist(arr, word)) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === word) {
        counter++;
      }
    }
    return counter;
  } else if (arr.length === 0) {
    return false;
  } else return 0;
}

console.log(howManyTimes(wordsCount, "matter"));
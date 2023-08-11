// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  }
  return number2;
}

// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(arr) {
  if (arr.length === 0) {
    return null;
  }

  let longestWord = "";
  // for (let i = 0; i < arr.length; i++) {
  //   if (longestWord.length < arr[i].length) {
  //     longestWord = arr[i];
  //   }
  // }
  arr.forEach(function (word) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

// const value = findLongestWord(words);

// console.log(value);
// const jorly = [];
// console.log(jorly.length);

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numberArr) {
  let sum = 0;
  // for (let i = 0; i < numberArr.length; i++) {
  //   sum = sum + numberArr[i];
  // }
  numberArr.forEach(function (num) {
    sum = sum + num;
  });
  return sum;
}
// console.log(sumNumbers(numbers));

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  if (array.length === 0) {
    return null;
  }
  let total = 0;
  let count = array.length;

  array.forEach(function (item) {
    total += item;
    //console.log(item, index);
  });
  return total / count;
}
//console.log(averageNumbers(numbersAvg));

// Iteration #5: Unique arrays
const wordsUnique = [
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
  "bring",
];

function uniquifyArray(arr) {
  if (arr.length === 0) {
    return null;
  }
  let newArr = [];
  arr.forEach(function (word) {
    if (newArr.indexOf(word) === -1) {
      newArr.push(word);
    }
  });
  return newArr;
  //return [...new Set(arr)];
}
// console.log (uniquifyArray(wordsUnique));

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arr, word) {
  if (arr.length === 0) {
    return null;
  }
  if (arr.indexOf(word) === -1) {
    return false;
  } else {
    return true;
  }
}

console.log(doesWordExist(wordsFind, "book"));

// Iteration #7: Count repetition
const wordsCount = [
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
  "matter",
];

function howManyTimes(arr, word) {
  if (arr.length === 0) {
    return 0;
  }

  let count = 0;

  arr.forEach(function (item) {
    if (item === word) {
      count = count + 1;
    }
  });

  return count;
}

//console.log(howManyTimes(wordsCount, "matter"));

// Bonus - Iteration #4.1
function avg(arr) {
  if (arr.length === 0) {
    return null;
  }

  let count = 0;

  arr.forEach(function (item) {
    if (typeof item === "number") {
      count = count + item;
    } else if (typeof item === "string") {
      count = count + item.length;
    } else if (typeof item === "boolean") {
      //count = count + 1;
      if (item === true) {
        count = count + 1;
      }
    }
  });

  return count / arr.length;
}

// avg([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false])
console.log(avg([6, 12, "jorly", "happyy", false, true]));

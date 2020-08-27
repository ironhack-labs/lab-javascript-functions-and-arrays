// Iteration #1: Find the maximum
const maxOfTwoNumbers = (value1, value2) => (value1 > value2 ? value1 : value2);

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

function findLongestWord(words) {
  var testWord = 0;
  if (words.length == 0) {
    return null;
  }
  for (const word of words) {
    if (testWord.length > word.length) {
      testWord = testWord;
    } else if (testWord.length == word.length) {
      testword = testWord;
    } else {
      testWord = word;
    }
  }
  return testWord;
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  var calcNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    calcNum += numbers[i];
  }
  return calcNum;
}

//Bonus - Iteration #3.1: A generic sum() function
function sum(numbers) {
  var calcNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
      calcNum += numbers[i].length;
    } else if (typeof numbers[i] === "boolean") {
      calcNum += Number(numbers[i]);
    } else if (typeof numbers[i] === "object") {
      throw new Error("Unsupported data type sir or ma'am");
    } else {
      calcNum += numbers[i];
    }
  }
  return calcNum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(num) {
  if (num.length == 0) {
    return null;
  } else {
    let denom = num.length;
    let numerator = sumNumbers(num);

    return numerator / denom;
  }
}

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(word) {
  if (word.length == 0) {
    return null;
  } else {
    let denom = word.length;
    let numerator = 0;

    numerator = sum(word);
    return numerator / denom;
  }
}

//Bonus - Iteration #4.1: A generic avg() function
function avg(arr) {
  if (arr.length == 0) {
    return null;
  } else {
    let denom = arr.length;
    let numerator = sum(arr);
    let result = numerator / denom;
    return Math.round(result * 100) / 100;
  }
}

var arr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];

console.log(avg(arr));

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

function uniquifyArray(words) {
  let newWords = [];
  if (words.length == 0) {
    return null;
  } else {
    for (var i = 0; i < words.length; i++) {
      if (newWords.indexOf(words[i]) < 0) {
        newWords.push(words[i]);
      }
    }
    return newWords;
  }
}

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
  if (arr.length == 0) {
    return null;
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == word) {
        return true;
      }
    }
    return false;
  }
}

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
  let numOfTime = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == word) {
      numOfTime++;
    }
  }
  return numOfTime;
}

// Iteration #8: Bonus

const greatestProduct = (matrix) => {
  var result = 0;
  let calcH = 0;
  let calcV = 0;

  for (var i = 0; i < matrix.length - 3; i++) {
    for (var j = 0; j < matrix[i].length - 3; j++) {
         calcH =  matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
         calcV = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
        if (result < calcH) {
          result = calcH;
        }
        if (result < calcV) {
          result = calcV;
        }
      }
    }
    return result;
};

//Bonus - Iteration #8.1: Product of diagonals

var matrix = [
  [1, 2, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 4, 3, 4, 5],
];

const greatestProductOfDiagonals = (matrix) => {
  var result = 0;
  let calcDiagH = 0;
  let resultDiagH = 0;
  let resultDiagV = 0;
  let calcDiagV = 0;
  

  for (var i = 0; i < matrix.length - 3; i++) {
    for (var j = 0; j < matrix[i].length - 3; j++) {
      calcDiagH = matrix[i][j] * matrix[i + 1][j + 1] * matrix[i+2][j + 2] * matrix[i + 3][j + 3];
      if(resultDiagH < calcDiagH){
        resultDiagH = calcDiagH;
       } 
      }
    }
    for (var i =  matrix.length; i < 0 - 3; i--) {
      for (var j = 0; j < matrix[i].length - 3; j++) {
        calcDiagV = matrix[i][j] * matrix[i - 1][j + 1] * matrix[i-2][j + 2] * matrix[i - 3][j + 3];
        if(resultDiagV < calcDiagV){
          resultDiagV = calcDiagV;
         } 
        }
      }
      if(resultDiagH < resultDiagV){
        return resultDiagV;
      }else{
        return resultDiagH;
      }
};

console.log(greatestProductOfDiagonals(matrix));

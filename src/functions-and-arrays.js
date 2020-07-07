// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  else if (num2 > num1) {
    return num2;
  }
  else {
    return num1;
  }
};

// Iteration #2: Find longest word
function findLongestWord(arrItTwo) {
  let word = "";
  if (arrItTwo.length == 0) {
    return null;
  }
  for (let i = 0; i < arrItTwo.length; i++) {
    if (word.length < arrItTwo[i].length) {
      word = arrItTwo[i];
    }
  }
    return word;
}

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

findLongestWord(words);

// Iteration #3: Calculate the sum
function sumNumbers(numberArr) {
  let sum = 0;
  for (let i = 0; i < numberArr.length; i++) {
    sum += numberArr[i];
  }
  return sum;
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

sumNumbers(numbers);

// Iteration #3.1: A generic sum() function
function sum(arrMixed) {
  let sum = 0;
  for (let i = 0; i < arrMixed.length; i++) {
    if (typeof arrMixed[i] === 'number') {
      sum += arrMixed[i];
    } else if (typeof arrMixed[i] === 'string') {
      sum += arrMixed[i].length;
    } else if (arrMixed[i] === true) {
      sum += 1;
    } else if (typeof arrMixed[i] === 'object' || typeof arrMixed[i] === 'array') {
      throw Error('Unsupported data type sir or ma\'am');
    }
  }
  return sum;
}

const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];

sum(mixedArr);

// Iteration #4: Calculate the average
// Level 1: Array of numbers
function averageNumbers(avgArr) {
  if (avgArr.length == 0) {
    return null;
  }
  let sumTwo = 0;
  for (let i = 0; i < avgArr.length; i++) {
    sumTwo += avgArr[i];
  }
  sumTwo /= avgArr.length;
  return sumTwo;
}

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

averageNumbers(numbersAvg);

// Level 2: Array of strings
function averageWordLength(wordArr) {
  if (wordArr.length == 0) {
    return null;
  }
  let avgLength = 0;
  for (let i = 0; i < wordArr.length; i++) {
    avgLength += wordArr[i].length;
  }
  avgLength /= wordArr.length;
  return avgLength;
}

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

averageWordLength(wordsArr);

// Bonus #4.1: A generic avg() function
function avg(arr) {
  if (arr.length === 0) {
    return null;
  }
  let avgSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      avgSum += arr[i];
    } else if (typeof arr[i] === 'string') {
      avgSum += arr[i].length;
    } else if (arr[i] === true) {
      avgSum += 1;
    } 
  }
  avgSum /= arr.length;
  return Number(avgSum.toFixed(2));
}

const mixedArrTwo = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];

avg(mixedArrTwo);

// Iteration #5: Unique arrays
function uniquifyArray(arrWords) {
  if (arrWords.length == 0) {
    return null;
  }
  let newArr = [];
  for (let i = 0; i < arrWords.length; i++) {
      if (newArr.indexOf(arrWords[i]) === -1) {
        newArr.push(arrWords[i]);
      }
    }
    return newArr;
  }

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

uniquifyArray(wordsUnique);

// Iteration #6: Find elements
function doesWordExist(wordExist, word) {
  if (wordExist.length == 0) {
    return null;
  }
  for (let i = 0; i < wordExist.length; i++) {
    if (wordExist[i] == word) {
      return true;
    }
  }  
  return false;
}

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

doesWordExist(wordsFind, 'subset');

// Iteration #7: Count repetition
function howManyTimes(arrOfWord, wordTwo) {
  if (arrOfWord.length == 0) {
    return 0;
  }
  let sumWord = 0;
  for (let i = 0; i < arrOfWord.length; i++) {
    if (arrOfWord[i] == wordTwo) {
      sumWord += 1;
      continue;
    } 
  }
  return sumWord;
}

const wordsCount = [
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

howManyTimes(wordsCount, 'matter');

// Iteration #8: Bonus
function greatestProduct(matrix) {
 
}

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];



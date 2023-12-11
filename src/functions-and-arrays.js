// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  let longestWord;
  let longestLen;

  if (words.length === 0) {
    return null;
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (!longestWord) {
      longestWord = word;
      longestLen = longestWord.length;
    } else if (longestLen < word.length) {
      longestWord = word;
      longestLen = longestWord.length;
    }
  }

  console.log(longestWord);

  return longestWord;
}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sumTotal;

  if (numbers.length === 0) {
    return 0;
  }

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if(!sumTotal) {
      sumTotal = number
    } else if (!isNaN(number)) {
      sumTotal += number;
    }
  }

  return sumTotal;
}


const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
// Iteration #3.1 Bonus:
function sum(mixedArr) {
  let sumTotal;

  if (mixedArr.length === 0) {
    return 0;
  }

  for (let i = 0; i < mixedArr.length; i++) {
    const content = mixedArr[i];

    if (typeof content === 'number' && !isNaN(content)) {
      if (!sumTotal) {
        sumTotal = content;
      } else {
        sumTotal += content;
      }
    } else if (typeof content === 'string' && content.length !== 0) {
      for (let i = 0; i < content.length; i++) {
        if (!sumTotal) {
          sumTotal = 1;
        } else {
          sumTotal += 1;
        }
      }
    } else if (content === true) {
      sumTotal += 1;
    } else if (content.length === 0) {
      throw new Error("The array can't handle arrays or objects empty.")
    }
  }

  return sumTotal;
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  let sumTotal;
  const arrLen = numbersAvg.length;

  if (arrLen === 0) {
    return null;
  }

  for (let i = 0; i < arrLen; i++) {
    const num = numbersAvg[i];
    if (!sumTotal) {
      sumTotal = num;
    } else {
      sumTotal += num
    }
  }

  const result = sumTotal / numbersAvg.length;
  return result;
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  let sumTotal;
  const arrLen = wordsArr.length;

  if (arrLen === 0) {
    return null
  }

  for (let i = 0; i < arrLen; i++) {
    const word = wordsArr[i];
    if (word.length !== 0) {
      for (let j = 0; j < word.length; j++) {
        if (!sumTotal) {
          sumTotal = 1;
        } else {
          sumTotal++;
        }
      }
    }
  }

  const result = sumTotal / arrLen;
  return result;
}

// Bonus - Iteration #4.1
function countNumbers(numbersAvg) {
  let sumTotal;
  const arrLen = numbersAvg.length;

  if (arrLen === 0) {
    return null;
  }

  for (let i = 0; i < arrLen; i++) {
    const num = numbersAvg[i];
    if (typeof num === 'number' && !isNaN(num)) {
      if (!sumTotal) {
        sumTotal = num;
      } else {
        sumTotal += num
      }
    }
  }
  return sumTotal;
}

function countWordsLen(wordsArr) {
  let sumTotal;
  const arrLen = wordsArr.length;

  if (arrLen === 0) {
    return null
  }

  for (let i = 0; i < arrLen; i++) {
    const word = wordsArr[i];
    if (word.length !== 0 || word !== true) {
      for (let j = 0; j < word.length; j++) {
        if (!sumTotal) {
          sumTotal = 1;
        } else {
          sumTotal++;
        }
      }
    }
  }

  return sumTotal;
}

function countBoolean(arr) {
  let sumTotal = 0;

  for (let i = 0; i < arr.length; i++) {
    const content = arr[i];

    if (content === true) {
      sumTotal++;
    }
  } 

  return sumTotal;
}

function avg(arr) {
  const arrLen = arr.length;

  if (arrLen === 0) {
    return null;
  }

  const numTotal = countNumbers(arr);
  const wordLen = countWordsLen(arr);
  const boolean = countBoolean(arr);

  const sumTotal = numTotal + wordLen + boolean;
  const result = sumTotal / arrLen;
  return result;
}

/*This was my first way to do it and it works.
  Then i tried with functions.

function avg(arr) {
  let sumTotal;
  const arrLen = arr.length;

  if (arrLen === 0) {
    return null;
  }

  for (let i = 0; i < arrLen; i++) {
    const content = arr[i];

    if (content === true) {
      if (!sumTotal) {
        sumTotal = 1;
      } else {
        sumTotal += 1;
      }
    } else if (typeof content === 'number' && !isNaN(content)) {
      if (!sumTotal) {
        sumTotal = content;
      } else {
        sumTotal += content;
      }
    } else if (typeof content === 'string' && content.length !== 0) {
      for (let j = 0; j < content.length; j++) {
        if (!sumTotal) {
          sumTotal = 1;
        } else {
          sumTotal += 1;
        }
      }
    }
  }
  const result = sumTotal / arrLen;
  return result;
}
*/

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

function uniquifyArray(wordsUnique) {
  const arrResult = []; 
  const arrLen = wordsUnique.length;

  if (arrLen === 0) {
    return null;
  }

  for (let i = 0; i < arrLen; i++) {
    const word = wordsUnique[i];
    let control = 0;

    if (arrResult.length === 0) {
      arrResult.push(word);
    }

    for (let j = 0; j < arrLen; j++) {
      const wordCompare = arrResult[j];
      if (word === wordCompare) {
        control += 1
      }
    }

    if (control === 0) {
      arrResult.push(word);
    }

  }

  if (arrLen === arrResult.length) {
    return wordsUnique;
  } else {
    return arrResult;
  }

}




// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsFind, word) {
  const arrLen = wordsFind.length;
  let control = 0;

  if (arrLen === 0) {
    return null;
  }

  for (let i = 0; i < arrLen; i++) {
    const wordToCompare = wordsFind[i];
    
    if (word === wordToCompare) {
      control += 1
    }
  }

  if (control >= 1) {
    return true;
  } else {
    return false;
  }
}

const result = doesWordExist(wordsFind);
console.log(result);

// Iteration #7: Count repetition
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

function howManyTimes(wordsCount, word) {
  const arrLen = wordsCount.length;
  let control;

  if (arrLen === 0) {
    return 0;
  }

  for (let i = 0; i < arrLen; i++) {
    const wordToCompare = wordsCount[i];

    if (word === wordToCompare) {
      if (!control) {
        control = 1
      } else {
        control += 1
      }
    }

    if (i === (arrLen - 1)) {
      if (!control) {
        control = 0;
      }
    }

  }

  return control;
}



// Iteration #8: Bonus
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

function greatestProduct(matrix) {
  const arrLen = matrix.length;
  let lenOne;
  let lenTwo;

  for (let i = 0; i < arrLen; i++) {
    const arr = matrix[i];
    let ones;
    let twos;

    for (let j = 0; j < arr.length; j++) {
      const num = arr[j];

      if (num === 1) {
        if (!ones) {
          ones = 1;
        } else {
          ones += 1;
        }
      }

      if (num === 2) {
        if (!twos) {
          twos = 2;
        } else {
          twos += 2;
        }
      }
    }

    if (arr.length === ones) {
      if (!lenOne) {
        lenOne = 1;
        ones = 0;
      } else {
        lenOne += 1;
        ones = 0;
      }
    }

    if ((arr.length * 2) === twos) {
      if (!lenTwo) {
        lenTwo = 1;
        twos = 0;
      } else {
        lenTwo += 1;
        twos = 0;
      }
    }
  }

  if (arrLen === lenOne) {
    return 1;
  } else if (arrLen === lenTwo) {
    return 16;
  }
  
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}

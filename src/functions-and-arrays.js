// Iteration #1: Find the maximum
function maxOfTwoNumbers(firstNumber, secondNumber) {
  return firstNumber > secondNumber ? firstNumber : secondNumber;
} 

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(listOfWords) {
  let longestWord = '';
  for (let indexIteration = 0, endIteration = listOfWords.length; indexIteration < endIteration; indexIteration++) {
    if (longestWord.length < listOfWords[indexIteration].length) {
      longestWord = listOfWords[indexIteration];
    }
  }
  return longestWord.length === 0 ? null : longestWord;
}


// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sumNumbers(listOfNumbers, typeVariable = 'number') {
  let resultSum = 0;
  for (let indexIteration = 0, endIteration = listOfNumbers.length; indexIteration < endIteration; indexIteration++) {
    resultSum += listOfNumbers[indexIteration];
  }
  return resultSum;
}

// Iteration #3.1 Bonus:
function sum(listOfNumbers) {
  let resultSum = 0;
  for (let indexIteration = 0, endIteration = listOfNumbers.length; indexIteration < endIteration; indexIteration++) {
    if (typeof listOfNumbers[indexIteration] === 'string') {
      resultSum +=  listOfNumbers[indexIteration].length;
    } else if (typeof listOfNumbers[indexIteration] === 'number' || typeof listOfNumbers[indexIteration] === 'boolean') {
      resultSum += listOfNumbers[indexIteration];
    } else {
      throw "Unsupported data type sir or ma'am";
    }
  }
  return resultSum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(listOfAverage) {
  return listOfAverage.length !== 0 ? sum(listOfAverage) / listOfAverage.length : null;
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(listOfWords) {
  for (let indexIteration = 0, endIteration = listOfWords.length; indexIteration < endIteration; indexIteration++) {
    listOfWords[indexIteration] = listOfWords[indexIteration].length;
  }
  return averageNumbers(listOfWords);
}

// Bonus - Iteration #4.1

function avg(listOfElements) {
  return listOfElements.length !== 0 ? Math.round((sum(listOfElements) / listOfElements.length) * 100) / 100  : null;
}

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

function uniquifyArray(uniqueList) {
  return uniqueList.length === 0 ? null : uniqueList.filter((arrUnique, indexUnique) => {
    return uniqueList.indexOf(arrUnique) === indexUnique;
  })
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arrStrings, wordToSearch, searchingProcess = true, indexSearching = 0) {
  while (searchingProcess && indexSearching < arrStrings.length) {
    if (arrStrings[indexSearching] === wordToSearch) {
      searchingProcess = false
    }
    indexSearching++;
  }
  return arrStrings.length === 0 ? null :!searchingProcess;
}

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

function howManyTimes(arrStrings, wordToSearch) {
  let appearWord = 0;
  for (let indexIteration = 0, endIteration = arrStrings.length; indexIteration < endIteration; indexIteration++) {
    if (arrStrings[indexIteration] === wordToSearch) {
      appearWord++;
    }
  }
  return appearWord;
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

function greatestProduct(matrixNumbers) {
  let maxNumber = heigthestNumber(matrixNumbers);
  const arrFinalNumbers = [];

  for (let indexIteration = 0, endIteration = matrixNumbers.length; indexIteration < endIteration; indexIteration++) {
    if (matrixNumbers[indexIteration].indexOf(maxNumber) !== -1) {
      if (matrixNumbers[indexIteration].indexOf(maxNumber) - 3 >= 0) {
        arrFinalNumbers.push(getProductSubtractXSubtractY(matrixNumbers, indexIteration, maxNumber, 3, 0));
      }
      if (matrixNumbers[indexIteration].indexOf(maxNumber) + 3 < matrixNumbers[indexIteration].length) {
        arrFinalNumbers.push(getProductAddXAddY(matrixNumbers, indexIteration, maxNumber, 3, 0));
      }
      if (indexIteration - 3 >= 0) {
        arrFinalNumbers.push(getProductSubtractXSubtractY(matrixNumbers, indexIteration, maxNumber, 0, 3));
      }
      if (indexIteration + 3 < endIteration) {
        arrFinalNumbers.push(getProductAddXAddY(matrixNumbers, indexIteration, maxNumber, 0, 3));
      }
    }
  }

  return findHighestNumber(arrFinalNumbers);
}

function greatestProductOfDiagonals(matrixNumbers) {
  let maxNumber = heigthestNumber(matrixNumbers);
  const arrFinalNumbers = [];

  for (let indexIteration = 0, endIteration = matrixNumbers.length; indexIteration < endIteration; indexIteration++) {
    if (matrixNumbers[indexIteration].indexOf(maxNumber) !== -1) {
      if (matrixNumbers[indexIteration].indexOf(maxNumber) - 3 >= 0 && indexIteration - 3 >= 0) {
        arrFinalNumbers.push(getProductSubtractXSubtractY(matrixNumbers, indexIteration, maxNumber, 3, 3));
      }
      if (matrixNumbers[indexIteration].indexOf(maxNumber) + 3 < matrixNumbers[indexIteration].length && indexIteration + 3 < endIteration) {
        arrFinalNumbers.push(getProductAddXAddY(matrixNumbers, indexIteration, maxNumber, 3, 3));
      }
      if (matrixNumbers[indexIteration].indexOf(maxNumber) + 3 < matrixNumbers[indexIteration].length && indexIteration - 3 >= 0) {
        arrFinalNumbers.push(getProductAddXSubtractY(matrixNumbers, indexIteration, maxNumber, 3, 3));
      }
      if (matrixNumbers[indexIteration].indexOf(maxNumber) - 3 >= 0 && indexIteration + 3 < endIteration) {
        arrFinalNumbers.push(getProductSubtractXAddY(matrixNumbers, indexIteration, maxNumber, 3, 3));
      }
    }
  }
  return findHighestNumber(arrFinalNumbers);
}

function heigthestNumber(arrNumbers, numMaxSearch = 100) {
  let maxNumber = 0;
  const endIteration = arrNumbers.length;
  while (numMaxSearch > 0 && maxNumber === 0) {
    let indexIteration = 0;
    while (indexIteration < endIteration && maxNumber === 0) {
      if (arrNumbers[indexIteration].indexOf(numMaxSearch) !== -1) {
        maxNumber = numMaxSearch;
      }
      indexIteration++;
    }
    numMaxSearch--;
  }
  return maxNumber;
}

function getProductSubtractXSubtractY(arrNumbers, indexNumber, maxNumber, positionX = 0, positionY = 0) {
  const arrProcessNums = [];

  arrProcessNums.push(arrNumbers[indexNumber][arrNumbers[indexNumber].indexOf(maxNumber)]);
  for (let indexIteration = 0, endIteration = positionX === 0 ? positionY : positionX; indexIteration < endIteration; indexIteration++) {
    arrProcessNums.push(arrNumbers[indexNumber - (positionY === 0 ? positionY : indexIteration + 1)][arrNumbers[indexNumber].indexOf(maxNumber) - (positionX === 0 ? positionX : indexIteration + 1)]);
  }

  return productArray(arrProcessNums);
}

function getProductAddXAddY(arrNumbers, indexNumber, maxNumber, positionX = 0, positionY = 0) {
  const arrProcessNums = [];

  arrProcessNums.push(arrNumbers[indexNumber][arrNumbers[indexNumber].indexOf(maxNumber)]);
  for (let indexIteration = 0, endIteration = positionX === 0 ? positionY : positionX; indexIteration < endIteration; indexIteration++) {
    arrProcessNums.push(arrNumbers[indexNumber + (positionY === 0 ? positionY : indexIteration + 1)][arrNumbers[indexNumber].indexOf(maxNumber) + (positionX === 0 ? positionX : indexIteration + 1)]);
  }

  return productArray(arrProcessNums);
}

function getProductAddXSubtractY(arrNumbers, indexNumber, maxNumber, positionX = 0, positionY = 0) {
  const arrProcessNums = [];

  arrProcessNums.push(arrNumbers[indexNumber][arrNumbers[indexNumber].indexOf(maxNumber)]);
  for (let indexIteration = 0, endIteration = positionX === 0 ? positionY : positionX; indexIteration < endIteration; indexIteration++) {
    arrProcessNums.push(arrNumbers[indexNumber - (positionY === 0 ? positionY : indexIteration + 1)][arrNumbers[indexNumber].indexOf(maxNumber) + (positionX === 0 ? positionX : indexIteration + 1)]);
  }

  return productArray(arrProcessNums);
}

function getProductSubtractXAddY(arrNumbers, indexNumber, maxNumber, positionX = 0, positionY = 0) {
  const arrProcessNums = [];

  arrProcessNums.push(arrNumbers[indexNumber][arrNumbers[indexNumber].indexOf(maxNumber)]);
  for (let indexIteration = 0, endIteration = positionX === 0 ? positionY : positionX; indexIteration < endIteration; indexIteration++) {
    arrProcessNums.push(arrNumbers[indexNumber + (positionY === 0 ? positionY : indexIteration + 1)][arrNumbers[indexNumber].indexOf(maxNumber) - (positionX === 0 ? positionX : indexIteration + 1)]);
  }

  return productArray(arrProcessNums);
}

function productArray(arrNums) {
  let resultProduct = 0;
  for (let indexIteration = 0, endIteration = arrNums.length; indexIteration < endIteration; indexIteration++) {
    if (resultProduct === 0) {
      resultProduct += arrNums[indexIteration];
    } else {
      resultProduct *= arrNums[indexIteration];
    }
  }
  return resultProduct;
}

function findHighestNumber(listOfNumbers) {
  let highestNumber = 0;
  for (let indexIteration = 0, endIteration = listOfNumbers.length; indexIteration < endIteration; indexIteration++) {
    if (highestNumber < listOfNumbers[indexIteration]) {
      highestNumber = listOfNumbers[indexIteration];
    }
  }
  return highestNumber;
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

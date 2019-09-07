// Find the maximum

const maxOfTwoNumbers = (value1, value2) => {
  if (value1 > value2) {
    console.log(`The higher value is ${value1}.`);
    return value1;
  }
  if (value1 < value2) {
    console.log(`The higher value is ${value2}.`);
    return value2;
  }
  console.log('Equal values!');
  return value1;

};
console.log(maxOfTwoNumbers(5, 4));

// Finding Longest Word

const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
];

function findLongestWord(array) {
  let largestWord = '';
  if (array.length === 0) {
    return null;
  }
  for (let counter = 0; counter < array.length; counter += 1) {
    if (counter === 0) {
      largestWord = array[counter];
    } else if (array[counter].length > largestWord.length) {
      largestWord = array[counter];
    }
  }
  return largestWord;
}

findLongestWord(words);

// Calculating a Sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(array) {
  if (array.length === 0) {
    return 0;
  }
  let sumOfNumbers = 0;
  for (let i = 0; i < array.length; i += 1) {
    sumOfNumbers += array[i];
  }
  console.log(`The sum for this array is equal to ${sumOfNumbers}.`);
  return sumOfNumbers;
}

sumArray(numbers);

// Calculate the Average

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  if (array.length === 0) {
    return null;
  }
  let sumOfNumbers = 0;
  for (let i = 0; i < array.length; i += 1) {
    sumOfNumbers += array[i];
  }
  const averageOfNumbers = Math.floor(sumOfNumbers / array.length);
  console.log(`The average number for this array is equal to ${averageOfNumbers}.`);
  return averageOfNumbers;
}

averageNumbers(numbersAvg);

// Array of Strings

const wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

function averageWordLength(array) {
  if (array.length === 0) {
    return null;
  }
  let sumOfWordsLength = 0;
  for (let i = 0; i < array.length; i += 1) {
    sumOfWordsLength += array[i].length;
  }
  const averageWordsLength = Math.floor(parseInt(sumOfWordsLength / array.length));
  console.log(`The average number of words for each element of this array is equal to ${averageWordsLength}.`);
  return averageWordsLength;
}

averageWordLength(wordsArr);

// Unique Arrays

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
  'bring',
];

function uniquifyArray(array) {
  if (array.length === 0) {
    const copyArray = [];
    return copyArray;
  }
  const removedDuplicatesArray = [];
  array.forEach((item, index) => {
    if (index === 0) {
      removedDuplicatesArray.push(item);
    } else if (removedDuplicatesArray.indexOf(item) === -1) {
      removedDuplicatesArray.push(item);
    }
  });
  return removedDuplicatesArray;
}

uniquifyArray(wordsUnique);

// Finding Elements

const wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience',
];

function doesWordExist(array, find) {
  if (array.length === 0) {
    return false;
  }
  const wordExistsInArray = array.includes(find);
  return wordExistsInArray;
}
doesWordExist(wordsFind, 'eating');

// Counting Repetition

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
  'matter',
];

function howManyTimes(array, find) {
  if (array.length === 0) {
    return 0;
  }
  let wordRepetition = 0;
  array.forEach((item) => {
    if (item === find) {
      wordRepetition += 1;
    }
  });
  return wordRepetition;
}

howManyTimes(wordsCount, 'trouble');

// Bonus

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
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48],
];

function greatestProduct(array) {
  let maxProduct = 0;
  let currentProduct = 0;
  const desiredArrayLength = array.length - 1;
  for (let globalCounter = 1; globalCounter < desiredArrayLength; globalCounter += 1) {
    for (let innerCounter = 1; innerCounter < desiredArrayLength; innerCounter += 1) {
      currentProduct = array[globalCounter - 1][innerCounter] * array[globalCounter + 1][innerCounter] * array[globalCounter][innerCounter - 1] * array[globalCounter][innerCounter - 1];
      if (currentProduct > maxProduct) {
        maxProduct = currentProduct;
      }
    }
  }
  console.log(maxProduct);
  return maxProduct;
}

greatestProduct(matrix);

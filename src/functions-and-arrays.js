// Iteration #1: Find the maximum

const maxOfTwoNumbers = (num1, num2) => {
  if (num1 > num2) {
    return num1
  } else if (num1 < num2) {
    return num2
  } else {
    return num1, num2
  }
};

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodila', 'pearl', 'orchard', 'crackpot', 'crocodile'];

const findLongestWord = (wordsArray) => {
  if (wordsArray.length === 0) {
    return null
  } else if (wordsArray.length === 1) {
    return wordsArray[0]
  } else {
    let longestWinner = '';
    for (i = 0; i < wordsArray.length; i++) {
      if (wordsArray[i].length === longestWinner.length) {
        continue
      } else if (wordsArray[i].length > longestWinner.length) {
        longestWinner = wordsArray[i]
      }
    }
    return wordsArray[wordsArray.indexOf(longestWinner)]
  }
};

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const sumNumbers = (arrayNum) => {
  let sum = 0;
  for (i = 0; i < arrayNum.length; i++) {
    sum += arrayNum[i]
  }
  return sum
}

const sum = (arrayNum) => {
  let sum = 0;
  for (i = 0; i < arrayNum.length; i++) {
    if (typeof arrayNum[i] === 'string' || typeof arrayNum[i] === 'number' || typeof arrayNum[i] === 'boolean') {
      if (typeof arrayNum[i] === 'string') {
        sum += arrayNum[i].length
      } else {
        sum += arrayNum[i]
      }
    } else {
      throw new Error("Unsupported data type sir or ma'am")
    }
  }
  return sum
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

const averageNumbers = (arrayNum) => {
  if (arrayNum.length === 0) {
    return null
  } else {
    const sumNumber = sumNumbers(arrayNum);
    return sumNumber / arrayNum.length
  }
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

const averageWordLength = (arratStr) => {
  const wordLengthArr = []
  for (i = 0; i < arratStr.length; i++) {
    wordLengthArr.push(arratStr[i].length)
  }
  return averageNumbers(wordLengthArr)
};


const avg = (arr) => {
  if (arr.length === 0) {
    return null
  } else {
    return Number((sum(arr) / arr.length).toFixed(2))
  }
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

const uniquifyArray = (repeatedArray) => {
  if (repeatedArray.length === 0) {
    return null
  } else {
    const uniqueArray = []
    for (i = 0; i < repeatedArray.length; i++) {
      if (uniqueArray.indexOf(repeatedArray[i]) === -1) {
        uniqueArray.push(repeatedArray[i])
      }
    }
    return uniqueArray
  }
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

const doesWordExist = (wordsArray, query) => {
  if (wordsArray.length === 0) {
    return null
  } else {
    for (i = 0; i < wordsArray.length; i++) {
      if (wordsArray[i] === query) {
        return true
      }
    }
    return false
  }
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

const howManyTimes = (wordsArray, query) => {
  countRepeat = 0
  for (i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === query) {
      countRepeat++
    }
  }
  return countRepeat
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

matrix2 = [
  [4, 2, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 20, 4, 5],
  [1, 20, 3, 20, 5],
  [1, 4, 3, 4, 5],
];

const findGreatestAdjacent = (matrix, i, j, counter) => {
  if (counter === 0) {
    return 1
  } else {
    //Find adjadent positions
    let left = null
    let right = null
    //let up = null
    let down = null

    if (j === 0) {
      left = 0;
    } else {
      left = matrix[i][j - 1]
    }

    if (j === matrix[0].length - 1) {
      right = 0;
    } else {
      right = matrix[i][j + 1]
    }
    //Avoid moving up intentionally to avoid up-down bouncing
    /*if (i === 0) {
      up = 0;
    } else {
      up = matrix[i -1][j]
    }*/

    if (i === matrix.length - 1) {
      down = 0;
    } else {
      down = matrix[i + 1][j]
    }

    //Determine max adjacent
    maxAdjadent = Math.max(left, right, down)
    maxAdjadentPosition = [left, right, down].indexOf(maxAdjadent)

    //Move to next position depeending on the max value posiiton
    switch (maxAdjadentPosition) {
      case 0:
        j = j - 1
        break;
      case 1:
        j = j + 1
        break;
      case 2:
        i = i + 1
        break;
      default:
        i = i
        j = j
    }
    return maxAdjadent * findGreatestAdjacent(matrix, i, j, counter - 1);
  }
}


const greatestProduct = (matrix) => {
  const multiplyArray = []
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      multiplyArray.push(findGreatestAdjacent(matrix, i, j, 4))
    }
  }
  return Math.max(...multiplyArray)
}


// Iteration #8.1: Bonus

const greatestProductOfDiagonals = (matrix) => {
  multiplyDiagonalRight = [];
  multiplyDiagonalLeft = [];
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      //Make sure there will be a full diagonal with no undefined elements
      if ((i + 4 <= matrix.length) && (j + 4 <= matrix[i].length)) {
        multiplyDiagonalRight.push([matrix[i][j], matrix[i + 1][j + 1], matrix[i + 2][j + 2], matrix[i + 3][j + 3]])
      } else if ((i + 4 <= matrix.length) && (j - 3 >= 0)) {
        multiplyDiagonalLeft.push([matrix[i][j], matrix[i + 1][j - 1], matrix[i + 2][j - 2], matrix[i + 3][j - 3]])
      }
    }
  }
  //Concat all diagonals
  const allDiagonals = [...multiplyDiagonalRight, ...multiplyDiagonalLeft]
  //Multiply all element in each diagonal with map
  const multipliedDiagonals = allDiagonals.map(element => {
    let multipliedElements = 1;
    for (i = 0; i < element.length; i++) {
      multipliedElements *= element[i]
    }
    return multipliedElements
  })

  return Math.max(...multipliedDiagonals)
}

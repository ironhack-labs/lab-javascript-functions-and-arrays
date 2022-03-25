// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2)
    return num1
  else
    return num2
}
// console.log(maxOfTwoNumbers(5,2))


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot']

function findLongestWord(array) {

  let longer = ""
  let longerCount = 0

  if (array.length === 0) {
    return null
  } else {

    for (i = 0; i < array.length; i++) {
      if (array[i].length > longerCount) {

        longerCount = array[i].length
        longer = array[i]

      }
    }
  }
  return longer
}
// console.log(findLongestWord(words))




// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]

function sumNumbers(array) {

  let sum = 0

  for (let i = 0; i < array.length; i++) {

    if (array.length === 0) {
      return 0
    } else {
      sum += array[i]
    }
  }
  return sum
}
// console.log(sumNumbers(numbers))






// Iteration #3.1 Bonus:
const mixedArr = [6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, true]

// should return: 57
function sum(array) {

  let counter = 0

  for (let i = 0; i < array.length; i++) {
    switch (typeof array[i]) {
      case 'number':
        counter += array[i]
        break
      case 'string':
        counter += array[i].length
        break
      case 'boolean':
        counter += array[i]
        break
      default:
        throw new Error("Unsupported data type sir or ma'am")
        break
    }

  }

  return counter
}
// console.log(sum(mixedArr))





// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9]

function averageNumbers(arrayNum) {

  let totalSum = 0


  if (arrayNum.length === 0) {
    return null
  } else {

    for (let i = 0; i < arrayNum.length; i++) {
      totalSum += arrayNum[i]
    }
    return totalSum / arrayNum.length

  }
}
// console.log(averageNumbers(numbersAvg))


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace']

function averageWordLength(arrStr) {

  let totalSumLength = 0

  if (arrStr.length === 0) {
    return null
  } else {

    for (let i = 0; i < arrStr.length; i++) {
      totalSumLength += arrStr[i].length
    }
    return totalSumLength / arrStr.length

  }

}
// console.log(averageWordLength(wordsArr))



// Bonus - Iteration #4.1
function avg(arrayList) {

  let count = 0

  if (arrayList.length === 0) {
    return null
  } else {

    for (let i = 0; i < arrayList.length; i++) {

      switch (typeof arrayList[i]) {
        case 'number':
          count += arrayList[i]
          break
        case 'string':
          count += arrayList[i].length
          break
        case 'boolean':
          count += arrayList[i]
          break
        default:
          throw new Error("Unsupported data type sir or ma'am")
      }

    }

  }

  let finalResult = count / arrayList.length
  finalResult = Number(finalResult.toFixed(2))
  return finalResult
}
// console.log(avg(mixedArr))




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
]


function uniquifyArray(arrayUnique) {

  let newArray = []
  let j = 0

  if (arrayUnique.length === 0) {
    return null
  } else {

    for (let i = 0; i < arrayUnique.length; i++) {
      if (arrayUnique.indexOf(arrayUnique[i]) >= i) {
        newArray[j] = arrayUnique[i]
        j++
      }
    }
    return newArray

  }

}

// console.log(uniquifyArray(wordsUnique))






// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience']

function doesWordExist(wordsArray, searchWord) {
  if (wordsArray.length === 0) {
    return null
  } else {

    if (wordsArray.includes(searchWord)) {
      return true
    } else {
      return false
    }

  }
}

// console.log(doesWordExist(wordsFind, 'machine'))






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
]

function howManyTimes(arrayToCompare, lookingForThis) {

  let counter = 0

  for (let i = 0; i < arrayToCompare.length; i++) {

    if (arrayToCompare[i] === lookingForThis) {
      counter += 1
    }

  }

  return counter
}

// console.log(howManyTimes(wordsCount, 'matter'))


// Iteration #8: Bonus
const matrix = [
  [1, 20, 3, 4, 50],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [70, 20, 3, 4, 5]
]


//function greatestProduct(matrixInput) {

let calcHoriz = 1
let calcVerti = 1
let maxHoriz = 0
let maxVerti = 0

// Para calcular el máximo horizontal
// for (let i = 0; i < matrix.length; i++) {

//   for (let j = matrix[i].length - 1; j >= 0; j--) {

//     for (let z = 0; z < 4; z++) {

//       if (matrix[i][j - 3] === undefined) {
//       } else {

//         calcHoriz *= matrix[i][j - z]
//         // console.log(calcHoriz)

//       }
//     }

//     if (calcHoriz > maxHoriz) {
//       maxHoriz = calcHoriz
//       calcHoriz = 1
//     }
//     calcHoriz = 1

//   }

// }
// console.log(maxHoriz)


// Para calcular el máximo vertical
for (let i = matrix.length - 1; i >= 0; i--) {

  for (let j = 0; j < matrix[i].length; j++) {

    for (let z = 0; z < 4; z++) {
      console.log(`La z vale ${z}`)

      if (matrix[i - 3][j] === undefined) {
      } else {
        console.log(`En esa posicion el valor es ${matrix[i - z][j]}`)
        calcVerti *= matrix[i - z][j]
        console.log(calcVerti)

      }
    }

    if (calcVerti > maxVerti) {
      maxVerti = calcVerti
      calcVerti = 1
    }
    calcVerti = 1

  }

}
console.log(maxVerti)



// greatestProduct(matrix)



// calcHoriz *= matrixInput[i][j]
// if (calcHoriz > maxHoriz) {
//     maxHoriz = calcHoriz
//   }
// calcVerti *= matrixInput[j][i]
// if (calcVerti > maxVerti) {
//   maxVerti = calcVerti
// }


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

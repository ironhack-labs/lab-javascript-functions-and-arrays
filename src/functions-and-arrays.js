// Iteration #1: Find the maximum

function maxOfTwoNumbers(a, b) {
  if (a > b) return a;
  return b;
}

// Iteration #2: Find longest word
const words = ["crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
  let longuestWord = "";
  if (arr.length == 0) {
    longuestWord = null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longuestWord.length) {
      longuestWord = arr[i];
    }
  }
  return longuestWord;
}

// Iteration #3: Calculate the sum

function sumNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// iteration 3 bonus
const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10]; // should return: 57

function sum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      throw new Error("Unsupported data type sir or ma'am");
    } else if (typeof arr[i] === "number") {
      count += arr[i];
    } else if (typeof arr[i] === "string") {
      count += arr[i].length;
    } else if (typeof arr[i] === "boolean") {
      count += Number(arr[i]);
    }
  }
  return count;
}

let badArr = ["de", 16, "e", true, [1, 2]]; // should throw an error
let sumBig = sum(mixedArr);
console.log("sum Function check : " + sumBig);
/* let sumBadArr= sum(badArr);
console.log(sumBadArr); */

// Iteration #4: Calculate the average

// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  let sumOfArr = sumNumbers(arr);
  if (arr.length === 0) return null;
  else return (averageOfArr = sumOfArr / arr.length);
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

function averageWordLength(strArr) {
  let sumOfArr = sum(strArr);
  let averageOfArr = sumOfArr / strArr.length;
  if (strArr.length === 0) {
    return null;
  } else {
    return averageOfArr;
  }
}

let wordUn = ["un"];
let testWordAv = averageWordLength(wordUn);
console.log("averageWordLength Function check : " + testWordAv);

// bonus it 4 level 2

function avg(mixedArr) {
  let sumOfArr = sum(mixedArr);
  let averageOfArr = Math.round((sumOfArr / mixedArr.length) * 100) / 100; // afin de ne garder que 2 chiffres après la virgule !
  if (mixedArr.length === 0) {
    return null;
  } else {
    return averageOfArr;
  }
}

let wordMix = [6, 12, "miami", 1, "barca", "200", "lisboa", 8, false];
let testWordMix = avg(wordMix);
console.log("avg (of mixed arr) Function check : " + testWordMix);

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
  } else {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
}

let testUniq = uniquifyArray(wordsUnique);
console.log("uniquifyArray Function check : ");
console.log(testUniq);

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
  if (arr.length === 0) return null;
  if (arr.includes(word)) return true;
  else return false;
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
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) count += 1;
  }
  return count;
}

// Iteration #8: Bonus

let matrix = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1][
    (1, 1, 1, 1, 1, 1, 1, 1, 1, 100, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1)
  ],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
// should return 20 000

function greatestProduct(matrixArr) {
  if (matrixArr.length === 0) {
    return null;
  } else {
    // new list that will contain the products of 4 elements in rows and in columns:
    let productsList = [];

    // this nested loop pushes the products in ROW in the list of products :
    for (let i = 0; i < matrixArr.length; i++) {
      for (let j = 0; j < matrixArr[i].length - 4; j++) {
        productsList.push(
          matrixArr[i][j] *
            matrixArr[i][j + 1] *
            matrixArr[i][j + 2] *
            matrixArr[i][j + 3]
        );
      }
    }

    // this nested loop pushes the products in COLUMN in the list of products :
    for (let j = 0; j < matrixArr.length; j++) {
      for (let i = 0; i < matrixArr.length - 4; i++) {
        productsList.push(
          matrixArr[i][j] *
            matrixArr[i + 1][j] *
            matrixArr[i + 2][j] *
            matrixArr[i + 3][j]
        );
      }
    }

    // now, I search in productsList which one is the highest and store it in a new var :
    let maxProduct = 0;
    for (let z = 0; z < productsList.length; z++) {
      if (productsList[z] > maxProduct) maxProduct = productsList[z];
    }
    return maxProduct;
  }
}

let testGreatProduct = greatestProduct(matrix);
console.log("greatestProduct Function check : " + testGreatProduct);

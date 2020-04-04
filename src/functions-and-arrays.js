// Iteration #1: Find the maximum
const maxOfTwoNumbers = (num1, num2) => {
  return Math.max(num1, num2);
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const findLongestWord = (arr) => {
  let maxLength = 0;
  let longestWord = null;

  arr.forEach((element) => {
    if (element.length > maxLength) {
        maxLength = element.length;
        longestWord = element;
    }
  })

  return longestWord;
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const sumNumbers = (numbers) => {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum
}

// BONUS | Iteration 3.1.
const sum = (arr) => {
  let totalSum = 0;

  for (const element of arr) {
    switch (typeof element) {
      case "number":
        totalSum += element;
        break;
      case "boolean":
        totalSum += element ? 1 : 0;
        break;
      case "string":
        totalSum += element.length;
        break;
      default:
        throw new Error("Unsupported data type sir or ma'am");
    }
  }
  return totalSum
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
const averageNumbers = (numbers) => {
  if (numbers.length === 0) { return null };
  
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum/numbers.length;
}

// BONUS | Iteration 4.1.
const avg = (arr) => {
  if (arr.length === 0) { return null};
  
  let totalSum = 0;

  for (const element of arr) {
    switch (typeof element) {
      case "number":
        totalSum += element;
        break;
      case "boolean":
        totalSum += element ? 1 : 0;
        break;
      case "string":
        totalSum += element.length;
        break;
      default:
        throw new Error("Unsupported data type sir or ma'am");
    }
  }
  
  let avg = totalSum/arr.length; 
  return avg.toFixed(2) * 1;
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
const averageWordLength = (wordsArr) => {
  if (wordsArr.length === 0) { return null };
  
  let sum = 0;
  for (const word of wordsArr) {
    sum += word.length;
  }
  return sum/wordsArr.length;
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

// Option 1
// const uniquifyArray = (wordsUnique) => {
//   if (wordsUnique.length === 0) { return null };
  
//   let outputArray = [];
//   for (const word of wordsUnique) {
//     if (!outputArray.includes(word)) {
//       outputArray.push(word);
//     }
//   }

//   return outputArray;
// }

// Option 2
function uniquifyArray(arr) {
  if (arr.length === 0) { return null };

	for(i=0; i<arr.length; i++)
	{
		while(arr.indexOf(arr[i],i+1) !== -1)
		{
			arr.splice(arr.indexOf(arr[i],i+1),1)
		}
	}
  return arr
}


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
const doesWordExist = (wordsFind, wordToFind) => {
  if (wordsFind.length === 0) { return null };
  return wordsFind.includes(wordToFind);
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
const howManyTimes = (wordsFind, wordToFind) => {
  if (wordsFind.length === 0) { return 0 };
  let times = 0;

  for (const word of wordsFind) {
    if (wordToFind === word) { times++ } 
  }
  
  return times;
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

// Iteration #8: Bonus

const greatestProduct = (matrix) => {
  let lengthOfGroup = 4; // Will take product of a group of 4 elements 
  let greatestProduct = 0;

// Going through matrix with x up to down and y left to right
// Review all vertical options
  for (let x = 0; x < matrix.length - lengthOfGroup + 1; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      console.log(x, y);
      console.log(matrix[x][y]);
      let currentProduct = matrix[x][y] * matrix[x+1][y] * matrix[x+2][y] * matrix[x+3][y];
      greatestProduct = Math.max(greatestProduct, currentProduct);
    }
  }

  // Review all horizontal options
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length - lengthOfGroup + 1; y++) {
      let currentProduct = matrix[x][y] * matrix[x][y+1] * matrix[x][y+2] * matrix[x][y+3];
      greatestProduct = Math.max(greatestProduct, currentProduct);
    }
  }

  return greatestProduct;
}


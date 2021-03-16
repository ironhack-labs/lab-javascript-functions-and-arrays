// Iteration #1: Find the maximum
//Declare function expression 
const maxOfTwoNumbers = (num1, num2) => Math.max(num1, num2);

// Iteration #2: Find longest word
// const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

const findLongestWord = (arr) => {
  let longestWordLength = 0;
  let longestWord = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWordLength) {
      longestWordLength = arr[i].length;
      longestWord = arr[i];
    }
  }
  return longestWord;  
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const sumNumbers = (numbers) => {
  let sum = 0;
  for (number of numbers) {
      sum += number;
  }
  return sum;
}

console.log(sumNumbers(numbers))

//Bonus - Iteration #3.1
const sum = (arr) => {
  let total = 0;
  for (element of arr) {
    if (typeof element === `boolean` || typeof element === 'number') {
      total += element
    } else if (typeof element === `string`) {
      total += element.length;
    } else {
      throw new Error ("Unsupported data type sir or ma'am");
    }
  }
  return total;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
const averageNumbers = (arr) => {
  if (!arr.length) {return  null;}

  const summedNumbers = sum(arr);
  const avg = summedNumbers / arr.length;

  return avg;
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
const averageWordLength = (arr) => {
  if (!arr.length) {return  null;}

  const summedWords = sum(arr);
  const avg = summedWords / arr.length;

  return avg;
}

//Bonus - Iteration #4.1
 const avg = (arr) => {
  if (!arr.length) {return  null;}
  const averageElementLength = sum(arr);
  const average = averageElementLength / arr.length;

   return Number(average.toFixed(2));
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

const uniquifyArray = (arr) => {
  if (!arr.length) {return  null;}
  let newArray = [];
  for (word of arr) {
      if (!newArray.includes(word)) {
          newArray.push(word)
      }
  } 
  return newArray;
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

const doesWordExist = (arr, word) => {
  if (!arr.length) {return  null;}
  return arr.includes(word) ? true : false;
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

const howManyTimes = (arr, word) => {
  if (!arr.length) {return  0;}
  let totalTimes = 0;
  arr.forEach(element => {
      element === word ? totalTimes += 1 : 0;
  });
 return totalTimes;
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

// const greatestProduct = (arr) => {
//   let finalProduct;
//   let total = 0;
//   for (innerArr of arr) {
//       let adjacentProduct = innerArr.sort().slice(innerArr.length-4).reduce((total, num) => total * num);
//       console.log(`my array is type : ${typeof adjacentProduct} and totals ${adjacentProduct}`)
//       if (total < adjacentProduct) {
//           total = adjacentProduct;
//       }
//       finalProduct = total;
//   }  
//   return finalProduct; 
// }

function greatestProduct(matrix) {
  let highestAdjacentTotal = 0;

  for (array of matrix) {
      for (let i = 0; i < array.length-3; i++) {
        let selectedAdjacentTotal = array[i] * array[i+1] * array[i+2] * array[i+3];
        if (selectedAdjacentTotal > highestAdjacentTotal){
          highestAdjacentTotal = selectedAdjacentTotal;
        }
      }   
  }
  return highestAdjacentTotal;
  
}

console.log(greatestProduct(matrix))

//Bonus 8
//I'm not sure which one is better? Thoughts?

const diagonalProduct = (matrix) => {
  let totalFromTop = 0;
  let totalFromBottom = 0;
  let highestAdjacent;
  

  for (let x = 0; x < matrix.length-3; x++) {
      let y = x;
      let totalOfSelectedAdjacent = matrix[x][y] * matrix[x + 1][y + 1] * matrix[x + 2][y + 2] * matrix[x + 3][y + 3];
      if ( totalOfSelectedAdjacent > totalFromTop) {
          totalFromTop = totalOfSelectedAdjacent
      }
  }

  for (let x2 = matrix.length - 1; x2 > 2; x2--) {
      let y2 = matrix.length - (x2 + 1);
      let totalOfSelectedAdjacent = matrix[x2][y2] * matrix[x2 -1][y2 + 1] * matrix[x2 -2][y2 + 2] * matrix[x2 -3][y2 + 3];
      if (totalOfSelectedAdjacent > totalFromBottom) {
          totalFromBottom = totalOfSelectedAdjacent;
      }
      // console.log(totalFromBottom)
      
  }
  if (totalFromBottom > totalFromTop) {
      highestAdjacent = totalFromBottom;
  } else {
      highestAdjacent = totalFromTop;
  }
  return highestAdjacent;
}

//option Two
//there are more lines but that's because I made a log to console what I was doing as I went 

const findDiagonalProduct = (matrix) => {
  let totalOne = 0, totalTwo = 0;
  let selectionOne = [];
  let selectionTwo = [];
  let highestTotal = 0;

  for (let row = 0; row < matrix.length; row++) {
    let currentOneTotal;
    let currentTwoTotal;
    totalOne = matrix[row][row];
    totalTwo = matrix[row][matrix.length - 1 - row ];
    selectionOne.push(totalOne);
    selectionTwo.push(totalTwo);
    let log = '';
    
    if (selectionOne.length === 4 && selectionTwo.length === 4) {
        currentOneTotal = selectionOne.reduce((total, num) => total * num );
        
        log += `Checking : ${selectionOne[0]} * ${selectionOne[1]} * ${selectionOne[2]} * ${selectionOne[3]} || Total : ${selectionOne[0] * selectionOne[1] * selectionOne[2] * selectionOne[3]}`
        if (currentOneTotal > highestTotal) {
          log += `\n`;
          log += `Current highest : ${currentOneTotal} Previous highest was ${highestTotal}`
          highestTotal = currentOneTotal;
        }
        selectionOne.shift()

        log += `\n`;

        currentTwoTotal = selectionTwo.reduce((total, num) => total * num );
        log += `\n`;
        log += `Checking : ${selectionTwo[0]} * ${selectionTwo[1]} * ${selectionTwo[2]} * ${selectionTwo[3]} || Total : ${selectionTwo[0] * selectionTwo[1] * selectionTwo[2] * selectionTwo[3]}`
        if (currentTwoTotal > highestTotal) {
          log += `\n`;
          log += `Current highest : ${currentTwoTotal} Previous highest was ${highestTotal}`
          highestTotal = currentTwoTotal;
        }
        selectionTwo.shift()

        console.log(log)
    }
    
  }
  return highestTotal;
}
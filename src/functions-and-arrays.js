// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1,num2) {
if(num1>num2)
  return num1
else
  return num2
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', '123456789','aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  if(!words.length)
  return null;
  
  let big=words[0];
  for(let i=0;i<words.length;i++){
    if(words[i].length>big.length)
      big=words[i]
    else if(words[i].length===big.length)
    continue;

  }
  return big 

}

// Iteration #3.1: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numbers) {
  if(!numbers.length)
  return 0;
  let sum=0;
  numbers.forEach(elm => 
    {sum+=elm; 

  })
  return sum;
}

// Iteration #3.2 Bonus:
const mixedArr = [6, 12, 'miami', 1,'barca',true,'200','lisboa', 8, 10];

function sum(mixedArr) {
  if(!mixedArr.length)
  return 0;
  let sum1=0;
  for(let i=0;i<mixedArr.length;i++){
      if(typeof mixedArr[i]== 'number'|| typeof mixedArr[i]==='boolean')
      sum1 += mixedArr[i];
      else if(typeof mixedArr[i]==='string')
      sum1 += mixedArr[i].length;
      else if( typeof mixedArr[i] ==='object' || typeof mixedArr[i] ==='array')
      throw new Error("Unsupported data type sir or ma'am")

    }

return sum1;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  if(!numbersAvg.length)
  return null;
  let checkSum=0;
  for(let i=0; i<numbersAvg.length;i++){
    checkSum += numbersAvg[i];
  }
  return checkSum/numbersAvg.length
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  if(!wordsArr.length)
  return null;
  let checkSum=0;
  for(let i=0; i<wordsArr.length;i++){
    checkSum += wordsArr[i].length
  }
  return checkSum/wordsArr.length
 }

// Bonus - Iteration #4.1
const mixedArr1 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 5.7
function avg(mixedArr1) {
  if(!mixedArr1.length)
  return null;
  let checkSum=0;
  for(let i=0;i<mixedArr1.length;i++){
    if(typeof mixedArr1[i]==='number'|| typeof mixedArr1[i]==='boolean')
    checkSum += mixedArr1[i]
    else if(typeof mixedArr1[i]==='string')
    checkSum += mixedArr1[i].length

  }
 return checkSum/mixedArr1.length;
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

function uniquifyArray(wordsUnique) {
  if(!wordsUnique.length)
  return null;
  let newArr=[]
  for(let i=0; i<wordsUnique.length;i++){
    if(newArr.includes(wordsUnique[i]))
    continue;
    else
    newArr.push(wordsUnique[i])
  }
  return newArr;
}


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsFind,word) {
  if(!wordsFind.length)
    return null;

    if(wordsFind.includes(word))
    return true;
    return false;
  
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

function howManyTimes(wordsCount,word) {
  if(!wordsCount.length)
  return 0;
  let count=0;
  for(let i=0;i<wordsCount.length;i++){
    if(wordsCount[i]===word)
    count++;
  }
  return count;
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
  let big=0
  let row,index=0
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
      if(matrix[i][j]>big){
      big=matrix[i][j];
      index=matrix[i].indexOf(big)
      row=i;
      }
      
      }
    }
    let productVertical=1;
    // Have to find product of 4 adjacent Vertical numbers , so row+3
    for(let i=row;i<=row+3;i++){
    productVertical*=  matrix[i][index]
    }
    let productHorizontal=1
    // Have to find product of 4 adjacent Horizontal numbers , so index+3
    for(let j=index;j<=index+3;j++){
      productHorizontal*=matrix[row][j]
    }
   // console.log("PV-> "+productVertical+"  PH---->"+productHorizontal)
    if(productVertical>productHorizontal)
    return productVertical
    else 
    return productHorizontal
    // matrix[row][index]=big -->Vertical
    // matrix[1][2] 
    // matrix[2][2]
    // matrix[3][2]
    // matrix[4][2]

    // matrix[row][index]=big -->Horizontal
    // matrix[1][2]
    // matrix[1][3]
    // matrix[1][4]
    // matrix[1][5]


 // console.log(big,index,row)
}

greatestProduct(matrix)


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

// Iteration #1: Find the maximum
function maxOfTwoNumbers(a,b){
  if(a>b){
    return a;
  } else {
    return b;
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(word){
  if (word.length===0){
    return null;
  } else{
    let longestWordLength = 0 ;
    let longestWord = "" ;
    for(let i=0 ; i<word.length ; i++){
      if(word[i].length > longestWordLength){
        longestWord = word[i];
        longestWordLength = word[i].length ;
      } else {continue}
    }
    return longestWord;
  }
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(array){
  if(array.length === 0){
    return 0
  }else{
    let sumTotal = 0;
      for(let i=0 ; i<array.length ; i++){
        sumTotal += array[i];
      }
      return sumTotal;
  }
}
//Iteration 3.1 Bonus
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(array){
  let sumTotal = 0;
  for(let i=0 ; i<array.length ; i++){
    if(typeof array[i] === "object" ||typeof array[i] === "array"){
      throw new Error("Unsupported data type sir or ma'am");
     }else if(typeof array[i] === "string"){
      sumTotal += array[i].length ;
     }else if(array[i]===true){
       sumTotal += 1;
     }else if(array[i]===false){
       continue; 
     }else{sumTotal += array[i]};
  }
  return sumTotal;
}


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function sumNum(array){
  let sumTotal = 0;
  for(let i=0 ; i<array.length ; i++){
    sumTotal += array[i];
  }
  return sumTotal;
}
sumNum(numbersAvg);

function averageNumbers(array){
  if(array.length === 0){
    return null;
  } else{
  return sumNum(array)/array.length
  }
}
averageNumbers(numbersAvg);

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function sumNum2(array){
  let sumTotal = 0;
  for(let i=0 ; i<array.length ; i++){
    sumTotal += array[i];
  }
  return sumTotal;
}

function average(array){
  return sumNum2(array)/array.length
}

function averageWordLength(array){
  if(array.length===0){
    return null;
  }else{
    let wordPerString = [];
    for( let i=0 ; i<array.length ; i++){
      let countOfWords = 0;
      let wordLength = 0;
      for(let j=0 ; j<array[i].length ; j++){
        wordLength += 1 ;
      }
      wordPerString.push(wordLength);
    } 
    return average(wordPerString);
  } 
}

//4.1 Bonus

function sum(array){
  let sumTotal = 0;
  for(let i=0 ; i<array.length ; i++){
    if(typeof array[i] === "string"){
      sumTotal += array[i].length ;
     }else if(array[i]===true){
       sumTotal += 1;
     }else if(array[i]===false){
       continue; 
     }else{sumTotal += array[i]};
  }
  return sumTotal;
}

function avg(array){
  if(array.length === 0){
    return null
  }else{
  return sum(array)/array.length
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

function uniquifyArray(array){
  let cleanArray = [];
  if(array.length===0){
    return null;
  }else{  
    for(let i=0 ; i<array.length ; i++){
      if(cleanArray.indexOf(array[i]) === -1){cleanArray.push(array[i])
      }else{
        continue;
      }
    }
  }
  return cleanArray;
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(array,word){
  if(array.length === 0){
    return null;
  } else{
    for(let i=0 ; i<array.length ; i++){
      if(array[i]===word){
        return true ;
      } else{
        return false ;
      }
    }
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
function howManyTimes(array,word){
  let count = 0;
  if(array.length===0){
    return 0;
  } else{
    for(let i=0 ; i<array.length ; i++){
      if(array[i]=== word){
        count += 1;
      } else{
        continue;
      } 
    }
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

function greatestVerticalProduct(mat){
  if(mat.length === 0){
    return null;
  }else{
    let greatestVertProduct = 0;
    for(let i=0 ; i<mat.length ; i++){
      for(let j=0 ; j<mat[i].length ; j++){
        let prod = 0
        if(mat[i+1] === undefined){
            prod = mat[i][j];
            if(prod > greatestVertProduct){greatestVertProduct = prod} else{continue};
        }else if(mat[i+2] === undefined){
            prod = mat[i][j] * mat[i+1][j];
            if(prod > greatestVertProduct){greatestVertProduct = prod} else{continue};
        }else if(mat[i+3] === undefined){
            prod = mat[i][j] * mat[i+1][j] * mat[i+2][j];
            if(prod > greatestVertProduct){greatestVertProduct = prod} else{continue};
        }else{
            prod = mat[i][j] * mat[i+1][j] * mat[i+2][j] * mat[i+3][j];
            if(prod > greatestVertProduct){greatestVertProduct = prod}else{continue};
        } 
      }
    }return greatestVertProduct;
  }
} 

function greatestHorizontalProduct(mat){//function that iterates through the array adding the four subsecuent numbers
  if(mat.length === 0){
    return null;
  }else{
    greatestHorProd = 0;
    for(let i=0 ; i<mat.length ; i++){ //loop that iterates through each line
      for(let j=0 ; j<mat[i].length ; j++){ // loopt that iterates through each value in the line
        let product = 0
        if(mat[j+1] === undefined){ //once the iteration arrives to the edge, it sums the numbers left to get to the edge
            product = mat[i][j];
            if(product>greatestHorProd){greatestHorProd=product}else{continue};
        }else if(mat[j+2] === undefined){
            product = mat[i][j] * mat[i][j+1];
            if(product>greatestHorProd){greatestHorProd=product}else{continue};
        }else if(mat[j+3] === undefined){
            product = mat[i][j] * mat[i][j+1] * mat[i][j+2];
            if(product>greatestHorProd){greatestHorProd=product}else{continue};
        }else{
            product = mat[i][j] * mat[i][j+1] * mat[i][j+2] * mat[i][j+3]; // factor of the [j] times the three values to the right
            if(product>greatestHorProd){greatestHorProd=product}else{continue};
        } 
      }
    } return greatestHorProd;
  }
} 

function greatestProduct(mat){
  if(greatestHorizontalProduct(mat)>greatestVerticalProduct(mat)){
    return greatestHorizontalProduct(mat)
  } else{
    return greatestVerticalProduct(mat)
  }
}

//Iteration #8.1 Diagonal Bonus

function greatestDiagRightProduct(mat){ //function that iterates through the matrix calculating the greatest product in a diagonal right direction
  if(mat.length === 0){
    return null;
  }else{
    let greatestDiagonalProduct = 0; //variable that stores the greatest product at any given iteration
    let greatestDiagonalCoordinates = [] //variable that stores the coordinates of the values that make the greatest product
    for(let i=0 ; i<mat.length ; i++){//loop that iterates through each line of the matrix (coordinate y)
      for(let j=0 ; j<mat[i].length ; j++){//loop that iterates through each value in the line (coordinate x)
        let prod = 0 //each iteration is going to calculate a product. This restores it to 0 in each iteration
        if(mat[i+1] === undefined || mat[j+1] === undefined){//if iteration reaches to an edge of the matrix, it calculates the product of the values before that edge
            prod = mat[i][j];//the closest you can get to the edge is 1. right in the edge
            if(prod > greatestDiagonalProduct){//if the product of this iteration is greater than the greatest, this now becomes the greatest
              greatestDiagonalProduct = prod;
              greatestDiagonalCoordinates = [[i,j]];//given this is the new greatest product, its coordinates are stored
              }else{continue};
        }else if(mat[i+2] === undefined || mat[j+2] === undefined){
            prod = mat[i][j] * mat[i+1][j+1];
            if(prod > greatestDiagonalProduct){
              greatestDiagonalProduct = prod;
              greatestDiagonalCoordinates = [[i,j],[i+1,j+1]];
              }else{continue};
        }else if(mat[i+3] === undefined || mat[j+3] === undefined){
            prod = mat[i][j] * mat[i+1][j+1] * mat[i+2][j+2];
            if(prod > greatestDiagonalProduct){
              greatestDiagonalProduct = prod;
              greatestDiagonalCoordinates = [[i,j],[i+1,j+1],[i+2,j+2]];
              }else{continue};
        }else{
            prod = mat[i][j] * mat[i+1][j+1] * mat[i+2][j+2] * mat[i+3][j+3];
            if(prod > greatestDiagonalProduct){
              greatestDiagonalProduct = prod;
              greatestDiagonalCoordinates = [[i,j],[i+1,j+1],[i+2,j+2],[i+3,j+3]];
              }else{continue};
        } 
      }
    }return [greatestDiagonalProduct , greatestDiagonalCoordinates];//given that a function can only return one value, this returns an array that contains the greatest value and the coordinates that came up w/ that number
  }
} 

function greatestDiagLeftProduct(mat){//same calculation as the Diagonal right but to the left
  if(mat.length === 0){
    return null;
  }else{
    let greatestDiagonalProduct = 0;
    let greatestDiagonalCoordinates = [];
    for(let i=0 ; i<mat.length ; i++){
      for(let j=0 ; j<mat[i].length ; j++){
        let prod = 0
        if(mat[i+1] === undefined || mat[j-1] === undefined){
            prod = mat[i][j];
            if(prod > greatestDiagonalProduct){
              greatestDiagonalProduct = prod;
              greatestDiagonalCoordinates = [[i,j]];
              }else{continue};
        }else if(mat[i+2] === undefined || mat[j-2] === undefined){
            prod = mat[i][j] * mat[i+1][j-1];
            if(prod > greatestDiagonalProduct){
              greatestDiagonalProduct = prod;
              greatestDiagonalCoordinates = [[i,j],[i+1,j-1]];
              }else{continue};
        }else if(mat[i+3] === undefined || mat[j-3] === undefined){
            prod = mat[i][j] * mat[i+1][j-1] * mat[i+2][j-2];
            if(prod > greatestDiagonalProduct){
              greatestDiagonalProduct = prod;
              greatestDiagonalCoordinates = [[i,j],[i+1,j-1],[i+2,j-2]];
              }else{continue};
        }else{
            prod = mat[i][j] * mat[i+1][j-1] * mat[i+2][j-2] * mat[i+3][j-3];
            if(prod > greatestDiagonalProduct){
              greatestDiagonalProduct = prod
              greatestDiagonalCoordinates = [[i,j],[i+1,j-1],[i+2,j-2],[i+3,j-3]];
              }else{continue};
        } 
      }
    }return [greatestDiagonalProduct, greatestDiagonalCoordinates];
  }
}

function greatestProductOfDiagonals(mat){//compares the greatest product of the diagonal right and the diagonal left and returns the greatest of all w/its coordinates
  if(greatestDiagRightProduct(mat)[0] > greatestDiagLeftProduct(mat)[0]){
    return [greatestDiagRightProduct(mat)[0],greatestDiagRightProduct(mat)[1]];
  } else{
    return [greatestDiagLeftProduct(mat)[0],greatestDiagLeftProduct(mat)[1]];
  }
}


function greatestProductAndLocationOfDiagonals(mat){
  let newArr = [...mat] ;//copy of the original matrix array
  let productAndLocation = greatestProductOfDiagonals(mat) //convertion of the function to a variable so that's easier to break it down
  newArr[productAndLocation[1][0][0]].splice(productAndLocation[1][0][1],1,`*${newArr[productAndLocation[1][0][0]][productAndLocation[1][0][1]]}*`);//takes the first value in the coordinates and highligts it in the array
  [...newArr][productAndLocation[1][1][0]].splice(productAndLocation[1][1][1],1,`*${newArr[productAndLocation[1][1][0]][productAndLocation[1][1][1]]}*`);
  [...newArr][productAndLocation[1][2][0]].splice(productAndLocation[1][2][1],1,`*${newArr[productAndLocation[1][2][0]][productAndLocation[1][2][1]]}*`);
  [...newArr][productAndLocation[1][3][0]].splice(productAndLocation[1][3][1],1,`*${newArr[productAndLocation[1][3][0]][productAndLocation[1][3][1]]}*`);
  return [`The greatest product is ${productAndLocation[0]}`,newArr] ;
}

greatestProductAndLocationOfDiagonals(matrix)

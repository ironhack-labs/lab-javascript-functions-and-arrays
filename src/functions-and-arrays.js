// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1> number2){
    return number1

  }
  return number2
  
}
// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord(array1) {
  if(array1.length === 0 ){
    return null;
  }
  let longestWord = '';
  for (i=0; i< array1.length;i++){
    if(longestWord.length< array1[i].length){
      longestWord = array1[i];
     
    }
  }
  return longestWord;
  
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(array1) {
  let somaVal = 0;
  if(array1.length === 0 ){
    return somaVal;
  }
  for (i=0; i< array1.length;i++){
    somaVal += array1[i];
  }
  return somaVal;
}
function sum(array1) {
  let somaVal = 0;
  let tamanho = 0;
  if(array1.length === 0 ){
    return somaVal;
  }
  for (i=0; i< array1.length;i++){
    if (typeof array1[i] === "boolean"){
      if (array1[i]=== true){
        somaVal += 1;
      }
    } else if (typeof array1[i] === 'number' ){
      somaVal += array1[i];
    } else if (typeof array1[i] === 'string' ){
      tamanho = array1[i].length;
        somaVal += tamanho;
      } else{
        throw new Error(`Unsupported data type sir or ma'am`);
      }
    }
  
    return somaVal;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(array) {
  if (array.length == 0){
    return null
  }
  let varMedia = 0;
  varMedia = sumNumbers(array) / array.length;
  return varMedia;
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(array) {
  if (array.length == 0){
    return null
  }
  let varMedia = 0;
  varMedia = sum(array) / array.length;
  return varMedia;
}

function avg(array) {
  if (array.length == 0){
    return null
  }
  let varMedia = 0;
  varMedia = sum(array) / array.length;
  return +varMedia.toFixed(2); // o simbolo de + altera o string para número
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
function uniquifyArray(array) {
  if(array.length == 0) {
    return null
  }
  let newArray = []
  for(i=0; i<array.length; i++){
    if(i == array.indexOf(array[i])){
      newArray.push(array[i])
    } 
 
  } 
  return newArray  
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function doesWordExist(array,string) {
  if(array.length == 0 || string.length == 0) {
    return null
  }
  return array.includes(string);
  /*for(i=0; i<array.length; i++){
    if(array[i] == string){
      return true;
    } 
  }  
  return false;*/
 
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
function howManyTimes(array, string) {
  if(array.length == 0 || string.length == 0) {
    return 0
  }
  let numeroRepeticao = 0;
  for(i=0; i<array.length; i++){
    if(array[i] == string){
     numeroRepeticao++;
    } 
  }  
  return numeroRepeticao;
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
  let produtoTot = 0;
  let produtoMax = 0;
  //linha
  for (i=0; i<matrix.length; i++){
    switch (i) {
      case i== 0:
        produtoTot = matrix[i] * matrix[i+1]* matrix[i+2] *matrix[i+3];
          if( produtoTot > produtoMax){
          produtoMax = produtoTot;
        }
        break;
    
      case i== 1:
        produtoTot = matrix[i] * matrix[i+1]* matrix[i+2]* matrix[i+3];
          if( produtoTot > produtoMax){
            produtoMax = produtoTot;
          }
          produtoTot = matrix[i] * matrix[i-1];
          if( produtoTot > produtoMax){
            produtoMax = produtoTot;
          } 
          break;
      case i== 2:
        produtoTot = matrix[i] * matrix[i+1]* matrix[i+2]* matrix[i+3];
          if( produtoTot > produtoMax){
            produtoMax = produtoTot;
          }
          produtoTot = matrix[i] * matrix[i-1] * matrix[i-2];
          if( produtoTot > produtoMax){
            produtoMax = produtoTot;
          }

            break;

          // xxxxxxxxxxxxxx
            case i== matrix.length -1:
              produtoTot = matrix[i] * matrix[i-1]* matrix[i-2] *matrix[i-3];
                if( produtoTot > produtoMax){
                produtoMax = produtoTot;
              }
              break;
          
            case i== matrix.length -2:
              produtoTot = matrix[i] * matrix[i+1];
                if( produtoTot > produtoMax){
                  produtoMax = produtoTot;
                }
                produtoTot = matrix[i] * matrix[i-1]* matrix[i-2] *matrix[i-3];
                if( produtoTot > produtoMax){
                  produtoMax = produtoTot;
                } 
                break;

            case i== matrix.length -3:
              produtoTot = matrix[i] * matrix[i+1]* matrix[i+2];
                if( produtoTot > produtoMax){
                  produtoMax = produtoTot;
                }
                produtoTot = matrix[i] * matrix[i-1] * matrix[i-2]* matrix[i-3];
                if( produtoTot > produtoMax){
                  produtoMax = produtoTot;
                }
      
                  break;

            default :
              produtoTot = matrix[i] * matrix[i+1]* matrix[i+2]* matrix[i+3];
                if( produtoTot > produtoMax){
                  produtoMax = produtoTot;
                }
                produtoTot = matrix[i] * matrix[i-1] * matrix[i-2]* matrix[i-3];
                if( produtoTot > produtoMax){
                  produtoMax = produtoTot;
                }
                  break;
    }
   //coluna
    for (j=0; j<matrix[i].length; j++){ 
      switch (j) {
        case j== 0:
          produtoTot = matrix[i][j] * matrix[i][j+1]* matrix[i][j+2] *matrix[i][j+3];
            if( produtoTot > produtoMax){
            produtoMax = produtoTot;
          }
          break;
      
        case j== 1:
          produtoTot = matrix[i][j] * matrix[i][j+1]* matrix[i][j+2]* matrix[i][j+3];
            if( produtoTot > produtoMax){
              produtoMax = produtoTot;
            }
            produtoTot = matrix[i][j] * matrix[i][j-1];
            if( produtoTot > produtoMax){
              produtoMax = produtoTot;
            } 
            break;
        case j== 2:
          produtoTot = matrix[i][j] * matrix[i][j+1]* matrix[i][j+2]* matrix[i][j+3];
            if( produtoTot > produtoMax){
              produtoMax = produtoTot;
            }
            produtoTot = matrix[i][j] * matrix[i][j-1] * matrix[i][j-2];
            if( produtoTot > produtoMax){
              produtoMax = produtoTot;
            }
  
              break;
              
            // xxxxxxxxxxxxxx
        case j== matrix[i].length -1:
          produtoTot = matrix[i][j] * matrix[i][j-1]* matrix[i][j-2] *matrix[i][j-3];
            if( produtoTot > produtoMax){
            produtoMax = produtoTot;
                }
                break;
            
        case j== matrix[i].length -2:
          produtoTot = matrix[i][j] * matrix[i][j+1];
            if( produtoTot > produtoMax){
              produtoMax = produtoTot;
            }
            produtoTot = matrix[i][j] * matrix[i][j-1]* matrix[i][j-2] *matrix[i][j-3];
            if( produtoTot > produtoMax){
              produtoMax = produtoTot;
            } 
            break;
  
        case j== matrix[i].length -3:
          produtoTot = matrix[i][j] * matrix[i][j+1]* matrix[i][j+2];
            if( produtoTot > produtoMax){
              produtoMax = produtoTot;
            }
            produtoTot = matrix[i][j] * matrix[i][j-1] * matrix[i][j-2]* matrix[i][j-3];
            if( produtoTot > produtoMax){
              produtoMax = produtoTot;
            }
  
             break;
  
        default :
          produtoTot = matrix[i][j] * matrix[i][j+1]* matrix[i][j+2]* matrix[i][j+3];
            if( produtoTot > produtoMax){
              produtoMax = produtoTot;
            }
            produtoTot = matrix[i][j] * matrix[i][j-1] * matrix[i][j-2]* matrix[i][j-3];
            if( produtoTot > produtoMax){
              produtoMax = produtoTot;
            }
              break;
      }
    } 
  } 
  return produtoMax;
}
let matrix2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
console.log(greatestProduct(matrix2));

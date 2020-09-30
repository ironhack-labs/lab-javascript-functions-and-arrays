// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1,num2){
  if (num1>num2){
    return num1;
  } else {
    return num2;
  }
}
// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord(arr){
  let maxLength = 0;
  let indexMax=0;
  if (arr.length ===0){
    return null;
  } else {
    for (i=0; i<arr.length;i++) {
      let largo = arr[i].length;
      if (maxLength<largo){
        maxLength=largo;
        indexMax = i;
      }
    }
    return arr[indexMax];
  }
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(arr){
  if (arr.length ===0){
    return 0;
  } else {
    let sum = 0;
    arr.forEach(function(element){sum+=element;});
    return sum;
  }
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// console.log(sum(mixedArr));


function sum(arr){
  if (arr.length ===0){
    return 0;
  } else {
    let sum = 0;
    arr.forEach(function(element){
      // console.log('Element "' + element + '" ('+typeof element +')');
      if (typeof element==="boolean" && element === true){
        sum+=1; 
      } else if (typeof element==="string"){
        sum+=element.length;
      } else if (typeof element==="number"){
        sum+=element;
      } else if (typeof element === "object"){
        throw new Error("Unsupported data type sir or ma'am");
      }
    });
    return sum;
  }
}

function averageNumbers(arr){
  if (arr.length ===0){
    return null;
  } else if (arr.length===1){
    return arr[0];
  } else{
    let summ = sum(arr);
    return summ/arr.length;
  }
}

function averageWordLength(arr){
  if (arr.length ===0){
    return null;
  } else if (arr.length===1){
    return arr[0].length;
  } else{
    let summ = sum(arr);
    return summ/arr.length;
  }
}

function avg(arr){
  if (arr.length ===0){
    return null;
  } else if (arr.length===1){
    return arr[0].length;
  } else{
    let summ = sum(arr);
    return Math.round(100*summ/arr.length)/100;
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
function uniquifyArray(arr){
  if (arr.length ===0){
    return null;
  } else{
    let uniqueArr = [];
    arr.forEach(function(element){
      if (uniqueArr.indexOf(element)==-1){
        uniqueArr.push(element);
      }
    })
    return uniqueArr;
  }
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr,wd){
  if (arr.length ===0){
    return null;
  } else{
    if (arr.includes(wd) === false){
      return false;
    } else if (arr.includes(wd) === true){
      return true;
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
function howManyTimes (arr,wd){
  if (arr.length ===0){
    return 0;
  } else{
    let counter = 0;
    arr.forEach(function(element){
      if (element===wd){
        counter++;
      }
    })
    return counter;
  }
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

// console.log(greatestProduct(matrix));
//Perque no cal fer numCols-3???
function greatestProduct(matrix){
  let maxProd = 0;
  let numRows = matrix.length;
  let numCols = matrix[0].length;

  for (i=0;i<numCols;i++){
    for (j=0;i<numRows-3;i++){
      let cProd = currentProd(i,j,matrix);
      if (maxProd<cProd){
        maxProd = cProd;
      }
    }
  }
  return maxProd;
}

console.log(greatestProductDiag(matrix));
function greatestProductDiag(matrix){
  let maxProdDiag = 0;
  let numRows = matrix.length;
  let numCols = matrix[0].length;

  for (i=0;i<numCols;i++){
    for (j=0;j<numRows;j++){
      let cProdDiag = currentMultiply(i,j,matrix);
      if (maxProdDiag<cProdDiag){
        maxProdDiag = cProdDiag;
      }
    }
  }
  return maxProdDiag;
}

function currentProd(row,column,matrix){
  let rowProd = matrix[row][column] *  matrix[row][column+1] * matrix[row][column+2] * matrix[row][column+3];
  let colProd = matrix[row][column] *  matrix[row+1][column] * matrix[row+2][column] * matrix[row+3][column];
  return Math.max(rowProd, colProd);
}

function currentMultiply(cRow,cColumn,matrix){
  //Variables
  let row=parseFloat(cRow);
  let column= parseFloat(cColumn);
  let e1=0;
  let e2=0;
  let e3=0;
  let e4=0;
  let e5=0;
  let e6=0;
  let numRows = matrix.length;
  let numCols = matrix[0].length; 

  // console.log(column,"fdfged");
  // console.log("Number of Rows: " + numRows +"(" +typeof numRows +")"+ " | Number or Columns: " + numCols +"(" +typeof numCols +")"+ " | Current Row: " + row +"(" +typeof row +")"+ " | Current Column: " + column +"("+ typeof column +")");
  // console.log("Row+3: " + row+3 + " | Row Data Type: " + typeof row + " | 3 Data Type: " + typeof 3 + " | " + typeof row + " | " + typeof + row + 3 );
  // console.log(row, "frgg");
  // console.log(row);
  // console.log("Current Row: " + row + " | Current Column: " + column)

  // console.log("NumRows: " + numRows + "(" + typeof numRows + ") | NumCols: " + numCols + "(" + typeof numCols + ")  | CurrRow: " + row + "(" + typeof row + ")  | CurrCol: " + column + "(" + typeof column + ")");
  // if (row+1>numRows||column+1>numCols){
  //   console.log("1rst Conditional OK (TRUE)")
  //   if (matrix[row+1][column+1]!==undefined){
  //     console.log("2nd Conditional OK (TRUE)")
  //     e1=matrix[row+1][column+1];
  //   }else{
  //     e1=1;
  //     console.log("2nd Conditional OK (FALSE)")
  //   }
  // } else {
  //   console.log("1rst Conditional OK (FALSE)")
  //   e1=1;
  // }

  let valores=[0,0,0,0,0,0];
  // let i = 1;

  for (let i = 1;i<=3;i++){
    // console.log(i);
    try{if(matrix[row+i][column+i]===undefined){valores[i-1]=1;}else{valores[i-1]=matrix[row+i][column+i];}}catch{valores[i-1]=1;}
    try{if(matrix[row+i][column-i]===undefined){valores[i+2]=1;}else{valores[i+2]=matrix[row+i][column+i];}}catch{valores[i+2]=1;}
}
  // // //Valores Diagonal Abajo y Derecha (Rows Mayores que 'Row Máxima' y Columnas Menores que 'Número de Columnas'))
  // try{if(matrix[row+1][column+1]===undefined){e1=1;}else{e1=matrix[row+1][column+1];}}catch{e1=1;}
  // try{if(matrix[row+2][column+2]===undefined){e2=1;}else{e2=matrix[row+2][column+2];}}catch{e2=1;}
  // try{if(matrix[row+3][column+3]===undefined){e3=1;}else{e3=matrix[row+3][column+3];}}catch{e3=1;}

  // try{e2=matrix[row+2][column+2];}catch{e2=1;}
  // try{e3=matrix[row+3][column+3];}catch{e3=1;}
  // // if (row+1>numRows||column+1>numCols){if (matrix[row+1][column+1]!==undefined){e1=matrix[row+1][column+1];}else{e1=1;}} else {e1=1;}
  // // if (row+2>numRows||column+2>numCols){if (matrix[row+2][column+2]!==undefined){e2=matrix[row+2][column+2];}else{e2=1;}} else {e2=1;}
  // // if (row+3>numRows||column+3>numCols){if (matrix[row+3][column+3]!==undefined){e3=matrix[row+3][column+3];}else{e3=1;}} else {e3=1;}

  // //Valores Diagonal Abajo y Izquierda (Rows Mayores que 'Row Máxima' y Columnas Mayores que Cero))
  // try{if(matrix[row+1][column-1]===undefined){e1=1;}else{e1=matrix[row+1][column+1];}}catch{e1=1;}
  // try{if(matrix[row+2][column-2]===undefined){e1=1;}else{e1=matrix[row+1][column+1];}}catch{e1=1;}
  // try{if(matrix[row+3][column-3]===undefined){e1=1;}else{e1=matrix[row+1][column+1];}}catch{e1=1;}

  // try{e4=matrix[row+1][column-1];}catch{e4=1;}
  // try{e5=matrix[row+2][column-2];}catch{e5=1;}
  // try{e6=matrix[row+3][column-3];}catch{e6=1;}
  // // if (row+1>numRows||column-1>0){if (matrix[row+1][column-1]!==undefined){e4=matrix[row+1][column-1];}else{e4=1;}} else {e4=1;}
  // // if (row+2>numRows||column-2>0){if (matrix[row+2][column-2]!==undefined){e4=matrix[row+2][column-2];}else{e5=1;}} else {e5=1;}
  // // if (row+3>numRows||column-3>0){if (matrix[row+3][column-3]!==undefined){e4=matrix[row+3][column-3];}else{e6=1;}} else {e6=1;}

  //
  let prod1=matrix[row][column] *  valores[0] * valores[1] * valores[2];
  let prod2=matrix[row][column] *  valores[3] * valores[4] * valores[5];
  // console.log("E1: " + valores[0] +" | E2: " + valores[1] +" | E3: " + valores[2] +" | E4: " + valores[3] +" | E5: " + valores[4] +" | E6: " + valores[5])
  console.log("NumRows: " + numRows +"(" +typeof numRows +") | NumCols: " + numCols +"(" +typeof numCols +") | CurRow: " + row +"(" +typeof row +") | CurColumn: " + column +"("+ typeof column +") | Prod DR: " + prod1+"("+ typeof prod1 +") | Product DL: "+prod2+"("+ typeof prod1 +")");

  return Math.max(prod1,prod2);  
}

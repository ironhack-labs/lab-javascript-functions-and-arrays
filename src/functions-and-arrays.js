// Iteration #1: Find the maximum

function maxOfTwoNumbers(a, b){
  return (a > b) ? a : b;
}

// Iteration #2: Find longest word

function findLongestWord(tab){
  var longest = "";
  if(tab.length === 0 ){
    longest = null;
  } else{
    for(index in tab){
      if (tab[index].length > longest.length) longest = tab[index];
    }
  }
  return longest;
}

// Iteration #3: Calculate the sum

function sumNumbers(tab){
  var sum = 0;
  for(index in tab){
    sum += tab[index];
  }
  return sum;
}

function sum(arr){
  var sum = 0;
  for(index in arr){
    let indexType = typeof arr[index];
    if(indexType === "object" || indexType === "array") {
      throw Error("Unsupported data type sir or ma'am");
    } else if (indexType === "string"){
      sum += arr[index].length;
    } else{
      sum += Number(arr[index]);
    }
  }
  return sum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers

function averageNumbers(arr){
  let average;
  if(arr.length === 0){
    average = null;
  } else {
    let sumOfArr = sum(arr);
    average = sumOfArr / arr.length;
  }
  return average;
}

// Level 2: Array of strings
function averageWordLength(arr){
  let average;
  let totalChar = 0;
  if(arr.length === 0){
    average = null;
  } else {
    for(index in arr){
      totalChar += arr[index].length;
    }
    average = totalChar / arr.length;
  }
  return average;
}

function avg(arr){
  let average;
  let totalChar = 0;
  if(arr.length === 0){
    average = null;
  } else {
    for(index in arr){
      let typeOfChar = typeof arr[index];
      if(typeOfChar === "string"){
        totalChar += arr[index].length;
      } else{
        totalChar += Number(arr[index]);
      }
    }
    average = Number((totalChar / arr.length).toFixed(2));
  }
  return average;
}

// Iteration #5: Unique arrays

function uniquifyArray(arr){
  let outArray = arr;
  if(arr.length === 0){
    outArray = null;
  } else {
    for(let i = 0; i < outArray.length; i++){
      let currentWord = outArray[i];
      for(let y = i + 1; y < outArray.length; y++){
        if(currentWord === outArray[y]){
          outArray.splice(y, 1);
          y--;
        }
      }
    }
  }
  return outArray;
}

// Iteration #6: Find elements
function doesWordExist(arr, word){
  let outcome = false;
  if(arr.length === 0){
    return null;
  } else {
    for(index in arr){
      if(arr[index] === word){
        outcome = true;
        break;
      }
    }
  }
  return outcome;
}


// Iteration #7: Count repetition

function howManyTimes(arr, word){
  let outcome = 0;
  if(arr.length !== 0){
    for(index in arr){
      if(arr[index] === word){
        outcome ++;
      }
    }
  }
  return outcome;
}

// Iteration #8: Bonus

function greatestProduct(matrix){
  let maxProduct = 0;
  for(let i = 0; i < matrix.length; i++){
    for(let y = 0; y < matrix[i].length; y++){
      if(y + 3 < matrix[i].length){
        let currentHorizontalProduct = matrix[i][y] * matrix[i][y + 1] * matrix[i][y + 2] * matrix[i][y + 3];
        if(currentHorizontalProduct > maxProduct){
          maxProduct = currentHorizontalProduct;
        }
      }
      if(i + 3 < matrix.length){
        let currentVerticalProduct = matrix[i][y] * matrix[i + 1][y] * matrix[i + 2][y] * matrix[i + 3][y];
        if(currentVerticalProduct > maxProduct){
          maxProduct = currentVerticalProduct;
        }
      }
    }
  }
  return maxProduct;
}

function greatestProductOfDiagonals(matrix){
  let maxProduct = 0;
  for(let i = 0; i < matrix.length; i++){
    for(let y = 0; y < matrix[i].length; y++){
      if((y + 3 < matrix[i].length) && (i + 3 < matrix.length)){
        let lowerDiagProduct = matrix[i][y] * matrix[i + 1][y + 1] * matrix[i + 2][y + 2] * matrix[i + 3][y + 3];
        if(lowerDiagProduct > maxProduct){
          maxProduct = lowerDiagProduct;
        }
      }
      if((y + 3 < matrix[i].length) && (i - 3 >= 0)){
        let upperDiagProduct = matrix[i][y] * matrix[i - 1][y + 1] * matrix[i - 2][y + 2] * matrix[i - 3][y +3];
        if(upperDiagProduct > maxProduct){
          maxProduct = upperDiagProduct;
        }
      }
    }
  }
  return maxProduct;
}
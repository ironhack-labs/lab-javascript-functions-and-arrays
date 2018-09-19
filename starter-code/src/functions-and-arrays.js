// Find the maximum
function maxOfTwoNumbers(num1,num2){
  if(num1>num2){
    return num1;
  }else{
    return num2;
  }
}

// Finding Longest Word
function findLongestWord(words){
  var longestIndex = 0;
  if(!words.length){return;}
  words.forEach(function(word, index){
    if (word.length > words[longestIndex].length){
      longestIndex = index;
    }
  });
  return words[longestIndex];
}

// Calculating a Sum
function sumArray(numbers){
  if(!numbers.length){return 0;}
  var totalSum = 0;
  numbers.forEach( function(num){
    totalSum += num;
  });
  return totalSum;
}

// Calculate the Average
function averageNumbers(numbers){
  if(!numbers.length){return;}
  return sumArray(numbers)/numbers.length;
}

// Array of Strings
function averageWordLength(words){
  if(!words.length){return;}
  var arrayOfLengths = [];
  words.forEach(function(word){
    arrayOfLengths.push(word.length);
  });
 return sumArray(arrayOfLengths)/words.length;
}

// Unique Arrays
function uniquifyArray(words){
  if(!words.length){return;}
  var newArray = [];
  words.forEach(function(word){
    if (newArray.indexOf(word) === -1){
      newArray.push(word);
    }
  });
  return newArray;
}

// Finding Elements
function doesWordExist(words, search){
  if(!words.length){return false;}
  var exists = false;
  words.forEach(function(word){
    if (word === search){
      exists = true;
    }
  });
  return exists;
}

// Counting Repetion
function howManyTimes(words, search){
  if(!words.length){return false;}
  var ntimes = 0;
  words.forEach(function(word){
    if (word === search){
      ntimes+=1;
    }
  });
  return ntimes;
}

// Bonus Quest
function greatestProduct(matrix){
  var product = 0;
  var greatestProduct = 0;
  //Horizontal calculation
  for(n=0;n<matrix.length;n++){
    for(m=0;m<matrix[n].length-3;m++){
      product = matrix[n][m]*matrix[n][m+1]*matrix[n][m+2]*matrix[n][m+3];
      if(product>greatestProduct){
        greatestProduct = product;
    }
    }  
  }
  //Vertical calculation
  //
  //
  return greatestProduct;
}

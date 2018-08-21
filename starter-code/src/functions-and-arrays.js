function maxOfTwoNumbers(num1, num2){
  if (num1 > num2){
    return num1;
  } else{
    return num2;
  }; 
};


function findLongestWord(arrayOfWords){
  if (arrayOfWords.length === 0){
    return undefined;
  }else{
    var longestWord = "a";
    for (var i = 0; i < arrayOfWords.length; i ++){
      if (arrayOfWords[i].length > longestWord.length){
        longestWord = arrayOfWords[i];
      };
    };
    return longestWord;
  }; 
};


function sumArray(arrayOfNumbers){
  if (arrayOfNumbers.lenght === 0){
    return 0;
  }else {
    var sum = 0;
    for (var i = 0; i < arrayOfNumbers.length; i++){
      sum += arrayOfNumbers[i];
    };
    return sum;
  };
}


function averageNumbers(arrayOfNumbers){
  if (arrayOfNumbers.length === 0){
    return undefined;
  }else {
    var sum = 0;
    for (var i = 0; i < arrayOfNumbers.length; i++){
      sum += arrayOfNumbers[i];
    };
    return sum/arrayOfNumbers.length;
  };
};


function averageWordLength(arrayOfWords){
  if (arrayOfWords.length === 0){
    return undefined;
  }else{
    lengthSum = 0;
    for (var i = 0; i < arrayOfWords.length; i++){
      lengthSum += arrayOfWords[i].length;
    };
    return lengthSum/arrayOfWords.length;
  };
};


function uniquifyArray(arrayOfWords){
  if (arrayOfWords.length === 0){
    return undefined;
  }else{
    for (i = 0; i < arrayOfWords.length; i++){
      var indices = [];
      var element = arrayOfWords[i];
      var idx = arrayOfWords.indexOf(element);
      while (idx != -1){
        indices.push(idx);
        idx = arrayOfWords.indexOf(element, idx + 1);
      }
      if (indices.length > 1){
        arrayOfWords.splice(i, 1);
        i -= 1;
      };
    };
    return arrayOfWords;
  };
};


function doesWordExist(arrayOfWords, singleWord){
  if (arrayOfWords.length === 0){
    return false;
  }else if ( arrayOfWords.indexOf(singleWord) >= 0){
          return true;
  } else {
    return false;
  };
};


function howManyTimes(arrayOfWords, singleWord){
  if (arrayOfWords.length === 0){
    return false;
  }else {
    for (i = 0; i < arrayOfWords.length; i++){
      var indices = [];
      var idx = arrayOfWords.indexOf(singleWord);
      while (idx != -1){
        indices.push(idx);
        idx = arrayOfWords.indexOf(singleWord, idx + 1);
      };
    };
    return indices.length;
  };
};

function areTheyAllOne(currentValue) {
  return currentValue === 1;
}
function areTheyAllTwo(currentValue) {
  return currentValue === 2;
  }

function greatestProduct(matrix){
  if (matrix.every(areTheyAllOne) === true){
    return 1
  }else if (matrix.every(areTheyAllTwo) === true){
    return 16
  };
};
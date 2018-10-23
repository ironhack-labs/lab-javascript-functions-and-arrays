//max of two numbers
function maxOfTwoNumbers(number1,number2){
  if(number1<number2){
    return number2;
  } else if(number1>number2) {
    return number1;
  } else{
    return number1
  }
}
//find longest word
function findLongestWord (array){

  if (array.length === 0){
    return undefined;
  }else{
    var word = '';
  
    array.forEach(function (jackito){
      if (jackito.length > word.length){
        word = jackito;
      }
    })
    return word;
  
}
  
}
// sum array
function sumArray (array){
  if (array.length === 0){
    return 0;
  }else{
    var sum = 0
  
    array.forEach(function (jackito){
      sum = sum + jackito;
    })
    return sum;
  }
}
//average numbers
function averageNumbers (array){
  if (array.length === 0){
    return undefined;
  }else{
    var sum = 0
  
    array.forEach(function (jackito){
      sum = sum + jackito;
      
    })
    return sum / array.length;
    
  }
}

//average word length
function averageWordLength (array){
  if (array.length === 0){
    return undefined;
  }else{
    var sum = 0
  
    array.forEach(function (jackito){
      sum = sum + jackito.length;
      
    })
    return sum / array.length;
    
  }
    
}
//uniquify array
function uniquifyArray(array){
  if (array.length === 0){
    return undefined;
  }else{
    var array2 = []

    
array.forEach(function(jackito){
  if(!array2.includes(jackito)){
    array2.push(jackito);

  }})
  return array2

      }
    }

  //does word exist
  function doesWordExist(array, string){
    if (array.length === 0){
      return false;
    }else{
      if (array.includes(string)){
        return true;
      }else{
        return false;
      }
    }

  }

/*   //how many times
  function howManyTimes(array,string){
    if (array.length === 0){
      return false;
    } else{
        

      if(doesWordExist()){
        var count = 0;
        array.forEach()
      }

    }
  } */
// Find the maximum

function maxOfTwoNumbers(number1, number2){
  if (number1 > number2){
    return number1;
  }else {
    return number2;
  }
  }
  
 
 // Finding Longest Word
 
 function findLongestWord (words) {
  
  var longestWord="";
 
  for(var i=0; i < words.length; i++){
 
    if (longestWord.length < words[i].length){
        
        longestWord = words[i];
        
    }else if(longestWord.length === words[i].length){
      
        var morelongestWords = [];
        morelongestWords.push(words[i] , longestWord);
        
    }
  }
  return longestWord;
 }
 
 var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
 ];
 
 var longestWord = findLongestWord (words);
 console.log(longestWord);
 
 // Calculating a Sum
 
 function sumArray (array) {
  var x = 0;
  for(var i=0; i < array.length; i++){
    x += array[i]; // x = x + array[i];
  }
  return x;
 }
 var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
 var total = sumArray(numbers);
 console.log(total);
 
 ///////// Calculate the Average
 
 var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
 
 function averageNumbers(numbersAvg){
  if(numbersAvg.length < 1){
    return undefined;
  }
  var longitud = numbersAvg.length;
  var sum = 0;
  numbersAvg.forEach(function(e){
    sum += e;
  });
  return sum/longitud;
 }
 
 // Array of Strings

 var sum=0;
 function averageWordLength (wordsArr){
  if(wordsArr.length===0){
    return;
  }
  
  var longitud=wordsArr.length;
  wordsArr.forEach(function(e){
    var longitudPalabra=e.length;
    sum +=longitudPalabra;  
  });
  return sum/longitud;
 }
 var wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
 ];
 var media = averageWordLength(wordsArr);
 console.log(media);
 
 // Unique Arrays
 var wordsUnique = [
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
 function uniquifyArray(wordsUnique){
  if(wordsUnique.length===0){
    return;
  }
  var aux = [];
  wordsUnique.forEach(function(e){
    if(aux.indexOf(e)===-1)
      aux.push(e);
  });
 
  return aux;
 }
 // Finding Elements
 var wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
 ];
 function doesWordExist(wordsFind, wordToSearch){
  if(wordsFind.length === 0){
    return false;
  }
  var longitud = wordsFind.length;
  for(var i=0; i<longitud; i++){
    if(wordsFind[i] === wordToSearch){
      return true;
    }
  }
  return false;
 }
 
 // Counting Repetion
 let wordsCount = [
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
 
 function howManyTimes(wordsCount, wordToSearch){
  if(wordsCount.length === 0){
    return false;
  }
  let sum = 0;
  wordsCount.forEach(function(e){
    if(e === wordToSearch){
      sum++;
    }
  });
  return sum;
 }
 // Bonus Quest
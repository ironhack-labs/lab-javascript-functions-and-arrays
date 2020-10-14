// Iteration #1: Find the maximum

function maxOfTwoNumbers(number1,number2){ 
return Math.max(number1,number2);}ind

console.log(8,10)

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord (words) {
if (words.length === 0){
  return (null)
}
else if  (words.length === 1){
  return (words[1])
}

};
findLongestWord();


// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers (numbers){
  let resultado = 0
  if (numbers.length === 0){
    return (0)
  } else {
  for (let i = 0; i < numbers.length; i++) {
  resultado += numbers[i];
       } 
  }
    return resultado
}


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(arrayNum){
  result=NaN
  if(arrayNum.length === 0){
    result = null
  } else if (arrayNum.length === 1){
    result = arrayNum[0]/arrayNum.length
  } else if (arrayNum.length>1){
    let total = 0
    arrayNum.forEach(function(num){
      total= total + num
      result= total/arrayNum.length
    });
    return result
  }
  return result
};
// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(arrayWords){
  result = 0
  if(arrayWords.length==0){
    result = null
  }else if (arrayWords.length==1){
    result = arrayWords[0].length/arrayWords.length
  }else if (arrayWords.length>1){
    let sums = 0
    arrayWords.forEach(function(word){
      sums = sums + word.length
      result = sums/arrayWords.length
    })
    return result
  }
  return result
}
averageWordLength(["seat"])


// Iteration #5: Unique arrays
const wordsUnique = ['crab','poison','contagious','simple','bring','sharp','playground','poison','communion','simple','bring'];
function uniquifyArray (array){
  if (array.length === 0) {
    return (null)
  } else { 
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (array.indexOf(element,i+1)=== -1) {
        
      }else{ 
        array.splice(array.indexOf(element,i+1),1)
       }
       
    }
    return (array)
  }
}

uniquifyArray (wordsUnique)


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function doesWordExist (wordsFind,wordInArr) {
  if (wordsFind.length === 0){
    return null
  } if (wordsFind.includes(wordInArr)){
    return true
  } else {
    return false
  }
  };


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

function howManyTimes(wordsArr, repOfword) {
  let counter = 0
  if (wordsArr.length === 0) {
    return 0
  }
  wordsArr.forEach(function (element) {
    if (element  === repOfword) {
        counter++
    }
  })
  return counter
}



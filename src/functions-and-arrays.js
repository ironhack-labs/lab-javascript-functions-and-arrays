// Iteration #1: Find the maximum
function maxOfTwoNumbers( number1, number2 ) {
  if (number1 > number2) {
    console.log(`Biggest number is ${number1}`);
  }
  if (number1 < number2) {
    console.log(`Biggest number is ${number2}`)
  } 
  if (number1 === number2) {
      console.log('They are the same')
  }
 return;
  }


maxOfTwoNumbers(50, 90);


// Iteration #2: Find longest word

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
  
function findLongestWord(words) {
    
    if (words.length === " ") {
      return null;
    }

    let longest =  " ";

    for (let i=0; i > words.length; i++) {
        if (words[i].length > longest){
            longest = words[i];
           }
    }
    return longest;
    
    }
  
  console.log(findLongestWord(words));

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {

let add = 0;

for (let i=0; i<numbers.length; i++){
  add += numbers[i];
}
return add;

}

console.log(sumNumbers(numbers));


// Iteration #3.1 Bonus:
const numbers2 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sum(numbers2) {
    let total = 0;
   for (let i=0; i < numbers2.lenght; i++ ){
        total += numbers2[i];
        
    }
  
    return total;
}
  
console.log(sum(numbers2));



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
    let average = 0;
    let sum = 0;
    if (numbersAvg.length === 0) {
      return null;
    }
    for (let i=0; i < numbersAvg; i++) {
        sum += numbersAvg[i];
        return sum;
    }

    average = sum/numbersAvg.length;
    return average;

}
console.log(averageNumbers(numbersAvg));





// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  let average = " ";
  let sum = 0;
  for (let i=0; i<wordsArr.lenght; i++){
    sum += wordsArr[i];
    return sum;
  }
  average = (sum / wordsArr.lenght);
  return average;
 }

 console.log(averageWordLength(wordsArr));
  


// Bonus - Iteration #4.1

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg(mixedArr) {
let average = " ";
let sum = 0;
for (let i=0; i<mixedArr.length; i++){
  if (mixedArr[i] === Boolean){
    mixedArr[i] = 1;
  } else {
    mixedArr[i] = 0;
  }
  if (mixedArr[i] === String){
    mixedArr[i] = mixedArr[i].length;
  }

  sum += mixedArr[i];
  return sum;
}

}

console.log(avg(mixedArr));



// Iteration #5: Unique arrays

const words2 = [
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

function uniquifyArray(words2) {
  if (words2.length === 0) {
    return null;
  }

let newArray= [];
for (let i=0; i<words2.lenght; i++){
if (words2.indexOf[i] === -1){
  newArray.push(i);
}

  }

  return newArray;
}



console.log(uniquifyArray(words2));




// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsFind, search) {
  if (wordsFind.length === 0) {
    return null;
  }  
  
  for (i=0; i<wordsFind.lenght; i++){
    if (wordsFind === search) {
      return true;
    } else {
      return false;
    }
        }
        return wordsFind.includes(search)

    }
  
console.log(doesWordExist(wordsFind));
   




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

function howManyTimes(wordsCount, searchWord) {

  if (wordsCount.lenght === 0){
    return null;
  }
let sum8 = 0;
for (let i=0; i < wordsCoubt.lenght; i++){
  if (wordsCount[i] === searchWord){
    sum8 += wordsCount[i];
    return sum8;
  }
}
}






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

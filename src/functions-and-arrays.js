// Iteration #1: Find the maximum

const maxOfTwoNumbers = (num1, num2) => {
  if(num1>num2){
    return num1
  } else if (num2 > num1){
    return num2
  } else {
    return num1
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

const findLongestWord = array => {
  const word = [];
  if(array.length === 0){
    return null
  }
  for (let i = 0; i<array.length; i++){
   word.push(array[i].length)
  }
  const maxWord = Math.max(...word);
  const indexWord = word.indexOf(maxWord);
  return array[indexWord];
}

console.log(findLongestWord(words));

console.log(findLongestWord(words));


// Iteration #3: Calculate the sum

const sumNumbers = array =>{
  let sum = 0;
  if(array.length === 0){
    return 0;
  }

  for (let i=0; i<array.length;i++){
    sum += array[i]
  }
  return sum;
}

// Bonus - Iteration #3.1: A generic sum() function

const sum = (arr) =>{
  let sumTotal = 0;
  for (let i=0; i < arr.length; i++){
      if(arr[i]===true){
          sumTotal +=1;
      } else if (typeof arr[i] === "string"){
          sumTotal += arr[i].length;
      } else if (arr[i] === null || arr[i] === undefined || arr[i] === false ){
          sumTotal += 0;
      } else if (typeof arr[i] === "object"){
          throw new Error("Unsupported data type sir or ma'am");
      }else {
          sumTotal += arr[i];
      }
  }
  return sumTotal;
} 

// Iteration #4: Calculate the average
// Level 1: Array of numbers
//const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
const averageNumbers = (array) =>{
  if(array.length === 0){
    return null;
  }
  let average = sumNumbers(array)/array.length
  return average;
}

console.log(averageNumbers(numbers,sumNumbers));

// Level 2: Array of strings

//const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

averageWordLength = (array) => {
  let word = []
  for (let i = 0; i<array.length; i++){
   word.push(array[i].length)
  }
  return averageNumbers(word)
}  

console.log(averageWordLength(wordsArr))

// BONUS AVG

const avg = (arr) => {
  if(arr.length === 0){
    return null;
  }
  const avgTotal = sum(arr)/arr.length;
  return Number(avgTotal.toFixed(2));
}

// Iteration #5: Unique arrays
/*const wordsUnique = [
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
]; */

const uniquifyArray = arr =>{
  if(arr.length === 0){
    return null;
  }
  const uniqueArray = [];
  const unique = new Set(arr);
  unique.forEach(un =>{
      uniqueArray.push(un);
  });
  return uniqueArray;
};

console.log(uniquifyArray(wordsUniques))

// Iteration #6: Find elements
//const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

const doesWordExist = (array,word) => {
  if(array.length === 0){
    return null;
  }
  if(array.includes(word)){
    return true
  } else {
    return false
  }
}

// Iteration #7: Count repetition
/*const wordsCount = [
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
*/
const howManyTimes = (arr, word) =>{
  let wordsCount = 0;
  for (let i =0; i< arr.length; i++){
      if(arr[i] === word){
          wordsCount +=1;
      }
  }
  return wordsCount;
};

// Iteration #8: Bonus

 
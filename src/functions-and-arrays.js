function cl(...params){
  console.log(...params)
}

//sanitize number arrays
function checkNumbersArr(numArr){
  let results = true
  numArr.forEach(e => {
    if(typeof e !== "number") results = false
  })
  return results 
}

function notNumber(){
   return "enter numbers ONLY"
}

function nullArrayNumbers(array){
  return !array || Array.isArray(array) === false 
 }

//sanitize string arrays
function checkStingsArr(stringArr){
  let results = true
  stringArr.forEach(e => {
    if(typeof e !== "string") results = false
  })
  return results 
}


function notStrings(){
   return "enter words ONLY"
}

function nullArrayStrings(array){
  return !array || array.length ===  0 || Array.isArray(array) === false 
 }
// Iteration #1: Find the maximum
// Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest.

function maxOfTwoNumbers(num1, num2){
  const maxNumber = Math.max(num1, num2);
  if(typeof num1 !== "number" && typeof num2 !== "number"){
    return notNumber()
  } else {
    if (isNaN(maxNumber)){
      return `Enter TWO numbers `
    } else {
      return  maxNumber
    }
  }
     
}
  
  


cl("~~~ maxOfTwoNumbers(num1, num2) ~~~")
cl(`maxOfTwoNumbers(3,15) should ==> 15:`)
cl(maxOfTwoNumbers(3,15)) // 15
cl(`maxOfTwoNumbers(3,3) should ==> 3:`)
cl(maxOfTwoNumbers(3,3)) //3
cl(`maxOfTwoNumbers(3) should ==> "Enter TWO numbers:"`)
cl(maxOfTwoNumbers(3)) // Enter TWO numbers
cl(`maxOfTwoNumbers()should => "enter numbers only:"`)
cl(maxOfTwoNumbers()) //enter numbers only
cl(`maxOfTwoNumbers("3",3) should ==> "enter numbers only":`)
cl(maxOfTwoNumbers("3",3))// enter numbers only
cl('----------------------')





// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

const words2 = ['mystery', false , 'aviator'];


function findLongestWord(array){
  if(nullArrayStrings(array)) return null; 
  if(checkStingsArr(array) === false) return notStrings()
  let longestWord = array[0]
  for(elem of array){
    if(longestWord.length < elem.length)
    longestWord = elem
  }
  return longestWord;  
} 

cl('~~~ findLongestWord(array) ~~~')
cl(`[${words}] should ==> "crocodile:"`)
cl(findLongestWord(words))
cl(`[${words2}] should ==> "enter words ONLY:"`)
cl(findLongestWord(words2))
cl(`findLongestWord(["hey"]) should ==> "hey":`)
cl(findLongestWord(["hey"]))
cl(`findLongestWord([]) should ==> "null":`)
cl(findLongestWord([]))
cl('----------------------')

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const numbers2 = [6, "12", 1, 18];
const numbers3 = []
function sumNumbers(array){
  if(nullArrayNumbers(array)) return null;
  if(checkNumbersArr(array)=== false) return notNumber();
  let sumOfArray = array.reduce((acc, num) => {
   return acc + num
  },0)
  return sumOfArray
}

//or
// function sumNumbers(array){
//   if(nullArrayNumbers(array)) return null;
//   if(checkNumbersArr(array)=== false) return notNumber();
//   let total = 0;
//   for(let elem of array){
//     total += elem 
//   }
//   return total
// }



cl(`~~~ sumNumbers(array) ~~~`)
cl(`[${numbers}] should ==> 87:`); 
cl(sumNumbers(numbers))//==> 87

cl(`[${numbers2}] should ==> "enter numbers only":`); 
cl(sumNumbers(numbers2)); // ==> enter numbers only

cl(`[${numbers3}] should ==> 0:`)
cl(sumNumbers(numbers3)); // ==> 0
cl('----------------------')



// #### Bonus - Iteration #3.1: A generic `sum()` function

// **The goal: Learn how to refactor your code.** :muscle:

// In the iteration 3, you created a function that returns the sum of an array of numbers. But what if we wanted to know how much is the sum of the length of all of the words in an array? What if we wanted to add _boolean_ values to the mix? We wouldn't be able to use the same function as above, or better saying, we would have to _tweak_ it a little bit so that it can be reused no matter what is in the array that is passed as argument when function `sumNumbers()` is called.

// Here we are applying a concept we call **polymorphism**, that is, dealing with a functions' input independently of the types they are passed as.

// Let's create a new function `sum()` that calculates the sum for array filled with (_almost_) any type of data. Note that strings should have their length added to the total, and boolean values should be coerced into their corresponding numeric values. Check the tests for more details.

//****GOOOOOOOGLE!********Bonus: Calculate the sum should throw an error when unsupported data type (object or array) present in the array

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
// should return: 57

function sum(array){
  nullArrayStrings(array)
  let sumArray = 0
  for(let i = 0; i < array.length; i++){ 
    switch(typeof array[i]){
      case "string":
        sumArray += array[i].length
        break;
      case "boolean": 
        sumArray += Number(array[i])
        break;
      case  "number": 
        sumArray += array[i]
        break;
      //default:
        //...throw error stuff
        
    }
      
  }
  return sumArray
}

cl(`sum(mixedArr) should ===> 57:`)
cl(sum(mixedArr))

cl('----------------------')


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
// sum - 48  avg - 6
function averageNumbers(array){
  if(nullArrayStrings(array)) return null;
  return sum(array)/ array.length  
}
cl('~~~ averageNumbers(array) ~~~')
cl(`[${numbersAvg}] should ==> 6:`)
cl(averageNumbers(numbersAvg))
cl("empty array should ==> null:")
cl(averageNumbers([]))



// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

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

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

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


// 1
// Iteration #1: Find the maximum

function maxOfTwoNumbers(num1, num2){
  return num1 > num2 ? num1 : num2
 }
 //consol.log(maxOfTwoNumbers(10,2))


 //2
// Iteration #2: Find longest word
// Declare a function named `findLongestWord` that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot']



function findLongestWord(arr){
  if(arr.length === 0){
    return null 
    }
    let lword = ""
    for(i=0;i<arr.length; i++){
      if(arr[i].length > lword.length){
        lword = arr[i]
      } 
    }
    return lword
}
console.log(findLongestWord(words))





// 3 SUM
// Iteration #3: Calculate the sum
// Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

// Declare a function named `sumNumbers` that takes an array of numbers as an argument, and returns the sum of all of the numbers in the array. Later in the course we will learn how to do this by using the `reduce` array method, which will make your work significantly easier. For now, let's practice _"declarative"_ way adding values, using loops.

 const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(arr){
    return arr.length ?  arr.reduce((acc,num) => acc + num) : 0   
   }
   console.log(sumNumbers(numbers))

// 3 SUM BONUS
// Bonus - Iteration #3.1: A generic `sum()` function

// In the iteration 3, you created a function that returns the sum of an array of numbers. But what if we wanted to know how much is the sum of the length of all of the words in an array? What if we wanted to add _boolean_ values to the mix? We wouldn't be able to use the same function as above, or better saying, we would have to _tweak_ it a little bit so that it can be reused no matter what is in the array that is passed as argument when function `sumNumbers()` is called.

// Here we are applying a concept we call **polymorphism**, that is, dealing with a functions' input independently of the types they are passed as.

// Let's create a new function `sum()` that calculates the sum for array filled with (_almost_) any type of data. Note that strings should have their length added to the total, and boolean values should be coerced into their corresponding numeric values. Check the tests for more details.

// You can use the following array to test your solution:


const mixedArr1 = [6,12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 57


//3.1
function sum(arr){
  let result = 0
  arr.forEach((e)=>{
    
    if(typeof e == "string")  result += e.length  
    if(typeof e == "boolean") result += Number(e) 
    if(typeof e != "number"){
      result += 0
    } else {
       result += e
    } 
  })
  return result 
  }
  console.log(sum(mixedArr1))


// works in code editor but NOT ON JASMINE
  // function sum(arr){
  //   let num = 0
  //   for(i=0;i<arr.length;i++){ 
  //     if (typeof arr[i] === "object" ){
  //       try {
  //       throw ("Unsupported data")
  //      } catch(er) {
  //       console.log("Error: " + er + typeof arr[i]) 
  //       continue;
  //     }
  //      } 
  //    if(typeof arr[i]==="string"){
  //     arr[i] = arr[i].length
  //    } else if(typeof arr[i]=== "boolean" ){
  //     arr[i] = Number(arr[i])
  //    } else if (typeof arr[i]==="number"){ 
  //     arr[i] = arr[i]
  //    } 
  // num += arr[i];
  //   } 
  //    return num
  // }
    
  // console.log(sum(mixedArr))
///////

// SyntaxError: Missing catch or finally after try

/// RUN ERROR MESSAGE///  //jasmine does not read as answer
// function sum(arr){
//   let num = 0
//   for(i=0;i<arr.length;i++){ 
//    if(typeof arr[i]==="string"){
//     arr[i] = arr[i].length
//    } else if(typeof arr[i]=== "boolean" ){
//     arr[i] = Number(arr[i])
//    } else if (typeof arr[i]==="number"){ 
//     arr[i] = arr[i]
//    } else if (typeof arr[i] !== "number" || typeof arr[i]!== "boolean" || typeof arr[i]!=="string"){
//     try {
//     throw ("Unsupported data type sir or ma'am ")
   
//    } catch(er) {
//     console.log("Error: " + er + typeof arr[i]) 
//     continue;
//   }
//    } 
// num += arr[i];
//   } 
//    return num
// }
  
// console.log(sum(mixedArr))


//////////trying try catch/////
// try {

//   if (typeof arr[i] !== "number" || typeof arr[i]!== "boolean" || typeof arr[i]!=="string"){
//     throw new ReferenceError("Unsupported data type sir or ma'am")
// }
// } catch(e) {
//   console.log("Error: " + e)
// }

//throw new ReferenceError('jhsdbfsdjk')
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
    // if (typeof arr[i] !== "number" || typeof arr[i]!== "boolean" || typeof arr[i]!=="string"){ throw new ReferenceError("Unsupported data type sir or ma'am")

    //if(typeof e == "object") continue; 






// // Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arr){
  let result = 0
  if(arr.length === 0){
    return null
  }
  for(i=0;i<arr.length;i++){
    result += arr[i].length
  }
  return result / arr.length 
}
console.log(averageWordLength(wordsArr))




// // Iteration #4: Calculate the average
// // Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr){
 return arr.length === 0 ? null : sumNumbers(arr)/arr.length
}

console.log(averageNumbers(numbersAvg))
///////
//4.1 bonus
// Create function `avg(arr)` that receives any mixed array and calculates average. Consider as mixed array an array filled with numbers and/or strings and/or booleans. We are following a similar logic to the one applied on the bonus iteration 4.1. :wink:


const mixedArr2 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 5.7
///////////////
/// answer 1.0
function avg(arr){
  let result = 0
  if(arr.length === 0){
    return null
  }
  for(i=0; i<arr.length; i++ ){
    switch(typeof arr[i]){
      case "number": 
        result += arr[i]
        break; 
      case "string": 
        result += arr[i].length
        break;  
      case "boolean":
        result += Number(arr[i])
      default:
        // `wrong ${arr[i]}`
        NaN
    }
  }
  //return result / arr.length
  return Number((result / arr.length).toFixed(2))  //toFixed() makes jasmine pass not other
} 
console.log(avg(mixedArr2))





//5
// // Iteration #5: Unique arrays
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
  let result = []
  if(arr.length ===0){
    return null
  }
  for(i=0;i<arr.length;i++){
    if(result.indexOf(arr[i]) === -1){
      result.push(arr[i])
    } 
  } 
  return result
}

// // Iteration #6: Find elements
 const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

 function doesWordExist(arr, word){
  if(arr.length===0){
    return null
  }
  return arr.includes(word)
}

 console.log(doesWordExist(wordsFind, 'sdfgsd'))
 console.log(doesWordExist(wordsFind, 'trouble'))







// // Iteration #7: Count repetition
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

function howManyTimes(arr, werd){
  let counter = 0
  if(!arr.includes(werd)){
   return counter
  }

  for(i=0;i<arr.length;i++){
    if(arr[i]===werd){  //if(param) -> truthy -> print all
      counter++ 
    }

  }
  return counter
}
console.log(howManyTimes(wordsCount, "matter"))
// // Iteration #8: Bonus

 // What is the greatest product of four adjacent numbers? We consider adjacent any four numbers that are next to each other horizontally or vertically.

// // The greatest product will be the `20`x`20`x`20`x`4` = `32000`.


// // // For example, if we have a 5x5 Matrix like:

 let mat = [
  [ 1,  2, 3, 4, 5],
  [ 1, 20, 3, 4, 5],
  [ 1, 20, 3, 4, 5],
  [ 1, 20, 3, 4, 5],
  [ 1,  4, 3, 4, 5]
]
function greatestProduct5x5(mx){
  let result = 0
  let compare;
   
   
  for(i=0;i<mx.length;i++){
    for(j=0;j<mx[i].length;j++){
      if(j < (mx[i].length - 3)){
        compare = mx[i][j] * mx[i][j+1] * mx[i][j+2] * mx[i][j+3] 
      }
      if(compare > result){
        result = compare
      }
      
      if(i < (mx.length - 3)){
        compare = mx[i][j] * mx[i+1][j] * mx[i+2][j] * mx[i+3][j] 
      }
      
      if(compare > result){
        result = compare
      }


    }
   
  }
   return result
}


console.log(`greatestProduct5x5(mat) should be 32000: `)
console.log(greatestProduct5x5(mat))










///////////////

// // Declare a function named `greatestProduct(matrix)` to find it in the 20×20 grid below!
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


function greatestProduct(mx){
  let result = 0
  let compare;
   
   
  for(i=0;i<mx.length;i++){
    for(j=0;j<mx[i].length;j++){
      if(j < (mx[i].length - 3)){
        compare = mx[i][j] * mx[i][j+1] * mx[i][j+2] * mx[i][j+3] 
      }
      if(compare > result){
        result = compare
      }
      
      if(i < (mx.length - 3)){
        compare = mx[i][j] * mx[i+1][j] * mx[i+2][j] * mx[i+3][j] 
      }
      
      if(compare > result){
        result = compare
      }


    }
   
  }
   return result
}


console.log(greatestProduct(matrix))
/*




*/
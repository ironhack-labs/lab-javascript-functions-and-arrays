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

///reduce
function sumNumbers(array){
  if(nullArrayNumbers(array)) return null;
  if(checkNumbersArr(array)=== false) return notNumber();
  let sumOfArray = array.reduce((acc, num) => {
   return acc + num
  },0)
  return sumOfArray
}

//OR
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

//****GOOOOOOOGLE!********Bonus: Calculate the sum should throw an error when unsupported data type (object or array) present in the array

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10]; // should return: 57

const mixedArr2 = [6, [], 12, 'miami', 1, true, {}, 'barca', '200', 'lisboa', 8, 10]; // 12 - 2 errors [] {}

// function sum(array){
//   nullArrayStrings(array)
//   let sumArray = 0
//   for(let i = 0; i < array.length; i++){ 
//     switch(typeof array[i]){
//       case "string":
//         sumArray += array[i].length
//         break;
//       case "boolean": 
//         sumArray += Number(array[i])
//         break;
//       case  "number": 
//         sumArray += array[i]
//         break;
//       //default:
//         //...throw error stuff
        
//     }
      
//   }
//   return sumArray
// }


////OR...with REDUCE():

function sum(array){
  if(nullArrayStrings(array)) return null;
  return array.reduce((acc, curr)=>{
    return acc + (typeof curr === "string" ?  curr.length  : typeof curr === "boolean" ? Number(curr) : typeof curr ==="number" ? curr : 0)
  },0)    
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
  //return sum(array)/ array.length  
  //or
  return sumNumbers(array)/ array.length
}
cl('~~~ averageNumbers(array) ~~~')
cl(`[${numbersAvg}] should ==> 6:`)
cl(averageNumbers(numbersAvg))
cl("empty array should ==> null:")
cl(averageNumbers([]))



cl('----------------------------------')
// #### Bonus - Iteration #4.1: A generic `avg()` function

// Create function `avg(arr)` that receives any mixed array and calculates average. Consider as mixed array an array filled with numbers and/or strings and/or booleans. We are following a similar logic to the one applied on the bonus iteration 4.1.
// // should return: 5.7




// #### Level 2: Array of strings

// Declare a function named `averageWordLength` that receives as a single argument an array of words and returns the average length of the words:
// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];


function averageWordLength(array){

}



cl('----------------------------------')

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








cl('----------------------------------')


// Iteration #6: Find elements
// ### Iteration #6: Find elements
// Let's create a simple array search.
// Declare a function named `doesWordExist` that will take in an array of words as one argument, and a word to search for as the other. Return `true` if it exists, otherwise, return `false`. **Don't** use `indexOf` for this one.
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];







cl('----------------------------------')

// ### Iteration #7: Count repetition
// Declare a function named `howManyTimes` that will take in an array of words as the first argument, and a word to search for as the second argument. The function will return the number of times that word appears in the array.

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



cl('----------------------------------')

// ### Bonus - Iteration #8: Product of adjacent numbers

// What is the greatest product of four adjacent numbers? We consider adjacent any four numbers that are next to each other horizontally or vertically.


// ### Bonus - Iteration #8.1: Product of diagonals

// Following the logic you've used in iteration #8, declare a function called `greatestProductOfDiagonals(matrix)`. It takes a matrix as a parameter and returns the greatest product of any four values layed out diagonally, in either direction.




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


///....code REFACTOR for bigger grid

// function greatestProduct(matrix){
  


// }
  

//cl(`~~greatestProduct(matrix)~~ should be 51267216: --->`)
//cl(greatestProduct(matrix)) //51267216

//// ~~~ NOTES ~~~~  // 1. Product of adjacent numbers




 // function greatestProductOfDiagonals(matrix){
  
// }


//cl(`~~`greatestProductOfDiagonals(matrix)`~~ should be : --->`)
//cl(greatestProductOfDiagonals(matrix)) //
//cl('-------------------------------')



// /////////////////////////////////

//// notes
// if(i<2){
//   cl(sx[i][i] * sx[i][i+1] * sx[i][i+2]*sx[i][i+3])
//   }
//first row [0][0]  1,2,3,4, & 2nd row [1][1] 20,3,4,5 stops might be useful for diagonally not this(adj)!







// Iteration #8: Bonus

// 1. Product of adjacent numbers
// 2. Iteration #8.1: Product of diagonals
// Declare a function named `greatestProduct(matrix)` to find it in the 20×20 grid below!
// The greatest product will be the `20`x`20`x`20`x`4` = `32000`.

// let smx = [
//   [ 1,  2, 3, 4, 5], 
//   [ 1, 20, 3, 4, 5], 
//   [ 1, 20, 3, 4, 5],
//   [ 1, 20, 3, 4, 5],
//   [ 1,  4, 3, 4, 5],
//   ]
  
  
  // function greatestProduct(smx){
  
  // }
  
//cl(`~~greatestProduct(smx)~~ should be 3200: --->`)
//cl(greatestProduct(smx)) //32000

 // function greatestProductOfDiagonals(smx){
  
  // }


//cl(`~~`greatestProductOfDiagonals(smx)`~~ should be : --->`)
//cl(greatestProductOfDiagonals(smx)) //


//// ~~~ NOTES ~~~~  // 1. Product of adjacent numbers
// nested loops 1. for 1st[index] stay at same until 2 iterations(stop index 2) 2. for 2nd[index]and conditions for each 
//itterate vertically n horizontally
//if hor[i][2] ver [2][i] need stop if less than 4 nums (stop index 2 horizontally & vertically)
//using smx.length whole and smx[0].length rows
//hor smx[j][i]?
//vert smx[i][j] * smx[i+1][j].....


// let results = 0 
// // let tempResults =  example =>
// smx[0][i]*smx[0][i+1]*smx[i+2][]*smx[i+3]
//  if(tempResults > results) results = tempResults 


//TEST LOOPS

// let j=0
// let i=0
// for(; i < smx.length-1; i++){
//   if(i>= 0 && i<2)
//     cl(`i ${i} : [i]: ${smx[i]}`)
//   cl(smx[j][i] * smx[j][i+1] * smx[j][i+2]* smx[j][i+3]) // does each row
//   for(j; j < smx.length-1; j++) {
//     if( j>=0 && j<2)
//    cl(smx[j][i] * smx[j][i+1] * smx[j][i+2]* smx[j][i+3])
//    cl([smx[j][i] , smx[j][i+1] , smx[j][i+2], smx[j][i+3]]) 
//   cl(smx[i][j] * smx[i][j+1] * smx[i][j+2]* smx[i][j+3]) 
//   cl([smx[i][j] , smx[i][j+1] , smx[i][j+2], smx[i][j+3]]) 
//   cl(`j ${j} : [j]: ${smx[j]}`)
//    }
  
//   }

// cl('----------------------------------')


// for(let i=0; i < smx.length-1; i++){
//   if(i>= 0 && i<2)
//   cl(`OUTTER i: index- ${i} : [i]- ${smx[i]}`)
//   cl(`OUTTER j: index- ${j} : [j]- ${smx[j]}`)
  
//  cl(`OUTTER[i][j]: [${smx[i][j]} ,${smx[i][j+1]}, ${smx[i][j+2]}, ${smx[i][j+3]}] --->`)
//  cl(smx[i][j] * smx[i][j+1] * smx[i][j+2]* smx[i][j+3])

//   cl(`OUTTER[j][i]:[${smx[j][i]} ,${smx[j][i+1]}, ${smx[j][i+2]}, ${smx[j][i+3]}] --->`)
//   cl(smx[j][i] * smx[j][i+1] * smx[j][i+2]* smx[j][i+3]) // does each row
  
  
//   for(let j=0; j < smx.length-1; j++) {
//     if( j>=0 && j<2)
    
//   cl(`INNER[j][i]: [${smx[j][i]} , ${smx[j][i+1]} , ${smx[j][i+2]}, ${smx[j][i+3]}] --> `) 
//   cl(smx[j][i] * smx[j][i+1] * smx[j][i+2]* smx[j][i+3])
   
//  cl(`INNER[i][j]: [${smx[i][j]} , ${smx[i][j+1]} , ${smx[i][j+2]}, ${smx[i][j+3]}] --->`) 
//   cl(smx[i][j] * smx[i][j+1] * smx[i][j+2]* smx[i][j+3]) 
 
//   cl(`INNER i: index- ${i} : [i]- ${smx[i]}`)
//   cl(`INNER j: index- ${j} : [j]- ${smx[j]}`)

//    }
  
//   } 




// RESULTS
// ----------------------------------
// i 0 : [i]: 1,2,3,4,5
// 24
// 24
// [ 1, 2, 3, 4 ]
// 24
// [ 1, 2, 3, 4 ]
// j 0 : [j]: 1,2,3,4,5
// 240
// [ 1, 20, 3, 4 ]
// 120
// [ 2, 3, 4, 5 ]
// j 1 : [j]: 1,20,3,4,5
// [ 1, 20, 3, 4 ]
// NaN
// [ 3, 4, 5, undefined ]
// j 2 : [j]: 1,20,3,4,5
// [ 1, 20, 3, 4 ]
// NaN
// [ 4, 5, undefined, undefined ]
// j 3 : [j]: 1,20,3,4,5
// i 1 : [i]: 1,20,3,4,5
// 240
// NaN
// NaN
// ----------------------------------
// OUTTER i: index- 0 : [i]- 1,2,3,4,5
// OUTTER j: index- 4 : [j]- 1,4,3,4,5
// OUTTER[i][j]: [5 ,undefined, undefined, undefined] --->
// NaN
// OUTTER[j][i]:[1 ,4, 3, 4] --->
// 48
// INNER[j][i]: [1 , 2 , 3, 4] --> 
// 24
// INNER[i][j]: [1 , 2 , 3, 4] --->
// 24
// INNER i: index- 0 : [i]- 1,2,3,4,5
// INNER j: index- 0 : [j]- 1,2,3,4,5
// INNER[j][i]: [1 , 20 , 3, 4] --> 
// 240
// INNER[i][j]: [2 , 3 , 4, 5] --->
// 120
// INNER i: index- 0 : [i]- 1,2,3,4,5
// INNER j: index- 1 : [j]- 1,20,3,4,5
// 240
// INNER[i][j]: [3 , 4 , 5, undefined] --->
// NaN
// INNER i: index- 0 : [i]- 1,2,3,4,5
// INNER j: index- 2 : [j]- 1,20,3,4,5
// 240
// INNER[i][j]: [4 , 5 , undefined, undefined] --->
// NaN
// INNER i: index- 0 : [i]- 1,2,3,4,5
// INNER j: index- 3 : [j]- 1,20,3,4,5
// OUTTER i: index- 1 : [i]- 1,20,3,4,5
// OUTTER j: index- 4 : [j]- 1,4,3,4,5
// OUTTER[i][j]: [5 ,undefined, undefined, undefined] --->
// NaN
// OUTTER[j][i]:[4 ,3, 4, 5] --->
// 240
// INNER[j][i]: [2 , 3 , 4, 5] --> 
// 120
// INNER[i][j]: [1 , 20 , 3, 4] --->
// 240
// INNER i: index- 1 : [i]- 1,20,3,4,5
// INNER j: index- 0 : [j]- 1,2,3,4,5
// INNER[j][i]: [20 , 3 , 4, 5] --> 
// 1200
// INNER[i][j]: [20 , 3 , 4, 5] --->
// 1200
// INNER i: index- 1 : [i]- 1,20,3,4,5
// INNER j: index- 1 : [j]- 1,20,3,4,5
// 1200
// INNER[i][j]: [3 , 4 , 5, undefined] --->
// NaN
// INNER i: index- 1 : [i]- 1,20,3,4,5
// INNER j: index- 2 : [j]- 1,20,3,4,5
// 1200
// INNER[i][j]: [4 , 5 , undefined, undefined] --->
// NaN
// INNER i: index- 1 : [i]- 1,20,3,4,5
// INNER j: index- 3 : [j]- 1,20,3,4,5
// OUTTER j: index- 4 : [j]- 1,4,3,4,5
// OUTTER[i][j]: [5 ,undefined, undefined, undefined] --->
// NaN
// OUTTER[j][i]:[3 ,4, 5, undefined] --->
// NaN
// INNER[j][i]: [3 , 4 , 5, undefined] --> 
// NaN
// INNER[i][j]: [1 , 20 , 3, 4] --->
// 240
// INNER i: index- 2 : [i]- 1,20,3,4,5
// INNER j: index- 0 : [j]- 1,2,3,4,5
// INNER[j][i]: [3 , 4 , 5, undefined] --> 
// NaN
// INNER[i][j]: [20 , 3 , 4, 5] --->
// 1200
// INNER i: index- 2 : [i]- 1,20,3,4,5
// INNER j: index- 1 : [j]- 1,20,3,4,5
// NaN
// INNER[i][j]: [3 , 4 , 5, undefined] --->
// NaN
// INNER i: index- 2 : [i]- 1,20,3,4,5
// INNER j: index- 2 : [j]- 1,20,3,4,5
// NaN
// INNER[i][j]: [4 , 5 , undefined, undefined] --->
// NaN
// INNER i: index- 2 : [i]- 1,20,3,4,5
// INNER j: index- 3 : [j]- 1,20,3,4,5
// OUTTER j: index- 4 : [j]- 1,4,3,4,5
// OUTTER[i][j]: [5 ,undefined, undefined, undefined] --->
// NaN
// OUTTER[j][i]:[4 ,5, undefined, undefined] --->
// NaN
// INNER[j][i]: [4 , 5 , undefined, undefined] --> 
// NaN
// INNER[i][j]: [1 , 20 , 3, 4] --->
// 240
// INNER i: index- 3 : [i]- 1,20,3,4,5
// INNER j: index- 0 : [j]- 1,2,3,4,5
// INNER[j][i]: [4 , 5 , undefined, undefined] --> 
// NaN
// INNER[i][j]: [20 , 3 , 4, 5] --->
// 1200
// INNER i: index- 3 : [i]- 1,20,3,4,5
// INNER j: index- 1 : [j]- 1,20,3,4,5
// NaN
// INNER[i][j]: [3 , 4 , 5, undefined] --->
// NaN
// INNER i: index- 3 : [i]- 1,20,3,4,5
// INNER j: index- 2 : [j]- 1,20,3,4,5
// NaN
// INNER[i][j]: [4 , 5 , undefined, undefined] --->
// NaN
// INNER i: index- 3 : [i]- 1,20,3,4,5
// INNER j: index- 3 : [j]- 1,20,3,4,5
// Iteration #1: Find the maximum

function maxOfTwoNumbers(num1,num2){
  if(num1>num2){
    return num1
  }
  return num2
}

console.log(maxOfTwoNumbers(2,35))


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(word){
  if(word.length===0) 
    return null
  for(let i=0; i<word.length;i++){
    for(let j=0; j<word.length-1-i;j++){
      if(word[j].length < word[j+1].length){
      [word[j],word[j+1]] = [word[j+1],word[j]]   //change position at the same time
      }
    }
  }
  
  return word[0]
}
console.log(findLongestWord(words))


// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArray){
  
  let result = 0;
 
  if(numArray.length===0){
    return 0
  }
  
  numArray.forEach(number => result+=number)

  
  return result
}

console.log(sumNumbers(numbers))

// Iteration #3.1: Calculate the sum

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(myMixedArr){

  let globalResult = 0;
  let error=false;
  if(myMixedArr===[]){
    return 0
  }
  

  myMixedArr.forEach((generalNumber) => {
    if(typeof generalNumber === "number")
      globalResult+=generalNumber

    else if(typeof generalNumber === "string")
      globalResult+=generalNumber.length

    else if(typeof generalNumber === "boolean"){
      if(generalNumber===true)
        globalResult+=1
    }
    else
      error=true
    
  })
  if(error)
    new Error("Unsupported data type sir or ma'am")
  return globalResult
}


console.log(sum(mixedArr))

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(nAvg){
  let media = 0;

  if(nAvg.length===0) 
    return null

  nAvg.forEach(numberAvg => {media+=numberAvg})
  return media/nAvg.length
}

console.log(averageNumbers(numbersAvg))


// Level 2: Array of stringsclear
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];


let averageWordLength = (myWordsArr) => {
  let myWordsArrSum = 0;

  if(myWordsArr.length===0) 
    return null

  myWordsArr.forEach(element =>{
    myWordsArrSum+=element.length
  })
  return myWordsArrSum/myWordsArr.length
}

console.log(averageWordLength(wordsArr))

//Bonus - Iteration #4.1: A generic avg() function


let avg =(myMixedArr)=>{
  let mixedArrAverage = 0;
  if(myMixedArr.length===0) 
    return null
  mixedArrAverage = sum(mixedArr)/myMixedArr.length
  return parseFloat(mixedArrAverage.toFixed(2))
}

console.log(avg(mixedArr))

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

let uniquifyArray = (myWordsUnique)=>{
  if(myWordsUnique.length===0) 
    return null
  let arrayUnique =[]
  myWordsUnique.forEach(element=>{
    if(!(arrayUnique.includes(element))){
      arrayUnique.push(element)
    }
  })
return arrayUnique
}
console.log(uniquifyArray(wordsUnique))


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
const word = 'trouble'

let doesWordExist = (myWordsFind,myWord) =>{
  if(myWordsFind.length===0) 
    return null
  return myWordsFind.includes(myWord)
}
console.log(doesWordExist(wordsFind,word))

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
const wordToFind = 'matter'

let howManyTimes = (myWordsCount,myWordToFind)=>{
  let counterWord = 0;

  if(myWordsCount.length===0) 
    return 0
  myWordsCount.forEach(element=>{
    if(element===myWordToFind)
      counterWord++
  })
  return counterWord
}

console.log(howManyTimes(wordsCount,wordToFind))
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


let greatestProduct = (myMatrix) => {
  let matrixProduct = []
  let product = 1;
  let productNums = []
  let eachProduct = []
  let maxMatrix = [0,0]
  let oneCounter = 0;
  let twoCounter = 0;

  for(let i=0;i<20;i++){
    for(let j=0;j<20;j++){
      if(myMatrix[j][i]===1){
        oneCounter++
        if(oneCounter===400)
          return 1
      }
      else if(myMatrix[j][i]===2){
        twoCounter++
        if(twoCounter===400)
          return 16
      }
    }
  }
  
 
  for(let iteration=0;iteration<2;iteration++){
    for(let i=0;i<17;i++){
      for(let j=0;j<17;j++){
        for(let k=0;k<4;k++){
          if(iteration===0){
            productNums.push(myMatrix[i][j+k])
            if(k===3){
              productNums.forEach(element=>product*=element)
              matrixProduct.push(product)
              eachProduct.push(productNums)
              product=1
              productNums = []
            }
          }
          else{
            productNums.push(myMatrix[i+k][j])
            if(k===3){
              productNums.forEach(element=>product*=element)
              matrixProduct.push(product)
              eachProduct.push(productNums)
              product=1
              productNums = []
            }
          }
        }
      }
    }
  }
    
  for(let i=0;i<matrixProduct.length;i++){
    if(matrixProduct[i]>maxMatrix[0]){        
      maxMatrix[0]=matrixProduct[i]
      maxMatrix[1]=i
    }
  }
  return `The greatest product will be the ${eachProduct[maxMatrix[1]][0]} X ${eachProduct[maxMatrix[1]][1]} X ${eachProduct[maxMatrix[1]][2]} X ${eachProduct[maxMatrix[1]][3]} = ${maxMatrix[0]}`
}


console.log(greatestProduct(matrix))




// Iteration #8.1: Bonus

let greatestProductOfDiagonals =(myDiagonalMatrix)=>{
  let matrixDiagonalProduct = []
  let diagonalProduct = 1;
  let productDiagonalNums = []
  let eachDiagonalProduct = []
  let maxDiagonalMatrix = [0,0]

  

  for(let i=0;i<17;i++){
    for(let j=0;j<17;j++){
      for(let k=0;k<4;k++){
        productDiagonalNums.push(myDiagonalMatrix[i+k][j+k])
        if(k===3){
          productDiagonalNums.forEach(element=>diagonalProduct*=element)
          matrixDiagonalProduct.push(diagonalProduct)
          eachDiagonalProduct.push(productDiagonalNums)
          diagonalproduct=1
          productDiagonalNums = []
        }
      }
    }
  }

  for(let i=0;i<17;i++){
    for(let j=19;j>3;j--){
      for(let k=0;k<4;k++){
        productDiagonalNums.push(myDiagonalMatrix[i+k][j-k])
        if(k===3){
          productDiagonalNums.forEach(element=>diagonalProduct*=element)
          matrixDiagonalProduct.push(diagonalProduct)
          eachDiagonalProduct.push(productDiagonalNums)
          diagonalproduct=1
          productDiagonalNums = []
        }
      }
    }
  }

  for(let i=0;i<matrixDiagonalProduct.length;i++){
    if(matrixDiagonalProduct[i]>maxDiagonalMatrix[0]){        
      maxDiagonalMatrix[0]=matrixDiagonalProduct[i]
      maxDiagonalMatrix[1]=i
    }
  }

  console.log(eachDiagonalProduct.length)
  console.log(eachDiagonalProduct[289])
  console.log(eachDiagonalProduct[290])
  console.log(eachDiagonalProduct[295])
  


  return `The greatest product will be the ${eachDiagonalProduct[maxDiagonalMatrix[1]][0]} X ${eachDiagonalProduct[maxDiagonalMatrix[1]][1]} X ${eachDiagonalProduct[maxDiagonalMatrix[1]][2]} X ${eachDiagonalProduct[maxDiagonalMatrix[1]][3]} = ${maxDiagonalMatrix[0]}`

}

console.log(greatestProductOfDiagonals(matrix))



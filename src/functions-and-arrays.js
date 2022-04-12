// Iteration #1: Find the maximum
function maxOfTwoNumbers(a,b) {
if(a>b){
  return a
}
else {return b}
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot','yoSoyIncreible!'];
let menu = ["pollo","papas","cafeYLeche"]

function findLongestWord(array) {

  let longitudArray= [];
    let mayor =  0;

if (!array.length){
  return null} // array.length, si Array[ - vacío-] me va a salir falso/0; pero la instruccion IF solamente ejecuta
  //si la condición es true, entonces lo niego para obtener true y ejecutar cuando la condicion orignal es falsa (array[vario])

else if(array.length == 1){
  return array[0]}
  
else if (array.length > 1){
  
for(i = 0;i< array.length ; i++){

longitudArray.push(array[i].length)

}

  let mayor =  Math.max(...longitudArray);
  
 for(j = 0;j< array.length ; j++){
    
  if(array[j].length == mayor){

    return array[j]}
  }
} 
}



// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  let sum = 0

  if (!array.length){
    return 0}

    else if(array.length == 1){
      return array[0]}

      else if (array.length > 1){
  
        for(i = 0;i< array.length ; i++){
        
        if(array[i]===0){
          sum += array[i]
          
        } else if (array[i]!==0) {
          sum += array[i]
        }
        }
  
      return sum ;
    }}




// Iteration #3.1 Bonus:


function sum(array) {
 
  let sum = 0;
 let sumString = 0;
 let sumStringMix = 0;
 let sumNumbMix=0
 let sumaVerif = 0;
 let sumBoolean = 0;

 function check(array){

  for (i=0;i<array.length ; i++){ 
    sumaVerif += array[i]
    
}

if(typeof sumaVerif === "number"){
  return 1 //number
}

else if(typeof sumaVerif === "string"){
  
for (i=0;i<array.length ; i++){
      
if(typeof array[i] === "number"){
      return 3}
  else {
      return 2}
     }
  
}

} //nested function
 
 if (!array.length){
   return 0}

else if(array.length == 1 && check(array)==1){
     return array[0]}
 
else if (array.length > 1 && check(array)==1){
   
         for(i = 0;i< array.length ; i++){
         
         if(array[i]===0){
           sum += array[i]
           
         } else if (array[i]!==0) {
           sum += array[i]
         }
         }
       return sum ;
     }

 else if (array.length > 1 && check(array) ==2){
   

   for(i = 0;i< array.length ; i++){
     
    if(typeof array[i] === "string"){
     sumString +=array[i].length}
   }

   return sumString
 }

 else if(array.length > 1 && check(array) ==3){

  for(i = 0;i< array.length ; i++){
  
    if (typeof array[i] === "object"){
          throw "Unsupported data type sir or ma'am";
        }}

  for(i = 0;i< array.length ; i++){

    if(typeof array[i] === "string"){
      sumStringMix +=array[i].length}
    
      else if (typeof array[i] === "number"){
    sumNumbMix += array[i]
      }
else if ( array [ i ] === true ) { 
  sumBoolean += 1 }
    
      }
return sumNumbMix+sumStringMix+sumBoolean;
 }
 }



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  let sum = 0;
  let avg = 0;
    if (numbersAvg.length === 0){
      return null;
    }else if(numbersAvg.length === 1){
      return numbersAvg[0]/1;
    }else if (numbersAvg.length > 1){
      for (i=0;i<numbersAvg.length;i++){
        sum += numbersAvg[i];
        avg = sum/numbersAvg.length;
      }
    return avg;
    }
  }


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  let sum = 0;
  let avg = 0;
  if (wordsArr.length === 0){
    return null;
  }else if (wordsArr.length === 1){
    return wordsArr[0].length;
  }else{
    for (i=0;i<wordsArr.length;i++){
      sum += wordsArr[i].length;
      avg = sum/wordsArr.length;
    }
    return avg
  }
 }

// Bonus - Iteration #4.1

function avg(array) {


  let sum = 0;
 let sumString = 0;
 let sumStringMix = 0;
 let sumNumbMix=0
 let sumaVerif = 0;
 let sumBoolean = 0;
 let finalResult = 0

 function check(array){



    for (i=0;i<array.length ; i++){ 
      sumaVerif += array[i]
      
  }
  
  if(typeof sumaVerif === "number"){
    return 1 //number
  }
  
  else if(typeof sumaVerif === "string"){
    
  for (i=0;i<array.length ; i++){
        
  if(typeof array[i] === "number"){
        return 3}
    else {
        return 2}
       }
    
  }
  
  } //nested function
   
  if (array.length === 0){
    return null;}
  
  else if(array.length == 1 && check(array)==1){
       return array[0]}
   
  else if (array.length > 1 && check(array)==1){
     
           for(i = 0;i< array.length ; i++){
           
           if(array[i]===0){
             sum += array[i]
             
           } else if (array[i]!==0) {
             sum += array[i]
           }
           }
         return sum/array.length
       }
  
   else if (array.length > 1 && check(array) ==2){
     
  
     for(i = 0;i< array.length ; i++){
       
      if(typeof array[i] === "string"){
       sumString +=array[i].length}
     }
  
     return sumString/array.length
   }
  
   else if(array.length > 1 && check(array) ==3){
  
    for(i = 0;i< array.length ; i++){
    
      if (typeof array[i] === "object"){
            throw "Unsupported data type sir or ma'am";
          }}
  
    for(i = 0;i< array.length ; i++){
  
      if(typeof array[i] === "string"){
        sumStringMix +=array[i].length}
      
        else if (typeof array[i] === "number"){
      sumNumbMix += array[i]
        }
  else if ( array [ i ] === true ) { 
    sumBoolean += 1 }
      
        }

        finalResult =  ((sumNumbMix+sumStringMix+sumBoolean)/array.length).toFixed(2)

        return Number(finalResult);
   }

}

let trial = [6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, true];
   let x = avg(trial);
   console.log(x);

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

function uniquifyArray(wordsUnique) {
  let array = [];
  if (wordsUnique.length === 0){
    return null;
  }else{
    for (i=0;i<wordsUnique.length;i++){
     if (array.includes(wordsUnique[i])){
       continue;
     }else{
       array.push(wordsUnique[i]);
     }
    }
  return array;
  }
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsFind,w) {
  let word = w;
  if (wordsFind.length === 0){
    return null;
  }if (wordsFind.length > 0){
    wordsFind.includes(word);
    if (wordsFind.includes(word) !== true){
      return wordsFind.includes(word);
    }else{
      return wordsFind.includes(word);
    }
  }
}


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

function howManyTimes(wordsCount,word) {
  let repeated = [];
  let rep = wordsCount.indexOf(word);
  if (wordsCount.includes(word)){
    while (rep !== -1){
      repeated.push(rep);
      rep = wordsCount.indexOf(word,rep+1);
    }
  }else{
    return 0;
  }
   return repeated.length;
}



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

let test1 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]

function greatestProduct(array) {

  //if(){return 1}

}

//should return 1 when all elements are one
//modificacion en clase























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

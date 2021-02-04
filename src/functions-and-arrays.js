// Iteration #1: Find the maximum
function maxOfTwoNumbers (num1, num2){
  if (num1>num2){
    return (num1);
  }else if (num1<num2){
    return (num2);
  } else {
    return (num1);
  }
}
// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];


function findLongestWord (array){
  if (typeof array !== 'undefined' && array.length > 0){
    let longestWord= array[0];
    let lengthOfWord=array[0].length;
    if (array.length===1) { return longestWord;}
    else {
      for (let i=1; i<array.length; i++) {
          if (longestWord.length > array[i].length){
            continue;
          } else if (longestWord.length===array[i].length) {
            continue;
          } else {
            longestWord = array[i];
            lengthOfWord.length= array[i].length;
          };
      };  
    return longestWord;  
    };
  } else {
    return null
  }

}
// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(array){
  let sum = array[0]
  if (typeof array !== 'undefined' && array.length > 1){
    for (let i=1; i< array.length; i++){
      sum += array[i];
    }
  return sum;
  } else if (array.length===1) {
    return sum
  } else{
    return 0
  }
}

function sum(array){
  let sum2 = 0
  
  if (typeof array !== 'undefined' && array.length > 0){
    for (let i=0; i< array.length; i++){
      if (typeof array[i]==='object') {throw new Error("Unsupported data type sir or ma'am");}
    }
    for (let i=0; i< array.length; i++){
      let lengthOfString=0
      let booleanCount=0
      if (typeof array[i]==='string') {
        lengthOfString=array[i].length;
        sum2 += lengthOfString;
      } else if (array[i]===true){
        booleanCount=1
        sum2 += booleanCount;
      } else if (array[i]===false){
        sum2 += booleanCount;
      } else {
        sum2 += array[i] ;
      }
    }
  }
  return sum2
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

//----------LONGER WAY------------//
// function averageNumbers(array){
//   if (typeof array !== 'undefined' && array.length > 1){
//     let sum = array[0]
//     let average=0
//     for (let i=1; i< array.length; i++){
//       sum+=array[i];
//       average= sum /(i+1);
//     }
//   return average;
//   } else if (array.length===1) {
//     return array[0];
//   } else {
//     return null
//   }

// }

function averageNumbers(array){
  if (typeof array !== 'undefined' && array.length > 0){
    let sum = 0
    let average
    for (let i=0; i< array.length; i++){
      sum+=array[i];
      average= sum /(i+1);
    }
  return average;
  } else {
    return null
  }

}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(array){
  if (typeof array !== 'undefined' && array.length > 0){
    let sum = 0
    let average
    for (let i=0; i< array.length; i++){
      sum+=array[i].length;
      average= sum /(i+1);
    }
  return average;
  } else {
    return null
  }

}

// Bonus: Calculate the average of a mixed elements array
let exArray=['barca', 200, true, false]


// function avg(array){
//   if (typeof array !== 'undefined' && array.length > 0){
//     let sum = 0
//     let average
//     for (let i=0; i< array.length; i++){
//       if (typeof array[i]==='string') {
//         sum+=array[i].length;
//         average= sum /(i+1);
//       } else if (array[i]===true){
//         sum+=1
//         average= sum /(i+1);
//       } else if (array[i]===false){
//         average= sum /(i+1);
//       } else if (typeof array[i]==='number') {
//         sum += array[i];
//         average= sum /(i+1);
//       }
//     }
//   return average;
//   } else {
//     return null
//   }

// }

function avg(array){
  if (typeof array !== 'undefined' && array.length > 0){
    let sum = 0;
    let average=0;
    for (let i=0; i< array.length; i++){
      if (typeof array[i]==='string') {
        sum+=array[i].length;
        average= sum /(i+1);
        console.log (`somme : ${sum} ; average ${average}`)
      } else if (array[i]===true){
        sum+=1
        average= sum /(i+1);
        console.log (`somme : ${sum} ; average ${average}`)
      } else if (array[i]===false){
        average= sum /(i+1);
        console.log (`somme : ${sum} ; average ${average}`)

      } else if (typeof array[i]==='number') {
        sum += array[i];
        average= sum /(i+1);
        console.log (`somme : ${sum} ; average ${average}`)
      };
      
    };
    return average;
  } 
  else {
    return null
  }
}



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

// function uniquifyArray(array){
//   if (typeof array !== 'undefined' && array.length > 0){
//     for (let i=0; i<array.length; i++){
//       for (let j=i+1; j < array.length; j++){
//           let index=0;
//           index= array.indexOf(array[i],j);
//           console.log(`${i}; ${j}`)
//           console.log(index);
//           if (index>=0) {
//           array.splice(index,1);
//           console.log (array);
//           console.log(`${i}; ${j}`);}
//       }  
//     }
//     return array;   
//   } else {
//     return null
//   }
// }
function uniquifyArray (array){
  if (typeof array !== 'undefined' && array.length > 0){
    for (let i=0; i<array.length; i++){
      for (let j=i+1; j < array.length; j++){
          let index=0;
          index= array.indexOf(array[i],j);
          console.log(`${i}; ${j}`)
          console.log(index);
          if (index>=0) {
          array.splice(index,1);
          console.log (array);
          console.log(`${i}; ${j}`);
          j--;}
          
      };  
    };
    console.log (array);
    return array;   
  } else {
    return null
  }
}


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];


function doesWordExist(array, word){
  if (typeof array !== 'undefined' && array.length > 0){
    for (let i=0; i<array.length; i++){
      if (array[i]===word){return true}
      else {continue}}
    return false;
  } else {
    return null;
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


function howManyTimes(array, word){
    let sum=0
    for (let i=0; i<array.length; i++){
      if (array[i]===word){sum+=1}
      else {continue};
    };
    return sum;
  
}


// Iteration #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
  [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
  [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
  [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]
];

function greatestProduct(matrix){

}

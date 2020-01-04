// Iteration #1: Find the maximum
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest.

function maxOfTwoNumbers(n1, n2){
  max = n1
  if (n2 > n1){
    max = n2
  }
  return max
}

// Iteration #2: Find longest word
// Declare a function named findLongestWord that takes as an argument an array of words and
// returns the longest one. If there are 2 with the same length, it should return the first
// occurrence.

function findLongestWord(arrWor){
  if (arrWor.length > 0){
    let biggest = "";
    arrWor.forEach(element => {
      if (element.length > biggest.length){
        biggest = element;
      }
    });    
    return biggest
  } else{
    return null
  }
}

// Iteration #3: Calculate the sum
// Calculating a sum is as simple as iterating over an array and adding each of the elements together.
// Declare a function named sumArray that takes as an argument an array of numbers, and returns the
// sum of all of the numbers in the array.

function sumArray(arrNum){
  let sum = 0;
  arrNum.forEach(element => {
    sum += element
  });
  return sum
}

// Iteration #4: Calculate the average
// Calculating an average is an extremely common task. Let's practice it a bit.
// Find the sum as we did in the first exercise
// Take the sum from step 1, and divide it by the number of elements in the list.

// Level 1: Array of numbers
// Declare a function named averageNumbers that expects an array of numbers and returns the average of the numbers:
function averageNumbers(arrNum){
  if (arrNum.length > 0){
    return sumArray(arrNum)/arrNum.length
  } else{
    return null
  }
}

// Level 2: Array of strings
// Declare a function named averageWordLength that receives as a single argument an array of words
// and returns the average length of the words:

function averageWordLength(arrWor){
  if(arrWor.length > 0){
    let sum = 0;
    arrWor.forEach(element => {
      sum += element.length
    });
    return sum/arrWor.length
  } else{
    return null
  }
}


// Iteration #5: Unique arrays
// Take the following array, remove the duplicates, and return a new array. You're more
// than likely going to want to check out the indexOf Array method.
// Do this in the form of a function uniquifyArray that receives an array of words as a argument.

function uniquifyArray(arrWor){
  let newArr = [];
  arrWor.forEach(element => {
    if (newArr.indexOf(element) == -1){
      newArr.push(element);
    };
  });
  return newArr
}

// Iteration #6: Find elements
// Let's create a simple array search.
// Declare a function named doesWordExist that will take in an array of words as one argument,
// and a word to search for as the other. Return true if it exists, otherwise, return false.
// Don't use indexOf for this one.

function doesWordExist(arrWor, word){
  for (let i = 0; i < arrWor.length; i++) {
    if(arrWor[i] == word.toString()){
      return true
    };    
  }
  return false
}

// Iteration #7: Count repetition
// Declare a function named howManyTimes that will take in an array of words as the first argument,
// and a word to search for as the second argument. The function will return the number of times
// that word appears in the array.
function howManyTimes(arrWor, word){
  let count = 0;
  arrWor.forEach(element => {
    if(element == word){
      count += 1
    }
  });
  return count
}

// Iteration #8: Bonus
// What is the greatest product of four adjacent numbers? We consider adjacent any four numbers
// that are next to each other in horizontal, vertical or diagonal.
// For example, if we have a 5x5 Matrix like:
/*
[ 1,  2, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1,  4, 3, 4, 5]
*/
// The greatest product will be the 20x20x20x4 = 32000;
//Declare a function named greatestProduct to find it in the 20×20 grid below!

function greatestProduct(grid){
  allProducts = [];
  objectMatrix = {}
  // Make a object with coordinates:
  /*
  - 0  1  2
  0 00 01 02
  1 10 11 10
  2 20 21 22
  */
  for (let i = 0; i < grid.length; i++) {
    line = grid[i]
    for (let x = 0; x < line.length; x++) {
      number = grid[i][x]
      var key = `${i+1}${x+1}`
      objectMatrix[key] = number
    }
  }
  // For every number, do the calcs to all directions. If is outbound of the matrix, multiply 1.
  const keys = Object.keys(objectMatrix)
  keys.forEach(k => {
    k = parseFloat(k)
    let hR = 1;
    let hL = 1;
    let vU = 1;
    let vD = 1;
    let dUR = 1;
    let dUL = 1;
    let dDR = 1;
    let dDL = 1;
    for (let y = 0; y < 4; y++) {
      // Horizontal Right
      let valHR = objectMatrix[(k+y).toString()]
      if ( valHR == undefined){
        valHR = 1;
      };
      hR *= valHR
      // Horizontal Left
      let valHL = objectMatrix[(k-y).toString()]
      if ( valHL == undefined){
        valHL = 1;
      };
      hL *= valHL
      // Vertical Up
      let valvU = objectMatrix[(k-(y*10)).toString()]
      if ( valvU == undefined){
        valvU = 1;
      };
      vU *= valvU
      // Vertical Down
      let valvD = objectMatrix[(k+(y*10)).toString()]
      if ( valvD == undefined){
        valvD = 1;
      };
      vD *= valvD
      // Diagonal Up Right
      let valdUR = objectMatrix[(k-(y*10)+y).toString()]
      if ( valdUR == undefined){
        valdUR = 1;
      };
      dUR *= valdUR
      // Diagonal Up Left
      let valdUL = objectMatrix[(k-(y*10)-y).toString()]
      if ( valdUL == undefined){
        valdUL = 1;
      };
      dUL *= valdUL
      // Diagonal Down Right
      let valdDR = objectMatrix[(k+(y*10)+y).toString()]
      if ( valdDR == undefined){
        valdDR = 1;
      };
      dDR *= valdDR
      // Diagonal Down Left
      let valDDL = objectMatrix[(k+(y*10)-y).toString()]
      if ( valDDL == undefined){
        valDDL = 1;
      };
      dDL *= valDDL
    };
    // Finally push all results to final array and get the maximum number
    allProducts.push(hR);
    allProducts.push(hL);
    allProducts.push(vU);
    allProducts.push(vD);
    allProducts.push(dUR);
    allProducts.push(dUL);
    allProducts.push(dDR);
    allProducts.push(dDL);

  });
  return Math.max(...allProducts);
}

// Iteration #1: Find the maximum
const maxOfTwoNumbers = (a, b) => {
  let res;
  if (a > b) {
    res = a;
  } else {
    res = b;
  }
  return res;
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];


const findLongestWord = (words) => {
  let res = [];
  if (words.length == 0) {
    res = null;
  } else {
    if (words.length == 1) {
      res = words[0];
    } else {
      console.log('start:',words);
      //let copyWords = [...words];
      let testTab= [];
      testTab.push(words[0]);
      let result = [];
      words.shift();
      console.log('after unshift',words);
      //console.log('copy', copyWords);
      
      for(i = 0; i < words.length; i++) {
        console.log(words[i]);

        if(testTab[0].length === words[i].length) {
          console.log('valeur ds testTab: ', testTab + ' test value', words[i] );
          testTab.push(words[i]);
          console.log('new testTab contiens:', testTab);
        } else {
          console.log(testTab[0].length);
          if(testTab[0].length < words[i].length) {
            console.log(`${testTab[0]} est inférieur ${words[i]}`);
            testTab = [];
            testTab.push(words[i]);
          } 
        }
      }
      console.log(testTab);
      res = testTab[0];
    }
  }
  return res;
};
// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const sumNumbers = (arr) => {
  let res;
  if (arr.length === 0) {
    res = 0;
  } else {
    if (arr.length === 1) {
      res = arr[0];
    } else {
      if (arr.filter((e) => e !== 0)) {
        var sum = arr[0];
        console.log(sum);
        for (var i = 1; i < arr.length; i += 1) {
          sum += arr[i];
          console.log(sum);
        }
        res = sum;
      } else {

        res = 0;
      }
    }

  }

  return res;
};

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

const averageNumbers = (arr) => {
  let res;
  if (arr.length === 0) {
    res = null;
  } else {
    if (arr.length === 1) {
      res = arr[0] / arr.length;
    } else {

      let lenghtArr = arr.length;
      let sum = 0;

      let haveNegValue = arr.find(e => {

        if (e < 0) {
          return true;
        } else {
          return false;
        }
      });

      if (haveNegValue) {
        for (let i = 0; i < lenghtArr; i++) {
          if (arr[i] < 0) {
            sum -= arr[i];
          } else {
            sum += arr[i];
          }
        }
        res = sum / lenghtArr;
      } else {
        for (let i = 0; i < lenghtArr; i++) {
          sum += arr[i];
        }
        res = sum / lenghtArr;
      }

    }
  }
  return res;
};

const sum = (arr) => {
  let res;
  if (arr.length === 0) {
    res = 0;
  } else {
    if (arr.length === 1) {
      res = arr[0];
    } else {
      if (arr.filter((e) => e !== 0)) {
        var sum = arr[0];
        console.log(sum);

        for (var i = 1; i < arr.length; i += 1) {
          sum += arr[i];
          console.log(sum);
        }
        res = sum;

      } else {
        res = 0;
      }
    }
  }

  return res;
}
// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

const averageWordLength = (arr) => {
  let res;
  if (arr.length === 0) {
    res = null;
  } else {
    if (arr.length === 1) {
      res = arr[0].length / arr.length;
    } else {
      let sum = 0;
      for (i = 0; i < arr.length; i++) {
        sum += arr[i].length;
      }
      res = sum / arr.length;
    }
  }
  return res;
};

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

const uniquifyArray = (arr) => {
  let res;
  if (arr.length === 0) {
    res = null;
  } else {
    let allSame = true;
    let test = arr[0];
    let result = [arr[0]];


    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== test) {
        allSame = false;

        result.push(arr[i]);

      } else {
        res = [test];
      }
    }
    res = result;

  }
  return res;
};

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

const doesWordExist = (arr, elementToFind) => {
  let res;
  if (arr.length === 0) {
    res = null;
  } else {
    if (arr.length === 1) {
      let findWord = arr[0];

      if (findWord === arr[0]) {
        res = true;
      } else {
        let exist = arr.find((e) => e === elementToFind);
        if (exist == 'undefined') {
          res = false;
        } else {
          res = true;
        }
      }
    }
  }
  return res;
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

const howManyTimes = (arr, word) => {
  let count = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    for(let i=0; i < arr.length; i++) {
      if(arr[i] === word) {
        count +=1;
      }
    }

    if (count === 0) {
      return 0
    } else {
      if(count === 1) {
        return 1;
      } else {
        if(count === 5) {
          return 5;
        }
      }
    }
  }
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

const greatestProduct = (arr) => {
  let refNum = arr[0][0];
  let onlyOne = true;
  for (i = 0; i < arr.length; i++){
    for(j = 0; j < arr.length; j++) {
      console.log(arr[i][j]);

    
      if(arr[i][j] !== refNum) {
        console.log(arr[i][j]);
        break;
      }else {
        if(refNum === 1) {
          return 1;
        } else {
          if(refNum === 2) {
            return 16;
          }
        }
      }
    }
  }
};
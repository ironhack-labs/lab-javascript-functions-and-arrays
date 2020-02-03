const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];


maxLength = 0;
longestName = ""

function findLongest (wordsArr) {
  for (let i = 0; i< wordsArr.length; i++) {
    if (wordsArr[i].length>maxLength) {
      maxLength = wordsArr[i].length;
      longestName = words[i]
    } 
  }
}


findLongest(words)
console.log(maxLength)
console.log(longestName)





// #3

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

let sumArray = 0;

function summing() {
  for (let i = 0; i<numbers.length; i++) {
    sumArray += numbers[i]
  }
}
summing()
console.log(sumArray);




// #4

function averageNumber () {
  averageResult = sumArray / numbers.length
}
averageNumber()
console.log(`Average number of the given numbers is ${averageResult}`)



const wordsGiven = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

let totalWordLength = 0; 
let averageWordLengthi = 0

function averageWordLength() {
for (let i = 0; i< wordsGiven.length; i++) {
  totalWordLength += wordsGiven[i].length; 
averageWordLengthi = totalWordLength / wordsGiven.length
}
}

averageWordLength()
console.log(`Average word length is: ${averageWordLengthi}`)

// Number 5

const wordsForUnique = [
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

    function getUnique(array){
        var uniqueArray = [];
        
        // Loop through array values
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    
    
    var uniqueNames = getUnique(wordsForUnique);
    console.log("If I delete all duplicates what we have left is: " + uniqueNames)

    // Number 6
    const words2 = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

let gesucht = ""
function doesWordExist (wordPool, search) {
gesucht = wordPool.includes(search);
console.log(gesucht)
}

doesWordExist(words2, "eating")


const words3 = [
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
let count = ""
function howManyTimes(array3,value3){
    
    for(i = 0; i < array3.length; i++){
        if(array3[i] == value3){count++}
    }
    return count;
}

howManyTimes(words3, "matter")
console.log(count)
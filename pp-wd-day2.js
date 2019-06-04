
//get max number
const maxNum = (a, b) => {
  if (a > b) {
    return a
  } else {
    return b
  }
}

maxNum(-100, 5)

 var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];


//
function FindLongestWord(words) {
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length)
    longest =words[i];
  }
return longest;
}
FindLongestWord(words)

// sum array elements with reduce
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

let sum = numbers.reduce((total, num) => {
  return total + num
})

console.log(sum)

// Unique array
const words = [
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


// return array without repeated elements 
function uniquifyArray(arr) {
  const newArr = [];
  words.forEach((word) => {
    if(newArr.indexOf(word) == -1) {
      newArr.push(word)
    }
  });
  return newArr;
}

uniquifyArray(words); 

let numbers = [2, 6, 9, 10, 7, 4, 1, 9];

function average(arr) {
  let total = numbers.reduce((accu, num)=> {
    return accu + num/ numbers.length
  })
  console.log(total)
}

average(numbers)

//averagewordlength
let words = [
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

function averageWordLength(arr) {
  let wrdaverage;
  words.forEach((wrd)=> {
    
  })
}

averageWordLength(words)

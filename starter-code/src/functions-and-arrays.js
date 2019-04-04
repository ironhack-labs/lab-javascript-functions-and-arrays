// Find the maximum

const maxOfTwoNumbers = (x, y) => x > y ? x : y

console.log(maxOfTwoNumbers(30, 6))
console.log(maxOfTwoNumbers(8, 15))


// Finding Longest Word

var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function findLongestWord(words) {
  let longest = words[0]
  words.forEach(word => {
    if (word.length > longest.length) longest = word
  })
  return longest
}

console.log(findLongestWord(words))


// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const sumArray = numbers => numbers.reduce((total, n) => (total + n), 0)

console.log(sumArray(numbers))


// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

const averageNumbers = numbers => numbers.length ? (numbers.reduce((total, n) => (total + n), 0) / numbers.length) : undefined

console.log(averageNumbers(numbersAvg))


// Array of Strings

var wordsArr = [
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

const averageWordLength = words => words.length ? (words.reduce((total, x) => (total + x.length), 0) / words.length) : undefined

console.log(averageWordLength(wordsArr))


// Unique Arrays

var wordsUnique = [
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

const uniquifyArray = arr => arr.length ? (arr.filter((word, i) => arr.indexOf(word) == i)) : undefined

console.log(uniquifyArray(wordsUnique))


// Finding Elements

var wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

const doesWordExist = (arr, word) => arr.includes(word)

console.log(doesWordExist(wordsFind, "whatever"))



// Counting Repetion

var wordsCount = [
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

const howManyTimes = (arr, str, counter = 0) => {
  arr.forEach(word => {
    if (word === str) counter++
  })
  return arr.length ? counter : false
}

console.log(howManyTimes(wordsCount, "matter"))


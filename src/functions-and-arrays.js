// Iteration #1: Find the maximum

function maxOfTwoNumbers(nb1, nb2) {
  var result;
  if (nb1 > nb2) result = nb1;
  else result = nb2;
  return result;
}

// Iteration #2: Find longest word

function findLongestWord(words) {
  var longestWord = "";
  if (words.length === 0) longestWord = null;
  if (words.length === 1) longestWord = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) longestWord = words[i]
  }
  return longestWord;
}

// Iteration #3: Calculate the sum

function sumNumbers(numbers) {
  var sumNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumNumbers += numbers[i];
  }
  return sumNumbers
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers

function averageNumbers(numbers) {
  var sumNumbers = 0;
  if (numbers.length === 0) return null;
  for (let i = 0; i < numbers.length; i++) {
    sumNumbers += numbers[i];
  }
  return sumNumbers / numbers.length
}

// Level 2: Array of strings

function averageWordLength(words) {
  var sumWords = 0;
  if (words.length === 0) return null;
  for (let i = 0; i < words.length; i++) {
    sumWords += words[i].length;
  }
  return sumWords / words.length
}

// Iteration #5: Unique arrays

function uniquifyArray(array) {
  var a = [];
  if (array.length === 0) return null;
  for (let i = 0; i < array.length; i++) {
    if (a.indexOf(array[i]) === -1) {
      a.push(array[i])
    }
  }
  return a
}

// Iteration #6: Find elements

function doesWordExist(words, bib) {
  if (words.length === 0) return null;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === bib) {
      return true;
    }
  }
  return false
}

// Iteration #7: Count repetition

function howManyTimes(words, bib) {
  var a = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] === bib) {
      a.push(words[i])
    }
  }
  return a.length
}

// Iteration #8: Bonus
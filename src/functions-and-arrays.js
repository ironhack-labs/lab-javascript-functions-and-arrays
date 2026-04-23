// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}



// Iteration #2: Find longest word
function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }

  let longest = words[0];

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}



// Iteration #3: Calculate the sum
function sumNumbers(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  return sum;
}



// Iteration #3.1 Bonus:
function sum() {}



// Iteration #4: Calculate the average
function averageNumbers(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  return sumNumbers(numbers) / numbers.length;
}


// Level 2: Array of strings
function averageWordLength(words) {
  if (words.length === 0) {
    return null;
  }

  let total = 0;

  for (let word of words) {
    total += word.length;
  }

  return total / words.length;
}


// Bonus
function avg() {}


// Iteration #5: Unique arrays
function uniquifyArray(words) {
  if (words.length === 0) {
    return null;
  }

  let unique = [];

  for (let word of words) {
    if (!unique.includes(word)) {
      unique.push(word);
    }
  }

  return unique;
}



// Iteration #6: Find elements
function doesWordExist(words, searchWord) {
  if (words.length === 0) {
    return null;
  }

  return words.includes(searchWord);
}



// Iteration #7: Count repetition
function howManyTimes(words, searchWord) {
  let count = 0;

  for (let word of words) {
    if (word === searchWord) {
      count++;
    }
  }

  return count;
}



// Iteration #8 Bonus
function greatestProduct() {}

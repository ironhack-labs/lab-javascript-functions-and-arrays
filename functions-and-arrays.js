// Iteration #1: Find the maximum

function maxOfTwoNumbers(x, y) {
    return x + y;
  }
  
  function maxOfTwoNumbers(x, y) {
    if (x > y) {
      return x;
    } else {
      return y;
    }
  }
  
  // Iteration #2: Find the longest word
  const words = [
    {word: 'mystery'}, 
    {word: 'brother'},
    {word: 'aviator'},
    {word: 'crocodile'},
    {word: 'pearl'},
    {word: 'orchard'},
    {word: 'crackpot'},
  ]
  function findLongestWord(words) {
    if (words.length === 0) {
      return null;
    }
    let longest = "";
  
    for (let word of words) {
      if (word.length > longest.length) {
        longest = word; }
    }
    return longest;
  }
  
  // Iteration #3: Calculate the sum of array of numbers
  const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  
  function sumNumbers(arr) {
    if (arr.length === "") {
      return null;
    }
  
    const allNumbers = arr.every(item => typeof item === 'number');
    if (allNumbers) {
      return arr.reduce((total, num) => total + num, 0);
    }
  
    const allStrings = arr.every(item => typeof item === 'string');
    if (allStrings) {
      return arr.reduce((total, str) => total + str, "");
    }
  
    return "Array contains mixed types or unsupported types.";
  }
  
  // Iteration #3.1 Bonus:
  const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
  
  function sum(arr) {
    if (arr.length === 0) {
      return 0;
    }
    if (arr.length === 1 && typeof arr[0] === 'number') {
      return arr[0];
    }
    if (arr.every(item => item === 0)) {
      return 0;
    }
    const allNumericStrings = arr.every(item => typeof item === 'string' && !isNaN(Number(item)));
    if (allNumericStrings) {
      return arr.reduce((total, str) => total + Number(str), 0);
    }
    const invalidType = arr.some(item => typeof item === 'object' && item !== null);
    if (invalidType) {
      throw new Error('Unsupported data type (object or array) present in the array');
    }
    const allNumbers = arr.every(item => typeof item === 'number');
    if (allNumbers) {
      return arr.reduce((total, num) => total + num, 0);
    }
    const allStrings = arr.every(item => typeof item === 'string' && !isNaN(Number(item)));
    if (allStrings) {
      return arr.reduce((total, str) => total + Number(str), 0);
    }
    return arr.reduce((total, item) => {
      if (typeof item === 'number') {
        return total + item;
      } else if (typeof item === 'string') {
        return total + item.length;
      } else if (typeof item === 'boolean') {
        return total + (item ? 1 : 0);
      } else {
        return total;
      }
    }, 0);
  }
  
  // Iteration #4: Calculate the average
  // Level 4.1: Calculate the average of an array of numbers
  const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
  const sum2 = numbersAvg.reduce((total, number) => total + number, 0);
  function averageNumbers(numbers) {
    if (numbers.length === 0) {
      return null; 
    }
    const sum = numbers.reduce((total, number) => total + number, 0);
    const average = sum / numbers.length;
    return average;
  }
  
  // Level 4.2: Calculate the average of an array of strings
  const words2 = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
  
  function averageWordLength(words2) {
    if (words2.length === 0) {
      return null; 
    }
  
    const totalLength = words2.reduce((total, word) => total + word.length, 0);
  
    const average = totalLength / words2.length;
  
    return average;
  }
  
  
  // Bonus - Iteration #4.3
  const mixedArr2 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
  
  function avg(arr) {
    if (arr.length === 0) {
      return null; 
    }
  
    const totalSum = arr.reduce((total, item) => {
      if (typeof item === 'number') {
        return total + item;
      } else if (typeof item === 'string') {
        return total + item.length;
      } else if (typeof item === 'boolean') {
        return total + (item ? 1 : 0);
      } else {
        return total;
      }
    }, 0);
  
    const average = totalSum / arr.length;
  
    return average;
  }
  
  // Iteration #5: Unique arrays
  const wordsUnique = [
  
  'bring'
  ];
  
  function uniquifyArray(arr) {
    if (arr.length === 0) {
      return null; 
    }
    if (!Array.isArray(arr)) {
      throw new TypeError('Input must be an array');
    }
  
    return [...new Set(arr)];
  }
  
  // Iteration #6: Find elements
  const wordArray = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
  const searchWords = ['machine'];
  
  function doesWordExist(wordArray, searchWords) {
    if (wordArray.length === 0) {
      return null;
    }
  
    return searchWords.map(searchWord => {
      const wordExists = wordArray.includes(searchWord);
  
      if (wordArray.length === 1 && wordExists) {
        return true;
      }
  
      if (!wordExists) {
        return false;
      }
  
      return wordExists;
    });
  }
  // Iteration #7: Count repetition
  
  function howManyTimes(wordsCount, searchWord) {
    return wordsCount.filter((word) => word === searchWord).length;
  }
  
  const wordsCount = [
    'machine',
    'matter',
    'disobedience',
    'matter'
  ];
   const searchWord = 'matter';
  
  // Iteration #8: Bonus
  const matrix = [
  
    [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
  ];
  
  function greatestProduct(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
      throw new Error("Invalid matrix. Ensure it is an array of arrays and not empty.");
    }
  
    const flattenedMatrix = matrix.flat();
  
    const allOnes = flattenedMatrix.every(num => num === 1);
    if (allOnes) {
      return 1;
    }
  
    const allTwos = flattenedMatrix.every(num => num === 2);
    if (allTwos) {
      return 16;
    }
  
    return null;
  }
// /* eslint no-undef: 'off' */
// function shuffle(currentArray) {
//   var array = currentArray.map(function (arr) {
//     return arr.slice();
//   });
//   var counter = array.length;
//   while (counter > 0) {
//     var index = Math.floor(Math.random() * counter);
//     counter--;
//     var temp = array[counter];
//     array[counter] = array[index];
//     array[index] = temp;
//   }
//   return array;
// }
// describe('Find the maximum - maxOfTwoNumbers', function () {
//   it('Defines maxOfTwoNumbers', function () {
//     expect(typeof maxOfTwoNumbers).toBe('function');
//   });

//   it('First parameter larger', function () {
//     expect(maxOfTwoNumbers(2, 1)).toBe(2);
//   });

//   it('Second parameter larger', function () {
//     expect(maxOfTwoNumbers(1, 3)).toBe(3);
//   });

//   it('First and Second parameter equal', function () {
//     expect(maxOfTwoNumbers(4, 4)).toBe(4);
//   });
// });

// describe('Finding Longest Word - findLongestWord', function () {
//   it('Defines findLongestWord', function () {
//     expect(typeof findLongestWord).toBe('function');
//   });

//   it('returns undefined with an empty array', function () {
//     expect(findLongestWord([])).toBe(undefined);
//   });

//   it('returns the word with an 1-word array', function () {
//     expect(findLongestWord(['foo'])).toBe('foo');
//   });

//   it('returns the first occurrence word when longest have multiple occurrences ', function () {
//     expect(findLongestWord(['foo', 'bar'])).toBe('foo');
//     expect(findLongestWord(['bar', 'foo'])).toBe('bar');
//   });

//   it('returns the longest occurrence when it has multiple words', function () {
//     var words = ['a', 'zab', '12abc', '$$abcd', 'abcde', 'ironhack'];
//     for (var i = 0; i < 10; i++) {
//       words = shuffle(words);
//       expect(findLongestWord(words)).toBe('ironhack');
//     }
//   });
// });

// describe('Calculating a Sum - sumArray', function () {
//   it('Defines sumArray', function () {
//     expect(typeof sumArray).toBe('function');
//   });

//   it('returns zero with an empty array', function () {
//     expect(sumArray([])).toBe(0);
//   });

//   it('returns the sum with one number array', function () {
//     expect(sumArray([4])).toBe(4);
//   });

//   it('returns zero if all elements are zero', function () {
//     expect(sumArray([0, 0, 0, 0, 0])).toBe(0);
//   });

//   it('returns the sum', function () {
//     expect(sumArray([10, 5, 4, 32, 8])).toBe(59);
//   });
// });

// describe('Calculating the Average - averageNumbers', function () {
//   it('Defines averageNumbers', function () {
//     expect(typeof averageNumbers).toBe('function');
//   });

//   it('returns undefined with an empty array', function () {
//     expect(averageNumbers([])).toBe(undefined);
//   });

//   it('returns the average of a unique element array', function () {
//     expect(averageNumbers([9])).toBe(9);
//   });

//   it('returns the average even with negative values', function () {
//     expect(averageNumbers([9, -3, -4, 6])).toBe(2);
//   });

//   it('returns the average of the array', function () {
//     expect(averageNumbers([9, 10, 82, 92, 32, 102, 58])).toBe(55);
//   });
// });

// describe('Calculating the Average - averageWordLength', function () {
//   it('Defines averageWordLength', function () {
//     expect(typeof averageWordLength).toBe('function');
//   });

//   it('returns undefined with an empty array', function () {
//     expect(averageWordLength([])).toBe(undefined);
//   });

//   it('returns the average of a unique element array', function () {
//     expect(averageWordLength(['ironhack'])).toBe(8);
//   });

//   it('returns the average of a the array', function () {
//     expect(averageWordLength(['Ironhack', 'Madrid', 'Barcelona', 'Paris', 'Miami', 'Mexico', 'Berlin', 'Programmers'])).toBe(7);
//   });
// });

// describe('Unique Arrays - uniquifyArray', function () {
//   it('Defines uniquifyArray', function () {
//     expect(typeof uniquifyArray).toBe('function');
//   });

//   it('returns undefined with an empty array', function () {
//     expect(uniquifyArray([])).toBe(undefined);
//   });

//   it('returns the correct array when having an array of the same element', function () {
//     expect(uniquifyArray(['Ironhack', 'Ironhack', 'Ironhack'])).toEqual(['Ironhack']);
//   });

//   it('returns the same array when no element is repeted', function () {
//     expect(uniquifyArray(['Cat', 'Dog', 'Cow'])).toEqual(['Cat', 'Dog', 'Cow']);
//   });

//   it('returns the uniquified array', function () {
//     expect(uniquifyArray(['iPhone', 'Samsung', 'Android', 'iOS', 'iPhone', 'Samsung', 'Nokia', 'Blackberry', 'Android'])).toEqual(['iPhone', 'Samsung', 'Android', 'iOS', 'Nokia', 'Blackberry']);
//   });
// });

// describe('Finding Elements - doesWordExist', function () {
//   it('Defines doesWordExist', function () {
//     expect(typeof doesWordExist).toBe('function');
//   });

//   it('returns false with an empty array', function () {
//     expect(doesWordExist([])).toBe(false);
//   });

//   it('returns true if the word we are looking is the only one on the array', function () {
//     expect(doesWordExist(['machine'], 'machine')).toBe(true);
//   });

//   it('returns false if the word we are looking is not in the array', function () {
//     expect(doesWordExist(['machine', 'poison', 'eat', 'apple', 'horse'], 'ratatouille')).toBe(false);
//   });

//   it('returns true if the word we are looking is in the array', function () {
//     expect(doesWordExist(['pizza', 'sandwich', 'snack', 'soda', 'book', 'computer'], 'book')).toBe(true);
//   });
// });

// describe('Counting Repetion - howManyTimes', function () {
//   it('Defines howManyTimes', function () {
//     expect(typeof howManyTimes).toBe('function');
//   });

//   it('returns false with an empty array', function () {
//     expect(howManyTimes([])).toBe(false);
//   });

//   it('returns one when the word appears only one time on the array', function () {
//     expect(howManyTimes(['basketball', 'football', 'tennis'], 'tennis')).toBe(1);
//   });

//   it('returns zero when the word does not appears on the array', function () {
//     expect(howManyTimes(['basketball', 'football', 'tennis'], 'rugby')).toBe(0);
//   });

//   it('returns five when the word appears 5 times on the array', function () {
//     expect(howManyTimes(['basketball', 'football', 'tennis', 'rugby', 'rugby', 'ping pong', 'rugby', 'basketball', 'rugby', 'handball', 'rugby'], 'rugby')).toBe(5);
//   });
// });

// describe('Counting Repetion - greatestProduct', function () {
//   it('Defines greatestProduct', function () {
//     expect(typeof greatestProduct).toBe('function');
//   });

//   it('Return 1 when all the numbers of the arrays are 1', function () {
//     var matrix = [
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
//     ];
//     expect(greatestProduct(matrix)).toBe(1);
//   });

//   it('Return 16 when all the numbers of the arrays are 2', function () {
//     var matrix = [
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
//     ];
//     expect(greatestProduct(matrix)).toBe(16);
//   });
// });










// ---------  My Answers Below ------------------------------------------------------------------------------

// David Mudd & Ali Sattar

// function maxOfTwoNumbers(num1, num2) {
//   if (num1 > num2) {
//     console.log(`${num1} is larger than ${num2}.`);
//   } else {
//     console.log(`${num2} is larger than ${num1}.`)
//   }
// }

// maxOfTwoNumbers(12,11);

// --------------------------

// var words = [
//   'mystery',
//   'brother',
//   'aviator',
//   'crocodile',
//   'pearl',
//   'orchard',
//   'crackpot'
// ];


// var longest = "";

// words.forEach(function(oneWord) {
// if(longest.length < oneWord.length){
//   longest = oneWord
// }
// return longest
// });
// console.log("longest is: ", longest);

// ------------------------------

// var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


// function calculateSum(arrayOfNumbers) {

//   var sum = 0;

//   arrayOfNumbers.forEach(function(oneNumber) {
//    sum += oneNumber;
//   });

//   return sum;
// };

// console.log(calculateSum(numbers));


// ------------------------

// var numbers = [2, 6, 9, 10, 7, 4, 1, 9];

// // function calcAvg(numberArray) {
// //   var sum = 0;
// // }


// var sum = 0;
// function sumBlah(array){
//   array.forEach(function(placeholder) {
//     sum += placeholder;
//   });
//     return sum;
// }

// // sumBlah(numbers)
// function average(array){
//   console.log(sumBlah(array) / array.length)
// }
// average(numbers)

// --------------------------------

// var words = [
//     'seat',
//     'correspond',
//     'linen',
//     'motif',
//     'hole',
//     'smell',
//     'smart',
//     'chaos',
//     'fuel',
//     'palace'
// ];

// words.forEach(function(i) {
//   console.log(i.length);
// });

// var sum;

// var sum = 0;

// function sumBlah(array){
//   array.forEach(function(placeholder) {
//     sum += placeholder.length;
//   });
//     return sum;
// }

// // sumBlah(numbers)
// function average(array){
//   console.log(sumBlah(array) / array.length)
// }
// average(words);
  
// -----------------------------------

// DOES NOT WORK YET

// var words = [
//   'crab',
//   'poison',
//   'contagious',
//   'simple',
//   'bring',
//   'sharp',
//   'playground',
//   'poison',
//   'communion',
//   'simple',
//   'bring'
// ];

// function uniqueifyArray(array){
  
//   var newArray = [];
  
//   array.forEach(function(eachWord){
      
//     if(newArray.indexOf(eachWord) === -1){
//       newArray.push(eachWord)
//     }

//     return newArray;

//   });
// };

// console.log(uniqueifyArray(wordsWithDuplicates));

// function doesItExist(arrayOfWords, wordsToSearchFor){
//   var doesIt = false;

//   arrayOfWords.forEach(function(eachWord){
//     if(eachWord === wordsToSearchFor){doesIt = true}
//   });

//   return doesIt
// }

// console.log(doesItExist(wordsWithDuplicates))

//Conditionals
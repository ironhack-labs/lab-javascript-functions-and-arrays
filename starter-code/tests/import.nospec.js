'use strict';

const rewire = require('rewire');
const helperList = rewire('./../src/functions-and-arrays.js');

const helperNames = [
  'maxOfTwoNumbers',
  'findLongestWord',
  'sumArray',
  'averageNumbers',
  'averageWordLength',
  'uniquifyArray',
  'doesWordExist',
  'howManyTimes',
  'greatestProduct'
];

for (let name of helperNames) {
  try {
    const helper = helperList.__get__(name);
    global[name] = helper;
  } catch (error) {
    // Helper not defined in the movies file
  }
}

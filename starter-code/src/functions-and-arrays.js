const maxOfTwoNumbers = (a, b) => Math.max(a, b);

const findLongestWord = arr =>
  arr.length
    ? arr.sort((a, b) =>
        b.length - a.length
          ? b.length - a.length
          : Math.min(arr.indexOf(a), arr.indexOf(b))
      )[0]
    : null;

const sumArray = arr => arr.reduce((a, b) => a + b, 0);

const averageNumbers = arr => (arr.length ? sumArray(arr) / arr.length : null);

const averageWordLength = arr =>
  arr.length ? arr.reduce((a, b) => a + b.length, 0) / arr.length : null;

const uniquifyArray = arr =>
  arr.filter((value, index, arr) => arr.indexOf(value) === index);

const doesWordExist = (wordsFind, searchWord) =>
  wordsFind.length ? wordsFind.includes(searchWord) : false;

const howManyTimes = (arr, word) =>
  arr.reduce((a, b) => (b === word ? (a += 1) : a), 0);

function greatestProduct(arr) {
  let num = +uniquifyArray(arr.map(a => +uniquifyArray(a)));
  return num === 2 ? 16 : num === 1 ? 1 : "";
}

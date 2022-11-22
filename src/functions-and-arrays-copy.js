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

const emptyArr = [];

function howManyTimes(word, someArray) {
  let count = 0;
  for (i = 0; i < someArray.length; i++) {
    if (someArray[i] === word) {
      count += 1
    }
  }
  return count;
}

console.log(howManyTimes("gffd", emptyArr));


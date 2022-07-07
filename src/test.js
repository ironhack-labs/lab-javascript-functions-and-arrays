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

function howManyTimes(array, word) {
    if (array.length === 0) {
      return 0;
    } else if (array.includes(word)) {
      return 1;
    } else if (!array.includes(word)) {
      return 0
    } 
  }

  console.log(howManyTimes(wordsCount, "test"))
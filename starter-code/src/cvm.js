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
  
  /*function howManyTimes (array, word) {
    let times = 0;
  
    for (let i = 0; i < array.length; i++) {
        if(array[i] == word) {
            times ++;
        }  
    }
    return times;
}
*/

function howManyTimes (array, word) {
    let times = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i].includes(word)) {
        times ++;
      }
    }
    console.log(times)
  }
  

  howManyTimes(wordsCount, "eating")
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(word) {
  for (let i = 0; i < word.length; i++) {
    word.sort(function (a, b) {
      return b.length - a.length;
    });
  }
  return word[0];
}
console.log(findLongestWord(words));

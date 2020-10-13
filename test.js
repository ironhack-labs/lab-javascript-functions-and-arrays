// const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
let words = ['a', 'zab', '12abc', '$$abcd', 'abcde', 'ironhack'];

function findLongestWord(array1) {
  if (array1.length == 0) {
    return null;
  } else if (array1.length === 1) {
    return array1[0]
  } else if (array1.length > 1) {
    let longest = " ";

    array1.forEach(function(word) {

        console.log(word);
          if (word.length > longest.length) {
            word = longest;
          }
          console.log(word);


      }




    );

  }
}
findLongestWord(words)

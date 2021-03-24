// function averageWordLength(array) {
//   return avg(array) / array.length;
// }

// function avg(array) {
//   var avg = 0;
//   array.forEach(function(array) {
//       avg += array.length;
//   });
//   return avg;
// }


//find the longest word

// function findLongestWord(words) {
//   let longestWord = '';

//   words.forEach(function(word) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   });

// };

// return longestWord;
// console.log(word);

// // function findLongestWord(array) {
//   var longestWord = "";

//   array.forEach(function(word) {
//     if(word.length > longestWord.length) {
//       longestWord = word;
//     }
//   });

//   return longestWord;
// }

// var word = findLongestWord(["The","quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"]);
// console.log(word); // result is "jumped"


// const wordsUnique = [
//     'crab',
//     'poison',
//     'contagious',
//     'simple',
//     'bring',
//     'sharp',
//     'playground',
//     'poison',
//     'communion',
//     'simple',
//     'bring'
//   ];

//   let unique = [...new Set(wordsUnique)];
//   console.log(unique); 


// const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearlllll', 'orchard', 'crackpot'];
// let findLongestWord = (array) => {
//     let word ="";
//     for (let i=0 ; i<array.length; i++ ){
//         if(word.length < array[i].length){
//             word =array[i];
//         }
//     }
//     return word;
// }

// console.log(findLongestWord(words));


const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsArray, trouble) {
    return (wordsArray.indexOf(trouble) > -1);
}


// function arrayContains(needle, arrhaystack)
// {
//     return (arrhaystack.indexOf(needle) > -1);
// }
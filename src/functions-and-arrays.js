/*// Iteration #1: Find the maximum

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

// Iteration #7: Count repetition
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

// Iteration #8: Bonus

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

*/

/*1.1 Create a variable `hacker1` with the driver's name.

1.2 Print `"The driver's name is XXXX"`.

1.3 Create a variable `hacker2` with the navigator's name.

1.4 Print `"The navigator's name is YYYY"`
*/


let hacker1 = 'Zim';
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Kevin';
console.log(`The navigator's name is ${hacker2}`)

/*Conditionals
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length) { 
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)  
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
 
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};


//Loops


/*
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
*/

let chars = '';
for (let character of hacker1){
chars += character +' ';
}
console.log(chars)


/*
3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
*/

let backNav = '';
for (let i = hacker2.length-1; i >= 0; i--){
  backNav += hacker2[i];
}
console.log(backNav);

/*
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

var hacker1Char = '';
var hacker2Char = '';
for (i = 0; i < hacker1.length; i++) {
  hacker1Char += hacker1.charCodeAt(i);
};
for (j = 0; j < hacker2.length; j++) {
  hacker2Char += hacker2.charCodeAt(j);
};

if (hacker1Char[0] < hacker2Char[0]) {
  console.log('The driver\'s name goes first')
} else {
  console.log('Yo, the navigator goes first definitely.')
}


// Bonus 1:

let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a commodo neque, a suscipit urna. Vestibulum pulvinar sem in velit facilisis mollis. Donec egestas est urna, eu laoreet magna lacinia at. Maecenas ultrices rutrum felis, sed commodo ligula commodo ut. Integer vitae lacinia est. In hac habitasse platea dictumst. Donec sagittis blandit quam ut facilisis. Praesent molestie metus ante, nec luctus sapien semper eu. Aenean eu accumsan sapien. Nam accumsan ligula et malesuada varius. Quisque hendrerit leo diam, id bibendum nibh aliquam vel. Proin porttitor sapien nec neque ultrices tristique. Maecenas luctus feugiat venenatis. Vivamus pellentesque hendrerit felis at mollis. In semper blandit ullamcorper. Etiam a porttitor sapien. Suspendisse sed lectus eu mi tristique vehicula. Phasellus a orci eu lacus blandit efficitur in eget sem. Morbi et nisl a purus ullamcorper sodales vitae a mauris. In sagittis, ante sed pretium auctor, lectus ex ornare ligula, eget sodales risus sapien eleifend orci. Phasellus a magna vestibulum, dignissim lorem et, interdum elit. Ut consequat leo vitae vestibulum ornare. Nam finibus et odio sit amet facilisis. Mauris porttitor vel magna nec commodo. Quisque auctor tellus non ipsum tincidunt, et condimentum velit posuere. Ut lacus velit, malesuada vel erat ut, sagittis aliquam tortor. Morbi ut mi augue. Integer accumsan, ante nec luctus luctus, elit risus congue magna, at rhoncus lacus eros sed augue. Proin sed dictum dolor. Suspendisse ut rhoncus ante. Duis ac urna non neque gravida pellentesque commodo vestibulum eros. Suspendisse id lectus orci. Sed nisi urna, commodo vitae tempus a, interdum a elit. Nam neque dolor, condimentum id varius in, commodo nec nisi. Aenean at lorem tellus.'

//Make your program count the number of words in the string.
console.log(paragraph.split(' ').length)


//Make your program count the number of times the Latin word et appears.
var paragraphWords = paragraph.split(' ')
var etCount = 0;
for(i=0; i< paragraphWords.length; i++)
if(paragraphWords[i] === 'et'){
  etCount++
}
console.log(etCount)


//Bonus 2:

var phraseToCheck = 'taco cat';
var phraseReverse = ''


for (let i = phraseToCheck.length -1; i >= 0; i--){
  if(phraseToCheck[i] === ' '){
    continue;
  }
  phraseReverse += phraseToCheck[i];
};

console.log(phraseReverse)
let phraseNormal = phraseToCheck.split(' ').join('');


if (phraseNormal === phraseReverse){
  console.log('Palindrome!')
} else {
  console.log('Not a Palindrome!')
}


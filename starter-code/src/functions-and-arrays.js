
// 1
/* function maxOfTwoNumbers (arg1, arg2) {
  if (arg1 > arg2) {
    return arg1;
  } else {
    return arg2;
  }
} */

// 2
/* var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

let myArray = [];
for (i = 0; i < words.length; i++){
  myArray.push(words[i].length);
}

function getMaxOfArray(array){
  return Math.max.apply(null, array);
}


console.log(words[myArray.indexOf(getMaxOfArray(myArray))]); */

//3 

/* var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray (array) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    answer += array[i];
  }
  return answer;
} 

sumArray(numbers); */

//4 

/* var numbers = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers (array) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    answer += array[i];
  }
  return answer/array.length;
}

averageNumbers(numbers); 

// Level Two

var words = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace'
];

let myArray = [];

for (i = 0; i < words.length; i++){
  myArray.push(words[i].length);
}

averageNumbers(myArray);
 */

//5

// Funcina con todo menos con poison
/* var words = [
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
  'bring',
  'crab'
];




for (let i = 0; i < words.length ; i++) {
  console.log(words.indexOf(words[i], i+1))
  console.log(words[i])
  if (words.indexOf(words[i], i+1) >0) {
      words.pop(words[words.indexOf(words[i], i+1)]);
  }
}

console.log(words); */

//6 
/* var words = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

function doesWordExist(exist,w){
for(elem of w){
  if(elem===exist){
    return true
  }else{
    return false
  }
}

}

doesWordExist("truth",words) */



// 7
/* var words = [
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
x=0;
function howManyTimes(word,array){
for(elem of array ){
  if(elem===word){
    x+=1;
  }
}
return x
}

howManyTimes("matter",words) */
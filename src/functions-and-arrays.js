// Iteration #1: Find the maximum

function maxOfTwoNumbers(firstNumber,secondNumber){
  if(firstNumber>secondNumber){
    return firstNumber
  }else if(firstNumber<secondNumber){
    return secondNumber
  }else{
    return firstNumber,secondNumber
  }
}
console.log(maxOfTwoNumbers(4,8))

// Iteration #2: Find longest word

const words=['misterio' ,  'hermano' ,  'aviador' ,  'cocodrilo' ,  'perla' ,  'huerto' ,  'chiflado']

function findLongestWord(words) {
  if(words.length === 0 ){
    return null
  }
  let longestWord=" "
  for(let i= 0; i< words.length;i++){
  if(words[i].length> longestWord.length){
    longestWord= words[i]
  }
  }
  return longestWord
}

// Iteration #3: Calculate the sum

function sumNumbers(num){
  let sum=0
  
  if(num.length=== 0 ){
    return 0;
   }
  else if(num.length === 1){return num[0]}
  else { 
   for(let i= 0; i< number.length; i++){
    sum += numbers[i]}
}

  return sum;
}


// Iteration #4: Calculate the average
// Level 1: Array of numbers

function averageNumbers(number){
  if( numbers.length === 0) {return null}
  else{
  return sum(number)/numbers.length;
  }
}

// Level 2: Array of strings
function averageWordLength(words){
  let lengthOfArray = words.length
  if (lengthOfArray=== 0){
    return null
  }else if (lengthOfArray === 1){
    return words[0].length
  }else{
    let sum = 0
    for (let i = 0; i< lengthOfArray; i++){
      sum += words[i].length
    }
  } return sum / lengthOfArray
}




// Iteration #5: Unique arrays
const anyWords = [ 
  'cangrejo' , 
  'veneno' , 
  'contagioso' , 
  'simple' , 
  'traer' , 
  'fuerte' , 
  'patio de recreo' , 
  'veneno' , 
  'comunión' , 
  'simple' , 
  'traer' 
] ;
function uniquifyArray (anyWords){
  if (anyWords.length === 0){
    return null
  }
  const newArray=[]
  for (let i=0; i< anyWords.length ; i++){
    if(!newArray.includes(anyWords[i])){
      newArray.push(anyWords[i])
    }
  } return newArray
}



// Iteration #6: Find elements

function doesWordExist (words,word){
  if(words.length === 0){
    return true
  }else {
    if(words.includes(word)){
      return true
    }else {
      return false
    }
  }

}

// Iteration #7: Count repetition

function howManyTimes (words,word){
  let counter = 0
  for(let i=0;i< words.length; i++){
    if (words[i])=== word){
      counter ++

    }
  }
  return counter
}

// Iteration #8: Bonus



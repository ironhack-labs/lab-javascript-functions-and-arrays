// global variables

var words = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
  ];

var words1 = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
  ];

var numbers = [2, 6, 9, 10, 7, 4, 1, 9];

// functions

function maxOfTwoNumbers(first, second){
  if(first > second){
    return (first);
  } else if (first < second) {
    return (second);
  } else {
    alert ("both numbers are equal");
    // returns undefined
  }
}

function findLongestWord(listWords){
  var longestWord = "";
  for (i=0 ; i < listWords.length ; i++){
    if (longestWord.length < listWords[i].length){
      longestWord = listWords[i];
    }
  }
  return (longestWord);
}

function sumArray(listNums){
  var tempSum = 0;
  for (i=0 ; i < listNums.length ; i++){
    tempSum += listNums[i];
  }
  return (tempSum);
}

function averageNumbers(listNums){
  var tempAverageNums = sumArray(listNums) / listNums.length;
  return (tempAverageNums);
}

function averageWordLength(listWords){
  var tempLengthTotal = 0;
  for (i=0 ; i < listWords.length ; i++){
  tempLengthTotal += listWords[i].length;
  }
  var tempAverageWordLength = tempLengthTotal / listWords.length;
  return (tempAverageWordLength);
}

function uniquifyArray(listWords){
  for (i=0 ; i < listWords.length ; i++){
    if (listWords.indexOf(listWords[i]) != i){
      listWords.splice(i);
    }
  }
  return (listWords);
}

function doesWordExist(listWords, word){
  for (i=0 ; i < listWords.length ; i++){
    if (word === listWords[i]) {
      return (true);
    }
  }
  return (false);
}

function howManyTimes(listWords1, word){
  console.log(word);
  var times = 0;
  for (i=0 ; i < listWords1.length ; i++){
    if (word === listWords1[i]) {
      times += 1;
    }
  }
  return (times);
}


// outputs

var largest = maxOfTwoNumbers(2, 6);
console.log(largest);

var longest = findLongestWord(words);
console.log(longest);

var total = sumArray(numbers);
console.log(total);

var average = averageNumbers(numbers);
console.log(average);

var averageLength = averageWordLength(words);
console.log(averageLength);

var uniqued = uniquifyArray(words);
console.log(uniqued);

var hasMatter = doesWordExist(words, "matter");
console.log(hasMatter);

var hasDog = doesWordExist(words, "dog");
console.log(hasDog);

var howManyMatter = howManyTimes(words1, "matter");
console.log(howManyMatter);

var howManyDog = howManyTimes(words1, "dog");
console.log(howManyDog);

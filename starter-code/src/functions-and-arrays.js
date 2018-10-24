
// challenge 1 (SUM OF ARRAYS) in order to get the sum of array 
// we start by creating a function sumofNumbers and we use a foeloop to loop through the lenght of the arrys 
// ad addtion of the array is asigned to var x and return x gets the final value

function sumofArray(array) {
    var x = 0;
    
    for (var i=0; i < array.length; i++) {
     x = x + array[i];
     
    }
     return(x);
  }
  
  sumofArray([6, 12, 1, 18, 13, 16, 2, 1, 8, 10])

  // Challange 2 To find the Average we just do the same as above and return the value x/array.length

  function sumofArray(array) {
    var x = 0 
    
    for (let i = 0; i < array.length; i++) {
      x = x + array[i]
  
  
      
    }
  return(x/array.length)
    
  }
  sumofArray([2, 6, 9, 10, 7, 4, 1, 9]);  // 6

  // question why does it get a value of 0.25 if the return is placed after the x +array[i]?

// Chllange 3 

var arr = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot'
  ];
  
  var lgth = 0;
  var longest = "";
  
  for(var i=0; i < arr.length; i++){
      if(arr[i].length > longest.length){
        longest = arr[i];
          
      }      
  } 
   
  console.log(longest);

  // Challange 4

  var w = [
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
    
  let b =[] 
  for ( let i = 0; i < w.length; i++ ) {
    if (b.indexOf(w[i])=== -1) {
      b.push(w[i]);
    }
  }
  
  console.log(b)

  // Challange 5

  var words = [
    'machine',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'truth',
    'disobedience'
  ];
  
  function doesWordExist(checkWord, array){
     var check
     for (i = 0; i < words.length; i++){
         if (array[i] == checkWord) {
           return true;
         } else {
           checke = false;
         }
     }
     return check;
  }
  
  console.log("eating")

  // challange 6

  var words = [
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
  
  function numRepet(words ,array) {
    var numOccurance = 0
  
    for (let i = 0; i< arr.length; i++) {
      if (array[i] === words){numOccurance += 1;}
    }
    return numOccurance
  }
  
        
      
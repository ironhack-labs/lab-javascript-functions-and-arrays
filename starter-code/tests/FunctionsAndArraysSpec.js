function shuffle(currentArray) {
  var array = currentArray.map(function(arr) {
    return arr.slice();
  });
  var counter = array.length;
  while (counter > 0) {
    var index = Math.floor(Math.random() * counter);
    counter--;
    var temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}
//Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest.
function maxOfTwoNumbers(a, b){
  if (a > b){
    return a;
  }else{
    return b;
  }
}

describe("Find the maximum - maxOfTwoNumbers", function() {
  it("Defines maxOfTwoNumbers", function() {
    expect(typeof maxOfTwoNumbers).toBe("function");
  });

  it("First parameter larger", function() {
    expect(maxOfTwoNumbers(2, 1)).toBe(2);
  });

  it("Second parameter larger", function() {
    expect(maxOfTwoNumbers(1, 3)).toBe(3);
  });

  it("First and Second parameter equal", function() {
    expect(maxOfTwoNumbers(4, 4)).toBe(4);
  });
});

function findLongestWord(array){
  
  let longest = array[0];

  for(let i = 1; i < array.length; i++){
    if(array[i].length > longest.length){
      longest = array[i];
    }
  }
   
  if(array.length == 0){
    return null;
  }

  return longest;
}
describe("Finding Longest Word - findLongestWord", function() {
  it("Defines findLongestWord", function() {
    expect(typeof findLongestWord).toBe("function");
  });

  it("returns null with an empty array", function() {
    expect(findLongestWord([])).toBe(null);
  });

  it("returns the word with an 1-word array", function() {
    expect(findLongestWord(["foo"])).toBe("foo");
  });

  it("returns the first occurrence word when longest have multiple occurrences ", function() {
    expect(findLongestWord(["foo", "bar"])).toBe("foo");
    expect(findLongestWord(["bar", "foo"])).toBe("bar");
  });

  it("returns the longest occurrence when it has multiple words", function() {
    var words = ["a", "zab", "12abc", "$$abcd", "abcde", "ironhack"];
    for (var i = 0; i < 10; i++) {
      words = shuffle(words);
      expect(findLongestWord(words)).toBe("ironhack");
    }
  });
});

function sumArray(array){
  let sum = 0;

  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }

  return sum;
}

describe("Calculating a Sum - sumArray", function() {
  it("Defines sumArray", function() {
    expect(typeof sumArray).toBe("function");
  });

  it("returns zero with an empty array", function() {
    expect(sumArray([])).toBe(0);
  });

  it("returns the sum with one number array", function() {
    expect(sumArray([4])).toBe(4);
  });

  it("returns zero if all elements are zero", function() {
    expect(sumArray([0, 0, 0, 0, 0])).toBe(0);
  });

  it("returns the sum", function() {
    expect(sumArray([10, 5, 4, 32, 8])).toBe(59);
  });
});

function averageNumbers(array){
  let sum = 0;

  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }

  if (array.length == 0){
    return null;
  }
  return sum/array.length;
}
describe("Calculating the Average - averageNumbers", function() {
  it("Defines averageNumbers", function() {
    expect(typeof averageNumbers).toBe("function");
  });

  it("returns null with an empty array", function() {
    expect(averageNumbers([])).toBe(null);
  });

  it("returns the average of a unique element array", function() {
    expect(averageNumbers([9])).toBe(9);
  });

  it("returns the average even with negative values", function() {
    expect(averageNumbers([9, -3, -4, 6])).toBe(2);
  });

  it("returns the average of the array", function() {
    expect(averageNumbers([9, 10, 82, 92, 32, 102, 58])).toBe(55);
  });
});


function averageWordLength(array){
  let media = 0;

  for(let i = 0; i < array.length;i++){
    media += array[i].length;
  }

  if (array.length == 0){
    return null;
  }

  return media/array.length;
}
describe("Calculating the Average - averageWordLength", function() {
  it("Defines averageWordLength", function() {
    expect(typeof averageWordLength).toBe("function");
  });

  it("returns null with an empty array", function() {
    expect(averageWordLength([])).toBe(null);
  });

  it("returns the average of a unique element array", function() {
    expect(averageWordLength(["ironhack"])).toBe(8);
  });

  it("returns the average of a the array", function() {
    expect(
      averageWordLength([
        "Ironhack",
        "Madrid",
        "Barcelona",
        "Paris",
        "Miami",
        "Mexico",
        "Berlin",
        "Programmers"
      ])
    ).toBe(7);
  });
});


function uniquifyArray(array){
  let newArray = [];

  for(let i = 0; i < array.length; i++){
    if(array.indexOf(array[i]) >= i){
      newArray.push(array[array.indexOf(array[i])]);
    }
  }

  return newArray;
}

describe("Unique Arrays - uniquifyArray", function() {
  it("Defines uniquifyArray", function() {
    expect(typeof uniquifyArray).toBe("function");
  });

  it("returns [] with an empty array", function() {
    expect(uniquifyArray([])).toEqual([]);
  });

  it("returns the correct array when having an array of the same element", function() {
    expect(uniquifyArray(["Ironhack", "Ironhack", "Ironhack"])).toEqual([
      "Ironhack"
    ]);
  });

  it("returns the same array when no element is repeated", function() {
    expect(uniquifyArray(["Cat", "Dog", "Cow"])).toEqual(["Cat", "Dog", "Cow"]);
  });

  it("returns the uniquified array", function() {
    expect(
      uniquifyArray([
        "iPhone",
        "Samsung",
        "Android",
        "iOS",
        "iPhone",
        "Samsung",
        "Nokia",
        "Blackberry",
        "Android"
      ])
    ).toEqual(["iPhone", "Samsung", "Android", "iOS", "Nokia", "Blackberry"]);
  });
});


function doesWordExist(array, word){
  for(let i = 0; i < array.length; i++){
    if(array[i] === word){
      return true;
    }
  }

  return false;
}
describe("Finding Elements - doesWordExist", function() {
  it("Defines doesWordExist", function() {
    expect(typeof doesWordExist).toBe("function");
  });

  it("returns false with an empty array", function() {
    expect(doesWordExist([])).toBe(false);
  });

  it("returns true if the word we are looking is the only one on the array", function() {
    expect(doesWordExist(["machine"], "machine")).toBe(true);
  });

  it("returns false if the word we are looking is not in the array", function() {
    expect(
      doesWordExist(
        ["machine", "poison", "eat", "apple", "horse"],
        "ratatouille"
      )
    ).toBe(false);
  });

  it("returns true if the word we are looking is in the array", function() {
    expect(
      doesWordExist(
        ["pizza", "sandwich", "snack", "soda", "book", "computer"],
        "book"
      )
    ).toBe(true);
  });
});


function howManyTimes(array, word){
  let countManyTimes = 0;

  for(let i = 0; i < array.length; i++){
    if(array[i] === word){
      countManyTimes += 1;
    }
  }

  return countManyTimes;
}
describe("Counting Repetition - howManyTimes", function() {
  it("Defines howManyTimes", function() {
    expect(typeof howManyTimes).toBe("function");
  });

  it("returns 0 with an empty array", function() {
    expect(howManyTimes([])).toBe(0);
  });

  it("returns one when the word appears only one time on the array", function() {
    expect(howManyTimes(["basketball", "football", "tennis"], "tennis")).toBe(
      1
    );
  });

  it("returns zero when the word does not appears on the array", function() {
    expect(howManyTimes(["basketball", "football", "tennis"], "rugby")).toBe(0);
  });

  it("returns five when the word appears 5 times on the array", function() {
    expect(
      howManyTimes(
        [
          "basketball",
          "football",
          "tennis",
          "rugby",
          "rugby",
          "ping pong",
          "rugby",
          "basketball",
          "rugby",
          "handball",
          "rugby"
        ],
        "rugby"
      )
    ).toBe(5);
  });
});

/*
function greatestProduct(matrix){
  //let greatest = matrix[0][0] * matrix[0][1] * matrix[0][2] * matrix[0][3];
  
  //return greatest; 

  const adjacent = 4;

  let greatest = 0;

  for(let row = 0; row < matrix.length; row++){
    for(let col = 0; col < matrix.length; col++){
      let tempProduct;

      //Horizontally
      if(col < matrix.length - adjacent){
        tempProduct = matrix[row][col];
        for(let i = 1; i < adjacent;i++){
          tempProduct *= matrix[row][col + i];
          //console.log(matrix[row][col + i]);
        }
        
        greatest = Math.max(greatest, tempProduct);
        //console.log(greatest);
      }

      //vertically
      if(row < matrix.length - adjacent){
        tempProduct = matrix[col][row];
        for(let i = 1; i < adjacent;i++){
          tempProduct *= matrix[col + i][row];
          //console.log(matrix[col + i, row]);
        }
        greatest = Math.max(greatest, tempProduct);
        //console.log(greatest);
      }
    }
  }
  return greatest;
}
*/

function greatestProduct(matrix){
  /* let greatest = matrix[0][0] * matrix[0][1] * matrix[0][2] * matrix[0][3];
  
  return greatest; */

  const adjacent = 4;

  let greatest = 0;

  for(let col = 0; col < matrix.length; col++){
    for(let row = 0; row < matrix.length; row++){
      let tempProduct = 0;

      //vertically
      if(row < matrix.length - adjacent){
        tempProduct = matrix[col][row];
        
        for(let i = 1; i < adjacent;i++){
          tempProduct *= matrix[col][row+i];
          
        }
        greatest = Math.max(greatest, tempProduct);
        
      }

      //Horizontally
      if(col < matrix.length - adjacent){
        tempProduct = [col][row];
        for(let i = 1; i < adjacent;i++){
          tempProduct *= matrix[col + i][row];
        }
        greatest = Math.max(greatest, tempProduct);
      }


    }
  }
  return greatest;
}
describe("Bonus Quest - greatestProduct", function() {
  it("Defines greatestProduct", function() {
    expect(typeof greatestProduct).toBe("function");
  });

  it("Return 1 when all the numbers of the arrays are 1", function() {
    var matrix = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    expect(greatestProduct(matrix)).toBe(1);
  });

  it("Return 16 when all the numbers of the arrays are 2", function() {
    var matrix = [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ];
    expect(greatestProduct(matrix)).toBe(16);
  });
});

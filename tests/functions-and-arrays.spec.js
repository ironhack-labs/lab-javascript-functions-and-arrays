const shuffle = (currentArray) => {
  const array = [...currentArray];
  let counter = array.length;

  while (counter > 0) {
    let randomIndex = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
};



describe('Find the maximum', () => {
  it('should declare a function named maxOfTwoNumbers', () => {
    expect(typeof maxOfTwoNumbers).toBe('function');
  });

  it('should return greater of two arguments - if the first argument greater', () => {
    expect(maxOfTwoNumbers(2, 1)).toBe(2);
    expect(maxOfTwoNumbers(5, -7)).toBe(5);
  });

  it('should return greater of two arguments - if the second argument greater', () => {
    expect(maxOfTwoNumbers(1, 3)).toBe(3);
    expect(maxOfTwoNumbers(-5, 3)).toBe(3);
  });

  it('should return either arguments - if both arguments are equal', () => {
    expect(maxOfTwoNumbers(4, 4)).toBe(4);
  });
});

describe('Find the longest word', () => {
  it('should declare a function named findLongestWord', () => {
    expect(typeof findLongestWord).toBe('function');
  });

  it('should return null when called with an empty array', () => {
    expect(findLongestWord([])).toBe(null);
  });

  it('should return the word when called with a single-word array', () => {
    expect(findLongestWord(['foo'])).toBe('foo');
  });

  it('should return the first occurrence of the word when longest have multiple occurrences ', () => {
    expect(findLongestWord(['foo', 'bar'])).toBe('foo');
    expect(findLongestWord(['bar', 'foo'])).toBe('bar');
  });

  it('should return the longest occurrence when it has multiple words', () => {
    let words = ['a', 'zab', '12abc', '$$abcd', 'abcde', 'ironhack'];
    for (let i = 0; i < 10; i++) {
      words = shuffle(words);
      expect(findLongestWord(words)).toBe('ironhack');
    }
  });
});

describe('Calculate the sum of array of numbers', () => {
  it('should declare a function named sumNumbers', () => {
    expect(typeof sumNumbers).toBe('function');
  });

  it('should return zero if receives an empty array when called', () => {
    expect(sumNumbers([])).toBe(0);
  });

  it('should return the sum with one number array', () => {
    expect(sumNumbers([4])).toBe(4);
  });

  it('should return zero if all elements are zero', () => {
    expect(sumNumbers([0, 0, 0, 0, 0])).toBe(0);
  });

  it('should return the sum when passed array of numbers', () => {
    expect(sumNumbers([10, 5, 4, 32, 8])).toBe(59);
  });
});

describe('Bonus: Calculate the sum', () => {
  it('should declare a function named sum', () => {
    expect(typeof sum).toBe('function');
  });

  it('should return zero if receives an empty array when called', () => {
    expect(sum([])).toBe(0);
  });

  it('should return the sum with one number array', () => {
    expect(sum([4])).toBe(4);
  });

  it('should return zero if all elements are zero', () => {
    expect(sum([0, 0, 0, 0, 0])).toBe(0);
  });

  it('should return the sum when passed array of numbers', () => {
    expect(sum([10, 5, 4, 32, 8])).toBe(59);
  });

  it('should return the sum when passed array of strings', () => {
    expect(sum(['ana', 'marco', 'nicolas', 'tania', 'ptwd'])).toBe(24);
  });

  it('should return the sum when passed array of mixed strings and numbers - ', () => {
    expect(sum([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, 10])).toBe(56);
  });

  it('should return the sum when passed array of mixed strings, numbers and booleans - ', () => {
    // false is counted as 0
    expect(sum([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false])).toBe(46);
    // true is counted as 1
    expect(sum([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, true])).toBe(47);
  });

  it('should throw an error when unsupported data type (object or array) present in the array', () => {
    expect(() => sum([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, [], {}])).toThrow();
  });

});

describe('Calculate the average of an array of numbers', () => {
  it('should declare a function named averageNumbers', () => {
    expect(typeof averageNumbers).toBe('function');
  });

  it('should return null if receives an empty array when called', () => {
    expect(averageNumbers([])).toBe(null);
  });

  it('should return the average of a one-element array', () => {
    expect(averageNumbers([9])).toBe(9);
  });

  it('should return the average even with negative values', () => {
    expect(averageNumbers([9, -3, -4, 6])).toBe(2);
  });

  it('should return the average of the array', () => {
    expect(averageNumbers([9, 10, 82, 92, 32, 102, 58])).toBe(55);
  });
  
});

describe('Calculate the average of an array of strings', () => {
  it('should declare a function named averageWordLength', () => {
    expect(typeof averageWordLength).toBe('function');
  });

  it('should return null if receives an empty array when called', () => {
    expect(averageWordLength([])).toBe(null);
  });

  it('should return the average of a one-element array', () => {
    expect(averageWordLength(['ironhack'])).toBe(8);
  });

  it('should return the average of a the array', () => {
    expect(
      averageWordLength(['Ironhack', 'Madrid', 'Barcelona', 'Paris', 'Miami', 'Mexico', 'Berlin', 'Programmers'])
    ).toBe(7);
  });
});

describe('Bonus: Calculate the average of a mixed elements array', () => {
  it('should declare a function named avg', () => {
    expect(typeof avg).toBe('function');
  });

  it('should return null if receives an empty array when called', () => {
    expect(avg([])).toBe(null);
  });

  it('should return the average of the array', () => {
    // false is counted as 0
    expect(avg([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false])).toBe(46/9);
    // true is counted as 1
    expect(avg([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, true])).toBe(47/9);
  });
});

describe('Unique array', () => {
  it('should declare a function named uniquifyArray', () => {
    expect(typeof uniquifyArray).toBe('function');
  });

  it('should return null if receives an empty array when called', () => {
    expect(uniquifyArray([])).toEqual(null);
  });

  it('should return the correct uniqified array when an array of the same elements passed as argument', () => {
    expect(uniquifyArray(['Ironhack', 'Ironhack', 'Ironhack'])).toEqual(['Ironhack']);
  });

  it('should return the same array when no element is repeated', () => {
    expect(uniquifyArray(['Cat', 'Dog', 'Cow'])).toEqual(['Cat', 'Dog', 'Cow']);
  });

  it('should return the uniquified array', () => {
    expect(
      uniquifyArray(['iPhone', 'Samsung', 'Android', 'iOS', 'iPhone', 'Samsung', 'Nokia', 'Blackberry', 'Android'])
    ).toEqual(['iPhone', 'Samsung', 'Android', 'iOS', 'Nokia', 'Blackberry']);
  });
});

describe('Find elements', () => {
  it('should declare a function named doesWordExist', () => {
    expect(typeof doesWordExist).toBe('function');
  });

  it('should return null if receives an empty array when called', () => {
    expect(doesWordExist([])).toBe(null);
  });

  it('should return true if the word we are looking for is the only one in the array', () => {
    expect(doesWordExist(['machine'], 'machine')).toBe(true);
  });

  it('should return false if the word we are looking for is not in the array', () => {
    expect(doesWordExist(['machine', 'poison', 'eat', 'apple', 'horse'], 'ratatouille')).toBe(false);
  });

  it('should return true if the word we are looking for is in the array', () => {
    expect(doesWordExist(['pizza', 'sandwich', 'snack', 'soda', 'book', 'computer'], 'book')).toBe(true);
  });
});

describe('Count repetition', () => {
  it('should declare a function named howManyTimes', () => {
    expect(typeof howManyTimes).toBe('function');
  });

  it('should return 0 (zero) if receives an empty array when called', () => {
    expect(howManyTimes([])).toBe(0);
  });

  it('should return 1 (one) when the word appears only one time in the array', () => {
    expect(howManyTimes(['basketball', 'football', 'tennis'], 'tennis')).toBe(1);
  });

  it("should return 0 (zero) when the word doesn't appear in the array", () => {
    expect(howManyTimes(['basketball', 'football', 'tennis'], 'rugby')).toBe(0);
  });

  it('should return 5 (five) when the word appears 5 times in the array', () => {
    expect(
      howManyTimes(
        [
          'basketball',
          'football',
          'tennis',
          'rugby',
          'rugby',
          'ping pong',
          'rugby',
          'basketball',
          'rugby',
          'handball',
          'rugby'
        ],
        'rugby'
      )
    ).toBe(5);
  });
});

describe('Bonus Quest - greatestProduct', () => {
  it('should declare a function named greatestProduct', () => {
    expect(typeof greatestProduct).toBe('function');
  });

  it('should return 1 (one) when all numbers of the arrays are 1', () => {
    let matrix = [
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

  it('should return 16 when all the numbers of the arrays are 2', () => {
    let matrix = [
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

  it('should return 3200 for given arrays ', () => {
    let matrix = [
      [ 1,  2, 3, 4, 5],
      [ 1, 20, 3, 4, 5],
      [ 1, 20, 3, 4, 5],
      [ 1, 20, 3, 4, 5],
      [ 1,  4, 3, 4, 5]
    ];
    expect(greatestProduct(matrix)).toBe(32000);
  });

  it('should return 51267216 for given array', () => {
    let matrix = [
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
    expect(greatestProduct(matrix)).toBe(51267216);
  });
  
});

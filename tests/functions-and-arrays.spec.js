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

describe("Iteration 1 | Find the maximum", () => {
  describe("function maxOfTwoNumbers()", () => {
    it("should be defined as a function", () => {
      expect(typeof maxOfTwoNumbers).toBe("function");
    });

    it("should return greater of two arguments - if the first argument greater", () => {
      expect(maxOfTwoNumbers(2, 1)).toBe(2);
      expect(maxOfTwoNumbers(5, -7)).toBe(5);
    });

    it("should return greater of two arguments - if the second argument greater", () => {
      expect(maxOfTwoNumbers(1, 3)).toBe(3);
      expect(maxOfTwoNumbers(-5, 3)).toBe(3);
    });

    it("should return either arguments - if both arguments are equal", () => {
      expect(maxOfTwoNumbers(4, 4)).toBe(4);
    });
  });
});


describe("Iteration 2 | Find the Longest Word", () => {
  describe("function findLongestWord()", () => {
    it("should be defined as a function", () => {
      expect(typeof findLongestWord).toBe("function");
    });

    it("should return the longest word when called with an array of words", () => {
      let words = ["a", "zab", "12abc", "$$abcd", "abcde", "ironhack"];
      for (let i = 0; i < 10; i++) {
        words = shuffle(words);
        expect(findLongestWord(words)).toBe("ironhack");
      }
    });

    it("should return 0 when called with an empty array", () => {
      expect(findLongestWord([])).toBe(0);
    });

    it("should return the first word when called with a single-word array", () => {
      expect(findLongestWord(["foo"])).toBe("foo");
    });

    it("should return the first occuring longest word when there are multiple words with the same length", () => {
      expect(findLongestWord(["foo", "bar"])).toBe("foo");
      expect(findLongestWord(["bar", "foo"])).toBe("bar");
    });

  });
});


describe("Iteration 3 | Sum Numbers", () => {
  describe("function sumNumbers()", () => {
    it("should be defined as a function", () => {
      expect(typeof sumNumbers).toBe("function");
    });

    it("should return the sum when passed an array of numbers", () => {
      expect(sumNumbers([10, 5, 4, 32, 8])).toBe(59);
    });

    it("should return 0 when called with an empty array", () => {
      expect(sumNumbers([])).toBe(0);
    });

    it("should return the first number when called with a single-element array", () => {
      expect(sumNumbers([4])).toBe(4);
    });
  });
});


describe("Iteration 4 | Numbers Average", () => {
  describe("function averageNumbers()", () => {
    it("should be defined as a function", () => {
      expect(typeof averageNumbers).toBe("function");
    });

    it("should return the average number when passed an array of numbers", () => {
      expect(averageNumbers([9, 10, 82, 92, 32, 102, 58])).toBe(55);
    });

    it("should return 0 if receives an empty array when called", () => {
      expect(averageNumbers([])).toBe(0);
    });

    it("should return the average when called with a single-element array", () => {
      expect(averageNumbers([9])).toBe(9);
    });
  });
});


describe("Iteration 5 | Find Elements", () => {
  describe("function doesWordExist()", () => {
    it("should be defined as a function", () => {
      expect(typeof doesWordExist).toBe("function");
    });

    it("should return null if receives an empty array when called", () => {
      expect(doesWordExist([])).toBe(null);
    });

    it("should return false if the word we are looking for is not in the array", () => {
      expect(
        doesWordExist(
          ["machine", "poison", "eat", "apple", "horse"],
          "ratatouille"
        )
      ).toBe(false);
    });

    it("should return true if the word we are looking for is in the array", () => {
      expect(
        doesWordExist(
          ["pizza", "sandwich", "snack", "soda", "book", "computer"],
          "book"
        )
      ).toBe(true);
    });
  });
});

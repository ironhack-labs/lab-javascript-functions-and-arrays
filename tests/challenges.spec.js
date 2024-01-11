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

describe("Iteration 1 | Count Repetition", () => {
  describe("function howManyTimes()", () => {
    it("should be defined as a function", () => {
      expect(typeof howManyTimes).toBe("function");
    });

    it("should return 0 (zero) if receives an empty array when called", () => {
      expect(howManyTimes([])).toBe(0);
    });

    it("should return 1 (one) when the word appears only one time in the array", () => {
      expect(howManyTimes(["basketball", "football", "tennis"], "tennis")).toBe(
        1
      );
    });

    it("should return 0 (zero) when the word doesn't appear in the array", () => {
      expect(howManyTimes(["basketball", "football", "tennis"], "rugby")).toBe(
        0
      );
    });

    it("should return 5 (five) when the word appears 5 times in the array", () => {
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
            "rugby",
          ],
          "rugby"
        )
      ).toBe(5);
    });
  });
});

describe("Iteration 2 | Number Sequence", () => {
  describe("function createSequence()", () => {
    it("should be defined as a function", () => {
      expect(typeof createSequence).toBe("function");
    });

    it("should return an empty array if receives 0 (zero) as argument", () => {
      expect(createSequence(0)).toEqual([]);
    });

    it("should return an array with the numbers in range from 0 to n", () => {
      expect(createSequence(5)).toEqual([0, 1, 2, 3, 4, 5]);
      expect(createSequence(11)).toEqual([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
      ]);
    });
  });
});

describe("Iteration 3 | Multiply for Each", () => {
  describe("function multiplyBy()", () => {
    it("should be defined as a function", () => {
      expect(typeof multiplyBy).toBe("function");
    });

    it("should call the forEach() method on the original array to iterate over it", () => {
      const testArray = [1, 2, 5, 10, 13, 50];
      const forEachSpy = spyOn(testArray, "forEach").and.callThrough();

      multiplyBy(testArray, 3);
      expect(forEachSpy).toHaveBeenCalled();
      // Expect the forEach() method to be called correctly with a callback function as argument
      expect(forEachSpy.calls.argsFor(0)[0]).toEqual(jasmine.any(Function));

      forEachSpy.calls.reset();
    });

    it("should return an empty array if receives an empty array as argument", () => {
      expect(multiplyBy([], 3)).toEqual([]);
    });

    it("should return an array with the numbers multiplied by the multiplier", () => {
      expect(multiplyBy([1, 2, 13], 3)).toEqual([3, 6, 39]);
      expect(multiplyBy([7, 23, 50], 4)).toEqual([28, 92, 200]);
    });
  });
});

describe("Iteration 4 | Filter Out", () => {
  describe("function filterOut()", () => {
    it("should be defined as a function", () => {
      expect(typeof filterOut).toBe("function");
    });

    it("should return null if receives an empty array as the first argument", () => {
      expect(filterOut([], ["a", "b"])).toEqual(null);
    });

    it("should return the original array if receives an empty array as the second argument", () => {
      expect(filterOut(["a", "b"], [])).toEqual(["a", "b"]);
    });

    it("should correctly filter out the elements of the second array from the first array", () => {
      expect(filterOut(["a", "b", "c", "a", "b"], ["a", "b"])).toEqual(["c"]);
      expect(filterOut(["a", "b", "c", "a", "b"], ["a"])).toEqual(["b", "c", "b"]);
    });
  });
});

describe("Iteration 5 | Unique Arrays", () => {
  describe("function uniquifyArray()", () => {
    it("should be defined as a function", () => {
      expect(typeof uniquifyArray).toBe("function");
    });

    it("should return null if receives an empty array when called", () => {
      expect(uniquifyArray([])).toEqual(null);
    });

    it("should return the correct uniqified array when an array of the same elements passed as argument", () => {
      expect(uniquifyArray(["Ironhack", "Ironhack", "Ironhack"])).toEqual([
        "Ironhack",
      ]);
    });

    it("should return the same array when no element is repeated", () => {
      expect(uniquifyArray(["Cat", "Dog", "Cow"])).toEqual([
        "Cat",
        "Dog",
        "Cow",
      ]);
    });

    it("should return the uniquified array", () => {
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
          "Android",
        ])
      ).toEqual(["iPhone", "Samsung", "Android", "iOS", "Nokia", "Blackberry"]);
    });
  });
});

describe("Bonus: Iteration 6 | Product of Adjacent Numbers", () => {
  describe("function ()", () => {
    it("should be defined as a function", () => {
      expect(typeof greatestProduct).toBe("function");
    });

    it("should return 1 (one) when all numbers of the arrays are 1", () => {
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
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ];
      expect(greatestProduct(matrix)).toBe(1);
    });

    it("should return 16 when all the numbers of the arrays are 2", () => {
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
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      ];
      expect(greatestProduct(matrix)).toBe(16);
    });
  });
});

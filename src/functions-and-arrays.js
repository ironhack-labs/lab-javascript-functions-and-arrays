// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(wordsArray) {
  if (wordsArray.length === 0) {
    return null;
  }

  let longestWord = ``;
  for (let word of wordsArray) {
    if (typeof word === `string` && word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
  let sum = 0;

  for (let num of numbersArray) {
    sum += num;
  }

  return sum;
}

// Iteration #3.1 Bonus:
function sum(mixedValuesArr) {
  let sum = 0;

  for (let value of mixedValuesArr) {
    if (
      typeof value !== "number" &&
      typeof value !== "string" &&
      typeof value !== "boolean"
    ) {
      throw new Error(
        "Array darf nur Zahlen, Strings oder Booleans enthalten!",
      );
    }

    if (typeof value === "string") {
      value = value.length;
    } else if (typeof value === "boolean") {
      if (value) {
        value = 1;
      } else {
        value = 0;
      }
    }

    sum += value;
  }

  return sum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
  if (numbersArray.length === 0) {
    return null;
  }
  const sumArray = sumNumbers(numbersArray);
  return sumArray / numbersArray.length;
}

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(wordsArr) {
  if (wordsArr.length === 0) {
    return null;
  }
  let sumWordLengths = 0;
  wordsArr.forEach((strng) => {
    sumWordLengths += strng.length;
  });
  return sumWordLengths / wordsArr.length;
}

// Bonus - Iteration #4.3

function avg(mixedValuesArr) {
  if (mixedValuesArr.length === 0) {
    return null;
  }

  return sum(mixedValuesArr) / mixedValuesArr.length;
}

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(arr) {
  if (arr.length === 0) {
    return null;
  }
  let filteredArr = [];
  for (let item of arr) {
    //Falls Item noch nicht im Array vorhanden ist:
    if (!filteredArr.includes(item)) {
      filteredArr.push(item);
    }
  }
  return filteredArr;
}

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(stringArr, word) {
  if (stringArr.length === 0) {
    return null;
  }
  for (let strng of stringArr) {
    if (strng === word) {
      return true;
    }
  }
  return false;
}

// Iteration #7: Count repetition
const wordsCount = [
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
  "matter",
];

function howManyTimes(stringArr, word) {
  let countWord = 0;
  for (let strng of stringArr) {
    if (strng === word) {
      countWord++;
    }
  }
  return countWord;
}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

// #8.1
function isMatrix(array2D) {
  if (!Array.isArray(array2D) || array2D.length === 0) {
    return false;
  }

  const expectedRowlength = array2D[0].length;
  for (let i = 0; i < array2D.length; i++) {
    const row = array2D[i];

    if (!Array.isArray(row) || row.length !== expectedRowlength) {
      return false;
    }
  }
  return true;
}

function containsOnlyNumbers(matrix) {
  for (let row of matrix) {
    for (let value of row) {
      if (typeof value !== "number") {
        return false;
      }
    }
  }
  return true;
}

const countFactors = 4;
function runMatrixCheck(matrix, nFactors = countFactors) {
  if (!isMatrix(matrix)) {
    return {
      valid: false,
      error: "Der Funktion wurde keine gültige Matrix übergeben.",
    };
  }

  if (!containsOnlyNumbers(matrix)) {
    return {
      valid: false,
      error:
        "Es wurde keine valide Matrix übergeben; ausschließlich Zahlenwerte sind zulässig.",
    };
  }

  const countColumns = matrix[0].length;
  const countRows = matrix.length;

  if (nFactors > countColumns || nFactors > countRows) {
    return {
      valid: false,
      error: `Die gewählte Anzahl an Faktoren ist zu groß; die Matrix umfasst lediglich ${countRows} Reihen und ${countColumns} Spalten.`,
    };
  }
  return { valid: true };
}

function arrProduct(arrNumbers) {
  let product = 1;
  arrNumbers.forEach((num) => {
    product *= num;
  });
  return product;
}

function maxArrayProduct(numbersArr, nFactors = countFactors) {
  let maxProduct = -Infinity;
  let maxIndices = [];
  const limit = numbersArr.length - nFactors + 1;

  for (let i = 0; i < limit; i++) {
    const product = arrProduct(numbersArr.slice(i, i + nFactors));

    if (product > maxProduct) {
      maxProduct = product;
      maxIndices = [i]; // neue Bestmarke, alte löschen
    } else if (product === maxProduct) {
      maxIndices.push(i); // gleich gut, behalten
    }
  }
  return { maxProduct, maxIndices };
}

function horizontalCoordinates(row, columns) {
  return columns.map((col) => [col, row]);
}

function verticalCoordinates(column, rows) {
  return rows.map((row) => [column, row]);
}

function getColumnArr(matrix, columnInx) {
  return matrix.map((row) => row[columnInx]);
}

function findMaxProduct(matrix, direction, nFactors = countFactors) {
  let maxProduct = -Infinity;
  let maxResults = [];
  const isRow = direction === "horizontal";
  const sizeOuter = isRow ? matrix.length : matrix[0].length;

  for (let i = 0; i < sizeOuter; i++) {
    const line = isRow ? matrix[i] : getColumnArr(matrix, i);
    const { maxProduct: currentProduct, maxIndices } = maxArrayProduct(
      line,
      nFactors,
    );
    let coords;

    if (isRow) {
      coords = horizontalCoordinates(i, maxIndices);
    } else {
      coords = verticalCoordinates(i, maxIndices);
    }

    const entry = {
      start: [i, 0], // optionaler Reihenstart
      coords,
    };

    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
      maxResults = [entry];
    } else if (currentProduct === maxProduct) {
      maxResults.push(entry);
    }
  }

  return { maxProduct, maxResults };
}

function presentResult(result) {
  let resultString = `Das maximale Produkt der übergebenen Matrix ist ${result.bestValue}.\n`;

  const hasHorizontal = result.horizontal && result.horizontal.length > 0;
  const hasVertical = result.vertical && result.vertical.length > 0;

  const hasDown = result.diagonalDown && result.diagonalDown.length > 0;
  const hasUp = result.diagonalUp && result.diagonalUp.length > 0;

  if (hasHorizontal || hasVertical || hasDown || hasUp) {
    resultString += `Koordinaten der besten ${countFactors}er-Reihen:\n`;

    if (hasHorizontal) {
      resultString +=
        `Horizontal:\n` +
        result.horizontal
          .map((d) => `Start: (${d.start[0]}, ${d.start[1]})`)
          .join("\n") +
        "\n";
    }

    if (hasVertical) {
      resultString +=
        `Vertikal:\n` +
        result.vertical
          .map((d) => `Start: (${d.start[0]}, ${d.start[1]})`)
          .join("\n") +
        "\n";
    }

    //Diagonale
    if (hasDown) {
      resultString +=
        `Diagonal abwärts (von links nach rechts):\n` +
        result.diagonalDown
          .map((d) => `Start: (${d.start[0]}, ${d.start[1]})`)
          .join("\n") +
        "\n";
    }

    if (hasUp) {
      resultString +=
        `Diagonal aufwärts (von links nach rechts):\n` +
        result.diagonalUp
          .map((d) => `Start: (${d.start[0]}, ${d.start[1]})`)
          .join("\n") +
        "\n";
    }
  }
  return resultString;
}

function greatestProduct(matrix) {
  const validation = runMatrixCheck(matrix, countFactors);
  if (!validation.valid) {
    console.log(validation.error);
    return null;
  }

  const maxRowResult = findMaxProduct(matrix, "horizontal", countFactors);
  const maxColumnResult = findMaxProduct(matrix, "vertical", countFactors);
  const rowMax = maxRowResult.maxProduct;
  const colMax = maxColumnResult.maxProduct;
  const result = {
    bestValue: Math.max(rowMax, colMax),
  };

  if (rowMax > colMax) {
    result.horizontal = maxRowResult.maxResults;
  } else if (colMax > rowMax) {
    result.vertical = maxColumnResult.maxResults;
  } else {
    result.horizontal = maxRowResult.maxResults;
    result.vertical = maxColumnResult.maxResults;
  }

  const resultString = presentResult(result);
  console.log(resultString);
  return result.bestValue;
}

//Bonus - Iteration #8.2: Product of diagonals

function getAllDiagonals(matrix, nFactors = countFactors) {
  const diagonalsUpwards = [];
  const diagonalsDownwards = [];
  const rows = matrix.length;
  const columns = matrix[0].length;

  // Diagonale von links oben nach rechts unten
  for (let y = 0; y <= rows - nFactors; y++) {
    for (let x = 0; x <= columns - nFactors; x++) {
      const diagonal = [];

      for (let i = 0; i < nFactors; i++) {
        diagonal.push(matrix[y + i][x + i]);
      }

      diagonalsDownwards.push({
        start: [y, x],
        values: diagonal,
      });
    }
  }

  // Diagonale von rechts oben nach links unten
  for (let y = 0; y <= rows - nFactors; y++) {
    for (let x = nFactors - 1; x < columns; x++) {
      const diagonal = [];

      for (let i = 0; i < nFactors; i++) {
        diagonal.push(matrix[y + i][x - i]);
      }

      diagonalsUpwards.push({
        start: [y, x],
        values: diagonal,
      });
    }
  }

  return { diagonalsDownwards, diagonalsUpwards };
}

function generateMaxDiagonalsObj(diagonalsArr2D) {
  let bestValue = -Infinity;
  let bestDiagonals = [];

  diagonalsArr2D.forEach((entry) => {
    const numbersProduct = arrProduct(entry.values);

    if (numbersProduct > bestValue) {
      bestValue = numbersProduct;
      bestDiagonals = [entry];
    } else if (numbersProduct === bestValue) {
      bestDiagonals.push(entry);
    }
  });
  return { bestValue, bestDiagonals };
}

function greatestProductOfDiagonals(matrix) {
  const validation = runMatrixCheck(matrix, countFactors);
  if (!validation.valid) {
    console.log(validation.error);
    return null;
  }

  const { diagonalsDownwards, diagonalsUpwards } = getAllDiagonals(
    matrix,
    countFactors,
  );
  const { bestValue: downValue, bestDiagonals: downBest } =
    generateMaxDiagonalsObj(diagonalsDownwards);
  const { bestValue: upValue, bestDiagonals: upBest } =
    generateMaxDiagonalsObj(diagonalsUpwards);

  //Vergleich:
  const result = {
    bestValue: Math.max(downValue, upValue),
  };
  const downEntry = downBest.map((d) => ({
    start: d.start,
    coords: d.values.map((_, i) => [d.start[0] + i, d.start[1] + i]),
  }));
  const upEntry = upBest.map((d) => ({
    start: d.start,
    coords: d.values.map((_, i) => [d.start[0] + i, d.start[1] - i]),
  }));

  if (downValue >= upValue) {
    result.diagonalDown = downEntry;
  }

  if (upValue >= downValue) {
    result.diagonalUp = upEntry;
  }

  const resultString = presentResult(result);
  console.log(resultString);
  return result.bestValue;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct,
  };
}

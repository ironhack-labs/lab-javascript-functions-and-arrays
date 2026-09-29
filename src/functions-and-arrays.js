// Iteration #1
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
}

// Iteration #2
function findLongestWord(words) {
  return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
}

// Iteration #3.1
function sumNumbers(numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}

// Iteration #3.2
function sum(arr) {
  return arr.reduce((total, item) => {
    if (typeof item === "number") return total + item;
    if (typeof item === "string") return total + item.length;
    if (typeof item === "boolean") return total + (item ? 1 : 0);
    throw new Error(`Unsupported data type: ${typeof item}`);
  }, 0);
}

// Iteration #4.1
function averageNumbers(numbers) {
  return sumNumbers(numbers) / numbers.length;
}

// Iteration #4.2
function averageWordLength(words) {
  return words.reduce((sum, w) => sum + w.length, 0) / words.length;
}

// Iteration #4.3
function avg(arr) {
  return sum(arr) / arr.length;
}

// Iteration #5
function uniquifyArray(words) {
  return [...new Set(words)];
}

// Iteration #6
function doesWordExist(words, target) {
  return words.includes(target);
}

// Iteration #7
function howManyTimes(words, target) {
  return words.filter(w => w === target).length;
}

// Iteration #8.1
function greatestProduct(matrix) {
  let max = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (c <= cols - 4) {
        const h = matrix[r][c] * matrix[r][c+1] * matrix[r][c+2] * matrix[r][c+3];
        if (h > max) max = h;
      }
      if (r <= rows - 4) {
        const v = matrix[r][c] * matrix[r+1][c] * matrix[r+2][c] * matrix[r+3][c];
        if (v > max) max = v;
      }
    }
  }
  return max;
}

// Iteration #8.2
function greatestProductOfDiagonals(matrix) {
  let max = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let r = 0; r <= rows - 4; r++) {
    for (let c = 0; c < cols; c++) {
      if (c <= cols - 4) {
        const d = matrix[r][c] * matrix[r+1][c+1] * matrix[r+2][c+2] * matrix[r+3][c+3];
        if (d > max) max = d;
      }
      if (c >= 3) {
        const a = matrix[r][c] * matrix[r+1][c-1] * matrix[r+2][c-2] * matrix[r+3][c-3];
        if (a > max) max = a;
      }
    }
  }
  return max;
}
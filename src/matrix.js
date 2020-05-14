/* 
What is the greatest product of four adjacent numbers? We consider adjacent any four numbers that are next to each other horizontally or vertically.

For example, if we have a 5x5 Matrix like:

[ 1,  2, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1,  4, 3, 4, 5]

The greatest product will be the 20x20x20x4 = 32000.

solution approach:
1. Find the highest product for a given row
2. Find the highest product for all rows where you can call above function for calculating greatest product for individual row.
3. Similarly for columns, there are 2 ways to do it for columns
    a. find greatest product for a single column and call that function for all columns in a loop.
    b. convert a column into a row and use function created in step 1 to calculate highest product
4. once we have highest product for row and column, return max of 2 numbers.

*/

//Get the biggest product for a given matrix
function biggestProduct(matrix){
  if(matrix.length === 0 ) return 0;

  if(Array.isArray(matrix)){

      let biggestProduct = biggestProductRows(matrix);
      let biggestProductColumn = biggestProductColumns(matrix);

      return biggestProductColumn > biggestProduct ? biggestProductColumn : biggestProduct;
  }
}

//returns product of 4 numbers
function biggestProduct4Numbers(n1,n2,n3,n4){
  return n1 * n2 * n3 * n4;
}

//get the biggest product for any given row or column
function biggestProductRowOrColumn(row) {
  
  let greatestProduct = 1;

  for (let i = 0; i < row.length; i++) {
    
    if (i + 4 > row.length) 
    break;

    product = row[i] * row[i + 1] * row[i + 2] * row[i + 3];

    if (product > greatestProduct) {
      greatestProduct = product;
    }
  }
  return greatestProduct;
}

//get biggest product for all rows within a matrix
function biggestProductRows(matrix){

  let greatestProductRow = 1;
  for (let i = 0; i < matrix[0].length; i++) {

    let product = biggestProductRowOrColumn(matrix[i])

    if(product > greatestProductRow){
      greatestProductRow = product;
    }
  }
  return greatestProductRow;
}

//get biggest product for all columns within a matrix
function biggestProductColumns(matrix){
  let columnConvertedArr = convertColumnsToRows(matrix);
  let biggestProductColumn = biggestProductRows(columnConvertedArr);
  return biggestProductColumn;
}

//converts columns to rows and returns a new array where columns are mentioned as rows
function convertColumnsToRows(matrix){
  let columnArray = [];
  for(let i=0;i<matrix[0].length;i++){
      columnArray.push(arrayColumn(matrix,i));
  }
  return columnArray;
}

//convert a given column into a row and returns a new array.
function arrayColumn(arr, n) {
  return arr.map(x=> x[n]);
}
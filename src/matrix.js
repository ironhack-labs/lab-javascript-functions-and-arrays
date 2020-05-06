const arr = [
  [1, 2, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 4, 3, 4, 5],
];

//loops throgh all rows
for (let i = 0; i < arr[0].length; i++) {
  console.log(getHighestProduct(arr[i]));
}

//get highest product for a row
function getHighestProduct(row) {
  let greatestProduct = 1;

  for (let i = 0; i < row.length; i++) {
    if (i + 4 > row.length) break;
    product = row[i] * row[i + 1] * row[i + 2] * row[i + 3];
    if (product > greatestProduct) {
      greatestProduct = product;
    }
  }

  return greatestProduct;
}

function getHighestProductFromColumn(column){
    
    
}
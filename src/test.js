const matrix = [
  [2, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2, 2],
];

function greatestProduct(matrix) {
  // declare maximum variable
  let productRow = 0;
  let productColumn = 0;
  let tempMaxRow = 0;
  let tempMaxColumn = 0;

  // regarder row by row
  for (let i = 0; i < matrix.length; i++) {
    // déclarer variable pour un row
    let row = matrix[i];
    for (let j = 0; j < matrix[i].length; j++) {
      // calculer les produits ligne par ligne
      productRow =
        matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
      // chercher le produit ligne maximum
      if (productRow > tempMaxRow) {
        tempMaxRow = productRow;
      }
      if (!matrix[i + 3]) {
        break;
      }
      productColumn =
        matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
      if (productColumn > tempMaxColumn) {
        tempMaxColumn = productColumn;
      }
    }

    // chercher produit colonne maximum
  }
  // comparer au "produit" précédent, si sup, remplace
  if (tempMaxRow > tempMaxColumn) {
    return tempMaxRow;
  }
  return tempMaxColumn;
}

console.log(greatestProduct(matrix));

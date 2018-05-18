'use strict';

const largestProduct = function(arr) {

  let largestProduct = 0; 

  if ( !(arr instanceof Array)) { return 'Not Valid Array'; }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let product = adjProduct(arr[i][j], i, j);
      largestProduct = product > largestProduct ? product : largestProduct;
    }
  }
  return largestProduct;

  function adjProduct(el, i, j) {

    let subProduct = 0; 

    for (let k = i - 1; k <= i + 1; k++) {
      for (let l = j - 1; l <= j + 1; l++) {
        if (arr[k] && !(k === i && l === j)) {
          let elementProduct = el * arr[k][l];
          subProduct = elementProduct > subProduct ? elementProduct : subProduct;
        }
      }
    }
    return subProduct; 
  }
};

module.exports = largestProduct;

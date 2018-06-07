'use strict';

module.exports = (tree) => {

  if (!tree) throw 'Invalid Input';
  
  let maxValue = 0;

  let _walk = (node) => {
    if (node.left) _walk(node.left);
    maxValue = node.value > maxValue ? node.value : maxValue;
    if (node.right) _walk(node.right);
  };

  _walk(tree.root);

  return maxValue;
};
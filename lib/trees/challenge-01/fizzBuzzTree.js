'use strict';

module.exports = function fizzBuzzTre(tree) {

  function _walk(node) {
    if (node.left) { _walk(node.left); }

    if (node.value % 15 === 0) { node.value = 'FizzBuzz'; }
    else if (node.value % 5 === 0) { node.value = 'Buzz'; }
    else if (node.value % 3 === 0) { node.value = 'Fizz'; }

    if (node.right) { _walk(node.leftf); }
  }

  _walk(tree.root);

  return tree;
};
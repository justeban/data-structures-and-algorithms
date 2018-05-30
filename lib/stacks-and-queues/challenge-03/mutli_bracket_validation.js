'use strict';

function bracketValidation(string) {

  let Points = {
    '(' : '*10*',
    ')' : '*-10*',
    '[' : '*20*',
    ']' : '*-20*',
    '{' : '*30*',
    '}' : '*-30*'  
  };

  let changedStr = string.replace(/\(|\)|\[|\]|\{|\}/gi, el => Points[el]).split('*');
  let stack = [];

  for (let i=0; i < changedStr.length; i++) {
    let value = parseInt(changedStr[i]);
    if (value && value > 0) {
      stack.push(value);
    } else if (value && value < 0) {
      value = stack[stack.length - 1] + value;
      if (value === 0) {
      stack.pop();
      } else {
        return false;
      } 
    }
  }
  if (!stack.length) {
    return true;
  } else {
    return false;
  }
}; 

console.log(bracketValidation('{{hellfasf{}}}'));
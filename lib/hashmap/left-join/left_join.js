'use strict';

module.exports = join = (type, ht1, ht2) => {

  let Join = (ht1, ht2) => {

    let joinedArr = [];

    for (let key in ht1.map.head.value) {
      let currArr = [];
      currArr[currArr.length] = ht1.map.head.value[key].key;
      currArr[currArr.length] = ht1.map.head.value[key].value
      currArr[currArr.length] = ht2.map.head.value[key] && ht2.map.head.value[key].value || null;

      joinedArr[joinedArr.length] = currArr;
    }

    return joinedArr;
  };

  switch (type) {
    case 'left':
      return Join(ht1, ht2);
    case 'right':
      return Join(ht2, ht1);
    default:
      return Join(ht1, ht2);
  }
};
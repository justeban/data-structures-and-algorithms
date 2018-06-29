'use strict';

const util = require('util');

const Join = require('../../../../lib/hashmap/left-join/left_join.js');
const Hashmap = require('../../../../lib/hashmap/hashmap.js');

describe('Left Join', () => {

  it('when given the parameter \'left\', expect to join tables with left join', () => {
    let hash1 = new Hashmap();
    hash1.set('Demi', 'Dog');
    hash1.set('Dezi', 'Dog');
    hash1.set('Sophie', 'Dog');

    let hash2 = new Hashmap();
    hash2.set('Demi', 'Cat');
    hash2.set('Dezi', 'Cat');
    hash2.set('Robert', 'Duck');

    let leftJoin = Join(hash1, hash2, 'left');

    expect(leftJoin[0].includes('Robert')).toBeFalsy();
    expect(leftJoin[1].includes('Robert')).toBeFalsy();
    expect(leftJoin[2].includes('Robert')).toBeFalsy();
    expect(leftJoin[0].includes('Sophie')).toBeTruthy();
  });

  it('when given the \'right\' parameter, expect a right Join', () => {
    let hash1 = new Hashmap();
    hash1.set('Demi', 'Dog');
    hash1.set('Dezi', 'Dog');
    hash1.set('Sophie', 'Dog');

    let hash2 = new Hashmap();
    hash2.set('Demi', 'Cat');
    hash2.set('Dezi', 'Cat');
    hash2.set('Robert', 'Duck');

    let rightJoin = Join(hash1, hash2, 'right');

    expect(rightJoin[0].includes('Sophie')).toBeFalsy();
    expect(rightJoin[1].includes('Sophie')).toBeFalsy();
    expect(rightJoin[2].includes('Sophie')).toBeFalsy();
    expect(rightJoin[0].includes('Robert')).toBeTruthy();
  });

  it('when given no type parameter, expect to default to a left join', () => {
    let hash1 = new Hashmap();
    hash1.set('Demi', 'Dog');
    hash1.set('Dezi', 'Dog');
    hash1.set('Sophie', 'Dog');

    let hash2 = new Hashmap();
    hash2.set('Demi', 'Cat');
    hash2.set('Dezi', 'Cat');
    hash2.set('Robert', 'Duck');

    let join = Join(hash1, hash2);

    expect(join[0].includes('Robert')).toBeFalsy();
    expect(join[1].includes('Robert')).toBeFalsy();
    expect(join[2].includes('Robert')).toBeFalsy();
    expect(join[0].includes('Sophie')).toBeTruthy();

  });

});

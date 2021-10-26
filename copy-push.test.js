const copyPush = require('./copy-push');

describe('copyPush', () => {
  it('returns array with all items in orignal array and new item pushed to end', () => {
    const array = [1, 2, 3];


    expect(copyPush(array, 4)).toEqual([1, 2, 3, 4]);
  });
});


const getName = require('./get-name');

describe('getName', () => {
  it('returns name property of object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    expect(getName(spot)).toEqual('spot');
  });
});

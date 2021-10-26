const capFilter = require('./capitalize-filter');

describe('capFilter', () => {
  it('capitalize all strings and filters out strings that start with F/f', () => {
    const arr = ['test', 'fire', 'earth', 'sun', 'filter'];
    expect(capFilter(arr)).toEqual(['TEST', 'fire', 'EARTH', 'SUN', 'FILTER'

    ]);
  });
});

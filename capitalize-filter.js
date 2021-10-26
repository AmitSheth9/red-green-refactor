//loop through array of strings
//for each string not starting with F/f capitalize
//

const capAndFilter = (arr) => {
  const newArr = arr.map(string => string.toUpperCase());
  return newArr.filter(item => item.charAt(0) !== 'F');
};

module.exports = capAndFilter;

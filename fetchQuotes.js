const fetch = require('cross-fetch');

const getFuturama = async () => {
  const res = await fetch('futuramaapi.herokuapp.com/api/quotes/1');
  const body = await res.json();
  const { character, quote, image } = body[0];
  return { 'name': character, 'text': quote, image };    
};

module.exports = getFuturama;

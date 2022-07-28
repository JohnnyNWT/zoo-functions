const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalSearch = data.species.find((element) => element.name === animal);
  return animalSearch.residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;

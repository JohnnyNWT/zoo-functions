const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const person = data.employees.find((element) => element.id === id).responsibleFor;
  const firstSpecie = data.species.find((element) => element.id === person[0]).residents;
  const order = firstSpecie.sort((firstElement, secondElement) => secondElement.age - firstElement.age)
  return Object.values(order[0])
}

module.exports = getOldestFromFirstSpecies;

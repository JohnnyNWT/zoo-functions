const data = require('../data/zoo_data');

function countAnimals(animal) {
  const obj = {};
  if (!animal) {
    data.species.forEach((element) => {
      obj[element.name] = element.residents.length;
    });
    return obj;
  }
  const { specie, sex } = animal;
  const animalSpecie = data.species.find((element) => element.name === specie);
  if (sex !== undefined) {
    return animalSpecie.residents.filter((element) => element.sex === sex).length;
  }
  return animalSpecie.residents.length;
}

module.exports = countAnimals;

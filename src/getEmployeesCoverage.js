const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getElement = (obj) => employees.find((element) => element.firstName === obj.name || element.lastName === obj.name || element.id === obj.id);
const searchAnimal = (animal) => animal.responsibleFor.map((id) => species.find((element) => (element.id === id)));
const listAllPerson = () => employees.map((element) => ({
  id: element.id,
  fullName: `${element.firstName} ${element.lastName}`,
  species: searchAnimal(element).map((element) => element.name),
  locations: searchAnimal(element).map((element) => element.location),
}));

function getEmployeesCoverage(objeto) {
  if (!objeto) {
    return listAllPerson();
  }
  if (getElement(objeto) === undefined) {
    throw new Error('Informações inválidas');
  }
  const objRetornado = {
    id: getElement(objeto).id,
    fullName: `${getElement(objeto).firstName} ${getElement(objeto).lastName}`,
    species: searchAnimal(getElement(objeto)).map((element) => element.name),
    locations: searchAnimal(getElement(objeto)).map((element) => element.location),
  };
  return objRetornado;
};

module.exports = getEmployeesCoverage;

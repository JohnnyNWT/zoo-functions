const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getElement = (obj) => employees.find((element) => element.firstName === obj.name
|| element.lastName === obj.name
|| element.id === obj.id);
const searchAnimal = (animal) => animal.responsibleFor.map((id) =>
  species.find((element) => (element.id === id)));
const listAllPerson = () => employees.map((elemento) => ({
  id: elemento.id,
  fullName: `${elemento.firstName} ${elemento.lastName}`,
  species: searchAnimal(elemento).map((element) => element.name),
  locations: searchAnimal(elemento).map((element) => element.location),
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
}

module.exports = getEmployeesCoverage;

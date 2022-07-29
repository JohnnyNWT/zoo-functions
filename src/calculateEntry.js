const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const objeto = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) {
      objeto.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      objeto.adult += 1;
    } else {
      objeto.senior += 1;
    }
  });
  return objeto;
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  let inputValue;
  const { prices } = data;
  const arrPrices = [prices];
  const participantes = countEntrants(entrants);
  arrPrices.forEach((element) => {
    inputValue = element.adult * participantes.adult
    + element.senior * participantes.senior
    + element.child * participantes.child;
  });
  return inputValue;
}

module.exports = { calculateEntry, countEntrants };

const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName !== 'undefined') {
    return data.employees.find((element) =>
      element.firstName === employeeName || element.lastName === employeeName);
  }
  return {};
}

module.exports = getEmployeeByName;

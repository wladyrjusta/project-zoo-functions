const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployee = (objectProperty) => employees
  .find((employee) => employee.firstName === objectProperty.name
    || employee.lastName === objectProperty.name
    || employee.id === objectProperty.id);

const getSpeciesIds = (objectProperty) => getEmployee(objectProperty).responsibleFor;

const getSpeciesNames = (objectProperty) => getSpeciesIds(objectProperty)
  .map((ids) => species.find((specie) => specie.id === ids).name);

const getSpeciesLocations = (objectProperty) => getSpeciesIds(objectProperty)
  .map((ids) => species.find((specie) => specie.id === ids).location);

const employeeObject = (objectProperty) => ({ id: `${getEmployee(objectProperty).id}`,
  fullName: `${getEmployee(objectProperty).firstName} ${getEmployee(objectProperty).lastName}`,
  species: getSpeciesNames(objectProperty),
  locations: getSpeciesLocations(objectProperty) });

const getEmployeesCoverage = (objectProperty) => {
  if (!objectProperty) {
    return employees.map((employee) =>
      getEmployeesCoverage({ name: `${employee.firstName}` }));
  }
  if (getEmployee(objectProperty) === undefined) {
    throw new Error('Informações inválidas');
  }

  return employeeObject(objectProperty);
};

module.exports = getEmployeesCoverage;

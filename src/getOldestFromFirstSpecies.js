const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employee = employees.find((employe) => employe.id === id);

  const firstSpecieResidents = species
    .find((specie) => specie.id === employee.responsibleFor[0]).residents;

  const oldestAnimal = firstSpecieResidents
    .sort((specieA, specieB) => specieB.age - specieA.age)[0];

  return Object.values(oldestAnimal);
};

module.exports = getOldestFromFirstSpecies;

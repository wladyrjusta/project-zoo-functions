const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    const allAnimalsAmount = {};
    species
      .forEach((animalSpecie) => {
        allAnimalsAmount[animalSpecie.name] = animalSpecie.residents.length;
      });
    return allAnimalsAmount;
  }
  if ('sex' in animal) {
    const specieAmountPerSex = species
      .find((specie) => specie.name === animal.species).residents
      .filter((resident) => resident.sex === animal.sex).length;
    return specieAmountPerSex;
  }
  if ({ species: animal }) {
    const specieAmount = species.find((specie) => specie.name === animal.species).residents.length;
    return specieAmount;
  }
};

module.exports = countAnimals;

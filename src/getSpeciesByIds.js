const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids === undefined) {
    return [];
  }

  const result = ids.map((id) => data.species.find((animal) => animal.id === id));

  return result;
};

module.exports = getSpeciesByIds;

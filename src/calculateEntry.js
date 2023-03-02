const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((entrant) => { if (entrant.age < 18) child += 1; });
  entrants
    .forEach((entrant) => { if (entrant.age >= 18 && entrant.age < 50) adult += 1; });
  entrants.forEach((entrant) => { if (entrant.age >= 50) senior += 1; });

  const entrantsPerAge = { child, adult, senior };

  return entrantsPerAge;
};
const calculateEntry = (entrants) => {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;

  const entrantsPerAge = countEntrants(entrants);

  return entrantsPerAge.child * 20.99
    + entrantsPerAge.adult * 49.99 + entrantsPerAge.senior * 24.99;
};

module.exports = { calculateEntry, countEntrants };

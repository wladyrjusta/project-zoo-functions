const data = require('../data/zoo_data');

/* const Tuesday = { officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
  exhibition: species.filter((specie) => specie.availability
    .includes('Tuesday')).map((specie) => specie.name) };

const Wednesday = {
  officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
  exhibition: species.filter((specie) => specie.availability
    .includes('Wednesday')).map((specie) => specie.name) };

const Thursday = {
  officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
  exhibition: species.filter((specie) => specie.availability
    .includes('Thursday')).map((specie) => specie.name) };

const Friday = { officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
  exhibition: species.filter((specie) => specie.availability
    .includes('Friday')).map((specie) => specie.name) };

const Saturday = {
  officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
  exhibition: species.filter((specie) => specie.availability
    .includes('Saturday')).map((specie) => specie.name) };

const Sunday = {
  officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
  exhibition: species.filter((specie) => specie.availability
    .includes('Sunday')).map((specie) => specie.name) };

const Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

const allDaysExhibition = { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday };

const animalNames = species.map((specie) => specie.name);

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const daysAvaiabilityPerSpecie = (scheduleTarget) =>
  /*species.find((specie) => specie.name === scheduleTarget).availability; */

const getSchedule = (scheduleTarget) => {
  /*  if (animalNames.includes(scheduleTarget)) {
    return daysAvaiabilityPerSpecie(scheduleTarget);
    }
  if (Object.keys(data.hours).includes(scheduleTarget)) {
    return { [scheduleTarget]: allDaysExhibition[scheduleTarget] };
  }
  if (!animalNames.includes(scheduleTarget)
    || !weekDays.includes(scheduleTarget)
    || scheduleTarget === undefined) {
    return allDaysExhibition;
  } */
};

module.exports = getSchedule;

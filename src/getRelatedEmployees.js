const data = require('../data/zoo_data');

const isManager = (managerId) => {
  const managersIds = data.employees
    .map((employee) => employee.managers);

  return managersIds.some((id) => id.includes(managerId));
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === true) {
    const employees = data.employees
      .map((employee) => employee)
      .filter((employee) => employee.managers.includes(managerId))
      .map((employee) => `${employee.firstName} ${employee.lastName}`);

    return employees;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };

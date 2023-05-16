const dayjs = require('dayjs');

module.exports = (sequelize, Sequelize) => {
  const modelName = 'Loan';
  const defaultEndDate = dayjs().add(1, 'week').toDate();
  return sequelize.define(modelName, {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    readerId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    copyId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    startDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    endDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: defaultEndDate
    },
    loanDays: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false
    },
  }, {
    tableName: 'loans'
  });
};

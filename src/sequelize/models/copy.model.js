module.exports = (sequelize, Sequelize) => {
  const modelName = 'Copy';
  return sequelize.define(modelName, {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    editorial_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    editorial_year: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    itemId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false
    },
  }, {
    tableName: 'copies'
  });
};

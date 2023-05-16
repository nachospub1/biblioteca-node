module.exports = (sequelize, Sequelize) => {
  const modelName = 'Reader';
  return sequelize.define(modelName, {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    fatherLastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    motherLastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    birthDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING,
    },
    available: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
  }, {
    tableName: 'readers'
  });
};

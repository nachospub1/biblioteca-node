module.exports = (sequelize, Sequelize) => {
  const modelName = 'Item';
  return sequelize.define(modelName, {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    isbn: {
      type: Sequelize.STRING,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false
    },
    year: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    available: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    }
  }, {
    tableName: 'items'
  });
};

const Sequelize = require('sequelize');
const dbConfig = require('../common/db.config');
const env = require('../common/env');
const setRelations = require('./helpers/setRelations');

const { ENVIRONMENT } = env;
const config = dbConfig[ENVIRONMENT];
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.readers = require('./models/reader.model.js')(sequelize, Sequelize);
db.items = require('./models/item.model.js')(sequelize, Sequelize);
db.copies = require('./models/copy.model.js')(sequelize, Sequelize);
db.loans = require('./models/loan.model.js')(sequelize, Sequelize);

setRelations(db);

module.exports = db;

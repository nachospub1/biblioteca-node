const env = require('./env');
module.exports = {
  development: {
    HOST: env.DB_HOST,
    USER: env.DB_USER,
    PASSWORD: env.DB_PASSWORD,
    host: env.DB_HOST,
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    DB: env.DB_NAME,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    migrationStorageTableName: 'sequelize_migrations',
    seederStorageTableName: 'sequelize_seeders'
  },
  test: {},
  production: {}
};

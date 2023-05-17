const { config } = require('dotenv');

config();
const env = {
  ENVIRONMENT: process.env.ENVIRONMENT || 'development',
  PORT: Number(process.env.PORT) || 3000,
  DB_HOST: process.env.DB_HOST || '',
  DB_USER: process.env.DB_USER || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_NAME: process.env.DB_NAME || '',
  DB_SEEDERS_HOST: process.env.DB_SEEDERS_HOST || 'localhost'
};

module.exports = env;

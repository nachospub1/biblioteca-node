const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const env = require('./common/env');
const db = require('./sequelize');
const initRoutes = require('./common/initRoutes');

const app = express();
const { PORT } = env;

app.set('port', PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors);
app.use(helmet());
app.use(morgan('tiny'));

db.sequelize.sync({ force: false });

initRoutes(app);
module.exports = app;

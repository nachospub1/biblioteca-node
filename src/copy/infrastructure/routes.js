const express = require('express');
const copyController = require('./controllers.js');

const copyRoutes = (app) => {
  const router = express.Router();
  const prefix = '/copy';
  router.get('/all', copyController.findAll);
  router.get('/one/:id', copyController.findOne);
  router.post('/', copyController.create);
  router.patch('/:id', copyController.update);
  router.delete('/:id', copyController.destroy);
  app.use(`${prefix}`, router);
};

module.exports = copyRoutes;

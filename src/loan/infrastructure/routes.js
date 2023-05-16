const express = require('express');
const loanController = require('./controllers.js');

const loanRoutes = (app) => {
  const router = express.Router();
  const prefix = '/loan';
  router.get('/all', loanController.findAll);
  router.get('/one/:id', loanController.findOne);
  router.get('/criteria', loanController.findByCriteria);
  router.post('/', loanController.create);
  router.patch('/:id', loanController.update);
  router.delete('/:id', loanController.destroy);
  app.use(prefix, router);
};

module.exports = loanRoutes;

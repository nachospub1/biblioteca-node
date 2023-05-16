const express = require('express');
const itemController = require('./controllers.js');

const itemRoutes = (app) => {
  const router = express.Router();
  const prefix = '/item';
  router.get('/all', itemController.findAll);
  router.get('/one/:id', itemController.findOne);
  router.get('/field/:field', itemController.findByField);
  router.get('/inventory', itemController.getInventory);
  router.post('/', itemController.create);
  router.patch('/:id', itemController.update);
  router.delete('/:id', itemController.destroy);
  app.use(`${prefix}`, router);
};

module.exports = itemRoutes;

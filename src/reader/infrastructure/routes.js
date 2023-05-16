const express = require('express');
const readerController = require('./controllers.js');
const validatePattern = require('../../common/middleware/validatePattern.js');

const readerRoutes = (app) => {
  const router = express.Router();
  const prefix = '/reader';
  router.get('/all', readerController.findAll);
  router.get('/one/:id', readerController.findOne);
  router.get('/field/:field', [validatePattern], readerController.findByField);
  router.get('/history/:id', readerController.findReaderHistory);
  router.post('/', readerController.create);
  router.patch('/:id', readerController.update);
  router.delete('/:id', readerController.destroy);
  app.use(prefix, router);
};

module.exports = readerRoutes;

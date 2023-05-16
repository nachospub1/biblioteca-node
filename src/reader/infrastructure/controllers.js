const readerApplication = require('../application/useCases');
const { logger } = require('../../common/logger');

exports.findAll = async (req, res) => {
  try {
    const { success, code, result } = await readerApplication.findAll();
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on findAll.' });
  }
};

exports.findOne = async (req, res) => {
  try {
    const readerId = req.params.id;
    const { success, code, result } = await readerApplication.findOne({ readerId });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on findOne.' });
  }
};

exports.findByField = async (req, res) => {
  try {
    const field = req.params.field;
    const { success, code, result } = await readerApplication.findByField({ field });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on findByField.' });
  }
};

exports.findReaderHistory = async (req, res) => {
  try {
    const readerId = req.params.id;
    const { success, code, result } = await readerApplication.findReaderHistory({ readerId });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on findReaderHistory.' });
  }
};

exports.create = async (req, res) => {
  try {
    const newReader = req.body;
    const { success, code, result } = await readerApplication.create({ payload: newReader });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on create.' });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const { success, code, result } = await readerApplication.update({ id, data });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on update.' });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { success, code, result } = await readerApplication.destroy({ readerId: req.params.id });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on destroy.' });
  }
};

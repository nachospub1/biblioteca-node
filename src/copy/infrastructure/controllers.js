const copyApplication = require('../application/useCases');
const { logger } = require('../../common/logger');

exports.findAll = async (req, res) => {
  try {
    const { success, code, result } = await copyApplication.findAll();
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on findAll.' });
  }
};

exports.findOne = async (req, res) => {
  try {
    const copyId = req.params.id;
    const { success, code, result } = await copyApplication.findOne({ copyId });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on findOne.' });
  }
};

exports.create = async (req, res) => {
  try {
    const newItem = req.body;
    const { success, code, result } = await copyApplication.create({ payload: newItem });
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
    const { success, code, result } = await copyApplication.update({ id, data });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on update.' });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { success, code, result } = await copyApplication.destroy({ copyId: req.params.id });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on destroy.' });
  }
};

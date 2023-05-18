const { findAll, findOne, create, update, destroy } = require('../application/');
const { logger } = require('../../common/logger');

exports.findAll = async (req, res) => {
  try {
    const { success, code, result } = await findAll();
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on findAll.' });
  }
};

exports.findOne = async (req, res) => {
  try {
    const copyId = req.params.id;
    const { success, code, result } = await findOne({ copyId });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on findOne.' });
  }
};

exports.create = async (req, res) => {
  try {
    const newItem = req.body;
    const { success, code, result } = await create({ payload: newItem });
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
    const { success, code, result } = await update({ id, data });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on update.' });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { success, code, result } = await destroy({ copyId: req.params.id });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on destroy.' });
  }
};

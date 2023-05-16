const loanApplication = require('../application/useCases');
const { logger } = require('../../common/logger');

exports.findAll = async (req, res) => {
  try {
    const { success, code, result } = await loanApplication.findAll();
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on findAll.' });
  }
};

exports.findOne = async (req, res) => {
  try {
    const loanId = req.params.id;
    const { success, code, result } = await loanApplication.findOne({ loanId });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on findOne.' });
  }
};

exports.findByCriteria = async (req, res) => {
  try {
    const status = req.query.status;
    const { success, code, result } = await loanApplication.findByCriteria({ status });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on findByCriteria.' });
  }
};

exports.create = async (req, res) => {
  try {
    const newLoan = req.body;
    const { success, code, result } = await loanApplication.create({ payload: newLoan });
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
    const { success, code, result } = await loanApplication.update({ id, data });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on update.' });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { success, code, result } = await loanApplication.destroy({ loanId: req.params.id });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on destroy.' });
  }
};

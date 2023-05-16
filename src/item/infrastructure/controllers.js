const dayjs = require('dayjs');
const itemApplication = require('../application/useCases');
const { logger } = require('../../common/logger');

exports.findAll = async (req, res) => {
  try {
    const { success, code, result } = await itemApplication.findAll();
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on findAll.' });
  }
};

exports.findOne = async (req, res) => {
  try {
    const itemId = req.params.id;
    const { success, code, result } = await itemApplication.findOne({ itemId });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on findOne.' });
  }
};

exports.findByField = async (req, res) => {
  try {
    const field = req.params.field;
    const { success, code, result } = await itemApplication.findByField({ field });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on findByField.' });
  }
};

exports.getInventory = async (req, res) => {
  try {
    const { success, code, result } = await itemApplication.getInventory();
    const fileName = `inventory_${dayjs().format('DDMMYYYYHHmmss')}.xls`;
    const fileType = 'application/vnd.ms-excel';
    res.writeHead(200, {
      'Content-Disposition': `attachment; filename="${fileName}"`,
      'Content-Type': fileType,
    });
    const download = Buffer.from(result);
    res.end(download);
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on findByField.' });
  }
};

exports.create = async (req, res) => {
  try {
    const newItem = req.body;
    const { success, code, result } = await itemApplication.create({ payload: newItem });
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
    const { success, code, result } = await itemApplication.update({ id, data });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on update.' });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { success, code, result } = await itemApplication.destroy({ itemId: req.params.id });
    res.status(code).send({ success, code, result });
  } catch (error) {
    logger(error.message, __filename);
    res.status(500).send({ success: false, code: 500, result: 'An error has occurred on destroy.' });
  }
};

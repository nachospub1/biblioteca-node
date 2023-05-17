const copyRepository = require('../domain/repository');
const { logger } = require('../../common/logger');

exports.findAll = async () => {
  try {
    const copies = await copyRepository.findAll();
    if (!copies || copies.length == 0) return { success: false, code: 404, result: 'not found' };
    return { success: true, code: 200, result: copies };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

/* eslint-disable no-unsafe-finally */
const copyRepository = require('../domain/repository');
const { logger } = require('../../common/logger');

const destroy = async () => {
  try {
    const copies = await copyRepository.destroy();
    if (!copies || copies.length == 0) return { success: false, code: 404, result: 'not found' };
    return { success: true, code: 200, result: copies };
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  } finally {
    return { success: false, code: 500 };
  }
};

module.exports = destroy;

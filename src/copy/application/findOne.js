/* eslint-disable no-unsafe-finally */
const copyRepository = require('../domain/repository');
const { logger } = require('../../common/logger');
const { GetCopyDto } = require('../domain/dto');

const findOne = async (copyId = GetCopyDto) => {
  try {
    const copy = await copyRepository.findOne(copyId);
    if (!copy) return { success: false, code: 404, result: 'not found' };
    return { success: true, code: 200, result: copy };
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  } finally {
    return { success: false, code: 500 };
  }
};

module.exports = findOne;

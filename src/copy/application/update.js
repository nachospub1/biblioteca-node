/* eslint-disable no-unsafe-finally */
const copyRepository = require('../domain/repository');
const { logger } = require('../../common/logger');
const { UpdateCopyDto } = require('../domain/dto');

const update = async (newCopy = UpdateCopyDto) => {
  try {
    const copy = await copyRepository.update(newCopy);
    if (!copy) return { success: false, code: 400, result: 'Resource not updated.' };
    return { success: true, code: 200, result: copy };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

module.exports = update;

/* eslint-disable no-unsafe-finally */
const copyRepository = require('../domain/repository');
const { logger } = require('../../common/logger');
const { CreateCopyDto } = require('../domain/dto');

const create = async (newCopy = CreateCopyDto) => {
  try {
    const copy = await copyRepository.create(newCopy);
    if (!copy) return { success: false, code: 400, result: 'saving-error' };
    return { success: true, code: 201, result: copy };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  } finally {
    return { success: false, code: 500 };
  }
};

module.exports = create;

const copyRepository = require('../domain/repository');
const { CreateCopyDto, GetCopyDto, UpdateCopyDto } = require('../domain/dto');
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

exports.findOne = async (copyId = GetCopyDto) => {
  try {
    const copy = await copyRepository.findOne(copyId);
    if (!copy) return { success: false, code: 404, result: 'not found' };
    return { success: true, code: 200, result: copy };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.create = async (newCopy = CreateCopyDto) => {
  try {
    const copy = await copyRepository.create(newCopy);
    if (!copy) return { success: false, code: 404, result: 'saving-error' };
    return { success: true, code: 201, result: copy };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.update = async (newCopy = UpdateCopyDto) => {
  try {
    const copy = await copyRepository.update(newCopy);
    if (!copy) return { success: false, code: 404, result: 'Resource not updated.' };
    return { success: true, code: 200, result: copy };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.destroy = async (copyId = GetCopyDto) => {
  try {
    const copy = await copyRepository.destroy(copyId);
    if (!copy) return { success: false, code: 404, result: 'Resource not found.' };
    return { success: true, code: 200, result: copy };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

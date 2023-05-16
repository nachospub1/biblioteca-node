const readerRepository = require('../domain/repository');
const { CreateReaderDto, GetReaderDto, GetReaderIdDto, UpdateReaderDto } = require('../domain/dto');
const { logger } = require('../../common/logger');

exports.findAll = async () => {
  try {
    const readers = await readerRepository.findAll();
    if (!readers || readers.length == 0) return { success: false, code: 404, result: 'not found' };
    return { success: true, code: 200, result: readers };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.findOne = async (readerId = GetReaderIdDto) => {
  try {
    const reader = await readerRepository.findOne(readerId);
    if (!reader) return { success: false, code: 404, result: 'not found' };
    return { success: true, code: 200, result: reader };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.findByField = async (field = GetReaderDto) => {
  try {
    const reader = await readerRepository.findByField(field);
    if (!reader) return { success: false, code: 404, result: 'not found' };
    return { success: true, code: 200, result: reader };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.findReaderHistory = async (readerId = GetReaderIdDto) => {
  try {
    const reader = await readerRepository.findReaderHistory(readerId);
    if (!reader) return { success: false, code: 404, result: 'not found' };
    return { success: true, code: 200, result: reader };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.create = async (newReader = CreateReaderDto) => {
  try {
    const reader = await readerRepository.create(newReader);
    if (!reader) return { success: false, code: 404, result: 'saving-error' };
    return { success: true, code: 201, result: reader };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.update = async (newReader = UpdateReaderDto) => {
  try {
    const reader = await readerRepository.update(newReader);
    if (!reader) return { success: false, code: 404, result: 'Resource not updated.' };
    return { success: true, code: 200, result: reader };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.destroy = async (readerId = GetReaderIdDto) => {
  try {
    const reader = await readerRepository.destroy(readerId);
    if (!reader) return { success: false, code: 404, result: 'Resource not found.' };
    return { success: true, code: 200, result: reader };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

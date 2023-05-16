const XLSX = require('xlsx');
const itemRepository = require('../domain/repository');
const { CreateItemDto, GetItemDto, GetItemFieldDto, UpdateItemDto } = require('../domain/dto');
const { logger } = require('../../common/logger');

exports.findAll = async () => {
  try {
    const items = await itemRepository.findAll();
    if (!items || items.length == 0) return { success: false, code: 404, result: 'not found' };
    return { success: true, code: 200, result: items };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.findOne = async (itemId = GetItemDto) => {
  try {
    const item = await itemRepository.findOne(itemId);
    if (!item) return { success: false, code: 404, result: 'not found' };
    return { success: true, code: 200, result: item };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.findByField = async (field = GetItemFieldDto) => {
  try {
    const item = await itemRepository.findByField(field);
    if (!item || item.length == 0) return { success: false, code: 404, result: 'not found' };
    return { success: true, code: 200, result: item };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.getInventory = async (field = GetItemFieldDto) => {
  try {
    const items = await itemRepository.getInventory(field);
    if (!items || items.length == 0) return { success: false, code: 404, result: 'not found' };
    const worksheet = XLSX.utils.json_to_sheet(items);
    const headers = Object.keys(items[0]);
    const headerRow = headers.map((header) => header.toUpperCase());
    XLSX.utils.sheet_add_aoa(worksheet, [headerRow], { origin: -1 });

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet');
    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
    return { success: true, code: 200, result: buffer };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.create = async (newItem = CreateItemDto) => {
  try {
    const item = await itemRepository.create(newItem);
    if (!item) return { success: false, code: 404, result: 'saving-error' };
    return { success: true, code: 201, result: item };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.update = async (newItem = UpdateItemDto) => {
  try {
    const item = await itemRepository.update(newItem);
    if (!item) return { success: false, code: 404, result: 'Resource not updated.' };
    return { success: true, code: 200, result: item };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.destroy = async (itemId = GetItemDto) => {
  try {
    const item = await itemRepository.destroy(itemId);
    if (!item) return { success: false, code: 404, result: 'Resource not found.' };
    return { success: true, code: 200, result: item };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

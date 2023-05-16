const db = require('../../sequelize');
const Copy = db.copies;
const { CreateCopyDto, GetCopyDto, UpdateCopyDto } = require('./dto');
const { logger } = require('../../common/logger');

exports.findAll = async() => {
  try {
    return await Copy.findAll({});
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.findOne = async(args = GetCopyDto) => {
  try {
    return await Copy.findOne({
      where: { id: args.copyId },
    });
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.create = async(args = CreateCopyDto) => {
  try {
    return await Copy.create(args.payload);
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.update = async(args = UpdateCopyDto) => {
  try {
    const { id, data } = args;
    const { total, name, date, status } = data;
    await Copy.update({ total, name, date, status }, { where: { id } });
    const copy = await this.findOne({ copyId: id });
    return copy;
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.destroy = async(args = GetCopyDto) => {
  try {
    const copy = await this.findOne(args);
    await Copy.destroy({ where: { id: args.copyId } });
    return copy;
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

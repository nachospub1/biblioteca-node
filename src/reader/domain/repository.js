const { QueryTypes } = require('sequelize');
const db = require('../../sequelize');
const Reader = db.readers;
const { CreateReaderDto, GetReaderIdDto, GetReaderDto, UpdateReaderDto } = require('./dto');
const { logger } = require('../../common/logger');

exports.findAll = async() => {
  try {
    return await Reader.findAll({});
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.findOne = async(args = GetReaderIdDto) => {
  try {
    return await Reader.findOne({
      where: { id: args.readerId },
    });
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.findByField = async(args = GetReaderDto) => {
  try {
    const { field } = args;
    const query = `
    SELECT "id", CONCAT("firstName", ' ', "fatherLastName", ' ', "motherLastName") AS "fullName", "birthDate", "email", "phone"  
    FROM readers R 
    WHERE 
    R."firstName" LIKE '%${field}%' OR 
    R."fatherLastName" LIKE '%${field}%' OR 
    R."motherLastName" LIKE '%${field}%' OR
    R."email" LIKE '%${field}%'
    LIMIT 10`;
    const reader = await db.sequelize.query(query, { type: QueryTypes.SELECT });
    return reader;
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.findReaderHistory = async(args = GetReaderDto) => {
  try {
    const { readerId } = args;
    const query = `
    SELECT I."title", I."author", L."startDate", L."endDate", L."status"
    FROM loans L 
    INNER JOIN copies C 
    ON (L."copyId" = C.id)
    INNER JOIN items I 
    ON (C."itemId" = I.id)
    WHERE 
    L."readerId" = ${readerId}`;
    const loans = await db.sequelize.query(query, { type: QueryTypes.SELECT });
    const response = {
      pending: loans.filter(loan => loan.status === 'on loan'),
      finished: loans.filter(loan => loan.status === 'finished'),
    };
    return response;
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.create = async(args = CreateReaderDto) => {
  try {
    return await Reader.create(args.payload);
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.update = async(args = UpdateReaderDto) => {
  try {
    const { id, data } = args;
    const { total, name, date, status } = data;
    await Reader.update({ total, name, date, status }, { where: { id } });
    const reader = await this.findOne({ readerId: id });
    return reader;
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.destroy = async(args = GetReaderIdDto) => {
  try {
    const reader = await this.findOne(args);
    await Reader.destroy({ where: { id: args.readerId } });
    return reader;
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

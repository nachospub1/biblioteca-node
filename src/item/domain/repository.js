const { QueryTypes } = require('sequelize');
const db = require('../../sequelize');
const Item = db.items;
const { CreateItemDto, GetItemDto, GetItemFieldDto, UpdateItemDto } = require('./dto');
const { logger } = require('../../common/logger');

exports.findAll = async() => {
  try {
    return await Item.findAll({});
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.findOne = async(args = GetItemDto) => {
  try {
    return await Item.findOne({
      where: { id: args.itemId },
    });
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.findByField = async(args = GetItemFieldDto) => {
  try {
    const { field } = args;
    const query = `
    SELECT I."id", I."isbn", I."title", I."author"  
    FROM items I 
    WHERE 
    I."isbn" LIKE '%${field}%' OR 
    I."title" LIKE '%${field}%' OR 
    I."author" LIKE '%${field}%'
    LIMIT 10`;
    const item = await db.sequelize.query(query, { type: QueryTypes.SELECT });
    return item;
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.getInventory = async() => {
  try {
    const query = `
    SELECT I."id", I."isbn", I."title", I."author", C."editorial_name", C."editorial_year", C."status"
    FROM copies C 
    INNER JOIN items I 
    ON (C."itemId" = I."id") 
`;
    const item = await db.sequelize.query(query, { type: QueryTypes.SELECT });
    return item;
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.create = async(args = CreateItemDto) => {
  try {
    return await Item.create(args.payload);
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.update = async(args = UpdateItemDto) => {
  try {
    const { id, data } = args;
    const { total, name, date, status } = data;
    await Item.update({ total, name, date, status }, { where: { id } });
    const item = await this.findOne({ itemId: id });
    return item;
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.destroy = async(args = GetItemDto) => {
  try {
    const item = await this.findOne(args);
    await Item.destroy({ where: { id: args.itemId } });
    return item;
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

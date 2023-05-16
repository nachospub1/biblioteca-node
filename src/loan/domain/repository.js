const { QueryTypes } = require('sequelize');
const db = require('../../sequelize');
const Loan = db.loans;
const { CreateLoanDto, GetLoanDto, GetLoanCriteriaDto, UpdateLoanDto } = require('./dto');
const { logger } = require('../../common/logger');

exports.findAll = async() => {
  try {
    return await Loan.findAll({});
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.findOne = async(args = GetLoanDto) => {
  try {
    return await Loan.findOne({
      where: { id: args.loanId },
    });
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.findByCriteria = async(args = GetLoanCriteriaDto) => {
  try {
    const { status } = args;
    const query = `
    SELECT I."title", I."author", L."startDate", L."endDate", 
    CONCAT(R."firstName", ' ', R."fatherLastName", ' ', R."motherLastName") AS "fullName", 
    DATE_PART('day', L."endDate" - L."startDate") as "daysLate" 
    FROM loans L 
    INNER JOIN readers R
    ON (L."readerId" = R."id")
    INNER JOIN copies C
    ON (L."copyId" = C."id")
    INNER JOIN items I
    ON (C."itemId" = I."id")
    WHERE 
    L."status" = '${status}'
    ORDER BY L."endDate" desc`;
    const reader = await db.sequelize.query(query, { type: QueryTypes.SELECT });
    return reader;
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.create = async(args = CreateLoanDto) => {
  try {
    return await Loan.create(args.payload);
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.update = async(args = UpdateLoanDto) => {
  try {
    const { id, data } = args;
    const { total, name, date, status } = data;
    await Loan.update({ total, name, date, status }, { where: { id } });
    const loan = await this.findOne({ loanId: id });
    return loan;
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

exports.destroy = async(args = GetLoanDto) => {
  try {
    const loan = await this.findOne(args);
    await Loan.destroy({ where: { id: args.loanId } });
    return loan;
  } catch (error) {
    logger(error.message, __filename);
    throw new Error(error);
  }
};

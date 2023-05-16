const loanRepository = require('../domain/repository');
const { CreateLoanDto, GetLoanDto, GetLoanCriteriaDto, UpdateLoanDto } = require('../domain/dto');
const { logger } = require('../../common/logger');

exports.findAll = async () => {
  try {
    const loans = await loanRepository.findAll();
    if (!loans || loans.length == 0) return { success: false, code: 404, result: 'not found' };
    return { success: true, code: 200, result: loans };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.findOne = async (loanId = GetLoanDto) => {
  try {
    const loan = await loanRepository.findOne(loanId);
    if (!loan) return { success: false, code: 404, result: 'not found' };
    return { success: true, code: 200, result: loan };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.findByCriteria = async (criteria = GetLoanCriteriaDto) => {
  try {
    const loans = await loanRepository.findByCriteria(criteria);
    if (!loans) return { success: false, code: 404, result: 'not found' };
    return { success: true, code: 200, result: loans };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.create = async (newLoan = CreateLoanDto) => {
  try {
    const loan = await loanRepository.create(newLoan);
    if (!loan) return { success: false, code: 404, result: 'saving-error' };
    return { success: true, code: 201, result: loan };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.update = async (newLoan = UpdateLoanDto) => {
  try {
    const loan = await loanRepository.update(newLoan);
    if (!loan) return { success: false, code: 404, result: 'Resource not updated.' };
    return { success: true, code: 200, result: loan };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

exports.destroy = async (loanId = GetLoanDto) => {
  try {
    const loan = await loanRepository.destroy(loanId);
    if (!loan) return { success: false, code: 404, result: 'Resource not found.' };
    return { success: true, code: 200, result: loan };
  } catch (error) {
    logger(error.message, __filename);
    return { success: false, code: 500 };
  }
};

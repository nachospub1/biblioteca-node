const CreateLoanDto = {
  readerId: '',
  copyId: '',
  startDate: '',
  endDate: '',
  loanDays: '',
  status: ''
};

const UpdateLoanDto = {
  id: '',
  data: {
    endDate: '',
    loanDays: '',
    status: ''
  }
};

const GetLoanDto = {
  id: ''
};

const GetLoanCriteriaDto = {
  status: ''
};

module.exports = { CreateLoanDto, UpdateLoanDto, GetLoanDto, GetLoanCriteriaDto };
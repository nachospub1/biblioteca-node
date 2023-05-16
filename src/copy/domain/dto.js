const CreateCopyDto = {
  name: '',
  amount: '',
  total: '',
  invoiceId: ''
};

const UpdateCopyDto = {
  id: '',
  data: {
    name: '',
    amount: '',
    total: '',
  }
};

const GetCopyDto = {
  id: ''
};

module.exports = { CreateCopyDto, UpdateCopyDto, GetCopyDto };
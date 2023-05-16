const CreateReaderDto = {
  total: '',
  name: '',
  date: '',
  status: ''
};

const UpdateReaderDto = {
  id: '',
  data: {
    total: '',
    name: '',
    date: '',
    status: ''
  }
};

const GetReaderIdDto = {
  id: ''
};

const GetReaderDto = {
  field: ''
};

module.exports = { CreateReaderDto, UpdateReaderDto, GetReaderIdDto, GetReaderDto };
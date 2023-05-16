const CreateItemDto = {
  isbn: '',
  title: '',
  year: '',
  author: '',
  available: '',
};

const UpdateItemDto = {
  id: '',
  data: {
    title: '',
    year: '',
    author: '',
    available: '',
  }
};

const GetItemDto = {
  id: ''
};

const GetItemFieldDto = {
  field: ''
};

module.exports = { CreateItemDto, UpdateItemDto, GetItemDto, GetItemFieldDto };
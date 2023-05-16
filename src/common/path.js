const path = require('path');

const getRelativeFilePath = (filePath) => {
  const srcDir = path.join(__dirname, 'src');
  const relativePath = path.relative(srcDir, filePath);
  return relativePath;
};

module.exports = { getRelativeFilePath };

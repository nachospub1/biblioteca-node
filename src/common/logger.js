const { getRelativeFilePath } = require('./path');

const logger = (message, filePath) => {
  const timestamp = new Date().toLocaleString();
  const fileName = getRelativeFilePath(filePath);
  console.error(`[${timestamp}] Error in ${fileName}: ${message}`);
};

module.exports = { logger };

const app = require('./app');

const environment = app.get('env');
const port = app.get('port');
const server = app.listen(port, () => {
  console.log(
    `App is running at port ${port} in ${environment} mode`,
  );
});

module.exports = server;

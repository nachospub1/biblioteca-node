module.exports = (app) => {
  require('../reader/infrastructure/routes')(app);
  require('../item/infrastructure/routes')(app);
  require('../copy/infrastructure/routes')(app);
  require('../loan/infrastructure/routes')(app);
};

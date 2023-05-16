module.exports = (req, res, next) => {
  if(req.params.field.length < 4) res.status(400).send('Search field must have more than 4 characters.');
  next();
};
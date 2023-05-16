module.exports = (db) => {
  const { readers, items, copies, loans } = db;
  items.hasMany(copies, { as: 'copies', foreignKey: { allowNull: false, name: 'itemId' }, onDelete: 'CASCADE' });
  readers.hasMany(loans, { as: 'reader', foreignKey: { allowNull: false, name: 'readerId' }, onDelete: 'CASCADE' });
  copies.hasMany(loans, { as: 'copy', foreignKey: { allowNull: false, name: 'copyId' }, onDelete: 'CASCADE' });

};
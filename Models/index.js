
const User = require('./User')
const Product = require('./Product')

User.hasMany( Product, {foreignKey : 'admin_id'});
Product.belongsTo(User, {foreignKey : 'admin_id'});

module.exports = {User, Product};

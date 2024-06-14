const {DataTypes} = require('sequelize');
const sequelize = require('../Config/db');

const Product = sequelize.define('Product', {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        unique:true
    },

    name: {
        type: DataTypes.STRING,
        allowNull : false,
        unique : true
    },

    description : {
        type : DataTypes.TEXT,
        allowNull : false
    },

    price : {
        type : DataTypes.FLOAT,
        allowNull : false
    },
    admin_id : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
});

module.exports = Product;
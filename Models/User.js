const {DataTypes} = require('sequelize');
const sequelize = require('../Config/db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true,
        unique: true
    },

    email : {
        type : DataTypes.STRING,
        unique: true, 
        allowNull : false,
        unique : true
    },

    password : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },

    role : {
        type : DataTypes.ENUM('admin', 'customer'),
        allowNull : false
    }
});

module.exports = User;
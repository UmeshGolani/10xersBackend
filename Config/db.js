const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

// module.exports = {
//     "development": {
//       "username": process.env.DB_USER,
//       "password": process.env.DB_PASS,
//       "database": process.env.DB_NAME,
//       "host": process.env.DB_HOST,
//       // "dialect": process.env.DB_DIALECT,
//       "port": process.env.DB_PORT
//     },
//     "test": {
//       "username": process.env.DB_USER,
//       "password": process.env.DB_PASS,
//       "database": process.env.DB_NAME,
//       "host": process.env.DB_HOST,
//       // "dialect": process.env.DB_DIALECT,
//       "port": process.env.DB_PORT
//     },
//     "production": {
//       "username": process.env.DB_USER,
//       "password": process.env.DB_PASS,
//       "database": process.env.DB_NAME,
//       "host": process.env.DB_HOST,
//       // "dialect": process.env.DB_DIALECT,
//       "port": process.env.DB_PORT
//     }
//   }

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASS,{
  host:process.env.DB_HOST,
  dialect:process.env.DB_DIALECT
})

module.exports = sequelize;
const Sequelize = require('sequelize');
module.exports = new Sequelize('leonardo', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },


  operatorsAliases: false
});

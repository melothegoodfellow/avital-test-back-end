const { Sequelize } = require('sequelize');
const database = require('../constants/database');

const sequelize = new Sequelize(database.name, database.user, database.password, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
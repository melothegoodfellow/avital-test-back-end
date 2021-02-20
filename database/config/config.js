const database = require("../../constants/database");

module.exports = {
  "development": {
    "username": database.user,
    "password": database.password,
    "database": database.name,
    "host": database.host,
    "logging": true,
    "dialect": "mysql"
  },
  "test": {
    "username": database.user,
    "password": database.password,
    "database": database.name,
    "host": database.host,
    "logging": true,
    "dialect": "mysql"
  },
  "production": {
    "username": database.user,
    "password": database.password,
    "database": database.name,
    "host": database.host,
    "logging": false,
    "dialect": "mysql"
  }
}

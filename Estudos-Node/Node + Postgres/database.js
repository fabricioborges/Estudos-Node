const Sequelize = require('sequelize');

DATABASE_URL = 'postgres://postgres:123@127.0.0.1:5432/node-postgres-sequelize'

const database = new Sequelize(DATABASE_URL);

module.exports = database;
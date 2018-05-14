// Define your database object in here for pgp
const pg = require('pg-promise')();
const config = require('./connection.js')();
const db = pg(config);

module.exports = db;

const knex = require('knex');

const knexfile = require("../knexfile.js")

const enviroment = process.env.NODE_ENV || "development"

const knexConfig = knexfile[enviroment];

module.exports = knex(knexConfig); 
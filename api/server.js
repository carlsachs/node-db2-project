const express = require('express');
const helmet = require('helmet');
const carsRouter = require('../data/carsRouter.js')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/coches', carsRouter)

module.exports = server; 
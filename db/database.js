const knex = require('knex')
const connection = require('../knexfile')[process.env.NODE_ENV || 'development']
const database = knex(connection)

module.exports = database

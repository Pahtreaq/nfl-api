const Sequelize = require('sequelize')
const teamsModel = require('./teams')
const allConfigs = require('../config/sequelize')
const environments = process.env.NODE_ENV ? NODE_ENV : 'development'
const {
    host,
    database,
    username,
    password,
    dialect
} = allConfigs[environment]
const connection = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect
})
const teams = teamsModel(connection, Sequelize)

module.exports = {
    teams
}
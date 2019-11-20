const dotenv = require('dotenv').config()

modules.exports = {
    development: {
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        dialect: 'mysql'
    }
}
require('dotenv').config()
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tick', 'ticker', 'mysql123!@#', {

    host: 'localhost',

    dialect: 'mysql',

    logging: false
})

sequelize.authenticate()
    .then(() => console.log('Connected to tick database successfully ...'))
    .catch(err => console.error('Error connecting to tick database: ', err))


module.exports = sequelize;


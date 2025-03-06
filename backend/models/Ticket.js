const { DataType } = require('sequelize');
const db = require('../config/db.js');
const User = require('./User.js');
const Event = require('./Event.js');

const Ticket = db.define('Ticket', {
    ticketID: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,

    },
    status: {
        type: DataType.ENUM('PAID', 'UNPAID'),
        defaultValue: 'UNPAID',
        allowNull: false,

    },
    purchaseDate: {
        type: DataType.DATE,
        allowNull: true,

    },
    userID: {
        type: DataType.INTEGER,
        reference: {
            model: 'User',
            key: 'userID',
        },
        allowNull: false
    },
    eventID: {
        type: DataType.INTEGER,
        reference: {
            model: 'Event',
            key: 'eventID',
        },
        allowNull: false
    }

}, { timestamps: true })

module.exports = Ticket
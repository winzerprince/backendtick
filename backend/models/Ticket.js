const { DataTypes } = require('sequelize');
const db = require('../config/db.js');
const User = require('./User.js');
const Event = require('./Event.js');

const Ticket = db.define('Ticket', {
    ticketID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,

    },
    status: {
        type: DataTypes.ENUM('PAID', 'UNPAID'),
        defaultValue: 'UNPAID',
        allowNull: false,

    },
    purchaseDate: {
        type: DataTypes.DATE,
        allowNull: true,

    },
    userID: {
        type: DataTypes.INTEGER,
        reference: {
            model: User,
            key: 'userID',
        },
        allowNull: false
    },
    eventID: {
        type: DataTypes.INTEGER,
        reference: {
            model: Event,
            key: 'eventID',
        },
        allowNull: false
    },


}, { timestamps: true })

module.exports = Ticket;
const { DataTypes } = require('sequelize');
const db = require('../config/db.js');
// Definition for the events table
const Event = db.define('Event', {
    eventId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,

    },
    venue: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {

        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,

    },
    capacity: {
        type: DataTypes.INTEGER,

    },
    // Added description attribute though it wasn't in the ER diagram
    description: {
        type: DataTypes.TEXT,
    }
}, { timestamps: true });

module.exports = Event;
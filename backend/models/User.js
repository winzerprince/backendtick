const { DataType } = require('sequelize');
const db = require('../config/db.js');

const User = db.define('User', {
    userID: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    name: {
        type: DataType.STRING,
        allowNull: false,

    },
    email: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
        unique: true
    },
    phoneNumber: {
        type: DataType.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataType.STRING,
        allowNull: false,


    },
    qrCode: {
        type: DataType.STRING,
        validate: {
            is: /\.(png)$/i,
        }
    }


}, { timestamps: true })

module.exports = User;
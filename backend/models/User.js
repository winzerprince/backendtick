const { DataTypes } = require('sequelize');
const db = require('../config/db.js');


// Definition for users table
const User = db.define('User', {
    userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
        unique: true
    },
    phoneNumber: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,


    },
    qrCode: {
        type: DataTypes.STRING,
        validate: {
            is: /\.(png)$/i,
        }
    }


}, { timestamps: true })

module.exports = User;
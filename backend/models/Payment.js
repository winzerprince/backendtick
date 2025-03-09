const { DataTypes } = require('sequelize');
const db = require('../config/db.js'); 
const User = require('./User'); 
const { Model } = require('sequelize');



Payment.init(
  {
    paymentID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },

    paymentData: {
      type: DataTypes.STRING, 
      allowNull: false,
    },

    paymentStatus: {
      type: DataTypes.ENUM('pending', 'completed', 'failed'),
      allowNull: false,
      defaultValue: 'pending',
    },

    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'userID',
      },
    },
  },
  {
    sequelize,
    modelName: 'Payment',
    tableName: 'payments',
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

// Define associations
Payment.belongsTo(User, { foreignKey: 'userID' });

module.exports = Payment;
const { DataTypes } = require('sequelize');
const db = require('../config/database'); 
const User = require('./User'); 

class Payment extends Model {}

Payment.init(
  {
    paymentID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
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
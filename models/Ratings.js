const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ratings extends module{}

Ratings.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      comment: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      rating: {
        type: DataTypes.STRING,
        allowNull: false,
      }
})


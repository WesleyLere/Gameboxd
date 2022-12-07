const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rating extends module{}

Rating.init({
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
},

{
  sequelize,
  underscored: true,
  modelName: 'rating',
}

)

module.exports = Rating;

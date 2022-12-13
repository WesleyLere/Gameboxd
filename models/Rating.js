const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rating extends Model{}

Rating.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'game',
        key: 'id',
      },
    },
},

{
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'rating',
}

)

module.exports = Rating;

const User = require('./User');
const Game = require('./Game');
const Rating = require('./Rating');
const UserGame = require('./UserGame');

User.belongsToMany(Game, {
  through: UserGame,
  foreignKey: 'user_id',
});

Game.belongsToMany(User, {
  through: UserGame,
  foreignKey: 'game_id',
})

User.hasMany(Rating, {
  foreignKey: 'user_id',
  onDelete: "cascade"
})

Rating.belongsTo(User, {
  foreignKey: 'user_id',
})

Game.hasMany(Rating, {
  foreignKey: 'game_id',
  onDelete: "cascade"
})

Rating.belongsTo(Game, {
  foreignKey: 'game_id',
})

module.exports = {
  User,
  Game,
  Rating,
  UserGame,
};

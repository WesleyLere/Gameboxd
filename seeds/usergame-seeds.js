const { UserGame } = require('../models');

userGameData = [
  {
    user_id: 1,
    game_id: 1,
  },
  {
    user_id: 1,
    game_id: 2,
  },
  {
    user_id: 2,
    game_id: 1,
  },
]


const seedUserGame = () => UserGame.bulkCreate(userGameData);

module.exports = seedUserGame
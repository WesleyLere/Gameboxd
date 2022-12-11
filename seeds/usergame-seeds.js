const { UserGame } = require('../models');

userGameData[{

    user_id: 1,
    game_id: 730
}]


const seedUserGame = () => UserGame.bulkCreate(userGameData);

module.exports = seedUserGame
const { Game } = require('../models');

const gameData = [
    {
        appId: 123
    },
    {
        appId: 456
    },
    {
        appId: 789
    },
    {
        appId: 234
    },
    {
        appId: 567
    },
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames
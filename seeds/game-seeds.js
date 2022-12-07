const { Game } = require('../models');

const gameData = [
    {
        game_name: 'Tom Clancy\'s Rainbow Six Siege'
    },
    {
        game_name: 'Elden Ring'
    },
    {
        game_name: 'Dead By Daylight'
    },
    {
        game_name: 'Horizon Zero Dawn Complete Edition'
    },
    {
        game_name: 'The Sims 4'
    },
    {
        game_name: 'Madden NFL 23'
    },
    {
        game_name: 'Call of Duty Modern Warefare II'
    },
    {
        game_name: 'Apex Legends'
    },
    {
        game_name: 'Rocket League'
    },
    {
        game_name: 'Halo: The Master Chief Collection'
    },
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames
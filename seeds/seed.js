const seedGames = require('./game-seeds');
const seedRating = require('./rating-seeds');
const seedUser = require('./user-seeds');
const seedUserGame = require('./usergame-seeds');

const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('Database Synced');

    await seedUser();
    console.log('User Seeded');

    await seedGames();
    console.log('Games Seeded');

    await seedUserGame();
    console.log('UserGame Seeded');

    await seedRating();
    console.log('Rating Seeded');

    process.exit(0);
};

seedAll();
const seedGames = require('./game-seeds');
const seedCategories = require('./category-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('Database Synced');

    await seedGames();
    console.log('Games Seeded');

    await seedCategories();
    console.log('Categories Seeded');

    process.exit(0);
};

seedAll();
const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Free to Play',
    },
    {
        category_name: 'Action',
    },
    {
        category_name: 'Adventure',
    },
    {
        category_name: 'Casual',
    },
    {
        category_name: 'Indie',
    },
    {
        category_name: 'Multiplayer',
    },
    {
        category_name: 'Racing',
    },
    {
        category_name: 'RPG',
    },
    {
        category_name: 'Simulation',
    },
    {
        category_name: 'Sports',
    },
    {
        category_name: 'Strategy',
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
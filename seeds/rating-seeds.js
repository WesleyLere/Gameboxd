const { Rating } = require('../models');

const ratingData = [
    {
      comment: 'this game is cool',
      rating: 5,
      user_id: 1,
      game_id: 1,
    },
    {
      comment: 'this game is rock',
      rating: 4,
      user_id: 1,
      game_id: 1,
    },
    {
      comment: 'this game is meh',
      rating: 3,
      user_id: 1,
      game_id: 1,
    },
];

const seedRating = () => Rating.bulkCreate(ratingData);

module.exports = seedRating;
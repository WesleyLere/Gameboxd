const router = require('express').Router();
const { Game, User, Rating } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

// Home Page
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in 
    });
    } catch (err) {
      res.status(500).json(err);
    }
  });
// Render login page
router.get('/login', async (req,res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    res.render('login')
  } catch (err) {
    res.status(500).json(err);
  }
})
// Send the user's data and games to profile
router.get('/profile', withAuth, async (req,res) => {
  try {
    res.render('profile', {
      logged_in: true
    })
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/searchResult', (req, res) => {
  res.render('searchPage', {
    logged_in: req.session.logged_in 
  })
})

router.get('/game/:id', withAuth, async (req,res) => {
  try {
    // find a game that appId = :id
    const gameData = await Game.findOne({
      where: {
        appId: req.params.id
      },
      // JOIN with the rating table
      include: [{
        model: Rating,
        attributes: ['comment', 'rating'],
        // JOIN with the user table
        include: {
          model: User,
          attributes: ['username']
        }
      }],
      // average the rating of all users
      attributes: {
        include: [
          [
            sequelize.literal(
              '(SELECT AVG(rating) FROM rating WHERE rating.game_id = game.id)'
            ),
            'avgScore',
          ],
        ],
      },
    })
    if(!gameData) {
      res.render('gameReview', {
        logged_in: true,
      })
    } else {
      const game = gameData.get({plain: true});
      res.render('gameReview', {
        ...game,
        logged_in: true,
      })
    }
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;

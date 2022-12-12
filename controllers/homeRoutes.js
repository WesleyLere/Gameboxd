const router = require('express').Router();
const { Game, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
// Send the rendered Handlebars.js template back as the response
  try {
    const gameData = await Game.findAll({
      limit: 5
    })
    const games = gameData.map(game => game.get({plain: true}));

    res.render('homepage', {
      ...games,
      logged_in: req.session.logged_in 
    });
    } catch (err) {
      res.status(500).json(err);
    }
  });
// Render login page
router.get('/login', async (req,res) => {
  try {
    res.render('login')
  } catch (err) {
    res.status(500).json(err);
  }
})
// Send the user's data and games to profile
router.get('/profile', withAuth, async (req,res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Game,
          attributes: ['name', 'description']
        }
      ]
    })

    const user = userData.get({ plain: true});

    res.render('profile', {
      ...user,
      logged_in: true
    })
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/searchResult', withAuth, (req, res) => {
  res.render('searchPage', {
    logged_in: req.session.logged_in 
  })
})

router.get('/gamereview', (req,res) => {
  res.render('gamereview')
})

module.exports = router;

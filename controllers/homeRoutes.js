const router = require('express').Router();
const { Game } = require('../models');

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try {
    const gameData = await Game.findAll({
      limit: 5
    })
    const games = gameData.map(game => game.get({plain: true}));

  res.render('homepage', games);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req,res) => {
    res.render('login')
})
router.get('/profile', async (req,res) => {
  res.render('profile')
})
router.get('/gamereview', async (req,res) => {
  res.render('gamereview')
})


module.exports = router;

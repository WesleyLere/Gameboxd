const router = require('express').Router();
const { Game } = require('../models');
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
  
  router.get('/login', async (req,res) => {
      res.render('login')
  })
  router.get('/profile', withAuth, async (req,res) => {
    res.render('profile', {
      logged_in: true
    })
  })

router.get('/searchResult', withAuth, async(req, res) => {
  res.render('searchPage', {
    logged_in: req.session.logged_in 
  })
})

router.get('/gamereview', async (req,res) => {
  res.render('gamereview')
})


module.exports = router;

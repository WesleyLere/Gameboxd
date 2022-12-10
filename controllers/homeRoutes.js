const router = require('express').Router();
const { Game } = require('../models');

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
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

const router = require('express').Router();
const { Game } = require('../models');

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
});

router.get('/login', async (req,res) => {
    res.render('login')
})

module.exports = router;

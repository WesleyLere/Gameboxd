const router = require('express').Router();
const { Game } = require('../models');

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
});

module.exports = router;

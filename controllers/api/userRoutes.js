const router = require('express').Router();
const { Op } = require("sequelize");
const { User, Game } = require('../../models');
const { welcome } = require('../../utils/nodemailer')

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    // Send automatic email via Nodemailer
    if(userData) {
      welcome(userData.email, userData.username)
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
    
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: {
      [Op.or]: [
        { email: req.body.emailUsername },
        { username: req.body.emailUsername }
      ]}
    });
console.log(userData)
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get('/', async (req, res) => {
  const userData = await User.findByPk(req.session.user_id, {
    include: [ Game ],
    attributes: { exclude: ['password'] },
  })

  const user = userData.get({ plain: true});
  res.json(user);
})

module.exports = router;
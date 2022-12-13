const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ratingRoutes = require('./ratingRoutes');
const gameRoutes = require('./gameRoutes');

router.use('/users', userRoutes);
router.use('/ratings', ratingRoutes);
router.use('/games', gameRoutes);

module.exports = router;
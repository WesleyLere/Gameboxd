const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ratingRoutes = require('./ratingRoutes')

router.use('/users', userRoutes);
router.user('/ratings', ratingRoutes)

module.exports = router;
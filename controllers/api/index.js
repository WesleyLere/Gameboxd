const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ratingRoutes = require('./ratingRoutes')

router.use('/users', userRoutes);
router.use('/ratings', ratingRoutes)

module.exports = router;
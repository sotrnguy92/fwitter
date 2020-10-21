const router = require('express').Router();
const userRoutes = require('./userRoutes');

// we have \api prepended to each route

router.use('/users', userRoutes);

module.exports = router;

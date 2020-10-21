const router = require('express').Router();

// we have /api/users prepended to each route
router.route('/')
  .get((req, res) => {
    res.send('Hello');
  });

module.exports = router;

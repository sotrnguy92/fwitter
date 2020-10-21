const router = require('express').Router();

// we have \api prepended to each route

router.get('/', (_req, res) => {
  res.send('Hello');
});

module.exports = router;

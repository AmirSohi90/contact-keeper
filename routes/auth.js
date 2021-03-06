const express = require('express');
const router = express.Router();

//submitting to the server
// @route   GET api/auth
// @desc    Get logged-in user
// @access  Private

router.get('/', (req, res) => {
  res.send('Get logged in user');
});

//submitting to the server
// @route   POST api/auth
// @desc    Auth user & get token
// @access  Public

router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (res) {
  res.render('index', { title: 'StandUp' });
});

module.exports = router;

/// not gonna need this eventually
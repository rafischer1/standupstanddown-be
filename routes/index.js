const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (res) => res.render('index', { title: 'StandUp' }));

module.exports = router;

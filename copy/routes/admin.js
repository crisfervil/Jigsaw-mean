var express = require('express');
var router = express.Router();

/* GET admin home. */
router.get('/', function(req, res, next) {
  res.send('this is the admin page');
});

module.exports = router;

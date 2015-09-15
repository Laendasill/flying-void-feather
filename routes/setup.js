var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('./setup/index', { title: 'Gra Etnograficzna' });
});
module.exports = router;

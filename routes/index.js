var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gra Etnograficzna' });
});
router.get('/question', function(req, res, next){
  fs.readFile("temp\\SymboleWarszawskie.json", function(err,data){
    if(err){
      throw err;
    }
      res.json(JSON.parse(data));
  });

});

module.exports = router;

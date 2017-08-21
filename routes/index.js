var express = require('express');
var router = express.Router();
var indexCtrl = require('../controllers/indexCtrl')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signin', indexCtrl.findUser);

module.exports = router;

var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');

/* GET home page. */
router.post('/signup', loginController.signUp);
router.post('/signin', loginController.signIn);

module.exports = router;

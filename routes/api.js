var express = require('express');
var router = express.Router();
var authApiController = require('../controllers/authApiController')

router.get('/')

// loging router
router.post('/signup', authApiController.signupUser);
router.post('/signin', authApiController.signinUser);

module.exports = router;

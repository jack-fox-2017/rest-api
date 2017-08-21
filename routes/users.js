var express = require('express');
var router = express.Router();


var helper = require('../helper/helper')
//var db = require('../models')
var controller = require('../controllers/userControllers')
/* GET users listing. */
router.get('/',helper.admin ,controller.userInfo);

/* GET single users info. */
router.get('/:id', controller.singleUserInfo);

/* POST create user. */
router.post('/', controller.createUser);

/* DELETE data user. */
router.delete('/:id', controller.deleteUser);

/* Update data user. */
router.put('/:id', controller.updateUser);

/* Signup data user */
router.post('/signup', controller.signup);

/* Signin data user */
router.post('/signin', controller.signin)

module.exports = router;

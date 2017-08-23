var express = require('express');
var router = express.Router();


var helper = require('../helper/helper')
//var db = require('../models')
var controller = require('../controllers/userControllers')


/* GET users listing. */ //=========ADMIN ONLY========//
router.get('/', helper.admin ,controller.userInfo);

/* GET single users info. */ //=========ADMIN AND USER========//
router.get('/:id',helper.adminUser ,controller.singleUserInfo);

/* POST create user. */ //=========ADMIN ONLY========//
router.post('/', helper.admin ,controller.createUser);

/* DELETE data user. */ //=========ADMIN ONLY========//
router.delete('/:id', helper.admin ,controller.deleteUser);

/* Update data user. */  //=========ADMIN AND USER========//
router.put('/:id', helper.adminUser ,controller.updateUser);

/* Signup data user */
router.post('/signup', controller.signup);

/* Signin data user */
router.post('/signin', controller.signin)

module.exports = router;

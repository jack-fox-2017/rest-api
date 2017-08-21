var express = require('express');
var router = express.Router();
var userController = require('../controllers/userControl')
var model = require('../models')
var auth = require('../helper/authen')

/* GET users listing. */
router.get('/users', auth.authAdmin, userController.getAllUser);
router.post('/signup', userController.signup);
router.get('/users/:id', userController.getSingleId)
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser)
router.post('/signin', userController.signin)


module.exports = router;

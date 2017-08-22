var express = require('express');
var router = express.Router();
var db = require('../models');
var controller = require('../controller/userController');
var userauth = require('../helpers/userauth')
var adminauth = require('../helpers/adminauth')

// registration
router.post('/signup', controller.signupFunction)
router.post('/signin', controller.signinFunction)

// crud
router.get('/users', adminauth, controller.getAll)
router.get('/users/:id', userauth, controller.getById)
router.post('/users', adminauth, controller.createOne)
router.delete('/users/:id', adminauth, controller.deleteOne)
router.put('/users/:id', userauth, controller.updateOne)

module.exports = router;

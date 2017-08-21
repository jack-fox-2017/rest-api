var express = require('express');
var router = express.Router();
var model = require('../models/')
var controller = require ('../controller/userController')

/* GET users listing. */
router.get('/api/users', controller.getAllUsers);

router.get('/api/users/:id', controller.getUserById)

router.post('/api/users', controller.createUser)

router.delete('/api/users/:id', controller.deleteUser)

router.put('/api/users/:id', controller.updateUser)

module.exports = router;

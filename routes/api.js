var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

/* GET users listing. */

router.post('/signin', userController.signIn)

router.post('/signup', userController.signUp)

router.get('/users/', userController.getAll)

router.get('/users/:id', userController.getById)

router.post('/users/', userController.create)

router.delete('/users/:id', userController.destroyById)

router.put('/users/:id', userController.updateById)

module.exports = router;

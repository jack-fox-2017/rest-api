var express = require('express');
var router = express.Router();
var userController = require('../controllers/user_controller')

/* GET users listing. */
router.get('/users', userController.getAll)
router.get('/users/:id', userController.getById)
router.post('/users', userController.insert)
router.delete('/users/:id', userController.remove)
router.put('/users/:id', userController.edit)
router.post('/signup', userController.signUp)
router.post('/signin', userController.signIn)

module.exports = router;

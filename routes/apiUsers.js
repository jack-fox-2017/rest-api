var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

router.get('/')

/* GET home page. */
router.get('/users/', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users/', userController.createUser);
router.delete('/users/:id', userController.deleteUser);
router.put('/users/:id', userController.updateUser);

module.exports = router;

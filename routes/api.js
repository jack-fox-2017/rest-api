var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

/* GET home page. */
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);
router.put('/:id', userController.updateUser);

module.exports = router;

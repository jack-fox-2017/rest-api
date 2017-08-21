const userController = require('../controllers/usersController')
const express = require('express');
const auth = require('../helper/auth')
const router = express.Router();

/* GET users listing. */
router.get('/users', auth.adminOnly, userController.getAllUser);
router.get('/users/:id', userController.getUserById);
router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);
router.post('/users', auth.adminOnly, userController.addUser)
router.delete('/users/:id', auth.adminOnly, userController.deleteUser)
router.put('/users/:id', auth.adminAuthUser, userController.updateUser)

module.exports = router;

const express = require('express');
const router = express.Router();
const user = require('../controllers/userCtrl')
const auth = require('../helpers/authorizer')


// create (signup)
router.post('/', auth.isAdmin, user.createUser); // user created by admin
router.post('/signup', user.createUser); // user created by signing up

// read
router.get('/', auth.isAdmin, user.findAllUser);
router.get('/:id', auth.isCurrentUser, user.findUserById);

// update
router.put('/:id', auth.isCurrentUser, user.editUser);

// delete
router.delete('/:id', auth.isAdmin, user.deleteUser);


module.exports = router;

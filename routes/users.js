const express = require('express');
const router = express.Router();
const user = require('../controllers/userCtrl')


// create
router.post('/', user.createUser);

// read
router.get('/', user.findAllUser);
router.get('/:id', user.findUserById);

// update
router.put('/:id', user.editUser);

// delete
router.delete('/:id', user.deleteUser);


module.exports = router;

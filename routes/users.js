const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

/* GET users listing. */
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;

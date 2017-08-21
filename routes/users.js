const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

/* GET users listing. */
router.post('/', controller.addUser);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);

module.exports = router;

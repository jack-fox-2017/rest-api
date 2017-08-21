const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const auth = require('../helpers/auth')

/* GET users listing. */
router.get('/', auth.authorizedAdmin, controller.getAll);
router.get('/:id', auth.authorizedUser, controller.getById);
router.put('/:id', auth.authorizedUser, controller.updateUser);
router.delete('/:id', auth.authorizedAdmin, controller.deleteUser);

module.exports = router;

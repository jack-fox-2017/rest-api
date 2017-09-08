var express = require('express');
var router = express.Router();
var userApiController = require('../controllers/userApiController')

router.use(userApiController.loginCheck)

/* GET home page. */
router.get('/', userApiController.adminMiddleware, userApiController.getAllUsers);
router.get('/:id', userApiController.getUserById);
router.post('/', userApiController.adminMiddleware, userApiController.createUser);
router.delete('/:id', userApiController.adminMiddleware, userApiController.deleteUser);
router.put('/:id', userApiController.updateUser);

module.exports = router;

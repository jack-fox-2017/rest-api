var express = require('express');
var router = express.Router();

//var db = require('../models')
var controller = require('../controllers/userControllers')
/* GET users listing. */
router.get('/', controller.userInfo);

/* GET single users info. */
router.get('/:id', controller.singleUserInfo);

/* POST create user. */
router.post('/', controller.createUser);

/* DELETE data user. */
router.delete('/:id', controller.deleteUser);

/* Update data user. */
router.put('/:id', controller.updateUser);

module.exports = router;

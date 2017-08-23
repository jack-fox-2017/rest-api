var express = require('express');
var router = express.Router();
var controller = require('../controller/users')


/* GET users listing. */
router.get('/', controller.getUser)
router.post('/', controller.createUser)
router.get('/:id', controller.findId)
router.delete('/:id', controller.Remove)
router.put('/:id', controller.UpdateUser)

module.exports = router;

var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');


/* GET users listing. */
router.get('/', userController.findAll);
router.post('/', userController.createData)
router.get('/:id', userController.findById)
router.put('/:id', userController.put)
router.delete('/:id', userController.destroy)


module.exports = router;

var express = require('express')
var router = express.Router()
var users = require('../controller/user')
var auth = require('../helpers/authorize')

/* GET users listing. */
router.get('/', auth.authorize , users.getUser)
router.post('/', auth.authorize , users.postUser)
router.delete('/:id', auth.authorize , users.deleteUser)
router.put('/:id', auth.authorize , users.updateUser)

module.exports = router

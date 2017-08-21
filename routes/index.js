var express = require('express')
var router = express.Router()
var users = require('../controller/user')

/* GET home page. */
router.post('/signup', users.postUser)
router.post('/signin', users.signin)

module.exports = router

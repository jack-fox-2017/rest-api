const express = require('express')
const router = express.Router()

const controller = require('../controller/user')

router.post('/', controller.login)

module.exports = router

const express = require('express')
const router = express.Router()

const controller = require('../controller/user')

router.post('/', controller.addData)

module.exports = router

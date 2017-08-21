const express = require('express')
const router = express.Router()

const controller = require('../controller/user')

router.get('/', controller.getAllData)
router.post('/', controller.addData)
router.get('/:id', controller.getData)
router.put('/:id', controller.updateData)
router.delete('/:id', controller.deleteData)

module.exports = router

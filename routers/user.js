const express = require('express')
const router = express.Router()

const controller = require('../controller/user')
const decode = require('../helpers/role')

router.get('/', decode.roleAdmin, controller.getAllData)
router.post('/', decode.roleAdmin, controller.addData)
router.get('/:id', decode.roleAuth, controller.getData)
router.put('/:id', decode.roleAuth, controller.updateData)
router.delete('/:id', decode.roleAdmin, controller.deleteData)

module.exports = router

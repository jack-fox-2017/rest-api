var express = require('express');
var router = express.Router();
const controller = require("../controller/userController")

router.get('/', controller.findAll)
router.get("/:id", controller.findById)
router.post("/", controller.create)
router.delete("/:id", controller.destroy)
router.put("/:id", controller.update)

module.exports = router;

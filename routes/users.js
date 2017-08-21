const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const controller = require("../controller/userController")

router.post("/login/", controller.login)
router.post("/signup", controller.signup)

router.get('/users', controller.findAll)
router.get("/users/:id", controller.findById)
router.post("/users", controller.create)
router.delete("users/:id", controller.destroy)
router.put("/users/:id", controller.update)

module.exports = router;

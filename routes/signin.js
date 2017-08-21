'use strict'
const express = require('express');
const router = express.Router();
const db = require('../models');
const user = require('../controllers/usercontroller');


/* GET users listing. */
router.post('/', user.signin)

module.exports = router;
'use strict'
const express = require('express');
const router = express.Router();
const db = require('../models');
const user = require('../controllers/usercontroller');


/* GET users listing. */
router.get('/', user.getAllUser);

router.get('/:id', user.GetUser)

router.post('/', user.createUser)

module.exports = router;

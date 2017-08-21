'use strict'
const express = require('express');
const router = express.Router();
const db = require('../models');
const user = require('../controllers/usercontroller');
const verification = require('../helpers/verification');
const verificationAdmin = require('../helpers/verificationAdmin');


/* GET users listing. */
router.get('/', verificationAdmin.authorize, user.getAllUser);

router.get('/:id', verification.authetic, user.GetUser)

router.post('/', verificationAdmin.authorize, user.createUser)

router.delete('/:id', verificationAdmin.authorize, user.deleteUser)

router.put('/:id', verification.authetic, user.editUser)

module.exports = router;

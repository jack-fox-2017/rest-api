'use strict'

const db = require('../models')
const crypt = require('../helpers/crypt.js');
const keygen = require('../helpers/keygen.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// find
exports.findUser = (req, res) => {
  db.User.findOne({
    where: {
      username : req.body.username
    }
  })
  .then(usrdata => {
    let pass = crypt(req.body.password, usrdata.salt)
    if (pass === usrdata.password) {
      let token = jwt.sign({
        username: usrdata.username,
        role: usrdata.role
      }, process.env.SECRET)
      // console.log(process.env.SECRET)
      // console.log(token)
      res.send(token)
    }
  })
}



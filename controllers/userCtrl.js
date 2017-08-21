'use strict'

const db = require('../models')
const crypt = require('../helpers/crypt.js');
const keygen = require('../helpers/keygen.js');
const auth = require('../helpers/authorizer')

// create
exports.createUser = (req, res) => {
  let salt = keygen()
  let hashed = crypt(req.body.password, salt)
  let data = {
    name     : req.body.name,
    username : req.body.username,
    password : hashed,
    salt     : salt,
    role     : 'user'
  }
  db.User.create(data)
  .then(user => {
    res.send(user)
  })
  .catch(e => {
    res.send(e)
  })
}


// read
exports.findAllUser = (req, res) => {
  console.log(db);
  db.User.findAll()
  .then(data => {
    res.send(data)
  })
  .catch(e => {
    res.send(e)
  })
}

exports.findUserById = (req, res) => {
  db.User.findById(req.params.id)
  .then(data => {
    res.send(data)
  })
  .catch(e => {
    res.send(e)
  })
}


// update
exports.editUser = (req, res) => {
  let salt = keygen()
  let hashed = crypt(req.body.password, salt)

  if (auth.isAdmin) {
    let role = req.body.role
  }

  let updater = {
    name     : req.body.name,
    username : req.body.username,
    password : hashed,
    salt     : salt,
    role     : role || 'user'
  }
  db.User.update(updater, {
    where : {
      id : req.params.id
    }
  })
  .then(updated => {
    res.send(updated)
  })
  .catch(e => {
    res.send(e)
  })
}


// delete
exports.deleteUser = (req, res) => {
  db.User.destroy({
    where : {
      id : req.params.id
    }
  })
  .then(() => {
    res.send('deleted')
  })
  .catch(e => {
    res.send(e)
  })
}

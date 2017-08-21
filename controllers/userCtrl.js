'use strict'

const db = require('../models')

// create
exports.createUser = (req, res) => {
  db.User.create(req.body)
  .then(data => {
    res.send(data)
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
  db.User.update(req.body, {
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

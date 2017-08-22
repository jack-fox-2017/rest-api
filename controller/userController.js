var jwt = require('jsonwebtoken');
var db = require('../models');
var signin = require('../helpers/signin')
require('dotenv').config()

var getAll = function(req,res){
  db.User.findAll()
  .then(function(data){
    res.send(data);
  })
}

var getById = function(req,res){
  db.User.find({
    where: {id: req.params.id}
  })
  .then(users => {
    res.send(users)
  })
}

var createOne = function(req,res){
  db.User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role,
    salt: req.body.salt
  })
  .then(function(users) {
    res.send(users)
    })
  }


  var deleteOne = function(req,res){
    db.User.destroy({
      where: {id: req.params.id}
    })
    .then (function() {
      res.send("deleted")
    })
  }

  var updateOne = function(req,res){
    db.User.update({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      role: req.body.role
    }, {  where: {id: req.params.id}
    })
    .then (function (user) {
      res.send(user)
    })
  }

  var signinFunction = function(req,res){
    let username = req.body.username
    db.User.findOne({
      where: {username: username}
    })
    .then (user => {
      let encryptedPassword = signin.cryptoPass(req.body.password, user.salt)
      if(user.password == encryptedPassword) {
        let token = jwt.sign({
          username: user.username,
          role: user.role
        }, process.env.SECRET_KEY)
        res.send({
          msg: 'login sukses',
          token: token
        })
      }
      })
    }

    var signupFunction = function(req,res){
      let salt = signin.random();
      let encryptedPassword = signin.cryptoPass(req.body.password, salt)
      db.User.create({
        username: req.body.username,
        password: encryptedPassword,
        email: req.body.email,
        role: 'admin',
        salt: salt
      })
      .then(function(user) {
        res.send(user)
      })
    }

module.exports = {
  signupFunction,
  signinFunction,
  updateOne,
  deleteOne,
  createOne,
  getById,
  getAll
}


























































































//---

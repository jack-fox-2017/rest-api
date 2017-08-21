const db = require('../models');
var jwt = require('jsonwebtoken');
const generate = require('../helpers/generateSecret');
const hash = require('../helpers/hash');
const crypto = require('crypto');

require('dotenv').config()

module.exports = {
  findAll: function (req,res) {
    // if (req.headers.hasOwnProperty('token')) {
    //   jwt.verify(req.headers.token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
    //     if (decoded.role == 'admin') {
          db.User.findAll()
          .then(function (data) {
            res.send(data);
          })
    //     } else {
    //       res.send('you need to be an admin')
    //     }
    //   });
    // } else {
    //   res.send('you need to log in first')
    // }
  },
  create: function (req,res) {
    // if (req.headers.hasOwnProperty('token')) {
    //   jwt.verify(req.headers.token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
    //     if (decoded.role == 'admin') {
        db.User.create({
          username: req.body.username,
          password: req.body.password,
          role: req.body.role,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        .then(function(result) {
          res.send(result);
        })
    //     } else {
    //       res.send('you need to be an admin')
    //     }
    //   });
    // } else {
    //   res.send('you need to log in first')
    // }
  },
  signup: function (req,res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(function(result) {
      res.send(result);
    })
  },
  signin: function (req,res) {
    console.log(req.body);
    db.User.findOne({
      where: {
        username:req.body.username
      }
    })
    .then(function(row) {
      let key = hash(row.secret, req.body.password);
      if(row.password == key) {
        jwt.sign({ role: row.role }, process.env.TOKEN_SECRET_KEY, function(err, token) {
          if (err) {res.send(err)}
          res.send({token: token});
        });
      } else {res.send('wrong password')}
    })
    .catch(function(err){
      res.send('user not found'+err)
    })
  },
  findById: function (req,res) {
    // if (req.headers.hasOwnProperty('token')) {
      db.User.findById(req.params.id)
      .then(function (data) {
        res.send(data);
      })
    // } else {
    //   res.send('you need to log in first')
    // }
  },
  destroy: function (req,res) {
    // if (req.headers.hasOwnProperty('token')) {
    //   jwt.verify(req.headers.token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
    //     if (decoded.role == 'admin') {
        db.User.destroy({where: {id:req.params.id}})
        .then(function () {
          res.send('user is destroyed');
        })
    //     } else {
    //       res.send('you need to be an admin')
    //     }
    //   });
    // } else {
    // res.send('you need to log in first')
    // }
  },
  update: function (req,res) {
    // if (req.headers.hasOwnProperty('token')) {
      db.User.update({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
      }, {
        where: {id:req.params.id}
      })
      .then(function (results) {
        res.send(results);
      })
    // } else {
    //   res.send('you need to log in first')
    // }
  }
}

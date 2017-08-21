var models = require('../models')
var jwt = require('jsonwebtoken')
require('dotenv').config()
var encrypt = require('../helpers/encryptPassword')
var key = require('../helpers/key')

function getUser (req, res) {
  models.User.findAll().then(data => res.send(data)).catch(err => res.send(err))
}
function postUser (req, res) {
  models.User.create(req.body).then(log => {
    res.send('berhasil di input')
  }).catch(err => res.send(err))
}
function deleteUser (req, res) {
  models.User.destroy({
    where: {id: req.params.id}
  }).then(log => res.send('berhasil di hapus')).catch(err => res.send(err))
}
function updateUser (req, res) {
  models.User.update(req.body, {
    where: {
      id: {
        $eq: req.params.id
      }
    }
  })
    .then(() => res.send('updated'))
    .catch(err => res.send(err))
}
function signin (req, res) {
  console.log(req.body.username)
  models.User.findOne({
    where: {username: req.body.username}
  }).then(data => {
    if (data.password === encrypt(req.body.password, data.key)) {
      var token = jwt.sign({
        id: data.id,
        username: data.username,
        role: data.role
      }, process.env.SECRET_KEY)
      res.send(token)
    }else {
      res.send('password salah')
    }
  }).catch(err => {
    res.send('username tidak terdaftar')
  })
}
module.exports = {getUser, postUser, deleteUser, updateUser,signin}

const model = require ('../models')
const jwt = require('jsonwebtoken');
const secret = require ('../helpers/secretKey')
const crypPass = require ('../helpers/encrypt')
require('dotenv').config()

const getAllUsers = function (req, res) {
  let token = req.headers.token
  let decode = jwt.verify(token, process.env.USER_TOKEN)
  if(decode.role == 'admin') {
    model.User.findAll()
    .then(data => res.send(data))
    .catch(err => res.send(err))
  } else {
    res.send(`you don't have access`)
  }
}

const getUserById = (req,res) => {
  let token = req.headers.token
  let decode = jwt.verify(token, process.env.USER_TOKEN)
  if (decode.role == 'admin' || decode.id == req.params.id) {
    model.User.findById(req.params.id)
    .then(data => res.send(data))
    .catch(err => res.send(err))
  }
  else {
    res.send(`you don't have access`)
  }
}

const createUser = (req,res) => {
  let token = req.headers.token
  let decode = jwt.verify(token, process.env.USER_TOKEN)
  if(decode.role == 'admin') {
    model.User.create({
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
      key: secret(),
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(() => res.send ('data created'))
    .catch(err => res.send(err))
  } else {
    res.send(`you don't have authorize`)
  }
}

const deleteUser = (req,res) => {
  let token = req.headers.token
  let decode = jwt.verify(token, process.env.USER_TOKEN)
  if(decode.role == 'admin') {
    model.User.destroy({
      where: {id: req.params.id}
    })
    .then(() => res.send('deleted success'))
    .catch(err => res.send(err))
  } else {
    res.send(`you don't have authorize`)
  }
}

const updateUser = (req,res) => {
  let token = req.headers.token
  let decode = jwt.verify(token, process.env.USER_TOKEN)
  if (decode.role == 'admin' || decode.id == req.params.id) {
    model.User.update({
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
      key: secret(),
      updatedAt: new Date()
    }, {
      where: {id: req.params.id},
      individualHooks: true
    })
    .then(() => res.send ('updated success'))
    .catch(err => res.send(err))
  } else {
    res.send(`you don't have authorize`)
  }

}

const signinUser = (req,res) => {
  model.User.findOne({
    where: {username: req.body.username}
  })
  .then(data => {
    if(data.password == crypPass(req.body.password, data.key)) {

      let token = jwt.sign({
        id: data.id,
        username: data.username,
        role: data.role
      }, process.env.USER_TOKEN)

      res.send(token)

    } else {
      res.send('wrong password')
    }
  })
  .catch(err => res.send(err))
}

const signupUser = (req,res) => {
  model.User.create({
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
    key: secret(),
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(() => res.send ('data created'))
  .catch(err => res.send(err))
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  signupUser,
  signinUser,
  deleteUser,
  updateUser
}

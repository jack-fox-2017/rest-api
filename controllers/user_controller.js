const model = require('../models')
const randomSecret = require('../helpers/randomSecret')
const encrypt = require('../helpers/encrypt')
const jwt = require('jsonwebtoken')

var getAll = (req, res) => {
  model.User.findAll()
  .then(dataUsers => {
    res.send(dataUsers)
  })
}

var getById = (req, res) => {
  model.User.findById(req.params.id)
  .then(dataUser => {
    res.send(dataUser)
  })
}

var insert = (req, res) => {
  model.User.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
    secret: randomSecret()
  })
  .then(() => {
    res.send('data inserted')
  })
}

var remove = (req, res) => {
  model.User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.send('data deleted')
  })
}

var edit = (req, res) => {
  // todo: buat method update data
  model.User.update({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    username: req.body.username,
    role: req.body.role
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.send('data updated')
  })
}

var signUp = (req, res) => {
  model.User.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
    secret: randomSecret()
  })
  .then(() => {
    res.send('signup success')
  })
}

var signIn = (req, res) => {
  model.User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(data => {
    if (data.password == encrypt(data.secret, req.body.password)) {
      res.send('sign in success')
    }
    else {
      res.send('password salah')
    }
  })
  .catch(err => {
    res.send('username tidak ada')
  })
}


module.exports = {
  getAll,
  getById,
  insert,
  remove,
  edit,
  signUp,
  signIn
}

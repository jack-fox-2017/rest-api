const model = require('../models')
const randomSecret = require('../helpers/randomSecret')
const encrypt = require('../helpers/encrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

var getAll = (req, res) => {
  var token = req.headers.token
  if (token == null) {
    res.send('Anda belum login')
  }
  else {
    var decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    if (decoded.role == 'admin') {
      model.User.findAll()
      .then(dataUsers => {
        res.send(dataUsers)
      })
    }
    else {
      res.send('Anda bukan admin')
    }
  }
}

var getById = (req, res) => {
  if (req.headers.token == null) {
    res.send('Anda belum login')
  }
  else {
    var decoded = jwt.verify(req.headers.token, process.env.TOKEN_SECRET);
    if (decoded.role == 'admin') {
      model.User.findById(req.params.id)
      .then(dataUser => {
        res.send(dataUser)
      })
    }
    else if (decoded.id == req.params.id) {
      model.User.findById(req.params.id)
      .then(dataUser => {
        res.send(dataUser)
      })
    }
    else {
      res.send('Anda hanya bisa melihat data Anda sendiri')
    }
  }




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


      var token = jwt.sign({
        id: data.id,
        username: data.username,
        role: data.role
      }, process.env.TOKEN_SECRET);

      // res.send('sign in success')
      res.send(token)


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

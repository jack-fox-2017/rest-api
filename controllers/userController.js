const db = require('../models');
const salt = require('../helpers/salt');
const encryptme = require('../helpers/encryptme');
const jwt = require('jsonwebtoken');

var findAll = (req, res) => {
  var token = req.headers.token;
  var jwtLogin = jwt.verify(token, 'thesecret')

  if(jwtLogin == 'admin'){
    db.User.findAll()
    .then(dataUser => res.json(dataUser))
  } else {
    res.send('anda tidak memiliki hak akses')
  }
}

var createData = (req, res) => {
  db.User.create({
    username: req.body.username,
    password: req.body.password,
    role: req.body.role
  })
  .then(dataUser => res.json(dataUser))
}


var findById = (req, res) => {
  db.User.find({
    where: {
      id: req.params.id
    }
  })
  .then(dataUser => res.json(dataUser))
}

var put = (req, res) => {
  let pass = encryptme(req.body.password, req.body.secret)
  db.User.update({
    username: req.body.username,
    password: pass,
    secret: req.body.secret
  },{
    where: {
      id: req.params.id
    }
  })
  .then(dataUser => res.json(dataUser))
}

var destroy = (req, res) => {
  db.User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dataUser => res.send(`data id ${req.params.id} sudah dihapus`))
}

module.exports = {
  findAll, findById, createData, put, destroy
}

const db = require('../models');

var findAll = (req, res) => {
  db.User.findAll()
  .then(dataUser => res.json(dataUser))
}

var createData = (req, res) => {
  db.User.create({
    username: req.body.username,
    password: req.body.password
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
  db.User.update({
    username: req.body.username,
    password: req.body.password
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

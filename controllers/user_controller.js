const model = require('../models')
const randomSecret = require('../helpers/randomSecret')

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
    username: req.body.username
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


module.exports = {
  getAll,
  getById,
  insert,
  remove,
  edit
}

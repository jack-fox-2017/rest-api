const db = require('../models')

exports.getAllUser = (req, res, next) => {
  db.User.findAll()
    .then(user => {
      res.send(user)
    })
    .catch(err => {
      res.send(err)
    })
}


exports.GetUser = (req, res, next) => {
  db.User.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(user => {
      res.send(user)
    })
}

exports.createUser = (req, res, next) => {
  db.User.create({
    username: req.body.username,
    email: req.body.email,
    createdAt: new Date(),
    updatedAt: new Date()
  })
    .then(() => {
      res.send('data masuk')
    })
    .catch(() => {
      res.send('data ga masuk')
    })
}
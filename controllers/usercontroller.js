const db = require('../models')
const random = require('../helpers/hash')
const jwt = require('jsonwebtoken');

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
  db.User.create(req.body)
    .then(() => {
      res.send('data masuk')
    })
    .catch(() => {
      res.send('data ga masuk')
    })

}


exports.deleteUser = (req, res) => {
  db.User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => {
      res.send('deleted')
    })
}

exports.editUser = (req, res) => {
  db.User.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(rows => {
      var pass = random.hashish(req.body.password, rows.salt)
      db.User.update({
          username: req.body.username,
          password: pass,
          role: req.body.role,
          email: req.body.email
        }, {
          where: {
            id: req.params.id
          }
        })
        .then(() => {
          res.send('edited')
        })
    })
}

exports.signup = (req, res) => {
  db.User.create(req.body)
    .then(() => {
      res.send('user created')
    })
}

exports.signin = (req, res) => {
  db.User.findOne({
      where: {
        username: req.body.username
      }
    })
    .then(rows => {
      console.log(rows);
      var saltUserLogin = rows.salt
      var passwordUserLogin = req.body.password
      var getPasswordUser = random.hashish(passwordUserLogin, saltUserLogin)
      if (rows.password == getPasswordUser) {
        var token = jwt.sign({
          username: rows.username,
          role: rows.role
        }, process.env.SECRET_BOSS);
        res.send(token)
      } else {
        res.send(`Wrong Password`)
      }
    })
  // .catch(err => {
  //   res.send(`username Not Found`)
  // })
}
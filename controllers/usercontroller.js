const db = require('../models')
const random = require('../helpers/hash')
const jwt = require('jsonwebtoken');

exports.getAllUser = (req, res, next) => {
  try {
    var decoded = jwt.verify(req.headers.token, 'inisecret')
    if (decoded.role == 'admin') {
      db.User.findAll()
        .then(user => {
          res.send(user)
        })
        .catch(err => {
          res.send(err)
        })
    } else {
      res.send('Not Admin')
    }
  } catch (err) {
    res.send('token salah')
  }
}


exports.GetUser = (req, res, next) => {
  try {
    var decoded = jwt.verify(req.headers.token, 'inisecret')
    if (decoded.role) {
      db.User.findOne({
          where: {
            id: req.params.id
          }
        })
        .then(user => {
          res.send(user)
        })
    } else {
      res.send('no session')
    }
  } catch (err) {
    res.send('token salah')
  }
}

exports.createUser = (req, res, next) => {
  try {
    var decoded = jwt.verify(req.headers.token, 'inisecret')
    if (decoded.role == 'admin') {
      db.User.create(req.body)
        .then(() => {
          res.send('data masuk')
        })
        .catch(() => {
          res.send('data ga masuk')
        })
    } else {
      res.send('Not Admin')
    }
  } catch (err) {
    res.send('token salah')
  }
}


exports.deleteUser = (req, res) => {
  try {
    var decoded = jwt.verify(req.headers.token, 'inisecret')
    if (decoded.role == 'admin') {
      db.User.destroy({
          where: {
            id: req.params.id
          }
        })
        .then(() => {
          res.send('deleted')
        })
    } else {
      res.send('Not Admin')
    }
  } catch (err) {
    res.send('token salah')
  }
}

exports.editUser = (req, res) => {
  try {
    var decoded = jwt.verify(req.headers.token, 'inisecret')
    if (decoded.role == 'admin') {
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
    } else {
      res.send('Not Admin')
    }
  } catch (err) {
    res.send('token salah')
  }
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
        }, 'inisecret');
        res.send(token)
      } else {
        res.send(`Wrong Password`)
      }
    })
  // .catch(err => {
  //   res.send(`username Not Found`)
  // })
}
var model = require('../models');
var bcrypt = require('bcrypt')
var salt = bcrypt.genSaltSync(8);
// var hash = bcrypt.hashSync(myPlaintextPassword, salt);
require('dotenv').config()
var jwt = require('jsonwebtoken');



var getAllUser = function(req, res, next) {
  model.Account.findAll()
  .then(data => {
    console.log(data);
    res.send(data);
  })
  .catch(err => {
    res.send(err)
  })
}

var signup = (req, res, next) => {
  let hash = bcrypt.hashSync(req.body.pass, salt);
  model.Account.create({
    name: req.body.name,
    username: req.body.username,
    pass: hash,
    role: req.body.role
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var signin = (req, res) => {
  model.Account.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(data => {
    if (bcrypt.compareSync(req.body.pass, data.pass)) {
      var token = jwt.sign({
        username: data.username, role: data.role
      },
        process.env.SECRET_KEY
      )
      res.send({
        msg: 'Succes Login',
        dataToken: token
      })
    } else {
      res.send('Wrong Pass')
    }
  })
  .catch(err => {
    res.send(err)
  })
}

var getSingleId = (req, res, next) => {
  model.Account.findById(req.params.id)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}


var updateUser = (req, res) => {
  let hash = bcrypt.hashSync(req.body.pass, salt);
  model.Account.update({
    name: req.body.name,
    username: req.body.username,
    pass: hash,
    role: req.body.role
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(data => {
    res.send(datas)
  })
  .catch(err => {
    res.send(err)
})
}


var deleteUser = (req, res) => {
  model.Account.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.send('delete')
  })
  .catch(err => {
    res.send(err)
  })
}






module.exports = {
  getAllUser,
  signup,
  getSingleId,
  updateUser,
  deleteUser,
  signin
};

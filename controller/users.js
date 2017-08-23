var models = require('../models')
var jwt = require('jsonwebtoken');

var getUser = (req, res) =>{
  if (req.headers.hasOwnProperty('token')) {
    let decode = jwt.verify(req.headers.token, 'sssssshhh')
    if (decode.role == 'admin') {
      models.User.findAll()
      .then(users => {
        res.send(users)
      })
      .catch(err => {
        res.send(err)
      })
    } else {
      res.send('you are not admin')
    }
  }
}

var createUser = (req, res) =>{
  if (req.headers.hasOwnProperty('token')) {
    let decode = jwt.verify(req.headers.token, 'sssssshhh')
    if (decode.role == 'admin') {
      models.User.create(req.body)
      .then(()=>{
        res.send('Data created')
      })
      .catch(err =>{
        res.send(err)
      })
    } else {
      res.send('you are not admin')
    }
  }
}

var findId = (req, res) =>{
  if (req.headers.hasOwnProperty('token')) {
    let decode = jwt.verify(req.headers.token, 'sssssshhh')
    if (decode.role == 'admin') {
      models.User.findById(req.params.id)
      .then(users =>{
        res.send(users)
      })
      .catch(err => {
        res.send(err)
      })
    } else {
      res.send('you are not admin')
    }
  }
}

var Remove = (req, res) =>{
  if (req.headers.hasOwnProperty('token')) {
    let decode = jwt.verify(req.headers.token, 'sssssshhh')
    if (decode.role == 'admin') {
      models.User.destroy({where: {id:req.params.id}})
      .then(() =>{
        res.send("deleted")
      })
      .catch(err => {
        res.send(err)
      })
    } else {
      res.send('you are not admin')
    }
  }
}

var UpdateUser = (req, res) =>{
  if (req.headers.hasOwnProperty('token')) {
    models.User.update({
      username : req.body.username,
      password : req.body.password,
      updatedAt : new Date()
    },{
      where: {id:req.params.id}
    })
    .then(() =>{
      res.send('updated')
    })
    .catch(err =>{
      res.send(err)
    })
  }
}

module.exports = {
  getUser,
  createUser,
  findId,
  Remove,
  UpdateUser
};

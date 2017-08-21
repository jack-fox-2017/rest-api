var models = require('../models')

var getUser = (req, res) =>{
  models.User.findAll()
  .then(users => {
    res.send(users)
  })
  .catch(err => {
    res.send(err)
  })
}

var createUser = (req, res) =>{
  models.User.create(req.body)
  .then(()=>{
    res.send('Data created')
  })
  .catch(err =>{
    res.send(err)
  })
}

var findId = (req, res) =>{
  models.User.findById(req.params.id)
  .then(users =>{
    res.send(users)
  })
  .catch(err => {
    res.send(err)
  })
}

var Remove = (req, res) =>{
  models.User.destroy({where: {id:req.params.id}})
  .then(() =>{
    res.send("deleted")
  })
  .catch(err => {
    res.send(err)
  })
}

var UpdateUser = (req, res) =>{
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

module.exports = {
  getUser,
  createUser,
  findId,
  Remove,
  UpdateUser
};

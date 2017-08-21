const models = require('../models');

var getUsers = (req, res) =>{
  models.User.findAll()
  .then(users=>{
    res.json(users)
  })
  .catch(err=>{
    res.send(err)
  })
}

var getUserById = (req, res) =>{
  models.User.findById(req.params.id)
  .then(user=>{
    res.json(user)
  })
  .catch(err=>{
    res.send(err)
  })
}

var createUser = (req, res) =>{
  models.User.create({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    salt: null,
    role: 'admin'
  })
  .then(()=>{
    res.send('admin created')
  })
  .catch(err=>{
    res.send(err)
  })
}

var updateUser = (req, res) =>{
  models.User.update({
    name: req.body.name,
    username: req.body.username
  },{
    where:{id:req.params.id}
  })
  .then(()=>{
    res.send('updated')
  })
  .catch(err=>{
    res.send(err)
  })
}

var deleteUser = (req, res) =>{
  models.User.destroy({
    where: {id:req.params.id}
  })
  .then(()=>{
    res.send('deleted')
  })
  .catch(err=>{
    res.send(err)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}

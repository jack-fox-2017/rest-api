const db = require('../models')

var userInfo = function(req, res) {
  db.User.findAll()
  .then(data => {
    console.log(data);
    res.send(data)
  })
  .catch(err => res.send(err))
}

var singleUserInfo = function(req, res){
  db.User.findById(req.params.id)
  .then(data =>{
    res.send(data)
  })
  .catch(err =>{
    res.send(err)
  })
}

var createUser = function(req, res){
  db.User.create({
    username: req.body.username,
    password: req.body.password,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(()=>{
    res.send('Data created')
  })
  .catch(err =>{
    res.send(err)
  })
}

var deleteUser = function(req, res){
  db.User.destroy({where:{id:req.params.id}})
  .then(()=>{
    res.send('Data successfully delete')
  })
  .catch(err=>{
    res.send(err)
  })
}

var updateUser = function(req, res){
  db.User.update({
    username:req.body.username,
    password:req.body.password,
    updatedAt: new Date()
  },{
    where:{id:req.params.id}
  })
  .then(() =>{
    res.send('Data successfully update')
  })
}

module.exports = {
  userInfo,
  singleUserInfo,
  createUser,
  deleteUser,
  updateUser
}

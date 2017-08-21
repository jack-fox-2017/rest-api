const db = require('../models')
var helper = require('../helper/helper')
var jwt = require('jsonwebtoken');

var userInfo = function(req, res) {
  db.User.findAll()
  .then(data => {
    //console.log(data);
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
    Role: req.body.role,
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
    Role:req.body.role,
    updatedAt: new Date()
  },{
    where:{id:req.params.id}
  })
  .then(() =>{
    res.send('Data successfully update')
  })
}

var signup = function(req, res){
  db.User.create({
    username: req.body.username,
    password: req.body.password,
    Role: req.body.role,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(()=>{
    res.send('signup success')
  })
  .catch(err =>{
    res.send(err)
  })
}

var signin = function(req, res){
  if(!req.body.username || !req.body.password)
  {
    res.send('Masukan inputan yang benar pls')
  }
  else{
    db.User.findOne({
      where:{username:req.body.username}
    })
    .then(data =>{
      console.log("v=v=v=v=>",data.Role);
      req.body.password = helper.cryptoGraph(req.body.password, data.secretkey)
      console.log("===>",req.body.password);
      if(data.password == req.body.password)
      {
        var token = jwt.sign({
          username:req.body.username,
          Role:data.Role
        }, 'halo');
        // console.log("=x=x=x=>",token);
        res.send(token)
      }
    })
  }
}

module.exports = {
  userInfo,
  singleUserInfo,
  createUser,
  deleteUser,
  updateUser,
  signup,
  signin

}

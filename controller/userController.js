const model = require('../models');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
require('dotenv').config()
var jwt = require('jsonwebtoken');
//

// router.get('/',function(req,res){
//   res.send("sukses api")
// })

var getall = function(req,res){
  model.User.findAll()
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var signUp = function(req,res){
  var hash = bcrypt.hashSync(req.body.password, salt);
  model.User.create({
    username : req.body.username,
    fullname : req.body.fullname,
    password : hash,
    role : req.body.role
  })
  .then((data) => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var getbyid = function(req,res){
  model.User.findById(req.params.id)
  .then(data => {
    res.send(data)
  })
}

var deletebyid = function(req,res){
  model.User.destroy({where:{id: req.params.id}})
  .then(() => {
    res.send("data deleted")
  })
  .catch(err => {
    res.send(err)
  })
}

var update = function(req,res){
  model.User.update({
    username : req.body.username,
    fullname : req.body.fullname,
    password : req.body.password,
    role : req.body.role
  },{
    where:{
      id:req.params.id
    }
  })
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    res.send(err)
  })
}

var signIn = function(req,res){
  model.User.findOne({
    where : {
      username : req.body.username
    }
  })
  .then(user => {
    if (bcrypt.compareSync(req.body.password, user.password)){
      var token = jwt.sign({
        username : user.username,
        role : user.role
      },
      process.env.DB_PASS
    )
      res.send({pesan:"login berhasil",isitoken : token})
    } else {
      res.send('username atau password anda salah')
    }
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {getall,
signUp,getbyid,deletebyid,update,signIn};

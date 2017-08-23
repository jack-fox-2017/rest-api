const models = require('../models')
const saltPassword = require('../helpers/salt')
const jwt = require('jsonwebtoken');
const decode = require('../helpers/role')

var getAllData = function(req, res){
  models.User.findAll()
  .then((users)=>{
    res.send(users)
  })
  .catch(err=>{
    res.send(err)
  })
}

var addData = (req, res)=>{
  console.log(req.body);
  models.User.create({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    role: 'user'
  })
  .then(()=>{
    res.send('Succes create user')
  })
  .catch(err=>{
    res.send(err.errors[0].message)
  })
}

var getData = (req, res)=>{
  models.User.findById(req.params.id)
  .then((user)=>{
    res.send(user)
  })
  .catch(err => {
    res.send(err)
  })
}

var updateData = (req, res)=>{
  if(decode.roleAdmin){
    var role = req.body.role
  }
  let data ={
    name: req.body.name,
    email:req.body.email,
    username: req.body.username,
    password: req.body.password,
    role: role || "user"
  }
  models.User.update(data ,{
    where:{id:req.params.id}
  })
  .then((user)=>{
    res.send(user)
  })
  .catch(err=>{
    res.send(err)
  })
}

var deleteData = (req, res)=>{
  models.User.destroy({where:{id: req.params.id}})
  .then(()=>{
    res.send('success delete data')
  })
  .catch(err=>{
    res.send(err)
  })
}

var login = (req, res)=>{
  models.User.findOne({
    where:{username: req.body.username}
  })
  .then((user)=>{
    var salted = user.salt
    var password = req.body.password
    var newPassword = saltPassword.createSalt(password, salted)
    if(user.password === newPassword){
      var token = jwt.sign({ id: user.id, username: user.username, role:user.role }, 'shhhhh');
      res.send(token)
    } else{
      res.send('Password False')
    }
  })
  .catch(err=>{
    res.send(err)
  })
}

module.exports = {
  getAllData,
  addData,
  getData,
  updateData,
  deleteData,
  login
}

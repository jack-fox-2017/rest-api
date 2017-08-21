const model = require('../models');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync(myPlaintextPassword, salt);

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
    password : hash
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
    password : req.body.password
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


module.exports = {getall,
signUp,getbyid,deletebyid,update};

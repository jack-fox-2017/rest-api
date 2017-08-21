const db = require('../models');
const generateAlphaNumeric = require('../helpers/generateAlphaNumeric');
const crypto = require("crypto");

function convertPass(pass,secret) {
  console.log(pass);
  console.log(secret);
  var hash = crypto.createHmac('sha256', `${secret}`)
                     .update(`${pass}`)
                     .digest('hex');
  return hash;
}

const getAllUsers = function(req,res) {
  db.User.findAll()
  .then((rows)=>{
    res.json(rows)
  })
  .catch((err)=>{
    res.json(err)
  })
}

const getUserById = function(req,res){
  db.User.findById(req.params.id)
  .then((rows)=>{
    res.json(rows)
  })
  .catch((err)=>{
    res.json(err)
  })

}

const createUser = function(req,res){
  var secretKeyLength = 8;
  generateAlphaNumeric(secretKeyLength,(secret)=>{
    var newUser = {
      username: `${req.body.username}`,
      password: `${req.body.password}`,
      secret: `${secret}`,
      role: `${req.body.role}`,
      email: `${req.body.email}`
    }
    db.User.create(newUser)
    .then((row)=>{
      res.json(row)
    })
    .catch((err)=>{
      res.json(err)
    })
  })
}

const deleteUser = (req,res) => {
  var destroyUser = {
    where : {
      id:req.params.id
    }
  }

  db.User.destroy(destroyUser)
  .then((status)=>{
    res.json(status)
  })
  .catch((err)=>{
    res.json(err)
  })
}

const updateUser = (req,res) => {
  var userUpdate = {
    username: `${req.body.username}`,
    password: `${req.body.password}`
  }

  var userId = {
    where: {
      id:req.params.id
    }
  }

  db.User.update(userUpdate,userId)
  .then((row)=>{
    res.json(row)
  })
  .catch((err)=> {
    res.json(err)
  })
}


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser
}

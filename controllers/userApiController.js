const db = require('../models');
const generateAlphaNumeric = require('../helpers/generateAlphaNumeric');
const crypto = require("crypto");


var jwt = require('jsonwebtoken');
var tokenAdmin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaG1hdDEyMyIsImVtYWlsIjoidW5ob29tYW5AYW51LmNvLmlkIiwicm9sZSI6ImFkbWluIiwiaGFzTG9naW4iOnRydWUsImlhdCI6MTUwMzMwODY5NX0.3H51OKYmRB88vwMpmWVlJ6eZBxvsKhuVouq7zb9slv4"
var tokenMember = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFjaW0iLCJlbWFpbCI6ImFjaW1AYW51LmNvLmlkIiwicm9sZSI6Im1lbWJlciIsImhhc0xvZ2luIjp0cnVlLCJpYXQiOjE1MDMzMTAxNjB9.ID1fZjMAhxM0Efu13DjdZ5cP8YKh23-crF4oJ2Z9nRM"

const loginCheck = (req,res,next)=>{
  jwt.verify(tokenMember, process.env.SECRET_TOKEN_KEY, (err,decoded)=>{
    if(err !== null){
      res.json({err: 'belum login'})
    } else {
      next()
    }
  })
}

const adminMiddleware = (req,res,next) =>{
  jwt.verify(tokenMember, 'makannasi', (err,decoded)=>{
    if(decoded.role == 'admin'){
      next()
    } else {
      res.json({err:'anda bukan admin'})
    }
  })
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
  updateUser,
  loginCheck,
  adminMiddleware
}

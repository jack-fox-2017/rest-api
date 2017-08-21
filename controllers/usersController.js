const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const garam = bcrypt.genSaltSync(10);
require('dotenv').config()


const getAllUser = (req, res) => {
  db.User.findAll()
  .then( data => {
    res.send(data)
  })
  .catch( err => {
    res.send(err)
  })
} 

const getUserById =  (req,res)=>{
  db.User.findById(req.params.id)
  .then( data =>{
    res.send(data)
  })
}

const addUser = (req, res) =>{
  let hashPwd = bcrypt.hashSync(req.body.password, garam);
  db.User.create(
    {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: hashPwd,
      role: req.body.role
    }
  )
  .then( data => {
    res.send(data)
  })
  .catch( err =>{
    res.status(400).send(err)
  })
}

const deleteUser = (req, res) =>{
  db.User.destroy({
    where: {id:req.params.id}
  })
  .then( () =>{
    res.send(`Anda mendelete user dengan id ${req.params.id}`)
  })
  .catch( err => {
    res.send(err)
  })
}

const updateUser =  (req, res) => {
  let hashPwd = bcrypt.hashSync(req.body.password, garam)
  db.User.update(
    {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: hashPwd,
      role: req.body.role
    },{
      where: {id:req.params.id}
    }
  )
  .then(data =>{
    res.send(`data dengan id ${req.params.id} sudah di update`)
  })
}

const signUp = (req, res) => {
  let hashPwd = bcrypt.hashSync(req.body.password, garam);
  db.User.create({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: hashPwd,
    role: req.body.role
  })
  .then( data => {
    res.send(data)
  })
  .catch( err => {
    res.send(err)
  })
}

const signIn = (req, res) => {
  db.User.findOne({
    where: {username: req.body.username}
  })
  .then( data => {
    if(bcrypt.compareSync(req.body.password, data.password)){
      var token = jwt.sign({username: data.username, role:data.role, id: data.id}, process.env.SECRET_KEY)
      req.headers.token = token;
      res.send({
        msg:`User ${data.username} sukses login`,
        token: token
      })
    }else{
      res.send(`wrong username and/or password`)
    }
  })
  .catch( err => {
    res.send(err)
  })
}

module.exports = {
  getAllUser,
  getUserById,
  addUser,
  deleteUser,
  updateUser,
  signUp,
  signIn
}

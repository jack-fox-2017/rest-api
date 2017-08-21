const db = require("../models")
const jwt = require('jsonwebtoken');
require('dotenv').config()
const crypto = require("../helpers/crypto")


const findAll = (req, res)=>{
  let token = req.headers.token
  let decoded = jwt.verify(token, process.env.TOKEN)
  if(decoded.role == "admin"){
    db.User.findAll()
    .then(rows=>{
      res.send(rows)
    }).catch(err=>{
      res.send(err)
    })
  }
  else{
    res.send("Token Salah")
  }
}

const findById = (req, res)=>{
  let token = req.headers.token
  let decoded = jwt.verify(token, process.env.TOKEN)
  if(token == null){
    res.send("Anda Belum Login")
  }else{
    if(decoded.role == "admin" || decoded.id == req.params.id){
      db.User.findById(req.params.id)
      .then(row=>{
        res.send(row)
      }).catch(err=>{
        res.send(err)
      })
    }else{
      res.send("Maaf anda tidak punya hak akses")
    }
  }
}

const create = (req, res)=>{
  let token = req.headers.token
  let decoded = jwt.verify(token, process.env.TOKEN)
  if(decoded.role == "admin"){
    db.User.create({
      username : req.body.username,
      password : req.body.password,
      role : req.body.role,
      createdAt : new Date(),
      updatedAt : new Date()
    })
    .then(()=>{
      res.send("Created")
    }).catch(err=>{
      res.send(err)
    })
  }else{
    res.send("Token Salah")
  }
}

const destroy = (req, res)=>{
  let token = req.headers.token
  let decoded = jwt.verify(token,  process.env.TOKEN)
  if(decoded.role == "admin"){
    db.User.destroy({where : {id : req.params.id}})
    .then(()=>{
      res.send("telah dihapus")
    }).catch(err=>{
      res.send(err)
    })
  }else{
    res.send("Token Salah")
  }
}
const update = (req, res)=>{
  let token = req.headers.token
  let decoded = jwt.verify(token, process.env.TOKEN)
  if(token == null){
    res.send("Anda belum login")
  }else{
    if(decoded.role == "admin" || decoded.id == req.params.id){
      db.User.update({
        username : req.body.username,
        role : req.body.role,
        createdAt : new Date(),
        updatedAt : new Date()
      }, {where : {id : req.params.id}, individualHooks : true})
      .then(()=>{
        res.send("telah diupdate")
      }).catch(err=>{
        res.send(err)
      })
    }else{
      res.send("Maaf anda tidak punya akses")
    }
  }
}

const signup = (req, res)=>{
  db.User.create({
    username : req.body.username,
    password : req.body.password,
    role : req.body.role,
    createdAt : new Date(),
    updatedAt : new Date()
  })
  .then(()=>{
    res.send("Register Success")
  }).catch(err=>{
    res.send("salah")
  })
}

const login = (req, res)=>{
  db.User.findOne({where : {username: req.body.username}})
  .then(row=>{
    if(crypto.secretkey(req.body.password, row.secret) == row.password){
      let token = {}
       token.token = jwt.sign({
        username:row.username,
        role:row.role,
        id:row.id
      }, process.env.TOKEN)
      res.send(token)
      // res.send("Anda Telah Masuk")
    }else{
      res.send("User Tidak Ditemukan")
    }
  })
}

module.exports = {
    findAll,
    findById,
    create,
    destroy,
    update,
    signup,
    login
}

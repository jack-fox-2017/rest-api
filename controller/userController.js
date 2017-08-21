const db = require("../models")

const findAll = (req, res)=>{
  db.User.findAll()
  .then(rows=>{
    res.send(rows)
  }).catch(err=>{
    res.send(err)
  })
}

const findById = (req, res)=>{
  db.User.findById(req.params.id)
  .then(row=>{
    res.send(row)
  }).catch(err=>{
    res.send(err)
  })
}
const create = (req, res)=>{
  db.User.create({
    username : req.body.username,
    password : req.body.password,
    createdAt : new Date(),
    updatedAt : new Date()
  })
  .then(()=>{
    res.send("Created")
  }).catch(err=>{
    res.send(err)
  })
}

const destroy = (req, res)=>{
  db.User.destroy({where : {id : req.params.id}})
  .then(()=>{
    res.send("telah dihapus")
  }).catch(err=>{
    res.send(err)
  })
}
const update = (req, res)=>{
  db.User.update({
    username : req.body.username,
    password : req.body.password,
    createdAt : new Date(),
    updatedAt : new Date()
  }, {where : {id : req.params.id}})
  .then(()=>{
    res.send("telah diupdate")
  }).catch(err=>{
    res.send(err)
  })
}

module.exports = {
    findAll,
    findById,
    create,
    destroy,
    update
}

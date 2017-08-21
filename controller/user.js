const models = require('../models')

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
  models.User.create(req.body)
  .then((user)=>{
    res.send(`Berhasil menambahkan data`)
  })
  .catch(err=>{
    res.send(err)
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
  models.User.update(req.body ,{
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

module.exports = {
  getAllData,
  addData,
  getData,
  updateData,
  deleteData
}

const express = require('express');
const router = express.Router();
// const model = require('../models');
var userController =require('../controller/userController')

// router.get('/',function(req,res){
//   res.send("sukses api")
// })

router.get('/users', userController.getall)

router.post('/signup', userController.signUp)

router.get('/users/:id',userController.getbyid)

router.delete('/users/:id',userController.deletebyid)

router.put('/users/:id',userController.update)


module.exports = router;


// router.get('/',function(req,res){
//   res.send("sukses api")
// })
//
// router.get('/users',function(req,res){
//   model.User.findAll()
//   .then(data => {
//     res.send(data)
//   })
//   .catch(err => {
//     res.send(err)
//   })
// })
//
// router.post('/users',function(req,res){
//   model.User.create({
//     username : req.body.username,
//     fullname : req.body.fullname,
//     password : req.body.password
//   })
//   .then((data) => {
//     res.send(data)
//   })
//   .catch(err => {
//     res.send(err)
//   })
// })
//
// router.get('/users/:id',function(req,res){
//   model.User.findById(req.params.id)
//   .then(data => {
//     res.send(data)
//   })
// })
//
// router.delete('/users/:id',function(req,res){
//   model.User.destroy({where:{id: req.params.id}})
//   .then(() => {
//     res.send("data deleted")
//   })
//   .catch(err => {
//     res.send(err)
//   })
// })
//
// router.put('/users/:id',function(req,res){
//   model.User.update({
//     username : req.body.username,
//     fullname : req.body.fullname,
//     password : req.body.password
//   },{
//     where:{
//       id:req.params.id
//     }
//   })
//   .then(user => {
//     res.send(user)
//   })
//   .catch(err => {
//     res.send(err)
//   })
// })
//
//
// module.exports = router;

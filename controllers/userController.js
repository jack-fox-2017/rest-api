const userModel = require('../models')

let addUser = (req, res) => {
  userModel.User.create({
    username: req.body.username,
    password: req.body.password,
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(() => {
    res.send(`Success create new user! Username : ${req.body.username}`)
  })
  .catch(err => {
    return res.status(400).send({message: err.message})
  })
}

let getAll = (req, res) => {
  userModel.User.findAll()
  .then(users => {
    res.json({users: users});
  })
}

let getById = (req, res) => {
  userModel.User.findById(req.params.id)
  .then(user => {
    res.json({user: user})
  })
}

let updateUser = (req, res) => {
  userModel.User.findById(req.params.id)
  .then(user => {
    user.update({
      username: req.body.username,
      password: req.body.password
    })
    .then(() => {
      res.send('Data has been updated')
    })
  })
}

let deleteUser = (req, res) => {
  userModel.User.destroy({
    where: {id: req.params.id}
  })
  .then(() => {
    res.send('User has been deleted')
  })
}

module.exports = {
  addUser,
  getAll,
  getById,
  updateUser,
  deleteUser
}

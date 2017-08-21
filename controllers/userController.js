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

module.exports = {
  getAll,
  getById,
  addUser
}

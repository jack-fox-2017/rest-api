const model = require ('../models')

const getAllUsers = function (req, res) {
  model.User.findAll()
  .then(data => res.json(data))
  .catch(err => res.send(err))
}

const getUserById = (req,res) => {
  model.User.findById(req.params.id)
  .then(data => res.send(data))
  .catch(err => res.send(err))
}

const createUser = (req,res) => {
  model.User.create({
    username: req.body.username,
    password: req.body.password,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(() => res.send ('data created'))
  .catch(err => res.send(err))
}

const deleteUser = (req,res) => {
  model.User.destroy({
    where: {id: req.params.id}
  })
  .then(() => res.send('delete sukses'))
  .catch(err => res.send(err))
}

const updateUser = (req,res) => {
  model.User.update(req.body, {
    where: {id: req.params.id}
  })
  .then(() => res.send ('update sukses'))
  .catch(err => res.send(err))
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser
}

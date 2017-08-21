const userModel = require('../models')

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
  getAll,
  getById,
  updateUser,
  deleteUser
}

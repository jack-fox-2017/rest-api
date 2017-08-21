const userModel = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
require('dotenv').config()

let signup = (req, res) => {
  const password = req.body.password
  bcrypt.genSalt(10, (errSalt, salt) => {
    bcrypt.hash(password, salt, (errHash, hash) => {
      req.body.password = hash;
      userModel.User.create({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role || 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .then(() => {
        res.send(`Signup Success!`)
      })
      .catch(err => {
        return res.status(400).send({message: err.message})
      })
    })
  })
};


let signin = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if(!req.body.username || !req.body.password){
    res.send('Please input username and password!')
  } else {
    userModel.User.findOne({
      where: {username: username}
    })
    .then(user => {
      bcrypt.compare(password, user.password)
      .then(bcryptResult => {
        if(bcryptResult){
          const token = jwt.sign({username: user.username, id: user.id, role: user.role}, process.env.SECRET_KEY);
          res.json({token: token})
        } else {
          res.send('Wrong Password')
        }
      })
    })
    .catch(err => {
      res.send('Wrong Username')
    })
  }
}
  
module.exports = {
  signup,
  signin
};

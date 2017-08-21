const models = require('../models');
const hash = require('../helpers/hashPassword');
var jwt = require('jsonwebtoken');
require('dotenv').config()

var signin = (req, res)=>{
  models.User.findOne({
    where:{username:req.body.username}
  })
  .then(user=>{
    console.log(process.env.PRIVATE_KEY)
    let passwordHash = hash(user.salt, req.body.password)
    if(passwordHash == user.password){
      var token = jwt.sign({ username: user.username, role: user.role }, process.env.PRIVATE_KEY);
      res.json({
        token : token
      });
    }else{
      res.send('wrong password')
    }
  })
  .catch(err=>{
    res.send('username doesn\'t exist')
  })
}

var signup = (req, res)=>{
  models.User.create({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    salt: null,
    role: 'user'
  })
  .then(()=>{
    res.send('user created')
  })
  .catch(err=>{
    res.send(err)
  })
}

module.exports = {
  signin,
  signup
}

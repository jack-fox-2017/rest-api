const models = require('../models');
const hash = require('../helpers/hashPassword');
var jwt = require('jsonwebtoken');

var signin = (req, res)=>{
  models.User.findOne({
    where:{username:req.body.username}
  })
  .then(user=>{
    let passwordHash = hash(user.salt, req.body.password)
    if(passwordHash == user.password){
      var token = jwt.sign({ username: user.username, role: user.role }, 'shhhhh');
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

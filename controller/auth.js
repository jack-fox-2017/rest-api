var models = require('../models')
var jwt = require('jsonwebtoken');
var hash = require('../helpers/hash')

var signin = (req,res) => {
  models.User.findOne({where:
    {username: req.body.username}
  })
  .then((user)=>{
    // console.log('dsadadsa');
  let hashpass = hash(user.salt,req.body.password)
    if (hashpass == user.password) {
      var token = jwt.sign({username: user.username, role: user.role}, 'sssssshhh');
      res.json({
        token : token
      })
    } else {
      res.send('wrong password')
    }
  })
  .catch(err=>{
    res.send(err)
  })
}


var signup = (req, res)=>{
  models.User.create({
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
};

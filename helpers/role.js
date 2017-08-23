const jwt = require('jsonwebtoken');

function roleAdmin(req, res, next){
  var secretkey = 'shhhhh'
  var decoded = jwt.verify(req.headers.token, secretkey);
  if(decoded.role == 'admin'){
    next()
  } else{
    res.send(`You don't have access`)
  }
}

function roleAuth(req, res, next){
  var secretkey = 'shhhhh'
  var decoded = jwt.verify(req.headers.token, secretkey);
  if(decoded.role == 'admin' || decoded.id == req.params.id){
    next()
  } else{
    res.send(`Theres not your account`)
  }
}

module.exports = {
  roleAdmin,
  roleAuth
}

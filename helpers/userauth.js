var jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = function(req,res, next){
  if(req.headers.token){
    jwt.verify(req.headers.token, process.env.SECRET_KEY, function(err, decode){
      if(decode.role == 'admin' || req.params.id == decode.id){
        next();
      } else {
        res.send('You are not admin nor authorized user')
      }
    })
  } else {
    res.send('Please login')
  }
}

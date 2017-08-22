var jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = function(req,res, next){
  if(req.headers.token){
    jwt.verify(req.headers.token, process.env.SECRET_KEY, function(err, decode){
      if(decode.role == 'admin'){
        next()
      } else {
        res.send('Only Admin can access this page')
      }
    })
  } else {
    res.send(`Please login`)
  }
}

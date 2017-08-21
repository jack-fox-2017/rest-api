var jwt = require('jsonwebtoken')
require('dotenv').config()

function authorize(req,res,next){
  var token = req.headers.token
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, ( err, decoded)=>{
      console.log(decoded);
      if (decoded.role=="admin") {
        return next()
      }else {
        res.send('not authorize')
      }
    })
  }
  else {
    res.send('not authorize')
  }


}

module.exports = {authorize};

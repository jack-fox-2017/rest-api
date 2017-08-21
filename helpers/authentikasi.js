var jwt = require('jsonwebtoken');
require('dotenv').config()

var cek = function(req,res,next){
  var decode = jwt.verify(req.headers.token,process.env.DB_PASS)
  if(decode.role === "admin" ){
    next()
  } else {
    res.send("anda bukan admin")
  }
}

module.exports = {cek};

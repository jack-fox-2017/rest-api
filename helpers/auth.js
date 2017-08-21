const jwt = require('jsonwebtoken');
require('dotenv').config()

let authorizedAdmin = (req, res, next) => {
  let token = req.headers.token
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if(err){
      res.send('Login First!')
    } else {
      if(decoded.role === 'admin'){
        next()
      } else {
        res.send('You are not administrator!');
      }
    }
  })
}

let authorizedUser = (req, res, next) => {
  let token = req.headers.token;
  let id = req.params.id;
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    // console.log(decoded);
    if(decoded.role === 'admin' || decoded.id == id){
      next()
    } else {
      res.send('You are not authorized!')
    }
  })
}

module.exports = {
  authorizedAdmin,
  authorizedUser
};

var jwt = require('jsonwebtoken');
require('dotenv').config();
const db = require('../models')

const adminOnly = (req, res, next) => {
  let tokenJWT = jwt.verify(req.headers.token, process.env.SECRET_KEY)
  console.log(tokenJWT);
    if(tokenJWT.role == 'admin'){
      next();
    }else {
      res.send(`restricted page, admin only. Pls login as admin`)
  }
};

const adminAuthUser = (req, res, next) => {
  let tokenJWT = jwt.verify(req.headers.token, process.env.SECRET_KEY);
 if(tokenJWT.role == 'admin' || tokenJWT.role == 'user') {
   if (tokenJWT.role == 'user' && tokenJWT.id != req.params.id)
     res.send(`you're not authorized`);
   else
     next();
 }
 else {
   res.send(`restricted page, pls login as admin or user`)
 }
};


module.exports = {
  adminOnly,
  adminAuthUser
}

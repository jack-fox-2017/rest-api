var jwt = require('jsonwebtoken');
require('dotenv').config();

var authAdmin = (req, res, next) => {
  var decoded = jwt.verify(req.headers.token, process.env.SECRET_KEY)
  if (decoded.role == 'admin') {
    next()
  } else {
    res.send('Anda Bukan Admin')
  }
}

module.exports = {
  authAdmin
};

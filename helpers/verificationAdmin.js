var jwt = require('jsonwebtoken')
require('dotenv').config()

function authorize(req, res, next) {
  var token = req.headers.token

  var decode = jwt.verify(token, process.env.SECRET_BOSS)
  if (decode.role == 'admin') {
    next()
  } else {
    res.send('not authorize')
  }
}
module.exports = {
  authorize
};
const crypto = require('crypto');
var randomBytes = require('random-bytes')
var jwt = require('jsonwebtoken');
require('dotenv').config()


function admin(req, res, next)
{
  // console.log(req.headers.token);
  var decoded = jwt.verify(req.headers.token, process.env.SECRETKEY);
  if(decoded.Role == 'admin')
  {
    next()
  }
  else {
    res.send('maaf anda belum terdaftar sebagai admin')
  }
  // console.log(decoded)
}

function adminUser(req, res, next)
{
  var decoded = jwt.verify(req.headers.token, process.env.SECRETKEY);
  if(decoded.Role === 'user')
  {
    next()
  }
  else if (decoded.Role === 'admin') {
    next()
  }
  else {
    res.send('maaf anda belum terdaftar sebagai user atau admin')
  }
}

function randomValueHex (len)//untuk men generate si secret key
{
    return crypto.randomBytes(Math.ceil(len/2))
        .toString('hex') // convert to hexadecimal format
        .slice(0,len);   // return required number of characters
}

function cryptoGraph(password, secret)// secret di gunakan sebagai pola untuk hashing password dari plain ke encript
{
// const secret = 'abcdefg';
    const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
    return hash
}

//console.log(randomValueHex(20));

module.exports = {
  randomValueHex,
  cryptoGraph,
  admin,
  adminUser
}

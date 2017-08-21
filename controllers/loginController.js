const db = require('../models');
const salt = require('../helpers/salt');
const encryptme = require('../helpers/encryptme');
const jwt = require('jsonwebtoken');


var signUp = (req, res) => {
  db.User.create({
    username: req.body.username,
    password: req.body.password,
    role: 'member'
  })
  .then(dataUser => res.json(dataUser))
}

var signIn = (req, res) => {
  //cek usernmae
  db.User.findAll({
    where: {
        username: req.body.username
    }
  })
  .then(dataUser => {
    // cek password
    if(dataUser.length > 0){
      let pass = encryptme(req.body.password, dataUser[0].secret)
      if(dataUser[0].password == pass){
        var makeToken = {
          username: `${dataUser[0].username}`,
          role: `${dataUser[0].role}`
        }
        var token = jwt.sign(makeToken, 'thesecret');

        res.json({pesan: 'sukses', Auth: token})
      } else {
        res.send('password salah')
      }
    } else {
      res.send('user tidak ditemukan')
    }
  })
  .catch(err => res.json(err))
}


module.exports = {
  signUp, signIn
}

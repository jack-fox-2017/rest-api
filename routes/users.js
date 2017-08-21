var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users');
var jwt = require('jsonwebtoken');
require('dotenv').config();

router.use((req, res, next) => {
  jwt.verify(req.headers.token, process.env.PRIVATE_KEY, (err, decoded)=>{
    if(decoded == undefined){
      res.send('wrong token');
    }else{
      if(decoded.role == 'admin'){
        next()
      }else{
        res.send('no access')
      }
    }
  });
})

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;

var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
require('dotenv').config()
var jwt = require('jsonwebtoken');
const generate = require('../helpers/generateSecret');
const hash = require('../helpers/hash');
const crypto = require('crypto');
/* GET users listing. */
router.put('/:id', userController.update);
router.get('/:id', userController.findById);

router.use(function (req,res,next) {
  if (req.headers.hasOwnProperty('token')) {
    jwt.verify(req.headers.token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
      if (decoded.role == 'admin') {
        next()
      } else {
        res.send('you need to be an admin')
      }
    })
  }
})

router.get('/', userController.findAll);
router.post('/', userController.create);
router.delete('/:id', userController.destroy);


module.exports = router;

// router.get('/', userController.findAll);
//
// router.post('/', userController.create);

// router.get('/:id', userController.findById); //done

// router.delete('/:id', userController.destroy);

// router.put('/:id', userController.update); //done

var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
const jwt = require('jsonwebtoken')

/* GET users listing. */

router.post('/signin', userController.signIn)
router.post('/signup', userController.signUp)

router.use((req, res, next) => {
  if (req.headers.hasOwnProperty('token')) next()
  else res.send('belom login')
})

router.get('/users/:id', userController.getById)
router.put('/users/:id', userController.updateById)

router.use((req, res, next) => {
  jwt.verify(req.headers.token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
    if (err == null)
      if (decoded.role == 'admin') next()
      else res.send('bukan admin')
    else res.send(err)
  })
})

router.get('/users/', userController.getAll)
router.post('/users/', userController.create)
router.delete('/users/:id', userController.destroyById)


module.exports = router;

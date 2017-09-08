//route js

// https://www.npmjs.com/package/jsonwebtoken
// $ npm install jsonwebtoken



// sebelum pastikan routingnya berjalan
router.post('/signin', function(req,res){
  var username = 'sayaf'
  var password = '123'

  //harusnya req query body
  if (username == 'sayaf' && password == '123') {
    // process authentication sukses, now create token
    // todo: create token

    user = db.User.find(row)
    var payload={
      username: `${usernmae}`

    }

  } else {
    res.send ('password salah')
  }

})

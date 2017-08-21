const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var user = require('./routers/user')

app.use('/users', user)


app.listen(3000, ()=>{
  console.log('Listen on you 3000');
})

const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var user = require('./routers/user')
var signup = require('./routers/signup')
var signin = require('./routers/signin')

app.use('/users', user)
app.use('/signup', signup)
app.use('/signin', signin)


app.listen(process.env.NODE_ENV ||3000)

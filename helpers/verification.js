var jwt = require('jsonwebtoken')
require('dotenv').config()

function authetic(req, res, next) {

    var token = req.headers.token
    if (token) {
        return next()
    } else {
        res.send('forbidden')
    }
}
module.exports = {
    authetic
};
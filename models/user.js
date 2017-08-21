'use strict'
var newPassword = require('../helpers/encryptPassword')
var key = require('../helpers/key')
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: DataTypes.STRING,
    email: {
      validate: {
        isEmail: true
      },
      type: DataTypes.STRING,
      allowNull: false
    },
    key: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCreate: models => {
        let newKey = key()
        models.password = newPassword(models.password, newKey)
        models.key = newKey
      }
    }
  })
  return User
}

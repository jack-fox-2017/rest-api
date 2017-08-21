'use strict';
const crypto = require('crypto')

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: {
      type: DataTypes.STRING,
      unique: {
        msg: 'salt must be unique'
      }
    },
    email: DataTypes.STRING,
    role: DataTypes.STRING
  });

  User.beforeCreate(user => {
    user.password = crypto.createHmac('sha256', user.salt).update(user.password).digest('hex')
  })

  return User;
};

'use strict';

const crypto = require("crypto");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    secret: {
      type: DataTypes.STRING,
      unique: {
        msg: "security code sudah di gunakan"
      }
    }
  }, {
    hooks:{
      beforeCreate: function(User) {
        var hash = crypto.createHmac('sha256', `${User.secret}`)
                           .update(User.password)
                           .digest('hex');
        User.password = hash;
      }
    }
  });
  return User;
};

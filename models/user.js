'use strict';

const random = require('../helpers/hash')

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function (models) {
        let salt = random.randomStr(8);
        let password = models.password
        models.password = random.hashish(password, salt);
        models.salt = salt;
      }
    }
  });
  return User;
};
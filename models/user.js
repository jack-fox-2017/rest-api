'use strict';
// var secret = require ('../helpers/secretKey')
const crypPass = require ('../helpers/encrypt')

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    key: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (models) => {
        let tempPass = models.password;
        models.password = crypPass (tempPass, models.key);
      },
      beforeUpdate: (models) => {
        let tempPass = models.password;
        models.password = crypPass (tempPass, models.key);
      }
    }
  });
  return User;
};

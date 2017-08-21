'use strict';
const salt = require('../helpers/salt');
const encryptme = require('../helpers/encryptme');
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    secret: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: models => {
        let garamin =  salt().toString();
        let pass = encryptme(models.password, garamin)
        models.password = pass;
        models.secret = garamin
      },
      beforeUpdate: models => {
        let garamin =  salt().toString();
        let pass = encryptme(models.password, garamin)
        models.password = pass;
        models.secret = garamin
      }
    }
  });
  return User;
};

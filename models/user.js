'use strict';
const encrypt = require('../helpers/encrypt')

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    secret: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: model => {
        model.password = encrypt(model.secret, model.password)
      },
      beforeUpdate: model => {
        model.password = encrypt(model.secret, model.password)
      }
    }
  });



  return User;
};

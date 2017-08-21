'use strict';
const crypto = require("../helpers/crypto")
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    secret: DataTypes.STRING
  },{
    hooks: {
      beforeCreate : (model)=>{
        let random = crypto.random(8)
        model.password = crypto.secretkey(model.password, random)
        model.secret = random
      },
      beforeUpdate : (model)=>{
        let random = crypto.random(8)
        model.password = crypto.secretkey(model.password, random)
        model.secret = random
      }
    }
  });
  return User;
};

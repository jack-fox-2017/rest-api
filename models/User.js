'use strict';
var salted = require('../helpers/salt')

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email:
    {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty: true,
        isEmail: true
      }
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    role: DataTypes.STRING
  },{
    hooks:{
      beforeCreate: (models)=>{
        let secret = salted.random(8);
        let password = models.password
        models.password = salted.createSalt(password, secret);
        models.salt = secret;
      }
    }
  });
  return User;
};

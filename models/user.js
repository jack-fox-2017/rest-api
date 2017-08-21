'use strict';

const hashPassword = require('../helpers/hashPassword');
const saltGenerate = require('../helpers/saltGenerator');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    role: DataTypes.STRING
  });

  User.beforeCreate((user)=>{
    let salt = saltGenerate();
    let hash = hashPassword(salt, user.password);
    user.salt = salt;
    user.password = hash;
  })

  return User;
};

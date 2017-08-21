'use strict';

const crypt = require('../helpers/crypt.js');
const keygen = require('../helpers/keygen.js');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true
      }
    },
    username: {
      type : DataTypes.STRING,
      unique: true,
      validate : {
        notEmpty : true
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true
      }
    },
    salt: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true
      }
    },
    role: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true
      }
    },
  }, {
    hooks : {
      beforeCreate : user => {
        let salt = keygen();
        user.password = crypt(user.password, salt);
        user.salt = salt;
      }
    }
  });
  return User;
};
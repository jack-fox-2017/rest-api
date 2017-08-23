const helper = require('../helper/helper')

'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    Role: DataTypes.STRING,
    secretkey: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user) => {
        // let temp = user.password
        let salt = helper.randomValueHex(12);
        user.password = helper.cryptoGraph(user.password, salt)
        user.secretkey = salt
      }
      ,beforeUpdate: (user) => {
        // let temp = user.password
        let salt = helper.randomValueHex(12);
        user.password = helper.cryptoGraph(user.password, salt)
        user.secretkey = salt
      }
    }
  }
);
  return User;
};

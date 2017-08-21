'use strict';
const genSalt = require('../helpers/salt');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    fullname: DataTypes.STRING,
    password: DataTypes.STRING
  })
  // ,{
  //   hooks: {
  //     beforeCreate : (models) => {
  //       let salt = genSalt.genRandomString(8);
  //       let password = models.password
  //       models.password = genSalt.createHash(password,salt);
  //       models.salt = salt
  //     }
  //   }
  // })
  return User
}

'use strict';


const generate = require('../helpers/generateSecret');
const hash = require('../helpers/hash');
const crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    secret: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function(models) {
        const secret = generate();
        const hashData = hash(secret, models.password);
        models.password=hashData;
        models.secret = secret;
      },
      beforeUpdate: function(models) {
        const secret = generate();
        const hashData = hash(secret, models.password);
        models.password=hashData;
        models.secret = secret;
      }
    }
  });
  return User;
};

// secret: {
//     type: DataTypes.STRING,
//     validate: {
//       isUnique: (value, done) => {
//         User.findAndCountAll({
//           where: {secret:value}
//         })
//         .then(function (secret) {
//           if(secret.count>0) {
//             done(new Error('secret already in use'))
//           }
//           done();
//         })
//       }
//     }
//   }

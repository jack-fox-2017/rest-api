'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      name: 'Ahmad Aidil',
      username: 'ahmadaidil',
      password: '500456a02547065625683507b16d8d0ba32943f0f6bcb1db29d0392628e633bd',
      salt: 'h4bj11gh',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

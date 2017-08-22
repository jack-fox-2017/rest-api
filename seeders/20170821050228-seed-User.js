'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: 'achim',
      password: '69719dc52deb4afa2dee43aa5bb43d7110c5a09d5e4e76798b842b7c05d4',
      secret: 'wk2cc0gu',
      role: 'admin'
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

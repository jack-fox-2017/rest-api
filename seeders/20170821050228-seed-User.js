'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: 'user1',
      password: 'user1',
      secret: '',
      role: 'admin'
    },{
      username: 'user2',
      password: 'user2',
      secret: '',
      role: 'member'
    },{
      username: 'user3',
      password: 'user3',
      secret: '',
      role: 'member'
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

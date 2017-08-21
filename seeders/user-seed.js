'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      name      : 'a',
      username  : 'user1',
      password  : 'pass1',
      role      : 'user',
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      name      : 'b',
      username  : 'user2',
      password  : 'pass2',
      role      : 'user',
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      name      : 'c',
      username  : 'user3',
      password  : 'pass3',
      role      : 'user',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {})
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

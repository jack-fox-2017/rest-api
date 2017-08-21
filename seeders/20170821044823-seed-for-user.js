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
      username: 'node',
      password: 'node123',
      createdAt: new Date (),
      updatedAt: new Date ()
    }, {
      username: 'express',
      password: 'express123',
      createdAt: new Date (),
      updatedAt: new Date ()
    }, {
      username: 'vue',
      password: 'vue123',
      createdAt: new Date (),
      updatedAt: new Date ()
    }, {
      username: 'react',
      password: 'react123',
      createdAt: new Date (),
      updatedAt: new Date ()
    }, {
      username: 'angular',
      password: 'angular123',
      createdAt: new Date (),
      updatedAt: new Date ()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};

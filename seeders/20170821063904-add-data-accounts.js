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
    return queryInterface.bulkInsert('Accounts', [{
      name: 'Ahmad Nasikin',
      username: 'ahmad',
      pass: 'sdr3tfwe3',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Ari Dwi',
      username: 'ari',
      pass: 'fsdf5g',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Anto',
      username: 'anto',
      pass: 'regrtgh67',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
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

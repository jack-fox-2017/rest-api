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
      username: 'admin',
      password: 'c228b285703ca0804b2625e0c795560d6f59e6b06887d0aac8c470f307dbb230',
      email: 'admin@anu.co.id',
      secret: '7reihzu0',
      role: 'admin',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      username: 'member',
      password: '53bf24685bc88f42455db711399823fbc7a431790332c6f2e9ee0357cc66bfbc',
      email: 'member@anu.co.id',
      secret: 'i63uhfdv',
      role: 'member',
      createdAt : new Date(),
      updatedAt : new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface,bulkDelete('Users',null,{})
  }
};

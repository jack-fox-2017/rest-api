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
      name: 'gani',
      email: 'rusli.gani88@gmail.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Lisa',
      email: 'lisa.kusumawati@gmail.com',
      password: '12345',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Agna',
      email: 'agna.sari@hotmail.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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

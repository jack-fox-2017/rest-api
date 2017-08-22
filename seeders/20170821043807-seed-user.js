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
      username: 'gani',
      password: '1234',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Lisa',
      email: 'lisa.kusumawati@gmail.com',
      username: 'lisa',
      password: '12345',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Agna',
      email: 'agna.sari@hotmail.com',
      username: 'agna',
      password: '123456',
      role: 'user',
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

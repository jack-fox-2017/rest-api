'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */

      return queryInterface.bulkInsert('Users', [{
        username: 'gananggww',
        password: "apasi123",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        username: 'antobarek',
        password: "qwerty",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        username: "hariantara",
        password: "29121993",
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
  }
};

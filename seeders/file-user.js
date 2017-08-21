'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      name: "Ani",
      email: "ani@mail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
     name:"Ajis",
     email: "ajis@mail.com",
     createdAt: new Date(),
     updatedAt: new Date()
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
};

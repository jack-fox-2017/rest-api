'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      name: "michelle dward",
      email: "michelle@mail.com",
      username: "michelle",
      password: "2c9de6badd8170e6ce6cfbbeff3619f7f32445713cb635d0aeb95c6cbf924d26",
      role: "admin",
      salt: "b5072ce5",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Julehani",
      email: "jul@mail.com",
      username: "juleha",
      password: "c445849c1a04931ec88ce84fafbc401dc4f2ca08d411c908508a003b950ed74a",
      role: "user",
      salt: "8cf6b6f5",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
};

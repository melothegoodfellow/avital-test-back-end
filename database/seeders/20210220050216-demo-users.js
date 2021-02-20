'use strict';

const { password } = require("../../constants/database");
const { passwordHash } = require("../../library/password-encryption");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      username: 'john',
      password: passwordHash('12345678'),
      photo: 'photo1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'joe',
      password: passwordHash('12345678'),
      photo: 'photo2.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};

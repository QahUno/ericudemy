'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        email: 'abc1@gmail.com',
        username: 'John Doe 1',
        password: '123'
      },
      {
        email: 'abc2@gmail.com',
        username: 'John Doe 2',
        password: '123'
      },
      {
        email: 'abc3@gmail.com',
        username: 'John Doe 3',
        password: '123'
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};

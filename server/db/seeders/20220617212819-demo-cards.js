'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Cards', [{
        title: 'PEPPERONI',
        text: 'blaladaedwdalkwd ld lqwdqdqqdqlkmqkdqldqmdq',
        price: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        title: 'MARGARITA',
        text: 'blaladaedwdalkwd ld lqwdqdqqdqlkmqkdqldqmdq',
        price: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        title: 'BANANZA',
        text: 'blaladaedwdalkwd ld lqwdqdqqdqlkmqkdqldqmdq',
        price: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Cards', null, {});
  }
};

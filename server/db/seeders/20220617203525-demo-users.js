'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [{
             firstName: "Jack",
             lastName: "Jiro",
             email: "123@124.com",
             password: 123,
              createdAt: new Date(),
              updatedAt: new Date()
             },{
             firstName: "Bono",
             lastName: "Jenkins",
             email: "123@125.com",
             password: 123,
             createdAt: new Date(),
             updatedAt: new Date()
             }, {
             firstName: "Ginto",
             lastName: "Hokoto",
             email: "123@133.com",
             password: 123,
             createdAt: new Date(),
             updatedAt: new Date()
            },
            ], {});
},
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

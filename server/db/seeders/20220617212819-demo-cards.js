module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [{
      title: 'PEPPERONI',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            + 'Mauris vel ultrices turpis. Vivamus tellus mauris, dictum '
            + 'dignissim ligula at, tristique fermentum ex.',
      price: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'MARGARITA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                  + 'Mauris vel ultrices turpis. Vivamus tellus mauris, dictum '
                  + 'dignissim ligula at, tristique fermentum ex.',
      price: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'BANANZA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                  + 'Mauris vel ultrices turpis. Vivamus tellus mauris, dictum '
                  + 'dignissim ligula at, tristique fermentum ex.',
      price: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'NAPOLETANA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                  + 'Mauris vel ultrices turpis. Vivamus tellus mauris, dictum '
                  + 'dignissim ligula at, tristique fermentum ex.',
      price: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'TONDA ROMANA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                  + 'Mauris vel ultrices turpis. Vivamus tellus mauris, dictum '
                  + 'dignissim ligula at, tristique fermentum ex.',
      price: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'FRITTA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                  + 'Mauris vel ultrices turpis. Vivamus tellus mauris, dictum '
                  + 'dignissim ligula at, tristique fermentum ex.',
      price: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'SICILIANA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                  + 'Mauris vel ultrices turpis. Vivamus tellus mauris, dictum '
                  + 'dignissim ligula at, tristique fermentum ex.',
      price: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};

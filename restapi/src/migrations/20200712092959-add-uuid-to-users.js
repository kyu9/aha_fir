'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'users',
        'uuid',{
          allowNull: false,
          unique: true,
          type: 'BINARY(16)',
          after: 'id'
        },
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
        'users',
        'uuid',
    )
  }
};

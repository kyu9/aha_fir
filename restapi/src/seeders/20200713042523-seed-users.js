'use strict';

import moment from 'moment'

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert(
          'users',
          [
            {
              email: 'tests@tests.com',
              password: 'test1234',
              createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
              updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
            },
            {
              email: 'test1@tests.com',
              password: 'test1234',
              createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
              updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
            },
            {
              email: 'test2@tests.com',
              password: 'test1234',
              createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
              updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
            }
          ],{})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usres', null, {})
  }
};

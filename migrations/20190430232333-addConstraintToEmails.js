'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Users', ['email'], {
      type: 'unique',
      name: 'custom_unique_constraint_email'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      'Users',
      'email'
    )
  }
};

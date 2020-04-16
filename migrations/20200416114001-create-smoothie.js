'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Smoothies', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ingredients: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('In Stock', 'Out of Stock')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Smoothies');
  }
};
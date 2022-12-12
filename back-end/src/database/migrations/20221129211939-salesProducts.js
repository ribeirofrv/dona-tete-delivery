'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {
      sales_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'sales',
          key: 'id',
        }
      },
      product_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'products',
          key: 'id',
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  }
};
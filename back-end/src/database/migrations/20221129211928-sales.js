'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,        
       },
       userId: {
        field: 'user_id',
        foreignKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        } 
       },
       sellerId: {
        field: 'seller_id',
        foreignKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        } 
       },
       totalPrice: {
        field: 'total_price',
        type: Sequelize.DECIMAL(9,2),
        allowNull: false,
       },
       deliveryAddress: {
        field: 'delivery_address',
        type: Sequelize.STRING(100),
        allowNull: false,
       },
       deliveryNumber: {
        field: 'delivery_number',
        type: Sequelize.STRING(50),
        allowNull: false,
       },
       saleDate: {
        field: 'sale_date',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
       },
       status: {
        type: Sequelize.STRING(50),
        allowNull: false,
       }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }


};

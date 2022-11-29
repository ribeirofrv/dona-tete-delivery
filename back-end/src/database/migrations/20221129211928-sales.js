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
       user_id: {
        field: 'user_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        } 
       },
       seller_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        } 
       },
       total_price: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: false,
       },
       delivery_address: {
        type: Sequelize.STRING(100),
        allowNull: false,
       },
       delivery_number: {
        type: Sequelize.STRING(50),
        allowNull: false,
       },
       sale_date: {
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

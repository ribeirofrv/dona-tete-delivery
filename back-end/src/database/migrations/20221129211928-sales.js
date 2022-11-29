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
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        } 
       },
       seller_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        } 
       },
       total_price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
       },
       delivery_address: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       delivery_number: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       sale_date: {
        type: Sequelize.DATETIME,
        allowNull: false
       },
       status: {
        type: Sequelize.STRING,
        allowNull: false,
       }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }


};

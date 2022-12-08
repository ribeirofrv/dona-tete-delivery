'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        id: 1,
        user_id: 1,
        seller_id: 2,
        total_price: 10.9 ,
        delivery_address: 'Rua 0', 
        delivery_number: '002',
        sale_date: '2022-12-07',
        status: 'pendente', 
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 2,
        total_price: 20.9 ,
        delivery_address: 'Rua x', 
        delivery_number: '003',
        sale_date: '2022-12-07',
        status: 'efetuado', 
      },
      {
        id: 3,
        user_id: 1,
        seller_id: 2,
        total_price: 9 ,
        delivery_address: 'Rua y', 
        delivery_number: '004',
        sale_date: '2022-12-07',
        status: 'pendente', 
      },         
    ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};

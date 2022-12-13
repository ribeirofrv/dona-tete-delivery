const { Sale, Product, SalesProducts } = require('../../database/models');

const findSalesBySellerId = async (sellerId) => {
  const sales = await Sale.findAll({ where: { sellerId } });
  return sales;
};

const findSaleById = async (id) => {
  console.log('service', id);
  const sale = await Sale.findByPk(id,
    { 
    include: [ 
      { model: Product, as: 'products', through: SalesProducts },
    ], 
    });
  console.log(sale);
  return sale;
};

const updateSaleStatus = async (id, body) => {
  await Sale.update(body, { where: { id } });
};

module.exports = {
  findSalesBySellerId,
  findSaleById,
  updateSaleStatus,
};
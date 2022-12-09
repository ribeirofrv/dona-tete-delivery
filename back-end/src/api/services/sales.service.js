const { Sale } = require('../../database/models');

const findSalesBySellerId = async (sellerId) => {
  const sales = await Sale.findAll({ where: { sellerId } });
  return sales;
};

module.exports = {
  findSalesBySellerId,
};
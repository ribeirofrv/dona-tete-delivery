const { User, Sale, Product, SalesProducts } = require('../../database/models');

const findAllSaller = async () => {
  const sales = await Sale.findAll();
  return sales;
};

const findSalesBySellerId = async (sellerId) => {
  const sales = await Sale.findAll({ where: { sellerId } });
  return sales;
};

const findSaleById = async (id) => {
  console.log('service', id);
  const sale = await Sale.findByPk(id, {
    include: [
      { model: Product, as: 'products', through: SalesProducts },
      { model: User, as: 'seller', attributes: ['name'] },
    ],
  });
  console.log(sale);
  return sale;
};

const updateSaleStatus = async (id, body) => {
  await Sale.update(body, { where: { id } });
};

const createSale = async (order) => {
  const sale = await Sale.create(order);
  
  if (sale) {
    await Promise.all(
      order.products.map(async ({ productId, quantity }) => {
        SalesProducts.create({
          saleId: sale.id,
          productId,
          quantity,
        });
      }),
    );
  }
  return sale;
};

module.exports = {
  findAllSaller,
  findSalesBySellerId,
  findSaleById,
  updateSaleStatus,
  createSale,
};

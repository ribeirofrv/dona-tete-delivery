const { User, Sale, Product, SalesProducts } = require('../../database/models');

const findAllSaller = async () => {
  const sales = await Sale.findAll();
  return sales;
};

const findSalesBySellerId = async (sellerId) => {
  const sales = await Sale.findAll({ where: { sellerId } });
  return sales;
};

const findSalesByUserId = async (userId) => {
  const sales = await Sale.findAll({ where: { userId } });
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

const relateProducts = async ({ products, saleId }) => {
  console.log(
    '🚀 ~ file: sales.service.js:31 ~ relateProducts ~ products',
    products,
  );
  const promises = products.map(({ productId, quantity }) =>
    SalesProducts.create({
      saleId,
      productId,
      quantity,
    }));

  await Promise.all(promises);
};

const createSale = async (saleInfo) => {
  const {
    userId,
    products,
    sellerId,
    deliveryAddress,
    deliveryNumber,
    totalPrice,
    status,
  } = saleInfo;

  const order = { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status };
  console.log('🚀 ~ file: sales.service.js:55 ~ createSale ~ order', order);

  const sale = await Sale.create(order);
  if (sale) {
    await relateProducts({ products, saleId: sale.id });
  }
  return sale;
};

module.exports = {
  findAllSaller,
  findSalesBySellerId,
  findSaleById,
  updateSaleStatus,
  createSale,
  findSalesByUserId,
};

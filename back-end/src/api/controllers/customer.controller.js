const service = require('../services/products.service');

const getAllProducts = async (_request, response, _next) => {
  const allProducts = await service.getAllProducts();
  return response.status(200).json(allProducts);
};

module.exports = { getAllProducts };

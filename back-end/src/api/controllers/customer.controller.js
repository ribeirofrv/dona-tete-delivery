const service = require('../services/products.service');
const userService = require('../services/users.service');

const getAllProducts = async (_request, response, _next) => {
  const allProducts = await service.getAllProducts();
  return response.status(200).json(allProducts);
};

const getAllSeller = async (_request, response, _next) => {
  const allSeller = await userService.findAllSeller();
  return response.status(200).json(allSeller);
};

module.exports = { getAllProducts, getAllSeller };

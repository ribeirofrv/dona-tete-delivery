const productsService = require('../services/products.service');
const salesService = require('../services/sales.service');

const getAllProducts = async (_request, response, _next) => {
  const allProducts = await productsService.getAllProducts();
  return response.status(200).json(allProducts);
};

const getSaleById = async (request, response, next) => {
  try {
    const { id } = request.params;
    const sale = await salesService.findSaleById(id);
    return response.status(200).json(sale);
  } catch (error) {
    next(error);
  }
};

const updateSaleStatus = async (request, response, next) => {
  try {
    const { body } = request;
    const { id } = request.params;
    console.log('controller', body);
    await salesService.updateSaleStatus(id, body);
    return response.status(200).json(body.status);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllProducts, getSaleById, updateSaleStatus };

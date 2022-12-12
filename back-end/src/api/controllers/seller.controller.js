const service = require('../services/sales.service');

const getSalesBySellerId = async (request, response, next) => {
  try {
    const { id } = request.user;
    const allSales = await service.findSalesBySellerId(id);
    return response.status(200).json(allSales);
  } catch (error) {
    next(error);
  }
};

const getSaleById = async (request, response, next) => {
  try {
    const { id } = request.params;
    console.log('controller', id);
    const sale = await service.findSaleById(id);
    return response.status(200).json(sale);
  } catch (error) {
    next(error);
  }
};

module.exports = { getSalesBySellerId, getSaleById };

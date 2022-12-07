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

module.exports = { getSalesBySellerId };

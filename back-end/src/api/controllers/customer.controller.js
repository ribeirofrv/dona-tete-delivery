const productsService = require('../services/products.service');
const salesService = require('../services/sales.service');
const userService = require('../services/users.service');

const getAllProducts = async (_request, response, next) => {
  try {
    const allProducts = await productsService.getAllProducts();
    return response.status(200).json(allProducts);
  } catch (error) {
    next(error);
  }
};

const getAllSeller = async (_request, response, next) => {
  try {
    const allSeller = await userService.findAllSeller();
    return response.status(200).json(allSeller);
  } catch (error) {
    next(error);
  }
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

const createSale = async (request, response, next) => {
  try {
    const { body } = request;
    console.log('👻 ~ file: customer.controller.js:48 ~ createSale ~ body', body);
    const { id } = request.user
    // const sellerId = await userService.findUserByRole('seller');

    const order = {
      userId: id,
      sellerId: body.sellerId,
      totalPrice: body.totalPrice,
      deliveryAddress: body.deliveryAddress,
      deliveryNumber: body.deliveryNumber,
      products: body.products,
      status: body.status,
    };

    const orderCreated = await salesService.createSale(order);

    return response.status(201).json(orderCreated);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllProducts, getSaleById, updateSaleStatus, createSale, getAllSeller };

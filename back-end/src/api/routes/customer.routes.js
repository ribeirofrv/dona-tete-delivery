const { Router } = require('express');

const customerController = require('../controllers/customer.controller');
const { authorizationToken } = require('../middlewares/authToken');

const customerRoute = Router();

customerRoute.get('/orders/:id', authorizationToken, customerController.getSaleById);
customerRoute.get('/products', customerController.getAllProducts);
customerRoute.patch('/orders/:id', authorizationToken, customerController.updateSaleStatus);

module.exports = customerRoute;
